import type { BlogAssetQuery } from "@/lib/blogAssetTypes";

const query = (value: BlogAssetQuery): BlogAssetQuery => value;

export const BLOG_ASSET_QUERIES: Record<string, BlogAssetQuery> = {
  "choose-thermal-paper-gcc-vat-receipts-qr-codes": query({
    preferredAssetIds: ["AST-20260722-008"],
    productLine: "Thermal Paper Rolls",
    markets: ["Middle East", "Global", "EN", "AR"],
    contentTypes: ["Test & Evidence", "Application", "Customization"],
    applications: ["Retail", "Brand Packaging"],
    keywords: ["thermal paper", "receipt", "POS", "QR code", "VAT", "Arabic", "custom printed"],
  }),
  "80mm-vs-57mm-thermal-paper-gcc-pos-systems": query({
    preferredAssetIds: ["AST-20260722-009"],
    productLine: "Thermal Paper Rolls",
    markets: ["Middle East", "Global", "EN"],
    contentTypes: ["Specification", "Compatibility", "Product Main"],
    applications: ["Retail", "Food Service"],
    keywords: ["80mm", "57mm", "POS", "receipt roll", "core", "printer"],
  }),
  "thermal-paper-roll-specification-checklist-middle-east-importers": query({
    preferredAssetIds: ["AST-20260722-045"],
    productLine: "Thermal Paper Rolls",
    markets: ["Middle East", "Global", "EN"],
    contentTypes: ["Specification", "Quality Control", "Packaging & Shipping"],
    applications: ["Retail", "Transport & Logistics", "Warehouse & 3PL"],
    keywords: ["roll width", "core", "GSM", "packing", "carton", "inspection", "thermal paper"],
  }),
  "test-qr-code-readability-thermal-receipt-paper": query({
    preferredAssetIds: ["AST-20260722-035"],
    productLine: "Thermal Paper Rolls",
    markets: ["Middle East", "Global", "EN"],
    contentTypes: ["Test & Evidence", "Quality Control", "Compatibility"],
    applications: ["Retail", "Food Service"],
    keywords: ["QR code", "scan", "readability", "print test", "POS", "receipt paper"],
  }),
  "thermal-paper-hot-warehouses-gcc-storage-risk": query({
    preferredAssetIds: ["AST-20260722-046"],
    productLine: "Thermal Paper Rolls",
    markets: ["Middle East", "Global", "EN"],
    contentTypes: ["Packaging & Shipping", "Application", "Quality Control"],
    applications: ["Warehouse & 3PL", "Transport & Logistics", "Retail"],
    keywords: ["heat", "warehouse", "storage", "carton", "transport", "thermal paper"],
  }),
  "arabic-english-custom-receipt-paper-artwork-checklist": query({
    preferredAssetIds: ["AST-20260722-010"],
    productLine: "Thermal Paper Rolls",
    markets: ["Middle East", "Global", "EN", "AR"],
    contentTypes: ["Customization", "Product Detail", "Brand & Company"],
    applications: ["Retail", "Brand Packaging"],
    keywords: ["Arabic", "English", "custom printed", "receipt", "artwork", "proof", "logo"],
  }),
  "thermal-paper-supplier-audit-checklist-middle-east": query({
    preferredAssetIds: ["AST-20260722-046"],
    productLine: "Thermal Paper Rolls",
    markets: ["Middle East", "Global", "EN"],
    contentTypes: ["Quality Control", "Packaging & Shipping", "Product Main"],
    applications: ["Warehouse & 3PL", "Transport & Logistics", "Retail"],
    keywords: ["supplier audit", "factory", "batch", "inspection", "thermal paper", "pallet"],
  }),
  "how-to-compare-thermal-paper-quotations-beyond-price": query({
    preferredAssetIds: ["AST-20260722-045"],
    productLine: "Thermal Paper Rolls",
    markets: ["Middle East", "Global", "EN"],
    contentTypes: ["Specification", "Quality Control", "Packaging & Shipping"],
    applications: ["Retail", "Warehouse & 3PL"],
    keywords: ["quotation", "price", "roll length", "GSM", "carton", "thermal paper"],
  }),
  "thermal-paper-sample-approval-and-batch-acceptance-plan": query({
    preferredAssetIds: ["AST-20260722-035"],
    productLine: "Thermal Paper Rolls",
    markets: ["Middle East", "Global", "EN"],
    contentTypes: ["Test & Evidence", "Quality Control", "Compatibility"],
    applications: ["Retail", "Warehouse & 3PL"],
    keywords: ["sample approval", "batch acceptance", "inspection", "thermal paper", "printer test"],
  }),
  "thermal-paper-packaging-container-loading-checklist-gcc": query({
    preferredAssetIds: ["AST-20260722-045", "AST-20260722-046"],
    productLine: "Thermal Paper Rolls",
    markets: ["Middle East", "Global", "EN"],
    contentTypes: ["Packaging & Shipping", "Quality Control"],
    applications: ["Transport & Logistics", "Warehouse & 3PL"],
    keywords: ["packaging", "container loading", "carton", "pallet", "GCC", "thermal paper"],
  }),
  "thermal-paper-for-supermarkets-and-convenience-store-pos": query({
    preferredAssetIds: ["AST-20260722-009"],
    productLine: "Thermal Paper Rolls",
    markets: ["Middle East", "Global", "EN"],
    contentTypes: ["Application", "Compatibility", "Product Main"],
    applications: ["Retail"],
    keywords: ["supermarket", "convenience store", "POS", "receipt roll", "80mm", "thermal paper"],
  }),
  "restaurant-kitchen-pos-thermal-paper-selection-guide": query({
    preferredAssetIds: ["AST-20260722-008"],
    productLine: "Thermal Paper Rolls",
    markets: ["Middle East", "Global", "EN"],
    contentTypes: ["Application", "Compatibility"],
    applications: ["Food Service"],
    keywords: ["restaurant", "kitchen", "POS", "thermal paper", "receipt roll"],
  }),
  "atm-banking-receipt-paper-specification-guide": query({
    preferredAssetIds: ["AST-20260722-035", "AST-20260722-009"],
    productLine: "Thermal Paper Rolls",
    markets: ["Middle East", "Global", "EN"],
    contentTypes: ["Specification", "Compatibility", "Quality Control"],
    applications: ["Institutional", "Retail"],
    keywords: ["ATM", "banking", "receipt paper", "terminal", "57mm", "thermal paper"],
  }),
  "fuel-station-outdoor-payment-terminal-thermal-paper-guide": query({
    preferredAssetIds: ["AST-20260722-046", "AST-20260722-045"],
    productLine: "Thermal Paper Rolls",
    markets: ["Middle East", "Global", "EN"],
    contentTypes: ["Application", "Quality Control", "Packaging & Shipping"],
    applications: ["Transport & Logistics", "Retail"],
    keywords: ["fuel station", "outdoor terminal", "payment terminal", "thermal paper", "packing"],
  }),
};

export function getBlogAssetQuery(slug: string): BlogAssetQuery | undefined {
  return BLOG_ASSET_QUERIES[slug];
}
