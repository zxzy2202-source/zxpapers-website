"use client";
import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import InquiryForm from "@/components/shared/InquiryForm";
import {
  ArrowRight, CheckCircle, Ship, Clock, Package,
  MessageSquare, Award, TrendingUp, MapPin, ShieldCheck,
  Banknote, Truck, Factory, ChevronRight,
} from "lucide-react";
import { SITE, CERTIFICATIONS } from "@/config/siteData";

const products = [
  {
    size: "80 × 80 mm", badge: "#1 in UAE", badgeColor: "bg-amber-100 text-amber-800",
    href: "/products/thermal-rolls/80x80mm",
    desc: "Standard POS roll for UAE retail chains, supermarkets, and banking terminals. Compatible with Ingenico, Verifone, PAX, and all major POS brands used in Carrefour, Lulu, and Spinneys.",
    specs: ["Core: 12mm / 13mm", "Length: 60m / 80m", "GSM: 65–80g", "BPA-free"],
    moq: "1 carton (50 rolls)",
    use: "Retail POS, banking, hospitality",
  },
  {
    size: "57 × 50 mm", badge: "Food Delivery", badgeColor: "bg-blue-100 text-blue-800",
    href: "/products/thermal-rolls/57x50mm",
    desc: "Most popular for Talabat, Deliveroo, Careem, and mobile POS terminals. Widely used by UAE food delivery riders and mobile payment agents.",
    specs: ["Core: 12mm / 13mm", "Length: 50m / 60m", "GSM: 55–65g", "BPA-free"],
    moq: "1 carton (50 rolls)",
    use: "Food delivery, mobile POS, taxis",
  },
  {
    size: "4\" × 6\" Labels", badge: "E-commerce", badgeColor: "bg-green-100 text-green-800",
    href: "/products/thermal-labels/4x6in",
    desc: "Shipping labels for Noon, Amazon.ae, Namshi, and UAE logistics companies. Compatible with Zebra, Honeywell, and TSC label printers.",
    specs: ["Size: 4\" × 6\"", "Core: 1\" / 3\"", "Adhesive: Permanent", "BPA-free"],
    moq: "1 roll (500 labels)",
    use: "E-commerce, logistics, warehousing",
  },
  {
    size: "80 × 70 mm", badge: "Hospitality", badgeColor: "bg-purple-100 text-purple-800",
    href: "/products/thermal-rolls/80x70mm",
    desc: "Used in UAE hotels, restaurants, and HORECA sector. Compatible with European POS equipment widely used in UAE's premium hospitality sector.",
    specs: ["Core: 12mm / 13mm", "Length: 70m / 80m", "GSM: 65–80g", "BPA-free"],
    moq: "1 carton (50 rolls)",
    use: "Hotels, restaurants, HORECA",
  },
];

const whyUs = [
  { icon: <Factory className="w-6 h-6" />, title: "Factory Direct to JAFZA", desc: "Regular FCL shipments to Jebel Ali (JAFZA). We work with leading UAE freight forwarders for seamless customs clearance." },
  { icon: <MapPin className="w-6 h-6" />, title: "UAE Re-export Hub", desc: "UAE distributors can re-export to Saudi Arabia, Qatar, Kuwait, Oman, and Bahrain. We provide all necessary COO and export documents." },
  { icon: <ShieldCheck className="w-6 h-6" />, title: "Halal & BPA-Free", desc: "All products are BPA-free and food-safe. Suitable for UAE's halal-certified food service and hospitality environments." },
  { icon: <Package className="w-6 h-6" />, title: "Arabic OEM Packaging", desc: "Custom Arabic/English bilingual packaging. Your brand name and logo on every roll. NDA available. MOQ 1,000 rolls." },
  { icon: <Banknote className="w-6 h-6" />, title: "L/C & T/T Accepted", desc: "Letter of Credit (L/C at sight), T/T bank transfer. Flexible payment terms for established UAE distributors." },
  { icon: <Award className="w-6 h-6" />, title: "ISO 9001 Certified", desc: "ISO 9001:2015, FSC, BPA-free, CE, RoHS. SGS test reports and factory audit documentation available." },
];

