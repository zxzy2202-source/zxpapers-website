import type { Metadata } from "next";
import { BadgeCheck, Boxes, Factory, MessageSquare, Package, Phone, ShieldCheck, Truck } from "lucide-react";
import { getSlotImage } from "@/lib/imageSlotUtils";
import { r2Image } from "@/lib/r2";
import { detergentLabelSizes, DETERGENT_LABELS_IMG } from "./detergent-labels-data";
import { SITE } from "@/config/siteData";
import ProductCategoryShowcaseTemplate from "@/components/products/ProductCategoryShowcaseTemplate";
import type { ShowcaseBrowseSection } from "@/components/products/ProductCategoryShowcaseTemplate";

export const metadata: Metadata = {
  title: "Detergent Labels Manufacturer | Custom Labels",
  description:
    "OEM detergent labels for laundry, dish soap, cleaners, and fabric care products. Water-resistant, chemical-resistant, GHS compliant.",
  keywords:
    "detergent labels, custom detergent labels, blank detergent labels, laundry detergent labels, dish soap labels, cleaner labels, water-resistant labels, chemical-resistant labels, GHS compliant labels, detergent label manufacturer, OEM detergent labels",
  alternates: { canonical: `${SITE.domain}/products/detergent-labels` },
};

const faqs = [
  { q: "What sizes do your detergent labels come in?", a: "We produce detergent and household-chemical labels from 70×200mm to 120×80mm and beyond, including wrap-around and back-label formats, plus custom dimensions to ±0.5mm tolerance for any bottle shape." },
  { q: "Are the labels water- and chemical-resistant?", a: "Yes. We use BOPP and PE face stocks with strong permanent adhesive so labels survive moisture, condensation, and contact with surfactants, bleach, and solvents without lifting or smearing." },
  { q: "Can you produce GHS-compliant hazard labels?", a: "Yes. We print GHS-compliant labels with hazard pictograms, signal words, and product information in your required languages for regulated household and industrial chemical products." },
  { q: "What is the minimum order quantity?", a: "Custom printed detergent labels start at 5,000 labels per size. Blank stock is available from lower volumes — send us your size and quantity for a quote." },
  { q: "What is the lead time?", a: "Standard production runs 10–18 days; rush orders can ship in about 7 days. We export worldwide on FOB, CIF, and DDP terms with reliable transit times." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
    { "@type": "ListItem", position: 2, name: "Products", item: `${SITE.domain}/products` },
    { "@type": "ListItem", position: 3, name: "Detergent Labels", item: `${SITE.domain}/products/detergent-labels` },
  ],
};

const catalogEntries = [
  { name: "Blank Detergent Labels", path: "/products/detergent-labels/blank" },
  { name: "Custom Printed Detergent Labels", path: "/products/detergent-labels/custom-printed" },
  ...detergentLabelSizes.map((s) => ({ name: `${s.label} Detergent Labels`, path: `/products/detergent-labels/${s.slug}` })),
];

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Detergent Labels",
  description:
    "OEM detergent labels for laundry, dish soap, cleaners, and fabric care products. Water-resistant, chemical-resistant, GHS compliant.",
  url: `${SITE.domain}/products/detergent-labels`,
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

