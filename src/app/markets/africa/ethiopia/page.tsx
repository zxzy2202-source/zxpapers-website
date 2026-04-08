import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: "Thermal Paper Supplier Ethiopia | Addis Ababa",
  description: "Factory-direct thermal paper rolls for Ethiopia. CIF Djibouti port, 20–28 days delivery. 57×50mm and 80×80mm for CBE Birr, Telebirr POS terminals. L/C accepted.",
  keywords: "thermal paper rolls Ethiopia, thermal paper Addis Ababa, POS receipt paper Ethiopia, thermal paper supplier Africa",
  openGraph: {
    title: "Thermal Paper Rolls for Ethiopia",
    description: "Factory-direct thermal paper rolls for Ethiopian distributors. CIF Djibouti, 20–28 days delivery.",
    url: `https://www.zxpapers.com/markets/africa/ethiopia`,
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
  alternates: { canonical: `${SITE.domain}/markets/africa/ethiopia` },
};

const products = [
  { size: "57 × 50mm", badge: "High Demand", href: "/products/thermal-rolls/57x50mm", desc: "Telebirr & CBE Birr POS terminals" },
  { size: "80 × 80mm", badge: "Best Seller", href: "/products/thermal-rolls/80x80mm", desc: "Supermarkets & retail POS" },
  { size: "57 × 40mm", badge: "Mobile POS",  href: "/products/thermal-rolls/57x40mm", desc: "Mobile payment & field agents" },
  { size: "4\" × 6\"",  badge: "Shipping",    href: "/products/thermal-labels/4x6in",  desc: "E-commerce & logistics labels" },
];

const faqs = [
  { q: "What is the MOQ for Ethiopia?", a: "MOQ is 1 × 20ft container (approx. 8,000–12,000 rolls depending on size). Smaller trial orders of 500–1,000 rolls available for new customers." },
  { q: "Which port do you ship to for Ethiopia?", a: "We ship CIF Djibouti (Port of Djibouti), which is the main gateway for Ethiopian imports. Transit to Addis Ababa takes approximately 5–7 days by truck after port clearance." },
  { q: "How long does delivery take?", a: "Sea freight from our factory to Djibouti port takes 20–28 days. Total door-to-door time including customs is typically 30–35 days." },
  { q: "Do you accept L/C payment?", a: "Yes, we accept Letter of Credit (L/C), T/T (bank transfer), and Western Union for Ethiopian buyers. L/C at sight is preferred for first orders." },
  { q: "Can you provide OEM packaging?", a: "Yes. We offer full OEM service including custom brand name, logo, and packaging design. Minimum OEM order is 1,000 rolls per size." },
  { q: "What certifications do your products have?", a: "Our products are ISO 9001 certified, BPA-free, and FSC certified. We can provide SGS test reports and CE certificates upon request." },
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
      "name": "Ethiopia",
      "item": "https://www.zhixinpaper.com/markets/africa/ethiopia"
    }
  ]
};
export default function EthiopiaPage() {
  const whatsappMsg = encodeURIComponent("Hello, I am a thermal paper distributor in Ethiopia. Please send me your price list and MOQ for 57×50mm and 80×80mm rolls. CIF Djibouti.");
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0F2B5B] via-[#1a3a6e] to-[#0d2347] text-white py-20 px-4">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1400&q=60')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="relative max-w-6xl mx-auto">
          <nav className="text-sm text-blue-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link> &rsaquo; <Link href="/markets" className="hover:text-white">Markets</Link> &rsaquo; <Link href="/markets/africa" className="hover:text-white">Africa</Link> &rsaquo; <span className="text-white">Ethiopia</span>
          </nav>
          <div className="inline-block bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">🇪🇹 Ethiopia Market</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Thermal Paper Rolls<br /><span className="text-amber-400">Supplier for Ethiopia</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl">
            Factory-direct supply for Ethiopian distributors and wholesalers. CIF Djibouti port. Telebirr & CBE Birr POS compatible.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <Link href="/contact" className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3 rounded-lg transition-colors">Get CIF Djibouti Quote</Link>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-lg transition-colors">WhatsApp Us</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "POS Terminals", value: "2M+" },
              { label: "Port", value: "Djibouti" },
              { label: "Transit Days", value: "20–28" },
              { label: "Payment", value: "L/C & T/T" },
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
          <h2 className="text-3xl font-bold text-[#0F2B5B] mb-8">Ethiopia Market Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">Ethiopia is East Africa&apos;s second-largest economy with a rapidly expanding digital payment ecosystem. The Commercial Bank of Ethiopia (CBE) Birr app and Telebirr (Ethio Telecom) have driven massive POS terminal deployment across the country.</p>
              <p className="text-gray-600 mb-4">With over 120 million people and a growing middle class, demand for thermal paper in retail, banking, and hospitality is rising steadily. Ethiopian importers typically source via Djibouti port, making logistics straightforward for Chinese suppliers.</p>
              <div className="bg-blue-50 rounded-xl p-6 mt-6">
                <h3 className="font-bold text-[#0F2B5B] mb-3">Key Market Facts</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>🏦 CBE Birr: 40M+ registered users, 2M+ POS terminals</li>
                  <li>📱 Telebirr: 30M+ users, fastest-growing mobile money in Africa</li>
                  <li>🏪 Major retail chains: Shoa Supermarket, Fantu, Bambis</li>
                  <li>🚢 Import gateway: Port of Djibouti (landlocked country)</li>
                  <li>💱 Currency: Ethiopian Birr (ETB)</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0F2B5B] mb-4">Popular Products for Ethiopia</h3>
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
                      <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hello, I need a quote for ${p.size} thermal paper rolls. CIF Djibouti, Ethiopia.`)}`} target="_blank" rel="noopener noreferrer" className="text-xs bg-green-500 text-white px-3 py-1.5 rounded-lg hover:bg-green-600">WhatsApp</a>
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
          <h2 className="text-3xl font-bold text-[#0F2B5B] mb-8 text-center">Logistics to Ethiopia</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Sea Freight (FCL)", time: "20–28 days", detail: "CIF Djibouti port. 20ft container: 8,000–12,000 rolls. 40ft container: 18,000–24,000 rolls.", badge: "Recommended" },
              { title: "Sea Freight (LCL)", time: "25–35 days", detail: "For smaller orders under 1 container. Consolidation service available from Guangzhou.", badge: "Flexible" },
              { title: "Air Freight", time: "5–7 days", detail: "To Bole International Airport (ADD), Addis Ababa. For urgent sample or small orders only.", badge: "Urgent" },
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
          <h2 className="text-3xl font-bold mb-4">Ready to Source Thermal Paper for Ethiopia?</h2>
          <p className="text-blue-200 mb-8">Get a CIF Djibouti quote within 24 hours. L/C accepted. OEM packaging available.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3 rounded-lg transition-colors">Send Inquiry</Link>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-lg transition-colors">WhatsApp for Quick Quote</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
