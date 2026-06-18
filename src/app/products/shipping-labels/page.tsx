import type { Metadata } from "next";
import { BadgeCheck, Boxes, Factory, Printer, ShieldCheck, Truck } from "lucide-react";
import { SITE } from "@/config/siteData";
import { labelSizes } from "@/config/navigation";
import { getSlotImage } from "@/lib/imageSlotUtils";
import ProductCategoryShowcaseTemplate from "@/components/products/ProductCategoryShowcaseTemplate";

export const metadata: Metadata = {
  title: "Direct Thermal Shipping Labels | 4x6 Rolls & Fanfold",
  description:
    "Direct thermal shipping labels from the factory: 4x6 (100x150mm) in rolls & fanfold, Zebra/Dymo/Rollo compatible, BPA-free, bulk MOQ & OEM. Same-week quotes.",
  keywords:
    "direct thermal shipping labels, 4x6 thermal labels, shipping label rolls, fanfold shipping labels, zebra shipping labels, dymo shipping labels, 4x6 label rolls, bulk shipping labels, direct thermal labels, thermal label printer paper",
  alternates: { canonical: `${SITE.domain}/products/shipping-labels` },
  openGraph: {
    title: "Direct Thermal Shipping Labels | 4x6, Rolls & Fanfold | ZhixinPaper",
    description:
      "Factory-direct 4x6 direct thermal shipping labels — rolls & fanfold, Zebra/Dymo compatible, BPA-free, bulk MOQ & OEM.",
    url: `${SITE.domain}/products/shipping-labels`,
    type: "website",
    images: [{ url: `${SITE.domain}/og-default.png`, width: 1200, height: 630, alt: "ZhixinPaper Direct Thermal Shipping Labels", type: "image/png" }],
  },
};

const LABELS_IMG_FALLBACK = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-labels-FgJ5U8LZDHPF5nwmD6Uqa5.webp";

const products = [
  {
    title: "4×6 Shipping Labels",
    desc: "The standard e-commerce shipping size. Direct thermal, in rolls or fanfold — compatible with Amazon FBA, eBay, Shopify, and all major courier label formats.",
    icon: "📦",
    href: "/products/thermal-labels/4x6in",
    badge: "Most Popular",
  },
  {
    title: "Shipping Label Rolls",
    desc: "Continuous direct thermal label rolls on 1\" or 3\" cores, sized for desktop and industrial thermal printers. Custom widths and counts per roll available.",
    icon: "🧻",
    href: "/products/thermal-labels/blank",
  },
  {
    title: "Fanfold Shipping Labels",
    desc: "Z-fold stacks for high-volume, non-stop printing — no roll spindle needed. Ideal for warehouse and 3PL fulfillment lines running thousands of labels per day.",
    icon: "📚",
    href: "/products/thermal-labels/blank",
  },
  {
    title: "Printer-Compatible",
    desc: "Direct thermal labels matched to Zebra, Dymo, Rollo, Munbyn, and other desktop or industrial thermal printers — confirmed by size, core, and perforation.",
    icon: "🖨️",
    href: "/products/thermal-labels/custom-printed",
  },
];

const specs = [
  { label: "Most Popular Size", value: "4\" × 6\" (100 × 150 mm)" },
  { label: "Other Sizes", value: "2.25×1.25\", 4×4\", 2×1\", custom (±0.5mm)" },
  { label: "Format", value: "Rolls (1\" / 3\" core) or Fanfold (Z-stack)" },
  { label: "Material", value: "Direct thermal (no ribbon needed)" },
  { label: "Adhesive", value: "Permanent acrylic / removable (selectable)" },
  { label: "Labels per Roll", value: "250 / 500 / 1,000 (size-dependent)" },
  { label: "Coating", value: "BPA-free (standard) / phenol-free option" },
  { label: "MOQ", value: "Stock sizes from low volume; custom from 5,000 rolls" },
  { label: "Lead Time", value: "Stock 3–7 days · custom 10–18 days" },
  { label: "Incoterms", value: "EXW, FOB, CIF, DDP" },
];

const compatibilityRows = [
  { factor: "Zebra", left: "ZD220 / ZD420 / GK420d", right: "Industrial ZT series" },
  { factor: "Dymo", left: "4XL / 5XL", right: "4×6 direct thermal" },
  { factor: "Rollo", left: "Desktop direct thermal", right: "4×6 shipping workflow" },
  { factor: "Munbyn / Phomemo", left: "Desktop 4×6 printers", right: "Size and perforation matched" },
  { factor: "Generic / Industrial", left: "Any direct thermal printer", right: "Matched by size & core" },
];

