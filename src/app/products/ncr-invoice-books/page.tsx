import type { Metadata } from "next";
import NcrInvoiceBooksCatalogPage, {
  invoiceBookOrderSteps,
  invoiceBookSpecifications,
} from "@/components/products/NcrInvoiceBooksCatalogPage";
import { SITE } from "@/config/siteData";
import { getSlotImages } from "@/lib/imageSlotUtils";

const INVOICE_HERO_IMAGE = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=82";
// Product photos sourced from the company's Xi'an Zhi Xin Paper Alibaba supplier listing.
const INVOICE_OVERVIEW_IMAGE = "/images/ncr-invoice-books/numbered-multipart-invoice-book.webp";
const INVOICE_RISK_IMAGE = "/images/ncr-invoice-books/numbered-multipart-invoice-book.webp";
const INVOICE_2_PART_IMAGE = "/images/ncr-invoice-books/custom-order-form-pad.webp";
const INVOICE_3_PART_IMAGE = "/images/ncr-invoice-books/triplicate-order-form-book.webp";
const INVOICE_PRIVATE_LABEL_IMAGE = "/images/ncr-invoice-books/custom-carbonless-invoice-book.webp";
const INVOICE_PRODUCTION_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/oem-factory-EHdu8eZwwzSo5DxSRyzQdF.webp";
const INVOICE_PACKING_IMAGE = "/uploads/images/1778755819135-456d030e-f44b-453b-86bb-69c736ef4e12-32b6c697519b48fc814b3a4712323de2.webp";

const USE_CASE_IMAGES = {
  stationery: "/images/ncr-invoice-books/custom-order-form-pad.webp",
  tradePrinter: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=900&q=80",
  fieldService: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=900&q=80",
  multiBranch: "/uploads/images/1778749791640-3b5c725a-937d-48a1-bdad-b0331d9c9dca-image.webp",
} as const;

const pageDescription =
  "Source NCR invoice books by sheet size, duplicate or triplicate sequence, numbering, artwork, binding, packing and repeat-order specification.";

export const metadata: Metadata = {
  title: { absolute: "Wholesale NCR Invoice Books | ZhixinPaper" },
  description: pageDescription,
  alternates: { canonical: `${SITE.domain}/products/ncr-invoice-books` },
  openGraph: {
    title: "Wholesale NCR Invoice Books for Repeat Supply Programs",
    description:
      "Source custom carbonless invoice books with controlled numbering, approved binding, private-label packing, and repeat-order specifications.",
    url: `${SITE.domain}/products/ncr-invoice-books`,
    type: "website",
    images: [
      {
        url: INVOICE_HERO_IMAGE,
        alt: "Wholesale NCR invoice books prepared for repeat distributor orders",
      },
    ],
  },
};

