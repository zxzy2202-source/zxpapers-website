import type { Metadata } from "next";
import { cache } from "react";
import ProductDetailTemplate from "@/components/products/templates/ProductDetailTemplate";
import { linerlessDetailConfig } from "@/config/product-pages/linerless-3-1-8-x-263";
import { SITE } from "@/config/siteData";
import { getSlotImages } from "@/lib/imageSlotUtils";
import { buildProductDetailMetadata } from "@/lib/product-pages/product-detail-metadata";
import { buildProductDetailSchemas } from "@/lib/product-pages/product-detail-schema";

const resolveImages = cache(async () => {
  const images = await getSlotImages([
    linerlessDetailConfig.images.hero,
    linerlessDetailConfig.images.application,
    linerlessDetailConfig.images.quality,
  ]);

  return {
    hero: images[linerlessDetailConfig.images.hero.slot],
    application: images[linerlessDetailConfig.images.application.slot],
    quality: images[linerlessDetailConfig.images.quality.slot],
  };
});

export async function generateMetadata(): Promise<Metadata> {
  const images = await resolveImages();
  return buildProductDetailMetadata(linerlessDetailConfig, images.hero);
}

export default async function LinerlessLabelDetailPage() {
  const images = await resolveImages();
  const schemas = buildProductDetailSchemas(linerlessDetailConfig, images.hero);
  const whatsappHref = `${SITE.whatsappUrl}?text=${encodeURIComponent(
    "Hello, I need a review for 3 1/8 x 263' linerless labels. I can send the printer model, core, maximum roll diameter, adhesive requirement, application surface, quantity, packing and destination.",
  )}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.product) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
      <ProductDetailTemplate
        config={linerlessDetailConfig}
        images={images}
        whatsappHref={whatsappHref}
      />
    </>
  );
}
