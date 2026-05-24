import type { NextConfig } from "next";

const disableImageOptimization =
  process.env.NODE_ENV === "production" ? false : true; // 生产环境强制开启图片压缩，开发环境关闭以加快预览

const nextConfig: NextConfig = {
  trailingSlash: true,

  // 301 永久重定向：将非 www 域名统一跳转到 www 版本
  // 解决 Google Search Console 中"网页会自动重定向"导致的规范化冲突问题
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "zxpapers.com",
          },
        ],
        destination: "https://www.zxpapers.com/:path*",
        permanent: true, // 301 Moved Permanently — 权重传递给 www 版本
      },
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
