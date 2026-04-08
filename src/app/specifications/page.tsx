import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: "Thermal Paper Specifications | Technical Data",
  description: "Complete technical specifications for all thermal paper rolls and labels: dimensions, paper weight, coating grades, image life, temperature range, and.",
  alternates: { canonical: `${SITE.domain}/specifications` },
};

const rollSpecs = [
  { size: "80x80mm", width: "80mm", length: "80m", core: "12/25mm", od: "80mm", weight: "55-58gsm", life: "5-7 years", market: "Global POS" },
  { size: "57x50mm", width: "57mm", length: "50m", core: "12mm", od: "50mm", weight: "48-55gsm", life: "5-7 years", market: "Portable printers" },
  { size: "80x70mm", width: "80mm", length: "70m", core: "12/25mm", od: "70mm", weight: "55gsm", life: "5-7 years", market: "Restaurant KDS" },
  { size: "110x80mm", width: "110mm", length: "80m", core: "25mm", od: "80mm", weight: "58gsm", life: "5-7 years", market: "Wide-format" },
  { size: "57x40mm", width: "57mm", length: "40m", core: "12mm", od: "40mm", weight: "48gsm", life: "5 years", market: "Parking/transit" },
  { size: "57x30mm", width: "57mm", length: "30m", core: "12mm", od: "30mm", weight: "48gsm", life: "5 years", market: "Compact kiosks" },
];

const labelSpecs = [
  { size: "4x6 in", width: '4"', height: '6"', perRoll: "250-500", core: '1"', adhesive: "Permanent", life: "5-7 years", app: "Shipping labels" },
  { size: "2x1 in", width: '2"', height: '1"', perRoll: "1,000-2,000", core: '1"', adhesive: "Permanent", life: "5-7 years", app: "Barcode labels" },
  { size: "4x3 in", width: '4"', height: '3"', perRoll: "500-1,000", core: '1"', adhesive: "Permanent", life: "5-7 years", app: "Product labels" },
  { size: "3x2 in", width: '3"', height: '2"', perRoll: "500-1,000", core: '1"', adhesive: "Permanent", life: "5-7 years", app: "Retail tags" },
  { size: "2x4 in", width: '2"', height: '4"', perRoll: "250-500", core: '1"', adhesive: "Permanent", life: "5-7 years", app: "Shipping/logistics" },
  { size: "1x1 in", width: '1"', height: '1"', perRoll: "2,000-5,000", core: '1"', adhesive: "Permanent/Removable", life: "5-7 years", app: "Small item tags" },
];

const coatingGrades = [
  { grade: "Standard", dev: "BPA", life: "5-7 years", use: "General POS, receipts", bgClass: "bg-slate-50", borderClass: "border-slate-100", titleClass: "text-slate-700" },
  { grade: "BPA-Free", dev: "BPS / Urea", life: "5-7 years", use: "EU market, food service", bgClass: "bg-blue-50", borderClass: "border-blue-100", titleClass: "text-blue-700" },
  { grade: "Phenol-Free", dev: "No phenol", life: "5-7 years", use: "Strictest compliance", bgClass: "bg-green-50", borderClass: "border-green-100", titleClass: "text-green-700" },
  { grade: "Premium", dev: "BPA-Free + top coat", life: "10+ years", use: "Medical, archival, legal", bgClass: "bg-amber-50", borderClass: "border-amber-100", titleClass: "text-amber-700" },
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
      "name": "Specifications",
      "item": "https://www.zhixinpaper.com/specifications"
    }
  ]
};
export default function SpecificationsPage() {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="bg-[#0F2B5B] text-white py-14">
        <div className="container">
          <div className="text-amber-400 text-sm font-semibold mb-3">Technical Reference</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ fontFamily: "Sora, sans-serif" }}>
            Product <span className="text-amber-400">Specifications</span>
          </h1>
          <p className="text-slate-300 max-w-2xl text-lg">Complete technical specifications for all thermal paper rolls and labels. Use this reference to select the right product for your application.</p>
        </div>
      </div>

      <div className="container py-14 space-y-14">
        {/* Thermal Paper Rolls */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6" style={{ fontFamily: "Sora, sans-serif" }}>Thermal Paper Rolls — Standard Specifications</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-2xl overflow-hidden">
              <thead className="bg-[#0F2B5B] text-white">
                <tr>
                  {["Size", "Width", "Length", "Core (ID)", "OD", "Paper Weight", "Image Life", "Markets"].map((h) => (
                    <th key={h} className="px-4 py-3 text-left font-semibold text-xs">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rollSpecs.map(({ size, width, length, core, od, weight, life, market }, i) => (
                  <tr key={size} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 font-bold text-blue-700">{size}</td>
                    <td className="px-4 py-3 text-slate-700">{width}</td>
                    <td className="px-4 py-3 text-slate-700">{length}</td>
                    <td className="px-4 py-3 text-slate-700">{core}</td>
                    <td className="px-4 py-3 text-slate-700">{od}</td>
                    <td className="px-4 py-3 text-slate-700">{weight}</td>
                    <td className="px-4 py-3 text-slate-700">{life}</td>
                    <td className="px-4 py-3 text-slate-700">{market}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Thermal Labels */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6" style={{ fontFamily: "Sora, sans-serif" }}>Thermal Labels — Standard Specifications</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-2xl overflow-hidden">
              <thead className="bg-[#0F2B5B] text-white">
                <tr>
                  {["Size", "Width", "Height", "Labels/Roll", "Core (ID)", "Adhesive", "Image Life", "Applications"].map((h) => (
                    <th key={h} className="px-4 py-3 text-left font-semibold text-xs">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {labelSpecs.map(({ size, width, height, perRoll, core, adhesive, life, app }, i) => (
                  <tr key={size} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 font-bold text-amber-700">{size}</td>
                    <td className="px-4 py-3 text-slate-700">{width}</td>
                    <td className="px-4 py-3 text-slate-700">{height}</td>
                    <td className="px-4 py-3 text-slate-700">{perRoll}</td>
                    <td className="px-4 py-3 text-slate-700">{core}</td>
                    <td className="px-4 py-3 text-slate-700">{adhesive}</td>
                    <td className="px-4 py-3 text-slate-700">{life}</td>
                    <td className="px-4 py-3 text-slate-700">{app}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Coating Grades */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6" style={{ fontFamily: "Sora, sans-serif" }}>Coating Grades</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {coatingGrades.map(({ grade, dev, life, use, bgClass, borderClass, titleClass }) => (
              <div key={grade} className={`${bgClass} border ${borderClass} rounded-2xl p-6`}>
                <div className={`text-lg font-extrabold ${titleClass} mb-2`} style={{ fontFamily: "Sora, sans-serif" }}>{grade}</div>
                <div className="text-xs text-slate-500 mb-1">Developer: <strong className="text-slate-700">{dev}</strong></div>
                <div className="text-xs text-slate-500 mb-1">Image Life: <strong className="text-slate-700">{life}</strong></div>
                <div className="text-xs text-slate-500">Best For: <strong className="text-slate-700">{use}</strong></div>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-slate-50 rounded-3xl p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-2" style={{ fontFamily: "Sora, sans-serif" }}>Need Custom Specifications?</h2>
            <p className="text-slate-600 text-sm max-w-lg">We manufacture to any specification. Contact our technical team with your requirements for a custom quote.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 bg-[#0F2B5B] hover:bg-[#1E6FD9] text-white font-bold px-7 py-3.5 rounded-xl transition-all whitespace-nowrap" style={{ fontFamily: "Sora, sans-serif" }}>
            Request Custom Specs <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </Layout>
  );
}
