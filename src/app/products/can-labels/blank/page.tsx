import Link from "next/link";
import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/shared/InquiryForm";
import { CheckCircle, ArrowRight } from "lucide-react";
import { canLabelSizes, CAN_LABELS_IMG } from "../can-labels-data";
import Image from "next/image";
import { getSlotImage } from "@/lib/imageSlotUtils";
import { buildMetadata } from "@/lib/seo";

const description =
  "Blank filling line labels in white, kraft, and clear film options, specified after the container, label panel, print method, material, adhesive, and machine-ready roll setup are confirmed.";

export const metadata = buildMetadata({
  title: "Blank Filling Line Labels | Machine-Ready Rolls",
  description,
  path: "/products/can-labels/blank",
  image: CAN_LABELS_IMG,
});


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
      "name": "Filling Line Labels",
      "item": "https://www.zxpapers.com/products/can-labels"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Blank",
      "item": "https://www.zxpapers.com/products/can-labels/blank"
    }
  ]
};

export const revalidate = 86400; // 24 hours: static product/market content

export default async function BlankCanLabelsPage() {
  const heroImage = await getSlotImage("can-labels:blank-hero", CAN_LABELS_IMG);
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Blank Filling Line Labels | Machine-Ready Rolls",
    description,
    "image": heroImage,
    "url": "https://www.zxpapers.com/products/can-labels/blank",
    "about": { "@type": "Thing", "name": "Blank Filling Line Labels" },
  };
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
            <Link href="/products/can-labels" className="hover:text-blue-600">Filling Line Labels</Link>
            <span className="mx-1">/</span>
            <span>Blank Filling Line Labels</span>
          </div>
        </div>
      </div>

      <div className="container py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">

            <div className="flex flex-col sm:flex-row gap-6">
              <Image
                src={heroImage}
                alt="Blank filling line label rolls"
                className="w-full sm:w-64 h-48 object-cover rounded-2xl flex-shrink-0"
               width={256} height={192} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              <div>
                <span className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  Filling Line Labels
                </span>
                <h1
                  className="text-3xl font-extrabold text-slate-900 mb-3"

                >
                  Blank Filling Line Labels
                </h1>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Unprinted machine-ready roll label options include white gloss, matte, kraft, and clear film.
                  They can support in-house printing, private-label, or variable-data workflows after printer,
                  container surface, exposure, adhesive, sensor, liner and applicator requirements are reviewed.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Unprinted", "White / Kraft / Clear", "Printer Review", "Surface Review", "Project-Based Quantity"].map((tag) => (
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
                  "White gloss, matte, kraft, and clear film options",
                  "Adhesive selected after production-can surface review",
                  "Condensation and moisture exposure defined before testing",
                  "Die-cut and roll geometry matched to the applicator",
                  "Printer, ink or ribbon and DPI reviewed together",
                  "Liner and release selected for the label head",
                  "Material documentation confirmed by construction and market",
                  "Trial and inspection criteria recorded by project",
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
                {["Craft Beverages", "Canned Food", "Pet Food", "Seafood", "Paint & Coatings", "Industrial Containers", "Private Label", "Variable Data Printing"].map((app) => (
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
              <p className="text-sm text-slate-500 mb-5">Response timing is confirmed after requirements review.</p>
              <InquiryForm
                compact
                productName="Blank Machine-Ready Roll Labels for Filling Lines"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
