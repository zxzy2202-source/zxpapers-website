import type { Metadata } from "next";
import { cache } from "react";
import ProductCategoryTemplate from "@/components/products/category/ProductCategoryTemplate";
import {
  GLOBAL_METRIC_SPEC_FORMATS,
  GLOBAL_THERMAL_ROLL_TERMS,
  thermalPaperRollsCategoryConfig,
} from "@/config/product-categories/thermal-paper-rolls";
import { SITE } from "@/config/siteData";
import { resolveProductCategoryImages } from "@/lib/product-pages/product-category-images";
import { buildProductCategoryMetadata } from "@/lib/product-pages/product-category-metadata";
import { buildProductCategorySchemas } from "@/lib/product-pages/product-category-schema";

const resolveImages = cache(() =>
  resolveProductCategoryImages(thermalPaperRollsCategoryConfig),
);

const serializeJsonLd = (value: unknown) => JSON.stringify(value).replace(/</g, "\\u003c");

const terminologySchema = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  name: "Global thermal paper roll terminology and metric specification formats",
  description:
    "Buyer terms and metric size formats used for global OEM, wholesale and private-label thermal paper roll sourcing.",
  url: `${SITE.domain}/products/thermal-paper-rolls#global-roll-terminology`,
  hasDefinedTerm: [
    ...GLOBAL_THERMAL_ROLL_TERMS.map((item) => ({
      "@type": "DefinedTerm",
      name: item.term,
      alternateName: item.aliases,
      description: `${item.marketUse}. ${item.specificationNote}`,
    })),
    ...GLOBAL_METRIC_SPEC_FORMATS.map((item) => ({
      "@type": "DefinedTerm",
      name: item.format,
      description: `${item.meaning}. Confirm: ${item.confirm}.`,
    })),
  ],
};

export const revalidate = 3600; // 1 hour: slot images change infrequently

export async function generateMetadata(): Promise<Metadata> {
  const images = await resolveImages();
  return buildProductCategoryMetadata(thermalPaperRollsCategoryConfig, images.hero);
}

export default async function ThermalPaperRollsPage() {
  const images = await resolveImages();
  const schemas = buildProductCategorySchemas(
    thermalPaperRollsCategoryConfig,
    images.hero,
  );
  const whatsappHref = `${SITE.whatsappUrl}?text=${encodeURIComponent(
    thermalPaperRollsCategoryConfig.inquiry.initialMessage,
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
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(terminologySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(schemas.faq) }}
      />
      <ProductCategoryTemplate
        config={thermalPaperRollsCategoryConfig}
        images={images}
        whatsappHref={whatsappHref}
      />
    </>
  );
}
