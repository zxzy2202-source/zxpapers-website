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
const LEGACY_PRODUCT_REDIRECTS = [
  // GSC Coverage Validation export, 2026-07-17: preserve the most specific
  // size and material intent before broader product-family migrations.
  {
    slugPattern: ".*4-x-6-.*direct-thermal.*label.*",
    destination: "/products/thermal-labels/4x6in",
  },
  {
    slugPattern: ".*4-x-3-.*direct-thermal.*label.*",
    destination: "/products/thermal-labels/4x3in",
  },
  {
    slugPattern: ".*3-x-2-.*direct-thermal.*label.*",
    destination: "/products/thermal-labels/3x2in",
  },
  {
    slugPattern: ".*2-x-1-.*direct-thermal.*label.*",
    destination: "/products/thermal-labels/2x1in",
  },
  {
    slugPattern: ".*linerless.*",
    destination: "/products/linerless-labels",
  },
  {
    slugPattern: ".*liner-free.*",
    destination: "/products/linerless-labels",
  },
  {
    slugPattern: ".*phenol-free.*",
    destination: "/products/phenol-free-thermal-paper",
  },
  {
    slugPattern: ".*bpa-bps.*",
    destination: "/products/phenol-free-thermal-paper",
  },
  {
    slugPattern: ".*bpa-free.*",
    destination: "/products/bpa-free-thermal-paper",
  },
  {
    slugPattern: ".*direct-thermal.*label.*",
    destination: "/products/thermal-labels",
  },
  {
    slugPattern: ".*thermal-label.*sticker.*",
    destination: "/products/thermal-labels",
  },
  {
    slugPattern: ".*thermal-transfer.*label.*",
    destination: "/products/barcode-labels",
  },
  {
    slugPattern: ".*polypro-4000t.*",
    destination: "/products/barcode-labels",
  },
  {
    slugPattern: ".*z-perform.*",
    destination: "/products/barcode-labels",
  },
  {
    slugPattern: ".*z-select.*",
    destination: "/products/barcode-labels",
  },
  {
    slugPattern: ".*baggage.*tag.*",
    destination: "/products/shipping-labels",
  },
  {
    slugPattern: ".*detergent.*label.*",
    destination: "/products/detergent-labels",
  },
  {
    slugPattern: ".*inkjet.*label.*",
    destination: "/products/product-labels",
  },
  {
    slugPattern: ".*bottle.*label.*",
    destination: "/products/product-labels",
  },
  {
    slugPattern: ".*vinyl.*label.*",
    destination: "/products/product-labels",
  },
  {
    slugPattern: ".*bopp.*label.*",
    destination: "/products/product-labels",
  },
  {
    slugPattern: ".*oil-drum.*label.*",
    destination: "/products/product-labels",
  },
  {
    slugPattern: ".*cosmetic.*label.*",
    destination: "/products/product-labels",
  },
  {
    slugPattern: ".*label.*raw-material.*",
    destination: "/products/product-labels",
  },
  {
    slugPattern: ".*raw-material.*label.*",
    destination: "/products/product-labels",
  },
  {
    slugPattern: ".*waterproof.*label.*",
    destination: "/products/product-labels",
  },
  {
    slugPattern: ".*water-proof.*label.*",
    destination: "/products/product-labels",
  },
  {
    slugPattern: ".*film.*label.*",
    destination: "/products/product-labels",
  },
  {
    slugPattern: ".*adhesive.*label.*",
    destination: "/products/product-labels",
  },
  {
    slugPattern: ".*carbonless.*",
    destination: "/products/ncr-forms",
  },
  {
    slugPattern: ".*gilbarco.*",
    destination: "/products/thermal-paper-rolls",
  },
  {
    slugPattern: ".*thermal.*receipt.*",
    destination: "/products/receipt-paper-rolls",
  },
  {
    slugPattern: ".*receipt.*thermal.*",
    destination: "/products/receipt-paper-rolls",
  },
  {
    slugPattern: ".*thermal.*paper.*",
    destination: "/products/thermal-paper-rolls",
  },
  {
    slugPattern: ".*thermal.*ticket.*",
    destination: "/products/thermal-paper-rolls",
  },
  {
    slugPattern: ".*thermal.*boarding.*",
    destination: "/products/thermal-paper-rolls",
  },
  {
    slugPattern: ".*atm.*paper.*",
    destination: "/products/thermal-paper-rolls",
  },
  {
    slugPattern: ".*kiosk.*paper.*",
    destination: "/products/thermal-paper-rolls",
  },
  {
    slugPattern: ".*gas-pump.*",
    destination: "/products/thermal-paper-rolls",
  },
  {
    slugPattern: ".*star-micronics.*",
    destination: "/products/receipt-paper-rolls",
  },
  {
    slugPattern: ".*parkeon.*",
    destination: "/products/thermal-paper-rolls",
  },
  {
    slugPattern: ".*flowbird.*",
    destination: "/products/thermal-paper-rolls",
  },
  {
    slugPattern: ".*triton.*",
    destination: "/products/thermal-paper-rolls",
  },
  {
    slugPattern: ".*wrg-genesis.*",
    destination: "/products/thermal-paper-rolls",
  },
  {
    slugPattern: ".*hengstler.*",
    destination: "/products/thermal-paper-rolls",
  },
  {
    slugPattern: ".*practical-automation.*",
    destination: "/products/thermal-paper-rolls",
  },
  {
    slugPattern: ".*duratherm.*",
    destination: "/products/thermal-paper-rolls",
  },
] as const;
const LEGACY_PRODUCT_CATEGORY_REDIRECTS = [
  // GSC Coverage Drilldown, 2026-07-23: these indexed WordPress archives
  // have clear current equivalents and should not collapse to /products.
  {
    categoryPath: "direct-thermal-labels",
    destination: "/products/thermal-labels",
  },
  {
    categoryPath: "thermal-paper-rolls",
    destination: "/products/thermal-paper-rolls",
  },
  {
    categoryPath: "adhesive-label-material",
    destination: "/products/product-labels",
  },
  {
    categoryPath: "labelsstick",
    destination: "/products/product-labels",
  },
  {
    categoryPath: "jumbo-roll-thermal-paper",
    destination: "/products/thermal-paper-rolls",
  },
  {
    categoryPath: "carbonless-paper",
    destination: "/products/ncr-forms",
  },
  {
    categoryPath: "bpabps-free-thermal-paper",
    destination: "/products/phenol-free-thermal-paper",
  },
  {
    categoryPath: "atm-receipt-paper-rolls",
    destination: "/products/thermal-paper-rolls",
  },
  {
    categoryPath: "thermal-receipt-paper-rolls",
    destination: "/products/receipt-paper-rolls",
  },
  {
    categoryPath: "kiosk-receipt-paper-rolls",
    destination: "/products/thermal-paper-rolls",
  },
  {
    categoryPath: "inkjetlaser-labels",
    destination: "/products/product-labels",
  },
  {
    categoryPath: "cosmetic-labels",
    destination: "/products/product-labels",
  },
  {
    categoryPath: "food-packaging-labels",
    destination: "/products/product-labels",
  },
  {
    categoryPath: "electronic-industry-label",
    destination: "/products/product-labels",
  },
  {
    categoryPath: "pharmaceutical-labels",
    destination: "/products/product-labels",
  },
  {
    categoryPath: "thermal-weigh-scale-labels",
    destination: "/products/thermal-labels",
  },
  {
    categoryPath: "printed-paper-roll",
    destination: "/products/thermal-paper-rolls/custom-printed",
  },
] as const;
const LEGACY_STATIC_REDIRECTS = [
  { source: "/about-us", destination: "/about" },
  { source: "/contact-us", destination: "/contact" },
  { source: "/inquiry", destination: "/contact" },
  { source: "/get-a-quote", destination: "/contact" },
  { source: "/amazon-fba-tags", destination: "/products/shipping-labels" },
  {
    source: "/about-us/certificates",
    destination: "/manufacturing/certifications",
  },
] as const;
const LEGACY_CURRENT_ROUTE_REDIRECTS = [
  "/about",
  "/contact",
  "/contact/:path*",
  "/products",
  "/products/:path*",
  "/blog",
  "/blog/:path*",
  "/faq",
  "/manufacturing",
  "/manufacturing/:path*",
  "/markets",
  "/markets/:path*",
  "/oem",
  "/oem/:path*",
  "/resources",
  "/resources/:path*",
  "/specifications",
  "/best-thermal-paper-suppliers",
  "/zhixinpaper-vs-panda-paper-roll",
] as const;
const CURRENT_TRAILING_SLASH_REDIRECTS = [
  { source: "/about/", destination: "/about" },
  { source: "/contact/", destination: "/contact" },
  { source: "/contact/:path+/", destination: "/contact/:path+" },
  { source: "/products/", destination: "/products" },
  { source: "/products/:path+/", destination: "/products/:path+" },
  { source: "/blog/", destination: "/blog" },
  { source: "/blog/:path+/", destination: "/blog/:path+" },
  { source: "/faq/", destination: "/faq" },
  { source: "/manufacturing/", destination: "/manufacturing" },
  { source: "/manufacturing/:path+/", destination: "/manufacturing/:path+" },
  { source: "/markets/", destination: "/markets" },
  { source: "/markets/:path+/", destination: "/markets/:path+" },
  { source: "/oem/", destination: "/oem" },
  { source: "/oem/:path+/", destination: "/oem/:path+" },
  { source: "/resources/", destination: "/resources" },
  { source: "/resources/:path+/", destination: "/resources/:path+" },
  { source: "/specifications/", destination: "/specifications" },
  { source: "/best-thermal-paper-suppliers/", destination: "/best-thermal-paper-suppliers" },
  { source: "/zhixinpaper-vs-panda-paper-roll/", destination: "/zhixinpaper-vs-panda-paper-roll" },
] as const;
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
  distDir: process.env.NEXT_DIST_DIR || ".next",
  trailingSlash: false,
  skipTrailingSlashRedirect: true,

  async redirects() {
    return [
      // Evidence-backed WordPress migrations. Absolute destinations collapse
      // legacy path, language and bare-host cleanup into one application rule.
      ...LEGACY_PRODUCT_REDIRECTS.flatMap(({ slugPattern, destination }) => [
        {
          source: `/:lang(${LEGACY_LANGUAGE_PATTERN})/product/:slug(${slugPattern})`,
          destination: `${CANONICAL_SITE_URL}${destination}`,
          permanent: true,
        },
        {
          source: `/product/:slug(${slugPattern})`,
          destination: `${CANONICAL_SITE_URL}${destination}`,
          permanent: true,
        },
      ]),
      ...LEGACY_STATIC_REDIRECTS.flatMap(({ source, destination }) => [
        {
          source: `/:lang(${LEGACY_LANGUAGE_PATTERN})${source}`,
          destination: `${CANONICAL_SITE_URL}${destination}`,
          permanent: true,
        },
        {
          source,
          destination: `${CANONICAL_SITE_URL}${destination}`,
          permanent: true,
        },
      ]),
      ...LEGACY_PRODUCT_CATEGORY_REDIRECTS.flatMap(
        ({ categoryPath, destination }) => [
          {
            source: `/:lang(${LEGACY_LANGUAGE_PATTERN})/product-category/${categoryPath}/:path*`,
            destination: `${CANONICAL_SITE_URL}${destination}`,
            permanent: true,
          },
          {
            source: `/product-category/${categoryPath}/:path*`,
            destination: `${CANONICAL_SITE_URL}${destination}`,
            permanent: true,
          },
        ],
      ),
      {
        source: `/:lang(${LEGACY_LANGUAGE_PATTERN})/posts`,
        destination: `${CANONICAL_SITE_URL}/blog`,
        permanent: true,
      },
      {
        source: `/:lang(${LEGACY_LANGUAGE_PATTERN})/about-us/blog`,
        destination: `${CANONICAL_SITE_URL}/blog`,
        permanent: true,
      },
      {
        source: "/posts",
        destination: `${CANONICAL_SITE_URL}/blog`,
        permanent: true,
      },
      {
        source: "/about-us/blog",
        destination: `${CANONICAL_SITE_URL}/blog`,
        permanent: true,
      },
      ...[
        "/products/page/:num",
        "/hot-products",
        "/hot-products/page/:num",
      ].flatMap((source) => [
        {
          source: `/:lang(${LEGACY_LANGUAGE_PATTERN})${source}`,
          destination: `${CANONICAL_SITE_URL}/products`,
          permanent: true,
        },
        {
          source,
          destination: `${CANONICAL_SITE_URL}/products`,
          permanent: true,
        },
      ]),
      ...LEGACY_LANGUAGES.map((language) => ({
        source: `/${language}`,
        destination: `${CANONICAL_SITE_URL}/`,
        permanent: true,
      })),
      ...LEGACY_CURRENT_ROUTE_REDIRECTS.map((source) => ({
        source: `/:lang(${LEGACY_LANGUAGE_PATTERN})${source}`,
        destination: `${CANONICAL_SITE_URL}${source}`,
        permanent: true,
      })),
      // Thermal paper and thermal label regional ownership for Europe lives on
      // zhixinpaper.com. These rules precede generic host consolidation so the
      // bare and www ZX Papers hosts reach the final owner without a redirect chain.
      { source: "/markets/europe", destination: "https://www.zhixinpaper.com/eu", statusCode: 301 },
      { source: "/markets/europe/:path*", destination: "https://www.zhixinpaper.com/eu", statusCode: 301 },
      ...CURRENT_TRAILING_SLASH_REDIRECTS.map(({ source, destination }) => ({
        source,
        destination: `${CANONICAL_SITE_URL}${destination}`,
        permanent: true,
      })),
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
      // Product URL aliases → canonical content pages (replaces former client-side JS redirects)
      { source: "/products/custom-printed-rolls", destination: "/products/thermal-paper-rolls/custom-printed", permanent: true },
      { source: "/products/blank-thermal-rolls", destination: "/products/thermal-paper-rolls/blank", permanent: true },
      { source: "/products/thermal-labels/custom-printed", destination: "/products/custom-printed-thermal-labels", permanent: true },
      { source: "/products/custom-printed-labels", destination: "/products/custom-printed-thermal-labels", permanent: true },
      { source: "/products/blank-thermal-labels", destination: "/products/thermal-labels/blank", permanent: true },
      // Historical trust-content paths cited by external audits should resolve to
      // the closest current pages instead of competing as 404 or duplicate URLs.
      { source: "/factory/virtual-tour", destination: "/about", permanent: true },
      { source: "/case-studies", destination: "/oem/case-studies", permanent: true },
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