const faqs = [
  { q: "What is the standard shipping label size?", a: "The most common e-commerce shipping label is 4\" × 6\" (100 × 150 mm). We also supply 2.25×1.25\", 4×4\", and custom sizes." },
  { q: "Rolls or fanfold — which should I choose?", a: "Rolls suit desktop printers with a spindle; fanfold (Z-stack) suits high-volume warehouse or 3PL lines and printers without a roll holder. We supply both in direct thermal." },
  { q: "Are these labels compatible with Zebra, Dymo, and Rollo?", a: "Yes. Our direct thermal shipping labels are matched to Zebra (ZD220/ZD420/GK420d), Dymo 4XL/5XL, Rollo, Munbyn, and most desktop or industrial thermal printers by size, core, and perforation." },
  { q: "Direct thermal vs thermal transfer — which is right for shipping?", a: "Shipping labels are almost always direct thermal: no ribbon, lower cost, and print life is ample for transit. Use thermal transfer only for long-term outdoor or chemical exposure." },
  { q: "What is the MOQ for bulk or OEM shipping labels?", a: "Stock sizes are available from low volume. Custom sizes, adhesives, or private-label packaging start at 5,000 rolls. Contact us with your size and quantity for a quote." },
  { q: "Do direct thermal shipping labels fade or smudge?", a: "Direct thermal print darkens over months of heat, UV, or friction exposure, but print life is well beyond a parcel's transit time. For long-term outdoor storage or chemical contact, choose thermal transfer instead — for normal e-commerce shipping, direct thermal is the standard." },
  { q: "Where can I buy 4x6 thermal shipping labels in bulk?", a: "As a direct thermal label factory, we sell 4x6 (100 × 150 mm) labels wholesale in rolls and fanfold worldwide — with bulk and OEM pricing, no middleman markup, and FOB / CIF / DDP export to the UK, EU, and North America." },
];

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Direct Thermal Shipping Labels",
  description:
    "Factory-direct 4x6 direct thermal shipping labels in rolls and fanfold — Zebra/Dymo compatible, BPA-free, OEM and bulk.",
  url: `${SITE.domain}/products/shipping-labels`,
  isPartOf: { "@id": `${SITE.domain}/#website` },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      "4x6 Shipping Labels",
      "Shipping Label Rolls",
      "Fanfold Shipping Labels",
      "Printer-Compatible Direct Thermal Labels",
    ].map((name, i) => ({ "@type": "ListItem", position: i + 1, name })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
    { "@type": "ListItem", position: 2, name: "Products", item: `${SITE.domain}/products` },
    { "@type": "ListItem", position: 3, name: "Shipping Labels", item: `${SITE.domain}/products/shipping-labels` },
  ],
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

