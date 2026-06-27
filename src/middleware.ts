import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifySessionTokenEdge, COOKIE_NAME } from '@/lib/authEdge';

/**
 * 中间件：
 * 1. GEO 检测（识别访客国家，写入 Cookie 供询盘表单自动填充）
 * 2. /admin 路径保护（未登录跳转到 /admin/login）
 *
 * ⚠️ 注意：本文件运行在 Edge runtime，不能使用 Node 内置模块（fs, crypto 等）
 */
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ===== 1. /admin 路径访问控制 =====
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

  // ===== 2. GEO 检测 =====
  const response = NextResponse.next();
  const country = request.headers.get('x-vercel-ip-country') || 
                  request.headers.get('cf-ipcountry') || 
                  'US';
  const city = request.headers.get('x-vercel-ip-city') || '';

  const cookieOptions = {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax' as const,
  };
  response.cookies.set('NEXT_LOC_COUNTRY', country, cookieOptions);
  if (city) {
    response.cookies.set('NEXT_LOC_CITY', encodeURIComponent(city), cookieOptions);
  }

  return response;
}

export const config = {
  matcher: [
    // 包含 /admin 但排除 /api 与静态资源
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
