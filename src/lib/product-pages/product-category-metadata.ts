import type { Metadata } from "next";
import type { ProductCategoryConfig } from "@/components/products/category/product-category-types";
import { SITE } from "@/config/siteData";

export function buildProductCategoryMetadata(
  config: ProductCategoryConfig,
  heroImage: string,
): Metadata {
  const canonical = `${SITE.domain}${config.canonicalPath}`;

  return {
    title: { absolute: config.metadata.title },
    description: config.metadata.description,
    keywords: config.metadata.keywords.join(", "),
    alternates: { canonical },
    openGraph: {
      type: "website",
      title: config.metadata.title,
      description: config.metadata.description,
      url: canonical,
      siteName: SITE.name,
      images: [{ url: heroImage, alt: config.hero.image.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: config.metadata.title,
      description: config.metadata.description,
      images: [heroImage],
    },
  };
}
