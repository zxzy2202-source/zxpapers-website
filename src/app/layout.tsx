import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE, FACTORY, CERTIFICATIONS } from "@/config/siteData";
import Script from "next/script";
import { Inter, Sora } from "next/font/google";
import { readSeo, readEffectiveSeo } from "@/lib/seoStore";
import AttributionTracker from "@/components/analytics/AttributionTracker";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const DEFAULT_R2_PUBLIC_ORIGIN = "https://pub-529e97a14b4f4353b8b72301cfd8b481.r2.dev";
const DEFAULT_GOOGLE_TAG_ID = "GT-TB7DWD3S";
const DEFAULT_GOOGLE_TAG_MANAGER_ID = "GTM-MLFJ4XB3";
const GOOGLE_TAG_ID_PATTERN = /^(?:G|GT|AW|DC)-[A-Z0-9]+$/i;
const GOOGLE_TAG_MANAGER_ID_PATTERN = /^GTM-[A-Z0-9]+$/i;

function resolveGoogleTagId(configured?: string) {
  const candidate =
    configured?.trim() ||
    process.env.NEXT_PUBLIC_GOOGLE_TAG_ID?.trim() ||
    DEFAULT_GOOGLE_TAG_ID;

  return GOOGLE_TAG_ID_PATTERN.test(candidate) ? candidate : DEFAULT_GOOGLE_TAG_ID;
}

function resolveGoogleTagManagerId(configured?: string) {
  const candidate =
    configured?.trim() ||
    process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID?.trim() ||
    DEFAULT_GOOGLE_TAG_MANAGER_ID;

  return GOOGLE_TAG_MANAGER_ID_PATTERN.test(candidate)
    ? candidate
    : DEFAULT_GOOGLE_TAG_MANAGER_ID;
}

const R2_PUBLIC_ORIGIN = (() => {
  try {
    const configured = process.env.NEXT_PUBLIC_R2_URL;
    if (!configured) return DEFAULT_R2_PUBLIC_ORIGIN;

    const parsed = new URL(configured);
    if (parsed.protocol === "http:" || parsed.protocol === "https:") {
      return parsed.origin;
    }
  } catch {
    // Ignore invalid or relative values and fall back to the known CDN origin.
  }

  return DEFAULT_R2_PUBLIC_ORIGIN;
})();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F2B5B",
};

