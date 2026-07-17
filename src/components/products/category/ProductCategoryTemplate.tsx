import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ClipboardCheck,
  ExternalLink,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/shared/InquiryForm";
import PageHero from "@/components/shared/PageHero";
import ProductCategoryActionLink from "@/components/products/category/ProductCategoryActionLink";
import { cn } from "@/lib/utils";
import type {
  ProductCategoryConfig,
  ResolvedProductCategoryImages,
} from "@/components/products/category/product-category-types";

interface ProductCategoryTemplateProps {
  config: ProductCategoryConfig;
  images: ResolvedProductCategoryImages;
  whatsappHref: string;
}

function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-700">
        {label}
      </p>
      <h2 className="mt-2 font-sora text-2xl font-semibold leading-tight text-slate-950 sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      <p className="mt-3 max-w-[68ch] text-sm leading-relaxed text-slate-600 sm:text-base">
        {description}
      </p>
    </div>
  );
}

export default function ProductCategoryTemplate({
  config,
  images,
  whatsappHref,
}: ProductCategoryTemplateProps) {
  const featuredFamily = config.families.find((family) => family.featured);
  const compactFamilies = config.families.filter((family) => !family.featured);
  const singleCompactFamily = compactFamilies.length === 1;
  const inquiryFormId = `${config.canonicalPath.replaceAll("/", "-").replace(/^-/, "")}-inquiry`;
  const compactGridClass =
    compactFamilies.length === 1
      ? "md:grid-cols-1"
      : compactFamilies.length === 2
        ? "md:grid-cols-2"
        : compactFamilies.length === 3
          ? "md:grid-cols-3"
          : compactFamilies.length === 4
            ? "md:grid-cols-2 xl:grid-cols-4"
            : "md:grid-cols-2 xl:grid-cols-5";
  const sizeGridClass =
    config.sizes.length === 1
      ? "grid-cols-1"
      : config.sizes.length === 2
        ? "grid-cols-1 sm:grid-cols-2"
        : "grid-cols-2 sm:grid-cols-3";
  const applicationGridClass =
    config.applications.length === 1
      ? "lg:grid-cols-1"
      : config.applications.length === 2
        ? "lg:grid-cols-2"
        : config.applications.length === 4
          ? "lg:grid-cols-2 xl:grid-cols-4"
          : "lg:grid-cols-3";
  const inquiryMessageFor = (selection: string) =>
    `Selected requirement: ${selection}\n\n${config.inquiry.initialMessage}`;

  return (
    <Layout>
      <PageHero
        bgImage={images.hero}
        overlayDir="left"
        overlayOpacity={72}
        minHeight="min-h-[430px]"
        compact
        breadcrumbs={config.breadcrumbs.map((item, index) => ({
          label: item.name,
          href: index === config.breadcrumbs.length - 1 ? undefined : item.path,
        }))}
        badge={{ text: config.hero.badge, color: "amber" }}
        title={
          <>
            {config.hero.titleBefore}
            <span className="text-amber-400">{config.hero.titleHighlight}</span>
            {config.hero.titleAfter}
          </>
        }
        subtitle={config.hero.description}
        trustBadges={config.hero.trustBadges}
        stats={config.hero.facts}
        mobileTrustBadgeLimit={2}
        mobileStatLimit={2}
        ctas={[
          {
            label: config.hero.primaryCta.label,
            href: config.hero.primaryCta.href,
            variant: "primary",
            icon: <ArrowRight className="h-4 w-4" aria-hidden="true" />,
          },
          {
            label: config.hero.secondaryCta.label,
            href: config.hero.secondaryCta.href,
            variant: "outline",
            icon: <ClipboardCheck className="h-4 w-4" aria-hidden="true" />,
          },
        ]}
      />

      <nav
        data-category-jump-nav
        aria-label={`${config.categoryName} catalog paths`}
        className="border-b border-slate-200 bg-white"
      >
        <div className="container overflow-x-auto py-2 [scrollbar-width:thin]">
          <div className="flex min-w-max items-center gap-1">
            <span className="mr-3 hidden text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:inline">
              Browse by
            </span>
            {config.jumpLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex min-h-11 items-center border border-transparent px-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50 hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 motion-reduce:transition-none"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section
        id="product-families"
        data-category-section="product-families"
        className="scroll-mt-24 bg-white"
      >
        <div className="container py-10 sm:py-12 lg:py-16">
          <SectionHeading
            label="Product families"
            title="Choose the label program before the specification"
            description="Start with the product route that matches the printer and job. Size, material, adhesive, packing and commercial terms are confirmed inside that route."
          />

          {featuredFamily ? (
            <Link
              href={featuredFamily.href}
              className="group mt-8 grid overflow-hidden border border-slate-300 bg-brand-ink text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-900 lg:order-2 lg:aspect-auto lg:min-h-[330px]">
                <Image
                  src={images.families[featuredFamily.id]}
                  alt={featuredFamily.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.025] motion-reduce:transition-none"
                />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:order-1 lg:p-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-300">
                  {featuredFamily.label}
                </p>
                <h3 className="mt-2 font-sora text-2xl font-semibold leading-tight sm:text-3xl">
                  {featuredFamily.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
                  {featuredFamily.description}
                </p>
                <p className="mt-5 border-l-2 border-amber-400 pl-4 text-sm leading-relaxed text-slate-300">
                  {featuredFamily.buyerFit}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-300">
                  {featuredFamily.linkLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ) : null}

          <div
            className={cn(
              "mt-4 grid gap-px border border-slate-200 bg-slate-200",
              compactGridClass,
            )}
          >
            {compactFamilies.map((family) => (
              <ProductCategoryActionLink
                key={family.id}
                href={family.href}
                inquiryFormId={inquiryFormId}
                inquiryMessage={inquiryMessageFor(family.title)}
                className={cn(
                  "group grid min-h-28 grid-cols-[96px_minmax(0,1fr)] bg-white focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500",
                  singleCompactFamily
                    ? "md:min-h-[220px] md:grid-cols-[minmax(220px,0.4fr)_minmax(0,0.6fr)]"
                    : "md:block",
                )}
              >
                <div
                  className={cn(
                    "relative min-h-28 overflow-hidden bg-slate-100",
                    singleCompactFamily
                      ? "md:min-h-[220px]"
                      : "md:aspect-[16/9] md:min-h-0",
                  )}
                >
                  <Image
                    src={images.families[family.id]}
                    alt={family.image.alt}
                    fill
                    sizes={
                      singleCompactFamily
                        ? "(max-width: 768px) 96px, 40vw"
                        : "(max-width: 768px) 96px, (max-width: 1280px) 50vw, 20vw"
                    }
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.035] motion-reduce:transition-none"
                  />
                </div>
                <div
                  className={cn(
                    "flex min-w-0 flex-col justify-center p-4",
                    singleCompactFamily
                      ? "md:min-h-[220px] md:p-7 lg:p-8"
                      : "md:min-h-[220px] md:justify-start md:p-5",
                  )}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-teal-700">
                    {family.label}
                  </p>
                  <h3 className="mt-1.5 font-sora text-base font-semibold leading-snug text-slate-950 group-hover:text-brand-navy">
                    {family.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-600">
                    {family.description}
                  </p>
                  <span
                    className={cn(
                      "mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-navy",
                      singleCompactFamily ? "md:mt-5" : "md:mt-auto md:pt-4",
                    )}
                  >
                    {family.linkLabel}
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </div>
              </ProductCategoryActionLink>
            ))}
          </div>
        </div>
      </section>

      <section
        id="popular-sizes"
        data-category-section="popular-sizes"
        className="scroll-mt-24 border-y border-slate-200 bg-slate-50"
      >
        <div className="container py-10 sm:py-12 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:items-end">
            <SectionHeading
              label="Popular specifications"
              title="Start with a known size when the printer already matches"
              description="A size name does not confirm core, outer diameter, gap, winding, face stock or adhesive. Open the size page, then qualify the full construction."
            />
            <div className={cn("grid border-l border-t border-slate-300", sizeGridClass)}>
              {config.sizes.map((size) => (
                <Link
                  key={size.slug}
                  href={`${config.canonicalPath}/${size.slug}`}
                  className="group flex min-h-36 flex-col border-b border-r border-slate-300 bg-white p-4 transition-colors hover:bg-amber-50 focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 motion-reduce:transition-none"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[11px] font-semibold text-slate-500">
                      {size.market}
                    </span>
                    {size.badge ? (
                      <span className="border border-amber-200 bg-amber-50 px-1.5 py-0.5 text-[10px] font-semibold text-amber-800">
                        {size.badge}
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-5 font-sora text-base font-semibold leading-tight text-slate-950 group-hover:text-amber-800 sm:text-lg">
                    {size.label}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{size.use}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-xs font-semibold text-brand-navy">
                    View specification
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="applications"
        data-category-section="applications"
        className="scroll-mt-24 bg-white"
      >
        <div className="container py-10 sm:py-12 lg:py-16">
          <SectionHeading
            label="Application routes"
            title="Match the label to the operating condition"
            description="Application pages help define the risk. The final product route still depends on the printer, surface, environment and required evidence."
          />
          <div
            role="region"
            aria-label={`${config.categoryName} application routes`}
            tabIndex={0}
            className={cn(
              "mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:thin] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 lg:grid lg:overflow-visible lg:pb-0",
              applicationGridClass,
            )}
          >
            {config.applications.map((application) => (
              <article
                key={application.id}
                className="w-[82vw] max-w-[320px] flex-none snap-start overflow-hidden border border-slate-200 bg-slate-50 lg:w-auto lg:max-w-none"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={images.applications[application.id]}
                    alt={application.image.alt}
                    fill
                    sizes="(max-width: 1024px) 82vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-sora text-lg font-semibold text-slate-950">
                    {application.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {application.description}
                  </p>
                  <p className="mt-4 border-l-2 border-teal-600 pl-3 text-xs leading-relaxed text-slate-600">
                    <span className="font-semibold text-teal-800">Confirm: </span>
                    {application.confirm}
                  </p>
                  <ProductCategoryActionLink
                    href={application.href}
                    inquiryFormId={inquiryFormId}
                    inquiryMessage={inquiryMessageFor(application.title)}
                    className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-navy transition-colors hover:text-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 motion-reduce:transition-none"
                  >
                    {application.linkLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </ProductCategoryActionLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="selection-guide"
        data-category-section="selection-guide"
        className="scroll-mt-24 border-y border-slate-200 bg-slate-50"
      >
        <div className="container py-10 sm:py-12 lg:py-16">
          <SectionHeading
            label="Four-step selection"
            title="Build the specification in the right order"
            description="The material route comes last. Printer geometry and the actual application determine which construction is worth testing."
          />
          <ol className="mt-8 grid border-l border-t border-slate-300 lg:grid-cols-4">
            {config.selectionSteps.map((item) => (
              <li key={item.step} className="border-b border-r border-slate-300 bg-white p-5 sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-sora text-sm font-semibold text-teal-700">{item.step}</span>
                  <span className="h-px flex-1 bg-slate-200" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-sora text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                <ul className="mt-4 space-y-2">
                  {item.inputs.map((input) => (
                    <li key={input} className="flex gap-2 text-xs leading-relaxed text-slate-700">
                      <Check className="mt-0.5 h-3.5 w-3.5 flex-none text-amber-600" aria-hidden="true" />
                      {input}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="evidence"
        data-category-section="evidence"
        className="scroll-mt-24 bg-brand-ink text-white"
      >
        <div className="container py-10 sm:py-12 lg:py-16">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
            <div className="relative aspect-[16/10] overflow-hidden border border-white/15 bg-slate-900">
              <Image
                src={images.quality}
                alt={config.evidence.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-300">
                {config.evidence.label}
              </p>
              <h2 className="mt-2 font-sora text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
                {config.evidence.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                {config.evidence.description}
              </p>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {config.evidence.checks.map((check) => (
                  <div key={check.title} className="border-t border-white/15 pt-4">
                    <h3 className="text-sm font-semibold text-white">{check.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                      {check.description}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-6 border-l-2 border-teal-400 pl-4 text-xs leading-relaxed text-slate-300">
                {config.evidence.note}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="faq"
        data-category-section="faq"
        className="scroll-mt-24 border-b border-slate-200 bg-white"
      >
        <div className="container py-10 sm:py-12 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(240px,0.65fr)_minmax(0,1.35fr)] lg:gap-14">
            <SectionHeading
              label="Sourcing FAQ"
              title="Answers before the specification review"
              description="Use these answers to prepare the printer, application and order information needed for a useful quotation."
            />
            <div className="border-t border-slate-300">
              {config.faq.map((item, index) => (
                <details key={item.q} className="group border-b border-slate-300" open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-center gap-3 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
                    <span className="font-sora text-xs font-semibold text-slate-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 font-sora text-sm font-semibold leading-snug text-slate-900 sm:text-base">
                      {item.q}
                    </span>
                    <ChevronDown className="h-5 w-5 flex-none text-slate-500 transition-transform group-open:rotate-180 motion-reduce:transition-none" aria-hidden="true" />
                  </summary>
                  <p className="pb-5 pl-8 pr-8 text-sm leading-relaxed text-slate-600">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="inquiry"
        data-category-section="inquiry"
        className="scroll-mt-24 bg-slate-50"
      >
        <div className="container py-10 sm:py-12 lg:py-16">
          <div className="grid overflow-hidden border border-slate-200 bg-white shadow-[0_18px_48px_rgba(15,23,42,0.08)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="flex flex-col bg-brand-navy p-7 text-white sm:p-8 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-300">
                {config.inquiry.label}
              </p>
              <h2 className="mt-2 font-sora text-2xl font-semibold leading-tight text-white sm:text-3xl">
                {config.inquiry.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {config.inquiry.description}
              </p>
              <ul className="mt-6 space-y-3 border-t border-white/15 pt-5">
                {config.inquiry.checklist.map((item) => (
                  <li key={item} className="flex gap-2 text-xs leading-relaxed text-slate-200 sm:text-sm">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-amber-400" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex min-h-11 items-center gap-2 self-start text-sm font-semibold text-amber-300 transition-colors hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy motion-reduce:transition-none"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                Send the specification on WhatsApp
              </a>
            </div>
            <div className="p-6 sm:p-7 lg:p-9">
              <InquiryForm
                compact
                formId={inquiryFormId}
                productName={config.inquiry.productName}
                initialMessage={config.inquiry.initialMessage}
                responseNote={config.inquiry.responseNote}
                successMessage={config.inquiry.successMessage}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        data-category-section="related-programs"
        className="border-t border-slate-200 bg-white"
      >
        <div className="container flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-950">Related label programs</p>
            <p className="mt-1 text-sm text-slate-600">Continue with a defined product route.</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {config.relatedPrograms.map((program) => (
              <Link
                key={program.href}
                href={program.href}
                className="inline-flex min-h-11 items-center text-sm font-semibold text-brand-navy transition-colors hover:text-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 motion-reduce:transition-none"
              >
                {program.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
