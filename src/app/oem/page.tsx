import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SITE } from "@/config/siteData";
import InquiryForm from "@/components/shared/InquiryForm";
import { CheckCircle, ArrowRight, Shield, Printer, Package, Palette, Award, Lock, MessageSquare, Phone, FileCheck2, Boxes } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { getSlotImage } from "@/lib/imageSlotUtils";

export const metadata: Metadata = {
  title: "OEM Thermal Paper | Custom Printing & Labels",
  description: "Plan OEM thermal paper rolls and labels through artwork, specification, proofing, custom printing, private-label packing and repeat-order control.",
  alternates: { canonical: `${SITE.domain}/oem` },
};

const OEM_FACTORY_IMG_FB = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/oem-factory-EHdu8eZwwzSo5DxSRyzQdF.webp";

const services = [
  { icon: Printer, title: "Custom Printing & Specifications", desc: "Align roll or label structure, print content, barcodes, versions, and approval checkpoints before quoting.", href: "/oem/custom-printing", tag: "Artwork & spec" },
  { icon: Package, title: "Packaging & Private Label", desc: "Define inner packs, cartons, pallet labels, retail presentation, and repeat-order SKU rules for your market.", href: "/oem/packaging", tag: "Packing system" },
  { icon: Palette, title: "Design Support", desc: "Prepare logo layouts, print files, carton visuals, and version-control notes that production can reuse safely.", href: "/oem/design-support", tag: "Brand assets" },
  { icon: Award, title: "Quality Assurance & Traceability", desc: "Confirm sampling, batch records, defect handling, and shipment evidence before mass production starts.", href: "/oem/quality-assurance", tag: "QA workflow" },
  { icon: Lock, title: "IP Protection & NDA", desc: "Set confidentiality scope, approved file access, and neutral handling rules before artwork exchange.", href: "/oem/ip-protection", tag: "Confidentiality" },
  { icon: Shield, title: "Case Studies", desc: "Review how OEM programs are structured for distributors, retailers, and private-label supply projects.", href: "/oem/case-studies", tag: "Proof of fit" },
];

const process = [
  { step: "01", title: "Define product scope", desc: "Confirm whether the OEM program covers rolls, labels, or a combined private-label line, then lock the target market and printer/application context." },
  { step: "02", title: "Submit spec and artwork pack", desc: "Provide dimensions, materials, print side, barcodes, packaging hierarchy, versions, quantity plan, and destination requirements in one brief." },
  { step: "03", title: "Review feasibility and risks", desc: "Check printable area, material match, compliance notes, scanning needs, pallet pattern, and whether a sample or NDA route is required." },
  { step: "04", title: "Approve proof route", desc: "Confirm artwork versions, sample expectations, sign-off owners, and change-control rules before mass production is scheduled." },
  { step: "05", title: "Freeze production reference", desc: "Convert the approved proof into a repeatable manufacturing reference for printing, packing, labeling, and shipment evidence." },
  { step: "06", title: "Run supply and repeat orders", desc: "Inspect against the approved reference, ship with the agreed documents, and keep the SKU structure stable for replenishment orders." },
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
    }
  ]
};

export const revalidate = 3600; // 1 hour: slot image changes infrequently

