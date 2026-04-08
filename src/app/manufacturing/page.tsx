import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { FACTORY, CERTIFICATIONS, SITE } from "@/config/siteData";
import {
  CheckCircle, ArrowRight, Factory, Award, Shield, Cpu,
  Zap, Package, Truck, BarChart3, Settings, FlaskConical,
  MessageSquare, Phone,
} from "lucide-react";
import PageHero from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: `Manufacturing Capabilities | ISO 9001 Thermal Paper Factory`,
  description: `ZhixinPaper manufacturing: 10000sqm factory, 20 production lines, 50000 tons annual output. Advanced slitting and printing machines.`,
  openGraph: {
    title: `Manufacturing | ${FACTORY.area} ISO 9001 Certified Factory`,
    description: `ZhixinPaper manufacturing: 10000sqm factory, 20 production lines, 50000 tons annual output. Advanced slitting and printing machines.`,
      images: [
      {
        url: "https://www.zxpapers.com/og-default.png",
        width: 1200,
        height: 630,
        alt: "ZhixinPaper | Thermal Paper Rolls Manufacturer",
        type: "image/png",
      },
    ],
  },
  alternates: { canonical: `${SITE.domain}/manufacturing` },
};

const IMG_AERIAL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/factory-aerial-overview-PxGXrzmMuMcQzSjcCKTWbD.webp";
const IMG_COATING = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/factory-coating-line-Rfrrgy9ZbXu6C6rJRRsG37.webp";

const productionSteps = [
  { step: "01", title: "Raw Material Inspection", desc: "All incoming base paper and chemical coatings are tested in our in-house lab before entering production.", icon: FlaskConical, color: "bg-blue-500" },
  { step: "02", title: "Thermal Coating", desc: "Precision coating application using German and Japanese equipment. Coating weight controlled to ±0.5 g/m².", icon: Settings, color: "bg-amber-500" },
  { step: "03", title: "Drying & Curing", desc: "Multi-zone drying tunnels ensure uniform coating adhesion and optimal thermal sensitivity.", icon: Zap, color: "bg-green-500" },
  { step: "04", title: "Slitting & Cutting", desc: "High-precision slitting to exact customer specifications. Tolerance: ±0.3mm on width, ±1% on length.", icon: Cpu, color: "bg-purple-500" },
  { step: "05", title: "Quality Inspection", desc: "100% roll inspection for print quality, roll length, core size, and packaging integrity.", icon: Shield, color: "bg-red-500" },
  { step: "06", title: "Packing & Loading", desc: "OEM or standard packaging. FCL container loading available in 3–5 business days.", icon: Package, color: "bg-teal-500" },
];

const equipment = [
  { name: "Coating Machine", origin: "Germany", spec: "2.5m working width, ±0.5 g/m² precision", qty: "4 units" },
  { name: "Slitting Machine", origin: "Japan", spec: "Max 1,200 m/min, ±0.3mm tolerance", qty: "12 units" },
  { name: "Rewinding Machine", origin: "Taiwan", spec: "Auto tension control, 0–200mm core", qty: "8 units" },
  { name: "Lab Testing Equipment", origin: "Germany", spec: "Thermal sensitivity, image density, whiteness", qty: "Full suite" },
];

const qcChecks = [
  "Thermal sensitivity (print darkness at standard temperature)",
  "Image stability (resistance to heat, light, and moisture)",
  "Roll length accuracy (±1% tolerance)",
  "Width tolerance (±0.3mm)",
  "Core size and paper thickness",
  "BPA content testing (BPA-free certified batches)",
  "Packaging integrity and labeling accuracy",
];

