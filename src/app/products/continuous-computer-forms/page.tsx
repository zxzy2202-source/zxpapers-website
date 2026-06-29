import type { Metadata } from "next";
import { BadgeCheck, Boxes, Factory, Layers, MessageSquare, Phone, Printer, ShieldCheck } from "lucide-react";
import { SITE } from "@/config/siteData";
import { getSlotImage } from "@/lib/imageSlotUtils";
import { r2Image } from "@/lib/r2";
import ProductCategoryShowcaseTemplate from "@/components/products/ProductCategoryShowcaseTemplate";
import type { ShowcaseBrowseSection } from "@/components/products/ProductCategoryShowcaseTemplate";
import { NCR_FORMS_IMG } from "../ncr-forms/ncr-forms-data";

export const metadata: Metadata = {
  title: "Continuous Computer Forms | Fanfold & Pin-Feed Form Paper",
  description:
    "Factory-direct continuous computer forms — fanfold, pin-feed, and tractor-feed paper for dot-matrix printers, ERP, and logistics systems. Plain or carbonless multi-part, custom sizes, OEM.",
  keywords:
    "continuous computer forms, continuous form paper, fanfold forms, pin-feed forms, tractor-feed forms, dot matrix printer paper, computer form paper, continuous ncr forms, multi-part continuous forms, sprocket feed paper",
  alternates: { canonical: `${SITE.domain}/products/continuous-computer-forms` },
};

const specs = [
  { label: "Format", value: "Continuous fanfold (Z-stack), sprocket / pin-feed margins" },
  { label: "Plies", value: "1-ply plain or 2/3/4-part carbonless (NCR)" },
  { label: "Feed", value: "Pin-feed / tractor-feed for impact & dot-matrix printers" },
  { label: "Margins", value: "Removable sprocket margins, micro-perforated tear-off" },
  { label: "Width", value: "9.5\", 11\", 12\", 15\" and custom (±0.5mm)" },
  { label: "Print", value: "Pre-printed layout, fields, logo; black or color" },
  { label: "Finishing", value: "Cross & vertical perforation, numbering, fanfold packing" },
  { label: "Paper", value: "Wood-free bond or carbonless (CB/CFB/CF) 50–60 gsm" },
  { label: "MOQ", value: "From low volume; custom printed from ~5,000 sets" },
  { label: "Lead Time", value: "10–18 business days" },
];

