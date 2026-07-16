import type { Metadata } from "next";
import { SITE } from "@/config/siteData";
import type { ProductDetailConfig } from "@/components/products/templates/product-detail-types";

export function buildProductDetailMetadata(
  config: ProductDetailConfig,
  image: string,
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
      images: [{ url: image, alt: config.images.hero.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: config.metadata.title,
      description: config.metadata.description,
      images: [image],
    },
  };
}
