import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/shared/InquiryForm";
import {
  ArrowRight, CheckCircle, Ship, Clock, Package,
  Globe, Truck, Phone, MessageSquare, Award,
  TrendingUp, Users, Zap, MapPin, Star,
  ChevronRight, Factory, Banknote, ShieldCheck,
} from "lucide-react";
import { SITE, FACTORY, CERTIFICATIONS } from "@/config/siteData";
import PageHero from "@/components/shared/PageHero";

import { CountryFlag, type CountryCode } from "@/components/ui/country-flag";

export const metadata: Metadata = {
  title: "Thermal Paper Supplier Africa | Bulk Direct",
  description:
    "Factory-direct thermal paper rolls for distributors across Africa — Nigeria, Kenya, South Africa, Ghana, Tanzania, Ethiopia.",
  keywords:
    "thermal paper rolls Africa, thermal paper Nigeria, thermal paper Kenya, thermal paper South Africa, thermal paper Ghana, POS paper rolls Africa, receipt paper supplier Africa, bulk thermal paper Africa, wholesale thermal paper Africa",
  openGraph: {
    title: "Thermal Paper Rolls Supplier for Africa",
    description:
      "Serving 15M+ POS terminals across Africa. Factory direct, ISO 9001 certified, BPA-free. FCL ready in 3–5 days.",
    type: "website",
    url: "https://www.zxpapers.com/markets/africa",
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
    canonical: "https://www.zxpapers.com/markets/africa",
  },
};

/* ─── Country Data ─────────────────────────────────────────────────── */

const countries = [
  {
    code: "NG" as CountryCode,
    country: "Nigeria",
    slug: "nigeria",
    city: "Lagos / Abuja",
    port: "Apapa Port / Tin Can Island Port",
    transit: "25–30 days",
    currency: "NGN / USD",
    market:
      "Largest economy in Africa with 220M+ population. CBN data shows 15M+ active POS terminals. Massive recurring demand from banks, supermarkets, and mobile money agents.",
    popular: ["57×50mm", "57×40mm", "80×80mm"],
    posTerminals: "15M+",
    annualDemand: "Very High",
    highlight: true,
    badge: "Largest Market",
    badgeColor: "amber",
  },
  {
    code: "KE" as CountryCode,
    country: "Kenya",
    slug: "kenya",
    city: "Nairobi / Mombasa",
    port: "Port of Mombasa",
    transit: "22–28 days",
    currency: "KES / USD",
    market:
      "East Africa's financial hub. M-Pesa ecosystem drives massive POS terminal growth. 3M+ terminals and growing fast. Gateway to Uganda, Tanzania, and Rwanda.",
    popular: ["57×50mm", "80×80mm", "57×40mm"],
    posTerminals: "3M+",
    annualDemand: "High",
    highlight: true,
    badge: "East Africa Hub",
    badgeColor: "green",
  },
  {
    code: "ZA" as CountryCode,
    country: "South Africa",
    slug: "south-africa",
    city: "Johannesburg / Cape Town",
    port: "Port of Durban / Port of Cape Town",
    transit: "20–25 days",
    currency: "ZAR / USD",
    market:
      "Most developed retail infrastructure in Africa. 10M+ POS terminals. High standards for paper quality. Gateway to SADC region including Zimbabwe, Zambia, Mozambique.",
    popular: ["80×80mm", "57×50mm", "79×80mm"],
    posTerminals: "10M+",
    annualDemand: "High",
    highlight: false,
    badge: "Premium Market",
    badgeColor: "blue",
  },
  {
    code: "GH" as CountryCode,
    country: "Ghana",
    slug: "ghana",
    city: "Accra / Kumasi",
    port: "Tema Port",
    transit: "24–28 days",
    currency: "GHS / USD",
    market:
      "West Africa's fastest-growing economy. Mobile money penetration over 60%. Strong demand from retail, banking, and hospitality sectors. Gateway to Francophone West Africa.",
    popular: ["57×50mm", "57×40mm", "80×80mm"],
    posTerminals: "1.5M+",
    annualDemand: "Growing",
    highlight: false,
    badge: "Fast Growing",
    badgeColor: "purple",
  },
  {
    code: "TZ" as CountryCode,
    country: "Tanzania",
    slug: "tanzania",
    city: "Dar es Salaam",
    port: "Port of Dar es Salaam",
    transit: "23–28 days",
    currency: "TZS / USD",
    market:
      "Rapidly expanding mobile money and banking sector. 2M+ POS terminals. Strong growth in retail and hospitality. Key East African market alongside Kenya.",
    popular: ["57×50mm", "57×40mm", "80×80mm"],
    posTerminals: "2M+",
    annualDemand: "Growing",
    highlight: false,
    badge: null,
    badgeColor: "",
  },
  {
    code: "ET" as CountryCode,
    country: "Ethiopia",
    slug: "ethiopia",
    city: "Addis Ababa",
    port: "Port of Djibouti (landlocked)",
    transit: "28–35 days",
    currency: "ETB / USD",
    market:
      "Africa's second most populous country (120M+). Rapidly digitizing economy. CBE Birr mobile wallet driving POS terminal expansion across the country.",
    popular: ["57×50mm", "57×40mm", "80×80mm"],
    posTerminals: "500K+",
    annualDemand: "Emerging",
    highlight: false,
    badge: null,
    badgeColor: "",
  },
];

