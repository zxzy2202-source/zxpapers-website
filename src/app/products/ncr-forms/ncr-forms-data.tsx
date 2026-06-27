// NCR Forms & Business Forms product data — parts, form types, applications.
// Design: Global Trade Authority — consistent with can-labels / detergent-labels data.
//
// 注：NCR 暂无品牌实拍图，沿用 Unsplash 兜底（与 can/detergent 同模式）。
// 收敛为单一常量，日后给 R2/CloudFront 真实图只需改这一处。

export const NCR_FORMS_IMG =
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80";

export interface NcrFormPart {
  slug: string;
  /** Short menu/card label, e.g. "2-Part (Duplicate)" */
  label: string;
  badge?: string;
  markets?: string;
  /** One-line description for cards */
  desc: string;
  /** ── Detail-page fields (used by /products/ncr-forms/[part]) ── */
  shortName: string;        // "2-Part NCR Forms"
  h1: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  intro: string;
  /** Each carbonless ply: paper color → where the copy goes */
  copies: { color: string; goesTo: string }[];
  bestFor: string[];
  recommendedForms: string[];
}

export interface NcrFormType {
  anchor: string;
  label: string;
  desc: string;
}

/**
 * 按联数（number of carbonless parts）分类——国际采购最常用的表达。
 * 用于导航大菜单、/products 聚合页浏览区，以及各联数详情子页。
 */
