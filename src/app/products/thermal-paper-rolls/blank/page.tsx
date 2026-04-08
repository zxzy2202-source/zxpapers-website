import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/shared/InquiryForm";
import { CheckCircle, ArrowRight, Package, Ruler, ShieldCheck, Truck, Clock, Star, MessageSquare } from "lucide-react";
import { paperRollSizes } from "@/config/navigation";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: "Blank Thermal Paper Rolls | BPA-Free POS",
  description: "Factory-direct blank thermal paper rolls. BPA-free, ISO 9001 certified, FSC certified. MOQ 1,000 rolls. 57mm, 80mm and custom sizes. 7–15 day lead time.",
  alternates: { canonical: `${SITE.domain}/products/thermal-paper-rolls/blank` },
};

const ROLLS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-rolls-RQBrphmgzbAMk7eq3HsvNq.webp";

const specs = [
  { label: "Paper Width",       value: "57mm / 80mm / Custom (±0.5mm)" },
  { label: "Roll Diameter",     value: "40mm – 100mm (custom available)" },
  { label: "Core Inner Dia.",   value: "12mm / 25mm / Custom" },
  { label: "Paper Weight",      value: "48 g/m² / 55 g/m² / 65 g/m² / 80 g/m²" },
  { label: "Coating Type",      value: "BPA-Free (Phenol-Free available) / Standard" },
  { label: "Thermal Side",      value: "Single-sided (standard) / Double-sided (optional)" },
  { label: "Image Life",        value: "3 years (standard) / 7 years / 10 years (archival)" },
  { label: "Operating Temp.",   value: "-10°C to 70°C" },
  { label: "Humidity Range",    value: "20% – 85% RH" },
  { label: "Color",             value: "White (standard) / Colored base (custom)" },
  { label: "MOQ",               value: "1,000 rolls (samples: 50–100 rolls)" },
  { label: "Lead Time",         value: "7–15 business days (stock sizes: 3–5 days)" },
  { label: "Sample Lead Time",  value: "3–5 business days" },
  { label: "Payment Terms",     value: "T/T 30% deposit, 70% before shipment; L/C at sight" },
];

const packagingInfo = [
  { label: "Inner Packing",   value: "Polybag per roll (moisture-proof)" },
  { label: "Outer Carton",    value: "5-ply corrugated carton" },
  { label: "Rolls per Carton",value: "50 / 100 / 200 rolls (depending on size)" },
  { label: "Pallet",          value: "Standard wooden pallet, 80×120cm or custom" },
  { label: "Cartons / Pallet",value: "20–40 cartons (depending on roll size)" },
  { label: "Port",            value: "Shenzhen / Guangzhou / Shanghai" },
  { label: "Incoterms",       value: "EXW, FOB, CIF, DDP" },
  { label: "Shipping Methods",value: "Sea freight, Air freight, Express (DHL/FedEx/UPS)" },
];

const certifications = [
  { name: "ISO 9001:2015",  desc: "Quality management system certified. Every production batch undergoes incoming material inspection, in-process QC, and final outgoing inspection." },
  { name: "FSC Certified",  desc: "Forest Stewardship Council certified paper sourcing. Suitable for buyers requiring sustainable supply chain documentation." },
  { name: "BPA-Free",       desc: "All standard products use BPA-free thermal coating. Phenol-free (BPS-free) formulation available for EU and California markets." },
  { name: "RoHS / REACH",   desc: "Compliant with EU RoHS and REACH regulations. Full material declaration available upon request." },
  { name: "FDA Compliant",  desc: "Paper and coating materials comply with FDA 21 CFR requirements for incidental food contact." },
];

