import type { Metadata } from "next";
import { cache } from "react";
import ProductDetailTemplate from "@/components/products/templates/ProductDetailTemplate";
import { thermalRoll57x50Config } from "@/config/product-pages/thermal-roll-57x50mm";
import { SITE } from "@/config/siteData";
import { resolveProductDetailImages } from "@/lib/product-pages/product-detail-images";
import { buildProductDetailMetadata } from "@/lib/product-pages/product-detail-metadata";
import { buildProductDetailSchemas } from "@/lib/product-pages/product-detail-schema";

const resolveImages = cache(() => resolveProductDetailImages(thermalRoll57x50Config));

export async function generateMetadata(): Promise<Metadata> {
  const images = await resolveImages();
  return buildProductDetailMetadata(thermalRoll57x50Config, images.hero);
}

export default async function ThermalRoll57x50Page() {
  const images = await resolveImages();
  const schemas = buildProductDetailSchemas(thermalRoll57x50Config, images.hero);
  const whatsappHref = `${SITE.whatsappUrl}?text=${encodeURIComponent(
    "Hello, I need a 57x50mm thermal paper roll review. I can send the printer model, current roll, core, quantity, packing and destination.",
  )}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.product) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
      <ProductDetailTemplate config={thermalRoll57x50Config} images={images} whatsappHref={whatsappHref} />
    </>
  );
}
