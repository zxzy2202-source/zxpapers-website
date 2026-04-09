import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import InquiryForm from "@/components/shared/InquiryForm";
import {
  ArrowRight, CheckCircle, Ship, Clock, Package,
  MessageSquare, Award, TrendingUp, MapPin, ShieldCheck,
  Banknote, Truck, Factory,
} from "lucide-react";
import { SITE, CERTIFICATIONS } from "@/config/siteData";

export const metadata: Metadata = {
  title: "Thermal Paper Rolls Supplier Saudi Arabia | Bulk POS | ZhixinPaper",
  description: "Factory-direct thermal paper rolls for Saudi Arabia distributors. 80x80mm, 57x50mm, BPA-free, ISO 9001. CIF Jeddah & Dammam. SABER support. MOQ 1 carton.",
  alternates: { canonical: `${SITE.domain}/markets/middle-east/saudi-arabia` },
  openGraph: {
    title: "Thermal Paper Rolls Supplier Saudi Arabia | ZhixinPaper",
    description: "Factory-direct thermal paper rolls for KSA. CIF Jeddah & Dammam. SABER support. BPA-free, ISO 9001.",
    type: "website",
  },
};

const products = [
  {
    size: "80 × 80 mm", badge: "#1 in Saudi", badgeColor: "bg-amber-100 text-amber-800",
    href: "/products/thermal-rolls/80x80mm",
    desc: "Standard POS roll for Saudi retail chains, hypermarkets, and banking terminals. Compatible with all POS brands used in Panda, Carrefour, Danube, and Saudi banks.",
    specs: ["Core: 12mm / 13mm", "Length: 60m / 80m", "GSM: 65–80g", "BPA-free"],
    moq: "1 carton (50 rolls)", use: "Hypermarkets, banking, retail POS",
  },
  {
    size: "57 × 50 mm", badge: "SADAD / STC Pay", badgeColor: "bg-blue-100 text-blue-800",
    href: "/products/thermal-rolls/57x50mm",
    desc: "Most popular for SADAD payment terminals, STC Pay, and mobile POS. Widely used by Saudi Aramco service stations and convenience stores.",
    specs: ["Core: 12mm / 13mm", "Length: 50m / 60m", "GSM: 55–65g", "BPA-free"],
    moq: "1 carton (50 rolls)", use: "SADAD terminals, petrol stations, convenience",
  },
  {
    size: "4\" × 6\" Labels", badge: "E-commerce", badgeColor: "bg-green-100 text-green-800",
    href: "/products/thermal-labels/4x6in",
    desc: "Shipping labels for Noon.com, Amazon.sa, Jarir, and Saudi logistics companies (Aramex, DHL, SMSA Express).",
    specs: ["Size: 4\" × 6\"", "Core: 1\" / 3\"", "Adhesive: Permanent", "BPA-free"],
    moq: "1 roll (500 labels)", use: "E-commerce, logistics, warehousing",
  },
  {
    size: "57 × 40 mm", badge: "Compact POS", badgeColor: "bg-purple-100 text-purple-800",
    href: "/products/thermal-rolls/57x40mm",
    desc: "Compact roll for handheld POS terminals used in Saudi food courts, cafeterias, and quick-service restaurants.",
    specs: ["Core: 12mm / 13mm", "Length: 40m / 50m", "GSM: 55–65g", "BPA-free"],
    moq: "1 carton (50 rolls)", use: "Food courts, QSR, compact POS",
  },
];

