import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/shared/InquiryForm";
import { CheckCircle, ArrowRight, Package, Printer, ShieldCheck, Truck, Clock, Star, MessageSquare, Layers, Zap } from "lucide-react";
import { paperRollSizes } from "@/config/navigation";
import { SITE } from "@/config/siteData";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Custom Printed Thermal Rolls | OEM Branding",
  description: "Custom printed thermal paper rolls with your logo, brand colors, QR codes, and promotional messages.",
  keywords: [
    "custom printed thermal paper rolls",
    "branded thermal receipt paper",
    "thermal paper rolls with logo",
    "thermal paper logo printing OEM",
    "custom thermal receipt paper manufacturer China",
    "POS receipt paper custom print factory direct",
    "thermal paper rolls Africa logo printing",
    "thermal paper rolls Middle East custom print",
    "TRA thermal paper Tanzania custom print",
    "custom thermal paper rolls MOQ 1000",
    "private label thermal paper rolls",
    "flexographic thermal paper printing",
    "custom printed POS rolls wholesale",
    "branded receipt paper supplier",
    "thermal paper QR code printing",
  ].join(", "),
  alternates: { canonical: `${SITE.domain}/products/thermal-paper-rolls/custom-printed` },
  openGraph: {
    title: "Custom Printed Thermal Paper Rolls",
    description: "Turn every receipt into a brand touchpoint. Custom logo, QR codes, promotional messages on thermal paper rolls. MOQ 1,000 rolls. Free proof.",
    images: [{ url: `${SITE.domain}/og-default.png`, width: 1200, height: 630, alt: "ZhixinPaper Custom Printed Thermal Paper Rolls" }],
  },
};

const ROLLS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-rolls-RQBrphmgzbAMk7eq3HsvNq.webp";

const printingSpecs = [
  { label: "Print Method",       value: "Flexographic printing (up to 4 colors)" },
  { label: "Print Side",         value: "Thermal side / Reverse side / Both sides" },
  { label: "Color Matching",     value: "Pantone / CMYK / RAL (±ΔE 2.0)" },
  { label: "Print Area",         value: "Full width or partial (custom layout)" },
  { label: "Repeat Pattern",     value: "Every receipt / Every N cm (custom interval)" },
  { label: "Variable Data",      value: "Static design (standard) / Variable QR/barcode (digital)" },
  { label: "Ink Type",           value: "Water-based (food-safe) / UV-cured" },
  { label: "Design File Format", value: "AI / PDF / EPS / CDR (300 dpi minimum)" },
  { label: "Proof",              value: "Free digital proof + physical sample before production" },
];

const productSpecs = [
  { label: "Paper Width",       value: "57mm / 80mm / Custom (±0.5mm)" },
  { label: "Roll Diameter",     value: "40mm – 100mm (custom available)" },
  { label: "Core Inner Dia.",   value: "12mm / 25mm / Custom" },
  { label: "Paper Weight",      value: "48 g/m² / 55 g/m² / 65 g/m² / 80 g/m²" },
  { label: "Coating",           value: "BPA-Free (standard) / Phenol-Free (EU/CA)" },
  { label: "Image Life",        value: "3 / 7 / 10 years (grade selectable)" },
  { label: "MOQ",               value: "1,000 rolls (5,000 rolls for private label packaging)" },
  { label: "Lead Time",         value: "10–18 business days (includes proof approval)" },
  { label: "Sample Lead Time",  value: "5–7 business days" },
  { label: "Payment Terms",     value: "T/T 30% deposit, 70% before shipment; L/C at sight" },
];

const packagingInfo = [
  { label: "Inner Packing",    value: "Polybag per roll (moisture-proof, custom print available)" },
  { label: "Outer Carton",     value: "5-ply corrugated carton (custom print available)" },
  { label: "Rolls per Carton", value: "50 / 100 / 200 rolls (depending on size)" },
  { label: "Port",             value: "Shenzhen / Guangzhou / Shanghai" },
  { label: "Incoterms",        value: "EXW, FOB, CIF, DDP" },
  { label: "Shipping",         value: "Sea freight, Air freight, Express (DHL/FedEx/UPS)" },
];

