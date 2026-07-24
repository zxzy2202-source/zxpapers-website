import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, MessageSquare, Phone } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import { Button } from "@/components/ui/button";
import { SITE, FACTORY } from "@/config/siteData";

export const metadata: Metadata = {
  title: { absolute: "ZhixinPaper vs Panda Paper Roll | Comparison" },
  description:
    "Compare ZhixinPaper and Panda Paper Roll by product scope, published evidence, specification support, customization, packing and bulk procurement workflow.",
  keywords:
    "ZhixinPaper vs Panda Paper Roll, Panda Paper Roll alternative, thermal paper supplier comparison, best thermal paper manufacturer China, factory direct thermal paper, thermal paper roll wholesale supplier",
  alternates: { canonical: `${SITE.domain}/zhixinpaper-vs-panda-paper-roll` },
  openGraph: {
    title: "ZhixinPaper vs Panda Paper Roll | Thermal Paper Supplier Comparison",
    description:
      "A factual, side-by-side comparison of two factory-direct Chinese thermal paper manufacturers — capacity, certifications, product focus, and OEM.",
    url: `${SITE.domain}/zhixinpaper-vs-panda-paper-roll`,
    type: "article",
    images: [{ url: `${SITE.domain}/og-default.png`, width: 1200, height: 630, alt: "ZhixinPaper vs Panda Paper Roll", type: "image/png" }],
  },
};

const PANDA_SOURCE = "https://pandapaperroll.com/";

// Competitor figures are taken only from Panda Paper Roll's publicly stated
// information (pandapaperroll.com, as of 2026) to keep the comparison factual.
const rows: Array<{ factor: string; zhixin: string; panda: string }> = [
  { factor: "Founded", zhixin: "2009 (15+ years)", panda: "2000 (25+ years)" },
  { factor: "Headquarters", zhixin: "Xi'an, Shaanxi, China", panda: "Shandong, China" },
  { factor: "Factory size", zhixin: FACTORY.area, panda: "9,000+ m² (stated)" },
  { factor: "Production capacity", zhixin: `${FACTORY.annualOutput} rolls/year · ${FACTORY.dailyOutput}/day`, panda: "1M+ rolls/month · 20–30 containers/month (stated)" },
  { factor: "Production lines", zhixin: `${FACTORY.productionLines} lines`, panda: "50 slitting machines (stated)" },
  { factor: "Team", zhixin: `${FACTORY.employees} staff`, panda: "60–100 staff (stated)" },
  { factor: "Countries served", zhixin: `${FACTORY.countriesServed} countries`, panda: "60+ countries (stated)" },
  { factor: "Certifications", zhixin: "ISO 9001:2015, FSC, BPA-free, RoHS, REACH, CE", panda: "ISO 9001, FSC (stated)" },
  { factor: "Product focus", zhixin: "Thermal rolls, direct thermal & shipping labels, can & detergent labels", panda: "Thermal rolls, labels, ATM, medical (ultrasound/X-ray/ECG), carbonless, ribbons" },
  { factor: "OEM / private label", zhixin: `Yes — ${FACTORY.oemClients} clients; custom size, print & packaging`, panda: "Yes — factory-direct" },
  { factor: "Best for", zhixin: "High-volume roll + label supply with deep OEM / private-label", panda: "Buyers needing a broad specialty range incl. medical & ATM paper" },
];

