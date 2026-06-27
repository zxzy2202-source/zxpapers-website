"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import InquiryForm from "@/components/shared/InquiryForm";
import { Button } from "@/components/ui/button";
import type { HeroBadge, HeroCTA, HeroStat } from "@/components/shared/PageHero";
import { ArrowRight } from "lucide-react";

/**
 * Product aggregation / category showcase template.
 *
 * Structure mirrors the "Product Category 4" B2B reference layout
 * (hero banner → intro split → overview copy → feature split → product grid →
 * browse rows → comparison → specs → why-us band → FAQ → inquiry), but rendered
 * with the site's own brand tokens (navy / amber / Sora) and shared components
 * instead of the reference theme's blue palette. Distinct from the sidebar-led
 * ProductCategoryPageTemplate — use this one when the page should read as a
 * full-width sectioned landing page.
 */

interface SplitBlock {
  title: string;
  lead: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  cta?: { label: string; href: string };
}

export interface ShowcaseProductCard {
  title: string;
  desc: string;
  icon?: string;
  image?: string;
  href?: string;
  badge?: string;
}

export interface ShowcaseBrowseCard {
  image: string;
  title: string;
  desc: string;
  href: string;
  badge?: string;
  /** Outlined CTA label (defaults to "Send Inquiry Now"). */
  ctaLabel?: string;
  /** Outlined CTA target (defaults to "#inquiry"). */
  ctaHref?: string;
}

export interface ShowcaseBrowseSection {
  title: string;
  description?: string;
  cards: ShowcaseBrowseCard[];
}

export interface ShowcaseWhyUsItem {
  icon: ReactNode;
  title: string;
  text: string;
}

export interface ProductCategoryShowcaseProps {
  /* Hero */
  breadcrumbs: Array<{ label: string; href?: string }>;
  heroImage: string;
  heroBadge?: HeroBadge;
  title: ReactNode;
  subtitle: string;
  trustBadges: string[];
  stats: HeroStat[];
  ctas?: HeroCTA[];

  /* Section 1 — intro split (text + bullets / image) on a tinted band */
  introSplit: SplitBlock;

  /* Section 2 — long-form overview copy */
  overview?: { title: string; paragraphs: string[] };

  /* Section 3 — feature split (image / text + bullets) */
  featureSplit?: SplitBlock;

  /* Product grid */
  productsTitle: string;
  productsDescription?: string;
  products: ShowcaseProductCard[];

  /* Browse-by rows (size / format / etc.) */
  browseSections?: ShowcaseBrowseSection[];

  /* Comparison table */
  comparison?: { title: string; headers: { left: string; right: string }; rows: Array<{ factor: string; left: string; right: string }> };

  /* Specs table */
  specs?: { title: string; rows: Array<{ label: string; value: string }>; note?: string };

  /* Why-us dark band */
  whyUs?: { title: string; subtitle?: string; items: ShowcaseWhyUsItem[] };

  /* FAQ */
  faqs: Array<{ q: string; a: string }>;

  /* Cross links */
  crossLinks?: Array<{ label: string; href: string }>;

  /* Inquiry band */
  inquiry: { title: string; description: string };
}

function CircleList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="relative pl-6 text-[15px] font-semibold leading-snug text-slate-800">
          <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-amber-500" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function SectionHeading({ eyebrow, title, description, center }: { eyebrow?: string; title: string; description?: string; center?: boolean }) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-3xl mb-10`}>
      {eyebrow ? (
        <div className={`flex items-center gap-3 mb-3 ${center ? "justify-center" : ""}`}>
          <span className="h-px w-10 bg-amber-400" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-600">{eyebrow}</span>
        </div>
      ) : null}
      <h2 className="font-sora text-3xl lg:text-[38px] font-bold leading-tight text-slate-900">{title}</h2>
      {description ? <p className="mt-4 text-base lg:text-lg leading-relaxed text-slate-600">{description}</p> : null}
    </div>
  );
}

