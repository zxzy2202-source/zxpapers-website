import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE } from "@/config/siteData";
import Script from "next/script";
import { readSeo } from "@/lib/seoStore";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F2B5B",
};

export async function generateMetadata(): Promise<Metadata> {
  const adminSeo = await readSeo().catch(() => ({} as Awaited<ReturnType<typeof readSeo>>));

  const title = adminSeo.siteTitle || `${SITE.name} | ${SITE.tagline}`;
  const description =
    adminSeo.siteDescription ||
    "ISO 9001 certified manufacturer of thermal paper rolls and labels. OEM/private label, BPA-free, FSC certified. Serving 80+ countries.";
  const keywords =
    (adminSeo.siteKeywords?.length ? adminSeo.siteKeywords : null) || [
      "thermal paper rolls",
      "thermal labels",
      "thermal paper manufacturer",
      "OEM thermal paper",
      "BPA-free thermal paper",
      "custom thermal labels",
    ];
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
      template: `%s | ${SITE.name}`,
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
  "@type": "Organization",
  "@id": `${SITE.domain}/#organization`,
  name: SITE.name,
  url: SITE.domain,
  logo: {
    "@type": "ImageObject",
    url: `${SITE.domain}/og-default.png`,
    width: 1200,
    height: 630,
  },
  description:
    "ISO 9001 certified manufacturer of thermal paper rolls and labels. OEM/private label, BPA-free, FSC certified. Serving 80+ countries since 2009.",
  foundingDate: "2009",
  numberOfEmployees: { "@type": "QuantitativeValue", value: 200 },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      contactType: "sales",
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
  sameAs: ["https://www.linkedin.com/company/zhixinpaper"],
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
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE.domain}/products?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const adminSeo = await readSeo().catch(
    () => ({} as Awaited<ReturnType<typeof readSeo>>),
  );
  const gaId = adminSeo.googleAnalyticsId?.trim();
  const gtmId = adminSeo.googleTagManagerId?.trim();

  return (
    <html lang="en">
      <head>
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
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
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
      </head>
      <body>
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
        {/* WUUNU SNIPPET - DON'T CHANGE THIS (START) */}
        {process.env.NODE_ENV !== "production" && (
          <>
            <Script id="wuunu-ws" strategy="afterInteractive">
              {`window.__WUUNU_WS__ = "http://127.0.0.1:59064/?token=467b21eba87a0389416f6eef2842f5674abbd83143c90e2b";`}
            </Script>
            <Script
              id="wuunu-widget"
              src="https://cdn.jsdelivr.net/npm/@wuunu/widget@0.1.22"
              strategy="afterInteractive"
              crossOrigin="anonymous"
            />
          </>
        )}
        {/* WUUNU SNIPPET - DON'T CHANGE THIS (END) */}
      </body>
    </html>
  );
}
