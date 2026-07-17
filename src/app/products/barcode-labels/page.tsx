import type { Metadata } from "next";
import { cache } from "react";
import ProductCategoryTemplate from "@/components/products/category/ProductCategoryTemplate";
import { barcodeLabelsCategoryConfig } from "@/config/product-categories/barcode-labels";
import { SITE } from "@/config/siteData";
import { resolveProductCategoryImages } from "@/lib/product-pages/product-category-images";
import { buildProductCategoryMetadata } from "@/lib/product-pages/product-category-metadata";
import { buildProductCategorySchemas } from "@/lib/product-pages/product-category-schema";

const resolveImages = cache(() =>
  resolveProductCategoryImages(barcodeLabelsCategoryConfig),
);

export async function generateMetadata(): Promise<Metadata> {
  const images = await resolveImages();
  return buildProductCategoryMetadata(barcodeLabelsCategoryConfig, images.hero);
}

export default async function BarcodeLabelsPage() {
  const images = await resolveImages();
  const schemas = buildProductCategorySchemas(
    barcodeLabelsCategoryConfig,
    images.hero,
  );
  const whatsappHref = `${SITE.whatsappUrl}?text=${encodeURIComponent(
    barcodeLabelsCategoryConfig.inquiry.initialMessage,
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
        config={barcodeLabelsCategoryConfig}
        images={images}
        whatsappHref={whatsappHref}
      />
    </>
  );
}
