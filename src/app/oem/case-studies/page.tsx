import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/shared/InquiryForm";
import { ArrowRight, Globe, Package, Star } from "lucide-react";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: "OEM Case Studies | Global Client Stories",
  description: "See how global distributors and retailers have grown their business with ZhixinPaper OEM thermal paper solutions. Case studies from 80+ countries.",
  alternates: { canonical: `${SITE.domain}/oem/case-studies` },
};

const IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/oem-case-studies-9rH8TwtueWnEYR6AtotPsw.webp";

const cases = [
  { region: "North America", client: "Major US Office Supply Distributor", challenge: "Needed a reliable private label thermal paper supplier for 500+ retail locations.", solution: "Custom branded thermal rolls with private label packaging. Dedicated production line.", result: "40% cost reduction vs. previous supplier. 99.8% on-time delivery rate.", Icon: Globe },
  { region: "Europe", client: "UK Hospitality POS Supplier", challenge: "Required BPA-free thermal paper to comply with EU regulations for food service.", solution: "BPA-free thermal rolls with custom printing and FSC-certified packaging.", result: "Full EU regulatory compliance achieved. Expanded to 3 new European markets.", Icon: Package },
  { region: "Southeast Asia", client: "Regional E-commerce Logistics Company", challenge: "Needed high-volume 4x6 thermal labels for same-day shipping operations.", solution: "Custom thermal labels with enhanced adhesive for high-speed automated printing.", result: "Reduced label failures by 95%. Processing speed increased by 30%.", Icon: Star },
];


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
      "name": "Case Studies",
      "item": "https://www.zhixinpaper.com/oem/case-studies"
    }
  ]
};
export default function CaseStudiesPage() {
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
            <Link href="/oem" className="hover:underline">OEM</Link> / Case Studies
          </div>
          <h1 className="font-sora text-4xl font-extrabold mb-3">OEM Case Studies</h1>
          <p className="text-slate-300 max-w-xl">Real results from global clients who trust ZhixinPaper for their OEM thermal paper needs.</p>
        </div>
      </div>
      <div className="container py-14">
        <div className="space-y-8 mb-16">
          {cases.map((c) => (
            <div key={c.region} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <c.Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full font-medium">{c.region}</span>
                    <h3 className="font-sora font-bold text-slate-900">{c.client}</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                    <div><div className="font-semibold text-slate-700 mb-1">Challenge</div><div className="text-slate-600">{c.challenge}</div></div>
                    <div><div className="font-semibold text-slate-700 mb-1">Solution</div><div className="text-slate-600">{c.solution}</div></div>
                    <div><div className="font-semibold text-green-700 mb-1">Result</div><div className="text-green-600">{c.result}</div></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-slate-50 rounded-3xl p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="font-sora text-2xl font-bold text-slate-900 mb-3">Ready to Be Our Next Success Story?</h2>
              <p className="text-slate-600 mb-6">Join 2,000+ global clients who trust ZhixinPaper for their OEM thermal paper needs. Tell us your requirements and we&apos;ll respond within 12 hours.</p>
              <ul className="space-y-2 mb-6">
                {["Free design proof within 24 hours", "MOQ 1,000 rolls — flexible for new clients", "CIF delivery to 80+ countries", "Dedicated OEM account manager"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                    <Star className="w-4 h-4 text-amber-500 flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
              <Link href="/contact/oem-partnership" className="font-sora inline-flex items-center gap-2 bg-[#0F2B5B] hover:bg-[#1E6FD9] text-white font-bold px-6 py-3 rounded-xl transition-all text-sm">
                View OEM Partnership Page <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <InquiryForm productName="OEM Partnership" formId="case-studies-cta" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
