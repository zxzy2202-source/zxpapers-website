/**
 * SEO metadata 工厂 + JSON-LD（v2.1 100% 复用组件）
 *
 * 提供统一的：
 * - buildMetadata({ title, description, path, image })：自动拼 OG/canonical/twitter
 * - organizationSchema(site)：JSON-LD Organization
 * - breadcrumbSchema(items)：JSON-LD BreadcrumbList
 *
 * 业务页面用法：
 *   export const metadata = buildMetadata({
 *     title: "Thermal Paper Rolls",
 *     description: "Premium quality...",
 *     path: "/products",
 *   });
 */
import type { Metadata } from "next";
import { SITE } from "@/config/siteData";

interface BuildMetadataInput {
  title: string;
  description: string;
  path?: string; // 不传则用首页
  image?: string; // OG 图，相对路径或绝对 URL
  keywords?: string[];
  noindex?: boolean;
}

export function buildMetadata(input: BuildMetadataInput): Metadata {
  const path = input.path || "/";
  const url = `${SITE.domain}${path}`;
  const image = input.image
    ? input.image.startsWith("http")
      ? input.image
      : `${SITE.domain}${input.image}`
    : `${SITE.domain}/og-default.png`;

  return {
    title: input.title,
    description: input.description,
    keywords: input.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: input.title,
      description: input.description,
      url,
      siteName: SITE.name,
      images: [{ url: image, width: 1200, height: 630 }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: [image],
    },
    robots: input.noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

/** JSON-LD Organization */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.domain,
    logo: `${SITE.domain}/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      contactType: "Sales",
      email: SITE.email,
      areaServed: "Worldwide",
      availableLanguage: ["English", "Chinese"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address,
      addressCountry: "CN",
    },
  };
}

/** JSON-LD BreadcrumbList */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${SITE.domain}${item.path}`,
    })),
  };
}
