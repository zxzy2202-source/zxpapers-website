import type { Metadata } from "next";
import { BadgeCheck, Boxes, Factory, MessageSquare, Palette, Phone, ShieldCheck, Truck } from "lucide-react";
import { paperRollSizes } from "@/config/navigation";
import { SITE } from "@/config/siteData";
import { getSlotImage } from "@/lib/imageSlotUtils";
import { r2Image } from "@/lib/r2";
import ProductCategoryShowcaseTemplate from "@/components/products/ProductCategoryShowcaseTemplate";
import type { ShowcaseBrowseSection } from "@/components/products/ProductCategoryShowcaseTemplate";

export const metadata: Metadata = {
  title: "Custom Printed Thermal Rolls | OEM & Private Label Receipt Rolls",
  description:
    "Custom printed thermal paper rolls — logo, promotion, QR code, and bilingual receipt printing with private-label carton packaging and custom core printing. Factory-direct OEM, NDA, artwork support.",
  keywords:
    "custom printed thermal rolls, logo printed receipt rolls, private label thermal paper, oem thermal rolls, branded receipt paper, back printed receipt rolls, custom thermal paper manufacturer, promotional receipt rolls, custom core printing, private label receipt rolls",
  alternates: { canonical: `${SITE.domain}/products/custom-printed-thermal-rolls` },
};

const ROLLS_IMG_FALLBACK = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-rolls-RQBrphmgzbAMk7eq3HsvNq.webp";

const specs = [
  { label: "Print Areas", value: "Front, back, or both; single or multi-color" },
  { label: "Print Method", value: "Flexo / offset; logo, promotion, QR, coupon, bilingual layouts" },
  { label: "Common Widths", value: "57mm (2¼\") / 80mm (3⅛\") / Custom (±0.5mm)" },
  { label: "Core Printing", value: "Custom printed cores available" },
  { label: "Coating", value: "BPA-free standard / phenol-free option" },
  { label: "Packaging", value: "Private-label carton, custom box, branded shrink-wrap" },
  { label: "Artwork", value: "Design support; print-ready file check; NDA on request" },
  { label: "MOQ", value: "5,000 rolls (custom printing)" },
  { label: "Sample Lead Time", value: "Pre-production proof in 3–7 days" },
  { label: "Production Lead Time", value: "10–18 business days" },
];

