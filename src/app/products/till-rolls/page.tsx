import type { Metadata } from "next";
import { BadgeCheck, Boxes, Factory, Layers, MessageSquare, Palette, Phone, ShieldCheck, Truck } from "lucide-react";
import { paperRollSizes } from "@/config/navigation";
import { SITE } from "@/config/siteData";
import { getSlotImage } from "@/lib/imageSlotUtils";
import { r2Image } from "@/lib/r2";
import ProductCategoryShowcaseTemplate from "@/components/products/ProductCategoryShowcaseTemplate";
import type { ShowcaseBrowseSection } from "@/components/products/ProductCategoryShowcaseTemplate";

export const metadata: Metadata = {
  title: "Till Rolls — 57mm & 80mm Thermal Rolls",
  description:
    "Factory-direct till rolls (thermal receipt rolls) — 57mm & 80mm, BPA-free, coreless and colored options. Bulk & wholesale pricing for UK/EU retailers. Get a quote.",
  keywords:
    "till rolls, 80mm till rolls, 57mm till rolls, cheap till rolls, till rolls wholesale, bpa free till rolls, thermal till rolls, colored till rolls, thermal receipt rolls",
  alternates: { canonical: `${SITE.domain}/products/till-rolls` },
};

const TILL_ROLL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-rolls-RQBrphmgzbAMk7eq3HsvNq.webp";

const specs = [
  { label: "Common Widths", value: "57mm · 80mm · custom (±0.5mm)" },
  { label: "Roll Length", value: "Standard, long-life & coreless (more paper/roll)" },
  { label: "Core", value: "12mm / 25mm / coreless" },
  { label: "Coating", value: "BPA-free (standard) / phenol-free option" },
  { label: "Colors", value: "White, blue, pink, yellow, green base" },
  { label: "MOQ", value: "Bulk from low volume; custom from 5,000 rolls" },
  { label: "Lead Time", value: "Stock 3–7 days · custom 10–18 days" },
  { label: "Incoterms", value: "EXW, FOB, CIF, DDP (UK/EU ports)" },
];

const faqs = [
  { q: "What are till rolls?", a: "\"Till roll\" is the UK/EU term for a thermal receipt roll used in cash registers (tills) and EPOS systems. They are the same product as thermal receipt paper rolls." },
  { q: "What's the difference between 57mm and 80mm till rolls?", a: "57mm rolls suit card machines, mobile and handheld POS; 80mm rolls are the standard for retail and hospitality EPOS terminals. Confirm your terminal's width before ordering." },
  { q: "Are your till rolls BPA-free?", a: "Yes — BPA-free is our standard, with a phenol-free option for EU compliance and food-service use. Lab reports available on request." },
  { q: "Can I buy till rolls wholesale or in bulk?", a: "Yes. We are the factory, so bulk and wholesale pricing is direct with no middleman markup. Custom sizes and private-label packaging start at 5,000 rolls." },
  { q: "Do you offer colored till rolls?", a: "Yes — white plus blue, pink, yellow and green base paper. Colored rolls are handy for separating departments, shifts, or copy types." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE.domain },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": `${SITE.domain}/products` },
    { "@type": "ListItem", "position": 3, "name": "Till Rolls", "item": `${SITE.domain}/products/till-rolls` },
  ],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Till Rolls — 57mm & 80mm Thermal Receipt Rolls",
  "description": "Factory-direct till rolls (thermal receipt rolls) — 57mm and 80mm, BPA-free, coreless and colored options. Bulk and wholesale pricing for UK/EU retailers.",
  "brand": { "@type": "Brand", "name": SITE.name },
  "manufacturer": { "@id": `${SITE.domain}/#organization` },
  "image": TILL_ROLL_IMG,
  "url": `${SITE.domain}/products/till-rolls`,
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