const capabilities = [
  { title: "Factory Overview", desc: `${FACTORY.area} modern manufacturing facility.`, href: "/manufacturing", icon: Factory },
  { title: "Quality Control", desc: "Multi-stage QC with statistical process control.", href: "/manufacturing/quality-control", icon: Shield },
  { title: "Certifications", desc: "ISO 9001, FSC, BPA-Free, RoHS, CE certified.", href: "/manufacturing/certifications", icon: Award },
  { title: "Equipment", desc: "German and Japanese precision machinery.", href: "/manufacturing/equipment", icon: Cpu },
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
    }
  ]
};
export default function ManufacturingPage() {
  const waUrl = `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I'd like to learn more about your manufacturing capabilities and request a factory audit.")}`;

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <PageHero
        bgImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/factory-aerial-overview-Ck4AoJiKqjGKsLxnYqGRbU.webp"
        overlayDir="left"
        overlayOpacity={50}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Manufacturing" }]}
        eyebrow="ISO 9001 Certified Factory"
        badge={{ icon: <Factory className="w-4 h-4" />, text: `${FACTORY.area} · Xi'an, China`, color: "blue" }}
        title={<>Manufacturing <span className="text-amber-400">Capabilities</span></>}
        subtitle={`${FACTORY.productionLines} high-speed production lines. ${FACTORY.annualOutput} rolls/year capacity. German & Japanese equipment. FCL ready in ${FACTORY.fclLoadingDays} business days.`}
        trustBadges={["ISO 9001:2015", "FSC Certified", "BPA-Free", "SGS Tested", "CE Marking"]}
        ctas={[
          { label: "Request Factory Audit", href: "/contact", variant: "primary", icon: <MessageSquare className="w-4 h-4" /> },
          { label: "WhatsApp Factory Team", href: `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I'd like to learn about your manufacturing capabilities and request a factory audit.")}`, variant: "whatsapp", icon: <Phone className="w-4 h-4" />, external: true },
        ]}
        stats={[
          { value: FACTORY.area, label: "Factory Area" },
          { value: FACTORY.productionLines, label: "Production Lines" },
          { value: FACTORY.annualOutput, label: "Annual Output" },
          { value: `${FACTORY.fclLoadingDays} Days`, label: "FCL Loading" },
        ]}
      />
      {/* ── Quick Nav ────────────────────────────────────────────── */}
      <div className="container py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {capabilities.map(({ title, desc, href, icon: Icon }) => (
            <Link key={href} href={href}
              className="group p-5 bg-white border border-slate-200 hover:border-blue-300 rounded-2xl hover:shadow-lg transition-all duration-200">
              <div className="w-10 h-10 bg-blue-100 group-hover:bg-blue-600 rounded-xl flex items-center justify-center mb-3 transition-colors">
                <Icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">{title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-2">{desc}</p>
              <span className="inline-flex items-center gap-1 text-xs text-blue-600 font-semibold">
                Learn More <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* ── World-Class Manufacturing ─────────────────────────────── */}
      <div className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">
                <div className="w-8 h-0.5 bg-blue-600" />
                Our Facility
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-5 leading-tight">
                World-Class<br />
                <span className="text-[#0F2B5B]">Manufacturing</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Our {FACTORY.area} facility houses {FACTORY.productionLines} production lines capable of producing {FACTORY.annualOutput} rolls per year.
                Every production run is tracked through our batch traceability system, ensuring consistent quality and full accountability.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Factory Area", value: FACTORY.area },
                  { label: "Production Lines", value: FACTORY.productionLines },
                  { label: "Annual Output", value: FACTORY.annualOutputLabel },
                  { label: "Employees", value: FACTORY.employees },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
                    <div className="text-xl font-extrabold text-[#0F2B5B] mb-1">{value}</div>
                    <div className="text-xs text-slate-500">{label}</div>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {[
                  "24/7 production with automated monitoring systems",
                  "German and Japanese precision coating equipment",
                  "Real-time batch traceability and quality tracking",
                  "In-house raw material testing laboratory",
                  "Climate-controlled production zones",
                  "ISO 9001:2015 certified quality management",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <img src={IMG_COATING} alt="Thermal Paper Coating Production Line"
                className="w-full rounded-2xl shadow-xl object-cover" loading="lazy" width={640} height={427} />
              <img src={IMG_AERIAL} alt="Factory Aerial View"
                className="w-full rounded-2xl shadow-lg object-cover max-h-48" loading="lazy" width={640} height={200} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Production Process ───────────────────────────────────── */}
      <div className="container py-20">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">
            <div className="w-8 h-0.5 bg-blue-600" />
            How We Make It
            <div className="w-8 h-0.5 bg-blue-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            6-Step Production Process
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            From raw material to finished container-ready product — every step is controlled and documented.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productionSteps.map(({ step, title, desc, icon: Icon, color }) => (
            <div key={step} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-4xl font-extrabold text-slate-100">{step}</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Equipment ────────────────────────────────────────────── */}
      <div className="bg-[#0F2B5B] py-16">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
              <div className="w-8 h-0.5 bg-amber-400" />
              Equipment
              <div className="w-8 h-0.5 bg-amber-400" />
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              German &amp; Japanese Precision Machinery
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              We invest in the best equipment to deliver consistent quality at scale.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {equipment.map(({ name, origin, spec, qty }) => (
              <div key={name} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-white text-sm">{name}</h3>
                  <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full border border-amber-500/30">{origin}</span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed mb-3">{spec}</p>
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-amber-400 text-xs font-semibold">{qty}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Quality Control ──────────────────────────────────────── */}
      <div className="container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">
              <div className="w-8 h-0.5 bg-blue-600" />
              Quality Control
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-5">
              100% Inspection Before Shipment
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Every roll is inspected before it leaves our facility. Our QC team performs both automated and manual checks to ensure every order meets or exceeds customer specifications.
            </p>
            <div className="space-y-3">
              {qcChecks.map((check) => (
                <div key={check} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm">{check}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">
              <div className="w-8 h-0.5 bg-blue-600" />
              Certifications &amp; Compliance
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-5">
              Internationally Recognized Standards
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {CERTIFICATIONS.map(({ name, desc }) => (
                <div key={name}
                  className="flex flex-col items-center text-center p-4 bg-white border border-slate-200 hover:border-blue-200 hover:bg-blue-50 rounded-2xl transition-all duration-200">
                  <Award className="w-7 h-7 text-blue-600 mb-2" />
                  <div className="font-bold text-slate-900 text-sm mb-1">{name}</div>
                  <div className="text-xs text-slate-500">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <div className="bg-amber-500 py-14">
        <div className="container text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
            Ready to Place a Bulk Order?
          </h2>
          <p className="text-slate-800 mb-8 max-w-xl mx-auto">
            Our factory is ready to fulfill your order. Get a quote within 24 hours with full production timeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"
              className="inline-flex items-center gap-2 bg-[#0F2B5B] hover:bg-[#1a3a6b] text-white font-bold px-8 py-4 rounded-xl transition-colors">
              <MessageSquare className="w-5 h-5" />
              Request Factory Quote
            </Link>
            <a href={waUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-bold px-8 py-4 rounded-xl transition-colors">
              <Phone className="w-5 h-5 text-green-600" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
