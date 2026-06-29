import type { Metadata } from "next";
import { BadgeCheck, Boxes, Factory, MessageSquare, Phone, ShieldCheck, Truck } from "lucide-react";
import { SITE } from "@/config/siteData";
import { getSlotImage } from "@/lib/imageSlotUtils";
import { r2Image } from "@/lib/r2";
import ProductCategoryShowcaseTemplate from "@/components/products/ProductCategoryShowcaseTemplate";
import type { ShowcaseBrowseSection } from "@/components/products/ProductCategoryShowcaseTemplate";
import { NCR_FORMS_IMG } from "../ncr-forms/ncr-forms-data";

export const metadata: Metadata = {
  title: "Delivery Note Forms | Carbonless Delivery & Waybill Forms",
  description:
    "Factory-direct carbonless delivery note forms, waybills, and goods-received notes — 3-part and 4-part, numbered, with driver, warehouse, and customer copies. Custom logo and fields, OEM.",
  keywords:
    "delivery note forms, delivery note books, waybill forms, goods received notes, proof of delivery forms, carbonless delivery notes, 3-part delivery note, delivery order forms, dispatch note forms, logistics forms",
  alternates: { canonical: `${SITE.domain}/products/delivery-note-forms` },
};

const specs = [
  { label: "Copies per Set", value: "2-part / 3-part / 4-part (driver, warehouse, customer, file)" },
  { label: "Format", value: "Loose sets, pads, or bound books" },
  { label: "Finishing", value: "Sequential numbering, perforation, signature & date fields" },
  { label: "Print", value: "Logo, dispatch fields, item lines; black or color" },
  { label: "Ply Colors", value: "White + color copy sequence per party" },
  { label: "Size", value: "A4, A5, or custom dispatch-note size" },
  { label: "Paper", value: "Carbonless (CB/CFB/CF) 50–55 gsm" },
  { label: "Use", value: "Delivery notes, waybills, goods-received & packing notes" },
  { label: "MOQ", value: "From low volume; custom printing from ~5,000 sets" },
  { label: "Lead Time", value: "Proof 3–7 days · production 10–18 days" },
];

