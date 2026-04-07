// Manufacturing Sub-Pages
// Exports: QualityControl, Certifications, Equipment
// Design: Global Trade Authority — deep-dive pages for manufacturing capabilities

import { Link } from "wouter";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/shared/Breadcrumb";
import InquiryForm from "@/components/shared/InquiryForm";
import {
  CheckCircle, Shield, Award, Cpu, ArrowRight,
  ClipboardCheck, Microscope, BarChart3, RefreshCw,
  FileCheck, Leaf, Globe, Zap, Settings, Gauge, Wind,
} from "lucide-react";

// Unique factory images per page
const IMG_QC_LAB = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/factory-qc-lab-GCyjnzeVMfG7M54TSNubFr.webp";
const IMG_CERTIFICATIONS = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/factory-certifications-wall-nK5qw4NqyVUzdjSjcD66Qh.webp";
const IMG_EQUIPMENT = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/factory-slitting-equipment-cvwyebpfEowdHCqEFaCG9i.webp";

// ─────────────────────────────────────────────────────────────────────────────
// Quality Control Page
// ─────────────────────────────────────────────────────────────────────────────
const qcStages = [
  {
    step: "01",
    title: "Raw Material Inspection",
    icon: Microscope,
    desc: "Every incoming roll of base paper and chemical coating is tested for weight (g/m²), moisture content, brightness, and chemical composition before entering production.",
    checks: ["Basis weight (±1g/m²)", "Moisture content (<6%)", "Brightness (≥80 ISO)", "BPA/BPS chemical test"],
  },
  {
    step: "02",
    title: "In-Process Monitoring",
    icon: Gauge,
    desc: "Real-time sensors on every coating line monitor coating weight, drying temperature, and line speed. Statistical Process Control (SPC) charts flag deviations instantly.",
    checks: ["Coating weight uniformity", "Drying temperature curve", "Line speed consistency", "Real-time SPC alerts"],
  },
  {
    step: "03",
    title: "Slitting & Rewinding QC",
    icon: Settings,
    desc: "After coating, paper is slit to exact widths. Automated vision systems detect edge defects, splices, and surface contamination. Roll diameter and length are verified per batch.",
    checks: ["Width tolerance ±0.5mm", "Edge quality inspection", "Roll length verification", "Splice detection"],
  },
  {
    step: "04",
    title: "Thermal Performance Testing",
    icon: ClipboardCheck,
    desc: "Finished rolls are printed on reference printers at standard and extreme temperatures to verify image density, print speed compatibility, and image stability.",
    checks: ["Print density (OD ≥1.0)", "Image stability test", "Low/high temp print test", "Printer compatibility"],
  },
  {
    step: "05",
    title: "Aging & Durability Test",
    icon: RefreshCw,
    desc: "Samples from each batch undergo accelerated aging (60°C / 80% RH for 24h) to simulate 5+ years of storage. Image retention must meet ≥80% density after aging.",
    checks: ["Accelerated aging (60°C/80%RH)", "Image retention ≥80%", "Adhesive performance (labels)", "Chemical resistance"],
  },
  {
    step: "06",
    title: "Final Batch Release",
    icon: BarChart3,
    desc: "Each production batch receives a Certificate of Conformance (CoC) with full test data. Batch traceability codes are printed on packaging for end-to-end accountability.",
    checks: ["Certificate of Conformance", "Batch traceability code", "AQL sampling inspection", "Customer-specific tests"],
  },
];

