import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/shared/InquiryForm";
import { SITE } from "@/config/siteData";
import { Shield, Lock, FileText, CheckCircle, ArrowRight, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "IP Protection & NDA | Confidential OEM",
  description: `ZhixinPaper protects your brand and intellectual property. NDA available before discussion. Exclusive mold ownership for OEM clients.`,
  alternates: {
    canonical: `${SITE.domain}/oem/ip-protection`,
  },
};

const protections = [
  {
    icon: FileText,
    title: "Non-Disclosure Agreement (NDA)",
    desc: "We sign an NDA before any design, pricing, or business discussion. Your brand identity, product specifications, and business plans remain strictly confidential.",
  },
  {
    icon: Lock,
    title: "Design Exclusivity",
    desc: "Your custom designs, artwork, and packaging are never shared with or sold to other clients. We maintain strict file access controls.",
  },
  {
    icon: Shield,
    title: "Mold & Tooling Ownership",
    desc: "Any custom molds or tooling created for your OEM order remain your property. We will not use them for any other client.",
  },
  {
    icon: Eye,
    title: "Factory Access Control",
    desc: "Production of your OEM orders is restricted to authorized personnel only. Visitor access to your production line requires prior approval.",
  },
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
      "name": "IP Protection",
      "item": "https://www.zhixinpaper.com/oem/ip-protection"
    }
  ]
};
export default function IPProtectionPage() {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="page-hero">
        <div className="page-hero-content">
          <div className="text-xs text-amber-400 font-semibold uppercase tracking-widest mb-3">
            <Link href="/oem" className="hover:text-amber-300 transition-colors">OEM Services</Link>
            {" "}&rsaquo;{" "}IP Protection &amp; NDA
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            IP Protection <span className="text-amber-400">&amp; NDA</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Your brand, designs, and business information are protected at every stage. We sign NDAs before any discussion and enforce strict confidentiality policies.
          </p>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="section-title mb-8">How We Protect Your IP</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {protections.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-md transition-all duration-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            {/* NDA process */}
            <div className="bg-slate-50 rounded-2xl p-8 mb-8">
              <h3 className="font-extrabold text-slate-900 text-lg mb-5">NDA Process</h3>
              <div className="space-y-4">
                {[
                  { step: "01", title: "Request NDA", desc: "Contact us and request an NDA before sharing any sensitive information." },
                  { step: "02", title: "Review & Sign", desc: "We send our standard NDA within 24 hours. Custom NDA terms are also accepted." },
                  { step: "03", title: "Secure Discussion", desc: "Once signed, we can discuss your product specifications, designs, and business requirements in full confidence." },
                  { step: "04", title: "Ongoing Protection", desc: "The NDA remains in effect throughout our business relationship and for 3 years after termination." },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4">
                    <div className="w-9 h-9 bg-[#0F2B5B] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {step}
                    </div>
                    <div className="pt-0.5">
                      <div className="font-semibold text-slate-900 text-sm mb-1">{title}</div>
                      <div className="text-sm text-slate-600">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Commitments */}
            <div>
              <h3 className="font-extrabold text-slate-900 text-lg mb-5">Our IP Commitments</h3>
              <div className="space-y-3">
                {[
                  "NDA signed before any design or pricing discussion",
                  "Your designs are never shared with competitors or third parties",
                  "Custom molds and tooling remain your exclusive property",
                  "Strict internal access controls for OEM client files",
                  "Employee confidentiality agreements in place",
                  "Secure file storage with access logging",
                  "Legal recourse available for any breach of confidentiality",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-1 text-base">Request NDA</h3>
              <p className="text-xs text-slate-500 mb-4">We&apos;ll send you our standard NDA within 24 hours.</p>
              <InquiryForm
                productName="NDA Request"
                compact
                initialMessage="I would like to request an NDA before discussing our OEM requirements."
                formId="nda-form"
              />
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
              <h4 className="font-bold text-amber-900 mb-2 text-sm">Why It Matters</h4>
              <p className="text-sm text-amber-800">
                Many distributors build their brand on unique packaging. We understand that your designs are a competitive advantage — and we treat them that way.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-5">
              <h4 className="font-bold text-slate-900 mb-3 text-sm">Related Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/oem/packaging" className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1.5 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" /> Packaging & Private Label
                  </Link>
                </li>
                <li>
                  <Link href="/oem/design-support" className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1.5 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" /> Design Support
                  </Link>
                </li>
                <li>
                  <Link href="/oem/case-studies" className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1.5 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" /> OEM Case Studies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
