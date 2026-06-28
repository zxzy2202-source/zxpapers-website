import type { Metadata } from "next";
import { BadgeCheck, Boxes, Factory, FileText, Layers, MessageSquare, Phone, ShieldCheck, Truck } from "lucide-react";
import { getSlotImage } from "@/lib/imageSlotUtils";
import { r2Image } from "@/lib/r2";
import { SITE } from "@/config/siteData";
import ProductCategoryShowcaseTemplate from "@/components/products/ProductCategoryShowcaseTemplate";
import type { ShowcaseBrowseSection } from "@/components/products/ProductCategoryShowcaseTemplate";
import { NCR_FORMS_IMG, ncrFormParts, ncrFormTypes } from "./ncr-forms-data";

export const metadata: Metadata = {
  title: "NCR Forms & Carbonless Paper Manufacturer | Custom Printed",
  description:
    "Custom printed NCR carbonless forms for invoices, receipts, delivery notes, purchase orders, and logistics documents. 2-part, 3-part, 4-part and multi-part sets, books, or continuous. Custom size, numbering, logo & binding. MOQ from low volume.",
  keywords:
    "NCR forms, carbonless forms, NCR paper, carbonless paper, custom printed NCR forms, 2-part forms, 3-part forms, 4-part forms, carbonless invoice books, carbonless receipt books, delivery note forms, business forms, continuous form paper, NCR forms manufacturer",
  alternates: { canonical: `${SITE.domain}/products/ncr-forms` },
};

// Map each document type to the most relevant part-count detail page.
const formTypeToPart: Record<string, string> = {
  invoice: "3-part",
  receipt: "2-part",
  "delivery-note": "3-part",
  "purchase-order": "3-part",
  waybill: "4-part",
  business: "2-part",
};

const faqs = [
  { q: "What is NCR / carbonless paper?", a: "NCR (No Carbon Required) paper, also called carbonless paper, is coated so that writing or printing on the top sheet automatically transfers to the sheets below — producing multiple copies without inserting carbon paper between them." },
  { q: "What numbers of parts (plies) do you offer?", a: "We produce 2-part (duplicate), 3-part (triplicate), 4-part (quadruplicate), and multi-part (5+ ply) carbonless sets. The number of plies depends on how many copies each step of your workflow needs." },
  { q: "Which business forms can you print?", a: "Invoices, receipts, delivery notes, purchase orders, sales orders, waybills and logistics forms, medical and insurance forms, and bank/financial forms — as loose sets, glued or wire-bound books, or continuous computer forms." },
  { q: "Can you custom print our logo, fields, and numbering?", a: "Yes. Every form is fully customizable — your logo, brand colors, table fields, sequential numbering, multiple languages, paper size, ply colors, and binding (book, pad, loose set, or continuous)." },
  { q: "What is the minimum order quantity and lead time?", a: "MOQ is available from low volume for stock formats; custom printed forms typically start around 5,000 sets. Standard production runs 10–18 days; rush orders can ship faster. We export worldwide on FOB, CIF, and DDP terms." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
    { "@type": "ListItem", position: 2, name: "Products", item: `${SITE.domain}/products` },
    { "@type": "ListItem", position: 3, name: "NCR Forms & Business Forms", item: `${SITE.domain}/products/ncr-forms` },
  ],
};

