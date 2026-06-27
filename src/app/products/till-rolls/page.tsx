import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/shared/InquiryForm";
import Image from "next/image";
import { Ruler, Palette, Layers, CheckCircle, ArrowRight, MessageSquare, Truck, Package } from "lucide-react";
import { SITE } from "@/config/siteData";
import { paperRollSizes } from "@/config/navigation";
import { getSlotImages } from "@/lib/imageSlotUtils";
import type { SlotKey } from "@/config/imageSlots";

// Fallback product image when a per-size slot hasn't been set in admin
const TILL_ROLL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-rolls-RQBrphmgzbAMk7eq3HsvNq.webp";

// slug → admin-editable image slot (type-checked against the registry)
const SIZE_SLOT: Record<string, SlotKey> = {
  "80x80mm": "till-rolls:size:80x80mm",
  "57x50mm": "till-rolls:size:57x50mm",
  "80x70mm": "till-rolls:size:80x70mm",
  "110x80mm": "till-rolls:size:110x80mm",
  "57x40mm": "till-rolls:size:57x40mm",
  "57x30mm": "till-rolls:size:57x30mm",
};

export const metadata: Metadata = {
  title: "Till Rolls — 57mm & 80mm Thermal Rolls",
  description:
    "Factory-direct till rolls (thermal receipt rolls) — 57mm & 80mm, BPA-free, coreless and colored options. Bulk & wholesale pricing for UK/EU retailers. Get a quote.",
  keywords:
    "till rolls, 80mm till rolls, 57mm till rolls, cheap till rolls, till rolls wholesale, bpa free till rolls, thermal till rolls, colored till rolls, thermal receipt rolls",
  alternates: { canonical: `${SITE.domain}/products/till-rolls` },
  openGraph: {
    title: "Till Rolls — 57mm & 80mm Thermal Receipt Rolls | ZhixinPaper",
    description:
      "Factory-direct till rolls — 57mm & 80mm, BPA-free, coreless & colored. Bulk/wholesale for UK/EU retailers.",
    url: `${SITE.domain}/products/till-rolls`,
    type: "website",
    images: [{ url: `${SITE.domain}/og-default.png`, width: 1200, height: 630, alt: "ZhixinPaper Till Rolls", type: "image/png" }],
  },
};

// Browse by Type
const byType = [
  { title: "Standard Thermal", desc: "A-grade thermal coating, crisp print, consistent roll length.", href: "/products/receipt-paper-rolls" },
  { title: "BPA-Free Till Rolls", desc: "Phenol-free option for EU compliance & food service.", href: "/products/bpa-free-thermal-paper" },
  { title: "Coreless Till Rolls", desc: "More paper per roll, less waste — fewer roll changes.", href: "/products/receipt-paper-rolls" },
];

// Browse by Color (reference "Product By Color" — 4-col swatch grid)
const byColor = [
  { name: "White", cls: "bg-white border-slate-300" },
  { name: "Blue", cls: "bg-blue-400 border-blue-400" },
  { name: "Pink", cls: "bg-pink-300 border-pink-300" },
  { name: "Yellow", cls: "bg-yellow-300 border-yellow-300" },
  { name: "Green", cls: "bg-green-400 border-green-400" },
  { name: "Red", cls: "bg-red-400 border-red-400" },
  { name: "Orange", cls: "bg-orange-400 border-orange-400" },
  { name: "Purple", cls: "bg-purple-400 border-purple-400" },
];

const specs = [
  { label: "Common Widths", value: "57mm · 80mm · custom (±0.5mm)" },
  { label: "Roll Length", value: "Standard, long-life & coreless (more paper/roll)" },
  { label: "Core", value: "12mm / 25mm / coreless" },
  { label: "Coating", value: "BPA-free (standard) / phenol-free option" },
  { label: "Colors", value: "White, blue, pink, yellow, green base" },
  { label: "MOQ", value: "Bulk from low volume; custom from 5,000 rolls" },
  { label: "Lead Time", value: "Stock 3–7 days · custom 10–18 days" },
  { label: "Incoterms", value: "EXW, FOB, CIF, DDP (UK/EU ports)" },
];

