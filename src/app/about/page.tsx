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

const milestones = [
  { year: SITE.founded, event: "Founded in Xi'an, Shaanxi, China" },
  { year: "Today", event: `${FACTORY.area} facility with ${FACTORY.productionLines} production lines and ${FACTORY.annualOutputLabel.toLowerCase()}` },
];

const capabilities = [
  { icon: Factory, title: `${FACTORY.area} Facility`, desc: "Modern manufacturing complex in Xi'an Industrial Park with climate-controlled production zones." },
  { icon: Zap, title: `${FACTORY.productionLines} Production Lines`, desc: "Slitting, coating, and packaging capacity is scheduled by product specification, order volume, and available production slots." },
  { icon: BarChart3, title: FACTORY.annualOutputLabel, desc: `Rated capacity; actual output depends on product mix, specifications, and production schedule.` },
  { icon: Layers, title: "Integrated Production Processes", desc: "Available internal processes include paper coating, slitting, converting, and finished-product packaging; scope depends on the product and order." },
  { icon: Package, title: "OEM & Private Label", desc: "Custom logo, packaging design, and core printing for your brand. MOQ depends on product and specification." },
  { icon: Truck, title: `FCL Loading in ${FACTORY.fclLoadingLabel}`, desc: "Applies to confirmed standard-product orders when materials and production slots are available; custom orders require schedule confirmation." },
];

const whyUs = [
  { icon: Clock, stat: FACTORY.yearsExperience, label: "Years Experience", desc: "Deep expertise in thermal paper manufacturing" },
  { icon: Globe, stat: FACTORY.countriesServed, label: "Countries Served", desc: "Global export network across 6 continents" },
  { icon: Users, stat: FACTORY.oemClients, label: "OEM Clients", desc: "Trusted by distributors and retailers worldwide" },
  { icon: Zap, stat: "24h", label: "Quote Response", desc: "After complete specifications are received" },
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
      "name": "About",
      "item": "https://www.zxpapers.com/about"
    }
  ]
};

// VideoObject schema for the factory aerial tour video — fixes GSC "4 videos not indexed".
// uploadDate is intentionally hardcoded (no dynamic Date object) to keep schema deterministic
// across SSR / ISR rebuilds, which avoids Google flagging the page as having unstable schema.
const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Zhixin Paper Factory Aerial Tour — Xi'an, China",
  "description": `Aerial overview of Zhixin Paper's ${FACTORY.area} paper and label manufacturing facility in Xi'an, Shaanxi, China, with ${FACTORY.productionLines} production lines and customers in ${FACTORY.countriesServed} countries.`,
  "thumbnailUrl": [
    "https://www.zxpapers.com/og-default.png",
  ],
  "uploadDate": "2024-09-01T00:00:00+08:00",
  "contentUrl": "https://www.zxpapers.com/videos/factory-aerial-overview.mp4",
  "embedUrl": "https://www.zxpapers.com/about",
  "duration": "PT45S",
  "publisher": {
    "@type": "Organization",
    "name": "Zhixin Paper",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.zxpapers.com/og-default.png",
    },
  },
  "regionsAllowed": "US,CA,GB,DE,FR,ES,IT,NL,SA,AE,EG,ZA,NG,KE,IN,JP,KR,SG,MY,TH,VN,ID,BR,MX,AU",
};
export const revalidate = 3600; // 1 hour: slot images change infrequently

