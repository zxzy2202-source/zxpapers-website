import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { FACTORY, SITE } from "@/config/siteData";
import { COMPLIANCE_EVIDENCE } from "@/config/complianceData";
import {
  CheckCircle, ArrowRight, Factory, Award, Shield, Cpu,
  Zap, Package, Truck, BarChart3, Settings, FlaskConical,
  MessageSquare, Phone,
} from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import Image from "next/image";
import { getSlotImages } from "@/lib/imageSlotUtils";

export const metadata: Metadata = {
  title: { absolute: "Thermal Paper Manufacturing | ZhixinPaper" },
  description: `Review ZhixinPaper's ${FACTORY.area} facility, ${FACTORY.productionLines} production lines, ${FACTORY.annualOutputLabel.toLowerCase()}, process controls, and evidence available for buyer review.`,
  openGraph: {
    title: `Manufacturing | ${FACTORY.area} Paper and Label Facility`,
    description: `Review ZhixinPaper's facility, rated capacity, production workflow, quality controls, and product-specific compliance evidence.`,
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
  { step: "01", title: "Raw Material Inspection", desc: "Incoming materials are reviewed and tested when required by the approved product specification and order quality plan.", icon: FlaskConical, color: "bg-blue-500" },
  { step: "02", title: "Thermal Coating", desc: "Coating parameters are set and monitored against the applicable product specification and process plan.", icon: Settings, color: "bg-amber-500" },
  { step: "03", title: "Drying & Curing", desc: "Multi-zone drying settings are controlled to support the specified coating and thermal-performance requirements.", icon: Zap, color: "bg-green-500" },
  { step: "04", title: "Slitting & Cutting", desc: "Rolls are converted to the confirmed dimensions; order tolerances and acceptance criteria are documented in the approved specification.", icon: Cpu, color: "bg-purple-500" },
  { step: "05", title: "Quality Inspection", desc: "Inspection method, sampling plan, and acceptance criteria follow the approved product specification and order quality plan.", icon: Shield, color: "bg-red-500" },
  { step: "06", title: "Packing & Loading", desc: `OEM or standard packaging. ${FACTORY.fclLoadingLabel} applies ${FACTORY.fclLoadingCondition}.`, icon: Package, color: "bg-teal-500" },
];

const equipment = [
  { name: "Coating Machine", origin: "Germany", spec: "2.5m working width; process settings confirmed by product specification", qty: "4 units" },
  { name: "Slitting Machine", origin: "Japan", spec: "Maximum rated speed 1,200 m/min; order tolerance confirmed by specification", qty: "12 units" },
  { name: "Rewinding Machine", origin: "Taiwan", spec: "Auto tension control, 0–200mm core", qty: "8 units" },
  { name: "Lab Testing Equipment", origin: "Germany", spec: "Thermal sensitivity, image density, whiteness", qty: "Full suite" },
];

const qcChecks = [
  "Thermal sensitivity (print darkness at standard temperature)",
  "Image stability (resistance to heat, light, and moisture)",
  "Roll length acceptance criteria defined in the approved specification",
  "Width tolerance confirmed for the applicable product and order",
  "Core size and paper thickness",
  "BPA or phenol testing when required for the applicable material or batch",
  "Packaging integrity and labeling accuracy",
];

const capabilities = [
  { title: "Factory Overview", desc: `${FACTORY.area} modern manufacturing facility.`, href: "/manufacturing", icon: Factory },
  { title: "Quality Control", desc: "Multi-stage QC with statistical process control.", href: "/manufacturing/quality-control", icon: Shield },
  { title: "Compliance Evidence", desc: "Review certificates, test reports, declarations, and their applicable scope.", href: "/manufacturing/certifications", icon: Award },
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
      "item": "https://www.zxpapers.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Manufacturing",
      "item": "https://www.zxpapers.com/manufacturing"
    }
  ]
};

export const revalidate = 3600; // 1 hour: slot images change infrequently

