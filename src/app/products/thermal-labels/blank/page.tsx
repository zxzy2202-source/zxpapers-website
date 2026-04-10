import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/shared/InquiryForm";
import { CheckCircle, ArrowRight, Package, Ruler, ShieldCheck, Truck, Clock, Star, MessageSquare, Thermometer, Snowflake, Layers } from "lucide-react";
import { labelSizes } from "@/config/navigation";
import { SITE } from "@/config/siteData";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blank Thermal Labels | All Adhesive Types",
  description: "Direct thermal labels with permanent, removable, high-temperature (-196°C to 150°C) and low-temperature adhesive options.",
  alternates: { canonical: `${SITE.domain}/products/thermal-labels/blank` },
};

const LABELS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-labels-FgJ5U8LZDHPF5nwmD6Uqa5.webp";

const adhesiveTypes = [
  {
    icon: <Layers className="w-6 h-6 text-amber-600" />,
    name: "Permanent Adhesive",
    temp: "–20°C to 80°C",
    peel: "High (≥800 g/25mm)",
    best: "Shipping, logistics, retail price tags, inventory barcodes",
    desc: "Standard acrylic permanent adhesive. Bonds firmly to cardboard, plastic, glass, and metal. Once applied, the label cannot be removed cleanly. The most cost-effective option for high-volume shipping and warehouse applications.",
    tags: ["Shipping Labels", "Barcode Labels", "Inventory Tags", "Retail Price Tags"],
  },
  {
    icon: <ArrowRight className="w-6 h-6 text-green-600" />,
    name: "Removable Adhesive",
    temp: "–10°C to 60°C",
    peel: "Low–Medium (200–400 g/25mm)",
    best: "Temporary price tags, promotional stickers, library labels, rental equipment",
    desc: "Specially formulated low-tack adhesive that peels off cleanly without leaving residue on most surfaces (glass, plastic, painted metal). Ideal for temporary labeling, price promotions, and any application where the label must be removed without damage to the substrate.",
    tags: ["Temporary Price Tags", "Promotional Labels", "Library Labels", "Rental Equipment", "Fresh Produce", "Deli / Bakery"],
  },
  {
    icon: <Thermometer className="w-6 h-6 text-red-500" />,
    name: "High-Temperature Adhesive",
    temp: "Up to 150°C (short-term: 180°C)",
    peel: "Very High (≥1,200 g/25mm)",
    best: "Automotive parts, electronics PCBs, powder-coating, sterilization trays",
    desc: "Silicone-based or high-performance acrylic adhesive engineered to maintain bond strength at sustained high temperatures. The label face and adhesive remain intact through oven curing, powder-coating processes, and autoclave sterilization cycles. Widely used in automotive manufacturing, electronics assembly, and medical device sterilization.",
    tags: ["Automotive Parts", "PCB / Electronics", "Powder Coating", "Autoclave / Sterilization", "Industrial Ovens", "Aerospace Components"],
  },
  {
    icon: <Snowflake className="w-6 h-6 text-blue-500" />,
    name: "Low-Temperature / Freezer Adhesive",
    temp: "–196°C to 40°C (cryogenic available)",
    peel: "High (≥900 g/25mm at –40°C)",
    best: "Frozen food, cold chain logistics, laboratory samples, cryogenic storage",
    desc: "Specially formulated rubber-based or acrylic adhesive that maintains strong adhesion in freezer and deep-freeze environments. Labels can be applied at temperatures as low as –10°C and remain securely bonded through the entire cold chain. Cryogenic-grade variants (liquid nitrogen, –196°C) available for laboratory and biomedical sample storage.",
    tags: ["Frozen Food Packaging", "Cold Chain Logistics", "Pharmaceutical Cold Storage", "Laboratory Sample Tubes", "Cryogenic Vials", "Ice Cream / Dairy"],
  },
];

