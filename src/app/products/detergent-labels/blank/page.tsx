import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/shared/InquiryForm";
import { CheckCircle, ArrowRight } from "lucide-react";
import { detergentLabelSizes, DETERGENT_LABELS_IMG } from "../detergent-labels-data";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: "Blank Detergent Labels | Water-Resistant",
  description:
    "Blank unprinted detergent labels in BOPP, PE, and vinyl. Water-resistant, chemical-resistant. Compatible with flexo, digital, and thermal transfer.",
  alternates: { canonical: `${SITE.domain}/products/detergent-labels/blank` },
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
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Blank",
      "item": "https://www.zhixinpaper.com/products/detergent-labels/blank"
    }
  ]
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Blank Detergent Labels | Unprinted Water-Resistant Labels",
  "description": "Blank unprinted detergent labels in BOPP, PE, and vinyl. Water-resistant, chemical-resistant. Compatible with flexo, digital, and thermal transfer.",
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
  "url": "https://www.zhixinpaper.com/products/detergent-labels/blank"
};
export default function BlankDetergentLabelsPage() {
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
      <div className="bg-slate-50 py-10">
        <div className="container">
          <div className="text-sm text-slate-500 mb-3">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-1">/</span>
            <Link href="/products" className="hover:text-blue-600">Products</Link>
            <span className="mx-1">/</span>
            <Link href="/products/detergent-labels" className="hover:text-blue-600">Detergent Labels</Link>
            <span className="mx-1">/</span>
            <span>Blank</span>
          </div>
        </div>
      </div>

      <div className="container py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <div className="flex flex-col sm:flex-row gap-6">
              <img src={DETERGENT_LABELS_IMG} alt="Blank Detergent Labels" className="w-full sm:w-64 h-48 object-cover rounded-2xl flex-shrink-0" />
              <div>
                <span className="inline-block bg-sky-100 text-sky-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">Detergent Labels</span>
                <h1 className="text-3xl font-extrabold text-slate-900 mb-3" style={{ fontFamily: "Sora, sans-serif" }}>Blank Detergent Labels</h1>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Unprinted water-resistant labels in white and clear BOPP, PE, and vinyl face stocks.
                  Designed for in-house printing of cleaning product labels with digital, flexo, or thermal transfer printers.
                  Chemical-resistant permanent adhesive withstands exposure to surfactants, bleach, and solvents.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Unprinted", "BOPP / PE / Vinyl", "Water Resistant", "Chemical Resistant", "MOQ 5,000"].map((tag) => (
                    <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>Key Benefits</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "White and clear BOPP, PE, and vinyl options",
                  "Chemical-resistant permanent acrylic adhesive",
                  "Waterproof — survives bathroom and kitchen environments",
                  "Compatible with digital, flexo, and thermal transfer printers",
                  "Consistent die-cut for automated labeling machines",
                  "Silicone-coated PET liner for clean peel and apply",
                  "GHS and CLP compliant substrate options",
                  "ISO 9001 certified production with AQL inspection",
                ].map((b) => (
                  <div key={b} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />{b}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>Applications</h2>
              <div className="flex flex-wrap gap-2">
                {["Laundry Detergent", "Dish Soap", "Bathroom Cleaners", "Hand Soap", "Fabric Softener", "Industrial Cleaners", "Private Label Brands", "Variable Data Printing"].map((app) => (
                  <span key={app} className="bg-sky-50 text-sky-700 text-sm px-4 py-2 rounded-lg font-medium">{app}</span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>Available Sizes</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {detergentLabelSizes.map((size) => (
                  <Link key={size.slug} href={`/products/detergent-labels/${size.slug}`} className="group flex items-center justify-between p-4 bg-white border border-slate-200 hover:border-sky-300 hover:bg-sky-50 rounded-xl transition-all duration-200">
                    <div>
                      <div className="font-semibold text-slate-800 group-hover:text-sky-700 text-sm" style={{ fontFamily: "Sora, sans-serif" }}>{size.label}</div>
                      {size.badge && <span className="text-[10px] bg-sky-100 text-sky-700 px-2 py-0.5 rounded-full font-medium">{size.badge}</span>}
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-500 group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-1" style={{ fontFamily: "Sora, sans-serif" }}>Get a Quote</h3>
              <p className="text-sm text-slate-500 mb-5">Response within 12 hours</p>
              <InquiryForm compact />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
