import type { BlogAssetQuery } from "@/lib/blogAssetTypes";

const query = (value: BlogAssetQuery): BlogAssetQuery => value;

export const BLOG_ASSET_QUERIES: Record<string, BlogAssetQuery> = {
  "choose-thermal-paper-gcc-vat-receipts-qr-codes": query({
    productLine: "Thermal Paper Rolls",
    markets: ["Middle East", "Global", "EN", "AR"],
    contentTypes: ["Test & Evidence", "Application", "Customization"],
    applications: ["Retail", "Brand Packaging"],
    keywords: ["thermal paper", "receipt", "POS", "QR code", "VAT", "Arabic", "custom printed"],
  }),
  "80mm-vs-57mm-thermal-paper-gcc-pos-systems": query({
    productLine: "Thermal Paper Rolls",
    markets: ["Middle East", "Global", "EN"],
    contentTypes: ["Specification", "Compatibility", "Product Main"],
    applications: ["Retail", "Food Service"],
    keywords: ["80mm", "57mm", "POS", "receipt roll", "core", "printer"],
  }),
  "thermal-paper-roll-specification-checklist-middle-east-importers": query({
    productLine: "Thermal Paper Rolls",
    markets: ["Middle East", "Global", "EN"],
    contentTypes: ["Specification", "Quality Control", "Packaging & Shipping"],
    applications: ["Retail", "Transport & Logistics", "Warehouse & 3PL"],
    keywords: ["roll width", "core", "GSM", "packing", "carton", "inspection", "thermal paper"],
  }),
  "test-qr-code-readability-thermal-receipt-paper": query({
    productLine: "Thermal Paper Rolls",
    markets: ["Middle East", "Global", "EN"],
    contentTypes: ["Test & Evidence", "Quality Control", "Compatibility"],
    applications: ["Retail", "Food Service"],
    keywords: ["QR code", "scan", "readability", "print test", "POS", "receipt paper"],
  }),
  "thermal-paper-hot-warehouses-gcc-storage-risk": query({
    productLine: "Thermal Paper Rolls",
    markets: ["Middle East", "Global", "EN"],
    contentTypes: ["Packaging & Shipping", "Application", "Quality Control"],
    applications: ["Warehouse & 3PL", "Transport & Logistics", "Retail"],
    keywords: ["heat", "warehouse", "storage", "carton", "transport", "thermal paper"],
  }),
  "arabic-english-custom-receipt-paper-artwork-checklist": query({
    productLine: "Thermal Paper Rolls",
    markets: ["Middle East", "Global", "EN", "AR"],
    contentTypes: ["Customization", "Product Detail", "Brand & Company"],
    applications: ["Retail", "Brand Packaging"],
    keywords: ["Arabic", "English", "custom printed", "receipt", "artwork", "proof", "logo"],
  }),
};

export function getBlogAssetQuery(slug: string): BlogAssetQuery | undefined {
  return BLOG_ASSET_QUERIES[slug];
}
