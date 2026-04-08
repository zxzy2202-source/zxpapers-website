import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/shared/InquiryForm";
import { SITE } from "@/config/siteData";
import {
  CheckCircle, Shield, ArrowRight,
  ClipboardCheck, Microscope, BarChart3, RefreshCw,
  Settings, Gauge,
} from "lucide-react";

export const metadata: Metadata = {
  title: "6-Stage Quality Control | ISO 9001 Process",
  description: "ZhixinPaper quality control: 6-stage inspection from raw materials to final batch release. 99.8% pass rate, 100% batch traceability, ISO 9001 certified.",
  alternates: { canonical: `${SITE.domain}/manufacturing/quality-control` },
};

const IMG_QC_LAB = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/factory-qc-lab-GCyjnzeVMfG7M54TSNubFr.webp";

const qcStages = [
  { step: "01", title: "Raw Material Inspection", icon: Microscope, desc: "Every incoming roll of base paper and chemical coating is tested for weight (g/m²), moisture content, brightness, and chemical composition before entering production.", checks: ["Basis weight (±1g/m²)", "Moisture content (<6%)", "Brightness (≥80 ISO)", "BPA/BPS chemical test"] },
  { step: "02", title: "In-Process Monitoring", icon: Gauge, desc: "Real-time sensors on every coating line monitor coating weight, drying temperature, and line speed. Statistical Process Control (SPC) charts flag deviations instantly.", checks: ["Coating weight uniformity", "Drying temperature curve", "Line speed consistency", "Real-time SPC alerts"] },
  { step: "03", title: "Slitting & Rewinding QC", icon: Settings, desc: "After coating, paper is slit to exact widths. Automated vision systems detect edge defects, splices, and surface contamination. Roll diameter and length are verified per batch.", checks: ["Width tolerance ±0.5mm", "Edge quality inspection", "Roll length verification", "Splice detection"] },
  { step: "04", title: "Thermal Performance Testing", icon: ClipboardCheck, desc: "Finished rolls are printed on reference printers at standard and extreme temperatures to verify image density, print speed compatibility, and image stability.", checks: ["Print density (OD ≥1.0)", "Image stability test", "Low/high temp print test", "Printer compatibility"] },
  { step: "05", title: "Aging & Durability Test", icon: RefreshCw, desc: "Samples from each batch undergo accelerated aging (60°C / 80% RH for 24h) to simulate 5+ years of storage. Image retention must meet ≥80% density after aging.", checks: ["Accelerated aging (60°C/80%RH)", "Image retention ≥80%", "Adhesive performance (labels)", "Chemical resistance"] },
  { step: "06", title: "Final Batch Release", icon: BarChart3, desc: "Each production batch receives a Certificate of Conformance (CoC) with full test data. Batch traceability codes are printed on packaging for end-to-end accountability.", checks: ["Certificate of Conformance", "Batch traceability code", "AQL sampling inspection", "Customer-specific tests"] },
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
      "name": "Manufacturing",
      "item": "https://www.zhixinpaper.com/manufacturing"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Quality Control",
      "item": "https://www.zhixinpaper.com/manufacturing/quality-control"
    }
  ]
};
export default function QualityControlPage() {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="relative bg-[#0F2B5B] text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${IMG_QC_LAB})` }} />
        <div className="relative container">
          <div className="text-amber-400 text-sm font-semibold mb-3">
            <Link href="/manufacturing" className="hover:underline">Manufacturing</Link> / Quality Control
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-amber-400" />
            </div>
            <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">Quality Management</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ fontFamily: "Sora, sans-serif" }}>
            6-Stage Quality<br /><span className="text-amber-400">Control System</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Every roll and label passes through six rigorous inspection stages — from raw material intake to final batch release — ensuring consistent quality for every order.
          </p>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[{ value: "6", label: "QC Stages" }, { value: "99.8%", label: "Pass Rate" }, { value: "100%", label: "Batch Traced" }, { value: "ISO 9001", label: "Certified" }].map(({ value, label }) => (
                <div key={label} className="bg-slate-50 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-extrabold text-[#0F2B5B]" style={{ fontFamily: "Sora, sans-serif" }}>{value}</div>
                  <div className="text-xs text-slate-500 mt-1">{label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {qcStages.map(({ step, title, icon: Icon, desc, checks }) => (
                <div key={step} className="flex gap-5 p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-blue-400 bg-blue-50 px-2 py-0.5 rounded-full">Stage {step}</span>
                      <h3 className="font-bold text-slate-900 text-base" style={{ fontFamily: "Sora, sans-serif" }}>{title}</h3>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-3">{desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {checks.map((c) => (
                        <span key={c} className="inline-flex items-center gap-1 text-xs text-green-700 bg-green-50 px-2.5 py-1 rounded-full">
                          <CheckCircle className="w-3 h-3" />{c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-50 rounded-2xl p-7">
              <h2 className="text-xl font-bold text-slate-900 mb-5" style={{ fontFamily: "Sora, sans-serif" }}>Laboratory & Test Equipment</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Basis weight tester (Mettler Toledo)", "Moisture analyzer (Sartorius)", "Spectrophotometer (X-Rite)", "Thermal print test station", "Accelerated aging chamber", "Tensile strength tester", "Optical microscope (200x)", "BPA/BPS chemical analyzer"].map((eq) => (
                  <div key={eq} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />{eq}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <Link href="/manufacturing/certifications" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors">
                View Our Certifications <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/manufacturing" className="text-slate-500 hover:text-slate-700 text-sm transition-colors">
                ← Manufacturing Overview
              </Link>
            </div>
          </div>

          <div>
            <div className="sticky top-28 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-1" style={{ fontFamily: "Sora, sans-serif" }}>Request QC Report</h3>
              <p className="text-sm text-slate-500 mb-5">Get a sample Certificate of Conformance for your evaluation.</p>
              <InquiryForm productName="Quality Control Report" compact />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
