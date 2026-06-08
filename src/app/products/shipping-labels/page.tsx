import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/shared/InquiryForm";
import { Truck, Package, Printer, CheckCircle, ArrowRight, MessageSquare, Layers, Boxes } from "lucide-react";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: "4x6 Shipping Labels & Direct Thermal Rolls",
  description:
    "Factory-direct 4x6 direct thermal shipping labels — rolls & fanfold, Zebra/Dymo/Rollo compatible, BPA-free, bulk MOQ & OEM. Global export. Get a same-week quote.",
  keywords:
    "direct thermal shipping labels, 4x6 thermal labels, shipping label rolls, fanfold shipping labels, zebra shipping labels, dymo shipping labels, 4x6 label rolls, bulk shipping labels, direct thermal labels, thermal label printer paper",
  alternates: { canonical: `${SITE.domain}/products/shipping-labels` },
  openGraph: {
    title: "Direct Thermal Shipping Labels | 4x6, Rolls & Fanfold | ZhixinPaper",
    description:
      "Factory-direct 4x6 direct thermal shipping labels — rolls & fanfold, Zebra/Dymo compatible, BPA-free, bulk MOQ & OEM.",
    url: `${SITE.domain}/products/shipping-labels`,
    type: "website",
    images: [{ url: `${SITE.domain}/og-default.png`, width: 1200, height: 630, alt: "ZhixinPaper Direct Thermal Shipping Labels", type: "image/png" }],
  },
};

const subProducts = [
  {
    icon: "📦",
    title: "4×6 Shipping Labels",
    desc: "The standard e-commerce shipping size. Direct thermal, in rolls or fanfold. Compatible with Amazon FBA, eBay, Shopify, and all major courier label formats.",
    href: "/products/thermal-labels/4x6in",
    hrefLabel: "View 4×6 size details",
  },
  {
    icon: "🧻",
    title: "Shipping Label Rolls",
    desc: "Continuous direct thermal label rolls on 1\" or 3\" cores, sized for desktop and industrial thermal printers. Custom widths and counts per roll available.",
  },
  {
    icon: "📚",
    title: "Fanfold Shipping Labels",
    desc: "Z-fold stacks for high-volume, non-stop printing — no roll spindle needed. Ideal for warehouse and 3PL fulfillment lines running thousands of labels per day.",
  },
  {
    icon: "🖨️",
    title: "Printer-Compatible",
    desc: "Direct thermal labels matched to Zebra, Dymo, Rollo, Munbyn, and other desktop/industrial thermal printers — confirmed by size, core, and perforation.",
  },
];

const specs = [
  { label: "Most Popular Size", value: "4\" × 6\" (100 × 150 mm)" },
  { label: "Other Sizes", value: "2.25×1.25\", 4×4\", 2×1\", custom (±0.5mm)" },
  { label: "Format", value: "Rolls (1\" / 3\" core) or Fanfold (Z-stack)" },
  { label: "Material", value: "Direct thermal (no ribbon needed)" },
  { label: "Adhesive", value: "Permanent acrylic / removable (selectable)" },
  { label: "Labels per Roll", value: "250 / 500 / 1,000 (size-dependent)" },
  { label: "Coating", value: "BPA-free (standard) / phenol-free option" },
  { label: "MOQ", value: "Stock sizes from low volume; custom from 5,000 rolls" },
  { label: "Lead Time", value: "Stock 3–7 days · custom 10–18 days" },
  { label: "Incoterms", value: "EXW, FOB, CIF, DDP" },
];

const compatibility = [
  { brand: "Zebra", models: "ZD220 / ZD420 / GK420d / industrial ZT series" },
  { brand: "Dymo", models: "4XL / 5XL (4×6 direct thermal)" },
  { brand: "Rollo", models: "Desktop direct thermal label printer" },
  { brand: "Munbyn / Phomemo", models: "Desktop 4×6 thermal printers" },
  { brand: "Generic / Industrial", models: "Any direct thermal printer by size & core" },
];

