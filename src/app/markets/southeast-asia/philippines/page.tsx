import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import { SITE } from "@/config/siteData";
import { MessageSquare, Phone, CheckCircle, Ship, Clock, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Thermal Paper Supplier Philippines | Manila",
  description: "Factory-direct thermal paper rolls for Philippines distributors. CIF Manila (MICT) pricing, 57×50mm and 80×80mm in stock. FORM E available. OEM supported.",
  keywords: "thermal paper rolls Philippines, thermal paper supplier Manila, POS paper rolls Philippines, thermal roll supplier MICT, thermal paper PHP price, thermal paper Cebu, thermal paper Davao, thermal paper Makati, POS receipt paper Philippines, papel termico Philippines",
  openGraph: {
    title: "Thermal Paper Rolls Supplier Philippines",
    description: "Factory-direct thermal paper rolls for Philippines. CIF Manila MICT, FORM E, OEM available.",
    url: "https://www.zxpapers.com/markets/southeast-asia/philippines",
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
  alternates: { canonical: `${SITE.domain}/markets/southeast-asia/philippines` },
};

const products = [
  { name: "57×50mm Thermal Rolls", badge: "Most Popular", href: "/products/thermal-rolls/57x50mm", desc: "Most popular size for Filipino retail POS terminals and mobile payment systems (GCash, Maya)." },
  { name: "80×80mm Thermal Rolls", badge: "Supermarket", href: "/products/thermal-rolls/80x80mm", desc: "Standard POS receipt roll for SM Supermarket, Robinsons, and large retail chains." },
  { name: "4\"×6\" Shipping Labels", badge: "E-Commerce", href: "/products/thermal-labels/4x6-shipping", desc: "High demand from Lazada Philippines, Shopee PH, and logistics providers." },
  { name: "OEM Custom Rolls", badge: "Private Label", href: "/oem", desc: "Custom logo and packaging for Filipino distributors building their own brand." },
];

const faqs = [
  { q: "Do you ship CIF to Manila?", a: "Yes. We provide CIF Manila MICT pricing. Transit time is approximately 12–16 days from Shenzhen." },
  { q: "Can I get FORM E for the Philippines?", a: "Yes. FORM E (ASEAN-China FTA Certificate of Origin) is available to help reduce import duties." },
  { q: "How do you handle island delivery in the Philippines?", a: "We ship to Manila MICT. Your local freight forwarder can arrange onward delivery to Cebu, Davao, or other islands." },
  { q: "What payment terms do you accept?", a: "We accept T/T (30% deposit, 70% before shipment), L/C at sight, and flexible terms for established buyers." },
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
      "name": "Philippines",
      "item": "https://www.zhixinpaper.com/markets/southeast-asia/philippines"
    }
  ]
};
export default function PhilippinesPage() {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHero
        bgImage="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=1400&q=80"
        overlayDir="left"
        overlayOpacity={50}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Markets", href: "/markets" },
          { label: "Southeast Asia", href: "/markets/southeast-asia" },
          { label: "Philippines" },
        ]}
        badge={{ text: "🇵🇭 Philippines Market", color: "green" }}
        eyebrow="Thermal Paper Supplier for Philippines"
        title={<>Thermal Paper Rolls<br /><span className="text-amber-400">Supplier for Philippines</span></>}
        subtitle="Factory-direct supply to Filipino distributors and wholesalers. CIF Manila MICT pricing, FORM E available. 57×50mm and 80×80mm in stock."
        trustBadges={["CIF Manila MICT", "FORM E Available", "OEM Supported", "ISO 9001", "BPA-Free"]}
        ctas={[
          { label: "Get Philippines Price List", href: "/contact", variant: "primary", icon: <MessageSquare className="w-4 h-4" /> },
          { label: "WhatsApp for Quote", href: `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I am a distributor in the Philippines. Please send me your thermal paper price list and CIF Manila rates.")}`, variant: "whatsapp", icon: <Phone className="w-4 h-4" />, external: true },
        ]}
        stats={[
          { value: "2M+", label: "POS Terminals" },
          { value: "12–16 Days", label: "CIF Transit" },
          { value: "FORM E", label: "FTA Certificate" },
          { value: "24h", label: "Quote Response" },
        ]}
      />

      <section className="bg-white py-16">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3" style={{ fontFamily: "Sora, sans-serif" }}>Popular Products for Philippines</h2>
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
                  <a href={`${SITE.whatsappUrl}?text=${encodeURIComponent(`Hello, I need pricing for ${p.name} for Philippines. Please send MOQ and bulk price.`)}`} target="_blank" rel="noopener noreferrer" className="flex-1 text-center text-sm font-semibold text-white bg-green-600 hover:bg-green-700 px-3 py-2 rounded-lg transition-colors">WhatsApp</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3" style={{ fontFamily: "Sora, sans-serif" }}>Shipping to Philippines</h2>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            {[
              { label: "Destination Port", value: "Manila International Container Terminal (MICT)", icon: <Ship className="w-4 h-4 text-blue-500" /> },
              { label: "Transit Time", value: "12–16 days from Shenzhen", icon: <Clock className="w-4 h-4 text-green-500" /> },
              { label: "Incoterm", value: "FOB Shenzhen / CIF Manila MICT", icon: <Package className="w-4 h-4 text-amber-500" /> },
              { label: "Container Options", value: "20ft FCL / 40ft FCL / LCL", icon: <Package className="w-4 h-4 text-purple-500" /> },
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
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3" style={{ fontFamily: "Sora, sans-serif" }}>FAQ — Philippines Buyers</h2>
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
          <h2 className="text-3xl font-extrabold mb-4" style={{ fontFamily: "Sora, sans-serif" }}>Get CIF Manila Pricing Today</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">Send us your required sizes and quantity. We'll reply with a full price list within 24 hours.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5" style={{ fontFamily: "Sora, sans-serif" }}>
              <MessageSquare className="w-5 h-5" /> Send Inquiry
            </Link>
            <a href={`${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I am a distributor in the Philippines. Please send me your thermal paper price list and CIF Manila rates.")}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5" style={{ fontFamily: "Sora, sans-serif" }}>
              <Phone className="w-5 h-5" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
