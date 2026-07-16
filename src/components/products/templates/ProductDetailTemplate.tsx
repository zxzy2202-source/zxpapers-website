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

function SectionIntro({ label, title, description }: { label: string; title: string; description: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-normal text-amber-700">{label}</p>
      <h2 className="mt-2 text-pretty font-sora text-2xl font-semibold leading-tight text-slate-950 lg:text-[2rem]">
        {title}
      </h2>
      <p className="mt-3 max-w-[70ch] text-pretty text-sm leading-relaxed text-slate-600 lg:text-base">
        {description}
      </p>
    </div>
  );
}

export default function ProductDetailTemplate({ config, images, whatsappHref }: ProductDetailTemplateProps) {
  return (
    <Layout>
      <main data-product-detail-template={config.slug}>
        <PageHero
          bgImage={images.hero}
          overlayOpacity={64}
          minHeight="min-h-[370px]"
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
          <div className="container py-3">
            <div className="grid grid-cols-2 border-l border-t border-slate-200 lg:grid-cols-4">
              {config.facts.map((fact) => {
                const Icon = factIcons[fact.icon];
                return (
                  <div key={fact.label} className="flex min-h-20 items-start gap-3 border-b border-r border-slate-200 p-3 sm:p-4">
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

        <section className="bg-slate-50" data-product-detail-section="procurement-overview">
          <div className="container py-9 lg:py-12">
            <div className="grid gap-7 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-stretch lg:gap-10">
              <div className="relative aspect-[4/3] overflow-hidden border border-slate-200 bg-white lg:aspect-auto lg:min-h-[340px]">
                <Image src={images.application} alt={config.images.application.alt} fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover" />
              </div>
              <div>
                <SectionIntro label={config.directAnswer.label} title={config.directAnswer.question} description={config.directAnswer.answer} />
                <div className="mt-5 border-t border-slate-300">
                  {config.directAnswer.checklist.map((item) => (
                    <p key={item} className="flex gap-3 border-b border-slate-300 py-3 text-sm leading-relaxed text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-amber-700" aria-hidden="true" />
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-300 pt-7">
              <SectionIntro label={config.supplyProgram.label} title={config.supplyProgram.title} description={config.supplyProgram.description} />
              <div className="mt-5 grid border-l border-t border-slate-300 sm:grid-cols-2 lg:grid-cols-4">
                {config.supplyProgram.buyers.map((buyer) => (
                  <p key={buyer} className="flex gap-2 border-b border-r border-slate-300 bg-white p-3 text-xs font-medium leading-relaxed text-slate-700 sm:p-4">
                    <Building2 className="mt-0.5 h-4 w-4 flex-none text-amber-700" aria-hidden="true" />
                    {buyer}
                  </p>
                ))}
              </div>
              <div className="grid border-l border-slate-300 sm:grid-cols-2 lg:grid-cols-4">
                {config.supplyProgram.items.map((item) => (
                  <article key={item.title} className="flex flex-col border-b border-r border-slate-300 bg-white p-4">
                    <BriefcaseBusiness className="h-5 w-5 text-amber-700" aria-hidden="true" />
                    <h3 className="mt-3 font-sora text-base font-semibold leading-tight text-slate-950">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                    <p className="mt-3 border-t border-slate-200 pt-3 text-xs font-semibold leading-relaxed text-brand-navy">Buyer value: {item.buyerValue}</p>
                  </article>
                ))}
              </div>
              <p className="border-x border-b border-slate-300 bg-white px-4 py-3 text-xs leading-relaxed text-slate-500">{config.supplyProgram.note}</p>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white" data-product-detail-section="risks">
          <div className="container py-9 lg:py-12">
            <SectionIntro
              label="Buyer risk review"
              title="Resolve the problems behind the roll specification"
              description="A size name is not enough for a production order. Confirm how the roll loads, cuts, adheres, prints, scans, ships, and repeats before approving the supply specification."
            />
            <div className="mt-6 grid border-l border-t border-slate-300 sm:grid-cols-2 lg:grid-cols-3">
              {config.problems.map((problem) => (
                <article key={problem.question} className="flex flex-col border-b border-r border-slate-300 p-4 lg:p-5">
                  <ShieldCheck className="h-5 w-5 text-amber-700" aria-hidden="true" />
                  <h3 className="mt-3 text-pretty font-sora text-base font-semibold leading-tight text-slate-950">{problem.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{problem.consequence}</p>
                  <div className="mt-4 border-t border-slate-200 pt-3">
                    <p className="text-[11px] font-semibold uppercase tracking-normal text-slate-500">Review response</p>
                    <p className="mt-1.5 text-sm font-medium leading-relaxed text-slate-800">{problem.response}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50" data-product-detail-section="specifications">
          <div className="container py-9 lg:py-12">
            <SectionIntro
              label="Specification basis"
              title="Define the complete roll before comparing quotes"
              description="The values below describe the quotation and approval fields for this format. Final manufacturing tolerances, material, packing, and test scope belong in the approved specification."
            />
            <div className="mt-6 space-y-6" data-compact-specifications>
              {config.specifications.map((group) => {
                const headingId = "spec-" + group.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                return (
                  <section key={group.title} aria-labelledby={headingId} className="border border-slate-300 bg-white">
                    <div className="border-b border-slate-300 bg-brand-navy px-4 py-3 text-white sm:flex sm:items-baseline sm:gap-5">
                      <h3 id={headingId} className="font-sora text-base font-semibold sm:min-w-56">{group.title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-slate-300 sm:mt-0">{group.description}</p>
                    </div>
                    <dl>
                      {group.rows.map((row) => (
                        <div key={group.title + "-" + row.label} className="grid gap-1 border-b border-slate-200 px-4 py-3 last:border-b-0 odd:bg-white even:bg-slate-50 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-5">
                          <dt className="text-xs font-semibold uppercase tracking-normal text-slate-500">{row.label}</dt>
                          <div>
                            <dd className="text-sm font-semibold leading-relaxed text-slate-900">{row.value}</dd>
                            {row.note && <p className="mt-1 text-xs leading-relaxed text-slate-500">{row.note}</p>}
                          </div>
                        </div>
                      ))}
                    </dl>
                  </section>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white" data-product-detail-section="applications">
          <div className="container py-9 lg:py-12">
            <div className="grid gap-7 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:items-start lg:gap-10">
              <div className="relative aspect-[16/10] overflow-hidden border border-slate-200 bg-slate-100 lg:aspect-auto lg:min-h-72">
                <Image src={images.application} alt={config.images.application.alt} fill sizes="(max-width: 1024px) 100vw, 38vw" className="object-cover" />
              </div>
              <div>
                <SectionIntro
                  label="Application review"
                  title="Match the adhesive and test plan to the real surface"
                  description="The same roll dimensions can behave differently across containers, temperatures, dwell times, condensation, grease, and handling. Review the application before choosing the adhesive."
                />
                <div className="mt-5 border-t border-slate-300">
                  {config.applications.map((application) => (
                    <article key={application.title} className="grid gap-1 border-b border-slate-300 py-3 sm:grid-cols-[170px_minmax(0,1fr)] sm:gap-5">
                      <h3 className="font-sora text-sm font-semibold text-slate-950">{application.title}</h3>
                      <div>
                        <p className="text-sm leading-relaxed text-slate-600">{application.description}</p>
                        <p className="mt-1 text-xs font-semibold leading-relaxed text-brand-navy">Confirm: {application.confirm}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50" data-product-detail-section="workflow">
          <div className="container py-9 lg:py-12">
            <SectionIntro
              label="Approval workflow"
              title="Move from a qualified RFQ to a repeatable supply reference"
              description="The B2B approval route connects application, complete roll specification, OEM packing, samples, bulk-order approval, and repeat-order control."
            />
            <ol className="mt-6 grid gap-px border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
              {config.workflow.map((item) => (
                <li key={item.step} className="bg-white p-4">
                  <span className="font-sora text-xs font-semibold tabular-nums text-amber-700">{item.step}</span>
                  <h3 className="mt-2 font-sora text-base font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white" data-product-detail-section="evidence">
          <div className="container py-9 lg:py-12">
            <div className="grid gap-7 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:items-start lg:gap-10">
              <div className="relative aspect-[16/10] overflow-hidden border border-slate-200 bg-slate-100 lg:aspect-auto lg:min-h-72">
                <Image src={images.quality} alt={config.images.quality.alt} fill sizes="(max-width: 1024px) 100vw, 38vw" className="object-cover" />
              </div>
              <div>
                <SectionIntro label={config.evidence.label} title={config.evidence.title} description={config.evidence.description} />
                <div className="mt-5 border-t border-slate-300">
                  {config.evidence.checks.map((item) => (
                    <p key={item} className="flex gap-3 border-b border-slate-300 py-3 text-sm leading-relaxed text-slate-700">
                      <BadgeCheck className="mt-0.5 h-4 w-4 flex-none text-amber-700" aria-hidden="true" />
                      {item}
                    </p>
                  ))}
                </div>
                <p className="mt-4 border-l-2 border-amber-500 pl-4 text-xs leading-relaxed text-slate-500">{config.evidence.note}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="inquiry" className="scroll-mt-24 bg-slate-50" data-product-detail-section="inquiry">
          <div className="container py-9 lg:py-12">
            <div className="grid overflow-hidden border border-slate-200 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
              <div className="bg-brand-navy p-6 text-white lg:p-8">
                <p className="text-xs font-semibold uppercase tracking-normal text-amber-300">{config.inquiry.label}</p>
                <h2 className="mt-2 text-pretty font-sora text-2xl font-semibold leading-tight lg:text-3xl">{config.inquiry.title}</h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-300">{config.inquiry.description}</p>
                <div className="mt-6 border-y border-white/15">
                  {config.inquiry.checklist.map((item) => (
                    <p key={item} className="flex gap-2 border-b border-white/15 py-2.5 text-sm text-slate-200 last:border-b-0">
                      <PackageCheck className="mt-0.5 h-4 w-4 flex-none text-amber-300" aria-hidden="true" />
                      {item}
                    </p>
                  ))}
                </div>
                <Link href={whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center gap-2 border border-white/25 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300">
                  Discuss the application on WhatsApp
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              <div className="bg-white p-6 lg:p-8">
                <InquiryForm compact productName={config.inquiry.productName} initialMessage={config.inquiry.initialMessage} />
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white" data-product-detail-section="faq">
          <div className="container py-9 lg:py-12">
            <SectionIntro
              label="FAQ"
              title={config.productName + " sourcing questions"}
              description="Concise answers for printer fit, adhesive selection, sample review, packing, and repeat-order control."
            />
            <div className="mt-6 grid gap-x-8 lg:grid-cols-2" data-faq-columns>
              {config.faq.map((faq, index) => (
                <details key={faq.q} className="group border-t border-slate-300">
                  <summary className="flex cursor-pointer list-none items-center gap-3 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 [&::-webkit-details-marker]:hidden">
                    <span className="font-sora text-xs font-semibold tabular-nums text-amber-700">{String(index + 1).padStart(2, "0")}</span>
                    <span className="flex-1 text-pretty font-sora text-sm font-semibold text-slate-900 sm:text-base">{faq.q}</span>
                    <ChevronDown className="h-4 w-4 flex-none text-slate-500 transition-transform duration-200 motion-reduce:transition-none group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <p className="pb-4 pl-9 pr-7 text-sm leading-relaxed text-slate-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50" data-product-detail-section="related-products">
          <div className="container py-9 lg:py-12">
            <SectionIntro
              label="Related product programs"
              title="Compare the next product route for your buying brief"
              description="Use these related pages when the project needs printed branding, additional label formats, or a logistics-specific supply program."
            />
            <div className="mt-6 grid border-l border-t border-slate-300 md:grid-cols-3">
              {config.relatedProducts.map((product) => (
                <article key={product.id} className="flex min-w-0 flex-col border-b border-r border-slate-300 bg-white">
                  <div className="relative aspect-[16/9] overflow-hidden border-b border-slate-200 bg-slate-100">
                    <Image src={images.related[product.id]} alt={product.image.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col p-4 lg:p-5">
                    <p className="text-xs font-semibold uppercase tracking-normal text-amber-700">{product.label}</p>
                    <h3 className="mt-2 font-sora text-lg font-semibold leading-tight text-slate-950">{product.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{product.description}</p>
                    <p className="mt-3 border-t border-slate-200 pt-3 text-xs font-semibold leading-relaxed text-brand-navy">{product.buyerFit}</p>
                    <Link href={product.href} className="mt-auto inline-flex min-h-10 items-center gap-2 pt-4 text-sm font-semibold text-brand-navy hover:text-brand-navy-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500">
                      {product.linkLabel}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
