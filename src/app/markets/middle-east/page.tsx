import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import InquiryForm from "@/components/shared/InquiryForm";
import {
  ArrowRight, CheckCircle, Ship, Clock, Package,
  MessageSquare, Award, TrendingUp, MapPin, ShieldCheck,
  Banknote, Truck, Factory, ChevronRight,
} from "lucide-react";
import { SITE, FACTORY, CERTIFICATIONS } from "@/config/siteData";

export const metadata: Metadata = {
  title: "Thermal Paper Supplier Middle East | ZhixinPaper",
  description: "Factory-direct thermal paper rolls for Middle East. Serving UAE, Saudi Arabia, Egypt, Turkey. BPA-free, ISO 9001. CIF pricing.",
  alternates: { canonical: `${SITE.domain}/markets/middle-east` },
  openGraph: {
    title: "Thermal Paper Supplier Middle East | ZhixinPaper",
    description: "Factory-direct thermal paper rolls for UAE, Saudi Arabia, Egypt & Turkey. BPA-free, ISO 9001. CIF pricing.",
    type: "website",
    images: [
      {
        url: "https://www.zxpapers.com/og-default.png",
        width: 1200,
        height: 630,
        alt: "ZhixinPaper | Thermal Paper Supplier Middle East",
        type: "image/png",
      },
    ],
  },
};

const countries = [
  {
    flag: "🇦🇪", name: "UAE", href: "/markets/middle-east/uae",
    badge: "Premium Market", badgeColor: "bg-amber-100 text-amber-800",
    port: "Jebel Ali (JAFZA)", days: "18–22",
    terminals: "3M+", highlight: "Re-export hub for GCC & Africa",
  },
  {
    flag: "🇸🇦", name: "Saudi Arabia", href: "/markets/middle-east/saudi-arabia",
    badge: "Largest Market", badgeColor: "bg-blue-100 text-blue-800",
    port: "Jeddah Islamic Port", days: "20–25",
    terminals: "5M+", highlight: "Vision 2030 retail expansion",
  },
  {
    flag: "🇪🇬", name: "Egypt", href: "/markets/middle-east/egypt",
    badge: "High Volume", badgeColor: "bg-green-100 text-green-800",
    port: "Alexandria / Port Said", days: "15–20",
    terminals: "4M+", highlight: "Largest Arab population market",
  },
  {
    flag: "🇹🇷", name: "Turkey", href: "/markets/middle-east/turkey",
    badge: "Bridge Market", badgeColor: "bg-purple-100 text-purple-800",
    port: "Istanbul / Mersin", days: "18–22",
    terminals: "3.5M+", highlight: "EU-standard quality demand",
  },
  {
    flag: "🇶🇦", name: "Qatar", href: "/markets/middle-east",
    badge: "High Value", badgeColor: "bg-amber-100 text-amber-800",
    port: "Hamad Port", days: "20–24",
    terminals: "500K+", highlight: "Premium hospitality sector",
  },
  {
    flag: "🇰🇼", name: "Kuwait", href: "/markets/middle-east",
    badge: "Stable Demand", badgeColor: "bg-blue-100 text-blue-800",
    port: "Shuwaikh Port", days: "20–24",
    terminals: "600K+", highlight: "Banking & retail POS",
  },
];

