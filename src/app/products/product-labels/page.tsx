import type { Metadata } from "next";
import { BadgeCheck, Boxes, Factory, MessageSquare, Phone, ShieldCheck, Tag, Truck } from "lucide-react";
import { labelSizes } from "@/config/navigation";
import { SITE } from "@/config/siteData";
import { getSlotImage } from "@/lib/imageSlotUtils";
import { r2Image } from "@/lib/r2";
import ProductCategoryShowcaseTemplate from "@/components/products/ProductCategoryShowcaseTemplate";
import type { ShowcaseBrowseSection } from "@/components/products/ProductCategoryShowcaseTemplate";

export const metadata: Metadata = {
  title: "Product Labels Manufacturer | Retail, Packaging & Price Labels",
  description:
    "Factory-direct product labels for retail, packaging, and price marking — thermal and custom printed, any size or die-cut, rolls or sheets. BPA-free, OEM, private label, bulk pricing in 24h.",
  keywords:
    "product labels, packaging labels, price labels, retail labels, custom product labels, thermal product labels, price tag labels, product label manufacturer, packaging label supplier, private label product labels, bulk product labels",
  alternates: { canonical: `${SITE.domain}/products/product-labels` },
};

const LABELS_IMG_FALLBACK = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-labels-FgJ5U8LZDHPF5nwmD6Uqa5.webp";

const specs = [
  { label: "Common Sizes", value: "2×1\", 3×2\", 4×3\", 1×1\" plus custom die-cut (±0.5mm)" },
  { label: "Types", value: "Product, price, packaging, weigh-scale & shelf labels" },
  { label: "Material", value: "Direct thermal, top-coated, or coated paper / film" },
  { label: "Print", value: "Blank for in-house printing or custom CMYK + Pantone" },
  { label: "Format", value: "Rolls (1\"/3\" core), fanfold, or sheets" },
  { label: "Adhesive", value: "Permanent / removable / freezer (selectable)" },
  { label: "Coating", value: "Gloss, matte, or BPA-free thermal" },
  { label: "MOQ", value: "Stock from low volume; custom printed from 5,000 labels" },
  { label: "Lead Time", value: "Stock 3–7 days · custom 10–18 days" },
  { label: "Incoterms", value: "EXW, FOB, CIF, DDP" },
];

