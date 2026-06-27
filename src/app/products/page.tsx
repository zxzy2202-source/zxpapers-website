import type { Metadata } from "next";
import { BadgeCheck, Boxes, Factory, MessageSquare, Package, Phone, ShieldCheck, Truck } from "lucide-react";
import { getSlotImages } from "@/lib/imageSlotUtils";
import { r2Image } from "@/lib/r2";
import { paperRollSizes, labelSizes, canLabelSizes, detergentLabelSizes } from "@/config/navigation";
import { SITE } from "@/config/siteData";
import ProductCategoryShowcaseTemplate from "@/components/products/ProductCategoryShowcaseTemplate";
import type { ShowcaseBrowseSection } from "@/components/products/ProductCategoryShowcaseTemplate";
import { CAN_LABELS_IMG } from "./can-labels/can-labels-data";
import { DETERGENT_LABELS_IMG } from "./detergent-labels/detergent-labels-data";
import { NCR_FORMS_IMG, ncrFormParts, ncrFormTypes } from "./ncr-forms/ncr-forms-data";

export const metadata: Metadata = {
  title: "Thermal Paper Rolls, Labels & Can Labels | Factory Catalog",
  description:
    "Factory-direct catalog of thermal paper rolls, thermal & shipping labels, can labels, and detergent labels — blank or custom printed, all sizes in stock, BPA-free, OEM. Get bulk pricing.",
  keywords:
    "thermal paper rolls, thermal labels, shipping labels, can labels, detergent labels, custom printed thermal paper, blank thermal labels, thermal paper manufacturer, thermal paper wholesale, OEM thermal paper",
  alternates: { canonical: `${SITE.domain}/products` },
};

const ROLLS_IMG_FB = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-rolls-RQBrphmgzbAMk7eq3HsvNq.webp";
const LABELS_IMG_FB = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-labels-FgJ5U8LZDHPF5nwmD6Uqa5.webp";
// Can/detergent have no brand photography yet — reuse the canonical category constants
// (single source of truth) so /products inherits any future real image automatically.
const CAN_LABELS_IMG_FB = CAN_LABELS_IMG;
const DETERGENT_LABELS_IMG_FB = DETERGENT_LABELS_IMG;
// On-brand factory photo instead of a generic stock image for the catalog hero.
const HERO_IMG_FB = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/oem-factory-EHdu8eZwwzSo5DxSRyzQdF.webp";

// Build the catalog ItemList from the same size config the page renders, so the
// structured data always mirrors the actual on-page links (blank, custom, every size).
const catalogEntries: { name: string; path: string }[] = [
  { name: "Blank Thermal Paper Rolls", path: "/products/thermal-paper-rolls/blank" },
  { name: "Custom Printed Thermal Rolls", path: "/products/thermal-paper-rolls/custom-printed" },
  ...paperRollSizes.map((s) => ({ name: `${s.label} Thermal Paper Roll`, path: `/products/thermal-rolls/${s.slug}` })),
  { name: "Blank Thermal Labels", path: "/products/thermal-labels/blank" },
  { name: "Custom Printed Thermal Labels", path: "/products/thermal-labels/custom-printed" },
  ...labelSizes.map((s) => ({ name: `${s.label} Thermal Label`, path: `/products/thermal-labels/${s.slug}` })),
  { name: "Blank Can Labels", path: "/products/can-labels/blank" },
  { name: "Custom Printed Can Labels", path: "/products/can-labels/custom-printed" },
  ...canLabelSizes.map((s) => ({ name: `${s.label} Can Label`, path: `/products/can-labels/${s.slug}` })),
  { name: "Blank Detergent Labels", path: "/products/detergent-labels/blank" },
  { name: "Custom Printed Detergent Labels", path: "/products/detergent-labels/custom-printed" },
  ...detergentLabelSizes.map((s) => ({ name: `${s.label} Detergent Label`, path: `/products/detergent-labels/${s.slug}` })),
  { name: "NCR Forms & Carbonless Paper", path: "/products/ncr-forms" },
  ...ncrFormParts.map((p) => ({ name: `${p.label} NCR Forms`, path: `/products/ncr-forms/${p.slug}` })),
];

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Products",
  description:
    "Complete range of thermal paper rolls, thermal labels, can labels, and detergent labels. Blank and custom printed options available.",
  url: `${SITE.domain}/products`,
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
    { "@type": "ListItem", position: 2, name: "Products", item: `${SITE.domain}/products` },
  ],
};

