import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/shared/InquiryForm";
import { CheckCircle, ArrowRight, Package, Ruler, ShieldCheck, Truck, Clock, Star, MessageSquare } from "lucide-react";
import { paperRollSizes } from "@/config/navigation";
import { SITE } from "@/config/siteData";
import { getSlotImage } from "@/lib/imageSlotUtils";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Receipt Paper Rolls & Cash Register Paper | Wholesale Manufacturer",
  description: "Bulk receipt paper rolls and cash register paper, factory direct. Thermal POS receipt rolls in 57mm (2¼\") and 80mm (3⅛\") sizes. BPA-free, ISO 9001. MOQ 1,000 rolls.",
  keywords: "receipt paper rolls, cash register paper, cash register paper rolls, thermal receipt paper roll, pos receipt paper, register paper, receipt printer paper rolls, thermal paper for cash register",
  alternates: { canonical: `${SITE.domain}/products/receipt-paper-rolls` },
};

const ROLLS_IMG_FALLBACK = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-rolls-RQBrphmgzbAMk7eq3HsvNq.webp";

const specs = [
  { label: "Common Widths",     value: "57mm (2¼\") / 80mm (3⅛\") / Custom (±0.5mm)" },
  { label: "Roll Diameter",     value: "30mm – 100mm (custom available)" },
  { label: "Paper Length",      value: "12m – 80m (e.g. 2¼\" × 50ft, 3⅛\" × 230ft)" },
  { label: "Core Inner Dia.",   value: "12mm / 25mm / Custom" },
  { label: "Paper Weight",      value: "48 g/m² / 55 g/m² / 65 g/m²" },
  { label: "Coating Type",      value: "BPA-Free (Phenol-Free available) / Standard" },
  { label: "Image Life",        value: "3 years (standard) / 5–7 years / 10 years (archival)" },
  { label: "Printer Type",      value: "Direct thermal — no ink, ribbon, or toner required" },
  { label: "Color",             value: "White (standard) / Colored base (custom)" },
  { label: "MOQ",               value: "1,000 rolls (samples: 50–100 rolls)" },
  { label: "Lead Time",         value: "7–15 business days (stock sizes: 3–5 days)" },
  { label: "Payment Terms",     value: "T/T 30% deposit, 70% before shipment; L/C at sight" },
];

const faqs = [
  { q: "Is receipt paper the same as cash register paper?", a: "Yes. Receipt paper rolls, cash register paper, and POS receipt paper all refer to the same product — thermal paper rolls used in cash registers, POS terminals, and receipt printers. They print using heat, so no ink or ribbon is needed." },
  { q: "What size cash register paper do I need?", a: "The two most common sizes are 80mm (3⅛ inch) wide for standard POS and cash registers, and 57mm (2¼ inch) wide for mobile, credit card, and compact terminals. Tell us your printer model and we'll confirm the exact roll size and length." },
  { q: "Do you sell receipt paper rolls in bulk / wholesale?", a: "Yes. We are a factory-direct manufacturer. Our MOQ is 1,000 rolls, with full-container pricing for distributors and wholesalers. We ship to 80+ countries on EXW, FOB, CIF, and DDP terms." },
  { q: "Are your receipt rolls BPA-free?", a: "Yes. All standard rolls use BPA-free thermal coating, and we offer fully phenol-free (BPS-free) coating for the EU, California, and other regulated markets." },
  { q: "Can you print our logo on the receipt rolls?", a: "Yes. We offer custom-printed receipt rolls with your logo, promotional message, or back-printed coupons. Custom printing MOQ starts at 5,000 rolls." },
  { q: "Can I get free samples before ordering?", a: "Yes. We provide free physical samples in 3–5 business days so you can test print quality and image life before placing a bulk order." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.zhixinpaper.com" },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.zhixinpaper.com/products" },
    { "@type": "ListItem", "position": 3, "name": "Receipt Paper Rolls", "item": "https://www.zhixinpaper.com/products/receipt-paper-rolls" },
  ],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Receipt Paper Rolls & Cash Register Paper | Thermal POS Receipt Rolls",
  "description": "Factory-direct receipt paper rolls and cash register paper. Thermal POS receipt rolls in 57mm (2¼\") and 80mm (3⅛\") sizes. BPA-free, ISO 9001 certified. MOQ 1,000 rolls.",
  "brand": { "@type": "Brand", "name": "ZhixinPaper" },
  "manufacturer": { "@type": "Organization", "name": "ZhixinPaper", "url": "https://www.zhixinpaper.com" },
  "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-rolls-RQBrphmgzbAMk7eq3HsvNq.webp",
  "url": "https://www.zhixinpaper.com/products/receipt-paper-rolls",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": { "@type": "Answer", "text": a },
  })),
};