const specs = [
  { label: "Face Material",       value: "Direct thermal paper (standard) / Synthetic (PP, PE, PET)" },
  { label: "Label Width",         value: "25mm – 210mm (custom ±0.5mm)" },
  { label: "Label Length",        value: "10mm – 300mm (custom)" },
  { label: "Core Inner Dia.",     value: "25mm / 40mm / 76mm (custom)" },
  { label: "Labels per Roll",     value: "500 – 5,000 (depending on size)" },
  { label: "Adhesive Options",    value: "Permanent / Removable / High-Temp / Low-Temp / Freezer / Cryogenic" },
  { label: "Liner",               value: "White glassine / Yellow glassine / PET liner" },
  { label: "Liner Release",       value: "Silicone-coated (standard) / Linerless (optional)" },
  { label: "Optical Density",     value: "OD ≥ 1.2 (standard) / OD ≥ 1.4 (high-density)" },
  { label: "Image Life",          value: "1 year (standard) / 3 years / 5 years (enhanced)" },
  { label: "Operating Temp.",     value: "Varies by adhesive grade (see Adhesive Types above)" },
  { label: "Perforation",         value: "Available (between labels or across roll width)" },
  { label: "Color",               value: "White (standard) / Yellow / Red / Blue / Custom" },
  { label: "MOQ",                 value: "1,000 rolls (samples: 50–100 rolls)" },
  { label: "Lead Time",           value: "7–15 business days (stock sizes: 3–5 days)" },
  { label: "Payment Terms",       value: "T/T 30% deposit, 70% before shipment; L/C at sight" },
];

const packagingInfo = [
  { label: "Inner Packing",    value: "Polybag per roll (moisture-proof)" },
  { label: "Outer Carton",     value: "5-ply corrugated carton" },
  { label: "Rolls per Carton", value: "12 / 24 / 36 rolls (depending on size)" },
  { label: "Port",             value: "Shenzhen / Guangzhou / Shanghai" },
  { label: "Incoterms",        value: "EXW, FOB, CIF, DDP" },
  { label: "Shipping",         value: "Sea freight, Air freight, Express (DHL/FedEx/UPS)" },
];

const industries = [
  { sector: "Logistics & E-Commerce", icon: "📦", apps: ["Shipping labels", "Return labels", "Packing slips", "Carton barcodes", "Pallet labels"] },
  { sector: "Retail & Supermarket",   icon: "🛒", apps: ["Price tags", "Shelf edge labels", "Promotional stickers", "Loyalty card labels", "Markdown tags"] },
  { sector: "Food & Cold Chain",      icon: "🥩", apps: ["Frozen food labels", "Fresh produce stickers", "Deli / bakery tags", "Best-before date labels", "Cold chain tracking"] },
  { sector: "Healthcare & Lab",       icon: "🏥", apps: ["Patient wristbands", "Specimen tube labels", "Cryogenic vial labels", "Medication labels", "Sterilization tray tags"] },
  { sector: "Manufacturing & Auto",   icon: "🏭", apps: ["Parts tracking labels", "PCB component labels", "Powder-coat process tags", "Work-in-progress labels", "QC inspection stickers"] },
  { sector: "Chemical & Hazmat",      icon: "⚗️", apps: ["GHS / SDS hazard labels", "Drum & container labels", "Chemical inventory tags", "Solvent-resistant labels", "Outdoor asset labels"] },
  { sector: "Warehouse & Inventory",  icon: "🏪", apps: ["Bin location labels", "Asset tracking tags", "Rack labels", "RFID + barcode combo", "Shelf life tracking"] },
  { sector: "Hospitality & Events",   icon: "🎫", apps: ["Luggage tags", "Event wristbands", "Visitor badges", "Parking permits", "Locker labels"] },
];

