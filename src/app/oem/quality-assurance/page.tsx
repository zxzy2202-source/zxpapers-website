import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/shared/InquiryForm";
import { FACTORY, CERTIFICATIONS, SITE } from "@/config/siteData";
import { Shield, CheckCircle, Award, ClipboardCheck, ArrowRight, Microscope } from "lucide-react";

export const metadata: Metadata = {
  title: "OEM Quality Assurance | ISO 9001 Certified",
  description: `ZhixinPaper OEM quality assurance: ISO 9001:2015 certified, multi-stage inspection, batch traceability, and third-party testing.`,
  alternates: {
    canonical: `${SITE.domain}/oem/quality-assurance`,
  },
};

const qaSteps = [
  {
    icon: ClipboardCheck,
    title: "Incoming Material Inspection",
    desc: "All raw materials — base paper, thermal coating chemicals — are tested upon arrival. Only materials meeting our strict specifications enter production.",
  },
  {
    icon: Shield,
    title: "In-Process Quality Control",
    desc: "Automated sensors monitor coating weight, thickness, and sensitivity throughout production. Any deviation triggers immediate line stop and review.",
  },
  {
    icon: Microscope,
    title: "Finished Product Testing",
    desc: "Every batch undergoes print sensitivity, image stability, and dimensional accuracy testing before packaging. Samples are retained for 12 months.",
  },
  {
    icon: Award,
    title: "Third-Party Certification",
    desc: "We support third-party lab testing (SGS, BV, Intertek) for OEM clients who require independent quality verification.",
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
      "name": "Quality Assurance",
      "item": "https://www.zhixinpaper.com/oem/quality-assurance"
    }
  ]
};
export default function QualityAssurancePage() {
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
            {" "}&rsaquo;{" "}Quality Assurance
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            OEM <span className="text-amber-400">Quality Assurance</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            ISO 9001:2015 certified quality management system. Every OEM order is produced, inspected, and documented to meet your exact specifications.
          </p>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* QA Steps */}
            <h2 className="section-title mb-8">Our Quality Control Process</h2>
            <div className="space-y-6 mb-12">
              {qaSteps.map(({ icon: Icon, title, desc }, i) => (
                <div key={title} className="flex gap-5 bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-md transition-all duration-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">Step {i + 1}</span>
                      <h3 className="font-bold text-slate-900">{title}</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="bg-slate-50 rounded-2xl p-8 mb-8">
              <h3 className="font-extrabold text-slate-900 text-lg mb-6">Certifications &amp; Compliance</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {CERTIFICATIONS.map(({ name, desc }) => (
                  <div key={name} className="flex items-center gap-3 bg-white rounded-xl p-3 border border-slate-200">
                    <Award className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-slate-900 text-sm">{name}</div>
                      <div className="text-xs text-slate-500">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* OEM QA commitments */}
            <div>
              <h3 className="font-extrabold text-slate-900 text-lg mb-5">Our Quality Commitments to OEM Partners</h3>
              <div className="space-y-3">
                {[
                  "Batch traceability — every roll can be traced back to its production run",
                  "Certificate of Conformance (CoC) provided with every shipment",
                  "Retained samples kept for 12 months after delivery",
                  "Third-party inspection (SGS, BV, Intertek) supported and welcomed",
                  "Pre-shipment inspection reports available on request",
                  "Full refund or replacement for any quality non-conformance",
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
              <InquiryForm productName="OEM Quality Assurance" formId="qa-form" />
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
              <h4 className="font-bold text-blue-900 mb-2 text-sm">Factory Stats</h4>
              <div className="space-y-2">
                {[
                  { label: "Production Lines", value: FACTORY.productionLines },
                  { label: "Annual Output", value: FACTORY.annualOutputLabel },
                  { label: "OEM Clients", value: FACTORY.oemClients },
                  { label: "Countries Served", value: FACTORY.countriesServed },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between text-sm">
                    <span className="text-blue-700">{label}</span>
                    <span className="font-bold text-blue-900">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-5">
              <h4 className="font-bold text-slate-900 mb-3 text-sm">Related Pages</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/manufacturing/certifications" className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1.5 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" /> View All Certifications
                  </Link>
                </li>
                <li>
                  <Link href="/manufacturing/quality-control" className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1.5 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" /> Quality Control Process
                  </Link>
                </li>
                <li>
                  <Link href="/oem" className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1.5 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" /> OEM Services Overview
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
