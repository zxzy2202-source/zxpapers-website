import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookCheck,
  BookOpen,
  Boxes,
  Check,
  ChevronDown,
  FileCheck2,
  Hash,
  Layers3,
  MessageSquare,
  PackageCheck,
  Palette,
  Phone,
  Printer,
  ShieldCheck,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import InquiryForm from "@/components/shared/InquiryForm";

interface BookProgram {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  useCase: string;
}

interface ResaleApplication {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

interface NcrReceiptBooksCatalogPageProps {
  heroImage: string;
  overviewImage: string;
  buyerRiskImage: string;
  productionImage: string;
  packingImage: string;
  whatsappHref: string;
  bookPrograms: BookProgram[];
  applications: ResaleApplication[];
  faqs: Array<{ q: string; a: string }>;
}

function SectionIntro({ label, title, description }: { label?: string; title: string; description: string }) {
  return (
    <div className="max-w-3xl">
      {label ? <p className="text-xs font-semibold uppercase tracking-normal text-amber-700">{label}</p> : null}
      <h2 className={`${label ? "mt-3" : ""} text-pretty font-sora text-3xl font-semibold leading-tight text-slate-950 lg:text-[2.5rem]`}>
        {title}
      </h2>
      <p className="mt-4 max-w-[65ch] text-pretty text-base leading-relaxed text-slate-600 lg:text-lg">{description}</p>
    </div>
  );
}

const focusLink = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2";

const orderFacts = [
  { icon: <Layers3 />, label: "Copy sets", value: "2-part or 3-part" },
  { icon: <BookOpen />, label: "Book format", value: "50, 100, or custom sets" },
  { icon: <Hash />, label: "Production control", value: "Numbered and perforated" },
  { icon: <PackageCheck />, label: "Channel program", value: "Private label and repeat SKU" },
];

const quoteChecklist = [
  "Buyer type and resale program",
  "2-part or 3-part copy roles",
  "Size and sets per book",
  "Binding, cover, and perforation",
  "Number range and artwork",
  "Quantity, packing, destination, and repeat-order plan",
];

const channelBuyers = [
  {
    icon: <Boxes />,
    title: "Overseas Distributors",
    text: "Build a resale range with approved book specifications, distributor covers, stable carton data, and repeat-order references.",
    focus: "Range planning, private label, carton data, and repeat SKUs",
  },
  {
    icon: <Printer />,
    title: "Commercial Printing Companies",
    text: "Outsource collating, numbering, perforation, and binding when a job exceeds internal finishing capacity or needs controlled production.",
    focus: "Overflow capacity, copy clarity, numbering, and finishing",
  },
  {
    icon: <PackageCheck />,
    title: "Wholesale Procurement Buyers",
    text: "Standardize receipt books for branches, institutions, or recurring programs with controlled number allocation and packing.",
    focus: "Volume pricing, branch allocation, approved specifications, and delivery terms",
  },
];

const rejectionRisks = [
  { title: "Lower Copies Are Faint", text: "The paper sequence or pressure transfer was not tested before production." },
  { title: "Number Ranges Cannot Be Reconciled", text: "Skipped, duplicated, or incorrectly allocated numbers create claims and rework." },
  { title: "Binding Changes Between Orders", text: "Book count, cover, perforation, or staple position drifts from the approved sample." },
  { title: "Repeat Orders Do Not Match", text: "Artwork, numbering, and packing were not controlled under one approved SKU." },
];

const copyPlans = [
  {
    title: "2-Part Duplicate Books",
    description: "The customer receives the original while one bound copy remains with the seller or service provider.",
    copies: [
      { color: "bg-white", label: "White original", goesTo: "Customer" },
      { color: "bg-pink-200", label: "Pink copy", goesTo: "Office or seller" },
    ],
    bestFor: "Retail counters, field sales, deposits, simple service payments, and general receipts",
    href: "/products/ncr-forms/2-part",
  },
  {
    title: "3-Part Triplicate Books",
    description: "A third copy supports accounts, warehouse, branch control, audit, or another record holder.",
    copies: [
      { color: "bg-white", label: "White original", goesTo: "Customer" },
      { color: "bg-pink-200", label: "Pink copy", goesTo: "Accounts" },
      { color: "bg-yellow-200", label: "Yellow copy", goesTo: "File or operations" },
    ],
    bestFor: "Multi-department sales, rentals, transport, donation programs, and controlled branch records",
    href: "/products/ncr-forms/3-part",
  },
];

export const receiptBookOrderSteps = [
  {
    title: "Send the Current Sample or Artwork",
    text: "Share a receipt book, PDF, photo, spreadsheet, or field list with the intended quantity and destination.",
  },
  {
    title: "Approve Layout, Copy Roles, and Number Rules",
    text: "Confirm fields, copy labels, start and end numbers, book allocation, colors, perforation, binding, and packing.",
  },
  {
    title: "Verify the First Production Run",
    text: "Check lower-copy readability, number continuity, tear-off position, sets per book, covers, labels, and cartons.",
  },
  {
    title: "Reorder the Approved SKU",
    text: "Use the artwork code, number range, binding, book count, and packing reference for consistent repeat orders.",
  },
];

export const receiptBookSpecifications = [
  { label: "Copies", value: "2-part duplicate or 3-part triplicate carbonless sets" },
  { label: "Sets per book", value: "50, 100, or a custom count" },
  { label: "Sizes", value: "A5, A6, 1/3 A4, DL, letter, or custom dimensions" },
  { label: "Paper", value: "CB / CFB / CF carbonless paper, commonly 50-60 gsm per ply" },
  { label: "Numbering", value: "Sequential ranges, branch allocation, barcode, or QR references" },
  { label: "Finishing", value: "Glue, staple, stitch, wire binding, perforation, and wraparound covers" },
  { label: "Printing", value: "1-4 colors, logo, fields, terms, languages, and copy labels" },
  { label: "Packing", value: "Book labels, shrink wrapping, inner cartons, and private-label export cartons" },
];

const layerTerms = [
  { term: "CB", name: "Coated Back", text: "The top sheet receives handwriting and transfers the image to the sheet below." },
  { term: "CFB", name: "Coated Front and Back", text: "The middle sheet receives the image and transfers it to the final copy." },
  { term: "CF", name: "Coated Front", text: "The bottom sheet receives the transferred image and completes the receipt set." },
];

const qualityControls = [
  { icon: <FileCheck2 />, title: "Transfer Test", text: "Confirm handwriting pressure creates readable lower copies before the production run." },
  { icon: <Hash />, title: "Number-Range Check", text: "Approve start and end numbers and inspect for missing or duplicated sequences." },
  { icon: <BookCheck />, title: "Book-Count Check", text: "Verify sets per book, books per wrap, and books per carton against the order." },
  { icon: <Palette />, title: "Copy-Sequence Check", text: "Confirm white, pink, yellow, blue, or green sheets match the intended recipients." },
];

export default function NcrReceiptBooksCatalogPage({
  heroImage,
  overviewImage,
  buyerRiskImage,
  productionImage,
  packingImage,
  whatsappHref,
  bookPrograms,
  applications,
  faqs,
}: NcrReceiptBooksCatalogPageProps) {
  const [primaryProgram, ...secondaryPrograms] = bookPrograms;

  return (
    <Layout>
      <PageHero
        bgImage={heroImage}
        overlayDir="left"
        overlayOpacity={68}
        minHeight="min-h-[400px]"
        compact
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "NCR Forms", href: "/products/ncr-forms" },
          { label: "NCR Receipt Books" },
        ]}
        title={<>NCR Receipt Books for <span className="text-amber-400">Repeat Wholesale Orders</span></>}
        subtitle="Duplicate and triplicate books with controlled numbering, custom covers, private-label packing, and approved repeat specifications."
        ctas={[
          { label: "Build a Quote Brief", href: "#quote-guide", variant: "primary", icon: <MessageSquare className="h-4 w-4" aria-hidden="true" /> },
          { label: "WhatsApp", href: whatsappHref, variant: "whatsapp", icon: <Phone className="h-4 w-4" aria-hidden="true" />, external: true },
        ]}
      />

      <section className="border-b border-slate-200 bg-white" aria-label="NCR receipt book order overview">
        <div className="container py-5">
          <div className="grid grid-cols-2 border-l border-t border-slate-200 lg:grid-cols-4">
            {orderFacts.map((fact) => (
              <div key={fact.label} className="flex min-h-20 items-center gap-3 border-b border-r border-slate-200 px-4 py-3 sm:px-5">
                <span className="text-amber-700 [&_svg]:h-5 [&_svg]:w-5" aria-hidden="true">{fact.icon}</span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-slate-500">{fact.label}</p>
                  <p className="mt-1 text-sm font-semibold leading-snug text-slate-900">{fact.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container py-12 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-stretch lg:gap-14">
            <div className="relative min-h-80 overflow-hidden border border-slate-200 bg-white lg:min-h-full">
              <Image src={overviewImage} alt="Handwriting on a carbonless receipt form" fill sizes="(max-width: 1024px) 100vw, 44vw" className="object-cover" />
            </div>
            <div className="py-1">
              <SectionIntro
                label="Direct answer"
                title="What Are NCR Receipt Books?"
                description="NCR receipt books are bound carbonless receipt sets that transfer one handwritten entry to one or more copies without separate carbon paper. A 2-part book gives the customer an original and retains an office copy; a 3-part book adds an accounts, warehouse, or file copy."
              />
              <div className="mt-7 border-t border-slate-300 pt-6">
                <p className="text-xs font-semibold text-slate-500">Include these details for accurate pricing</p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {quoteChecklist.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-relaxed text-slate-700">
                      <Check className="mt-0.5 h-4 w-4 flex-none text-amber-700" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="#inquiry" className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-amber-700 ${focusLink}`}>
                  Build a Quote Brief <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="container py-12 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(240px,0.58fr)_minmax(0,1.42fr)] lg:gap-14">
            <SectionIntro
              title="Built for Distributors, Printers, and Repeat Wholesale Orders"
              description="The sourcing model changes by buyer type. Confirm whether you need a resale range, outsourced finishing, or an approved branch supply program."
            />
            <div className="border-t border-slate-300">
              {channelBuyers.map((buyer) => (
                <article key={buyer.title} className="grid gap-4 border-b border-slate-300 py-5 sm:grid-cols-[44px_0.8fr_1.1fr] sm:items-start sm:gap-6">
                  <span className="text-amber-700 [&_svg]:h-6 [&_svg]:w-6" aria-hidden="true">{buyer.icon}</span>
                  <div>
                    <h3 className="text-pretty font-sora text-lg font-semibold leading-tight text-slate-950">{buyer.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{buyer.text}</p>
                  </div>
                  <div className="border-l-2 border-amber-400 pl-4">
                    <p className="text-xs font-semibold text-slate-500">Buying focus</p>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-slate-800">{buyer.focus}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container py-12 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-stretch lg:gap-14">
            <div className="relative min-h-80 overflow-hidden border border-slate-200 bg-white lg:min-h-full">
              <Image src={buyerRiskImage} alt="Receipt records reviewed for copy quality and numbering" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
            </div>
            <div>
              <SectionIntro
                title="Why Channel Buyers Reject a Receipt Book Shipment"
                description="Most claims come from copy clarity, numbering, binding, or repeat-order controls that were not fixed before production."
              />
              <div className="mt-7 border-t border-slate-300">
                {rejectionRisks.map((risk) => (
                  <div key={risk.title} className="grid gap-2 border-b border-slate-300 py-4 sm:grid-cols-[0.78fr_1.22fr] sm:gap-6">
                    <h3 className="text-sm font-semibold leading-relaxed text-slate-950">{risk.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-600">{risk.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="copy-count" className="scroll-mt-24 border-y border-slate-200 bg-white">
        <div className="container py-12 lg:py-16">
          <SectionIntro
            title="Match the Copy Count to the Receipt Workflow"
            description="Count the people or departments that need an immediate record. An extra copy should have a clear recipient and business purpose."
          />
          <div className="mt-9 grid border-l border-t border-slate-300 lg:grid-cols-2">
            {copyPlans.map((plan) => (
              <article key={plan.title} className="flex flex-col border-b border-r border-slate-300 p-6 lg:p-7">
                <h3 className="font-sora text-2xl font-semibold leading-tight text-slate-950">{plan.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{plan.description}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {plan.copies.map((copy) => (
                    <div key={copy.label} className="min-w-0">
                      <span className={`block h-12 border border-slate-300 ${copy.color}`} aria-hidden="true" />
                      <p className="mt-2 text-xs font-semibold text-slate-900">{copy.label}</p>
                      <p className="mt-1 text-xs text-slate-500">{copy.goesTo}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 border-t border-slate-200 pt-4">
                  <p className="text-xs font-semibold text-slate-500">Common demand</p>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-slate-800">{plan.bestFor}</p>
                </div>
                <Link href={plan.href} className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-amber-700 ${focusLink}`}>
                  View {plan.title} Specifications <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container py-12 lg:py-16">
          <SectionIntro
            title="Build the Receipt Book Program Your Market Can Resell"
            description="Choose a standard duplicate or triplicate program, then add the cover, fields, number rules, and packing your customers expect."
          />
          {primaryProgram ? (
            <div className="mt-9 grid gap-5 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)]">
              <article className="grid overflow-hidden border border-slate-200 bg-white sm:grid-cols-[minmax(0,1.05fr)_minmax(260px,0.95fr)] lg:grid-cols-1">
                <div className="relative min-h-72 bg-slate-100 lg:min-h-80">
                  <Image src={primaryProgram.image} alt={primaryProgram.imageAlt} fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" />
                </div>
                <div className="flex flex-col p-6 lg:p-7">
                  <h3 className="font-sora text-2xl font-semibold leading-tight text-slate-950">{primaryProgram.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{primaryProgram.description}</p>
                  <p className="mt-5 border-l-[3px] border-amber-500 pl-4 text-sm font-medium leading-relaxed text-slate-800">{primaryProgram.useCase}</p>
                  <Link href={primaryProgram.href} className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-amber-700 ${focusLink}`}>
                    Review Program Requirements <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
              <div className="grid gap-5">
                {secondaryPrograms.map((program) => (
                  <article key={program.title} className="grid overflow-hidden border border-slate-200 bg-white sm:grid-cols-[minmax(150px,0.72fr)_minmax(0,1.28fr)]">
                    <div className="relative min-h-52 bg-slate-100 sm:min-h-full">
                      <Image src={program.image} alt={program.imageAlt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 38vw, 19vw" className="object-cover" />
                    </div>
                    <div className="flex min-w-0 flex-col p-5">
                      <h3 className="font-sora text-lg font-semibold leading-tight text-slate-950">{program.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{program.description}</p>
                      <p className="mt-3 text-xs font-medium leading-relaxed text-slate-700">{program.useCase}</p>
                      <Link href={program.href} className={`mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-amber-700 ${focusLink}`}>
                        View Requirements <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="container py-12 lg:py-16">
          <SectionIntro
            title="Help End Customers Choose the Right Receipt Book"
            description="These demand patterns help distributors and printers qualify the fields, copy roles, numbering, and terms required before quoting."
          />
          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {applications.map((application) => (
              <article key={application.title} className="grid overflow-hidden border border-slate-200 bg-white sm:grid-cols-[minmax(150px,0.72fr)_minmax(0,1.28fr)]">
                <div className="relative min-h-52 bg-slate-100 sm:min-h-full">
                  <Image src={application.image} alt={application.imageAlt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 38vw, 20vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-sora text-lg font-semibold leading-tight text-slate-950">{application.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{application.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="quote-guide" className="scroll-mt-24 bg-slate-50">
        <div className="container py-12 lg:py-16">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.76fr)_minmax(0,1.24fr)] lg:gap-16">
            <div>
              <SectionIntro
                label="Repeatable SKU"
                title="Approve One Specification, Then Reorder It Consistently"
                description="A useful wholesale specification links artwork, copy roles, numbering, binding, and packing under one reorder reference."
              />
              <ol className="mt-8 border-t border-slate-300">
                {receiptBookOrderSteps.map((item) => (
                  <li key={item.title} className="grid grid-cols-[24px_1fr] gap-3 border-b border-slate-300 py-4">
                    <Check className="mt-0.5 h-4 w-4 text-amber-700" aria-hidden="true" />
                    <div>
                      <h3 className="text-sm font-semibold text-slate-950">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h2 className="text-pretty font-sora text-3xl font-semibold leading-tight text-slate-950">Specifications Buyers Should Confirm</h2>
              <dl className="mt-7 grid border-l border-t border-slate-300 bg-white sm:grid-cols-2">
                {receiptBookSpecifications.map((item) => (
                  <div key={item.label} className="border-b border-r border-slate-300 p-4 sm:p-5">
                    <dt className="text-xs font-semibold text-slate-500">{item.label}</dt>
                    <dd className="mt-2 text-sm font-semibold leading-relaxed text-slate-900">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="container py-12 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-stretch lg:gap-14">
            <div className="relative min-h-80 overflow-hidden border border-slate-200 bg-slate-100 lg:min-h-full">
              <Image src={productionImage} alt="Factory production and quality inspection for numbered NCR receipt books" fill sizes="(max-width: 1024px) 100vw, 44vw" className="object-cover" />
            </div>
            <div>
              <SectionIntro
                label="Material and numbering control"
                title="Control Every Copy, Number Range, and Book Count"
                description="Readable copies depend on the correct paper sequence, transfer testing, controlled numbering, clean perforation, and verified book counts."
              />
              <dl className="mt-7 border-t border-slate-300">
                {layerTerms.map((item) => (
                  <div key={item.term} className="grid gap-2 border-b border-slate-300 py-4 sm:grid-cols-[135px_1fr] sm:gap-5">
                    <dt className="font-sora text-sm font-semibold text-slate-950">{item.term} <span className="font-normal text-slate-500">({item.name})</span></dt>
                    <dd className="text-sm leading-relaxed text-slate-600">{item.text}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {qualityControls.map((item) => (
                  <div key={item.title} className="grid grid-cols-[24px_1fr] gap-3">
                    <span className="text-amber-700 [&_svg]:h-5 [&_svg]:w-5" aria-hidden="true">{item.icon}</span>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-950">{item.title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-slate-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container py-12 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-stretch lg:gap-14">
            <div className="flex flex-col justify-center">
              <SectionIntro
                title="Prepare the Receipt Book SKU for Resale"
                description="Private-label programs need more than printed pages. Covers, book labels, wraps, carton marks, and branch allocation must stay consistent."
              />
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {[
                  "Distributor logo, cover artwork, and approved field layout",
                  "Book label with SKU, quantity, language, or branch reference",
                  "Shrink wrapping, inner packs, and books per export carton",
                  "Carton marks, pallet plan, destination labels, and repeat reference",
                ].map((item) => (
                  <p key={item} className="flex gap-2 text-sm leading-relaxed text-slate-700">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-amber-700" aria-hidden="true" />
                    {item}
                  </p>
                ))}
              </div>
              <Link href="/oem/packaging" className={`mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-amber-700 ${focusLink}`}>
                Review Private-Label Packing <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="relative min-h-80 overflow-hidden border border-slate-200 bg-white lg:min-h-full">
              <Image src={packingImage} alt="Private-label packing and export cartons for receipt book programs" fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="receipt-book-faq" className="scroll-mt-24 border-y border-slate-200 bg-white">
        <div className="container py-12 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(250px,0.62fr)_minmax(0,1.38fr)] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionIntro
                title="NCR Receipt Book Sourcing Questions"
                description="Direct answers on copy count, book size, numbering, binding, samples, private label, MOQ, lead time, and repeat orders."
              />
            </div>
            <div className="border-t border-slate-300">
              {faqs.map((faq, index) => (
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
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-300 pt-6 text-sm font-semibold text-brand-navy">
            <Link href="/products/custom-ncr-forms" className={`inline-flex items-center gap-2 hover:text-amber-700 ${focusLink}`}>Custom NCR Forms <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            <Link href="/products/ncr-invoice-books" className={`inline-flex items-center gap-2 hover:text-amber-700 ${focusLink}`}>NCR Invoice Books <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            <Link href="/products/delivery-note-forms" className={`inline-flex items-center gap-2 hover:text-amber-700 ${focusLink}`}>Delivery Note Forms <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            <Link href="/products/ncr-forms" className={`inline-flex items-center gap-2 hover:text-amber-700 ${focusLink}`}>NCR Forms and Carbonless Paper <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section id="inquiry" className="scroll-mt-24 bg-slate-50">
        <div className="container py-12 lg:py-16">
          <div className="grid overflow-hidden border border-slate-200 shadow-[0_18px_50px_rgba(15,23,42,0.09)] lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
            <div className="bg-brand-navy p-8 text-white lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-normal text-amber-300">Custom receipt-book quote</p>
              <h2 className="mt-3 text-pretty font-sora text-3xl font-semibold leading-tight lg:text-4xl">Build a Receipt Book SKU You Can Reorder</h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-300 lg:text-base">Send the copy count, size, sets per book, binding, numbering, artwork, quantity, packing, destination, and repeat-order plan.</p>
              <div className="mt-8 border-y border-white/15">
                {[
                  "2-part or 3-part copy roles and sheet colors",
                  "Book size, sets per book, cover, binding, and perforation",
                  "Start and end numbers, branch allocation, barcode, or QR rules",
                  "Private-label covers, labels, cartons, destination, and repeat plan",
                ].map((item) => (
                  <p key={item} className="flex gap-2 border-b border-white/15 py-3 text-sm text-slate-200 last:border-b-0">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-amber-400" aria-hidden="true" />
                    {item}
                  </p>
                ))}
              </div>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={`mt-7 inline-flex items-center gap-2 text-sm font-semibold text-amber-300 hover:text-amber-200 ${focusLink}`}>
                <Phone className="h-4 w-4" aria-hidden="true" />WhatsApp
              </a>
            </div>
            <div className="bg-white p-7 lg:p-9">
              <InquiryForm
                compact
                productName="private-label NCR receipt books"
                initialMessage={"Buyer type / resale program:\n2-part or 3-part copy roles:\nSize and sets per book:\nBinding / cover / perforation:\nNumber range / branch allocation:\nArtwork / colors / languages:\nQuantity / packing / destination:\nRepeat-order plan:"}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
