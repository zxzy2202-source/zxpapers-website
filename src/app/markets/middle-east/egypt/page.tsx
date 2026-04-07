"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import InquiryForm from "@/components/shared/InquiryForm";
import { ArrowRight, CheckCircle, Ship, Clock, Package, MessageSquare, Award, TrendingUp, MapPin, Truck } from "lucide-react";
import { SITE } from "@/config/siteData";

const products = [
  { size: "80 × 80 mm", badge: "#1 in Egypt", badgeColor: "bg-amber-100 text-amber-800", href: "/products/thermal-rolls/80x80mm", desc: "Standard POS roll for Egyptian banks, supermarkets, and retail chains. Compatible with all POS brands used in Carrefour Egypt, Spinneys, and major Egyptian banks (CIB, NBE, Banque Misr).", specs: ["Core: 12mm / 13mm", "Length: 60m / 80m", "GSM: 65–80g", "BPA-free"], moq: "1 carton (50 rolls)", use: "Banks, supermarkets, retail POS" },
  { size: "57 × 50 mm", badge: "Meeza Card", badgeColor: "bg-blue-100 text-blue-800", href: "/products/thermal-rolls/57x50mm", desc: "Most popular for Meeza payment card terminals and mobile POS. Widely used by Egyptian pharmacies, kiosks, and small retailers.", specs: ["Core: 12mm / 13mm", "Length: 50m / 60m", "GSM: 55–65g", "BPA-free"], moq: "1 carton (50 rolls)", use: "Meeza terminals, pharmacies, kiosks" },
  { size: "4\" × 6\" Labels", badge: "E-commerce", badgeColor: "bg-green-100 text-green-800", href: "/products/thermal-labels/4x6in", desc: "Shipping labels for Jumia Egypt, Noon.com, and Egyptian logistics companies. Compatible with Zebra and TSC label printers.", specs: ["Size: 4\" × 6\"", "Core: 1\" / 3\"", "Adhesive: Permanent", "BPA-free"], moq: "1 roll (500 labels)", use: "E-commerce, logistics, warehousing" },
  { size: "57 × 40 mm", badge: "Compact POS", badgeColor: "bg-purple-100 text-purple-800", href: "/products/thermal-rolls/57x40mm", desc: "Compact roll for handheld POS terminals used in Egyptian food courts, cafeterias, and street vendors.", specs: ["Core: 12mm / 13mm", "Length: 40m / 50m", "GSM: 55–65g", "BPA-free"], moq: "1 carton (50 rolls)", use: "Food courts, street vendors, compact POS" },
];

