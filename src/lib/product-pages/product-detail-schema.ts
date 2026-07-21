import { SITE } from "@/config/siteData";
import type { ProductDetailConfig } from "@/components/products/templates/product-detail-types";

export function buildProductDetailSchemas(
  config: ProductDetailConfig,
  image: string,
) {
  const url = `${SITE.domain}${config.canonicalPath}`;
  // These pages are quote-led B2B product guides rather than online
  // merchant listings. Use a WebPage topic entity until a real price,
  // review, or aggregate rating is available for a specific SKU.
  const product = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    name: config.productName,
    description: config.directAnswer.answer,
    image: [image],
    url,
    about: {
      "@type": "Thing",
      name: config.productName,
      description: config.directAnswer.answer,
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: config.breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE.domain}${item.path}`,
    })),
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return { product, breadcrumb, faq };
}
