import type { Metadata } from "next";
import { BadgeCheck, Boxes, Factory, MessageSquare, Package, Phone, ShieldCheck, Truck } from "lucide-react";
import { getSlotImage } from "@/lib/imageSlotUtils";
import { r2Image } from "@/lib/r2";
import { canLabelSizes, CAN_LABELS_IMG } from "./can-labels-data";
import { SITE } from "@/config/siteData";
import ProductCategoryShowcaseTemplate from "@/components/products/ProductCategoryShowcaseTemplate";
import type { ShowcaseBrowseSection } from "@/components/products/ProductCategoryShowcaseTemplate";

export const metadata: Metadata = {
  title: "Beverage & Food Packaging Labels Manufacturer | Custom & Blank",
  description:
    "OEM packaging labels for beverage bottles, food containers, cans, jars, and filled products. Full-wrap, moisture-resistant, food-safe options with custom printing and bulk supply.",
  keywords:
    "beverage packaging labels, food packaging labels, bottle labels, can labels, custom packaging labels, blank packaging labels, full-wrap labels, moisture-resistant labels, food-safe labels, OEM packaging label manufacturer",
  alternates: { canonical: `${SITE.domain}/products/can-labels` },
};

const faqs = [
  { q: "What can sizes do your labels fit?", a: "We supply full-wrap and partial-wrap can labels for all standard sizes from 211×400 to 401×700, plus custom dimensions to ±0.5mm tolerance for slim, sleek, and specialty cans." },
  { q: "Are the labels food-safe?", a: "Yes. Our can labels use food-safe permanent acrylic adhesive compliant with FDA 21 CFR, with BPA-free and phenol-free coating options for direct and indirect food contact applications." },
  { q: "What is the minimum order quantity?", a: "Custom printed can labels start at 5,000 labels per size. Blank can labels are available from lower volumes — tell us your size and quantity for a quote." },
  { q: "Can you print our brand artwork?", a: "Yes. We offer full-color CMYK and Pantone spot-color printing with design support, NDA protection, and private-label packaging for distributors and brands." },
  { q: "What is the lead time?", a: "Standard production runs 10–18 days; rush orders can ship in about 7 days. Blank stock sizes dispatch faster. We export worldwide on FOB, CIF, and DDP terms." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
    { "@type": "ListItem", position: 2, name: "Products", item: `${SITE.domain}/products` },
    { "@type": "ListItem", position: 3, name: "Beverage & Food Packaging Labels", item: `${SITE.domain}/products/can-labels` },
  ],
};

const catalogEntries = [
  { name: "Blank Can Labels", path: "/products/can-labels/blank" },
  { name: "Custom Printed Can Labels", path: "/products/can-labels/custom-printed" },
  ...canLabelSizes.map((s) => ({ name: `${s.label} Can Labels`, path: `/products/can-labels/${s.slug}` })),
];

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Beverage & Food Packaging Labels",
  description:
    "OEM packaging labels for beverage bottles, food containers, cans, jars, and filled products. Full-wrap, moisture-resistant and food-safe options.",
  url: `${SITE.domain}/products/can-labels`,
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

