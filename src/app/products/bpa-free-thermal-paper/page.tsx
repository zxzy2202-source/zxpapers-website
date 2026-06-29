import type { Metadata } from "next";
import { BadgeCheck, Boxes, Factory, Leaf, MessageSquare, Phone, ShieldCheck, Truck } from "lucide-react";
import { paperRollSizes } from "@/config/navigation";
import { SITE } from "@/config/siteData";
import { getSlotImage } from "@/lib/imageSlotUtils";
import { r2Image } from "@/lib/r2";
import ProductCategoryShowcaseTemplate from "@/components/products/ProductCategoryShowcaseTemplate";
import type { ShowcaseBrowseSection } from "@/components/products/ProductCategoryShowcaseTemplate";

export const metadata: Metadata = {
  title: "BPA-Free Thermal Paper Rolls | Phenol-Free Receipt Paper Manufacturer",
  description: "BPA-free and phenol-free (BPS-free) thermal paper rolls — non-toxic, eco-friendly receipt paper for EU, California & regulated markets. Factory direct, ISO 9001. MOQ 1,000 rolls.",
  keywords: "bpa free thermal paper, bpa free thermal paper rolls, phenol free thermal paper, bpa free receipt paper, non toxic thermal paper, bpa free till rolls, safe thermal paper rolls, eco friendly receipt paper, bpa and bps free thermal paper, bpa free paper manufacturers",
  alternates: { canonical: `${SITE.domain}/products/bpa-free-thermal-paper` },
};

const ROLLS_IMG_FALLBACK = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-rolls-RQBrphmgzbAMk7eq3HsvNq.webp";

const specs = [
  { label: "Coating Options",   value: "BPA-Free (standard) / Phenol-Free — BPS-free (premium)" },
  { label: "Developer",         value: "Vitamin C (ascorbic acid) based — non-phenol available" },
  { label: "Common Widths",     value: "57mm (2¼\") / 80mm (3⅛\") / Custom" },
  { label: "Paper Weight",      value: "48 g/m² / 55 g/m² / 65 g/m²" },
  { label: "Image Life",        value: "5–7 years (standard) / 10 years (archival)" },
  { label: "Compliance",        value: "EU REACH, US FDA, California Prop 65, RoHS" },
  { label: "Certification",     value: "ISO 9001:2015, FSC (on request)" },
  { label: "MOQ",               value: "1,000 rolls (samples: 50–100 rolls)" },
  { label: "Lead Time",         value: "7–15 business days" },
  { label: "Payment Terms",     value: "T/T 30% deposit, 70% before shipment; L/C at sight" },
];

const faqs = [
  { q: "What is BPA-free thermal paper?", a: "BPA-free thermal paper uses a developer other than Bisphenol A to form the printed image. Our standard rolls are BPA-free, and our premium grade is fully phenol-free (also BPS-free), using a Vitamin C (ascorbic acid) based developer for non-toxic, eco-friendly receipts." },
  { q: "What is the difference between BPA-free and phenol-free (BPS-free)?", a: "BPA-free means no Bisphenol A, but some BPA-free papers still use BPS (Bisphenol S). Our phenol-free / BPS-free grade removes both, using a non-phenol developer — the safest choice for the EU, California Prop 65, and other strictly regulated markets." },
  { q: "Which markets require BPA-free or phenol-free receipt paper?", a: "The EU (REACH restriction on BPA in thermal paper), California (Prop 65), and a growing list of regions restrict BPA and BPS in receipts. Retailers and brands in these markets specify BPA-free or fully phenol-free rolls." },
  { q: "Do you provide compliance documentation?", a: "Yes. We supply test reports and declarations for EU REACH, US FDA, California Prop 65, and RoHS so your import and retail compliance is covered." },
  { q: "Is the print quality the same as standard thermal paper?", a: "Yes. Our BPA-free and phenol-free rolls deliver the same sharp, high-contrast print and long image life (5–7 years standard, 10 years archival) as conventional thermal paper." },
  { q: "What is the MOQ and lead time?", a: "MOQ is 1,000 rolls with samples in 50–100 roll quantities. Lead time is 7–15 business days. We export worldwide on EXW, FOB, CIF, and DDP terms." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE.domain },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": `${SITE.domain}/products` },
    { "@type": "ListItem", "position": 3, "name": "BPA-Free Thermal Paper", "item": `${SITE.domain}/products/bpa-free-thermal-paper` },
  ],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "BPA-Free & Phenol-Free Thermal Paper Rolls",
  "description": "BPA-free and phenol-free (BPS-free) thermal paper rolls — non-toxic, eco-friendly receipt paper for EU, California, and regulated markets. ISO 9001, MOQ 1,000 rolls.",
  "brand": { "@type": "Brand", "name": SITE.name },
  "manufacturer": { "@id": `${SITE.domain}/#organization` },
  "image": ROLLS_IMG_FALLBACK,
  "url": `${SITE.domain}/products/bpa-free-thermal-paper`,
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

