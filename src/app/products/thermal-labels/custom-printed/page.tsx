import type { Metadata } from "next";
import { Clock, Package, Printer, ShieldCheck } from "lucide-react";
import { labelSizes } from "@/config/navigation";
import { SITE } from "@/config/siteData";
import { getSlotImage } from "@/lib/imageSlotUtils";
import ProductLandingPageTemplate from "@/components/products/ProductLandingPageTemplate";

export const metadata: Metadata = {
  title: "Custom Printed Thermal Labels | OEM Labels",
  description: "Custom printed thermal labels with your logo, barcode, and brand. Choose from permanent, removable, high-temperature (up to 180°C), or cryogenic (–196°C).",
  alternates: { canonical: `${SITE.domain}/products/thermal-labels/custom-printed` },
};

const LABELS_IMG_FALLBACK = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-labels-FgJ5U8LZDHPF5nwmD6Uqa5.webp";

const adhesiveTypes = [
  { title: "Permanent Adhesive", desc: "Best for shipping labels, retail price tags, and product labels where long-term bond strength matters.", icon: "🏷️" },
  { title: "Removable Adhesive", desc: "Ideal for temporary promotions, library labels, and applications where clean removal without residue is important.", icon: "↔️" },
  { title: "High-Temperature Adhesive", desc: "Designed for automotive parts, PCB assembly, powder-coating, and sterilization workflows.", icon: "🌡️" },
  { title: "Low-Temperature / Freezer Adhesive", desc: "Built for cold chain, frozen food, pharmaceutical storage, and cryogenic sample management.", icon: "❄️" },
  { title: "Synthetic Face Materials", desc: "PP, PE, and PET constructions are available where water resistance or higher durability is required.", icon: "🧪" },
  { title: "Regulatory Labeling", desc: "Supports GHS/SDS hazard labels, FDA nutrition facts, CE marking, Prop 65, and other compliance formats.", icon: "📋" },
];

const printingCapabilities = [
  { title: "Flexographic Printing", desc: "Up to 4 colors with water-based or UV-cured inks. Consistent color reproduction across high-volume runs.", icon: "🖨️" },
  { title: "Variable Data Printing", desc: "Sequential barcodes, serial numbers, QR codes, or lot numbers printed inline for traceability.", icon: "🔢" },
  { title: "Security Printing", desc: "Void patterns, tamper-evident features, UV-reactive inks, and authentication options available.", icon: "🔒" },
  { title: "Back Print", desc: "Print on the reverse side for branding, instructions, maps, or additional product information.", icon: "🔄" },
  { title: "Overlaminate Options", desc: "Gloss, matte, or soft-touch overlaminate for better scratch resistance and premium shelf appearance.", icon: "✨" },
  { title: "Free Design Proof", desc: "We provide a digital proof within 24 hours and physical samples before mass production if needed.", icon: "✅" },
];

const printingSpecs = [
  { label: "Print Method", value: "Flexographic (up to 4 colors)" },
  { label: "Print Side", value: "Thermal side / Reverse side / Both sides" },
  { label: "Color Matching", value: "Pantone / CMYK / RAL (±ΔE 2.0)" },
  { label: "Ink Type", value: "Water-based (food-safe) / UV-cured" },
  { label: "Variable Data", value: "Static design / Variable QR / Sequential barcode" },
  { label: "Design File Format", value: "AI / PDF / EPS / CDR (300 dpi minimum)" },
  { label: "Proof", value: "Free digital proof + physical sample before production" },
];

const productSpecs = [
  { label: "Face Material", value: "Direct thermal paper / PP / PE / PET (synthetic)" },
  { label: "Label Width", value: "25mm – 210mm (custom ±0.5mm)" },
  { label: "Label Length", value: "10mm – 300mm (custom)" },
  { label: "Adhesive Options", value: "Permanent / Removable / High-Temp / Low-Temp / Cryogenic" },
  { label: "Liner", value: "White glassine / Yellow glassine / PET liner" },
  { label: "Optical Density", value: "OD ≥ 1.2 (standard) / OD ≥ 1.4 (high-density)" },
  { label: "MOQ", value: "1,000 rolls (private label packaging: 5,000 rolls)" },
  { label: "Lead Time", value: "15–20 business days (includes proof approval)" },
  { label: "Sample Lead Time", value: "5–7 business days" },
  { label: "Payment Terms", value: "T/T 30% deposit, 70% before shipment; L/C at sight" },
];

const packagingInfo = [
  { label: "Inner Packing", value: "Polybag per roll (custom print available)" },
  { label: "Outer Carton", value: "5-ply corrugated carton (custom print available)" },
  { label: "Rolls per Carton", value: "12 / 24 / 36 rolls (depending on size)" },
  { label: "Port", value: "Shenzhen / Guangzhou / Shanghai" },
  { label: "Incoterms", value: "EXW, FOB, CIF, DDP" },
  { label: "Shipping", value: "Sea freight, Air freight, Express (DHL/FedEx/UPS)" },
];

