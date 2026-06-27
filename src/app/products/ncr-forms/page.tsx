import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/shared/InquiryForm";
import { CheckCircle, ArrowRight } from "lucide-react";
import { SITE } from "@/config/siteData";
import { getSlotImage } from "@/lib/imageSlotUtils";
import { NCR_FORMS_IMG, ncrFormParts, ncrFormTypes } from "./ncr-forms-data";

export const metadata: Metadata = {
  title: "NCR Forms & Carbonless Paper Manufacturer | Custom Printed",
  description:
    "Custom printed NCR carbonless forms for invoices, receipts, delivery notes, purchase orders, and logistics documents. 2-part, 3-part, 4-part and multi-part sets, books, or continuous. Custom size, numbering, logo & binding. MOQ from low volume.",
  keywords:
    "NCR forms, carbonless forms, NCR paper, carbonless paper, custom printed NCR forms, 2-part forms, 3-part forms, 4-part forms, carbonless invoice books, carbonless receipt books, delivery note forms, business forms, continuous form paper, NCR forms manufacturer",
  alternates: { canonical: `${SITE.domain}/products/ncr-forms` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE.domain },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": `${SITE.domain}/products` },
    { "@type": "ListItem", "position": 3, "name": "NCR Forms & Business Forms", "item": `${SITE.domain}/products/ncr-forms` },
  ],
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "NCR Forms & Business Forms",
  "description":
    "Custom printed NCR carbonless forms and business forms for invoices, receipts, delivery notes, purchase orders, and logistics documents — 2-part, 3-part, 4-part, and multi-part sets, books, or continuous.",
  "url": `${SITE.domain}/products/ncr-forms`,
  "isPartOf": { "@id": `${SITE.domain}/#website` },
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      ...ncrFormParts.map((p) => ({ name: `${p.label} NCR Forms`, url: `${SITE.domain}/products/ncr-forms/${p.slug}` })),
      ...ncrFormTypes.map((t) => ({ name: t.label, url: `${SITE.domain}/products/ncr-forms#${t.anchor}` })),
    ].map((item, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": item.name,
      "url": item.url,
    })),
  },
};

const faqs = [
  { q: "What is NCR / carbonless paper?", a: "NCR (No Carbon Required) paper, also called carbonless paper, is coated so that writing or printing on the top sheet automatically transfers to the sheets below — producing multiple copies without inserting carbon paper between them." },
  { q: "What numbers of parts (plies) do you offer?", a: "We produce 2-part (duplicate), 3-part (triplicate), 4-part (quadruplicate), and multi-part (5+ ply) carbonless sets. The number of plies depends on how many copies each step of your workflow needs." },
  { q: "Which business forms can you print?", a: "Invoices, receipts, delivery notes, purchase orders, sales orders, waybills and logistics forms, medical and insurance forms, and bank/financial forms — as loose sets, glued or wire-bound books, or continuous computer forms." },
  { q: "Can you custom print our logo, fields, and numbering?", a: "Yes. Every form is fully customizable — your logo, brand colors, table fields, sequential numbering, multiple languages, paper size, ply colors, and binding (book, pad, loose set, or continuous)." },
  { q: "What is the minimum order quantity and lead time?", a: "MOQ is available from low volume for stock formats; custom printed forms typically start around 5,000 sets. Standard production runs 10–18 days; rush orders can ship faster. We export worldwide on FOB, CIF, and DDP terms." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": { "@type": "Answer", "text": a },
  })),
};

const formats = [
  ["Loose NCR Sets", "Pre-collated sets for batch office use or system printing."],
  ["NCR Books / Pads", "Glued, wire-, or stitch-bound books with tear-off perforation — receipts, order books."],
  ["Continuous NCR Forms", "Sprocket-fed continuous paper for dot-matrix and impact printers."],
  ["Carbonless Paper Rolls", "Roll format for select ticketing and industrial equipment."],
  ["Pre-printed Forms", "Fixed-layout forms — invoices, delivery notes, institutional documents."],
  ["Custom Printed Forms", "Your logo, fields, colors, numbering, and size — fully bespoke."],
];

const applications = [
  ["Retail Receipts", "Carbonless Receipt Books"],
  ["Wholesale Orders", "Sales Order Forms / Order Books"],
  ["Logistics & Delivery", "Delivery Notes / Waybill Forms"],
  ["Warehouse & Inventory", "Packing List / Inventory Forms"],
  ["Accounting & Finance", "Invoice Forms / Payment Vouchers"],
  ["Restaurant & Hotel", "Order Pads / Room Service Forms"],
  ["Medical & Insurance", "Patient Record / Claim Forms"],
  ["Repair & Service", "Repair Order / Service Forms"],
  ["Rental Industry", "Rental Agreement Forms"],
  ["Government / Institutions", "Official / Application Forms"],
  ["Banking & Financial", "Bank Forms / Financial Vouchers"],
];

