import type { NextConfig } from "next";

const disableImageOptimization =
  process.env.NEXT_IMAGE_UNOPTIMIZED !== "false";

const nextConfig: NextConfig = {
  // output: "export" removed — admin backend requires server-side API routes (NextAuth, Prisma)
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

  images: {
    // Hostinger shared Node.js is slow at first-hit image proxying/sharp
    // transforms. The site already uses optimized WebP/PNG assets, so serve
    // them directly unless explicitly re-enabled with NEXT_IMAGE_UNOPTIMIZED=false.
    unoptimized: disableImageOptimization,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2xsxph8kpxj0f.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
