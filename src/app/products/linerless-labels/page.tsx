import type { Metadata } from "next";
import { BadgeCheck, Boxes, Factory, Leaf, MessageSquare, Phone, Printer, ShieldCheck } from "lucide-react";
import { labelSizes } from "@/config/navigation";
import { SITE } from "@/config/siteData";
import { getSlotImage } from "@/lib/imageSlotUtils";
import { r2Image } from "@/lib/r2";
import ProductCategoryShowcaseTemplate from "@/components/products/ProductCategoryShowcaseTemplate";
import type { ShowcaseBrowseSection } from "@/components/products/ProductCategoryShowcaseTemplate";

export const metadata: Metadata = {
  title: "Linerless Labels Manufacturer | 3 1/8 x 263' Thermal Linerless Rolls",
  description:
    "Factory-direct linerless thermal labels in 3 1/8 x 263', 2 1/4 x 263', 40mm liner-free. Removable, sticky, permanent & semi-permanent adhesives. BPA-free, OEM, fast FCL.",
  keywords:
    "linerless labels manufacturer, linerless labels supplier, 3 1/8 x 263 linerless labels, 2 1/4 x 263 linerless labels, 40mm liner-free label printer paper, removable linerless labels, sticky linerless labels, semi-permanent linerless labels, permanent linerless labels, thermal linerless labels wholesale, linerless labels OEM, china linerless labels factory",
  alternates: { canonical: `${SITE.domain}/products/linerless-labels` },
};

const LABELS_IMG_FALLBACK = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-labels-FgJ5U8LZDHPF5nwmD6Uqa5.webp";

const specs = [
  { label: "Format", value: "Linerless / Liner-Free thermal labels (no release liner waste)" },
  { label: "Coating", value: "Direct thermal — BPA-free standard, Phenol-free (BPS-free) on request" },
  { label: "Common Widths", value: '2 1/4" (57mm), 3 1/8" (80mm), 40mm, custom 30–110mm' },
  { label: "Roll Lengths", value: "220', 263', 656' / 67m, 80m, 200m or custom" },
  { label: "Adhesive Options", value: "Removable, Semi-Permanent, Permanent (all FDA indirect food contact)" },
  { label: "Core ID", value: "12mm (1/2\") / 19mm (3/4\") / 25mm (1\")" },
  { label: "OD Max", value: "90mm (depending on printer model)" },
  { label: "Print Compatibility", value: "Zebra, Bixolon, Star, Citizen, Posiflex, SNBC, custom OEM" },
  { label: "Image Life", value: "5–7 years (standard) / 10 years (top-coated)" },
  { label: "MOQ", value: "1,000 rolls (samples: 50 rolls)" },
  { label: "Lead Time", value: "10–18 business days FCL" },
  { label: "Certification", value: "ISO 9001:2015, FSC, FDA, REACH, RoHS" },
];

const faqs = [
  { q: "What is a linerless label and why use it?", a: "A linerless label is a self-adhesive thermal label printed on a roll without a release liner — the adhesive is on the back of the paper itself and protected by a silicone top-coat on the front. Compared to traditional die-cut labels, linerless eliminates 30–50% of paper waste, fits 2x more labels per roll (reducing changeovers), and ships at lower freight cost. They are now standard in supermarkets (Tesco, Walmart), QSR (McDonald's), and modern POS systems." },
  { q: "Do you supply 3 1/8\" x 263' linerless labels?", a: "Yes. 3 1/8\" x 263' (80mm x 80m) is one of our highest-volume linerless SKUs. We offer it in removable, sticky/semi-permanent, and permanent adhesives, all BPA-free. MOQ 1,000 rolls, samples available in 50-roll cartons. Ships in standard 24-roll cases." },
  { q: "What about 2 1/4\" x 263' for compact printers?", a: "Available in all three adhesive grades. 2 1/4\" x 263' (57mm x 80m) fits Star Micronics, Bixolon SRP-S300, and most compact mobile receipt printers used by food delivery and field service." },
  { q: "What is the difference between removable, sticky and permanent linerless?", a: "Removable: peels cleanly within 24h (promo tags, returnable totes). Sticky / semi-permanent: stays put under refrigeration & condensation but can be peeled with effort (takeout containers, deli scales). Permanent: aggressive acrylic — paper tears before adhesive releases (asset tags, security seals, batch coding)." },
  { q: "Are your linerless labels compatible with my Posiflex / Zebra / Bixolon printer?", a: "Yes — our linerless thermal labels work with all major linerless-ready POS printers including Bixolon SRP-S300, Star TSP143IIIU, Citizen CT-S281L, SNBC BTP-R880NPV, Zebra ZD420t, and custom OEM units. Provide your printer model and we will recommend the correct core ID and OD." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE.domain },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": `${SITE.domain}/products` },
    { "@type": "ListItem", "position": 3, "name": "Linerless Labels", "item": `${SITE.domain}/products/linerless-labels` },
  ],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Linerless Thermal Labels — Liner-Free Label Rolls",
  "description": "Factory-direct linerless thermal labels in 3 1/8 x 263', 2 1/4 x 263', and 40mm liner-free. Removable, semi-permanent, and permanent adhesives. BPA-free, OEM, fast FCL.",
  "brand": { "@type": "Brand", "name": SITE.name },
  "manufacturer": { "@id": `${SITE.domain}/#organization` },
  "image": LABELS_IMG_FALLBACK,
  "url": `${SITE.domain}/products/linerless-labels`,
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

