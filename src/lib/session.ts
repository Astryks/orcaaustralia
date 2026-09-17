import { cookies } from "next/headers";
import { getIronSession, type SessionOptions } from "iron-session";

export interface AdminSessionData {
  isAdmin?: boolean;
}

function requireAdminSessionSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error(
      "ADMIN_SESSION_SECRET must be set to a random string of at least 32 characters (no empty fallback)"
    );
  }
  return secret;
}

export function getAdminSessionOptions(): SessionOptions {
  return {
    password: requireAdminSessionSecret(),
    cookieName: "orca_admin_session",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    },
  };
}

/** @deprecated Use getAdminSessionOptions() — kept for callers that need a live options object. */
export const sessionOptions: SessionOptions = {
  get password() {
    return requireAdminSessionSecret();
  },
  cookieName: "orca_admin_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  },
};

export async function getAdminSession() {
  const cookieStore = await cookies();
  return getIronSession<AdminSessionData>(cookieStore, getAdminSessionOptions());
}

export async function requireAdmin() {
  const session = await getAdminSession();
  if (!session.isAdmin) {
    throw new Error("Unauthorized");
  }
}
