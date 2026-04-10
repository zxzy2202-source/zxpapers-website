import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");
  const isLoginPage = req.nextUrl.pathname === "/admin/login" || req.nextUrl.pathname === "/admin/login/";
  const isApiAuth = req.nextUrl.pathname.startsWith("/api/auth");
  const isApiAdmin = req.nextUrl.pathname.startsWith("/api/admin");
  const isApiSeed = req.nextUrl.pathname === "/api/admin/seed" || req.nextUrl.pathname === "/api/admin/seed/";

  // 放行认证 API 和 seed 初始化 API
  if (isApiAuth) return NextResponse.next();
  if (isApiSeed) return NextResponse.next();

  // 验证 JWT token（轻量级，不依赖 Prisma）
  // NextAuth v5 使用 JWE 加密，salt 默认为 cookieName
  // 生产环境（HTTPS）使用 __Secure-authjs.session-token
  const secret = process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET;
  if (!secret) {
    console.error("[middleware] AUTH_SECRET is not configured");
    return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
  }
  const isSecure = req.nextUrl.protocol === "https:" || process.env.NODE_ENV === "production";
  const cookieName = isSecure ? "__Secure-authjs.session-token" : "authjs.session-token";
  const token = await getToken({ req, secret, cookieName, salt: cookieName });
  const isAuthenticated = !!token;

  // 保护 admin API 路由
  if (isApiAdmin && !isAuthenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // 如果是 admin 路由且未登录，重定向到登录页
  if (isAdminRoute && !isLoginPage && !isAuthenticated) {
    const loginUrl = new URL("/admin/login", req.url);
    loginUrl.searchParams.set("callbackUrl", req.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  // 如果已登录且访问登录页，重定向到 dashboard
  if (isLoginPage && isAuthenticated) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
