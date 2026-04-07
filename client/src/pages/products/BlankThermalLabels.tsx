// Blank Thermal Labels Product Page
import { Link } from "wouter";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/shared/Breadcrumb";
import InquiryForm from "@/components/shared/InquiryForm";
import RelatedSizes from "@/components/shared/RelatedSizes";
import { CheckCircle, ArrowRight, Ruler } from "lucide-react";
import { labelSizes } from "@/config/navigation";

const LABELS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-labels-FgJ5U8LZDHPF5nwmD6Uqa5.webp";

const specs = [
  { label: "Label Type", value: "Direct Thermal" },
  { label: "Label Size", value: "All standard & custom sizes" },
  { label: "Core Size", value: '1" / 1.5" / 3"' },
  { label: "Labels Per Roll", value: "250 – 2,000+" },
  { label: "Adhesive Type", value: "Permanent / Removable" },
  { label: "Face Stock", value: "White / Kraft / Synthetic" },
  { label: "Image Life", value: "2–5 years" },
  { label: "MOQ", value: "5,000 labels" },
  { label: "Lead Time", value: "7–15 business days" },
];

const applications = [
  "Shipping & Logistics", "Barcode Labeling", "Product Identification",
  "Inventory Management", "Retail Price Tags", "Food & Beverage",
  "Healthcare", "Warehouse Management",
];

export default function BlankThermalLabels() {
  return (
    <Layout>
      <div className="bg-slate-50 py-10">
        <div className="container">
          <Breadcrumb items={[
            { label: "Products", href: "/products" },
            { label: "Thermal Labels", href: "/products/thermal-labels/blank" },
            { label: "Blank Thermal Labels" },
          ]} />
        </div>
      </div>
      <div className="container py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <div className="flex flex-col sm:flex-row gap-6">
              <img src={LABELS_IMG} alt="Blank Thermal Labels" className="w-full sm:w-64 h-48 object-cover rounded-2xl flex-shrink-0" />
              <div>
                <span className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">Thermal Labels</span>
                <h1 className="text-3xl font-extrabold text-slate-900 mb-3" style={{ fontFamily: "Sora, sans-serif" }}>
                  Blank Thermal Labels
                </h1>
                <p className="text-slate-600 leading-relaxed mb-4">
                  High-quality direct thermal labels for shipping, barcodes, and product identification. Compatible with Zebra, DYMO, Honeywell, and all major thermal label printers.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Direct Thermal", "Permanent Adhesive", "Zebra Compatible", "MOQ 5,000"].map((tag) => (
                    <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>Key Benefits</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "High-sensitivity thermal coating for crisp barcode printing",
                  "Strong permanent adhesive for all surface types",
                  "Removable adhesive option for temporary labeling",
                  "Compatible with all major thermal label printers",
                  "Perforated or continuous roll options",
                  "Fanfold / stack format available",
                ].map((b) => (
                  <div key={b} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    {b}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>Applications</h2>
              <div className="flex flex-wrap gap-2">
                {applications.map((app) => (
                  <span key={app} className="bg-amber-50 text-amber-700 text-sm px-4 py-2 rounded-lg font-medium">{app}</span>
                ))}
              </div>
            </div>

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

            <div>
              <div className="flex items-center gap-2 mb-4">
                <Ruler className="w-5 h-5 text-amber-600" />
                <h2 className="text-xl font-bold text-slate-900" style={{ fontFamily: "Sora, sans-serif" }}>Popular Sizes</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {labelSizes.map((size) => (
                  <Link
                    key={size.slug}
                    href={`/products/thermal-labels/sizes/${size.slug}`}
                    className="group flex items-center justify-between p-4 bg-white border border-slate-200 hover:border-amber-300 hover:bg-amber-50 rounded-xl transition-all duration-200"
                  >
                    <div>
                      <div className="font-semibold text-slate-800 group-hover:text-amber-700 text-sm" style={{ fontFamily: "Sora, sans-serif" }}>{size.label}</div>
                      {size.badge && <span className="text-[10px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">{size.badge}</span>}
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100">
              <Link href="/oem" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-semibold">
                OEM Label Services →
              </Link>
              <Link href="/products/thermal-labels/custom-printed" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-semibold">
                Custom Printed Labels →
              </Link>
            </div>

            <RelatedSizes currentSlug="" type="labels" />
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-1" style={{ fontFamily: "Sora, sans-serif" }}>Get a Quote</h3>
              <p className="text-sm text-slate-500 mb-5">Response within 12 hours</p>
              <InquiryForm productName="Blank Thermal Labels" compact />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
