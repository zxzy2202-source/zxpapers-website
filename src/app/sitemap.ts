import { MetadataRoute } from "next";
import { SITE } from "@/config/siteData";

// Required for Next.js static export (output: "export") mode
export const dynamic = "force-static";

const BASE = SITE.domain;
const LAST_MOD = "2026-04-07";

export default function sitemap(): MetadataRoute.Sitemap {
  // ── Core Pages (priority 1.0 / 0.9) ──────────────────────────────────────
  const corePages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: LAST_MOD, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/products`, lastModified: LAST_MOD, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/contact`, lastModified: LAST_MOD, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/oem`, lastModified: LAST_MOD, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/about`, lastModified: LAST_MOD, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/manufacturing`, lastModified: LAST_MOD, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/faq`, lastModified: LAST_MOD, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/specifications`, lastModified: LAST_MOD, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources`, lastModified: LAST_MOD, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/contact/oem-partnership`, lastModified: LAST_MOD, changeFrequency: "monthly", priority: 0.8 },
  ];

  // ── Market Hub Pages (priority 0.85) ─────────────────────────────────────
  const marketHubs: MetadataRoute.Sitemap = [
    { url: `${BASE}/markets`, lastModified: LAST_MOD, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/markets/africa`, lastModified: LAST_MOD, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/markets/middle-east`, lastModified: LAST_MOD, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/markets/middle-east-africa`, lastModified: LAST_MOD, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/markets/southeast-asia`, lastModified: LAST_MOD, changeFrequency: "monthly", priority: 0.85 },
  ];

  // ── Africa Country Pages (priority 0.9) ──────────────────────────────────
  const africaPages: MetadataRoute.Sitemap = [
    "nigeria", "kenya", "ghana", "south-africa", "tanzania", "ethiopia",
  ].map((country) => ({
    url: `${BASE}/markets/africa/${country}`,
    lastModified: LAST_MOD,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // ── Middle East Country Pages (priority 0.9) ─────────────────────────────
  const middleEastPages: MetadataRoute.Sitemap = [
    "uae", "saudi-arabia", "egypt", "turkey",
  ].map((country) => ({
    url: `${BASE}/markets/middle-east/${country}`,
    lastModified: LAST_MOD,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // ── Southeast Asia Country Pages (priority 0.9) ──────────────────────────
  const seaPages: MetadataRoute.Sitemap = [
    "thailand", "indonesia", "vietnam", "philippines", "malaysia", "singapore",
  ].map((country) => ({
    url: `${BASE}/markets/southeast-asia/${country}`,
    lastModified: LAST_MOD,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // ── Thermal Rolls Product Pages (priority 0.85) ───────────────────────────
  const thermalRollPages: MetadataRoute.Sitemap = [
    "57x30mm", "57x40mm", "57x50mm", "80x70mm", "80x80mm", "110x80mm",
  ].map((size) => ({
    url: `${BASE}/products/thermal-rolls/${size}`,
    lastModified: LAST_MOD,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // ── Thermal Labels Product Pages (priority 0.85) ──────────────────────────
  const thermalLabelPages: MetadataRoute.Sitemap = [
    "1x1in", "2x1in", "2x4in", "3x2in", "4x3in", "4x6in", "blank", "custom-printed",
  ].map((size) => ({
    url: `${BASE}/products/thermal-labels/${size}`,
    lastModified: LAST_MOD,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // ── Detergent Labels Product Pages (priority 0.8) ─────────────────────────
  const detergentLabelPages: MetadataRoute.Sitemap = [
    "100x100mm", "120x80mm", "70x200mm", "80x150mm", "90x120mm", "blank", "custom-printed",
  ].map((size) => ({
    url: `${BASE}/products/detergent-labels/${size}`,
    lastModified: LAST_MOD,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // ── Can Labels Product Pages (priority 0.8) ───────────────────────────────
  const canLabelPages: MetadataRoute.Sitemap = [
    "211x400", "211x603", "300x407", "307x510", "401x700", "blank", "custom-printed",
  ].map((size) => ({
    url: `${BASE}/products/can-labels/${size}`,
    lastModified: LAST_MOD,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // ── Other Product Category Pages (priority 0.8) ───────────────────────────
  const productCategoryPages: MetadataRoute.Sitemap = [
    "blank-thermal-labels",
    "blank-thermal-rolls",
    "custom-printed-labels",
    "custom-printed-rolls",
    "thermal-paper-rolls/blank",
    "thermal-paper-rolls/custom-printed",
  ].map((slug) => ({
    url: `${BASE}/products/${slug}`,
    lastModified: LAST_MOD,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // ── Manufacturing Sub-Pages (priority 0.7) ────────────────────────────────
  const manufacturingPages: MetadataRoute.Sitemap = [
    "certifications", "equipment", "quality-control",
  ].map((slug) => ({
    url: `${BASE}/manufacturing/${slug}`,
    lastModified: LAST_MOD,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // ── OEM Sub-Pages (priority 0.75) ─────────────────────────────────────────
  const oemPages: MetadataRoute.Sitemap = [
    "case-studies", "custom-printing", "design-support",
    "ip-protection", "packaging", "quality-assurance",
  ].map((slug) => ({
    url: `${BASE}/oem/${slug}`,
    lastModified: LAST_MOD,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  // ── Resources Sub-Pages (priority 0.65) ───────────────────────────────────
  const resourcePages: MetadataRoute.Sitemap = [
    "application-cases", "industry-insights", "oem-guide", "product-knowledge",
  ].map((slug) => ({
    url: `${BASE}/resources/${slug}`,
    lastModified: LAST_MOD,
    changeFrequency: "weekly" as const,
    priority: 0.65,
  }));

  return [
    ...corePages,
    ...marketHubs,
    ...africaPages,
    ...middleEastPages,
    ...seaPages,
    ...thermalRollPages,
    ...thermalLabelPages,
    ...detergentLabelPages,
    ...canLabelPages,
    ...productCategoryPages,
    ...manufacturingPages,
    ...oemPages,
    ...resourcePages,
  ];
}
