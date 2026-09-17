import { cookies } from "next/headers";
import { getIronSession, type SessionOptions } from "iron-session";

export interface CustomerSessionData {
  email?: string;
}

function requireCustomerSessionSecret(): string {
  const secret = process.env.CUSTOMER_SESSION_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error(
      "CUSTOMER_SESSION_SECRET must be set to a random string of at least 32 characters (no admin/empty fallback)"
    );
  }
  return secret;
}

export function getCustomerSessionOptions(): SessionOptions {
  return {
    password: requireCustomerSessionSecret(),
    cookieName: "orca_customer_session",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    },
  };
}

/** @deprecated Use getCustomerSessionOptions() — kept for callers that need a live options object. */
export const customerSessionOptions: SessionOptions = {
  get password() {
    return requireCustomerSessionSecret();
  },
  cookieName: "orca_customer_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  },
};

export async function getCustomerSession() {
  const cookieStore = await cookies();
  return getIronSession<CustomerSessionData>(cookieStore, getCustomerSessionOptions());
}
