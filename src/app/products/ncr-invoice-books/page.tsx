import type { Metadata } from "next";
import { BadgeCheck, BookOpen, Boxes, Factory, MessageSquare, Phone, ShieldCheck } from "lucide-react";
import { SITE } from "@/config/siteData";
import { getSlotImage } from "@/lib/imageSlotUtils";
import { r2Image } from "@/lib/r2";
import ProductCategoryShowcaseTemplate from "@/components/products/ProductCategoryShowcaseTemplate";
import type { ShowcaseBrowseSection } from "@/components/products/ProductCategoryShowcaseTemplate";
import { NCR_FORMS_IMG } from "../ncr-forms/ncr-forms-data";

export const metadata: Metadata = {
  title: "NCR Invoice Books | Carbonless Invoice & Statement Forms",
  description:
    "Factory-direct carbonless NCR invoice books and invoice forms — 2-part and 3-part, numbered, tax-ready, with custom logo and fields. Loose sets or bound books. MOQ from low volume, OEM.",
  keywords:
    "ncr invoice books, carbonless invoice books, invoice forms, duplicate invoice book, triplicate invoice book, custom invoice books, numbered invoice forms, business invoice books, carbonless invoice forms, tax invoice books",
  alternates: { canonical: `${SITE.domain}/products/ncr-invoice-books` },
};

const specs = [
  { label: "Copies per Set", value: "2-part (duplicate) / 3-part (triplicate)" },
  { label: "Format", value: "Bound books, padded sets, or loose collated sets" },
  { label: "Finishing", value: "Sequential numbering, perforation, glue / staple binding" },
  { label: "Print", value: "Tax-ready layout, logo, fields; black or color" },
  { label: "Ply Colors", value: "White (original) + pink / yellow copies" },
  { label: "Sets per Book", value: "50 / 100 / custom" },
  { label: "Size", value: "A4, A5, 1/3 A4, or custom" },
  { label: "Paper", value: "Carbonless (CB/CFB/CF) 50–55 gsm" },
  { label: "MOQ", value: "From low volume; custom printing from ~5,000 sets" },
  { label: "Lead Time", value: "Proof 3–7 days · production 10–18 days" },
];