export const ncrFormParts: NcrFormPart[] = [
  {
    slug: "2-part",
    label: "2-Part (Duplicate)",
    badge: "Most Common",
    markets: "Global",
    desc: "One copy for the customer, one for your records — receipts and simple invoices.",
    shortName: "2-Part NCR Forms",
    h1: "2-Part (Duplicate) NCR Forms",
    metaTitle: "2-Part NCR Forms | Duplicate Carbonless Forms Manufacturer",
    metaDescription:
      "Custom printed 2-part (duplicate) NCR carbonless forms for receipts, invoices, and order books. White + color plies, numbering, logo printing, books or sets. MOQ from low volume.",
    keywords:
      "2-part NCR forms, duplicate forms, 2-part carbonless forms, 2 ply NCR, duplicate receipt books, 2-part invoice books, carbonless duplicate forms",
    intro:
      "2-part (duplicate) carbonless forms create one original plus one copy — the simplest and most widely ordered NCR set. Write or print once and both sheets carry the same record, with no carbon paper to insert.",
    copies: [
      { color: "White (CB top)", goesTo: "Original — given to the customer" },
      { color: "Yellow/Pink (CF bottom)", goesTo: "Copy — kept for your records" },
    ],
    bestFor: ["Retail & cash receipts", "Simple invoices", "Sales order pads", "Quotation forms", "Field-service tickets"],
    recommendedForms: ["Receipt Books", "Invoice Forms", "Sales Order Forms"],
  },
  {
    slug: "3-part",
    label: "3-Part (Triplicate)",
    badge: "Popular",
    markets: "Global",
    desc: "Customer, accounts, and warehouse/sales copies — orders and delivery notes.",
    shortName: "3-Part NCR Forms",
    h1: "3-Part (Triplicate) NCR Forms",
    metaTitle: "3-Part NCR Forms | Triplicate Carbonless Forms Manufacturer",
    metaDescription:
      "Custom printed 3-part (triplicate) NCR carbonless forms for invoices, delivery notes, and purchase orders. Three color plies, sequential numbering, logo printing. MOQ from low volume.",
    keywords:
      "3-part NCR forms, triplicate forms, 3-part carbonless forms, 3 ply NCR, triplicate invoice books, 3-part delivery note, carbonless triplicate forms",
    intro:
      "3-part (triplicate) carbonless forms produce an original and two copies — the standard choice when a document must be split between the customer, your accounts team, and a warehouse or sales record.",
    copies: [
      { color: "White (CB top)", goesTo: "Original — customer copy" },
      { color: "Pink (CFB middle)", goesTo: "Accounts / finance copy" },
      { color: "Yellow (CF bottom)", goesTo: "Warehouse / sales file copy" },
    ],
    bestFor: ["Invoices with accounts copy", "Delivery & dispatch notes", "Purchase orders", "Goods-received notes", "Work orders"],
    recommendedForms: ["Invoice Forms", "Delivery Notes", "Purchase Order Forms"],
  },
  {
    slug: "4-part",
    label: "4-Part (Quadruplicate)",
    markets: "Global",
    desc: "Logistics, finance, bank, and institutional copies for multi-step approval flows.",
    shortName: "4-Part NCR Forms",
    h1: "4-Part (Quadruplicate) NCR Forms",
    metaTitle: "4-Part NCR Forms | Quadruplicate Carbonless Forms Manufacturer",
    metaDescription:
      "Custom printed 4-part (quadruplicate) NCR carbonless forms for logistics, finance, and institutional workflows. Four color plies, numbering, logo printing, books or continuous. MOQ from low volume.",
    keywords:
      "4-part NCR forms, quadruplicate forms, 4-part carbonless forms, 4 ply NCR, quadruplicate invoice, 4-part waybill, carbonless quadruplicate forms",
    intro:
      "4-part (quadruplicate) carbonless forms create an original and three copies, used where a single document moves through several departments — logistics, finance, the bank, and an institutional or customer record.",
    copies: [
      { color: "White (CB top)", goesTo: "Original — customer / lead copy" },
      { color: "Pink (CFB)", goesTo: "Logistics / dispatch copy" },
      { color: "Yellow (CFB)", goesTo: "Finance / accounts copy" },
      { color: "Green (CF bottom)", goesTo: "Bank / institutional file copy" },
    ],
    bestFor: ["Logistics & waybills", "Bank & financial vouchers", "Multi-department orders", "Insurance forms", "Government documents"],
    recommendedForms: ["Waybill & Logistics Forms", "Invoice Forms", "Purchase Order Forms"],
  },
  {
    slug: "multi-part",
    label: "Multi-Part (5+ Ply)",
    badge: "Complex Flows",
    markets: "Global",
    desc: "Customs, transport, banking, and agency workflows needing five or more copies.",
    shortName: "Multi-Part NCR Forms",
    h1: "Multi-Part (5+ Ply) NCR Forms",
    metaTitle: "Multi-Part NCR Forms | 5+ Ply Carbonless Forms Manufacturer",
    metaDescription:
      "Custom printed multi-part (5+ ply) NCR carbonless forms for customs, transport, banking, and agency workflows. Configurable ply colors, numbering, logo, books or continuous. MOQ from low volume.",
    keywords:
      "multi-part NCR forms, 5-part carbonless forms, multi-ply NCR, 5 ply forms, customs forms, multi-part business forms, carbonless multi-part forms",
    intro:
      "Multi-part (5+ ply) carbonless forms are built for complex approval chains — customs, transport, banking, and agency workflows where five or more parties each need a copy of the same document.",
    copies: [
      { color: "White (CB top)", goesTo: "Original record" },
      { color: "Color plies (CFB ×3+)", goesTo: "Each department / party copy" },
      { color: "Final (CF bottom)", goesTo: "Archive / audit copy" },
    ],
    bestFor: ["Customs declarations", "Transport & freight documents", "Banking & financial flows", "Agency approvals", "Audit-trail records"],
    recommendedForms: ["Waybill & Logistics Forms", "Business & Office Forms", "Purchase Order Forms"],
  },
];

/** 按 slug 取联数详情。 */
export function getNcrPart(slug: string): NcrFormPart | undefined {
  return ncrFormParts.find((p) => p.slug === slug);
}

/** 按单据类型（document type）分类——覆盖买家搜索关键词。 */
export const ncrFormTypes: NcrFormType[] = [
  { anchor: "invoice", label: "Invoice Forms", desc: "Carbonless invoice books and sets — 2/3/4-part, numbered, tax-ready." },
  { anchor: "receipt", label: "Receipt Books", desc: "Carbonless receipt books and payment vouchers for retail and field sales." },
  { anchor: "delivery-note", label: "Delivery Notes", desc: "Delivery order / goods-received forms with driver, warehouse, and customer copies." },
  { anchor: "purchase-order", label: "Purchase Order Forms", desc: "PO forms with custom fields, numbering, and supplier/buyer copies." },
  { anchor: "waybill", label: "Waybill & Logistics Forms", desc: "Waybills, shipping and warehouse in/out forms for couriers and 3PLs." },
  { anchor: "business", label: "Business & Office Forms", desc: "Sales orders, quotations, work orders, and general office records." },
];
