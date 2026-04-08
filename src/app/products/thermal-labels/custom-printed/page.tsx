import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/shared/InquiryForm";
import { CheckCircle, ArrowRight, Package, Ruler, ShieldCheck, Truck, Clock, Star, MessageSquare, Thermometer, Snowflake, Layers, Printer } from "lucide-react";
import { labelSizes } from "@/config/navigation";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: "Custom Printed Thermal Labels | OEM Labels",
  description: "Custom printed thermal labels with your logo, barcode, and brand. Choose from permanent, removable, high-temperature (up to 180°C), or cryogenic (–196°C).",
  alternates: { canonical: `${SITE.domain}/products/thermal-labels/custom-printed` },
};

const LABELS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-labels-FgJ5U8LZDHPF5nwmD6Uqa5.webp";

const adhesiveTypes = [
  {
    icon: <Layers className="w-6 h-6 text-amber-600" />,
    name: "Permanent Adhesive",
    temp: "–20°C to 80°C",
    peel: "High (≥800 g/25mm)",
    best: "Shipping labels, retail price tags, inventory barcodes, product labels",
    desc: "Standard acrylic permanent adhesive. Bonds firmly to cardboard, plastic, glass, and metal. The most cost-effective option for high-volume shipping, warehouse, and retail labeling. Pre-printed with your logo, barcode, or brand colors.",
    tags: ["Shipping Labels", "Retail Price Tags", "Inventory Barcodes", "Product Labels"],
  },
  {
    icon: <ArrowRight className="w-6 h-6 text-green-600" />,
    name: "Removable Adhesive",
    temp: "–10°C to 60°C",
    peel: "Low–Medium (200–400 g/25mm)",
    best: "Temporary promotions, rental equipment, library labels, fresh produce stickers",
    desc: "Low-tack adhesive that peels off cleanly without residue on most surfaces. Ideal for promotional labels, temporary price markdowns, and any application where the label must be removed without damaging the substrate. Pre-printed with your brand or promotional design.",
    tags: ["Promotional Labels", "Temporary Price Tags", "Rental Equipment", "Fresh Produce", "Library Labels"],
  },
  {
    icon: <Thermometer className="w-6 h-6 text-red-500" />,
    name: "High-Temperature Adhesive",
    temp: "Up to 150°C (short-term: 180°C)",
    peel: "Very High (≥1,200 g/25mm)",
    best: "Automotive parts tracking, PCB assembly, powder-coating, sterilization trays",
    desc: "Silicone-based or high-performance acrylic adhesive that maintains bond strength through oven curing, powder-coating, and autoclave sterilization. Pre-printed labels survive the entire manufacturing process — from assembly through finishing — without peeling or fading. Essential for automotive, electronics, and medical device manufacturing.",
    tags: ["Automotive Parts", "PCB / Electronics", "Powder Coating", "Autoclave Sterilization", "Aerospace Components"],
  },
  {
    icon: <Snowflake className="w-6 h-6 text-blue-500" />,
    name: "Low-Temperature / Freezer Adhesive",
    temp: "–196°C to 40°C (cryogenic available)",
    peel: "High (≥900 g/25mm at –40°C)",
    best: "Frozen food packaging, cold chain logistics, pharmaceutical cold storage, lab sample tubes",
    desc: "Rubber-based or acrylic adhesive that maintains strong adhesion through the entire cold chain. Labels can be applied at temperatures as low as –10°C and remain securely bonded at –40°C. Cryogenic-grade variants (liquid nitrogen, –196°C) available for laboratory and biomedical sample storage. Pre-printed with your brand, barcode, or regulatory information.",
    tags: ["Frozen Food Labels", "Cold Chain Logistics", "Pharmaceutical Storage", "Lab Sample Tubes", "Cryogenic Vials"],
  },
];