export default async function AboutPage() {
  const imgs = await getSlotImages([
    { slot: "about:factory-aerial", fallback: FACTORY_IMG_FB },
    { slot: "about:factory-line", fallback: FACTORY_LINE_IMG_FB },
  ]);
  const FACTORY_IMG = imgs["about:factory-aerial"];
  const FACTORY_LINE_IMG = imgs["about:factory-line"];
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <PageHero
        bgImage={FACTORY_IMG}
        bgImageAlt="ZhixinPaper thermal paper manufacturing facility in Xi'an, Shaanxi, China"
        overlayDir="left"
        overlayOpacity={50}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        badge={{ icon: <Factory className="w-4 h-4" />, text: `Founded ${SITE.founded} · Xi'an, Shaanxi, China`, color: "amber" }}
        title={<>About <span className="text-amber-400">{SITE.name}</span></>}
        subtitle="Paper and label manufacturing since 2009, supporting standard products and OEM/ODM requirements for customers worldwide."
        ctas={[
          { label: "Send Inquiry Now", href: "/contact", variant: "primary", icon: <MessageSquare className="w-4 h-4" /> },
          { label: "WhatsApp Us", href: `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I'd like to learn more about ZhixinPaper.")}`, variant: "whatsapp", icon: <Phone className="w-4 h-4" />, external: true },
        ]}
        stats={[
          { value: FACTORY.yearsExperience, label: "Years Experience" },
          { value: FACTORY.countriesServed, label: "Countries Served" },
          { value: FACTORY.oemClients, label: "OEM Clients" },
          { value: "24h", label: "Quote Response" },
        ]}
        rightSlot={
          <div className="w-full max-w-sm space-y-4">
            <div className="bg-white/10 border border-white/20 rounded-lg p-5">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-4">Factory at a Glance</div>
              <div className="space-y-3">
                {[
                  { icon: Factory, label: "Factory Area", value: FACTORY.area },
                  { icon: Zap, label: "Production Lines", value: FACTORY.productionLines },
                  { icon: BarChart3, label: "Annual Output", value: FACTORY.annualOutput },
                  { icon: Globe, label: "Countries Served", value: FACTORY.countriesServed },
                  { icon: Users, label: "OEM Clients", value: FACTORY.oemClients },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center justify-between py-1.5 border-b border-white/10 last:border-0">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 bg-amber-500/20 rounded-md flex items-center justify-center">
                        <Icon className="w-3.5 h-3.5 text-amber-400" />
                      </div>
                      <span className="text-xs text-slate-300">{label}</span>
                    </div>
                    <span className="text-sm font-bold text-white">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {["Certificate review", "Test reports", "Declarations"].map((evidence) => (
                <div key={evidence} className="bg-white/10 border border-white/15 rounded-md p-2.5 text-center">
                  <CheckCircle className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                  <div className="text-slate-100 font-bold text-xs">{evidence}</div>
                </div>
              ))}
            </div>
          </div>
        }
      />

      {/* ── Key Facts (human-readable, AI-extractable; mirrors llms.txt) ── */}
      <section className="border-b border-slate-200 bg-slate-50" aria-labelledby="key-facts-heading">
        <div className="container py-14">
          <div className="inline-flex items-center gap-2 text-brand-navy text-sm font-semibold uppercase tracking-widest mb-4">
            <div className="w-8 h-0.5 bg-brand-navy" />
            Key Facts
          </div>
          <h2 id="key-facts-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
            {SITE.name} at a Glance
          </h2>
          <p className="text-slate-600 mb-8 max-w-3xl">
            {SITE.name} (legal name Xi&apos;an Zhi Xin Paper Co., Ltd.) is a factory-direct
            manufacturer of thermal paper rolls, self-adhesive labels, carbonless (NCR) paper,
            and continuous computer forms, founded in {SITE.founded} in Xi&apos;an, Shaanxi, China.
          </p>
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
            {[
              { term: "Legal name", value: "Xi'an Zhi Xin Paper Co., Ltd." },
              { term: "Founded", value: SITE.founded },
              { term: "Headquarters", value: "Xi'an, Shaanxi, China" },
              { term: "Factory size", value: FACTORY.area },
              { term: "Production lines", value: FACTORY.productionLines },
              { term: "Annual output", value: FACTORY.annualOutputLabel },
              { term: "Daily output", value: FACTORY.dailyOutput },
              { term: "Capacity basis", value: FACTORY.capacityBasis },
              { term: "Employees", value: FACTORY.employees },
              { term: "Countries served", value: `${FACTORY.countriesServed} countries` },
              { term: "OEM / private-label clients", value: FACTORY.oemClients },
              { term: "FCL loading", value: `${FACTORY.fclLoadingLabel}; ${FACTORY.fclLoadingCondition}` },
              { term: "Export terms", value: "FOB, CIF, DDP worldwide" },
              { term: "Compliance evidence", value: "Certificates, chain-of-custody records, test reports, supplier declarations, regulatory references, and conformity declarations are reviewed by product and order" },
              { term: "Product range", value: "Thermal paper rolls, self-adhesive labels, carbonless (NCR) paper, continuous computer forms" },
              { term: "Business model", value: "Factory-direct wholesale & OEM/private label" },
            ].map(({ term, value }) => (
              <div key={term} className="border-l-2 border-brand-navy/20 pl-4">
                <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">{term}</dt>
                <dd className="mt-1 text-sm font-medium text-slate-900">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Company Profile ──────────────────────────────────────── */}
      <div className="container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-brand-navy text-sm font-semibold uppercase tracking-widest mb-4">
              <div className="w-8 h-0.5 bg-brand-navy" />
              Company Profile
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 leading-tight text-balance">
              Reliable Paper and Label Manufacturing{" "}
              <span className="text-brand-navy">Since 2009</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4 text-lg">
              Founded in 2009, Zhixin Paper manufactures thermal paper rolls, self-adhesive
              labels, carbonless (NCR) paper, and continuous computer forms for customers
              worldwide.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our {FACTORY.area} production facility has {FACTORY.productionLines} production
              lines and {FACTORY.annualOutputLabel.toLowerCase()}. Actual output depends on the
              product mix, specifications, and production schedule.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Today, Zhixin Paper supports customers in {FACTORY.countriesServed} countries.
              Our experience across international markets helps us respond to different product
              specifications, applications, and sourcing requirements.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Whether you need a stable supply of standard products or a customized paper and
              label solution, we are committed to supporting your business with consistent
              manufacturing, responsive communication, and practical service.
            </p>
            <Button
              asChild
              variant="default"
              size="cta-lg"
              className="w-full max-w-full whitespace-normal px-4 text-center sm:w-auto sm:px-8"
            >
              <Link href="/contact">
                Share Specifications &amp; Request a Quote <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <div className="space-y-4">
            <video
              className="aspect-[640/427] w-full rounded-lg border border-slate-200 object-cover"
              poster={FACTORY_IMG}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={`${SITE.name} factory aerial video tour in Xi'an, China`}
            >
              <source src={FACTORY_AERIAL_VIDEO} type="video/mp4" />
            </video>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: FACTORY.area, label: "Factory Floor Area" },
                { value: FACTORY.productionLines, label: "Production Lines" },
                { value: FACTORY.annualOutput, label: "Annual Output" },
                { value: FACTORY.countriesServed, label: "Countries Served" },
              ].map(({ value, label }) => (
                <div key={label} className="bg-brand-navy text-white rounded-md p-4 text-center">
                  <div className="text-2xl font-extrabold text-amber-400 mb-1">{value}</div>
                  <div className="text-xs text-slate-300">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Manufacturing Capabilities ───────────────────────────── */}
      <div className="bg-slate-50 py-20">
        <div className="container">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-brand-navy text-sm font-semibold uppercase tracking-widest mb-4">
              <div className="w-8 h-0.5 bg-brand-navy" />
              Manufacturing Capabilities
              <div className="w-8 h-0.5 bg-brand-navy" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Built for Bulk Orders
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Our facility is purpose-built for high-volume export orders — from single containers to multi-container monthly programs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-lg p-6 border border-slate-200 hover:border-brand-navy transition-colors">
                <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-md flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-brand-navy" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Image
              src={FACTORY_LINE_IMG}
              alt="ZhixinPaper Production Line"
              className="w-full rounded-lg border border-slate-200 object-cover max-h-72"
              width={1200}
              height={400}
             sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
          </div>
        </div>
      </div>

      {/* ── Certifications ───────────────────────────────────────── */}
      <div className="container py-20">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-brand-navy text-sm font-semibold uppercase tracking-widest mb-4">
            <div className="w-8 h-0.5 bg-brand-navy" />
            Quality & Compliance
            <div className="w-8 h-0.5 bg-brand-navy" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Compliance Evidence by Scope
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Evidence is reviewed for the applicable legal entity, product, material, order, and destination rather than treated as a universal product certification.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {COMPLIANCE_EVIDENCE.map(({ name, kind, availability, icon: Icon }) => (
            <div key={name} className="p-5 bg-white rounded-lg border border-slate-200 hover:border-brand-navy transition-colors">
              <div className="w-12 h-12 rounded-md flex items-center justify-center mb-3 bg-slate-50 border border-slate-200 text-brand-navy">
                <Icon className="w-6 h-6" />
              </div>
              <div className="font-bold text-slate-900 text-sm mb-1">{name}</div>
              <div className="text-xs font-semibold text-brand-navy mb-2">{kind}</div>
              <div className="text-xs text-slate-500 leading-relaxed">{availability}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Timeline ─────────────────────────────────────────────── */}
      <div className="bg-brand-navy py-20">
        <div className="container">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
              <div className="w-8 h-0.5 bg-amber-400" />
              Our Journey
              <div className="w-8 h-0.5 bg-amber-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              {FACTORY.yearsExperience} Years of Growth
            </h2>
          </div>
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/10 hidden lg:block" />
            <div className="space-y-8">
              {milestones.map(({ year, event }, i) => (
                <div key={year} className={`flex items-center gap-8 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <div className="bg-white/10 border border-white/10 rounded-lg p-5 inline-block max-w-sm">
                      <div className="font-extrabold text-amber-400 text-xl mb-2">{year}</div>
                      <p className="text-slate-300 text-sm leading-relaxed">{event}</p>
                    </div>
                  </div>
                  <div className="w-5 h-5 bg-amber-400 rounded-full border-4 border-brand-navy flex-shrink-0 hidden lg:block ring-2 ring-white/20" />
                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Why Choose Us ────────────────────────────────────────── */}
      <div className="container py-20">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-brand-navy text-sm font-semibold uppercase tracking-widest mb-4">
            <div className="w-8 h-0.5 bg-brand-navy" />
            Why Buyers Choose Us
            <div className="w-8 h-0.5 bg-brand-navy" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            The Trusted Choice for Distributors
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUs.map(({ icon: Icon, stat, label, desc }) => (
            <div key={label} className="text-center p-8 bg-brand-navy text-white rounded-lg">
              <div className="w-14 h-14 bg-amber-500/20 rounded-md flex items-center justify-center mx-auto mb-4">
                <Icon className="w-7 h-7 text-amber-400" />
              </div>
              <div className="text-3xl font-extrabold text-amber-400 mb-1">{stat}</div>
              <div className="font-bold text-white mb-2">{label}</div>
              <div className="text-slate-300 text-sm">{desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <div className="bg-brand-navy-alt py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Ready to Start a Partnership?
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto text-lg">
            Join {FACTORY.oemClients} clients who source paper and label products from {SITE.name}.
            We normally respond {SITE.responseTime} {SITE.responseTimeCondition}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="amber" size="cta-lg">
              <Link href="/contact">
                Send Inquiry Now <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outlineLight" size="cta-lg" className="bg-white/10 hover:bg-white/15 hover:border-white/25">
              <a href={`${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I'd like to discuss a partnership for thermal paper rolls.")}`}
                target="_blank" rel="noopener noreferrer">
                <MessageSquare className="w-5 h-5 text-amber-400" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