export function QualityControl() {
  return (
    <Layout>
      <div className="relative bg-[#0F2B5B] text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${IMG_QC_LAB})` }} />
        <div className="relative container">
          <Breadcrumb items={[
            { label: "Manufacturing", href: "/manufacturing" },
            { label: "Quality Control" },
          ]} />
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
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
              {[
                { value: "6", label: "QC Stages" },
                { value: "99.8%", label: "Pass Rate" },
                { value: "100%", label: "Batch Traced" },
                { value: "ISO 9001", label: "Certified" },
              ].map(({ value, label }) => (
                <div key={label} className="bg-slate-50 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-extrabold text-[#0F2B5B]" style={{ fontFamily: "Sora, sans-serif" }}>{value}</div>
                  <div className="text-xs text-slate-500 mt-1">{label}</div>
                </div>
              ))}
            </div>

            {/* QC Stages */}
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

            {/* Test equipment */}
            <div className="bg-slate-50 rounded-2xl p-7">
              <h2 className="text-xl font-bold text-slate-900 mb-5" style={{ fontFamily: "Sora, sans-serif" }}>
                Laboratory & Test Equipment
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Basis weight tester (Mettler Toledo)",
                  "Moisture analyzer (Sartorius)",
                  "Spectrophotometer (X-Rite)",
                  "Thermal print test station",
                  "Accelerated aging chamber",
                  "Tensile strength tester",
                  "Optical microscope (200x)",
                  "BPA/BPS chemical analyzer",
                ].map((eq) => (
                  <div key={eq} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {eq}
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

          {/* Sidebar */}
          <div className="lg:col-span-1">
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

// ─────────────────────────────────────────────────────────────────────────────
// Certifications Page
// ─────────────────────────────────────────────────────────────────────────────
const certifications = [
  {
    name: "ISO 9001:2015",
    icon: Award,
    color: "blue",
    scope: "Quality Management System",
    body: "Bureau Veritas / SGS",
    validity: "2024–2027 (Annual Surveillance)",
    desc: "Our ISO 9001:2015 certification covers the entire manufacturing process — from raw material procurement through production, inspection, packaging, and delivery. Annual surveillance audits ensure continuous compliance.",
    benefits: [
      "Internationally recognized quality standard",
      "Documented procedures for every process",
      "Continuous improvement framework",
      "Accepted by buyers in 80+ countries",
    ],
  },
  {
    name: "FSC® Certified",
    icon: Leaf,
    color: "green",
    scope: "Forest Stewardship Council Chain of Custody",
    body: "FSC International",
    validity: "Active — Annual Audit",
    desc: "Our FSC Chain of Custody certification guarantees that all paper fiber used in our products originates from responsibly managed forests. FSC-certified products are available for all standard sizes.",
    benefits: [
      "Responsibly sourced paper fiber",
      "Required by major European retailers",
      "Supports deforestation-free supply chains",
      "Available on all standard products",
    ],
  },
  {
    name: "BPA-Free Verified",
    icon: Shield,
    color: "amber",
    scope: "Chemical Safety — No Bisphenol A",
    body: "SGS / Intertek Third-Party Lab",
    validity: "Per-batch testing",
    desc: "All our thermal paper products are verified BPA-free by independent third-party laboratories. With EU BPA regulations tightening since 2020, our BPA-free coating is the standard across our entire product range.",
    benefits: [
      "Compliant with EU Regulation 2016/2235",
      "Safe for food service and healthcare",
      "Third-party lab verified per batch",
      "BPS-free option also available",
    ],
  },
  {
    name: "RoHS Compliant",
    icon: Globe,
    color: "purple",
    scope: "Restriction of Hazardous Substances",
    body: "EU Directive 2011/65/EU",
    validity: "Ongoing compliance",
    desc: "Our products comply with the EU RoHS Directive, restricting the use of lead, mercury, cadmium, hexavalent chromium, PBB, and PBDE. RoHS compliance is required for electronic-adjacent products sold in the EU.",
    benefits: [
      "Required for EU market access",
      "No heavy metals or hazardous substances",
      "Documented material declarations",
      "Supports WEEE compliance",
    ],
  },
  {
    name: "REACH Compliant",
    icon: FileCheck,
    color: "teal",
    scope: "Registration, Evaluation, Authorisation of Chemicals",
    body: "EU REACH Regulation (EC) No 1907/2006",
    validity: "Ongoing compliance",
    desc: "We maintain full REACH compliance documentation for all chemical substances used in our thermal coatings. SVHC (Substances of Very High Concern) declarations are available upon request.",
    benefits: [
      "Full chemical substance documentation",
      "SVHC declarations available",
      "Required for EU chemical compliance",
      "Supports supply chain transparency",
    ],
  },
  {
    name: "CE Marking",
    icon: Zap,
    color: "indigo",
    scope: "European Conformity",
    body: "Self-declaration per applicable EU directives",
    validity: "Active",
    desc: "CE marking on our applicable products confirms conformity with EU health, safety, and environmental protection standards, enabling free movement of goods within the European Economic Area.",
    benefits: [
      "Required for EU/EEA market entry",
      "Confirms safety and compliance",
      "Enables free movement in Europe",
      "Backed by technical documentation",
    ],
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  blue:   { bg: "bg-blue-50",   text: "text-blue-600",   border: "border-blue-200" },
  green:  { bg: "bg-green-50",  text: "text-green-600",  border: "border-green-200" },
  amber:  { bg: "bg-amber-50",  text: "text-amber-600",  border: "border-amber-200" },
  purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" },
  teal:   { bg: "bg-teal-50",   text: "text-teal-600",   border: "border-teal-200" },
  indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200" },
};

export function Certifications() {
  return (
    <Layout>
      <div className="relative bg-[#0F2B5B] text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${IMG_CERTIFICATIONS})` }} />
        <div className="relative container">
          <Breadcrumb items={[
            { label: "Manufacturing", href: "/manufacturing" },
            { label: "Certifications" },
          ]} />
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
        {/* Badge grid */}
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

        {/* Detailed cards */}
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
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Request certificates CTA */}
        <div className="bg-[#0F2B5B] rounded-3xl p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-extrabold mb-2" style={{ fontFamily: "Sora, sans-serif" }}>
              Need Copies of Our Certificates?
            </h2>
            <p className="text-slate-300 text-sm max-w-lg">
              All certificates are available upon request. We can provide original scans, translated versions, or notarized copies for import/customs requirements.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            Request Certificates <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </Layout>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Equipment Page
// ─────────────────────────────────────────────────────────────────────────────
const equipmentCategories = [
  {
    title: "Coating Lines",
    icon: Wind,
    desc: "Our core production assets — precision coating machines apply thermal-sensitive chemical layers onto base paper with micrometer-level accuracy.",
    equipment: [
      {
        name: "Voith Curtain Coater (Germany)",
        count: "4 units",
        specs: "Max width: 2,800mm | Speed: 800m/min | Coating weight: 2–8 g/m²",
        highlight: "Enables ultra-uniform BPA-free coating with ±0.1g/m² tolerance",
      },
      {
        name: "Jagenberg Blade Coater (Germany)",
        count: "3 units",
        specs: "Max width: 2,400mm | Speed: 600m/min | Dual-side coating capable",
        highlight: "Used for specialty and high-sensitivity thermal grades",
      },
      {
        name: "Valmet Infrared Drying System",
        count: "7 units",
        specs: "Temperature range: 80–180°C | Zone-controlled drying",
        highlight: "Ensures consistent coating cure without paper distortion",
      },
    ],
  },
  {
    title: "Slitting & Rewinding",
    icon: Settings,
    desc: "After coating, large parent rolls are precision-slit to customer-specified widths and rewound to exact lengths with automated tension control.",
    equipment: [
      {
        name: "Kampf Slitter-Rewinder (Germany)",
        count: "8 units",
        specs: "Min width: 20mm | Max width: 1,200mm | Speed: 1,200m/min | Tolerance: ±0.3mm",
        highlight: "Servo-driven width adjustment for rapid size changeover",
      },
      {
        name: "Tidland Automatic Tension Control",
        count: "All slitters",
        specs: "Closed-loop tension feedback | Prevents roll telescoping",
        highlight: "Critical for consistent roll hardness in POS applications",
      },
      {
        name: "Perini Rewinder (Italy)",
        count: "4 units",
        specs: "Log diameter: 20–120mm | Core sizes: 12mm, 25mm, 38mm",
        highlight: "High-speed rewinding for small-core portable printer rolls",
      },
    ],
  },
  {
    title: "Label Converting",
    icon: Cpu,
    desc: "Dedicated label production lines handle die-cutting, matrix removal, and roll-to-roll converting for thermal label products.",
    equipment: [
      {
        name: "Mark Andy Label Press (USA)",
        count: "3 units",
        specs: "Max web width: 330mm | Die-cut accuracy: ±0.2mm | Speed: 200m/min",
        highlight: "Handles complex label shapes and perforations",
      },
      {
        name: "Edale Flexo Printing Unit",
        count: "2 units",
        specs: "Up to 8 colors | UV curing | Min label size: 10mm x 10mm",
        highlight: "For custom-printed label OEM orders",
      },
      {
        name: "Prati Rewinder & Inspection",
        count: "4 units",
        specs: "100% print inspection | Defect detection: ≥0.3mm | Speed: 400m/min",
        highlight: "Automated vision system rejects any defective labels",
      },
    ],
  },
  {
    title: "Quality & Testing Lab",
    icon: Microscope,
    desc: "Our in-house laboratory runs continuous quality checks throughout production, with equipment calibrated to international standards.",
    equipment: [
      {
        name: "Mettler Toledo Basis Weight Tester",
        count: "6 units",
        specs: "Accuracy: ±0.1g/m² | Range: 20–200g/m²",
        highlight: "Inline measurement every 500m of production",
      },
      {
        name: "X-Rite Spectrophotometer",
        count: "4 units",
        specs: "CIE L*a*b* color measurement | Gloss measurement",
        highlight: "Ensures consistent whiteness and brightness across batches",
      },
      {
        name: "Accelerated Aging Chamber",
        count: "2 units",
        specs: "Temperature: 20–80°C | Humidity: 20–95% RH | 12 test positions",
        highlight: "Simulates 5+ years storage in 24 hours",
      },
    ],
  },
];

export function Equipment() {
  return (
    <Layout>
      <div className="relative bg-[#0F2B5B] text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${IMG_EQUIPMENT})` }} />
        <div className="relative container">
          <Breadcrumb items={[
            { label: "Manufacturing", href: "/manufacturing" },
            { label: "Equipment" },
          ]} />
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
              <Cpu className="w-6 h-6 text-amber-400" />
            </div>
            <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">Production Equipment</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ fontFamily: "Sora, sans-serif" }}>
            State-of-the-Art<br /><span className="text-amber-400">Manufacturing Equipment</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            German and Japanese precision machinery across 12 production lines, capable of 500 million rolls per year with consistent quality.
          </p>
        </div>
      </div>

      <div className="container py-16 space-y-14">
        {/* Key stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { value: "12", label: "Production Lines" },
            { value: "50,000 m²", label: "Factory Area" },
            { value: "500M+", label: "Rolls/Year Capacity" },
            { value: "24/7", label: "Operation" },
          ].map(({ value, label }) => (
            <div key={label} className="bg-slate-50 rounded-2xl p-5 text-center">
              <div className="text-2xl font-extrabold text-[#0F2B5B]" style={{ fontFamily: "Sora, sans-serif" }}>{value}</div>
              <div className="text-xs text-slate-500 mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* Equipment categories */}
        {equipmentCategories.map(({ title, icon: Icon, desc, equipment }) => (
          <div key={title}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <Icon className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900" style={{ fontFamily: "Sora, sans-serif" }}>{title}</h2>
                <p className="text-sm text-slate-500">{desc}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {equipment.map(({ name, count, specs, highlight }) => (
                <div key={name} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="font-bold text-slate-900 text-sm leading-snug" style={{ fontFamily: "Sora, sans-serif" }}>{name}</h3>
                    <span className="flex-shrink-0 text-xs bg-blue-50 text-blue-700 font-semibold px-2.5 py-1 rounded-full">{count}</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed mb-3 font-mono">{specs}</p>
                  <div className="flex items-start gap-2 text-xs text-green-700 bg-green-50 rounded-lg px-3 py-2">
                    <CheckCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="bg-slate-50 rounded-3xl p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-2" style={{ fontFamily: "Sora, sans-serif" }}>
              Interested in a Factory Visit?
            </h2>
            <p className="text-slate-600 text-sm max-w-lg">
              We welcome qualified buyers and distributors to visit our facility. Virtual factory tours are also available via video call.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#0F2B5B] hover:bg-[#1E6FD9] text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            Schedule a Visit <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </Layout>
  );
}
