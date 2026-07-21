import type { Metadata } from "next";
import { cache } from "react";
import ProductCategoryTemplate from "@/components/products/category/ProductCategoryTemplate";
import { blankThermalLabelsCategoryConfig } from "@/config/product-categories/blank-thermal-labels";
import { SITE } from "@/config/siteData";
import { resolveProductCategoryImages } from "@/lib/product-pages/product-category-images";
import { buildProductCategoryMetadata } from "@/lib/product-pages/product-category-metadata";
import { buildProductCategorySchemas } from "@/lib/product-pages/product-category-schema";

const resolveImages = cache(() =>
  resolveProductCategoryImages(blankThermalLabelsCategoryConfig),
);

const serializeJsonLd = (value: unknown) => JSON.stringify(value).replace(/</g, "\\u003c");

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const images = await resolveImages();
  return buildProductCategoryMetadata(blankThermalLabelsCategoryConfig, images.hero);
}

export default async function BlankThermalLabelsPage() {
  const images = await resolveImages();
  const schemas = buildProductCategorySchemas(
    blankThermalLabelsCategoryConfig,
    images.hero,
  );
  const whatsappHref = `${SITE.whatsappUrl}?text=${encodeURIComponent(
    blankThermalLabelsCategoryConfig.inquiry.initialMessage,
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
        config={blankThermalLabelsCategoryConfig}
        images={images}
        whatsappHref={whatsappHref}
      />
    </>
  );
}