export default async function ShippingLabelsPage() {
  const heroImage = await getSlotImage("thermal-labels:blank-hero", LABELS_IMG_FALLBACK);
  const featureImage = await getSlotImage("thermal-labels:custom-hero", LABELS_IMG_FALLBACK);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ProductCategoryShowcaseTemplate
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "Shipping Labels" }]}
        heroImage={heroImage}
        heroBadge={{ text: "E-commerce & 3PL Supply", color: "amber" }}
        title={<>Direct Thermal Shipping Labels<br /><span className="text-amber-400">4×6, Rolls &amp; Fanfold</span></>}
        subtitle="Factory-direct direct-thermal shipping labels for e-commerce sellers, warehouses, and 3PLs. 4×6 and custom sizes, in rolls or fanfold, matched to Zebra, Dymo, Rollo, and industrial thermal printers — BPA-free, bulk pricing, and full OEM or private-label support."
        trustBadges={["4×6 Stock + Custom Sizes", "Rolls & Fanfold Formats", "Zebra / Dymo / Rollo Matched", "OEM Available"]}
        stats={[
          { value: "4×6", label: "Top Size" },
          { value: "Roll / Fold", label: "Format" },
          { value: "3–18", label: "Day Lead" },
        ]}
        ctas={[
          { label: "Get a Quick Quote", href: "#inquiry", variant: "primary" },
          { label: "Request Samples", href: "/contact", variant: "outline" },
        ]}
        introSplit={{
          title: "4×6, Rolls & Fanfold — From the Factory",
          lead: "From single 4×6 rolls to high-volume fanfold for 3PL lines, we supply the full direct thermal shipping label range straight from the factory — sized, cored, and perforated to match your printers.",
          bullets: [
            "4×6 and custom sizes in rolls or fanfold",
            "Direct thermal — no ribbon, lower running cost",
            "Matched to Zebra, Dymo, Rollo and industrial printers",
            "BPA-free standard with phenol-free option",
          ],
          image: heroImage,
          imageAlt: "Direct thermal shipping label rolls and fanfold stacks",
          cta: { label: "Send Inquiry Now", href: "#inquiry" },
        }}
        overview={{
          title: "What Are Direct Thermal Shipping Labels?",
          paragraphs: [
            "Direct thermal shipping labels are self-adhesive labels printed by heat alone — no ink, toner, or ribbon. A thermal print head darkens a heat-sensitive coating to form the barcode and address, which keeps consumable cost low, reduces printer downtime, and simplifies the workflow for high-volume fulfillment teams.",
            "The 4\" × 6\" (100 × 150 mm) label is the global e-commerce standard, accepted by Amazon FBA, eBay, Shopify, USPS, UPS, FedEx, and DHL. We also produce 2.25 × 1.25\", 4 × 4\", 2 × 1\", and fully custom sizes, supplied as rolls on 1\" or 3\" cores or as Z-fold fanfold stacks for printers without a spindle.",
            "As the manufacturer, we control the coating, adhesive, core, and perforation in-house. That lets us match your exact printer and workflow, keep BPA-free as the standard with a phenol-free option, and support OEM or private-label packaging for distributors and brands — at true factory-direct wholesale pricing with no middleman markup.",
          ],
        }}
        featureSplit={{
          title: "Why Use Direct Thermal Labels for Shipping?",
          lead: "Direct thermal is the right choice for almost every shipping workflow: with no ribbon to buy or load, it cuts both cost and complexity while staying durable enough for parcel transit and last-mile handling.",
          bullets: [
            "No ribbon needed — lower consumable cost",
            "Transit-ready print life for parcels and handling",
            "Roll and fanfold formats for desktop to industrial",
            "Custom size, adhesive and perforation for OEM",
          ],
          image: featureImage,
          imageAlt: "Thermal printer producing a 4x6 shipping label",
          cta: { label: "Talk to a Specialist", href: "#inquiry" },
        }}
        productsTitle="Types of Direct Thermal Shipping Labels"
        productsDescription="Pick the format and size that matches your printers and volume — every option ships direct thermal, BPA-free, and bulk-ready."
        products={products}
        browseSections={[
          {
            title: "Shipping Labels by Size",
            description: "Jump to the most-requested label sizes for full specs, printer compatibility, and a size-specific quote.",
            cards: labelSizes.map((size, i) => ({
              image: i % 2 === 0 ? heroImage : featureImage,
              title: size.label,
              desc: `Direct thermal ${size.label.toLowerCase()} stock — supplied in rolls or fanfold, BPA-free, and matched to your printer.`,
              href: `/products/thermal-labels/${size.slug}`,
              badge: size.badge,
            })),
          },
          {
            title: "Shipping Labels by Format",
            description: "Choose the supply format that fits your printer hardware and daily throughput.",
            cards: [
              { image: heroImage, title: "Label Rolls (1\" / 3\" core)", desc: "Continuous direct thermal rolls for desktop and industrial thermal printers with a spindle.", href: "/products/thermal-labels/blank", badge: "Desktop" },
              { image: featureImage, title: "Fanfold (Z-stack)", desc: "Z-fold stacks for non-stop, high-volume printing on warehouse and 3PL lines — no spindle needed.", href: "/products/thermal-labels/blank", badge: "High Volume" },
              { image: heroImage, title: "Custom Printed Labels", desc: "Pre-printed logos, color, and layout with custom size, adhesive, and perforation for OEM programs.", href: "/products/thermal-labels/custom-printed", badge: "OEM" },
              { image: featureImage, title: "All Thermal Labels", desc: "Explore the full direct thermal label catalogue — sizes, materials, and printer-matched options.", href: "/products/thermal-labels/blank" },
            ],
          },
        ]}
        comparison={{
          title: "Printer Compatibility",
          headers: { left: "Desktop / Standard", right: "Notes / Industrial" },
          rows: compatibilityRows,
        }}
        specs={{ title: "Specifications", rows: specs }}
        whyUs={{
          title: "Why Source From the Factory",
          subtitle: "Direct manufacturing control on coating, adhesive, and packaging — with the certifications global buyers require.",
          items: [
            { icon: <Factory />, title: "True Factory-Direct", text: "No distributor markup. We control the line from base paper coating to finished, boxed rolls and fanfold." },
            { icon: <ShieldCheck />, title: "Certified & Compliant", text: "ISO 9001:2015, FSC, BPA-free standard, and RoHS / REACH support for regulated markets." },
            { icon: <Printer />, title: "Printer-Matched", text: "Size, core, and perforation confirmed against Zebra, Dymo, Rollo, and industrial thermal printers." },
            { icon: <Boxes />, title: "Rolls & Fanfold", text: "Both supply formats in stock and custom — desktop sellers to high-volume 3PL fulfillment lines." },
            { icon: <Truck />, title: "Global Export", text: "FOB, CIF, and DDP to UK, EU, and North America, with reliable lead times and consolidated shipping." },
            { icon: <BadgeCheck />, title: "OEM & Private Label", text: "Custom size, adhesive, perforation, and branded packaging programs for distributors and brands." },
          ],
        }}
        faqs={faqs}
        crossLinks={[
          { label: "4×6 Label Details", href: "/products/thermal-labels/4x6in" },
          { label: "All Thermal Labels", href: "/products/thermal-labels/blank" },
          { label: "Linerless Labels", href: "/products/linerless-labels" },
          { label: "OEM & Private Label", href: "/oem" },
        ]}
        inquiry={{
          title: "Request a Shipping Label Quote",
          description: "Tell us your size, format (roll or fanfold), printer model, and quantity — we'll send unit pricing the same week.",
        }}
      />
    </>
  );
}
