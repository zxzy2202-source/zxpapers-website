import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/shared/InquiryForm";
import {
  ArrowRight, CheckCircle, Ship, Package,
  MessageSquare, TrendingUp, ChevronRight,
} from "lucide-react";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: "Thermal Paper Supplier Ghana | Accra",
  description:
    "Factory-direct thermal paper rolls for Ghanaian distributors. 57×50mm, 57×40mm, 80×80mm. CIF Tema Port pricing. ISO 9001, BPA-free.",
  keywords:
    "thermal paper rolls Ghana, POS paper Accra, receipt paper Ghana, thermal paper Tema, MTN MoMo POS paper, thermal paper supplier Ghana, bulk thermal paper Ghana, West Africa thermal paper, ECOWAS thermal paper",
  openGraph: {
    title: "Thermal Paper Supplier Ghana | CIF Tema",
    description:
      "Serving 1.5M+ POS terminals in Ghana. CIF Tema Port. MTN MoMo compatible. ISO 9001. BPA-free.",
    type: "website",
    url: "https://www.zxpapers.com/markets/africa/ghana",
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
    canonical: "https://www.zxpapers.com/markets/africa/ghana",
  },
};

const products = [
  {
    size: "57 × 50 mm",
    href: "/products/thermal-rolls/57x50mm",
    badge: "#1 in Ghana",
    badgeColor: "bg-amber-100 text-amber-800",
    desc: "Standard POS roll for MTN MoMo agents, GCB Bank, Ecobank, and Fidelity Bank terminals. The most popular size across Ghana's mobile money and banking sector.",
    specs: ["Core: 12mm / 13mm", "Length: 50m / 60m / 80m", "GSM: 55–65g"],
    moq: "1 carton (50 rolls)",
    use: "MTN MoMo agents, banks, retail",
  },
  {
    size: "57 × 40 mm",
    href: "/products/thermal-rolls/57x40mm",
    badge: "Market Traders",
    badgeColor: "bg-blue-100 text-blue-800",
    desc: "Compact roll for handheld POS terminals used by market traders, street vendors, and mobile money agents across Accra, Kumasi, and Takoradi.",
    specs: ["Core: 12mm / 13mm", "Length: 40m / 50m", "GSM: 55–65g"],
    moq: "1 carton (50 rolls)",
    use: "Market traders, mobile agents",
  },
  {
    size: "80 × 80 mm",
    href: "/products/thermal-rolls/80x80mm",
    badge: "Supermarkets",
    badgeColor: "bg-green-100 text-green-800",
    desc: "Wide format for Shoprite Ghana, Palace Mall, and hotel/restaurant POS systems. Growing demand from Ghana's expanding formal retail sector.",
    specs: ["Core: 12mm / 13mm", "Length: 80m / 100m", "GSM: 65–80g"],
    moq: "1 carton (24 rolls)",
    use: "Supermarkets, hotels, restaurants",
  },
];

