import type { Metadata } from "next";
import NcrReceiptBooksCatalogPage, {
  receiptBookOrderSteps,
  receiptBookSpecifications,
} from "@/components/products/NcrReceiptBooksCatalogPage";
import { SITE } from "@/config/siteData";
import { getSlotImages } from "@/lib/imageSlotUtils";

const RECEIPT_HERO_IMAGE =
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=82";
const RECEIPT_OVERVIEW_IMAGE =
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1000&q=82";
const RECEIPT_RISK_IMAGE =
  "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=1000&q=82";
const RECEIPT_2_PART_IMAGE =
  "https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?w=1000&q=82";
const RECEIPT_3_PART_IMAGE =
  "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1000&q=82";
const RECEIPT_PRIVATE_LABEL_IMAGE =
  "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1000&q=82";
const RECEIPT_PRODUCTION_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/oem-factory-EHdu8eZwwzSo5DxSRyzQdF.webp";
const RECEIPT_PACKING_IMAGE =
  "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1000&q=82";
const TRADE_PRINTER_IMAGE =
  "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=1000&q=82";

const APPLICATION_IMAGES = {
  government: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=900&q=80",
  cargo: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=900&q=80",
  fieldService: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900&q=80",
  autoRepair: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=900&q=80",
  logistics: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80",
  medical: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80",
} as const;

export const metadata: Metadata = {
  title: { absolute: "Wholesale NCR Receipt Books | ZhixinPaper" },
  description:
    "Source NCR receipt books by sheet size, duplicate or triplicate sequence, numbering, cover, binding, packing and repeat-order specification.",
  keywords:
    "NCR receipt books, carbonless receipt books, duplicate receipt books, triplicate receipt books, wholesale receipt books, numbered receipt books, custom receipt book printing, private label receipt books",
  alternates: { canonical: `${SITE.domain}/products/ncr-receipt-books` },
  openGraph: {
    title: "Wholesale NCR Receipt Books for Distributors and Printers",
    description:
      "Source duplicate and triplicate carbonless receipt books with controlled numbering, approved binding, private-label packing, and repeat-order SKU specifications.",
    url: `${SITE.domain}/products/ncr-receipt-books`,
    type: "website",
    images: [
      {
        url: RECEIPT_HERO_IMAGE,
        alt: "Wholesale NCR receipt books prepared for repeat distributor orders",
      },
    ],
  },
};

