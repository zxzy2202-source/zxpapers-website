import { MetadataRoute } from "next";
import { SITE } from "@/config/siteData";
import { readAllPosts } from "@/lib/postsStore";

// ISR: regenerate sitemap every hour so new blog posts are picked up.
// Note: do NOT combine with `force-dynamic` — it would override revalidate
// and cause the sitemap to be regenerated on every request.
export const revalidate = 3600; // 1 hour

const BASE = SITE.domain;
function uniqueByUrl(entries: MetadataRoute.Sitemap): MetadataRoute.Sitemap {
  const seen = new Set<string>();
  return entries.filter((entry) => {
    if (seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Core Pages (priority 1.0 / 0.9)
  const corePages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/products`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/products/receipt-paper-rolls`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/products/till-rolls`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/products/bpa-free-thermal-paper`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/products/bps-free-thermal-paper`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/products/colored-thermal-paper`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/oem`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/manufacturing`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/faq`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/specifications`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/contact/oem-partnership`, changeFrequency: "monthly", priority: 0.8 },
  ];

  // Market Hub Pages (priority 0.85)
  const marketHubs: MetadataRoute.Sitemap = [
    { url: `${BASE}/markets`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/markets/africa`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/markets/middle-east`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/markets/southeast-asia`, changeFrequency: "monthly", priority: 0.85 },
  ];

  // Africa Country Pages (priority 0.5; sales/trust pages, near-zero search demand)
  const africaPages: MetadataRoute.Sitemap = [
    "nigeria", "kenya", "ghana", "south-africa", "tanzania", "ethiopia",
  ].map((country) => ({
    url: `${BASE}/markets/africa/${country}`,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  // Middle East Country Pages (priority 0.5; sales/trust pages, near-zero search demand)
  const middleEastPages: MetadataRoute.Sitemap = [
    "uae", "saudi-arabia", "egypt", "turkey",
  ].map((country) => ({
    url: `${BASE}/markets/middle-east/${country}`,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  // Southeast Asia Country Pages (priority 0.5; sales/trust pages, near-zero search demand)
  const seaPages: MetadataRoute.Sitemap = [
    "thailand", "indonesia", "vietnam", "philippines", "malaysia", "singapore",
  ].map((country) => ({
    url: `${BASE}/markets/southeast-asia/${country}`,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  // Thermal Rolls Product Pages (priority 0.85)
  const thermalRollPages: MetadataRoute.Sitemap = [
    "57x30mm", "57x40mm", "57x50mm", "80x70mm", "80x80mm", "110x80mm",
  ].map((size) => ({
    url: `${BASE}/products/thermal-rolls/${size}`,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // Thermal Labels Product Pages (priority 0.85)
  const thermalLabelPages: MetadataRoute.Sitemap = [
    "1x1in", "2x1in", "2x4in", "3x2in", "4x3in", "4x6in", "blank",
  ].map((size) => ({
    url: `${BASE}/products/thermal-labels/${size}`,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // Detergent Labels Product Pages (priority 0.8)
  const detergentLabelPages: MetadataRoute.Sitemap = [
    "100x100mm", "120x80mm", "70x200mm", "80x150mm", "90x120mm", "blank", "custom-printed",
  ].map((size) => ({
    url: `${BASE}/products/detergent-labels/${size}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Other Product Category Pages (priority 0.8)
  const productCategoryPages: MetadataRoute.Sitemap = [
    // Canonical content URLs only; former aliases redirect here.
    "thermal-paper-rolls",
    "thermal-labels",
    "can-labels",
    "detergent-labels",
    "phenol-free-thermal-paper",
    "custom-printed-thermal-labels",
    "barcode-labels",
    "product-labels",
    "thermal-paper-rolls/blank",
    "thermal-paper-rolls/custom-printed",
    "thermal-labels/blank",
    "shipping-labels",
    "till-rolls",
    "linerless-labels",
    "linerless-labels/3-1-8-x-263",
    "ncr-forms",
    "custom-ncr-forms",
    "continuous-computer-forms",
    "ncr-receipt-books",
    "ncr-invoice-books",
    "delivery-note-forms",
    "government-ncr-forms",
    "port-customs-air-cargo-ncr-forms",
    "field-service-ncr-forms",
    "auto-repair-ncr-forms",
    "logistics-warehouse-ncr-forms",
    "medical-pharmacy-ncr-forms",
    "ncr-forms/2-part",
    "ncr-forms/3-part",
    "ncr-forms/4-part",
    "ncr-forms/multi-part",
  ].map((slug) => ({
    url: `${BASE}/products/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Other Static Pages (priority 0.7)
  const otherPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/zhixinpaper-vs-panda-paper-roll`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/best-thermal-paper-suppliers`, changeFrequency: "monthly", priority: 0.7 },
  ];

  // Manufacturing Sub-Pages (priority 0.7)
  const manufacturingPages: MetadataRoute.Sitemap = [
    "certifications", "equipment", "quality-control",
  ].map((slug) => ({
    url: `${BASE}/manufacturing/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // OEM Sub-Pages (priority 0.75)
  const oemPages: MetadataRoute.Sitemap = [
    "case-studies", "custom-printing", "design-support",
    "ip-protection", "packaging", "quality-assurance",
  ].map((slug) => ({
    url: `${BASE}/oem/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  // Resources Sub-Pages (priority 0.65)
  const resourcePages: MetadataRoute.Sitemap = [
    "application-cases", "industry-insights", "oem-guide", "product-knowledge",
  ].map((slug) => ({
    url: `${BASE}/resources/${slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.65,
  }));

  // Dynamic Blog Posts
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const posts = await readAllPosts();
    blogPages = posts
      .filter((p) => p.published)
      .map((p) => ({
        url: `${BASE}/blog/${p.slug}`,
        lastModified: p.updatedAt
          ? new Date(p.updatedAt).toISOString().split("T")[0]
          : undefined,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      }));
  } catch {
    blogPages = [];
  }

  return uniqueByUrl([
    ...corePages,
    ...marketHubs,
    ...africaPages,
    ...middleEastPages,
    ...seaPages,
    ...thermalRollPages,
    ...thermalLabelPages,
    ...detergentLabelPages,
    ...productCategoryPages,
    ...otherPages,
    ...manufacturingPages,
    ...oemPages,
    ...resourcePages,
    ...blogPages,
  ]);
}
