import { redirect } from "next/navigation";
import { createHash, timingSafeEqual } from "crypto";
import { headers } from "next/headers";
import { getAdminSession } from "@/lib/session";
import { rateLimit } from "@/lib/rateLimit";

function hashPassword(value: string) {
  return createHash("sha256").update(value, "utf8").digest();
}

/** Compare passwords via SHA-256 digests so length differences cannot leak via timing. */
function passwordsMatch(a: string, b: string) {
  const hashA = hashPassword(a);
  const hashB = hashPassword(b);
  return timingSafeEqual(hashA, hashB);
}

async function login(formData: FormData) {
  "use server";

  const hdrs = await headers();
  const ip =
    hdrs.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    hdrs.get("x-real-ip")?.trim() ||
    "unknown";
  const limited = rateLimit(`admin-login:${ip}`, 10, 60_000);
  if (!limited.ok) {
    redirect("/admin/login?error=1");
  }

  const password = String(formData.get("password") ?? "");
  const expected = process.env.ADMIN_PASSWORD ?? "";

  // Always hash-compare (even if ADMIN_PASSWORD is unset) so timing and the
  // error redirect stay uniform — never reveal "misconfigured" vs "wrong".
  const match = passwordsMatch(password, expected);
  if (!expected || !match) {
    redirect("/admin/login?error=1");
  }

  const session = await getAdminSession();
  session.isAdmin = true;
  await session.save();
  redirect("/admin");
}

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <form
        action={login}
        className="w-full max-w-sm rounded-lg border border-black/10 bg-white p-8 shadow-sm"
      >
        <h1 className="text-xl font-semibold text-navy">Orca Australia Admin</h1>
        <p className="mt-1 text-sm text-navy/60">Sign in to manage the store.</p>

        <label className="mt-6 block text-sm font-medium text-navy" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoFocus
          className="mt-2 w-full rounded border border-black/20 px-3 py-2 text-sm"
        />

        {error && (
          <p className="mt-3 text-sm text-red-600">Incorrect password. Try again.</p>
        )}

        <button
          type="submit"
          className="mt-6 w-full rounded-full bg-navy py-3 text-sm font-semibold text-white transition hover:bg-navy-dark"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