const faqs = [
  { q: "What is the standard shipping label size?", a: "The most common e-commerce shipping label is 4\" × 6\" (100 × 150 mm). We also supply 2.25×1.25\", 4×4\", and custom sizes." },
  { q: "Rolls or fanfold — which should I choose?", a: "Rolls suit desktop printers with a spindle; fanfold (Z-stack) suits high-volume warehouse/3PL lines and printers without a roll holder. We supply both in direct thermal." },
  { q: "Are these labels compatible with Zebra, Dymo, and Rollo?", a: "Yes. Our direct thermal shipping labels are matched to Zebra (ZD220/ZD420/GK420d), Dymo 4XL/5XL, Rollo, Munbyn, and most desktop/industrial thermal printers by size, core, and perforation." },
  { q: "Direct thermal vs thermal transfer — which is right for shipping?", a: "Shipping labels are almost always direct thermal: no ribbon, lower cost, and print life is ample for transit. Use thermal transfer only for long-term outdoor/chemical exposure." },
  { q: "What is the MOQ for bulk or OEM shipping labels?", a: "Stock sizes are available from low volume. Custom sizes, adhesives, or private-label packaging start at 5,000 rolls. Contact us with your size and quantity for a quote." },
];

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Direct Thermal Shipping Labels",
  description:
    "Factory-direct 4x6 direct thermal shipping labels in rolls and fanfold — Zebra/Dymo compatible, BPA-free, OEM and bulk.",
  url: `${SITE.domain}/products/shipping-labels`,
  isPartOf: { "@id": `${SITE.domain}/#website` },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      "4x6 Shipping Labels",
      "Shipping Label Rolls",
      "Fanfold Shipping Labels",
      "Printer-Compatible Direct Thermal Labels",
    ].map((name, i) => ({ "@type": "ListItem", position: i + 1, name })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
    { "@type": "ListItem", position: 2, name: "Products", item: `${SITE.domain}/products` },
    { "@type": "ListItem", position: 3, name: "Shipping Labels", item: `${SITE.domain}/products/shipping-labels` },
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

export default function ShippingLabelsPage() {
  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200 py-3">
        <div className="container">
          <div className="text-sm text-slate-500">
            <Link href="/" className="hover:text-brand-navy">Home</Link> <span className="mx-1">/</span>
            <Link href="/products" className="hover:text-brand-navy">Products</Link> <span className="mx-1">/</span>
            <span className="text-slate-700 font-medium">Shipping Labels</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-brand-navy text-white py-14">
        <div className="container">
          <div className="flex flex-wrap gap-2 mb-4">
            {["Direct Thermal", "4×6", "Rolls & Fanfold", "Zebra / Dymo", "OEM"].map((t) => (
              <span key={t} className="text-xs bg-white/10 border border-white/15 text-slate-200 px-3 py-1 rounded-full font-medium">{t}</span>
            ))}
          </div>
          <h1 className="font-sora text-3xl sm:text-4xl font-extrabold mb-3 leading-tight">
            Direct Thermal Shipping Labels<br />
            <span className="text-amber-400">4×6, Rolls &amp; Fanfold</span>
          </h1>
          <p className="text-slate-300 max-w-2xl text-base leading-relaxed">
            Factory-direct direct-thermal shipping labels for e-commerce sellers, warehouses, and 3PLs.
            4×6 and custom sizes, in rolls or fanfold, matched to Zebra, Dymo, Rollo, and industrial
            thermal printers — BPA-free, bulk pricing, and full OEM/private-label.
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* LEFT */}
          <div className="lg:col-span-2 space-y-12">

            {/* Sub-products */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Layers className="w-5 h-5 text-amber-600" />
                <h2 className="font-sora text-xl font-bold text-slate-900">Shipping Label Range</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {subProducts.map(({ icon, title, desc, href, hrefLabel }) => (
                  <div key={title} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-amber-300 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">{icon}</span>
                      <span className="font-sora font-bold text-slate-900 text-sm">{title}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{desc}</p>
                    {href && (
                      <Link href={href} className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-amber-600 hover:text-amber-800">
                        {hrefLabel} <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Direct thermal explainer */}
            <div>
              <h2 className="font-sora text-xl font-bold text-slate-900 mb-3">Direct Thermal vs Thermal Transfer</h2>
              <p className="text-slate-600 leading-relaxed text-sm">
                Shipping labels are almost always <strong>direct thermal</strong>: the image is created by heat alone —
                no ink or ribbon needed — which lowers cost and simplifies printing. Print life is more than enough for
                transit and warehousing. Choose thermal transfer only when labels face long-term outdoor, chemical, or
                high-heat exposure. All labels on this page are direct thermal unless specified.
              </p>
            </div>

            {/* Specs */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Boxes className="w-5 h-5 text-amber-600" />
                <h2 className="font-sora text-xl font-bold text-slate-900">Specifications</h2>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <table className="w-full text-sm">
                  <tbody>
                    {specs.map(({ label, value }, i) => (
                      <tr key={label} className={i % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                        <td className="px-5 py-3 font-medium text-slate-600 w-48 whitespace-nowrap">{label}</td>
                        <td className="px-5 py-3 text-slate-900 font-semibold">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Compatibility matrix */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Printer className="w-5 h-5 text-amber-600" />
                <h2 className="font-sora text-xl font-bold text-slate-900">Printer Compatibility</h2>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-5 py-3 text-left font-semibold text-slate-700 w-40">Brand</th>
                      <th className="px-5 py-3 text-left font-semibold text-slate-700">Compatible Models</th>
                    </tr>
                  </thead>
                  <tbody>
                    {compatibility.map(({ brand, models }, i) => (
                      <tr key={brand} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="px-5 py-3 font-semibold text-slate-900">{brand}</td>
                        <td className="px-5 py-3 text-slate-600">{models}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Bulk & OEM */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <Truck className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-sora font-bold text-amber-900 mb-1">Bulk & OEM Shipping Labels</div>
                  <p className="text-sm text-amber-800 mb-3">
                    Factory-direct pricing for distributors and high-volume sellers. Custom sizes, adhesives,
                    perforation, and private-label packaging available. CIF to major ports worldwide.
                  </p>
                  <Link href="/oem" className="inline-flex items-center gap-2 text-sm font-bold text-amber-700 hover:text-amber-900">
                    OEM & Private Label <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-5 h-5 text-amber-600" />
                <h2 className="font-sora text-xl font-bold text-slate-900">Frequently Asked Questions</h2>
              </div>
              <div className="space-y-3">
                {faqs.map(({ q, a }) => (
                  <div key={q} className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                    <h3 className="font-sora font-semibold text-slate-900 mb-2 text-sm">{q}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cross-links */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100">
              <Link href="/products/thermal-labels/4x6in" className="inline-flex items-center gap-2 text-sm text-amber-600 hover:text-amber-800 font-semibold"><Package className="w-4 h-4" />4×6 Label Details →</Link>
              <Link href="/products/thermal-labels" className="inline-flex items-center gap-2 text-sm text-amber-600 hover:text-amber-800 font-semibold">All Thermal Labels →</Link>
              <Link href="/products/linerless-labels" className="inline-flex items-center gap-2 text-sm text-amber-600 hover:text-amber-800 font-semibold">Linerless Labels →</Link>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white border-2 border-amber-500 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs text-green-600 font-semibold">Online — Responding within 12h</span>
                </div>
                <h3 className="font-sora text-lg font-extrabold text-slate-900 mb-1">Request a Quote</h3>
                <p className="text-sm text-slate-500 mb-5">Tell us your size, format (roll/fanfold), and quantity — we&apos;ll send unit pricing same week.</p>
                <InquiryForm compact />
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <h4 className="font-sora font-bold text-slate-900 text-sm">At a Glance</h4>
                {[
                  { icon: Package, label: "Popular Size", val: "4 × 6 in" },
                  { icon: Boxes, label: "Format", val: "Roll / Fanfold" },
                  { icon: Printer, label: "Type", val: "Direct Thermal" },
                  { icon: Truck, label: "Incoterms", val: "FOB · CIF · DDP" },
                ].map(({ icon: Icon, label, val }) => (
                  <div key={label} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-slate-500"><Icon className="w-4 h-4" />{label}</div>
                    <span className="font-semibold text-slate-900">{val}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-5">
                <h4 className="font-sora font-bold text-slate-900 text-sm mb-3">Certifications</h4>
                <div className="space-y-2">
                  {["ISO 9001:2015", "FSC Certified", "BPA-Free", "RoHS / REACH"].map((c) => (
                    <div key={c} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />{c}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
