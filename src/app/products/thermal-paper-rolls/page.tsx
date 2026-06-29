import type { Metadata } from "next";
import { BadgeCheck, Boxes, Factory, MessageSquare, Package, Phone, ShieldCheck, Truck } from "lucide-react";
import { getSlotImages } from "@/lib/imageSlotUtils";
import { r2Image } from "@/lib/r2";
import { paperRollSizes } from "@/config/navigation";
import { SITE } from "@/config/siteData";
import ProductCategoryShowcaseTemplate from "@/components/products/ProductCategoryShowcaseTemplate";
import type { ShowcaseBrowseSection } from "@/components/products/ProductCategoryShowcaseTemplate";

const ROLLS_IMG_FB = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-rolls-RQBrphmgzbAMk7eq3HsvNq.webp";

export const metadata: Metadata = {
  title: "Thermal Paper Rolls Manufacturer | POS, ATM & Till Rolls",
  description:
    "Factory-direct thermal paper rolls for POS, ATM, kiosk, and till applications — blank or custom printed, BPA-free, 57mm/80mm and custom widths. ISO 9001, OEM, bulk pricing in 24h.",
  keywords:
    "thermal paper rolls, POS receipt rolls, till rolls, ATM rolls, BPA-free thermal paper, 57mm thermal rolls, 80mm thermal rolls, custom printed thermal rolls, thermal paper roll manufacturer, thermal paper wholesale",
  alternates: { canonical: `${SITE.domain}/products/thermal-paper-rolls` },
};

const variants = [
  { name: "Blank Thermal Paper Rolls", path: "/products/thermal-paper-rolls/blank" },
  { name: "Custom Printed Thermal Rolls", path: "/products/thermal-paper-rolls/custom-printed" },
  { name: "Receipt Paper Rolls", path: "/products/receipt-paper-rolls" },
  { name: "BPA-Free Thermal Paper", path: "/products/bpa-free-thermal-paper" },
  { name: "Till Rolls", path: "/products/till-rolls" },
  { name: "Colored Thermal Paper", path: "/products/colored-thermal-paper" },
];

const faqs = [
  { q: "What thermal paper roll sizes do you manufacture?", a: "We produce 80×80mm, 57×50mm, 57×40mm, 57×30mm, 80×70mm, and 110×80mm rolls plus custom widths to ±0.5mm tolerance, with 12mm, 18mm, and 25mm core options." },
  { q: "Are your thermal rolls BPA-free?", a: "Yes. BPA-free is our standard coating, with a phenol-free (BPS-free) option available for food-contact, healthcare, and regulated markets." },
  { q: "Do you offer blank and custom printed rolls?", a: "Both. Blank rolls ship from stock for POS and receipt printers; custom printed rolls carry your logo, promotions, QR codes, or bilingual receipt layouts (OEM / private label)." },
  { q: "What is the minimum order quantity and lead time?", a: "Stock sizes are available from low volume; custom printing typically starts at 5,000 rolls. Stock items ship in 3–7 days; custom production runs 10–18 days." },
  { q: "Which printers are your rolls compatible with?", a: "Our rolls fit all major POS, mobile, ATM, kiosk, and till printer brands. Tell us your printer model and we will confirm the correct width, diameter, and core size before production." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
    { "@type": "ListItem", position: 2, name: "Products", item: `${SITE.domain}/products` },
    { "@type": "ListItem", position: 3, name: "Thermal Paper Rolls", item: `${SITE.domain}/products/thermal-paper-rolls` },
  ],
};

const catalogEntries = [
  ...variants.map((v) => ({ name: v.name, path: v.path })),
  ...paperRollSizes.map((s) => ({ name: `${s.label} Thermal Paper Roll`, path: `/products/thermal-rolls/${s.slug}` })),
];

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Thermal Paper Rolls",
  description:
    "Factory-direct thermal paper rolls for POS, ATM, kiosk, and till applications — blank or custom printed, BPA-free, in 57mm, 80mm, and custom widths.",
  url: `${SITE.domain}/products/thermal-paper-rolls`,
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