const printingCapabilities = [
  { title: "Flexographic Printing",  icon: "🖨️", desc: "Up to 4 colors with water-based or UV-cured inks. Consistent color reproduction across high-volume runs. Pantone / CMYK / RAL color matching (±ΔE 2.0)." },
  { title: "Variable Data Printing", icon: "🔢", desc: "Sequential barcodes, serial numbers, QR codes, or lot numbers printed inline. Supports Code 128, QR, Data Matrix, GS1-128, and all major barcode symbologies." },
  { title: "Regulatory Compliance",  icon: "📋", desc: "GHS/SDS hazard labels, FDA nutrition facts, EU CE marking, Prop 65 warnings, and other regulatory formats. Pre-formatted templates available." },
  { title: "Security Printing",      icon: "🔒", desc: "Void patterns, tamper-evident features, UV-reactive inks, and holographic overlaminates for anti-counterfeiting and authentication applications." },
  { title: "Back Print",             icon: "🔄", desc: "Print on the reverse (non-thermal) side for additional branding, instructions, maps, or advertising without affecting thermal print quality." },
  { title: "Overlaminate Options",   icon: "✨", desc: "Gloss, matte, or soft-touch overlaminate for enhanced durability, scratch resistance, and premium appearance on high-end product labels." },
];

const printingSpecs = [
  { label: "Print Method",        value: "Flexographic (up to 4 colors)" },
  { label: "Print Side",          value: "Thermal side / Reverse side / Both sides" },
  { label: "Color Matching",      value: "Pantone / CMYK / RAL (±ΔE 2.0)" },
  { label: "Ink Type",            value: "Water-based (food-safe) / UV-cured" },
  { label: "Variable Data",       value: "Static design / Variable QR / Sequential barcode" },
  { label: "Design File Format",  value: "AI / PDF / EPS / CDR (300 dpi minimum)" },
  { label: "Proof",               value: "Free digital proof + physical sample before production" },
];

const productSpecs = [
  { label: "Face Material",       value: "Direct thermal paper / PP / PE / PET (synthetic)" },
  { label: "Label Width",         value: "25mm – 210mm (custom ±0.5mm)" },
  { label: "Label Length",        value: "10mm – 300mm (custom)" },
  { label: "Adhesive Options",    value: "Permanent / Removable / High-Temp / Low-Temp / Cryogenic" },
  { label: "Liner",               value: "White glassine / Yellow glassine / PET liner" },
  { label: "Optical Density",     value: "OD ≥ 1.2 (standard) / OD ≥ 1.4 (high-density)" },
  { label: "MOQ",                 value: "1,000 rolls (private label packaging: 5,000 rolls)" },
  { label: "Lead Time",           value: "15–20 business days (includes proof approval)" },
  { label: "Sample Lead Time",    value: "5–7 business days" },
  { label: "Payment Terms",       value: "T/T 30% deposit, 70% before shipment; L/C at sight" },
];

const packagingInfo = [
  { label: "Inner Packing",    value: "Polybag per roll (custom print available)" },
  { label: "Outer Carton",     value: "5-ply corrugated carton (custom print available)" },
  { label: "Rolls per Carton", value: "12 / 24 / 36 rolls (depending on size)" },
  { label: "Port",             value: "Shenzhen / Guangzhou / Shanghai" },
  { label: "Incoterms",        value: "EXW, FOB, CIF, DDP" },
  { label: "Shipping",         value: "Sea freight, Air freight, Express (DHL/FedEx/UPS)" },
];

