import type { Metadata } from "next";
import { cache } from "react";
import ProductDetailTemplate from "@/components/products/templates/ProductDetailTemplate";
import { thermalRoll110x80Config } from "@/config/product-pages/thermal-roll-110x80mm";
import { SITE } from "@/config/siteData";
import { resolveProductDetailImages } from "@/lib/product-pages/product-detail-images";
import { buildProductDetailMetadata } from "@/lib/product-pages/product-detail-metadata";
import { buildProductDetailSchemas } from "@/lib/product-pages/product-detail-schema";

const resolveImages = cache(() => resolveProductDetailImages(thermalRoll110x80Config));

export async function generateMetadata(): Promise<Metadata> {
  const images = await resolveImages();
  return buildProductDetailMetadata(thermalRoll110x80Config, images.hero);
}

export default async function ThermalRoll110x80Page() {
  const images = await resolveImages();
  const schemas = buildProductDetailSchemas(thermalRoll110x80Config, images.hero);
  const whatsappHref = `${SITE.whatsappUrl}?text=${encodeURIComponent(
    "Hello, I need a 110x80mm thermal paper roll review. I can send the printer model, print width, current roll, quantity, packing and destination.",
  )}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.product) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
      <ProductDetailTemplate config={thermalRoll110x80Config} images={images} whatsappHref={whatsappHref} />
    </>
  );
}
