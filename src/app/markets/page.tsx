import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { SITE } from "@/config/siteData";

import { CountryFlag, type CountryCode } from "@/components/ui/country-flag";

export const metadata: Metadata = {
  title: "Global Markets | Thermal Paper Supplier",
  description: "ZhixinPaper supplies thermal paper rolls to 80+ countries. Dedicated market pages for Africa (Nigeria, Kenya, South Africa, Ghana), Southeast Asia.",
  keywords: "thermal paper supplier global markets, thermal paper Africa, thermal paper Southeast Asia, thermal paper Middle East, B2B thermal paper export",
  openGraph: {
    title: "Global Markets",
    description: "Factory-direct thermal paper supplier for Africa, Southeast Asia, and Middle East markets.",
    url: `https://www.zxpapers.com/markets`,
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
  alternates: { canonical: `${SITE.domain}/markets` },
};

const regions = [
  {
    name: "Africa",
    href: "/markets/africa",
    badge: "Fastest Growing",
    badgeColor: "amber",
    description: "20M+ POS terminals across Sub-Saharan Africa. Nigeria, Kenya, South Africa, Ghana, Ethiopia, Tanzania and more.",
    stats: [
      { label: "POS Terminals", value: "20M+" },
      { label: "Annual Growth", value: "+22%" },
      { label: "Countries", value: "6+" },
    ],
    countries: [
      { code: "NG" as CountryCode, name: "Nigeria",      href: "/markets/africa/nigeria",      badge: "15M+ POS" },
      { code: "KE" as CountryCode, name: "Kenya",        href: "/markets/africa/kenya",        badge: "M-Pesa Hub" },
      { code: "ZA" as CountryCode, name: "South Africa", href: "/markets/africa/south-africa", badge: "Premium Market" },
      { code: "GH" as CountryCode, name: "Ghana",        href: "/markets/africa/ghana",        badge: "West Africa" },
      { code: "ET" as CountryCode, name: "Ethiopia",     href: "/markets/africa/ethiopia",     badge: "Fast Growing" },
      { code: "TZ" as CountryCode, name: "Tanzania",     href: "/markets/africa/tanzania",     badge: "Re-export Hub" },
    ],
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
  },
  {
    name: "Southeast Asia",
    href: "/markets/southeast-asia",
    badge: "High Volume",
    badgeColor: "blue",
    description: "50M+ POS terminals across ASEAN. Thailand, Indonesia, Vietnam, Philippines, Malaysia, Singapore and more.",
    stats: [
      { label: "POS Terminals", value: "50M+" },
      { label: "Annual Growth", value: "+18%" },
      { label: "Countries", value: "6+" },
    ],
    countries: [
      { code: "TH" as CountryCode, name: "Thailand",     href: "/markets/southeast-asia/thailand",     badge: "Key Market" },
      { code: "ID" as CountryCode, name: "Indonesia",    href: "/markets/southeast-asia/indonesia",    badge: "8M+ POS" },
      { code: "VN" as CountryCode, name: "Vietnam",      href: "/markets/southeast-asia/vietnam",      badge: "Fast Growing" },
      { code: "PH" as CountryCode, name: "Philippines",  href: "/markets/southeast-asia/philippines",  badge: "GCash Hub" },
      { code: "MY" as CountryCode, name: "Malaysia",     href: "/markets/southeast-asia/malaysia",     badge: "ASEAN Hub" },
      { code: "SG" as CountryCode, name: "Singapore",    href: "/markets/southeast-asia/singapore",    badge: "Re-export Hub" },
    ],
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    name: "Middle East & Africa",
    href: "/markets/middle-east-africa",
    badge: "Premium Buyers",
    badgeColor: "purple",
    description: "UAE, Saudi Arabia, Egypt, Turkey and surrounding markets. High purchasing power, strong demand for quality thermal paper.",
    stats: [
      { label: "POS Terminals", value: "10M+" },
      { label: "Annual Growth", value: "+15%" },
      { label: "Countries", value: "10+" },
    ],
    countries: [
      { code: "AE" as CountryCode, name: "UAE",          href: "/markets/middle-east-africa", badge: "Premium" },
      { code: "SA" as CountryCode, name: "Saudi Arabia", href: "/markets/middle-east-africa", badge: "High Volume" },
      { code: "EG" as CountryCode, name: "Egypt",        href: "/markets/middle-east-africa", badge: "North Africa" },
      { code: "TR" as CountryCode, name: "Turkey",       href: "/markets/middle-east-africa", badge: "Bridge Market" },
    ],
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
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
    }
  ]
};
export default function MarketsPage() {
  const whatsappMsg = encodeURIComponent("Hello, I am interested in thermal paper rolls for my market. Please send me your price list and MOQ.");
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0F2B5B] via-[#1a3a6e] to-[#0d2347] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">Global Markets</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Thermal Paper Supplier for<br /><span className="text-amber-400">80+ Countries Worldwide</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Dedicated market support for Africa, Southeast Asia, and Middle East. Factory-direct pricing, CIF quotes, and local market expertise.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link href="/contact" className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3 rounded-lg transition-colors">Get Market-Specific Quote</Link>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-lg transition-colors">WhatsApp Us</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: "Countries Served", value: "80+" },
              { label: "Total POS Terminals", value: "80M+" },
              { label: "Years Exporting", value: "15+" },
              { label: "OEM Clients", value: "2,000+" },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-amber-400">{s.value}</div>
                <div className="text-sm text-blue-200">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0F2B5B] mb-4 text-center">Our Key Markets</h2>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">Click on any region or country to see market-specific product recommendations, logistics information, and pricing guidance.</p>
          <div className="space-y-10">
            {regions.map((region) => (
              <div key={region.name} className={`rounded-2xl border ${region.borderColor} ${region.bgColor} p-8`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-[#0F2B5B]">{region.name}</h3>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${region.badgeColor === "amber" ? "bg-amber-100 text-amber-700" : region.badgeColor === "blue" ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700"}`}>{region.badge}</span>
                    </div>
                    <p className="text-gray-600 max-w-xl">{region.description}</p>
                  </div>
                  <div className="flex gap-3 mt-4 md:mt-0">
                    {region.stats.map((s) => (
                      <div key={s.label} className="bg-white rounded-xl px-4 py-3 text-center shadow-sm min-w-[80px]">
                        <div className="text-xl font-bold text-[#0F2B5B]">{s.value}</div>
                        <div className="text-xs text-gray-500">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                  {region.countries.map((c) => (
                    <Link key={c.name} href={c.href} className="bg-white rounded-xl p-3 text-center hover:shadow-md transition-shadow border border-gray-100 hover:border-blue-300 group">
                      <div className="mb-1"><CountryFlag code={c.code} label={c.name} className="w-8 h-auto mx-auto" /></div>
                      <div className="text-sm font-bold text-[#0F2B5B] group-hover:text-blue-600">{c.name}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{c.badge}</div>
                    </Link>
                  ))}
                  <Link href={region.href} className={`bg-gradient-to-br ${region.color} rounded-xl p-3 text-center hover:shadow-md transition-shadow text-white`}>
                    <div className="text-2xl mb-1">→</div>
                    <div className="text-sm font-bold">View All</div>
                    <div className="text-xs opacity-80 mt-0.5">{region.name}</div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0F2B5B] mb-12">Why Global Distributors Choose ZhixinPaper</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🏭", title: "Factory Direct", desc: "No middlemen. Direct from our 50,000m² factory in China. Best FOB/CIF prices guaranteed." },
              { icon: "🚢", title: "Export Experience", desc: "15+ years exporting to 80+ countries. Full export documentation: CO, SGS, fumigation, phytosanitary." },
              { icon: "📦", title: "Flexible MOQ", desc: "From trial orders of 500 rolls to full 40ft containers. We accommodate buyers at every stage." },
              { icon: "🏷️", title: "OEM & Private Label", desc: "Custom brand packaging for distributors. NDA available. MOQ 1,000 rolls per size." },
              { icon: "💳", title: "Flexible Payment", desc: "T/T, L/C at sight, Western Union. 30-day terms for established customers." },
              { icon: "⚡", title: "Fast Response", desc: "Quote within 24 hours. WhatsApp available. Dedicated export sales team for each region." },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-6 shadow-sm text-left">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-[#0F2B5B] mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#0F2B5B] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Find Your Market&apos;s Best Solution</h2>
          <p className="text-blue-200 mb-8">Tell us your country and we&apos;ll send you a tailored CIF quote with the most popular sizes for your market within 24 hours.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3 rounded-lg transition-colors">Send Inquiry</Link>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-lg transition-colors">WhatsApp for Quick Quote</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