const faqs = [
  { q: "Do you support ACID number for Egyptian customs?", a: "Yes. We can provide all necessary documentation to support the ACID (Advance Cargo Information Declaration) number required by Egyptian customs for imports." },
  { q: "What is the CIF price to Alexandria or Port Said?", a: "We provide CIF Alexandria and CIF Port Said pricing. Alexandria is the main port for Cairo distribution; Port Said is ideal for buyers who want to use the Suez Canal Free Zone." },
  { q: "What payment terms do you accept for Egyptian buyers?", a: "L/C at sight, T/T bank transfer. We understand Egyptian import regulations and can work with your bank to structure the L/C correctly." },
  { q: "How long does shipping take from China to Egypt?", a: "CIF Alexandria: 15–20 days. CIF Port Said: 14–18 days. Egypt has the shortest transit time from China among all Middle East destinations." },
  { q: "Can you provide Arabic OEM packaging?", a: "Yes. Full OEM service with Arabic packaging. Custom brand name and logo. NDA available. MOQ 1,000 rolls per size." },
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
      "name": "Egypt",
      "item": "https://www.zhixinpaper.com/markets/middle-east/egypt"
    }
  ]
};
export default function EgyptPage() {
  const waMsg = encodeURIComponent("Hello, I am a thermal paper distributor in Egypt. Please send me your CIF Alexandria price list and MOQ for 80×80mm and 57×50mm rolls.");
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="relative bg-gradient-to-br from-[#0F2B5B] via-[#1a3a6e] to-[#0d2347] text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1400&q=60')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2B5B]/80 to-transparent" />
        <div className="relative max-w-6xl mx-auto">
          <nav className="text-sm text-blue-300 mb-4 flex items-center gap-1 flex-wrap">
            <Link href="/" className="hover:text-white">Home</Link><ArrowRight className="w-3 h-3" />
            <Link href="/markets" className="hover:text-white">Markets</Link><ArrowRight className="w-3 h-3" />
            <Link href="/markets/middle-east" className="hover:text-white">Middle East</Link><ArrowRight className="w-3 h-3" />
            <span className="text-white">Egypt</span>
          </nav>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">🇪🇬 Egypt — Fastest Route from China</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Thermal Paper Rolls<br /><span className="text-amber-400">Supplier for Egypt</span></h1>
              <p className="text-xl text-blue-100 mb-6 max-w-xl">Factory-direct supply for Egyptian distributors. CIF Alexandria & Port Said. ACID number support. Arabic OEM packaging. L/C accepted.</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["ISO 9001", "BPA-Free", "CIF Alexandria", "ACID Support", "Arabic OEM", "L/C Accepted"].map((b) => (
                  <span key={b} className="bg-white/15 text-white text-xs px-3 py-1 rounded-full border border-white/20">{b}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3 rounded-lg transition-colors flex items-center gap-2">Get CIF Alexandria Quote <ArrowRight className="w-4 h-4" /></Link>
                <a href={`https://wa.me/${SITE.whatsapp}?text=${waMsg}`} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-lg transition-colors flex items-center gap-2"><MessageSquare className="w-4 h-4" /> WhatsApp Us</a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <TrendingUp className="w-5 h-5 text-amber-400" />, value: "4M+", label: "POS Terminals in Egypt" },
                { icon: <MapPin className="w-5 h-5 text-amber-400" />, value: "Alexandria", label: "Main Import Port" },
                { icon: <Ship className="w-5 h-5 text-amber-400" />, value: "15–20d", label: "Fastest ME Route" },
                { icon: <Award className="w-5 h-5 text-amber-400" />, value: "ACID", label: "Customs Support" },
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

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10"><h2 className="text-3xl font-bold text-[#0F2B5B] mb-3">Popular Products for Egypt</h2></div>
          <div className="grid md:grid-cols-2 gap-6">
            {products.map((p) => (
              <div key={p.size} className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div><h3 className="text-xl font-bold text-[#0F2B5B]">{p.size}</h3><span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${p.badgeColor}`}>{p.badge}</span></div>
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-lg">MOQ: {p.moq}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{p.desc}</p>
                <div className="grid grid-cols-2 gap-2 mb-4">{p.specs.map((s) => (<div key={s} className="flex items-center gap-1 text-xs text-gray-500"><CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" /> {s}</div>))}</div>
                <div className="flex gap-2">
                  <Link href={p.href} className="flex-1 text-center text-sm bg-[#0F2B5B] text-white py-2 rounded-lg hover:bg-blue-800 transition-colors">View Details</Link>
                  <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hello, I need a CIF Alexandria quote for ${p.size} thermal paper rolls for Egypt.`)}`} target="_blank" rel="noopener noreferrer" className="flex-1 text-center text-sm bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors">WhatsApp Quote</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0F2B5B] mb-8 text-center">Egypt Buyer FAQ</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-[#0F2B5B] mb-2 flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> {f.q}</h3>
                <p className="text-gray-600 text-sm pl-7">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8"><h2 className="text-3xl font-bold text-[#0F2B5B] mb-3">Get Your Egypt CIF Quote</h2><p className="text-gray-500">CIF Alexandria / Port Said pricing within 24 hours. ACID support. Arabic OEM available.</p></div>
          <InquiryForm />
        </div>
      </section>

      <section className="py-16 px-4 bg-[#0F2B5B] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Source Thermal Paper for Egypt?</h2>
          <p className="text-blue-200 mb-8">CIF Alexandria / Port Said quotes within 24 hours. ACID support. L/C accepted.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3 rounded-lg transition-colors">Send Inquiry</Link>
            <a href={`https://wa.me/${SITE.whatsapp}?text=${waMsg}`} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-lg transition-colors">WhatsApp for Quick Quote</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