export default async function ManufacturingPage() {
  const imgs = await getSlotImages([
    { slot: "manufacturing:hero", fallback: IMG_AERIAL },
    { slot: "manufacturing:facility-aerial", fallback: IMG_AERIAL },
    { slot: "manufacturing:facility-line", fallback: IMG_COATING },
  ]);
  const waUrl = `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I'd like to learn more about your manufacturing capabilities and request a factory audit.")}`;

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <PageHero
        bgImage={imgs["manufacturing:hero"]}
        bgImageAlt="ZhixinPaper paper and label production facility with manufacturing equipment"
        overlayDir="left"
        overlayOpacity={56}
        minHeight="min-h-[390px]"
        compact
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Manufacturing" }]}
        eyebrow="Paper and Label Manufacturing"
        badge={{ icon: <Factory className="w-4 h-4" />, text: `${FACTORY.area} · Xi'an, China`, color: "blue" }}
        title={<>Manufacturing <span className="text-amber-400">Capabilities</span></>}
        subtitle={`${FACTORY.productionLines} production lines and ${FACTORY.annualOutputLabel.toLowerCase()}. ${FACTORY.capacityBasis}. FCL timing is confirmed by product, material, and production-slot availability.`}
        trustBadges={["Specification Review", "Batch Records", "Sampling Plans", "Test Reports on Request", "Order-Specific Evidence"]}
        mobileTrustBadgeLimit={2}
        ctas={[
          { label: "Request Factory Audit", href: "/contact", variant: "primary", icon: <MessageSquare className="w-4 h-4" /> },
          { label: "WhatsApp Factory Team", href: `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I'd like to learn about your manufacturing capabilities and request a factory audit.")}`, variant: "whatsapp", icon: <Phone className="w-4 h-4" />, external: true },
        ]}
        stats={undefined}
      />

      <section className="border-b border-slate-200 bg-slate-50" aria-label="Manufacturing facts">
        <div className="container grid grid-cols-2 divide-x divide-slate-200 sm:grid-cols-4">
          {[
            { value: FACTORY.area, label: "Factory Area" },
            { value: FACTORY.productionLines, label: "Production Lines" },
            { value: FACTORY.annualOutput, label: "Annual Output" },
            { value: "By Order", label: "FCL Loading Schedule" },
          ].map((fact) => (
            <div key={fact.label} className="min-w-0 px-3 py-3 text-center sm:px-4 sm:py-4">
              <p className="text-lg font-semibold leading-none text-brand-navy sm:text-xl">{fact.value}</p>
              <p className="mt-1 break-words text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500 sm:text-[11px]">
                {fact.label}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* ── Quick Nav ────────────────────────────────────────────── */}
      <div className="container py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {capabilities.map(({ title, desc, href, icon: Icon }) => (
            <Link key={href} href={href}
              className="group p-5 bg-white border border-slate-200 hover:border-amber-300 rounded-2xl hover:shadow-lg transition-all duration-200">
                <div className="w-10 h-10 bg-amber-50 group-hover:bg-brand-navy rounded-xl flex items-center justify-center mb-3 transition-colors">
                  <Icon className="w-5 h-5 text-amber-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">{title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-2">{desc}</p>
              <span className="inline-flex items-center gap-1 text-xs text-brand-navy font-semibold">
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
                <span className="text-brand-navy">Manufacturing</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Our {FACTORY.area} facility houses {FACTORY.productionLines} production lines with {FACTORY.annualOutputLabel.toLowerCase()}; {FACTORY.capacityBasis}.
                Batch traceability scope and retained records are confirmed for the applicable product, specification, and order quality plan.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Factory Area", value: FACTORY.area },
                  { label: "Production Lines", value: FACTORY.productionLines },
                  { label: "Annual Output", value: FACTORY.annualOutputLabel },
                  { label: "Employees", value: FACTORY.employees },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
                    <div className="text-xl font-extrabold text-brand-navy mb-1">{value}</div>
                    <div className="text-xs text-slate-500">{label}</div>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {[
                  "Production scheduling based on order and line availability",
                  "German and Japanese coating equipment",
                  "Order-specific batch records and traceability scope",
                  "In-house material testing capabilities",
                  "Climate-controlled production zones",
                  "Quality-management evidence available for buyer review",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <Image src={imgs["manufacturing:facility-line"]} alt="Thermal Paper Coating Production Line"
                className="w-full rounded-2xl shadow-xl object-cover" width={640} height={427}  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              <Image src={imgs["manufacturing:facility-aerial"]} alt="Factory Aerial View"
                className="w-full rounded-2xl shadow-lg object-cover max-h-48" width={640} height={200}  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
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
            From raw material review to container-ready packing, controls and records are defined by the approved specification and order quality plan.
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
      <div className="bg-brand-navy py-16">
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
              Equipment capabilities and process controls are matched to the applicable product specification and order quality plan.
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
              Pre-Shipment Inspection by Quality Plan
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Inspection scope, sampling frequency, acceptance criteria, and report availability are confirmed against the approved specification and order requirements.
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {COMPLIANCE_EVIDENCE.map(({ name, kind, availability, icon: Icon }) => (
                <div key={name}
                  className="p-4 bg-white border border-slate-200 hover:border-blue-200 hover:bg-blue-50 rounded-2xl transition-all duration-200">
                  <Icon className="w-7 h-7 text-blue-600 mb-2" />
                  <div className="font-bold text-slate-900 text-sm mb-1">{name}</div>
                  <div className="text-xs font-semibold text-blue-700 mb-1">{kind}</div>
                  <div className="text-xs text-slate-500 leading-relaxed">{availability}</div>
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
            Our team responds {SITE.responseTime} {SITE.responseTimeCondition}. Product feasibility, pricing, and the production schedule are confirmed in the quotation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"
              className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-navy-light text-white font-bold px-8 py-4 rounded-xl transition-colors">
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
