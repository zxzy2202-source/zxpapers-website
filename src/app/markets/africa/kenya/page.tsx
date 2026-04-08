import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/shared/InquiryForm";
import {
  ArrowRight, CheckCircle, Ship, Clock, Package,
  MessageSquare, TrendingUp, MapPin, ChevronRight, Factory,
} from "lucide-react";
import { SITE, FACTORY, CERTIFICATIONS } from "@/config/siteData";

export const metadata: Metadata = {
  title: "Thermal Paper Supplier Kenya | Mombasa",
  description:
    "Factory-direct thermal paper rolls for Kenyan distributors. 57×50mm, 57×40mm, 80×80mm. CIF Mombasa pricing. ISO 9001, BPA-free.",
  keywords:
    "thermal paper rolls Kenya, POS paper Nairobi, receipt paper Kenya, thermal paper Mombasa, M-Pesa POS paper, thermal paper supplier Kenya, bulk thermal paper Kenya, 57x50 thermal paper Kenya, East Africa thermal paper",
  openGraph: {
    title: "Thermal Paper Supplier Kenya | CIF Mombasa",
    description:
      "Serving 3M+ POS terminals in Kenya. CIF Mombasa pricing. M-Pesa compatible. ISO 9001. BPA-free.",
    type: "website",
    url: "https://www.zxpapers.com/markets/africa/kenya",
      images: [
      {
        url: "https://www.zxpapers.com/og-default.png",
        width: 1200,
        height: 630,
        alt: "ZhixinPaper | Thermal Paper Rolls Manufacturer",
        type: "image/png",
      },
    ],
  },
  alternates: {
    canonical: "https://www.zxpapers.com/markets/africa/kenya",
  },
};

const products = [
  {
    size: "57 × 50 mm",
    href: "/products/thermal-rolls/57x50mm",
    badge: "#1 in Kenya",
    badgeColor: "bg-amber-100 text-amber-800",
    desc: "Standard POS roll for M-Pesa agents, Equity Bank, KCB, and Co-operative Bank terminals. The most widely used size across Kenya's mobile money ecosystem.",
    specs: ["Core: 12mm / 13mm", "Length: 50m / 60m / 80m", "GSM: 55–65g"],
    moq: "1 carton (50 rolls)",
    use: "M-Pesa agents, banks, retail",
  },
  {
    size: "57 × 40 mm",
    href: "/products/thermal-rolls/57x40mm",
    badge: "Mobile Agents",
    badgeColor: "bg-blue-100 text-blue-800",
    desc: "Compact roll for handheld POS devices. Used by mobile money agents, matatu conductors, and market traders across Nairobi, Mombasa, and upcountry.",
    specs: ["Core: 12mm / 13mm", "Length: 40m / 50m", "GSM: 55–65g"],
    moq: "1 carton (50 rolls)",
    use: "Mobile agents, handheld POS",
  },
  {
    size: "80 × 80 mm",
    href: "/products/thermal-rolls/80x80mm",
    badge: "Supermarkets",
    badgeColor: "bg-green-100 text-green-800",
    desc: "Wide format for Naivas, Quickmart, Carrefour Kenya, and hotel/restaurant POS systems. High image retention for long-term record keeping.",
    specs: ["Core: 12mm / 13mm", "Length: 80m / 100m", "GSM: 65–80g"],
    moq: "1 carton (24 rolls)",
    use: "Supermarkets, hotels, restaurants",
  },
];

const kenyaFaqs = [
  {
    q: "Do you ship to Mombasa Port?",
    a: "Yes. We offer CIF pricing directly to the Port of Mombasa. Transit time is approximately 22–28 days from Qingdao. We provide full export documentation including B/L, commercial invoice, packing list, and Certificate of Origin.",
  },
  {
    q: "Are your rolls compatible with M-Pesa POS terminals?",
    a: "Yes. Our 57×50mm and 57×40mm rolls are compatible with all M-Pesa agent POS terminals, Equity Bank Equitel devices, KCB terminals, and most Kenyan banking POS systems.",
  },
  {
    q: "Can goods transit through Mombasa to Uganda, Rwanda, or Tanzania?",
    a: "Yes. Mombasa is the main gateway for East Africa. Many of our Kenyan clients re-export to Uganda, Rwanda, Burundi, and South Sudan. We can provide COMESA certificates of origin to facilitate regional trade.",
  },
  {
    q: "What is the MOQ for a first order to Kenya?",
    a: "MOQ is 1 carton for standard sizes. For your first order, we recommend LCL (less than container load) to test quality and market. Full container orders (20ft or 40ft FCL) get the best pricing.",
  },
  {
    q: "Do you offer KEBS (Kenya Bureau of Standards) compliant products?",
    a: "Our products meet international quality standards (ISO 9001, BPA-free, RoHS). We provide test reports and CoA for each batch. For KEBS-specific documentation, please contact us and we will assist with the required paperwork.",
  },
];