const faqs = [
  {
    q: "What is an NCR invoice book?",
    a: "An NCR invoice book is a bound set of carbonless invoice forms. Writing on the coated top sheet transfers the same information to the copies below, producing a customer original and one or more retained records without separate carbon paper.",
  },
  {
    q: "Should I order 2-part or 3-part invoice books?",
    a: "Choose 2-part books when the customer receives the original and the seller retains one accounts copy. Choose 3-part books when a warehouse, branch, operations team, or another department also needs an immediate controlled copy.",
  },
  {
    q: "What information is needed for an accurate wholesale quotation?",
    a: "Send the buyer type, destination market, copy roles, finished size, sets per book, binding, cover, perforation, number rules, artwork, print colors, order quantity, packing, destination, and expected repeat-order schedule.",
  },
  {
    q: "Can number ranges be allocated by branch, carton, or distributor SKU?",
    a: "Yes. Numbering can run continuously across an order or be allocated by branch, warehouse, carton, book, or SKU. Start and end numbers, branch codes, barcodes, QR codes, and carton-range labels can be recorded in the approved specification.",
  },
  {
    q: "Which binding, perforation, and cover options are available?",
    a: "Invoice books can be glued, padded, stapled, stitched, or wire bound. Covers can be plain, custom printed, or wraparound with a writing shield. Perforation position and binding placement are confirmed during proof approval.",
  },
  {
    q: "Can you print our local invoice or tax layout?",
    a: "Yes. We print buyer-supplied and buyer-approved fields, logos, terms, languages, tables, and copy labels. The buyer should confirm that the approved artwork meets local tax, invoicing, and recordkeeping requirements before production.",
  },
  {
    q: "Do you provide a proof or sample before mass production?",
    a: "Yes. A digital proof confirms the layout, copy roles, colors, numbering, perforation, binding, cover, and packing. A physical pre-production sample can be arranged when transfer clarity, tear-off, or binding must be checked before the production run.",
  },
  {
    q: "What is the MOQ and production lead time?",
    a: "MOQ depends on size, print colors, numbering, binding, cover, and packing. Custom programs commonly begin with a commercial production quantity. Standard production is usually 10 to 18 business days after proof approval, with the exact schedule confirmed in the quotation.",
  },
  {
    q: "How do repeat orders stay consistent?",
    a: "We link the approved artwork, copy sequence, paper, number rules, binding, cover, sets per book, labels, and carton data to one reorder reference. The next order should state the new number range and any approved change to that reference.",
  },
  {
    q: "Can you quote private-label packing and export delivery terms?",
    a: "Yes. We can supply distributor covers, book labels, shrink-wrapped inner packs, SKU labels, carton marks, and export cartons. Share the destination, quantity, packing request, and shipping method for factory collection, FOB, CIF, or delivered options.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
    { "@type": "ListItem", position: 2, name: "Products", item: `${SITE.domain}/products` },
    { "@type": "ListItem", position: 3, name: "NCR Forms & Carbonless Paper", item: `${SITE.domain}/products/ncr-forms` },
    { "@type": "ListItem", position: 4, name: "NCR Invoice Books", item: `${SITE.domain}/products/ncr-invoice-books` },
  ],
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
  name: "How to order wholesale NCR invoice books",
  description:
    "Define the invoice copy workflow, approve the book format, confirm artwork and number rules, approve proof and packing, and record one specification for repeat orders.",
  step: invoiceBookOrderSteps.map((item, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: item.title,
    text: item.text,
  })),
};

export const revalidate = 3600; // 1 hour: slot images change infrequently