export default async function OEMPage() {
  const oemHeroImg = await getSlotImage("oem:hero", OEM_FACTORY_IMG_FB);
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <PageHero
        bgImage={oemHeroImg}
        bgImageAlt="ZhixinPaper OEM private label thermal paper rolls with custom logo printing and branded packaging"
        overlayDir="left"
        overlayOpacity={56}
        minHeight="min-h-[390px]"
        compact
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "OEM Services" }]}
        badge={{ text: "Private Label & OEM", color: "purple" }}
        eyebrow="Custom Thermal Paper Manufacturing"
        title={<>OEM Thermal Paper<br /><span className="text-amber-400">Private Label Solutions</span></>}
        subtitle="Build your own brand with our factory. Custom logo, packaging, and core printing. MOQ from 1 pallet. NDA available. 2,000+ OEM clients worldwide."
        trustBadges={["Custom Logo & Packaging", "NDA Available", "MOQ from 1 Pallet", "ISO 9001", "BPA-Free"]}
        mobileTrustBadgeLimit={2}
        ctas={[
          { label: "Start OEM Project", href: "/contact", variant: "primary", icon: <MessageSquare className="w-4 h-4" /> },
          { label: "WhatsApp OEM Team", href: `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I'm interested in OEM / private label thermal paper. Please send me details.")}`, variant: "whatsapp", icon: <Phone className="w-4 h-4" />, external: true },
        ]}
        stats={undefined}
      />

      <section className="border-b border-slate-200 bg-slate-50" aria-label="OEM service facts">
        <div className="container grid grid-cols-2 divide-x divide-slate-200 sm:grid-cols-4">
          {[
            { value: "2,000+", label: "OEM Clients" },
            { value: "MOQ 1 Pallet", label: "Low Minimum" },
            { value: "7-14 Days", label: "Sample Lead Time" },
            { value: "NDA", label: "IP Protection" },
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

      <div className="container py-12 sm:py-14 lg:py-16">
        <section className="mb-14 lg:mb-16">
          <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-700">OEM service map</p>
              <h2 className="mt-2 font-sora text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl">Build the OEM program before you ask for a price</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">Use this page as the coordination hub for artwork, packaging, approvals, confidentiality, quality evidence, and repeat-order control. Each service path answers a different risk in the OEM workflow.</p>
            </div>
            <div className="grid gap-2 text-sm text-slate-600 sm:max-w-xs">
              <div className="flex items-center gap-2"><FileCheck2 className="h-4 w-4 text-amber-700" aria-hidden="true" /><span>Spec and artwork review before quotation</span></div>
              <div className="flex items-center gap-2"><Boxes className="h-4 w-4 text-amber-700" aria-hidden="true" /><span>Packaging and repeat-order references aligned</span></div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc, href, tag }) => (
              <Link
                key={href}
                href={href}
                className="group flex h-full flex-col border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-[0_24px_55px_rgba(245,158,11,0.14)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-700 transition-colors duration-300 group-hover:bg-brand-navy group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className="rounded-full border border-slate-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">{tag}</span>
                </div>
                <h3 className="mt-5 font-sora text-xl font-semibold leading-snug text-slate-950 group-hover:text-brand-navy">{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{desc}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy">
                  Review this service
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-14 border border-slate-200 bg-slate-50 p-8 sm:p-10 lg:mb-16 lg:p-12">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-700">OEM workflow</p>
            <h2 className="mt-2 font-sora text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl">Move from inquiry to repeat supply with fewer surprises</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">The best OEM projects do not start with a generic quote. They start with a controlled brief, clear approval owners, and a production reference that can survive replenishment orders.</p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {process.map(({ step, title, desc }) => (
              <article key={step} className="border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-none items-center justify-center bg-brand-navy text-sm font-bold text-white">{step}</div>
                  <div>
                    <h3 className="font-sora text-lg font-semibold text-slate-950">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start lg:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-700">Buyer checklist</p>
            <h2 className="mt-2 font-sora text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl">What a serious OEM buyer should confirm early</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">This page is strongest when you use it to close scope gaps before quotation. That means product structure, print versions, packaging logic, confidentiality, and shipment evidence are aligned before the factory locks the job.</p>
            <ul className="mt-6 space-y-3 border-t border-slate-200 pt-6">
              {[
                "Define the exact roll or label program before discussing lead time.",
                "Bundle artwork, barcode, language, and packaging hierarchy in one project brief.",
                "Decide whether sample approval is visual only or includes application testing.",
                "Set NDA, file ownership, and access scope before sharing sensitive layouts.",
                "Freeze the approved proof as the repeat-order manufacturing reference.",
                "Match inspection, labels, and shipping documents to the destination market.",
                "Keep one owner for approvals so version changes do not leak into production.",
                "Document carton, pallet, and SKU logic for replenishment efficiency.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-none text-amber-600" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
            <div className="border border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-6 lg:p-7">

            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-700">Start the project</p>
            <h3 className="mt-2 font-sora text-2xl font-semibold text-slate-950">Send one complete OEM brief</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">Share the product route, dimensions, material, artwork, print side, quantity plan, packaging, destination, and confidentiality needs. That gives the team enough context to prepare the right next step instead of a generic reply.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button asChild variant="amber" size="cta">
                <Link href="/contact">Start OEM Project <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
              </Button>
              <Button asChild variant="outlineBrand" size="cta">
                <a href={`${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I need an OEM briefing checklist for thermal paper private label projects.")}`} target="_blank" rel="noopener noreferrer">WhatsApp OEM Team <Phone className="h-4 w-4" aria-hidden="true" /></a>
              </Button>
            </div>
            <div className="mt-6 border-t border-slate-200 pt-6">
              <InquiryForm
                productName="OEM Partnership Inquiry"
                compact
                initialMessage={undefined}
              />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
