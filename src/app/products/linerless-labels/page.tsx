import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/shared/InquiryForm";
import {
  CheckCircle,
  ArrowRight,
  Package,
  Ruler,
  ShieldCheck,
  Truck,
  Clock,
  Star,
  Zap,
  MessageSquare,
} from "lucide-react";
import { SITE } from "@/config/siteData";
import { getSlotImage } from "@/lib/imageSlotUtils";
import { organizationSchema } from "@/lib/seo";
import Image from "next/image";

/**
 * /products/linerless-labels
 *
 * 创建动机（基于 GSC 真实数据）：
 *  - "3 1/8 x 263' linerless labels" 等 5+ 个查询词在近 28 天合计 ~150 曝光
 *  - 但站点之前没有任何 linerless 相关页面 → 流量白白流失
 *  - 旧站 /product/...linerless... 路径已 301 到本页
 *
 * 目标关键词层级：
 *  - 核心：linerless labels manufacturer / supplier
 *  - 美式规格：3 1/8 x 263, 2 1/4 x 263, 40mm liner-free
 *  - 粘性级别：removable / sticky / permanent / semi-permanent
 */

export const metadata: Metadata = {
  title: "Linerless Labels Manufacturer | 3 1/8 x 263' Thermal Linerless Rolls",
  description:
    "Factory-direct linerless thermal labels in 3 1/8 x 263', 2 1/4 x 263', 40mm liner-free. Removable, sticky, permanent & semi-permanent adhesives. BPA-free, OEM, fast FCL.",
  keywords:
    "linerless labels manufacturer, linerless labels supplier, 3 1/8 x 263 linerless labels, 2 1/4 x 263 linerless labels, 40mm liner-free label printer paper, removable linerless labels, sticky linerless labels, semi-permanent linerless labels, permanent linerless labels, thermal linerless labels wholesale, linerless labels OEM, china linerless labels factory",
  alternates: { canonical: `${SITE.domain}/products/linerless-labels` },
  openGraph: {
    title: "Linerless Thermal Labels Manufacturer | ZhixinPaper",
    description:
      "3 1/8 x 263' linerless labels, removable/sticky/permanent. Factory-direct from China. BPA-free, OEM, wholesale FCL.",
    url: `${SITE.domain}/products/linerless-labels`,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
    { "@type": "ListItem", position: 2, name: "Products", item: `${SITE.domain}/products` },
    {
      "@type": "ListItem",
      position: 3,
      name: "Linerless Labels",
      item: `${SITE.domain}/products/linerless-labels`,
    },
  ],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Linerless Thermal Labels & Rolls",
  description:
    "Reduce waste and increase productivity with liner-free thermal labels. Up to 60% more labels per roll. Available in removable, sticky, and permanent adhesives.",
  brand: { "@type": "Brand", name: SITE.name },
  manufacturer: { "@type": "Organization", name: SITE.name, url: SITE.domain },
  url: `${SITE.domain}/products/linerless-labels`,
  offers: {
    "@type": "AggregateOffer",
    url: `${SITE.domain}/products/linerless-labels`,
    priceCurrency: "USD",
    lowPrice: "1.00",
    highPrice: "20.00",
    offerCount: "50",
    availability: "https://schema.org/InStock",
    seller: { "@type": "Organization", name: SITE.name },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default async function LinerlessLabelsPage() {
  const heroImage = await getSlotImage("linerless-labels:hero", "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1000&q=80");

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-slate-50 border-b border-slate-200">
        <div className="container py-12">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="lg:w-1/2">
              <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
                <Link href="/" className="hover:text-blue-600">
                  Home
                </Link>
                <ArrowRight className="w-3 h-3" />
                <Link href="/products" className="hover:text-blue-600">
                  Products
                </Link>
                <ArrowRight className="w-3 h-3" />
                <span className="text-slate-900 font-medium">Linerless Labels</span>
              </nav>

              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold mb-4">
                <CheckCircle className="w-3 h-3" />
                Eco-Friendly & High Efficiency
              </div>

              <h1 className="font-sora text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                Thermal Linerless <span className="text-emerald-600">Labels & Rolls</span>
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Reduce waste and increase productivity with liner-free thermal labels. Get up to 60%
                more labels per roll with no release liner disposal needed. Standard US and metric
                sizes available for immediate wholesale shipping.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="#quote"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Request Wholesale Quote
                </a>
                <a
                  href={SITE.whatsappUrl}
                  className="bg-white border-2 border-slate-200 hover:border-emerald-500 text-slate-700 font-bold px-8 py-3.5 rounded-lg transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-emerald-500" />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="lg:w-1/2 relative group">
              <div className="absolute -inset-4 bg-emerald-500/10 rounded-[2rem] blur-2xl group-hover:bg-emerald-500/20 transition-all" />
              <Image
                src={heroImage}
                alt="Linerless Thermal Labels"
                width={800}
                height={600}
                priority
                className="relative rounded-2xl shadow-2xl border border-white/50 object-cover w-full h-[400px]"
              />
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur shadow-lg rounded-xl p-4 border border-white max-w-[200px]">
                <div className="flex items-center gap-2 mb-1">
                  <Package className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-bold text-slate-900">High Density</span>
                </div>
                <p className="text-[10px] text-slate-500">+60% more labels per roll vs. standard</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* ── MAIN ── */}
          <div className="lg:col-span-2 space-y-12">
            {/* Sizes */}
            <section>
              <h2 className="font-sora text-2xl font-bold text-slate-900 mb-2">
                Stock Sizes — Ready to Ship
              </h2>
              <p className="text-slate-600 mb-6">
                All sizes available in three adhesive grades. Custom widths from 30–110mm by OEM.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {SIZES.map((s) => (
                  <div
                    key={s.display}
                    className="bg-white border border-slate-200 rounded-xl p-5 hover:border-emerald-400 hover:shadow-md transition"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-bold text-slate-900 text-lg">{s.display}</h3>
                      <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                        {s.metric}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500">{s.popular}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Adhesives */}
            <section>
              <h2 className="font-sora text-2xl font-bold text-slate-900 mb-6">
                Three Adhesive Grades for Every Application
              </h2>
              <div className="space-y-4">
                {ADHESIVES.map((a) => (
                  <div
                    key={a.name}
                    className="bg-gradient-to-r from-slate-50 to-white border border-slate-200 rounded-xl p-5"
                  >
                    <h3 className="font-bold text-slate-900 text-lg mb-1">{a.name}</h3>
                    <p className="text-slate-600 text-sm mb-2">{a.desc}</p>
                    <p className="text-xs text-emerald-700 font-medium">
                      <Star className="inline w-3.5 h-3.5 mr-1" />
                      {a.use}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Use Cases */}
            <section>
              <h2 className="font-sora text-2xl font-bold text-slate-900 mb-6">
                Where Buyers Use Our Linerless Labels
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {offerings.map((o) => (
                  <div key={o.title} className="border border-slate-200 rounded-xl p-5 bg-white">
                    <h3 className="font-bold text-slate-900 mb-1">{o.title}</h3>
                    <p className="text-sm text-slate-600 mb-3">{o.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {o.keywords.map((k) => (
                        <span
                          key={k}
                          className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded"
                        >
                          {k}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Specs */}
            <section>
              <h2 className="font-sora text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Ruler className="w-6 h-6 text-blue-600" /> Technical Specifications
              </h2>
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    {specs.map((s, idx) => (
                      <tr
                        key={s.label}
                        className={idx % 2 === 0 ? "bg-slate-50/50" : "bg-white"}
                      >
                        <td className="px-5 py-3 font-semibold text-slate-700 border-r border-slate-100 w-1/3">
                          {s.label}
                        </td>
                        <td className="px-5 py-3 text-slate-600">{s.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="font-sora text-2xl font-bold text-slate-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {faqs.map((f) => (
                  <details
                    key={f.q}
                    className="group bg-white border border-slate-200 rounded-xl overflow-hidden"
                  >
                    <summary className="font-semibold text-slate-900 px-5 py-4 cursor-pointer hover:bg-slate-50 list-none flex items-center justify-between">
                      {f.q}
                      <ArrowRight className="w-4 h-4 text-slate-400 group-open:rotate-90 transition" />
                    </summary>
                    <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed">{f.a}</div>
                  </details>
                ))}
              </div>
            </section>

            {/* Related */}
            <section className="border-t border-slate-200 pt-8">
              <h3 className="font-sora text-lg font-bold text-slate-900 mb-4">Related Products</h3>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/products/thermal-labels/4x6in"
                  className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-800 font-semibold"
                >
                  <Package className="w-4 h-4" /> 4x6 Thermal Shipping Labels →
                </Link>
                <Link
                  href="/products/custom-printed-labels"
                  className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Custom Printed Labels →
                </Link>
                <Link
                  href="/products/bpa-free-thermal-paper"
                  className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-800 font-semibold"
                >
                  BPA-Free Thermal Paper →
                </Link>
                <Link
                  href="/products/receipt-paper-rolls"
                  className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Receipt Paper Rolls →
                </Link>
              </div>
            </section>
          </div>

          {/* ── SIDEBAR ── */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4" id="quote">
              <div className="bg-white border-2 border-emerald-500 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs text-green-600 font-semibold">
                    Online — Responds in 12h
                  </span>
                </div>
                <h3 className="font-sora text-lg font-extrabold text-slate-900 mb-1">
                  Wholesale Quote
                </h3>
                <p className="text-sm text-slate-500 mb-5">
                  Tell us your size, adhesive type, and quantity. We&apos;ll send pricing and
                  printer-compatibility docs.
                </p>
                <InquiryForm compact />
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <h4 className="font-sora font-bold text-slate-900 text-sm">Order at a Glance</h4>
                {[
                  { icon: Package, label: "MOQ", val: "1,000 rolls" },
                  { icon: Clock, label: "Lead Time", val: "10–18 days" },
                  { icon: Truck, label: "Incoterms", val: "EXW / FOB / CIF" },
                  { icon: ShieldCheck, label: "Payment", val: "T/T · L/C" },
                ].map(({ icon: Icon, label, val }) => (
                  <div key={label} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-slate-500">
                      <Icon className="w-4 h-4" />
                      {label}
                    </div>
                    <span className="font-semibold text-slate-900">{val}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-5">
                <h4 className="font-sora font-bold text-slate-900 text-sm mb-3">Compliance</h4>
                <div className="space-y-2">
                  {[
                    "BPA-Free (Phenol-free on request)",
                    "FDA Indirect Food Contact",
                    "EU REACH",
                    "RoHS",
                    "ISO 9001:2015",
                  ].map((cert) => (
                    <div key={cert} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {cert}
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
