import type { Metadata } from "next";
import Link from "next/link";
import { getSlotImages } from "@/lib/imageSlotUtils";
import Layout from "@/components/layout/Layout";
import { FACTORY, SITE } from "@/config/siteData";
import { COMPLIANCE_EVIDENCE } from "@/config/complianceData";
import {
  ArrowRight, Globe, Users, Factory,
  CheckCircle, Zap, Package, Truck, MessageSquare,
  Clock, BarChart3, Layers, Phone,
  AlertTriangle, XCircle, Ruler, FlaskConical,
  ClipboardCheck, BadgeCheck, Cpu,
} from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Thermal Paper Manufacturer",
  description: "Learn how Zhixin Paper manufactures thermal paper rolls, self-adhesive labels, carbonless paper, and continuous computer forms for global buyers.",
  openGraph: {
    title: "About ZhixinPaper | Products, Quality & Export Support",
    description: "Review ZhixinPaper's product scope, manufacturing workflow, quality process, OEM support and export inquiry route.",
    type: "website",
    images: [
      {
        url: "https://www.zxpapers.com/og-default.png",
        width: 1200,
        height: 630,
        alt: "Zhixin Paper | Thermal Paper Rolls Manufacturer",
        type: "image/png",
      },
    ],
  },
  alternates: { canonical: `${SITE.domain}/about` },
};

const FACTORY_IMG_FB = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80";
const FACTORY_LINE_IMG_FB = "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80";
const FACTORY_AERIAL_VIDEO = "/videos/factory-aerial-overview.mp4";

// Equipment images — real factory machine photos
const IMG_COATING = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/factory-coating-line-Rfrrgy9ZbXu6C6rJRRsG37.webp";
const IMG_SLITTING = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/factory-slitting-equipment-cvwyebpfEowdHCqEFaCG9i.webp";

// Machine showcase — real equipment spec sheet
const machines = [
  { name: "Voith Curtain Coater", origin: "Germany", units: "4", specs: "Max width 2,800mm · Rated 800m/min · 2–8 g/m² coating", desc: "Precision thermal-sensitive layer application under controlled process settings.", imageFallback: IMG_COATING, imageSlot: "about:equipment-coating" },
  { name: "Kampf Slitter-Rewinder", origin: "Germany", units: "8", specs: "20–1,200mm width · Rated 1,200m/min · Auto tension control", desc: "High-speed converting with closed-loop tension for consistent roll hardness.", imageFallback: IMG_SLITTING, imageSlot: "about:equipment-slitting" },
];

// ─── Pain points — problems buyers report before switching supplier ────────
const sourcingPainPoints = [
  {
    icon: XCircle,
    problem: "Receipts fade before the retention period ends",
    detail: "Coating weight and image stability were never confirmed against the storage temperature, handling and archive period.",
    response: "We record the required retention period and confirm coating specifications before the sample.",
  },
  {
    icon: AlertTriangle,
    problem: "Rolls jam or misfeed in the installed printer",
    detail: "Core diameter, maximum roll outer diameter, winding direction and sensing method were assumed rather than matched.",
    response: "We check the printer model, core, OD and winding before quoting a replacement roll.",
  },
  {
    icon: Ruler,
    problem: "Two quotations look identical but arrive different",
    detail: "Paper grade, real roll length, adhesive, packing and inspection method can all differ while the size name stays the same.",
    response: "We quote against a complete written specification, not a size label alone.",
  },
  {
    icon: FlaskConical,
    problem: "The reorder does not match the approved sample",
    detail: "Uncontrolled material, adhesive, artwork or packing changes between batches create new complaints.",
    response: "The approved specification is frozen and referenced on every repeat order.",
  },
];

