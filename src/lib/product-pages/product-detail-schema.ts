import { SITE } from "@/config/siteData";
import type { ProductDetailConfig } from "@/components/products/templates/product-detail-types";

export function buildProductDetailSchemas(
  config: ProductDetailConfig,
  image: string,
) {
  const url = `${SITE.domain}${config.canonicalPath}`;
  const additionalProperty = config.specifications.flatMap((group) =>
    group.rows.map((row) => ({
      "@type": "PropertyValue",
      name: row.label,
      value: row.value,
    })),
  );

  const product = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${url}#product`,
    name: config.productName,
    description: config.directAnswer.answer,
    category: config.categoryName,
    image: [image],
    url,
    brand: { "@type": "Brand", name: SITE.name },
    manufacturer: { "@id": `${SITE.domain}/#organization` },
    additionalProperty,
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
