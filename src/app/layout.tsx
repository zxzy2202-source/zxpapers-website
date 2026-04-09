import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { SITE } from "@/config/siteData";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F2B5B",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  description:
    "ISO 9001 certified manufacturer of thermal paper rolls and labels. OEM/private label, BPA-free, FSC certified. MOQ 1,000 rolls. Serving 80+ countries.",
  keywords: [
    "thermal paper rolls",
    "thermal labels",
    "thermal paper manufacturer",
    "OEM thermal paper",
    "BPA-free thermal paper",
    "custom thermal labels",
    "bulk thermal paper supplier",
    "thermal paper wholesale",
  ],
  authors: [{ name: SITE.name, url: SITE.domain }],
  creator: SITE.name,
  publisher: SITE.name,
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name} | ${SITE.tagline}`,
    description:
      "ISO 9001 certified manufacturer of thermal paper rolls and labels. OEM/private label, BPA-free, FSC certified.",
    url: SITE.domain,
    locale: "en_US",
    images: [
      {
        url: `${SITE.domain}/og-default.png`,
        width: 1200,
        height: 630,
        alt: `${SITE.name} | Thermal Paper Rolls Manufacturer`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | ${SITE.tagline}`,
    description:
      "ISO 9001 certified manufacturer of thermal paper rolls and labels. OEM/private label, BPA-free, FSC certified.",
    images: [`${SITE.domain}/og-default.png`],
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
  // canonical 由各子页面的 metadata.alternates.canonical 单独设置
  // 此处不设置全局 canonical，避免覆盖子页面配置
};

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
  description: "ISO 9001 certified manufacturer of thermal paper rolls and labels. OEM/private label, BPA-free, FSC certified. Serving 80+ countries since 2009.",
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
    streetAddress: "Building 15, Phase 1 Zone 2, Ronghao Industrial Park, Gaoling District",
    addressLocality: "Xi'an",
    addressRegion: "Shaanxi",
    postalCode: "710200",
    addressCountry: "CN",
  },
  sameAs: [
    "https://www.linkedin.com/company/zhixinpaper",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.domain}/#website`,
  url: SITE.domain,
  name: SITE.name,
  description: "ISO 9001 certified thermal paper rolls and labels manufacturer. Factory direct, OEM available.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
