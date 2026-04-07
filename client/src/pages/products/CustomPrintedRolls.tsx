// Custom Printed Thermal Paper Rolls Product Page
import { Link } from "wouter";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/shared/Breadcrumb";
import InquiryForm from "@/components/shared/InquiryForm";
import { CheckCircle, ArrowRight } from "lucide-react";

const ROLLS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-rolls-RQBrphmgzbAMk7eq3HsvNq.webp";

const specs = [
  { label: "Print Method", value: "Flexographic / Digital" },
  { label: "Print Colors", value: "1–4 colors" },
  { label: "Paper Width", value: "57mm / 80mm / Custom" },
  { label: "Image Life", value: "3–10 years" },
  { label: "MOQ", value: "5,000 rolls" },
  { label: "Sample Lead Time", value: "5–7 days" },
  { label: "Production Lead Time", value: "10–20 days" },
  { label: "Coating", value: "BPA-Free available" },
];

export default function CustomPrintedRolls() {
  return (
    <Layout>
      <div className="bg-slate-50 py-10">
        <div className="container">
          <Breadcrumb items={[
            { label: "Products", href: "/products" },
            { label: "Custom Printed Thermal Rolls" },
          ]} />
        </div>
      </div>
      <div className="container py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <div className="flex flex-col sm:flex-row gap-6">
              <img src={ROLLS_IMG} alt="Custom Printed Thermal Rolls" className="w-full sm:w-64 h-48 object-cover rounded-2xl flex-shrink-0" />
              <div>
                <span className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">OEM / Custom Printing</span>
                <h1 className="text-3xl font-extrabold text-slate-900 mb-3" style={{ fontFamily: "Sora, sans-serif" }}>
                  Custom Printed Thermal Paper Rolls
                </h1>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Enhance your brand with custom-printed thermal paper rolls. Print your logo, promotional messages, website, or QR codes directly on the receipt paper. Perfect for retail chains, restaurants, and distributors.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Logo Printing", "QR Codes", "Promotional Text", "Private Label"].map((tag) => (
                    <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>What We Can Print</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Company logo and brand colors",
                  "Promotional messages and offers",
                  "Website URL and QR codes",
                  "Social media handles",
                  "Legal disclaimers and terms",
                  "Custom background patterns",
                ].map((b) => (
                  <div key={b} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    {b}
                  </div>
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

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
              <h3 className="font-bold text-blue-900 mb-2" style={{ fontFamily: "Sora, sans-serif" }}>OEM Process</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm">
                {["1. Send Requirements", "2. Design Proof", "3. Sample Approval", "4. Mass Production"].map((step, i) => (
                  <div key={step} className="flex flex-col items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">{i + 1}</div>
                    <span className="text-blue-800 font-medium text-xs">{step.replace(/^\d+\. /, "")}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100">
              <Link href="/oem" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-semibold">
                Full OEM Services <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/oem/design-support" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-semibold">
                Design Support →
              </Link>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-1" style={{ fontFamily: "Sora, sans-serif" }}>Request OEM Quote</h3>
              <p className="text-sm text-slate-500 mb-5">Response within 12 hours</p>
              <InquiryForm productName="Custom Printed Thermal Paper Rolls" compact />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
