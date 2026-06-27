import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/shared/InquiryForm";
import { CheckCircle, ArrowRight, Package, Ruler, ShieldCheck, Truck, Clock, Star, MessageSquare, Leaf } from "lucide-react";
import { paperRollSizes } from "@/config/navigation";
import { SITE } from "@/config/siteData";
import { getSlotImage } from "@/lib/imageSlotUtils";
import Image from "next/image";

export const metadata: Metadata = {
  title: "BPA-Free Thermal Paper Rolls | Phenol-Free Receipt Paper Manufacturer",
  description: "BPA-free and phenol-free (BPS-free) thermal paper rolls — non-toxic, eco-friendly receipt paper for EU, California & regulated markets. Factory direct, ISO 9001. MOQ 1,000 rolls.",
  keywords: "bpa free thermal paper, bpa free thermal paper rolls, phenol free thermal paper, bpa free receipt paper, non toxic thermal paper, bpa free till rolls, safe thermal paper rolls, eco friendly receipt paper, bpa and bps free thermal paper, bpa free paper manufacturers",
  alternates: { canonical: `${SITE.domain}/products/bpa-free-thermal-paper` },
};

const ROLLS_IMG_FALLBACK = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-rolls-RQBrphmgzbAMk7eq3HsvNq.webp";

const specs = [
  { label: "Coating Options",   value: "BPA-Free (standard) / Phenol-Free — BPS-free (premium)" },
  { label: "Developer",         value: "Vitamin C (ascorbic acid) based — non-phenol available" },
  { label: "Common Widths",     value: "57mm (2¼\") / 80mm (3⅛\") / Custom" },
  { label: "Paper Weight",      value: "48 g/m² / 55 g/m² / 65 g/m²" },
  { label: "Image Life",        value: "5–7 years (standard) / 10 years (archival)" },
  { label: "Compliance",        value: "EU REACH, US FDA, California Prop 65, RoHS" },
  { label: "Certification",     value: "ISO 9001:2015, FSC (on request)" },
  { label: "MOQ",               value: "1,000 rolls (samples: 50–100 rolls)" },
  { label: "Lead Time",         value: "7–15 business days" },
  { label: "Payment Terms",     value: "T/T 30% deposit, 70% before shipment; L/C at sight" },
];

const faqs = [
  { q: "Is there BPA in receipts and thermal paper?", a: "Conventional thermal paper uses BPA (bisphenol A) as a color developer, which can transfer to skin on contact. Our BPA-free rolls replace it with a safer developer, and our phenol-free (BPS-free) grade removes bisphenol-S as well — meeting the strictest EU and California requirements." },
  { q: "What is the difference between BPA-free and phenol-free thermal paper?", a: "BPA-free paper removes bisphenol A but may still use bisphenol S (BPS). Phenol-free (also called BPS-free) paper removes both BPA and BPS, typically using a vitamin-C-based developer. Phenol-free is required for the EU market under REACH since 2020." },
  { q: "Is your thermal paper non-toxic and safe to handle?", a: "Yes. Our BPA-free and phenol-free rolls are non-toxic, safe for cashier and consumer contact, and comply with FDA, REACH, and California Prop 65. Full material declarations and SDS are available on request." },
  { q: "Do you supply BPA-free till rolls in bulk?", a: "Yes. We are a factory-direct manufacturer of BPA-free till rolls and receipt paper. MOQ is 1,000 rolls with full-container wholesale pricing, shipping to 80+ countries." },
  { q: "Can you provide compliance documents for the EU and US?", a: "Yes. We provide REACH and RoHS declarations, FDA compliance statements, California Prop 65 documentation, and SDS sheets so you can sell into regulated markets with confidence." },
  { q: "Are BPA-free receipt rolls more expensive?", a: "BPA-free coating is comparable in price to standard rolls. Phenol-free (BPS-free) grade carries a small premium due to the alternative developer. Contact us for current factory pricing by size and volume." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.zxpapers.com" },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.zxpapers.com/products" },
    { "@type": "ListItem", "position": 3, "name": "BPA-Free Thermal Paper", "item": "https://www.zxpapers.com/products/bpa-free-thermal-paper" },
  ],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "BPA-Free Thermal Paper Rolls | Phenol-Free Receipt Paper",
  "description": "BPA-free and phenol-free (BPS-free) thermal paper rolls — non-toxic, eco-friendly receipt paper for EU, California, and other regulated markets. ISO 9001, MOQ 1,000 rolls.",
  "brand": { "@type": "Brand", "name": "Zhixin Paper" },
  "manufacturer": { "@type": "Organization", "name": "Zhixin Paper", "url": "https://www.zxpapers.com" },
  "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-rolls-RQBrphmgzbAMk7eq3HsvNq.webp",
  "url": "https://www.zxpapers.com/products/bpa-free-thermal-paper",

  "additionalProperty": specs.map(({ label, value }) => ({
    "@type": "PropertyValue",
    "name": label,
    "value": value,
  }))
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

