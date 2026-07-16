import type { Metadata } from "next";
import { cache } from "react";
import ProductDetailTemplate from "@/components/products/templates/ProductDetailTemplate";
import { thermalRoll80x70Config } from "@/config/product-pages/thermal-roll-80x70mm";
import { SITE } from "@/config/siteData";
import { resolveProductDetailImages } from "@/lib/product-pages/product-detail-images";
import { buildProductDetailMetadata } from "@/lib/product-pages/product-detail-metadata";
import { buildProductDetailSchemas } from "@/lib/product-pages/product-detail-schema";

const resolveImages = cache(() => resolveProductDetailImages(thermalRoll80x70Config));

export async function generateMetadata(): Promise<Metadata> {
  const images = await resolveImages();
  return buildProductDetailMetadata(thermalRoll80x70Config, images.hero);
}

export default async function ThermalRoll80x70Page() {
  const images = await resolveImages();
  const schemas = buildProductDetailSchemas(thermalRoll80x70Config, images.hero);
  const whatsappHref = `${SITE.whatsappUrl}?text=${encodeURIComponent(
    "Hello, I need an 80x70mm thermal paper roll review. I can send the printer model, current roll, core, quantity, packing and destination.",
  )}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.product) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
      <ProductDetailTemplate config={thermalRoll80x70Config} images={images} whatsappHref={whatsappHref} />
    </>
  );
}
