import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/shared/InquiryForm";
import { CheckCircle, ArrowRight } from "lucide-react";
import { detergentLabelSizes, DETERGENT_LABELS_IMG } from "./detergent-labels-data";
import { SITE } from "@/config/siteData";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Detergent Labels Manufacturer | Custom Labels",
  description:
    "OEM detergent labels for laundry, dish soap, cleaners, and fabric care products. Water-resistant, chemical-resistant, GHS compliant.",
  alternates: { canonical: `${SITE.domain}/products/detergent-labels` },
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
      "name": "Detergent Labels",
      "item": "https://www.zhixinpaper.com/products/detergent-labels"
    }
  ]
};
export default function DetergentLabelsPage() {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="bg-slate-50 py-10">
        <div className="container">
          <div className="text-sm text-slate-500 mb-3">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-1">/</span>
            <Link href="/products" className="hover:text-blue-600">Products</Link>
            <span className="mx-1">/</span>
            <span>Detergent Labels</span>
          </div>
        </div>
      </div>

      <div className="container py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">

            {/* Hero */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Image src={DETERGENT_LABELS_IMG} alt="Detergent Labels" className="w-full sm:w-64 h-48 object-cover rounded-2xl flex-shrink-0"  width={256} height={192} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              <div>
                <span className="inline-block bg-sky-100 text-sky-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">Detergent Labels</span>
                <h1 className="font-sora text-3xl font-extrabold text-slate-900 mb-3">Detergent &amp; Cleaning Product Labels</h1>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Professional printed labels for laundry detergent, dish soap, bathroom cleaners, fabric softener, and industrial cleaning products.
                  Water-resistant, chemical-resistant, and GHS compliant. Available in BOPP, PE, and vinyl face stocks with permanent or removable adhesive.
                  Full-color CMYK and Pantone printing with gloss, matte, or soft-touch lamination.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Water Resistant", "Chemical Resistant", "GHS Compliant", "BOPP / PE / Vinyl", "MOQ 5,000"].map((tag) => (
                    <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Product variants */}
            <div>
              <h2 className="font-sora text-xl font-bold text-slate-900 mb-4">Product Variants</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/products/detergent-labels/blank" className="group flex flex-col gap-2 p-5 bg-white border border-slate-200 hover:border-sky-300 hover:bg-sky-50 rounded-2xl transition-all duration-200">
                  <div className="flex items-center justify-between">
                    <span className="font-sora font-bold text-slate-800 group-hover:text-sky-700">Blank Detergent Labels</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-500 group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-sm text-slate-500">Unprinted water-resistant labels in BOPP, PE, and vinyl. Ideal for in-house printing, private label, or variable-data applications.</p>
                </Link>
                <Link href="/products/detergent-labels/custom-printed" className="group flex flex-col gap-2 p-5 bg-white border border-slate-200 hover:border-sky-300 hover:bg-sky-50 rounded-2xl transition-all duration-200">
                  <div className="flex items-center justify-between">
                    <span className="font-sora font-bold text-slate-800 group-hover:text-sky-700">Custom Printed Detergent Labels</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-500 group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-sm text-slate-500">Full-color CMYK + Pantone printing with your brand artwork. Gloss/matte lamination, embossing, and NDA protection available.</p>
                </Link>
              </div>
            </div>

            {/* Key Benefits */}
            <div>
              <h2 className="font-sora text-xl font-bold text-slate-900 mb-4">Key Benefits</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Water-resistant BOPP, PE, and vinyl face stocks",
                  "Chemical-resistant adhesive for harsh cleaning agents",
                  "GHS and CLP compliant hazard communication labels",
                  "Squeeze-proof — labels stay intact under bottle pressure",
                  "High-resolution CMYK + Pantone spot color printing",
                  "Gloss, matte, and soft-touch lamination options",
                  "Permanent or removable adhesive options",
                  "ISO 9001 certified production with AQL inspection",
                ].map((b) => (
                  <div key={b} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />{b}
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div>
              <h2 className="font-sora text-xl font-bold text-slate-900 mb-4">Applications</h2>
              <div className="flex flex-wrap gap-2">
                {["Laundry Detergent", "Dish Soap", "Bathroom Cleaners", "Kitchen Cleaners", "Fabric Softener", "Bleach & Disinfectant", "Hand Soap", "Floor Cleaners", "Industrial Cleaners", "Hotel Amenities"].map((app) => (
                  <span key={app} className="bg-sky-50 text-sky-700 text-sm px-4 py-2 rounded-lg font-medium">{app}</span>
                ))}
              </div>
            </div>

            {/* Popular Sizes */}
            <div>
              <h2 className="font-sora text-xl font-bold text-slate-900 mb-4">Popular Label Sizes</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {detergentLabelSizes.map((size) => (
                  <Link key={size.slug} href={`/products/detergent-labels/${size.slug}`} className="group flex items-center justify-between p-4 bg-white border border-slate-200 hover:border-sky-300 hover:bg-sky-50 rounded-xl transition-all duration-200">
                    <div>
                      <div className="font-sora font-semibold text-slate-800 group-hover:text-sky-700 text-sm">{size.label}</div>
                      {size.badge && <span className="text-[10px] bg-sky-100 text-sky-700 px-2 py-0.5 rounded-full font-medium">{size.badge}</span>}
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-500 group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Specifications table */}
            <div>
              <h2 className="font-sora text-xl font-bold text-slate-900 mb-4">Standard Specifications</h2>
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
                      ["Face Stock", "White/clear BOPP, PE, vinyl, or polyester"],
                      ["Adhesive", "Permanent acrylic (water & chemical resistant)"],
                      ["Liner", "Silicone-coated PET or glassine"],
                      ["Print Method", "Flexo, offset, or digital CMYK + Pantone"],
                      ["Coating", "Gloss, matte, or soft-touch lamination"],
                      ["Water Resistance", "IP65 rated — withstands splashing and moisture"],
                      ["Chemical Resistance", "Resistant to surfactants, bleach, and solvents"],
                      ["MOQ", "5,000 labels per size"],
                      ["Lead Time", "10–18 days (standard); 7 days (rush)"],
                      ["Certifications", "ISO 9001, GHS / CLP compliant, REACH"],
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
              <h3 className="font-sora text-lg font-bold text-slate-900 mb-1">Get a Quote</h3>
              <p className="text-sm text-slate-500 mb-5">Response within 12 hours</p>
              <InquiryForm compact />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