// ─── Differentiators — what makes this factory different from alternatives ──
const differentiators = [
  {
    icon: Factory,
    title: "Direct factory, not a trading desk",
    text: `Coating, slitting, printing and packing happen on our own lines in Xi'an, so specification questions are answered by the people running the order.`,
  },
  {
    icon: ClipboardCheck,
    title: "Specification review before pricing",
    text: "We identify the missing variables — printer, core, grade, adhesive, packing, destination — before sending a number that cannot be compared.",
  },
  {
    icon: BadgeCheck,
    title: "One approval record for every reorder",
    text: "Material, artwork version, dimensions and packing are frozen into a reference that repeat orders are checked against.",
  },
  {
    icon: Package,
    title: "OEM and private-label packing",
    text: "Roll labels, inner packs, cartons, artwork versions and pallet marks are reviewed as part of the specification, not after shipment.",
  },
];

const capabilities = [
  { icon: Factory, title: `${FACTORY.area} Facility`, desc: "Modern manufacturing complex in Xi'an Industrial Park with climate-controlled production zones." },
  { icon: Zap, title: `${FACTORY.productionLines} Production Lines`, desc: "Slitting, coating, and packaging capacity is scheduled by product specification, order volume, and available production slots." },
  { icon: BarChart3, title: FACTORY.annualOutputLabel, desc: `Rated capacity; actual output depends on product mix, specifications, and production schedule.` },
  { icon: Layers, title: "Integrated Production", desc: "Processes include paper coating, slitting, converting, and finished-product packaging; scope depends on the product and order." },
  { icon: Package, title: "OEM & Private Label", desc: "Custom logo, packaging design, and core printing for your brand. MOQ depends on product and specification." },
  { icon: Truck, title: `FCL Loading in ${FACTORY.fclLoadingLabel}`, desc: "Applies to confirmed standard-product orders when materials and production slots are available; custom orders require schedule confirmation." },
];

const buyerSteps = [
  { step: "01", icon: MessageSquare, title: "Share Your Specifications", text: "Send the product, size, core, quantity, packing and destination. We identify missing variables before quoting." },
  { step: "02", icon: ClipboardCheck, title: "Receive a Spec-Scoped Quote", text: "You get a price tied to a complete written specification, not a vague label — so you can compare accurately." },
  { step: "03", icon: Package, title: "Approve a Production Sample", text: "A sample is made to the agreed specification. You confirm print, dimensions, packing and construction." },
  { step: "04", icon: Truck, title: "Place Repeat Orders With Confidence", text: "The approved specification is frozen. Every reorder is checked against the same reference record." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.zxpapers.com" },
    { "@type": "ListItem", "position": 2, "name": "About", "item": "https://www.zxpapers.com/about" },
  ],
};

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Zhixin Paper Factory Aerial Tour — Xi'an, China",
  "description": `Aerial overview of Zhixin Paper's ${FACTORY.area} paper and label manufacturing facility in Xi'an, Shaanxi, China, with ${FACTORY.productionLines} production lines and customers in ${FACTORY.countriesServed} countries.`,
  "thumbnailUrl": ["https://www.zxpapers.com/og-default.png"],
  "uploadDate": "2024-09-01T00:00:00+08:00",
  "contentUrl": "https://www.zxpapers.com/videos/factory-aerial-overview.mp4",
  "embedUrl": "https://www.zxpapers.com/about",
  "duration": "PT45S",
  "publisher": {
    "@type": "Organization",
    "name": "Zhixin Paper",
    "logo": { "@type": "ImageObject", "url": "https://www.zxpapers.com/og-default.png" },
  },
  "regionsAllowed": "US,CA,GB,DE,FR,ES,IT,NL,SA,AE,EG,ZA,NG,KE,IN,JP,KR,SG,MY,TH,VN,ID,BR,MX,AU",
};

export const revalidate = 3600;

