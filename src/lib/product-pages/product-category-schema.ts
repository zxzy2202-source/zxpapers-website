import type { ProductCategoryConfig } from "@/components/products/category/product-category-types";
import { SITE } from "@/config/siteData";

export function buildProductCategorySchemas(
  config: ProductCategoryConfig,
  heroImage: string,
) {
  const url = `${SITE.domain}${config.canonicalPath}`;
  const catalogEntries = [
    ...config.families
      .filter((family) => family.href.startsWith("/"))
      .map((family) => ({ name: family.title, path: family.href })),
    ...config.sizes.map((size) => ({
      name: `${size.label} ${config.categoryName}`,
      path: `${config.canonicalPath}/${size.slug}`,
    })),
  ];
  const distinctEntries = Array.from(
    new Map(catalogEntries.map((entry) => [entry.path, entry])).values(),
  );

  const collection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#collection`,
    name: config.categoryName,
    alternateName: config.alternateNames,
    description: config.metadata.description,
    url,
    isPartOf: { "@id": `${SITE.domain}/#website` },
    primaryImageOfPage: { "@type": "ImageObject", url: heroImage },
    audience: {
      "@type": "BusinessAudience",
      audienceType: config.audience,
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: distinctEntries.length,
      itemListElement: distinctEntries.map((entry, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: entry.name,
        url: `${SITE.domain}${entry.path}`,
      })),
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

  return { collection, breadcrumb, faq };
}