const faqs = [
  { q: "What is a carbonless NCR invoice book?", a: "An NCR invoice book is a bound or padded set of carbonless invoices — write or print once and the copy transfers to the sheets below. The original goes to the customer while copies stay for accounts and your records." },
  { q: "Do you make 2-part and 3-part invoice books?", a: "Yes. 2-part (duplicate) keeps a customer and an accounts copy; 3-part (triplicate) adds a warehouse or file copy. Both are numbered and perforated, in bound books or loose sets." },
  { q: "Can the invoices be tax-ready with our fields?", a: "Yes. We pre-print your tax-ready layout, logo, company and tax details, and line-item fields in black or color, with sequential numbering for audit and filing." },
  { q: "Loose sets or bound books — which should I choose?", a: "Bound books suit handwritten or counter invoicing; loose collated sets suit printer or system invoicing. We supply both, plus padded sets." },
  { q: "What is the MOQ and lead time?", a: "Stock from low volume; custom printed invoice books start at around 5,000 sets with a 3–7 day proof and 10–18 day production, exported on FOB, CIF, and DDP terms." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
    { "@type": "ListItem", position: 2, name: "Products", item: `${SITE.domain}/products` },
    { "@type": "ListItem", position: 3, name: "NCR Forms & Business Forms", item: `${SITE.domain}/products/ncr-forms` },
    { "@type": "ListItem", position: 4, name: "NCR Invoice Books", item: `${SITE.domain}/products/ncr-invoice-books` },
  ],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Carbonless NCR Invoice Books & Forms",
  description: "Carbonless NCR invoice books and forms in 2-part and 3-part, numbered, tax-ready, with custom logo and fields, as loose sets or bound books.",
  brand: { "@type": "Brand", name: SITE.name },
  manufacturer: { "@id": `${SITE.domain}/#organization` },
  image: NCR_FORMS_IMG,
  url: `${SITE.domain}/products/ncr-invoice-books`,
  additionalProperty: specs.map(({ label, value }) => ({ "@type": "PropertyValue", name: label, value })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

export default async function NcrInvoiceBooksPage() {
  const ncrImg = r2Image(await getSlotImage("ncr-forms:hero", NCR_FORMS_IMG));

  const products = [
    { title: "2-Part Invoice Books", desc: "Customer original plus an accounts copy — the standard duplicate invoice book.", image: ncrImg, href: "/products/ncr-forms/2-part", badge: "Duplicate" },
    { title: "3-Part Invoice Books", desc: "Customer, accounts, and warehouse / file copies for fuller records.", image: ncrImg, href: "/products/ncr-forms/3-part", badge: "Triplicate" },
    { title: "Loose Invoice Sets", desc: "Pre-collated loose sets for printer or system invoicing.", image: ncrImg, href: "/products/custom-ncr-forms", badge: "Loose Sets" },
    { title: "Custom Printed Invoices", desc: "Tax-ready layout, logo, and fields with numbering. OEM & private label.", image: ncrImg, href: "/products/custom-ncr-forms", badge: "Custom" },
  ];

  const browseSections: ShowcaseBrowseSection[] = [
    {
      title: "Related NCR Form Types",
      description: "Need receipts, delivery notes, or another document? Explore the full NCR range.",
      cards: [
        { image: ncrImg, title: "NCR Receipt Books", desc: "Bound carbonless receipt books for counters and field sales.", href: "/products/ncr-receipt-books", badge: "Receipts" },
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
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "NCR Forms", href: "/products/ncr-forms" }, { label: "NCR Invoice Books" }]}
        heroImage={ncrImg}
        heroBadge={{ text: "Tax-Ready Carbonless Invoices", color: "amber" }}
        title={<>NCR Invoice Books<br /><span className="text-amber-400">Carbonless Invoice Forms</span></>}
        subtitle="Factory-direct carbonless NCR invoice books and forms — 2-part and 3-part, numbered and tax-ready, with your logo and fields, as bound books or loose sets, for distributors, retailers, and accounts teams."
        trustBadges={["2 / 3-Part", "Tax-Ready Layout", "Sequential Numbering", "Books or Loose Sets"]}
        stats={[
          { value: "2 / 3-Part", label: "Copies per Set" },
          { value: "Numbered", label: "Audit-Ready" },
          { value: "Custom", label: "Layout & Fields" },
          { value: "24h", label: "Quote Response" },
        ]}
        ctas={[
          { label: "Get Invoice Book Pricing", href: "#inquiry", variant: "primary", icon: <MessageSquare className="w-4 h-4" /> },
          { label: "WhatsApp for Quote", href: `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I need pricing for carbonless NCR invoice books / forms. Please advise parts, format, and printing.")}`, variant: "whatsapp", icon: <Phone className="w-4 h-4" />, external: true },
        ]}
        introSplit={{
          title: "Carbonless Invoice Books From One Factory",
          lead: "Write or print once and every copy is made — original to the customer, copies for accounts and your files. We print, number, and bind invoice books in-house at factory-direct pricing.",
          bullets: [
            "2-part (duplicate) & 3-part (triplicate)",
            "Tax-ready layout, logo & line-item fields",
            "Sequential numbering for audit & filing",
            "Bound books, padded sets, or loose sets",
          ],
          image: ncrImg,
          imageAlt: "Carbonless NCR invoice books",
          cta: { label: "Send Inquiry Now", href: "#inquiry" },
        }}
        overview={{
          title: "Carbonless NCR Invoice Books & Forms",
          paragraphs: [
            "An NCR invoice book is a bound or padded set of carbonless invoices — write or print once and the copy transfers to the sheets below with no carbon paper. The original goes to the customer while copies stay for accounts and your records.",
            "2-part (duplicate) keeps a customer and an accounts copy; 3-part (triplicate) adds a warehouse or file copy. We pre-print a tax-ready layout with your logo, company and tax details, and line-item fields, and add sequential numbering for clean audit and filing.",
            "Bound books suit handwritten or counter invoicing, while loose collated sets suit printer or system invoicing — we supply both, plus padded sets, and export worldwide on FOB, CIF, and DDP terms at wholesale pricing.",
          ],
        }}
        featureSplit={{
          title: "Bound Books or Loose Sets",
          lead: "Match the format to how you invoice — bound for the counter, loose sets for system printing.",
          bullets: [
            "Bound books for handwritten / counter invoicing",
            "Loose collated sets for printer / system use",
            "Padded sets for desk and field use",
            "Numbered and perforated for clean records",
          ],
          image: ncrImg,
          imageAlt: "Bound and loose carbonless invoice sets",
          cta: { label: "Talk to a Specialist", href: "#inquiry" },
        }}
        productsTitle="Invoice Book Options"
        productsDescription="Duplicate, triplicate, loose sets, and custom printed invoices — numbered and tax-ready."
        products={products}
        browseSections={browseSections}
        comparison={{
          title: "2-Part vs 3-Part Invoice Books",
          headers: { left: "2-Part (Duplicate)", right: "3-Part (Triplicate)" },
          rows: [
            { factor: "Copies", left: "Customer + accounts", right: "Customer + accounts + file/warehouse" },
            { factor: "Best for", left: "Simple invoicing", right: "Fuller record & dispatch trail" },
            { factor: "Ply colors", left: "White + color copy", right: "White + 2 color copies" },
            { factor: "Format", left: "Books or loose sets", right: "Books or loose sets" },
            { factor: "Numbering", left: "Sequential", right: "Sequential" },
          ],
        }}
        specs={{
          title: "Specifications",
          rows: specs,
          note: "* Tax-ready layouts, custom sizes, and binding available on request.",
        }}
        whyUs={{
          title: "Why Source Invoice Books From the Factory",
          subtitle: "In-house printing, numbering, and binding for tax-ready carbonless invoices.",
          items: [
            { icon: <Factory />, title: "True Factory-Direct", text: "No middleman — printed, numbered, and bound in our own factory." },
            { icon: <BookOpen />, title: "Books or Loose Sets", text: "Bound, padded, or loose collated sets to match how you invoice." },
            { icon: <Boxes />, title: "Duplicate or Triplicate", text: "2-part and 3-part carbonless with configurable copy colors." },
            { icon: <ShieldCheck />, title: "Numbered & Tax-Ready", text: "Sequential numbering and tax-ready layout for audit and filing." },
            { icon: <BadgeCheck />, title: "Custom & OEM", text: "Your logo, tax details, and fields for distributors and brands." },
            { icon: <Phone />, title: "Fast Quotes", text: "Send your layout and quantity for pricing within 24 hours." },
          ],
        }}
        faqs={faqs}
        crossLinks={[
          { label: "Custom NCR Forms", href: "/products/custom-ncr-forms" },
          { label: "NCR Receipt Books", href: "/products/ncr-receipt-books" },
          { label: "Delivery Note Forms", href: "/products/delivery-note-forms" },
          { label: "OEM & Private Label", href: "/oem" },
        ]}
        inquiry={{
          title: "Get an Invoice Book Quote",
          description: "Tell us 2-part or 3-part, books or loose sets, size, layout, and quantity — we'll quote within 24 hours.",
        }}
      />
    </>
  );
}