export default async function CanLabelsPage() {
  const canImg = r2Image(await getSlotImage("can-labels:hero", CAN_LABELS_IMG));

  const products = [
    { title: "Blank Packaging Labels", desc: "Moisture-resistant, food-safe blank labels for standard container formats.", image: canImg, href: "/products/can-labels/blank", badge: "Blank" },
    { title: "Custom Printed Packaging Labels", desc: "Full-color packaging labels with your brand design for beverages, food, and filled products.", image: canImg, href: "/products/can-labels/custom-printed", badge: "Custom" },
  ];

  const browseSections: ShowcaseBrowseSection[] = [
    {
      title: "Popular Container Sizes",
      description: "Full-wrap labels for standard filled-product containers. Pick a size or ask for a custom dimension.",
      cards: canLabelSizes.map((s) => ({
        image: canImg,
        title: s.label,
        desc: `Can label size${s.markets ? ` for ${s.markets}` : ""} — food-safe and moisture-resistant.`,
        href: `/products/can-labels/${s.slug}`,
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
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "Beverage & Food Packaging Labels" }]}
        heroImage={canImg}
        heroBadge={{ text: "Food-Safe & Moisture-Resistant", color: "amber" }}
        title={<>Beverage &amp; Food<br /><span className="text-amber-400">Packaging Labels</span></>}
        subtitle="OEM packaging labels for mineral water, beverages, food containers, cans, jars, and other filled products. Full-wrap, moisture-resistant, food-safe options with bulk pricing in 24 hours."
        trustBadges={["Full-Wrap", "Food Safe", "Moisture Resistant", "Custom Printing"]}
        stats={[
          { value: "211–401", label: "Container Sizes" },
          { value: "FDA", label: "Food-Safe Adhesive" },
          { value: "OEM", label: "Custom Printing" },
          { value: "24h", label: "Quote Response" },
        ]}
        ctas={[
          { label: "Get Packaging Label Pricing", href: "#inquiry", variant: "primary", icon: <MessageSquare className="w-4 h-4" /> },
          { label: "WhatsApp for Quote", href: `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I need pricing for beverage and food packaging labels. Please send sizes and bulk pricing.")}`, variant: "whatsapp", icon: <Phone className="w-4 h-4" />, external: true },
        ]}
        introSplit={{
          title: "Packaging Labels for Filled Products",
          lead: "From craft-beer slim cans to food, pet food, and industrial cans, we print, die-cut, and pack moisture-resistant, food-safe can labels in-house at factory-direct pricing.",
          bullets: [
            "Standard 211×400 to 401×700 plus custom sizes",
            "Food-safe acrylic adhesive (FDA 21 CFR)",
            "BPA-free and phenol-free coating options",
            "Blank stock or custom printed (OEM)",
          ],
          image: canImg,
          imageAlt: "Full-wrap can labels for beverage and food cans",
          cta: { label: "Send Inquiry Now", href: "#inquiry" },
        }}
        overview={{
          title: "Food-Safe, Moisture-Resistant Can Labels",
          paragraphs: [
            "ZhixinPaper manufactures full-wrap and partial-wrap can labels for craft beer and beverages, canned food, pet food, seafood, vegetables, paint and coatings, lubricants, and chemical containers — printed and finished in our own factory.",
            "Labels are available as blank stock for in-house printing or custom printed with your brand artwork. Standard can sizes from 211×400 to 401×700 are supported, with custom dimensions produced to a ±0.5mm tolerance for slim, sleek, and specialty cans.",
            "We use moisture-resistant face stock and food-safe acrylic adhesive compliant with FDA 21 CFR, with BPA-free and phenol-free coating options, and export worldwide on FOB, CIF, and DDP terms at wholesale pricing.",
          ],
        }}
        featureSplit={{
          title: "Blank or Custom Printed — Your Call",
          lead: "Order blank can labels to print in-house, or hand us your artwork for full-color, private-label can labels.",
          bullets: [
            "Blank stock for in-house and variable-data printing",
            "Full-color CMYK / Pantone printing with design support",
            "Gloss, matte, or soft-touch lamination",
            "Private-label packaging and OEM programs",
          ],
          image: canImg,
          imageAlt: "Blank and custom printed can labels",
          cta: { label: "Discuss Your Project", href: "#inquiry" },
        }}
        productsTitle="Browse Packaging Label Products"
        productsDescription="Blank and custom printed packaging labels across standard filled-product container sizes."
        products={products}
        browseSections={browseSections}
        comparison={{
          title: "Blank vs Custom Printed Can Labels",
          headers: { left: "Blank Can Labels", right: "Custom Printed Can Labels" },
          rows: [
            { factor: "Best for", left: "In-house & variable-data printing", right: "Branded, finished cans" },
            { factor: "Artwork", left: "None — print your own", right: "Your logo, colors & layout" },
            { factor: "MOQ", left: "From low volume (stock sizes)", right: "From 5,000 labels" },
            { factor: "Lead time", left: "3–7 days (stock)", right: "10–18 days (production)" },
            { factor: "Packaging", left: "Standard boxing", right: "Private-label / OEM" },
          ],
        }}
        specs={{
          title: "Standard Specifications",
          rows: [
            { label: "Face Stock", value: "White gloss, matte, kraft, or clear BOPP" },
            { label: "Adhesive", value: "Permanent acrylic (food-safe, FDA 21 CFR compliant)" },
            { label: "Liner", value: "Silicone-coated white or yellow" },
            { label: "Print Method", value: "Flexo, offset, or digital CMYK + Pantone" },
            { label: "Coating", value: "Gloss, matte, or soft-touch lamination" },
            { label: "MOQ", value: "5,000 labels per size" },
            { label: "Lead Time", value: "10–18 days (standard); 7 days (rush)" },
            { label: "Certifications", value: "ISO 9001, FDA 21 CFR, BPA-Free available" },
          ],
        }}
        whyUs={{
          title: "Why Source Can Labels From the Factory",
          subtitle: "In-house printing, die-cutting, and lamination — with the food-safety certifications buyers require.",
          items: [
            { icon: <Factory />, title: "True Factory-Direct", text: "No distributor markup — printed, die-cut, and packed in our own factory." },
            { icon: <ShieldCheck />, title: "Food-Safe & Certified", text: "FDA 21 CFR adhesive, ISO 9001:2015, BPA-free and phenol-free options." },
            { icon: <Package />, title: "Blank or Custom", text: "Stock blank labels or full-color custom printed with OEM programs." },
            { icon: <Boxes />, title: "All Can Sizes", text: "211×400 to 401×700 plus custom, full- and partial-wrap." },
            { icon: <Truck />, title: "Global Export", text: "FOB, CIF, and DDP to the UK, EU, and North America with reliable lead times." },
            { icon: <BadgeCheck />, title: "OEM & Private Label", text: "Custom size, print, adhesive, and branded packaging for distributors and brands." },
          ],
        }}
        faqs={faqs}
        crossLinks={[
          { label: "Detergent / Bottle Labels", href: "/products/detergent-labels" },
          { label: "Thermal & Shipping Labels", href: "/products/thermal-labels" },
          { label: "NCR Forms & Carbonless", href: "/products/ncr-forms" },
          { label: "OEM & Private Label", href: "/oem" },
        ]}
        inquiry={{
          title: "Get Can Label Pricing",
          description: "Tell us your can sizes, quantities, and whether you need blank or custom printed — we'll send wholesale pricing within 24 hours.",
        }}
      />
    </>
  );
}
