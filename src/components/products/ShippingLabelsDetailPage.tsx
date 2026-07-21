import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Check,
  MessageCircle,
  PackageCheck,
  PackageSearch,
  Printer,
  Ruler,
  Rows3,
  ScanLine,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import InquiryForm from "@/components/shared/InquiryForm";

export interface ShippingLabelFailureRisk {
  title: string;
  symptom: string;
  cause: string;
  control: string;
  icon: LucideIcon;
}

export interface ShippingLabelFormat {
  title: string;
  bestFor: string;
  description: string;
  checks: string[];
  image: string;
  imageAlt: string;
  objectPosition?: string;
}

export interface ShippingLabelCompatibilityRow {
  printer: string;
  commonModels: string;
  confirm: string;
}

export interface ShippingLabelSpecificationGroup {
  title: string;
  items: Array<{ label: string; value: string }>;
}

export interface ShippingLabelApplication {
  title: string;
  description: string;
  decision: string;
  image: string;
  imageAlt: string;
}

export interface ShippingLabelWorkflowStep {
  name: string;
  description: string;
}

export interface ShippingLabelFaq {
  question: string;
  answer: string;
}

interface ShippingLabelsDetailPageProps {
  heroImage: string;
  overviewImage: string;
  failureRisksImage: string;
  qualityControlImage: string;
  packingImage: string;
  failureRisks: ShippingLabelFailureRisk[];
  formats: ShippingLabelFormat[];
  compatibilityRows: ShippingLabelCompatibilityRow[];
  specificationGroups: ShippingLabelSpecificationGroup[];
  applications: ShippingLabelApplication[];
  workflowSteps: ShippingLabelWorkflowStep[];
  qualityControls: string[];
  faqs: ShippingLabelFaq[];
  whatsappUrl: string;
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase text-amber-700">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 font-sora text-3xl font-semibold leading-tight text-slate-950 lg:text-[2.6rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-[68ch] text-base leading-relaxed text-slate-600">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-700">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ShippingLabelsDetailPage({
  heroImage,
  overviewImage,
  failureRisksImage,
  qualityControlImage,
  packingImage,
  failureRisks,
  formats,
  compatibilityRows,
  specificationGroups,
  applications,
  workflowSteps,
  qualityControls,
  faqs,
  whatsappUrl,
}: ShippingLabelsDetailPageProps) {
  const facts = [
    { icon: Ruler, label: "Standard size", value: "4x6 in / 100x150 mm" },
    { icon: Rows3, label: "Supply format", value: "Rolls or Z-fold fanfold" },
    { icon: Printer, label: "Printer fit", value: "Core, gap and unwind checked" },
    { icon: PackageSearch, label: "Repeat supply", value: "SKU, carton and pallet control" },
  ];

  return (
    <Layout>
      <PageHero
        bgImage={heroImage}
        overlayDir="left"
        overlayOpacity={70}
        minHeight="min-h-[430px]"
        compact
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Shipping Labels" },
        ]}
        badge={{ text: "3PL and Warehouse Supply", color: "amber" }}
        title={
          <>
            Shipping Labels Built for
            <br />
            <span className="text-amber-300">High-Volume Fulfillment</span>
          </>
        }
        subtitle="Direct thermal 4x6 shipping labels in rolls and fanfold, matched to your printer, throughput, parcel surface and replenishment plan."
        trustBadges={[
          "4x6 / 100x150 mm",
          "Roll and fanfold",
          "Printer matched",
          "Batch controlled",
        ]}
        stats={[
          { value: "4x6", label: "Shipping standard" },
          { value: "Roll / Fold", label: "Supply format" },
          { value: "24h", label: "Quote response" },
        ]}
        ctas={[
          { label: "Build Your Label Specification", href: "#inquiry", variant: "primary" },
          { label: "Send Printer Model", href: whatsappUrl, variant: "outline" },
        ]}
      />

      <section aria-label="Shipping label procurement facts" className="border-b border-slate-200 bg-white">
        <div className="container grid divide-y divide-slate-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {facts.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex min-h-28 items-center gap-4 px-4 py-5 sm:px-6 lg:px-7">
              <Icon className="h-5 w-5 shrink-0 text-amber-700" aria-hidden="true" />
              <div>
                <p className="text-xs font-semibold uppercase text-slate-500">{label}</p>
                <p className="mt-1 text-sm font-semibold leading-snug text-slate-950">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="overview" className="scroll-mt-24 bg-white">
        <div className="container grid items-stretch gap-10 py-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16 lg:py-20">
          <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 lg:aspect-auto lg:min-h-[320px]">
            <Image
              src={overviewImage}
              alt="Direct thermal shipping labels used in parcel fulfillment"
              fill
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <SectionHeading
              eyebrow="Direct answer"
              title="What Are Direct Thermal Shipping Labels?"
              description="Direct thermal shipping labels are pressure-sensitive labels that create addresses and barcodes through heat, without ink, toner or ribbon. They are the standard choice for parcel fulfillment because they print quickly, simplify media changes and provide enough image life for storage, transit and final-mile delivery."
            />
            <div className="mt-8 border-t border-slate-200 pt-6">
              <p className="text-sm font-semibold text-slate-950">Send these details for an accurate quote</p>
              <div className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                <CheckList
                  items={[
                    "Printer brand and model",
                    "Label size and format",
                    "Core, diameter and label count",
                    "Gap, perforation and unwind",
                    "Parcel surface and temperature",
                    "Volume, packing and destination",
                  ]}
                />
              </div>
            </div>
            <Link
              href="#inquiry"
              className="mt-7 inline-flex w-fit items-center gap-2 whitespace-nowrap text-sm font-semibold text-brand-navy transition-colors hover:text-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              Send your operating specification
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section id="failure-risks" className="scroll-mt-24 border-y border-slate-200 bg-slate-50">
        <div className="container py-14 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Operational risk"
                title="Stop the failures that slow a packing line"
                description="A low roll price does not help when operators must reprint, reset or relabel parcels. Put these controls in the purchase specification before volume production."
              />
              <div className="relative mt-8 aspect-[4/3] overflow-hidden bg-slate-200">
                <Image
                  src={failureRisksImage}
                  alt="Warehouse packing operation where label failures affect throughput"
                  fill
                  sizes="(max-width: 1024px) 100vw, 38vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="border-t border-slate-300">
              {failureRisks.map(({ icon: Icon, title, symptom, cause, control }, index) => (
                <article key={title} className="grid gap-4 border-b border-slate-300 py-6 sm:grid-cols-[52px_minmax(0,1fr)] sm:py-7">
                  <div className="flex h-11 w-11 items-center justify-center border border-amber-300 bg-amber-50 text-amber-800">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-sora text-lg font-semibold leading-snug text-slate-950">{title}</h3>
                      <span className="text-xs font-semibold text-slate-600">0{index + 1}</span>
                    </div>
                    <dl className="mt-4 grid gap-3 text-sm leading-relaxed sm:grid-cols-3">
                      <div>
                        <dt className="font-semibold text-slate-950">Symptom</dt>
                        <dd className="mt-1 text-slate-600">{symptom}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-slate-950">Likely cause</dt>
                        <dd className="mt-1 text-slate-600">{cause}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-amber-800">Buying control</dt>
                        <dd className="mt-1 text-slate-700">{control}</dd>
                      </div>
                    </dl>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="formats" className="scroll-mt-24 bg-white">
        <div className="container py-14 lg:py-20">
          <SectionHeading
            eyebrow="Supply format"
            title="Rolls or fanfold? Choose from the workflow"
            description="Printer hardware, labels per shift and available workstation space determine the right format. Do not choose from unit price alone."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.18fr)_minmax(0,0.82fr)]">
            {formats.map((format, index) => (
              <article key={format.title} className="grid border border-slate-200 bg-white md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:grid-cols-1 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
                <div className={`relative min-h-[260px] overflow-hidden bg-slate-100 ${index === 0 ? "lg:min-h-[330px] xl:min-h-0" : ""}`}>
                  <Image
                    src={format.image}
                    alt={format.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 32vw"
                    className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                    style={{ objectPosition: format.objectPosition }}
                  />
                </div>
                <div className="flex flex-col p-6 lg:p-7">
                  <p className="text-xs font-semibold uppercase text-amber-700">{format.bestFor}</p>
                  <h3 className="mt-3 font-sora text-2xl font-semibold leading-tight text-slate-950">{format.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{format.description}</p>
                  <div className="mt-6 border-t border-slate-200 pt-5">
                    <CheckList items={format.checks} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="printer-fit" className="scroll-mt-24 border-y border-slate-200 bg-brand-navy text-white">
        <div className="container py-14 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1.35fr)] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase text-amber-300">Printer compatibility</p>
              <h2 className="mt-3 font-sora text-3xl font-semibold leading-tight text-white lg:text-[2.6rem]">
                Confirm printer fit before production
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                Brand names are not enough. Send the exact model, DPI, sensing method, media path and maximum roll dimensions.
              </p>
              <Link
                href="#inquiry"
                className="mt-7 inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-amber-300 transition-colors hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
              >
                Check your printer model
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="overflow-x-auto border border-white/20">
              <table className="w-full min-w-[720px] text-left text-sm">
                <thead className="bg-white/10 text-xs uppercase text-slate-200">
                  <tr>
                    <th className="px-5 py-4 font-semibold">Printer class</th>
                    <th className="px-5 py-4 font-semibold">Common workflow</th>
                    <th className="px-5 py-4 font-semibold text-amber-300">Confirm before production</th>
                  </tr>
                </thead>
                <tbody>
                  {compatibilityRows.map((row) => (
                    <tr key={row.printer} className="border-t border-white/15 align-top">
                      <th scope="row" className="px-5 py-5 font-semibold text-white">{row.printer}</th>
                      <td className="px-5 py-5 leading-relaxed text-slate-300">{row.commonModels}</td>
                      <td className="px-5 py-5 leading-relaxed text-slate-200">{row.confirm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section id="specification" className="scroll-mt-24 bg-slate-50">
        <div className="container py-14 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,1.38fr)] lg:gap-16">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <SectionHeading
                eyebrow="Quotation brief"
                title="Build a specification your team can reorder"
                description="A complete specification ties the label to the printer, parcel and throughput. It also gives purchasing one approved reference for every replenishment."
              />
              <Link
                href="#inquiry"
                className="mt-7 inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-brand-navy transition-colors hover:text-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                Use the quote checklist
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="grid border-l border-t border-slate-300 sm:grid-cols-2">
              {specificationGroups.map((group) => (
                <article key={group.title} className="border-b border-r border-slate-300 bg-white p-5 sm:p-6">
                  <h3 className="font-sora text-lg font-semibold text-slate-950">{group.title}</h3>
                  <dl className="mt-5 space-y-4">
                    {group.items.map((item) => (
                      <div key={item.label}>
                        <dt className="text-xs font-semibold uppercase text-slate-500">{item.label}</dt>
                        <dd className="mt-1 text-sm leading-relaxed text-slate-700">{item.value}</dd>
                      </div>
                    ))}
                  </dl>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="applications" className="scroll-mt-24 border-y border-slate-200 bg-white">
        <div className="container py-14 lg:py-20">
          <SectionHeading
            eyebrow="Fulfillment environments"
            title="Match the label to the operation"
            description="The same 4x6 size can require a different roll capacity, coating or adhesive when printer fleets, parcel surfaces and handling conditions change."
          />
          <div className="mt-10 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {applications.map((application) => (
              <article key={application.title} className="border-t border-slate-300 pt-4">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src={application.image}
                    alt={application.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
                <h3 className="mt-5 font-sora text-lg font-semibold text-slate-950">{application.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{application.description}</p>
                <p className="mt-4 border-l-2 border-amber-500 pl-3 text-sm font-medium leading-relaxed text-slate-800">
                  {application.decision}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="repeat-sku" className="scroll-mt-24 bg-slate-50">
        <div className="container py-14 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Repeat supply"
                title="Move from sample approval to a controlled SKU"
                description="The approved label and packing specification becomes the reference for routine replenishment and peak-season planning."
              />
              <ol className="mt-9 border-t border-slate-300">
                {workflowSteps.map((step, index) => (
                  <li key={step.name} className="grid gap-3 border-b border-slate-300 py-6 sm:grid-cols-[52px_minmax(0,1fr)]">
                    <span className="font-sora text-2xl font-semibold text-amber-700">0{index + 1}</span>
                    <div>
                      <h3 className="font-sora text-lg font-semibold text-slate-950">{step.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                <Image
                  src={packingImage}
                  alt="Export cartons and pallets prepared for repeat shipping-label supply"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="border-x border-b border-slate-300 bg-white p-6">
                <h3 className="font-sora text-lg font-semibold text-slate-950">Packing controls purchasing can reuse</h3>
                <div className="mt-5">
                  <CheckList
                    items={[
                      "Labels per roll or fanfold stack",
                      "Rolls or stacks per carton",
                      "Cartons per pallet and pallet dimensions",
                      "Neutral or private-label carton marks",
                      "Batch reference and approved SKU",
                      "Peak-season forecast and reorder trigger",
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="quality-control" className="scroll-mt-24 bg-brand-navy text-white">
        <div className="container grid items-stretch gap-10 py-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:py-20">
          <div className="relative aspect-[4/3] overflow-hidden bg-slate-800 lg:aspect-auto lg:min-h-[330px]">
            <Image
              src={qualityControlImage}
              alt="Thermal label production and quality inspection line"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase text-amber-300">Production control</p>
            <h2 className="mt-3 font-sora text-3xl font-semibold leading-tight text-white lg:text-[2.6rem]">
              Quality controls behind every repeat batch
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Inspection follows the approved printer, surface and packing specification so the next pallet is checked against the same operational requirements.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {qualityControls.map((control) => (
                <li key={control} className="flex gap-3 border-t border-white/20 pt-4 text-sm leading-relaxed text-slate-200">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" aria-hidden="true" />
                  <span>{control}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 border-b border-slate-200 bg-white">
        <div className="container grid gap-10 py-14 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,1.38fr)] lg:gap-16 lg:py-20">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <SectionHeading
              eyebrow="Buyer questions"
              title="Shipping-label sourcing FAQ"
              description="Clear answers for printer fit, format, adhesive, barcode performance, samples and repeat supply."
            />
            <Link
              href="#inquiry"
              className="mt-7 inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-brand-navy transition-colors hover:text-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              Ask about your printer fleet
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="border-t border-slate-300">
            {faqs.map(({ question, answer }, index) => (
              <details key={question} className="group border-b border-slate-300">
                <summary className="flex cursor-pointer list-none items-start gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500">
                  <span className="mt-0.5 font-sora text-sm font-semibold text-amber-700">{String(index + 1).padStart(2, "0")}</span>
                  <span className="flex-1 font-sora text-base font-semibold leading-snug text-slate-950">{question}</span>
                  <span className="text-xl leading-none text-slate-400 group-open:text-amber-700" aria-hidden="true">+</span>
                </summary>
                <p className="pb-6 pl-10 pr-8 text-sm leading-relaxed text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Related shipping label products" className="border-b border-slate-200 bg-slate-50">
        <div className="container py-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-950">Continue with a confirmed product route</p>
              <p className="mt-1 text-sm text-slate-600">Use the specification page or compare the wider thermal-label range.</p>
            </div>
            <nav aria-label="Related products" className="flex flex-wrap gap-x-6 gap-y-3">
              {[
                { label: "4x6 shipping label specification", href: "/products/thermal-labels/4x6in" },
                { label: "Blank thermal labels", href: "/products/thermal-labels/blank" },
                { label: "Barcode labels", href: "/products/barcode-labels" },
  { label: "Custom printed thermal labels", href: "/products/custom-printed-thermal-labels" },
                { label: "Thermal labels product range", href: "/products/thermal-labels" },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy transition-colors hover:text-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500">
                  {item.label}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </section>

      <section id="inquiry" className="scroll-mt-24 bg-slate-50">
        <div className="container py-14 lg:py-20">
          <div className="grid overflow-hidden border border-slate-300 bg-white lg:grid-cols-2">
            <div className="flex flex-col bg-brand-navy p-7 text-white sm:p-9 lg:p-10">
              <div className="flex items-center gap-2 text-amber-300">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase">Shipping label quote</span>
              </div>
              <h2 className="mt-5 font-sora text-3xl font-semibold leading-tight text-white lg:text-[2.6rem]">
                Send the details that determine reliable feeding and scans
              </h2>
              <p className="mt-4 max-w-[54ch] text-base leading-relaxed text-slate-300">
                We will confirm the construction, printer fit, sample route, packing plan, MOQ and lead time from your operating specification.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Printer and media-path review",
                  "Real-surface adhesive sample",
                  "Carton and pallet calculation",
                  "Repeat-SKU specification",
                ].map((item) => (
                  <div key={item} className="flex gap-3 border-t border-white/20 pt-4 text-sm text-slate-200">
                    <PackageCheck className="h-4 w-4 shrink-0 text-amber-300" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href={whatsappUrl}
                className="mt-9 inline-flex w-fit items-center gap-2 whitespace-nowrap border border-amber-300 px-5 py-3 text-sm font-semibold text-amber-200 transition-colors hover:bg-amber-300 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
              >
                Send printer model on WhatsApp
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="p-7 sm:p-9 lg:p-10">
              <InquiryForm
                compact
                productName="bulk direct thermal shipping labels"
                initialMessage={"Printer brand / model:\nLabel size:\nRoll or fanfold:\nCore / roll diameter / label count:\nGap / perforation / unwind:\nParcel surface / temperature:\nDaily or monthly volume:\nCarton / pallet / private label:\nDestination / Incoterm:"}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
