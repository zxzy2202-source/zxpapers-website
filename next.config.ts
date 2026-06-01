import type { NextConfig } from "next";

const disableImageOptimization =
  process.env.NEXT_IMAGE_UNOPTIMIZED !== "false"; // 默认禁用图片优化（避免外部图片源被拦截）
const DEFAULT_R2_PUBLIC_URL =
  "https://pub-529e97a14b4f4353b8b72301cfd8b481.r2.dev";

function getAbsolutePublicUrl(value: string | undefined, fallback: string) {
  if (!value) return fallback;

  try {
    const parsed = new URL(value);
    if (parsed.protocol === "http:" || parsed.protocol === "https:") {
      return parsed.origin;
    }
  } catch {
    // Ignore invalid or relative values and fall back to the known public CDN origin.
  }

  return fallback;
}

const r2PublicOrigin = getAbsolutePublicUrl(
  process.env.NEXT_PUBLIC_R2_URL,
  DEFAULT_R2_PUBLIC_URL,
);
const r2PublicHostname = new URL(r2PublicOrigin).hostname;

const nextConfig: NextConfig = {
  trailingSlash: true,

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "zxpapers.com" }],
        destination: "https://www.zxpapers.com/:path*",
        permanent: true,
      },
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
      {
        source: "/product/:slug*",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/product/:slug(.*linerless.*)",
        destination: "/products/linerless-labels",
        permanent: true,
      },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/about-us/", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/contact-us/", destination: "/contact", permanent: true },
      { source: "/category/:slug*", destination: "/products", permanent: true },
      { source: "/tag/:slug*", destination: "/blog", permanent: true },
      { source: "/page/:num", destination: "/", permanent: true },
      { source: "/wp-content/:path*", destination: "/", permanent: true },
      { source: "/wp-admin/:path*", destination: "/", permanent: true },
      { source: "/wp-login.php", destination: "/", permanent: true },
      { source: "/feed", destination: "/blog", permanent: true },
      { source: "/feed/:slug*", destination: "/blog", permanent: true },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/r2-assets/:path*",
        destination: `${r2PublicOrigin}/:path*`,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/uploads/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/r2-assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },

  images: {
    unoptimized: disableImageOptimization,
    remotePatterns: [
      {
        protocol: "https",
        hostname: r2PublicHostname,
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