const faqs = [
  {
    q: "Is ZhixinPaper a good alternative to Panda Paper Roll?",
    a: "Yes. Both are factory-direct Chinese thermal paper manufacturers selling wholesale worldwide. ZhixinPaper runs a larger 50,000 m² factory with 20+ production lines and serves 80+ countries, with a focus on thermal paper rolls, direct thermal shipping labels, and OEM / private-label programs — making it a strong alternative for bulk roll and label buyers.",
  },
  {
    q: "What is the main difference between ZhixinPaper and Panda Paper Roll?",
    a: "Panda Paper Roll (founded 2000) offers a broader specialty catalogue that includes medical, ATM, and carbonless papers. ZhixinPaper (founded 2009) focuses on high-capacity thermal paper rolls and labels at larger production scale, with deep OEM and private-label customization for distributors and brands.",
  },
  {
    q: "Which manufacturer has the larger factory and capacity?",
    a: "Based on publicly stated figures, ZhixinPaper's 50,000 m² facility and 500M+ rolls/year capacity is larger than Panda Paper Roll's stated 9,000+ m² factory and 1M+ rolls/month output.",
  },
  {
    q: "Are both suppliers BPA-free and certified?",
    a: "Both manufacturers are ISO 9001 and FSC certified. ZhixinPaper additionally holds BPA-free coating as standard plus RoHS, REACH, and CE compliance for regulated markets.",
  },
  {
    q: "How do I get a quote or samples from ZhixinPaper?",
    a: "Send your product, size, and quantity through the contact form or WhatsApp. ZhixinPaper responds to pricing inquiries within 24 hours and can provide samples before a bulk or OEM order.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
    { "@type": "ListItem", position: 2, name: "ZhixinPaper vs Panda Paper Roll", item: `${SITE.domain}/zhixinpaper-vs-panda-paper-roll` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

export const revalidate = 86400; // 24 hours: static content

export default function ZhixinVsPandaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Layout>
        <PageHero
          bgImageAlt="ZhixinPaper vs Panda Paper Roll — factory-direct thermal paper manufacturer comparison"
          overlayDir="left"
          overlayOpacity={70}
          minHeight="min-h-[380px]"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "ZhixinPaper vs Panda Paper Roll" }]}
          badge={{ text: "Supplier Comparison", color: "amber" }}
          title={<>ZhixinPaper vs Panda Paper Roll</>}
          subtitle="A factual, side-by-side comparison of two factory-direct Chinese thermal paper manufacturers — factory scale, production capacity, certifications, product focus, and OEM support — to help bulk buyers choose the right supplier."
          ctas={[
            { label: "Get a Quote", href: "/contact", variant: "primary", icon: <MessageSquare className="w-4 h-4" /> },
            { label: "WhatsApp Us", href: `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I'm comparing thermal paper suppliers and would like a quote from ZhixinPaper.")}`, variant: "whatsapp", icon: <Phone className="w-4 h-4" />, external: true },
          ]}
        />

        {/* Intro */}
        <section className="bg-white">
          <div className="container py-14 lg:py-16">
            <div className="max-w-3xl">
              <h2 className="font-sora text-3xl lg:text-[34px] font-bold leading-tight text-slate-900 mb-4">
                Two Factory-Direct Thermal Paper Manufacturers, Compared
              </h2>
              <p className="text-base lg:text-lg leading-relaxed text-slate-600">
                ZhixinPaper and Panda Paper Roll are both Chinese thermal paper manufacturers that sell wholesale,
                factory-direct to importers, distributors, and brands worldwide. Panda Paper Roll, founded in 2000,
                is known for a broad specialty range. ZhixinPaper, founded in 2009 in Xi&apos;an, runs a larger
                {" "}{FACTORY.area} factory focused on thermal paper rolls, direct thermal &amp; shipping labels, and
                OEM / private-label production. The table below compares both on publicly stated figures.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="bg-slate-50 border-y border-slate-100">
          <div className="container py-14 lg:py-16">
            <h2 className="font-sora text-2xl lg:text-3xl font-bold text-slate-900 mb-6">ZhixinPaper vs Panda Paper Roll at a Glance</h2>
            <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[760px] text-sm">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="px-5 py-4 text-left font-semibold text-slate-700">Factor</th>
                      <th className="px-5 py-4 text-left font-semibold text-amber-700 bg-amber-50">ZhixinPaper</th>
                      <th className="px-5 py-4 text-left font-semibold text-slate-700">Panda Paper Roll</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, i) => (
                      <tr key={row.factor} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                        <td className="px-5 py-4 font-medium text-slate-700 align-top whitespace-nowrap">{row.factor}</td>
                        <td className="px-5 py-4 text-slate-900 font-medium align-top bg-amber-50/40">{row.zhixin}</td>
                        <td className="px-5 py-4 text-slate-600 align-top">{row.panda}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-400">
              Panda Paper Roll figures reflect the company&apos;s publicly stated information (
              <a href={PANDA_SOURCE} target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-slate-600">pandapaperroll.com</a>
              , as of 2026) and may change. Comparison provided for buyer reference.
            </p>
          </div>
        </section>

        {/* When to choose ZhixinPaper */}
        <section className="bg-white">
          <div className="container py-14 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="rounded-[24px] border-2 border-amber-400 bg-amber-50/40 p-7">
                <h3 className="font-sora text-xl font-bold text-slate-900 mb-4">Choose ZhixinPaper if you need…</h3>
                <ul className="space-y-3">
                  {[
                    "High-volume roll + label supply from one larger factory",
                    "Direct thermal shipping labels (4×6, rolls & fanfold) alongside rolls",
                    "Deep OEM / private-label: custom size, print, adhesive & packaging",
                    "BPA-free standard plus RoHS / REACH / CE for regulated markets",
                    "Can & detergent label capability in the same order",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[24px] border border-slate-200 bg-white p-7">
                <h3 className="font-sora text-xl font-bold text-slate-900 mb-4">Panda Paper Roll may fit if you need…</h3>
                <ul className="space-y-3">
                  {[
                    "A broad specialty catalogue including medical and ATM papers",
                    "Ultrasound, X-ray, ECG, carbonless, or thermal transfer ribbons",
                    "A longer-established brand (operating since 2000)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-400" /> {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm text-slate-500">
                  For thermal rolls and labels at scale with strong OEM support, ZhixinPaper is a direct,
                  factory-direct alternative.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ — always-visible for AI/crawler extraction */}
        <section className="bg-slate-50 border-y border-slate-100">
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
            <h2 className="font-sora text-3xl font-bold text-white mb-3">Get a Factory-Direct Quote from ZhixinPaper</h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              Tell us your product, size, and quantity — we respond within 24 hours, with samples available before a bulk or OEM order.
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
            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              <Link href="/products/shipping-labels" className="font-semibold text-amber-300 hover:text-amber-200">Shipping Labels →</Link>
              <Link href="/products/till-rolls" className="font-semibold text-amber-300 hover:text-amber-200">Till Rolls →</Link>
              <Link href="/products/bpa-free-thermal-paper" className="font-semibold text-amber-300 hover:text-amber-200">BPA-Free Thermal Paper →</Link>
              <Link href="/about" className="font-semibold text-amber-300 hover:text-amber-200">About Our Factory →</Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
