import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/shared/InquiryForm";
import { CheckCircle, ArrowRight, Package, Ruler, ShieldCheck, Truck, Clock, MessageSquare, Palette } from "lucide-react";
import { paperRollSizes } from "@/config/navigation";
import { SITE } from "@/config/siteData";
import { getSlotImage } from "@/lib/imageSlotUtils";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Colored Thermal Paper Rolls | Blue, Pink, Yellow & Green Receipt Paper",
  description: "Colored thermal paper rolls and till rolls — blue, pink, yellow, green, red and pastel. Color-coded receipt paper for POS, cash registers & branding. Factory direct, custom colors. MOQ from 1,000 rolls.",
  keywords: "colored thermal paper, blue thermal paper, pink thermal paper, yellow thermal paper, green thermal paper, red thermal paper, colored receipt paper, colored thermal rolls, colored till rolls, tinted thermal paper, pastel thermal paper, colored pos paper, colored cash register paper",
  alternates: { canonical: `${SITE.domain}/products/colored-thermal-paper` },
};

const ROLLS_IMG_FALLBACK = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-rolls-RQBrphmgzbAMk7eq3HsvNq.webp";

const colors = [
  { name: "Blue",   hex: "#3B82F6", swatch: "bg-blue-500" },
  { name: "Pink",   hex: "#EC4899", swatch: "bg-pink-500" },
  { name: "Yellow", hex: "#FACC15", swatch: "bg-yellow-400" },
  { name: "Green",  hex: "#22C55E", swatch: "bg-green-500" },
  { name: "Red",    hex: "#EF4444", swatch: "bg-red-500" },
  { name: "Purple", hex: "#A855F7", swatch: "bg-purple-500" },
  { name: "Orange", hex: "#F97316", swatch: "bg-orange-500" },
  { name: "Pastel / Tinted", hex: "#FBCFE8", swatch: "bg-pink-200" },
];

const specs = [
  { label: "Available Colors", value: "Blue, Pink, Yellow, Green, Red, Purple, Orange, Pastel — custom colors on request" },
  { label: "Color Method",     value: "Tinted paper base (color-through) — image prints black on colored stock" },
  { label: "Common Widths",    value: "57mm (2¼\") / 80mm (3⅛\") / Custom" },
  { label: "Paper Weight",     value: "55 g/m² / 65 g/m²" },
  { label: "Coating",          value: "BPA-Free / Phenol-Free available" },
  { label: "Image Life",       value: "5–7 years" },
  { label: "MOQ",              value: "Stock colors: 1,000 rolls · Custom colors: 5,000 rolls" },
  { label: "Lead Time",        value: "10–20 business days (custom colors)" },
  { label: "Payment Terms",    value: "T/T 30% deposit, 70% before shipment; L/C at sight" },
];

const faqs = [
  { q: "What colors of thermal paper do you offer?", a: "We stock blue, pink, yellow, green, red, purple, and orange colored thermal paper, plus pastel and tinted options. Custom Pantone-matched colors are available for larger orders." },
  { q: "How does colored thermal paper work?", a: "The paper base is tinted in the color of your choice, while the thermal coating still prints a sharp black image. So you get a colored receipt or till roll with clearly legible text — no ink or ribbon required." },
  { q: "Why use colored receipt paper?", a: "Colored till rolls are used for department color-coding, shift or station identification, anti-fraud (hard-to-copy receipts), promotions, and brand differentiation at the checkout." },
  { q: "Is colored thermal paper available BPA-free?", a: "Yes. All our colored thermal rolls can be supplied with BPA-free or phenol-free (BPS-free) coating to meet EU and California requirements." },
  { q: "What is the minimum order for colored thermal rolls?", a: "Stock colors start at 1,000 rolls. Custom or Pantone-matched colors require a 5,000-roll minimum due to dedicated paper production." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.zhixinpaper.com" },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.zhixinpaper.com/products" },
    { "@type": "ListItem", "position": 3, "name": "Colored Thermal Paper", "item": "https://www.zhixinpaper.com/products/colored-thermal-paper" },
  ],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Colored Thermal Paper Rolls | Blue, Pink, Yellow & Green Receipt Paper",
  "description": "Colored thermal paper rolls and till rolls in blue, pink, yellow, green, red and pastel. Color-coded receipt paper for POS and branding. Factory direct, custom colors available.",
  "brand": { "@type": "Brand", "name": "ZhixinPaper" },
  "manufacturer": { "@type": "Organization", "name": "ZhixinPaper", "url": "https://www.zhixinpaper.com" },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "seller": { "@type": "Organization", "name": "ZhixinPaper" },
  },
  "url": "https://www.zhixinpaper.com/products/colored-thermal-paper",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": { "@type": "Answer", "text": a },
  })),
};