const ghanaFaqs = [
  {
    q: "Do you ship CIF to Tema Port?",
    a: "Yes. We offer CIF pricing directly to Tema Port, Ghana's main container port near Accra. Transit time is approximately 24–28 days from Qingdao. Full export documentation provided.",
  },
  {
    q: "Are your rolls compatible with MTN MoMo POS terminals?",
    a: "Yes. Our 57×50mm and 57×40mm rolls are compatible with all MTN MoMo agent POS terminals, as well as GCB Bank, Ecobank, Fidelity Bank, and most Ghanaian banking POS systems.",
  },
  {
    q: "Can goods transit through Ghana to Burkina Faso, Togo, or Côte d'Ivoire?",
    a: "Yes. Tema Port is a key gateway for landlocked West African countries. We can provide ECOWAS certificates of origin (Form A) to facilitate regional trade under the ECOWAS trade protocol.",
  },
  {
    q: "Do you accept payment in GHS (Ghana Cedis)?",
    a: "We invoice in USD. However, we understand currency challenges in Ghana and are flexible on payment arrangements. We accept T/T in USD, L/C at sight, and Western Union. Please contact us to discuss your specific situation.",
  },
  {
    q: "What is the Ghana Standards Authority (GSA) requirement for thermal paper?",
    a: "Our products meet international quality standards including ISO 9001, BPA-free, RoHS, and REACH. We provide full test reports and CoA. For GSA-specific requirements, please contact us and we will assist with the relevant documentation.",
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
      "name": "Ghana",
      "item": "https://www.zhixinpaper.com/markets/africa/ghana"
    }
  ]
};
export default function GhanaPage() {
  const whatsappMsg = encodeURIComponent(
    "Hello, I am a distributor in Ghana. I need thermal paper rolls.\nSize needed: 57×50mm / 57×40mm / 80×80mm\nQuantity: ___ cartons\nDestination: Tema Port, Ghana\nPlease send CIF price list."
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
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #006B3F 0%, transparent 50%), radial-gradient(circle at 80% 20%, #FCD116 0%, transparent 40%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <nav className="flex items-center gap-2 text-blue-200 text-sm mb-8 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/markets" className="hover:text-white transition-colors">Markets</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/markets/africa" className="hover:text-white transition-colors">Africa</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">🇬🇭 Ghana</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-400/30 rounded-full px-4 py-2 mb-6">
                <TrendingUp className="w-4 h-4 text-yellow-400" />
                <span className="text-yellow-300 text-sm font-medium">West Africa&apos;s Fastest Growing Economy — 1.5M+ POS Terminals</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Thermal Paper Rolls<br />
                <span className="text-amber-400">Supplier for Ghana</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Factory-direct supply for Ghanaian distributors and MTN MoMo ecosystem partners.
                CIF pricing to <strong className="text-white">Tema Port</strong>.
                Gateway to Burkina Faso, Togo, and Francophone West Africa.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {["CIF Tema Port", "MTN MoMo Compatible", "ISO 9001", "BPA-Free", "ECOWAS CO Available", "West Africa Gateway"].map((b) => (
                  <span key={b} className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1.5 text-sm text-blue-100">
                    <CheckCircle className="w-3.5 h-3.5 text-green-400" />
                    {b}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a href={`${SITE.whatsappUrl}?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg">
                  <MessageSquare className="w-5 h-5" />WhatsApp for Ghana Price
                </a>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-6 py-3.5 rounded-xl transition-all">
                  <ArrowRight className="w-5 h-5" />Get CIF Quote
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "1.5M+", label: "POS Terminals", icon: "🖨️" },
                { value: "60%+", label: "Mobile Money Users", icon: "📱" },
                { value: "24–28", label: "Days to Tema", icon: "🚢" },
                { value: "W.Africa", label: "ECOWAS Gateway", icon: "🌍" },
                { value: "ECOWAS", label: "CO Available", icon: "📋" },
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
      <section className="py-14 bg-yellow-50 border-y border-yellow-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-yellow-700 mb-2">1.5M+</div>
              <div className="font-semibold text-slate-700">Active POS Terminals in Ghana</div>
              <div className="text-sm text-slate-500 mt-1">MTN MoMo, GCB, Ecobank, Fidelity</div>
            </div>
            <div>
              <div className="text-4xl font-black text-yellow-700 mb-2">60%+</div>
              <div className="font-semibold text-slate-700">Mobile Money Penetration</div>
              <div className="text-sm text-slate-500 mt-1">Among highest in West Africa</div>
            </div>
            <div>
              <div className="text-4xl font-black text-yellow-700 mb-2">3+</div>
              <div className="font-semibold text-slate-700">Landlocked Countries via Tema</div>
              <div className="text-sm text-slate-500 mt-1">Burkina Faso, Niger, Mali</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Products ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1F44] mb-4">Most Popular Sizes for Ghana</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Compatible with MTN MoMo, GCB Bank, Ecobank, and all major Ghanaian POS terminals.
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
                  <a href={`${SITE.whatsappUrl}?text=${encodeURIComponent(`Hello, I need bulk quote for ${p.size} thermal paper rolls for Ghana (Tema Port).\nQuantity: ___ cartons`)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="flex-1 text-center text-sm font-semibold bg-green-500 hover:bg-green-400 text-white py-2.5 rounded-xl transition-colors">Get Price</a>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Shipping to <span className="text-amber-400">Ghana</span></h2>
            <p className="text-lg text-blue-200">CIF Tema Port — West Africa&apos;s Key Gateway</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6">
              <h3 className="font-bold text-amber-400 text-lg mb-4 flex items-center gap-2">
                <Ship className="w-5 h-5" /> Sea Freight Details
              </h3>
              <div className="space-y-3 text-sm">
                {[
                  { label: "Origin Port", value: "Qingdao / Shanghai" },
                  { label: "Destination", value: "Tema Port, Accra, Ghana" },
                  { label: "Transit Time", value: "24–28 days" },
                  { label: "20ft FCL", value: "~800 cartons" },
                  { label: "40ft FCL", value: "~1,600 cartons" },
                  { label: "Onward to Burkina Faso", value: "+2–3 days by road" },
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
                {["Bill of Lading (B/L)", "Commercial Invoice", "Packing List", "Certificate of Origin (China)", "ECOWAS Form A (on request)", "BPA-Free Test Report", "ISO 9001 Certificate"].map((doc) => (
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
            <h2 className="text-3xl font-bold text-[#0A1F44] mb-4">Ghana FAQ</h2>
          </div>
          <div className="space-y-4">
            {ghanaFaqs.map((faq, i) => (
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
                Get Ghana Price List<br /><span className="text-amber-500">CIF Tema Port — 2 Hour Quote</span>
              </h2>
              <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <MessageSquare className="w-6 h-6 text-green-600" />
                  <span className="font-bold text-green-800">WhatsApp — Fastest Response</span>
                </div>
                <a href={`${SITE.whatsappUrl}?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-5 py-3 rounded-xl transition-colors w-full justify-center">
                  <MessageSquare className="w-5 h-5" />WhatsApp: {SITE.whatsapp}
                </a>
              </div>
              <div className="space-y-3">
                {["CIF pricing to Tema Port", "MTN MoMo & bank POS compatible", "ECOWAS Form A available", "West Africa re-export support", "Free samples before bulk order"].map((item) => (
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
          <div className="text-5xl mb-4">🇬🇭</div>
          <h2 className="text-3xl font-black text-white mb-4">
            Ghana&apos;s Mobile Money Revolution Needs Paper. Supply It.
          </h2>
          <p className="text-xl text-blue-200 mb-8">CIF Tema Port. MTN MoMo compatible. ISO certified. 2-hour WhatsApp response.</p>
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
