import type { Metadata } from "next";
import { BadgeCheck, Boxes, Factory, MessageSquare, Palette, Phone, ShieldCheck, Truck } from "lucide-react";
import { labelSizes } from "@/config/navigation";
import { SITE } from "@/config/siteData";
import { getSlotImage } from "@/lib/imageSlotUtils";
import { r2Image } from "@/lib/r2";
import ProductCategoryShowcaseTemplate from "@/components/products/ProductCategoryShowcaseTemplate";
import type { ShowcaseBrowseSection } from "@/components/products/ProductCategoryShowcaseTemplate";

export const metadata: Metadata = {
  title: "Custom Printed Thermal Labels | OEM & Private Label Labels",
  description:
    "Custom printed thermal & direct thermal labels — logo, product info, and pre-printed fields with private-label packaging, artwork support, and NDA. Factory-direct OEM, any size, rolls or fanfold.",
  keywords:
    "custom printed thermal labels, private label labels, branded labels, oem labels, custom thermal labels manufacturer, pre-printed thermal labels, logo labels, custom product labels, custom shipping labels, private label packaging labels",
  alternates: { canonical: `${SITE.domain}/products/custom-printed-thermal-labels` },
};

const LABELS_IMG_FALLBACK = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-labels-FgJ5U8LZDHPF5nwmD6Uqa5.webp";

const specs = [
  { label: "Print Method", value: "Flexo / offset / digital; CMYK + Pantone spot colors" },
  { label: "Content", value: "Logo, product info, barcodes, pre-printed fields, variable data zones" },
  { label: "Common Sizes", value: "4×6, 2×1, 3×2, 4×3, 2×4 in plus custom die-cut (±0.5mm)" },
  { label: "Format", value: "Rolls (1\"/3\" core) or fanfold (Z-stack)" },
  { label: "Face Stock", value: "Direct thermal, top-coated, or thermal transfer (on request)" },
  { label: "Adhesive", value: "Permanent / removable / freezer (selectable)" },
  { label: "Packaging", value: "Private-label carton, custom box, branded shrink-wrap" },
  { label: "Artwork", value: "Design support; print-ready check; NDA on request" },
  { label: "MOQ", value: "5,000 labels (custom printing)" },
  { label: "Lead Time", value: "Proof 3–7 days · production 10–18 days" },
];