export default async function LinerlessLabelsPage() {
  const labelsImg = r2Image(await getSlotImage("thermal-labels:hero", LABELS_IMG_FALLBACK));

  const products = [
    { title: "3⅛\" × 263' Linerless Labels", desc: "80mm × 80m continuous linerless format reviewed against the printer, adhesive, application, sample test and packing specification.", image: labelsImg, href: "/products/linerless-labels/3-1-8-x-263", badge: "Detail" },
    { title: "2¼\" × 263' Linerless", desc: "57mm × 80m for compact mobile printers used by food delivery and field service.", image: labelsImg, href: "#inquiry", badge: "Compact" },
    { title: "40mm Liner-Free Rolls", desc: "Narrow liner-free rolls for scales, deli, and small-format thermal printers.", image: labelsImg, href: "#inquiry", badge: "Narrow" },
    { title: "Custom Printed Linerless", desc: "Pre-printed logo and color on liner-free stock with your adhesive grade. OEM & private label.", image: labelsImg, href: "/products/thermal-labels/custom-printed", badge: "OEM" },
  ];

  const browseSections: ShowcaseBrowseSection[] = [
    {
      title: "Linerless by Adhesive Grade",
      description: "Choose the adhesive that matches your application — all FDA indirect food contact compliant.",
      cards: [
        { image: labelsImg, title: "Removable", desc: "Peels cleanly within 24h — promo tags, returnable totes, temporary marking.", href: "#inquiry", badge: "Peelable" },
        { image: labelsImg, title: "Semi-Permanent / Sticky", desc: "Holds under refrigeration and condensation, but can be peeled with effort — takeout containers, deli scales.", href: "#inquiry", badge: "Cold-Chain" },
        { image: labelsImg, title: "Permanent", desc: "Aggressive acrylic — paper tears before the adhesive releases — asset tags, security seals, batch coding.", href: "#inquiry", badge: "Tamper-Evident" },
        { image: labelsImg, title: "Custom Printed Liner-Free", desc: "Logo, color, and layout pre-printed on linerless stock for OEM programs.", href: "/products/thermal-labels/custom-printed", badge: "OEM" },
      ],
    },
    {
      title: "Related Thermal Label Sizes",
      description: "Need die-cut labels too? Browse the standard direct thermal label range.",
      cards: labelSizes.map((s) => ({
        image: labelsImg,
        title: s.label,
        desc: `Direct thermal ${s.label.toLowerCase()} — die-cut labels on rolls or fanfold.`,
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
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "Linerless Labels" }]}
        heroImage={labelsImg}
        heroBadge={{ text: "Liner-Free & Low-Waste", color: "amber" }}
        title={<>Linerless Thermal Labels<br /><span className="text-amber-400">3⅛ × 263′, Liner-Free</span></>}
        subtitle="Factory-direct linerless thermal labels — 3⅛″ × 263′, 2¼″ × 263′, and 40mm liner-free — in removable, semi-permanent, and permanent adhesives, BPA-free, with OEM support and fast FCL shipping."
        trustBadges={["No Liner Waste", "2× Labels / Roll", "3 Adhesive Grades", "BPA-Free"]}
        stats={[
          { value: "30–50%", label: "Less Paper Waste" },
          { value: "2×", label: "Labels per Roll" },
          { value: "1,000", label: "Rolls MOQ" },
          { value: "FCL", label: "10–18 Days" },
        ]}
        ctas={[
          { label: "Get Linerless Pricing", href: "#inquiry", variant: "primary", icon: <MessageSquare className="w-4 h-4" /> },
          { label: "WhatsApp for Quote", href: `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I need pricing for linerless thermal labels. Please send sizes, adhesive grades, and pricing.")}`, variant: "whatsapp", icon: <Phone className="w-4 h-4" />, external: true },
        ]}
        introSplit={{
          title: "Liner-Free Labels From One Factory",
          lead: "Linerless labels carry the adhesive on the back of the paper itself, protected by a silicone top-coat — no release liner to waste. We coat, slit, and pack them in-house at factory-direct pricing.",
          bullets: [
            "30–50% less paper waste, 2× labels per roll",
            "3⅛\" × 263', 2¼\" × 263', 40mm & custom",
            "Removable, semi-permanent & permanent adhesives",
            "BPA-free standard, phenol-free on request",
          ],
          image: labelsImg,
          imageAlt: "Linerless thermal label rolls",
          cta: { label: "Send Inquiry Now", href: "#inquiry" },
        }}
        overview={{
          title: "What Are Linerless Thermal Labels?",
          paragraphs: [
            "A linerless label is a self-adhesive thermal label printed on a roll without a release liner — the adhesive is on the back of the paper itself and protected by a silicone top-coat on the front. Compared to traditional die-cut labels, linerless eliminates 30–50% of paper waste, fits 2× more labels per roll (reducing changeovers), and ships at lower freight cost.",
            "Linerless is now standard in supermarkets, QSR and food delivery, deli and scale applications, and modern POS systems. Our highest-volume SKU is 3⅛\" × 263' (80mm × 80m), with 2¼\" × 263' (57mm × 80m) for compact mobile printers and 40mm liner-free for scales and small-format printers.",
            "We supply three adhesive grades — removable, semi-permanent, and permanent (all FDA indirect food contact) — BPA-free as standard, matched to Zebra, Bixolon, Star, Citizen, Posiflex, SNBC, and custom OEM printers, and ship FCL in 10–18 days on EXW, FOB, CIF, and DDP terms.",
          ],
        }}
        featureSplit={{
          title: "Pick the Right Adhesive Grade",
          lead: "Removable for temporary marking, semi-permanent for cold-chain, or permanent for asset and security labels — all liner-free and BPA-free.",
          bullets: [
            "Removable — peels cleanly within 24h",
            "Semi-permanent — holds under refrigeration & condensation",
            "Permanent — aggressive acrylic for asset & security tags",
            "All FDA indirect food contact compliant",
          ],
          image: labelsImg,
          imageAlt: "Linerless labels in different adhesive grades",
          cta: { label: "Talk to a Specialist", href: "#inquiry" },
        }}
        productsTitle="Browse Linerless Label Options"
        productsDescription="Top-selling widths and custom printed liner-free rolls — BPA-free, bulk-ready, and printer-matched."
        products={products}
        browseSections={browseSections}
        comparison={{
          title: "Removable vs Semi-Permanent vs Permanent",
          headers: { left: "Removable / Semi-Permanent", right: "Permanent" },
          rows: [
            { factor: "Bond", left: "Peelable (24h) / holds, then peels", right: "Aggressive — paper tears first" },
            { factor: "Best for", left: "Promo tags, totes, takeout, deli scales", right: "Asset tags, security seals, batch coding" },
            { factor: "Cold chain", left: "Semi-permanent holds in refrigeration", right: "Holds in all conditions" },
            { factor: "Food contact", left: "FDA indirect", right: "FDA indirect" },
            { factor: "Coating", left: "BPA-free / phenol-free option", right: "BPA-free / phenol-free option" },
          ],
        }}
        specs={{
          title: "Specifications",
          rows: specs,
          note: "* Custom widths, lengths, and adhesive grades available on request.",
        }}
        whyUs={{
          title: "Why Source Linerless From the Factory",
          subtitle: "In-house coating and slitting with printer-matched specs and certified compliance.",
          items: [
            { icon: <Factory />, title: "True Factory-Direct", text: "No distributor markup — coated, top-coated, slit, and packed in our own factory." },
            { icon: <Leaf />, title: "Low-Waste & Eco", text: "No release liner — 30–50% less paper waste and 2× labels per roll." },
            { icon: <Printer />, title: "Printer-Matched", text: "Core ID and OD confirmed for Zebra, Bixolon, Star, Citizen, Posiflex, and SNBC." },
            { icon: <Boxes />, title: "3 Adhesive Grades", text: "Removable, semi-permanent, and permanent — all FDA indirect food contact." },
            { icon: <ShieldCheck />, title: "Certified & Compliant", text: "ISO 9001:2015, FSC, FDA, REACH, and RoHS — BPA-free standard." },
            { icon: <BadgeCheck />, title: "OEM & Private Label", text: "Custom widths, printed liner-free stock, and branded packaging for distributors." },
          ],
        }}
        faqs={faqs}
        crossLinks={[
          { label: "Thermal & Shipping Labels", href: "/products/thermal-labels" },
          { label: "4×6 Shipping Labels", href: "/products/shipping-labels" },
          { label: "Thermal Paper Rolls", href: "/products/thermal-paper-rolls" },
          { label: "OEM & Private Label", href: "/oem" },
        ]}
        inquiry={{
          title: "Get a Linerless Label Quote",
          description: "Tell us your width, length, adhesive grade, and printer model — we'll send unit pricing and lead time within 24 hours.",
        }}
      />
    </>
  );
}