const whyChooseUs = [
  {
    icon: Factory,
    title: "Factory Direct Price",
    desc: "No middlemen. Direct from our 50,000㎡ factory. Save 15–30% vs trading companies.",
    color: "blue",
  },
  {
    icon: Ship,
    title: "FCL Ready in 3–5 Days",
    desc: "20ft & 40ft container loading. Full export documentation. CIF pricing available.",
    color: "green",
  },
  {
    icon: Award,
    title: "ISO 9001 Certified",
    desc: "BPA-free, FSC certified. Consistent quality across every batch. CoA provided.",
    color: "amber",
  },
  {
    icon: Package,
    title: "OEM & Private Label",
    desc: "Custom core size, roll length, packaging. Your brand on every roll.",
    color: "purple",
  },
  {
    icon: Banknote,
    title: "Flexible Payment",
    desc: "T/T, L/C, Western Union. 30% deposit, balance before shipment. Sample orders accepted.",
    color: "rose",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Response",
    desc: "Direct line to our export team. Quote within 2 hours. 7 days a week.",
    color: "teal",
  },
];

const popularProducts = [
  {
    size: "57 × 50 mm",
    href: "/products/thermal-rolls/57x50mm",
    badge: "Most Popular in Africa",
    badgeColor: "amber",
    desc: "Standard POS roll for mobile money agents, banks, and retail. Fits most Ingenico, Verifone, and local POS terminals.",
    specs: ["Core: 12mm / 13mm", "Length: 50m / 60m / 80m", "GSM: 55–65g"],
    moq: "1 carton (50 rolls)",
  },
  {
    size: "57 × 40 mm",
    href: "/products/thermal-rolls/57x40mm",
    badge: "Mobile POS",
    badgeColor: "blue",
    desc: "Compact roll for handheld POS terminals and mobile payment devices. Widely used by street vendors and market traders.",
    specs: ["Core: 12mm / 13mm", "Length: 40m / 50m", "GSM: 55–65g"],
    moq: "1 carton (50 rolls)",
  },
  {
    size: "80 × 80 mm",
    href: "/products/thermal-rolls/80x80mm",
    badge: "Supermarkets & Banks",
    badgeColor: "green",
    desc: "Wide format roll for supermarket checkout counters, bank tellers, and restaurant POS systems.",
    specs: ["Core: 12mm / 13mm", "Length: 80m / 100m", "GSM: 65–80g"],
    moq: "1 carton (24 rolls)",
  },
  {
    size: "79 × 80 mm",
    href: "/products/thermal-rolls/80x80mm",
    badge: "ATM Receipts",
    badgeColor: "purple",
    desc: "ATM and kiosk receipt paper. High image retention, suitable for long-term record keeping.",
    specs: ["Core: 12mm / 13mm", "Length: 80m / 100m", "GSM: 65–80g"],
    moq: "1 carton (24 rolls)",
  },
];

