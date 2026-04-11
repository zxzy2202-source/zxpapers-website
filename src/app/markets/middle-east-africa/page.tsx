import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/shared/InquiryForm";
import {
  ArrowRight, CheckCircle, Ship, Clock, Package,
  Globe, Truck, Phone, MessageSquare, Award,
  TrendingUp, Users, Zap, FileText, ShieldCheck,
  MapPin, Star, ChevronRight, Factory, Banknote,
} from "lucide-react";
import { SITE, FACTORY, CERTIFICATIONS } from "@/config/siteData";
import PageHero from "@/components/shared/PageHero";
import Image from "next/image";

import { CountryFlag, type CountryCode } from "@/components/ui/country-flag";

export const metadata: Metadata = {
  title: "Thermal Paper Supplier | Middle East & Africa",
  description:
    "Factory-direct thermal paper rolls for distributors in UAE, Saudi Arabia, Nigeria, Kenya, Egypt, South Africa, Ghana, Tanzania.",
  keywords:
    "thermal paper rolls Middle East, thermal paper Africa, POS paper UAE, thermal paper Nigeria, thermal paper Kenya, bulk thermal paper supplier, thermal paper Saudi Arabia, thermal paper Egypt, thermal paper South Africa, thermal paper wholesale",
  openGraph: {
    title: "Thermal Paper Rolls for Middle East & Africa",
    description:
      "Factory-direct supplier. 8+ countries served. FCL ready in 3–5 days. FOB/CIF pricing. ISO 9001 certified.",
    type: "website",
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
  alternates: { canonical: `${SITE.domain}/markets/middle-east-africa` },
};

/* ─── Data ──────────────────────────────────────────────────────────── */

const FACTORY_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/oem-factory-EHdu8eZwwzSo5DxSRyzQdF.webp";
const ROLLS_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-rolls-RQBrphmgzbAMk7eq3HsvNq.webp";

const countries = [
  {
    code: "AE" as CountryCode,
    country: "United Arab Emirates",
    city: "Dubai / Abu Dhabi",
    port: "Jebel Ali Port (JAFZA)",
    transit: "18–22 days",
    currency: "AED",
    market:
      "Largest re-export hub in the region. Dubai serves as a regional distribution center for the entire GCC. High demand from hospitality, retail, and banking sectors.",
    popular: ["80×80mm", "57×50mm", "57×40mm"],
    posTerminals: "1.2M+",
    annualDemand: "High",
    highlight: true,
  },
  {
    code: "SA" as CountryCode,
    country: "Saudi Arabia",
    city: "Riyadh / Jeddah",
    port: "Jeddah Islamic Port / King Abdulaziz Port",
    transit: "20–25 days",
    currency: "SAR",
    market:
      "Fast-growing retail and hospitality sector under Vision 2030. High demand for POS rolls from supermarkets, restaurants, banks, and government services.",
    popular: ["80×80mm", "57×50mm", "79×80mm"],
    posTerminals: "2.5M+",
    annualDemand: "Very High",
    highlight: false,
  },
  {
    code: "NG" as CountryCode,
    country: "Nigeria",
    city: "Lagos / Abuja",
    port: "Apapa Port / Tin Can Island Port",
    transit: "25–30 days",
    currency: "NGN",
    market:
      "Largest economy in Africa with 200M+ population. Rapidly expanding POS terminal network — CBN data shows 15M+ active POS terminals. Massive recurring demand.",
    popular: ["57×50mm", "57×40mm", "80×80mm"],
    posTerminals: "15M+",
    annualDemand: "Very High",
    highlight: true,
  },
  {
    code: "KE" as CountryCode,
    country: "Kenya",
    city: "Nairobi / Mombasa",
    port: "Mombasa Port",
    transit: "22–28 days",
    currency: "KES",
    market:
      "East Africa's commercial hub and fintech leader. M-Pesa and mobile money agents drive massive demand for receipt paper. Gateway to Uganda, Rwanda, and DRC.",
    popular: ["57×40mm", "57×50mm", "80×80mm"],
    posTerminals: "800K+",
    annualDemand: "High",
    highlight: false,
  },
  {
    code: "EG" as CountryCode,
    country: "Egypt",
    city: "Cairo / Alexandria",
    port: "Alexandria Port / Damietta Port",
    transit: "18–22 days",
    currency: "EGP",
    market:
      "North Africa's largest market with 105M+ population. Growing retail and banking sector with rapid POS adoption. Short sea transit from China via Suez Canal.",
    popular: ["80×80mm", "57×50mm", "57×40mm"],
    posTerminals: "3M+",
    annualDemand: "High",
    highlight: false,
  },
  {
    code: "ZA" as CountryCode,
    country: "South Africa",
    city: "Johannesburg / Cape Town",
    port: "Durban Port / Cape Town Port",
    transit: "20–25 days",
    currency: "ZAR",
    market:
      "Most developed retail infrastructure in Africa. High standards for print quality and paper performance. Major gateway for Southern African distribution.",
    popular: ["80×80mm", "79×80mm", "57×50mm"],
    posTerminals: "1.5M+",
    annualDemand: "High",
    highlight: false,
  },
  {
    code: "GH" as CountryCode,
    country: "Ghana",
    city: "Accra / Kumasi",
    port: "Tema Port",
    transit: "25–30 days",
    currency: "GHS",
    market:
      "One of West Africa's most stable economies. Growing fintech ecosystem and POS terminal deployment. Serves as a hub for Francophone West Africa.",
    popular: ["57×50mm", "57×40mm", "80×80mm"],
    posTerminals: "400K+",
    annualDemand: "Medium",
    highlight: false,
  },
  {
    code: "TZ" as CountryCode,
    country: "Tanzania",
    city: "Dar es Salaam",
    port: "Dar es Salaam Port",
    transit: "22–28 days",
    currency: "TZS",
    market:
      "Key transit hub for East and Central Africa. Mobile money and retail POS driving thermal paper demand. Gateway to Zambia, Malawi, and Mozambique.",
    popular: ["57×40mm", "57×50mm", "80×80mm"],
    posTerminals: "300K+",
    annualDemand: "Medium",
    highlight: false,
  },
];

const popularProducts = [
  {
    size: "80 × 80 mm",
    badge: "Best Seller",
    badgeColor: "bg-amber-500 text-slate-900",
    desc: "The #1 POS receipt size for restaurants, supermarkets, hotels, and banks across the Middle East. Compatible with Epson, Star, and Bixolon printers.",
    moq: "50 Rolls / Carton",
    stock: "In Stock",
    href: "/products/thermal-rolls/80x80mm",
    markets: ["UAE", "Saudi Arabia", "Egypt", "South Africa"],
  },
  {
    size: "57 × 50 mm",
    badge: "High Demand",
    badgeColor: "bg-blue-600 text-white",
    desc: "Standard POS receipt size for countertop terminals in supermarkets, service stations, and restaurants throughout Africa.",
    moq: "100 Rolls / Carton",
    stock: "In Stock",
    href: "/products/thermal-rolls/57x50mm",
    markets: ["Nigeria", "Kenya", "Ghana", "Tanzania"],
  },
  {
    size: "57 × 40 mm",
    badge: "Mobile POS",
    badgeColor: "bg-green-600 text-white",
    desc: "Most popular size for handheld POS terminals and mobile payment devices. Ideal for Nigeria's massive mobile POS agent network.",
    moq: "100 Rolls / Carton",
    stock: "In Stock",
    href: "/products/thermal-rolls/57x40mm",
    markets: ["Nigeria", "Kenya", "Ghana", "Tanzania"],
  },
  {
    size: "79 × 80 mm",
    badge: "ATM / Kiosk",
    badgeColor: "bg-purple-600 text-white",
    desc: "Precision-cut rolls for ATM machines, self-service kiosks, and ticketing systems. Compatible with major ATM brands used in the region.",
    moq: "50 Rolls / Carton",
    stock: "In Stock",
    href: "/products/thermal-rolls/80x80mm",
    markets: ["Saudi Arabia", "UAE", "South Africa", "Egypt"],
  },
];

const shippingOptions = [
  {
    method: "Sea Freight — FCL",
    icon: Ship,
    desc: "Full Container Load (20ft or 40ft). Best value for large bulk orders. We maintain warehouse stock for fast loading.",
    transit: "18–30 days to most ports",
    best: "5,000+ cartons",
    pricing: "FOB Shenzhen / CIF destination",
    loading: "3–5 business days",
    highlight: true,
  },
  {
    method: "Sea Freight — LCL",
    icon: Package,
    desc: "Less than Container Load — shared container space. Ideal for trial orders or medium-volume buyers.",
    transit: "25–38 days to most ports",
    best: "500–5,000 cartons",
    pricing: "FOB available",
    loading: "5–7 business days",
    highlight: false,
  },
  {
    method: "Air Freight",
    icon: Truck,
    desc: "Express air cargo via major airlines. For urgent samples, first orders, or time-sensitive restocking.",
    transit: "5–8 days to most cities",
    best: "Samples / urgent orders",
    pricing: "EXW / DAP available",
    loading: "1–2 business days",
    highlight: false,
  },
];

const whyUs = [
  {
    icon: Factory,
    title: "Factory Direct — No Middlemen",
    desc: "We manufacture everything in-house at our 50,000㎡ facility. You buy directly from the source, saving 15–30% vs. trading companies.",
  },
  {
    icon: Zap,
    title: "Fast FCL Loading: 3–5 Days",
    desc: "Large warehouse stock of the most popular sizes. Full container orders can be loaded and shipped within 3–5 business days.",
  },
  {
    icon: FileText,
    title: "Full Export Documentation",
    desc: "Commercial invoice, packing list, certificate of origin (Form A / CO), phytosanitary certificate, and health certificate for smooth customs clearance.",
  },
  {
    icon: Banknote,
    title: "Flexible Payment Terms",
    desc: "We accept T/T (wire transfer), L/C at sight, and Western Union. Flexible credit terms available for established long-term distributors.",
  },
  {
    icon: ShieldCheck,
    title: "Halal-Compatible Manufacturing",
    desc: "No animal-derived materials used in our manufacturing process. Products are fully suitable for distribution in GCC and OIC member countries.",
  },
  {
    icon: Users,
    title: "Dedicated Regional Support",
    desc: "English and Arabic communication support. WhatsApp available for fast response. Dedicated account manager for regional distributors.",
  },
];

const processSteps = [
  { step: "01", title: "Send Inquiry", desc: "Tell us your sizes, quantities, and destination port via email or WhatsApp." },
  { step: "02", title: "Receive Quote", desc: "We reply with FOB/CIF pricing and product specs within 12 hours." },
  { step: "03", title: "Confirm Order", desc: "Sign PI, confirm payment terms (T/T or L/C), and approve samples if needed." },
  { step: "04", title: "Production & QC", desc: "We produce your order with full quality inspection. Lead time: 7–15 days." },
  { step: "05", title: "Container Loading", desc: "FCL loaded and shipped within 3–5 days of payment clearance." },
  { step: "06", title: "Delivery to Port", desc: "18–30 days sea transit. We provide B/L and all export documents." },
];

const faqs = [
  {
    q: "What is the minimum order quantity (MOQ)?",
    a: "MOQ is 1 pallet for standard sizes. For container orders, we offer the best factory pricing.",
  },
  {
    q: "Do you provide samples before bulk orders?",
    a: "Yes. We can send free samples (you pay shipping) within 3–5 days. DHL/FedEx express delivery to UAE, Saudi Arabia, Nigeria, Kenya, and Egypt.",
  },
  {
    q: "What certifications do your products have?",
    a: "ISO 9001:2015, FSC certified paper, BPA-free coating, RoHS, and REACH compliant. We can provide test reports and certificates upon request.",
  },
  {
    q: "Can you print our brand/logo on the rolls or packaging?",
    a: "Yes. We offer full OEM private label service — custom logo on rolls, custom packaging design, and custom core printing. MOQ 1,000 rolls for OEM.",
  },
  {
    q: "What payment methods do you accept?",
    a: "T/T (bank wire transfer), L/C at sight, and Western Union. 30% deposit + 70% before shipment is the standard T/T term.",
  },
  {
    q: "How do I get a CIF price to my port?",
    a: "Send us your destination port (e.g., Jebel Ali, Apapa, Mombasa), required sizes, and quantities. We'll provide a full CIF quotation within 12 hours.",
  },
];

/* ─── Component ─────────────────────────────────────────────────────── */


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
      "name": "Middle East & Africa",
      "item": "https://www.zhixinpaper.com/markets/middle-east-africa"
    }
  ]
};
export default function MiddleEastAfricaPage() {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <PageHero
        bgImage="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1400&q=80"
        overlayDir="left"
        overlayOpacity={50}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Markets", href: "/markets" }, { label: "Middle East & Africa" }]}
        badge={{ text: "🌍 Middle East & Africa", color: "amber" }}
        eyebrow="Thermal Paper Supplier"
        title={<>Thermal Paper for<br /><span className="text-amber-400">Middle East & Africa</span></>}
        subtitle="Factory direct supply to UAE, Saudi Arabia, Nigeria, Kenya and 40+ countries. CIF pricing, L/C accepted, 15–25 day delivery from Xi'an."
        trustBadges={["CIF Dubai · Lagos · Nairobi", "L/C Accepted", "BPA-Free", "ISO 9001", "Halal-Compatible"]}
        ctas={[
          { label: "Get MEA Price List", href: "/contact", variant: "primary", icon: <MessageSquare className="w-4 h-4" /> },
          { label: "WhatsApp for Quick Quote", href: `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I need thermal paper rolls for Middle East / Africa market. Please send price and MOQ.")}`, variant: "whatsapp", icon: <Phone className="w-4 h-4" />, external: true },
        ]}
        stats={[
          { value: "40+", label: "Countries Served" },
          { value: "15–25 Days", label: "Delivery Time" },
          { value: "CIF", label: "Port Pricing" },
          { value: "L/C", label: "Payment Accepted" },
        ]}
      />
      {/* ── Quick Stats Bar ── */}
      <section className="bg-amber-500 py-6">
        <div className="container">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center divide-x divide-amber-400/50">
            {[
              { value: "8+", label: "Countries Served" },
              { value: FACTORY.fclLoadingLabel, label: "FCL Loading Time" },
              { value: "18–30 Days", label: "Sea Transit" },
              { value: SITE.responseTime, label: "Quote Response" },
            ].map(({ value, label }) => (
              <div key={label} className="px-4">
                <div className="text-2xl font-extrabold text-slate-900">{value}</div>
                <div className="text-xs text-slate-800 font-semibold mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Market Overview ── */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-blue-600 text-sm font-semibold uppercase tracking-wider mb-3">
              <span className="w-8 h-0.5 bg-blue-600" />
              Market Opportunity
              <span className="w-8 h-0.5 bg-blue-600" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Why Middle East &amp; Africa?
            </h2>
            <p className="text-slate-500 text-base max-w-2xl mx-auto">
              The Middle East and Africa represent one of the fastest-growing thermal paper markets globally, driven by rapid POS terminal expansion, mobile money adoption, and growing retail infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: TrendingUp,
                value: "20M+",
                label: "Active POS Terminals",
                desc: "Across 8 key markets in the region",
                color: "text-blue-600",
                bg: "bg-blue-50",
              },
              {
                icon: Users,
                value: "1.5B+",
                label: "Total Population",
                desc: "Massive consumer base driving retail growth",
                color: "text-green-600",
                bg: "bg-green-50",
              },
              {
                icon: Zap,
                value: "15%+",
                label: "Annual POS Growth",
                desc: "Year-on-year POS terminal deployment growth",
                color: "text-amber-600",
                bg: "bg-amber-50",
              },
              {
                icon: Globe,
                value: "8",
                label: "Countries We Serve",
                desc: "UAE, KSA, Nigeria, Kenya, Egypt, SA, Ghana, Tanzania",
                color: "text-purple-600",
                bg: "bg-purple-50",
              },
            ].map(({ icon: Icon, value, label, desc, color, bg }) => (
              <div key={label} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <div className={`text-3xl font-extrabold ${color} mb-1`}>{value}</div>
                <div className="font-bold text-slate-900 text-sm mb-1">{label}</div>
                <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Popular Products ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-blue-600 text-sm font-semibold uppercase tracking-wider mb-3">
              <span className="w-8 h-0.5 bg-blue-600" />
              Most Ordered Sizes
              <span className="w-8 h-0.5 bg-blue-600" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Popular Sizes for Middle East &amp; Africa
            </h2>
            <p className="text-slate-500 text-base max-w-xl mx-auto">
              These four sizes cover 90% of POS printer requirements across the region. All sizes are in stock and ready to ship.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularProducts.map(({ size, badge, badgeColor, desc, moq, stock, href, markets }) => (
              <div key={size} className="group bg-white border-2 border-slate-100 hover:border-blue-200 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    <Package className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${badgeColor}`}>{badge}</span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">{size}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">{desc}</p>

                {/* Markets */}
                <div className="mb-4">
                  <div className="text-xs font-semibold text-slate-500 mb-2">Key Markets:</div>
                  <div className="flex flex-wrap gap-1">
                    {markets.map((m) => (
                      <span key={m} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">{m}</span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-4 space-y-1.5 mb-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">MOQ:</span>
                    <span className="font-semibold text-slate-800">{moq}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">Availability:</span>
                    <span className="font-semibold text-green-600 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      {stock}
                    </span>
                  </div>
                </div>

                <Link
                  href={href}
                  className="inline-flex items-center justify-center gap-2 bg-[#0A1F44] hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors"
                >
                  View Specs <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors"
            >
              View all product sizes &amp; specifications <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Countries Grid ── */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-blue-600 text-sm font-semibold uppercase tracking-wider mb-3">
              <span className="w-8 h-0.5 bg-blue-600" />
              Shipping Destinations
              <span className="w-8 h-0.5 bg-blue-600" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Markets We Serve
            </h2>
            <p className="text-slate-500 text-base max-w-xl mx-auto">
              Regular container shipments to major ports across the Middle East and Africa. Competitive CIF pricing to all destinations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {countries.map(({ code, country, city, port, transit, market, popular, posTerminals, annualDemand, highlight }) => (
              <div
                key={country}
                className={`rounded-2xl p-6 transition-all duration-300 hover:shadow-lg border-2 ${
                  highlight
                    ? "bg-[#0A1F44] border-[#0A1F44] text-white"
                    : "bg-white border-slate-100 hover:border-blue-200"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <CountryFlag code={code} label={country} className="w-10 h-auto" />
                  {highlight && (
                    <span className="bg-amber-500 text-slate-900 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3" /> Key Market
                    </span>
                  )}
                </div>
                <h3 className={`font-extrabold text-base mb-0.5 ${highlight ? "text-white" : "text-slate-900"}`}>
                  {country}
                </h3>
                <p className={`text-xs mb-4 ${highlight ? "text-slate-400" : "text-slate-500"}`}>{city}</p>

                {/* Key metrics */}
                <div className="space-y-2 mb-4">
                  <div className={`flex items-center gap-2 text-xs ${highlight ? "text-slate-300" : "text-slate-600"}`}>
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-blue-400" />
                    <span>{port}</span>
                  </div>
                  <div className={`flex items-center gap-2 text-xs ${highlight ? "text-slate-300" : "text-slate-600"}`}>
                    <Clock className="w-3.5 h-3.5 flex-shrink-0 text-amber-400" />
                    <span className={`font-semibold ${highlight ? "text-amber-400" : "text-amber-600"}`}>{transit}</span>
                  </div>
                  <div className={`flex items-center gap-2 text-xs ${highlight ? "text-slate-300" : "text-slate-600"}`}>
                    <TrendingUp className="w-3.5 h-3.5 flex-shrink-0 text-green-400" />
                    <span>{posTerminals} POS terminals</span>
                  </div>
                </div>

                <p className={`text-xs leading-relaxed mb-4 ${highlight ? "text-slate-300" : "text-slate-500"}`}>
                  {market}
                </p>

                <div>
                  <div className={`text-xs font-semibold mb-2 ${highlight ? "text-slate-300" : "text-slate-700"}`}>
                    Popular Sizes:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {popular.map((s) => (
                      <span
                        key={s}
                        className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                          highlight
                            ? "bg-white/10 text-amber-300 border border-white/20"
                            : "bg-blue-50 text-blue-700"
                        }`}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Shipping Options ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-blue-600 text-sm font-semibold uppercase tracking-wider mb-3">
              <span className="w-8 h-0.5 bg-blue-600" />
              Logistics
              <span className="w-8 h-0.5 bg-blue-600" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Shipping Options
            </h2>
            <p className="text-slate-500 text-base max-w-lg mx-auto">
              Flexible shipping solutions to match your order size and urgency. FOB and CIF pricing available for all methods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {shippingOptions.map(({ method, icon: Icon, desc, transit, best, pricing, loading, highlight }) => (
              <div
                key={method}
                className={`rounded-2xl p-8 border-2 transition-all duration-200 ${
                  highlight
                    ? "bg-[#0A1F44] border-[#0A1F44] text-white"
                    : "bg-white border-slate-100 hover:border-blue-200 hover:shadow-lg"
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${highlight ? "bg-amber-500/20" : "bg-blue-50"}`}>
                  <Icon className={`w-7 h-7 ${highlight ? "text-amber-400" : "text-blue-600"}`} />
                </div>
                <h3 className={`font-extrabold text-lg mb-2 ${highlight ? "text-white" : "text-slate-900"}`}>
                  {method}
                </h3>
                <p className={`text-sm mb-5 leading-relaxed ${highlight ? "text-slate-300" : "text-slate-600"}`}>{desc}</p>
                <div className="space-y-2.5">
                  {[
                    { label: "Transit Time", value: transit },
                    { label: "Best For", value: best },
                    { label: "Loading Time", value: loading },
                    { label: "Pricing Terms", value: pricing },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-start gap-2 text-sm">
                      <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${highlight ? "text-amber-400" : "text-green-500"}`} />
                      <span className={highlight ? "text-slate-300" : "text-slate-600"}>
                        <span className={`font-semibold ${highlight ? "text-white" : "text-slate-800"}`}>{label}:</span>{" "}
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
                {highlight && (
                  <div className="mt-6">
                    <span className="bg-amber-500 text-slate-900 text-xs font-bold px-4 py-1.5 rounded-full">
                      Recommended for Bulk Orders
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Order Process Timeline */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h3 className="text-xl font-extrabold text-slate-900 mb-8 text-center">
              From Inquiry to Delivery — Step by Step
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {processSteps.map(({ step, title, desc }, i) => (
                <div key={step} className="relative text-center">
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-6 left-[60%] w-full h-0.5 bg-blue-200 z-0" />
                  )}
                  <div className="relative z-10 w-12 h-12 bg-[#0A1F44] text-white rounded-full flex items-center justify-center text-sm font-extrabold mx-auto mb-3">
                    {step}
                  </div>
                  <div className="font-bold text-slate-900 text-xs mb-1">{title}</div>
                  <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-blue-600 text-sm font-semibold uppercase tracking-wider mb-4">
                <span className="w-8 h-0.5 bg-blue-600" />
                Why Choose Us
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8">
                Built for Middle East<br />
                <span className="text-blue-600">&amp; Africa Distributors</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {whyUs.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="bg-white rounded-xl p-5 border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm mb-1.5">{title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <Image
                  src={FACTORY_IMG}
                  alt="ZhixinPaper factory for Middle East Africa"
                  className="w-full rounded-2xl shadow-2xl"
                  width={600}
                  height={400}
                 sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                <div className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-xl p-5 border border-slate-100">
                  <div className="text-2xl font-extrabold text-[#0A1F44]">{FACTORY.annualOutput}</div>
                  <div className="text-xs text-slate-500">Rolls Produced Per Year</div>
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 mt-8">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-5 h-5 text-blue-600" />
                  <h3 className="font-bold text-slate-900 text-sm">Certifications &amp; Compliance</h3>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {CERTIFICATIONS.map(({ name, desc }) => (
                    <div key={name} className="text-center bg-slate-50 rounded-lg p-3">
                      <div className="font-bold text-slate-900 text-xs mb-0.5">{name}</div>
                      <div className="text-xs text-slate-500">{desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-blue-600 text-sm font-semibold uppercase tracking-wider mb-3">
                <span className="w-8 h-0.5 bg-blue-600" />
                FAQ
                <span className="w-8 h-0.5 bg-blue-600" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-500 text-base">
                Common questions from distributors in the Middle East and Africa.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map(({ q, a }) => (
                <div key={q} className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-start gap-2">
                    <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">Q</span>
                    {q}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed pl-7">{a}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors"
              >
                View all FAQs <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Inline Inquiry Form + CTA ── */}
      <section className="py-20 bg-gradient-to-br from-[#0A1F44] to-[#1E3A6E]" id="inquiry">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: CTA copy */}
            <div className="text-white">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-5">
                Ready to Place a<br />
                <span className="text-amber-400">Bulk Order?</span>
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-8">
                Send us your required sizes, quantities, and destination port. We'll reply with competitive FOB/CIF pricing within 12 hours.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { icon: Clock, text: "Reply within 12 hours" },
                  { icon: FileText, text: "Free samples available (DHL/FedEx)" },
                  { icon: ShieldCheck, text: "NDA available on request" },
                  { icon: Ship, text: "FOB Shenzhen / CIF destination port" },
                  { icon: Banknote, text: "T/T, L/C at sight accepted" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-amber-400" />
                    </div>
                    <span className="text-slate-300 text-sm">{text}</span>
                  </div>
                ))}
              </div>

              {/* Direct contact */}
              <div className="bg-white/10 border border-white/20 rounded-xl p-5 space-y-3">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Direct Contact</div>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-white hover:text-amber-400 transition-colors text-sm font-semibold">
                  <MessageSquare className="w-4 h-4" />
                  {SITE.email}
                </a>
                <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-amber-400 transition-colors text-sm font-semibold">
                  <Phone className="w-4 h-4 text-[#25D366]" />
                  WhatsApp: {SITE.whatsapp}
                </a>
                <div className="flex items-center gap-3 text-slate-400 text-sm">
                  <Clock className="w-4 h-4" />
                  {SITE.businessHours}
                </div>
              </div>
            </div>

            {/* Right: Inquiry form */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <InquiryForm
                productName="Thermal Paper Rolls — Middle East & Africa"
                initialMessage="I'm a distributor in [country]. I need pricing for [sizes] — [quantity] cartons. Please provide FOB/CIF quote."
                formId="mea-inquiry"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