const faqs = [
  { q: "What is a carbonless delivery note form?", a: "A delivery note form is a carbonless set that records what was delivered and confirms receipt by signature — write once and copies are made for the driver, warehouse, and customer. It is also called a delivery order, dispatch note, or proof-of-delivery form." },
  { q: "How many parts do delivery notes usually need?", a: "Most use 3-part (driver, warehouse/office, customer); logistics and freight flows often use 4-part to add a finance or carrier copy. We make 2-part to 4-part with a configurable copy sequence." },
  { q: "Can you add signature and date fields?", a: "Yes. We pre-print signature, date, received-by, and item-line fields, plus your logo and dispatch details, with sequential numbering for tracking." },
  { q: "Do you make waybills and goods-received notes too?", a: "Yes. The same carbonless format covers waybills, goods-received notes, packing notes, and dispatch notes — tell us your layout and copies per set." },
  { q: "What is the MOQ and lead time?", a: "Stock from low volume; custom printed delivery note forms start at around 5,000 sets with a 3–7 day proof and 10–18 day production, exported on FOB, CIF, and DDP terms." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
    { "@type": "ListItem", position: 2, name: "Products", item: `${SITE.domain}/products` },
    { "@type": "ListItem", position: 3, name: "NCR Forms & Business Forms", item: `${SITE.domain}/products/ncr-forms` },
    { "@type": "ListItem", position: 4, name: "Delivery Note Forms", item: `${SITE.domain}/products/delivery-note-forms` },
  ],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Carbonless Delivery Note & Waybill Forms",
  description: "Carbonless delivery note forms, waybills, and goods-received notes in 3-part and 4-part, numbered, with driver, warehouse, and customer copies and custom fields.",
  brand: { "@type": "Brand", name: SITE.name },
  manufacturer: { "@id": `${SITE.domain}/#organization` },
  image: NCR_FORMS_IMG,
  url: `${SITE.domain}/products/delivery-note-forms`,
  additionalProperty: specs.map(({ label, value }) => ({ "@type": "PropertyValue", name: label, value })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

export default async function DeliveryNoteFormsPage() {
  const ncrImg = r2Image(await getSlotImage("ncr-forms:hero", NCR_FORMS_IMG));

  const products = [
    { title: "3-Part Delivery Notes", desc: "Driver, warehouse, and customer copies — the standard delivery note set.", image: ncrImg, href: "/products/ncr-forms/3-part", badge: "Most Common" },
    { title: "4-Part Waybills", desc: "Adds a finance or carrier copy for logistics and freight workflows.", image: ncrImg, href: "/products/ncr-forms/4-part", badge: "Logistics" },
    { title: "Goods-Received Notes", desc: "Carbonless GRN sets for warehouse inbound and dispatch records.", image: ncrImg, href: "/products/custom-ncr-forms", badge: "Warehouse" },
    { title: "Custom Delivery Forms", desc: "Your logo, dispatch fields, and signature lines with numbering. OEM.", image: ncrImg, href: "/products/custom-ncr-forms", badge: "Custom" },
  ];

  const browseSections: ShowcaseBrowseSection[] = [
    {
      title: "Related NCR Form Types",
      description: "Need invoices, receipts, or another document? Explore the full NCR range.",
      cards: [
        { image: ncrImg, title: "NCR Invoice Books", desc: "Carbonless invoice books and forms, numbered and tax-ready.", href: "/products/ncr-invoice-books", badge: "Invoices" },
        { image: ncrImg, title: "NCR Receipt Books", desc: "Bound carbonless receipt books for counters and field sales.", href: "/products/ncr-receipt-books", badge: "Receipts" },
        { image: ncrImg, title: "Continuous Computer Forms", desc: "Fanfold packing lists and waybills for warehouse systems.", href: "/products/continuous-computer-forms", badge: "Continuous" },
        { image: ncrImg, title: "Custom NCR Forms", desc: "Loose sets and books in 2/3/4-part with custom printing.", href: "/products/custom-ncr-forms", badge: "Custom" },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ProductCategoryShowcaseTemplate
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "NCR Forms", href: "/products/ncr-forms" }, { label: "Delivery Note Forms" }]}
        heroImage={ncrImg}
        heroBadge={{ text: "Dispatch · Signature · Proof of Delivery", color: "amber" }}
        title={<>Delivery Note Forms<br /><span className="text-amber-400">Carbonless &amp; Waybills</span></>}
        subtitle="Factory-direct carbonless delivery note forms, waybills, and goods-received notes — 3-part and 4-part with driver, warehouse, and customer copies, numbered and with signature fields, for dispatch and proof of delivery."
        trustBadges={["3 / 4-Part", "Signature & Date Fields", "Sequential Numbering", "Driver / Warehouse / Customer"]}
        stats={[
          { value: "3 / 4-Part", label: "Copies per Set" },
          { value: "Numbered", label: "Trackable" },
          { value: "Sign-Off", label: "Proof of Delivery" },
          { value: "24h", label: "Quote Response" },
        ]}
        ctas={[
          { label: "Get Delivery Note Pricing", href: "#inquiry", variant: "primary", icon: <MessageSquare className="w-4 h-4" /> },
          { label: "WhatsApp for Quote", href: `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I need pricing for carbonless delivery note / waybill forms. Please advise parts and printing.")}`, variant: "whatsapp", icon: <Phone className="w-4 h-4" />, external: true },
        ]}
        introSplit={{
          title: "Proof-of-Delivery Forms From One Factory",
          lead: "Record what was delivered and confirm receipt by signature — write once and the driver, warehouse, and customer each get a copy, numbered and ready to file.",
          bullets: [
            "3-part & 4-part with party copy sequence",
            "Signature, date & received-by fields",
            "Sequential numbering for tracking",
            "Loose sets, pads, or bound books",
          ],
          image: ncrImg,
          imageAlt: "Carbonless delivery note and waybill forms",
          cta: { label: "Send Inquiry Now", href: "#inquiry" },
        }}
        overview={{
          title: "Carbonless Delivery Note & Waybill Forms",
          paragraphs: [
            "A delivery note form is a carbonless set that records what was delivered and confirms receipt by signature — write once and copies are made for the driver, warehouse, and customer. It is also called a delivery order, dispatch note, or proof-of-delivery form.",
            "Most delivery flows use 3-part (driver, warehouse/office, customer); logistics and freight often use 4-part to add a finance or carrier copy. We pre-print signature, date, received-by, and item-line fields, plus your logo and dispatch details, with sequential numbering for tracking.",
            "The same carbonless format covers waybills, goods-received notes, packing notes, and dispatch notes. As the factory, we supply loose sets, pads, and bound books, and export worldwide on FOB, CIF, and DDP terms at wholesale pricing.",
          ],
        }}
        featureSplit={{
          title: "Built for Dispatch & Signature",
          lead: "Delivery notes need clear copies and a place to sign — so each party keeps proof of what was delivered.",
          bullets: [
            "Color-coded copy per party (driver / warehouse / customer)",
            "Signature, date & received-by fields",
            "Numbered for dispatch tracking and audit",
            "Perforated tear-off for the customer copy",
          ],
          image: ncrImg,
          imageAlt: "Delivery note being signed at dispatch",
          cta: { label: "Talk to a Specialist", href: "#inquiry" },
        }}
        productsTitle="Delivery Form Options"
        productsDescription="3-part delivery notes, 4-part waybills, goods-received notes, and custom forms — numbered and signed."
        products={products}
        browseSections={browseSections}
        comparison={{
          title: "3-Part vs 4-Part Delivery Forms",
          headers: { left: "3-Part Delivery Note", right: "4-Part Waybill" },
          rows: [
            { factor: "Copies", left: "Driver + warehouse + customer", right: "Adds finance / carrier copy" },
            { factor: "Best for", left: "Standard delivery & dispatch", right: "Logistics & freight workflows" },
            { factor: "Fields", left: "Signature, date, items", right: "Signature, date, items, carrier" },
            { factor: "Format", left: "Loose sets or books", right: "Loose sets or books" },
            { factor: "Numbering", left: "Sequential", right: "Sequential" },
          ],
        }}
        specs={{
          title: "Specifications",
          rows: specs,
          note: "* Waybills, goods-received notes, and custom layouts available on request.",
        }}
        whyUs={{
          title: "Why Source Delivery Forms From the Factory",
          subtitle: "In-house printing, numbering, and collating for dispatch-ready carbonless forms.",
          items: [
            { icon: <Factory />, title: "True Factory-Direct", text: "No middleman — printed, numbered, and collated in our own factory." },
            { icon: <Truck />, title: "Built for Dispatch", text: "Driver, warehouse, and customer copies with signature and date fields." },
            { icon: <Boxes />, title: "3-Part or 4-Part", text: "Configurable copy sequence for delivery notes and waybills." },
            { icon: <ShieldCheck />, title: "Numbered & Trackable", text: "Sequential numbering and perforation for clean proof of delivery." },
            { icon: <BadgeCheck />, title: "Custom & OEM", text: "Your logo, dispatch fields, and layout for distributors and 3PLs." },
            { icon: <Phone />, title: "Fast Quotes", text: "Send your layout and copies per set for pricing within 24 hours." },
          ],
        }}
        faqs={faqs}
        crossLinks={[
          { label: "Custom NCR Forms", href: "/products/custom-ncr-forms" },
          { label: "Continuous Computer Forms", href: "/products/continuous-computer-forms" },
          { label: "NCR Forms & Business Forms", href: "/products/ncr-forms" },
          { label: "Shipping Labels", href: "/products/shipping-labels" },
        ]}
        inquiry={{
          title: "Get a Delivery Note Quote",
          description: "Tell us 3-part or 4-part, fields and signature lines, size, and quantity — we'll quote within 24 hours.",
        }}
      />
    </>
  );
}
