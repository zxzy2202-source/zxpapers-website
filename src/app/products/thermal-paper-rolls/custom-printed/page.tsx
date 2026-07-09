import type { Metadata } from "next";
import { Clock, Package, Printer, ShieldCheck } from "lucide-react";
import { paperRollSizes } from "@/config/navigation";
import { SITE } from "@/config/siteData";
import { getSlotImage } from "@/lib/imageSlotUtils";
import ProductLandingPageTemplate from "@/components/products/ProductLandingPageTemplate";

export const metadata: Metadata = {
  title: "Custom Printed Thermal Rolls | OEM Branding",
  description: "Custom printed thermal paper rolls with your logo, QR codes & promos — factory-direct OEM, low MOQ 1,000, BPA-free, global export. Free design proof. Get a quote.",
  keywords: [
    "custom printed thermal paper rolls",
    "branded thermal receipt paper",
    "thermal paper rolls with logo",
    "thermal paper logo printing OEM",
    "private label thermal paper rolls",
    "thermal paper QR code printing",
  ].join(", "),
  alternates: { canonical: `${SITE.domain}/products/thermal-paper-rolls/custom-printed` },
};

const ROLLS_IMG_FALLBACK = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-rolls-RQBrphmgzbAMk7eq3HsvNq.webp";
const printingSpecs = [
  { label: "Print Method", value: "Flexographic printing (up to 4 colors)" },
  { label: "Print Side", value: "Thermal side / Reverse side / Both sides" },
  { label: "Color Matching", value: "Pantone / CMYK / RAL (±ΔE 2.0)" },
  { label: "Print Area", value: "Full width or partial (custom layout)" },
  { label: "Repeat Pattern", value: "Every receipt / Every N cm (custom interval)" },
  { label: "Variable Data", value: "Static design (standard) / Variable QR/barcode (digital)" },
  { label: "Ink Type", value: "Water-based (food-safe) / UV-cured" },
  { label: "Design File Format", value: "AI / PDF / EPS / CDR (300 dpi minimum)" },
  { label: "Proof", value: "Free digital proof + physical sample before production" },
];
const productSpecs = [
  { label: "Paper Width", value: "57mm / 80mm / Custom (±0.5mm)" },
  { label: "Roll Diameter", value: "40mm – 100mm (custom available)" },
  { label: "Core Inner Dia.", value: "12mm / 25mm / Custom" },
  { label: "Paper Weight", value: "48 g/m² / 55 g/m² / 65 g/m² / 80 g/m²" },
  { label: "Coating", value: "BPA-Free (standard) / Phenol-Free (EU/CA)" },
  { label: "Image Life", value: "3 / 7 / 10 years (grade selectable)" },
  { label: "MOQ", value: "1,000 rolls (5,000 rolls for private label packaging)" },
  { label: "Lead Time", value: "10–18 business days (includes proof approval)" },
  { label: "Sample Lead Time", value: "5–7 business days" },
  { label: "Payment Terms", value: "T/T 30% deposit, 70% before shipment; L/C at sight" },
];
const packagingInfo = [
  { label: "Inner Packing", value: "Polybag per roll (moisture-proof, custom print available)" },
  { label: "Outer Carton", value: "5-ply corrugated carton (custom print available)" },
  { label: "Rolls per Carton", value: "50 / 100 / 200 rolls (depending on size)" },
  { label: "Port", value: "Shenzhen / Guangzhou / Shanghai" },
  { label: "Incoterms", value: "EXW, FOB, CIF, DDP" },
  { label: "Shipping", value: "Sea freight, Air freight, Express (DHL/FedEx/UPS)" },
];
const printingOptions = [
  { title: "Logo & Branding", desc: "Print your company logo, tagline, and brand colors on every roll.", icon: "🏷️" },
  { title: "Promotional Messages", desc: "Coupons, discount codes, social media handles, or website URLs printed on every receipt.", icon: "📣" },
  { title: "QR Codes", desc: "Static or variable QR codes for loyalty programs, product authentication, digital receipts, or survey links.", icon: "📱" },
  { title: "Security Features", desc: "Watermarks, void patterns, sequential serial numbers, or UV-reactive inks for anti-counterfeiting.", icon: "🔒" },
  { title: "Regulatory Compliance", desc: "Pre-printed legal disclaimers, terms of service, or regulatory text for specific industries.", icon: "📋" },
  { title: "Custom Back Print", desc: "Print on the reverse side for additional branding and instructions.", icon: "🖨️" },
];
const orderSteps = [
  { step: "01", title: "Submit Requirements", desc: "Send us your size, quantity, colors, and artwork via WhatsApp or inquiry form." },
  { step: "02", title: "Free Digital Proof", desc: "Our design team prepares a digital proof within 24 hours." },
  { step: "03", title: "Approve & Deposit", desc: "Approve the proof and pay 30% T/T deposit." },
  { step: "04", title: "Production", desc: "Full production starts after proof approval. 10–18 business days for custom printed orders." },
  { step: "05", title: "QC & Shipment", desc: "Pre-shipment inspection report provided. CIF delivery to major ports available." },
];
const geoApplications = [
  { title: "Italy / EU", badge: "Italy · EU resellers · receipt marketing", items: ["Rotoli termici personalizzati con logo", "Stampa retro scontrino with coupon or QR code", "BPA-free, BPS-free, FSC and long-life receipt options"] },
  { title: "Africa", badge: "Nigeria · Kenya · Tanzania · Ghana", items: ["TRA-compliant pre-printed tax receipt rolls", "M-Pesa / MTN MoMo payment confirmation receipts", "Fuel station receipt rolls with station logo"] },
  { title: "Middle East", badge: "UAE · Saudi Arabia · Egypt · Turkey", items: ["ZATCA e-invoicing QR code printed rolls", "Arabic + English bilingual receipt printing", "Hotel & hospitality branded receipt rolls"] },
  { title: "Southeast Asia", badge: "Thailand · Indonesia · Vietnam · Philippines", items: ["PromptPay QR code printed rolls", "QRIS payment receipt rolls", "Convenience store chain branded rolls"] },
];
const faqs = [
  { q: "What is the minimum order for custom printed rolls?", a: "Our MOQ is 1,000 rolls. For private label packaging, the MOQ is 5,000 rolls." },
  { q: "Do you provide a design proof before production?", a: "Yes. We provide a free digital proof within 24 hours and physical printed samples on request." },
  { q: "What file formats do you accept for artwork?", a: "We accept AI, PDF, EPS, and CDR files at 300 dpi minimum." },
  { q: "Can you match our exact brand colors?", a: "Yes. We offer Pantone, CMYK, and RAL color matching with a tolerance of ±ΔE 2.0." },
  { q: "How long does production take?", a: "Custom printed orders typically take 10–18 business days, including proof approval and production." },
  { q: "Can I order custom packaging as well?", a: "Yes. We offer full OEM/private label service including custom carton printing, polybag printing, and branded core labels." },
  { q: "Do you support custom printed receipt rolls for Italy?", a: "Yes. We can print logo, reverse-side receipt advertising, coupon, QR code, and Italian-language layouts for rotoli termici personalizzati and stampa retro scontrino projects." },
];
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Custom Printed Thermal Paper Rolls",
  description: metadata.description,
  brand: { "@type": "Brand", name: "ZhixinPaper" },
  manufacturer: { "@type": "Organization", name: "ZhixinPaper", url: SITE.domain },
  image: ROLLS_IMG_FALLBACK,
  url: `${SITE.domain}/products/thermal-paper-rolls/custom-printed`,
  additionalProperty: [...printingSpecs, ...productSpecs].map(({ label, value }) => ({ "@type": "PropertyValue", name: label, value })),
};
const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
  { "@type": "ListItem", position: 2, name: "Products", item: `${SITE.domain}/products` },
  { "@type": "ListItem", position: 3, name: "Thermal Paper Rolls", item: `${SITE.domain}/products/thermal-paper-rolls` },
  { "@type": "ListItem", position: 4, name: "Custom Printed", item: `${SITE.domain}/products/thermal-paper-rolls/custom-printed` },
]};

