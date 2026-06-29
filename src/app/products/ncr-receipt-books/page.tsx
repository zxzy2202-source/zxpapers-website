import type { Metadata } from "next";
import { BadgeCheck, BookOpen, Boxes, Factory, MessageSquare, Phone, ShieldCheck } from "lucide-react";
import { SITE } from "@/config/siteData";
import { getSlotImage } from "@/lib/imageSlotUtils";
import { r2Image } from "@/lib/r2";
import ProductCategoryShowcaseTemplate from "@/components/products/ProductCategoryShowcaseTemplate";
import type { ShowcaseBrowseSection } from "@/components/products/ProductCategoryShowcaseTemplate";
import { NCR_FORMS_IMG } from "../ncr-forms/ncr-forms-data";

export const metadata: Metadata = {
  title: "NCR Receipt Books | Carbonless Duplicate & Triplicate Receipt Books",
  description:
    "Factory-direct carbonless NCR receipt books — duplicate (2-part) and triplicate (3-part), numbered, perforated, glue or stapled binding. Custom logo and fields. MOQ from low volume, OEM.",
  keywords:
    "ncr receipt books, carbonless receipt books, duplicate receipt books, triplicate receipt books, custom receipt books, numbered receipt books, receipt pads, carbonless receipt pad, receipt book printing, business receipt books",
  alternates: { canonical: `${SITE.domain}/products/ncr-receipt-books` },
};

const specs = [
  { label: "Copies per Set", value: "2-part (duplicate) / 3-part (triplicate)" },
  { label: "Binding", value: "Glue, staple, or wire — with wrap-around cover" },
  { label: "Sets per Book", value: "50 / 100 / custom" },
  { label: "Finishing", value: "Sequential numbering, perforated tear-off, hole punch" },
  { label: "Print", value: "Logo, business details, fields; black or color" },
  { label: "Ply Colors", value: "White + pink / yellow copy sequence" },
  { label: "Size", value: "A5, A6, 1/3 A4, or custom" },
  { label: "Paper", value: "Carbonless (CB/CFB/CF) 50–55 gsm" },
  { label: "MOQ", value: "From low volume; custom printing from ~5,000 books" },
  { label: "Lead Time", value: "Proof 3–7 days · production 10–18 days" },
];