const faqs = [
  { q: "What is the MOQ for custom printed thermal rolls?", a: "Custom printing starts at 5,000 rolls per design. Larger runs lower the unit cost; tell us your size, colors, and quantity for tiered pricing." },
  { q: "Can you print our logo, coupons, and QR codes?", a: "Yes. We print front and/or back with your logo, promotional message, coupons, QR codes, and bilingual receipt layouts in single or multiple colors." },
  { q: "Is private-label carton packaging available?", a: "Yes. We supply private-label carton and box packaging, branded shrink-wrap, and custom printed cores so the whole product carries your brand — not ours." },
  { q: "Do you provide artwork and design support?", a: "Yes. Our team reviews and prepares print-ready files, advises on print area and color, and can work under NDA to protect your designs and IP." },
  { q: "What is the sample lead time before a bulk order?", a: "We produce a pre-production proof in 3–7 days so you can confirm print position, color, and quality before committing to the full run (10–18 days production)." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
    { "@type": "ListItem", position: 2, name: "Products", item: `${SITE.domain}/products` },
    { "@type": "ListItem", position: 3, name: "Custom Printed Thermal Rolls", item: `${SITE.domain}/products/custom-printed-thermal-rolls` },
  ],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Custom Printed Thermal Paper Rolls (OEM / Private Label)",
  description: "Custom printed thermal paper rolls with logo, promotion, QR code, and bilingual receipt printing, private-label carton packaging, and custom core printing. Factory-direct OEM.",
  brand: { "@type": "Brand", name: SITE.name },
  manufacturer: { "@id": `${SITE.domain}/#organization` },
  image: ROLLS_IMG_FALLBACK,
  url: `${SITE.domain}/products/custom-printed-thermal-rolls`,
  additionalProperty: specs.map(({ label, value }) => ({ "@type": "PropertyValue", name: label, value })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

export default async function CustomPrintedThermalRollsPage() {
  const rollsImg = r2Image(await getSlotImage("thermal-rolls:hero", ROLLS_IMG_FALLBACK));

  const products = [
    { title: "Logo Printed Rolls", desc: "Your logo and brand colors printed on the receipt front — turn every receipt into branding.", image: rollsImg, href: "#inquiry", badge: "Branding" },
    { title: "Back-Printed Promo Rolls", desc: "Coupons, promotions, and QR codes printed on the back of the receipt to drive repeat sales.", image: rollsImg, href: "#inquiry", badge: "Marketing" },
    { title: "Private-Label Carton Packaging", desc: "Branded carton, box, and shrink-wrap so the whole product carries your brand, not ours.", image: rollsImg, href: "#inquiry", badge: "Private Label" },
    { title: "Custom Core Printing", desc: "Printed cores and custom roll lengths for a fully bespoke OEM receipt roll.", image: rollsImg, href: "#inquiry", badge: "OEM" },
  ];

  const browseSections: ShowcaseBrowseSection[] = [
    {
      title: "Custom Printed Roll Sizes",
      description: "Custom printing is available across every roll width — pick a size or ask for a custom dimension.",
      cards: paperRollSizes.map((s) => ({
        image: rollsImg,
        title: s.label,
        desc: `Custom printed thermal roll${s.markets ? ` for ${s.markets}` : ""} — logo, promo, or QR on BPA-free stock.`,
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
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "Custom Printed Thermal Rolls" }]}
        heroImage={rollsImg}
        heroBadge={{ text: "OEM & Private Label", color: "amber" }}
        title={<>Custom Printed Thermal Rolls<br /><span className="text-amber-400">for Private Label</span></>}
        subtitle="Logo, promotion, QR code, and bilingual receipt printing on thermal rolls — with private-label carton packaging, custom core printing, artwork support, and NDA protection, at factory-direct OEM pricing."
        trustBadges={["Logo & Promo Printing", "Private-Label Packaging", "Artwork Support / NDA", "BPA-Free Stock"]}
        stats={[
          { value: "5,000", label: "Custom MOQ" },
          { value: "3–7d", label: "Sample Proof" },
          { value: "Front/Back", label: "Print Areas" },
          { value: "NDA", label: "IP Protected" },
        ]}
        ctas={[
          { label: "Discuss Custom Roll Printing", href: "#inquiry", variant: "primary", icon: <MessageSquare className="w-4 h-4" /> },
          { label: "WhatsApp for Quote", href: `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I want custom printed thermal rolls (logo / promo / private label). Please advise MOQ, artwork, and pricing.")}`, variant: "whatsapp", icon: <Phone className="w-4 h-4" />, external: true },
        ]}
        introSplit={{
          title: "Branded Receipt Rolls From One Factory",
          lead: "Turn every receipt into marketing — we print your logo, promotions, and QR codes, package under your private label, and protect your artwork under NDA, all at factory-direct pricing.",
          bullets: [
            "Front, back, or both — single or multi-color",
            "Logo, promotion, QR code & bilingual layouts",
            "Private-label carton, box & custom core printing",
            "Artwork support, print-ready check & NDA",
          ],
          image: rollsImg,
          imageAlt: "Custom printed and logo branded thermal rolls",
          cta: { label: "Send Inquiry Now", href: "#inquiry" },
        }}
        overview={{
          title: "Custom Printed & Private-Label Thermal Rolls",
          paragraphs: [
            "Custom printed thermal rolls carry your logo, promotional message, coupons, QR codes, or bilingual receipt layout — printed on the front, back, or both in single or multiple colors. For high-value OEM and private-label buyers, the receipt itself becomes a branding and marketing channel.",
            "We go beyond print: private-label carton and box packaging, branded shrink-wrap, and custom printed cores let the whole product carry your brand rather than ours. Our team prepares print-ready artwork, advises on print area and color, and works under NDA to protect your designs and IP.",
            "As the factory, custom printing starts at 5,000 rolls per design with tiered pricing for larger runs. We produce a pre-production proof in 3–7 days, run production in 10–18 days, and export worldwide on EXW, FOB, CIF, and DDP terms at true factory-direct pricing.",
          ],
        }}
        featureSplit={{
          title: "From Logo to Full Private Label",
          lead: "Start with a printed logo, or take it all the way to branded packaging and printed cores — a complete OEM receipt-roll program.",
          bullets: [
            "Logo and promotion printing on the receipt",
            "Back-printed coupons and QR codes",
            "Private-label carton, box & shrink-wrap",
            "Custom printed cores and roll lengths",
          ],
          image: rollsImg,
          imageAlt: "Private-label branded thermal roll packaging",
          cta: { label: "Talk to OEM Team", href: "/oem" },
        }}
        productsTitle="Custom Printing Options"
        productsDescription="Logo, promotional, private-label, and fully bespoke OEM thermal rolls — front, back, core, and packaging."
        products={products}
        browseSections={browseSections}
        comparison={{
          title: "Blank vs Custom Printed Rolls",
          headers: { left: "Blank Rolls", right: "Custom Printed Rolls" },
          rows: [
            { factor: "Best for", left: "Standard POS & receipt printing", right: "Branding, promotions & private label" },
            { factor: "Print", left: "None — plain thermal", right: "Logo, promo, QR, bilingual layouts" },
            { factor: "Packaging", left: "Standard boxing", right: "Private-label carton & shrink-wrap" },
            { factor: "MOQ", left: "From low volume", right: "From 5,000 rolls per design" },
            { factor: "Lead time", left: "3–7 days (stock)", right: "10–18 days + 3–7 day proof" },
          ],
        }}
        specs={{
          title: "Custom Printing Specifications",
          rows: specs,
          note: "* NDA and artwork support available on request.",
        }}
        whyUs={{
          title: "Why Run Your OEM Program With Us",
          subtitle: "Artwork, packaging, and IP protection — a complete private-label thermal roll program from the factory.",
          items: [
            { icon: <Factory />, title: "True Factory-Direct", text: "No middleman — printing, packaging, and converting in our own factory." },
            { icon: <Palette />, title: "Artwork Support", text: "Print-ready file preparation, print-area advice, and color matching." },
            { icon: <ShieldCheck />, title: "NDA & IP Protection", text: "We work under NDA to protect your designs, brand, and packaging." },
            { icon: <Boxes />, title: "Private-Label Packaging", text: "Branded carton, box, shrink-wrap, and custom printed cores." },
            { icon: <Truck />, title: "Global Export", text: "EXW, FOB, CIF, and DDP to 80+ countries with reliable lead times." },
            { icon: <BadgeCheck />, title: "OEM Ready", text: "Tiered pricing, pre-production proofs, and stable batch quality for repeat orders." },
          ],
        }}
        faqs={faqs}
        crossLinks={[
          { label: "Thermal Paper Rolls", href: "/products/thermal-paper-rolls" },
          { label: "Custom Printed Thermal Labels", href: "/products/custom-printed-thermal-labels" },
          { label: "OEM & Private Label", href: "/oem" },
          { label: "Custom Printing & Specs", href: "/oem/custom-printing" },
        ]}
        inquiry={{
          title: "Discuss Custom Roll Printing",
          description: "Tell us your size, print areas, colors, packaging, and quantity — we'll send OEM pricing, MOQ, and a sample timeline within 24 hours.",
        }}
      />
    </>
  );
}
