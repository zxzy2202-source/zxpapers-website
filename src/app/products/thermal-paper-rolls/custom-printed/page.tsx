import type { Metadata } from "next";
import CustomPrintedThermalRollsCatalogPage from "@/components/products/CustomPrintedThermalRollsCatalogPage";
import { paperRollSizes } from "@/config/navigation";
import { SITE } from "@/config/siteData";
import { getSlotImage, getSlotImages } from "@/lib/imageSlotUtils";
import { r2Image } from "@/lib/r2";

export const metadata: Metadata = {
  title: "Custom Printed Thermal Rolls | OEM Branding",
  description: "Custom printed thermal paper rolls with logos, promotions, QR codes and multilingual layouts. Factory-direct OEM production, digital proof, BPA-free grades and export packing.",
  keywords: "custom printed thermal paper rolls, branded receipt paper, thermal paper rolls with logo, private label thermal rolls, QR code receipt rolls, OEM thermal paper printing",
  alternates: { canonical: `${SITE.domain}/products/thermal-paper-rolls/custom-printed` },
};

const ROLLS_IMG_FALLBACK = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-rolls-RQBrphmgzbAMk7eq3HsvNq.webp";
const LABELS_IMG_FALLBACK = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-labels-FgJ5U8LZDHPF5nwmD6Uqa5.webp";
const FACTORY_IMG_FALLBACK = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/oem-factory-EHdu8eZwwzSo5DxSRyzQdF.webp";

const printingSpecs = [
  { label: "Print Method", value: "Flexographic printing, up to 4 colors" },
  { label: "Print Side", value: "Thermal side / Reverse side / Both sides" },
  { label: "Color Matching", value: "Pantone / CMYK / RAL; approved proof controls final color" },
  { label: "Print Area", value: "Full width or partial custom layout" },
  { label: "Repeat Pattern", value: "Every receipt or a confirmed repeat interval" },
  { label: "Variable Data", value: "Static artwork standard; variable QR or barcode reviewed separately" },
  { label: "Ink Type", value: "Water-based or UV-cured according to application" },
  { label: "Artwork Format", value: "AI / PDF / EPS / CDR; vector artwork preferred" },
  { label: "Proof", value: "Digital proof before production; physical sample available" },
];

const productSpecs = [
  { label: "Paper Width", value: "57mm / 80mm / Custom (±0.5mm)" },
  { label: "Roll Diameter", value: "40mm–100mm; custom available" },
  { label: "Core Inner Diameter", value: "12mm / 25mm / Custom" },
  { label: "Paper Weight", value: "48 / 55 / 65 / 80 gsm" },
  { label: "Coating", value: "BPA-free standard; phenol-free available" },
  { label: "Image Life", value: "3-year standard; 7-year and 10-year grades" },
  { label: "MOQ", value: "From 1,000 rolls; private-label packing depends on configuration" },
  { label: "Lead Time", value: "10–18 business days after proof approval" },
  { label: "Sample Lead Time", value: "5–7 business days when a physical sample is required" },
  { label: "Payment Terms", value: "T/T 30% deposit, balance before shipment; L/C at sight" },
];

const packagingInfo = [
  { label: "Inner Packing", value: "Moisture-resistant polybag; custom print available" },
  { label: "Outer Carton", value: "5-ply corrugated export carton; custom print available" },
  { label: "Rolls per Carton", value: "50 / 100 / 200 rolls depending on size" },
  { label: "Export Ports", value: "Shenzhen / Guangzhou / Shanghai" },
  { label: "Incoterms", value: "EXW / FOB / CIF / DDP" },
  { label: "Shipping", value: "Sea freight, air freight, or express courier" },
];

const printingOptions = [
  { title: "Logo & Brand Colors", desc: "Place the company logo, tagline, contact details, and approved brand colors on each receipt." },
  { title: "Promotion & Coupon", desc: "Add discount codes, campaigns, social channels, website URLs, or calls to action." },
  { title: "QR Code & Barcode", desc: "Use static QR codes for loyalty, survey, digital receipt, payment, or authentication workflows." },
  { title: "Security & Numbering", desc: "Review serial numbers, void patterns, watermarks, or specialist security features by application." },
  { title: "Multilingual & Compliance", desc: "Combine multiple languages, legal text, terms, or market-specific receipt information." },
  { title: "Reverse-Side Printing", desc: "Use the back of the receipt for advertising, instructions, policies, or distributor branding." },
];

const orderSteps = [
  { step: "01", title: "Submit the brief", desc: "Send size, quantity, print side, colors, repeat pattern, destination, and available artwork." },
  { step: "02", title: "Review feasibility", desc: "We check printable area, artwork quality, paper grade, ink system, and packing requirements." },
  { step: "03", title: "Approve the proof", desc: "Review the digital layout, copy, colors, repeat, and roll orientation before production." },
  { step: "04", title: "Produce and inspect", desc: "Printing, slitting, winding, dimensions, artwork registration, and packing are checked." },
  { step: "05", title: "Pack and ship", desc: "The order is packed under the confirmed carton, pallet, label, and export terms." },
];

