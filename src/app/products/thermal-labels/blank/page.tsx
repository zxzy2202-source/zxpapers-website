import type { Metadata } from "next";
import { Clock, Package, ShieldCheck, Truck } from "lucide-react";
import { labelSizes } from "@/config/navigation";
import { SITE } from "@/config/siteData";
import { getSlotImage } from "@/lib/imageSlotUtils";
import ProductLandingPageTemplate from "@/components/products/ProductLandingPageTemplate";

export const metadata: Metadata = {
  title: "Blank Thermal Labels | All Adhesive Types",
  description: "Direct thermal labels with permanent, removable, high-temperature (-196°C to 150°C) and low-temperature adhesive options.",
  alternates: { canonical: `${SITE.domain}/products/thermal-labels/blank` },
};

const LABELS_IMG_FALLBACK = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-labels-FgJ5U8LZDHPF5nwmD6Uqa5.webp";

const adhesiveTypes = [
  { title: "Permanent Adhesive", desc: "Standard acrylic permanent adhesive for shipping labels, retail price tags, and inventory barcodes. Bonds firmly to cardboard, plastic, glass, and metal.", icon: "🏷️" },
  { title: "Removable Adhesive", desc: "Low-tack adhesive that peels off cleanly without residue. Ideal for temporary promotions, library labels, and rental equipment.", icon: "↔️" },
  { title: "High-Temperature Adhesive", desc: "Engineered for powder-coating, sterilization, and industrial heat processes. Maintains bond strength through demanding production cycles.", icon: "🌡️" },
  { title: "Low-Temperature / Freezer Adhesive", desc: "Maintains strong adhesion through cold chain and freezer environments, with cryogenic variants available for biomedical storage.", icon: "❄️" },
  { title: "Synthetic Face Material", desc: "PP, PE, and PET options available when you need water resistance, tear resistance, or stronger chemical durability.", icon: "🧪" },
  { title: "Printer Compatibility", desc: "Compatible with Zebra, Honeywell, SATO, Bixolon, Citizen, Datamax, and TSC direct thermal printers.", icon: "🖨️" },
];

const specs = [
  { label: "Face Material", value: "Direct thermal paper (standard) / Synthetic (PP, PE, PET)" },
  { label: "Label Width", value: "25mm – 210mm (custom ±0.5mm)" },
  { label: "Label Length", value: "10mm – 300mm (custom)" },
  { label: "Core Inner Dia.", value: "25mm / 40mm / 76mm (custom)" },
  { label: "Labels per Roll", value: "500 – 5,000 (depending on size)" },
  { label: "Adhesive Options", value: "Permanent / Removable / High-Temp / Low-Temp / Freezer / Cryogenic" },
  { label: "Liner", value: "White glassine / Yellow glassine / PET liner" },
  { label: "Liner Release", value: "Silicone-coated (standard) / Linerless (optional)" },
  { label: "Optical Density", value: "OD ≥ 1.2 (standard) / OD ≥ 1.4 (high-density)" },
  { label: "Image Life", value: "1 year (standard) / 3 years / 5 years (enhanced)" },
  { label: "Operating Temp.", value: "Varies by adhesive grade (see application note)" },
  { label: "Perforation", value: "Available (between labels or across roll width)" },
  { label: "Color", value: "White (standard) / Yellow / Red / Blue / Custom" },
  { label: "MOQ", value: "1,000 rolls (samples: 50–100 rolls)" },
  { label: "Lead Time", value: "7–15 business days (stock sizes: 3–5 days)" },
  { label: "Payment Terms", value: "T/T 30% deposit, 70% before shipment; L/C at sight" },
];

const packagingInfo = [
  { label: "Inner Packing", value: "Polybag per roll (moisture-proof)" },
  { label: "Outer Carton", value: "5-ply corrugated carton" },
  { label: "Rolls per Carton", value: "12 / 24 / 36 rolls (depending on size)" },
  { label: "Port", value: "Shenzhen / Guangzhou / Shanghai" },
  { label: "Incoterms", value: "EXW, FOB, CIF, DDP" },
  { label: "Shipping", value: "Sea freight, Air freight, Express (DHL/FedEx/UPS)" },
];

const industries = [
  { title: "Logistics & E-Commerce", badge: "Shipping & Warehouse", items: ["Shipping labels", "Return labels", "Packing slips", "Carton barcodes", "Pallet labels"] },
  { title: "Retail & Supermarket", badge: "Pricing & Promotion", items: ["Price tags", "Shelf edge labels", "Promotional stickers", "Loyalty card labels"] },
  { title: "Food & Cold Chain", badge: "Freezer / Fresh", items: ["Frozen food labels", "Fresh produce stickers", "Deli / bakery tags", "Cold chain tracking"] },
  { title: "Healthcare & Lab", badge: "Cryogenic", items: ["Patient wristbands", "Specimen labels", "Cryogenic vial labels", "Medication labels"] },
  { title: "Manufacturing & Auto", badge: "High-Temp", items: ["Parts tracking labels", "PCB labels", "Powder-coat process tags", "QC stickers"] },
  { title: "Chemical & Hazmat", badge: "GHS / SDS", items: ["Hazard labels", "Drum labels", "Chemical inventory tags", "Outdoor asset labels"] },
];

