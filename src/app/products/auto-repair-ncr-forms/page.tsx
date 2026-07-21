import type { Metadata } from "next";
import AutoRepairNcrFormsCatalogPage, { autoRepairSpecifications } from "@/components/products/AutoRepairNcrFormsCatalogPage";
import { SITE } from "@/config/siteData";
import { getSlotImages } from "@/lib/imageSlotUtils";

const HERO_IMAGE = "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1400&q=82";
const INSPECTION_IMAGE = "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=1000&q=82";
const REPAIR_ORDER_IMAGE = "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1000&q=82";
const DAMAGE_REPORT_IMAGE = "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1000&q=82";
const AUTHORIZATION_IMAGE = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1000&q=82";
const INVOICE_IMAGE = "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1000&q=82";
const PRODUCTION_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/oem-factory-EHdu8eZwwzSo5DxSRyzQdF.webp";

export const metadata: Metadata = {
  title: { absolute: "Auto Repair NCR Forms | Repair Orders | ZhixinPaper" },
  description: "Custom auto repair NCR forms for vehicle inspection, repair orders, estimates and authorization, with clear copies, numbering, books and custom fields.",
  keywords: "auto repair NCR forms, auto repair order forms, carbonless repair orders, vehicle inspection forms, vehicle damage report forms, repair authorization forms, mechanic work order forms, auto repair invoice books, numbered garage forms",
  alternates: { canonical: `${SITE.domain}/products/auto-repair-ncr-forms` },
  openGraph: {
    title: "Custom Auto Repair NCR Forms & Repair Order Books",
    description: "Document vehicle condition, approved work, parts and labor, added repairs, payment and customer signatures with matching carbonless copies.",
    url: `${SITE.domain}/products/auto-repair-ncr-forms`,
    type: "website",
    images: [{ url: HERO_IMAGE, alt: "Auto repair workshop using vehicle inspection and repair authorization records" }],
  },
};

const faqs = [
  {
    q: "What are auto repair NCR forms?",
    a: "Auto repair NCR forms are carbonless vehicle inspection, repair order, estimate, authorization, invoice, and release forms. One handwritten or impact-printed entry creates matching copies for the customer, workshop, accounts team, insurer, fleet manager, or head office.",
  },
  {
    q: "What fields should an auto repair order form include?",
    a: "A useful repair order should include customer details, VIN, plate, make and model, mileage, fuel level, customer complaint, vehicle condition, requested work, parts and labor, estimate, added-work approval, old-parts handling, payment terms, warranty notes, and customer signatures.",
  },
  {
    q: "Why should a vehicle inspection form include a damage diagram?",
    a: "A vehicle diagram gives the workshop and customer a shared record of scratches, dents, broken parts, tire condition, warning lights, or missing accessories before repair. It reduces disputes about pre-existing damage and supports photo references and signatures.",
  },
  {
    q: "How many parts should an auto repair NCR form have?",
    a: "Use 2-part forms for customer and workshop copies. Use 3-part forms when accounts or an insurer also needs a copy. Use 4-part forms for fleet, dealership, multi-branch, insurer, or head-office workflows that require another controlled record.",
  },
  {
    q: "Can the form record added repairs and old-parts instructions?",
    a: "Yes. The layout can include an added-work authorization section, revised estimate, approval method, date and signature, plus instructions to return, retain, or dispose of replaced parts.",
  },
  {
    q: "Can you make numbered books with wraparound covers?",
    a: "Yes. Auto repair forms can be supplied as numbered loose sets, glued pads, stitched books, or books with wraparound covers that help prevent writing through unused sets. Perforation and book numbering are also available.",
  },
  {
    q: "Can repair forms include barcodes, QR codes, or branch numbering?",
    a: "Yes. Forms can include sequential job numbers, VIN or invoice references, barcodes, QR codes, branch codes, and controlled number ranges. Repeat orders can use an approved artwork and packing reference for consistency.",
  },
  {
    q: "Can you print local terms, warranty wording, or multiple languages?",
    a: "Yes. You can supply approved local terms, estimate authorization wording, warranty notes, privacy text, old-parts instructions, and multilingual fields. The buyer remains responsible for confirming legal wording for the destination market.",
  },
  {
    q: "What is the MOQ, lead time, and proof process?",
    a: "MOQ depends on size, colors, numbering, binding, and packing. Custom printed forms commonly start around 5,000 sets, with standard production taking about 10 to 18 business days after proof approval. A physical sample can be arranged when copy clarity or finishing must be tested.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
    { "@type": "ListItem", position: 2, name: "Products", item: `${SITE.domain}/products` },
    { "@type": "ListItem", position: 3, name: "NCR Forms & Carbonless Paper", item: `${SITE.domain}/products/ncr-forms` },
    { "@type": "ListItem", position: 4, name: "Auto Repair NCR Forms", item: `${SITE.domain}/products/auto-repair-ncr-forms` },
  ],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE.domain}/products/auto-repair-ncr-forms#webpage`,
  name: "Custom Auto Repair NCR Forms",
  alternateName: ["Auto Repair Order Forms", "Vehicle Inspection NCR Forms", "Carbonless Repair Authorization Forms"],
  description: metadata.description,
  url: `${SITE.domain}/products/auto-repair-ncr-forms`,
  image: HERO_IMAGE,
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Auto repair shops, dealership service departments, body shops, fleet maintenance teams, vehicle inspection centers, form distributors, and commercial printers",
  },
  about: { "@type": "Thing", name: "Custom Auto Repair NCR Forms" },
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
  name: "How to order custom auto repair NCR forms",
  description: "Prepare the form requirements, approve the production proof, and use the approved SKU for consistent repeat orders.",
  step: [
    { "@type": "HowToStep", position: 1, name: "Send the current form", text: "Share a PDF, photo, spreadsheet, sample, or required field list with copy roles and quantity." },
    { "@type": "HowToStep", position: 2, name: "Approve the production proof", text: "Confirm the layout, vehicle diagram, numbering, copy colors, perforation, binding, and packing." },
    { "@type": "HowToStep", position: 3, name: "Reorder the approved SKU", text: "Use the artwork code, number range, book count, and packing reference for consistent repeat orders." },
  ],
};