const catalogEntries = [
  ...ncrFormParts.map((p) => ({ name: `${p.label} NCR Forms`, path: `/products/ncr-forms/${p.slug}` })),
  ...ncrFormTypes.map((t) => ({ name: t.label, path: `/products/ncr-forms/${formTypeToPart[t.anchor]}` })),
];

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "NCR Forms & Business Forms",
  description:
    "Custom printed NCR carbonless forms and business forms for invoices, receipts, delivery notes, purchase orders, and logistics documents — 2-part, 3-part, 4-part, and multi-part sets, books, or continuous.",
  url: `${SITE.domain}/products/ncr-forms`,
  isPartOf: { "@id": `${SITE.domain}/#website` },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: catalogEntries.length,
    itemListElement: catalogEntries.map((c, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: c.name,
      url: `${SITE.domain}${c.path}`,
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

export default async function NcrFormsPage() {
  const ncrImg = r2Image(await getSlotImage("ncr-forms:hero", NCR_FORMS_IMG));

  // Product grid = the 4 part counts, each linking to its detail page (core aggregation).
  const products = ncrFormParts.map((p) => ({
    title: p.label,
    desc: p.desc,
    image: ncrImg,
    href: `/products/ncr-forms/${p.slug}`,
    badge: p.badge,
  }));

  const browseSections: ShowcaseBrowseSection[] = [
    {
      title: "Business Forms by Document Type",
      description: "Carbonless forms for every business document — pick a document type, then the number of parts you need.",
      cards: ncrFormTypes.map((t) => ({
        image: ncrImg,
        title: t.label,
        desc: t.desc,
        href: `/products/ncr-forms/${formTypeToPart[t.anchor]}`,
        badge: "Carbonless",
      })),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ProductCategoryShowcaseTemplate
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "NCR Forms & Business Forms" }]}
        heroImage={ncrImg}
        heroBadge={{ text: "Custom Carbonless Forms", color: "amber" }}
        title={<>NCR Forms &amp;<br /><span className="text-amber-400">Carbonless Business Documents</span></>}
        subtitle="Custom printed NCR (carbonless) forms for invoices, receipts, delivery notes, purchase orders, and logistics — in 2-part, 3-part, 4-part, and multi-part sets, as loose sets, bound books, or continuous, with numbering, logo printing, and binding."
        trustBadges={["2/3/4-Part", "Custom Numbering", "Logo Printing", "Books or Sets"]}
        stats={[
          { value: "2–5+", label: "Parts / Plies" },
          { value: "Custom", label: "Numbering & Fields" },
          { value: "OEM", label: "Logo Printing" },
          { value: "24h", label: "Quote Response" },
        ]}
        ctas={[
          { label: "Get NCR Form Pricing", href: "#inquiry", variant: "primary", icon: <MessageSquare className="w-4 h-4" /> },
          { label: "WhatsApp for Quote", href: `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I need pricing for custom NCR carbonless forms. Please send options and pricing.")}`, variant: "whatsapp", icon: <Phone className="w-4 h-4" />, external: true },
        ]}
        introSplit={{
          title: "Carbonless Business Forms From One Factory",
          lead: "Write or print once and every copy is made — no carbon paper. We print, collate, number, and bind NCR forms in-house at factory-direct pricing.",
          bullets: [
            "2-part, 3-part, 4-part & multi-part sets",
            "Invoices, receipts, delivery notes, POs & waybills",
            "Loose sets, books/pads, or continuous forms",
            "Custom size, numbering, logo & ply colors",
          ],
          image: ncrImg,
          imageAlt: "Custom printed NCR carbonless business forms",
          cta: { label: "Send Inquiry Now", href: "#inquiry" },
        }}
        overview={{
          title: "Custom NCR Forms & Carbonless Paper",
          paragraphs: [
            "ZhixinPaper manufactures NCR (No Carbon Required) carbonless forms and business documents — invoices, receipts, delivery notes, purchase orders, sales orders, waybills, medical and insurance forms, and bank vouchers — printed, collated, numbered, and bound in our own factory.",
            "Choose the number of parts your workflow needs: 2-part (duplicate), 3-part (triplicate), 4-part (quadruplicate), or multi-part (5+ ply). Forms are supplied as loose collated sets, glued or wire-bound books and pads, or sprocket-fed continuous computer forms for impact printers.",
            "Every form is fully customizable — your logo, table fields, sequential numbering, ply colors, languages, paper size, and binding. We also supply plain carbonless paper (NCR paper) for in-house printing, and export worldwide on FOB, CIF, and DDP terms at wholesale pricing.",
          ],
        }}
        featureSplit={{
          title: "Custom Printed Forms or Plain Carbonless Paper",
          lead: "Order finished, branded forms ready to use — or plain carbonless (NCR) paper to print your own forms in-house.",
          bullets: [
            "Custom printed: logo, fields, numbering & binding",
            "Plain carbonless paper (CB / CFB / CF) sheets & reams",
            "Sequential numbering and barcoding",
            "Multi-language and GHS / regulatory text",
          ],
          image: ncrImg,
          imageAlt: "Custom printed and plain carbonless NCR paper",
          cta: { label: "Discuss Your Project", href: "#inquiry" },
        }}
        productsTitle="Choose Your Number of Parts"
        productsDescription="Pick the number of carbonless copies your workflow needs — each links to full specs and use cases."
        products={products}
        browseSections={browseSections}
        comparison={{
          title: "Loose Sets vs Bound Books",
          headers: { left: "Loose NCR Sets", right: "NCR Books / Pads" },
          rows: [
            { factor: "Best for", left: "Batch office use & system printing", right: "Field sales, receipts & order pads" },
            { factor: "Format", left: "Pre-collated loose sets", right: "Glued / wire / stitched with perforation" },
            { factor: "Numbering", left: "Sequential per set", right: "Sequential per book" },
            { factor: "MOQ", left: "From low volume", right: "From ~5,000 sets" },
            { factor: "Lead time", left: "10–18 days", right: "10–18 days" },
          ],
        }}
        specs={{
          title: "Standard Specifications",
          rows: [
            { label: "Paper", value: "Carbonless (CB / CFB / CF) 50–60 gsm, wood-free" },
            { label: "Plies", value: "2-part, 3-part, 4-part, or multi-part (5+)" },
            { label: "Ply Colors", value: "White, pink, yellow, blue, green (configurable per copy)" },
            { label: "Format", value: "Loose sets, books/pads, or continuous (sprocket-fed)" },
            { label: "Binding", value: "Glue, wire-O, stitched, or padded with tear-off perforation" },
            { label: "Numbering", value: "Sequential / custom numbering, barcoding optional" },
            { label: "Printing", value: "1–4 color offset; custom logo, fields, and languages" },
            { label: "Size", value: "A4, A5, A6, letter, or custom dimensions" },
            { label: "MOQ", value: "From low volume; custom printing from ~5,000 sets" },
            { label: "Lead Time", value: "10–18 days (standard); rush available" },
          ],
        }}
        whyUs={{
          title: "Why Source NCR Forms From the Factory",
          subtitle: "In-house printing, collating, numbering, and binding — at true factory-direct pricing.",
          items: [
            { icon: <Factory />, title: "True Factory-Direct", text: "No middleman — printed, collated, numbered, and bound in our own factory." },
            { icon: <Layers />, title: "Any Number of Parts", text: "2-part to multi-part (5+ ply) carbonless sets for any workflow." },
            { icon: <FileText />, title: "Every Business Form", text: "Invoices, receipts, delivery notes, POs, waybills, and office records." },
            { icon: <Boxes />, title: "Books, Sets or Continuous", text: "Loose sets, bound books/pads, or sprocket-fed continuous forms." },
            { icon: <ShieldCheck />, title: "Certified Production", text: "ISO 9001:2015 production with sequential numbering and QC." },
            { icon: <Truck />, title: "Global Export", text: "FOB, CIF, and DDP worldwide with full export documentation." },
          ],
        }}
        faqs={faqs}
        crossLinks={[
          { label: "Thermal Paper Rolls", href: "/products/thermal-paper-rolls" },
          { label: "Thermal & Shipping Labels", href: "/products/thermal-labels" },
          { label: "Can Labels", href: "/products/can-labels" },
          { label: "OEM & Private Label", href: "/oem" },
        ]}
        inquiry={{
          title: "Get NCR Form Pricing",
          description: "Tell us your document type, number of parts, quantities, and binding — we'll send wholesale pricing within 24 hours.",
        }}
      />
    </>
  );
}
