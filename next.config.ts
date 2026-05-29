import type { NextConfig } from "next";

const disableImageOptimization =
  process.env.NEXT_IMAGE_UNOPTIMIZED !== "false"; // 默认禁用图片优化（避免外部图片源被拦截）

const nextConfig: NextConfig = {
  trailingSlash: true,

  // 301 永久重定向
  // 处理：1) 域名规范化  2) 旧站 URL 清理（GSC 报 2,385 个 404）
  async redirects() {
    return [
      // ── 1. 域名规范化 ─────────────────────────────────────────────
      {
        source: "/:path*",
        has: [{ type: "host", value: "zxpapers.com" }],
        destination: "https://www.zxpapers.com/:path*",
        permanent: true,
      },

      // ── 2. 旧站多语言路径全部 301 到英文版（去掉语言前缀） ──────
      // GSC 显示 ro/de/fr/es/it/pt/pl/nl/tr/ar/ja/ko/ru/zh 等多语版本均 404
      {
        source: "/:lang(ro|de|fr|es|it|pt|pl|nl|tr|ar|ja|ko|ru|zh|hi|vi|th|id|ms)/:path*",
        destination: "/:path*",
        permanent: true,
      },
      {
        source: "/:lang(ro|de|fr|es|it|pt|pl|nl|tr|ar|ja|ko|ru|zh|hi|vi|th|id|ms)",
        destination: "/",
        permanent: true,
      },

      // ── 3. 旧站 /product/* (单数) → /products (产品中心) ────────
      // GSC 显示 /product/1-1-2-40mm-x-263-pos-sticky-linerless-... 等大量 404
      // 这是旧站的单产品页路径，新站已重构为分类页 + 规格子页
      {
        source: "/product/:slug*",
        destination: "/products",
        permanent: true,
      },

      // ── 4. 旧站特定高曝光页面精准映射（按 GSC TOP 落地页） ──────
      // /product/...linerless... → 新的 linerless 落地页（即将创建）
      {
        source: "/product/:slug(.*linerless.*)",
        destination: "/products/linerless-labels",
        permanent: true,
      },

      // ── 5. 常见旧站固定路径 ────────────────────────────────────
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/about-us/", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/contact-us/", destination: "/contact", permanent: true },
      { source: "/category/:slug*", destination: "/products", permanent: true },
      { source: "/tag/:slug*", destination: "/blog", permanent: true },
      { source: "/page/:num", destination: "/", permanent: true },

      // ── 6. WordPress 残留路径 ──────────────────────────────────
      { source: "/wp-content/:path*", destination: "/", permanent: true },
      { source: "/wp-admin/:path*", destination: "/", permanent: true },
      { source: "/wp-login.php", destination: "/", permanent: true },
      { source: "/feed", destination: "/blog", permanent: true },
      { source: "/feed/:slug*", destination: "/blog", permanent: true },
    ];
  },

  // 图片中转逻辑：将本地 /r2-assets/ 请求转发到 Cloudflare R2
  async rewrites() {
    return [
      {
        source: "/r2-assets/:path*",
        destination: "https://pub-529e97a14b4f4353b8b72301cfd8b481.r2.dev/:path*",
      },
    ];
  },

  images: {
    unoptimized: disableImageOptimization,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-529e97a14b4f4353b8b72301cfd8b481.r2.dev",
      },
      {
        protocol: "https",
        hostname: "d2xsxph8kpxj0f.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