const faqs = [
  { q: "What are continuous computer forms?", a: "Continuous computer forms are sprocket-fed (pin-feed) fanfold paper that runs through impact and dot-matrix printers without a roll spindle — used for ERP printing, invoices, packing lists, and logistics paperwork. They can be plain 1-ply or carbonless 2/3/4-part." },
  { q: "Do you supply carbonless (NCR) continuous forms?", a: "Yes. We produce 2-part, 3-part, and 4-part carbonless continuous forms so each printed page produces multiple copies for the customer, accounts, and warehouse — collated and fanfolded ready to load." },
  { q: "Which printers are continuous forms compatible with?", a: "They suit dot-matrix and line-impact printers with a tractor/pin feed (Epson LQ, OKI Microline, and similar). Tell us your printer and we'll confirm width, sprocket pitch, and form length." },
  { q: "Can you pre-print our layout, fields, and numbering?", a: "Yes. We pre-print your form layout, fields, and logo in black or color, with sequential numbering and cross/vertical perforation for clean tear-off." },
  { q: "What is the MOQ and lead time?", a: "Plain stock formats are available from low volume; custom printed continuous forms start at around 5,000 sets. Production runs 10–18 days, with worldwide export on FOB, CIF, and DDP terms." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
    { "@type": "ListItem", position: 2, name: "Products", item: `${SITE.domain}/products` },
    { "@type": "ListItem", position: 3, name: "NCR Forms & Business Forms", item: `${SITE.domain}/products/ncr-forms` },
    { "@type": "ListItem", position: 4, name: "Continuous Computer Forms", item: `${SITE.domain}/products/continuous-computer-forms` },
  ],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Continuous Computer Forms (Fanfold / Pin-Feed)",
  description: "Continuous fanfold, pin-feed, and tractor-feed computer forms for dot-matrix printers and ERP — plain or carbonless multi-part, custom sizes and printing.",
  brand: { "@type": "Brand", name: SITE.name },
  manufacturer: { "@id": `${SITE.domain}/#organization` },
  image: NCR_FORMS_IMG,
  url: `${SITE.domain}/products/continuous-computer-forms`,
  additionalProperty: specs.map(({ label, value }) => ({ "@type": "PropertyValue", name: label, value })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

export default async function ContinuousComputerFormsPage() {
  const ncrImg = r2Image(await getSlotImage("ncr-forms:hero", NCR_FORMS_IMG));

  const products = [
    { title: "1-Ply Continuous Forms", desc: "Single-ply fanfold bond for high-volume ERP and system printing on dot-matrix printers.", image: ncrImg, href: "#inquiry", badge: "Plain" },
    { title: "2/3/4-Part Carbonless Continuous", desc: "Multi-part carbonless continuous forms — every print makes customer, accounts, and warehouse copies.", image: ncrImg, href: "/products/ncr-forms/3-part", badge: "Carbonless" },
    { title: "Pre-Printed Continuous Forms", desc: "Your layout, fields, and logo pre-printed, with numbering and perforation.", image: ncrImg, href: "/products/custom-ncr-forms", badge: "Custom" },
    { title: "Packing List & Invoice Forms", desc: "Continuous packing lists and invoices for warehouse and logistics systems.", image: ncrImg, href: "/products/custom-ncr-forms", badge: "Logistics" },
  ];

  const browseSections: ShowcaseBrowseSection[] = [
    {
      title: "Related NCR Form Types",
      description: "Need bound or loose forms instead of continuous? Explore the full NCR range.",
      cards: [
        { image: ncrImg, title: "Custom NCR Forms", desc: "Loose sets and books in 2/3/4-part with custom printing and numbering.", href: "/products/custom-ncr-forms", badge: "Custom" },
        { image: ncrImg, title: "NCR Receipt Books", desc: "Bound carbonless receipt books for counters and field sales.", href: "/products/ncr-receipt-books", badge: "Books" },
        { image: ncrImg, title: "Delivery Note Forms", desc: "Multi-copy delivery notes and waybills for dispatch and signature.", href: "/products/delivery-note-forms", badge: "Logistics" },
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
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "NCR Forms", href: "/products/ncr-forms" }, { label: "Continuous Computer Forms" }]}
        heroImage={ncrImg}
        heroBadge={{ text: "Dot-Matrix & ERP Printing", color: "amber" }}
        title={<>Continuous Computer Forms<br /><span className="text-amber-400">Fanfold &amp; Pin-Feed</span></>}
        subtitle="Factory-direct continuous computer forms — sprocket-fed fanfold paper for dot-matrix printers, ERP, and logistics systems, in plain 1-ply or carbonless 2/3/4-part, with custom sizes, printing, and numbering."
        trustBadges={["Pin-Feed / Tractor-Feed", "Plain or Carbonless", "Custom Pre-Print", "Numbering & Perforation"]}
        stats={[
          { value: "1–4 Ply", label: "Plain or NCR" },
          { value: "9.5–15\"", label: "Widths" },
          { value: "ERP", label: "System Printing" },
          { value: "24h", label: "Quote Response" },
        ]}
        ctas={[
          { label: "Get Continuous Form Pricing", href: "#inquiry", variant: "primary", icon: <MessageSquare className="w-4 h-4" /> },
          { label: "WhatsApp for Quote", href: `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I need pricing for continuous computer forms (fanfold / pin-feed). Please advise width, plies, and printing.")}`, variant: "whatsapp", icon: <Phone className="w-4 h-4" />, external: true },
        ]}
        introSplit={{
          title: "Sprocket-Fed Forms From One Factory",
          lead: "Continuous forms run through impact and dot-matrix printers without a spindle — we pre-print, collate, and fanfold them, plain or carbonless, at factory-direct pricing.",
          bullets: [
            "Fanfold (Z-stack) with pin-feed sprocket margins",
            "Plain 1-ply or carbonless 2/3/4-part",
            "9.5\", 11\", 12\", 15\" and custom widths",
            "Pre-printed layout, fields, logo & numbering",
          ],
          image: ncrImg,
          imageAlt: "Continuous fanfold computer forms",
          cta: { label: "Send Inquiry Now", href: "#inquiry" },
        }}
        overview={{
          title: "What Are Continuous Computer Forms?",
          paragraphs: [
            "Continuous computer forms are sprocket-fed (pin-feed) fanfold paper that runs through impact and dot-matrix printers without a roll spindle. They are used for ERP and system printing — invoices, packing lists, statements, and logistics paperwork — where a steady, high-volume paper feed matters.",
            "Forms can be plain 1-ply bond or carbonless 2-part, 3-part, and 4-part, so each printed page produces multiple copies for the customer, accounts, and warehouse. We collate and fanfold them ready to load, with removable sprocket margins and micro-perforated tear-off.",
            "As the factory, we pre-print your layout, fields, and logo, add sequential numbering and cross/vertical perforation, and produce 9.5\", 11\", 12\", 15\", and custom widths — exporting worldwide on FOB, CIF, and DDP terms at wholesale pricing.",
          ],
        }}
        featureSplit={{
          title: "Plain or Carbonless Continuous",
          lead: "Choose 1-ply for simple high-volume printing, or multi-part carbonless when every print needs several copies.",
          bullets: [
            "1-ply bond for fast ERP / system printing",
            "2/3/4-part carbonless for multi-copy paperwork",
            "Removable sprocket margins, clean tear-off",
            "Pre-printed and numbered to your layout",
          ],
          image: ncrImg,
          imageAlt: "Plain and carbonless continuous forms",
          cta: { label: "Talk to a Specialist", href: "#inquiry" },
        }}
        productsTitle="Continuous Form Options"
        productsDescription="Plain, carbonless, and pre-printed continuous forms for dot-matrix and ERP printing."
        products={products}
        browseSections={browseSections}
        comparison={{
          title: "Continuous Forms vs Loose Sets vs Books",
          headers: { left: "Continuous Forms", right: "Loose Sets / Books" },
          rows: [
            { factor: "Feed", left: "Pin-feed / tractor (dot-matrix)", right: "Hand-filled or single-sheet" },
            { factor: "Best for", left: "ERP & high-volume system printing", right: "Counter, field & manual use" },
            { factor: "Format", left: "Fanfold Z-stack", right: "Collated sets or bound books" },
            { factor: "Plies", left: "1-ply or 2/3/4-part carbonless", right: "2/3/4-part carbonless" },
            { factor: "Tear-off", left: "Micro-perforated margins", right: "Perforated stub / book spine" },
          ],
        }}
        specs={{
          title: "Specifications",
          rows: specs,
          note: "* Custom widths, plies, and pre-printing available on request.",
        }}
        whyUs={{
          title: "Why Source Continuous Forms From the Factory",
          subtitle: "In-house pre-printing, collating, and fanfolding — matched to your printers and systems.",
          items: [
            { icon: <Factory />, title: "True Factory-Direct", text: "No middleman — printed, collated, and fanfolded in our own factory." },
            { icon: <Printer />, title: "Printer-Matched", text: "Width, sprocket pitch, and form length confirmed for your dot-matrix printer." },
            { icon: <Layers />, title: "Plain or Carbonless", text: "1-ply bond or 2/3/4-part carbonless continuous forms." },
            { icon: <Boxes />, title: "Pre-Printed & Numbered", text: "Your layout, fields, logo, sequential numbering, and perforation." },
            { icon: <ShieldCheck />, title: "Certified Production", text: "ISO 9001:2015 production with consistent registration and tear-off." },
            { icon: <BadgeCheck />, title: "OEM & Export", text: "Custom formats and export carton packing on FOB, CIF, and DDP terms." },
          ],
        }}
        faqs={faqs}
        crossLinks={[
          { label: "Custom NCR Forms", href: "/products/custom-ncr-forms" },
          { label: "NCR Forms & Business Forms", href: "/products/ncr-forms" },
          { label: "Delivery Note Forms", href: "/products/delivery-note-forms" },
          { label: "OEM & Private Label", href: "/oem" },
        ]}
        inquiry={{
          title: "Get a Continuous Form Quote",
          description: "Tell us your width, plies, printer model, layout, and quantity — we'll recommend the right continuous form and quote within 24 hours.",
        }}
      />
    </>
  );
}