const printingOptions = [
  { title: "Logo & Branding",       icon: "🏷️", desc: "Print your company logo, tagline, and brand colors on every roll. Ideal for distributors and retailers wanting brand consistency at every customer touchpoint." },
  { title: "Promotional Messages",  icon: "📣", desc: "Coupons, discount codes, social media handles, or website URLs printed on every receipt. Proven to increase repeat visits and online engagement." },
  { title: "QR Codes",              icon: "📱", desc: "Static or variable QR codes for loyalty programs, product authentication, digital receipts, or survey links. Variable data printing available." },
  { title: "Security Features",     icon: "🔒", desc: "Watermarks, void patterns, sequential serial numbers, or UV-reactive inks for anti-counterfeiting, ticketing, and secure document applications." },
  { title: "Regulatory Compliance", icon: "📋", desc: "Pre-printed legal disclaimers, terms of service, or regulatory text required for specific industries (pharmacy, fuel, parking)." },
  { title: "Custom Back Print",     icon: "🖨️", desc: "Print on the reverse (non-thermal) side for additional branding, maps, instructions, or advertising without affecting print quality on the thermal side." },
];

const orderSteps = [
  { step: "01", title: "Submit Requirements", desc: "Send us your size, quantity, colors, and artwork via WhatsApp or inquiry form. Response within 12 hours." },
  { step: "02", title: "Free Digital Proof", desc: "Our design team prepares a digital proof within 24 hours. Pantone / CMYK color matching confirmed." },
  { step: "03", title: "Approve & Deposit", desc: "Approve the proof and pay 30% T/T deposit. Physical printed sample available on request (5–7 days)." },
  { step: "04", title: "Production", desc: "Full production starts after proof approval. 10–18 business days for custom printed orders." },
  { step: "05", title: "QC & Shipment", desc: "Pre-shipment inspection report provided. CIF delivery to Jebel Ali, Lagos, Mombasa, Bangkok and more." },
];

const geoApplications = [
  {
    region: "🌍 Africa",
    badge: "Nigeria · Kenya · Tanzania · Ghana",
    items: [
      "TRA-compliant pre-printed tax receipt rolls (Tanzania)",
      "FIRS-compliant receipt rolls with ETR logo (Nigeria)",
      "M-Pesa / MTN MoMo payment confirmation receipts",
      "Supermarket & retail chain branded receipts",
      "Fuel station receipt rolls with station logo",
    ],
  },
  {
    region: "🌙 Middle East",
    badge: "UAE · Saudi Arabia · Egypt · Turkey",
    items: [
      "ZATCA e-invoicing QR code printed rolls (Saudi Arabia)",
      "VAT-compliant receipt rolls with TRN number",
      "Arabic + English bilingual receipt printing",
      "Hotel & hospitality branded receipt rolls",
      "Pharmacy receipt rolls with regulatory text",
    ],
  },
  {
    region: "🌏 Southeast Asia",
    badge: "Thailand · Indonesia · Vietnam · Philippines",
    items: [
      "PromptPay QR code printed rolls (Thailand)",
      "QRIS payment receipt rolls (Indonesia)",
      "Convenience store chain branded rolls (7-Eleven, FamilyMart)",
      "Restaurant POS receipt rolls with menu QR code",
      "Loyalty program stamp / points printing",
    ],
  },
];

