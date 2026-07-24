import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/shared/InquiryForm";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  MessageSquare,
  Package,
  ShieldCheck,
  Truck,
  type LucideIcon,
} from "lucide-react";

export interface LandingStat {
  val: string;
  unit: string;
}

export interface LandingTableRow {
  label: string;
  value: string;
}

export interface LandingFaq {
  q: string;
  a: string;
}

export interface LandingLinkItem {
  label: string;
  href: string;
}

export interface LandingBadge {
  text: string;
}

export interface LandingComparisonRow {
  factor: string;
  left: string;
  right: string;
}

export interface LandingCardItem {
  title: string;
  desc: string;
  icon?: string;
}

export interface LandingTimelineItem {
  step: string;
  title: string;
  desc: string;
}

export interface LandingTagGroup {
  title: string;
  badge?: string;
  items: string[];
}

export interface LandingSidebarMetric {
  icon: LucideIcon;
  label: string;
  val: string;
}

export interface LandingSidebarListCard {
  title: string;
  items: string[];
}

export interface LandingInfoCard {
  title: string;
  description?: string;
  items?: string[];
}

export interface LandingSectionTable {
  title: string;
  rows: LandingTableRow[];
  note?: string;
}

export interface ProductLandingPageProps {
  breadcrumbItems: Array<{ label: string; href?: string }>;
  heroImage: string;
  heroAlt: string;
  heroTags: string[];
  title: string;
  description: string;
  stats: LandingStat[];
  accent: "blue" | "amber" | "green";
  trustBar: string[];
  topSectionTitle: string;
  topSectionItems: string[];
  topSectionVariant?: "checklist" | "cards";
  topSectionCards?: LandingCardItem[];
  secondarySectionTitle?: string;
  secondarySectionDescription?: string;
  secondarySectionCards?: LandingCardItem[];
  timelineTitle?: string;
  timelineItems?: LandingTimelineItem[];
  tagGroupTitle?: string;
  tagGroups?: LandingTagGroup[];
  comparisonTitle?: string;
  comparisonHeaders?: { left: string; right: string };
  comparisonRows?: LandingComparisonRow[];
  tables: LandingSectionTable[];
  sizesTitle?: string;
  sizesDescription?: string;
  sizeLinks?: Array<{ label: string; href: string; badge?: string }>;
  faqs: LandingFaq[];
  crossLinks: LandingLinkItem[];
  sidebarTitle: string;
  sidebarDescription: string;
  sampleCard?: { title: string; description: string; href: string; label: string };
  sidebarMetrics: LandingSidebarMetric[];
  sidebarListCard?: LandingSidebarListCard;
}

const accentMap = {
  blue: {
    trustBar: "bg-blue-700",
    badge: "bg-blue-50 text-blue-700 border-blue-200",
    number: "text-blue-700",
    border: "border-blue-400 hover:bg-blue-50",
    text: "text-blue-600 hover:text-blue-800",
    cardBorder: "border-blue-600",
    sampleBg: "bg-amber-50 border-amber-200 text-amber-700 hover:text-amber-900",
    heroWrap: "from-slate-950 via-slate-900 to-blue-950",
    heroGlow: "bg-blue-500/20",
    heroPanel: "border-blue-400/25 bg-white/10",
    softSection: "from-blue-50 to-slate-50",
    ctaPrimary: "bg-blue-600 hover:bg-blue-500 text-white",
    ctaSecondary: "bg-white/10 hover:bg-white/15 text-white border-white/20",
  },
  amber: {
    trustBar: "bg-amber-600",
    badge: "bg-amber-50 text-amber-700 border-amber-200",
    number: "text-amber-600",
    border: "border-amber-400 hover:bg-amber-50",
    text: "text-amber-600 hover:text-amber-800",
    cardBorder: "border-amber-500",
    sampleBg: "bg-amber-50 border-amber-200 text-amber-700 hover:text-amber-900",
    heroWrap: "from-slate-950 via-slate-900 to-amber-950",
    heroGlow: "bg-amber-500/20",
    heroPanel: "border-amber-400/25 bg-white/10",
    softSection: "from-amber-50 to-slate-50",
    ctaPrimary: "bg-amber-500 hover:bg-amber-400 text-slate-950",
    ctaSecondary: "bg-white/10 hover:bg-white/15 text-white border-white/20",
  },
  green: {
    trustBar: "bg-green-700",
    badge: "bg-green-50 text-green-700 border-green-200",
    number: "text-green-700",
    border: "border-green-400 hover:bg-green-50",
    text: "text-green-600 hover:text-green-800",
    cardBorder: "border-green-500",
    sampleBg: "bg-green-50 border-green-200 text-green-700 hover:text-green-900",
    heroWrap: "from-slate-950 via-slate-900 to-green-950",
    heroGlow: "bg-green-500/20",
    heroPanel: "border-green-400/25 bg-white/10",
    softSection: "from-green-50 to-slate-50",
    ctaPrimary: "bg-green-600 hover:bg-green-500 text-white",
    ctaSecondary: "bg-white/10 hover:bg-white/15 text-white border-white/20",
  },
} as const;

