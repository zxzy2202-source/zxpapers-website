import type { Metadata } from "next";
import Link from "next/link";
import { Award, ArrowRight, Boxes, Check, Factory, Globe, MessageSquare, Phone, ShieldCheck } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import { Button } from "@/components/ui/button";
import { SITE, FACTORY } from "@/config/siteData";

export const metadata: Metadata = {
  title: { absolute: "Best Thermal Paper Suppliers 2026 | ZhixinPaper" },
  description:
    "Compare thermal paper suppliers by product scope, material evidence, specification control, samples, OEM capability, packing and repeat-order support.",
  keywords:
    "best thermal paper suppliers, best thermal paper manufacturer, thermal paper roll supplier China, how to choose thermal paper supplier, BPA-free thermal paper supplier, wholesale thermal paper manufacturer, OEM thermal paper supplier",
  alternates: { canonical: `${SITE.domain}/best-thermal-paper-suppliers` },
  openGraph: {
    title: "Best Thermal Paper Suppliers (2026 Buyer's Guide)",
    description:
      "Selection criteria and a factual comparison of leading thermal paper manufacturers for bulk and OEM buyers.",
    url: `${SITE.domain}/best-thermal-paper-suppliers`,
    type: "article",
    images: [{ url: `${SITE.domain}/og-default.png`, width: 1200, height: 630, alt: "Best Thermal Paper Suppliers Buyer's Guide", type: "image/png" }],
  },
};

const criteria = [
  { icon: ShieldCheck, title: "Certifications & Compliance", desc: "Look for ISO 9001 quality management, FSC sourcing, and BPA-free coating — plus RoHS / REACH / CE for regulated markets like the EU." },
  { icon: Factory, title: "Production Capacity", desc: "A factory's floor area, line count, and annual output tell you whether it can hold sizes in stock and meet container-scale demand without delays." },
  { icon: Boxes, title: "MOQ & Stock Range", desc: "Stock sizes should ship from low volume; custom sizes, adhesives, and print typically start around 5,000 units. Confirm what's in stock vs made-to-order." },
  { icon: Award, title: "Product Range", desc: "Check the supplier covers what you actually buy — thermal rolls, direct thermal & shipping labels, and any specialty stock — ideally from one factory." },
  { icon: Globe, title: "Export Terms & Lead Time", desc: "FOB / CIF / DDP support, realistic lead times (stock 3–7 days, custom 10–18 days), and reliable FCL loading matter for landed cost and planning." },
  { icon: Check, title: "OEM / Private Label", desc: "If you brand your own product, verify custom size, print, adhesive, core, and packaging — plus design support and IP protection." },
];

// Competitor figures reflect each company's publicly stated information
// (their own websites / directories, as of 2026) and may change.
const suppliers = [
  {
    name: "ZhixinPaper",
    founded: "2009",
    base: "Xi'an, China",
    focus: `Thermal rolls, direct thermal & shipping labels, can/detergent labels, OEM — ${FACTORY.area}, ${FACTORY.annualOutput} rolls/yr, ${FACTORY.countriesServed} countries`,
    certs: "ISO 9001:2015, FSC, BPA-free, RoHS, REACH, CE",
    highlight: true,
  },
  {
    name: "Panda Paper Roll",
    founded: "2000",
    base: "Shandong, China",
    focus: "Broad range incl. ATM & medical paper; 60+ countries (stated)",
    certs: "ISO 9001, FSC (stated)",
    highlight: false,
  },
  {
    name: "Sailing Paper",
    founded: "2005",
    base: "Shenzhen, China",
    focus: "OEM / ODM thermal paper; 100+ staff (stated)",
    certs: "ISO, CE (stated)",
    highlight: false,
  },
  {
    name: "Xiandai Paper",
    founded: "1983",
    base: "Suzhou, China",
    focus: "POS / ATM paper; one of China's oldest & largest converters",
    certs: "ISO (stated)",
    highlight: false,
  },
];