function SplitSection({ block, reverse, tinted, eyebrow }: { block: SplitBlock; reverse?: boolean; tinted?: boolean; eyebrow?: string }) {
  return (
    <section className={tinted ? "bg-slate-50 border-y border-slate-100" : "bg-white"}>
      <div className="container py-16 lg:py-20">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <div>
            {eyebrow ? (
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-10 bg-amber-400" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-600">{eyebrow}</span>
              </div>
            ) : null}
            <h2 className="font-sora text-3xl lg:text-[38px] font-bold leading-tight text-slate-900 mb-4">{block.title}</h2>
            <p className="text-base lg:text-lg leading-relaxed text-slate-600 mb-6">{block.lead}</p>
            <CircleList items={block.bullets} />
            {block.cta ? (
              <div className="mt-8">
                <Button asChild variant="amber" size="cta-lg">
                  <Link href={block.cta.href}>{block.cta.label} <ArrowRight className="h-5 w-5" /></Link>
                </Button>
              </div>
            ) : null}
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-slate-200 shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
            <Image src={block.image} alt={block.imageAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Carousel of product cards — a brand-token rendering of the reference theme's
 * `.pc3ProductSlider` / `.c1ProductBox` (image + title + text + outlined inquiry
 * button), with prev/next arrows and dot indicators. Swipeable on touch.
 */
function BrowseCarousel({ cards }: { cards: ShowcaseBrowseCard[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);

  const recalc = () => {
    const el = trackRef.current;
    if (!el) return;
    const total = el.clientWidth > 0 ? Math.round(el.scrollWidth / el.clientWidth) : 1;
    setPages(Math.max(1, total));
    setPage(Math.round(el.scrollLeft / el.clientWidth));
  };

  useEffect(() => {
    recalc();
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards.length]);

  const scrollToPage = (next: number) => {
    const el = trackRef.current;
    if (!el) return;
    const target = Math.max(0, Math.min(pages - 1, next));
    el.scrollTo({ left: target * el.clientWidth, behavior: "smooth" });
    setPage(target);
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        onScroll={recalc}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {cards.map((card) => (
          <div key={card.href + card.title} className="snap-start shrink-0 basis-full sm:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)]">
            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,0.12)]">
              <Link href={card.href} className="group relative block aspect-[4/3] overflow-hidden bg-slate-100">
                <Image src={card.image} alt={card.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-300 group-hover:scale-105" />
                {card.badge ? (
                  <span className="absolute left-3 top-3 rounded-full bg-amber-500 px-3 py-1 text-[11px] font-semibold text-slate-950">{card.badge}</span>
                ) : null}
              </Link>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-sora text-[20px] font-medium leading-7 text-slate-900">
                  <Link href={card.href} className="transition-colors hover:text-amber-600">{card.title}</Link>
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{card.desc}</p>
                <Link
                  href={card.ctaHref ?? "#inquiry"}
                  className="mt-4 block rounded-lg border border-amber-500 px-4 py-2.5 text-center text-sm font-semibold text-amber-600 transition-colors hover:bg-amber-500 hover:text-slate-950"
                >
                  {card.ctaLabel ?? "Send Inquiry Now"}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {pages > 1 ? (
        <>
          <button
            type="button"
            onClick={() => scrollToPage(page - 1)}
            disabled={page === 0}
            aria-label="Previous"
            className="absolute -left-3 top-[38%] hidden h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md transition hover:border-amber-300 hover:text-amber-700 disabled:opacity-0 lg:flex"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
          </button>
          <button
            type="button"
            onClick={() => scrollToPage(page + 1)}
            disabled={page >= pages - 1}
            aria-label="Next"
            className="absolute -right-3 top-[38%] hidden h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md transition hover:border-amber-300 hover:text-amber-700 disabled:opacity-0 lg:flex"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
          <div className="mt-6 flex items-center justify-center gap-2.5">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToPage(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === page}
                className={`h-3.5 w-3.5 rounded-full border-2 transition-colors ${i === page ? "border-amber-500 bg-amber-500" : "border-slate-400 bg-transparent hover:border-amber-400"}`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

export default function ProductCategoryShowcaseTemplate({
  breadcrumbs,
  heroImage,
  heroBadge,
  title,
  subtitle,
  trustBadges,
  stats,
  ctas,
  introSplit,
  overview,
  featureSplit,
  productsTitle,
  productsDescription,
  products,
  browseSections = [],
  comparison,
  specs,
  whyUs,
  faqs,
  crossLinks = [],
  inquiry,
}: ProductCategoryShowcaseProps) {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <Layout>
      <PageHero
        bgImage={heroImage}
        overlayDir="left"
        overlayOpacity={56}
        minHeight="min-h-[460px]"
        breadcrumbs={breadcrumbs}
        badge={heroBadge}
        title={title}
        subtitle={subtitle}
        trustBadges={trustBadges}
        stats={stats}
        ctas={ctas}
      />

      {/* Section 1 — intro split */}
      <SplitSection block={introSplit} tinted eyebrow="Overview" />

      {/* Section 2 — long-form overview copy */}
      {overview ? (
        <section className="bg-white">
          <div className="container py-16 lg:py-20">
            <div className="max-w-4xl">
              <h2 className="font-sora text-3xl lg:text-[38px] font-bold leading-tight text-slate-900 mb-6">{overview.title}</h2>
              <div className="space-y-4">
                {overview.paragraphs.map((p, i) => (
                  <p key={i} className="text-base lg:text-lg leading-relaxed text-slate-600">{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* Section 3 — feature split (image first) */}
      {featureSplit ? <SplitSection block={featureSplit} reverse tinted eyebrow="Why It Works" /> : null}

      {/* Product grid */}
      <section className="bg-white">
        <div className="container py-16 lg:py-20">
          <SectionHeading eyebrow="The Range" title={productsTitle} description={productsDescription} center />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((item) => {
              const inner = (
                <div className="flex h-full flex-col">
                  <div className="relative mb-5 h-44 overflow-hidden rounded-2xl bg-slate-100">
                    {item.image ? (
                      <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-300 group-hover:scale-105" />
                    ) : (
                      <div className="flex h-full items-center justify-center text-5xl">{item.icon}</div>
                    )}
                    {item.badge ? (
                      <span className="absolute left-3 top-3 rounded-full bg-amber-500 px-3 py-1 text-[11px] font-semibold text-slate-950">{item.badge}</span>
                    ) : null}
                  </div>
                  <h3 className="font-sora text-lg font-bold text-slate-900 group-hover:text-amber-700">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                  {item.href ? (
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600">
                      Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  ) : null}
                </div>
              );

              return item.href ? (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group rounded-[26px] border border-slate-200 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-[0_24px_55px_rgba(245,158,11,0.16)]"
                >
                  {inner}
                </Link>
              ) : (
                <div key={item.title} className="group rounded-[26px] border border-slate-200 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Browse-by rows */}
      {browseSections.length > 0 ? (
        <section className="bg-slate-50 border-y border-slate-100">
          <div className="container py-16 lg:py-20 space-y-12">
            {browseSections.map((b) => (
              <div key={b.title}>
                <SectionHeading title={b.title} description={b.description} />
                <BrowseCarousel cards={b.cards} />
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* Comparison */}
      {comparison ? (
        <section className="bg-white">
          <div className="container py-16 lg:py-20">
            <SectionHeading eyebrow="Compare" title={comparison.title} />
            <div className="overflow-hidden rounded-[26px] border border-slate-200 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] text-sm">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-5 py-3 text-left font-semibold text-slate-700">Option</th>
                      <th className="px-5 py-3 text-left font-semibold text-slate-700">{comparison.headers.left}</th>
                      <th className="px-5 py-3 text-left font-semibold text-amber-700">{comparison.headers.right}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.rows.map((row, i) => (
                      <tr key={row.factor} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="whitespace-nowrap px-5 py-3 font-medium text-slate-700">{row.factor}</td>
                        <td className="px-5 py-3 text-slate-600">{row.left}</td>
                        <td className="px-5 py-3 font-semibold text-slate-900">{row.right}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* Specs */}
      {specs ? (
        <section className="bg-slate-50 border-y border-slate-100">
          <div className="container py-16 lg:py-20">
            <SectionHeading title={specs.title} />
            <div className="overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
              <table className="w-full text-sm">
                <tbody>
                  {specs.rows.map((row, i) => (
                    <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="w-56 px-5 py-3 font-medium text-slate-600">{row.label}</td>
                      <td className="px-5 py-3 font-semibold text-slate-900">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {specs.note ? <p className="mt-2 text-xs text-slate-400">{specs.note}</p> : null}
          </div>
        </section>
      ) : null}

      {/* Why-us dark band */}
      {whyUs ? (
        <section className="bg-brand-navy text-white">
          <div className="container py-16 lg:py-20">
            <div className="max-w-3xl mb-10">
              <h2 className="font-sora text-3xl lg:text-[38px] font-bold leading-tight text-white">{whyUs.title}</h2>
              {whyUs.subtitle ? <p className="mt-4 text-base lg:text-lg leading-relaxed text-slate-300">{whyUs.subtitle}</p> : null}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyUs.items.map((item) => (
                <div key={item.title} className="rounded-[24px] border border-white/10 bg-white/5 p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/15 text-amber-400 [&_svg]:h-6 [&_svg]:w-6">
                    {item.icon}
                  </div>
                  <h3 className="font-sora text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* FAQ — numbered 2-column accordion (ref: template faqWrapper / accordionWraper) */}
      <section className="bg-slate-50 border-y border-slate-100">
        <div className="container py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] gap-10 lg:gap-14 items-start">
            <div className="lg:sticky lg:top-24">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-10 bg-amber-400" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-600">FAQ</span>
              </div>
              <h2 className="font-sora text-3xl lg:text-[38px] font-bold leading-tight text-slate-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-base leading-relaxed text-slate-600 mb-6">Answers to the questions buyers ask most. Need something specific? Our team replies within 12 hours.</p>
              <a href="#inquiry" className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-400">
                Ask a Question <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="space-y-3">
              {faqs.map(({ q, a }, index) => {
                const expanded = openFaq === index;
                const panelId = `faq-panel-${index}`;
                const buttonId = `faq-button-${index}`;
                return (
                  <div key={q} className={`overflow-hidden rounded-2xl border transition-all ${expanded ? "border-amber-300 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)]" : "border-slate-200 bg-white hover:border-amber-200"}`}>
                    <button
                      id={buttonId}
                      type="button"
                      className="flex w-full items-center gap-4 px-5 py-4 text-left"
                      onClick={() => setOpenFaq(expanded ? -1 : index)}
                      aria-expanded={expanded}
                      aria-controls={panelId}
                    >
                      <span className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg font-sora text-sm font-bold tabular-nums transition-colors ${expanded ? "bg-amber-500 text-slate-950" : "bg-amber-100 text-amber-700"}`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 font-sora text-sm font-semibold text-slate-900">{q}</span>
                      <span aria-hidden="true" className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border text-lg leading-none transition-colors ${expanded ? "border-amber-400 text-amber-600" : "border-slate-300 text-slate-400"}`}>
                        {expanded ? "−" : "+"}
                      </span>
                    </button>
                    {expanded ? (
                      <div id={panelId} role="region" aria-labelledby={buttonId} className="px-5 pb-5 pl-[4.25rem] text-sm leading-relaxed text-slate-600">
                        {a}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry — navy panel + form (ref: template MTcontactDetail) */}
      <section id="inquiry" className="bg-slate-50 border-t border-slate-100 scroll-mt-24">
        <div className="container py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-[28px] shadow-[0_30px_70px_rgba(15,23,42,0.16)]">
            <div className="bg-brand-navy text-white p-8 lg:p-10 flex flex-col">
              <div className="flex items-center gap-2 mb-5">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                <span className="text-xs font-semibold text-green-300">Online — Responding within 12h</span>
              </div>
              <h2 className="font-sora text-3xl lg:text-[42px] font-light leading-[1.15] tracking-tight text-white mb-4">{inquiry.title}</h2>
              <p className="text-base leading-relaxed text-slate-300 mb-8 max-w-md">{inquiry.description}</p>
              {crossLinks.length > 0 ? (
                <div className="mt-auto flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-6">
                  {crossLinks.map((item) => (
                    <Link key={item.href} href={item.href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-300 hover:text-amber-200">
                      {item.label} <ArrowRight className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
            <div className="bg-white p-7 lg:p-9">
              <InquiryForm compact />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
