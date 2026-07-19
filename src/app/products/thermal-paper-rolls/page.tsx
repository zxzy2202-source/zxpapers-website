import type { Metadata } from "next";
import { getSlotImages } from "@/lib/imageSlotUtils";
import { r2Image } from "@/lib/r2";
import { paperRollSizes } from "@/config/navigation";
import { SITE } from "@/config/siteData";
import ThermalPaperRollsCatalogPage from "@/components/products/ThermalPaperRollsCatalogPage";
import type { ThermalRollSizeItem } from "@/components/products/ThermalPaperRollsCatalogPage";

const ROLLS_IMG_FB = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-rolls-RQBrphmgzbAMk7eq3HsvNq.webp";

export const metadata: Metadata = {
  title: { absolute: "OEM Thermal Paper Rolls Manufacturer | ZhixinPaper" },
  description:
    "Source OEM and wholesale thermal paper rolls for distributor, private-label and custom printed programs. Confirm size, grade, packing and samples before production.",
  keywords:
    "thermal paper rolls manufacturer, OEM thermal paper rolls, private label receipt rolls, wholesale thermal paper rolls, custom printed thermal rolls, distributor thermal paper supply, POS receipt paper rolls",
  alternates: { canonical: `${SITE.domain}/products/thermal-paper-rolls` },
  openGraph: {
    type: "website",
    title: "OEM Thermal Paper Rolls Manufacturer | ZhixinPaper",
    description:
      "Source OEM and wholesale thermal paper rolls for distributor, private-label and custom printed programs. Confirm size, grade, packing and samples before production.",
    url: `${SITE.domain}/products/thermal-paper-rolls`,
    images: [
      {
        url: ROLLS_IMG_FB,
        alt: "Thermal paper rolls for OEM, private-label and wholesale supply",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OEM Thermal Paper Rolls Manufacturer | ZhixinPaper",
    description:
      "Source OEM and wholesale thermal paper rolls for distributor, private-label and custom printed programs. Confirm size, grade, packing and samples before production.",
    images: [ROLLS_IMG_FB],
  },
};

const variants = [
  { name: "Blank Thermal Paper Rolls", path: "/products/thermal-paper-rolls/blank" },
  { name: "Custom Printed Thermal Paper Rolls", path: "/products/thermal-paper-rolls/custom-printed" },
  { name: "POS Receipt Paper Rolls", path: "/products/receipt-paper-rolls" },
  { name: "Phenol-Free Thermal Paper", path: "/products/phenol-free-thermal-paper" },
];

const faqs = [
  {
    q: "How do you choose the right thermal paper roll size?",
    a: "Choose by the printer model and complete media specification, not width alone. Confirm the width, outer diameter or required length, core, paper grade, winding direction and any sensor-mark requirement before ordering.",
  },
  {
    q: "What information is needed for custom printed thermal paper rolls?",
    a: "A custom-print review needs the roll specification, printer model, print side, artwork, colors, repeat, live-print area, language, quantity, packing, destination and any QR, barcode or sensor-mark requirement. MOQ and timing are confirmed after review.",
  },
  {
    q: "Why is sample testing important for terminal paper?",
    a: "Two rolls with the same width can differ in outer diameter, core, winding, paper thickness and feeding behavior. A sample test can confirm loading, feeding, printing, cutting and scanning on the buyer's actual terminal.",
  },
  {
    q: "Can thermal paper rolls use private-label or neutral packing?",
    a: "Private-label, distributor and neutral packing can be reviewed against the roll size, pack quantity, sales channel, labels, destination and shipment configuration. The final packing specification is confirmed before production.",
  },
  {
    q: "Is BPA-free thermal paper the same as phenol-free paper?",
    a: "No. BPA-free addresses BPA, while BPS-free and phenol-free are separate claims. Confirm the exact paper, tested substances, report date, product scope and verification method required for the target market.",
  },
  {
    q: "What documents should an OEM buyer request?",
    a: "Ask for the document name, issuer, report or certificate number, tested product or material, tested substances, issue and expiry dates, batch relationship and verification method. A generic logo or unrelated report is not sufficient.",
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
  name: "Thermal Paper Rolls for OEM, Private Label and Wholesale Supply",
  description:
    "A product-line gateway for blank, private-label and custom printed thermal paper roll programs, organized by buying task, roll specification, approval route and packing requirement.",
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
  "80x80mm": "Retail, restaurants, supermarkets and high-volume POS",
  "57x50mm": "Mobile POS, taxi meters and portable receipt printers",
  "80x70mm": "Retail, hospitality and standard POS systems",
  "110x80mm": "Wide-format receipts, kiosks and itemized billing",
  "57x40mm": "Handheld payment terminals and compact mobile printers",
  "57x30mm": "Card terminals and ultra-compact payment devices",
};

export const revalidate = 3600; // 1 hour: slot images change infrequently

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
    bestFor: sizeBestFor[size.slug] || "POS, receipt, kiosk and thermal printer applications",
  }));

  const whatsappHref = `${SITE.whatsappUrl}?text=${encodeURIComponent(
    "Hello, I need an OEM thermal paper roll review. I can send the printer, roll specification, quantity, packing and destination.",
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
