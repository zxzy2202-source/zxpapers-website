import type { Metadata } from "next";
import { BadgeCheck, Boxes, Factory, MessageSquare, Package, Phone, ShieldCheck, Truck } from "lucide-react";
import { getSlotImages } from "@/lib/imageSlotUtils";
import { r2Image } from "@/lib/r2";
import { labelSizes } from "@/config/navigation";
import { SITE } from "@/config/siteData";
import ProductCategoryShowcaseTemplate from "@/components/products/ProductCategoryShowcaseTemplate";
import type { ShowcaseBrowseSection } from "@/components/products/ProductCategoryShowcaseTemplate";

const LABELS_IMG_FB = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-labels-FgJ5U8LZDHPF5nwmD6Uqa5.webp";

export const metadata: Metadata = {
  title: "Thermal Labels Manufacturer | Shipping & Barcode Labels",
  description:
    "Factory-direct direct-thermal labels for shipping, barcode, inventory, and product identification — blank or custom printed, 4×6 and custom sizes, rolls or fanfold. ISO 9001, OEM, bulk pricing in 24h.",
  keywords:
    "thermal labels, direct thermal labels, 4x6 shipping labels, barcode labels, inventory labels, blank thermal labels, custom printed thermal labels, thermal label manufacturer, thermal label wholesale, fanfold labels",
  alternates: { canonical: `${SITE.domain}/products/thermal-labels` },
};

const variants = [
  { name: "Blank Thermal Labels", path: "/products/thermal-labels/blank" },
  { name: "Custom Printed Thermal Labels", path: "/products/thermal-labels/custom-printed" },
  { name: "4×6 Shipping Labels", path: "/products/shipping-labels" },
  { name: "Linerless Labels", path: "/products/linerless-labels" },
];

const faqs = [
  { q: "What thermal label sizes do you manufacture?", a: "We produce 4×6, 2×1, 3×2, 4×3, 2×4, and 1×1 inch labels plus custom sizes to ±0.5mm tolerance, supplied on rolls or as fanfold stacks with 1″, 1.5″, or 3″ cores." },
  { q: "Are these direct thermal or thermal transfer labels?", a: "These are direct thermal labels — no ribbon required. We offer standard and top-coated (durable) face stocks; tell us your image-life and environment needs and we'll match the grade." },
  { q: "Do you offer blank and custom printed labels?", a: "Both. Blank labels ship from stock for shipping and barcode printing; custom printed labels carry your logo, product information, or pre-printed fields (OEM / private label)." },
  { q: "What is the minimum order quantity and lead time?", a: "Stock sizes are available from low volume; custom printing typically starts at 5,000 labels. Stock items ship in 3–7 days; custom production runs 10–18 days." },
  { q: "Which printers are your labels compatible with?", a: "Our labels fit all major desktop and industrial direct-thermal printers (Zebra, TSC, Honeywell, and more). Send your printer model and we'll confirm size, core, and roll diameter before production." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
    { "@type": "ListItem", position: 2, name: "Products", item: `${SITE.domain}/products` },
    { "@type": "ListItem", position: 3, name: "Thermal Labels", item: `${SITE.domain}/products/thermal-labels` },
  ],
};