export default async function AboutPage() {
  const imgs = await getSlotImages([
    { slot: "about:factory-aerial", fallback: FACTORY_IMG_FB },
    { slot: "about:factory-line", fallback: FACTORY_LINE_IMG_FB },
    { slot: "about:equipment-coating", fallback: IMG_COATING },
    { slot: "about:equipment-slitting", fallback: IMG_SLITTING },
  ]);
  const FACTORY_IMG = imgs["about:factory-aerial"];
  const FACTORY_LINE_IMG = imgs["about:factory-line"];

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />

      {/* ── 1. Hero — full-width factory image ──────────────────────── */}
      <PageHero
        bgImage={FACTORY_IMG}
        bgImageAlt="ZhixinPaper thermal paper manufacturing facility in Xi'an, Shaanxi, China"
        overlayDir="center"
        overlayOpacity={58}
        minHeight="min-h-[390px]"
        compact
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        badge={{ icon: <Factory className="w-4 h-4" />, text: `Founded ${SITE.founded} · Xi'an, Shaanxi, China`, color: "amber" }}
        title={<>About <span className="text-amber-400">{SITE.name}</span></>}
        subtitle="Factory-direct paper and label manufacturer. Coating, slitting, printing and packing happen on our own lines — specification questions are answered by the people running the order."
        mobileTrustBadgeLimit={2}
        stats={undefined}
        ctas={[
          { label: "Send Specifications for Quote", href: "/contact", variant: "primary", icon: <MessageSquare className="w-4 h-4" /> },
          { label: "WhatsApp Quick Question", href: `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I'd like to learn more about ZhixinPaper.")}`, variant: "whatsapp", icon: <Phone className="w-4 h-4" />, external: true },
        ]}
      />

      <section className="border-b border-slate-200 bg-slate-50" aria-label="Company facts">
        <div className="container grid grid-cols-2 divide-x divide-slate-200 sm:grid-cols-4">
          {[
            { value: FACTORY.yearsExperience, label: "Years" },
            { value: FACTORY.countriesServed, label: "Countries" },
            { value: FACTORY.dailyOutput, label: "Daily Output" },
            { value: FACTORY.oemClients, label: "OEM Clients" },
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

      {/* ── 2. Company Story — tight 2 graphs + video ───────────────── */}
      <section className="bg-white py-16 sm:py-20 lg:py-24" aria-labelledby="story-heading">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-600">
                <Factory className="h-3.5 w-3.5" />
                Company Profile
              </p>
              <h2 id="story-heading" className="text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl">
                A Factory Built for Repeatable Specifications
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600 lg:text-lg">
                {SITE.name} (Xi&apos;an Zhi Xin Paper Co., Ltd.) has manufactured thermal paper
                rolls, direct thermal labels, packaging labels and carbonless forms since {SITE.founded}.
                Our {FACTORY.area} facility in Xi&apos;an, China, runs {FACTORY.productionLines} production
                lines with {FACTORY.annualOutputLabel.toLowerCase()}.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Today we supply customers in {FACTORY.countriesServed} countries. Every quotation is
                built on a complete written specification — printer, core, grade, adhesive, packing
                and destination are confirmed together before a number is shared.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-10 gap-y-3 border-t border-slate-200 pt-6 text-sm text-slate-700">
                <span><span className="font-semibold">Legal name</span> Xi&apos;an Zhi Xin Paper Co., Ltd.</span>
                <span><span className="font-semibold">Employees</span> {FACTORY.employees}</span>
                <span><span className="font-semibold">Export terms</span> FOB, CIF, DDP</span>
              </div>
              <div className="mt-6">
                <Button asChild variant="default" size="cta-lg">
                  <Link href="/contact">
                    Send Specifications for Quote <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <video
                className="aspect-video w-full rounded-xl border border-slate-200 object-cover shadow-md"
                poster={FACTORY_IMG}
                autoPlay muted loop playsInline preload="metadata"
                aria-label={`${SITE.name} factory aerial video tour in Xi'an, China`}
              >
                <source src={FACTORY_AERIAL_VIDEO} type="video/mp4" />
              </video>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-brand-navy px-4 py-3 text-center">
                  <div className="text-xl font-bold tracking-tight text-amber-400">{FACTORY.area}</div>
                  <div className="text-[11px] font-medium text-blue-200">Factory Floor</div>
                </div>
                <div className="rounded-lg bg-brand-navy px-4 py-3 text-center">
                  <div className="text-xl font-bold tracking-tight text-amber-400">{FACTORY.productionLines}</div>
                  <div className="text-[11px] font-medium text-blue-200">Production Lines</div>
                </div>
                <div className="rounded-lg bg-brand-navy px-4 py-3 text-center">
                  <div className="text-xl font-bold tracking-tight text-amber-400">{FACTORY.annualOutput}</div>
                  <div className="text-[11px] font-medium text-blue-200">Annual Output</div>
                </div>
                <div className="rounded-lg bg-brand-navy px-4 py-3 text-center">
                  <div className="text-xl font-bold tracking-tight text-amber-400">{FACTORY.countriesServed}</div>
                  <div className="text-[11px] font-medium text-blue-200">Countries Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Pain Points — buyer resonance ────────────────────────── */}
      <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-20 lg:py-24" aria-labelledby="pain-heading">
        <div className="container">
          <div className="max-w-3xl">
            <p className="mb-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-red-600">
              <AlertTriangle className="h-3.5 w-3.5" />
              Why Buyers Switch Suppliers
            </p>
            <h2 id="pain-heading" className="text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Most Thermal Paper Complaints<br className="hidden sm:block" /> Start at the Quotation
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 lg:text-lg">
              Nearly every fading, jamming or reorder dispute traces back to a variable nobody
              confirmed before production. These are the four we check first.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {sourcingPainPoints.map(({ icon: Icon, problem, detail, response }) => (
              <article key={problem} className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="flex items-start gap-2 text-base font-semibold leading-snug text-slate-950">
                      <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" aria-hidden="true" />
                      <span>{problem}</span>
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{detail}</p>
                  </div>
                </div>
                <p className="mt-5 flex items-start gap-2 border-t border-slate-200 pt-4 text-sm font-medium leading-relaxed text-slate-800">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" aria-hidden="true" />
                  <span>{response}</span>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Differentiators — why this factory ────────────────────── */}
      <section className="bg-white py-16 sm:py-20" aria-labelledby="diff-heading">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-600">
                What Makes Us Different
              </p>
              <h2 id="diff-heading" className="text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl">
                A Specification You Can Reorder Against
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                Price alone does not tell you whether the next batch will behave like the sample.
                These four controls are what make a quotation comparable and a reorder predictable.
              </p>
              <Link
                href="/manufacturing"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-navy-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-4"
              >
                See how production is controlled
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {differentiators.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex flex-col rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold leading-snug text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Manufacturing Capabilities ────────────────────────────── */}
      <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20 lg:py-24" aria-labelledby="mfg-heading">
        <div className="container">
          <div className="max-w-3xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-navy">
              Manufacturing Capabilities
            </p>
            <h2 id="mfg-heading" className="text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl">
              Built for High-Volume Export Orders
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 lg:text-lg">
              From single containers to multi-container monthly programs. Each order is scheduled by
              product specification, volume, and available production slots.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-slate-200 bg-white p-6 transition-[border-color,box-shadow] duration-200 hover:border-brand-navy/30 hover:shadow-md">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-navy/10 text-brand-navy">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 overflow-hidden rounded-xl border border-slate-200 shadow-sm">
            <Image
              src={FACTORY_LINE_IMG}
              alt="ZhixinPaper production line — coating, slitting and packaging"
              width={1200}
              height={400}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="w-full max-h-72 rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── 5.5 Precision Machinery ────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20 lg:py-24" aria-labelledby="machines-heading">
        <div className="container">
          <div className="max-w-3xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-navy">
              Precision Machinery
            </p>
            <h2 id="machines-heading" className="text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl">
              German &amp; Japanese Equipment Running Your Order
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 lg:text-lg">
              Equipment capabilities are matched to the applicable product specification and order
              quality plan. Every machine rating is a capability — the acceptance criteria for your
              order are confirmed in the approved specification.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {machines.map(({ name, origin, units, specs, desc, imageSlot, imageFallback }) => {
              const imgSrc = imgs[imageSlot] ?? imageFallback;
              return (
                <article key={name} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-[border-color,box-shadow] duration-200 hover:border-brand-navy/30 hover:shadow-lg">
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                    <Image
                      src={imgSrc}
                      alt={`${name} — ${origin} manufacturing equipment at ZhixinPaper`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent px-5 pb-5 pt-12">
                      <div className="flex items-center gap-2.5">
                        <Cpu className="h-4 w-4 text-amber-400" aria-hidden="true" />
                        <span className="text-sm font-semibold text-white">{name}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                      <span className="flex items-center gap-1.5 text-slate-600">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Origin</span>
                        <span className="font-semibold text-slate-900">{origin}</span>
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-600">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Units</span>
                        <span className="font-semibold text-slate-900">{units}</span>
                      </span>
                    </div>
                    <p className="text-[11px] font-medium uppercase tracking-wider text-amber-600">{specs}</p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-500">{desc}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mt-8 flex justify-center">
            <Link
              href="/manufacturing/equipment"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-navy-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-4"
            >
              View full equipment list
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </p>
        </div>
      </section>

      {/* ── 6. How Buyers Start ──────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20 lg:py-24" aria-labelledby="start-heading">
        <div className="container">
          <div className="max-w-3xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-navy">
              How to Start
            </p>
            <h2 id="start-heading" className="text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl">
              From First Contact to Repeat Orders
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 lg:text-lg">
              The same four-step path applies whether you are ordering a standard product or building
              a new OEM program.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {buyerSteps.map(({ step, icon: Icon, title, text }) => (
              <div key={step} className="flex flex-col rounded-xl border border-slate-200 bg-slate-50/60 p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-navy text-sm font-bold text-white">
                    {step}
                  </span>
                  <Icon className="h-5 w-5 text-brand-navy" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-semibold leading-snug text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button asChild variant="default" size="cta-lg">
              <Link href="/contact">
                Start With Your Specifications <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── 7. Compliance Evidence ───────────────────────────────────── */}
      <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-20 lg:py-24" aria-labelledby="compliance-heading">
        <div className="container">
          <div className="max-w-3xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-navy">
              Quality & Compliance
            </p>
            <h2 id="compliance-heading" className="text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl">
              Compliance Evidence by Scope
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 lg:text-lg">
              Evidence is reviewed for the applicable legal entity, product, material, order, and
              destination — not treated as a universal product certification.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {COMPLIANCE_EVIDENCE.map(({ name, kind, availability, icon: Icon }) => (
              <div key={name} className="rounded-xl border border-slate-200 bg-white p-5 transition-[border-color,box-shadow] duration-200 hover:border-brand-navy/30 hover:shadow-md">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-navy/10 text-brand-navy">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-3 text-sm font-semibold text-slate-950">{name}</h3>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-brand-navy">{kind}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">{availability}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. CTA — navy background ─────────────────────────────────── */}
      <section className="bg-brand-navy py-16 text-white sm:py-20" aria-labelledby="cta-heading">
        <div className="container text-center">
          <h2 id="cta-heading" className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Ready to Send Your Specifications?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-blue-100 lg:text-lg">
            Join {FACTORY.oemClients} clients who source paper and label products from {SITE.name}.
            We identify missing variables before sharing a number — so you receive a specification
            you can compare and reorder against.
          </p>
          <p className="mt-2 text-sm text-blue-200">
            Response: normally {SITE.responseTime} {SITE.responseTimeCondition}.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild variant="amber" size="cta-lg">
              <Link href="/contact">
                <MessageSquare className="w-5 h-5" aria-hidden="true" />
                Send Specifications for Quote <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outlineLight" size="cta-lg" className="bg-white/10 hover:bg-white/15">
              <a
                href={`${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I'd like to discuss a partnership for thermal paper rolls.")}`}
                target="_blank" rel="noopener noreferrer"
              >
                <Phone className="w-5 h-5 text-amber-400" aria-hidden="true" />
                Quick Question on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