export default async function DetergentLabelsPage() {
  const detergentImg = r2Image(await getSlotImage("detergent-labels:hero", DETERGENT_LABELS_IMG));

  const products = [
    { title: "Blank Bottle & Packaging Labels", desc: "Unprinted labels for in-house printing across bottles, pouches, tubs, jars, and flexible packaging.", image: detergentImg, href: "/products/detergent-labels/blank", badge: "Blank" },
    { title: "Custom Printed Bottle Labels", desc: "Custom printed labels for daily chemicals, wet wipes, food packs, healthcare, and industrial packaging.", image: detergentImg, href: "/products/detergent-labels/custom-printed", badge: "Custom" },
  ];

  const browseSections: ShowcaseBrowseSection[] = [
    {
      title: "Popular Label Sizes",
      description: "Water- and chemical-resistant labels for any bottle — pick a size or ask for a custom die-cut.",
      cards: detergentLabelSizes.map((s) => ({
        image: detergentImg,
        title: s.label,
        desc: `Detergent label size${s.markets ? ` for ${s.markets}` : ""} — water- and chemical-resistant.`,
        href: `/products/detergent-labels/${s.slug}`,
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
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "Detergent Labels" }]}
        heroImage={detergentImg}
        heroBadge={{ text: "Water & Chemical Resistant", color: "amber" }}
        title={<>Detergent &amp; Bottle Labels<br /><span className="text-amber-400">Custom &amp; Blank</span></>}
        subtitle="OEM detergent labels for laundry, dish soap, cleaners, and fabric care products — water- and chemical-resistant, GHS-compliant, with custom printing and bulk pricing in 24 hours."
        trustBadges={["Water Resistant", "Chemical Resistant", "GHS Compliant", "Wrap-Around"]}
        stats={[
          { value: "IP65", label: "Water Resistance" },
          { value: "GHS", label: "Hazard Compliant" },
          { value: "OEM", label: "Custom Printing" },
          { value: "24h", label: "Quote Response" },
        ]}
        ctas={[
          { label: "Get Label Pricing", href: "#inquiry", variant: "primary", icon: <MessageSquare className="w-4 h-4" /> },
          { label: "WhatsApp for Quote", href: `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I need pricing for detergent labels. Please send sizes and bulk pricing.")}`, variant: "whatsapp", icon: <Phone className="w-4 h-4" />, external: true },
        ]}
        introSplit={{
          title: "Water- & Chemical-Resistant Labels From One Factory",
          lead: "From laundry and dish soap to industrial cleaners, we print, die-cut, and pack labels that survive moisture and aggressive chemicals at factory-direct pricing.",
          bullets: [
            "70×200mm to 120×80mm plus custom sizes",
            "BOPP / PE face stock — waterproof",
            "Resists surfactants, bleach & solvents",
            "GHS-compliant hazard printing",
          ],
          image: detergentImg,
          imageAlt: "Water- and chemical-resistant detergent bottle labels",
          cta: { label: "Send Inquiry Now", href: "#inquiry" },
        }}
        overview={{
          title: "Durable Labels for Detergent & Household Chemicals",
          paragraphs: [
            "ZhixinPaper manufactures labels for laundry detergent, dish soap, all-purpose cleaners, fabric softener, hand soap, and industrial chemical bottles — printed and finished in our own factory.",
            "Labels are available as blank stock for in-house printing or custom printed with your brand, hazard pictograms, and product information. Common bottle sizes are supported, with custom dimensions and shapes produced to a ±0.5mm tolerance.",
            "We use waterproof BOPP and PE face stocks with strong permanent adhesive that withstands condensation and contact with surfactants, bleach, and solvents, and we print GHS / CLP-compliant labels for regulated markets — exporting worldwide on FOB, CIF, and DDP terms.",
          ],
        }}
        featureSplit={{
          title: "Blank or Custom Printed — Your Call",
          lead: "Order blank labels to print in-house, or hand us your artwork for full-color, GHS-compliant, private-label bottle labels.",
          bullets: [
            "Blank waterproof stock for in-house printing",
            "Full-color CMYK / Pantone with design support",
            "GHS pictograms & multi-language hazard text",
            "Private-label packaging and OEM programs",
          ],
          image: detergentImg,
          imageAlt: "Blank and custom printed detergent labels",
          cta: { label: "Discuss Your Project", href: "#inquiry" },
        }}
        productsTitle="Browse Detergent Label Products"
        productsDescription="Blank and custom printed detergent and household-chemical labels, in stock across all popular bottle sizes."
        products={products}
        browseSections={browseSections}
        comparison={{
          title: "Blank vs Custom Printed Detergent Labels",
          headers: { left: "Blank Labels", right: "Custom Printed Labels" },
          rows: [
            { factor: "Best for", left: "In-house & variable-data printing", right: "Branded, GHS-compliant bottles" },
            { factor: "Artwork", left: "None — print your own", right: "Your logo, pictograms & layout" },
            { factor: "MOQ", left: "From low volume (stock sizes)", right: "From 5,000 labels" },
            { factor: "Lead time", left: "3–7 days (stock)", right: "10–18 days (production)" },
            { factor: "Packaging", left: "Standard boxing", right: "Private-label / OEM" },
          ],
        }}
        specs={{
          title: "Standard Specifications",
          rows: [
            { label: "Face Stock", value: "White/clear BOPP, PE, vinyl, or polyester" },
            { label: "Adhesive", value: "Permanent acrylic (water & chemical resistant)" },
            { label: "Liner", value: "Silicone-coated PET or glassine" },
            { label: "Print Method", value: "Flexo, offset, or digital CMYK + Pantone" },
            { label: "Coating", value: "Gloss, matte, or soft-touch lamination" },
            { label: "Water Resistance", value: "IP65 rated — withstands splashing and moisture" },
            { label: "Chemical Resistance", value: "Resistant to surfactants, bleach, and solvents" },
            { label: "MOQ", value: "5,000 labels per size" },
            { label: "Lead Time", value: "10–18 days (standard); 7 days (rush)" },
            { label: "Certifications", value: "ISO 9001, GHS / CLP compliant, REACH" },
          ],
        }}
        whyUs={{
          title: "Why Source Detergent Labels From the Factory",
          subtitle: "In-house printing, die-cutting, and lamination — with the chemical-safety compliance buyers require.",
          items: [
            { icon: <Factory />, title: "True Factory-Direct", text: "No distributor markup — printed, die-cut, and packed in our own factory." },
            { icon: <ShieldCheck />, title: "Compliant & Durable", text: "GHS / CLP compliant, REACH support, waterproof and chemical-resistant." },
            { icon: <Package />, title: "Blank or Custom", text: "Stock blank labels or full-color custom printed with OEM programs." },
            { icon: <Boxes />, title: "All Bottle Sizes", text: "70×200mm to 120×80mm plus custom, wrap-around and back labels." },
            { icon: <Truck />, title: "Global Export", text: "FOB, CIF, and DDP to the UK, EU, and North America with reliable lead times." },
            { icon: <BadgeCheck />, title: "OEM & Private Label", text: "Custom size, print, adhesive, and branded packaging for distributors and brands." },
          ],
        }}
        faqs={faqs}
        crossLinks={[
                { label: "Machine-Ready Filling Line Labels", href: "/products/can-labels" },
          { label: "Thermal & Shipping Labels", href: "/products/thermal-labels" },
          { label: "NCR Forms & Carbonless", href: "/products/ncr-forms" },
          { label: "OEM & Private Label", href: "/oem" },
        ]}
        inquiry={{
          title: "Get Detergent Label Pricing",
          description: "Tell us your bottle sizes, quantities, and whether you need blank or custom printed — we'll send wholesale pricing within 24 hours.",
        }}
      />
    </>
  );
}