const faqs = [
  { q: "What is an NCR receipt book?", a: "An NCR receipt book is a bound book of carbonless receipt sets — write once on the top sheet and the copy transfers automatically. The customer keeps the top copy and you keep the bound copy. Available as duplicate (2-part) or triplicate (3-part)." },
  { q: "Do you make duplicate and triplicate receipt books?", a: "Yes. Duplicate (2-part) books keep one customer and one office copy; triplicate (3-part) books add a third copy for accounts or warehouse. Both are numbered and perforated for clean tear-off." },
  { q: "Can you print our logo and business details?", a: "Yes. We print your logo, business name, address, and form fields in black or color, with sequential numbering per book or across a series." },
  { q: "How many sets per book, and what binding?", a: "Typically 50 or 100 sets per book, glue, staple, or wire bound with a wrap-around cover. We can match your preferred count and binding." },
  { q: "What is the MOQ and lead time?", a: "Stock formats from low volume; custom printed receipt books start at around 5,000 books with a 3–7 day proof and 10–18 day production, exported on FOB, CIF, and DDP terms." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
    { "@type": "ListItem", position: 2, name: "Products", item: `${SITE.domain}/products` },
    { "@type": "ListItem", position: 3, name: "NCR Forms & Business Forms", item: `${SITE.domain}/products/ncr-forms` },
    { "@type": "ListItem", position: 4, name: "NCR Receipt Books", item: `${SITE.domain}/products/ncr-receipt-books` },
  ],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Carbonless NCR Receipt Books",
  description: "Carbonless NCR receipt books in duplicate (2-part) and triplicate (3-part), numbered, perforated, glue or stapled binding, with custom logo and fields.",
  brand: { "@type": "Brand", name: SITE.name },
  manufacturer: { "@id": `${SITE.domain}/#organization` },
  image: NCR_FORMS_IMG,
  url: `${SITE.domain}/products/ncr-receipt-books`,
  additionalProperty: specs.map(({ label, value }) => ({ "@type": "PropertyValue", name: label, value })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

export default async function NcrReceiptBooksPage() {
  const ncrImg = r2Image(await getSlotImage("ncr-forms:hero", NCR_FORMS_IMG));

  const products = [
    { title: "Duplicate (2-Part) Receipt Books", desc: "One customer copy, one bound office copy — the most common receipt book.", image: ncrImg, href: "/products/ncr-forms/2-part", badge: "Most Common" },
    { title: "Triplicate (3-Part) Receipt Books", desc: "Customer, accounts, and file copies for stricter record keeping.", image: ncrImg, href: "/products/ncr-forms/3-part", badge: "Triplicate" },
    { title: "Custom Printed Receipt Books", desc: "Your logo, business details, and fields with numbering. OEM & private label.", image: ncrImg, href: "/products/custom-ncr-forms", badge: "Custom" },
    { title: "Order & Sales Books", desc: "Bound order and sales-pad books for counters and field sales teams.", image: ncrImg, href: "/products/custom-ncr-forms", badge: "Sales" },
  ];

  const browseSections: ShowcaseBrowseSection[] = [
    {
      title: "Related NCR Form Types",
      description: "Prefer loose sets or another document type? Explore the full NCR range.",
      cards: [
        { image: ncrImg, title: "NCR Invoice Books", desc: "Bound carbonless invoice books for distributors and accounts.", href: "/products/ncr-invoice-books", badge: "Invoices" },
        { image: ncrImg, title: "Delivery Note Forms", desc: "Multi-copy delivery notes and waybills for dispatch and signature.", href: "/products/delivery-note-forms", badge: "Logistics" },
        { image: ncrImg, title: "Custom NCR Forms", desc: "Loose sets and books in 2/3/4-part with custom printing.", href: "/products/custom-ncr-forms", badge: "Custom" },
        { image: ncrImg, title: "NCR Forms & Business Forms", desc: "The full carbonless and business-forms overview.", href: "/products/ncr-forms", badge: "Overview" },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ProductCategoryShowcaseTemplate
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "NCR Forms", href: "/products/ncr-forms" }, { label: "NCR Receipt Books" }]}
        heroImage={ncrImg}
        heroBadge={{ text: "Bound Carbonless Books", color: "amber" }}
        title={<>NCR Receipt Books<br /><span className="text-amber-400">Duplicate &amp; Triplicate</span></>}
        subtitle="Factory-direct carbonless NCR receipt books — duplicate (2-part) and triplicate (3-part), numbered, perforated, and bound, with your logo and fields, for retail counters and field sales teams."
        trustBadges={["Duplicate & Triplicate", "Sequential Numbering", "Perforated Tear-Off", "Custom Logo & Fields"]}
        stats={[
          { value: "2 / 3-Part", label: "Copies per Set" },
          { value: "50 / 100", label: "Sets per Book" },
          { value: "Numbered", label: "Per Book" },
          { value: "24h", label: "Quote Response" },
        ]}
        ctas={[
          { label: "Get Receipt Book Pricing", href: "#inquiry", variant: "primary", icon: <MessageSquare className="w-4 h-4" /> },
          { label: "WhatsApp for Quote", href: `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I need pricing for carbonless NCR receipt books. Please advise parts, sets per book, and printing.")}`, variant: "whatsapp", icon: <Phone className="w-4 h-4" />, external: true },
        ]}
        introSplit={{
          title: "Bound Carbonless Receipt Books From One Factory",
          lead: "Write once and the copy transfers — the customer keeps the top sheet, you keep the bound copy. We print, number, perforate, and bind receipt books in-house at factory-direct pricing.",
          bullets: [
            "Duplicate (2-part) & triplicate (3-part)",
            "50 / 100 sets per book, custom counts",
            "Sequential numbering & perforated tear-off",
            "Glue, staple, or wire binding with cover",
          ],
          image: ncrImg,
          imageAlt: "Carbonless NCR receipt books",
          cta: { label: "Send Inquiry Now", href: "#inquiry" },
        }}
        overview={{
          title: "Carbonless NCR Receipt Books",
          paragraphs: [
            "An NCR receipt book is a bound book of carbonless receipt sets — write once on the top sheet and the copy transfers automatically, with no carbon paper. The customer keeps the top copy while the bound copy stays in the book for your records.",
            "Duplicate (2-part) books keep one customer and one office copy; triplicate (3-part) books add a third copy for accounts or warehouse. Both come numbered per book and perforated for clean tear-off, typically 50 or 100 sets per book with glue, staple, or wire binding and a wrap-around cover.",
            "As the factory, we print your logo, business name, and fields in black or color, match your size and set count, and export worldwide on FOB, CIF, and DDP terms — at wholesale pricing with custom and OEM programs available.",
          ],
        }}
        featureSplit={{
          title: "Built for Counters & Field Sales",
          lead: "Receipt books suit handwritten, on-the-spot transactions where a clear duplicate record matters.",
          bullets: [
            "Clear carbonless transfer for handwriting",
            "Numbered per book to prevent lost receipts",
            "Easy tear-off for the customer copy",
            "Wrap-around cover protects the bound copies",
          ],
          image: ncrImg,
          imageAlt: "Receipt book in use at a counter",
          cta: { label: "Talk to a Specialist", href: "#inquiry" },
        }}
        productsTitle="Receipt Book Options"
        productsDescription="Duplicate, triplicate, custom printed, and sales books — numbered, perforated, and bound."
        products={products}
        browseSections={browseSections}
        comparison={{
          title: "Duplicate vs Triplicate Receipt Books",
          headers: { left: "Duplicate (2-Part)", right: "Triplicate (3-Part)" },
          rows: [
            { factor: "Copies", left: "Customer + office", right: "Customer + accounts + file" },
            { factor: "Best for", left: "Retail counters & simple sales", right: "Stricter record keeping" },
            { factor: "Ply colors", left: "White + color copy", right: "White + 2 color copies" },
            { factor: "Numbering", left: "Sequential per book", right: "Sequential per book" },
            { factor: "Binding", left: "Glue / staple / wire", right: "Glue / staple / wire" },
          ],
        }}
        specs={{
          title: "Specifications",
          rows: specs,
          note: "* Custom sizes, set counts, and binding available on request.",
        }}
        whyUs={{
          title: "Why Source Receipt Books From the Factory",
          subtitle: "In-house printing, numbering, and binding for clean, durable carbonless books.",
          items: [
            { icon: <Factory />, title: "True Factory-Direct", text: "No middleman — printed, numbered, and bound in our own factory." },
            { icon: <BookOpen />, title: "Bound & Numbered", text: "Glue, staple, or wire binding with sequential numbering per book." },
            { icon: <Boxes />, title: "Duplicate or Triplicate", text: "2-part and 3-part carbonless sets with configurable copy colors." },
            { icon: <ShieldCheck />, title: "Clean Tear-Off", text: "Perforated sets and clear carbonless transfer for handwriting." },
            { icon: <BadgeCheck />, title: "Custom & OEM", text: "Your logo, fields, size, and set count for distributors and brands." },
            { icon: <Phone />, title: "Fast Quotes", text: "Send your layout and set count for pricing within 24 hours." },
          ],
        }}
        faqs={faqs}
        crossLinks={[
          { label: "Custom NCR Forms", href: "/products/custom-ncr-forms" },
          { label: "NCR Invoice Books", href: "/products/ncr-invoice-books" },
          { label: "NCR Forms & Business Forms", href: "/products/ncr-forms" },
          { label: "OEM & Private Label", href: "/oem" },
        ]}
        inquiry={{
          title: "Get a Receipt Book Quote",
          description: "Tell us duplicate or triplicate, sets per book, size, printing, and quantity — we'll quote within 24 hours.",
        }}
      />
    </>
  );
}
