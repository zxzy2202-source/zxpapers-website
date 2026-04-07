import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import { SITE } from "@/config/siteData";
import { MessageSquare, Phone, CheckCircle, Ship, Clock, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Thermal Paper Supplier Vietnam | CIF Ho Chi Minh",
  description: "Factory-direct thermal paper rolls for Vietnam distributors. CIF Cat Lai (Ho Chi Minh) pricing, 80×80mm and 57×50mm in stock. FORM E available. OEM supported.",
  keywords: "thermal paper rolls Vietnam, thermal paper supplier Ho Chi Minh, POS paper rolls Vietnam, giấy nhiệt Vietnam, nhà cung cấp giấy in hóa đơn, giá giấy nhiệt VND, thermal paper Hanoi, thermal paper Da Nang, giấy in bill POS Vietnam, nhà máy giấy nhiệt Trung Quốc",
  openGraph: {
    title: "Thermal Paper Rolls Supplier Vietnam",
    description: "Factory-direct thermal paper rolls for Vietnam. CIF Cat Lai, FORM E, OEM available.",
    url: "https://www.zxpapers.com/markets/southeast-asia/vietnam",
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
  alternates: { canonical: `${SITE.domain}/markets/southeast-asia/vietnam` },
};

const products = [
  { name: "80×80mm Thermal Rolls", badge: "Most Popular", href: "/products/thermal-rolls/80x80mm", desc: "Standard POS receipt roll for Vietnamese supermarkets (VinMart, Co.opmart), restaurants, and retail chains." },
  { name: "57×50mm Thermal Rolls", badge: "Mobile POS", href: "/products/thermal-rolls/57x50mm", desc: "Compact rolls for handheld POS terminals and delivery receipt printers (GrabFood, ShopeeFood)." },
  { name: "4\"×6\" Shipping Labels", badge: "E-Commerce", href: "/products/thermal-labels/4x6-shipping", desc: "High demand from Shopee Vietnam, Lazada, and Tiki fulfillment centers." },
  { name: "OEM Custom Rolls", badge: "Private Label", href: "/oem", desc: "Custom logo and packaging for Vietnamese distributors building their own brand." },
];

const faqs = [
  { q: "Do you ship CIF to Ho Chi Minh City?", a: "Yes. We provide CIF Cat Lai (Ho Chi Minh) pricing. Transit time is approximately 10–14 days from Shenzhen." },
  { q: "Can I get FORM E for Vietnam?", a: "Yes. FORM E (ASEAN-China FTA Certificate of Origin) is available to help reduce import duties." },
  { q: "What is the MOQ for Vietnam orders?", a: "MOQ is flexible — from 1 carton for samples to full 20ft container orders." },
  { q: "Do you ship to Hanoi as well?", a: "Yes. We can ship to Hai Phong port (for Hanoi) or Cat Lai (for Ho Chi Minh City). Please specify your preferred port." },
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
      "name": "Southeast Asia",
      "item": "https://www.zhixinpaper.com/markets/southeast-asia"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Vietnam",
      "item": "https://www.zhixinpaper.com/markets/southeast-asia/vietnam"
    }
  ]
};
export default function VietnamPage() {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHero
        bgImage="https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1400&q=80"
        overlayDir="left"
        overlayOpacity={50}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Markets", href: "/markets" },
          { label: "Southeast Asia", href: "/markets/southeast-asia" },
          { label: "Vietnam" },
        ]}
        badge={{ text: "🇻🇳 Vietnam Market", color: "green" }}
        eyebrow="Thermal Paper Supplier for Vietnam"
        title={<>Thermal Paper Rolls<br /><span className="text-amber-400">Supplier for Vietnam</span></>}
        subtitle="Factory-direct supply to Vietnamese distributors and wholesalers. CIF Cat Lai / Hai Phong pricing, FORM E available. 80×80mm and 57×50mm in stock."
        trustBadges={["CIF Cat Lai / Hai Phong", "FORM E Available", "OEM Supported", "ISO 9001", "BPA-Free"]}
        ctas={[
          { label: "Get Vietnam Price List", href: "/contact", variant: "primary", icon: <MessageSquare className="w-4 h-4" /> },
          { label: "WhatsApp for Quote", href: `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I am a distributor in Vietnam. Please send me your thermal paper price list and CIF Ho Chi Minh rates.")}`, variant: "whatsapp", icon: <Phone className="w-4 h-4" />, external: true },
        ]}
        stats={[
          { value: "3M+", label: "POS Terminals" },
          { value: "10–14 Days", label: "CIF Transit" },
          { value: "FORM E", label: "FTA Certificate" },
          { value: "24h", label: "Quote Response" },
        ]}
      />

      <section className="bg-white py-16">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3" style={{ fontFamily: "Sora, sans-serif" }}>Popular Products for Vietnam</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Most-ordered thermal paper products by Vietnamese distributors and e-commerce logistics providers.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <div key={p.name} className="bg-white border border-slate-200 hover:border-green-300 hover:shadow-lg rounded-2xl p-6 transition-all duration-300 flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-slate-900 text-base leading-tight" style={{ fontFamily: "Sora, sans-serif" }}>{p.name}</h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 whitespace-nowrap ml-2">{p.badge}</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">{p.desc}</p>
                <div className="flex gap-2 mt-auto">
                  <Link href={p.href} className="flex-1 text-center text-sm font-semibold text-green-700 bg-green-50 hover:bg-green-100 px-3 py-2 rounded-lg transition-colors">Details</Link>
                  <a href={`${SITE.whatsappUrl}?text=${encodeURIComponent(`Hello, I need pricing for ${p.name} for Vietnam. Please send MOQ and bulk price.`)}`} target="_blank" rel="noopener noreferrer" className="flex-1 text-center text-sm font-semibold text-white bg-green-600 hover:bg-green-700 px-3 py-2 rounded-lg transition-colors">WhatsApp</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3" style={{ fontFamily: "Sora, sans-serif" }}>Shipping to Vietnam</h2>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            {[
              { label: "Destination Port (South)", value: "Cat Lai, Ho Chi Minh City", icon: <Ship className="w-4 h-4 text-blue-500" /> },
              { label: "Destination Port (North)", value: "Hai Phong Port", icon: <Ship className="w-4 h-4 text-blue-500" /> },
              { label: "Transit Time", value: "10–14 days from Shenzhen", icon: <Clock className="w-4 h-4 text-green-500" /> },
              { label: "Incoterm", value: "FOB Shenzhen / CIF Cat Lai or Hai Phong", icon: <Package className="w-4 h-4 text-amber-500" /> },
              { label: "FTA Certificate", value: "FORM E (ASEAN-China FTA)", icon: <CheckCircle className="w-4 h-4 text-green-500" /> },
              { label: "Shipping Documents", value: "B/L, Packing List, Commercial Invoice, CO", icon: <CheckCircle className="w-4 h-4 text-green-500" /> },
            ].map((row, i) => (
              <div key={row.label} className={`flex items-center gap-4 px-6 py-4 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                <div className="flex-shrink-0">{row.icon}</div>
                <div className="flex-1 flex items-center justify-between">
                  <span className="text-sm text-slate-500">{row.label}</span>
                  <span className="text-sm font-semibold text-slate-900">{row.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3" style={{ fontFamily: "Sora, sans-serif" }}>FAQ — Vietnam Buyers</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 mb-2 flex items-start gap-2" style={{ fontFamily: "Sora, sans-serif" }}>
                  <span className="text-green-500 mt-0.5 flex-shrink-0">Q.</span>{faq.q}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed pl-5">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0F2B5B] text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-extrabold mb-4" style={{ fontFamily: "Sora, sans-serif" }}>Get CIF Vietnam Pricing Today</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">Send us your required sizes and quantity. We'll reply with a full price list within 24 hours.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5" style={{ fontFamily: "Sora, sans-serif" }}>
              <MessageSquare className="w-5 h-5" /> Send Inquiry
            </Link>
            <a href={`${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I am a distributor in Vietnam. Please send me your thermal paper price list and CIF Ho Chi Minh rates.")}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5" style={{ fontFamily: "Sora, sans-serif" }}>
              <Phone className="w-5 h-5" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