export default async function BpaFreeThermalPaperPage() {
  const rollsImg = r2Image(await getSlotImage("thermal-rolls:hero", ROLLS_IMG_FALLBACK));

  const products = [
    { title: "BPA-Free Receipt Rolls", desc: "Standard BPA-free thermal rolls for POS and receipt printers — sharp print, long image life.", image: rollsImg, href: "/products/thermal-paper-rolls/blank", badge: "Standard" },
    { title: "Phenol-Free (BPS-Free) Rolls", desc: "Premium non-phenol grade for the EU, California Prop 65, and strictly regulated markets.", image: rollsImg, href: "/products/phenol-free-thermal-paper", badge: "Premium" },
    { title: "57mm & 80mm Widths", desc: "BPA-free rolls in the two most common POS and mobile widths, plus custom sizes.", image: rollsImg, href: "/products/thermal-rolls/80x80mm", badge: "In Stock" },
    { title: "Custom Printed BPA-Free", desc: "Your logo and promotions on non-toxic, compliant receipt rolls. OEM & private label.", image: rollsImg, href: "/products/thermal-paper-rolls/custom-printed", badge: "Custom" },
  ];

  const browseSections: ShowcaseBrowseSection[] = [
    {
      title: "BPA-Free Roll Sizes",
      description: "Every BPA-free roll is available phenol-free on request — pick a size or ask for a custom width.",
      cards: paperRollSizes.map((s) => ({
        image: rollsImg,
        title: s.label,
        desc: `BPA-free thermal roll size${s.markets ? ` for ${s.markets}` : ""} — phenol-free option available.`,
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
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "BPA-Free Thermal Paper" }]}
        heroImage={rollsImg}
        heroBadge={{ text: "Non-Toxic & Eco-Friendly", color: "amber" }}
        title={<>BPA-Free &amp; Phenol-Free<br /><span className="text-amber-400">Thermal Paper Rolls</span></>}
        subtitle="Non-toxic, eco-friendly thermal receipt paper — BPA-free as standard with a fully phenol-free (BPS-free) grade for the EU, California, and other regulated markets, with compliance documentation and bulk pricing in 24 hours."
        trustBadges={["BPA-Free Standard", "Phenol-Free Option", "REACH / FDA / Prop 65", "ISO 9001"]}
        stats={[
          { value: "BPS-Free", label: "Premium Grade" },
          { value: "REACH", label: "EU Compliant" },
          { value: "1,000", label: "Rolls MOQ" },
          { value: "24h", label: "Quote Response" },
        ]}
        ctas={[
          { label: "Get BPA-Free Pricing", href: "#inquiry", variant: "primary", icon: <MessageSquare className="w-4 h-4" /> },
          { label: "WhatsApp for Quote", href: `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I need pricing for BPA-free / phenol-free thermal paper rolls. Please send compliance details and pricing.")}`, variant: "whatsapp", icon: <Phone className="w-4 h-4" />, external: true },
        ]}
        introSplit={{
          title: "Non-Toxic Receipt Paper From One Factory",
          lead: "Our BPA-free rolls use a non-Bisphenol-A developer; our phenol-free grade removes BPS too — the safest, most compliant receipt paper, coated and slit in-house at factory-direct pricing.",
          bullets: [
            "BPA-free standard, phenol-free (BPS-free) premium",
            "Vitamin C (ascorbic acid) based developer option",
            "EU REACH, US FDA, California Prop 65 & RoHS",
            "Same sharp print and 5–10 year image life",
          ],
          image: rollsImg,
          imageAlt: "BPA-free and phenol-free thermal paper rolls",
          cta: { label: "Send Inquiry Now", href: "#inquiry" },
        }}
        overview={{
          title: "BPA-Free & Phenol-Free Thermal Paper",
          paragraphs: [
            "BPA-free thermal paper uses a developer other than Bisphenol A to form the printed image. Our standard rolls are BPA-free, and our premium grade is fully phenol-free — also BPS-free — using a Vitamin C (ascorbic acid) based developer for non-toxic, eco-friendly receipts.",
            "The EU (REACH restriction on BPA in thermal paper), California (Prop 65), and a growing list of regions restrict BPA and BPS in receipts. We supply both grades with test reports and declarations for EU REACH, US FDA, California Prop 65, and RoHS so your import and retail compliance is covered.",
            "Print quality matches conventional thermal paper — sharp, high-contrast, with 5–7 year standard and 10-year archival image life. As a factory-direct manufacturer we offer 57mm, 80mm, and custom widths, custom printing, and export worldwide on EXW, FOB, CIF, and DDP terms.",
          ],
        }}
        featureSplit={{
          title: "BPA-Free or Fully Phenol-Free — Your Call",
          lead: "Choose BPA-free for everyday compliance, or the phenol-free (BPS-free) grade for the strictest markets — both with full documentation.",
          bullets: [
            "BPA-free standard for general compliance",
            "Phenol-free / BPS-free for EU & California",
            "REACH, FDA, Prop 65 & RoHS documentation",
            "Custom printing on compliant stock",
          ],
          image: rollsImg,
          imageAlt: "Eco-friendly phenol-free thermal receipt paper",
          cta: { label: "Request Compliance Docs", href: "/contact" },
        }}
        productsTitle="Browse BPA-Free Options"
        productsDescription="Standard BPA-free and premium phenol-free rolls — in stock across all popular widths, custom printing available."
        products={products}
        browseSections={browseSections}
        comparison={{
          title: "BPA-Free vs Phenol-Free (BPS-Free)",
          headers: { left: "BPA-Free (Standard)", right: "Phenol-Free (Premium)" },
          rows: [
            { factor: "Removes", left: "Bisphenol A (BPA)", right: "BPA and BPS — all phenols" },
            { factor: "Developer", left: "Non-BPA developer", right: "Vitamin C (ascorbic acid) based" },
            { factor: "Best for", left: "General compliance", right: "EU REACH & California Prop 65" },
            { factor: "Documentation", left: "REACH / FDA / RoHS", right: "REACH / FDA / Prop 65 / RoHS" },
            { factor: "Image life", left: "5–7 years", right: "5–10 years" },
          ],
        }}
        specs={{
          title: "Specifications",
          rows: specs,
          note: "* Compliance documentation supplied with every order.",
        }}
        whyUs={{
          title: "Why Source BPA-Free Rolls From the Factory",
          subtitle: "In-house coating with the compliance documentation regulated markets require.",
          items: [
            { icon: <Factory />, title: "True Factory-Direct", text: "No distributor markup — coated, slit, and boxed in our own factory." },
            { icon: <Leaf />, title: "Non-Toxic & Eco-Friendly", text: "BPA-free standard and phenol-free (BPS-free) premium grade for safer receipts." },
            { icon: <ShieldCheck />, title: "Documented Compliance", text: "EU REACH, US FDA, California Prop 65, and RoHS test reports and declarations." },
            { icon: <Boxes />, title: "All Sizes In Stock", text: "57mm and 80mm plus custom widths, in BPA-free and phenol-free grades." },
            { icon: <Truck />, title: "Global Export", text: "EXW, FOB, CIF, and DDP to 80+ countries with reliable lead times." },
            { icon: <BadgeCheck />, title: "OEM & Private Label", text: "Custom logo, printing, and branded packaging on compliant stock." },
          ],
        }}
        faqs={faqs}
        crossLinks={[
          { label: "Phenol-Free Thermal Paper", href: "/products/phenol-free-thermal-paper" },
          { label: "Receipt Paper Rolls", href: "/products/receipt-paper-rolls" },
          { label: "Thermal Paper Rolls", href: "/products/thermal-paper-rolls" },
          { label: "OEM & Private Label", href: "/oem" },
        ]}
        inquiry={{
          title: "Get a BPA-Free Thermal Paper Quote",
          description: "Tell us your size, quantity, and which grade (BPA-free or phenol-free) — we'll send pricing and compliance documentation within 24 hours.",
        }}
      />
    </>
  );
}