export default async function BpaFreeThermalPaperPage() {
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
            <span className="text-slate-700 font-medium">BPA-Free Thermal Paper</span>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="bg-blue-700 text-white py-2.5">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-1 text-sm font-medium">
            <span className="flex items-center gap-1.5"><Leaf className="w-3.5 h-3.5 text-green-300" /> BPA-Free &amp; Phenol-Free Coating</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5" /> REACH · FDA · Prop 65</span>
            <span className="flex items-center gap-1.5"><Truck className="w-3.5 h-3.5" /> Ships to 80+ Countries</span>
            <span className="flex items-center gap-1.5"><Package className="w-3.5 h-3.5" /> MOQ 1,000 Rolls</span>
          </div>
        </div>
      </div>

      <div className="container py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* ── LEFT CONTENT ── */}
          <div className="lg:col-span-2 space-y-12">

            {/* Hero */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Image src={ROLLS_IMG} alt="BPA-Free Thermal Paper Rolls" className="w-full sm:w-72 h-52 object-cover rounded-2xl flex-shrink-0 shadow-md" width={288} height={208} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {["BPA-Free", "Phenol-Free Available", "Non-Toxic", "REACH Compliant"].map((tag) => (
                    <span key={tag} className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full font-medium">{tag}</span>
                  ))}
                </div>
                <h1 className="font-sora text-3xl font-extrabold text-slate-900 mb-3 leading-tight">BPA-Free Thermal Paper Rolls</h1>
                <p className="text-slate-600 leading-relaxed mb-5">Factory-direct BPA-free thermal paper and till rolls for receipts and POS printing. Our non-toxic coating removes bisphenol A, and our phenol-free (BPS-free) grade meets the strictest EU REACH and California Prop 65 requirements — ideal for buyers selling safe, eco-friendly receipt paper into regulated markets.</p>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    { val: "0%", unit: "BPA / BPS" },
                    { val: "REACH", unit: "EU Compliant" },
                    { val: "1,000", unit: "Rolls MOQ" },
                  ].map(({ val, unit }) => (
                    <div key={unit} className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
                      <div className="font-sora text-xl font-extrabold text-green-700">{val}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{unit}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* BPA-free vs Phenol-free explainer */}
            <div>
              <h2 className="font-sora text-xl font-bold text-slate-900 mb-4">BPA-Free vs. Phenol-Free — Which Do You Need?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-2"><CheckCircle className="w-4 h-4 text-green-500" /><span className="font-sora font-bold text-slate-900 text-sm">BPA-Free (Standard)</span></div>
                  <p className="text-xs text-slate-600 leading-relaxed">Removes bisphenol A. Suitable for most global markets where BPA-free is the requirement. Cost comparable to conventional thermal paper.</p>
                </div>
                <div className="bg-white border border-green-200 rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-2"><Leaf className="w-4 h-4 text-green-600" /><span className="font-sora font-bold text-slate-900 text-sm">Phenol-Free / BPS-Free (Premium)</span></div>
                  <p className="text-xs text-slate-600 leading-relaxed">Removes both BPA and BPS using a vitamin-C-based developer. <strong>Required for the EU market under REACH (since 2020)</strong> and preferred for California and eco-label buyers.</p>
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div>
              <h2 className="font-sora text-xl font-bold text-slate-900 mb-4">Why Buyers Choose Our Safe Thermal Paper</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Non-toxic — safe for cashier and consumer skin contact",
                  "Phenol-free (BPS-free) grade for EU REACH compliance",
                  "Full compliance docs: REACH, RoHS, FDA, Prop 65, SDS",
                  "Eco-friendly developer — supports sustainability claims",
                  "Same sharp print quality and 5–7 year image life",
                  "Available as receipt rolls, till rolls, and POS rolls",
                  "Free pre-production sample before bulk order",
                  "Private label & OEM packaging available",
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
              <p className="text-xs text-slate-400 mt-2">* Custom specifications available. Contact us for non-standard requirements.</p>
            </div>

            {/* Available Sizes */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Ruler className="w-5 h-5 text-blue-600" />
                <h2 className="font-sora text-xl font-bold text-slate-900">Available in All Standard Sizes</h2>
              </div>
              <p className="text-sm text-slate-600 mb-4">Every size below is available with BPA-free or phenol-free coating.</p>
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
              <Link href="/products/thermal-paper-rolls/blank" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-semibold">Blank Thermal Rolls →</Link>
              <Link href="/manufacturing/certifications" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-semibold">Certifications →</Link>
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
                <p className="text-sm text-slate-500 mb-5">Tell us your size, quantity, and whether you need BPA-free or phenol-free. We&apos;ll send pricing and compliance docs.</p>
                <InquiryForm compact />
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                <h4 className="font-sora font-bold text-slate-900 text-sm mb-1">Request Free Samples</h4>
                <p className="text-xs text-slate-600 mb-3">Test print quality and image life in 3–5 business days before committing to a bulk order.</p>
                <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm text-amber-700 font-semibold hover:text-amber-900">
                  Request Samples <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <h4 className="font-sora font-bold text-slate-900 text-sm">Order at a Glance</h4>
                {[
                  { icon: Package, label: "MOQ", val: "1,000 rolls" },
                  { icon: Clock, label: "Lead Time", val: "7–15 days" },
                  { icon: Truck, label: "Incoterms", val: "EXW / FOB / CIF" },
                  { icon: ShieldCheck, label: "Payment", val: "T/T · L/C" },
                ].map(({ icon: Icon, label, val }) => (
                  <div key={label} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-slate-500"><Icon className="w-4 h-4" />{label}</div>
                    <span className="font-semibold text-slate-900">{val}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-5">
                <h4 className="font-sora font-bold text-slate-900 text-sm mb-3">Compliance</h4>
                <div className="space-y-2">
                  {["EU REACH (phenol-free)", "California Prop 65", "US FDA", "RoHS", "ISO 9001:2015"].map((cert) => (
                    <div key={cert} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />{cert}
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