const logistics = [
  { step: "01", title: "Inquiry & Quote", desc: "Send us your size, quantity, and destination. Get FOB/CIF quote within 2 hours via WhatsApp or email.", icon: MessageSquare },
  { step: "02", title: "Sample Approval", desc: "Free samples shipped within 3 business days. Approve quality before placing bulk order.", icon: Package },
  { step: "03", title: "Order & Production", desc: "30% deposit confirms order. Production starts immediately. Standard lead time 7–10 days.", icon: Factory },
  { step: "04", title: "FCL Loading", desc: "Container loading in 3–5 business days. 20ft FCL: ~800 cartons. 40ft FCL: ~1,600 cartons.", icon: Truck },
  { step: "05", title: "Shipping & Docs", desc: "Full export documentation: B/L, packing list, commercial invoice, CO, phytosanitary if required.", icon: Ship },
  { step: "06", title: "Port Arrival", desc: "Estimated transit: 20–35 days depending on destination port. Real-time tracking provided.", icon: MapPin },
];

const faqs = [
  {
    q: "What is the minimum order quantity (MOQ)?",
    a: "MOQ is 1 carton for standard sizes. For container orders, we offer the best pricing. Sample orders (1–5 rolls) are available for quality testing.",
  },
  {
    q: "Do you offer CIF pricing to African ports?",
    a: "Yes. We offer both FOB (Qingdao/Shanghai) and CIF pricing to all major African ports including Lagos, Mombasa, Durban, Tema, Dar es Salaam, and more.",
  },
  {
    q: "Can you do custom OEM packaging with our brand?",
    a: "Yes. We provide full OEM service including custom core size, roll length, shrink wrap, carton printing with your logo and brand. MOQ for OEM is typically 5 cartons.",
  },
  {
    q: "What payment terms do you accept?",
    a: "We accept T/T (bank transfer), L/C at sight, Western Union, and PayPal for small orders. Standard terms: 30% deposit, 70% balance before shipment.",
  },
  {
    q: "Are your products BPA-free and safe for food service?",
    a: "Yes. All our thermal paper is BPA-free and meets international safety standards. We hold ISO 9001:2015, FSC, RoHS, and REACH certifications.",
  },
  {
    q: "How long does shipping take to Nigeria / Kenya / South Africa?",
    a: "Typical transit times: Nigeria (Lagos) 25–30 days, Kenya (Mombasa) 22–28 days, South Africa (Durban) 20–25 days, Ghana (Tema) 24–28 days. Air freight available for urgent orders.",
  },
];

const colorMap: Record<string, string> = {
  amber:  "bg-amber-100 text-amber-800",
  green:  "bg-green-100 text-green-800",
  blue:   "bg-blue-100 text-blue-800",
  purple: "bg-purple-100 text-purple-800",
  rose:   "bg-rose-100 text-rose-800",
  teal:   "bg-teal-100 text-teal-800",
};