export default async function NcrFormsPage() {
  const ncrImage = await getSlotImage("ncr-forms:hero", NCR_FORMS_IMG);
  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <div className="bg-slate-50 py-10">
        <div className="container">
          <div className="text-sm text-slate-500 mb-3">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-1">/</span>
            <Link href="/products" className="hover:text-blue-600">Products</Link>
            <span className="mx-1">/</span>
            <span>NCR Forms &amp; Business Forms</span>
          </div>
        </div>
      </div>

      <div className="container py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">

            {/* Hero */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Image
                src={ncrImage}
                alt="Custom printed NCR carbonless business forms"
                className="w-full sm:w-64 h-48 object-cover rounded-2xl flex-shrink-0"
                width={256}
                height={192}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div>
                <span className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  NCR Forms &amp; Business Forms
                </span>
                <h1 className="text-3xl font-extrabold text-slate-900 mb-3">
                  NCR Forms &amp; Carbonless Business Documents
                </h1>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Custom printed NCR (carbonless) forms and business documents for invoices, receipts,
                  delivery notes, purchase orders, logistics, medical, and office records. Available in
                  2-part, 3-part, 4-part, and multi-part sets — as loose sets, bound books, or continuous
                  computer forms, with custom size, numbering, logo printing, and binding.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["2/3/4-Part", "Custom Numbering", "Logo Printing", "Books or Sets", "Multi-Language"].map((tag) => (
                    <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Variants */}
            <div id="custom">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Product Variants</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="group flex flex-col gap-2 p-5 bg-white border border-slate-200 rounded-2xl">
                  <span className="font-bold text-slate-800">Custom Printed NCR Forms</span>
                  <p className="text-sm text-slate-500">
                    Fully bespoke carbonless forms with your logo, table fields, sequential numbering,
                    ply colors, and binding — invoices, receipts, delivery notes, and more.
                  </p>
                </div>
                <div className="group flex flex-col gap-2 p-5 bg-white border border-slate-200 rounded-2xl">
                  <span className="font-bold text-slate-800">Plain Carbonless Paper (NCR Paper)</span>
                  <p className="text-sm text-slate-500">
                    Uncoated-back / coated-front carbonless sheets and reams for in-house printing of
                    your own forms on laser, inkjet, or impact printers.
                  </p>
                </div>
              </div>
            </div>

            {/* By number of parts */}
            <div id="by-parts">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Choose Your Number of Parts (Plies)</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ncrFormParts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/products/ncr-forms/${p.slug}`}
                    className="group flex flex-col gap-1 p-4 bg-white border border-slate-200 hover:border-amber-300 hover:bg-amber-50 rounded-xl transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-800 group-hover:text-amber-700 text-sm">{p.label}</span>
                      {p.badge && (
                        <span className="text-[10px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">
                          {p.badge}
                        </span>
                      )}
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all ml-auto" />
                    </div>
                    <p className="text-xs text-slate-500">{p.desc}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Form types */}
            <div id="form-types">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Business Forms We Manufacture</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ncrFormTypes.map((t) => (
                  <div key={t.anchor} id={t.anchor} className="flex flex-col gap-1 p-4 bg-white border border-slate-200 rounded-xl scroll-mt-28">
                    <span className="font-semibold text-slate-800 text-sm">{t.label}</span>
                    <p className="text-xs text-slate-500">{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Formats */}
            <div id="formats">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Binding &amp; Finished Formats</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {formats.map(([title, desc]) => (
                  <div key={title} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><span className="font-semibold text-slate-800">{title}</span> — {desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div id="applications">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Applications &amp; Use Cases</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {applications.map(([useCase, product]) => (
                  <div key={useCase} className="flex items-center justify-between gap-3 bg-amber-50 px-4 py-2.5 rounded-lg">
                    <span className="text-sm font-medium text-amber-800">{useCase}</span>
                    <span className="text-xs text-amber-700/80 text-right">{product}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Standard Specifications</h2>
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold text-slate-700">Parameter</th>
                      <th className="text-left px-4 py-3 font-semibold text-slate-700">Specification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      ["Paper", "Carbonless (CB / CFB / CF) 50–60 gsm, wood-free"],
                      ["Plies", "2-part, 3-part, 4-part, or multi-part (5+)"],
                      ["Ply Colors", "White, pink, yellow, blue, green (configurable per copy)"],
                      ["Format", "Loose sets, books/pads, or continuous (sprocket-fed)"],
                      ["Binding", "Glue, wire-O, stitched, or padded with tear-off perforation"],
                      ["Numbering", "Sequential / custom numbering, barcoding optional"],
                      ["Printing", "1–4 color offset; custom logo, fields, and languages"],
                      ["Size", "A4, A5, A6, letter, or custom dimensions"],
                      ["MOQ", "From low volume; custom printing from ~5,000 sets"],
                      ["Lead Time", "10–18 days (standard); rush available"],
                    ].map(([param, spec]) => (
                      <tr key={param} className="hover:bg-slate-50">
                        <td className="px-4 py-3 font-medium text-slate-700">{param}</td>
                        <td className="px-4 py-3 text-slate-600">{spec}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* FAQ */}
            <div id="faq">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {faqs.map(({ q, a }) => (
                  <details key={q} className="group rounded-xl border border-slate-200 bg-white p-4 open:bg-amber-50/40">
                    <summary className="cursor-pointer list-none font-semibold text-slate-800 marker:hidden group-open:text-amber-700">
                      {q}
                    </summary>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{a}</p>
                  </details>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm" id="inquiry">
              <h3 className="text-lg font-bold text-slate-900 mb-1">Get a Quote</h3>
              <p className="text-sm text-slate-500 mb-5">Response within {SITE.responseTime}</p>
              <InquiryForm compact />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
