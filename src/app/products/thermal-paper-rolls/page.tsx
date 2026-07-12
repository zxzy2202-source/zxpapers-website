import type { Metadata } from "next";
import { getSlotImages } from "@/lib/imageSlotUtils";
import { r2Image } from "@/lib/r2";
import { paperRollSizes } from "@/config/navigation";
import { SITE } from "@/config/siteData";
import ThermalPaperRollsCatalogPage from "@/components/products/ThermalPaperRollsCatalogPage";
import type { ThermalRollSizeItem } from "@/components/products/ThermalPaperRollsCatalogPage";

const ROLLS_IMG_FB = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-rolls-RQBrphmgzbAMk7eq3HsvNq.webp";

export const metadata: Metadata = {
  title: "Thermal Paper Rolls Manufacturer | POS, ATM & Till Rolls",
  description:
    "Factory-direct thermal paper rolls for POS, ATM, kiosk, and till applications. Browse blank or custom printed BPA-free rolls in 57mm, 80mm, and custom widths.",
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
  {
    q: "What thermal paper roll sizes do you manufacture?",
    a: "We produce 80 x 80mm, 57 x 50mm, 57 x 40mm, 57 x 30mm, 80 x 70mm, and 110 x 80mm rolls plus custom widths to +/- 0.5mm tolerance, with 12mm, 18mm, and 25mm core options.",
  },
  {
    q: "Are your thermal rolls BPA-free?",
    a: "Yes. BPA-free is our standard coating, with a phenol-free and BPS-free option available for food-contact, healthcare, and regulated markets.",
  },
  {
    q: "Do you offer blank and custom printed rolls?",
    a: "Yes. Blank rolls ship from stock for POS and receipt printers. Custom printed rolls can carry logos, promotions, QR codes, bilingual receipt layouts, and private-label packaging.",
  },
  {
    q: "What is the minimum order quantity and lead time?",
    a: "Stock sizes are available from low volume, while custom printing typically starts at 5,000 rolls. Stock items normally ship in 3 to 7 days and custom production normally takes 10 to 18 days after artwork approval.",
  },
  {
    q: "Which printers are your rolls compatible with?",
    a: "Our rolls fit major POS, mobile, ATM, kiosk, and till printer brands. Send the printer model or an existing roll sample and we will confirm width, diameter, core, and meterage before production.",
  },
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
  ...variants,
  ...paperRollSizes.map((size) => ({ name: `${size.label} Thermal Paper Roll`, path: `/products/thermal-rolls/${size.slug}` })),
];

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Thermal Paper Rolls",
  description:
    "Factory-direct thermal paper rolls for POS, ATM, kiosk, and till applications in blank, custom printed, BPA-free, 57mm, 80mm, and custom formats.",
  url: `${SITE.domain}/products/thermal-paper-rolls`,
  isPartOf: { "@id": `${SITE.domain}/#website` },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: catalogEntries.length,
    itemListElement: catalogEntries.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      url: `${SITE.domain}${entry.path}`,
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

const sizeBestFor: Record<string, string> = {
  "80x80mm": "Retail, restaurants, supermarkets, and high-volume POS",
  "57x50mm": "Mobile POS, taxi meters, and portable receipt printers",
  "80x70mm": "European retail, hospitality, and standard POS systems",
  "110x80mm": "Wide-format receipts, kiosks, and itemized billing",
  "57x40mm": "Handheld payment terminals and compact mobile printers",
  "57x30mm": "Credit-card terminals and ultra-compact payment devices",
};

export default async function ThermalPaperRollsPage() {
  const images = await getSlotImages([
    { slot: "products:thermal-rolls", fallback: ROLLS_IMG_FB },
    { slot: "thermal-rolls:hero", fallback: ROLLS_IMG_FB },
  ]);

  const sizes: ThermalRollSizeItem[] = paperRollSizes.map((size) => ({
    slug: size.slug,
    label: size.label,
    href: `/products/thermal-rolls/${size.slug}`,
    markets: size.markets,
    badge: size.badge,
    bestFor: sizeBestFor[size.slug] || "POS, receipt, kiosk, and thermal printer applications",
  }));

  const whatsappHref = `${SITE.whatsappUrl}?text=${encodeURIComponent(
    "Hello, I need pricing for thermal paper rolls. I can send the width, diameter, core, quantity, and printer model.",
  )}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ThermalPaperRollsCatalogPage
        heroImage={r2Image(images["thermal-rolls:hero"])}
        productImage={r2Image(images["products:thermal-rolls"])}
        whatsappHref={whatsappHref}
        sizes={sizes}
        faqs={faqs}
      />
    </>
  );
}