const faqs = [
  { q: "What is the difference between product labels and shipping or barcode labels?", a: "Product labels go on the item or its packaging — price, product info, weigh-scale, and shelf labels — and often need a branded, retail-ready look. Shipping labels go on parcels; barcode labels focus on scan reliability. We make all three, matched to the job." },
  { q: "Can you print our brand and product information?", a: "Yes. We supply blank product labels for in-house thermal printing, or custom printed labels with your logo, product information, and design in CMYK plus Pantone spot colors." },
  { q: "What sizes and shapes are available?", a: "Standard 2×1, 3×2, 4×3, and 1×1 inch plus fully custom die-cut shapes, supplied on rolls, fanfold, or sheets to suit your applicator or printer." },
  { q: "Are price and weigh-scale labels available?", a: "Yes. We produce direct thermal price and weigh-scale labels for retail and deli scales, plus shelf-edge and promotional labels, with removable or permanent adhesive." },
  { q: "What is the MOQ and lead time?", a: "Stock sizes are available from low volume; custom printed labels start at 5,000 per design. Stock ships in 3–7 days, custom in 10–18 days, worldwide on EXW, FOB, CIF, and DDP terms." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
    { "@type": "ListItem", position: 2, name: "Products", item: `${SITE.domain}/products` },
    { "@type": "ListItem", position: 3, name: "Product Labels", item: `${SITE.domain}/products/product-labels` },
  ],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Product Labels — Retail, Packaging & Price Labels",
  description: "Factory-direct product labels for retail, packaging, and price marking — thermal and custom printed, any size or die-cut, on rolls or sheets. BPA-free, OEM, private label.",
  brand: { "@type": "Brand", name: SITE.name },
  manufacturer: { "@id": `${SITE.domain}/#organization` },
  image: LABELS_IMG_FALLBACK,
  url: `${SITE.domain}/products/product-labels`,
  additionalProperty: specs.map(({ label, value }) => ({ "@type": "PropertyValue", name: label, value })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

export default async function ProductLabelsPage() {
  const labelsImg = r2Image(await getSlotImage("thermal-labels:hero", LABELS_IMG_FALLBACK));

  const products = [
    { title: "Price & Shelf Labels", desc: "Direct thermal price, shelf-edge, and promotional labels for retail and supermarkets.", image: labelsImg, href: "/products/thermal-labels/2x1in", badge: "Retail" },
    { title: "Packaging Labels", desc: "Branded labels for boxes, pouches, jars, and product packaging across categories.", image: labelsImg, href: "/products/thermal-labels/3x2in", badge: "Packaging" },
    { title: "Weigh-Scale Labels", desc: "Direct thermal labels for deli, butchery, and produce scales with removable adhesive.", image: labelsImg, href: "/products/thermal-labels/blank", badge: "Scale" },
    { title: "Custom Printed Product Labels", desc: "Your logo and product info pre-printed in full color. OEM & private label.", image: labelsImg, href: "/products/custom-printed-thermal-labels", badge: "Custom" },
  ];

  const browseSections: ShowcaseBrowseSection[] = [
    {
      title: "Product Label Sizes",
      description: "From price tags to packaging labels — pick a size or ask for a custom die-cut shape.",
      cards: labelSizes.map((s) => ({
        image: labelsImg,
        title: s.label,
        desc: `Product / packaging label in ${s.label.toLowerCase()} — blank or custom printed, rolls or sheets.`,
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
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "Product Labels" }]}
        heroImage={labelsImg}
        heroBadge={{ text: "Retail · Packaging · Price", color: "amber" }}
        title={<>Product Labels<br /><span className="text-amber-400">Retail, Packaging &amp; Price</span></>}
        subtitle="Factory-direct product labels for retail and packaging — price, shelf, weigh-scale, and packaging labels, blank or custom printed, any size or die-cut, on rolls or sheets, with OEM support and bulk pricing in 24 hours."
        trustBadges={["Retail-Ready Look", "Any Size & Die-Cut", "Blank or Custom", "OEM Available"]}
        stats={[
          { value: "5+", label: "Label Types" },
          { value: "CMYK+PMS", label: "Custom Print" },
          { value: "Roll/Sheet", label: "Format" },
          { value: "24h", label: "Quote Response" },
        ]}
        ctas={[
          { label: "Get Product Label Pricing", href: "#inquiry", variant: "primary", icon: <MessageSquare className="w-4 h-4" /> },
          { label: "WhatsApp for Quote", href: `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I need pricing for product / packaging / price labels. Please send sizes and bulk pricing.")}`, variant: "whatsapp", icon: <Phone className="w-4 h-4" />, external: true },
        ]}
        introSplit={{
          title: "Retail & Packaging Labels From One Factory",
          lead: "Price tags, shelf labels, weigh-scale labels, and branded packaging labels — blank for in-house printing or fully custom printed, die-cut and packed in-house at factory-direct pricing.",
          bullets: [
            "Price, shelf, weigh-scale & packaging labels",
            "Any size and custom die-cut shape",
            "Blank stock or custom CMYK + Pantone",
            "Rolls, fanfold, or sheets",
          ],
          image: labelsImg,
          imageAlt: "Retail product and packaging labels",
          cta: { label: "Send Inquiry Now", href: "#inquiry" },
        }}
        overview={{
          title: "Product, Packaging & Price Labels",
          paragraphs: [
            "Product labels go on the item or its packaging — price and shelf-edge labels, weigh-scale labels for deli and produce, and branded packaging labels for boxes, pouches, and jars. Unlike shipping or barcode labels, they often need a retail-ready, on-brand look, which is a distinct buyer need.",
            "We supply blank product labels for in-house thermal printing or custom printed labels with your logo, product information, and design in CMYK plus Pantone spot colors. Standard 2×1, 3×2, 4×3, and 1×1 inch sizes plus fully custom die-cut shapes are produced on rolls, fanfold, or sheets.",
            "As the factory, we offer permanent, removable, and freezer adhesives, gloss or matte finishes, BPA-free thermal options, and private-label packaging — exporting worldwide on EXW, FOB, CIF, and DDP terms at wholesale pricing with no middleman markup.",
          ],
        }}
        featureSplit={{
          title: "Blank or Custom Printed — Your Call",
          lead: "Order blank product labels to print in-house, or hand us your artwork for retail-ready, branded product labels and private-label packaging.",
          bullets: [
            "Blank stock for in-house & variable-data printing",
            "Custom CMYK / Pantone with design support",
            "Permanent, removable & freezer adhesives",
            "Private-label packaging and OEM programs",
          ],
          image: labelsImg,
          imageAlt: "Blank and custom printed product labels",
          cta: { label: "Discuss Your Project", href: "/products/custom-printed-thermal-labels" },
        }}
        productsTitle="Browse Product Label Options"
        productsDescription="Price, packaging, weigh-scale, and custom printed product labels — any size, format, and adhesive."
        products={products}
        browseSections={browseSections}
        comparison={{
          title: "Product vs Shipping vs Barcode Labels",
          headers: { left: "Product Labels", right: "Shipping / Barcode Labels" },
          rows: [
            { factor: "Goes on", left: "The item or its packaging", right: "Parcels / cartons & inventory" },
            { factor: "Look", left: "Retail-ready, on-brand", right: "Functional, scan-focused" },
            { factor: "Print", left: "Blank or full-color custom", right: "Blank or pre-printed" },
            { factor: "Formats", left: "Rolls, fanfold, or sheets", right: "Rolls or fanfold" },
            { factor: "Adhesive", left: "Permanent / removable / freezer", right: "Permanent / removable" },
          ],
        }}
        specs={{
          title: "Specifications",
          rows: specs,
          note: "* Custom die-cuts, finishes, and adhesives available on request.",
        }}
        whyUs={{
          title: "Why Source Product Labels From the Factory",
          subtitle: "In-house printing, die-cutting, and finishing for a retail-ready, on-brand result.",
          items: [
            { icon: <Factory />, title: "True Factory-Direct", text: "No distributor markup — printed, die-cut, and packed in our own factory." },
            { icon: <Tag />, title: "Retail-Ready Look", text: "Gloss or matte finishes and full-color print for an on-brand product label." },
            { icon: <ShieldCheck />, title: "Right Adhesive", text: "Permanent, removable, and freezer-grade adhesives matched to your application." },
            { icon: <Boxes />, title: "Any Size & Format", text: "Custom die-cuts on rolls, fanfold, or sheets for any applicator or printer." },
            { icon: <Truck />, title: "Global Export", text: "EXW, FOB, CIF, and DDP to 80+ countries with reliable lead times." },
            { icon: <BadgeCheck />, title: "OEM & Private Label", text: "Custom print, finish, and branded packaging for distributors and brands." },
          ],
        }}
        faqs={faqs}
        crossLinks={[
          { label: "Thermal & Shipping Labels", href: "/products/thermal-labels" },
          { label: "Barcode Labels", href: "/products/barcode-labels" },
          { label: "Custom Printed Labels", href: "/products/custom-printed-thermal-labels" },
          { label: "Can & Bottle Labels", href: "/products/can-labels" },
        ]}
        inquiry={{
          title: "Get a Product Label Quote",
          description: "Tell us your label type, size, finish, adhesive, and quantity — we'll send pricing and lead time within 24 hours.",
        }}
      />
    </>
  );
}