const faqs = [
  { q: "Do you support SABER certification for Saudi Arabia?", a: "Yes. We can provide all necessary documentation to support SABER certification, including product certificates, SGS test reports, and factory audit documentation required by SASO." },
  { q: "What is the CIF price to Jeddah Islamic Port?", a: "We provide CIF Jeddah pricing for all standard sizes. Contact us with your required sizes and quantities for a detailed quote within 24 hours. We also quote CIF Dammam (King Abdulaziz Port) for Eastern Province buyers." },
  { q: "Can you provide Arabic OEM packaging for Saudi market?", a: "Yes. Full OEM service with Arabic packaging, SASO-compliant labeling, and your brand name/logo. NDA available. MOQ 1,000 rolls per size. Sample production 7–10 days." },
  { q: "What payment terms do you accept?", a: "L/C at sight, T/T bank transfer. For established Saudi distributors, we can discuss 30-day payment terms after the first successful order." },
  { q: "How long does shipping take from China to Saudi Arabia?", a: "CIF Jeddah: 20–25 days from our factory. CIF Dammam: 22–27 days. Container loading: 3–5 days after order confirmation." },
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
      "name": "Middle East",
      "item": "https://www.zhixinpaper.com/markets/middle-east"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Saudi Arabia",
      "item": "https://www.zhixinpaper.com/markets/middle-east/saudi-arabia"
    }
  ]
};
export default function SaudiArabiaPage() {
  const waMsg = encodeURIComponent("Hello, I am a thermal paper distributor in Saudi Arabia. Please send me your CIF Jeddah price list and MOQ for 80×80mm and 57×50mm rolls.");

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="relative bg-gradient-to-br from-[#0F2B5B] via-[#1a3a6e] to-[#0d2347] text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=1400&q=60')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2B5B]/80 to-transparent" />
        <div className="relative max-w-6xl mx-auto">
          <nav className="text-sm text-blue-300 mb-4 flex items-center gap-1 flex-wrap">
            <Link href="/" className="hover:text-white">Home</Link><ArrowRight className="w-3 h-3" />
            <Link href="/markets" className="hover:text-white">Markets</Link><ArrowRight className="w-3 h-3" />
            <Link href="/markets/middle-east" className="hover:text-white">Middle East</Link><ArrowRight className="w-3 h-3" />
            <span className="text-white">Saudi Arabia</span>
          </nav>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">🇸🇦 Saudi Arabia — Largest GCC Market</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Thermal Paper Rolls<br /><span className="text-amber-400">Supplier for Saudi Arabia</span></h1>
              <p className="text-xl text-blue-100 mb-6 max-w-xl">Factory-direct supply for Saudi distributors. CIF Jeddah & Dammam. SABER documentation support. Arabic OEM packaging. L/C accepted.</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["ISO 9001", "BPA-Free", "CIF Jeddah", "SABER Support", "Arabic OEM", "L/C Accepted"].map((b) => (
                  <span key={b} className="bg-white/15 text-white text-xs px-3 py-1 rounded-full border border-white/20">{b}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3 rounded-lg transition-colors flex items-center gap-2">Get CIF Jeddah Quote <ArrowRight className="w-4 h-4" /></Link>
                <a href={`https://wa.me/${SITE.whatsapp}?text=${waMsg}`} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-lg transition-colors flex items-center gap-2"><MessageSquare className="w-4 h-4" /> WhatsApp Us</a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <TrendingUp className="w-5 h-5 text-amber-400" />, value: "5M+", label: "POS Terminals in KSA" },
                { icon: <MapPin className="w-5 h-5 text-amber-400" />, value: "Jeddah", label: "Islamic Port CIF" },
                { icon: <Ship className="w-5 h-5 text-amber-400" />, value: "20–25d", label: "CIF Transit Time" },
                { icon: <Award className="w-5 h-5 text-amber-400" />, value: "SABER", label: "Documentation Support" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 backdrop-blur rounded-xl p-5 border border-white/10">
                  <div className="mb-2">{s.icon}</div>
                  <div className="text-3xl font-bold text-white">{s.value}</div>
                  <div className="text-sm text-blue-200 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0F2B5B] mb-3">Popular Products for Saudi Arabia</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Most-ordered thermal paper sizes by Saudi distributors. SABER documentation available.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {products.map((p) => (
              <div key={p.size} className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div><h3 className="text-xl font-bold text-[#0F2B5B]">{p.size}</h3><span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${p.badgeColor}`}>{p.badge}</span></div>
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-lg">MOQ: {p.moq}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{p.desc}</p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {p.specs.map((s) => (<div key={s} className="flex items-center gap-1 text-xs text-gray-500"><CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" /> {s}</div>))}
                </div>
                <div className="flex gap-2">
                  <Link href={p.href} className="flex-1 text-center text-sm bg-[#0F2B5B] text-white py-2 rounded-lg hover:bg-blue-800 transition-colors">View Details</Link>
                  <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hello, I need a CIF Jeddah quote for ${p.size} thermal paper rolls for Saudi Arabia.`)}`} target="_blank" rel="noopener noreferrer" className="flex-1 text-center text-sm bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors">WhatsApp Quote</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0F2B5B] mb-8 text-center">Saudi Arabia Buyer FAQ</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-[#0F2B5B] mb-2 flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> {f.q}</h3>
                <p className="text-gray-600 text-sm pl-7">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#0F2B5B] mb-3">Get Your Saudi Arabia CIF Quote</h2>
            <p className="text-gray-500">CIF Jeddah / Dammam pricing within 24 hours. SABER support. Arabic OEM available.</p>
          </div>
          <InquiryForm />
        </div>
      </section>

      <section className="py-16 px-4 bg-[#0F2B5B] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Source Thermal Paper for Saudi Arabia?</h2>
          <p className="text-blue-200 mb-8">CIF Jeddah / Dammam quotes within 24 hours. SABER documentation support. L/C accepted.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3 rounded-lg transition-colors">Send Inquiry</Link>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waMsg}`} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-lg transition-colors">WhatsApp for Quick Quote</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
