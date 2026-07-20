import type { Metadata } from "next";
import { cache } from "react";
import ProductDetailTemplate from "@/components/products/templates/ProductDetailTemplate";
import { thermalLabel4x6Config } from "@/config/product-pages/thermal-label-4x6in";
import { SITE } from "@/config/siteData";
import { resolveProductDetailImages } from "@/lib/product-pages/product-detail-images";
import { buildProductDetailMetadata } from "@/lib/product-pages/product-detail-metadata";
import { buildProductDetailSchemas } from "@/lib/product-pages/product-detail-schema";

const resolveImages = cache(() => resolveProductDetailImages(thermalLabel4x6Config));

export const revalidate = 86400; // 24 hours: static product content

export async function generateMetadata(): Promise<Metadata> {
  const images = await resolveImages();
  return buildProductDetailMetadata(thermalLabel4x6Config, images.hero);
}

export default async function ThermalLabel4x6Page() {
  const images = await resolveImages();
  const schemas = buildProductDetailSchemas(thermalLabel4x6Config, images.hero);
  const whatsappHref = `${SITE.whatsappUrl}?text=${encodeURIComponent(
    thermalLabel4x6Config.inquiry.initialMessage,
  )}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.product) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }}
      />
      <ProductDetailTemplate
        config={thermalLabel4x6Config}
        images={images}
        whatsappHref={whatsappHref}
      />
    </>
  );
}
