import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/shared/InquiryForm";
import PageHero from "@/components/shared/PageHero";
import { SITE } from "@/config/siteData";
import { Shield, Lock, FileText, CheckCircle, ArrowRight, Eye, MessageSquare, Phone } from "lucide-react";
import { getSlotImage } from "@/lib/imageSlotUtils";

const OEM_IP_PROTECTION_IMG_FB = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/oem-factory-EHdu8eZwwzSo5DxSRyzQdF.webp";

export const metadata: Metadata = {
  title: "IP Protection & NDA | Confidential OEM",
  description: `Review NDA, file-access, design-use, and tooling-ownership terms for confidential OEM projects with ZhixinPaper.`,
  alternates: {
    canonical: `${SITE.domain}/oem/ip-protection`,
  },
};

const protections = [
  {
    icon: FileText,
    title: "Non-Disclosure Agreement (NDA)",
    desc: "A mutual NDA can be reviewed before confidential information is exchanged; obligations apply as stated in the signed agreement.",
  },
  {
    icon: Lock,
    title: "Design Use & Disclosure",
    desc: "Permitted use, disclosure, recipients, and file-access controls for custom designs are documented in the signed NDA and project terms.",
  },
  {
    icon: Shield,
    title: "Mold & Tooling Terms",
    desc: "Ownership, permitted use, storage, maintenance, and release of custom tooling are governed by the signed tooling agreement and order terms.",
  },
  {
    icon: Eye,
    title: "Factory Access Control",
    desc: "Access to confidential OEM files and designated production areas is managed under the applicable project controls and visitor approval process.",
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
      "name": "IP Protection",
      "item": "https://www.zxpapers.com/oem/ip-protection"
    }
  ]
};

export const revalidate = 3600; // 1 hour: slot image changes infrequently

export default async function IPProtectionPage() {
  const heroImage = await getSlotImage("oem:ip-protection-hero", OEM_IP_PROTECTION_IMG_FB);
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHero
        bgImage={heroImage}
        bgImageAlt="ZhixinPaper OEM IP protection and NDA workflow for confidential thermal paper and label projects"
        overlayDir="left"
        overlayOpacity={62}
        minHeight="min-h-[380px]"
        compact
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "OEM Services", href: "/oem" }, { label: "IP Protection & NDA" }]}
        badge={{ text: "OEM Service", color: "amber" }}
        eyebrow="Confidential files, tooling and access control"
        title={<>IP Protection <span className="text-amber-400">&amp; NDA</span></>}
        subtitle="Confidentiality scope, recipients, handling requirements, term, exclusions, and remedies are defined in the signed agreement for the applicable OEM project."
        trustBadges={[
          "Mutual NDA Review",
          "Design Use Controls",
          "Tooling Terms",
          "File Access Rules",
        ]}
        mobileTrustBadgeLimit={2}
        ctas={[
          { label: "Request NDA Review", href: "#nda-form", variant: "primary", icon: <MessageSquare className="w-4 h-4" /> },
          { label: "WhatsApp NDA Team", href: `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I would like to discuss NDA and IP protection terms for an OEM project.")}`, variant: "whatsapp", icon: <Phone className="w-4 h-4" />, external: true },
        ]}
      />

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
                  { step: "02", title: "Review & Sign", desc: "We aim to provide or review an NDA draft within one business day; custom terms are subject to review and mutual agreement." },
                  { step: "03", title: "Controlled Discussion", desc: "Once signed, confidential information can be exchanged within the agreement's defined purpose, recipients, and handling requirements." },
                  { step: "04", title: "Ongoing Protection", desc: "The confidentiality term, exclusions, return or destruction requirements, and remedies follow the signed agreement." },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4">
                    <div className="w-9 h-9 bg-brand-navy text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
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
                  "Mutual NDA review available before confidential information is exchanged",
                  "Design use and disclosure governed by the signed agreement",
                  "Tooling ownership and permitted use documented in project terms",
                  "Project-specific access controls for confidential OEM files",
                  "Internal confidentiality obligations applied where relevant",
                  "File handling and access records defined by the project controls",
                  "Remedies and dispute handling follow the signed agreement and applicable law",
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
              <p className="text-xs text-slate-500 mb-4">We aim to provide or review an NDA draft within one business day, subject to the required details and mutual review.</p>
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
