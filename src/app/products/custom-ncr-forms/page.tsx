import type { Metadata } from "next";
import { BadgeCheck, Boxes, FileText, Layers, MessageSquare, Phone, Printer, ShieldCheck } from "lucide-react";
import { SITE } from "@/config/siteData";
import { getSlotImage } from "@/lib/imageSlotUtils";
import { r2Image } from "@/lib/r2";
import ProductCategoryShowcaseTemplate from "@/components/products/ProductCategoryShowcaseTemplate";
import type { ShowcaseBrowseSection } from "@/components/products/ProductCategoryShowcaseTemplate";
import { ncrApplicationPages } from "../ncr-applications-data";
import { NCR_FORMS_IMG, ncrFormParts } from "../ncr-forms/ncr-forms-data";

export const metadata: Metadata = {
  title: "Custom NCR Forms for Invoices, Receipts and Delivery Notes",
  description:
    "Custom printed carbonless NCR forms in 2-part, 3-part, 4-part and multi-part sets — with numbering, perforation, logo printing, and loose-set or book options. Invoices, receipts, orders, delivery notes. Factory-direct OEM.",
  keywords:
    "custom ncr forms, custom printed ncr forms, carbonless invoice books, carbonless receipt books, 2-part ncr forms, 3-part ncr forms, 4-part ncr forms, custom business forms, numbered ncr forms, perforated ncr forms, ncr forms with logo, ncr forms manufacturer",
  alternates: { canonical: `${SITE.domain}/products/custom-ncr-forms` },
};

// Document type → recommended part-count detail page.
const docTypeToPart: Record<string, string> = {
  invoice: "3-part",
  receipt: "2-part",
  "purchase-order": "3-part",
  "delivery-note": "3-part",
  service: "2-part",
  "work-order": "3-part",
};

const specs = [
  { label: "Copies per Set", value: "2-part / 3-part / 4-part / 5-part (multi-part)" },
  { label: "Format", value: "Loose sets, pads, or bound books" },
  { label: "Printing", value: "Black, spot color, or full-color layout" },
  { label: "Finishing", value: "Numbering, perforation, hole punching, glue / stapled binding" },
  { label: "Ply Colors", value: "White, pink, yellow, blue, green — configurable copy sequence" },
  { label: "Paper", value: "Carbonless (CB / CFB / CF) 50–60 gsm, wood-free" },
  { label: "Customization", value: "Logo, company details, form fields, multilingual layouts" },
  { label: "Packaging", value: "Packed by set, by book, or export carton" },
  { label: "MOQ", value: "From 5,000 sets (custom printing)" },
  { label: "Lead Time", value: "Proof 3–7 days · production 10–18 days" },
];

