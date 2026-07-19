import type { Metadata } from "next";
import NcrFormsCatalogPage from "@/components/products/NcrFormsCatalogPage";
import { SITE } from "@/config/siteData";
import { getSlotImages } from "@/lib/imageSlotUtils";
import { ncrApplicationPages } from "../ncr-applications-data";
import { ncrFormParts } from "./ncr-forms-data";

const NCR_HERO_IMAGE = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&q=82";
const NCR_OVERVIEW_IMAGE = "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1000&q=82";
const NCR_BOOKS_IMAGE = "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1000&q=82";
const NCR_CONTINUOUS_IMAGE = "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=1000&q=82";
const NCR_DELIVERY_IMAGE = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1000&q=82";
const NCR_PRODUCTION_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/oem-factory-EHdu8eZwwzSo5DxSRyzQdF.webp";

const applicationFallbacks = {
  "government-ncr-forms": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=80",
  "port-customs-air-cargo-ncr-forms": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=900&q=80",
  "field-service-ncr-forms": "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900&q=80",
  "auto-repair-ncr-forms": "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=900&q=80",
  "logistics-warehouse-ncr-forms": "https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&q=80",
  "medical-pharmacy-ncr-forms": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80",
} as const;

export const metadata: Metadata = {
  title: "NCR Forms & Carbonless Paper Manufacturer | Custom Printed",
  description: "Wholesale NCR forms and carbonless paper for distributors and printers, including 2-part to 5+ part sets, books, numbering and private-label packing.",
  keywords: "wholesale NCR forms, NCR forms manufacturer, carbonless paper supplier, NCR paper for printers, custom NCR forms, 2-part forms, 3-part forms, 4-part forms, NCR receipt books, invoice books, delivery note forms, continuous computer forms",
  alternates: { canonical: `${SITE.domain}/products/ncr-forms` },
  openGraph: {
    title: "Custom NCR Forms & Carbonless Business Forms",
    description: "Wholesale carbonless paper and finished NCR forms for distributors, commercial printers, and repeat supply programs.",
    url: `${SITE.domain}/products/ncr-forms`,
    type: "website",
    images: [{ url: NCR_HERO_IMAGE, alt: "Custom NCR forms and carbonless business documents" }],
  },
};

const faqs = [
  {
    q: "What are NCR forms?",
    a: "NCR forms are carbonless multi-copy forms. Writing or impact printing on the coated top sheet transfers the same information to the sheets below, so several parties receive matching copies without separate carbon paper.",
  },
  {
    q: "How many parts should an NCR form have?",
    a: "Use 2-part forms when 2 parties need copies, 3-part forms for customer, accounts, and operations, and 4-part or multi-part forms when carriers, warehouses, agencies, or archives also need records. The correct part count follows the copy-distribution workflow.",
  },
  {
    q: "What do CB, CFB, and CF mean in carbonless paper?",
    a: "CB means Coated Back and is normally the top sheet. CFB means Coated Front and Back and is used for middle sheets. CF means Coated Front and is the final receiving sheet at the bottom of the set.",
  },
  {
    q: "Which NCR form formats can you manufacture?",
    a: "ZhixinPaper manufactures loose collated sets, glued pads, numbered receipt books, invoice books, delivery notes, waybills, wraparound service books, and sprocket-fed continuous computer forms.",
  },
  {
    q: "Can NCR forms include custom fields, logos, and numbering?",
    a: "Yes. Forms can include custom tables, logos, brand colors, sequential numbering, barcodes, QR codes, multilingual text, copy labels, perforation, and custom binding or packing.",
  },
  {
    q: "What information is needed for an NCR form quotation?",
    a: "Send the document use, number of parts, copy roles, size, finished format, quantity, artwork, print colors, numbering range, perforation or binding, packing request, and destination country.",
  },
  {
    q: "What is the MOQ and lead time for custom NCR forms?",
    a: "MOQ depends on size, print colors, numbering, and finishing. Custom printed orders commonly start around 5,000 sets, while some simple formats can start lower. Standard production is usually 10 to 18 business days after proof approval.",
  },
  {
    q: "Do you provide a proof or sample before production?",
    a: "Yes. A digital proof confirms the layout, copy sequence, colors, numbering, perforation, and binding. A physical sample can be arranged when copy clarity, material, or finishing must be tested before mass production.",
  },
  {
    q: "Can distributors order private-label packing or plain NCR paper?",
    a: "Yes. Distributors can request private-label cartons, packing labels, repeat-order SKU references, and export carton data. Commercial printers can request plain CB, CFB, and CF carbonless paper in sheets or reams for in-house printing.",
  },
];

const formatCatalog = [
  { name: "Custom Printed NCR Forms", path: "/products/custom-ncr-forms" },
  { name: "NCR Receipt Books", path: "/products/ncr-receipt-books" },
  { name: "NCR Invoice Books", path: "/products/ncr-invoice-books" },
  { name: "Delivery Note Forms", path: "/products/delivery-note-forms" },
  { name: "Continuous Computer Forms", path: "/products/continuous-computer-forms" },
];