const products = [
  {
    size: "80 × 80 mm", badge: "Best Seller", badgeColor: "bg-amber-100 text-amber-800",
    href: "/products/thermal-rolls/80x80mm",
    desc: "Standard POS roll for UAE, Saudi, and GCC retail chains. Compatible with Ingenico, Verifone, PAX, and all major POS brands.",
    specs: ["Core: 12mm / 13mm", "Length: 60m / 80m", "GSM: 65–80g", "BPA-free"],
    moq: "1 carton (50 rolls)",
  },
  {
    size: "57 × 50 mm", badge: "High Demand", badgeColor: "bg-blue-100 text-blue-800",
    href: "/products/thermal-rolls/57x50mm",
    desc: "Most popular size for mobile POS, food delivery, and banking terminals across the Middle East.",
    specs: ["Core: 12mm / 13mm", "Length: 50m / 60m", "GSM: 55–65g", "BPA-free"],
    moq: "1 carton (50 rolls)",
  },
  {
    size: "4\" × 6\" Labels", badge: "E-commerce", badgeColor: "bg-green-100 text-green-800",
    href: "/products/thermal-labels/4x6in",
    desc: "Shipping labels for Noon, Amazon.ae, Souq, and regional e-commerce logistics operations.",
    specs: ["Size: 4\" × 6\"", "Core: 1\" / 3\"", "Adhesive: Permanent", "BPA-free"],
    moq: "1 roll (500 labels)",
  },
  {
    size: "80 × 70 mm", badge: "Europe Standard", badgeColor: "bg-purple-100 text-purple-800",
    href: "/products/thermal-rolls/80x70mm",
    desc: "European-standard size widely used in Turkish and Egyptian retail chains with European POS equipment.",
    specs: ["Core: 12mm / 13mm", "Length: 70m / 80m", "GSM: 65–80g", "BPA-free"],
    moq: "1 carton (50 rolls)",
  },
];

const whyUs = [
  { icon: <Factory className="w-6 h-6" />, title: "Factory Direct Price", desc: "No middlemen. Direct from our 50,000m² factory. Best FOB/CIF prices for GCC buyers." },
  { icon: <Ship className="w-6 h-6" />, title: "Jebel Ali Expertise", desc: "Regular shipments to Jebel Ali (JAFZA). Full export docs: CO, SGS, fumigation certificate." },
  { icon: <ShieldCheck className="w-6 h-6" />, title: "Halal-Compatible", desc: "BPA-free, food-safe thermal paper. Suitable for halal-certified food service environments." },
  { icon: <Package className="w-6 h-6" />, title: "OEM & Private Label", desc: "Custom Arabic/English brand packaging. NDA available. MOQ 1,000 rolls per size." },
  { icon: <Banknote className="w-6 h-6" />, title: "L/C & T/T Accepted", desc: "Letter of Credit (L/C at sight), T/T, and Western Union. Flexible for GCC buyers." },
  { icon: <Award className="w-6 h-6" />, title: "ISO 9001 Certified", desc: "ISO 9001:2015, FSC, BPA-free, CE, RoHS certified. SGS test reports available on request." },
];

const logistics = [
  {
    route: "China → UAE (Jebel Ali)", days: "18–22 days",
    detail: "CIF Jebel Ali (JAFZA). 20ft FCL: 8,000–12,000 rolls. 40ft FCL: 18,000–24,000 rolls. Re-export to GCC available.",
    badge: "Most Popular Route",
  },
  {
    route: "China → Saudi Arabia (Jeddah)", days: "20–25 days",
    detail: "CIF Jeddah Islamic Port. Full export documentation. SABER certification support available.",
    badge: "Largest GCC Market",
  },
  {
    route: "China → Egypt (Alexandria)", days: "15–20 days",
    detail: "CIF Alexandria or Port Said. Closest Middle East port to China. ACID number support.",
    badge: "Fastest Route",
  },
  {
    route: "China → Turkey (Istanbul/Mersin)", days: "18–22 days",
    detail: "CIF Istanbul (Ambarlı) or Mersin. EUR.1 movement certificate available for EU-Turkey customs union.",
    badge: "EU-Standard Quality",
  },
];