export default async function ReceiptPaperRollsPage() {
  const ROLLS_IMG = await getSlotImage("thermal-paper-rolls:blank-hero", ROLLS_IMG_FALLBACK);
  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200 py-3">
        <div className="container">
          <div className="text-sm text-slate-500">
            <Link href="/" className="hover:text-blue-600">Home</Link> <span className="mx-1">/</span>
            <Link href="/products" className="hover:text-blue-600">Products</Link> <span className="mx-1">/</span>
            <span className="text-slate-700 font-medium">Receipt Paper Rolls</span>
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
              <Image src={ROLLS_IMG} alt="Receipt Paper Rolls & Cash Register Paper" className="w-full sm:w-72 h-52 object-cover rounded-2xl flex-shrink-0 shadow-md" width={288} height={208} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {["BPA-Free", "ISO 9001", "57mm & 80mm", "Factory Direct"].map((tag) => (
                    <span key={tag} className="text-xs bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full font-medium">{tag}</span>
                  ))}
                </div>
                <h1 className="font-sora text-3xl font-extrabold text-slate-900 mb-3 leading-tight">Receipt Paper Rolls &amp; Cash Register Paper</h1>
                <p className="text-slate-600 leading-relaxed mb-5">Factory-direct thermal receipt paper rolls for cash registers, POS terminals, and receipt printers worldwide. Also known as cash register paper or POS receipt paper, our rolls print sharp, long-lasting receipts with no ink or ribbon. Available in 57mm (2¼&Prime;), 80mm (3⅛&Prime;), and fully custom sizes — with BPA-free coating and OEM private label printing.</p>

                {/* Quick stats */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { val: "1,000", unit: "Rolls MOQ" },
                    { val: "7–15", unit: "Day Lead Time" },
                    { val: "80+", unit: "Countries Served" },
                  ].map(({ val, unit }) => (
                    <div key={unit} className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
                      <div className="font-sora text-xl font-extrabold text-blue-700">{val}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{unit}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div>
              <h2 className="font-sora text-xl font-bold text-slate-900 mb-4">Why Buyers Choose Our Receipt Rolls</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "High-sensitivity coating — sharp, clear receipts every time",
                  "BPA-free & phenol-free options for regulated markets (EU, CA)",
                  "Fits standard cash registers, POS terminals & receipt printers",
                  "Consistent ±0.5mm width tolerance, ±2% roll length tolerance",
                  "Compatible with Epson, Star, Bixolon, Citizen & all major brands",
                  "Both metric (57/80mm) and imperial (2¼\"/3⅛\") sizes supplied",
                  "Free pre-production sample before bulk order",
                  "Private label & custom back-printing available",
                ].map((b) => (
                  <div key={b} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />{b}
                  </div>
                ))}
              </div>
            </div>

            {/* Common Sizes */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Ruler className="w-5 h-5 text-blue-600" />
                <h2 className="font-sora text-xl font-bold text-slate-900">Common Receipt &amp; Cash Register Paper Sizes</h2>
              </div>
              <p className="text-sm text-slate-600 mb-4">The most requested cash register paper sizes are <strong>80mm (3⅛ inch)</strong> for standard POS and <strong>57mm (2¼ inch)</strong> for mobile and card terminals. Browse all stock sizes below.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {paperRollSizes.map((size) => (
                  <Link key={size.slug} href={`/products/thermal-rolls/${size.slug}`} className="group flex items-center justify-between p-4 bg-white border border-slate-200 hover:border-blue-400 hover:bg-blue-50 rounded-xl transition-all duration-200 shadow-sm">
                    <div>
                      <div className="font-sora font-semibold text-slate-800 group-hover:text-blue-700 text-sm">{size.label}</div>
                      {size.badge && <span className="text-[10px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">{size.badge}</span>}
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
              <p className="text-sm text-slate-500 mt-3">Need a non-standard size? <Link href="/contact" className="text-blue-600 hover:underline font-medium">Contact our OEM team →</Link></p>
            </div>

            {/* Applications */}
            <div>
              <h2 className="font-sora text-xl font-bold text-slate-900 mb-4">Applications</h2>
              <div className="flex flex-wrap gap-2">
                {["Cash Registers", "POS Terminals", "Retail Checkout", "Restaurant Order Printers", "Supermarkets", "Credit Card Terminals", "Mobile / Handheld Printers", "Parking & Kiosk Systems", "Taxi Meters", "Lottery Terminals"].map((app) => (
                  <span key={app} className="bg-blue-50 text-blue-700 border border-blue-100 text-sm px-4 py-2 rounded-lg font-medium">{app}</span>
                ))}
              </div>
            </div>

            {/* Full Specifications */}
            <div>
              <h2 className="font-sora text-xl font-bold text-slate-900 mb-4">Specifications</h2>
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

            {/* FAQ */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-5 h-5 text-blue-600" />
                <h2 className="font-sora text-xl font-bold text-slate-900">Frequently Asked Questions</h2>
              </div>
              <div className="space-y-3">
                {faqs.map(({ q, a }) => (
                  <div key={q} className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                    <h3 className="font-sora font-semibold text-slate-900 mb-2 text-sm">{q}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cross-links */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100">
              <Link href="/products/thermal-paper-rolls/blank" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-semibold"><Package className="w-4 h-4" />Blank Thermal Paper Rolls →</Link>
              <Link href="/products/thermal-paper-rolls/custom-printed" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-semibold">Custom Printed Rolls →</Link>
              <Link href="/oem" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-semibold">OEM &amp; Private Label →</Link>
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
                <h3 className="font-sora text-lg font-extrabold text-slate-900 mb-1">Get a Free Quote</h3>
                <p className="text-sm text-slate-500 mb-5">Tell us your size, quantity, and coating requirements. We&apos;ll send a detailed quote with unit price, MOQ, and lead time.</p>
                <InquiryForm compact />
              </div>

              {/* Sample CTA */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                <h4 className="font-sora font-bold text-slate-900 text-sm mb-1">Request Free Samples</h4>
                <p className="text-xs text-slate-600 mb-3">Get physical samples in 3–5 business days. Test print quality and image life before committing to a bulk order.</p>
                <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm text-amber-700 font-semibold hover:text-amber-900">
                  Request Samples <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Key order info */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <h4 className="font-sora font-bold text-slate-900 text-sm">Order at a Glance</h4>
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
                <h4 className="font-sora font-bold text-slate-900 text-sm mb-3">Certifications</h4>
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
