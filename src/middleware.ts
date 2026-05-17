import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COOKIE_NAME = "admin_auth";
const PAYLOAD = "admin-session-v1";
const SHA256_HEX_LENGTH = 64;

let expectedTokenPromise: Promise<string | null> | null = null;

function toHex(input: Uint8Array): string {
  return Array.from(input)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let d = 0;
  for (let i = 0; i < a.length; i++) {
    d |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return d === 0;
}

function isHexToken(token: string): boolean {
  return token.length === SHA256_HEX_LENGTH && /^[a-f0-9]+$/.test(token);
}

function getAuthSecret(): string | null {
  const secret = process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET || "";
  if (secret) return secret;

  if (process.env.NODE_ENV !== "production") return "dev-secret";
  return null;
}

function getExpectedToken(): Promise<string | null> {
  if (!expectedTokenPromise) {
    expectedTokenPromise = (async () => {
      const secret = getAuthSecret();
      if (!secret) return null;

      const encoder = new TextEncoder();
      const key = await crypto.subtle.importKey(
        "raw",
        encoder.encode(secret),
        { name: "HMAC", hash: "SHA-256" },
        false,
        ["sign"]
      );
      const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(PAYLOAD));
      return toHex(new Uint8Array(signature));
    })();
  }

  return expectedTokenPromise;
}

async function verifyEdgeToken(token: string): Promise<boolean> {
  if (!isHexToken(token)) return false;
  const expected = await getExpectedToken();
  if (!expected) return false;
  return safeEqual(token, expected);
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isAdminRoute = pathname.startsWith("/admin");
  const isLoginPage = pathname === "/admin/login" || pathname === "/admin/login/";
  const isApiAuth = pathname.startsWith("/api/auth");

  if (isApiAuth) return NextResponse.next();

  const token = req.cookies.get(COOKIE_NAME)?.value;
  const isAuthenticated = token ? await verifyEdgeToken(token) : false;


  if (isAdminRoute && !isLoginPage && !isAuthenticated) {
    const loginUrl = new URL("/admin/login", req.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isLoginPage && isAuthenticated) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