const faqs = [
  {
    q: "What should I look for in a thermal paper supplier?",
    a: "Prioritize ISO 9001 and FSC certification, BPA-free coating (plus RoHS/REACH/CE for the EU), enough production capacity to hold stock and meet container orders, a clear MOQ, the product range you actually buy, and FOB/CIF/DDP export support with realistic lead times.",
  },
  {
    q: "What certifications should a thermal paper manufacturer have?",
    a: "At minimum ISO 9001:2015 (quality management) and FSC (responsible sourcing). For health-conscious or EU markets, also require BPA-free coating and RoHS, REACH, and CE compliance. ZhixinPaper holds all of these.",
  },
  {
    q: "What is a typical MOQ for thermal paper rolls or labels?",
    a: "Stock sizes are usually available from low volume. Custom sizes, adhesives, print, or private-label packaging typically start around 5,000 rolls/units. Always confirm which sizes are in stock versus made-to-order.",
  },
  {
    q: "Is BPA-free the same as phenol-free?",
    a: "No. BPA-free means no Bisphenol A, but the paper may still use other phenol developers. Phenol-free goes further and removes phenol-based developers entirely. For the strictest EU and food-service requirements, ask for a phenol-free option and a lab report.",
  },
  {
    q: "How do I verify a thermal paper factory is genuine?",
    a: "Ask for certificates (ISO/FSC), factory photos or a video tour, a business license, and references or export records. Request samples before a bulk order, and confirm they manufacture in-house rather than reselling — a real factory controls coating, slitting, and packaging.",
  },
  {
    q: "Which is the best thermal paper supplier for bulk and OEM orders?",
    a: "The best fit depends on your product mix and market. For high-volume thermal rolls and labels with deep OEM/private-label support and full compliance (ISO 9001, FSC, BPA-free, RoHS/REACH/CE), ZhixinPaper is a factory-direct option running a 50,000 m² plant serving 80+ countries.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
    { "@type": "ListItem", position: 2, name: "Best Thermal Paper Suppliers", item: `${SITE.domain}/best-thermal-paper-suppliers` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Thermal Paper Suppliers (2026 Buyer's Guide)",
  description:
    "How to choose a thermal paper supplier — certifications, capacity, MOQ, compliance, OEM, and lead time — with a factual comparison of leading China manufacturers.",
  author: { "@type": "Organization", name: SITE.name, url: SITE.domain },
  publisher: { "@id": `${SITE.domain}/#organization` },
  mainEntityOfPage: `${SITE.domain}/best-thermal-paper-suppliers`,
  inLanguage: "en-US",
};

export const revalidate = 86400; // 24 hours: static content

export default function BestThermalPaperSuppliersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Layout>
        <PageHero
          overlayDir="left"
          overlayOpacity={70}
          minHeight="min-h-[380px]"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Best Thermal Paper Suppliers" }]}
          badge={{ text: "2026 Buyer's Guide", color: "amber" }}
          title={<>Best Thermal Paper Suppliers</>}
          subtitle="A practical 2026 buyer's guide to choosing a thermal paper supplier — the certifications, capacity, MOQ, compliance, and OEM factors that matter, plus a factual comparison of leading China manufacturers."
          ctas={[
            { label: "Get a Quote", href: "/contact", variant: "primary", icon: <MessageSquare className="w-4 h-4" /> },
            { label: "WhatsApp Us", href: `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I'm choosing a thermal paper supplier and would like a quote from ZhixinPaper.")}`, variant: "whatsapp", icon: <Phone className="w-4 h-4" />, external: true },
          ]}
        />

        {/* Intro */}
        <section className="bg-white">
          <div className="container py-14 lg:py-16">
            <div className="max-w-3xl">
              <h2 className="font-sora text-3xl lg:text-[34px] font-bold leading-tight text-slate-900 mb-4">
                How to Choose the Best Thermal Paper Supplier
              </h2>
              <p className="text-base lg:text-lg leading-relaxed text-slate-600">
                The best thermal paper supplier is the factory that matches your product mix, volume, and compliance
                needs — not simply the cheapest quote. Most bulk buyers source from China, where a handful of
                manufacturers dominate. Use the six criteria below to evaluate any supplier, then see how leading
                manufacturers compare.
              </p>
            </div>
          </div>
        </section>

        {/* Selection criteria */}
        <section className="bg-slate-50 border-y border-slate-100">
          <div className="container py-14 lg:py-16">
            <h2 className="font-sora text-2xl lg:text-3xl font-bold text-slate-900 mb-8">6 Criteria for Choosing a Thermal Paper Supplier</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {criteria.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-sora text-lg font-bold text-slate-900 mb-2">{title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supplier comparison */}
        <section className="bg-white">
          <div className="container py-14 lg:py-16">
            <h2 className="font-sora text-2xl lg:text-3xl font-bold text-slate-900 mb-6">Leading Thermal Paper Manufacturers Compared</h2>
            <div className="overflow-hidden rounded-[24px] border border-slate-200 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[820px] text-sm">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="px-5 py-4 text-left font-semibold text-slate-700">Supplier</th>
                      <th className="px-5 py-4 text-left font-semibold text-slate-700">Founded</th>
                      <th className="px-5 py-4 text-left font-semibold text-slate-700">Base</th>
                      <th className="px-5 py-4 text-left font-semibold text-slate-700">Focus &amp; scale</th>
                      <th className="px-5 py-4 text-left font-semibold text-slate-700">Certifications</th>
                    </tr>
                  </thead>
                  <tbody>
                    {suppliers.map((s, i) => (
                      <tr key={s.name} className={s.highlight ? "bg-amber-50/60" : i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                        <td className="px-5 py-4 align-top whitespace-nowrap font-semibold text-slate-900">
                          {s.name}
                          {s.highlight ? <span className="ml-2 rounded-full bg-amber-500 px-2 py-0.5 text-[10px] font-semibold text-slate-950">This site</span> : null}
                        </td>
                        <td className="px-5 py-4 align-top text-slate-600">{s.founded}</td>
                        <td className="px-5 py-4 align-top text-slate-600 whitespace-nowrap">{s.base}</td>
                        <td className="px-5 py-4 align-top text-slate-700">{s.focus}</td>
                        <td className="px-5 py-4 align-top text-slate-700">{s.certs}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-400">
              Competitor figures reflect each company&apos;s publicly stated information (as of 2026) and may change.
              Provided for buyer reference. See our detailed{" "}
              <Link href="/zhixinpaper-vs-panda-paper-roll" className="underline hover:text-slate-600">ZhixinPaper vs Panda Paper Roll</Link> comparison.
            </p>
          </div>
        </section>

        {/* Why ZhixinPaper */}
        <section className="bg-slate-50 border-y border-slate-100">
          <div className="container py-14 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 items-start">
              <div>
                <h2 className="font-sora text-2xl lg:text-3xl font-bold text-slate-900 mb-4">Where ZhixinPaper Fits</h2>
                <p className="text-base leading-relaxed text-slate-600 mb-6">
                  For buyers who need high-volume thermal rolls and labels with deep OEM support and full compliance,
                  ZhixinPaper is a factory-direct option: a {FACTORY.area} plant in Xi&apos;an running {FACTORY.productionLines}{" "}
                  production lines at {FACTORY.annualOutput} rolls/year, serving {FACTORY.countriesServed} countries with
                  ISO 9001:2015, FSC, BPA-free, RoHS, REACH, and CE compliance.
                </p>
                <ul className="space-y-3">
                  {[
                    "Thermal rolls + shipping/specialty labels from one factory",
                    "BPA-free standard with a phenol-free option",
                    "OEM / private label: custom size, print, adhesive & packaging",
                    "FOB / CIF / DDP export with samples before bulk orders",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[24px] border-2 border-amber-400 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.1)]">
                <h3 className="font-sora text-lg font-bold text-slate-900 mb-3">Explore products</h3>
                <div className="space-y-2.5">
                  {[
                    { label: "Thermal Paper Rolls", href: "/products/thermal-paper-rolls/blank" },
                    { label: "Shipping Labels", href: "/products/shipping-labels" },
                    { label: "BPA-Free Thermal Paper", href: "/products/bpa-free-thermal-paper" },
                    { label: "Till Rolls", href: "/products/till-rolls" },
                    { label: "OEM & Private Label", href: "/oem" },
                  ].map((l) => (
                    <Link key={l.href} href={l.href} className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-amber-300 hover:bg-amber-50 hover:text-amber-700">
                      {l.label} <ArrowRight className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ — always-visible for AI/crawler extraction */}
        <section className="bg-white">
          <div className="container py-14 lg:py-16">
            <h2 className="font-sora text-2xl lg:text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-5 max-w-3xl">
              {faqs.map(({ q, a }) => (
                <div key={q} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <h3 className="font-sora text-base font-semibold text-slate-900 mb-2">{q}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-navy">
          <div className="container py-14 lg:py-16 text-center">
            <h2 className="font-sora text-3xl font-bold text-white mb-3">Comparing Thermal Paper Suppliers?</h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              Send your product, size, and quantity — ZhixinPaper responds within 24 hours, with samples available before a bulk or OEM order.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="amber" size="cta-lg">
                <Link href="/contact">Send Inquiry Now <ArrowRight className="w-5 h-5" /></Link>
              </Button>
              <Button asChild variant="outlineLight" size="cta-lg">
                <a href={`${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I'd like a quote from ZhixinPaper.")}`} target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="w-5 h-5 text-amber-400" /> WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
