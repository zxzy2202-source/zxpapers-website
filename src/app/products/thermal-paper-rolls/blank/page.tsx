import type { Metadata } from "next";
import { Clock, Package, ShieldCheck, Truck } from "lucide-react";
import { paperRollSizes } from "@/config/navigation";
import { SITE } from "@/config/siteData";
import { getSlotImage } from "@/lib/imageSlotUtils";
import ProductLandingPageTemplate from "@/components/products/ProductLandingPageTemplate";

export const metadata: Metadata = {
  title: "Blank Thermal Paper Rolls | BPA-Free POS",
  description: "Factory-direct blank thermal paper rolls. BPA-free, ISO 9001 certified, FSC certified. MOQ 1,000 rolls. 57mm, 80mm and custom sizes. 7–15 day lead time.",
  alternates: { canonical: `${SITE.domain}/products/thermal-paper-rolls/blank` },
};

const ROLLS_IMG_FALLBACK = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-rolls-RQBrphmgzbAMk7eq3HsvNq.webp";

const specs = [
  { label: "Paper Width", value: "57mm / 80mm / Custom (±0.5mm)" },
  { label: "Roll Diameter", value: "40mm – 100mm (custom available)" },
  { label: "Core Inner Dia.", value: "12mm / 25mm / Custom" },
  { label: "Paper Weight", value: "48 g/m² / 55 g/m² / 65 g/m² / 80 g/m²" },
  { label: "Coating Type", value: "BPA-Free (Phenol-Free available) / Standard" },
  { label: "Thermal Side", value: "Single-sided (standard) / Double-sided (optional)" },
  { label: "Image Life", value: "3 years (standard) / 7 years / 10 years (archival)" },
  { label: "Operating Temp.", value: "-10°C to 70°C" },
  { label: "Humidity Range", value: "20% – 85% RH" },
  { label: "Color", value: "White (standard) / Colored base (custom)" },
  { label: "MOQ", value: "1,000 rolls (samples: 50–100 rolls)" },
  { label: "Lead Time", value: "7–15 business days (stock sizes: 3–5 days)" },
  { label: "Sample Lead Time", value: "3–5 business days" },
  { label: "Payment Terms", value: "T/T 30% deposit, 70% before shipment; L/C at sight" },
];

const packagingInfo = [
  { label: "Inner Packing", value: "Polybag per roll (moisture-proof)" },
  { label: "Outer Carton", value: "5-ply corrugated carton" },
  { label: "Rolls per Carton", value: "50 / 100 / 200 rolls (depending on size)" },
  { label: "Pallet", value: "Standard wooden pallet, 80×120cm or custom" },
  { label: "Cartons / Pallet", value: "20–40 cartons (depending on roll size)" },
  { label: "Port", value: "Shenzhen / Guangzhou / Shanghai" },
  { label: "Incoterms", value: "EXW, FOB, CIF, DDP" },
  { label: "Shipping Methods", value: "Sea freight, Air freight, Express (DHL/FedEx/UPS)" },
];

const certifications = [
  { title: "ISO 9001:2015", desc: "Quality management system certified. Every production batch undergoes incoming material inspection, in-process QC, and final outgoing inspection." },
  { title: "FSC Certified", desc: "Forest Stewardship Council certified paper sourcing. Suitable for buyers requiring sustainable supply chain documentation." },
  { title: "BPA-Free", desc: "All standard products use BPA-free thermal coating. Phenol-free (BPS-free) formulation available for EU and California markets." },
  { title: "RoHS / REACH", desc: "Compliant with EU RoHS and REACH regulations. Full material declaration available upon request." },
  { title: "FDA Compliant", desc: "Paper and coating materials comply with FDA 21 CFR requirements for incidental food contact." },
];

