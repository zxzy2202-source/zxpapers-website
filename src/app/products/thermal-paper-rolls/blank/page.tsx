import type { Metadata } from "next";
import { cache } from "react";
import ProductCategoryTemplate from "@/components/products/category/ProductCategoryTemplate";
import { blankThermalPaperRollsCategoryConfig } from "@/config/product-categories/blank-thermal-paper-rolls";
import { SITE } from "@/config/siteData";
import { resolveProductCategoryImages } from "@/lib/product-pages/product-category-images";
import { buildProductCategoryMetadata } from "@/lib/product-pages/product-category-metadata";
import { buildProductCategorySchemas } from "@/lib/product-pages/product-category-schema";

const resolveImages = cache(() =>
  resolveProductCategoryImages(blankThermalPaperRollsCategoryConfig),
);

const serializeJsonLd = (value: unknown) => JSON.stringify(value).replace(/</g, "\\u003c");

export const revalidate = 86400; // 24 hours: static category content

export async function generateMetadata(): Promise<Metadata> {
  const images = await resolveImages();
  return buildProductCategoryMetadata(blankThermalPaperRollsCategoryConfig, images.hero);
}

export default async function BlankThermalPaperRollsPage() {
  const images = await resolveImages();
  const schemas = buildProductCategorySchemas(
    blankThermalPaperRollsCategoryConfig,
    images.hero,
  );
  const whatsappHref = `${SITE.whatsappUrl}?text=${encodeURIComponent(
    blankThermalPaperRollsCategoryConfig.inquiry.initialMessage,
  )}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(schemas.collection) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(schemas.breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(schemas.faq) }}
      />
      <ProductCategoryTemplate
        config={blankThermalPaperRollsCategoryConfig}
        images={images}
        whatsappHref={whatsappHref}
      />
    </>
  );
}
