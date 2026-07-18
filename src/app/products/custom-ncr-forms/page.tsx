import type { Metadata } from "next";
import { cache } from "react";
import ProductCategoryTemplate from "@/components/products/category/ProductCategoryTemplate";
import { customNcrFormsCategoryConfig } from "@/config/product-categories/custom-ncr-forms";
import { SITE } from "@/config/siteData";
import { resolveProductCategoryImages } from "@/lib/product-pages/product-category-images";
import { buildProductCategoryMetadata } from "@/lib/product-pages/product-category-metadata";
import { buildProductCategorySchemas } from "@/lib/product-pages/product-category-schema";

const resolveImages = cache(() =>
  resolveProductCategoryImages(customNcrFormsCategoryConfig),
);

export async function generateMetadata(): Promise<Metadata> {
  const images = await resolveImages();
  return buildProductCategoryMetadata(customNcrFormsCategoryConfig, images.hero);
}

export default async function CustomNcrFormsPage() {
  const images = await resolveImages();
  const schemas = buildProductCategorySchemas(
    customNcrFormsCategoryConfig,
    images.hero,
  );
  const whatsappHref = `${SITE.whatsappUrl}?text=${encodeURIComponent(
    customNcrFormsCategoryConfig.inquiry.initialMessage,
  )}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.collection) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }}
      />
      <ProductCategoryTemplate
        config={customNcrFormsCategoryConfig}
        images={images}
        whatsappHref={whatsappHref}
      />
    </>
  );
}