const faqs = [
  {
    q: "What are NCR receipt books?",
    a: "NCR receipt books are bound sets of carbonless paper. Writing on the top sheet transfers the same information to the copies below without separate carbon paper. They are commonly numbered, perforated, and supplied with 50 or 100 receipt sets per book.",
  },
  {
    q: "Should I order 2-part or 3-part receipt books?",
    a: "Choose 2-part books when the customer receives the original and the seller retains one copy. Choose 3-part books when accounts, a warehouse, a branch office, or another department also needs an immediate controlled copy.",
  },
  {
    q: "What information is needed for an accurate receipt book quotation?",
    a: "Send the buyer type, book size, copy count, copy colors, sets per book, binding, cover style, perforation, numbering rules, artwork, print colors, order quantity, packing, destination, and expected repeat-order schedule.",
  },
  {
    q: "Can numbering be allocated by branch, carton, or distributor SKU?",
    a: "Yes. Number ranges can be continuous across the order or allocated by branch, warehouse, carton, or SKU. Barcodes, QR codes, branch codes, book numbers, and start and end ranges can be included in the approved specification.",
  },
  {
    q: "Which binding and cover options are available?",
    a: "Receipt books can be glued, stapled, stitched, or wire bound. Covers can be plain, custom printed, or wraparound to reduce writing through unused sets. Perforation position and staple or stitch placement are confirmed during proof approval.",
  },
  {
    q: "Can distributors use private-label covers and cartons?",
    a: "Yes. We can produce distributor-branded covers, book labels, shrink-wrapped inner packs, SKU labels, carton marks, destination labels, and export cartons. The approved packing reference can be reused for repeat orders.",
  },
  {
    q: "Do you provide a proof or sample before mass production?",
    a: "Yes. A digital proof confirms fields, copy roles, colors, numbering, perforation, binding, covers, and packing. A physical pre-production sample can be arranged when copy clarity, tear-off, or binding must be checked before the full run.",
  },
  {
    q: "What is the MOQ and production lead time?",
    a: "MOQ depends on size, print colors, numbering, binding, and packing. Custom programs commonly begin with a commercial production quantity, and standard production is usually 10 to 18 business days after proof approval. We confirm the exact quantity and schedule in the quotation.",
  },
  {
    q: "How do repeat orders stay consistent?",
    a: "We link the approved artwork, copy sequence, paper, number rules, binding, sets per book, labels, and carton data to one reorder reference. The next order should state the new number range and any approved change to that reference.",
  },
  {
    q: "Can you quote FOB, CIF, or delivered shipping terms?",
    a: "Yes. Share the destination country, port or postal code, quantity, carton requirements, and preferred shipping method. We can quote factory collection, FOB, CIF, or delivered options when the destination and shipment size are known.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
    { "@type": "ListItem", position: 2, name: "Products", item: `${SITE.domain}/products` },
    {
      "@type": "ListItem",
      position: 3,
      name: "NCR Forms & Carbonless Paper",
      item: `${SITE.domain}/products/ncr-forms`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "NCR Receipt Books",
      item: `${SITE.domain}/products/ncr-receipt-books`,
    },
  ],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE.domain}/products/ncr-receipt-books#webpage`,
  name: "Wholesale NCR Receipt Books",
  alternateName: [
    "Carbonless Receipt Books",
    "Duplicate Receipt Books",
    "Triplicate Receipt Books",
    "Private-Label Receipt Books",
  ],
  description: metadata.description,
  url: `${SITE.domain}/products/ncr-receipt-books`,
  image: [
    RECEIPT_HERO_IMAGE,
    RECEIPT_2_PART_IMAGE,
    RECEIPT_3_PART_IMAGE,
    RECEIPT_PRIVATE_LABEL_IMAGE,
  ],
  audience: {
    "@type": "BusinessAudience",
    audienceType:
      "Overseas distributors, commercial printing companies, stationery wholesalers, and repeat procurement programs",
  },
  about: { "@type": "Thing", name: "Wholesale NCR Receipt Books" },
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

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to order wholesale NCR receipt books",
  description:
    "Approve the receipt book layout, copy roles, numbering, binding, and packing once, then use the approved SKU reference for repeat orders.",
  step: receiptBookOrderSteps.map((item, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: item.title,
    text: item.text,
  })),
};

export const revalidate = 3600; // 1 hour: slot images change infrequently

