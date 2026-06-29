import type { Metadata } from "next";
import { BadgeCheck, Boxes, Factory, MessageSquare, Phone, Printer, ShieldCheck, Truck } from "lucide-react";
import { labelSizes } from "@/config/navigation";
import { SITE } from "@/config/siteData";
import { getSlotImage } from "@/lib/imageSlotUtils";
import { r2Image } from "@/lib/r2";
import ProductCategoryShowcaseTemplate from "@/components/products/ProductCategoryShowcaseTemplate";
import type { ShowcaseBrowseSection } from "@/components/products/ProductCategoryShowcaseTemplate";

export const metadata: Metadata = {
  title: "Barcode Labels Manufacturer | Thermal SKU, Inventory & Asset Labels",
  description:
    "Factory-direct thermal barcode labels for warehouse, retail, and asset tracking — 2×1, 3×2, 1×1 in and custom, rolls or fanfold, Zebra/TSC/Honeywell compatible. BPA-free, OEM, bulk pricing.",
  keywords:
    "barcode labels, thermal barcode labels, sku labels, inventory labels, warehouse labels, asset labels, direct thermal barcode labels, 2x1 barcode labels, 1x1 barcode labels, zebra barcode labels, barcode label manufacturer, bulk barcode labels",
  alternates: { canonical: `${SITE.domain}/products/barcode-labels` },
};

const LABELS_IMG_FALLBACK = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-labels-FgJ5U8LZDHPF5nwmD6Uqa5.webp";

const specs = [
  { label: "Popular Sizes", value: "2×1\", 3×2\", 1×1\", 4×3\" plus custom (±0.5mm)" },
  { label: "Material", value: "Direct thermal (standard / top-coated) or thermal transfer" },
  { label: "Format", value: "Rolls (1\"/3\" core) or fanfold (Z-stack)" },
  { label: "Adhesive", value: "Permanent / removable / freezer-grade (selectable)" },
  { label: "Scan Quality", value: "High-contrast print for reliable 1D & 2D barcode reads" },
  { label: "Printer Compatibility", value: "Zebra, TSC, Honeywell, Godex, SATO, and more" },
  { label: "Coating", value: "BPA-free standard / phenol-free option" },
  { label: "MOQ", value: "Stock sizes from low volume; custom from 5,000 labels" },
  { label: "Lead Time", value: "Stock 3–7 days · custom 10–18 days" },
  { label: "Incoterms", value: "EXW, FOB, CIF, DDP" },
];