const faqs = [
  { q: "What is the minimum order for custom printed rolls?", a: "Our MOQ for custom printed rolls is 1,000 rolls. For private label packaging (custom carton + polybag printing), the MOQ is 5,000 rolls. We can discuss lower quantities for samples." },
  { q: "Do you provide a design proof before production?", a: "Yes. We provide a free digital proof within 24 hours of receiving your artwork. We also offer physical printed samples (5–7 business days) before committing to full production." },
  { q: "What file formats do you accept for artwork?", a: "We accept AI, PDF, EPS, and CDR files at 300 dpi minimum. If you don't have print-ready artwork, our design team can create or adapt your logo for an additional fee." },
  { q: "Can you match our exact brand colors?", a: "Yes. We offer Pantone, CMYK, and RAL color matching with a tolerance of ±ΔE 2.0. We recommend providing Pantone codes for the most accurate color reproduction." },
  { q: "How long does production take?", a: "Custom printed orders typically take 10–18 business days, which includes proof approval, plate preparation, and production. Rush orders (7–10 days) are available for an additional fee." },
  { q: "Can I order custom packaging as well?", a: "Yes. We offer full OEM/private label service including custom carton printing, polybag printing, and branded core labels. This is included in our private label package (MOQ 5,000 rolls)." },
  { q: "Do you support TRA-compliant printing for Tanzania?", a: "Yes. We supply TRA-logo pre-printed thermal rolls that comply with Tanzania Revenue Authority requirements. We can also add your company name and TPIN number to the roll design." },
  { q: "Can you print Arabic text on thermal rolls?", a: "Yes. We support Arabic, English, French, and other languages on thermal rolls. For Middle East markets, we offer bilingual Arabic + English receipt layouts." },
];

// FAQPage JSON-LD structured data
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": a,
    },
  })),
};

