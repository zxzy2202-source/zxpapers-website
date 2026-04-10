import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/shared/InquiryForm";
import { CheckCircle, ArrowRight } from "lucide-react";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: "Private Label Packaging | Custom Branding",
  description: "Custom private label packaging for thermal paper rolls and labels. Box design, shrink wrap, retail display packaging. MOQ 1,000 units.",
  alternates: { canonical: `${SITE.domain}/oem/packaging` },
};

const IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/oem-packaging-hhtzW7wquosmF8ub6HjVJV.webp";


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
      "name": "OEM Services",
      "item": "https://www.zhixinpaper.com/oem"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Packaging",
      "item": "https://www.zhixinpaper.com/oem/packaging"
    }
  ]
};
export default function PackagingPage() {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="relative bg-[#0F2B5B] text-white py-14 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${IMG})` }} />
        <div className="relative container">
          <div className="text-amber-400 text-sm font-semibold mb-3">
            <Link href="/oem" className="hover:underline">OEM</Link> / Packaging
          </div>
          <h1 className="font-sora text-4xl font-extrabold mb-3">Packaging &amp; Private Label</h1>
          <p className="text-slate-300 max-w-xl">Complete private label solutions — from custom box design to branded packaging.</p>
        </div>
      </div>
      <div className="container py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <p className="text-slate-600 leading-relaxed">Build your own brand with our private label packaging service. We design and produce custom boxes, sleeves, and labels with your brand identity. Perfect for distributors who want to sell under their own brand.</p>
            <div>
              <h2 className="font-sora text-xl font-bold text-slate-900 mb-4">Packaging Options</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Individual roll shrink wrap with custom label", "Box packaging (10/50/100 rolls per box)", "Display box for retail shelf placement", "Custom sleeve packaging", "Bulk poly bag packaging", "Eco-friendly kraft paper packaging"].map((b) => (
                  <div key={b} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />{b}
                  </div>
                ))}
              </div>
            </div>
            <Link href="/contact" className="font-sora inline-flex items-center gap-2 bg-[#0F2B5B] hover:bg-[#1E6FD9] text-white font-bold px-7 py-3.5 rounded-xl transition-all text-sm">
              Request Packaging Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div>
            <div className="sticky top-28 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="font-sora text-lg font-bold text-slate-900 mb-1">Get a Quote</h3>
              <p className="text-sm text-slate-500 mb-5">Response within 12 hours</p>
              <InquiryForm productName="Packaging & Private Label" compact />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