const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.zhixinpaper.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Markets",
      "item": "https://www.zhixinpaper.com/markets"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Africa",
      "item": "https://www.zhixinpaper.com/markets/africa"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Kenya",
      "item": "https://www.zhixinpaper.com/markets/africa/kenya"
    }
  ]
};
export default function KenyaPage() {
  const whatsappMsg = encodeURIComponent(
    "Hello, I am a distributor in Kenya. I need thermal paper rolls.\nSize needed: 57×50mm / 57×40mm / 80×80mm\nQuantity: ___ cartons\nDestination: Mombasa Port\nPlease send CIF price list."
  );

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-[#0A1F44] via-[#0d2a5e] to-[#1a3a6e] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #006600 0%, transparent 50%), radial-gradient(circle at 80% 20%, #BB0000 0%, transparent 40%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <nav className="flex items-center gap-2 text-blue-200 text-sm mb-8 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/markets" className="hover:text-white transition-colors">Markets</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/markets/africa" className="hover:text-white transition-colors">Africa</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">🇰🇪 Kenya</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/30 rounded-full px-4 py-2 mb-6">
                <TrendingUp className="w-4 h-4 text-red-300" />
                <span className="text-red-200 text-sm font-medium">East Africa&apos;s Financial Hub — 3M+ POS Terminals</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Thermal Paper Rolls<br />
                <span className="text-amber-400">Supplier for Kenya</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Factory-direct supply for Kenyan distributors and M-Pesa ecosystem partners.
                CIF pricing to <strong className="text-white">Port of Mombasa</strong>.
                Gateway to Uganda, Tanzania, Rwanda, and the entire East African market.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {["CIF Mombasa", "M-Pesa Compatible", "ISO 9001", "BPA-Free", "COMESA CO Available", "East Africa Gateway"].map((b) => (
                  <span key={b} className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1.5 text-sm text-blue-100">
                    <CheckCircle className="w-3.5 h-3.5 text-green-400" />
                    {b}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={`${SITE.whatsappUrl}?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg"
                >
                  <MessageSquare className="w-5 h-5" />
                  WhatsApp for Kenya Price
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-6 py-3.5 rounded-xl transition-all"
                >
                  <ArrowRight className="w-5 h-5" />
                  Get CIF Quote
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "3M+", label: "POS Terminals", icon: "🖨️" },
                { value: "60%+", label: "Mobile Money Penetration", icon: "📱" },
                { value: "22–28", label: "Days to Mombasa", icon: "🚢" },
                { value: "EA Hub", label: "East Africa Gateway", icon: "🌍" },
                { value: "COMESA", label: "CO Available", icon: "📋" },
                { value: "2hr", label: "Quote Response", icon: "⚡" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 text-center">
                  <div className="text-3xl mb-1">{stat.icon}</div>
                  <div className="text-2xl font-bold text-amber-400">{stat.value}</div>
                  <div className="text-blue-200 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Market Stats ──────────────────────────────────────────────── */}
      <section className="py-14 bg-red-50 border-y border-red-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-red-700 mb-2">3M+</div>
              <div className="font-semibold text-slate-700">Active POS Terminals in Kenya</div>
              <div className="text-sm text-slate-500 mt-1">M-Pesa, Equity, KCB, Co-op Bank</div>
            </div>
            <div>
              <div className="text-4xl font-black text-red-700 mb-2">60%+</div>
              <div className="font-semibold text-slate-700">Mobile Money Penetration</div>
              <div className="text-sm text-slate-500 mt-1">Highest in Sub-Saharan Africa</div>
            </div>
            <div>
              <div className="text-4xl font-black text-red-700 mb-2">4+</div>
              <div className="font-semibold text-slate-700">Countries via Mombasa Port</div>
              <div className="text-sm text-slate-500 mt-1">Uganda, Rwanda, Burundi, S. Sudan</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Products ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1F44] mb-4">
              Most Popular Sizes for Kenya
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Compatible with M-Pesa, Equity Bank, KCB, and all major Kenyan POS terminals.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.size} className="bg-white rounded-2xl border-2 border-slate-200 hover:border-amber-400 p-6 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-[#0A1F44]">{p.size}</h3>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${p.badgeColor}`}>{p.badge}</span>
                </div>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">{p.desc}</p>
                <div className="text-xs text-slate-400 mb-3 font-medium">USE CASE: {p.use}</div>
                <ul className="space-y-1.5 mb-5">
                  {p.specs.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />{s}
                    </li>
                  ))}
                </ul>
                <div className="text-sm text-slate-500 mb-4">MOQ: <strong>{p.moq}</strong></div>
                <div className="flex gap-2">
                  <Link href={p.href} className="flex-1 text-center text-sm font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 py-2.5 rounded-xl transition-colors">Specs</Link>
                  <a
                    href={`${SITE.whatsappUrl}?text=${encodeURIComponent(`Hello, I need bulk quote for ${p.size} thermal paper rolls for Kenya (Mombasa).\nQuantity: ___ cartons`)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="flex-1 text-center text-sm font-semibold bg-green-500 hover:bg-green-400 text-white py-2.5 rounded-xl transition-colors"
                  >Get Price</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Shipping ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#0A1F44] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Shipping to <span className="text-amber-400">Kenya</span></h2>
            <p className="text-lg text-blue-200">CIF Port of Mombasa — East Africa&apos;s Main Gateway</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6">
              <h3 className="font-bold text-amber-400 text-lg mb-4 flex items-center gap-2">
                <Ship className="w-5 h-5" /> Sea Freight Details
              </h3>
              <div className="space-y-3 text-sm">
                {[
                  { label: "Origin Port", value: "Qingdao / Shanghai" },
                  { label: "Destination", value: "Port of Mombasa, Kenya" },
                  { label: "Transit Time", value: "22–28 days" },
                  { label: "20ft FCL", value: "~800 cartons" },
                  { label: "40ft FCL", value: "~1,600 cartons" },
                  { label: "Onward to Uganda", value: "+3–5 days by road" },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-blue-300">{row.label}</span>
                    <span className="text-white font-medium">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6">
              <h3 className="font-bold text-amber-400 text-lg mb-4 flex items-center gap-2">
                <Package className="w-5 h-5" /> Documentation Provided
              </h3>
              <div className="space-y-2.5">
                {["Bill of Lading (B/L)", "Commercial Invoice", "Packing List", "Certificate of Origin (China)", "COMESA CO (on request)", "BPA-Free Test Report", "ISO 9001 Certificate"].map((doc) => (
                  <div key={doc} className="flex items-center gap-2 text-sm text-blue-100">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />{doc}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#0A1F44] mb-4">Kenya FAQ</h2>
          </div>
          <div className="space-y-4">
            {kenyaFaqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-[#0A1F44] mb-2 flex items-start gap-2">
                  <span className="text-amber-500 font-black text-lg leading-none mt-0.5">Q</span>{faq.q}
                </h3>
                <p className="text-slate-600 leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Inquiry ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1F44] mb-6">
                Get Kenya Price List<br /><span className="text-amber-500">CIF Mombasa — 2 Hour Quote</span>
              </h2>
              <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <MessageSquare className="w-6 h-6 text-green-600" />
                  <span className="font-bold text-green-800">WhatsApp — Fastest Response</span>
                </div>
                <a
                  href={`${SITE.whatsappUrl}?text=${whatsappMsg}`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-5 py-3 rounded-xl transition-colors w-full justify-center"
                >
                  <MessageSquare className="w-5 h-5" />WhatsApp: {SITE.whatsapp}
                </a>
              </div>
              <div className="space-y-3">
                {["CIF pricing to Port of Mombasa", "M-Pesa & bank POS compatible sizes", "COMESA Certificate of Origin available", "East Africa re-export support", "Free samples before bulk order"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div><InquiryForm /></div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#0A1F44]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-5xl mb-4">🇰🇪</div>
          <h2 className="text-3xl font-black text-white mb-4">
            Kenya&apos;s Mobile Money Boom Needs Paper. Supply It.
          </h2>
          <p className="text-xl text-blue-200 mb-8">CIF Mombasa. M-Pesa compatible. ISO certified. 2-hour WhatsApp response.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`${SITE.whatsappUrl}?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-black px-8 py-4 rounded-2xl text-lg transition-colors">
              <MessageSquare className="w-6 h-6" />WhatsApp Now
            </a>
            <Link href="/markets/africa"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-2xl text-lg transition-colors border border-white/30">
              ← All Africa Markets
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
