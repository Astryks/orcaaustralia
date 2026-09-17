import { prisma } from "@/lib/prisma";

export type HeldItem = { variantId: string; quantity: number };

/** Atomically decrement stock if available. Returns false when not enough stock. */
export async function holdStock(variantId: string, quantity: number): Promise<boolean> {
  const rows = await prisma.$queryRaw<{ id: string }[]>`
    UPDATE "Variant"
    SET stock = stock - ${quantity}
    WHERE id = ${variantId} AND stock >= ${quantity}
    RETURNING id
  `;
  return rows.length > 0;
}

/** Restore previously held stock (checkout expired / session create failed). */
export async function releaseStock(variantId: string, quantity: number): Promise<void> {
  await prisma.$executeRaw`
    UPDATE "Variant"
    SET stock = stock + ${quantity}
    WHERE id = ${variantId}
  `;
}

export async function holdAllOrRollback(items: HeldItem[]): Promise<{ ok: true } | { ok: false; failedVariantId: string }> {
  const held: HeldItem[] = [];
  for (const item of items) {
    const ok = await holdStock(item.variantId, item.quantity);
    if (!ok) {
      await releaseAll(held);
      return { ok: false, failedVariantId: item.variantId };
    }
    held.push(item);
  }
  return { ok: true };
}

export async function releaseAll(items: HeldItem[]): Promise<void> {
  for (const item of items) {
    try {
      await releaseStock(item.variantId, item.quantity);
    } catch (err) {
      console.error(`Failed to release stock for variant ${item.variantId}:`, err);
    }
  }
}

/** Compact Stripe metadata encoding: "id:qty,id:qty" */
export function encodeHeldItems(items: HeldItem[]): string {
  return items.map((i) => `${i.variantId}:${i.quantity}`).join(",");
}

export function decodeHeldItems(raw: string | undefined | null): HeldItem[] {
  if (!raw) return [];
  return raw
    .split(",")
    .map((part) => {
      const [variantId, qtyStr] = part.split(":");
      const quantity = Number(qtyStr);
      if (!variantId || !Number.isInteger(quantity) || quantity < 1) return null;
      return { variantId, quantity };
    })
    .filter((x): x is HeldItem => x !== null);
}

/** Final sale path when soft-hold was skipped (legacy sessions). Fails loudly if 0 rows. */
export async function atomicDecrementOrThrow(variantId: string, quantity: number): Promise<void> {
  const rows = await prisma.$queryRaw<{ id: string }[]>`
    UPDATE "Variant"
    SET stock = stock - ${quantity}
    WHERE id = ${variantId} AND stock >= ${quantity}
    RETURNING id
  `;
  if (rows.length === 0) {
    throw new Error(`Insufficient stock for variant ${variantId} (qty ${quantity})`);
  }
}