export default function ProductLandingPageTemplate({
  breadcrumbItems,
  heroImage,
  heroAlt,
  heroTags,
  title,
  description,
  stats,
  accent,
  trustBar,
  topSectionTitle,
  topSectionItems,
  topSectionVariant = "checklist",
  topSectionCards,
  secondarySectionTitle,
  secondarySectionDescription,
  secondarySectionCards,
  timelineTitle,
  timelineItems,
  tagGroupTitle,
  tagGroups,
  comparisonTitle,
  comparisonHeaders,
  comparisonRows,
  tables,
  sizesTitle,
  sizesDescription,
  sizeLinks,
  faqs,
  crossLinks,
  sidebarTitle,
  sidebarDescription,
  sampleCard,
  sidebarMetrics,
  sidebarListCard,
}: ProductLandingPageProps) {
  const palette = accentMap[accent];

  return (
    <Layout>
      <section className={`relative overflow-hidden bg-gradient-to-br ${palette.heroWrap} text-white`}>
        <div className={`absolute inset-x-0 top-0 h-40 blur-3xl ${palette.heroGlow}`} />
        <div className="container relative py-12 lg:py-16">
          <div className="text-sm text-white/70 mb-5">
            {breadcrumbItems.map((item, index) => (
              <span key={`${item.label}-${index}`}>
                {item.href ? <Link href={item.href} className="hover:text-white">{item.label}</Link> : <span className="text-white font-medium">{item.label}</span>}
                {index < breadcrumbItems.length - 1 ? <span className="mx-1.5 text-white/40">/</span> : null}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-8 items-center">
            <div>
              <div className="flex flex-wrap gap-2.5 mb-4">
                {heroTags.map((tag) => (
                  <span key={tag} className={`text-xs border px-3 py-1.5 rounded-full font-medium backdrop-blur ${palette.heroPanel}`}>{tag}</span>
                ))}
              </div>
              <h1 className="font-sora text-4xl sm:text-5xl font-extrabold mb-4 leading-[1.05] max-w-4xl">{title}</h1>
              <p className="text-white/80 leading-relaxed text-base sm:text-lg max-w-3xl mb-6">{description}</p>

              <div className="flex flex-wrap gap-3 mb-7">
                <Link href="/contact" className={`inline-flex items-center gap-2 rounded-xl px-5 py-3.5 font-bold transition-colors ${palette.ctaPrimary}`}>
                  <MessageSquare className="w-4 h-4" />
                  Get Quote Now
                </Link>
                <a href="#inquiry-panel" className={`inline-flex items-center gap-2 rounded-xl border px-5 py-3.5 font-bold transition-colors ${palette.ctaSecondary}`}>
                  <ArrowRight className="w-4 h-4" />
                  View Order Details
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {stats.map(({ val, unit }) => (
                  <div key={unit} className="rounded-2xl border border-white/10 bg-white/8 backdrop-blur-sm p-4 text-center shadow-lg">
                    <div className="font-sora text-2xl font-extrabold text-white">{val}</div>
                    <div className="text-xs text-white/65 mt-1 uppercase tracking-[0.15em]">{unit}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className={`absolute -inset-3 rounded-2xl blur-2xl ${palette.heroGlow}`} />
              <div className={`relative rounded-2xl border p-3 shadow-2xl ${palette.heroPanel}`}>
                <Image
                  src={heroImage}
                  alt={heroAlt}
                  className="w-full h-[280px] sm:h-[360px] object-cover rounded-xl"
                  width={720}
                  height={520}
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div className="rounded-2xl bg-white/10 border border-white/10 px-4 py-3 backdrop-blur-sm">
                    <div className="text-[11px] uppercase tracking-[0.15em] text-white/55 mb-1">Factory Support</div>
                    <div className="text-sm font-semibold text-white">OEM, custom spec, export docs</div>
                  </div>
                  <div className="rounded-2xl bg-white/10 border border-white/10 px-4 py-3 backdrop-blur-sm">
                    <div className="text-[11px] uppercase tracking-[0.15em] text-white/55 mb-1">Best For</div>
                    <div className="text-sm font-semibold text-white">Importers, distributors, private label buyers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={`${palette.trustBar} text-white py-2.5`}>
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-1 text-sm font-medium">
            {trustBar.map((item) => (
              <span key={item} className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5" /> {item}</span>
            ))}
          </div>
        </div>
      </div>

      <div className={`bg-gradient-to-b ${palette.softSection}`}>
        <div className="container py-10 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div className="rounded-2xl border border-white/70 bg-white/90 p-6 sm:p-7 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm">
                <h2 className="font-sora text-xl font-bold text-slate-900 mb-4">{topSectionTitle}</h2>
                {topSectionVariant === "cards" && topSectionCards ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {topSectionCards.map(({ title: cardTitle, desc, icon }) => (
                      <div key={cardTitle} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-slate-300 transition-colors">
                        <div className="flex items-center gap-2 mb-2">
                          {icon ? <span className="text-lg">{icon}</span> : null}
                          <span className="font-sora font-bold text-slate-900 text-sm">{cardTitle}</span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">{desc}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {topSectionItems.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />{item}
                      </div>
                    ))}
                  </div>
                )}
              </div>

            {secondarySectionTitle && secondarySectionCards ? (
              <div>
                <h2 className="font-sora text-xl font-bold text-slate-900 mb-2">{secondarySectionTitle}</h2>
                {secondarySectionDescription ? <p className="text-sm text-slate-500 mb-5">{secondarySectionDescription}</p> : null}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {secondarySectionCards.map(({ title: cardTitle, desc, icon }) => (
                    <div key={cardTitle} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-slate-300 transition-colors">
                      <div className="flex items-center gap-2 mb-2">
                        {icon ? <span className="text-lg">{icon}</span> : null}
                        <span className="font-sora font-bold text-slate-900 text-sm">{cardTitle}</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {timelineTitle && timelineItems ? (
              <div>
                <h2 className="font-sora text-xl font-bold text-slate-900 mb-5">{timelineTitle}</h2>
                <div className="relative">
                  <div className="hidden sm:block absolute left-[28px] top-8 bottom-8 w-0.5 bg-amber-200" />
                  <div className="space-y-4">
                    {timelineItems.map(({ step, title: itemTitle, desc }) => (
                      <div key={step} className="flex gap-4 items-start">
                        <div className={`font-sora relative z-10 flex-shrink-0 w-14 h-14 rounded-full ${palette.trustBar} text-white flex items-center justify-center font-extrabold text-sm shadow-md`}>{step}</div>
                        <div className="flex-1 bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                          <div className="font-sora font-bold text-slate-900 text-sm mb-1">{itemTitle}</div>
                          <p className="text-xs text-slate-600 leading-relaxed">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}

            {tagGroupTitle && tagGroups ? (
              <div>
                <h2 className="font-sora text-xl font-bold text-slate-900 mb-5">{tagGroupTitle}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {tagGroups.map(({ title: groupTitle, badge, items }) => (
                    <div key={groupTitle} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                      <div className="font-sora font-bold text-slate-900 text-sm mb-1">{groupTitle}</div>
                      {badge ? <div className={`text-[10px] rounded-full px-2 py-0.5 inline-block mb-3 ${palette.badge}`}>{badge}</div> : null}
                      <ul className="space-y-1.5">
                        {items.map((item) => (
                          <li key={item} className="flex items-start gap-1.5 text-xs text-slate-600"><CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {comparisonTitle && comparisonHeaders && comparisonRows ? (
              <div>
                <h2 className="font-sora text-xl font-bold text-slate-900 mb-4">{comparisonTitle}</h2>
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                  <table className="w-full text-sm">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="px-5 py-3 text-left font-semibold text-slate-700">Factor</th>
                        <th className="px-5 py-3 text-left font-semibold text-slate-700">{comparisonHeaders.left}</th>
                        <th className={`px-5 py-3 text-left font-semibold ${palette.number}`}>{comparisonHeaders.right}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonRows.map(({ factor, left, right }, index) => (
                        <tr key={factor} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                          <td className="px-5 py-3 font-medium text-slate-700 whitespace-nowrap">{factor}</td>
                          <td className="px-5 py-3 text-slate-500">{left}</td>
                          <td className="px-5 py-3 text-slate-900 font-semibold">{right}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : null}

            {tables.map(({ title: tableTitle, rows, note }) => (
              <div key={tableTitle}>
                <h2 className="font-sora text-xl font-bold text-slate-900 mb-4">{tableTitle}</h2>
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                  <table className="w-full text-sm">
                    <tbody>
                      {rows.map(({ label, value }, index) => (
                        <tr key={`${tableTitle}-${label}`} className={index % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                          <td className="px-5 py-3 font-medium text-slate-600 w-44 whitespace-nowrap">{label}</td>
                          <td className="px-5 py-3 text-slate-900 font-semibold">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {note ? <p className="text-xs text-slate-400 mt-2">{note}</p> : null}
              </div>
            ))}

            {sizesTitle && sizeLinks ? (
              <div>
                <h2 className="font-sora text-xl font-bold text-slate-900 mb-4">{sizesTitle}</h2>
                {sizesDescription ? <p className="text-sm text-slate-600 mb-4">{sizesDescription}</p> : null}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {sizeLinks.map((size) => (
                    <Link key={size.href} href={size.href} className={`group flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl transition-all duration-200 shadow-sm ${palette.border}`}>
                      <div>
                        <div className={`font-sora font-semibold text-slate-800 ${palette.text.split(" ")[0]} text-sm`}>{size.label}</div>
                        {size.badge ? <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${palette.badge}`}>{size.badge}</span> : null}
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}

            <div>
              <h2 className="font-sora text-xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {faqs.map(({ q, a }) => (
                  <div key={q} className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                    <h3 className="font-sora font-semibold text-slate-900 mb-2 text-sm">{q}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100">
              {crossLinks.map((item) => (
                <Link key={item.href} href={item.href} className={`inline-flex items-center gap-2 text-sm font-semibold ${palette.text}`}>
                  {item.label} <ArrowRight className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4" id="inquiry-panel">
              <div className={`rounded-2xl border-2 ${palette.cardBorder} bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.14)]`}>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs text-green-600 font-semibold">Online — Responding within 12h</span>
                </div>
                <h3 className="font-sora text-xl font-extrabold text-slate-900 mb-1">{sidebarTitle}</h3>
                <p className="text-sm text-slate-500 mb-5">{sidebarDescription}</p>
                <InquiryForm compact />
              </div>

              {sampleCard ? (
                <div className={`rounded-2xl p-5 border ${palette.sampleBg.split(" ").slice(1,3).join(" ")} ${palette.sampleBg.split(" ")[0]}`}>
                  <h4 className="font-sora font-bold text-slate-900 text-sm mb-1">{sampleCard.title}</h4>
                  <p className="text-xs text-slate-600 mb-3">{sampleCard.description}</p>
                  <Link href={sampleCard.href} className={`inline-flex items-center gap-1.5 text-sm font-semibold ${palette.text}`}>
                    {sampleCard.label} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ) : null}

              {sidebarListCard ? (
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                  <h4 className="font-sora font-bold text-slate-900 text-sm mb-3">{sidebarListCard.title}</h4>
                  <div className="space-y-2.5">
                    {sidebarListCard.items.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs text-slate-600"><CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />{item}</div>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3">
                <h4 className="font-sora font-bold text-slate-900 text-sm">Order at a Glance</h4>
                {sidebarMetrics.map(({ icon: Icon, label, val }) => (
                  <div key={label} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-slate-500"><Icon className="w-4 h-4" />{label}</div>
                    <span className="font-semibold text-slate-900">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