export const revalidate = 3600; // 1 hour: slot images change infrequently

export default async function AutoRepairNcrFormsPage() {
  const images = await getSlotImages([
    { slot: "ncr-applications:auto-repair-ncr-forms:hero", fallback: HERO_IMAGE },
    { slot: "auto-repair-ncr-forms:inspection", fallback: INSPECTION_IMAGE },
    { slot: "auto-repair-ncr-forms:repair-order", fallback: REPAIR_ORDER_IMAGE },
    { slot: "auto-repair-ncr-forms:damage-report", fallback: DAMAGE_REPORT_IMAGE },
    { slot: "auto-repair-ncr-forms:authorization", fallback: AUTHORIZATION_IMAGE },
    { slot: "auto-repair-ncr-forms:invoice", fallback: INVOICE_IMAGE },
    { slot: "auto-repair-ncr-forms:production", fallback: PRODUCTION_IMAGE },
  ]);

  const whatsappHref = `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I need a quote for custom auto repair NCR forms. I can send our current form, required fields, copy count, size, numbering, binding, quantity, and destination.")}`;

  const formTypes = [
    {
      title: "Repair Orders & Estimates",
      description: "Combine customer concerns, diagnosis, estimated parts and labor, approval limit, technician notes, completed work, payment, and signatures.",
      image: images["auto-repair-ncr-forms:repair-order"],
      imageAlt: "Auto repair work order and estimate documents",
      useCases: "Independent garages, dealership service departments, body shops, and repair chains",
    },
    {
      title: "Vehicle Inspection & Damage Reports",
      description: "Record vehicle condition, scratches, dents, warning lights, accessories, tire condition, photo references, and handover signatures.",
      image: images["auto-repair-ncr-forms:damage-report"],
      imageAlt: "Vehicle inspection and damage report for an auto repair workshop",
      useCases: "Body shops, inspection centers, rental fleets, towing, storage, and vehicle handover",
    },
    {
      title: "Repair Authorization Forms",
      description: "Document the approved scope, estimate, diagnostic fees, added repairs, old-parts handling, warranty terms, and customer consent.",
      image: images["auto-repair-ncr-forms:authorization"],
      imageAlt: "Customer signing an auto repair authorization form",
      useCases: "Insurance repair, expensive diagnostics, added work, fleet approval, and regulated service processes",
    },
    {
      title: "Mechanic Invoice & Receipt Books",
      description: "Create numbered invoices, deposits, payment receipts, service summaries, warranty references, and customer or accounts copies.",
      image: images["auto-repair-ncr-forms:invoice"],
      imageAlt: "Numbered mechanic invoice and receipt book documents",
      useCases: "Repair counters, mobile mechanics, parts and labor billing, deposits, and final payment",
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <AutoRepairNcrFormsCatalogPage
        heroImage={images["ncr-applications:auto-repair-ncr-forms:hero"]}
        inspectionImage={images["auto-repair-ncr-forms:inspection"]}
        productionImage={images["auto-repair-ncr-forms:production"]}
        whatsappHref={whatsappHref}
        formTypes={formTypes}
        faqs={faqs}
      />
    </>
  );
}