const faqs = [
  { q: "What is the minimum order quantity?", a: "Our standard MOQ is 1,000 rolls. For samples or trial orders, we accept 50–100 rolls. Please contact us to discuss your specific requirements." },
  { q: "Can you produce custom widths and lengths?", a: "Yes. We can manufacture any width from 25mm to 210mm, any roll length, and any core size. Custom specifications typically require 10–15 business days." },
  { q: "Do you offer BPA-free and phenol-free options?", a: "Yes. We offer standard BPA-free coating (suitable for most markets) and fully phenol-free (BPS-free) coating for the EU, California, and other regulated markets." },
  { q: "How do you ensure consistent print quality?", a: "Each production batch is tested for sensitivity, image density, and image life using calibrated thermal test equipment. We maintain ±2% tolerance on all roll dimensions." },
  { q: "What payment terms do you accept?", a: "We accept T/T (30% deposit, 70% before shipment), L/C at sight, and PayPal for sample orders. We can discuss flexible terms for long-term partners." },
  { q: "Can you provide private label packaging?", a: "Yes. We offer full OEM/private label service including custom carton printing, polybag printing, and branded core labels. MOQ for private label is 5,000 rolls." },
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
      "name": "Products",
      "item": "https://www.zhixinpaper.com/products"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Thermal Paper Rolls",
      "item": "https://www.zhixinpaper.com/products/thermal-paper-rolls"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Blank",
      "item": "https://www.zhixinpaper.com/products/thermal-paper-rolls/blank"
    }
  ]
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Blank Thermal Paper Rolls | BPA-Free POS Receipt Paper Manufacturer",
  "description": "Factory-direct blank thermal paper rolls. BPA-free, ISO 9001 certified, FSC certified. MOQ 1,000 rolls. 57mm, 80mm and custom sizes. 7–15 day lead time.",
  "brand": {
    "@type": "Brand",
    "name": "ZhixinPaper"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "ZhixinPaper",
    "url": "https://www.zhixinpaper.com"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "ZhixinPaper"
    }
  },
  "url": "https://www.zhixinpaper.com/products/thermal-paper-rolls/blank"
};
export default function BlankThermalRollsPage() {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200 py-3">
        <div className="container">
          <div className="text-sm text-slate-500">
            <Link href="/" className="hover:text-blue-600">Home</Link> <span className="mx-1">/</span>
            <Link href="/products" className="hover:text-blue-600">Products</Link> <span className="mx-1">/</span>
            <span className="text-slate-700 font-medium">Blank Thermal Paper Rolls</span>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="bg-blue-700 text-white py-2.5">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-1 text-sm font-medium">
            <span className="flex items-center gap-1.5"><Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" /> ISO 9001 Certified Factory Since 2009</span>
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> 12h Quote Response</span>
            <span className="flex items-center gap-1.5"><Truck className="w-3.5 h-3.5" /> Ships to 80+ Countries</span>
            <span className="flex items-center gap-1.5"><Package className="w-3.5 h-3.5" /> MOQ 1,000 Rolls</span>
          </div>
        </div>
      </div>

      <div className="container py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* ── LEFT CONTENT ── */}
          <div className="lg:col-span-2 space-y-12">

            {/* Hero */}
            <div className="flex flex-col sm:flex-row gap-6">
              <img src={ROLLS_IMG} alt="Blank Thermal Paper Rolls" className="w-full sm:w-72 h-52 object-cover rounded-2xl flex-shrink-0 shadow-md" />
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {["BPA-Free", "ISO 9001", "FSC Certified", "Phenol-Free Available"].map((tag) => (
                    <span key={tag} className="text-xs bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full font-medium">{tag}</span>
                  ))}
                </div>
                <h1 className="text-3xl font-extrabold text-slate-900 mb-3 leading-tight" style={{ fontFamily: "Sora, sans-serif" }}>Blank Thermal Paper Rolls</h1>
                <p className="text-slate-600 leading-relaxed mb-5">Factory-direct blank thermal paper rolls for POS systems, ATMs, kiosks, and receipt printers worldwide. High-sensitivity coating, consistent roll dimensions, and BPA-free formula. Available in all standard sizes and fully custom specifications — with OEM private label packaging.</p>

                {/* Quick stats */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { val: "1,000", unit: "Rolls MOQ" },
                    { val: "7–15", unit: "Day Lead Time" },
                    { val: "80+", unit: "Countries Served" },
                  ].map(({ val, unit }) => (
                    <div key={unit} className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
                      <div className="text-xl font-extrabold text-blue-700" style={{ fontFamily: "Sora, sans-serif" }}>{val}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{unit}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>Why Buyers Choose Us</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "High-sensitivity coating — sharp, clear prints every time",
                  "BPA-free & phenol-free options for regulated markets (EU, CA)",
                  "3 / 7 / 10-year image life grades available",
                  "Consistent ±0.5mm width tolerance, ±2% roll length tolerance",
                  "Compatible with Epson, Star, Bixolon, Citizen, and all major brands",
                  "FSC-certified paper — supports your sustainability reporting",
                  "Free pre-production sample before bulk order",
                  "Private label & OEM packaging available from 5,000 rolls",
                ].map((b) => (
                  <div key={b} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />{b}
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>Applications</h2>
              <div className="flex flex-wrap gap-2">
                {["POS Receipt Printers", "ATM Machines", "Parking Ticket Systems", "Restaurant Order Printers", "Retail Checkout", "Lottery Terminals", "Medical Equipment", "Industrial Label Printers", "Fuel Dispensers", "Kiosk Terminals"].map((app) => (
                  <span key={app} className="bg-blue-50 text-blue-700 border border-blue-100 text-sm px-4 py-2 rounded-lg font-medium">{app}</span>
                ))}
              </div>
            </div>

            {/* Full Specifications */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>Full Specifications</h2>
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <table className="w-full text-sm">
                  <tbody>
                    {specs.map(({ label, value }, i) => (
                      <tr key={label} className={i % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                        <td className="px-5 py-3 font-medium text-slate-600 w-44 whitespace-nowrap">{label}</td>
                        <td className="px-5 py-3 text-slate-900 font-semibold">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-400 mt-2">* Custom specifications available. Contact us for non-standard requirements.</p>
            </div>

            {/* Packaging & Shipping */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Truck className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-bold text-slate-900" style={{ fontFamily: "Sora, sans-serif" }}>Packaging & Shipping</h2>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <table className="w-full text-sm">
                  <tbody>
                    {packagingInfo.map(({ label, value }, i) => (
                      <tr key={label} className={i % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                        <td className="px-5 py-3 font-medium text-slate-600 w-44 whitespace-nowrap">{label}</td>
                        <td className="px-5 py-3 text-slate-900 font-semibold">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quality & Compliance */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-bold text-slate-900" style={{ fontFamily: "Sora, sans-serif" }}>Quality & Compliance</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map(({ name, desc }) => (
                  <div key={name} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <ShieldCheck className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="font-bold text-slate-900 text-sm" style={{ fontFamily: "Sora, sans-serif" }}>{name}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Sizes */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Ruler className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-bold text-slate-900" style={{ fontFamily: "Sora, sans-serif" }}>Popular Sizes</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {paperRollSizes.map((size) => (
                  <Link key={size.slug} href={`/products/thermal-rolls/${size.slug}`} className="group flex items-center justify-between p-4 bg-white border border-slate-200 hover:border-blue-400 hover:bg-blue-50 rounded-xl transition-all duration-200 shadow-sm">
                    <div>
                      <div className="font-semibold text-slate-800 group-hover:text-blue-700 text-sm" style={{ fontFamily: "Sora, sans-serif" }}>{size.label}</div>
                      {size.badge && <span className="text-[10px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">{size.badge}</span>}
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
              <p className="text-sm text-slate-500 mt-3">Need a non-standard size? <Link href="/contact" className="text-blue-600 hover:underline font-medium">Contact our OEM team →</Link></p>
            </div>

            {/* FAQ */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-bold text-slate-900" style={{ fontFamily: "Sora, sans-serif" }}>Frequently Asked Questions</h2>
              </div>
              <div className="space-y-3">
                {faqs.map(({ q, a }) => (
                  <div key={q} className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 text-sm" style={{ fontFamily: "Sora, sans-serif" }}>{q}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cross-links */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100">
              <Link href="/oem" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-semibold"><Package className="w-4 h-4" />OEM & Private Label Services →</Link>
              <Link href="/products/thermal-paper-rolls/custom-printed" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-semibold">Custom Printed Rolls →</Link>
              <Link href="/products/thermal-labels/blank" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-semibold">Blank Thermal Labels →</Link>
            </div>
          </div>

          {/* ── RIGHT SIDEBAR ── */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">

              {/* Primary CTA */}
              <div className="bg-white border-2 border-blue-600 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs text-green-600 font-semibold">Online — Responding within 12h</span>
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 mb-1" style={{ fontFamily: "Sora, sans-serif" }}>Get a Free Quote</h3>
                <p className="text-sm text-slate-500 mb-5">Tell us your size, quantity, and coating requirements. We'll send a detailed quote with unit price, MOQ, and lead time.</p>
                <InquiryForm compact />
              </div>

              {/* Sample CTA */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                <h4 className="font-bold text-slate-900 text-sm mb-1" style={{ fontFamily: "Sora, sans-serif" }}>Request Free Samples</h4>
                <p className="text-xs text-slate-600 mb-3">Get physical samples in 3–5 business days. Test print quality and image life before committing to a bulk order.</p>
                <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm text-amber-700 font-semibold hover:text-amber-900">
                  Request Samples <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Key order info */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <h4 className="font-bold text-slate-900 text-sm" style={{ fontFamily: "Sora, sans-serif" }}>Order at a Glance</h4>
                {[
                  { icon: Package, label: "MOQ", val: "1,000 rolls" },
                  { icon: Clock, label: "Lead Time", val: "7–15 days" },
                  { icon: Truck, label: "Incoterms", val: "EXW / FOB / CIF" },
                  { icon: ShieldCheck, label: "Payment", val: "T/T · L/C" },
                ].map(({ icon: Icon, label, val }) => (
                  <div key={label} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-slate-500">
                      <Icon className="w-4 h-4" />{label}
                    </div>
                    <span className="font-semibold text-slate-900">{val}</span>
                  </div>
                ))}
              </div>

              {/* Certifications quick list */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5">
                <h4 className="font-bold text-slate-900 text-sm mb-3" style={{ fontFamily: "Sora, sans-serif" }}>Certifications</h4>
                <div className="space-y-2">
                  {["ISO 9001:2015", "FSC Certified", "BPA-Free / Phenol-Free", "RoHS / REACH", "FDA Compliant"].map((cert) => (
                    <div key={cert} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />{cert}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
