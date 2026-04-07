// Blank Thermal Paper Rolls Product Page
// Structure: Overview, Key Benefits, Applications, Specifications, Packaging, Quality, FAQ, Get Quote
import { Link } from "wouter";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/shared/Breadcrumb";
import InquiryForm from "@/components/shared/InquiryForm";
import RelatedSizes from "@/components/shared/RelatedSizes";
import { CheckCircle, ArrowRight, Package, Ruler } from "lucide-react";
import { paperRollSizes } from "@/config/navigation";

const ROLLS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-rolls-RQBrphmgzbAMk7eq3HsvNq.webp";

const specs = [
  { label: "Paper Width", value: "57mm / 80mm / Custom" },
  { label: "Roll Diameter", value: "40mm – 100mm" },
  { label: "Core Size", value: "12mm / 25mm / Custom" },
  { label: "Paper Weight", value: "48g/m² – 80g/m²" },
  { label: "Image Life", value: "3–10 years (archival grade)" },
  { label: "Temperature Range", value: "-10°C to 70°C" },
  { label: "Coating", value: "BPA-Free / Standard" },
  { label: "MOQ", value: "1,000 rolls" },
  { label: "Lead Time", value: "7–15 business days" },
  { label: "Sample", value: "3–5 days" },
];

const applications = [
  "POS Receipt Printers", "ATM Machines", "Parking Ticket Systems",
  "Restaurant Order Printers", "Retail Checkout", "Lottery Terminals",
  "Medical Equipment", "Industrial Printers",
];

const faqs = [
  { q: "What is the minimum order quantity?", a: "Our standard MOQ is 1,000 rolls. We can discuss lower quantities for samples or trial orders." },
  { q: "Are your thermal papers BPA-free?", a: "Yes, all our thermal papers are available in BPA-free formulations. We also offer standard BPA coating for markets where it is permitted." },
  { q: "Can you produce custom sizes?", a: "Absolutely. We can manufacture any width, length, and core size to your specifications. Please contact us with your requirements." },
  { q: "What certifications do you hold?", a: "We are ISO 9001:2015 certified. Our papers are FSC certified, BPA-free, and comply with RoHS and REACH regulations." },
];

export default function BlankThermalRolls() {
  return (
    <Layout>
      <div className="bg-slate-50 py-10">
        <div className="container">
          <Breadcrumb items={[
            { label: "Products", href: "/products" },
            { label: "Thermal Paper Rolls", href: "/products/thermal-paper-rolls/blank" },
            { label: "Blank Thermal Paper Rolls" },
          ]} />
        </div>
      </div>

      <div className="container py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Product Overview */}
            <div className="flex flex-col sm:flex-row gap-6">
              <img src={ROLLS_IMG} alt="Blank Thermal Paper Rolls" className="w-full sm:w-64 h-48 object-cover rounded-2xl flex-shrink-0" />
              <div>
                <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">Thermal Paper Rolls</span>
                <h1 className="text-3xl font-extrabold text-slate-900 mb-3" style={{ fontFamily: "Sora, sans-serif" }}>
                  Blank Thermal Paper Rolls
                </h1>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Professional-grade blank thermal paper rolls for POS systems, ATMs, and receipt printers worldwide. BPA-free coating, consistent print quality, and long image life. Available in all standard sizes and custom specifications.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["BPA-Free", "ISO 9001", "FSC Certified", "MOQ 1,000"].map((tag) => (
                    <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>Key Benefits</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "High sensitivity thermal coating for sharp, clear prints",
                  "BPA-free formula — safe for food service environments",
                  "3–10 year image life depending on storage conditions",
                  "Consistent roll diameter and paper tension",
                  "Compatible with all major POS printer brands",
                  "FSC certified — responsibly sourced paper",
                ].map((b) => (
                  <div key={b} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    {b}
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>Applications</h2>
              <div className="flex flex-wrap gap-2">
                {applications.map((app) => (
                  <span key={app} className="bg-blue-50 text-blue-700 text-sm px-4 py-2 rounded-lg font-medium">{app}</span>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>Specifications</h2>
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    {specs.map(({ label, value }, i) => (
                      <tr key={label} className={i % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                        <td className="px-5 py-3 font-medium text-slate-700 w-40">{label}</td>
                        <td className="px-5 py-3 text-slate-900 font-semibold">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
                  <Link
                    key={size.slug}
                    href={`/products/thermal-paper-rolls/sizes/${size.slug}`}
                    className="group flex items-center justify-between p-4 bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50 rounded-xl transition-all duration-200"
                  >
                    <div>
                      <div className="font-semibold text-slate-800 group-hover:text-blue-700 text-sm" style={{ fontFamily: "Sora, sans-serif" }}>{size.label}</div>
                      {size.badge && <span className="text-[10px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">{size.badge}</span>}
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
              <p className="text-sm text-slate-500 mt-3">
                Need a custom size?{" "}
                <Link href="/contact" className="text-blue-600 hover:underline font-medium">Contact our OEM team →</Link>
              </p>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>FAQ</h2>
              <div className="space-y-4">
                {faqs.map(({ q, a }) => (
                  <div key={q} className="bg-slate-50 rounded-xl p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 text-sm" style={{ fontFamily: "Sora, sans-serif" }}>{q}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Internal links */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100">
              <Link href="/oem" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-semibold">
                <Package className="w-4 h-4" />
                Explore OEM Services →
              </Link>
              <Link href="/products/thermal-paper-rolls/custom-printed" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-semibold">
                Custom Printed Rolls →
              </Link>
            </div>

            <RelatedSizes currentSlug="" type="rolls" />
          </div>

          {/* Sidebar: Inquiry Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-1" style={{ fontFamily: "Sora, sans-serif" }}>
                Get a Quote
              </h3>
              <p className="text-sm text-slate-500 mb-5">Response within 12 hours</p>
              <InquiryForm productName="Blank Thermal Paper Rolls" compact />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