const iconColorMap: Record<string, string> = {
  blue:   "bg-blue-50 text-blue-600",
  green:  "bg-green-50 text-green-600",
  amber:  "bg-amber-50 text-amber-600",
  purple: "bg-purple-50 text-purple-600",
  rose:   "bg-rose-50 text-rose-600",
  teal:   "bg-teal-50 text-teal-600",
};


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
    }
  ]
};
export default function AfricaMarketPage() {
  const whatsappMsg = encodeURIComponent(
    "Hello, I am a distributor in Africa interested in thermal paper rolls. Please send me your price list and MOQ.\nDestination: ___\nQuantity: ___ cartons/container"
  );

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <PageHero
        bgImage="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1400&q=80"
        overlayDir="left"
        overlayOpacity={50}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Markets", href: "/markets" }, { label: "Africa" }]}
        badge={{ text: "🌍 Africa Market", color: "amber" }}
        eyebrow="Thermal Paper Supplier for Africa"
        title={<>Thermal Paper Rolls<br /><span className="text-amber-400">for Africa</span></>}
        subtitle="Factory direct supply to Nigeria, Kenya, South Africa, Ghana and 30+ African countries. CIF pricing to all major African ports. 15–25 day delivery."
        trustBadges={["CIF to Lagos · Mombasa · Durban", "L/C Accepted", "BPA-Free", "ISO 9001"]}
        ctas={[
          { label: "Get Africa Price List", href: "/contact", variant: "primary", icon: <MessageSquare className="w-4 h-4" /> },
          { label: "WhatsApp for Quick Quote", href: `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I need thermal paper rolls for the African market. Please send price and MOQ.")}`, variant: "whatsapp", icon: <Phone className="w-4 h-4" />, external: true },
        ]}
        stats={[
          { value: "30+", label: "African Countries" },
          { value: "15–25 Days", label: "Delivery Time" },
          { value: "FCL Ready", label: "3–5 Days" },
          { value: "L/C", label: "Payment Accepted" },
        ]}
      />
      {/* ── Market Overview Strip ─────────────────────────────────────── */}
      <section className="bg-amber-50 border-y border-amber-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2 text-amber-900">
              <Globe className="w-4 h-4 text-amber-600" />
              <span><strong>Sub-Saharan Africa</strong> — fastest-growing thermal paper market globally</span>
            </div>
            <div className="w-px h-5 bg-amber-300 hidden sm:block" />
            <div className="flex items-center gap-2 text-amber-900">
              <TrendingUp className="w-4 h-4 text-amber-600" />
              <span>POS terminal penetration growing <strong>+22% per year</strong></span>
            </div>
            <div className="w-px h-5 bg-amber-300 hidden sm:block" />
            <div className="flex items-center gap-2 text-amber-900">
              <Users className="w-4 h-4 text-amber-600" />
              <span><strong>1.4 billion</strong> population — massive untapped demand</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Country Cards ─────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1F44] mb-4">
              Key African Markets We Serve
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Click any country for dedicated pricing, port logistics, and product recommendations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((c) => (
              <div
                key={c.country}
                className={`relative rounded-2xl border-2 p-6 transition-all hover:shadow-lg hover:-translate-y-0.5 ${
                  c.highlight ? "border-amber-400 bg-amber-50/50" : "border-slate-200 bg-white"
                }`}
              >
                {c.badge && (
                  <span className={`absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full ${colorMap[c.badgeColor]}`}>
                    {c.badge}
                  </span>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <CountryFlag code={c.code} label={c.country} className="w-8 h-auto" />
                  <div>
                    <h3 className="text-lg font-bold text-[#0A1F44]">{c.country}</h3>
                    <p className="text-sm text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />{c.city}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 mb-4 leading-relaxed">{c.market}</p>

                <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                  <div className="bg-slate-50 rounded-lg p-2">
                    <div className="text-slate-400">POS Terminals</div>
                    <div className="font-bold text-[#0A1F44]">{c.posTerminals}</div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-2">
                    <div className="text-slate-400">Sea Transit</div>
                    <div className="font-bold text-[#0A1F44]">{c.transit}</div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-2">
                    <div className="text-slate-400">Nearest Port</div>
                    <div className="font-bold text-[#0A1F44] truncate">{c.port.split("/")[0].trim()}</div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-2">
                    <div className="text-slate-400">Demand Level</div>
                    <div className={`font-bold ${c.annualDemand === "Very High" ? "text-green-600" : c.annualDemand === "High" ? "text-blue-600" : "text-amber-600"}`}>
                      {c.annualDemand}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {c.popular.map((size) => (
                    <span key={size} className="text-xs bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-2.5 py-1 font-medium">
                      {size}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  {c.slug && (
                    <Link
                      href={`/markets/africa/${c.slug}`}
                      className="flex-1 text-center text-sm font-semibold bg-[#0A1F44] hover:bg-[#0d2a5e] text-white py-2.5 rounded-xl transition-colors"
                    >
                      View {c.country} Page →
                    </Link>
                  )}
                  <a
                    href={`${SITE.whatsappUrl}?text=${encodeURIComponent(`Hello, I need thermal paper rolls for ${c.country}. Please send price list.\nQuantity: ___ cartons\nSize needed: ${c.popular[0]}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1 text-sm font-semibold bg-green-500 hover:bg-green-400 text-white px-3 py-2.5 rounded-xl transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Popular Products ──────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1F44] mb-4">
              Most Popular Sizes for Africa
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Based on orders from Nigerian, Kenyan, and South African distributors.
              All sizes available for bulk orders with OEM packaging.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularProducts.map((p) => (
              <div key={p.size} className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-[#0A1F44]">{p.size}</h3>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${colorMap[p.badgeColor]}`}>
                    {p.badge}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">{p.desc}</p>
                <ul className="space-y-1 mb-4">
                  {p.specs.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-xs text-slate-500">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="text-xs text-slate-400 mb-4">MOQ: {p.moq}</div>
                <div className="flex gap-2">
                  <Link
                    href={p.href}
                    className="flex-1 text-center text-sm font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 rounded-lg transition-colors"
                  >
                    Details
                  </Link>
                  <a
                    href={`${SITE.whatsappUrl}?text=${encodeURIComponent(`Hello, I need bulk quote for ${p.size} thermal paper rolls for Africa.\nQuantity: ___ cartons\nDestination: ___`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-sm font-semibold bg-green-500 hover:bg-green-400 text-white py-2 rounded-lg transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-[#0A1F44] font-semibold hover:text-amber-600 transition-colors"
            >
              View All Product Sizes <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1F44] mb-4">
              Why African Distributors Choose Us
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Over {FACTORY.yearsExperience} years supplying thermal paper to distributors worldwide.
              {FACTORY.oemClients} OEM clients trust our quality and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-4 p-6 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${iconColorMap[item.color]}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A1F44] mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Certifications */}
          <div className="mt-12 p-6 bg-slate-50 rounded-2xl">
            <p className="text-center text-sm font-semibold text-slate-500 mb-4 uppercase tracking-wider">Certifications & Compliance</p>
            <div className="flex flex-wrap justify-center gap-4">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.name} className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-4 py-2.5 shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-green-500" />
                  <div>
                    <div className="text-sm font-bold text-[#0A1F44]">{cert.name}</div>
                    <div className="text-xs text-slate-400">{cert.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Logistics Timeline ────────────────────────────────────────── */}
      <section className="py-20 bg-[#0A1F44] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              From Factory to Your <span className="text-amber-400">African Port</span>
            </h2>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              Transparent, reliable logistics. Full documentation support for all African ports.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {logistics.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl font-black text-amber-400/30">{step.step}</span>
                    <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-amber-400" />
                    </div>
                  </div>
                  <h3 className="font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-blue-200 leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Container Info */}
          <div className="mt-10 grid md:grid-cols-3 gap-4">
            {[
              { label: "20ft FCL", value: "~800 cartons", sub: "≈ 40,000 rolls (57×50mm)", icon: "📦" },
              { label: "40ft FCL", value: "~1,600 cartons", sub: "≈ 80,000 rolls (57×50mm)", icon: "🚢" },
              { label: "LCL Available", value: "From 1 CBM", sub: "Ideal for first orders", icon: "📫" },
            ].map((item) => (
              <div key={item.label} className="bg-white/10 border border-white/20 rounded-2xl p-5 text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="font-bold text-white text-lg">{item.label}</div>
                <div className="text-amber-400 font-bold">{item.value}</div>
                <div className="text-blue-300 text-sm mt-1">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1F44] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Common questions from African distributors and importers.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
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

      {/* ── Inquiry Form + CTA ────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1F44] mb-6">
                Get Your Africa Price List<br />
                <span className="text-amber-500">Within 2 Hours</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Tell us your country, required sizes, and monthly volume.
                Our Africa export team will send you a detailed quote with CIF pricing to your nearest port.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { icon: Clock, text: "Quote within 2 hours (WhatsApp) or 12 hours (email)" },
                  { icon: Package, text: "Free samples available before bulk order" },
                  { icon: Ship, text: "CIF pricing to Lagos, Mombasa, Durban, Tema, and more" },
                  { icon: Award, text: "ISO 9001 certified. CoA and test reports provided" },
                  { icon: Banknote, text: "T/T, L/C, Western Union accepted" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.text} className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-amber-600" />
                      </div>
                      <span className="text-slate-700">{item.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* WhatsApp Quick Contact */}
              <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <MessageSquare className="w-6 h-6 text-green-600" />
                  <span className="font-bold text-green-800">WhatsApp — Fastest Response</span>
                </div>
                <p className="text-sm text-green-700 mb-4">
                  Send us a WhatsApp message with your country and required sizes.
                  Our Africa export team responds within 2 hours, 7 days a week.
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
            </div>

            <div>
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────── */}
      <section className="py-16 bg-amber-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
            Ready to Supply Africa&apos;s Growing POS Market?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Join {FACTORY.oemClients} distributors worldwide. Factory direct. Reliable quality. Fast container loading.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`${SITE.whatsappUrl}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-amber-600 font-black px-8 py-4 rounded-2xl text-lg hover:bg-amber-50 transition-colors shadow-lg"
            >
              <MessageSquare className="w-6 h-6" />
              WhatsApp Now
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-black px-8 py-4 rounded-2xl text-lg transition-colors"
            >
              Send Inquiry <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
