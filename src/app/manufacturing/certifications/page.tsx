import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import { CheckCircle, Award, ArrowRight } from "lucide-react";
import { SITE } from "@/config/siteData";
import { COMPLIANCE_EVIDENCE } from "@/config/complianceData";
import { getSlotImage } from "@/lib/imageSlotUtils";

export const metadata: Metadata = {
  title: { absolute: "Compliance Documents & Certifications | ZhixinPaper" },
  description: "Review the quality, material and compliance documents relevant to thermal paper and label procurement, including issuer, scope, subject and validity.",
  alternates: { canonical: `${SITE.domain}/manufacturing/certifications` },
};

const IMG_CERTIFICATIONS = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/factory-certifications-wall-nK5qw4NqyVUzdjSjcD66Qh.webp";

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  blue:   { bg: "bg-blue-50",   text: "text-blue-600",   border: "border-blue-200" },
  green:  { bg: "bg-green-50",  text: "text-green-600",  border: "border-green-200" },
  amber:  { bg: "bg-amber-50",  text: "text-amber-600",  border: "border-amber-200" },
  purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" },
  teal:   { bg: "bg-teal-50",   text: "text-teal-600",   border: "border-teal-200" },
  indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200" },
};


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
      "name": "Manufacturing",
      "item": "https://www.zxpapers.com/manufacturing"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Certifications",
      "item": "https://www.zxpapers.com/manufacturing/certifications"
    }
  ]
};

export const revalidate = 86400; // 24 hours: certifications content rarely changes

export default async function CertificationsPage() {
  const certificationsHeroImage = await getSlotImage("manufacturing:certifications-hero", IMG_CERTIFICATIONS);
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHero
        bgImage={certificationsHeroImage}
        bgImageAlt="ZhixinPaper compliance documents and certification evidence for thermal paper and labels"
        overlayDir="left"
        overlayOpacity={60}
        minHeight="min-h-[380px]"
        compact
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Manufacturing", href: "/manufacturing" }, { label: "Certifications" }]}
        badge={{ text: "Manufacturing", color: "amber", icon: <Award className="w-4 h-4" /> }}
        eyebrow="Compliance scope and document review"
        title={<>Industry Certifications <span className="text-amber-400">&amp; Compliance</span></>}
        subtitle="Review the evidence types buyers may request for a specific product or order. Certificate scope, report dates, tested materials, and regulatory applicability must be checked on the supplied documents."
        trustBadges={[
          "FSC & ISO Records",
          "Batch-Specific Evidence",
          "Material Scope Review",
          "Validity Check",
        ]}
        mobileTrustBadgeLimit={2}
        ctas={[
          { label: "Review Evidence Types", href: "#compliance-evidence", variant: "primary" },
          { label: "Ask for Documentation", href: "/contact", variant: "outline" },
        ]}
      />

      <div className="container py-16">
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 mb-14">
          {COMPLIANCE_EVIDENCE.map(({ name, icon: Icon, color }) => {
            const c = colorMap[color];
            return (
              <div key={name} className={`flex flex-col items-center justify-center p-4 ${c.bg} border ${c.border} rounded-2xl text-center`}>
                <Icon className={`w-7 h-7 ${c.text} mb-2`} />
                <span className={`text-xs font-bold ${c.text} leading-tight`}>{name}</span>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          {COMPLIANCE_EVIDENCE.map(({ name, icon: Icon, color, kind, scope, basis, availability, description, buyerChecks }) => {
            const c = colorMap[color];
            return (
              <div key={name} className="bg-white border border-slate-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 ${c.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${c.text}`} />
                  </div>
                  <div>
                    <h3 className="font-sora font-extrabold text-slate-900 text-lg">{name}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{scope}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 mb-4 text-xs">
                  <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full"><strong>Evidence type:</strong> {kind}</span>
                  <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full"><strong>Availability:</strong> {availability}</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">{description}</p>
                <p className="mb-4 text-xs leading-relaxed text-slate-500"><strong>Evidence basis:</strong> {basis}</p>
                <ul className="space-y-1.5">
                  {buyerChecks.map((check) => (
                    <li key={check} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />{check}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="bg-brand-navy rounded-3xl p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-sora text-2xl font-extrabold mb-2">Need Documents for Supplier Review?</h2>
            <p className="text-slate-300 text-sm max-w-lg">Send the product specification and destination market. We will identify the relevant available certificate, test report, or declaration for your review; translations or notarization require separate confirmation.</p>
          </div>
          <Link href="/contact" className="font-sora flex-shrink-0 inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-7 py-3.5 rounded-xl transition-all whitespace-nowrap">
            Request Certificates <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </Layout>
  );
}