export default async function NcrReceiptBooksPage() {
  const images = await getSlotImages([
    { slot: "ncr-receipt-books:hero", fallback: RECEIPT_HERO_IMAGE },
    { slot: "ncr-receipt-books:overview", fallback: RECEIPT_OVERVIEW_IMAGE },
    { slot: "ncr-receipt-books:buyer-risk", fallback: RECEIPT_RISK_IMAGE },
    { slot: "ncr-receipt-books:2-part", fallback: RECEIPT_2_PART_IMAGE },
    { slot: "ncr-receipt-books:3-part", fallback: RECEIPT_3_PART_IMAGE },
    { slot: "ncr-receipt-books:private-label", fallback: RECEIPT_PRIVATE_LABEL_IMAGE },
    { slot: "ncr-receipt-books:production", fallback: RECEIPT_PRODUCTION_IMAGE },
    { slot: "ncr-receipt-books:packing", fallback: RECEIPT_PACKING_IMAGE },
  ]);

  const whatsappHref = `${SITE.whatsappUrl}?text=${encodeURIComponent(
    "Hello, I need wholesale pricing for NCR receipt books. I can send our buyer type, 2-part or 3-part copy roles, size, sets per book, numbering, binding, artwork, quantity, packing, destination, and repeat-order plan.",
  )}`;

  const bookPrograms = [
    {
      title: "Duplicate Receipt Book Range",
      description:
        "A 2-part program for markets where the customer receives the original and the seller retains one bound copy.",
      image: images["ncr-receipt-books:2-part"],
      imageAlt: "Duplicate 2-part NCR receipt book program",
      href: "/products/ncr-forms/2-part",
      useCase: "Best for general retail, deposits, field sales, service payments, and high-volume distributor ranges.",
    },
    {
      title: "Triplicate Controlled-Copy Books",
      description:
        "A 3-part program with a third record for accounts, warehouse, audit, branch control, or another recipient.",
      image: images["ncr-receipt-books:3-part"],
      imageAlt: "Triplicate 3-part NCR receipt book program",
      href: "/products/ncr-forms/3-part",
      useCase: "Best for multi-department payments, rentals, transport, donations, and controlled institutional records.",
    },
    {
      title: "Private-Label Branded Books",
      description:
        "Distributor covers, local business fields, languages, terms, number rules, labels, and carton references under one SKU.",
      image: images["ncr-receipt-books:private-label"],
      imageAlt: "Private-label receipt book cover and distributor packaging",
      href: "/products/custom-ncr-forms",
      useCase: "Best for stationery brands, office-supply distributors, wholesalers, and country-specific resale ranges.",
    },
    {
      title: "Trade Printer Finishing Program",
      description:
        "Outsource collating, numbering, perforation, covers, and binding when internal finishing capacity is constrained.",
      image: TRADE_PRINTER_IMAGE,
      imageAlt: "Commercial printing and finishing equipment for carbonless receipt books",
      href: "/products/custom-ncr-forms",
      useCase: "Best for commercial printers that retain customer artwork and sales while outsourcing controlled production.",
    },
  ];

  const applications = [
    {
      title: "Public Offices and Fee Collection",
      description:
        "Numbered books for permits, local fees, counter payments, public services, and accountable branch allocation.",
      image: APPLICATION_IMAGES.government,
      imageAlt: "Public office receipt and fee collection records",
    },
    {
      title: "Ports, Customs, and Cargo Handover",
      description:
        "Receipt and payment records for cargo release, document fees, inspection charges, and multi-party handover.",
      image: APPLICATION_IMAGES.cargo,
      imageAlt: "Cargo and customs operations requiring controlled receipt records",
    },
    {
      title: "Field Service and Collections",
      description:
        "Portable books for technicians, utilities, maintenance teams, agents, and payment collection away from a fixed counter.",
      image: APPLICATION_IMAGES.fieldService,
      imageAlt: "Field service technician using a receipt and service record",
    },
    {
      title: "Auto Repair and Vehicle Service",
      description:
        "Deposits, repair payments, job references, parts and labor summaries, and customer or accounts copies.",
      image: APPLICATION_IMAGES.autoRepair,
      imageAlt: "Auto repair workshop using numbered receipt books",
    },
    {
      title: "Logistics and Warehouse Operations",
      description:
        "Cash-on-delivery, collection, receiving, dispatch, storage, and branch transaction records with traceable numbering.",
      image: APPLICATION_IMAGES.logistics,
      imageAlt: "Warehouse and logistics team managing receipt records",
    },
    {
      title: "Medical and Pharmacy Counters",
      description:
        "Numbered receipts for clinics, pharmacies, laboratories, deposits, cash payments, and controlled patient or accounts copies.",
      image: APPLICATION_IMAGES.medical,
      imageAlt: "Medical and pharmacy counter receipt documentation",
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <NcrReceiptBooksCatalogPage
        heroImage={images["ncr-receipt-books:hero"]}
        overviewImage={images["ncr-receipt-books:overview"]}
        buyerRiskImage={images["ncr-receipt-books:buyer-risk"]}
        productionImage={images["ncr-receipt-books:production"]}
        packingImage={images["ncr-receipt-books:packing"]}
        whatsappHref={whatsappHref}
        bookPrograms={bookPrograms}
        applications={applications}
        faqs={faqs}
      />
    </>
  );
}
