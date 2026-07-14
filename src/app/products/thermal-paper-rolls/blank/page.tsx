import type { Metadata } from "next";
import BlankThermalRollsCatalogPage from "@/components/products/BlankThermalRollsCatalogPage";
import { paperRollSizes } from "@/config/navigation";
import { SITE } from "@/config/siteData";
import { getSlotImage } from "@/lib/imageSlotUtils";

export const metadata: Metadata = {
  title: "Blank Thermal Paper Rolls | BPA-Free POS",
  description: "Factory-direct blank thermal paper rolls. BPA-free, ISO 9001 and FSC support. MOQ 1,000 rolls. Standard 57mm, 80mm and custom sizes with export packing.",
  keywords: "blank thermal paper rolls, BPA-free receipt paper, POS paper rolls, 57mm thermal rolls, 80mm thermal rolls, wholesale thermal paper",
  alternates: { canonical: `${SITE.domain}/products/thermal-paper-rolls/blank` },
};

const ROLLS_IMG_FALLBACK = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-rolls-RQBrphmgzbAMk7eq3HsvNq.webp";

const specs = [
  { label: "Paper Width", value: "57mm / 80mm / Custom (±0.5mm)" },
  { label: "Roll Diameter", value: "40mm–100mm; custom available" },
  { label: "Core Inner Diameter", value: "12mm / 25mm / Custom" },
  { label: "Paper Weight", value: "48 / 55 / 65 / 80 gsm" },
  { label: "Coating Type", value: "BPA-free standard; phenol-free available" },
  { label: "Thermal Side", value: "Single-sided standard; double-sided optional" },
  { label: "Image Life", value: "3 years standard; 7-year and 10-year grades" },
  { label: "Operating Temperature", value: "-10°C to 70°C" },
  { label: "Humidity Range", value: "20%–85% RH" },
  { label: "Color", value: "White standard; colored base available" },
  { label: "MOQ", value: "1,000 rolls; trial quantities reviewed separately" },
  { label: "Lead Time", value: "7–15 business days; stock sizes 3–5 days" },
  { label: "Sample Lead Time", value: "3–5 business days" },
  { label: "Payment Terms", value: "T/T 30% deposit, balance before shipment; L/C at sight" },
];

const packagingInfo = [
  { label: "Inner Packing", value: "Moisture-resistant polybag per roll" },
  { label: "Outer Carton", value: "5-ply corrugated export carton" },
  { label: "Rolls per Carton", value: "50 / 100 / 200 rolls depending on size" },
  { label: "Pallet", value: "Standard wooden pallet, 80 × 120cm, or custom" },
  { label: "Cartons per Pallet", value: "20–40 cartons depending on roll size" },
  { label: "Export Ports", value: "Shenzhen / Guangzhou / Shanghai" },
  { label: "Incoterms", value: "EXW / FOB / CIF / DDP" },
  { label: "Shipping Methods", value: "Sea freight, air freight, or express courier" },
];

const certifications = [
  { title: "ISO 9001:2015", desc: "Quality-management documentation with incoming-material, in-process, and outgoing inspection controls." },
  { title: "FSC Support", desc: "FSC-certified paper sourcing is available for programs requiring responsible-sourcing documentation." },
  { title: "BPA-Free Standard", desc: "Standard products use BPA-free thermal coating. Phenol-free grades are available for regulated markets." },
  { title: "RoHS / REACH Documentation", desc: "Material declarations and supporting documents are available according to the confirmed product grade." },
];

const faqs = [
  { q: "What is the minimum order quantity?", a: "The standard MOQ is 1,000 rolls. Trial quantities depend on the requested size, coating, and available stock, so send the specification for confirmation." },
  { q: "Can you produce custom widths and lengths?", a: "Yes. Width, roll length, diameter, and core size can be adjusted to the printer specification. Custom production normally requires 7 to 15 business days after confirmation." },
  { q: "Do you offer BPA-free and phenol-free options?", a: "Yes. BPA-free is the standard coating. Phenol-free grades are available for buyers with EU, California, food-service, healthcare, or internal compliance requirements." },
  { q: "How do you ensure consistent print quality?", a: "Production batches are checked for thermal sensitivity, image density, dimensions, winding, and image stability using the agreed specification and approved sample." },
  { q: "What payment terms do you accept?", a: "Standard terms are T/T with a 30% deposit and balance before shipment. L/C at sight can be reviewed for qualifying orders." },
  { q: "Can you provide private-label packaging?", a: "Yes. Custom cartons, polybags, core labels, and distributor packaging are available. Private-label MOQ depends on the printing and packing configuration." },
];

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Blank Thermal Paper Rolls",
  description: metadata.description,
  brand: { "@type": "Brand", name: "ZhixinPaper" },
  manufacturer: { "@type": "Organization", name: "ZhixinPaper", url: SITE.domain },
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
    { "@type": "ListItem", position: 4, name: "Blank Thermal Paper Rolls", item: `${SITE.domain}/products/thermal-paper-rolls/blank` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

export default async function BlankThermalRollsPage() {
  const heroImage = await getSlotImage("thermal-paper-rolls:blank-hero", ROLLS_IMG_FALLBACK);
  const whatsappHref = `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I need a quote for blank thermal paper rolls. I can send the printer model, size, quantity, coating requirement, and destination.")}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BlankThermalRollsCatalogPage
        heroImage={heroImage}
        whatsappHref={whatsappHref}
        specs={specs}
        packagingInfo={packagingInfo}
        certifications={certifications}
        sizes={paperRollSizes.map((size) => ({ label: size.label, href: `/products/thermal-rolls/${size.slug}`, badge: size.badge, markets: size.markets }))}
        faqs={faqs}
      />
    </>
  );
}