export default async function NcrInvoiceBooksPage() {
  const images = await getSlotImages([
    { slot: "ncr-invoice-books:hero", fallback: INVOICE_HERO_IMAGE },
    { slot: "ncr-invoice-books:overview", fallback: INVOICE_OVERVIEW_IMAGE },
    { slot: "ncr-invoice-books:buyer-risk", fallback: INVOICE_RISK_IMAGE },
    { slot: "ncr-invoice-books:2-part", fallback: INVOICE_2_PART_IMAGE },
    { slot: "ncr-invoice-books:3-part", fallback: INVOICE_3_PART_IMAGE },
    { slot: "ncr-invoice-books:private-label", fallback: INVOICE_PRIVATE_LABEL_IMAGE },
    { slot: "ncr-invoice-books:production", fallback: INVOICE_PRODUCTION_IMAGE },
    { slot: "ncr-invoice-books:packing", fallback: INVOICE_PACKING_IMAGE },
  ]);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE.domain}/products/ncr-invoice-books#webpage`,
    name: "Wholesale NCR Invoice Books",
    alternateName: [
      "Carbonless Invoice Books",
      "Duplicate Invoice Books",
      "Triplicate Invoice Books",
      "Private-Label Invoice Books",
    ],
    description: pageDescription,
    url: `${SITE.domain}/products/ncr-invoice-books`,
    image: [
      images["ncr-invoice-books:hero"],
      images["ncr-invoice-books:2-part"],
      images["ncr-invoice-books:3-part"],
      images["ncr-invoice-books:private-label"],
    ],
    audience: {
      "@type": "BusinessAudience",
      audienceType:
        "Overseas distributors, commercial printing companies, stationery wholesalers, and repeat procurement programs",
    },
    about: { "@type": "Thing", name: "Wholesale NCR Invoice Books" },
  };

  const whatsappHref = `${SITE.whatsappUrl}?text=${encodeURIComponent(
    "Hello, I need wholesale pricing for NCR invoice books. I can send our buyer type, 2-part or 3-part copy roles, size, sets per book, number rules, binding, cover, artwork, quantity, packing, destination, and repeat-order plan.",
  )}`;

  const programs = [
    {
      title: "Duplicate Invoice Book Range",
      description:
        "A 2-part program with a customer original and one retained copy, configured for common local invoice sizes and resale demand.",
      image: images["ncr-invoice-books:2-part"],
      imageAlt: "Duplicate 2-part NCR invoice book program",
      href: "/products/ncr-forms/2-part",
      useCase: "Best for retail invoicing, service businesses, field sales, and high-volume stationery ranges.",
    },
    {
      title: "Triplicate Controlled-Copy Books",
      description:
        "A 3-part program with a third record for accounts, operations, warehouse, branch control, or another recipient.",
      image: images["ncr-invoice-books:3-part"],
      imageAlt: "Triplicate 3-part NCR invoice book program",
      href: "/products/ncr-forms/3-part",
      useCase: "Best for distribution, logistics, repair, rentals, and multi-department invoice workflows.",
    },
    {
      title: "Loose and Padded Invoice Sets",
      description:
        "Pre-collated loose or padded carbonless sets for desk, field, typewriter, impact printer, or system-based invoicing.",
      image: images["ncr-invoice-books:overview"],
      imageAlt: "Loose and padded carbonless invoice form sets",
      href: "/products/custom-ncr-forms",
      useCase: "Best for commercial printers, system invoicing, and buyers that do not need a retained bound copy.",
    },
    {
      title: "Private-Label Invoice Books",
      description:
        "Distributor covers, local fields, languages, number rules, book labels, inner packs, and carton references under one SKU.",
      image: images["ncr-invoice-books:private-label"],
      imageAlt: "Custom invoice layout prepared for private-label production",
      href: "/oem/packaging",
      useCase: "Best for stationery brands, office-supply distributors, wholesalers, and country-specific resale ranges.",
    },
  ];

  const useCases = [
    {
      title: "Stationery Wholesale Ranges",
      description:
        "Standard duplicate and triplicate SKUs with local sizes, common fields, controlled numbering, private-label covers, and export carton data.",
      image: USE_CASE_IMAGES.stationery,
      imageAlt: "Business invoice documents prepared for a stationery wholesale range",
    },
    {
      title: "Commercial Printer Outsourcing",
      description:
        "Outsource collating, numbering, perforation, covers, and binding when internal finishing capacity is constrained.",
      image: USE_CASE_IMAGES.tradePrinter,
      imageAlt: "Commercial printing and finishing equipment for invoice books",
    },
    {
      title: "Field Sales and Service",
      description:
        "Portable books for technicians, repair teams, agents, rentals, utilities, and customer invoicing away from a fixed counter.",
      image: USE_CASE_IMAGES.fieldService,
      imageAlt: "Field service business using a controlled invoice book",
    },
    {
      title: "Multi-Branch Invoice Control",
      description:
        "Allocate number ranges, book labels, and cartons by branch, region, warehouse, or franchise while retaining one approved SKU specification.",
      image: USE_CASE_IMAGES.multiBranch,
      imageAlt: "Export container transport supporting multi-branch invoice book distribution",
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <NcrInvoiceBooksCatalogPage
        heroImage={images["ncr-invoice-books:hero"]}
        overviewImage={images["ncr-invoice-books:overview"]}
        buyerRiskImage={images["ncr-invoice-books:buyer-risk"]}
        productionImage={images["ncr-invoice-books:production"]}
        packingImage={images["ncr-invoice-books:packing"]}
        whatsappHref={whatsappHref}
        programs={programs}
        useCases={useCases}
        faqs={faqs}
      />
    </>
  );
}