const faqs = [
  { q: "What is the difference between permanent and removable adhesive?", a: "Permanent adhesive bonds strongly and cannot be removed cleanly, ideal for shipping and inventory labels. Removable adhesive peels off cleanly without residue, making it suitable for temporary pricing, promotions, and library use." },
  { q: "What temperature range does high-temperature adhesive support?", a: "Our standard high-temperature adhesive maintains bond strength up to 150°C continuously, with short-term resistance up to 180°C. This covers most powder-coating ovens, autoclave sterilization, and electronics reflow processes." },
  { q: "Can freezer labels be applied in cold environments?", a: "Yes. Our freezer-grade adhesive can be applied at temperatures as low as –10°C and maintains adhesion down to –40°C. For liquid nitrogen environments, we offer a specialized cryogenic adhesive grade." },
  { q: "Do you offer synthetic face materials (PP, PE, PET)?", a: "Yes. In addition to standard direct thermal paper, we offer polypropylene, polyethylene, and polyester face materials for water resistance, tear resistance, or chemical resistance." },
  { q: "What is the minimum order quantity?", a: "Our standard MOQ is 1,000 rolls. For samples or trial orders, we accept 50–100 rolls. Custom adhesive grades or materials may require higher MOQs." },
  { q: "Are your labels compatible with Zebra, Honeywell, and SATO printers?", a: "Yes. Our labels are manufactured to be compatible with all major direct thermal label printers and can be configured with the gap or notch style your printer requires." },
];

const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
  { "@type": "ListItem", position: 2, name: "Products", item: `${SITE.domain}/products` },
  { "@type": "ListItem", position: 3, name: "Thermal Labels", item: `${SITE.domain}/products/thermal-labels` },
  { "@type": "ListItem", position: 4, name: "Blank", item: `${SITE.domain}/products/thermal-labels/blank` },
]};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Blank Thermal Labels | High-Temp, Low-Temp & Removable Adhesive",
  description: metadata.description,
  brand: { "@type": "Brand", name: "Zhixin Paper" },
  manufacturer: { "@type": "Organization", name: "Zhixin Paper", url: SITE.domain },
  image: LABELS_IMG_FALLBACK,
  url: `${SITE.domain}/products/thermal-labels/blank`,
  additionalProperty: specs.map(({ label, value }) => ({ "@type": "PropertyValue", name: label, value })),
};

export const revalidate = 86400; // 24 hours: static product/market content

export default async function BlankThermalLabelsPage() {
  const heroImage = await getSlotImage("thermal-labels:blank-hero", LABELS_IMG_FALLBACK);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProductLandingPageTemplate
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "Blank Thermal Labels" }]}
        heroImage={heroImage}
        heroAlt="Blank Thermal Labels"
        heroTags={["Permanent", "Removable", "High-Temp", "Freezer / Cryo"]}
        title="Blank Thermal Labels"
        description="Factory-direct direct thermal labels engineered for demanding environments. Choose from four adhesive grades — permanent, removable, high-temperature, and low-temperature / cryogenic — to match your exact application. Available in paper and synthetic face materials with all standard and custom sizes."
        stats={[{ val: "4", unit: "Adhesive Grades" }, { val: "–196°C", unit: "to 180°C Range" }, { val: "1,000", unit: "Rolls MOQ" }]}
        accent="amber"
        trustBar={["4 Adhesive Grades Available", "–196°C to 180°C Range", "12h Quote Response", "MOQ 1,000 Rolls"]}
        topSectionTitle="Adhesive Types"
        topSectionVariant="cards"
        topSectionItems={[]}
        topSectionCards={adhesiveTypes}
        tagGroupTitle="Industry Applications"
        tagGroups={industries}
        secondarySectionTitle="Key Benefits"
        secondarySectionCards={[
          { title: "Reliable Barcode Scanning", desc: "High optical density and stable face stock support clean, consistent barcode readability.", icon: "✅" },
          { title: "Wide Material Choice", desc: "Paper and synthetic options support both everyday logistics and harsh-environment use cases.", icon: "📦" },
          { title: "BPA-Free Coating", desc: "All thermal coatings are BPA-free, with phenol-free options available for regulated markets.", icon: "🛡️" },
          { title: "Free Samples", desc: "Test adhesion, print quality, and temperature performance before you commit to bulk production.", icon: "🧪" },
        ]}
        tables={[
          { title: "Full Specifications", rows: specs, note: "* Custom specifications available. Contact us for non-standard requirements." },
          { title: "Packaging & Shipping", rows: packagingInfo },
        ]}
        sizesTitle="Popular Sizes"
        sizeLinks={labelSizes.map((size) => ({ label: size.label, href: `/products/thermal-labels/${size.slug}`, badge: size.badge }))}
        faqs={faqs}
        crossLinks={[
          { label: "Custom Printed Labels", href: "/products/thermal-labels/custom-printed" },
          { label: "Blank Thermal Rolls", href: "/products/thermal-paper-rolls/blank" },
          { label: "OEM & Private Label", href: "/oem" },
        ]}
        sidebarTitle="Get a Free Quote"
        sidebarDescription="Tell us your size, adhesive grade, quantity, and face material. We'll send a detailed quote with unit price, MOQ, and lead time."
        sampleCard={{ title: "Request Free Samples", description: "Test adhesion, print quality, and temperature performance before committing to a bulk order. Samples in 3–5 business days.", href: "/contact", label: "Request Samples" }}
        sidebarMetrics={[
          { icon: Package, label: "MOQ", val: "1,000 rolls" },
          { icon: Clock, label: "Lead Time", val: "7–15 days" },
          { icon: Truck, label: "Incoterms", val: "EXW / FOB / CIF" },
          { icon: ShieldCheck, label: "Payment", val: "T/T · L/C" },
        ]}
        sidebarListCard={{ title: "Adhesive Grade Quick Guide", items: ["Permanent — –20°C to 80°C", "Removable — –10°C to 60°C", "High-Temp — Up to 180°C", "Freezer / Cryo — –196°C to 40°C"] }}
      />
    </>
  );
}