// Product JSON-LD structured data
const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Custom Printed Thermal Paper Rolls",
  "description": "Custom printed thermal paper rolls with logo, brand colors, QR codes, and promotional messages. OEM private label manufacturing. MOQ 1,000 rolls.",
  "brand": { "@type": "Brand", "name": "ZhixinPaper" },
  "manufacturer": { "@type": "Organization", "name": "ZhixinPaper", "url": SITE.domain },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "seller": { "@type": "Organization", "name": "ZhixinPaper" },
  },
};


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
      "name": "Custom Printed",
      "item": "https://www.zhixinpaper.com/products/thermal-paper-rolls/custom-printed"
    }
  ]
};
export default function CustomPrintedRollsPage() {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />

      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200 py-3">
        <div className="container">
          <div className="text-sm text-slate-500">
            <Link href="/" className="hover:text-blue-600">Home</Link> <span className="mx-1">/</span>
            <Link href="/products" className="hover:text-blue-600">Products</Link> <span className="mx-1">/</span>
            <span className="text-slate-700 font-medium">Custom Printed Thermal Rolls</span>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="bg-amber-600 text-white py-2.5">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-1 text-sm font-medium">
            <span className="flex items-center gap-1.5"><Star className="w-3.5 h-3.5 fill-white text-white" /> Free Design Proof Included</span>
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> 10–18 Day Lead Time</span>
            <span className="flex items-center gap-1.5"><Printer className="w-3.5 h-3.5" /> Up to 4-Color Flexo Print</span>
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
              <Image src={ROLLS_IMG} alt="Custom Printed Thermal Paper Rolls with Logo" className="w-full sm:w-72 h-52 object-cover rounded-2xl flex-shrink-0 shadow-md"  width={288} height={208} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {["Custom Logo", "Pantone Matching", "QR Code", "OEM / Private Label", "Africa & Middle East"].map((tag) => (
                    <span key={tag} className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded-full font-medium">{tag}</span>
                  ))}
                </div>
                <h1 className="font-sora text-3xl font-extrabold text-slate-900 mb-3 leading-tight">Custom Printed Thermal Paper Rolls</h1>
                <p className="text-slate-600 leading-relaxed mb-5">Turn every receipt into a brand touchpoint. We print your logo, colors, promotional messages, or QR codes directly on thermal paper rolls using high-precision flexographic printing. Available in all standard sizes with OEM private label packaging — free design proof included with every order. Trusted by distributors across Africa, the Middle East, and Southeast Asia.</p>

                {/* Quick stats */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { val: "1,000", unit: "Rolls MOQ" },
                    { val: "10–18", unit: "Day Lead Time" },
                    { val: "4-Color", unit: "Flexo Print" },
                  ].map(({ val, unit }) => (
                    <div key={unit} className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
                      <div className="font-sora text-xl font-extrabold text-amber-600">{val}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{unit}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Printing Options */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Layers className="w-5 h-5 text-amber-600" />
                <h2 className="font-sora text-xl font-bold text-slate-900">What We Can Print</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {printingOptions.map(({ title, icon, desc }) => (
                  <div key={title} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-amber-300 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">{icon}</span>
                      <span className="font-sora font-bold text-slate-900 text-sm">{title}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Process */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Zap className="w-5 h-5 text-amber-600" />
                <h2 className="font-sora text-xl font-bold text-slate-900">How to Order Custom Printed Rolls</h2>
              </div>
              <div className="relative">
                <div className="hidden sm:block absolute left-[28px] top-8 bottom-8 w-0.5 bg-amber-200" />
                <div className="space-y-4">
                  {orderSteps.map(({ step, title, desc }) => (
                    <div key={step} className="flex gap-4 items-start">
                      <div className="font-sora relative z-10 flex-shrink-0 w-14 h-14 rounded-full bg-amber-600 text-white flex items-center justify-center font-extrabold text-sm shadow-md">{step}</div>
                      <div className="flex-1 bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                        <div className="font-sora font-bold text-slate-900 text-sm mb-1">{title}</div>
                        <p className="text-xs text-slate-600 leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* GEO Applications */}
            <div>
              <h2 className="font-sora text-xl font-bold text-slate-900 mb-5">Regional Applications & Compliance</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {geoApplications.map(({ region, badge, items }) => (
                  <div key={region} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                    <div className="font-sora font-bold text-slate-900 text-sm mb-1">{region}</div>
                    <div className="text-[10px] text-amber-700 bg-amber-50 border border-amber-100 rounded-full px-2 py-0.5 inline-block mb-3">{badge}</div>
                    <ul className="space-y-1.5">
                      {items.map((item) => (
                        <li key={item} className="flex items-start gap-1.5 text-xs text-slate-600">
                          <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Benefits */}
            <div>
              <h2 className="font-sora text-xl font-bold text-slate-900 mb-4">Why Buyers Choose Custom Printing</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Brand every customer touchpoint with your logo",
                  "Increase repeat business with promotional printing",
                  "No setup fee for orders above 5,000 rolls",
                  "Pantone color matching — ±ΔE 2.0 tolerance",
                  "Free digital proof + physical sample before production",
                  "BPA-free printing inks — safe for food service",
                  "Variable data printing (QR codes, serial numbers)",
                  "Full OEM private label packaging available",
                  "TRA / ZATCA / FIRS compliance printing supported",
                  "Arabic, English, French multilingual layouts",
                ].map((b) => (
                  <div key={b} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />{b}
                  </div>
                ))}
              </div>
            </div>

            {/* Printing Specifications */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Printer className="w-5 h-5 text-amber-600" />
                <h2 className="font-sora text-xl font-bold text-slate-900">Printing Specifications</h2>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <table className="w-full text-sm">
                  <tbody>
                    {printingSpecs.map(({ label, value }, i) => (
                      <tr key={label} className={i % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                        <td className="px-5 py-3 font-medium text-slate-600 w-44 whitespace-nowrap">{label}</td>
                        <td className="px-5 py-3 text-slate-900 font-semibold">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Product Specifications */}
            <div>
              <h2 className="font-sora text-xl font-bold text-slate-900 mb-4">Paper Specifications</h2>
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <table className="w-full text-sm">
                  <tbody>
                    {productSpecs.map(({ label, value }, i) => (
                      <tr key={label} className={i % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                        <td className="px-5 py-3 font-medium text-slate-600 w-44 whitespace-nowrap">{label}</td>
                        <td className="px-5 py-3 text-slate-900 font-semibold">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Packaging & Shipping */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Truck className="w-5 h-5 text-amber-600" />
                <h2 className="font-sora text-xl font-bold text-slate-900">Packaging & Shipping</h2>
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

            {/* Available Sizes */}
            <div>
              <h2 className="font-sora text-xl font-bold text-slate-900 mb-4">Available Sizes</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {paperRollSizes.map((size) => (
                  <Link key={size.slug} href={`/products/thermal-rolls/${size.slug}`} className="group flex items-center justify-between p-4 bg-white border border-slate-200 hover:border-amber-400 hover:bg-amber-50 rounded-xl transition-all duration-200 shadow-sm">
                    <div>
                      <div className="font-sora font-semibold text-slate-800 group-hover:text-amber-700 text-sm">{size.label}</div>
                      {size.badge && <span className="text-[10px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">{size.badge}</span>}
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
              <p className="text-sm text-slate-500 mt-3">Need a non-standard size? <Link href="/contact" className="text-amber-600 hover:underline font-medium">Contact our OEM team →</Link></p>
            </div>

            {/* FAQ */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-5 h-5 text-amber-600" />
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
              <Link href="/oem/custom-printing" className="inline-flex items-center gap-2 text-sm text-amber-600 hover:text-amber-800 font-semibold"><Printer className="w-4 h-4" />Full OEM Printing Details →</Link>
              <Link href="/products/thermal-paper-rolls/blank" className="inline-flex items-center gap-2 text-sm text-amber-600 hover:text-amber-800 font-semibold">Blank Thermal Rolls →</Link>
              <Link href="/products/thermal-labels/custom-printed" className="inline-flex items-center gap-2 text-sm text-amber-600 hover:text-amber-800 font-semibold">Custom Printed Labels →</Link>
              <Link href="/markets/africa" className="inline-flex items-center gap-2 text-sm text-amber-600 hover:text-amber-800 font-semibold">Africa Market →</Link>
              <Link href="/markets/middle-east" className="inline-flex items-center gap-2 text-sm text-amber-600 hover:text-amber-800 font-semibold">Middle East Market →</Link>
            </div>
          </div>

          {/* ── RIGHT SIDEBAR ── */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">

              {/* Primary CTA */}
              <div className="bg-white border-2 border-amber-500 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs text-green-600 font-semibold">Online — Responding within 12h</span>
                </div>
                <h3 className="font-sora text-lg font-extrabold text-slate-900 mb-1">Request Custom Quote</h3>
                <p className="text-sm text-slate-500 mb-5">Describe your printing requirements — size, quantity, colors, and artwork. We'll send a quote with unit price and a free design proof.</p>
                <InquiryForm compact />
              </div>

              {/* Sample CTA */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                <h4 className="font-sora font-bold text-slate-900 text-sm mb-1">Free Printed Sample</h4>
                <p className="text-xs text-slate-600 mb-3">Get a printed sample with your logo in 5–7 business days. Verify color accuracy and print quality before bulk production.</p>
                <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm text-amber-700 font-semibold hover:text-amber-900">
                  Request Sample <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Key order info */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <h4 className="font-sora font-bold text-slate-900 text-sm">Order at a Glance</h4>
                {[
                  { icon: Package, label: "MOQ", val: "1,000 rolls" },
                  { icon: Clock, label: "Lead Time", val: "10–18 days" },
                  { icon: Printer, label: "Print Colors", val: "Up to 4 colors" },
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
                  {["ISO 9001:2015", "FSC Certified", "BPA-Free Inks", "RoHS / REACH", "FDA Compliant"].map((cert) => (
                    <div key={cert} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />{cert}
                    </div>
                  ))}
                </div>
              </div>

              {/* Regional compliance badge */}
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
                <h4 className="font-sora font-bold text-slate-900 text-sm mb-3">Regional Compliance</h4>
                <div className="space-y-2">
                  {["TRA (Tanzania)", "ZATCA (Saudi Arabia)", "FIRS (Nigeria)", "VAT-compliant (UAE/Egypt)", "Arabic bilingual printing"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />{item}
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
