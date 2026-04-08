import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");
  const isLoginPage = req.nextUrl.pathname === "/admin/login";
  const isApiAuth = req.nextUrl.pathname.startsWith("/api/auth");

  // 放行认证 API
  if (isApiAuth) return NextResponse.next();

  // 如果是 admin 路由且未登录，重定向到登录页
  if (isAdminRoute && !isLoginPage && !req.auth) {
    const loginUrl = new URL("/admin/login", req.url);
    loginUrl.searchParams.set("callbackUrl", req.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  // 如果已登录且访问登录页，重定向到 dashboard
  if (isLoginPage && req.auth) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