const faqs = [
  {
    q: "What is the CIF price to Jebel Ali (JAFZA)?",
    a: "We provide CIF Jebel Ali pricing for all standard sizes. Prices vary by quantity and specification. Contact us with your required sizes and quantities for a detailed CIF quote within 24 hours.",
  },
  {
    q: "Can UAE distributors re-export to other GCC countries?",
    a: "Yes. Many of our UAE customers use Jebel Ali as a re-export hub for Saudi Arabia, Qatar, Kuwait, Oman, and Bahrain. We provide all necessary Certificate of Origin (COO) and export documentation.",
  },
  {
    q: "Do you offer Arabic OEM packaging for UAE market?",
    a: "Yes. We offer full OEM service with Arabic and English bilingual packaging. Custom brand name, logo, and design. NDA available. MOQ is 1,000 rolls per size. Sample production takes 7–10 days.",
  },
  {
    q: "What is the minimum order quantity for UAE?",
    a: "MOQ is 1 × 20ft container (approx. 8,000–12,000 rolls). For new customers, we offer trial orders of 500–1,000 rolls via LCL consolidation to Jebel Ali.",
  },
  {
    q: "How long does shipping take from China to UAE?",
    a: "CIF Jebel Ali: 18–22 days from our factory in Guangdong, China. We load containers in 3–5 days after order confirmation. Full shipping documents provided within 3 days of vessel departure.",
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
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Uae",
      "item": "https://www.zhixinpaper.com/markets/middle-east/uae"
    }
  ]
};
export default function UAEPage() {
  const waMsg = encodeURIComponent(
    "Hello, I am a thermal paper distributor in UAE. Please send me your CIF Jebel Ali price list and MOQ for 80×80mm and 57×50mm rolls."
  );

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-[#0F2B5B] via-[#1a3a6e] to-[#0d2347] text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1400&q=60')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2B5B]/80 to-transparent" />
        <div className="relative max-w-6xl mx-auto">
          <nav className="text-sm text-blue-300 mb-4 flex items-center gap-1 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ArrowRight className="w-3 h-3" />
            <Link href="/markets" className="hover:text-white transition-colors">Markets</Link>
            <ArrowRight className="w-3 h-3" />
            <Link href="/markets/middle-east" className="hover:text-white transition-colors">Middle East</Link>
            <ArrowRight className="w-3 h-3" />
            <span className="text-white">UAE</span>
          </nav>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                🇦🇪 UAE Market
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Thermal Paper Rolls<br />
                <span className="text-amber-400">Supplier for UAE</span>
              </h1>
              <p className="text-xl text-blue-100 mb-6 max-w-xl">
                Factory-direct supply for UAE distributors. CIF Jebel Ali (JAFZA). Re-export to GCC available. Arabic OEM packaging. L/C accepted.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["ISO 9001", "BPA-Free", "CIF Jebel Ali", "L/C Accepted", "Arabic OEM"].map((b) => (
                  <span key={b} className="bg-white/15 text-white text-xs px-3 py-1 rounded-full border border-white/20">{b}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3 rounded-lg transition-colors flex items-center gap-2">
                  Get CIF Jebel Ali Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <a href={`https://wa.me/${SITE.whatsapp}?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-lg transition-colors flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" /> WhatsApp Us
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <TrendingUp className="w-5 h-5 text-amber-400" />, value: "3M+", label: "POS Terminals in UAE" },
                { icon: <MapPin className="w-5 h-5 text-amber-400" />, value: "JAFZA", label: "Jebel Ali Free Zone" },
                { icon: <Ship className="w-5 h-5 text-amber-400" />, value: "18–22d", label: "CIF Transit Time" },
                { icon: <Award className="w-5 h-5 text-amber-400" />, value: "GCC Hub", label: "Re-export to 5 Countries" },
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

      {/* ── Products ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0F2B5B] mb-3">Popular Products for UAE Market</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Most-ordered thermal paper sizes by UAE distributors. All BPA-free and compatible with major POS brands.</p>
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
                <p className="text-xs text-blue-600 mb-4">Use case: {p.use}</p>
                <div className="flex gap-2">
                  <Link href={p.href} className="flex-1 text-center text-sm bg-[#0F2B5B] text-white py-2 rounded-lg hover:bg-blue-800 transition-colors">View Details</Link>
                  <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hello, I need a CIF Jebel Ali quote for ${p.size} thermal paper rolls.`)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="flex-1 text-center text-sm bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors">WhatsApp Quote</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Logistics ── */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0F2B5B] mb-8 text-center">Shipping to UAE (Jebel Ali)</h2>
          <div className="bg-[#0F2B5B] rounded-2xl p-8 text-white mb-6">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              {[
                { icon: <Clock className="w-6 h-6 text-amber-400 mx-auto mb-2" />, val: "18–22 Days", label: "CIF Jebel Ali" },
                { icon: <Truck className="w-6 h-6 text-amber-400 mx-auto mb-2" />, val: "3–5 Days", label: "Container Loading" },
                { icon: <Package className="w-6 h-6 text-amber-400 mx-auto mb-2" />, val: "20ft / 40ft", label: "FCL Available" },
                { icon: <Ship className="w-6 h-6 text-amber-400 mx-auto mb-2" />, val: "Full Docs", label: "CO, SGS, Fumigation" },
              ].map((s) => (
                <div key={s.label}>
                  {s.icon}
                  <div className="text-xl font-bold">{s.val}</div>
                  <div className="text-blue-200 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "20ft FCL", detail: "8,000–12,000 rolls. Best for regular monthly orders. Loading time: 3–5 days." },
              { title: "40ft FCL", detail: "18,000–24,000 rolls. Best for large distributors. Loading time: 5–7 days." },
              { title: "LCL Consolidation", detail: "Min. 500 rolls. Ideal for trial orders. Consolidated with other cargo to Jebel Ali." },
              { title: "GCC Re-export", detail: "UAE distributors can re-export to Saudi Arabia, Qatar, Kuwait, Oman, Bahrain with our COO documents." },
            ].map((l) => (
              <div key={l.title} className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-[#0F2B5B] mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" /> {l.title}
                </h3>
                <p className="text-sm text-gray-600">{l.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0F2B5B] mb-8 text-center">Why UAE Distributors Choose ZhixinPaper</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {whyUs.map((w) => (
              <div key={w.title} className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">{w.icon}</div>
                <h3 className="font-bold text-[#0F2B5B] mb-2">{w.title}</h3>
                <p className="text-sm text-gray-600">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0F2B5B] mb-8 text-center">UAE Buyer FAQ</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-[#0F2B5B] mb-2 flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> {f.q}
                </h3>
                <p className="text-gray-600 text-sm pl-7">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#0F2B5B] mb-3">Get Your UAE CIF Quote</h2>
            <p className="text-gray-500">CIF Jebel Ali pricing within 24 hours. L/C accepted. Arabic OEM available.</p>
          </div>
          <InquiryForm />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-4 bg-[#0F2B5B] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Source Thermal Paper for UAE?</h2>
          <p className="text-blue-200 mb-8">CIF Jebel Ali quotes within 24 hours. L/C accepted. GCC re-export documentation available.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3 rounded-lg transition-colors">Send Inquiry</Link>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-lg transition-colors">WhatsApp for Quick Quote</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
