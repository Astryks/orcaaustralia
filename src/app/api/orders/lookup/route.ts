import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { clientIp, rateLimit, rateLimitResponse } from "@/lib/rateLimit";

const bodySchema = z.object({
  email: z.string().email(),
  orderNumber: z.string().trim().min(4).max(20),
});

export async function POST(request: Request) {
  const ip = clientIp(request);
  const limited = rateLimit(`orders-lookup:${ip}`, 10, 60_000);
  if (!limited.ok) return rateLimitResponse(limited.retryAfterSec);

  const json = await request.json();
  const parsed = bodySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: "Please enter a valid email and order number." }, { status: 400 });
  }

  const { email, orderNumber } = parsed.data;
  const normalizedOrderNumber = orderNumber.replace(/^#/, "").trim().toUpperCase();

  // Fetch candidate orders for this email, then return ONLY the single match
  // whose id last-8 equals the provided order number (never the full inbox).
  const orders = await prisma.order.findMany({
    where: { customerEmail: { equals: email, mode: "insensitive" } },
    include: { items: true },
    orderBy: { createdAt: "desc" },
    take: 50,
  });

  const order = orders.find(
    (o) => o.id.slice(-8).toUpperCase() === normalizedOrderNumber
  );

  if (!order) {
    return NextResponse.json(
      { error: "We couldn't find an order matching that email and order number." },
      { status: 404 }
    );
  }

  return NextResponse.json({
    orders: [
      {
        id: order.id,
        orderNumber: order.id.slice(-8).toUpperCase(),
        status: order.status,
        totalCents: order.totalCents,
        createdAt: order.createdAt,
        items: order.items.map((item) => ({
          productName: item.productName,
          size: item.size,
          quantity: item.quantity,
          unitPriceCents: item.unitPriceCents,
        })),
      },
    ],
  });
}
