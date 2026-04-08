import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/lib/auth";

export async function middleware(req: NextRequest) {
  const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");
  const isLoginPage = req.nextUrl.pathname === "/admin/login" || req.nextUrl.pathname === "/admin/login/";
  const isApiAuth = req.nextUrl.pathname.startsWith("/api/auth");
  const isApiAdmin = req.nextUrl.pathname.startsWith("/api/admin");
  const isApiSeed = req.nextUrl.pathname === "/api/admin/seed" || req.nextUrl.pathname === "/api/admin/seed/";

  // 放行认证 API 和 seed 初始化 API
  if (isApiAuth) return NextResponse.next();
  if (isApiSeed) return NextResponse.next();

  // 使用 NextAuth v5 的 auth() 验证 session
  const session = await auth();
  const isAuthenticated = !!session?.user;

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