export default async function CustomPrintedRollsPage() {
  const heroImage = await getSlotImage("thermal-paper-rolls:custom-hero", ROLLS_IMG_FALLBACK);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <ProductLandingPageTemplate
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "Custom Printed Thermal Rolls" }]}
        heroImage={heroImage}
        heroAlt="Custom Printed Thermal Paper Rolls with Logo"
        heroTags={["Custom Logo", "Pantone Matching", "QR Code", "OEM / Private Label", "Italy / EU"]}
        title="Custom Printed Thermal Paper Rolls"
        description="Turn every receipt into a brand touchpoint. We print your logo, colors, promotional messages, or QR codes directly on thermal paper rolls using high-precision flexographic printing. Available in all standard sizes with OEM private label packaging — free design proof included with every order."
        stats={[{ val: "1,000", unit: "Rolls MOQ" }, { val: "10–18", unit: "Day Lead Time" }, { val: "4-Color", unit: "Flexo Print" }]}
        accent="amber"
        trustBar={["Free Design Proof Included", "10–18 Day Lead Time", "Up to 4-Color Flexo Print", "MOQ 1,000 Rolls"]}
        topSectionTitle="What We Can Print"
        topSectionVariant="cards"
        topSectionItems={[]}
        topSectionCards={printingOptions}
        timelineTitle="How to Order Custom Printed Rolls"
        timelineItems={orderSteps}
        tagGroupTitle="Regional Applications & Compliance"
        tagGroups={geoApplications}
        tables={[
          { title: "Printing Specifications", rows: printingSpecs },
          { title: "Paper Specifications", rows: productSpecs },
          { title: "Packaging & Shipping", rows: packagingInfo },
        ]}
        sizesTitle="Available Sizes"
        sizeLinks={paperRollSizes.map((size) => ({ label: size.label, href: `/products/thermal-rolls/${size.slug}`, badge: size.badge }))}
        faqs={faqs}
        crossLinks={[
          { label: "Full OEM Printing Details", href: "/oem/custom-printing" },
          { label: "Blank Thermal Rolls", href: "/products/thermal-paper-rolls/blank" },
          { label: "Custom Printed Labels", href: "/products/thermal-labels/custom-printed" },
          { label: "Italy Market", href: "/markets/europe/italy" },
          { label: "Africa Market", href: "/markets/africa" },
          { label: "Middle East Market", href: "/markets/middle-east" },
        ]}
        sidebarTitle="Request Custom Quote"
        sidebarDescription="Describe your printing requirements — size, quantity, colors, and artwork. We'll send a quote with unit price and a free design proof."
        sampleCard={{ title: "Free Printed Sample", description: "Get a printed sample with your logo in 5–7 business days. Verify color accuracy and print quality before bulk production.", href: "/contact", label: "Request Sample" }}
        sidebarMetrics={[
          { icon: Package, label: "MOQ", val: "1,000 rolls" },
          { icon: Clock, label: "Lead Time", val: "10–18 days" },
          { icon: Printer, label: "Print Colors", val: "Up to 4 colors" },
          { icon: ShieldCheck, label: "Payment", val: "T/T · L/C" },
        ]}
        sidebarListCard={{ title: "Key Advantages", items: ["Brand every customer touchpoint", "Increase repeat business with promotional printing", "Free digital proof + physical sample", "QR code and coupon print testing supported", "Italian, Arabic, English, French multilingual layouts"] }}
      />
    </>
  );
}
