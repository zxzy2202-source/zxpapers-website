import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { SITE } from "@/config/siteData";

import { CountryFlag } from "@/components/ui/country-flag";

export const metadata: Metadata = {
  title: "Thermal Paper Supplier Singapore | ASEAN Hub",
  description: "Factory-direct thermal paper rolls for Singapore. CIF Singapore port, 10–14 days delivery. PayNow & NETS POS compatible. ASEAN re-distribution hub.",
  keywords: "thermal paper rolls Singapore, thermal paper supplier Singapore, POS receipt paper Singapore, ASEAN thermal paper distributor, thermal paper SGD price, thermal paper PSA port Singapore, bulk thermal paper Singapore, thermal paper distributor ASEAN hub, 80x80 thermal paper Singapore",
  openGraph: {
    title: "Thermal Paper Rolls for Singapore",
    description: "Factory-direct thermal paper rolls for Singapore distributors. CIF Singapore, 10–14 days delivery. ASEAN hub.",
    url: `https://www.zxpapers.com/markets/southeast-asia/singapore`,
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
  alternates: { canonical: `${SITE.domain}/markets/southeast-asia/singapore` },
};

const products = [
  { size: "80 × 80mm", badge: "Best Seller", href: "/products/thermal-rolls/80x80mm", desc: "NETS & PayNow POS terminals" },
  { size: "57 × 50mm", badge: "High Demand", href: "/products/thermal-rolls/57x50mm", desc: "Mobile POS & food delivery" },
  { size: "4\" × 6\"",  badge: "Most Popular", href: "/products/thermal-labels/4x6in",  desc: "Shopee & Lazada shipping labels" },
  { size: "2\" × 1\"",  badge: "Barcode",      href: "/products/thermal-labels/2x1in",  desc: "Retail barcode & price labels" },
];

const faqs = [
  { q: "What is the MOQ for Singapore?", a: "MOQ is 1 × 20ft container (approx. 8,000–12,000 rolls). For Singapore distributors who re-export to ASEAN, we also offer flexible LCL options for mixed-size orders." },
  { q: "How long does delivery take to Singapore?", a: "Sea freight from our factory to Singapore port takes 10–14 days. Singapore is one of the closest Southeast Asian ports to China, making it ideal for fast restocking." },
  { q: "Can Singapore be used as an ASEAN distribution hub?", a: "Absolutely. Many of our Singapore customers re-distribute to Malaysia, Indonesia, Thailand, Vietnam, and the Philippines. Singapore's free trade agreements make it an excellent regional hub." },
  { q: "Do your products meet Singapore's BPA-free requirements?", a: "Yes. All our thermal paper products are BPA-free certified. We can provide test reports from SGS or Intertek upon request." },
  { q: "What payment terms do you accept?", a: "We accept T/T (bank transfer), L/C at sight, and PayPal for sample orders. For regular Singapore customers, we offer 30-day payment terms after the first successful order." },
  { q: "Can you provide OEM packaging for Singapore brands?", a: "Yes. We offer full OEM service including custom brand name, logo, and packaging. Minimum OEM order is 1,000 rolls per size. NDA available." },
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
      "name": "Singapore",
      "item": "https://www.zhixinpaper.com/markets/southeast-asia/singapore"
    }
  ]
};
export default function SingaporePage() {
  const whatsappMsg = encodeURIComponent("Hello, I am a thermal paper distributor in Singapore. Please send me your price list and MOQ. CIF Singapore port.");
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0F2B5B] via-[#1a3a6e] to-[#0d2347] text-white py-20 px-4">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1400&q=60')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="relative max-w-6xl mx-auto">
          <nav className="text-sm text-blue-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link> &rsaquo; <Link href="/markets" className="hover:text-white">Markets</Link> &rsaquo; <Link href="/markets/southeast-asia" className="hover:text-white">Southeast Asia</Link> &rsaquo; <span className="text-white">Singapore</span>
          </nav>
          <div className="inline-block bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide"><CountryFlag code="SG" label="Singapore" className="w-5 inline-block align-middle" /> Singapore Market</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Thermal Paper Rolls<br /><span className="text-amber-400">Supplier for Singapore</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl">
            Factory-direct supply for Singapore distributors. CIF Singapore port, 10–14 days. ASEAN re-distribution hub. PayNow & NETS POS compatible.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <Link href="/contact" className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3 rounded-lg transition-colors">Get CIF Singapore Quote</Link>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-lg transition-colors">WhatsApp Us</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "POS Terminals", value: "500K+" },
              { label: "Transit Days", value: "10–14" },
              { label: "ASEAN Reach", value: "10 Countries" },
              { label: "Payment", value: "T/T & L/C" },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-amber-400">{s.value}</div>
                <div className="text-sm text-blue-200">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0F2B5B] mb-8">Singapore Market Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">Singapore is Southeast Asia&apos;s premier trading hub and financial center. With one of the world&apos;s busiest ports and extensive free trade agreements, it serves as the ideal ASEAN distribution base for thermal paper products.</p>
              <p className="text-gray-600 mb-4">The Singapore market demands high-quality, BPA-free thermal paper for its sophisticated retail, F&B, and logistics sectors. PayNow and NETS payment systems drive strong POS terminal usage across the island.</p>
              <div className="bg-blue-50 rounded-xl p-6 mt-6">
                <h3 className="font-bold text-[#0F2B5B] mb-3">Key Market Facts</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>💳 NETS: 100K+ acceptance points, 500K+ POS terminals</li>
                  <li>📱 PayNow: 5M+ registered users (90% of population)</li>
                  <li>🏪 Major retail: NTUC FairPrice, Cold Storage, Giant, Sheng Siong</li>
                  <li>🚢 World&apos;s 2nd busiest port — ideal ASEAN hub</li>
                  <li>🌏 Re-export to all 10 ASEAN countries</li>
                  <li>💱 Currency: Singapore Dollar (SGD)</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0F2B5B] mb-4">Popular Products for Singapore</h3>
              <div className="space-y-3">
                {products.map((p) => (
                  <div key={p.size} className="border border-gray-200 rounded-xl p-4 flex items-center justify-between hover:border-blue-400 transition-colors">
                    <div>
                      <span className="font-bold text-[#0F2B5B]">{p.size}</span>
                      <span className="ml-2 text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">{p.badge}</span>
                      <p className="text-sm text-gray-500 mt-1">{p.desc}</p>
                    </div>
                    <div className="flex gap-2">
                      <Link href={p.href} className="text-xs bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700">Details</Link>
                      <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hello, I need a quote for ${p.size} thermal paper rolls. CIF Singapore.`)}`} target="_blank" rel="noopener noreferrer" className="text-xs bg-green-500 text-white px-3 py-1.5 rounded-lg hover:bg-green-600">WhatsApp</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0F2B5B] mb-8 text-center">Logistics to Singapore</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Sea Freight (FCL)", time: "10–14 days", detail: "CIF Singapore port (PSA). 20ft container: 8,000–12,000 rolls. 40ft container: 18,000–24,000 rolls.", badge: "Recommended" },
              { title: "Sea Freight (LCL)", time: "12–18 days", detail: "For smaller orders under 1 container. Consolidation service available from Guangzhou or Shenzhen.", badge: "Flexible" },
              { title: "Air Freight", time: "2–3 days", detail: "To Changi Airport (SIN). For urgent sample or small orders. Fast customs clearance in Singapore.", badge: "Urgent" },
            ].map((l) => (
              <div key={l.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-[#0F2B5B]">{l.title}</h3>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{l.badge}</span>
                </div>
                <div className="text-2xl font-bold text-amber-500 mb-2">{l.time}</div>
                <p className="text-sm text-gray-600">{l.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0F2B5B] mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-[#0F2B5B] mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#0F2B5B] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Source Thermal Paper for Singapore?</h2>
          <p className="text-blue-200 mb-8">Get a CIF Singapore quote within 24 hours. BPA-free certified. ASEAN distribution support available.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3 rounded-lg transition-colors">Send Inquiry</Link>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-lg transition-colors">WhatsApp for Quick Quote</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
