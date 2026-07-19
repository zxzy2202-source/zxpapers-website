import type { NextConfig } from "next";

// Image optimization is ENABLED by default on Vercel.
// Set NEXT_IMAGE_UNOPTIMIZED=true in env vars only if you need to bypass it
// (e.g., self-hosted without a sharp binary, or during local dev with external images).
const disableImageOptimization =
  process.env.NEXT_IMAGE_UNOPTIMIZED === "true";
const DEFAULT_R2_PUBLIC_URL =
  "https://pub-529e97a14b4f4353b8b72301cfd8b481.r2.dev";
const CANONICAL_SITE_URL = "https://www.zxpapers.com";
const LEGACY_LANGUAGES = [
  "ro", "de", "fr", "es", "it", "pt", "pl", "nl", "tr", "ar", "ja", "ko",
  "ru", "zh", "hi", "vi", "th", "id", "ms",
] as const;
const LEGACY_LANGUAGE_PATTERN = LEGACY_LANGUAGES.join("|");

function getAbsolutePublicUrl(value: string | undefined, fallback: string) {
  if (!value) return fallback;

  try {
    const parsed = new URL(value);
    if (parsed.pathname.includes("/r2-assets")) {
      return fallback;
    }
    if (parsed.protocol === "http:" || parsed.protocol === "https:") {
      return `${parsed.origin}${parsed.pathname.replace(/\/+$/, "")}`;
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
  trailingSlash: false,

  async redirects() {
    return [
      // Evidence-backed WordPress migrations. Absolute destinations collapse
      // legacy path, language and bare-host cleanup into one application rule.
      {
        source: `/:lang(${LEGACY_LANGUAGE_PATTERN})/product-category/:slug*`,
        destination: `${CANONICAL_SITE_URL}/products`,
        permanent: true,
      },
      {
        source: `/:lang(${LEGACY_LANGUAGE_PATTERN})/product-tag/:slug*`,
        destination: `${CANONICAL_SITE_URL}/products`,
        permanent: true,
      },
      {
        source: `/:lang(${LEGACY_LANGUAGE_PATTERN})/posts`,
        destination: `${CANONICAL_SITE_URL}/blog`,
        permanent: true,
      },
      {
        source: `/:lang(${LEGACY_LANGUAGE_PATTERN})/posts/:path*`,
        destination: `${CANONICAL_SITE_URL}/blog`,
        permanent: true,
      },
      {
        source: `/:lang(${LEGACY_LANGUAGE_PATTERN})/about-us/blog`,
        destination: `${CANONICAL_SITE_URL}/blog`,
        permanent: true,
      },
      {
        source: `/:lang(${LEGACY_LANGUAGE_PATTERN})/about-us/blog/:path*`,
        destination: `${CANONICAL_SITE_URL}/blog`,
        permanent: true,
      },
      {
        source: "/product-category/:slug*",
        destination: `${CANONICAL_SITE_URL}/products`,
        permanent: true,
      },
      {
        source: "/product-tag/:slug*",
        destination: `${CANONICAL_SITE_URL}/products`,
        permanent: true,
      },
      {
        source: "/posts",
        destination: `${CANONICAL_SITE_URL}/blog`,
        permanent: true,
      },
      {
        source: "/posts/:path*",
        destination: `${CANONICAL_SITE_URL}/blog`,
        permanent: true,
      },
      {
        source: "/about-us/blog",
        destination: `${CANONICAL_SITE_URL}/blog`,
        permanent: true,
      },
      {
        source: "/about-us/blog/:path*",
        destination: `${CANONICAL_SITE_URL}/blog`,
        permanent: true,
      },
      {
        source: "/inquiry",
        destination: `${CANONICAL_SITE_URL}/contact`,
        permanent: true,
      },
      {
        source: "/get-a-quote",
        destination: `${CANONICAL_SITE_URL}/contact`,
        permanent: true,
      },
      {
        source: "/amazon-fba-tags",
        destination: `${CANONICAL_SITE_URL}/products/shipping-labels`,
        permanent: true,
      },
      {
        source: "/products/page/:num",
        destination: `${CANONICAL_SITE_URL}/products`,
        permanent: true,
      },
      {
        source: "/hot-products",
        destination: `${CANONICAL_SITE_URL}/products`,
        permanent: true,
      },
      {
        source: "/about-us/certificates",
        destination: `${CANONICAL_SITE_URL}/manufacturing/certifications`,
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "zxpapers.com" }],
        destination: "https://www.zxpapers.com/:path*",
        permanent: true,
      },
      // Domain consolidation: fold the alternate brand domain into the single
      // canonical host so search engines / AI treat one brand entity. NOTE: this
      // only fires if thermalrollpro.com is served by THIS deployment; if it runs
      // a separate stack, configure the 301 at that host/CDN instead.
      {
        source: "/:path*",
        has: [{ type: "host", value: "thermalrollpro.com" }],
        destination: "https://www.zxpapers.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.thermalrollpro.com" }],
        destination: "https://www.zxpapers.com/:path*",
        permanent: true,
      },
      ...LEGACY_LANGUAGES.map((language) => ({
        source: `/${language}`,
        destination: `${CANONICAL_SITE_URL}/`,
        permanent: true,
      })),
      {
        source: "/:lang(ro|de|fr|es|it|pt|pl|nl|tr|ar|ja|ko|ru|zh|hi|vi|th|id|ms)/:path*",
        destination: "/:path*",
        permanent: true,
      },
      {
        source: "/product/:slug(.*linerless.*)",
        destination: "/products/linerless-labels",
        permanent: true,
      },
      {
        source: "/product/:slug*",
        destination: "/products",
        permanent: true,
      },
      // Product URL aliases → canonical content pages (replaces former client-side JS redirects)
      { source: "/products/custom-printed-rolls", destination: "/products/thermal-paper-rolls/custom-printed", permanent: true },
      { source: "/products/blank-thermal-rolls", destination: "/products/thermal-paper-rolls/blank", permanent: true },
      { source: "/products/custom-printed-labels", destination: "/products/thermal-labels/custom-printed", permanent: true },
      { source: "/products/blank-thermal-labels", destination: "/products/thermal-labels/blank", permanent: true },
      {
        source: "/products/can-labels/:legacy(211x400|211x603|300x407|307x510|401x700|blank|custom-printed)",
        destination: "/products/can-labels",
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
      // Legacy combined region page → canonical split pages
      { source: "/markets/middle-east-africa", destination: "/markets/middle-east", permanent: true },
      { source: "/markets/middle-east-africa/:path*", destination: "/markets/middle-east", permanent: true },
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
