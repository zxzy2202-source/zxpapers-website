import type { Metadata } from "next";
import { cache } from "react";
import ProductCategoryTemplate from "@/components/products/category/ProductCategoryTemplate";
import { customPrintedThermalRollsCategoryConfig } from "@/config/product-categories/custom-printed-thermal-rolls";
import { SITE } from "@/config/siteData";
import { resolveProductCategoryImages } from "@/lib/product-pages/product-category-images";
import { buildProductCategoryMetadata } from "@/lib/product-pages/product-category-metadata";
import { buildProductCategorySchemas } from "@/lib/product-pages/product-category-schema";

const resolveImages = cache(() =>
  resolveProductCategoryImages(customPrintedThermalRollsCategoryConfig),
);

const serializeJsonLd = (value: unknown) => JSON.stringify(value).replace(/</g, "\\u003c");

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const images = await resolveImages();
  return buildProductCategoryMetadata(
    customPrintedThermalRollsCategoryConfig,
    images.hero,
  );
}

export default async function CustomPrintedThermalRollsPage() {
  const images = await resolveImages();
  const schemas = buildProductCategorySchemas(
    customPrintedThermalRollsCategoryConfig,
    images.hero,
  );
  const whatsappHref = `${SITE.whatsappUrl}?text=${encodeURIComponent(
    customPrintedThermalRollsCategoryConfig.inquiry.initialMessage,
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
        config={customPrintedThermalRollsCategoryConfig}
        images={images}
        whatsappHref={whatsappHref}
      />
    </>
  );
}
