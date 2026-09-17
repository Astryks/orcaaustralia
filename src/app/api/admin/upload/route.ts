import { NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { getAdminSession } from "@/lib/session";

const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/avif"]);
const MAX_SIZE_BYTES = 8 * 1024 * 1024;

const EXT_BY_MIME: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/avif": "avif",
};

/** Sniff image MIME from magic bytes — do not trust client Content-Type alone. */
function sniffImageMime(bytes: Uint8Array | Buffer): string | null {
  if (bytes.length >= 3 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) {
    return "image/jpeg";
  }
  if (
    bytes.length >= 8 &&
    bytes[0] === 0x89 &&
    bytes[1] === 0x50 &&
    bytes[2] === 0x4e &&
    bytes[3] === 0x47 &&
    bytes[4] === 0x0d &&
    bytes[5] === 0x0a &&
    bytes[6] === 0x1a &&
    bytes[7] === 0x0a
  ) {
    return "image/png";
  }
  if (
    bytes.length >= 12 &&
    bytes[0] === 0x52 &&
    bytes[1] === 0x49 &&
    bytes[2] === 0x46 &&
    bytes[3] === 0x46 &&
    bytes[8] === 0x57 &&
    bytes[9] === 0x45 &&
    bytes[10] === 0x42 &&
    bytes[11] === 0x50
  ) {
    return "image/webp";
  }
  // ISO BMFF (AVIF): ....ftypavif / ....ftypavis
  if (bytes.length >= 12) {
    const box = String.fromCharCode(bytes[4]!, bytes[5]!, bytes[6]!, bytes[7]!);
    if (box === "ftyp") {
      const brand = String.fromCharCode(bytes[8]!, bytes[9]!, bytes[10]!, bytes[11]!);
      if (brand === "avif" || brand === "avis") return "image/avif";
    }
  }
  return null;
}

export async function POST(request: Request) {
  const session = await getAdminSession();
  if (!session.isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  if (file.size > MAX_SIZE_BYTES) {
    return NextResponse.json({ error: "File too large (max 8MB)" }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const sniffed = sniffImageMime(buffer);
  if (!sniffed || !ALLOWED_TYPES.has(sniffed)) {
    return NextResponse.json({ error: "Unsupported file type" }, { status: 400 });
  }

  // Optional: if client sent a type, it must agree with sniffed bytes
  if (file.type && ALLOWED_TYPES.has(file.type) && file.type !== sniffed) {
    return NextResponse.json({ error: "Unsupported file type" }, { status: 400 });
  }

  const extension = EXT_BY_MIME[sniffed] ?? "bin";
  const pathname = `products/${crypto.randomUUID()}.${extension}`;

  try {
    const blob = await put(pathname, buffer, {
      access: "public",
      contentType: sniffed,
    });
    return NextResponse.json({ url: blob.url });
  } catch (err) {
    console.error("Vercel Blob upload failed:", err);
    return NextResponse.json(
      { error: "Photo storage is not configured correctly. Please try again later." },
      { status: 502 }
    );
  }
}