const faqs = [
  { q: "What size barcode labels do I need?", a: "Common barcode sizes are 2×1\" for shelf and SKU labels, 1×1\" for small-item and jewelry tags, and 3×2\" or 4×3\" for cartons and asset tags. Tell us your item and scanner and we'll confirm the size and material." },
  { q: "Direct thermal or thermal transfer for barcodes?", a: "Direct thermal suits short-to-medium life labels (shelf, picking, shipping). For long-life or harsh environments (asset tags, cold storage, chemicals), choose thermal transfer with a ribbon. We supply both." },
  { q: "Are your barcode labels compatible with Zebra and TSC printers?", a: "Yes. Our barcode labels are matched to Zebra, TSC, Honeywell, Godex, SATO, and most desktop and industrial label printers by size, core, and perforation. Send your printer model for confirmation." },
  { q: "Will the labels scan reliably?", a: "Yes. We use high-contrast direct thermal coatings and precise die-cutting so 1D and 2D barcodes scan reliably on warehouse and retail scanners, even at speed." },
  { q: "What is the MOQ and lead time?", a: "Stock sizes are available from low volume; custom sizes and adhesives start at 5,000 labels. Stock ships in 3–7 days, custom in 10–18 days, worldwide on EXW, FOB, CIF, and DDP terms." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
    { "@type": "ListItem", position: 2, name: "Products", item: `${SITE.domain}/products` },
    { "@type": "ListItem", position: 3, name: "Barcode Labels", item: `${SITE.domain}/products/barcode-labels` },
  ],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Thermal Barcode Labels — SKU, Inventory & Asset Labels",
  description: "Factory-direct thermal barcode labels for warehouse, retail, and asset tracking — 2×1, 3×2, 1×1 inch and custom, rolls or fanfold, Zebra/TSC/Honeywell compatible.",
  brand: { "@type": "Brand", name: SITE.name },
  manufacturer: { "@id": `${SITE.domain}/#organization` },
  image: LABELS_IMG_FALLBACK,
  url: `${SITE.domain}/products/barcode-labels`,
  additionalProperty: specs.map(({ label, value }) => ({ "@type": "PropertyValue", name: label, value })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

export default async function BarcodeLabelsPage() {
  const labelsImg = r2Image(await getSlotImage("thermal-labels:hero", LABELS_IMG_FALLBACK));

  const products = [
    { title: "2×1\" SKU & Shelf Labels", desc: "The standard barcode size for retail shelves, SKU labeling, and price marking.", image: labelsImg, href: "/products/thermal-labels/2x1in", badge: "Most Popular" },
    { title: "1×1\" Small-Item Labels", desc: "Compact barcode labels for jewelry, electronics, and small-part tagging.", image: labelsImg, href: "/products/thermal-labels/1x1in", badge: "Small Item" },
    { title: "3×2\" Carton & Asset Labels", desc: "Larger barcode labels for cartons, inventory bins, and asset tags.", image: labelsImg, href: "/products/thermal-labels/3x2in", badge: "Warehouse" },
    { title: "Custom Barcode Labels", desc: "Custom size, die-cut, adhesive, and pre-printed fields for your workflow.", image: labelsImg, href: "/products/custom-printed-thermal-labels", badge: "Custom" },
  ];

  const browseSections: ShowcaseBrowseSection[] = [
    {
      title: "Barcode Label Sizes",
      description: "From small-item to carton labels — pick a size or ask for a custom die-cut.",
      cards: labelSizes.map((s) => ({
        image: labelsImg,
        title: s.label,
        desc: `Direct thermal ${s.label.toLowerCase()} barcode label — high-contrast, reliable scanning.`,
        href: `/products/thermal-labels/${s.slug}`,
        badge: s.badge,
      })),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ProductCategoryShowcaseTemplate
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "Barcode Labels" }]}
        heroImage={labelsImg}
        heroBadge={{ text: "Warehouse · Retail · Asset", color: "amber" }}
        title={<>Thermal Barcode Labels<br /><span className="text-amber-400">SKU, Inventory &amp; Asset</span></>}
        subtitle="Factory-direct thermal barcode labels for warehouse, retail, and asset tracking — 2×1, 3×2, 1×1 inch and custom, on rolls or fanfold, matched to Zebra, TSC, and Honeywell printers, with reliable scan quality and bulk pricing."
        trustBadges={["High-Contrast Scan", "Rolls & Fanfold", "Zebra / TSC / Honeywell", "Custom Sizes"]}
        stats={[
          { value: "2×1\"", label: "Top SKU Size" },
          { value: "1D & 2D", label: "Reliable Scan" },
          { value: "Roll/Fold", label: "Format" },
          { value: "24h", label: "Quote Response" },
        ]}
        ctas={[
          { label: "Get Barcode Label Pricing", href: "#inquiry", variant: "primary", icon: <MessageSquare className="w-4 h-4" /> },
          { label: "WhatsApp for Quote", href: `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I need pricing for thermal barcode labels. Please send sizes, printer compatibility, and bulk pricing.")}`, variant: "whatsapp", icon: <Phone className="w-4 h-4" />, external: true },
        ]}
        introSplit={{
          title: "Scan-Reliable Barcode Labels From One Factory",
          lead: "From 2×1 SKU labels to carton and asset tags, we coat, die-cut, and pack high-contrast barcode labels matched to your scanners and printers at factory-direct pricing.",
          bullets: [
            "2×1, 1×1, 3×2, 4×3 in plus custom die-cuts",
            "High-contrast print for reliable 1D & 2D scans",
            "Rolls or fanfold, matched to your printers",
            "Permanent, removable & freezer adhesives",
          ],
          image: labelsImg,
          imageAlt: "Thermal barcode and SKU labels",
          cta: { label: "Send Inquiry Now", href: "#inquiry" },
        }}
        overview={{
          title: "Barcode Labels for Warehouse, Retail & Asset Tracking",
          paragraphs: [
            "Barcode labels carry 1D and 2D barcodes for SKU and price marking, warehouse picking and putaway, inventory and bin labeling, and asset tracking. Warehouse, retail, and asset-management buyers need reliable scanning, the right size, and the right adhesive — which is a different requirement from shipping labels.",
            "We produce 2×1\" shelf and SKU labels, 1×1\" small-item and jewelry tags, and 3×2\" or 4×3\" carton and asset labels, plus fully custom die-cuts, on rolls or fanfold. Direct thermal suits short-to-medium life; thermal transfer suits long-life and harsh environments such as cold storage and chemical contact.",
            "As the factory, we control the coating and die-cutting for high-contrast, reliable scanning, match labels to Zebra, TSC, Honeywell, Godex, and SATO printers, keep BPA-free as standard, and export worldwide on EXW, FOB, CIF, and DDP terms at wholesale pricing.",
          ],
        }}
        featureSplit={{
          title: "Direct Thermal or Thermal Transfer",
          lead: "Match the technology to the label's life: direct thermal for everyday picking and retail, thermal transfer for long-life asset and cold-storage tags.",
          bullets: [
            "Direct thermal — no ribbon, lower cost",
            "Thermal transfer — long life & harsh environments",
            "Top-coated stock for abrasion resistance",
            "Freezer-grade adhesive for cold storage",
          ],
          image: labelsImg,
          imageAlt: "Direct thermal and transfer barcode labels",
          cta: { label: "Talk to a Specialist", href: "#inquiry" },
        }}
        productsTitle="Browse Barcode Label Options"
        productsDescription="SKU, small-item, carton, and custom barcode labels — high-contrast, printer-matched, and bulk-ready."
        products={products}
        browseSections={browseSections}
        comparison={{
          title: "Printer Compatibility",
          headers: { left: "Desktop / Standard", right: "Industrial / Notes" },
          rows: [
            { factor: "Zebra", left: "ZD220 / ZD420 / GK420d", right: "ZT industrial series" },
            { factor: "TSC", left: "TE / TDP desktop", right: "MH industrial series" },
            { factor: "Honeywell", left: "PC42 / PC43 desktop", right: "PX industrial series" },
            { factor: "Godex / SATO", left: "Desktop label printers", right: "Matched by size & core" },
            { factor: "Generic", left: "Any thermal label printer", right: "Matched by size, core & perforation" },
          ],
        }}
        specs={{
          title: "Specifications",
          rows: specs,
          note: "* Thermal transfer and freezer-grade options available on request.",
        }}
        whyUs={{
          title: "Why Source Barcode Labels From the Factory",
          subtitle: "In-house coating and die-cutting for reliable scanning, matched to your printers.",
          items: [
            { icon: <Factory />, title: "True Factory-Direct", text: "No distributor markup — coated, die-cut, and packed in our own factory." },
            { icon: <Printer />, title: "Printer-Matched", text: "Size, core, and perforation confirmed for Zebra, TSC, Honeywell, Godex, and SATO." },
            { icon: <ShieldCheck />, title: "Reliable Scan Quality", text: "High-contrast coatings and precise die-cuts for dependable 1D & 2D reads." },
            { icon: <Boxes />, title: "Rolls & Fanfold", text: "Both formats and all sizes — shelf SKU to carton and asset tags." },
            { icon: <Truck />, title: "Global Export", text: "EXW, FOB, CIF, and DDP to 80+ countries with reliable lead times." },
            { icon: <BadgeCheck />, title: "OEM & Custom", text: "Custom sizes, adhesives, and pre-printed fields for distributors and brands." },
          ],
        }}
        faqs={faqs}
        crossLinks={[
          { label: "Thermal & Shipping Labels", href: "/products/thermal-labels" },
          { label: "Product Labels", href: "/products/product-labels" },
          { label: "Shipping Labels", href: "/products/shipping-labels" },
          { label: "Custom Printed Labels", href: "/products/custom-printed-thermal-labels" },
        ]}
        inquiry={{
          title: "Get a Barcode Label Quote",
          description: "Tell us your size, material (direct thermal or transfer), printer model, and quantity — we'll send unit pricing and lead time within 24 hours.",
        }}
      />
    </>
  );
}