const faqs = [
  { q: "What are till rolls?", a: "\"Till roll\" is the UK/EU term for a thermal receipt roll used in cash registers (tills) and EPOS systems. They are the same product as thermal receipt paper rolls." },
  { q: "What's the difference between 57mm and 80mm till rolls?", a: "57mm rolls suit card machines, mobile and handheld POS; 80mm rolls are the standard for retail and hospitality EPOS terminals. Confirm your terminal's width before ordering." },
  { q: "Are your till rolls BPA-free?", a: "Yes — BPA-free is our standard, with a phenol-free option for EU compliance and food-service use. Lab reports available on request." },
  { q: "Can I buy till rolls wholesale or in bulk?", a: "Yes. We are the factory, so bulk and wholesale pricing is direct with no middleman markup. Custom sizes and private-label packaging start at 5,000 rolls." },
  { q: "Do you offer colored till rolls?", a: "Yes — white plus blue, pink, yellow and green base paper. Colored rolls are handy for separating departments, shifts, or copy types." },
];

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Till Rolls",
  description: "Factory-direct till rolls (thermal receipt rolls) in 57mm & 80mm, BPA-free, coreless and colored, with bulk/wholesale pricing.",
  url: `${SITE.domain}/products/till-rolls`,
  isPartOf: { "@id": `${SITE.domain}/#website` },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: ["57mm Till Rolls", "80mm Till Rolls", "BPA-Free Till Rolls", "Coreless Till Rolls", "Colored Till Rolls"].map((name, i) => ({ "@type": "ListItem", position: i + 1, name })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
    { "@type": "ListItem", position: 2, name: "Products", item: `${SITE.domain}/products` },
    { "@type": "ListItem", position: 3, name: "Till Rolls", item: `${SITE.domain}/products/till-rolls` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

export default async function TillRollsPage() {
  const sizeImgs = await getSlotImages(
    paperRollSizes.map((s) => ({ slot: SIZE_SLOT[s.slug], fallback: TILL_ROLL_IMG })),
  );
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
            <span className="text-slate-700 font-medium">Till Rolls</span>
          </div>
        </div>
      </div>

      {/* Header / Banner */}
      <div className="bg-brand-navy text-white py-14">
        <div className="container">
          <div className="flex flex-wrap gap-2 mb-4">
            {["57mm & 80mm", "BPA-Free", "Coreless", "Colored", "Wholesale"].map((t) => (
              <span key={t} className="text-xs bg-white/10 border border-white/15 text-slate-200 px-3 py-1 rounded-full font-medium">{t}</span>
            ))}
          </div>
          <h1 className="font-sora text-3xl sm:text-4xl font-extrabold mb-3 leading-tight">
            Till Rolls<br />
            <span className="text-amber-400">57mm &amp; 80mm Thermal Receipt Rolls</span>
          </h1>
          <p className="text-slate-300 max-w-2xl text-base leading-relaxed">
            Factory-direct till rolls for UK &amp; EU retailers, hospitality, and distributors. The same product
            as thermal receipt rolls — in 57mm and 80mm, BPA-free, coreless and colored options, at true
            wholesale pricing with no middleman.
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* LEFT */}
          <div className="lg:col-span-2 space-y-12">

            {/* What are till rolls */}
            <div>
              <h2 className="font-sora text-xl font-bold text-slate-900 mb-3">What Are Till Rolls?</h2>
              <p className="text-slate-600 leading-relaxed text-sm">
                &ldquo;Till roll&rdquo; is the UK and EU term for a thermal receipt roll used in cash registers (tills)
                and EPOS systems — the same product sold elsewhere as thermal receipt paper rolls. Below you can browse
                by width, type, and color, or request a bulk quote.
              </p>
            </div>

            {/* Product By Color — 4-col swatch grid */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Palette className="w-5 h-5 text-amber-600" />
                <h2 className="font-sora text-xl font-bold text-slate-900">Till Rolls by Color</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {byColor.map(({ name, cls }) => (
                  <Link key={name} href="/products/colored-thermal-paper" className="group bg-white border border-slate-200 hover:border-amber-400 hover:shadow-md rounded-xl p-5 shadow-sm transition-all flex flex-col items-center text-center">
                    <span className={`w-14 h-14 rounded-full border shadow-inner mb-3 ${cls}`} />
                    <span className="font-sora font-semibold text-slate-800 text-sm group-hover:text-amber-700">{name}</span>
                    <span className="text-[11px] text-slate-400 mt-0.5">Till Rolls</span>
                  </Link>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-3">Colored till rolls help separate departments, shifts, or receipt copies.</p>
            </div>

            {/* Product By Size — 3-col image card grid */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Ruler className="w-5 h-5 text-amber-600" />
                <h2 className="font-sora text-xl font-bold text-slate-900">Till Rolls by Size</h2>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {paperRollSizes.map((size) => (
                  <Link key={size.slug} href={`/products/thermal-rolls/${size.slug}`} className="group bg-white border border-slate-200 hover:border-amber-400 hover:shadow-md rounded-xl overflow-hidden shadow-sm transition-all">
                    <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                      <Image src={sizeImgs[SIZE_SLOT[size.slug]] ?? TILL_ROLL_IMG} alt={`${size.label} till roll`} fill sizes="(max-width:640px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-sora font-bold text-slate-900 text-sm group-hover:text-amber-700">{size.label}</span>
                        {size.badge && <span className="text-[10px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">{size.badge}</span>}
                      </div>
                      <span className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-amber-600">View <ArrowRight className="w-3 h-3" /></span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Browse by Type */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Layers className="w-5 h-5 text-amber-600" />
                <h2 className="font-sora text-xl font-bold text-slate-900">Till Rolls by Type</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {byType.map(({ title, desc, href }) => (
                  <Link key={title} href={href} className="bg-white border border-slate-200 hover:border-amber-300 rounded-xl p-5 shadow-sm transition-colors">
                    <div className="font-sora font-bold text-slate-900 text-sm mb-1">{title}</div>
                    <p className="text-xs text-slate-600 leading-relaxed">{desc}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Specs */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Package className="w-5 h-5 text-amber-600" />
                <h2 className="font-sora text-xl font-bold text-slate-900">Specifications</h2>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <table className="w-full text-sm">
                  <tbody>
                    {specs.map(({ label, value }, i) => (
                      <tr key={label} className={i % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                        <td className="px-5 py-3 font-medium text-slate-600 w-44 whitespace-nowrap">{label}</td>
                        <td className="px-5 py-3 text-slate-900 font-semibold">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Wholesale & Bulk */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <Truck className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-sora font-bold text-amber-900 mb-1">Wholesale & Bulk Till Rolls</div>
                  <p className="text-sm text-amber-800 mb-3">
                    Buying direct from the factory means genuine wholesale pricing — no distributor markup.
                    Mixed pallets, custom sizes, and private-label boxing available, CIF to UK/EU ports.
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
              <Link href="/products/receipt-paper-rolls" className="inline-flex items-center gap-2 text-sm text-amber-600 hover:text-amber-800 font-semibold"><Package className="w-4 h-4" />Receipt Paper Rolls →</Link>
              <Link href="/products/bpa-free-thermal-paper" className="inline-flex items-center gap-2 text-sm text-amber-600 hover:text-amber-800 font-semibold">BPA-Free Thermal Paper →</Link>
              <Link href="/products/colored-thermal-paper" className="inline-flex items-center gap-2 text-sm text-amber-600 hover:text-amber-800 font-semibold">Colored Thermal Paper →</Link>
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
                <p className="text-sm text-slate-500 mb-5">Tell us width (57/80mm), quantity, and any color or BPA-free needs — we&apos;ll send wholesale pricing.</p>
                <InquiryForm compact />
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <h4 className="font-sora font-bold text-slate-900 text-sm">At a Glance</h4>
                {[
                  { icon: Ruler, label: "Widths", val: "57 / 80 mm" },
                  { icon: Layers, label: "Type", val: "Thermal (BPA-free)" },
                  { icon: Palette, label: "Colors", val: "5 options" },
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