const faqs = [
  { q: "What is the minimum order quantity?", a: "Our standard MOQ is 1,000 rolls. For samples or trial orders, we accept 50–100 rolls. Please contact us to discuss your specific requirements." },
  { q: "Can you produce custom widths and lengths?", a: "Yes. We can manufacture any width from 25mm to 210mm, any roll length, and any core size. Custom specifications typically require 10–15 business days." },
  { q: "Do you offer BPA-free and phenol-free options?", a: "Yes. We offer standard BPA-free coating and fully phenol-free (BPS-free) coating for the EU, California, and other regulated markets." },
  { q: "How do you ensure consistent print quality?", a: "Each production batch is tested for sensitivity, image density, and image life using calibrated thermal test equipment. We maintain ±2% tolerance on all roll dimensions." },
  { q: "What payment terms do you accept?", a: "We accept T/T (30% deposit, 70% before shipment), L/C at sight, and PayPal for sample orders." },
  { q: "Can you provide private label packaging?", a: "Yes. We offer full OEM/private label service including custom carton printing, polybag printing, and branded core labels. MOQ for private label is 5,000 rolls." },
];

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Blank Thermal Paper Rolls | BPA-Free POS Receipt Paper Manufacturer",
  description: metadata.description,
  brand: { "@type": "Brand", name: "Zhixin Paper" },
  manufacturer: { "@type": "Organization", name: "Zhixin Paper", url: SITE.domain },
  image: ROLLS_IMG_FALLBACK,
  url: `${SITE.domain}/products/thermal-paper-rolls/blank`,
  additionalProperty: specs.map(({ label, value }) => ({ "@type": "PropertyValue", name: label, value })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
    { "@type": "ListItem", position: 2, name: "Products", item: `${SITE.domain}/products` },
    { "@type": "ListItem", position: 3, name: "Thermal Paper Rolls", item: `${SITE.domain}/products/thermal-paper-rolls` },
    { "@type": "ListItem", position: 4, name: "Blank", item: `${SITE.domain}/products/thermal-paper-rolls/blank` },
  ],
};

export default async function BlankThermalRollsPage() {
  const heroImage = await getSlotImage("thermal-paper-rolls:blank-hero", ROLLS_IMG_FALLBACK);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProductLandingPageTemplate
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Blank Thermal Paper Rolls" },
        ]}
        heroImage={heroImage}
        heroAlt="Blank Thermal Paper Rolls"
        heroTags={["BPA-Free", "ISO 9001", "FSC Certified", "Phenol-Free Available"]}
        title="Blank Thermal Paper Rolls"
        description="Factory-direct blank thermal paper rolls for POS systems, ATMs, kiosks, and receipt printers worldwide. High-sensitivity coating, consistent roll dimensions, and BPA-free formula. Available in all standard sizes and fully custom specifications — with OEM private label packaging."
        stats={[{ val: "1,000", unit: "Rolls MOQ" }, { val: "7–15", unit: "Day Lead Time" }, { val: "80+", unit: "Countries Served" }]}
        accent="blue"
        trustBar={["ISO 9001 Certified Factory Since 2009", "12h Quote Response", "Ships to 80+ Countries", "MOQ 1,000 Rolls"]}
        topSectionTitle="Why Buyers Choose Us"
        topSectionItems={[
          "High-sensitivity coating — sharp, clear prints every time",
          "BPA-free & phenol-free options for regulated markets (EU, CA)",
          "3 / 7 / 10-year image life grades available",
          "Consistent ±0.5mm width tolerance, ±2% roll length tolerance",
          "Compatible with Epson, Star, Bixolon, Citizen, and all major brands",
          "FSC-certified paper — supports your sustainability reporting",
          "Free pre-production sample before bulk order",
          "Private label & OEM packaging available from 5,000 rolls",
        ]}
        secondarySectionTitle="Quality & Compliance"
        secondarySectionCards={certifications}
        tables={[
          { title: "Full Specifications", rows: specs, note: "* Custom specifications available. Contact us for non-standard requirements." },
          { title: "Packaging & Shipping", rows: packagingInfo },
        ]}
        sizesTitle="Popular Sizes"
        sizeLinks={paperRollSizes.map((size) => ({ label: size.label, href: `/products/thermal-rolls/${size.slug}`, badge: size.badge }))}
        faqs={faqs}
        crossLinks={[
          { label: "OEM & Private Label Services", href: "/oem" },
          { label: "Custom Printed Rolls", href: "/products/thermal-paper-rolls/custom-printed" },
          { label: "Blank Thermal Labels", href: "/products/thermal-labels/blank" },
        ]}
        sidebarTitle="Get a Free Quote"
        sidebarDescription="Tell us your size, quantity, and coating requirements. We'll send a detailed quote with unit price, MOQ, and lead time."
        sampleCard={{ title: "Request Free Samples", description: "Get physical samples in 3–5 business days. Test print quality and image life before committing to a bulk order.", href: "/contact", label: "Request Samples" }}
        sidebarMetrics={[
          { icon: Package, label: "MOQ", val: "1,000 rolls" },
          { icon: Clock, label: "Lead Time", val: "7–15 days" },
          { icon: Truck, label: "Incoterms", val: "EXW / FOB / CIF" },
          { icon: ShieldCheck, label: "Payment", val: "T/T · L/C" },
        ]}
        sidebarListCard={{ title: "Applications", items: ["POS Receipt Printers", "ATM Machines", "Parking Ticket Systems", "Restaurant Order Printers", "Retail Checkout", "Fuel Dispensers"] }}
      />
    </>
  );
}
