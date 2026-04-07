import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/shared/InquiryForm";
import {
  ArrowRight, CheckCircle, Ship, Clock, Package,
  MessageSquare, Award, TrendingUp, MapPin,
  ChevronRight, Factory, Banknote, ShieldCheck, Truck,
} from "lucide-react";
import { SITE, FACTORY, CERTIFICATIONS } from "@/config/siteData";

export const metadata: Metadata = {
  title: "Thermal Paper Rolls Supplier Nigeria | Bulk POS Paper Lagos",
  description:
    "Factory-direct thermal paper rolls for Nigerian distributors. 57×50mm, 57×40mm, 80×80mm. CIF Lagos/Apapa pricing. ISO 9001 certified, BPA-free.",
  keywords:
    "thermal paper rolls Nigeria, POS paper rolls Lagos, receipt paper Nigeria, thermal paper supplier Nigeria, bulk thermal paper Nigeria, 57x50 thermal paper Nigeria, POS rolls Abuja, thermal paper wholesale Nigeria, CBN POS paper Nigeria",
  openGraph: {
    title: "Thermal Paper Rolls Supplier Nigeria | Factory Direct",
    description:
      "Serving 15M+ POS terminals in Nigeria. CIF Lagos pricing. ISO 9001. BPA-free. FCL ready in 3–5 days.",
    type: "website",
    url: "https://www.zxpapers.com/markets/africa/nigeria",
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
    canonical: "https://www.zxpapers.com/markets/africa/nigeria",
  },
};

const products = [
  {
    size: "57 × 50 mm",
    href: "/products/thermal-rolls/57x50mm",
    badge: "#1 in Nigeria",
    badgeColor: "bg-amber-100 text-amber-800",
    desc: "The most popular POS roll in Nigeria. Fits Ingenico, Verifone, VeriFone VX520, and most CBN-approved POS terminals used by mobile money agents and banks.",
    specs: ["Core: 12mm / 13mm", "Length: 50m / 60m / 80m", "GSM: 55–65g", "Width tolerance: ±0.5mm"],
    moq: "1 carton (50 rolls)",
    use: "Mobile money agents, banks, retail POS",
  },
  {
    size: "57 × 40 mm",
    href: "/products/thermal-rolls/57x40mm",
    badge: "Street Vendors",
    badgeColor: "bg-blue-100 text-blue-800",
    desc: "Compact roll for handheld POS terminals. Widely used by market traders, street vendors, and mobile payment agents across Lagos, Abuja, and Port Harcourt.",
    specs: ["Core: 12mm / 13mm", "Length: 40m / 50m", "GSM: 55–65g", "Width tolerance: ±0.5mm"],
    moq: "1 carton (50 rolls)",
    use: "Handheld POS, mobile agents",
  },
  {
    size: "80 × 80 mm",
    href: "/products/thermal-rolls/80x80mm",
    badge: "Supermarkets",
    badgeColor: "bg-green-100 text-green-800",
    desc: "Wide format roll for supermarket checkout counters, bank tellers, and restaurant POS systems. Used by Shoprite, Spar, and major Nigerian supermarket chains.",
    specs: ["Core: 12mm / 13mm", "Length: 80m / 100m", "GSM: 65–80g", "Width tolerance: ±0.5mm"],
    moq: "1 carton (24 rolls)",
    use: "Supermarkets, bank tellers, restaurants",
  },
];