const catalogEntries = [
  ...variants.map((v) => ({ name: v.name, path: v.path })),
  ...labelSizes.map((s) => ({ name: `${s.label} Thermal Label`, path: `/products/thermal-labels/${s.slug}` })),
];

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Thermal Labels",
  description:
    "Factory-direct direct-thermal labels for shipping, barcode, inventory, and product identification — blank or custom printed, in 4×6 and custom sizes, on rolls or fanfold.",
  url: `${SITE.domain}/products/thermal-labels`,
  isPartOf: { "@id": `${SITE.domain}/#website` },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: catalogEntries.length,
    itemListElement: catalogEntries.map((c, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: c.name,
      url: `${SITE.domain}${c.path}`,
    })),
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default async function ThermalLabelsPage() {
  const imgs = await getSlotImages([
    { slot: "products:thermal-labels", fallback: LABELS_IMG_FB },
    { slot: "thermal-labels:hero", fallback: LABELS_IMG_FB },
  ]);
  const labelsImg = r2Image(imgs["products:thermal-labels"]);
  const heroImg = r2Image(imgs["thermal-labels:hero"]);

  const products = [
    { title: "Blank Thermal Labels", desc: "Direct thermal labels for shipping, inventory, and barcodes — compatible with all major printers, in stock.", image: labelsImg, href: "/products/thermal-labels/blank", badge: "In Stock" },
    { title: "Custom Printed Thermal Labels", desc: "Your brand, logo, or product information pre-printed. OEM & private label.", image: labelsImg, href: "/products/thermal-labels/custom-printed", badge: "Custom" },
    { title: "4×6 Shipping Labels", desc: "The standard 4×6 direct thermal label for e-commerce and courier shipping.", image: labelsImg, href: "/products/shipping-labels", badge: "Most Popular" },
    { title: "Linerless Labels", desc: "Liner-free thermal labels for more labels per roll and less waste.", image: labelsImg, href: "/products/linerless-labels", badge: "Eco" },
  ];

  const browseSections: ShowcaseBrowseSection[] = [
    {
      title: "Popular Label Sizes",
      description: "Shipping, barcode, and product labels — pick a size or ask for a custom die-cut.",
      cards: labelSizes.map((s) => ({
        image: labelsImg,
        title: s.label,
        desc: `Popular label size${s.markets ? ` for ${s.markets}` : ""} — direct thermal, in stock and custom.`,
        href: `/products/thermal-labels/${s.slug}`,
        badge: s.badge,
      })),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ProductCategoryShowcaseTemplate
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "Thermal Labels" }]}
        heroImage={heroImg}
        heroBadge={{ text: "Factory Direct Supply", color: "amber" }}
        title={<>Thermal &amp; Shipping Labels<br /><span className="text-amber-400">Blank or Custom</span></>}
        subtitle="Factory-direct direct-thermal labels for shipping, barcode, inventory, and product identification — blank or custom printed, 4×6 and custom sizes, on rolls or fanfold, with OEM packaging and bulk pricing in 24 hours."
        trustBadges={["4×6 In Stock", "All Sizes Custom", "OEM Available", "ISO 9001"]}
        stats={[
          { value: "4×6", label: "Best Seller" },
          { value: "In Stock", label: "Ready to Ship" },
          { value: "OEM", label: "Custom Printing" },
          { value: "24h", label: "Quote Response" },
        ]}
        ctas={[
          { label: "Get Label Pricing", href: "#inquiry", variant: "primary", icon: <MessageSquare className="w-4 h-4" /> },
          { label: "WhatsApp for Quote", href: `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I need pricing for thermal labels. Please send sizes and bulk pricing.")}`, variant: "whatsapp", icon: <Phone className="w-4 h-4" />, external: true },
        ]}
        introSplit={{
          title: "Every Shipping & Barcode Label From One Factory",
          lead: "From 4×6 shipping labels to 2×1 barcode and product labels, we coat, die-cut, print, and pack every direct-thermal label in-house at true factory-direct pricing.",
          bullets: [
            "4×6 and custom sizes (±0.5mm)",
            "Rolls or fanfold, 1″ / 1.5″ / 3″ cores",
            "Standard or durable top-coated face stock",
            "Blank stock or custom printed (OEM)",
          ],
          image: labelsImg,
          imageAlt: "Direct thermal shipping and barcode labels",
          cta: { label: "Send Inquiry Now", href: "#inquiry" },
        }}
        overview={{
          title: "A Complete Direct Thermal Label Range",
          paragraphs: [
            "ZhixinPaper manufactures direct thermal labels for shipping, courier and e-commerce parcels, barcode and SKU labels, warehouse and inventory tags, and product identification. Every label is produced from coated face stock to finished, packed rolls in our own factory.",
            "Labels are available as blank stock for fast dispatch or custom printed with your logo, product information, and pre-printed fields. The 4×6 shipping size is held in stock, while custom sizes and die-cuts are produced to a ±0.5mm tolerance, on rolls or as fanfold stacks.",
            "Because we control coating, die-cutting, printing, and packaging in-house, we hold consistent print quality, support OEM and private-label programs, and export worldwide on FOB, CIF, and DDP terms at wholesale pricing.",
          ],
        }}
        featureSplit={{
          title: "Blank or Custom Printed — Your Call",
          lead: "Order blank labels to print on demand, or hand us your artwork for branded, pre-printed labels and private-label packaging.",
          bullets: [
            "Blank stock for all desktop & industrial printers",
            "Custom logo, product & variable-field printing",
            "Rolls or fanfold to match your line",
            "Standard and durable top-coated options",
          ],
          image: labelsImg,
          imageAlt: "Blank and custom printed thermal labels",
          cta: { label: "Discuss Your Project", href: "#inquiry" },
        }}
        productsTitle="Browse Thermal Label Products"
        productsDescription="Blank, custom printed, shipping, and linerless labels — each in stock across all popular sizes."
        products={products}
        browseSections={browseSections}
        comparison={{
          title: "Blank vs Custom Printed Labels",
          headers: { left: "Blank Labels", right: "Custom Printed Labels" },
          rows: [
            { factor: "Best for", left: "On-demand shipping & barcode printing", right: "Branded & pre-printed product labels" },
            { factor: "Artwork", left: "None — print your own", right: "Your logo, fields & layout" },
            { factor: "MOQ", left: "From low volume (stock sizes)", right: "From 5,000 labels" },
            { factor: "Lead time", left: "3–7 days (stock)", right: "10–18 days (production)" },
            { factor: "Packaging", left: "Standard boxing", right: "Private-label / OEM" },
          ],
        }}
        whyUs={{
          title: "Why Source Labels From the Factory",
          subtitle: "In-house coating, die-cutting, printing, and packaging — with the certifications global buyers require.",
          items: [
            { icon: <Factory />, title: "True Factory-Direct", text: "No distributor markup — we run the line from coated face stock to finished, packed labels." },
            { icon: <ShieldCheck />, title: "Certified & Compliant", text: "ISO 9001:2015, FSC, and RoHS / REACH support for regulated markets." },
            { icon: <Package />, title: "Blank or Custom", text: "Stock blank labels or custom printed with OEM and private-label programs." },
            { icon: <Boxes />, title: "All Sizes In Stock", text: "4×6 shipping labels plus custom sizes, on rolls or fanfold, ready for fast dispatch." },
            { icon: <Truck />, title: "Global Export", text: "FOB, CIF, and DDP to the UK, EU, and North America with reliable lead times." },
            { icon: <BadgeCheck />, title: "OEM & Private Label", text: "Custom size, die-cut, print, and branded packaging for distributors and brands." },
          ],
        }}
        faqs={faqs}
        crossLinks={[
          { label: "Thermal Paper Rolls", href: "/products/thermal-paper-rolls" },
          { label: "Can Labels", href: "/products/can-labels" },
          { label: "Detergent Labels", href: "/products/detergent-labels" },
          { label: "OEM & Private Label", href: "/oem" },
        ]}
        inquiry={{
          title: "Get Thermal Label Pricing",
          description: "Tell us your sizes, core, quantities, and whether you need blank or custom printed — we'll send wholesale pricing within 24 hours.",
        }}
      />
    </>
  );
}
