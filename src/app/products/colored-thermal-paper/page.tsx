import type { Metadata } from "next";
import { BadgeCheck, Boxes, Factory, MessageSquare, Palette, Phone, ShieldCheck, Truck } from "lucide-react";
import { paperRollSizes } from "@/config/navigation";
import { SITE } from "@/config/siteData";
import { getSlotImage } from "@/lib/imageSlotUtils";
import { r2Image } from "@/lib/r2";
import ProductCategoryShowcaseTemplate from "@/components/products/ProductCategoryShowcaseTemplate";
import type { ShowcaseBrowseSection } from "@/components/products/ProductCategoryShowcaseTemplate";

export const metadata: Metadata = {
  title: "Colored Thermal Paper Rolls | Blue, Pink, Yellow & Green Receipt Paper",
  description: "Colored thermal paper rolls and till rolls — blue, pink, yellow, green, red and pastel. Color-coded receipt paper for POS, cash registers & branding. Factory direct, custom colors. MOQ from 1,000 rolls.",
  keywords: "colored thermal paper, blue thermal paper, pink thermal paper, yellow thermal paper, green thermal paper, red thermal paper, colored receipt paper, colored thermal rolls, colored till rolls, tinted thermal paper, pastel thermal paper, colored pos paper, colored cash register paper",
  alternates: { canonical: `${SITE.domain}/products/colored-thermal-paper` },
};

const ROLLS_IMG_FALLBACK = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-rolls-RQBrphmgzbAMk7eq3HsvNq.webp";

const specs = [
  { label: "Available Colors", value: "Blue, Pink, Yellow, Green, Red, Purple, Orange, Pastel — custom colors on request" },
  { label: "Color Method",     value: "Tinted paper base (color-through) — image prints black on colored stock" },
  { label: "Common Widths",    value: "57mm (2¼\") / 80mm (3⅛\") / Custom" },
  { label: "Paper Weight",     value: "55 g/m² / 65 g/m²" },
  { label: "Coating",          value: "BPA-Free / Phenol-Free available" },
  { label: "Image Life",       value: "5–7 years" },
  { label: "MOQ",              value: "Stock colors: 1,000 rolls · Custom colors: 5,000 rolls" },
  { label: "Lead Time",        value: "10–20 business days (custom colors)" },
  { label: "Payment Terms",    value: "T/T 30% deposit, 70% before shipment; L/C at sight" },
];

const faqs = [
  { q: "What colors of thermal paper do you offer?", a: "We stock blue, pink, yellow, green, red, purple, and orange colored thermal paper, plus pastel and tinted options. Custom Pantone-matched colors are available for larger orders." },
  { q: "How does colored thermal paper work?", a: "The paper base is tinted in the color of your choice, while the thermal coating still prints a sharp black image. So you get a colored receipt or till roll with clearly legible text — no ink or ribbon required." },
  { q: "Why use colored receipt paper?", a: "Colored till rolls are used for department color-coding, shift or station identification, anti-fraud (hard-to-copy receipts), promotions, and brand differentiation at the checkout." },
  { q: "Is colored thermal paper available BPA-free?", a: "Yes. All our colored thermal rolls can be supplied with BPA-free or phenol-free (BPS-free) coating to meet EU and California requirements." },
  { q: "What is the minimum order for colored thermal rolls?", a: "Stock colors start at 1,000 rolls. Custom or Pantone-matched colors require a 5,000-roll minimum due to dedicated paper production." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE.domain },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": `${SITE.domain}/products` },
    { "@type": "ListItem", "position": 3, "name": "Colored Thermal Paper", "item": `${SITE.domain}/products/colored-thermal-paper` },
  ],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Colored Thermal Paper Rolls | Blue, Pink, Yellow & Green Receipt Paper",
  "description": "Colored thermal paper rolls and till rolls in blue, pink, yellow, green, red and pastel. Color-coded receipt paper for POS and branding. Factory direct, custom colors available.",
  "brand": { "@type": "Brand", "name": SITE.name },
  "manufacturer": { "@id": `${SITE.domain}/#organization` },
  "image": ROLLS_IMG_FALLBACK,
  "url": `${SITE.domain}/products/colored-thermal-paper`,
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

