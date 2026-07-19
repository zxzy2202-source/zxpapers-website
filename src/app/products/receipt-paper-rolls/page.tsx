import type { Metadata } from "next";
import { BadgeCheck, Boxes, Factory, MessageSquare, Package, Phone, ShieldCheck, Truck } from "lucide-react";
import { paperRollSizes } from "@/config/navigation";
import { SITE } from "@/config/siteData";
import { getSlotImage } from "@/lib/imageSlotUtils";
import { r2Image } from "@/lib/r2";
import ProductCategoryShowcaseTemplate from "@/components/products/ProductCategoryShowcaseTemplate";
import type { ShowcaseBrowseSection } from "@/components/products/ProductCategoryShowcaseTemplate";

export const metadata: Metadata = {
  title: "Receipt Paper Rolls & Cash Register Paper | Wholesale Manufacturer",
  description: "Bulk receipt paper rolls and cash register paper, factory direct. Thermal POS receipt rolls in 57mm (2¼\") and 80mm (3⅛\") sizes. BPA-free, ISO 9001. MOQ 1,000 rolls.",
  keywords: "receipt paper rolls, cash register paper, cash register paper rolls, thermal receipt paper roll, pos receipt paper, register paper, receipt printer paper rolls, thermal paper for cash register",
  alternates: { canonical: `${SITE.domain}/products/receipt-paper-rolls` },
};

const ROLLS_IMG_FALLBACK = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-rolls-RQBrphmgzbAMk7eq3HsvNq.webp";

const specs = [
  { label: "Common Widths",     value: "57mm (2¼\") / 80mm (3⅛\") / Custom (±0.5mm)" },
  { label: "Roll Diameter",     value: "30mm – 100mm (custom available)" },
  { label: "Paper Length",      value: "12m – 80m (e.g. 2¼\" × 50ft, 3⅛\" × 230ft)" },
  { label: "Core Inner Dia.",   value: "12mm / 25mm / Custom" },
  { label: "Paper Weight",      value: "48 g/m² / 55 g/m² / 65 g/m²" },
  { label: "Coating Type",      value: "BPA-Free (Phenol-Free available) / Standard" },
  { label: "Image Life",        value: "3 years (standard) / 5–7 years / 10 years (archival)" },
  { label: "Printer Type",      value: "Direct thermal — no ink, ribbon, or toner required" },
  { label: "Color",             value: "White (standard) / Colored base (custom)" },
  { label: "MOQ",               value: "1,000 rolls (samples: 50–100 rolls)" },
  { label: "Lead Time",         value: "7–15 business days (stock sizes: 3–5 days)" },
  { label: "Payment Terms",     value: "T/T 30% deposit, 70% before shipment; L/C at sight" },
];

const faqs = [
  { q: "Is receipt paper the same as cash register paper?", a: "Yes. Receipt paper rolls, cash register paper, and POS receipt paper all refer to the same product — thermal paper rolls used in cash registers, POS terminals, and receipt printers. They print using heat, so no ink or ribbon is needed." },
  { q: "What size cash register paper do I need?", a: "The two most common sizes are 80mm (3⅛ inch) wide for standard POS and cash registers, and 57mm (2¼ inch) wide for mobile, credit card, and compact terminals. Tell us your printer model and we'll confirm the exact roll size and length." },
  { q: "Do you sell receipt paper rolls in bulk / wholesale?", a: "Yes. We are a factory-direct manufacturer. Our MOQ is 1,000 rolls, with full-container pricing for distributors and wholesalers. We ship to 80+ countries on EXW, FOB, CIF, and DDP terms." },
  { q: "Are your receipt rolls BPA-free?", a: "Yes. All standard rolls use BPA-free thermal coating, and we offer fully phenol-free (BPS-free) coating for the EU, California, and other regulated markets." },
  { q: "Can you print our logo on the receipt rolls?", a: "Yes. We offer custom-printed receipt rolls with your logo, promotional message, or back-printed coupons. Custom printing MOQ starts at 5,000 rolls." },
  { q: "Can I get free samples before ordering?", a: "Yes. We provide free physical samples in 3–5 business days so you can test print quality and image life before placing a bulk order." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE.domain },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": `${SITE.domain}/products` },
    { "@type": "ListItem", "position": 3, "name": "Receipt Paper Rolls", "item": `${SITE.domain}/products/receipt-paper-rolls` },
  ],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Receipt Paper Rolls & Cash Register Paper | Thermal POS Receipt Rolls",
  "description": "Factory-direct receipt paper rolls and cash register paper. Thermal POS receipt rolls in 57mm (2¼\") and 80mm (3⅛\") sizes. BPA-free, ISO 9001 certified. MOQ 1,000 rolls.",
  "brand": { "@type": "Brand", "name": SITE.name },
  "manufacturer": { "@id": `${SITE.domain}/#organization` },
  "image": ROLLS_IMG_FALLBACK,
  "url": `${SITE.domain}/products/receipt-paper-rolls`,
  "additionalProperty": specs.map(({ label, value }) => ({
    "@type": "PropertyValue",
    "name": label,
    "value": value,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": { "@type": "Answer", "text": a },
  })),
};