const faqs = [
  { q: "What thermal paper products do you manufacture?", a: "We are a factory producing thermal paper rolls (POS, ATM, kiosk, and till rolls), direct thermal and shipping labels, can labels, and detergent / household-chemical labels — each available blank or custom printed." },
  { q: "Do you supply blank and custom printed options?", a: "Yes. Every category is offered as blank stock for in-house printing, or custom printed with your logo, artwork, and private-label packaging (OEM)." },
  { q: "What sizes are available?", a: "Thermal rolls in 57mm and 80mm plus custom widths; labels in 4×6 and other common sizes; can and detergent labels sized to standard containers. Custom sizes are made to ±0.5mm tolerance." },
  { q: "What is the minimum order quantity (MOQ)?", a: "Stock sizes are available from low volume. Custom sizes, printing, adhesives, or private-label packaging start at 5,000 units. Tell us your category and quantity for a quote." },
  { q: "Where do you ship and how fast?", a: "We export worldwide on FOB, CIF, or DDP terms to the UK, EU, and North America. Stock items ship in 3–7 days; custom production runs 10–18 days." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": { "@type": "Answer", "text": a },
  })),
};

export default async function ProductsPage() {
  const imgs = await getSlotImages([
    { slot: "products:hero", fallback: HERO_IMG_FB },
    { slot: "products:thermal-rolls", fallback: ROLLS_IMG_FB },
    { slot: "products:thermal-labels", fallback: LABELS_IMG_FB },
    { slot: "products:can-labels", fallback: CAN_LABELS_IMG_FB },
    { slot: "products:detergent-labels", fallback: DETERGENT_LABELS_IMG_FB },
  ]);

  const rollsImg = r2Image(imgs["products:thermal-rolls"]);
  const labelsImg = r2Image(imgs["products:thermal-labels"]);
  const canImg = r2Image(imgs["products:can-labels"]);
  const detergentImg = r2Image(imgs["products:detergent-labels"]);
  const ncrImg = r2Image(NCR_FORMS_IMG);

  const products = [
    { title: "Thermal Paper Rolls", desc: "POS receipts, ATM, kiosk, and parking-ticket rolls — BPA-free, sharp print, blank or custom.", image: rollsImg, href: "/products/thermal-paper-rolls/blank", badge: "POS & Receipts" },
    { title: "Thermal & Shipping Labels", desc: "Direct thermal shipping, barcode, and product labels — 4×6 and custom, rolls or fanfold.", image: labelsImg, href: "/products/thermal-labels/blank", badge: "4×6 & Custom" },
    { title: "Can Labels", desc: "Full-wrap and partial-wrap labels for beverage, food, pet food, and industrial cans.", image: canImg, href: "/products/can-labels", badge: "Food Safe" },
    { title: "Detergent Labels", desc: "Water- and chemical-resistant, GHS-compliant labels for detergent and cleaning bottles.", image: detergentImg, href: "/products/detergent-labels", badge: "Chemical Resistant" },
    { title: "NCR Forms & Business Forms", desc: "Custom printed carbonless forms — invoices, receipts, delivery notes & order books, 2/3/4-part.", image: ncrImg, href: "/products/ncr-forms", badge: "Carbonless" },
  ];

  const browseSections: ShowcaseBrowseSection[] = [
    {
      title: "Thermal Paper Rolls",
      description: "POS receipts, ATM, kiosk, and till rolls — choose blank or custom, then drill into a size.",
      cards: [
        { image: rollsImg, title: "Blank Thermal Paper Rolls", desc: "Standard white thermal rolls for all POS and receipt printers. BPA-free, high image clarity.", href: "/products/thermal-paper-rolls/blank", badge: "Blank" },
        { image: rollsImg, title: "Custom Printed Thermal Rolls", desc: "Rolls pre-printed with your logo, brand colors, or promotions. OEM and private label available.", href: "/products/thermal-paper-rolls/custom-printed", badge: "Custom" },
        ...paperRollSizes.map((s) => ({ image: s.image ? r2Image(s.image) : rollsImg, title: s.label, desc: `Popular thermal roll size${s.markets ? ` for ${s.markets}` : ""} — in stock and custom.`, href: `/products/thermal-rolls/${s.slug}`, badge: s.badge })),
      ],
    },
    {
      title: "Thermal & Shipping Labels",
      description: "Direct thermal shipping, barcode, and product labels — blank or custom, in popular sizes.",
      cards: [
        { image: labelsImg, title: "Blank Thermal Labels", desc: "Direct thermal labels for shipping, inventory, and barcodes. Compatible with all major printers.", href: "/products/thermal-labels/blank", badge: "Blank" },
        { image: labelsImg, title: "Custom Printed Thermal Labels", desc: "Pre-printed labels with your brand, logo, or product information. Private label available.", href: "/products/thermal-labels/custom-printed", badge: "Custom" },
        ...labelSizes.map((s) => ({ image: s.image ? r2Image(s.image) : labelsImg, title: s.label, desc: `Popular label size${s.markets ? ` for ${s.markets}` : ""} — direct thermal, in stock and custom.`, href: `/products/thermal-labels/${s.slug}`, badge: s.badge })),
      ],
    },
    {
      title: "Can Labels",
      description: "Moisture-resistant, food-safe can labels for every standard can size — blank or custom.",
      cards: [
        { image: canImg, title: "Blank Can Labels", desc: "Moisture-resistant, food-safe blank labels. Full-wrap and partial-wrap for all standard cans.", href: "/products/can-labels/blank", badge: "Blank" },
        { image: canImg, title: "Custom Printed Can Labels", desc: "Full-color printed can labels with your brand design for beverages, food, and industrial cans.", href: "/products/can-labels/custom-printed", badge: "Custom" },
        ...canLabelSizes.map((s) => ({ image: s.image ? r2Image(s.image) : canImg, title: s.label, desc: `Can label size${s.markets ? ` for ${s.markets}` : ""} — food-safe and moisture-resistant.`, href: `/products/can-labels/${s.slug}`, badge: s.badge })),
      ],
    },
    {
      title: "Detergent Labels",
      description: "Water- and chemical-resistant labels for detergent, dish soap, and household cleaners.",
      cards: [
        { image: detergentImg, title: "Blank Detergent Labels", desc: "Water- and chemical-resistant blank labels for detergent bottles and household chemicals.", href: "/products/detergent-labels/blank", badge: "Blank" },
        { image: detergentImg, title: "Custom Printed Detergent Labels", desc: "GHS-compliant printed labels with your brand, hazard pictograms, and product information.", href: "/products/detergent-labels/custom-printed", badge: "Custom" },
        ...detergentLabelSizes.map((s) => ({ image: s.image ? r2Image(s.image) : detergentImg, title: s.label, desc: `Detergent label size${s.markets ? ` for ${s.markets}` : ""} — water- and chemical-resistant.`, href: `/products/detergent-labels/${s.slug}`, badge: s.badge })),
      ],
    },
    {
      title: "NCR Forms & Business Forms",
      description: "Custom printed carbonless forms for invoices, receipts, delivery notes, and orders — 2-part, 3-part, 4-part, or multi-part.",
      cards: [
        ...ncrFormParts.map((p) => ({ image: ncrImg, title: p.label, desc: p.desc, href: `/products/ncr-forms/${p.slug}`, badge: p.badge })),
        ...ncrFormTypes.map((t) => ({ image: ncrImg, title: t.label, desc: t.desc, href: `/products/ncr-forms#${t.anchor}`, badge: "Carbonless" })),
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ProductCategoryShowcaseTemplate
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
        heroImage={r2Image(imgs["products:hero"])}
        heroBadge={{ text: "Factory Direct Supply", color: "amber" }}
        title={<>Thermal Paper Rolls<br /><span className="text-amber-400">&amp; Labels Catalog</span></>}
        subtitle="The complete factory catalog of thermal paper rolls, labels, and specialty labels — blank or custom printed, all sizes in stock, with OEM packaging and bulk pricing in 24 hours."
        trustBadges={["All Sizes In Stock", "OEM Available", "BPA-Free Options", "ISO 9001"]}
        stats={[
          { value: "50+", label: "Product Sizes" },
          { value: "In Stock", label: "Ready to Ship" },
          { value: "OEM", label: "Custom Packaging" },
          { value: "24h", label: "Quote Response" },
        ]}
        ctas={[
          { label: "Get Full Price List", href: "/contact", variant: "primary", icon: <MessageSquare className="w-4 h-4" /> },
          { label: "WhatsApp for Quote", href: `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I need pricing for thermal paper rolls. Please send full price list.")}`, variant: "whatsapp", icon: <Phone className="w-4 h-4" />, external: true },
        ]}
        introSplit={{
          title: "One Factory, the Full Thermal Range",
          lead: "From POS receipt rolls to direct thermal shipping labels, can labels, and detergent labels — we manufacture every category in-house, blank or custom printed, at true factory-direct pricing.",
          bullets: [
            "Thermal paper rolls — 57mm, 80mm & custom",
            "Direct thermal & shipping labels — 4×6 and custom",
            "Can labels — food-safe, full- and partial-wrap",
            "Detergent labels — water- & chemical-resistant",
            "NCR forms — carbonless invoices, receipts & delivery notes",
          ],
          image: rollsImg,
          imageAlt: "Thermal paper rolls and label products from the factory",
          cta: { label: "Send Inquiry Now", href: "#inquiry" },
        }}
        overview={{
          title: "A Complete Thermal Paper & Label Catalog",
          paragraphs: [
            "ZhixinPaper is a thermal paper and label manufacturer supplying the full product range from a single factory: thermal paper rolls for POS, ATM, kiosk, and till applications; direct thermal and shipping labels; can labels; and detergent or household-chemical labels.",
            "Every category is available as blank stock for in-house printing or as custom printed runs with your logo, artwork, and private-label packaging. Standard sizes are held in stock for fast dispatch, while custom widths and shapes are produced to a ±0.5mm tolerance.",
            "Because we control coating, printing, adhesive, and packaging in-house, we hold BPA-free as standard, support OEM programs for distributors and brands, and export worldwide on FOB, CIF, and DDP terms — at wholesale pricing with no middleman markup.",
          ],
        }}
        featureSplit={{
          title: "Blank or Custom Printed — Your Call",
          lead: "Match the product to your workflow: order blank stock to print in-house, or hand us your artwork for fully custom, private-label runs.",
          bullets: [
            "Blank stock for in-house and variable-data printing",
            "Custom CMYK / Pantone printing with design support",
            "Private-label packaging and OEM programs",
            "BPA-free standard with phenol-free option",
          ],
          image: labelsImg,
          imageAlt: "Blank and custom printed thermal labels",
          cta: { label: "Discuss Your Project", href: "#inquiry" },
        }}
        productsTitle="Browse Our Product Categories"
        productsDescription="Five core categories, each available blank or custom printed and in stock across all popular sizes."
        products={products}
        browseSections={browseSections}
        comparison={{
          title: "Blank vs Custom Printed",
          headers: { left: "Blank Stock", right: "Custom Printed" },
          rows: [
            { factor: "Best for", left: "In-house & variable-data printing", right: "Branded, finished products" },
            { factor: "Artwork", left: "None — print your own", right: "Your logo, colors & layout" },
            { factor: "MOQ", left: "From low volume (stock sizes)", right: "From 5,000 units" },
            { factor: "Lead time", left: "3–7 days (stock)", right: "10–18 days (production)" },
            { factor: "Packaging", left: "Standard boxing", right: "Private-label / OEM" },
          ],
        }}
        whyUs={{
          title: "Why Source From the Factory",
          subtitle: "In-house control of coating, printing, adhesive, and packaging — with the certifications global buyers require.",
          items: [
            { icon: <Factory />, title: "True Factory-Direct", text: "No distributor markup. We run the line from base-paper coating to finished, boxed product." },
            { icon: <ShieldCheck />, title: "Certified & Compliant", text: "ISO 9001:2015, FSC, BPA-free standard, and RoHS / REACH support for regulated markets." },
            { icon: <Package />, title: "Blank or Custom", text: "Every category in blank stock or custom printed, with OEM and private-label programs." },
            { icon: <Boxes />, title: "All Sizes In Stock", text: "57/80mm rolls, 4×6 labels, and standard can / bottle sizes ready for fast dispatch." },
            { icon: <Truck />, title: "Global Export", text: "FOB, CIF, and DDP to the UK, EU, and North America with reliable lead times." },
            { icon: <BadgeCheck />, title: "OEM & Private Label", text: "Custom size, print, adhesive, and branded packaging for distributors and brands." },
          ],
        }}
        faqs={faqs}
        crossLinks={[
          { label: "Till Rolls", href: "/products/till-rolls" },
          { label: "Shipping Labels", href: "/products/shipping-labels" },
          { label: "BPA-Free Thermal Paper", href: "/products/bpa-free-thermal-paper" },
          { label: "OEM & Private Label", href: "/oem" },
        ]}
        inquiry={{
          title: "Get the Full Price List",
          description: "Tell us which categories, sizes, and quantities you need — blank or custom — and we'll send wholesale pricing within 24 hours.",
        }}
      />
    </>
  );
}
