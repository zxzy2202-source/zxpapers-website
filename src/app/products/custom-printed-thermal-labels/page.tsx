import type { Metadata } from "next";
import { cache } from "react";
import ProductCategoryTemplate from "@/components/products/category/ProductCategoryTemplate";
import { customPrintedThermalLabelsCategoryConfig } from "@/config/product-categories/custom-printed-thermal-labels";
import { SITE } from "@/config/siteData";
import { resolveProductCategoryImages } from "@/lib/product-pages/product-category-images";
import { buildProductCategoryMetadata } from "@/lib/product-pages/product-category-metadata";
import { buildProductCategorySchemas } from "@/lib/product-pages/product-category-schema";

const resolveImages = cache(() =>
  resolveProductCategoryImages(customPrintedThermalLabelsCategoryConfig),
);

export async function generateMetadata(): Promise<Metadata> {
  const images = await resolveImages();
  return buildProductCategoryMetadata(
    customPrintedThermalLabelsCategoryConfig,
    images.hero,
  );
}

export const revalidate = 86400; // 24 hours: static product/market content

export default async function CustomPrintedThermalLabelsPage() {
  const images = await resolveImages();
  const schemas = buildProductCategorySchemas(
    customPrintedThermalLabelsCategoryConfig,
    images.hero,
  );
  const whatsappHref = `${SITE.whatsappUrl}?text=${encodeURIComponent(
    customPrintedThermalLabelsCategoryConfig.inquiry.initialMessage,
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
        config={customPrintedThermalLabelsCategoryConfig}
        images={images}
        whatsappHref={whatsappHref}
      />
    </>
  );
}