export default async function TillRollsPage() {
  const rollsImg = r2Image(await getSlotImage("thermal-rolls:hero", TILL_ROLL_IMG));

  const products = [
    { title: "80mm Till Rolls", desc: "The UK/EU standard for retail and hospitality EPOS terminals — sharp, durable receipts.", image: rollsImg, href: "/products/thermal-rolls/80x80mm", badge: "EPOS Standard" },
    { title: "57mm Till Rolls", desc: "For card machines, mobile, and handheld POS used by smaller tills and field sales.", image: rollsImg, href: "/products/thermal-rolls/57x50mm", badge: "Card Machines" },
    { title: "Coreless Till Rolls", desc: "More paper per roll, less waste, fewer changeovers — ideal for busy tills.", image: rollsImg, href: "/contact", badge: "Eco" },
    { title: "Colored Till Rolls", desc: "White plus blue, pink, yellow, and green base for department and shift coding.", image: rollsImg, href: "/products/colored-thermal-paper", badge: "Color-Coded" },
  ];

  const browseSections: ShowcaseBrowseSection[] = [
    {
      title: "Till Roll Sizes",
      description: "57mm for card machines, 80mm for EPOS — pick a size or ask for a custom width.",
      cards: paperRollSizes.map((s) => ({
        image: rollsImg,
        title: s.label,
        desc: `Till roll size${s.markets ? ` for ${s.markets}` : ""} — BPA-free, coreless and colored options.`,
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
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "Till Rolls" }]}
        heroImage={rollsImg}
        heroBadge={{ text: "UK / EU EPOS Supply", color: "amber" }}
        title={<>Till Rolls<br /><span className="text-amber-400">57mm &amp; 80mm Thermal</span></>}
        subtitle="Factory-direct till rolls (thermal receipt rolls) for cash registers and EPOS systems — 57mm and 80mm, BPA-free, with coreless and colored options, and bulk wholesale pricing for UK/EU retailers in 24 hours."
        trustBadges={["57mm & 80mm", "BPA-Free", "Coreless Option", "Colored Base"]}
        stats={[
          { value: "57/80mm", label: "Standard Widths" },
          { value: "Coreless", label: "Less Waste" },
          { value: "BPA-Free", label: "EU Ready" },
          { value: "24h", label: "Quote Response" },
        ]}
        ctas={[
          { label: "Get Till Roll Pricing", href: "#inquiry", variant: "primary", icon: <MessageSquare className="w-4 h-4" /> },
          { label: "WhatsApp for Quote", href: `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I need wholesale pricing for till rolls. Please send sizes and bulk pricing.")}`, variant: "whatsapp", icon: <Phone className="w-4 h-4" />, external: true },
        ]}
        introSplit={{
          title: "Wholesale Till Rolls From One Factory",
          lead: "\"Till roll\" is the UK/EU term for a thermal receipt roll used in tills and EPOS. We coat, slit, and pack them in-house — standard, long-life, coreless, and colored — at factory-direct pricing.",
          bullets: [
            "57mm for card machines, 80mm for EPOS",
            "Standard, long-life & coreless (more paper/roll)",
            "BPA-free standard, phenol-free option",
            "White plus blue, pink, yellow & green base",
          ],
          image: rollsImg,
          imageAlt: "57mm and 80mm thermal till rolls",
          cta: { label: "Send Inquiry Now", href: "#inquiry" },
        }}
        overview={{
          title: "Till Rolls (Thermal Receipt Rolls)",
          paragraphs: [
            "\"Till roll\" is the UK and EU term for a thermal receipt roll used in cash registers (tills) and EPOS systems — the same product as thermal receipt paper rolls. They print by heat, so no ink or ribbon is needed.",
            "57mm rolls suit card machines, mobile, and handheld POS, while 80mm rolls are the standard for retail and hospitality EPOS terminals. We also supply long-life and coreless rolls that fit more paper per roll, reducing waste and changeovers on busy tills.",
            "As the factory, we offer bulk and wholesale pricing direct with no middleman markup, BPA-free as standard with a phenol-free option for EU compliance, colored base options for department and shift coding, and export to UK/EU ports on EXW, FOB, CIF, and DDP terms.",
          ],
        }}
        featureSplit={{
          title: "Standard, Coreless or Colored — Your Call",
          lead: "Match the till roll to your tills: standard rolls for everyday use, coreless for less waste, or colored base for coding by department or shift.",
          bullets: [
            "Standard & long-life rolls for all EPOS",
            "Coreless rolls — more paper, fewer changeovers",
            "Colored base for department / shift coding",
            "BPA-free / phenol-free for EU compliance",
          ],
          image: rollsImg,
          imageAlt: "Coreless and colored till rolls",
          cta: { label: "Discuss Your Order", href: "#inquiry" },
        }}
        productsTitle="Browse Till Roll Options"
        productsDescription="80mm EPOS, 57mm card-machine, coreless, and colored till rolls — in stock across all popular widths."
        products={products}
        browseSections={browseSections}
        comparison={{
          title: "57mm vs 80mm Till Rolls",
          headers: { left: "57mm Till Rolls", right: "80mm Till Rolls" },
          rows: [
            { factor: "Best for", left: "Card machines, mobile & handheld POS", right: "Retail & hospitality EPOS terminals" },
            { factor: "Receipt width", left: "Compact", right: "Wider — more content per line" },
            { factor: "Core options", left: "12mm / 25mm / coreless", right: "12mm / 25mm / coreless" },
            { factor: "Coating", left: "BPA-free / phenol-free option", right: "BPA-free / phenol-free option" },
            { factor: "Availability", left: "In stock", right: "In stock" },
          ],
        }}
        specs={{
          title: "Specifications",
          rows: specs,
          note: "* Coreless, long-life, and colored options available on request.",
        }}
        whyUs={{
          title: "Why Source Till Rolls From the Factory",
          subtitle: "In-house coating and slitting with bulk pricing direct to UK/EU retailers.",
          items: [
            { icon: <Factory />, title: "True Factory-Direct", text: "No distributor markup — coated, slit, and boxed in our own factory." },
            { icon: <Layers />, title: "Coreless & Long-Life", text: "More paper per roll, less waste, and fewer changeovers on busy tills." },
            { icon: <ShieldCheck />, title: "BPA-Free & Compliant", text: "BPA-free standard with a phenol-free option for EU and food-service use." },
            { icon: <Palette />, title: "Colored Base Options", text: "White plus blue, pink, yellow, and green for department and shift coding." },
            { icon: <Truck />, title: "UK / EU Export", text: "EXW, FOB, CIF, and DDP to UK/EU ports with reliable lead times." },
            { icon: <BadgeCheck />, title: "OEM & Private Label", text: "Custom sizes and branded packaging for distributors and retailers." },
          ],
        }}
        faqs={faqs}
        crossLinks={[
          { label: "Receipt Paper Rolls", href: "/products/receipt-paper-rolls" },
          { label: "Colored Thermal Paper", href: "/products/colored-thermal-paper" },
          { label: "BPA-Free Thermal Paper", href: "/products/bpa-free-thermal-paper" },
          { label: "OEM & Private Label", href: "/oem" },
        ]}
        inquiry={{
          title: "Get a Till Roll Quote",
          description: "Tell us your width (57mm or 80mm), core, color, and quantity — we'll send wholesale pricing and lead time within 24 hours.",
        }}
      />
    </>
  );
}