const regionalApplications = [
  { title: "Europe & Italy", badge: "EU resale and receipt marketing", items: ["Logo, coupon, QR, and reverse-side advertising", "Italian or multilingual layouts", "BPA-free and phenol-free grade review"] },
  { title: "Africa", badge: "Retail, fuel, mobile money", items: ["Payment-confirmation and branded receipts", "Fuel-station and retailer identification", "Distributor and private-label packaging"] },
  { title: "Middle East", badge: "Retail, hospitality, bilingual", items: ["Arabic and English receipt layouts", "QR and tax-information placement", "Hotel, restaurant, and retail branding"] },
  { title: "Southeast Asia", badge: "QR payment and convenience retail", items: ["Payment QR and loyalty campaigns", "Convenience-store chain branding", "Local-language and English layouts"] },
];

const faqs = [
  { q: "What is the minimum order for custom printed rolls?", a: "Custom printed production normally starts from 1,000 rolls. MOQ can change with size, colors, ink, variable data, and private-label packing." },
  { q: "Do you provide a design proof before production?", a: "Yes. A digital proof is supplied for layout approval before production. A physical printed sample can be arranged when color, material, or print testing is required." },
  { q: "What file formats do you accept for artwork?", a: "AI, PDF, EPS, and CDR files are accepted. Vector artwork with outlined fonts and referenced Pantone or CMYK colors gives the most reliable result." },
  { q: "Can you match our exact brand colors?", a: "Pantone, CMYK, and RAL references can be reviewed. Final color is controlled through the approved proof or physical sample and the selected paper and ink system." },
  { q: "How long does production take?", a: "Custom printed orders normally take 10 to 18 business days after artwork and specification approval. Complex sampling or packing can extend the schedule." },
  { q: "Can I order custom packaging as well?", a: "Yes. Custom cartons, polybags, core labels, and distributor packaging are available. MOQ depends on the printing and packing configuration." },
  { q: "Do you support multilingual receipt printing?", a: "Yes. Italian, Arabic, English, French, and other multilingual layouts can be reviewed as part of the artwork proof process." },
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

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
  { "@type": "ListItem", position: 2, name: "Products", item: `${SITE.domain}/products` },
  { "@type": "ListItem", position: 3, name: "Thermal Paper Rolls", item: `${SITE.domain}/products/thermal-paper-rolls` },
  { "@type": "ListItem", position: 4, name: "Custom Printed Thermal Rolls", item: `${SITE.domain}/products/thermal-paper-rolls/custom-printed` },
] };

export default async function CustomPrintedRollsPage() {
  const heroImage = await getSlotImage("thermal-paper-rolls:custom-hero", ROLLS_IMG_FALLBACK);
  const images = await getSlotImages([
    { slot: "products:thermal-rolls", fallback: ROLLS_IMG_FALLBACK },
    { slot: "products:thermal-labels", fallback: LABELS_IMG_FALLBACK },
    { slot: "products:hero", fallback: FACTORY_IMG_FALLBACK },
  ]);
  const whatsappHref = `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I need a quote for custom printed thermal paper rolls. I can send the size, quantity, colors, print side, artwork, and destination.")}`;

  const relatedProducts = [
    { title: "Blank Thermal Paper Rolls", description: "Choose unprinted stock when standard sizes, flexible downstream use, and faster dispatch matter most.", href: "/products/thermal-paper-rolls/blank", image: r2Image(images["products:thermal-rolls"]), imageAlt: "Blank thermal paper rolls for stock supply", badge: "Closest alternative" },
    { title: "Custom Printed Thermal Labels", description: "Move to adhesive labels when the printed item must identify cartons, parcels, products, or inventory.", href: "/products/thermal-labels/custom-printed", image: r2Image(images["products:thermal-labels"]), imageAlt: "Custom printed thermal label rolls", badge: "Adjacent print format" },
    { title: "OEM & Private Label Services", description: "Use the wider OEM program for branded cartons, polybags, core labels, artwork support, and resale packaging.", href: "/oem", image: r2Image(images["products:hero"]), imageAlt: "ZhixinPaper factory production for OEM paper and label programs", badge: "Next procurement step" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <CustomPrintedThermalRollsCatalogPage
        heroImage={heroImage}
        whatsappHref={whatsappHref}
        printingOptions={printingOptions}
        orderSteps={orderSteps}
        printingSpecs={printingSpecs}
        productSpecs={productSpecs}
        packagingInfo={packagingInfo}
        regionalApplications={regionalApplications}
        sizes={paperRollSizes.map((size) => ({ label: size.label, href: `/products/thermal-rolls/${size.slug}`, badge: size.badge, markets: size.markets }))}
        relatedProducts={relatedProducts}
        faqs={faqs}
      />
    </>
  );
}