export const revalidate = 86400; // 24 hours: static product/market content

export default async function ReceiptPaperRollsPage() {
  const rollsImg = r2Image(await getSlotImage("thermal-paper-rolls:blank-hero", ROLLS_IMG_FALLBACK));

  const products = [
    { title: "80mm (3⅛\") POS Rolls", desc: "The standard width for cash registers and POS terminals — sharp, long-lasting receipts, BPA-free.", image: rollsImg, href: "/products/thermal-rolls/80x80mm", badge: "Most Popular" },
    { title: "57mm (2¼\") Mobile Rolls", desc: "Compact rolls for mobile, credit card, and handheld receipt terminals.", image: rollsImg, href: "/products/thermal-rolls/57x50mm", badge: "Mobile POS" },
    { title: "Custom Printed Receipt Rolls", desc: "Your logo, promotion, or back-printed coupon on every receipt. OEM & private label.", image: rollsImg, href: "/products/thermal-paper-rolls/custom-printed", badge: "Custom" },
    { title: "BPA-Free / Phenol-Free Rolls", desc: "Food-safe, regulation-ready receipt rolls for the EU, California, and other regulated markets.", image: rollsImg, href: "/products/bpa-free-thermal-paper", badge: "Phenol-Free" },
  ];

  const browseSections: ShowcaseBrowseSection[] = [
    {
      title: "Popular Receipt & Cash Register Paper Sizes",
      description: "80mm for standard POS, 57mm for mobile and card terminals — pick a size or ask for a custom width.",
      cards: paperRollSizes.map((s) => ({
        image: rollsImg,
        title: s.label,
        desc: `Popular receipt roll size${s.markets ? ` for ${s.markets}` : ""} — BPA-free, in stock and custom.`,
        href: `/products/thermal-rolls/${s.slug}`,
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
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "Receipt Paper Rolls" }]}
        heroImage={rollsImg}
        heroBadge={{ text: "Factory Direct Supply", color: "amber" }}
        title={<>Receipt Paper Rolls &amp;<br /><span className="text-amber-400">Cash Register Paper</span></>}
        subtitle="Factory-direct thermal receipt paper rolls for cash registers, POS terminals, and receipt printers — 57mm (2¼″), 80mm (3⅛″), and custom sizes, BPA-free, with OEM private-label printing and bulk pricing in 24 hours."
        trustBadges={["BPA-Free Standard", "57mm & 80mm In Stock", "OEM Available", "ISO 9001"]}
        stats={[
          { value: "1,000", label: "Rolls MOQ" },
          { value: "57/80mm", label: "Common Widths" },
          { value: "OEM", label: "Custom Printing" },
          { value: "24h", label: "Quote Response" },
        ]}
        ctas={[
          { label: "Get Receipt Roll Pricing", href: "#inquiry", variant: "primary", icon: <MessageSquare className="w-4 h-4" /> },
          { label: "WhatsApp for Quote", href: `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I need pricing for receipt / cash register paper rolls. Please send sizes and bulk pricing.")}`, variant: "whatsapp", icon: <Phone className="w-4 h-4" />, external: true },
        ]}
        introSplit={{
          title: "Cash Register & POS Receipt Rolls From One Factory",
          lead: "Also called cash register paper or POS receipt paper, our thermal rolls print sharp, long-lasting receipts with no ink or ribbon — coated, slit, and packed in-house at factory-direct pricing.",
          bullets: [
            "57mm & 80mm plus custom widths (±0.5mm)",
            "12mm / 25mm cores, 30–100mm diameters",
            "BPA-free standard, phenol-free option",
            "Compatible with Epson, Star, Bixolon, Citizen & all major brands",
          ],
          image: rollsImg,
          imageAlt: "Receipt paper rolls and cash register paper",
          cta: { label: "Send Inquiry Now", href: "#inquiry" },
        }}
        overview={{
          title: "Receipt Paper Rolls & Cash Register Paper",
          paragraphs: [
            "Receipt paper rolls, cash register paper, and POS receipt paper all refer to the same product — thermal paper rolls used in cash registers, POS terminals, retail checkout, restaurant order printers, supermarkets, credit card terminals, mobile and handheld printers, parking and kiosk systems, taxi meters, and lottery terminals.",
            "The two most requested sizes are 80mm (3⅛ inch) for standard POS and cash registers, and 57mm (2¼ inch) for mobile and card terminals. We supply both metric (57/80mm) and imperial (2¼″/3⅛″) sizes, with custom widths, diameters, and lengths produced to a ±0.5mm tolerance.",
            "As a factory-direct manufacturer, we hold BPA-free as standard with a fully phenol-free option for regulated markets, offer custom logo and back-printing, provide free pre-production samples, and export to 80+ countries on EXW, FOB, CIF, and DDP terms — at wholesale pricing with no middleman markup.",
          ],
        }}
        featureSplit={{
          title: "Why Buyers Choose Our Receipt Rolls",
          lead: "High-sensitivity coating, consistent tolerances, and printer compatibility — backed by free samples and OEM support.",
          bullets: [
            "Sharp, clear receipts with high-sensitivity coating",
            "BPA-free & phenol-free options for the EU and California",
            "±0.5mm width and ±2% roll-length tolerance",
            "Free pre-production sample before any bulk order",
          ],
          image: rollsImg,
          imageAlt: "Custom and blank receipt paper rolls",
          cta: { label: "Request Free Samples", href: "/contact" },
        }}
        productsTitle="Browse Receipt Roll Options"
        productsDescription="Standard POS, mobile, custom printed, and phenol-free receipt rolls — in stock across all popular widths."
        products={products}
        browseSections={browseSections}
        comparison={{
          title: "80mm vs 57mm Receipt Rolls",
          headers: { left: "80mm (3⅛″)", right: "57mm (2¼″)" },
          rows: [
            { factor: "Best for", left: "Cash registers & standard POS", right: "Mobile, card & handheld terminals" },
            { factor: "Typical use", left: "Retail, supermarket, restaurant", right: "Field sales, taxi, kiosk" },
            { factor: "Receipt width", left: "Wider — more line content", right: "Compact — portable printers" },
            { factor: "Coating", left: "BPA-free / phenol-free option", right: "BPA-free / phenol-free option" },
            { factor: "Availability", left: "In stock", right: "In stock" },
          ],
        }}
        specs={{
          title: "Specifications",
          rows: specs,
          note: "* Custom specifications available. Contact us for non-standard requirements.",
        }}
        whyUs={{
          title: "Why Source Receipt Rolls From the Factory",
          subtitle: "In-house coating, slitting, and packaging — with the certifications global buyers require.",
          items: [
            { icon: <Factory />, title: "True Factory-Direct", text: "No distributor markup — coated, slit, and boxed in our own factory." },
            { icon: <ShieldCheck />, title: "Certified & Compliant", text: "ISO 9001:2015, FSC, BPA-free standard, phenol-free, FDA and RoHS / REACH support." },
            { icon: <Package />, title: "Free Samples", text: "Free physical samples in 3–5 days to test print quality and image life before ordering." },
            { icon: <Boxes />, title: "All Sizes In Stock", text: "57mm and 80mm plus custom widths, diameters, and lengths." },
            { icon: <Truck />, title: "Global Export", text: "EXW, FOB, CIF, and DDP to 80+ countries with reliable lead times." },
            { icon: <BadgeCheck />, title: "OEM & Private Label", text: "Custom logo, back-printing, and branded packaging for distributors and brands." },
          ],
        }}
        faqs={faqs}
        crossLinks={[
          { label: "Blank Thermal Paper Rolls", href: "/products/thermal-paper-rolls/blank" },
          { label: "Custom Printed Rolls", href: "/products/thermal-paper-rolls/custom-printed" },
          { label: "BPA-Free Thermal Paper", href: "/products/bpa-free-thermal-paper" },
          { label: "OEM & Private Label", href: "/oem" },
        ]}
        inquiry={{
          title: "Get a Free Receipt Roll Quote",
          description: "Tell us your size, quantity, and coating requirements — we'll send a detailed quote with unit price, MOQ, and lead time within 24 hours.",
        }}
      />
    </>
  );
}