const faqs = [
  {
    q: "What is the MOQ for Middle East orders?",
    a: "MOQ is 1 × 20ft container (approx. 8,000–12,000 rolls). For new customers, we offer trial orders of 500–1,000 rolls via LCL consolidation. UAE distributors who re-export to GCC can order larger quantities at better pricing.",
  },
  {
    q: "Do you ship CIF to Jebel Ali (JAFZA)?",
    a: "Yes. We have regular shipments to Jebel Ali (JAFZA) and can provide full CIF pricing including freight and insurance. We work with major freight forwarders serving the UAE route.",
  },
  {
    q: "Is your thermal paper halal-compatible?",
    a: "Yes. All our thermal paper products are BPA-free and use food-safe coating materials. They are suitable for use in halal-certified food service environments, restaurants, and supermarkets.",
  },
  {
    q: "Can you provide Arabic OEM packaging?",
    a: "Yes. We offer full OEM service with Arabic and English bilingual packaging. Custom brand name, logo, and design are available. NDA is available to protect your brand. MOQ is 1,000 rolls per size.",
  },
  {
    q: "What payment terms do you accept for GCC buyers?",
    a: "We accept Letter of Credit (L/C at sight), T/T (bank transfer), and Western Union. For established GCC distributors, we can discuss 30-day payment terms after the first successful order.",
  },
  {
    q: "Do you support SABER certification for Saudi Arabia?",
    a: "Yes. We can provide all necessary documentation to support SABER certification for the Saudi market, including product certificates, test reports, and factory audit documentation.",
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
      "name": "Middle East",
      "item": "https://www.zhixinpaper.com/markets/middle-east"
    }
  ]
};
export default function MiddleEastPage() {
  const waMsg = encodeURIComponent(
    "Hello, I am a thermal paper distributor in the Middle East. Please send me your CIF price list and MOQ for 80×80mm and 57×50mm rolls."
  );

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* ── Hero ── */}
      <section className="relative text-white overflow-hidden" style={{ minHeight: "560px" }}>
        {/* Full background image with strong gradient overlay */}
        <div className="absolute inset-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
          }} />
        {/* Multi-layer gradient: left dark for text, right semi-transparent */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1e3d]/95 via-[#0F2B5B]/85 to-[#1a3a6e]/60" />
        {/* Bottom fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/10 to-transparent" />
        {/* Decorative gold arc */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full border border-amber-400/10 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full border border-amber-400/15 -translate-y-1/4 translate-x-1/4" />

        <div className="relative max-w-6xl mx-auto px-4 py-20">
          {/* breadcrumb */}
          <nav className="text-sm text-amber-200/80 mb-6 flex items-center gap-1.5">
            <Link href="/" className="hover:text-amber-300 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <Link href="/markets" className="hover:text-amber-300 transition-colors">Markets</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span className="text-white font-medium">Middle East</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* ── Left: Text Content ── */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
                <span>🌙</span> Middle East Market
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight tracking-tight">
                Thermal Paper Rolls<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
                  Supplier for GCC
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg text-blue-100/90 mb-6 max-w-lg leading-relaxed">
                Factory-direct supply for GCC distributors.
                <strong className="text-white"> CIF Jebel Ali, Jeddah, Alexandria.</strong><br />
                Halal-compatible · Arabic OEM packaging · L/C Accepted.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  { label: "ISO 9001", color: "bg-blue-500/20 border-blue-400/30 text-blue-200" },
                  { label: "BPA-Free", color: "bg-green-500/20 border-green-400/30 text-green-200" },
                  { label: "FSC Certified", color: "bg-emerald-500/20 border-emerald-400/30 text-emerald-200" },
                  { label: "L/C Accepted", color: "bg-amber-500/20 border-amber-400/30 text-amber-200" },
                  { label: "Halal-Compatible", color: "bg-purple-500/20 border-purple-400/30 text-purple-200" },
                ].map((b) => (
                  <span key={b.label} className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${b.color}`}>
                    {b.label}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-amber-500/30 hover:shadow-amber-400/40 hover:-translate-y-0.5">
                  Get CIF Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <a href={`https://wa.me/${SITE.whatsapp}?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-green-500/30 hover:shadow-green-400/40 hover:-translate-y-0.5">
                  <MessageSquare className="w-4 h-4" /> WhatsApp Us
                </a>
              </div>

              {/* Quick stats row */}
              <div className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-white/10">
                {[
                  { value: "16M+", label: "POS Terminals" },
                  { value: "15–25d", label: "CIF Delivery" },
                  { value: "15+", label: "Years Export" },
                  { value: "24h", label: "Quote Response" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-extrabold text-amber-300">{s.value}</div>
                    <div className="text-xs text-blue-200/80 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: Country Quick-View Panel ── */}
            <div className="hidden lg:block">
              <div className="bg-white/8 backdrop-blur-md border border-white/15 rounded-2xl p-5 shadow-2xl">
                <div className="text-xs font-bold text-amber-300 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5" /> Key Markets at a Glance
                </div>
                <div className="space-y-3">
                  {[
                    { flag: "🇦🇪", name: "UAE", badge: "Re-export Hub", badgeColor: "bg-amber-500/30 text-amber-200", terminals: "3M+", days: "18–22d", port: "Jebel Ali", href: "/markets/middle-east/uae" },
                    { flag: "🇸🇦", name: "Saudi Arabia", badge: "Largest Market", badgeColor: "bg-blue-500/30 text-blue-200", terminals: "5M+", days: "20–25d", port: "Jeddah", href: "/markets/middle-east/saudi-arabia" },
                    { flag: "🇪🇬", name: "Egypt", badge: "Fastest Route", badgeColor: "bg-green-500/30 text-green-200", terminals: "4M+", days: "15–20d", port: "Alexandria", href: "/markets/middle-east/egypt" },
                    { flag: "🇹🇷", name: "Turkey", badge: "EU Standard", badgeColor: "bg-purple-500/30 text-purple-200", terminals: "3.5M+", days: "18–22d", port: "Istanbul", href: "/markets/middle-east/turkey" },
                  ].map((c) => (
                    <Link key={c.name} href={c.href}
                      className="group flex items-center gap-3 bg-white/5 hover:bg-white/12 border border-white/10 hover:border-amber-400/40 rounded-xl px-4 py-3 transition-all">
                      <span className="text-2xl flex-shrink-0">{c.flag}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-white text-sm">{c.name}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${c.badgeColor}`}>{c.badge}</span>
                        </div>
                        <div className="flex gap-3 text-xs text-blue-200/70">
                          <span>{c.terminals} POS</span>
                          <span>·</span>
                          <span>{c.days}</span>
                          <span>·</span>
                          <span>{c.port}</span>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-amber-400 transition-colors flex-shrink-0" />
                    </Link>
                  ))}
                </div>
                {/* Panel footer */}
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-blue-200/60">6 countries · CIF pricing available</span>
                  <Link href="/contact" className="text-xs text-amber-300 hover:text-amber-200 font-semibold flex items-center gap-1">
                    Full Price List <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Countries ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0F2B5B] mb-3">Middle East Markets We Serve</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Click any country for market-specific product recommendations, port logistics, and pricing guidance.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {countries.map((c) => (
              <Link key={c.name} href={c.href}
                className="group border border-gray-200 rounded-2xl p-6 hover:border-blue-400 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{c.flag}</span>
                    <div>
                      <h3 className="font-bold text-[#0F2B5B] group-hover:text-blue-600 transition-colors">{c.name}</h3>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${c.badgeColor}`}>{c.badge}</span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-blue-400 transition-colors" />
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-gray-50 rounded-lg p-2">
                    <div className="text-sm font-bold text-[#0F2B5B]">{c.terminals}</div>
                    <div className="text-xs text-gray-400">POS</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2">
                    <div className="text-sm font-bold text-[#0F2B5B]">{c.days}d</div>
                    <div className="text-xs text-gray-400">Transit</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2 col-span-1">
                    <div className="text-xs font-bold text-[#0F2B5B] leading-tight">{c.port.split(" ")[0]}</div>
                    <div className="text-xs text-gray-400">Port</div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" /> {c.highlight}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products ── */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0F2B5B] mb-3">Popular Products for Middle East</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Most-ordered thermal paper sizes by GCC distributors. All BPA-free and compatible with major POS brands.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {products.map((p) => (
              <div key={p.size} className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#0F2B5B]">{p.size}</h3>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${p.badgeColor}`}>{p.badge}</span>
                  </div>
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-lg">MOQ: {p.moq}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{p.desc}</p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {p.specs.map((s) => (
                    <div key={s} className="flex items-center gap-1 text-xs text-gray-500">
                      <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" /> {s}
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Link href={p.href} className="flex-1 text-center text-sm bg-[#0F2B5B] text-white py-2 rounded-lg hover:bg-blue-800 transition-colors">
                    View Details
                  </Link>
                  <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hello, I need a CIF quote for ${p.size} thermal paper rolls for the Middle East.`)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="flex-1 text-center text-sm bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors">
                    WhatsApp Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Logistics ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0F2B5B] mb-3">Shipping Routes to Middle East</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Regular FCL shipments to all major Middle East ports. Full export documentation included.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {logistics.map((l) => (
              <div key={l.route} className="border border-gray-200 rounded-2xl p-6 hover:border-blue-300 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Ship className="w-5 h-5 text-blue-600" />
                    <h3 className="font-bold text-[#0F2B5B] text-sm">{l.route}</h3>
                  </div>
                  <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-semibold">{l.badge}</span>
                </div>
                <div className="text-3xl font-bold text-amber-500 mb-2 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-amber-400" /> {l.days}
                </div>
                <p className="text-sm text-gray-600">{l.detail}</p>
              </div>
            ))}
          </div>
          {/* container info */}
          <div className="mt-8 bg-[#0F2B5B] rounded-2xl p-6 text-white">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Truck className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                <div className="font-bold text-lg">20ft FCL</div>
                <div className="text-blue-200 text-sm">8,000–12,000 rolls<br />Loading: 3–5 days</div>
              </div>
              <div>
                <Truck className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                <div className="font-bold text-lg">40ft FCL</div>
                <div className="text-blue-200 text-sm">18,000–24,000 rolls<br />Loading: 5–7 days</div>
              </div>
              <div>
                <Package className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                <div className="font-bold text-lg">LCL Available</div>
                <div className="text-blue-200 text-sm">For trial orders<br />Min. 500 rolls</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Us ── */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0F2B5B] mb-3">Why GCC Distributors Choose ZhixinPaper</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {whyUs.map((w) => (
              <div key={w.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4">{w.icon}</div>
                <h3 className="font-bold text-[#0F2B5B] mb-2">{w.title}</h3>
                <p className="text-sm text-gray-600">{w.desc}</p>
              </div>
            ))}
          </div>
          {/* certifications */}
          <div className="mt-8 bg-white rounded-2xl border border-gray-200 p-6">
            <h3 className="font-bold text-[#0F2B5B] mb-4 text-center">Certifications & Compliance</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.name} className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span className="text-sm font-medium text-gray-700">{cert.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0F2B5B] mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="border border-gray-200 rounded-xl p-6 hover:border-blue-200 transition-colors">
                <h3 className="font-bold text-[#0F2B5B] mb-2 flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> {f.q}
                </h3>
                <p className="text-gray-600 text-sm pl-7">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Inquiry Form ── */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#0F2B5B] mb-3">Get Your Middle East CIF Quote</h2>
            <p className="text-gray-500">Tell us your country and required sizes. We&apos;ll respond within 24 hours with a tailored CIF price list.</p>
          </div>
          <InquiryForm />
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-16 px-4 bg-[#0F2B5B] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Source Thermal Paper for the Middle East?</h2>
          <p className="text-blue-200 mb-8">CIF Jebel Ali / Jeddah / Alexandria quotes within 24 hours. L/C accepted. Arabic OEM packaging available.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3 rounded-lg transition-colors">
              Send Inquiry
            </Link>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-lg transition-colors">
              WhatsApp for Quick Quote
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
