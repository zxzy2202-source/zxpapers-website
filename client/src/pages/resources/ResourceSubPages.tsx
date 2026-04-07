// Resources Sub-Pages
// Exports: OEMGuide, ProductKnowledge, ApplicationCases, IndustryInsights
// Design: Global Trade Authority — editorial content pages for B2B buyers

import { Link } from "wouter";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/shared/Breadcrumb";
import InquiryForm from "@/components/shared/InquiryForm";
import {
  BookOpen, ArrowRight, CheckCircle, Package, Tag,
  Globe, TrendingUp, BarChart3, Lightbulb, FileText,
  Users, Clock, ShieldCheck, Printer, Leaf, Scale,
  ChevronRight, Star,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// Shared article layout
// ─────────────────────────────────────────────────────────────────────────────
function ArticleLayout({
  breadcrumb,
  category,
  title,
  subtitle,
  readTime,
  children,
  relatedLinks,
}: {
  breadcrumb: { label: string; href?: string }[];
  category: string;
  title: React.ReactNode;
  subtitle: string;
  readTime: string;
  children: React.ReactNode;
  relatedLinks?: { label: string; href: string }[];
}) {
  return (
    <Layout>
      <div className="bg-[#0F2B5B] text-white py-14">
        <div className="container">
          <Breadcrumb items={breadcrumb} />
          <div className="flex items-center gap-2 mb-3">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">{category}</span>
            <span className="text-slate-500">·</span>
            <span className="text-slate-400 text-xs flex items-center gap-1">
              <Clock className="w-3 h-3" /> {readTime} read
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 max-w-3xl leading-tight" style={{ fontFamily: "Sora, sans-serif" }}>
            {title}
          </h1>
          <p className="text-slate-300 max-w-2xl text-base">{subtitle}</p>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 prose-like space-y-10">
            {children}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Inquiry CTA */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-1" style={{ fontFamily: "Sora, sans-serif" }}>
                Get a Free Quote
              </h3>
              <p className="text-xs text-slate-500 mb-4">12-hour response guaranteed</p>
              <InquiryForm compact />
            </div>

            {/* Related links */}
            {relatedLinks && relatedLinks.length > 0 && (
              <div className="bg-slate-50 rounded-2xl p-5">
                <h4 className="text-sm font-bold text-slate-900 mb-3" style={{ fontFamily: "Sora, sans-serif" }}>
                  Related Resources
                </h4>
                <ul className="space-y-2">
                  {relatedLinks.map(({ label, href }) => (
                    <li key={href}>
                      <Link href={href} className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition-colors">
                        <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Back to resources */}
            <Link href="/resources" className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 transition-colors">
              ← Back to Resource Center
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// OEM Guide Page
// ─────────────────────────────────────────────────────────────────────────────
export function OEMGuide() {
  return (
    <ArticleLayout
      breadcrumb={[{ label: "Resources", href: "/resources" }, { label: "OEM Guide" }]}
      category="OEM Guide"
      title={<>The Complete Guide to<br /><span className="text-amber-400">Thermal Paper OEM Manufacturing</span></>}
      subtitle="Everything a distributor or brand owner needs to know about sourcing custom thermal paper rolls and labels — from MOQ and sampling to private label packaging."
      readTime="12 min"
      relatedLinks={[
        { label: "OEM Services Overview", href: "/oem" },
        { label: "Custom Printing & Specs", href: "/oem/custom-printing" },
        { label: "Packaging & Private Label", href: "/oem/packaging" },
        { label: "IP Protection & NDA", href: "/oem/ip-protection" },
        { label: "OEM Case Studies", href: "/oem/case-studies" },
      ]}
    >
      {/* Section 1 */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>
          What Is Thermal Paper OEM Manufacturing?
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          OEM (Original Equipment Manufacturer) in the thermal paper industry means a factory produces rolls or labels to your exact specifications — your size, your coating formula, your packaging, your brand. You sell under your own label; we manufacture behind the scenes.
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          This model is used by distributors, office supply brands, retail chains, and logistics companies worldwide to build proprietary product lines without owning a factory.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          {[
            { icon: Package, title: "Your Brand", desc: "Custom packaging, logo, and private label on every roll" },
            { icon: ShieldCheck, title: "Your Specs", desc: "Exact width, length, core size, coating grade, and paper weight" },
            { icon: Globe, title: "Your Market", desc: "Products designed for your target region's printer ecosystem" },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-blue-50 rounded-xl p-5 text-center">
              <Icon className="w-7 h-7 text-blue-600 mx-auto mb-2" />
              <div className="font-bold text-slate-900 text-sm mb-1" style={{ fontFamily: "Sora, sans-serif" }}>{title}</div>
              <div className="text-xs text-slate-600">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2 */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>
          Step-by-Step OEM Process
        </h2>
        <div className="space-y-4">
          {[
            { step: "01", title: "Initial Inquiry & NDA", desc: "Submit your requirements (size, quantity, coating, packaging). We sign an NDA before any technical discussion to protect your IP." },
            { step: "02", title: "Technical Specification", desc: "Our engineering team works with you to define paper weight, coating grade (standard, premium, BPA-free, phenol-free), core size, and roll dimensions." },
            { step: "03", title: "Sample Production", desc: "We produce 3–5 sample rolls within 3–5 business days. Samples are tested on your target printers before approval." },
            { step: "04", title: "Packaging Design", desc: "Our design team creates packaging artwork per your brand guidelines. Shrink wrap, polybag, box, or custom display packaging available." },
            { step: "05", title: "Production & QC", desc: "Full production runs with batch Certificate of Conformance. Each batch is tested for print quality, dimensions, and aging stability." },
            { step: "06", title: "Shipping & Documentation", desc: "We handle export documentation (CO, packing list, invoice, BL). DDP, FOB, CIF, and EXW terms available." },
          ].map(({ step, title, desc }) => (
            <div key={step} className="flex gap-4 p-5 bg-white border border-slate-100 rounded-xl shadow-sm">
              <div className="w-10 h-10 bg-[#0F2B5B] text-white rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ fontFamily: "Sora, sans-serif" }}>
                {step}
              </div>
              <div>
                <div className="font-bold text-slate-900 text-sm mb-1" style={{ fontFamily: "Sora, sans-serif" }}>{title}</div>
                <div className="text-sm text-slate-600 leading-relaxed">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3 */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>
          MOQ, Lead Times & Pricing
        </h2>
        <div className="overflow-hidden border border-slate-200 rounded-2xl">
          <table className="w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-5 py-3 text-left font-semibold text-slate-700">Parameter</th>
                <th className="px-5 py-3 text-left font-semibold text-slate-700">Standard OEM</th>
                <th className="px-5 py-3 text-left font-semibold text-slate-700">Premium OEM</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["MOQ (Rolls)", "1,000 rolls", "500 rolls"],
                ["Sample Lead Time", "3–5 business days", "3–5 business days"],
                ["Production Lead Time", "15–20 days", "20–25 days"],
                ["Packaging Options", "Shrink wrap, polybag", "Custom box, display pack"],
                ["Certifications", "ISO 9001, BPA-Free", "ISO 9001, BPA-Free, FSC"],
                ["Private Label", "Yes", "Yes + design support"],
              ].map(([param, std, prem], i) => (
                <tr key={param} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="px-5 py-3 font-medium text-slate-700">{param}</td>
                  <td className="px-5 py-3 text-slate-900">{std}</td>
                  <td className="px-5 py-3 text-slate-900 font-semibold text-blue-700">{prem}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4 */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>
          Common OEM Customization Options
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "Custom width (20mm–1,200mm) and length",
            "Core diameter: 12mm, 25mm, 38mm, 50mm",
            "Paper weight: 48gsm, 55gsm, 58gsm, 65gsm, 80gsm",
            "Coating: Standard, BPA-Free, Phenol-Free, Premium",
            "Color: White, Yellow, Pink, Blue, Green base paper",
            "Custom printing: Logo, text, security features",
            "Packaging: Shrink wrap, polybag, box, display",
            "Labeling: Barcode, QR code, serial number",
          ].map((opt) => (
            <div key={opt} className="flex items-start gap-2.5 text-sm text-slate-700">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              {opt}
            </div>
          ))}
        </div>
      </section>

      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
        <div className="flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <div className="font-bold text-amber-900 mb-1" style={{ fontFamily: "Sora, sans-serif" }}>Ready to Start Your OEM Project?</div>
            <p className="text-sm text-amber-800 mb-3">Contact our OEM team with your specifications. We'll respond within 12 hours with a detailed quote and sample timeline.</p>
            <Link href="/contact/oem-partnership" className="inline-flex items-center gap-2 text-sm font-bold text-amber-700 hover:text-amber-900">
              Start OEM Partnership <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </ArticleLayout>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Product Knowledge Page
// ─────────────────────────────────────────────────────────────────────────────
export function ProductKnowledge() {
  return (
    <ArticleLayout
      breadcrumb={[{ label: "Resources", href: "/resources" }, { label: "Product Knowledge" }]}
      category="Product Knowledge"
      title={<>Thermal Paper Explained:<br /><span className="text-amber-400">A Complete Technical Guide</span></>}
      subtitle="How thermal paper works, the difference between grades, how to choose the right paper for your printer, and what the specifications actually mean."
      readTime="10 min"
      relatedLinks={[
        { label: "Product Specifications", href: "/specifications" },
        { label: "Blank Thermal Rolls", href: "/products/thermal-paper-rolls/blank" },
        { label: "Thermal Labels", href: "/products/thermal-labels/blank" },
        { label: "FAQ", href: "/faq" },
      ]}
    >
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>How Thermal Paper Works</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          Thermal paper contains a heat-sensitive coating on one side. When a thermal print head applies heat to specific points, a chemical reaction turns those areas dark — creating text, barcodes, or graphics without ink or ribbons.
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          The coating contains three key components: a leuco dye (colorless), a developer (acid), and a sensitizer. Heat melts the sensitizer, allowing the dye and developer to react and produce a dark image.
        </p>
        <div className="bg-slate-50 rounded-2xl p-6 mt-4">
          <h3 className="font-bold text-slate-900 mb-3 text-sm" style={{ fontFamily: "Sora, sans-serif" }}>Key Components of Thermal Coating</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { name: "Leuco Dye", role: "Color-forming agent", detail: "Colorless until activated by heat. Turns dark (usually black or blue) upon reaction." },
              { name: "Developer (Acid)", role: "Reaction catalyst", detail: "Bisphenol A (BPA) was traditional; now replaced by BPS or phenol-free alternatives." },
              { name: "Sensitizer", role: "Melting agent", detail: "Lowers the activation temperature, enabling printing at standard thermal head temperatures (60–80°C)." },
            ].map(({ name, role, detail }) => (
              <div key={name} className="bg-white rounded-xl p-4 border border-slate-200">
                <div className="font-bold text-blue-700 text-sm mb-1" style={{ fontFamily: "Sora, sans-serif" }}>{name}</div>
                <div className="text-xs text-slate-500 mb-2">{role}</div>
                <div className="text-xs text-slate-600 leading-relaxed">{detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>Thermal Paper Grades Compared</h2>
        <div className="overflow-hidden border border-slate-200 rounded-2xl">
          <table className="w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">Grade</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">Developer</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">Image Life</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">Best For</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Standard", "BPA", "5–7 years", "General POS, receipts"],
                ["BPA-Free", "BPS / Urea", "5–7 years", "EU market, food service"],
                ["Phenol-Free", "No phenol compounds", "5–7 years", "Strictest compliance"],
                ["Premium", "BPA-Free + top coat", "10+ years", "Medical, archival, legal"],
                ["Synthetic", "Polyester base", "10+ years", "Outdoor, waterproof labels"],
              ].map(([grade, dev, life, use], i) => (
                <tr key={grade} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="px-4 py-3 font-semibold text-slate-900">{grade}</td>
                  <td className="px-4 py-3 text-slate-600">{dev}</td>
                  <td className="px-4 py-3 text-slate-600">{life}</td>
                  <td className="px-4 py-3 text-slate-600">{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>Key Specifications Explained</h2>
        <div className="space-y-4">
          {[
            { term: "Basis Weight (gsm)", def: "Grams per square meter. Higher gsm = thicker, stiffer paper. Common values: 48, 55, 58, 65, 80gsm. Heavier paper feels more premium but costs more." },
            { term: "Core Diameter", def: "The inner tube diameter. 12mm for compact/portable printers, 25mm for standard POS, 38mm for high-volume kitchen printers. Must match your printer's spindle." },
            { term: "Roll Diameter", def: "The outer diameter of the finished roll. Determines how many meters fit per roll. Larger diameter = more paper = fewer roll changes." },
            { term: "Coating Density (OD)", def: "Optical Density of the printed image. OD ≥ 1.0 is standard; OD ≥ 1.2 is premium. Higher OD = darker, more legible print, especially for barcodes." },
            { term: "Image Stability", def: "How long the printed image remains legible under normal storage conditions (25°C, 65% RH). Standard: 5–7 years. Premium with top coat: 10+ years." },
            { term: "Sensitivity", def: "The temperature at which the paper activates. Matched to your printer's head temperature. Mismatched sensitivity causes faint or overburned prints." },
          ].map(({ term, def }) => (
            <div key={term} className="p-5 bg-white border border-slate-100 rounded-xl shadow-sm">
              <div className="font-bold text-[#0F2B5B] text-sm mb-1.5" style={{ fontFamily: "Sora, sans-serif" }}>{term}</div>
              <div className="text-sm text-slate-600 leading-relaxed">{def}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>How to Choose the Right Size</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          The most important factor is matching the paper width to your printer's paper path. Check your printer manual for the accepted paper width. Common widths:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { size: "57mm", use: "Compact POS, mobile printers, taxi meters" },
            { size: "80mm", use: "Standard restaurant/retail POS printers" },
            { size: '2 1/4" (57.15mm)', use: "US credit card terminals (Verifone, Ingenico)" },
            { size: '3 1/8" (79.375mm)', use: "US standard POS (Epson, Star, Bixolon)" },
            { size: "100–110mm", use: "Wide-format kitchen printers, industrial" },
            { size: '4" x 6"', use: "Shipping labels (Zebra, Dymo, Rollo)" },
          ].map(({ size, use }) => (
            <div key={size} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
              <Tag className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 text-sm" style={{ fontFamily: "Sora, sans-serif" }}>{size}</div>
                <div className="text-xs text-slate-600">{use}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </ArticleLayout>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Application Cases Page
// ─────────────────────────────────────────────────────────────────────────────
const appCases = [
  {
    industry: "Retail & POS",
    icon: Package,
    color: "blue",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    desc: "From supermarkets to boutique stores, thermal paper receipts are the backbone of retail POS systems worldwide.",
    products: ["80mm x 80mm Rolls", "57mm x 50mm Rolls"],
    keyReq: "High print speed compatibility, consistent roll diameter, BPA-free for EU markets",
    clients: "Supermarkets, convenience stores, fashion retail, electronics chains",
    volumes: "50,000–500,000 rolls/month",
  },
  {
    industry: "Food Service & Restaurants",
    icon: Printer,
    color: "amber",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
    desc: "Kitchen order printers and customer receipt printers in restaurants require paper that performs reliably in high-heat, high-humidity environments.",
    products: ["80mm x 80mm Rolls", "80mm x 70mm Rolls"],
    keyReq: "Heat-resistant coating, moisture resistance, fast-activation for high-speed kitchen printers",
    clients: "Restaurant chains, fast food, cafes, food delivery platforms",
    volumes: "10,000–200,000 rolls/month",
  },
  {
    industry: "Logistics & Shipping Labels",
    icon: Globe,
    color: "green",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    desc: "Shipping labels must produce scannable barcodes that survive the entire logistics journey — from warehouse to doorstep.",
    products: ['4" x 6" Shipping Labels', "100mm x 150mm Labels"],
    keyReq: "High OD (≥1.2) for barcode scanning, strong adhesive, compatible with Zebra/Dymo/Rollo printers",
    clients: "E-commerce fulfillment centers, 3PL warehouses, courier companies",
    volumes: "100,000–2,000,000 labels/month",
  },
  {
    industry: "Healthcare & Pharmacy",
    icon: ShieldCheck,
    color: "teal",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
    desc: "Patient wristbands, prescription labels, and specimen tracking labels require phenol-free paper with long image life.",
    products: ['2" x 1" Barcode Labels', '3" x 1" Product Labels'],
    keyReq: "Phenol-free coating, image stability ≥10 years, chemical resistance, FDA-compliant materials",
    clients: "Hospitals, pharmacies, diagnostic labs, medical device manufacturers",
    volumes: "5,000–100,000 labels/month",
  },
  {
    industry: "Parking & Transportation",
    icon: Tag,
    color: "purple",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=600&q=80",
    desc: "Parking tickets, transit passes, and toll receipts need compact rolls with reliable performance in outdoor kiosk environments.",
    products: ["57mm x 40mm Rolls", "57mm x 50mm Rolls"],
    keyReq: "Compact core (12mm), UV-resistant coating, wide temperature range (-20°C to 70°C)",
    clients: "Parking operators, transit authorities, toll management companies",
    volumes: "20,000–300,000 rolls/month",
  },
  {
    industry: "Banking & Financial Services",
    icon: BarChart3,
    color: "indigo",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=600&q=80",
    desc: "ATM receipts, credit card terminals, and bank teller printers require high-quality paper with long archival life.",
    products: ['2 1/4" x 50\' Rolls', '3 1/8" x 230\' Rolls'],
    keyReq: "Premium image stability (7+ years), compatibility with Verifone/Ingenico terminals, US standard sizes",
    clients: "Banks, credit unions, payment terminal distributors, ATM operators",
    volumes: "10,000–150,000 rolls/month",
  },
];

const appColorMap: Record<string, { bg: string; text: string; badge: string }> = {
  blue:   { bg: "bg-blue-50",   text: "text-blue-700",   badge: "bg-blue-100 text-blue-700" },
  amber:  { bg: "bg-amber-50",  text: "text-amber-700",  badge: "bg-amber-100 text-amber-700" },
  green:  { bg: "bg-green-50",  text: "text-green-700",  badge: "bg-green-100 text-green-700" },
  teal:   { bg: "bg-teal-50",   text: "text-teal-700",   badge: "bg-teal-100 text-teal-700" },
  purple: { bg: "bg-purple-50", text: "text-purple-700", badge: "bg-purple-100 text-purple-700" },
  indigo: { bg: "bg-indigo-50", text: "text-indigo-700", badge: "bg-indigo-100 text-indigo-700" },
};

export function ApplicationCases() {
  return (
    <Layout>
      <div className="bg-[#0F2B5B] text-white py-14">
        <div className="container">
          <Breadcrumb items={[{ label: "Resources", href: "/resources" }, { label: "Application Cases" }]} />
          <div className="flex items-center gap-2 mb-3">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Application Cases</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ fontFamily: "Sora, sans-serif" }}>
            Thermal Paper Applications<br /><span className="text-amber-400">Across Industries</span>
          </h1>
          <p className="text-slate-300 max-w-2xl text-base">
            From retail POS to hospital wristbands — see how our thermal paper products serve 6 major industries with specific requirements and proven performance.
          </p>
        </div>
      </div>

      <div className="container py-14 space-y-12">
        {appCases.map(({ industry, icon: Icon, color, image, desc, products, keyReq, clients, volumes }) => {
          const c = appColorMap[color];
          return (
            <div key={industry} className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              {/* Image */}
              <div className="lg:col-span-2">
                <img src={image} alt={industry} className="w-full h-56 object-cover rounded-2xl shadow-md" />
              </div>
              {/* Content */}
              <div className="lg:col-span-3">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 ${c.bg} rounded-xl flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${c.text}`} />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900" style={{ fontFamily: "Sora, sans-serif" }}>{industry}</h2>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Recommended Products</div>
                    <ul className="space-y-1">
                      {products.map((p) => (
                        <li key={p} className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />{p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Typical Clients</div>
                    <p className="text-sm text-slate-700">{clients}</p>
                    <div className="mt-2 text-xs text-slate-500">Monthly volume: <strong className="text-slate-700">{volumes}</strong></div>
                  </div>
                </div>
                <div className={`${c.bg} rounded-xl px-4 py-3 text-sm ${c.text}`}>
                  <strong>Key Requirements:</strong> {keyReq}
                </div>
              </div>
            </div>
          );
        })}

        {/* CTA */}
        <div className="bg-[#0F2B5B] rounded-3xl p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-extrabold mb-2" style={{ fontFamily: "Sora, sans-serif" }}>
              Don&apos;t See Your Industry?
            </h2>
            <p className="text-slate-300 text-sm max-w-lg">
              We serve 30+ industries. Contact us with your application requirements and we&apos;ll recommend the right product and specifications.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            Contact Our Team <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </Layout>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Industry Insights Page
// ─────────────────────────────────────────────────────────────────────────────
const insights = [
  {
    tag: "Market Trend",
    icon: TrendingUp,
    color: "blue",
    title: "Global Thermal Paper Market: 2024–2030 Outlook",
    date: "March 2025",
    summary: "The global thermal paper market is projected to reach USD 5.8 billion by 2030, growing at a CAGR of 4.2%. Key drivers include e-commerce growth, expanding POS infrastructure in emerging markets, and the transition from BPA to BPA-free products.",
    points: [
      "Asia-Pacific leads growth at 5.1% CAGR, driven by India and Southeast Asia",
      "BPA-free segment growing 2x faster than standard thermal paper",
      "E-commerce shipping labels represent the fastest-growing application",
      "Digital receipts adoption is slowing, not replacing, thermal paper in retail",
    ],
  },
  {
    tag: "Regulation",
    icon: Scale,
    color: "amber",
    title: "EU BPA Regulations: What Distributors Need to Know in 2025",
    date: "January 2025",
    summary: "The European Union's restriction on BPA in thermal paper (Regulation (EU) 2016/2235) has been in full effect since January 2020. In 2025, enforcement has intensified with stricter customs checks and new requirements for BPS alternatives.",
    points: [
      "BPA concentration limit: 0.02% by weight of thermal paper",
      "BPS (Bisphenol S) is now also under review by ECHA",
      "Phenol-free alternatives gaining traction in Scandinavian markets",
      "Certificate of Analysis required for EU customs clearance in some member states",
    ],
  },
  {
    tag: "Technology",
    icon: Lightbulb,
    color: "green",
    title: "Next-Generation Thermal Coatings: Beyond BPA",
    date: "February 2025",
    summary: "The thermal paper industry is rapidly transitioning away from bisphenol compounds. New developer technologies — including urea-based, vitamin C-based, and polymer developers — are delivering comparable performance with improved safety profiles.",
    points: [
      "Urea-based developers: most widely adopted BPA alternative, cost-effective",
      "Vitamin C (ascorbic acid) developers: premium segment, excellent image stability",
      "Polymer developers: emerging technology for ultra-long archival life (20+ years)",
      "Top-coat technology extends image life and adds chemical resistance",
    ],
  },
  {
    tag: "Sustainability",
    icon: Leaf,
    color: "teal",
    title: "Sustainability in Thermal Paper: FSC, Recycling & Carbon Footprint",
    date: "December 2024",
    summary: "Sustainability is becoming a key purchasing criterion for large retail and logistics buyers. FSC certification, recyclability claims, and carbon footprint documentation are increasingly required in RFQ processes.",
    points: [
      "FSC-certified thermal paper commands 8–15% price premium in European markets",
      "Thermal paper recycling: possible if BPA-free, but requires separate stream",
      "Carbon footprint documentation requested by 40% of European buyers in 2024",
      "Waterless coating technologies reducing manufacturing water consumption by 30%",
    ],
  },
  {
    tag: "Distribution",
    icon: Users,
    color: "purple",
    title: "Building a Profitable Thermal Paper Distribution Business",
    date: "November 2024",
    summary: "Thermal paper distribution remains a strong B2B business model due to recurring demand, predictable order patterns, and the opportunity for private-label differentiation. Here's what successful distributors do differently.",
    points: [
      "Private label margins are 20–35% higher than reselling branded products",
      "Vertical specialization (e.g., healthcare-only or logistics-only) commands premium pricing",
      "Stocking 3–4 core SKUs covers 80% of customer demand in most markets",
      "OEM partnerships with direct factory relationships reduce cost by 15–25% vs. trading companies",
    ],
  },
  {
    tag: "Compliance",
    icon: FileText,
    color: "indigo",
    title: "FDA Requirements for Thermal Paper in US Food Service",
    date: "October 2024",
    summary: "The US FDA regulates thermal paper used in food service environments under 21 CFR. Understanding these requirements is essential for distributors supplying restaurants, grocery chains, and food packaging operations.",
    points: [
      "BPA-free thermal paper recommended for all food-contact adjacent applications",
      "FDA 21 CFR 176.170 covers paper and paperboard components in food contact",
      "Documentation required: material safety data sheets, migration test results",
      "Major US restaurant chains now mandate BPA-free paper from all suppliers",
    ],
  },
];

const insightColorMap: Record<string, { bg: string; text: string; badge: string }> = {
  blue:   { bg: "bg-blue-50",   text: "text-blue-700",   badge: "bg-blue-100 text-blue-800" },
  amber:  { bg: "bg-amber-50",  text: "text-amber-700",  badge: "bg-amber-100 text-amber-800" },
  green:  { bg: "bg-green-50",  text: "text-green-700",  badge: "bg-green-100 text-green-800" },
  teal:   { bg: "bg-teal-50",   text: "text-teal-700",   badge: "bg-teal-100 text-teal-800" },
  purple: { bg: "bg-purple-50", text: "text-purple-700", badge: "bg-purple-100 text-purple-800" },
  indigo: { bg: "bg-indigo-50", text: "text-indigo-700", badge: "bg-indigo-100 text-indigo-800" },
};

export function IndustryInsights() {
  return (
    <Layout>
      <div className="bg-[#0F2B5B] text-white py-14">
        <div className="container">
          <Breadcrumb items={[{ label: "Resources", href: "/resources" }, { label: "Industry Insights" }]} />
          <div className="flex items-center gap-2 mb-3">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Industry Insights</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ fontFamily: "Sora, sans-serif" }}>
            Thermal Paper Industry<br /><span className="text-amber-400">Insights & Trends</span>
          </h1>
          <p className="text-slate-300 max-w-2xl text-base">
            Market analysis, regulatory updates, and strategic insights for thermal paper distributors, buyers, and brand owners.
          </p>
        </div>
      </div>

      <div className="container py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {insights.map(({ tag, icon: Icon, color, title, date, summary, points }) => {
              const c = insightColorMap[color];
              return (
                <article key={title} className="bg-white border border-slate-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-9 h-9 ${c.bg} rounded-lg flex items-center justify-center`}>
                      <Icon className={`w-4.5 h-4.5 ${c.text}`} />
                    </div>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${c.badge}`}>{tag}</span>
                    <span className="text-xs text-slate-400 ml-auto">{date}</span>
                  </div>
                  <h2 className="text-lg font-bold text-slate-900 mb-3 leading-snug" style={{ fontFamily: "Sora, sans-serif" }}>{title}</h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{summary}</p>
                  <ul className="space-y-2">
                    {points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <Star className={`w-3.5 h-3.5 ${c.text} flex-shrink-0 mt-0.5`} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-1" style={{ fontFamily: "Sora, sans-serif" }}>
                Get a Free Quote
              </h3>
              <p className="text-xs text-slate-500 mb-4">12-hour response guaranteed</p>
              <InquiryForm compact />
            </div>

            <div className="bg-slate-50 rounded-2xl p-5">
              <h4 className="text-sm font-bold text-slate-900 mb-3" style={{ fontFamily: "Sora, sans-serif" }}>
                Related Resources
              </h4>
              <ul className="space-y-2">
                {[
                  { label: "OEM Guide", href: "/resources/oem-guide" },
                  { label: "Product Knowledge", href: "/resources/product-knowledge" },
                  { label: "Application Cases", href: "/resources/application-cases" },
                  { label: "Certifications", href: "/manufacturing/certifications" },
                  { label: "FAQ", href: "/faq" },
                ].map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition-colors">
                      <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />{label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Link href="/resources" className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 transition-colors">
              ← Back to Resource Center
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
