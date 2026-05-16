import { createHmac } from "crypto";
import { cookies } from "next/headers";

export const COOKIE_NAME = "admin_auth";
const PAYLOAD = "admin-session-v1";
const MAX_AGE = 60 * 60 * 24; // 24h

function secret(): string {
  return process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET || "dev-secret";
}

export function generateToken(): string {
  return createHmac("sha256", secret()).update(PAYLOAD).digest("hex");
}

function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let d = 0;
  for (let i = 0; i < a.length; i++) d |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return d === 0;
}

export function verifyToken(token: string): boolean {
  return safeEqual(token, generateToken());
}

export async function getAdminSession(): Promise<boolean> {
  try {
    const store = await cookies();
    const token = store.get(COOKIE_NAME)?.value;
    return token ? verifyToken(token) : false;
  } catch {
    return false;
  }
}

export { MAX_AGE };
