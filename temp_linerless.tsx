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
} from "lucide-react";
import { SITE } from "@/config/siteData";

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

const SIZES = [
  { display: '3 1/8" x 263\'', metric: "80mm x 80m", popular: "Most popular for POS" },
  { display: '2 1/4" x 263\'', metric: "57mm x 80m", popular: "Compact receipt printers" },
  { display: '3 1/8" x 220\'', metric: "80mm x 67m", popular: "Standard length" },
  { display: '40mm liner-free', metric: "40mm wide", popular: "Mobile printers" },
  { display: "Custom widths", metric: "30–110mm", popular: "OEM only" },
];

const ADHESIVES = [
  {
    name: "Removable",
    desc: "Peels cleanly from glass, plastic & cardboard. Ideal for promotional pricing & temporary tags.",
    use: "Supermarket shelf labels, weighted produce stickers",
  },
  {
    name: "Sticky / Semi-Permanent",
    desc: "Strong initial tack with controlled peel. Survives refrigerated storage and condensation.",
    use: "Restaurant takeout, cold-chain logistics, deli labels",
  },
  {
    name: "Permanent",
    desc: "Aggressive acrylic adhesive that resists tampering. Cannot be removed without paper destruction.",
    use: "Asset tracking, security seals, batch coding",
  },
];

const specs = [
  { label: "Format", value: "Linerless / Liner-Free thermal labels (no release liner waste)" },
  { label: "Coating", value: "Direct thermal — BPA-free standard, Phenol-free (BPS-free) on request" },
  { label: "Common Widths", value: '2 1/4" (57mm), 3 1/8" (80mm), 40mm, custom 30–110mm' },
  { label: "Roll Lengths", value: "220', 263', 656' / 67m, 80m, 200m or custom" },
  { label: "Adhesive Options", value: "Removable, Semi-Permanent, Permanent (all FDA indirect food contact)" },
  { label: "Core ID", value: "12mm (1/2\") / 19mm (3/4\") / 25mm (1\")" },
  { label: "OD Max", value: "90mm (depending on printer model)" },
  { label: "Print Compatibility", value: "Zebra, Bixolon, Star, Citizen, Posiflex, SNBC, custom OEM" },
  { label: "Image Life", value: "5–7 years (standard) / 10 years (top-coated)" },
  { label: "MOQ", value: "1,000 rolls (samples: 50 rolls)" },
  { label: "Lead Time", value: "10–18 business days FCL" },
  { label: "Certification", value: "ISO 9001:2015, FSC, FDA, REACH, RoHS" },
];

const faqs = [
  {
    q: "What is a linerless label and why use it?",
    a: "A linerless label is a self-adhesive thermal label printed on a roll without a release liner — the adhesive is on the back of the paper itself and protected by a silicone top-coat on the front. Compared to traditional die-cut labels, linerless eliminates 30–50% of paper waste, fits 2x more labels per roll (reducing changeovers), and ships at lower freight cost. They are now standard in supermarkets (Tesco, Walmart), QSR (McDonald's), and modern POS systems.",
  },
  {
    q: 'Do you supply 3 1/8" x 263\' linerless labels?',
    a: 'Yes. 3 1/8" x 263\' (80mm x 80m) is one of our highest-volume linerless SKUs. We offer it in removable, sticky/semi-permanent, and permanent adhesives, all BPA-free. MOQ 1,000 rolls, samples available in 50-roll cartons. Ships in standard 24-roll cases.',
  },
  {
    q: 'What about 2 1/4" x 263\' for compact printers?',
    a: 'Available in all three adhesive grades. 2 1/4" x 263\' (57mm x 80m) fits Star Micronics, Bixolon SRP-S300, and most compact mobile receipt printers used by food delivery and field service.',
  },
  {
    q: "What is the difference between removable, sticky and permanent linerless?",
    a: "Removable: peels cleanly within 24h (promo tags, returnable totes). Sticky / semi-permanent: stays put under refrigeration & condensation but can be peeled with effort (takeout containers, deli scales). Permanent: aggressive acrylic — paper tears before adhesive releases (asset tags, security seals, batch coding).",
  },
  {
    q: "Are your linerless labels compatible with my Posiflex / Zebra / Bixolon printer?",
    a: "Yes — our linerless thermal labels work with all major linerless-ready POS printers including Bixolon SRP-S300, Star TSP143IIIU, Citizen CT-S281L, SNBC BTP-R880NPV, Zebra ZD420t, and custom OEM units. Provide your printer model and we will recommend the correct core ID and OD.",
  },
  {
    q: "Can you OEM print our brand on linerless rolls?",
    a: "Yes. Custom printed linerless labels with your logo, color, and barcodes are available — 1 to 4 color flexo printing on the silicone top-coat. MOQ 5,000 rolls for printed, 7-day plate setup, 15-day production.",
  },
  {
    q: "Are linerless labels BPA-free?",
    a: "Standard linerless thermal labels are BPA-free as a default. We also offer phenol-free (BPS-free) coating for EU REACH and California Prop 65 compliance — please specify when quoting.",
  },
];

const offerings = [
  {
    title: "POS & Retail",
    desc: "Receipt-style labels for self-service checkout, shelf-edge promotions, deli weigh stations.",
    keywords: ["supermarket", "checkout", "deli scale"],
  },
  {
    title: "QSR & Food Delivery",
    desc: "Order labels for takeout containers, drive-thru bags, kitchen ticket routing.",
    keywords: ["restaurant", "takeout", "food prep"],
  },
  {
    title: "Logistics & Cold Chain",
    desc: "Shipping & batch labels that survive refrigeration, condensation, and rough handling.",
    keywords: ["shipping", "cold chain", "warehouse"],
  },
  {
    title: "Asset & Security",
    desc: "Tamper-evident permanent labels for inventory, IT assets, and security seals.",
    keywords: ["asset tracking", "security", "inventory"],
  },
];

export default function LinerlessLabelsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Linerless Thermal Labels",
    description:
      "Factory-direct linerless thermal labels in 3 1/8 x 263', 2 1/4 x 263', and custom widths. Removable, sticky, permanent adhesives. BPA-free.",
    brand: { "@type": "Brand", name: SITE.name },
    manufacturer: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.domain,
    },
    category: "Linerless Thermal Labels",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "0.45",
      highPrice: "1.20",
      offerCount: SIZES.length,
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: SITE.name },
    },
  };

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 text-white py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 text-sm font-medium px-3 py-1.5 rounded-full mb-5">
              <Zap className="w-4 h-4" /> 30–50% Less Paper Waste vs. Die-Cut
            </div>
            <h1 className="font-sora text-4xl lg:text-5xl font-extrabold leading-tight mb-5">
              Linerless Thermal Labels —{" "}
              <span className="text-emerald-400">3 1/8&quot; x 263&apos;</span>,{" "}
              <span className="text-blue-400">2 1/4&quot; x 263&apos;</span> & Custom
            </h1>
            <p className="text-lg text-slate-300 mb-7 max-w-3xl">
              Factory-direct linerless labels for POS, QSR, cold-chain logistics and asset tracking.
              Removable, sticky, and permanent adhesives — all BPA-free, OEM-ready, with full FCL
              shipping in 10–18 days.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#quote"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg transition"
              >
                Get Wholesale Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3 rounded-lg transition backdrop-blur"
              >
                Request 50-Roll Sample
              </Link>
            </div>
          </div>
        </div>
      </section>

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
