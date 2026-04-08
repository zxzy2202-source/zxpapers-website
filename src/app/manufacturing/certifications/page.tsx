import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { CheckCircle, Shield, Award, ArrowRight, FileCheck, Leaf, Globe, Zap } from "lucide-react";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: "Certifications | ISO 9001 FSC BPA-Free RoHS",
  description: "ZhixinPaper certifications: ISO 9001:2015, FSC, BPA-Free, RoHS, REACH, CE. All certificates available upon request for import/customs requirements.",
  alternates: { canonical: `${SITE.domain}/manufacturing/certifications` },
};

const IMG_CERTIFICATIONS = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/factory-certifications-wall-nK5qw4NqyVUzdjSjcD66Qh.webp";

const certifications = [
  { name: "ISO 9001:2015", icon: Award, color: "blue", scope: "Quality Management System", body: "Bureau Veritas / SGS", validity: "2024–2027 (Annual Surveillance)", desc: "Our ISO 9001:2015 certification covers the entire manufacturing process — from raw material procurement through production, inspection, packaging, and delivery.", benefits: ["Internationally recognized quality standard", "Documented procedures for every process", "Continuous improvement framework", "Accepted by buyers in 80+ countries"] },
  { name: "FSC® Certified", icon: Leaf, color: "green", scope: "Forest Stewardship Council Chain of Custody", body: "FSC International", validity: "Active — Annual Audit", desc: "Our FSC Chain of Custody certification guarantees that all paper fiber used in our products originates from responsibly managed forests.", benefits: ["Responsibly sourced paper fiber", "Required by major European retailers", "Supports deforestation-free supply chains", "Available on all standard products"] },
  { name: "BPA-Free Verified", icon: Shield, color: "amber", scope: "Chemical Safety — No Bisphenol A", body: "SGS / Intertek Third-Party Lab", validity: "Per-batch testing", desc: "All our thermal paper products are verified BPA-free by independent third-party laboratories. Compliant with EU Regulation 2016/2235.", benefits: ["Compliant with EU Regulation 2016/2235", "Safe for food service and healthcare", "Third-party lab verified per batch", "BPS-free option also available"] },
  { name: "RoHS Compliant", icon: Globe, color: "purple", scope: "Restriction of Hazardous Substances", body: "EU Directive 2011/65/EU", validity: "Ongoing compliance", desc: "Our products comply with the EU RoHS Directive, restricting the use of lead, mercury, cadmium, hexavalent chromium, PBB, and PBDE.", benefits: ["Required for EU market access", "No heavy metals or hazardous substances", "Documented material declarations", "Supports WEEE compliance"] },
  { name: "REACH Compliant", icon: FileCheck, color: "teal", scope: "Registration, Evaluation, Authorisation of Chemicals", body: "EU REACH Regulation (EC) No 1907/2006", validity: "Ongoing compliance", desc: "We maintain full REACH compliance documentation for all chemical substances used in our thermal coatings. SVHC declarations available upon request.", benefits: ["Full chemical substance documentation", "SVHC declarations available", "Required for EU chemical compliance", "Supports supply chain transparency"] },
  { name: "CE Marking", icon: Zap, color: "indigo", scope: "European Conformity", body: "Self-declaration per applicable EU directives", validity: "Active", desc: "CE marking on our applicable products confirms conformity with EU health, safety, and environmental protection standards.", benefits: ["Required for EU/EEA market entry", "Confirms safety and compliance", "Enables free movement in Europe", "Backed by technical documentation"] },
];

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
      "item": "https://www.zhixinpaper.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Manufacturing",
      "item": "https://www.zhixinpaper.com/manufacturing"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Certifications",
      "item": "https://www.zhixinpaper.com/manufacturing/certifications"
    }
  ]
};
export default function CertificationsPage() {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="relative bg-[#0F2B5B] text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${IMG_CERTIFICATIONS})` }} />
        <div className="relative container">
          <div className="text-amber-400 text-sm font-semibold mb-3">
            <Link href="/manufacturing" className="hover:underline">Manufacturing</Link> / Certifications
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-amber-400" />
            </div>
            <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">Compliance & Certifications</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ fontFamily: "Sora, sans-serif" }}>
            Industry Certifications<br /><span className="text-amber-400">& Compliance</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Our products meet the most stringent international standards. All certificates are available for download and can be provided with every order.
          </p>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 mb-14">
          {certifications.map(({ name, icon: Icon, color }) => {
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
          {certifications.map(({ name, icon: Icon, color, scope, body, validity, desc, benefits }) => {
            const c = colorMap[color];
            return (
              <div key={name} className="bg-white border border-slate-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 ${c.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${c.text}`} />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-lg" style={{ fontFamily: "Sora, sans-serif" }}>{name}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{scope}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 mb-4 text-xs">
                  <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full"><strong>Issued by:</strong> {body}</span>
                  <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full"><strong>Validity:</strong> {validity}</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{desc}</p>
                <ul className="space-y-1.5">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />{b}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="bg-[#0F2B5B] rounded-3xl p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-extrabold mb-2" style={{ fontFamily: "Sora, sans-serif" }}>Need Copies of Our Certificates?</h2>
            <p className="text-slate-300 text-sm max-w-lg">All certificates are available upon request. We can provide original scans, translated versions, or notarized copies for import/customs requirements.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-7 py-3.5 rounded-xl transition-all whitespace-nowrap" style={{ fontFamily: "Sora, sans-serif" }}>
            Request Certificates <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </Layout>
  );
}
