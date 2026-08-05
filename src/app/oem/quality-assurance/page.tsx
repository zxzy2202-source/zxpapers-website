import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/shared/InquiryForm";
import PageHero from "@/components/shared/PageHero";
import { FACTORY, SITE } from "@/config/siteData";
import { COMPLIANCE_EVIDENCE } from "@/config/complianceData";
import { Shield, CheckCircle, Award, ClipboardCheck, ArrowRight, Microscope, MessageSquare, Phone } from "lucide-react";
import { getSlotImage } from "@/lib/imageSlotUtils";

const OEM_QUALITY_ASSURANCE_IMG_FB = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/factory-qc-lab-GCyjnzeVMfG7M54TSNubFr.webp";

export const metadata: Metadata = {
  title: { absolute: "OEM Quality Assurance & Traceability | ZhixinPaper" },
  description: `Review the OEM approval workflow for incoming materials, in-process inspection, samples, batch records, packing and third-party test requirements.`,
  alternates: {
    canonical: `${SITE.domain}/oem/quality-assurance`,
  },
};

const qaSteps = [
  {
    icon: ClipboardCheck,
    title: "Incoming Material Review",
    desc: "Incoming material checks are defined by the approved product specification and quality plan. Required records can be agreed before production.",
  },
  {
    icon: Shield,
    title: "In-Process Quality Control",
    desc: "Process parameters and inspection points are set for the approved specification. Deviations are reviewed under the applicable order quality plan.",
  },
  {
    icon: Microscope,
    title: "Finished Product Testing",
    desc: "Finished-product checks, sampling frequency, acceptance criteria, and any retained-sample period are confirmed for the product and order.",
  },
  {
    icon: Award,
    title: "Independent Testing",
    desc: "Third-party laboratory or inspection arrangements can be included when requested and agreed, with scope, provider, timing, and cost confirmed before order.",
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
      "item": "https://www.zxpapers.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "OEM Services",
      "item": "https://www.zxpapers.com/oem"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Quality Assurance",
      "item": "https://www.zxpapers.com/oem/quality-assurance"
    }
  ]
};

export const revalidate = 3600; // 1 hour: slot image changes infrequently

export default async function QualityAssurancePage() {
  const heroImage = await getSlotImage("oem:quality-assurance-hero", OEM_QUALITY_ASSURANCE_IMG_FB);
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHero
        bgImage={heroImage}
        bgImageAlt="ZhixinPaper OEM quality assurance and traceability workflow for thermal paper and labels"
        overlayDir="left"
        overlayOpacity={62}
        minHeight="min-h-[380px]"
        compact
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "OEM Services", href: "/oem" }, { label: "Quality Assurance" }]}
        badge={{ text: "OEM Service", color: "amber" }}
        eyebrow="Inspection planning and batch traceability"
        title={<>OEM <span className="text-amber-400">Quality Assurance</span></>}
        subtitle="Define the applicable specification, inspection plan, acceptance criteria, records, and independent-testing requirements before OEM production."
        trustBadges={[
          "Incoming Material Review",
          "In-Process Control",
          "Batch Traceability",
          "Third-Party Testing",
        ]}
        mobileTrustBadgeLimit={2}
        ctas={[
          { label: "Request QA Review", href: "#qa-form", variant: "primary", icon: <MessageSquare className="w-4 h-4" /> },
          { label: "WhatsApp QA Team", href: `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I need an OEM quality assurance review for thermal rolls or labels.")}`, variant: "whatsapp", icon: <Phone className="w-4 h-4" />, external: true },
        ]}
      />

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

            {/* Compliance evidence */}
            <div className="bg-slate-50 rounded-2xl p-8 mb-8">
              <h3 className="font-extrabold text-slate-900 text-lg mb-2">Compliance Evidence</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Evidence type, scope, validity, and order relevance are confirmed before a claim is used for an OEM product.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {COMPLIANCE_EVIDENCE.map(({ name, kind, availability, icon: Icon }) => (
                  <div key={name} className="flex items-start gap-3 bg-white rounded-xl p-3 border border-slate-200">
                    <Icon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-slate-900 text-sm">{name}</div>
                      <div className="text-xs font-semibold text-blue-700">{kind}</div>
                      <div className="text-xs text-slate-500 mt-1 leading-relaxed">{availability}</div>
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
                  "Batch traceability scope is defined for the applicable product and production records",
                  "Certificates of conformance or inspection records can be agreed as order documents",
                  "Any retained-sample period is confirmed in the order quality plan",
                  "Independent inspection or laboratory testing can be arranged when scope, provider, timing, and cost are agreed",
                  "Pre-shipment inspection reports are available when included in the approved inspection plan",
                  "Non-conformance handling follows the agreed specification, contract terms, and corrective-action process",
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
                    <ArrowRight className="w-3.5 h-3.5" /> Review Compliance Evidence
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
