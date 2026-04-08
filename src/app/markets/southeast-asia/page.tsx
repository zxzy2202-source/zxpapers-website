import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import { SITE } from "@/config/siteData";
import {
  MessageSquare, Phone, CheckCircle, ArrowRight,
  Package, Ship, Clock, Globe, Star, TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Thermal Paper Supplier for Southeast Asia",
  description: "Factory-direct thermal paper rolls and labels for Southeast Asia distributors. Serving Thailand, Indonesia, Vietnam, Philippines, Malaysia.",
  keywords: "thermal paper rolls Southeast Asia, thermal paper Thailand, thermal paper Indonesia, thermal paper Vietnam, POS paper rolls supplier SEA",
  openGraph: {
    title: "Thermal Paper Supplier for Southeast Asia",
    description: "Factory-direct thermal paper rolls for Thailand, Indonesia, Vietnam, Philippines, Malaysia. CIF pricing, OEM available.",
    url: "https://www.zxpapers.com/markets/southeast-asia",
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
  alternates: { canonical: `${SITE.domain}/markets/southeast-asia` },
};

const countries = [
  {
    flag: "🇹🇭",
    name: "Thailand",
    slug: "thailand",
    port: "Laem Chabang",
    transitDays: "12–16",
    posTerminals: "5M+",
    highlight: "Key Market",
    highlightColor: "bg-amber-100 text-amber-700",
    desc: "Strong POS adoption in retail, hospitality, and logistics. Bangkok is a major re-export hub for ASEAN.",
    topSize: "80×80mm",
  },
  {
    flag: "🇮🇩",
    name: "Indonesia",
    slug: "indonesia",
    port: "Tanjung Priok (Jakarta)",
    transitDays: "14–18",
    posTerminals: "8M+",
    highlight: "Largest Market",
    highlightColor: "bg-blue-100 text-blue-700",
    desc: "Largest economy in SEA. High demand from retail chains, banks, and e-commerce logistics networks.",
    topSize: "57×50mm",
  },
  {
    flag: "🇻🇳",
    name: "Vietnam",
    slug: "vietnam",
    port: "Cat Lai (Ho Chi Minh)",
    transitDays: "10–14",
    posTerminals: "3M+",
    highlight: "Fast Growing",
    highlightColor: "bg-green-100 text-green-700",
    desc: "Rapid retail and fintech expansion. Strong demand for POS rolls in supermarkets and payment terminals.",
    topSize: "80×80mm",
  },
  {
    flag: "🇵🇭",
    name: "Philippines",
    slug: "philippines",
    port: "Manila (MICT)",
    transitDays: "12–16",
    posTerminals: "2M+",
    highlight: "Growing Demand",
    highlightColor: "bg-purple-100 text-purple-700",
    desc: "BPO sector and retail expansion driving POS terminal growth. Island logistics require reliable stock.",
    topSize: "57×50mm",
  },
  {
    flag: "🇲🇾",
    name: "Malaysia",
    slug: "malaysia",
    port: "Port Klang",
    transitDays: "10–14",
    posTerminals: "2.5M+",
    highlight: "Premium Market",
    highlightColor: "bg-rose-100 text-rose-700",
    desc: "High-quality market with strong retail and banking sector. Kuala Lumpur is a key ASEAN distribution hub.",
    topSize: "80×80mm",
  },
  {
    flag: "🇸🇬",
    name: "Singapore",
    slug: "singapore",
    port: "Singapore PSA",
    transitDays: "8–12",
    posTerminals: "1M+",
    highlight: "Hub Market",
    highlightColor: "bg-slate-100 text-slate-700",
    desc: "Regional trading hub. Ideal for re-distribution across ASEAN. High standards, premium product demand.",
    topSize: "80×80mm",
  },
];

const products = [
  {
    name: "80×80mm Thermal Rolls",
    badge: "Best Seller SEA",
    badgeColor: "bg-amber-500 text-white",
    desc: "Standard POS receipt roll for supermarkets, restaurants, and retail chains across Thailand, Vietnam, and Malaysia.",
    specs: ["Core: 13mm / 15mm", "Length: 80m / 100m", "GSM: 65–80gsm"],
    href: "/products/thermal-rolls/80x80mm",
  },
  {
    name: "57×50mm Thermal Rolls",
    badge: "Mobile POS",
    badgeColor: "bg-blue-500 text-white",
    desc: "Compact rolls for mobile POS terminals, handheld printers, and delivery receipt systems in Indonesia and Philippines.",
    specs: ["Core: 13mm", "Length: 50m / 60m", "GSM: 65gsm"],
    href: "/products/thermal-rolls/57x50mm",
  },
  {
    name: "4\"×6\" Shipping Labels",
    badge: "E-Commerce",
    badgeColor: "bg-green-500 text-white",
    desc: "High-demand shipping labels for e-commerce logistics — Lazada, Shopee, Tokopedia fulfillment centers.",
    specs: ["Size: 4\" × 6\"", "500 / 1,000 per roll", "Direct thermal"],
    href: "/products/thermal-labels/4x6-shipping",
  },
  {
    name: "OEM Custom Rolls",
    badge: "Private Label",
    badgeColor: "bg-purple-500 text-white",
    desc: "Custom logo, packaging, and core printing for distributors building their own brand in SEA markets.",
    specs: ["MOQ: 1 carton", "NDA available", "7–14 day samples"],
    href: "/oem",
  },
];

const logistics = [
  {
    country: "Thailand",
    port: "Laem Chabang",
    transit: "12–16 days",
    incoterm: "FOB / CIF",
    icon: "🇹🇭",
  },
  {
    country: "Indonesia",
    port: "Tanjung Priok",
    transit: "14–18 days",
    incoterm: "FOB / CIF",
    icon: "🇮🇩",
  },
  {
    country: "Vietnam",
    port: "Cat Lai",
    transit: "10–14 days",
    incoterm: "FOB / CIF",
    icon: "🇻🇳",
  },
  {
    country: "Philippines",
    port: "Manila MICT",
    transit: "12–16 days",
    incoterm: "FOB / CIF",
    icon: "🇵🇭",
  },
  {
    country: "Malaysia",
    port: "Port Klang",
    transit: "10–14 days",
    incoterm: "FOB / CIF",
    icon: "🇲🇾",
  },
  {
    country: "Singapore",
    port: "PSA Singapore",
    transit: "8–12 days",
    incoterm: "FOB / CIF",
    icon: "🇸🇬",
  },
];

const whyUs = [
  { icon: Package, title: "Factory Direct Price", desc: "No middlemen. Save 15–30% vs. trading companies. Direct from our 50,000 m² facility." },
  { icon: Ship, title: "CIF Pricing Available", desc: "We quote CIF to your destination port — no hidden freight surprises. Full shipping docs included." },
  { icon: Clock, title: "Fast Container Loading", desc: "20ft & 40ft FCL ready in 3–5 days. LCL consolidation available for smaller orders." },
  { icon: Globe, title: "ASEAN Trade Expertise", desc: "Experienced with FORM E (ASEAN-China FTA), CO certificates, and customs clearance support." },
  { icon: Star, title: "OEM & Private Label", desc: "Build your own brand with our manufacturing. Custom logo, packaging, and core printing." },
  { icon: TrendingUp, title: "Stable Long-Term Supply", desc: "500M+ rolls/year capacity. Never miss a delivery. Consistent quality batch after batch." },
];

const faqs = [
  {
    q: "What is the MOQ for Southeast Asia orders?",
    a: "MOQ is flexible — from 1 carton for samples to full 20ft container orders. We accommodate both small distributors and large wholesalers.",
  },
  {
    q: "Do you provide CIF pricing to SEA ports?",
    a: "Yes. We provide CIF pricing to Laem Chabang, Tanjung Priok, Cat Lai, Manila, Port Klang, and Singapore PSA. Just tell us your destination port.",
  },
  {
    q: "Can I get free samples before placing a bulk order?",
    a: "Yes. We provide free samples (you pay shipping). Sample delivery takes 5–7 days via DHL/FedEx to most SEA countries.",
  },
  {
    q: "Do you support FORM E for ASEAN-China FTA tariff reduction?",
    a: "Yes. We can provide FORM E (Certificate of Origin) for eligible products, helping you reduce import duties under the ASEAN-China FTA.",
  },
  {
    q: "What payment terms do you accept?",
    a: "We accept T/T (30% deposit, 70% before shipment), L/C at sight, and Western Union for small orders. Flexible terms for established buyers.",
  },
  {
    q: "How do I get a price list for my country?",
    a: "WhatsApp or email us with your target country, required sizes, and estimated monthly quantity. We'll send a full price list within 24 hours.",
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
      "name": "Southeast Asia",
      "item": "https://www.zhixinpaper.com/markets/southeast-asia"
    }
  ]
};
export default function SoutheastAsiaPage() {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <PageHero
        bgImage="https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1400&q=80"
        overlayDir="left"
        overlayOpacity={50}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Markets", href: "/markets" }, { label: "Southeast Asia" }]}
        badge={{ text: "Southeast Asia Market", color: "green" }}
        eyebrow="Thermal Paper Supplier for ASEAN"
        title={<>Thermal Paper Rolls<br /><span className="text-amber-400">for Southeast Asia</span></>}
        subtitle="Factory-direct supply to Thailand, Indonesia, Vietnam, Philippines, Malaysia & Singapore. CIF pricing, FORM E available, OEM supported."
        trustBadges={["CIF to All SEA Ports", "FORM E Available", "OEM Supported", "ISO 9001", "BPA-Free"]}
        ctas={[
          { label: "Get SEA Price List", href: "/contact", variant: "primary", icon: <MessageSquare className="w-4 h-4" /> },
          { label: "WhatsApp for Quote", href: `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I am a distributor in Southeast Asia. Please send me your thermal paper price list and CIF rates.")}`, variant: "whatsapp", icon: <Phone className="w-4 h-4" />, external: true },
        ]}
        stats={[
          { value: "20M+", label: "POS Terminals" },
          { value: "6", label: "Countries Served" },
          { value: "8–18 Days", label: "Transit Time" },
          { value: "FORM E", label: "FTA Certificate" },
        ]}
      />

      {/* ── Country Cards ─────────────────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="text-center mb-10">
            <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">6 Key Markets</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3" style={{ fontFamily: "Sora, sans-serif" }}>
              Southeast Asia Market Overview
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              ASEAN's 680M+ population and fast-growing digital payment infrastructure are driving explosive demand for thermal paper rolls and labels.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((c) => (
              <div key={c.slug} className="bg-white border border-slate-200 hover:border-green-300 hover:shadow-lg rounded-2xl p-6 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{c.flag}</span>
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-lg" style={{ fontFamily: "Sora, sans-serif" }}>{c.name}</h3>
                      <p className="text-xs text-slate-500">{c.port}</p>
                    </div>
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${c.highlightColor}`}>{c.highlight}</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{c.desc}</p>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="bg-slate-50 rounded-lg p-2 text-center">
                    <div className="font-bold text-slate-900 text-sm">{c.posTerminals}</div>
                    <div className="text-[10px] text-slate-500">POS Terminals</div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-2 text-center">
                    <div className="font-bold text-slate-900 text-sm">{c.transitDays}d</div>
                    <div className="text-[10px] text-slate-500">Transit</div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-2 text-center">
                    <div className="font-bold text-slate-900 text-sm">{c.topSize}</div>
                    <div className="text-[10px] text-slate-500">Top Size</div>
                  </div>
                </div>
                <Link
                  href={`/markets/southeast-asia/${c.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm text-green-600 font-semibold group-hover:gap-2.5 transition-all"
                >
                  View {c.name} Details <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products ──────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="text-center mb-10">
            <span className="inline-block bg-amber-100 text-amber-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">Popular Products</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3" style={{ fontFamily: "Sora, sans-serif" }}>
              Best-Selling Products in SEA
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              These are the most ordered products by Southeast Asian distributors. All available for bulk orders with OEM packaging.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <div key={p.name} className="bg-white border border-slate-200 hover:border-amber-300 hover:shadow-lg rounded-2xl p-6 transition-all duration-300 flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-slate-900 text-base leading-tight" style={{ fontFamily: "Sora, sans-serif" }}>{p.name}</h3>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap ml-2 ${p.badgeColor}`}>{p.badge}</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">{p.desc}</p>
                <ul className="space-y-1 mb-5">
                  {p.specs.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-xs text-slate-500">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2 mt-auto">
                  <Link href={p.href} className="flex-1 text-center text-sm font-semibold text-green-700 bg-green-50 hover:bg-green-100 px-3 py-2 rounded-lg transition-colors">
                    Details
                  </Link>
                  <a
                    href={`${SITE.whatsappUrl}?text=${encodeURIComponent(`Hello, I need pricing for ${p.name} for Southeast Asia. Please send MOQ and bulk price.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-sm font-semibold text-white bg-green-600 hover:bg-green-700 px-3 py-2 rounded-lg transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Logistics Table ───────────────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="text-center mb-10">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">Shipping & Logistics</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3" style={{ fontFamily: "Sora, sans-serif" }}>
              CIF Shipping to All SEA Ports
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              We ship directly from our factory in Xi'an to all major Southeast Asian ports. CIF and FOB pricing available.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="text-left px-6 py-4 font-semibold">Country</th>
                  <th className="text-left px-6 py-4 font-semibold">Destination Port</th>
                  <th className="text-left px-6 py-4 font-semibold">Transit Time</th>
                  <th className="text-left px-6 py-4 font-semibold">Incoterm</th>
                  <th className="text-left px-6 py-4 font-semibold">FTA Certificate</th>
                </tr>
              </thead>
              <tbody>
                {logistics.map((l, i) => (
                  <tr key={l.country} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-6 py-4 font-semibold text-slate-900">
                      <span className="mr-2">{l.icon}</span>{l.country}
                    </td>
                    <td className="px-6 py-4 text-slate-600">{l.port}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 text-green-700 font-semibold">
                        <Clock className="w-3.5 h-3.5" />{l.transit}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-600">{l.incoterm}</td>
                    <td className="px-6 py-4">
                      <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded-full">FORM E</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-3 text-center">Transit times are estimates from Shenzhen port. Actual times may vary by carrier and season.</p>
        </div>
      </section>

      {/* ── Why Us ────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="text-center mb-10">
            <span className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">Why Choose Us</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3" style={{ fontFamily: "Sora, sans-serif" }}>
              Why SEA Distributors Choose ZhixinPaper
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white border border-slate-200 hover:border-green-300 hover:shadow-md rounded-2xl p-6 transition-all duration-300">
                <div className="w-11 h-11 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2" style={{ fontFamily: "Sora, sans-serif" }}>{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="container max-w-3xl">
          <div className="text-center mb-10">
            <span className="inline-block bg-amber-100 text-amber-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">FAQ</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3" style={{ fontFamily: "Sora, sans-serif" }}>
              Common Questions from SEA Buyers
            </h2>
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

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="bg-[#0F2B5B] text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-extrabold mb-4" style={{ fontFamily: "Sora, sans-serif" }}>
            Ready to Source Thermal Paper for Southeast Asia?
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Get a full price list with CIF rates to your port within 24 hours. Free samples available.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-500/30"
              style={{ fontFamily: "Sora, sans-serif" }}
            >
              <MessageSquare className="w-5 h-5" /> Send Inquiry
            </Link>
            <a
              href={`${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I am a distributor in Southeast Asia. Please send me your thermal paper price list and CIF rates.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-500/30"
              style={{ fontFamily: "Sora, sans-serif" }}
            >
              <Phone className="w-5 h-5" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
