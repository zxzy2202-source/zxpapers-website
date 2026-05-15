import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { COOKIE_NAME } from "@/lib/session";

async function verifyHmac(token: string, secret: string): Promise<boolean> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, encoder.encode("admin-session-v1"));
  const expected = Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  if (token.length !== expected.length) return false;
  // constant-time compare
  let d = 0;
  for (let i = 0; i < token.length; i++) {
    d |= token.charCodeAt(i) ^ expected.charCodeAt(i);
  }
  return d === 0;
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isAdminRoute = pathname.startsWith("/admin");
  const isLoginPage = pathname === "/admin/login" || pathname === "/admin/login/";
  const isApiAuth = pathname.startsWith("/api/auth");
  const isApiAdmin = pathname.startsWith("/api/admin");

  if (isApiAuth) return NextResponse.next();

  const secret = process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET || "dev-secret";
  const token = req.cookies.get(COOKIE_NAME)?.value;
  const isAuthenticated = token ? await verifyHmac(token, secret) : false;

  if (isApiAdmin && !isAuthenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

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
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