const faqs = [
  { q: "What is the difference between permanent and removable adhesive?", a: "Permanent adhesive bonds strongly and cannot be removed cleanly — ideal for shipping and inventory labels that must stay in place. Removable adhesive uses a lower-tack formula that peels off cleanly without residue, suitable for temporary price tags, promotions, and library labels." },
  { q: "What temperature range does high-temperature adhesive support?", a: "Our standard high-temperature adhesive maintains bond strength up to 150°C continuously, with short-term resistance up to 180°C. This covers most powder-coating ovens, autoclave sterilization, and electronics reflow processes. For higher temperatures, please contact us for specialty silicone adhesive options." },
  { q: "Can freezer labels be applied in cold environments?", a: "Yes. Our freezer-grade adhesive can be applied at temperatures as low as –10°C and maintains adhesion down to –40°C. For cryogenic applications (liquid nitrogen, –196°C), we offer a specialized cryogenic adhesive grade. Please specify your application temperature when requesting a quote." },
  { q: "Do you offer synthetic face materials (PP, PE, PET)?", a: "Yes. In addition to standard direct thermal paper, we offer polypropylene (PP), polyethylene (PE), and polyester (PET) face materials for applications requiring water resistance, tear resistance, or chemical resistance. Synthetic labels are available with all adhesive grades." },
  { q: "What is the minimum order quantity?", a: "Our standard MOQ is 1,000 rolls. For samples or trial orders, we accept 50–100 rolls. Custom sizes and adhesive grades may require higher MOQs — please contact us for details." },
  { q: "Are your labels compatible with Zebra, Honeywell, and SATO printers?", a: "Yes. Our labels are manufactured to be compatible with all major direct thermal label printers including Zebra, Honeywell, SATO, Bixolon, Citizen, Datamax, and TSC. We can provide specific liner gap and notch configurations to match your printer's sensor requirements." },
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
      "name": "Thermal Labels",
      "item": "https://www.zhixinpaper.com/products/thermal-labels"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Blank",
      "item": "https://www.zhixinpaper.com/products/thermal-labels/blank"
    }
  ]
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Blank Thermal Labels | High-Temp, Low-Temp & Removable Adhesive",
  "description": "Direct thermal labels with permanent, removable, high-temperature (-196°C to 150°C) and low-temperature adhesive options.",
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
  "url": "https://www.zhixinpaper.com/products/thermal-labels/blank"
};
export default function BlankThermalLabelsPage() {
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
            <span className="text-slate-700 font-medium">Blank Thermal Labels</span>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="bg-amber-600 text-white py-2.5">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-1 text-sm font-medium">
            <span className="flex items-center gap-1.5"><Star className="w-3.5 h-3.5 fill-white text-white" /> 4 Adhesive Grades Available</span>
            <span className="flex items-center gap-1.5"><Thermometer className="w-3.5 h-3.5" /> –196°C to 180°C Range</span>
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> 12h Quote Response</span>
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
              <Image src={LABELS_IMG} alt="Blank Thermal Labels" className="w-full sm:w-72 h-52 object-cover rounded-2xl flex-shrink-0 shadow-md"  width={288} height={208} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {["Permanent", "Removable", "High-Temp", "Freezer / Cryo"].map((tag) => (
                    <span key={tag} className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded-full font-medium">{tag}</span>
                  ))}
                </div>
                <h1 className="font-sora text-3xl font-extrabold text-slate-900 mb-3 leading-tight">Blank Thermal Labels</h1>
                <p className="text-slate-600 leading-relaxed mb-5">Factory-direct direct thermal labels engineered for demanding environments. Choose from four adhesive grades — permanent, removable, high-temperature (up to 180°C), and low-temperature / cryogenic (down to –196°C) — to match your exact application. Available in paper and synthetic face materials with all standard and custom sizes.</p>

                {/* Quick stats */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { val: "4", unit: "Adhesive Grades" },
                    { val: "–196°C", unit: "to 180°C Range" },
                    { val: "1,000", unit: "Rolls MOQ" },
                  ].map(({ val, unit }) => (
                    <div key={unit} className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
                      <div className="font-sora text-xl font-extrabold text-amber-600">{val}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{unit}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Adhesive Types — the core new section */}
            <div>
              <h2 className="font-sora text-xl font-bold text-slate-900 mb-2">Adhesive Types</h2>
              <p className="text-sm text-slate-500 mb-5">Select the adhesive grade that matches your application environment. All grades are available with paper or synthetic face materials.</p>
              <div className="space-y-4">
                {adhesiveTypes.map(({ icon, name, temp, peel, best, desc, tags }) => (
                  <div key={name} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-amber-300 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-200">{icon}</div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-sora font-bold text-slate-900 text-base mb-1">{name}</h3>
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

            {/* Key Benefits */}
            <div>
              <h2 className="font-sora text-xl font-bold text-slate-900 mb-4">Key Benefits</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "High optical density OD ≥ 1.2 — reliable barcode scanning every time",
                  "4 adhesive grades covering –196°C to 180°C environments",
                  "Paper and synthetic (PP / PE / PET) face material options",
                  "Consistent label gap ±0.3mm for accurate sensor detection",
                  "Compatible with Zebra, Honeywell, SATO, Bixolon, TSC, and more",
                  "Perforation available for easy tear-off between labels",
                  "BPA-free thermal coating — safe for food contact applications",
                  "Free pre-production sample before bulk order commitment",
                ].map((b) => (
                  <div key={b} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />{b}
                  </div>
                ))}
              </div>
            </div>

            {/* Industry Applications */}
            <div>
              <h2 className="font-sora text-xl font-bold text-slate-900 mb-4">Industry Applications</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industries.map(({ sector, icon, apps }) => (
                  <div key={sector} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl">{icon}</span>
                      <span className="font-sora font-bold text-slate-900 text-sm">{sector}</span>
                    </div>
                    <ul className="space-y-1">
                      {apps.map((app) => (
                        <li key={app} className="flex items-center gap-2 text-xs text-slate-600">
                          <span className="w-1.5 h-1.5 bg-amber-400 rounded-full flex-shrink-0" />{app}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Full Specifications */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Ruler className="w-5 h-5 text-amber-600" />
                <h2 className="font-sora text-xl font-bold text-slate-900">Full Specifications</h2>
              </div>
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

            {/* Quality & Compliance */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="w-5 h-5 text-amber-600" />
                <h2 className="font-sora text-xl font-bold text-slate-900">Quality & Compliance</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "ISO 9001:2015", desc: "Every production batch undergoes incoming material inspection, in-process QC, and final outgoing inspection with full traceability." },
                  { name: "FSC Certified", desc: "Paper face materials sourced from FSC-certified forests. Suitable for buyers requiring sustainable supply chain documentation." },
                  { name: "BPA-Free Coating", desc: "All thermal coatings are BPA-free. Phenol-free (BPS-free) formulation available for EU and California regulated markets." },
                  { name: "RoHS / REACH", desc: "Compliant with EU RoHS and REACH regulations. Full material declaration available upon request." },
                  { name: "FDA Compliant", desc: "Paper, adhesive, and coating materials comply with FDA 21 CFR requirements for incidental food contact applications." },
                  { name: "GHS / SDS Ready", desc: "Labels for chemical and hazmat applications are tested for chemical resistance and comply with GHS labeling requirements." },
                ].map(({ name, desc }) => (
                  <div key={name} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <ShieldCheck className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="font-sora font-bold text-slate-900 text-sm">{name}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Sizes */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Ruler className="w-5 h-5 text-amber-600" />
                <h2 className="font-sora text-xl font-bold text-slate-900">Popular Sizes</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {labelSizes.map((size) => (
                  <Link key={size.slug} href={`/products/thermal-labels/${size.slug}`} className="group flex items-center justify-between p-4 bg-white border border-slate-200 hover:border-amber-400 hover:bg-amber-50 rounded-xl transition-all duration-200 shadow-sm">
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
              <Link href="/products/thermal-labels/custom-printed" className="inline-flex items-center gap-2 text-sm text-amber-600 hover:text-amber-800 font-semibold"><Layers className="w-4 h-4" />Custom Printed Labels →</Link>
              <Link href="/products/thermal-paper-rolls/blank" className="inline-flex items-center gap-2 text-sm text-amber-600 hover:text-amber-800 font-semibold">Blank Thermal Rolls →</Link>
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
                <h3 className="font-sora text-lg font-extrabold text-slate-900 mb-1">Get a Free Quote</h3>
                <p className="text-sm text-slate-500 mb-5">Tell us your size, adhesive grade, quantity, and face material. We'll send a detailed quote with unit price, MOQ, and lead time.</p>
                <InquiryForm compact />
              </div>

              {/* Sample CTA */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                <h4 className="font-sora font-bold text-slate-900 text-sm mb-1">Request Free Samples</h4>
                <p className="text-xs text-slate-600 mb-3">Test adhesion, print quality, and temperature performance before committing to a bulk order. Samples in 3–5 business days.</p>
                <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm text-amber-700 font-semibold hover:text-amber-900">
                  Request Samples <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Adhesive grade quick select */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <h4 className="font-sora font-bold text-slate-900 text-sm mb-3">Adhesive Grade Quick Guide</h4>
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

              {/* Certifications */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5">
                <h4 className="font-sora font-bold text-slate-900 text-sm mb-3">Certifications</h4>
                <div className="space-y-2">
                  {["ISO 9001:2015", "FSC Certified", "BPA-Free / Phenol-Free", "RoHS / REACH", "FDA Compliant", "GHS / SDS Ready"].map((cert) => (
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
