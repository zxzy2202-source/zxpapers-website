import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifySessionTokenEdge, COOKIE_NAME } from '@/lib/authEdge';

/**
 * 中间件：仅负责 /admin 路径保护。
 *
 * ⚠️ GEO 检测已从此处移除。
 *    原因：在中间件中写入 Set-Cookie 会导致 Vercel CDN 将所有页面响应标记为
 *    `private, no-cache`，完全绕过边缘缓存，造成性能损耗。
 *
 *    新方案：客户端在组件挂载后调用 /api/geo 接口异步获取国家信息，
 *    该接口不写 Cookie，响应可被浏览器缓存（Cache-Control: public, max-age=3600）。
 *
 * ⚠️ 注意：本文件运行在 Edge runtime，不能使用 Node 内置模块（fs, crypto 等）
 */
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

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
    // 只匹配 /admin 路径，排除 API、静态资源
    '/admin/:path*',
  ],
};