export default async function ColoredThermalPaperPage() {
  const rollsImg = r2Image(await getSlotImage("thermal-rolls:hero", ROLLS_IMG_FALLBACK));

  const products = [
    { title: "Blue & Green Thermal Rolls", desc: "Cool-tone tinted rolls for department color-coding and station identification.", image: rollsImg, href: "/products/thermal-rolls/80x80mm", badge: "Stock Color" },
    { title: "Pink, Yellow & Red Rolls", desc: "Warm-tone tinted rolls for promotions, anti-fraud receipts, and shift coding.", image: rollsImg, href: "/products/thermal-rolls/57x50mm", badge: "Stock Color" },
    { title: "Custom Pantone Colors", desc: "Pantone-matched tinted base for brand differentiation at the checkout.", image: rollsImg, href: "/contact", badge: "Custom" },
    { title: "BPA-Free Colored Rolls", desc: "Any color with BPA-free or phenol-free coating for the EU and California.", image: rollsImg, href: "/products/bpa-free-thermal-paper", badge: "Phenol-Free" },
  ];

  const browseSections: ShowcaseBrowseSection[] = [
    {
      title: "Colored Roll Sizes",
      description: "Every stock and custom color is available across our standard widths — pick a size or ask for a custom width.",
      cards: paperRollSizes.map((s) => ({
        image: rollsImg,
        title: s.label,
        desc: `Colored thermal roll size${s.markets ? ` for ${s.markets}` : ""} — tinted base, sharp black print.`,
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
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "Colored Thermal Paper" }]}
        heroImage={rollsImg}
        heroBadge={{ text: "Color-Coded & Branded Receipts", color: "amber" }}
        title={<>Colored Thermal Paper<br /><span className="text-amber-400">Blue, Pink, Yellow &amp; Green</span></>}
        subtitle="Tinted thermal paper rolls and till rolls — blue, pink, yellow, green, red, and pastel — for department color-coding, anti-fraud receipts, promotions, and branding, with custom Pantone colors and bulk pricing in 24 hours."
        trustBadges={["7+ Stock Colors", "Custom Pantone", "BPA-Free Option", "Color-Through Base"]}
        stats={[
          { value: "7+", label: "Stock Colors" },
          { value: "Pantone", label: "Custom Match" },
          { value: "1,000", label: "Rolls MOQ" },
          { value: "24h", label: "Quote Response" },
        ]}
        ctas={[
          { label: "Get Colored Roll Pricing", href: "#inquiry", variant: "primary", icon: <MessageSquare className="w-4 h-4" /> },
          { label: "WhatsApp for Quote", href: `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I need pricing for colored thermal paper rolls. Please send colors, sizes, and pricing.")}`, variant: "whatsapp", icon: <Phone className="w-4 h-4" />, external: true },
        ]}
        introSplit={{
          title: "Tinted Receipt Rolls From One Factory",
          lead: "The paper base is tinted in your color while the thermal coating still prints a sharp black image — colored receipts with legible text, no ink or ribbon, made in-house at factory-direct pricing.",
          bullets: [
            "Blue, pink, yellow, green, red, purple, orange & pastel",
            "Custom Pantone-matched colors available",
            "57mm & 80mm plus custom widths",
            "BPA-free / phenol-free coating on any color",
          ],
          image: rollsImg,
          imageAlt: "Colored thermal paper rolls in multiple tints",
          cta: { label: "Send Inquiry Now", href: "#inquiry" },
        }}
        overview={{
          title: "Colored Thermal Paper & Till Rolls",
          paragraphs: [
            "Colored thermal paper uses a tinted paper base (color-through) so the whole roll is colored, while the thermal coating still prints a sharp black image. The result is a colored receipt or till roll with clearly legible text — no ink or ribbon required.",
            "Colored till rolls are used for department color-coding, shift or station identification, anti-fraud (hard-to-copy receipts), promotions, and brand differentiation at the checkout. We stock blue, pink, yellow, green, red, purple, and orange, plus pastel and tinted options.",
            "Custom Pantone-matched colors are available for larger orders, and any color can be supplied with BPA-free or phenol-free (BPS-free) coating to meet EU and California requirements. We export worldwide on EXW, FOB, CIF, and DDP terms at factory-direct pricing.",
          ],
        }}
        featureSplit={{
          title: "Stock Colors or Custom Pantone — Your Call",
          lead: "Pick from seven stock colors for fast dispatch, or order a Pantone-matched base to extend your brand to every receipt.",
          bullets: [
            "7 stock colors from 1,000 rolls",
            "Custom Pantone match from 5,000 rolls",
            "Sharp black print on any tinted base",
            "BPA-free / phenol-free option on all colors",
          ],
          image: rollsImg,
          imageAlt: "Custom Pantone colored till rolls",
          cta: { label: "Discuss Custom Colors", href: "/contact" },
        }}
        productsTitle="Browse Colored Roll Options"
        productsDescription="Stock colors, custom Pantone, and BPA-free colored rolls — in stock across all popular widths."
        products={products}
        browseSections={browseSections}
        comparison={{
          title: "Stock Colors vs Custom Pantone",
          headers: { left: "Stock Colors", right: "Custom Pantone" },
          rows: [
            { factor: "Colors", left: "Blue, pink, yellow, green, red, purple, orange", right: "Any Pantone-matched shade" },
            { factor: "Best for", left: "Color-coding & quick branding", right: "Exact brand color at checkout" },
            { factor: "MOQ", left: "1,000 rolls", right: "5,000 rolls (dedicated run)" },
            { factor: "Lead time", left: "Stock — faster dispatch", right: "10–20 days (custom production)" },
            { factor: "Coating", left: "BPA-free / phenol-free option", right: "BPA-free / phenol-free option" },
          ],
        }}
        specs={{
          title: "Specifications",
          rows: specs,
          note: "* Custom Pantone colors and BPA-free / phenol-free coating available on request.",
        }}
        whyUs={{
          title: "Why Source Colored Rolls From the Factory",
          subtitle: "In-house tinting and coating with custom color matching and certified compliance.",
          items: [
            { icon: <Factory />, title: "True Factory-Direct", text: "No distributor markup — tinted, coated, and slit in our own factory." },
            { icon: <Palette />, title: "Color-Through Base", text: "The whole roll is colored, with a sharp black thermal print on top." },
            { icon: <ShieldCheck />, title: "BPA-Free on Any Color", text: "BPA-free standard and phenol-free (BPS-free) option on every color." },
            { icon: <Boxes />, title: "7+ Stock Colors", text: "Blue, pink, yellow, green, red, purple, orange, and pastel in stock." },
            { icon: <Truck />, title: "Global Export", text: "EXW, FOB, CIF, and DDP to 80+ countries with reliable lead times." },
            { icon: <BadgeCheck />, title: "Custom & OEM", text: "Pantone-matched colors and custom printing for distributors and brands." },
          ],
        }}
        faqs={faqs}
        crossLinks={[
          { label: "Receipt Paper Rolls", href: "/products/receipt-paper-rolls" },
          { label: "Till Rolls", href: "/products/till-rolls" },
          { label: "BPA-Free Thermal Paper", href: "/products/bpa-free-thermal-paper" },
          { label: "OEM & Private Label", href: "/oem" },
        ]}
        inquiry={{
          title: "Get a Colored Thermal Paper Quote",
          description: "Tell us your color(s), size, and quantity — we'll send pricing, MOQ, and lead time within 24 hours.",
        }}
      />
    </>
  );
}
