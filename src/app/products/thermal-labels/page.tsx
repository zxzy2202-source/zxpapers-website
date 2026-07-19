import type { Metadata } from "next";
import { cache } from "react";
import ProductCategoryTemplate from "@/components/products/category/ProductCategoryTemplate";
import { thermalLabelsCategoryConfig } from "@/config/product-categories/thermal-labels";
import { SITE } from "@/config/siteData";
import { resolveProductCategoryImages } from "@/lib/product-pages/product-category-images";
import { buildProductCategoryMetadata } from "@/lib/product-pages/product-category-metadata";
import { buildProductCategorySchemas } from "@/lib/product-pages/product-category-schema";

const resolveImages = cache(() =>
  resolveProductCategoryImages(thermalLabelsCategoryConfig),
);

export async function generateMetadata(): Promise<Metadata> {
  const images = await resolveImages();
  return buildProductCategoryMetadata(thermalLabelsCategoryConfig, images.hero);
}

export const revalidate = 86400; // 24 hours: static product/market content

export default async function ThermalLabelsPage() {
  const images = await resolveImages();
  const schemas = buildProductCategorySchemas(
    thermalLabelsCategoryConfig,
    images.hero,
  );
  const whatsappHref = `${SITE.whatsappUrl}?text=${encodeURIComponent(
    "Hello, I need a thermal label supply review. I can send the printer, size, surface, environment, material, adhesive, quantity, packing, destination and evidence requirements.",
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
        config={thermalLabelsCategoryConfig}
        images={images}
        whatsappHref={whatsappHref}
      />
    </>
  );
}