const faqs = [
  { q: "Can you make custom 3-part NCR forms?", a: "Yes. We produce 2-part, 3-part, 4-part, and multi-part (5+ ply) carbonless forms, fully customized with your layout, fields, and copy sequence. The number of parts depends on how many copies each step of your workflow needs." },
  { q: "Can you print our logo and business details?", a: "Yes. We print your logo, company details, form fields, and multilingual layouts in black, spot color, or full color — so the form reflects your brand and process." },
  { q: "Can the forms be numbered sequentially?", a: "Yes. We offer sequential and custom numbering, plus perforation, hole punching, and glue or stapled binding for loose sets, pads, and books." },
  { q: "Can you make NCR books as well as loose sets?", a: "Yes. We supply loose collated sets, padded sets, and bound books (glued, wire, or stitched) with tear-off perforation — common for receipt, invoice, and order books." },
  { q: "What file format do you need for quotation and printing?", a: "Send a PDF, AI, or clear image of your form layout, plus the copies per set, final size, numbering and binding requirement, and quantity. We'll recommend the right NCR format and quote accordingly." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
    { "@type": "ListItem", position: 2, name: "Products", item: `${SITE.domain}/products` },
    { "@type": "ListItem", position: 3, name: "NCR Forms & Business Forms", item: `${SITE.domain}/products/ncr-forms` },
    { "@type": "ListItem", position: 4, name: "Custom NCR Forms", item: `${SITE.domain}/products/custom-ncr-forms` },
  ],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Custom NCR Forms (Carbonless Business Forms)",
  description: "Custom printed carbonless NCR forms in 2-part, 3-part, 4-part and multi-part sets, with numbering, perforation, logo printing, and loose-set or book options. Factory-direct OEM.",
  brand: { "@type": "Brand", name: SITE.name },
  manufacturer: { "@id": `${SITE.domain}/#organization` },
  image: NCR_FORMS_IMG,
  url: `${SITE.domain}/products/custom-ncr-forms`,
  additionalProperty: specs.map(({ label, value }) => ({ "@type": "PropertyValue", name: label, value })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

export default async function CustomNcrFormsPage() {
  const ncrImg = r2Image(await getSlotImage("ncr-forms:hero", NCR_FORMS_IMG));

  // What these forms are used for — 6 document types (doc module 2).
  const products = [
    { title: "Invoice Forms", desc: "Carbonless invoices — customer, accounts, and file copies, numbered and tax-ready.", image: ncrImg, href: `/products/ncr-forms/${docTypeToPart.invoice}`, badge: "Finance" },
    { title: "Receipt Books", desc: "Handwritten duplicate receipts for retail counters and field sales teams.", image: ncrImg, href: `/products/ncr-forms/${docTypeToPart.receipt}`, badge: "Retail" },
    { title: "Purchase Orders", desc: "PO forms with custom fields, numbering, and supplier / buyer copies.", image: ncrImg, href: `/products/ncr-forms/${docTypeToPart["purchase-order"]}`, badge: "Procurement" },
    { title: "Delivery Notes", desc: "Delivery / goods-received forms with driver, warehouse, and customer copies.", image: ncrImg, href: `/products/ncr-forms/${docTypeToPart["delivery-note"]}`, badge: "Logistics" },
    { title: "Service Records", desc: "Service and repair tickets with customer and office copies for field teams.", image: ncrImg, href: `/products/ncr-forms/${docTypeToPart.service}`, badge: "Field Service" },
    { title: "Work Orders", desc: "Work order forms for maintenance, production, and job tracking.", image: ncrImg, href: `/products/ncr-forms/${docTypeToPart["work-order"]}`, badge: "Operations" },
  ];

  const browseSections: ShowcaseBrowseSection[] = [
    {
      title: "Choose Your Number of Parts",
      description: "Pick how many carbonless copies each step of your workflow needs.",
      cards: ncrFormParts.map((p) => ({
        image: ncrImg,
        title: p.label,
        desc: p.desc,
        href: `/products/ncr-forms/${p.slug}`,
        badge: p.badge,
      })),
    },
    {
      title: "Industries We Serve",
      description: "Forms tuned to real business actions, not just industry names.",
      cards: ncrApplicationPages.map((page) => ({
        image: ncrImg,
        title: page.name,
        desc: page.metaDescription,
        href: `/products/${page.slug}`,
        badge: "Application",
        ctaLabel: "View Application",
        ctaHref: `/products/${page.slug}`,
      })),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ProductCategoryShowcaseTemplate
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "NCR Forms", href: "/products/ncr-forms" }, { label: "Custom NCR Forms" }]}
        heroImage={ncrImg}
        heroBadge={{ text: "Custom Carbonless Forms", color: "amber" }}
        title={<>Custom NCR Forms for Invoices,<br /><span className="text-amber-400">Receipts, Orders &amp; Delivery Notes</span></>}
        subtitle="Custom printed carbonless NCR forms in 2-part, 3-part, and multi-part sets — with numbering, perforation, logo printing, and book or loose-set options, for invoices, receipts, purchase orders, delivery notes, and business records."
        trustBadges={["2-Part to 5-Part", "Custom Printing", "Numbering & Perforation", "Loose Sets or Books"]}
        stats={[
          { value: "2–5+", label: "Copies / Set" },
          { value: "Custom", label: "Layout & Fields" },
          { value: "3–7d", label: "Sample Proof" },
          { value: "OEM", label: "Logo & Numbering" },
        ]}
        ctas={[
          { label: "Request a Quote", href: "#inquiry", variant: "primary", icon: <MessageSquare className="w-4 h-4" /> },
          { label: "Send Your Layout", href: `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I want a quote for custom NCR forms. I will send my form type, copies per set, size, and quantity.")}`, variant: "whatsapp", icon: <Phone className="w-4 h-4" />, external: true },
        ]}
        introSplit={{
          title: "Carbonless Business Forms, Built to Your Layout",
          lead: "Write or print once and every copy is made — no carbon paper. We print, collate, number, perforate, and bind NCR forms to your exact layout at factory-direct pricing.",
          bullets: [
            "2-part, 3-part, 4-part & multi-part sets",
            "Your logo, fields, numbering & copy sequence",
            "Loose sets, pads, or bound books",
            "Black, spot color, or full-color printing",
          ],
          image: ncrImg,
          imageAlt: "Custom printed carbonless NCR business forms",
          cta: { label: "Send Inquiry Now", href: "#inquiry" },
        }}
        overview={{
          title: "What These NCR Forms Are Used For",
          paragraphs: [
            "Custom NCR forms are carbonless business documents used wherever a transaction needs more than one copy — keep one copy for the customer, one for accounting, and one for warehouse or dispatch. Common uses include invoices, receipts, purchase orders, delivery notes, service records, and work orders.",
            "The number of parts depends on the workflow: 2-part (duplicate) for simple receipts and invoices, 3-part (triplicate) for orders and delivery paperwork that split between customer, finance, and warehouse, and 4-part or multi-part for logistics, banking, and institutional approval chains.",
            "Beyond the print, the format matters — loose collated sets for system or batch use, padded sets for the counter, or bound books for receipt and order pads. We customize the layout, fields, numbering, perforation, copy-color sequence, and binding, and pack by set, by book, or in export cartons.",
          ],
        }}
        featureSplit={{
          title: "Why Buyers Choose NCR Forms",
          lead: "Carbonless forms speed up multi-copy record keeping and keep every party's copy clear and aligned — without carbon sheets.",
          bullets: [
            "No carbon sheet required — fast duplicate records",
            "Better for manual writing and field paperwork",
            "Color-coded copies for clear copy management",
            "Easy distribution, filing, and signature workflows",
          ],
          image: ncrImg,
          imageAlt: "Multi-part carbonless NCR form copies",
          cta: { label: "Talk to OEM Team", href: "/oem" },
        }}
        productsTitle="What Do You Need the Form For?"
        productsDescription="Pick the business document you need — each links to the right number of parts and full specs."
        products={products}
        browseSections={browseSections}
        comparison={{
          title: "How to Choose the Right Form Structure",
          headers: { left: "If You Need…", right: "Suggested Option" },
          rows: [
            { factor: "One customer copy + one office copy", left: "Duplicate records", right: "2-part NCR forms" },
            { factor: "Customer, finance & warehouse copies", left: "Triplicate paperwork", right: "3-part NCR forms" },
            { factor: "Daily handwritten transactions", left: "Counter / field use", right: "NCR receipt books" },
            { factor: "High-volume printer-fed paperwork", left: "System printing", right: "Continuous computer forms" },
            { factor: "Logistics proof-of-delivery", left: "Signed delivery copies", right: "Numbered delivery note forms" },
            { factor: "Bulk branded documents", left: "Consistent layout & numbering", right: "Custom printed NCR forms" },
          ],
        }}
        specs={{
          title: "Available Specifications",
          rows: specs,
          note: "* Multilingual layouts, custom sizes, and NDA available on request.",
        }}
        whyUs={{
          title: "Customization & Finishing Options",
          subtitle: "Layout, function, and packaging — a complete custom NCR form program from the factory.",
          items: [
            { icon: <FileText />, title: "Print Layout", text: "Logo, company details, form fields, and multilingual layouts in black, spot, or full color." },
            { icon: <Layers />, title: "Copies per Set", text: "2-part, 3-part, 4-part, or multi-part with a configurable copy-color sequence." },
            { icon: <Printer />, title: "Numbering", text: "Sequential or custom numbering, with optional barcoding per set or per book." },
            { icon: <Boxes />, title: "Finishing", text: "Perforation, hole punching, glue or stapled binding, and wrap-around book covers." },
            { icon: <ShieldCheck />, title: "Format & Packaging", text: "Loose sets, pads, or books — packed by set, by book, or in export cartons." },
            { icon: <BadgeCheck />, title: "OEM Ready", text: "Pre-production proofs, NDA on request, and stable batch quality for repeat orders." },
          ],
        }}
        faqs={faqs}
        crossLinks={[
          { label: "NCR Forms & Business Forms", href: "/products/ncr-forms" },
          { label: "2-Part (Duplicate)", href: "/products/ncr-forms/2-part" },
          { label: "3-Part (Triplicate)", href: "/products/ncr-forms/3-part" },
          { label: "OEM & Private Label", href: "/oem" },
        ]}
        inquiry={{
          title: "Get a Custom NCR Form Quote",
          description: "Send your form type, copies per set, final size, print layout, numbering, binding, and quantity — we'll recommend the right NCR format and quote within 24 hours.",
        }}
      />
    </>
  );
}