const nigeriaFaqs = [
  {
    q: "Do you ship directly to Lagos (Apapa Port)?",
    a: "Yes. We ship CIF to Apapa Port and Tin Can Island Port in Lagos. We provide full export documentation including Bill of Lading, packing list, commercial invoice, and Certificate of Origin. Transit time is approximately 25–30 days from Qingdao.",
  },
  {
    q: "What is the price for 57×50mm thermal paper rolls in Nigeria?",
    a: "Pricing depends on quantity, core size, and roll length. For a full 20ft container (approximately 800 cartons), we offer our best FOB/CIF pricing. Please WhatsApp us or fill the inquiry form for a detailed quote within 2 hours.",
  },
  {
    q: "Are your rolls compatible with CBN-approved POS terminals?",
    a: "Yes. Our 57×50mm and 57×40mm rolls are compatible with all major CBN-approved POS terminals in Nigeria including Ingenico iCT220/250, Verifone VX520, Eftpos, Itex, and Interswitch terminals.",
  },
  {
    q: "Can you do custom packaging with my company name?",
    a: "Yes. We offer full OEM service including custom shrink wrap with your logo, custom carton printing, and custom core sizes. MOQ for OEM packaging is 5 cartons. We sign NDA to protect your brand.",
  },
  {
    q: "What payment methods do you accept from Nigeria?",
    a: "We accept T/T (bank transfer in USD), L/C at sight, Western Union, and for small sample orders, PayPal. Standard payment terms: 30% deposit to start production, 70% balance before shipment.",
  },
  {
    q: "Do you have Nigerian distributors or agents?",
    a: "We work directly with importers and distributors in Nigeria. If you are interested in becoming our authorized distributor in Nigeria, please contact us. We offer exclusive territory arrangements for qualified partners.",
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
      "name": "Nigeria",
      "item": "https://www.zhixinpaper.com/markets/africa/nigeria"
    }
  ]
};
export default function NigeriaPage() {
  const whatsappMsg = encodeURIComponent(
    "Hello, I am a distributor in Nigeria. I need thermal paper rolls.\nSize needed: 57×50mm / 57×40mm / 80×80mm\nQuantity: ___ cartons\nDestination: Lagos (Apapa Port)\nPlease send price list."
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
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #008751 0%, transparent 50%), radial-gradient(circle at 80% 20%, #F59E0B 0%, transparent 40%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-blue-200 text-sm mb-8 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/markets" className="hover:text-white transition-colors">Markets</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/markets/africa" className="hover:text-white transition-colors">Africa</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">🇳🇬 Nigeria</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/30 rounded-full px-4 py-2 mb-6">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-green-300 text-sm font-medium">15M+ Active POS Terminals in Nigeria</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Thermal Paper Rolls<br />
                <span className="text-amber-400">Supplier for Nigeria</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Factory-direct supply for Nigerian distributors, importers, and POS equipment dealers.
                CIF pricing to <strong className="text-white">Apapa Port, Lagos</strong>.
                Serving CBN-registered POS agents, banks, and supermarkets nationwide.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {["CIF Lagos Pricing", "ISO 9001 Certified", "BPA-Free", "CBN POS Compatible", "L/C Accepted", "OEM Available"].map((b) => (
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
                  WhatsApp for Nigeria Price
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

            {/* Nigeria Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "15M+", label: "Active POS Terminals", icon: "🖨️" },
                { value: "220M+", label: "Population", icon: "👥" },
                { value: "25–30", label: "Days Sea Transit", icon: "🚢" },
                { value: "#1", label: "Largest African Economy", icon: "🏆" },
                { value: "CBN", label: "POS Compatible", icon: "✅" },
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

      {/* ── Market Context ────────────────────────────────────────────── */}
      <section className="py-14 bg-green-50 border-y border-green-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-green-700 mb-2">15M+</div>
              <div className="font-semibold text-slate-700">CBN-Registered POS Terminals</div>
              <div className="text-sm text-slate-500 mt-1">Growing 40%+ year-on-year</div>
            </div>
            <div>
              <div className="text-4xl font-black text-green-700 mb-2">₦2T+</div>
              <div className="font-semibold text-slate-700">Monthly POS Transaction Value</div>
              <div className="text-sm text-slate-500 mt-1">Source: CBN 2024 Annual Report</div>
            </div>
            <div>
              <div className="text-4xl font-black text-green-700 mb-2">500K+</div>
              <div className="font-semibold text-slate-700">New POS Terminals Added/Year</div>
              <div className="text-sm text-slate-500 mt-1">Massive recurring paper demand</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Products ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1F44] mb-4">
              Most Popular Sizes for Nigeria
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Optimized for CBN-approved POS terminals. All sizes available for bulk orders with OEM packaging.
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
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="text-sm text-slate-500 mb-4">MOQ: <strong>{p.moq}</strong></div>
                <div className="flex gap-2">
                  <Link href={p.href} className="flex-1 text-center text-sm font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 py-2.5 rounded-xl transition-colors">
                    Specifications
                  </Link>
                  <a
                    href={`${SITE.whatsappUrl}?text=${encodeURIComponent(`Hello, I need bulk quote for ${p.size} thermal paper rolls for Nigeria (Lagos).\nQuantity: ___ cartons\nPlease send CIF price.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-sm font-semibold bg-green-500 hover:bg-green-400 text-white py-2.5 rounded-xl transition-colors"
                  >
                    Get Price
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Logistics to Nigeria ──────────────────────────────────────── */}
      <section className="py-20 bg-[#0A1F44] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Shipping to <span className="text-amber-400">Nigeria</span>
            </h2>
            <p className="text-lg text-blue-200">CIF Apapa Port / Tin Can Island Port, Lagos</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6">
              <h3 className="font-bold text-amber-400 text-lg mb-4 flex items-center gap-2">
                <Ship className="w-5 h-5" /> Sea Freight (FCL/LCL)
              </h3>
              <div className="space-y-3 text-sm">
                {[
                  { label: "Origin Port", value: "Qingdao / Shanghai, China" },
                  { label: "Destination", value: "Apapa Port / Tin Can Island, Lagos" },
                  { label: "Transit Time", value: "25–30 days" },
                  { label: "20ft FCL Capacity", value: "~800 cartons (57×50mm)" },
                  { label: "40ft FCL Capacity", value: "~1,600 cartons (57×50mm)" },
                  { label: "LCL Available", value: "From 1 CBM (first orders)" },
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
                <Package className="w-5 h-5" /> Export Documentation
              </h3>
              <div className="space-y-2.5">
                {[
                  "Bill of Lading (B/L)",
                  "Commercial Invoice",
                  "Packing List",
                  "Certificate of Origin (CO) — China",
                  "Health / Phytosanitary Certificate (if required)",
                  "BPA-Free Test Report",
                  "ISO 9001 Certificate copy",
                  "Form E (ECOWAS) available on request",
                ].map((doc) => (
                  <div key={doc} className="flex items-center gap-2 text-sm text-blue-100">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    {doc}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-amber-500/20 border border-amber-400/30 rounded-2xl p-6 text-center">
            <p className="text-amber-300 font-semibold mb-2">💡 Nigeria Import Tip</p>
            <p className="text-blue-100 text-sm max-w-2xl mx-auto">
              We can declare goods as &quot;Thermal Paper Products&quot; under HS Code 4809.90 or 4811.59.
              Our team is experienced with Nigerian Customs (NCS) requirements and can assist with SON (Standards Organisation of Nigeria) documentation if needed.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#0A1F44] mb-4">Nigeria FAQ</h2>
            <p className="text-slate-600">Common questions from Nigerian importers and distributors.</p>
          </div>
          <div className="space-y-4">
            {nigeriaFaqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-[#0A1F44] mb-2 flex items-start gap-2">
                  <span className="text-amber-500 font-black text-lg leading-none mt-0.5">Q</span>
                  {faq.q}
                </h3>
                <p className="text-slate-600 leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Inquiry + CTA ─────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1F44] mb-6">
                Get Nigeria Price List<br />
                <span className="text-amber-500">CIF Lagos — 2 Hour Quote</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Tell us your required sizes and monthly volume. We&apos;ll send you a detailed CIF quote to Apapa Port within 2 hours.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <MessageSquare className="w-6 h-6 text-green-600" />
                  <span className="font-bold text-green-800">WhatsApp — Fastest for Nigeria</span>
                </div>
                <p className="text-sm text-green-700 mb-4">
                  Send your requirements directly. Our Nigeria export specialist responds within 2 hours.
                </p>
                <a
                  href={`${SITE.whatsappUrl}?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-5 py-3 rounded-xl transition-colors w-full justify-center"
                >
                  <MessageSquare className="w-5 h-5" />
                  WhatsApp: {SITE.whatsapp}
                </a>
              </div>
              <div className="space-y-3">
                {[
                  "CIF pricing to Apapa Port / Tin Can Island",
                  "CBN-compatible POS roll sizes available",
                  "OEM packaging with your brand",
                  "Form E (ECOWAS) documentation available",
                  "Free samples before bulk order",
                ].map((item) => (
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
          <div className="text-5xl mb-4">🇳🇬</div>
          <h2 className="text-3xl font-black text-white mb-4">
            Nigeria&apos;s 15M+ POS Terminals Need Paper. Be the Supplier.
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Factory direct. CIF Lagos. ISO certified. WhatsApp response in 2 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`${SITE.whatsappUrl}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-black px-8 py-4 rounded-2xl text-lg transition-colors"
            >
              <MessageSquare className="w-6 h-6" />
              WhatsApp Now
            </a>
            <Link
              href="/markets/africa"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-2xl text-lg transition-colors border border-white/30"
            >
              ← All Africa Markets
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
