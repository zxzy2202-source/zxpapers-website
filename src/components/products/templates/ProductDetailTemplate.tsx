import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  MessageSquare,
  PackageCheck,
  Printer,
  ScanLine,
  ShieldCheck,
  Tag,
  type LucideIcon,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import InquiryForm from "@/components/shared/InquiryForm";
import type {
  ProductDetailConfig,
  ProductFactIcon,
  ResolvedProductDetailImages,
} from "./product-detail-types";

interface ProductDetailTemplateProps {
  config: ProductDetailConfig;
  images: ResolvedProductDetailImages;
  whatsappHref: string;
}

const factIcons: Record<ProductFactIcon, LucideIcon> = {
  printer: Printer,
  roll: ScanLine,
  adhesive: Tag,
  approval: ClipboardCheck,
};

function SectionIntro({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-normal text-amber-700">{label}</p>
      <h2 className="mt-3 text-pretty font-sora text-3xl font-semibold leading-tight text-slate-950 lg:text-[2.5rem]">
        {title}
      </h2>
      <p className="mt-4 max-w-[66ch] text-pretty text-base leading-relaxed text-slate-600 lg:text-lg">
        {description}
      </p>
    </div>
  );
}

export default function ProductDetailTemplate({
  config,
  images,
  whatsappHref,
}: ProductDetailTemplateProps) {
  return (
    <Layout>
      <main data-product-detail-template={config.slug}>
        <PageHero
          bgImage={images.hero}
          overlayOpacity={64}
          minHeight="min-h-[430px]"
          compact
          breadcrumbs={config.breadcrumbs.map((item, index) => ({
            label: item.name,
            href: index === config.breadcrumbs.length - 1 ? undefined : item.path,
          }))}
          badge={{ text: config.hero.badge, color: "amber" }}
          title={config.hero.title}
          titleHighlight={config.hero.highlight}
          subtitle={config.hero.description}
          ctas={[
            {
              label: config.hero.primaryCta.label,
              href: config.hero.primaryCta.href,
              variant: "primary",
              icon: <MessageSquare className="h-4 w-4" aria-hidden="true" />,
            },
            {
              label: config.hero.secondaryCta.label,
              href: whatsappHref,
              variant: "whatsapp",
              external: true,
            },
          ]}
        />

        <section className="border-b border-slate-200 bg-white" aria-label="Product decision facts">
          <div className="container py-5">
            <div className="grid grid-cols-2 border-l border-t border-slate-200 lg:grid-cols-4">
              {config.facts.map((fact) => {
                const Icon = factIcons[fact.icon];
                return (
                  <div key={fact.label} className="flex min-h-24 items-start gap-3 border-b border-r border-slate-200 p-4 sm:p-5">
                    <Icon className="mt-0.5 h-5 w-5 flex-none text-amber-700" aria-hidden="true" />
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-normal text-slate-500">{fact.label}</p>
                      <p className="mt-1 text-sm font-semibold leading-snug text-slate-900">{fact.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-slate-50" data-product-detail-section="direct-answer">
          <div className="container py-12 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-stretch lg:gap-14">
              <div className="relative min-h-80 overflow-hidden border border-slate-200 bg-white lg:min-h-full">
                <Image
                  src={images.application}
                  alt={config.images.application.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="py-1">
                <SectionIntro
                  label={config.directAnswer.label}
                  title={config.directAnswer.question}
                  description={config.directAnswer.answer}
                />
                <div className="mt-7 border-t border-slate-300">
                  {config.directAnswer.checklist.map((item) => (
                    <p key={item} className="flex gap-3 border-b border-slate-300 py-3.5 text-sm leading-relaxed text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-amber-700" aria-hidden="true" />
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="border-y border-slate-200 bg-white"
          data-product-detail-section="supply-program"
        >
          <div className="container py-12 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-[minmax(250px,0.58fr)_minmax(0,1.42fr)] lg:gap-16">
              <div>
                <SectionIntro
                  label={config.supplyProgram.label}
                  title={config.supplyProgram.title}
                  description={config.supplyProgram.description}
                />
                <div className="mt-7 border-t border-slate-300">
                  {config.supplyProgram.buyers.map((buyer) => (
                    <p key={buyer} className="flex gap-3 border-b border-slate-200 py-3 text-sm text-slate-700">
                      <Building2 className="mt-0.5 h-4 w-4 flex-none text-amber-700" aria-hidden="true" />
                      {buyer}
                    </p>
                  ))}
                </div>
              </div>
              <div className="border-l border-t border-slate-300 sm:grid sm:grid-cols-2">
                {config.supplyProgram.items.map((item) => (
                  <article key={item.title} className="flex min-h-56 flex-col border-b border-r border-slate-300 p-5 sm:p-6">
                    <BriefcaseBusiness className="h-5 w-5 text-amber-700" aria-hidden="true" />
                    <h3 className="mt-4 font-sora text-lg font-semibold text-slate-950">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
                    <p className="mt-auto border-t border-slate-200 pt-4 text-xs font-semibold leading-relaxed text-brand-navy">
                      Buyer value: {item.buyerValue}
                    </p>
                  </article>
                ))}
                <p className="border-b border-r border-slate-300 p-5 text-xs leading-relaxed text-slate-500 sm:col-span-2 sm:p-6">
                  {config.supplyProgram.note}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white" data-product-detail-section="risks">
          <div className="container py-12 lg:py-16">
            <div className="grid gap-8 lg:grid-cols-[minmax(240px,0.55fr)_minmax(0,1.45fr)] lg:gap-14">
              <SectionIntro
                label="Buyer risk review"
                title="Resolve the problems behind the roll specification"
                description="A size name is not enough for a production order. Confirm how the roll loads, cuts, adheres, prints, scans, ships, and repeats before approving the supply specification."
              />
              <div className="grid border-l border-t border-slate-300 sm:grid-cols-2">
                {config.problems.map((problem) => (
                  <article key={problem.question} className="flex min-h-64 flex-col border-b border-r border-slate-300 p-5 sm:p-6">
                    <ShieldCheck className="h-6 w-6 text-amber-700" aria-hidden="true" />
                    <h3 className="mt-5 text-pretty font-sora text-lg font-semibold leading-tight text-slate-950">
                      {problem.question}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{problem.consequence}</p>
                    <div className="mt-auto border-t border-slate-200 pt-4">
                      <p className="text-[11px] font-semibold uppercase tracking-normal text-slate-500">Review response</p>
                      <p className="mt-2 text-sm font-medium leading-relaxed text-slate-800">{problem.response}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50" data-product-detail-section="specifications">
          <div className="container py-12 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-[minmax(250px,0.58fr)_minmax(0,1.42fr)] lg:gap-16">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <SectionIntro
                  label="Specification basis"
                  title="Define the complete roll before comparing quotes"
                  description="The values below describe the quotation and approval fields for this format. Final manufacturing tolerances, material, packing, and test scope belong in the approved specification."
                />
              </div>
              <div className="space-y-8">
                {config.specifications.map((group) => (
                  <section key={group.title} aria-labelledby={`spec-${group.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                    <div className="border-b-2 border-brand-navy pb-4">
                      <h3 id={`spec-${group.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="font-sora text-xl font-semibold text-slate-950">
                        {group.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{group.description}</p>
                    </div>
                    <dl className="border-l border-t border-slate-300 bg-white sm:grid sm:grid-cols-2">
                      {group.rows.map((row) => (
                        <div key={`${group.title}-${row.label}`} className="border-b border-r border-slate-300 p-4 sm:p-5">
                          <dt className="text-[11px] font-semibold uppercase tracking-normal text-slate-500">{row.label}</dt>
                          <dd className="mt-2 text-sm font-semibold leading-relaxed text-slate-900">{row.value}</dd>
                          {row.note && <p className="mt-2 text-xs leading-relaxed text-slate-500">{row.note}</p>}
                        </div>
                      ))}
                    </dl>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white" data-product-detail-section="applications">
          <div className="container py-12 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-stretch lg:gap-14">
              <div className="relative min-h-80 overflow-hidden border border-slate-200 bg-slate-100 lg:min-h-full">
                <Image
                  src={images.application}
                  alt={config.images.application.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
              <div>
                <SectionIntro
                  label="Application review"
                  title="Match the adhesive and test plan to the real surface"
                  description="The same roll dimensions can behave differently across containers, labels, temperatures, dwell times, condensation, grease, and handling. Review the application before choosing the adhesive."
                />
                <div className="mt-8 border-t border-slate-300">
                  {config.applications.map((application) => (
                    <article key={application.title} className="grid gap-2 border-b border-slate-300 py-4 sm:grid-cols-[minmax(150px,0.42fr)_minmax(0,1fr)] sm:gap-5">
                      <h3 className="font-sora text-base font-semibold text-slate-950">{application.title}</h3>
                      <div>
                        <p className="text-sm leading-relaxed text-slate-600">{application.description}</p>
                        <p className="mt-2 text-xs font-semibold leading-relaxed text-brand-navy">Confirm: {application.confirm}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50" data-product-detail-section="workflow">
          <div className="container py-12 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-[minmax(250px,0.58fr)_minmax(0,1.42fr)] lg:gap-16">
              <SectionIntro
                label="Approval workflow"
                title="Move from a qualified RFQ to a repeatable supply reference"
                description="The B2B approval route connects application, complete roll specification, OEM packing, samples, bulk-order approval, and repeat-order control."
              />
              <ol className="border-t border-slate-300">
                {config.workflow.map((item) => (
                  <li key={item.step} className="grid gap-3 border-b border-slate-300 py-5 sm:grid-cols-[56px_180px_minmax(0,1fr)] sm:items-start sm:gap-5">
                    <span className="font-sora text-sm font-semibold tabular-nums text-amber-700">{item.step}</span>
                    <h3 className="font-sora text-base font-semibold text-slate-950">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white" data-product-detail-section="evidence">
          <div className="container py-12 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-stretch lg:gap-14">
              <div className="relative min-h-80 overflow-hidden border border-slate-200 bg-slate-100 lg:min-h-full">
                <Image
                  src={images.quality}
                  alt={config.images.quality.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div>
                <SectionIntro
                  label={config.evidence.label}
                  title={config.evidence.title}
                  description={config.evidence.description}
                />
                <div className="mt-7 border-t border-slate-300">
                  {config.evidence.checks.map((item) => (
                    <p key={item} className="flex gap-3 border-b border-slate-300 py-3.5 text-sm leading-relaxed text-slate-700">
                      <BadgeCheck className="mt-0.5 h-4 w-4 flex-none text-amber-700" aria-hidden="true" />
                      {item}
                    </p>
                  ))}
                </div>
                <p className="mt-5 border-l-2 border-amber-500 pl-4 text-xs leading-relaxed text-slate-500">{config.evidence.note}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50" data-product-detail-section="faq">
          <div className="container py-12 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-[minmax(250px,0.62fr)_minmax(0,1.38fr)] lg:gap-16">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <SectionIntro
                  label="FAQ"
                  title={`${config.productName} sourcing questions`}
                  description="Concise answers for printer fit, adhesive selection, sample review, packing, and repeat-order control."
                />
                <nav className="mt-7 border-t border-slate-300 pt-5" aria-label="Related product pages">
                  {config.relatedLinks.map((item) => (
                    <Link key={item.href} href={item.href} className="flex min-h-10 items-center justify-between border-b border-slate-200 text-sm font-medium text-brand-navy hover:text-brand-navy-hover">
                      {item.label}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="border-t border-slate-300">
                {config.faq.map((faq, index) => (
                  <details key={faq.q} className="group border-b border-slate-300" open={index === 0}>
                    <summary className="flex cursor-pointer list-none items-center gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 [&::-webkit-details-marker]:hidden">
                      <span className="font-sora text-sm font-semibold tabular-nums text-amber-700">{String(index + 1).padStart(2, "0")}</span>
                      <span className="flex-1 text-pretty font-sora text-base font-semibold text-slate-900">{faq.q}</span>
                      <ChevronDown className="h-5 w-5 flex-none text-slate-500 transition-transform duration-200 motion-reduce:transition-none group-open:rotate-180" aria-hidden="true" />
                    </summary>
                    <p className="pb-5 pl-10 pr-8 text-sm leading-relaxed text-slate-600">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="inquiry" className="scroll-mt-24 bg-white" data-product-detail-section="inquiry">
          <div className="container py-12 lg:py-16">
            <div className="grid overflow-hidden border border-slate-200 shadow-[0_18px_50px_rgba(15,23,42,0.09)] lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
              <div className="bg-brand-navy p-8 text-white lg:p-10">
                <p className="text-xs font-semibold uppercase tracking-normal text-amber-300">{config.inquiry.label}</p>
                <h2 className="mt-3 text-pretty font-sora text-3xl font-semibold leading-tight lg:text-4xl">{config.inquiry.title}</h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-300 lg:text-base">{config.inquiry.description}</p>
                <div className="mt-8 border-y border-white/15">
                  {config.inquiry.checklist.map((item) => (
                    <p key={item} className="flex gap-2 border-b border-white/15 py-3 text-sm text-slate-200 last:border-b-0">
                      <PackageCheck className="mt-0.5 h-4 w-4 flex-none text-amber-300" aria-hidden="true" />
                      {item}
                    </p>
                  ))}
                </div>
                <Link href={whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-11 items-center gap-2 border border-white/25 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300">
                  Discuss the application on WhatsApp
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              <div className="bg-white p-7 lg:p-9">
                <InquiryForm compact productName={config.inquiry.productName} initialMessage={config.inquiry.initialMessage} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