const faqs = [
  { q: "What is the MOQ for custom printed thermal labels?", a: "Custom printing starts at 5,000 labels per design. Larger runs lower the unit cost; send your size, colors, and quantity for tiered pricing." },
  { q: "Can you print our logo, product info, and barcodes?", a: "Yes. We print your logo, product information, barcodes, and pre-printed fields in CMYK plus Pantone spot colors, with variable-data zones left blank for your in-house thermal printing." },
  { q: "What sizes and formats can be custom printed?", a: "Any size — 4×6, 2×1, 3×2, 4×3, 2×4 inch and fully custom die-cuts, supplied on rolls (1\" or 3\" core) or as fanfold stacks, in direct thermal, top-coated, or thermal transfer face stock." },
  { q: "Is private-label packaging and NDA available?", a: "Yes. We supply private-label carton and box packaging and branded shrink-wrap, and work under NDA to protect your artwork, brand, and product designs." },
  { q: "What is the sample lead time before a bulk order?", a: "We produce a pre-production proof in 3–7 days to confirm print, color, die-cut, and adhesive before the full run (10–18 days production)." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
    { "@type": "ListItem", position: 2, name: "Products", item: `${SITE.domain}/products` },
    { "@type": "ListItem", position: 3, name: "Custom Printed Thermal Labels", item: `${SITE.domain}/products/custom-printed-thermal-labels` },
  ],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Custom Printed Thermal Labels (OEM / Private Label)",
  description: "Custom printed thermal and direct thermal labels with logo, product info, and pre-printed fields, private-label packaging, artwork support, and NDA. Factory-direct OEM, any size.",
  brand: { "@type": "Brand", name: SITE.name },
  manufacturer: { "@id": `${SITE.domain}/#organization` },
  image: LABELS_IMG_FALLBACK,
  url: `${SITE.domain}/products/custom-printed-thermal-labels`,
  additionalProperty: specs.map(({ label, value }) => ({ "@type": "PropertyValue", name: label, value })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

export const revalidate = 86400; // 24 hours: static product/market content

export default async function CustomPrintedThermalLabelsPage() {
  const labelsImg = r2Image(await getSlotImage("thermal-labels:hero", LABELS_IMG_FALLBACK));

  const products = [
    { title: "Logo & Brand Labels", desc: "Your logo and brand colors pre-printed, with blank zones for in-house thermal printing.", image: labelsImg, href: "#inquiry", badge: "Branding" },
    { title: "Custom Product Labels", desc: "Product, price, and packaging labels with your design and pre-printed fields.", image: labelsImg, href: "/products/product-labels", badge: "Retail" },
    { title: "Branded Shipping Labels", desc: "4×6 shipping labels pre-printed with your logo and sender details for e-commerce.", image: labelsImg, href: "/products/shipping-labels", badge: "E-commerce" },
    { title: "Private-Label Packaging", desc: "Branded carton, box, and shrink-wrap so the whole product carries your brand.", image: labelsImg, href: "#inquiry", badge: "Private Label" },
  ];

  const browseSections: ShowcaseBrowseSection[] = [
    {
      title: "Custom Printed Label Sizes",
      description: "Custom printing is available across every label size and custom die-cut — pick a size or ask for a bespoke shape.",
      cards: labelSizes.map((s) => ({
        image: labelsImg,
        title: s.label,
        desc: `Custom printed ${s.label.toLowerCase()} — logo, product info, and pre-printed fields, rolls or fanfold.`,
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
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "Custom Printed Thermal Labels" }]}
        heroImage={labelsImg}
        heroBadge={{ text: "OEM & Private Label", color: "amber" }}
        title={<>Custom Printed Thermal Labels<br /><span className="text-amber-400">for Your Brand</span></>}
        subtitle="Logo, product information, and pre-printed fields on direct-thermal labels — any size, rolls or fanfold, with private-label packaging, artwork support, and NDA protection, at factory-direct OEM pricing."
        trustBadges={["CMYK + Pantone", "Any Size & Die-Cut", "Artwork Support / NDA", "Private-Label Packaging"]}
        stats={[
          { value: "5,000", label: "Custom MOQ" },
          { value: "3–7d", label: "Sample Proof" },
          { value: "CMYK+PMS", label: "Color" },
          { value: "NDA", label: "IP Protected" },
        ]}
        ctas={[
          { label: "Discuss Custom Label Printing", href: "#inquiry", variant: "primary", icon: <MessageSquare className="w-4 h-4" /> },
          { label: "WhatsApp for Quote", href: `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I want custom printed thermal labels (logo / product / private label). Please advise MOQ, artwork, and pricing.")}`, variant: "whatsapp", icon: <Phone className="w-4 h-4" />, external: true },
        ]}
        introSplit={{
          title: "Branded Labels From One Factory",
          lead: "We pre-print your logo, product information, and fields in full color, leave blank zones for your in-house thermal printing, package under your private label, and protect your artwork under NDA.",
          bullets: [
            "CMYK + Pantone print on any size or die-cut",
            "Pre-printed fields with variable-data zones",
            "Rolls or fanfold; direct thermal or transfer",
            "Private-label packaging, artwork support & NDA",
          ],
          image: labelsImg,
          imageAlt: "Custom printed and branded thermal labels",
          cta: { label: "Send Inquiry Now", href: "#inquiry" },
        }}
        overview={{
          title: "Custom Printed & Private-Label Thermal Labels",
          paragraphs: [
            "Custom printed thermal labels carry your logo, product information, barcodes, and pre-printed fields in CMYK plus Pantone spot colors, with variable-data zones left blank for your in-house thermal printing. They suit retail, packaging, e-commerce, and OEM buyers who want labels that look like part of the product.",
            "We print any size — 4×6, 2×1, 3×2, 4×3, 2×4 inch and fully custom die-cuts — on rolls or fanfold, in direct thermal, top-coated, or thermal transfer face stock, with permanent, removable, or freezer adhesives selected to your application.",
            "Beyond print, we supply private-label carton and box packaging and branded shrink-wrap, prepare print-ready artwork, and work under NDA to protect your designs. Custom printing starts at 5,000 labels with a 3–7 day proof, 10–18 day production, and worldwide export on EXW, FOB, CIF, and DDP terms.",
          ],
        }}
        featureSplit={{
          title: "From Printed Logo to Full Private Label",
          lead: "Start with a pre-printed logo and fields, or take it all the way to branded packaging — a complete OEM label program.",
          bullets: [
            "Logo, product info & barcode printing",
            "Variable-data zones for in-house printing",
            "Any size and custom die-cut shape",
            "Private-label carton, box & shrink-wrap",
          ],
          image: labelsImg,
          imageAlt: "Private-label branded label packaging",
          cta: { label: "Talk to OEM Team", href: "/oem" },
        }}
        productsTitle="Custom Printing Options"
        productsDescription="Logo, product, branded shipping, and fully private-label thermal labels — any size, format, and adhesive."
        products={products}
        browseSections={browseSections}
        comparison={{
          title: "Blank vs Custom Printed Labels",
          headers: { left: "Blank Labels", right: "Custom Printed Labels" },
          rows: [
            { factor: "Best for", left: "On-demand thermal printing", right: "Branded, pre-printed product labels" },
            { factor: "Print", left: "None — print your own", right: "Logo, product info, barcodes, fields" },
            { factor: "Packaging", left: "Standard boxing", right: "Private-label carton & shrink-wrap" },
            { factor: "MOQ", left: "From low volume", right: "From 5,000 labels per design" },
            { factor: "Lead time", left: "3–7 days (stock)", right: "10–18 days + 3–7 day proof" },
          ],
        }}
        specs={{
          title: "Custom Printing Specifications",
          rows: specs,
          note: "* NDA and artwork support available on request.",
        }}
        whyUs={{
          title: "Why Run Your Label OEM Program With Us",
          subtitle: "Artwork, packaging, and IP protection — a complete private-label thermal label program from the factory.",
          items: [
            { icon: <Factory />, title: "True Factory-Direct", text: "No middleman — printing, die-cutting, and packaging in our own factory." },
            { icon: <Palette />, title: "Artwork Support", text: "Print-ready file preparation, color matching, and die-line advice." },
            { icon: <ShieldCheck />, title: "NDA & IP Protection", text: "We work under NDA to protect your artwork, brand, and product designs." },
            { icon: <Boxes />, title: "Any Size & Adhesive", text: "Custom die-cuts, rolls or fanfold, permanent / removable / freezer adhesives." },
            { icon: <Truck />, title: "Global Export", text: "EXW, FOB, CIF, and DDP to 80+ countries with reliable lead times." },
            { icon: <BadgeCheck />, title: "OEM Ready", text: "Tiered pricing, pre-production proofs, and stable batch quality for repeat orders." },
          ],
        }}
        faqs={faqs}
        crossLinks={[
          { label: "Thermal & Shipping Labels", href: "/products/thermal-labels" },
          { label: "Custom Printed Thermal Rolls", href: "/products/thermal-paper-rolls/custom-printed" },
          { label: "Product Labels", href: "/products/product-labels" },
          { label: "OEM & Private Label", href: "/oem" },
        ]}
        inquiry={{
          title: "Discuss Custom Label Printing",
          description: "Tell us your size, format, colors, adhesive, and quantity — we'll send OEM pricing, MOQ, and a sample timeline within 24 hours.",
        }}
      />
    </>
  );
}
