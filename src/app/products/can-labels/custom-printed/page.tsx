import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/shared/InquiryForm";
import { CheckCircle, ArrowRight } from "lucide-react";
import { canLabelSizes, CAN_LABELS_IMG } from "../can-labels-data";
import { SITE } from "@/config/siteData";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Custom Printed Can Labels | OEM Full-Color",
  description:
    "Custom printed can labels with CMYK and Pantone color printing. Full-wrap, gloss/matte lamination, NDA protection. MOQ 5,000.",
  alternates: { canonical: `${SITE.domain}/products/can-labels/custom-printed` },
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
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Custom Printed",
      "item": "https://www.zhixinpaper.com/products/can-labels/custom-printed"
    }
  ]
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Custom Printed Can Labels | OEM Full-Color Can Labels",
  "description": "Custom printed can labels with CMYK and Pantone color printing. Full-wrap, gloss/matte lamination, NDA protection. MOQ 5,000.",
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
  "url": "https://www.zhixinpaper.com/products/can-labels/custom-printed"
};
export default function CustomPrintedCanLabelsPage() {
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
            <Link href="/products/can-labels" className="hover:text-blue-600">Can Labels</Link>
            <span className="mx-1">/</span>
            <span>Custom Printed</span>
          </div>
        </div>
      </div>

      <div className="container py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">

            <div className="flex flex-col sm:flex-row gap-6">
              <Image
                src={CAN_LABELS_IMG}
                alt="Custom Printed Can Labels"
                className="w-full sm:w-64 h-48 object-cover rounded-2xl flex-shrink-0"
               width={256} height={192} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              <div>
                <span className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  Can Labels
                </span>
                <h1
                  className="text-3xl font-extrabold text-slate-900 mb-3"

                >
                  Custom Printed Can Labels
                </h1>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Full-color custom printed can labels with your brand artwork. CMYK and Pantone color matching,
                  gloss or matte lamination, embossing, and hot stamping options. NDA protection, design support,
                  and private label packaging available. ISO 9001 certified, food-safe, and BPA-free compliant.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["CMYK + Pantone", "Full-Wrap", "NDA Protected", "Design Support", "MOQ 5,000"].map((tag) => (
                    <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-sora text-xl font-bold text-slate-900 mb-4">
                Key Benefits
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Up to 8-color CMYK + Pantone spot color printing",
                  "Gloss, matte, and soft-touch lamination options",
                  "Embossing, debossing, and hot stamping available",
                  "NDA and IP protection for all artwork",
                  "Free design support and pre-press proofing",
                  "Food-safe inks compliant with FDA and EU standards",
                  "Moisture-resistant for refrigerated and frozen products",
                  "Private label and OEM packaging available",
                ].map((b) => (
                  <div key={b} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    {b}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-sora text-xl font-bold text-slate-900 mb-4">
                Applications
              </h2>
              <div className="flex flex-wrap gap-2">
                {["Craft Beer Branding", "Beverage Brands", "Gourmet Food", "Pet Food Brands", "Paint & Coatings", "Chemical Products", "Seasonal Editions", "Private Label Brands"].map((app) => (
                  <span key={app} className="bg-amber-50 text-amber-700 text-sm px-4 py-2 rounded-lg font-medium">
                    {app}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-sora text-xl font-bold text-slate-900 mb-4">
                Available Sizes
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {canLabelSizes.map((size) => (
                  <Link
                    key={size.slug}
                    href={`/products/can-labels/${size.slug}`}
                    className="group flex items-center justify-between p-4 bg-white border border-slate-200 hover:border-amber-300 hover:bg-amber-50 rounded-xl transition-all duration-200"
                  >
                    <div>
                      <div className="font-sora font-semibold text-slate-800 group-hover:text-amber-700 text-sm">
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

          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="font-sora text-lg font-bold text-slate-900 mb-1">
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