export default async function ColoredThermalPaperPage() {
  const ROLLS_IMG = await getSlotImage("thermal-paper-rolls:blank-hero", ROLLS_IMG_FALLBACK);
  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200 py-3">
        <div className="container">
          <div className="text-sm text-slate-500">
            <Link href="/" className="hover:text-blue-600">Home</Link> <span className="mx-1">/</span>
            <Link href="/products" className="hover:text-blue-600">Products</Link> <span className="mx-1">/</span>
            <span className="text-slate-700 font-medium">Colored Thermal Paper</span>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="bg-blue-700 text-white py-2.5">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-1 text-sm font-medium">
            <span className="flex items-center gap-1.5"><Palette className="w-3.5 h-3.5 text-amber-300" /> 7+ Stock Colors + Custom Pantone</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5" /> BPA-Free Available</span>
            <span className="flex items-center gap-1.5"><Truck className="w-3.5 h-3.5" /> Ships to 80+ Countries</span>
            <span className="flex items-center gap-1.5"><Package className="w-3.5 h-3.5" /> MOQ from 1,000 Rolls</span>
          </div>
        </div>
      </div>

      <div className="container py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* ── LEFT CONTENT ── */}
          <div className="lg:col-span-2 space-y-12">

            {/* Hero */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Image src={ROLLS_IMG} alt="Colored Thermal Paper Rolls" className="w-full sm:w-72 h-52 object-cover rounded-2xl flex-shrink-0 shadow-md" width={288} height={208} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {["Blue", "Pink", "Yellow", "Green", "Custom Colors"].map((tag) => (
                    <span key={tag} className="text-xs bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full font-medium">{tag}</span>
                  ))}
                </div>
                <h1 className="font-sora text-3xl font-extrabold text-slate-900 mb-3 leading-tight">Colored Thermal Paper Rolls</h1>
                <p className="text-slate-600 leading-relaxed mb-5">Factory-direct colored thermal paper, receipt paper, and till rolls in blue, pink, yellow, green, red, and custom colors. The tinted base prints sharp black text — perfect for color-coding, anti-fraud receipts, promotions, and brand differentiation at the POS or cash register. BPA-free coating available.</p>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    { val: "7+", unit: "Stock Colors" },
                    { val: "Pantone", unit: "Custom Match" },
                    { val: "BPA-Free", unit: "Optional" },
                  ].map(({ val, unit }) => (
                    <div key={unit} className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
                      <div className="font-sora text-base font-extrabold text-blue-700">{val}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{unit}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Color swatches */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Palette className="w-5 h-5 text-blue-600" />
                <h2 className="font-sora text-xl font-bold text-slate-900">Available Colors</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {colors.map((c) => (
                  <div key={c.name} className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <span className={`w-8 h-8 rounded-full border border-slate-200 flex-shrink-0 ${c.swatch}`} aria-hidden />
                    <span className="text-sm font-semibold text-slate-800">{c.name}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-500 mt-3">Need a specific shade? We color-match to your Pantone reference. <Link href="/contact" className="text-blue-600 hover:underline font-medium">Send your spec →</Link></p>
            </div>

            {/* Uses */}
            <div>
              <h2 className="font-sora text-xl font-bold text-slate-900 mb-4">Why Use Colored Receipt &amp; Till Rolls</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Color-code departments, stations, or shifts",
                  "Anti-fraud — colored receipts are harder to copy",
                  "Brand differentiation at checkout",
                  "Promotions and seasonal campaigns",
                  "Quick visual sorting of order copies",
                  "Compatible with standard POS & cash registers",
                ].map((b) => (
                  <div key={b} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />{b}
                  </div>
                ))}
              </div>
            </div>

            {/* Specs */}
            <div>
              <h2 className="font-sora text-xl font-bold text-slate-900 mb-4">Specifications</h2>
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
              <p className="text-xs text-slate-400 mt-2">* Custom colors and sizes available. Contact us for non-standard requirements.</p>
            </div>

            {/* Sizes */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Ruler className="w-5 h-5 text-blue-600" />
                <h2 className="font-sora text-xl font-bold text-slate-900">Available Sizes</h2>
              </div>
              <p className="text-sm text-slate-600 mb-4">Colored stock is available in all our standard roll sizes.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {paperRollSizes.map((size) => (
                  <Link key={size.slug} href={`/products/thermal-rolls/${size.slug}`} className="group flex items-center justify-between p-4 bg-white border border-slate-200 hover:border-blue-400 hover:bg-blue-50 rounded-xl transition-all duration-200 shadow-sm">
                    <div className="font-sora font-semibold text-slate-800 group-hover:text-blue-700 text-sm">{size.label}</div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-5 h-5 text-blue-600" />
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
              <Link href="/products/receipt-paper-rolls" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-semibold"><Package className="w-4 h-4" />Receipt Paper Rolls →</Link>
              <Link href="/products/bpa-free-thermal-paper" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-semibold">BPA-Free Thermal Paper →</Link>
              <Link href="/oem/custom-printing" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-semibold">Custom Printing →</Link>
            </div>
          </div>

          {/* ── RIGHT SIDEBAR ── */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white border-2 border-blue-600 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs text-green-600 font-semibold">Online — Responding within 12h</span>
                </div>
                <h3 className="font-sora text-lg font-extrabold text-slate-900 mb-1">Get a Free Quote</h3>
                <p className="text-sm text-slate-500 mb-5">Tell us your color, size, and quantity. We&apos;ll send pricing, MOQ, and a color sample.</p>
                <InquiryForm compact />
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                <h4 className="font-sora font-bold text-slate-900 text-sm mb-1">Request Color Samples</h4>
                <p className="text-xs text-slate-600 mb-3">See and test actual colored rolls before you order. Samples ship in 3–5 business days.</p>
                <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm text-amber-700 font-semibold hover:text-amber-900">
                  Request Samples <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <h4 className="font-sora font-bold text-slate-900 text-sm">Order at a Glance</h4>
                {[
                  { icon: Package, label: "Stock MOQ", val: "1,000 rolls" },
                  { icon: Package, label: "Custom MOQ", val: "5,000 rolls" },
                  { icon: Clock, label: "Lead Time", val: "10–20 days" },
                  { icon: Truck, label: "Incoterms", val: "EXW / FOB / CIF" },
                ].map(({ icon: Icon, label, val }) => (
                  <div key={label} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-slate-500"><Icon className="w-4 h-4" />{label}</div>
                    <span className="font-semibold text-slate-900">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