const faqs = [
  { q: "Can I choose a different adhesive for my custom printed labels?", a: "Yes. All four adhesive grades are available with custom printing. Just specify your application and we will recommend the most suitable adhesive system." },
  { q: "What is the minimum order for custom printed labels?", a: "Our MOQ for custom printed labels is 1,000 rolls. For private label packaging, the MOQ is 5,000 rolls. We can discuss lower quantities for sampling." },
  { q: "Do you provide a design proof before production?", a: "Yes. We provide a free digital proof within 24 hours and can also prepare physical printed samples before full production." },
  { q: "Can high-temperature labels survive powder-coating ovens?", a: "Yes. Our high-temperature adhesive grade maintains bond strength up to 150°C continuously and 180°C short-term, which covers most powder-coating processes." },
  { q: "Are freezer labels suitable for cryogenic storage?", a: "Our standard freezer adhesive works down to –40°C. For liquid nitrogen or ultra-low temperature storage, we provide a dedicated cryogenic grade." },
  { q: "What file formats do you accept for artwork?", a: "We accept AI, PDF, EPS, and CDR files at 300 dpi minimum. If needed, our design team can adapt your logo into a print-ready layout." },
];

const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
  { "@type": "ListItem", position: 2, name: "Products", item: `${SITE.domain}/products` },
  { "@type": "ListItem", position: 3, name: "Thermal Labels", item: `${SITE.domain}/products/thermal-labels` },
  { "@type": "ListItem", position: 4, name: "Custom Printed", item: `${SITE.domain}/products/thermal-labels/custom-printed` },
]};
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Custom Printed Thermal Labels | High-Temp, Removable & Freezer Adhesive",
  description: metadata.description,
  brand: { "@type": "Brand", name: "Zhixin Paper" },
  manufacturer: { "@type": "Organization", name: "Zhixin Paper", url: SITE.domain },
  image: LABELS_IMG_FALLBACK,
  url: `${SITE.domain}/products/thermal-labels/custom-printed`,
  additionalProperty: [...printingSpecs, ...productSpecs].map(({ label, value }) => ({ "@type": "PropertyValue", name: label, value })),
};

export const revalidate = 86400; // 24 hours: static product/market content

export default async function CustomPrintedLabelsPage() {
  const heroImage = await getSlotImage("thermal-labels:custom-hero", LABELS_IMG_FALLBACK);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <ProductLandingPageTemplate
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "Custom Printed Thermal Labels" }]}
        heroImage={heroImage}
        heroAlt="Custom Printed Thermal Labels"
        heroTags={["Custom Logo", "Pantone Matching", "4 Adhesive Grades", "OEM / Private Label"]}
        title="Custom Printed Thermal Labels"
        description="Pre-printed thermal labels with your brand, logo, barcode, or regulatory data — combined with the adhesive grade that matches your application environment. From standard shipping labels to high-temperature automotive tags and cryogenic lab vial labels, we manufacture to your exact specification with a free design proof included."
        stats={[{ val: "4", unit: "Adhesive Grades" }, { val: "15–20", unit: "Day Lead Time" }, { val: "4-Color", unit: "Flexo Print" }]}
        accent="amber"
        trustBar={["Free Design Proof Included", "–196°C to 180°C Adhesive Range", "Up to 4-Color Flexo Print", "MOQ 1,000 Rolls"]}
        topSectionTitle="Adhesive Types"
        topSectionVariant="cards"
        topSectionItems={[]}
        topSectionCards={adhesiveTypes}
        secondarySectionTitle="Printing Capabilities"
        secondarySectionCards={printingCapabilities}
        tables={[
          { title: "Printing Specifications", rows: printingSpecs },
          { title: "Label Specifications", rows: productSpecs, note: "* Custom specifications available. Contact us for non-standard requirements." },
          { title: "Packaging & Shipping", rows: packagingInfo },
        ]}
        sizesTitle="Available Sizes"
        sizeLinks={labelSizes.map((size) => ({ label: size.label, href: `/products/thermal-labels/${size.slug}`, badge: size.badge }))}
        faqs={faqs}
        crossLinks={[
          { label: "Blank Thermal Labels", href: "/products/thermal-labels/blank" },
          { label: "Custom Printed Rolls", href: "/products/thermal-paper-rolls/custom-printed" },
          { label: "OEM & Private Label", href: "/oem" },
        ]}
        sidebarTitle="Request Custom Quote"
        sidebarDescription="Tell us your size, adhesive grade, print colors, and quantity. We'll send a quote with a free design proof within 24 hours."
        sampleCard={{ title: "Free Printed Sample", description: "Get a printed sample with your logo in 5–7 business days. Verify color accuracy, adhesion, and print quality before bulk production.", href: "/contact", label: "Request Sample" }}
        sidebarMetrics={[
          { icon: Package, label: "MOQ", val: "1,000 rolls" },
          { icon: Clock, label: "Lead Time", val: "15–20 days" },
          { icon: Printer, label: "Print Colors", val: "Up to 4 colors" },
          { icon: ShieldCheck, label: "Payment", val: "T/T · L/C" },
        ]}
        sidebarListCard={{ title: "Adhesive Grade Quick Guide", items: ["Permanent — –20°C to 80°C", "Removable — –10°C to 60°C", "High-Temp — Up to 180°C", "Freezer / Cryo — –196°C to 40°C"] }}
      />
    </>
  );
}
