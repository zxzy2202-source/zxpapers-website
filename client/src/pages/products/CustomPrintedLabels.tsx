// Custom Printed Thermal Labels Product Page
import { Link } from "wouter";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/shared/Breadcrumb";
import InquiryForm from "@/components/shared/InquiryForm";
import { CheckCircle, ArrowRight } from "lucide-react";

const LABELS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-labels-FgJ5U8LZDHPF5nwmD6Uqa5.webp";

export default function CustomPrintedLabels() {
  return (
    <Layout>
      <div className="bg-slate-50 py-10">
        <div className="container">
          <Breadcrumb items={[
            { label: "Products", href: "/products" },
            { label: "Custom Printed Thermal Labels" },
          ]} />
        </div>
      </div>
      <div className="container py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <div className="flex flex-col sm:flex-row gap-6">
              <img src={LABELS_IMG} alt="Custom Printed Thermal Labels" className="w-full sm:w-64 h-48 object-cover rounded-2xl flex-shrink-0" />
              <div>
                <span className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">OEM / Custom Printing</span>
                <h1 className="text-3xl font-extrabold text-slate-900 mb-3" style={{ fontFamily: "Sora, sans-serif" }}>
                  Custom Printed Thermal Labels
                </h1>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Create branded thermal labels with your logo, product information, or custom design. Perfect for private label distributors, e-commerce platforms, and retail brands.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Logo Printing", "Variable Data", "Private Label", "Custom Size"].map((tag) => (
                    <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>Customization Options</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Brand logo and company name",
                  "Product name and description",
                  "Barcode and QR code pre-printing",
                  "Custom label size and shape",
                  "Colored label stock (red, yellow, blue)",
                  "Custom core size and roll length",
                ].map((b) => (
                  <div key={b} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    {b}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
              <h3 className="font-bold text-amber-900 mb-3" style={{ fontFamily: "Sora, sans-serif" }}>OEM Process</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm">
                {["Send Requirements", "Design Proof", "Sample Approval", "Mass Production"].map((step, i) => (
                  <div key={step} className="flex flex-col items-center gap-2">
                    <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-xs">{i + 1}</div>
                    <span className="text-amber-800 font-medium text-xs">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100">
              <Link href="/oem" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-semibold">
                Full OEM Services <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/oem/packaging" className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-semibold">
                Packaging & Private Label →
              </Link>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-1" style={{ fontFamily: "Sora, sans-serif" }}>Request OEM Quote</h3>
              <p className="text-sm text-slate-500 mb-5">Response within 12 hours</p>
              <InquiryForm productName="Custom Printed Thermal Labels" compact />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
