import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/shared/InquiryForm";
import { CheckCircle, ArrowRight } from "lucide-react";
import { canLabelSizes, CAN_LABELS_IMG } from "./can-labels-data";
import { SITE } from "@/config/siteData";
import Image from "next/image";
import { getSlotImage } from "@/lib/imageSlotUtils";

export const metadata: Metadata = {
  title: "Can Labels Manufacturer | Custom & Blank",
  description:
    "OEM can labels for beverage, food, pet food, paint, and industrial cans. Full-wrap, moisture-resistant, food-safe. BPA-free options. MOQ 5,000 labels.",
  keywords:
    "can labels, custom can labels, blank can labels, beverage can labels, food can labels, pet food labels, full-wrap can labels, moisture-resistant labels, food-safe labels, can label manufacturer, OEM can labels",
  alternates: { canonical: `${SITE.domain}/products/can-labels` },
};

const faqs = [
  { q: "What can sizes do your labels fit?", a: "We supply full-wrap and partial-wrap can labels for all standard sizes from 211×400 to 401×700, plus custom dimensions to ±0.5mm tolerance for slim, sleek, and specialty cans." },
  { q: "Are the labels food-safe?", a: "Yes. Our can labels use food-safe permanent acrylic adhesive compliant with FDA 21 CFR, with BPA-free and phenol-free coating options for direct and indirect food contact applications." },
  { q: "What is the minimum order quantity?", a: "Custom printed can labels start at 5,000 labels per size. Blank can labels are available from lower volumes — tell us your size and quantity for a quote." },
  { q: "Can you print our brand artwork?", a: "Yes. We offer full-color CMYK and Pantone spot-color printing with design support, NDA protection, and private-label packaging for distributors and brands." },
  { q: "What is the lead time?", a: "Standard production runs 10–18 days; rush orders can ship in about 7 days. Blank stock sizes dispatch faster. We export worldwide on FOB, CIF, and DDP terms." },
];


const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.zxpapers.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Products",
      "item": "https://www.zxpapers.com/products"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Can Labels",
      "item": "https://www.zxpapers.com/products/can-labels"
    }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Can Labels",
  "description":
    "OEM can labels for beverage, food, pet food, paint, and industrial cans. Full-wrap, moisture-resistant, food-safe, BPA-free options.",
  "url": `${SITE.domain}/products/can-labels`,
  "isPartOf": { "@id": `${SITE.domain}/#website` },
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      { name: "Blank Can Labels", path: "/products/can-labels/blank" },
      { name: "Custom Printed Can Labels", path: "/products/can-labels/custom-printed" },
      ...canLabelSizes.map((size) => ({ name: `${size.label} Can Labels`, path: `/products/can-labels/${size.slug}` })),
    ].map((item, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": item.name,
      "url": `${SITE.domain}${item.path}`,
    })),
  },
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
export default async function CanLabelsPage() {
  const canLabelsImage = await getSlotImage("can-labels:hero", CAN_LABELS_IMG);
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
              <Image
                src={canLabelsImage}
                alt="Can Labels"
                className="w-full sm:w-64 h-48 object-cover rounded-2xl flex-shrink-0"
               width={256} height={192} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              <div>
                <span className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  Can Labels
                </span>
                <h1
                  className="text-3xl font-extrabold text-slate-900 mb-3"

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

            {/* FAQ */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {faqs.map(({ q, a }) => (
                  <details
                    key={q}
                    className="group rounded-xl border border-slate-200 bg-white p-4 open:bg-amber-50/40"
                  >
                    <summary className="cursor-pointer list-none font-semibold text-slate-800 marker:hidden group-open:text-amber-700">
                      {q}
                    </summary>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{a}</p>
                  </details>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3
                className="text-lg font-bold text-slate-900 mb-1"

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