const faqs = [
  { q: "Can I choose a different adhesive for my custom printed labels?", a: "Yes. All four adhesive grades — permanent, removable, high-temperature (up to 180°C), and freezer/cryogenic (down to –196°C) — are available with custom printing. Simply specify your adhesive requirement when requesting a quote." },
  { q: "What is the minimum order for custom printed labels?", a: "Our MOQ for custom printed labels is 1,000 rolls. For private label packaging (custom carton + polybag printing), the MOQ is 5,000 rolls. We can discuss lower quantities for samples." },
  { q: "Do you provide a design proof before production?", a: "Yes. We provide a free digital proof within 24 hours of receiving your artwork. Physical printed samples (5–7 business days) are also available before committing to full production." },
  { q: "Can high-temperature labels survive powder-coating ovens?", a: "Yes. Our high-temperature adhesive grade maintains bond strength up to 150°C continuously (short-term: 180°C), which covers most powder-coating oven temperatures. The label face and print also remain intact through the process. Please specify your oven temperature and dwell time when requesting samples." },
  { q: "Are freezer labels suitable for cryogenic storage?", a: "Our standard freezer adhesive works down to –40°C. For liquid nitrogen (–196°C) and ultra-low temperature freezer applications, we offer a specialized cryogenic adhesive grade. Please specify your storage temperature when requesting a quote." },
  { q: "What file formats do you accept for artwork?", a: "We accept AI, PDF, EPS, and CDR files at 300 dpi minimum. If you don't have print-ready artwork, our design team can create or adapt your logo for an additional fee." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: {
      "@type": "Answer",
      text: a,
    },
  })),
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
      "name": "Thermal Labels",
      "item": "https://www.zhixinpaper.com/products/thermal-labels"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Custom Printed",
      "item": "https://www.zhixinpaper.com/products/thermal-labels/custom-printed"
    }
  ]
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Custom Printed Thermal Labels | High-Temp, Removable & Freezer Adhesive",
  "description": "Custom printed thermal labels with your logo, barcode, and brand. Choose from permanent, removable, high-temperature (up to 180°C), or cryogenic (–196°C).",
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
  "url": "https://www.zhixinpaper.com/products/thermal-labels/custom-printed"
};
export default function CustomPrintedLabelsPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200 py-3">
        <div className="container">
          <div className="text-sm text-slate-500">
            <Link href="/" className="hover:text-blue-600">Home</Link> <span className="mx-1">/</span>
            <Link href="/products" className="hover:text-blue-600">Products</Link> <span className="mx-1">/</span>
            <span className="text-slate-700 font-medium">Custom Printed Thermal Labels</span>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="bg-amber-600 text-white py-2.5">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-1 text-sm font-medium">
            <span className="flex items-center gap-1.5"><Star className="w-3.5 h-3.5 fill-white text-white" /> Free Design Proof Included</span>
            <span className="flex items-center gap-1.5"><Thermometer className="w-3.5 h-3.5" /> –196°C to 180°C Adhesive Range</span>
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
              <img src={LABELS_IMG} alt="Custom Printed Thermal Labels" className="w-full sm:w-72 h-52 object-cover rounded-2xl flex-shrink-0 shadow-md" />
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {["Custom Logo", "Pantone Matching", "4 Adhesive Grades", "OEM / Private Label"].map((tag) => (
                    <span key={tag} className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded-full font-medium">{tag}</span>
                  ))}
                </div>
                <h1 className="text-3xl font-extrabold text-slate-900 mb-3 leading-tight" style={{ fontFamily: "Sora, sans-serif" }}>Custom Printed Thermal Labels</h1>
                <p className="text-slate-600 leading-relaxed mb-5">Pre-printed thermal labels with your brand, logo, barcode, or regulatory data — combined with the adhesive grade that matches your application environment. From standard shipping labels to high-temperature automotive tags and cryogenic lab vial labels, we manufacture to your exact specification with a free design proof included.</p>

                {/* Quick stats */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { val: "4", unit: "Adhesive Grades" },
                    { val: "15–20", unit: "Day Lead Time" },
                    { val: "4-Color", unit: "Flexo Print" },
                  ].map(({ val, unit }) => (
                    <div key={unit} className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
                      <div className="text-xl font-extrabold text-amber-600" style={{ fontFamily: "Sora, sans-serif" }}>{val}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{unit}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Adhesive Types */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2" style={{ fontFamily: "Sora, sans-serif" }}>Adhesive Types</h2>
              <p className="text-sm text-slate-500 mb-5">All adhesive grades are available with custom printing. Select the grade that matches your application environment — we'll print your design on top.</p>
              <div className="space-y-4">
                {adhesiveTypes.map(({ icon, name, temp, peel, best, desc, tags }) => (
                  <div key={name} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-amber-300 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-200">{icon}</div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-slate-900 text-base mb-1" style={{ fontFamily: "Sora, sans-serif" }}>{name}</h3>
                        <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-slate-500 mb-3">
                          <span><span className="font-semibold text-slate-700">Temp Range:</span> {temp}</span>
                          <span><span className="font-semibold text-slate-700">Peel Strength:</span> {peel}</span>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed mb-3">{desc}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {tags.map((t) => (
                            <span key={t} className="text-xs bg-amber-50 text-amber-700 border border-amber-100 px-2.5 py-1 rounded-full">{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Printing Capabilities */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Printer className="w-5 h-5 text-amber-600" />
                <h2 className="text-xl font-bold text-slate-900" style={{ fontFamily: "Sora, sans-serif" }}>Printing Capabilities</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {printingCapabilities.map(({ title, icon, desc }) => (
                  <div key={title} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-amber-300 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">{icon}</span>
                      <span className="font-bold text-slate-900 text-sm" style={{ fontFamily: "Sora, sans-serif" }}>{title}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Benefits */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>Key Benefits</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "4 adhesive grades covering –196°C to 180°C environments",
                  "Free digital proof + physical sample before production",
                  "Pantone color matching — ±ΔE 2.0 tolerance",
                  "Paper and synthetic (PP / PE / PET) face material options",
                  "Variable data printing — sequential barcodes, QR codes",
                  "No setup fee for orders above 5,000 rolls",
                  "BPA-free printing inks — safe for food contact applications",
                  "Full OEM private label packaging available",
                ].map((b) => (
                  <div key={b} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />{b}
                  </div>
                ))}
              </div>
            </div>

            {/* Printing Specifications */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>Printing Specifications</h2>
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
              <div className="flex items-center gap-2 mb-4">
                <Ruler className="w-5 h-5 text-amber-600" />
                <h2 className="text-xl font-bold text-slate-900" style={{ fontFamily: "Sora, sans-serif" }}>Label Specifications</h2>
              </div>
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
              <p className="text-xs text-slate-400 mt-2">* Custom specifications available. Contact us for non-standard requirements.</p>
            </div>

            {/* Packaging & Shipping */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Truck className="w-5 h-5 text-amber-600" />
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
                <ShieldCheck className="w-5 h-5 text-amber-600" />
                <h2 className="text-xl font-bold text-slate-900" style={{ fontFamily: "Sora, sans-serif" }}>Quality & Compliance</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "ISO 9001:2015", desc: "Full traceability from raw material to finished product. Every batch undergoes incoming inspection, in-process QC, and final outgoing inspection." },
                  { name: "FSC Certified", desc: "Paper face materials sourced from FSC-certified forests. Suitable for buyers requiring sustainable supply chain documentation." },
                  { name: "BPA-Free Inks", desc: "All printing inks are BPA-free and water-based (food-safe). Phenol-free thermal coating available for EU and California markets." },
                  { name: "RoHS / REACH", desc: "Compliant with EU RoHS and REACH regulations. Full material declaration available upon request." },
                  { name: "FDA Compliant", desc: "Paper, adhesive, ink, and coating materials comply with FDA 21 CFR requirements for incidental food contact." },
                  { name: "GHS / SDS Ready", desc: "Labels for chemical and hazmat applications are tested for chemical resistance and comply with GHS labeling requirements." },
                ].map(({ name, desc }) => (
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

            {/* Available Sizes */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Ruler className="w-5 h-5 text-amber-600" />
                <h2 className="text-xl font-bold text-slate-900" style={{ fontFamily: "Sora, sans-serif" }}>Available Sizes</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {labelSizes.map((size) => (
                  <Link key={size.slug} href={`/products/thermal-labels/${size.slug}`} className="group flex items-center justify-between p-4 bg-white border border-slate-200 hover:border-amber-400 hover:bg-amber-50 rounded-xl transition-all duration-200 shadow-sm">
                    <div>
                      <div className="font-semibold text-slate-800 group-hover:text-amber-700 text-sm" style={{ fontFamily: "Sora, sans-serif" }}>{size.label}</div>
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
              <Link href="/products/thermal-labels/blank" className="inline-flex items-center gap-2 text-sm text-amber-600 hover:text-amber-800 font-semibold"><Layers className="w-4 h-4" />Blank Thermal Labels →</Link>
              <Link href="/products/thermal-paper-rolls/custom-printed" className="inline-flex items-center gap-2 text-sm text-amber-600 hover:text-amber-800 font-semibold">Custom Printed Rolls →</Link>
              <Link href="/oem" className="inline-flex items-center gap-2 text-sm text-amber-600 hover:text-amber-800 font-semibold"><Package className="w-4 h-4" />OEM & Private Label →</Link>
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
                <h3 className="text-lg font-extrabold text-slate-900 mb-1" style={{ fontFamily: "Sora, sans-serif" }}>Request Custom Quote</h3>
                <p className="text-sm text-slate-500 mb-5">Tell us your size, adhesive grade, print colors, and quantity. We'll send a quote with a free design proof within 24 hours.</p>
                <InquiryForm compact />
              </div>

              {/* Sample CTA */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                <h4 className="font-bold text-slate-900 text-sm mb-1" style={{ fontFamily: "Sora, sans-serif" }}>Free Printed Sample</h4>
                <p className="text-xs text-slate-600 mb-3">Get a printed sample with your logo in 5–7 business days. Verify color accuracy, adhesion, and print quality before bulk production.</p>
                <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm text-amber-700 font-semibold hover:text-amber-900">
                  Request Sample <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Adhesive grade quick select */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <h4 className="font-bold text-slate-900 text-sm mb-3" style={{ fontFamily: "Sora, sans-serif" }}>Adhesive Grade Quick Guide</h4>
                <div className="space-y-2.5">
                  {[
                    { grade: "Permanent", range: "–20°C to 80°C", color: "text-amber-700 bg-amber-50" },
                    { grade: "Removable", range: "–10°C to 60°C", color: "text-green-700 bg-green-50" },
                    { grade: "High-Temp", range: "Up to 180°C", color: "text-red-700 bg-red-50" },
                    { grade: "Freezer / Cryo", range: "–196°C to 40°C", color: "text-blue-700 bg-blue-50" },
                  ].map(({ grade, range, color }) => (
                    <div key={grade} className="flex items-center justify-between text-xs">
                      <span className={`font-semibold px-2.5 py-1 rounded-full ${color}`}>{grade}</span>
                      <span className="text-slate-500">{range}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key order info */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3">
                <h4 className="font-bold text-slate-900 text-sm" style={{ fontFamily: "Sora, sans-serif" }}>Order at a Glance</h4>
                {[
                  { icon: Package, label: "MOQ", val: "1,000 rolls" },
                  { icon: Clock, label: "Lead Time", val: "15–20 days" },
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

              {/* Certifications */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5">
                <h4 className="font-bold text-slate-900 text-sm mb-3" style={{ fontFamily: "Sora, sans-serif" }}>Certifications</h4>
                <div className="space-y-2">
                  {["ISO 9001:2015", "FSC Certified", "BPA-Free Inks", "RoHS / REACH", "FDA Compliant", "GHS / SDS Ready"].map((cert) => (
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