export default async function ThermalPaperRollsPage() {
  const imgs = await getSlotImages([
    { slot: "products:thermal-rolls", fallback: ROLLS_IMG_FB },
    { slot: "thermal-rolls:hero", fallback: ROLLS_IMG_FB },
  ]);
  const rollsImg = r2Image(imgs["products:thermal-rolls"]);
  const heroImg = r2Image(imgs["thermal-rolls:hero"]);

  const products = [
    { title: "Blank Thermal Paper Rolls", desc: "Standard white POS and receipt rolls for all printers — BPA-free, high image clarity, in stock.", image: rollsImg, href: "/products/thermal-paper-rolls/blank", badge: "In Stock" },
    { title: "Custom Printed Thermal Rolls", desc: "Your logo, promotion, QR code, or bilingual receipt layout pre-printed. OEM & private label.", image: rollsImg, href: "/products/thermal-paper-rolls/custom-printed", badge: "Custom" },
    { title: "Receipt Paper Rolls", desc: "POS, cash register, and mobile printer receipt rolls for retail and hospitality.", image: rollsImg, href: "/products/receipt-paper-rolls", badge: "POS" },
    { title: "BPA-Free Thermal Paper", desc: "Phenol-free, food-safe receipt paper for regulated and health-conscious markets.", image: rollsImg, href: "/products/bpa-free-thermal-paper", badge: "Phenol-Free" },
    { title: "Till Rolls", desc: "Cash register and till rolls in common UK/EU and global sizes.", image: rollsImg, href: "/products/till-rolls", badge: "Cash Register" },
    { title: "Colored Thermal Paper", desc: "Colored thermal rolls for branding, coding, and segmented receipt workflows.", image: rollsImg, href: "/products/colored-thermal-paper", badge: "Branding" },
  ];

  const browseSections: ShowcaseBrowseSection[] = [
    {
      title: "Rolls by Use Case",
      description: "Different buyers, different rolls — jump to the dedicated page for your application.",
      cards: [
        { image: rollsImg, title: "Receipt Paper Rolls", desc: "POS, cash register, and mobile printer receipt rolls for retail and hospitality.", href: "/products/receipt-paper-rolls", badge: "POS" },
        { image: rollsImg, title: "Till Rolls", desc: "57mm & 80mm thermal till rolls for UK/EU EPOS and cash registers.", href: "/products/till-rolls", badge: "UK / EU" },
        { image: rollsImg, title: "BPA-Free Thermal Paper", desc: "Non-toxic receipt paper, BPA-free standard with a phenol-free option.", href: "/products/bpa-free-thermal-paper", badge: "Compliant" },
        { image: rollsImg, title: "Phenol-Free Thermal Paper", desc: "BPS-free, food-contact grade for EU REACH and California Prop 65.", href: "/products/phenol-free-thermal-paper", badge: "Strictest" },
        { image: rollsImg, title: "Custom Printed Rolls", desc: "Logo, promotion, and private-label printing for OEM receipt rolls.", href: "/products/custom-printed-thermal-rolls", badge: "OEM" },
        { image: rollsImg, title: "Colored Thermal Paper", desc: "Tinted rolls for color-coding, anti-fraud receipts, and branding.", href: "/products/colored-thermal-paper", badge: "Branding" },
      ],
    },
    {
      title: "Popular Roll Sizes",
      description: "POS, ATM, kiosk, and till rolls — pick a size or ask for a custom width.",
      cards: paperRollSizes.map((s) => ({
        image: rollsImg,
        title: s.label,
        desc: `Popular thermal roll size${s.markets ? ` for ${s.markets}` : ""} — in stock and custom, BPA-free.`,
        href: `/products/thermal-rolls/${s.slug}`,
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
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "Thermal Paper Rolls" }]}
        heroImage={heroImg}
        heroBadge={{ text: "Factory Direct Supply", color: "amber" }}
        title={<>Thermal Paper Rolls<br /><span className="text-amber-400">for POS, ATM &amp; Till</span></>}
        subtitle="Factory-direct POS, ATM, kiosk, and till rolls — blank or custom printed, BPA-free, in 57mm, 80mm, and custom widths, with OEM packaging and bulk pricing in 24 hours."
        trustBadges={["BPA-Free Standard", "All Sizes In Stock", "OEM Available", "ISO 9001"]}
        stats={[
          { value: "57/80mm", label: "Core Widths" },
          { value: "In Stock", label: "Ready to Ship" },
          { value: "OEM", label: "Custom Printing" },
          { value: "24h", label: "Quote Response" },
        ]}
        ctas={[
          { label: "Get Roll Pricing", href: "#inquiry", variant: "primary", icon: <MessageSquare className="w-4 h-4" /> },
          { label: "WhatsApp for Quote", href: `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I need pricing for thermal paper rolls. Please send sizes and bulk pricing.")}`, variant: "whatsapp", icon: <Phone className="w-4 h-4" />, external: true },
        ]}
        introSplit={{
          title: "Every POS & Receipt Roll From One Factory",
          lead: "From 57mm mobile-POS rolls to 80mm restaurant receipts and ATM rolls, we coat, slit, print, and pack every thermal roll in-house at true factory-direct pricing.",
          bullets: [
            "57mm & 80mm plus custom widths (±0.5mm)",
            "12mm, 18mm & 25mm core options",
            "BPA-free standard, phenol-free option",
            "Blank stock or custom printed (OEM)",
          ],
          image: rollsImg,
          imageAlt: "Thermal paper rolls for POS and receipt printers",
          cta: { label: "Send Inquiry Now", href: "#inquiry" },
        }}
        overview={{
          title: "A Complete Thermal Paper Roll Range",
          paragraphs: [
            "ZhixinPaper manufactures thermal paper rolls for POS receipts, cash registers, ATM and kiosk terminals, parking and ticketing machines, and mobile printers. Every roll is produced from coated base paper to finished, boxed product in our own factory.",
            "Rolls are available as blank stock for fast dispatch or custom printed with your logo, promotions, QR codes, and bilingual receipt layouts. Standard 57mm and 80mm widths are held in stock, while custom widths and diameters are produced to a ±0.5mm tolerance.",
            "Because we control coating, slitting, printing, and packaging in-house, we hold BPA-free as standard, support OEM and private-label programs, and export worldwide on FOB, CIF, and DDP terms at wholesale pricing.",
          ],
        }}
        featureSplit={{
          title: "Blank or Custom Printed — Your Call",
          lead: "Order blank rolls to run as-is, or hand us your artwork for branded, custom-printed rolls that turn every receipt into marketing.",
          bullets: [
            "Blank stock for all POS, ATM & mobile printers",
            "Custom logo, promotion & QR-code printing",
            "Bilingual / multi-language receipt layouts",
            "BPA-free standard with phenol-free option",
          ],
          image: rollsImg,
          imageAlt: "Blank and custom printed thermal paper rolls",
          cta: { label: "Discuss Your Project", href: "#inquiry" },
        }}
        productsTitle="Browse Thermal Roll Products"
        productsDescription="Blank, custom printed, and specialty thermal rolls — each in stock across all popular widths and core sizes."
        products={products}
        browseSections={browseSections}
        comparison={{
          title: "Blank vs Custom Printed Rolls",
          headers: { left: "Blank Rolls", right: "Custom Printed Rolls" },
          rows: [
            { factor: "Best for", left: "Standard POS & receipt printing", right: "Branded receipts & promotions" },
            { factor: "Artwork", left: "None — plain thermal", right: "Your logo, colors & layout" },
            { factor: "MOQ", left: "From low volume (stock sizes)", right: "From 5,000 rolls" },
            { factor: "Lead time", left: "3–7 days (stock)", right: "10–18 days (production)" },
            { factor: "Packaging", left: "Standard boxing", right: "Private-label / OEM" },
          ],
        }}
        whyUs={{
          title: "Why Source Rolls From the Factory",
          subtitle: "In-house coating, slitting, printing, and packaging — with the certifications global buyers require.",
          items: [
            { icon: <Factory />, title: "True Factory-Direct", text: "No distributor markup — we run the line from base-paper coating to finished, boxed rolls." },
            { icon: <ShieldCheck />, title: "Certified & Compliant", text: "ISO 9001:2015, FSC, BPA-free standard, and RoHS / REACH support for regulated markets." },
            { icon: <Package />, title: "Blank or Custom", text: "Stock blank rolls or custom printed with OEM and private-label programs." },
            { icon: <Boxes />, title: "All Sizes In Stock", text: "57mm and 80mm rolls plus custom widths, ready for fast dispatch." },
            { icon: <Truck />, title: "Global Export", text: "FOB, CIF, and DDP to the UK, EU, and North America with reliable lead times." },
            { icon: <BadgeCheck />, title: "OEM & Private Label", text: "Custom width, core, print, and branded packaging for distributors and brands." },
          ],
        }}
        faqs={faqs}
        crossLinks={[
          { label: "Receipt Paper Rolls", href: "/products/receipt-paper-rolls" },
          { label: "BPA-Free / Phenol-Free", href: "/products/phenol-free-thermal-paper" },
          { label: "Custom Printed Thermal Rolls", href: "/products/custom-printed-thermal-rolls" },
          { label: "Till Rolls", href: "/products/till-rolls" },
        ]}
        inquiry={{
          title: "Get Thermal Roll Pricing",
          description: "Tell us your sizes, core, quantities, and whether you need blank or custom printed — we'll send wholesale pricing within 24 hours.",
        }}
      />
    </>
  );
}
