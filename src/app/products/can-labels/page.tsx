import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/shared/InquiryForm";
import { CheckCircle, ArrowRight } from "lucide-react";
import { canLabelSizes, CAN_LABELS_IMG } from "./can-labels-data";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: "Can Labels Manufacturer | Custom & Blank Can Labels",
  description:
    "OEM can labels for beverage, food, pet food, paint, and industrial cans. Full-wrap, moisture-resistant, food-safe. BPA-free options. MOQ 5,000 labels.",
  alternates: { canonical: `${SITE.domain}/products/can-labels` },
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
      "name": "Can Labels",
      "item": "https://www.zhixinpaper.com/products/can-labels"
    }
  ]
};
export default function CanLabelsPage() {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Breadcrumb */}
      <div className="bg-slate-50 py-10">
        <div className="container">
          <div className="text-sm text-slate-500 mb-3">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-1">/</span>
            <Link href="/products" className="hover:text-blue-600">Products</Link>
            <span className="mx-1">/</span>
            <span>Can Labels</span>
          </div>
        </div>
      </div>

      <div className="container py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">

            {/* Hero */}
            <div className="flex flex-col sm:flex-row gap-6">
              <img
                src={CAN_LABELS_IMG}
                alt="Can Labels"
                className="w-full sm:w-64 h-48 object-cover rounded-2xl flex-shrink-0"
              />
              <div>
                <span className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  Can Labels
                </span>
                <h1
                  className="text-3xl font-extrabold text-slate-900 mb-3"
                  style={{ fontFamily: "Sora, sans-serif" }}
                >
                  Can Labels
                </h1>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Full-wrap and partial-wrap can labels for beverage, food, pet food, paint, and industrial cans.
                  Available in blank and custom-printed versions. Moisture-resistant, food-safe, and compatible
                  with standard can sizes from 211×400 to 401×700. ISO 9001 certified, BPA-free options available.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Full-Wrap", "Moisture Resistant", "Food Safe", "BPA-Free Option", "MOQ 5,000"].map((tag) => (
                    <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Product variants */}
            <div>
              <h2
                className="text-xl font-bold text-slate-900 mb-4"
                style={{ fontFamily: "Sora, sans-serif" }}
              >
                Product Variants
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href="/products/can-labels/blank"
                  className="group flex flex-col gap-2 p-5 bg-white border border-slate-200 hover:border-amber-300 hover:bg-amber-50 rounded-2xl transition-all duration-200"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="font-bold text-slate-800 group-hover:text-amber-700"
                      style={{ fontFamily: "Sora, sans-serif" }}
                    >
                      Blank Can Labels
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-sm text-slate-500">
                    White or kraft unprinted can labels. Ideal for in-house printing, private label, or
                    variable-data applications.
                  </p>
                </Link>
                <Link
                  href="/products/can-labels/custom-printed"
                  className="group flex flex-col gap-2 p-5 bg-white border border-slate-200 hover:border-amber-300 hover:bg-amber-50 rounded-2xl transition-all duration-200"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="font-bold text-slate-800 group-hover:text-amber-700"
                      style={{ fontFamily: "Sora, sans-serif" }}
                    >
                      Custom Printed Can Labels
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-sm text-slate-500">
                    Full-color CMYK or Pantone printing with your brand artwork. Includes design support,
                    NDA protection, and private label packaging.
                  </p>
                </Link>
              </div>
            </div>

            {/* Key Benefits */}
            <div>
              <h2
                className="text-xl font-bold text-slate-900 mb-4"
                style={{ fontFamily: "Sora, sans-serif" }}
              >
                Key Benefits
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Full-wrap coverage for standard and slim can sizes",
                  "Moisture-resistant face stock for refrigerated products",
                  "Food-safe adhesive compliant with FDA 21 CFR",
                  "BPA-free and phenol-free coating options",
                  "High-resolution CMYK + spot color printing",
                  "Consistent die-cut for automated labeling lines",
                  "Kraft, white, and clear face stock options",
                  "ISO 9001 certified production with QC inspection",
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
              <h2
                className="text-xl font-bold text-slate-900 mb-4"
                style={{ fontFamily: "Sora, sans-serif" }}
              >
                Applications
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Craft Beer & Beverages",
                  "Canned Food",
                  "Pet Food",
                  "Seafood & Tuna",
                  "Canned Vegetables",
                  "Paint & Coatings",
                  "Industrial Lubricants",
                  "Chemical Containers",
                  "Protein Drinks",
                  "Energy Drinks",
                ].map((app) => (
                  <span key={app} className="bg-amber-50 text-amber-700 text-sm px-4 py-2 rounded-lg font-medium">
                    {app}
                  </span>
                ))}
              </div>
            </div>

            {/* Popular Sizes */}
            <div>
              <h2
                className="text-xl font-bold text-slate-900 mb-4"
                style={{ fontFamily: "Sora, sans-serif" }}
              >
                Popular Can Sizes
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {canLabelSizes.map((size) => (
                  <Link
                    key={size.slug}
                    href={`/products/can-labels/${size.slug}`}
                    className="group flex items-center justify-between p-4 bg-white border border-slate-200 hover:border-amber-300 hover:bg-amber-50 rounded-xl transition-all duration-200"
                  >
                    <div>
                      <div
                        className="font-semibold text-slate-800 group-hover:text-amber-700 text-sm"
                        style={{ fontFamily: "Sora, sans-serif" }}
                      >
                        {size.label}
                      </div>
                      {size.badge && (
                        <span className="text-[10px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">
                          {size.badge}
                        </span>
                      )}
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Specifications table */}
            <div>
              <h2
                className="text-xl font-bold text-slate-900 mb-4"
                style={{ fontFamily: "Sora, sans-serif" }}
              >
                Standard Specifications
              </h2>
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold text-slate-700">Parameter</th>
                      <th className="text-left px-4 py-3 font-semibold text-slate-700">Specification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      ["Face Stock", "White gloss, matte, kraft, or clear BOPP"],
                      ["Adhesive", "Permanent acrylic (food-safe, FDA 21 CFR compliant)"],
                      ["Liner", "Silicone-coated white or yellow"],
                      ["Print Method", "Flexo, offset, or digital CMYK + Pantone"],
                      ["Coating", "Gloss, matte, or soft-touch lamination"],
                      ["MOQ", "5,000 labels per size"],
                      ["Lead Time", "10–18 days (standard); 7 days (rush)"],
                      ["Certifications", "ISO 9001, FDA 21 CFR, BPA-Free available"],
                    ].map(([param, spec]) => (
                      <tr key={param} className="hover:bg-slate-50">
                        <td className="px-4 py-3 font-medium text-slate-700">{param}</td>
                        <td className="px-4 py-3 text-slate-600">{spec}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3
                className="text-lg font-bold text-slate-900 mb-1"
                style={{ fontFamily: "Sora, sans-serif" }}
              >
                Get a Quote
              </h3>
              <p className="text-sm text-slate-500 mb-5">Response within 12 hours</p>
              <InquiryForm compact />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
