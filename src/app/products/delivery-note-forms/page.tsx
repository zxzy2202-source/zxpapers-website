import type { Metadata } from "next";
import { cache } from "react";
import ProductCategoryTemplate from "@/components/products/category/ProductCategoryTemplate";
import { deliveryNoteFormsCategoryConfig } from "@/config/product-categories/delivery-note-forms";
import { SITE } from "@/config/siteData";
import { resolveProductCategoryImages } from "@/lib/product-pages/product-category-images";
import { buildProductCategoryMetadata } from "@/lib/product-pages/product-category-metadata";
import { buildProductCategorySchemas } from "@/lib/product-pages/product-category-schema";

const resolveImages = cache(() =>
  resolveProductCategoryImages(deliveryNoteFormsCategoryConfig),
);

export async function generateMetadata(): Promise<Metadata> {
  const images = await resolveImages();
  return buildProductCategoryMetadata(deliveryNoteFormsCategoryConfig, images.hero);
}

export default async function DeliveryNoteFormsPage() {
  const images = await resolveImages();
  const schemas = buildProductCategorySchemas(
    deliveryNoteFormsCategoryConfig,
    images.hero,
  );
  const whatsappHref = `${SITE.whatsappUrl}?text=${encodeURIComponent(
    deliveryNoteFormsCategoryConfig.inquiry.initialMessage,
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
        config={deliveryNoteFormsCategoryConfig}
        images={images}
        whatsappHref={whatsappHref}
      />
    </>
  );
}
