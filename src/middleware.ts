import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifySessionTokenEdge, COOKIE_NAME } from '@/lib/authEdge';

/**
 * Edge 中间件：域名规范化 + 后台鉴权。
 *
 * 1. 将裸域 zxpapers.com 301 重定向到 www.zxpapers.com。
 * 2. /admin 路径通过 session token 校验保护。
 *
 * ⚠️ GEO 检测已从此处移除（见下方注释）。
 * ⚠️ 本文件运行在 Edge runtime，不能使用 Node 内置模块。
 */
export async function middleware(request: NextRequest) {
  const { pathname, hostname } = request.nextUrl;

  // ===== Non-www → www canonical redirect =====
  if (hostname === 'zxpapers.com') {
    const wwwUrl = new URL(pathname + request.nextUrl.search, 'https://www.zxpapers.com');
    // Preserve hash fragments manually — URL constructor discards them.
    if (request.nextUrl.hash) {
      wwwUrl.hash = request.nextUrl.hash;
    }
    return NextResponse.redirect(wwwUrl, 301);
  }

  // ===== /admin 路径访问控制 =====
  if (pathname.startsWith('/admin')) {
    // 登录页本身不需要鉴权
    if (pathname === '/admin/login' || pathname === '/admin/login/') {
      return NextResponse.next();
    }
    const token = request.cookies.get(COOKIE_NAME)?.value;
    const valid = await verifySessionTokenEdge(token);
    if (!valid) {
      const loginUrl = new URL('/admin/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Non-www redirect needs to cover all non-asset requests.
    '/((?!_next|api/geo|favicon\\.ico|sitemap\\.xml|robots\\.txt).*)',
  ],
};
