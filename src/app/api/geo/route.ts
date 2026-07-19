import { NextRequest, NextResponse } from 'next/server';

/**
 * GET /api/geo
 *
 * 从 Vercel 注入的请求头中读取访客地理信息，以 JSON 形式返回。
 * 此接口不写入任何 Cookie，因此响应可被浏览器缓存，
 * 不会影响主页面的 Vercel CDN 缓存策略。
 *
 * 客户端可将结果缓存在 sessionStorage 中，避免重复请求。
 */
export async function GET(request: NextRequest) {
  const country =
    request.headers.get('x-vercel-ip-country') ||
    request.headers.get('cf-ipcountry') ||
    '';

  const city = request.headers.get('x-vercel-ip-city') || '';

  const data = {
    country,
    city: city ? decodeURIComponent(city) : '',
  };

  return NextResponse.json(data, {
    headers: {
      // 浏览器缓存 1 小时，CDN 缓存 5 分钟（GEO 信息不需要实时精确）
      'Cache-Control': 'public, max-age=3600, s-maxage=300',
    },
  });
}