export async function generateMetadata(): Promise<Metadata> {
  // v2.1: 使用 readEffectiveSeo，用户填的优先，空字段自动用 SEO_DEFAULTS 兜底
  const adminSeo = await readEffectiveSeo().catch(
    () => ({} as Awaited<ReturnType<typeof readSeo>>),
  );

  const title = adminSeo.siteTitle || `${SITE.name} | ${SITE.tagline}`;
  // 子页标题模板：用后台配置值，但必须含 %s 占位符，否则回退到默认，避免子页标题损坏
  const titleTemplate =
    adminSeo.siteTitleTemplate?.includes("%s")
      ? adminSeo.siteTitleTemplate
      : `%s | ${SITE.name}`;
  const description = adminSeo.siteDescription || SITE.tagline;
  const keywords = adminSeo.siteKeywords?.length ? adminSeo.siteKeywords : undefined;
  const ogImageUrl = adminSeo.ogImage || `${SITE.domain}/og-default.png`;

  const verificationOther: Record<string, string> = {};
  if (adminSeo.baiduSiteVerification)
    verificationOther["baidu-site-verification"] = adminSeo.baiduSiteVerification;
  if (adminSeo.bingSiteVerification)
    verificationOther["msvalidate.01"] = adminSeo.bingSiteVerification;

  return {
    ...(adminSeo.googleSiteVerification && {
      verification: { google: adminSeo.googleSiteVerification, other: verificationOther },
    }),
    metadataBase: new URL(SITE.domain),
    title: {
      default: title,
      template: titleTemplate,
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon.svg", type: "image/svg+xml" },
      ],
      apple: "/apple-touch-icon.png",
    },
    description,
    keywords,
    authors: [{ name: SITE.name, url: SITE.domain }],
    creator: SITE.name,
    publisher: SITE.name,
    openGraph: {
      type: "website",
      siteName: SITE.name,
      title,
      description,
      url: SITE.domain,
      locale: "en_US",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${SITE.name} | Thermal Paper Rolls Manufacturer`,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "Manufacturer"],
  "@id": `${SITE.domain}/#organization`,
  name: SITE.name,
  legalName: "Xi'an Zhi Xin Paper Co., Ltd.",
  alternateName: ["Zhi Xin Paper", "ZhiXin Paper", "zxpapers"],
  url: SITE.domain,
  logo: {
    "@type": "ImageObject",
    url: `${SITE.domain}/images/logo-dark.png`,
    width: 400,
    height: 400,
  },
  slogan: SITE.tagline,
  description:
    `ISO 9001:2015, FSC and BPA-free certified manufacturer of thermal paper rolls, direct thermal and shipping labels, machine-ready roll labels, and bottle labels. Founded in 2009 in Xi'an, China, ZhixinPaper operates a ${FACTORY.area} factory with ${FACTORY.productionLines} production lines producing ${FACTORY.annualOutput} rolls per year, exporting to ${FACTORY.countriesServed} countries with factory-direct wholesale pricing and OEM/private-label programs for ${FACTORY.oemClients} clients.`,
  foundingDate: "2009",
  foundingLocation: {
    "@type": "Place",
    address: { "@type": "PostalAddress", addressLocality: "Xi'an", addressRegion: "Shaanxi", addressCountry: "CN" },
  },
  numberOfEmployees: { "@type": "QuantitativeValue", value: 800 },
  knowsAbout: [
    "Thermal paper rolls",
    "Direct thermal labels",
    "Custom printed thermal labels",
    "BPA-free thermal paper",
    "BPS-free thermal paper",
    "POS receipt paper",
    "Receipt paper rolls",
    "Cash register / till rolls",
    "4x6 shipping labels",
    "Machine-ready roll labels",
    "Automatic labeling machine labels",
    "Detergent labels",
    "NCR / carbonless business forms",
    "Delivery note and proof-of-delivery forms",
    "Continuous fanfold and tractor-feed computer forms",
    "OEM / private-label thermal paper manufacturing",
  ],
  // This is a quote-led B2B catalog. Keep the catalog as Offers, but do not
  // emit Product entities without a real price, review, or aggregate rating.
  // Product entities without one of those fields trigger Search Console's
  // Product snippets warning on every page that includes this organization.
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Thermal Paper & Label Products",
    itemListElement: [
      { name: "Thermal Paper Rolls", path: "/products/thermal-paper-rolls" },
      { name: "Receipt Paper Rolls", path: "/products/receipt-paper-rolls" },
      { name: "Thermal & Shipping Labels", path: "/products/thermal-labels" },
      { name: "Custom Printed Thermal Labels", path: "/products/custom-printed-thermal-labels" },
      { name: "Barcode & Variable-Data Labels", path: "/products/barcode-labels" },
      { name: "Product & Packaging Labels", path: "/products/product-labels" },
      { name: "BPA-Free Thermal Paper", path: "/products/bpa-free-thermal-paper" },
      { name: "BPS-Free Thermal Paper", path: "/products/bps-free-thermal-paper" },
      { name: "Phenol-Free Thermal Paper", path: "/products/phenol-free-thermal-paper" },
      { name: "Till Rolls", path: "/products/till-rolls" },
      { name: "Machine-Ready Roll Labels", path: "/products/can-labels" },
      { name: "Detergent Labels", path: "/products/detergent-labels" },
      { name: "NCR Forms & Carbonless Business Forms", path: "/products/ncr-forms" },
      { name: "Delivery Note & POD Forms", path: "/products/delivery-note-forms" },
      { name: "Continuous Computer Forms", path: "/products/continuous-computer-forms" },
    ].map((c) => ({
      "@type": "Offer",
      name: c.name,
      url: `${SITE.domain}${c.path}`,
    })),
  },
  hasCredential: CERTIFICATIONS.map((c) => ({
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "certification",
    name: c.name,
  })),
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      contactType: "sales",
      email: SITE.email,
      availableLanguage: ["English", "Chinese"],
      areaServed: "Worldwide",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Building 15, Phase 1 Zone 2, Ronghao Industrial Park, Gaoling District",
    addressLocality: "Xi'an",
    addressRegion: "Shaanxi",
    postalCode: "710200",
    addressCountry: "CN",
  },
  sameAs: [
    "https://www.linkedin.com/company/zhixinpaper",
    "https://zhixinzhiye.en.alibaba.com",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.domain}/#website`,
  url: SITE.domain,
  name: SITE.name,
  description:
    "ISO 9001 certified thermal paper rolls and labels manufacturer. Factory direct, OEM available.",
  publisher: { "@id": `${SITE.domain}/#organization` },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const adminSeo = await readSeo().catch(
    () => ({} as Awaited<ReturnType<typeof readSeo>>),
  );
  const gaId = resolveGoogleTagId(adminSeo.googleAnalyticsId);
  const gtmId = resolveGoogleTagManagerId(adminSeo.googleTagManagerId);

  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <head>
        <link rel="dns-prefetch" href="https://d2xsxph8kpxj0f.cloudfront.net" />
        <link rel="dns-prefetch" href={R2_PUBLIC_ORIGIN} />
        <link rel="preconnect" href="https://d2xsxph8kpxj0f.cloudfront.net" crossOrigin="anonymous" />
        <link rel="preconnect" href={R2_PUBLIC_ORIGIN} crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {gtmId && (
          <Script id="gtm-head" strategy="afterInteractive">
            {`window.__ZX_GTM_ACTIVE__=true;(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
        )}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`}
            </Script>
          </>
        )}
        {/* OKKI (XiaoMan CRM) Tracking Script */}
        <Script id="okki-init" strategy="lazyOnload">
          {`
            window.okkiConfigs = window.okkiConfigs || [];
            function okkiAdd() { okkiConfigs.push(arguments); };
            okkiAdd("analytics", { siteId: "68611-18549", gId: "" });
          `}
        </Script>
        <Script
          id="okki-analyze"
          src="//tfile.xiaoman.cn/okki/analyze.js?id=68611-18549-"
          strategy="lazyOnload"
        />
      </head>
      <body>
        <AttributionTracker />
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        {children}
      </body>
    </html>
  );
}