const catalogEntries = [
  ...ncrFormParts.map((part) => ({ name: `${part.label} NCR Forms`, path: `/products/ncr-forms/${part.slug}` })),
  ...formatCatalog,
  ...ncrApplicationPages.map((page) => ({ name: page.name, path: `/products/${page.slug}` })),
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
    { "@type": "ListItem", position: 2, name: "Products", item: `${SITE.domain}/products` },
    { "@type": "ListItem", position: 3, name: "NCR Forms & Carbonless Paper", item: `${SITE.domain}/products/ncr-forms` },
  ],
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE.domain}/products/ncr-forms#collection`,
  name: "NCR Forms & Carbonless Business Forms",
  description: metadata.description,
  url: `${SITE.domain}/products/ncr-forms`,
  isPartOf: { "@id": `${SITE.domain}/#website` },
  primaryImageOfPage: { "@type": "ImageObject", url: NCR_HERO_IMAGE },
  about: [
    { "@type": "Thing", name: "NCR forms", alternateName: "No Carbon Required forms" },
    { "@type": "Thing", name: "Carbonless copy paper" },
    { "@type": "Thing", name: "Multi-part business forms" },
  ],
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Distributors, commercial printers, stationery suppliers, and institutional procurement teams",
  },
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

const termsSchema = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  name: "NCR Carbonless Paper Layer Terms",
  url: `${SITE.domain}/products/ncr-forms#quote-guide`,
  hasDefinedTerm: [
    { "@type": "DefinedTerm", name: "CB", alternateName: "Coated Back", description: "The top carbonless sheet that transfers an image to the sheet below." },
    { "@type": "DefinedTerm", name: "CFB", alternateName: "Coated Front and Back", description: "A middle carbonless sheet that receives and transfers an image." },
    { "@type": "DefinedTerm", name: "CF", alternateName: "Coated Front", description: "The bottom carbonless sheet that receives the transferred image." },
  ],
};

export const revalidate = 3600; // 1 hour: slot images change infrequently

export default async function NcrFormsPage() {
  const images = await getSlotImages([
    { slot: "ncr-forms:hero", fallback: NCR_HERO_IMAGE },
    { slot: "ncr-forms:overview", fallback: NCR_OVERVIEW_IMAGE },
    { slot: "ncr-forms:books", fallback: NCR_BOOKS_IMAGE },
    { slot: "ncr-forms:continuous", fallback: NCR_CONTINUOUS_IMAGE },
    { slot: "ncr-forms:delivery", fallback: NCR_DELIVERY_IMAGE },
    { slot: "ncr-forms:production", fallback: NCR_PRODUCTION_IMAGE },
    ...ncrApplicationPages.map((page) => ({
      slot: page.heroSlot,
      fallback: applicationFallbacks[page.slug as keyof typeof applicationFallbacks] ?? NCR_OVERVIEW_IMAGE,
    })),
  ]);

  const whatsappHref = `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I need wholesale pricing for NCR forms or carbonless paper. I can send our buyer type, product range, specifications, quantity, repeat-order plan, packing, and destination.")}`;

  const formats = [
    {
      title: "Loose Sets & Custom Printed Forms",
      description: "Pre-collated carbonless sets for invoices, purchase orders, work orders, vouchers, and custom business documents.",
      image: images["ncr-forms:overview"],
      imageAlt: "Loose custom printed NCR carbonless form sets",
      links: [{ label: "Custom NCR Forms", href: "/products/custom-ncr-forms" }],
    },
    {
      title: "Receipt & Invoice Books",
      description: "Numbered, perforated, glued, stitched, or wraparound books for counters, field sales, service teams, and invoicing.",
      image: images["ncr-forms:books"],
      imageAlt: "Numbered NCR receipt and invoice books",
      links: [
        { label: "Receipt Books", href: "/products/ncr-receipt-books" },
        { label: "Invoice Books", href: "/products/ncr-invoice-books" },
      ],
    },
    {
      title: "Delivery Notes & Waybills",
      description: "Multi-copy dispatch, proof-of-delivery, goods-received, cargo handover, and warehouse documents with signature fields.",
      image: images["ncr-forms:delivery"],
      imageAlt: "Logistics workflow for NCR delivery notes and waybills",
      links: [{ label: "Delivery Note Forms", href: "/products/delivery-note-forms" }],
    },
    {
      title: "Continuous Computer Forms",
      description: "Fanfold, pin-feed, or tractor-feed forms for dot-matrix printers, ERP systems, warehouses, banks, and logistics operations.",
      image: images["ncr-forms:continuous"],
      imageAlt: "Continuous computer forms for impact and dot-matrix printing",
      links: [{ label: "Continuous Forms", href: "/products/continuous-computer-forms" }],
    },
  ];

  const applications = ncrApplicationPages.map((page) => ({
    title: page.name,
    description: page.metaDescription,
    href: `/products/${page.slug}`,
    image: images[page.heroSlot],
    imageAlt: `${page.name} workflow using custom carbonless forms`,
  }));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }} />
      <NcrFormsCatalogPage
        heroImage={images["ncr-forms:hero"]}
        overviewImage={images["ncr-forms:overview"]}
        productionImage={images["ncr-forms:production"]}
        whatsappHref={whatsappHref}
        parts={ncrFormParts.map((part) => ({
          label: part.label,
          href: `/products/ncr-forms/${part.slug}`,
          badge: part.badge,
          desc: part.desc,
          copies: part.copies,
          bestFor: part.bestFor,
        }))}
        formats={formats}
        applications={applications}
        faqs={faqs}
      />
    </>
  );
}
