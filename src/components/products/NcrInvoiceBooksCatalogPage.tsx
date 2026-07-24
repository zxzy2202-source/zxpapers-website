import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookCheck,
  Boxes,
  Check,
  ChevronDown,
  Clock,
  FileCheck2,
  Hash,
  Layers3,
  MessageSquare,
  PackageCheck,
  Palette,
  Phone,
  Printer,
  Scissors,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import InquiryForm from "@/components/shared/InquiryForm";

interface InvoiceBookProgram {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  useCase: string;
}

interface InvoiceUseCase {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

interface NcrInvoiceBooksCatalogPageProps {
  heroImage: string;
  overviewImage: string;
  buyerRiskImage: string;
  productionImage: string;
  packingImage: string;
  whatsappHref: string;
  programs: InvoiceBookProgram[];
  useCases: InvoiceUseCase[];
  faqs: Array<{ q: string; a: string }>;
}

function SectionIntro({ id, label, title, description }: { id?: string; label?: string; title: string; description: string }) {
  return (
    <div className="max-w-3xl">
      {label ? <p className="text-xs font-semibold uppercase tracking-normal text-amber-700">{label}</p> : null}
      <h2 id={id} className={`${label ? "mt-3" : ""} text-pretty font-sora text-3xl font-semibold leading-tight text-slate-950 lg:text-[2.5rem]`}>{title}</h2>
      <p className="mt-4 max-w-[65ch] text-pretty text-base leading-relaxed text-slate-600 lg:text-lg">{description}</p>
    </div>
  );
}

const focusLink = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2";

const orderFacts = [
  { icon: <Layers3 />, label: "Copy Sets", value: "2-part or 3-part" },
  { icon: <Hash />, label: "Number Control", value: "Book, branch, carton, or SKU" },
  { icon: <PackageCheck />, label: "Supply Program", value: "Wholesale and private label" },
  { icon: <Clock />, label: "Standard Lead Time", value: "10-18 business days" },
];

const quoteChecklist = [
  "Buyer type, destination market, and resale or print program",
  "2-part or 3-part copy roles and preferred sheet colors",
  "Finished size, orientation, sets per book, and order quantity",
  "Start and end numbers, branch allocation, barcode, or QR rules",
  "Perforation, binding, cover, writing shield, and print colors",
  "Artwork, languages, private-label packing, destination, and reorder plan",
];

const buyerRisks = [
  {
    icon: <Layers3 />,
    title: "Weak copy transfer",
    text: "Lower sheets become hard to read when paper sequence, coating, or writing-pressure tests are not confirmed before production.",
  },
  {
    icon: <Hash />,
    title: "Broken number ranges",
    text: "Missing, duplicated, or incorrectly allocated numbers disrupt branch control, audit trails, and customer confidence.",
  },
  {
    icon: <Scissors />,
    title: "Poor tear-off or binding",
    text: "Incorrect perforation, staple position, glue, or cover construction can damage retained copies and slow daily use.",
  },
  {
    icon: <BookCheck />,
    title: "Inconsistent repeat orders",
    text: "Artwork, copy roles, paper, numbering, packing, and carton data must stay linked to one approved reorder reference.",
  },
];

const copyPlans = [
  {
    title: "2-Part Duplicate Invoice Books",
    description: "One original and one retained copy for straightforward sales and account records.",
    copies: [
      { label: "White CB", goesTo: "Customer original", color: "bg-white" },
      { label: "Yellow or pink CF", goesTo: "Accounts copy", color: "bg-yellow-100" },
    ],
    bestFor: "Retail invoicing, service businesses, field sales, simple account records, and high-volume stationery ranges.",
    href: "/products/ncr-forms/2-part",
  },
  {
    title: "3-Part Triplicate Invoice Books",
    description: "One original and two controlled copies when accounts, operations, warehouse, or another department needs a record.",
    copies: [
      { label: "White CB", goesTo: "Customer original", color: "bg-white" },
      { label: "Pink CFB", goesTo: "Accounts copy", color: "bg-pink-100" },
      { label: "Yellow CF", goesTo: "File or operations", color: "bg-yellow-100" },
    ],
    bestFor: "Wholesale, distribution, logistics, repair, rentals, multi-branch operations, and controlled institutional records.",
    href: "/products/ncr-forms/3-part",
  },
];

export const invoiceBookOrderSteps = [
  { title: "Define the copy workflow", text: "State who receives the original and every retained copy." },
  { title: "Confirm the book format", text: "Approve size, sets per book, binding, cover, perforation, and writing shield." },
  { title: "Approve artwork and number rules", text: "Check fields, languages, print colors, start number, allocation, barcode, or QR requirements." },
  { title: "Approve proof and packing", text: "Confirm copy transfer, tear-off, labels, wraps, inner packs, cartons, and destination marks." },
  { title: "Release and record the SKU", text: "Link the approved specification to one reference for production and repeat orders." },
];

export const invoiceBookSpecifications = [
  { label: "Copy configuration", value: "2-part duplicate or 3-part triplicate; other configurations reviewed by application" },
  { label: "Carbonless paper", value: "CB top, CFB middle, and CF bottom sheets; commonly 50-60 gsm per ply" },
  { label: "Finished sizes", value: "A4, A5, A6, letter, DL, 1/3 A4, or custom dimensions" },
  { label: "Sets per book", value: "Commonly 25, 50, or 100 sets; custom counts available" },
  { label: "Printing", value: "Buyer-approved invoice layout, logos, tables, terms, copy labels, and multilingual text" },
  { label: "Numbering", value: "Sequential ranges, book numbers, branch blocks, barcodes, QR codes, or SKU references" },
  { label: "Finishing", value: "Padding, glue, staple, stitching, wire binding, perforation, wraparound or writing-shield covers" },
  { label: "Packing", value: "Shrink wrap, inner packs, book labels, private-label cartons, carton marks, and pallet plans" },
  { label: "MOQ", value: "Confirmed after size, colors, numbering, binding, packing, and total quantity are reviewed" },
  { label: "Lead time", value: "Typically 10-18 business days after proof approval; exact timing depends on specification" },
];

const qualityControls = [
  { icon: <FileCheck2 />, title: "Proof Approval", text: "Verify layout, copy labels, languages, number range, perforation, cover, and packing references." },
  { icon: <Layers3 />, title: "Transfer Test", text: "Test normal handwriting pressure and inspect the readability of every lower copy." },
  { icon: <Hash />, title: "Number-Range Check", text: "Check start and end numbers and inspect for gaps, duplicates, and allocation errors." },
  { icon: <Printer />, title: "Print Registration", text: "Inspect tables, small text, logos, codes, and number alignment across the set." },
  { icon: <Scissors />, title: "Tear-Off Test", text: "Check perforation depth, clean removal, staple position, glue, and retained-copy protection." },
  { icon: <BookCheck />, title: "Packing Count", text: "Verify sets per book, books per wrap, books per carton, labels, and carton marks." },
];

const repeatControls = [
  "Approved artwork, copy sequence, paper grade, and sheet colors",
  "Start and end numbers, branch blocks, carton ranges, and book labels",
  "Binding, perforation, cover, writing shield, and sets per book",
  "Private-label wraps, inner packs, carton data, pallet plan, and destination marks",
];

function ProcurementFacts() {
  return (
    <section className="border-b border-slate-200 bg-white" aria-label="NCR invoice book order overview">
      <div className="container py-5">
        <div className="grid grid-cols-2 border-l border-t border-slate-200 lg:grid-cols-4">
          {orderFacts.map((fact) => (
            <div key={fact.label} className="flex min-h-20 items-center gap-3 border-b border-r border-slate-200 px-4 py-3 sm:px-5">
              <span className="text-amber-700 [&_svg]:h-5 [&_svg]:w-5" aria-hidden="true">{fact.icon}</span>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-normal text-slate-500">{fact.label}</p>
                <p className="mt-1 text-sm font-semibold leading-snug text-slate-900">{fact.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramGrid({ programs }: { programs: InvoiceBookProgram[] }) {
  return (
    <div className="mt-9 grid gap-5 sm:grid-cols-2">
      {programs.map((program) => (
        <article key={program.title} className="grid overflow-hidden border border-slate-200 bg-white sm:grid-cols-[minmax(150px,0.72fr)_minmax(0,1.28fr)]">
          <div className="relative min-h-56 bg-slate-100 sm:min-h-full">
            <Image src={program.image} alt={program.imageAlt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 38vw, 20vw" className="object-cover" />
          </div>
          <div className="flex min-w-0 flex-col p-5">
            <h3 className="text-pretty font-sora text-lg font-semibold leading-tight text-slate-950">{program.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{program.description}</p>
            <p className="mt-4 border-l-2 border-amber-400 pl-3 text-xs font-medium leading-relaxed text-slate-700">{program.useCase}</p>
            <Link href={program.href} className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-amber-700 ${focusLink}`}>
              View Requirements <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}

function FaqSection({ faqs }: { faqs: Array<{ q: string; a: string }> }) {
  return (
    <section id="invoice-book-faq" className="scroll-mt-24 border-y border-slate-200 bg-white" aria-labelledby="faq-heading">
      <div className="container py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(250px,0.62fr)_minmax(0,1.38fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-normal text-amber-700">FAQ</p>
              <h2 id="faq-heading" className="mt-3 text-pretty font-sora text-3xl font-semibold leading-tight text-slate-950 lg:text-[2.5rem]">NCR Invoice Book Sourcing Questions</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">Direct answers on copy count, quotation inputs, numbering, binding, proofs, private label, MOQ, lead time, and repeat orders.</p>
            </div>
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
        <nav className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-300 pt-6 text-sm font-semibold text-brand-navy" aria-label="Related NCR products">
          <Link href="/products/ncr-forms" className={`inline-flex items-center gap-2 hover:text-amber-700 ${focusLink}`}>NCR Forms and Carbonless Paper <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          <Link href="/products/custom-ncr-forms" className={`inline-flex items-center gap-2 hover:text-amber-700 ${focusLink}`}>Custom NCR Forms <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          <Link href="/products/ncr-receipt-books" className={`inline-flex items-center gap-2 hover:text-amber-700 ${focusLink}`}>NCR Receipt Books <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          <Link href="/products/delivery-note-forms" className={`inline-flex items-center gap-2 hover:text-amber-700 ${focusLink}`}>Delivery Note Forms <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </nav>
      </div>
    </section>
  );
}

export default function NcrInvoiceBooksCatalogPage({
  heroImage,
  overviewImage,
  buyerRiskImage,
  productionImage,
  packingImage,
  whatsappHref,
  programs,
  useCases,
  faqs,
}: NcrInvoiceBooksCatalogPageProps) {
  return (
    <Layout>
      <PageHero
        bgImage={heroImage}
        bgImageAlt="ZhixinPaper NCR carbonless invoice books — factory custom manufacturing and wholesale supply"
        overlayDir="left"
        overlayOpacity={68}
        minHeight="min-h-[400px]"
        compact
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "NCR Forms", href: "/products/ncr-forms" },
          { label: "NCR Invoice Books" },
        ]}
        badge={{ text: "Wholesale Carbonless Invoice Books", color: "amber" }}
        title={<>Wholesale NCR Invoice Books for <span className="text-amber-400">Controlled, Repeatable Supply</span></>}
        subtitle="Custom duplicate and triplicate invoice books with controlled numbering, approved binding, private-label packing, and repeat-order specifications for overseas distributors and commercial printers."
        ctas={[
          { label: "Build an Invoice Book Quote", href: "#quote-guide", variant: "primary", icon: <MessageSquare className="h-4 w-4" aria-hidden="true" /> },
          { label: "WhatsApp Sales", href: whatsappHref, variant: "whatsapp", icon: <Phone className="h-4 w-4" aria-hidden="true" />, external: true },
        ]}
      />

      <ProcurementFacts />

      <section className="bg-slate-50" aria-labelledby="invoice-book-answer">
        <div className="container py-12 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-stretch lg:gap-14">
            <div className="relative min-h-80 overflow-hidden border border-slate-200 bg-white lg:min-h-full">
              <Image src={overviewImage} alt="Custom printed duplicate and triplicate NCR invoice books" fill sizes="(max-width: 1024px) 100vw, 44vw" className="object-cover" priority />
            </div>
            <div className="py-1">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-normal text-amber-700">Direct answer</p>
                <h2 id="invoice-book-answer" className="mt-3 text-pretty font-sora text-3xl font-semibold leading-tight text-slate-950 lg:text-[2.5rem]">What is an NCR invoice book?</h2>
                <p className="mt-4 max-w-[65ch] text-pretty text-base leading-relaxed text-slate-600 lg:text-lg">An NCR invoice book is a bound set of carbonless invoice forms. Writing on the top sheet transfers the same information to the coated copies below, creating a customer original and one or more controlled records without separate carbon paper. Wholesale buyers can specify the copy roles, fields, numbering, binding, cover, and private-label packing.</p>
              </div>
              <div className="mt-7 border-t border-slate-300 pt-6">
                <p className="text-xs font-semibold uppercase tracking-normal text-slate-500">Include these details for accurate pricing</p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {quoteChecklist.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-relaxed text-slate-700">
                      <Check className="mt-0.5 h-4 w-4 flex-none text-amber-700" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="#inquiry" className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-amber-700 ${focusLink}`}>
                  Send your invoice book specification <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white" aria-labelledby="buyer-risks">
        <div className="container py-12 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-stretch lg:gap-14">
            <div>
              <SectionIntro id="buyer-risks" label="Buyer risk control" title="Why Channel Buyers Reject an Invoice Book Shipment" description="Most claims come from transfer quality, numbering, tear-off, binding, or repeat-order controls that were not fixed before production." />
              <div className="mt-7 border-t border-slate-300">
                {buyerRisks.map((risk) => (
                  <div key={risk.title} className="grid grid-cols-[24px_1fr] gap-3 border-b border-slate-300 py-4">
                    <span className="text-amber-700 [&_svg]:h-5 [&_svg]:w-5" aria-hidden="true">{risk.icon}</span>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-950">{risk.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{risk.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-80 overflow-hidden border border-slate-200 bg-slate-100 lg:min-h-full">
              <Image src={buyerRiskImage} alt="Invoice records reviewed for copy quality and number control" fill sizes="(max-width: 1024px) 100vw, 46vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50" aria-labelledby="programs">
        <div className="container py-12 lg:py-16">
          <SectionIntro id="programs" label="Wholesale programs" title="Build the Invoice Book Range Your Market Can Reorder" description="Start with a duplicate or triplicate program, then control the fields, number ranges, covers, packing, and reorder reference required by your channel." />
          <ProgramGrid programs={programs} />
        </div>
      </section>

      <section id="copy-count" className="scroll-mt-24 border-y border-slate-200 bg-white" aria-labelledby="copy-count-heading">
        <div className="container py-12 lg:py-16">
          <SectionIntro id="copy-count-heading" title="Choose 2-Part or 3-Part by Copy Workflow" description="Count the people or departments that need an immediate invoice record. Every extra copy should have a named recipient and business purpose." />
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
                <p className="mt-6 border-t border-slate-200 pt-4 text-sm font-medium leading-relaxed text-slate-800"><span className="text-xs font-semibold text-slate-500">Common demand: </span>{plan.bestFor}</p>
                <Link href={plan.href} className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-amber-700 ${focusLink}`}>View Specifications <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="quote-guide" className="scroll-mt-24 bg-slate-50" aria-labelledby="quote-guide-heading">
        <div className="container py-12 lg:py-16">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.76fr)_minmax(0,1.24fr)] lg:gap-16">
            <div>
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-normal text-amber-700">Invoice Book Quote Brief</p>
                <h2 id="quote-guide-heading" className="mt-3 text-pretty font-sora text-3xl font-semibold leading-tight text-slate-950 lg:text-[2.5rem]">Approve One Specification, Then Reorder It Consistently</h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600 lg:text-lg">A useful wholesale specification links artwork, copy roles, number rules, binding, packing, and destination data under one reorder reference.</p>
              </div>
              <ol className="mt-8 border-t border-slate-300">
                {invoiceBookOrderSteps.map((item) => (
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
            <div id="specifications">
              <h2 className="text-pretty font-sora text-3xl font-semibold leading-tight text-slate-950">Specifications Buyers Should Confirm</h2>
              <dl className="mt-7 grid border-l border-t border-slate-300 bg-white sm:grid-cols-2">
                {invoiceBookSpecifications.map((item) => (
                  <div key={item.label} className="border-b border-r border-slate-300 p-4 sm:p-5">
                    <dt className="text-xs font-semibold text-slate-500">{item.label}</dt>
                    <dd className="mt-2 text-sm font-semibold leading-relaxed text-slate-900">{item.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-xs leading-relaxed text-slate-500">Invoice layouts are produced from buyer-supplied and buyer-approved artwork. Buyers should confirm local tax, invoicing, and recordkeeping requirements before proof approval.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white" aria-labelledby="production-control">
        <div className="container py-12 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-stretch lg:gap-14">
            <div className="relative min-h-80 overflow-hidden border border-slate-200 bg-slate-100 lg:min-h-full">
              <Image src={productionImage} alt="Factory production and quality inspection for numbered NCR invoice books" fill sizes="(max-width: 1024px) 100vw, 44vw" className="object-cover" />
            </div>
            <div>
              <SectionIntro id="production-control" label="Production and quality control" title="Control Every Copy, Number Range, and Book Count" description="Readable copies and reliable repeat orders depend on the correct paper sequence, transfer testing, controlled numbering, clean perforation, and verified packing counts." />
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {qualityControls.map((item) => (
                  <div key={item.title} className="grid grid-cols-[24px_1fr] gap-3 border-t border-slate-300 pt-4">
                    <span className="text-amber-700 [&_svg]:h-5 [&_svg]:w-5" aria-hidden="true">{item.icon}</span>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-950">{item.title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-slate-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/manufacturing/quality-control" className={`mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-amber-700 ${focusLink}`}>Review Quality Control <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50" aria-labelledby="repeat-orders">
        <div className="container py-12 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-stretch lg:gap-14">
            <div className="flex flex-col justify-center">
              <SectionIntro id="repeat-orders" label="Private label and reorder control" title="Prepare the Invoice Book SKU for Resale" description="Covers, book labels, number ranges, wraps, carton marks, and branch allocation must stay linked to the approved invoice specification." />
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {repeatControls.map((item) => (
                  <p key={item} className="flex gap-2 text-sm leading-relaxed text-slate-700">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-amber-700" aria-hidden="true" />{item}
                  </p>
                ))}
              </div>
              <Link href="/oem/packaging" className={`mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-amber-700 ${focusLink}`}>Review Private-Label Packing <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            </div>
            <div className="relative min-h-80 overflow-hidden border border-slate-200 bg-white lg:min-h-full">
              <Image src={packingImage} alt="Private-label packing and export cartons for invoice book programs" fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white" aria-labelledby="use-cases">
        <div className="container py-12 lg:py-16">
          <SectionIntro id="use-cases" label="Channel demand" title="Invoice Book Programs for Resale and Outsourced Production" description="These demand patterns help distributors and printers qualify the fields, copy roles, number controls, binding, and packing required before quoting." />
          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {useCases.map((item) => (
              <article key={item.title} className="grid overflow-hidden border border-slate-200 bg-white sm:grid-cols-[minmax(150px,0.72fr)_minmax(0,1.28fr)]">
                <div className="relative min-h-52 bg-slate-100 sm:min-h-full">
                  <Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 38vw, 20vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-sora text-lg font-semibold leading-tight text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} />

      <section id="inquiry" className="scroll-mt-24 bg-slate-50" aria-labelledby="inquiry-heading">
        <div className="container py-12 lg:py-16">
          <div className="grid overflow-hidden border border-slate-200 shadow-[0_18px_50px_rgba(15,23,42,0.09)] lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
            <div className="bg-brand-navy p-8 text-white lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-normal text-amber-300">Wholesale invoice-book quote</p>
              <h2 id="inquiry-heading" className="mt-3 text-pretty font-sora text-3xl font-semibold leading-tight lg:text-4xl">Build an Invoice Book SKU You Can Reorder</h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-300 lg:text-base">Send the copy roles, size, sets per book, binding, number rules, artwork, quantity, packing, destination, and repeat-order plan.</p>
              <div className="mt-8 border-y border-white/15">
                {[
                  "2-part or 3-part copy roles and sheet colors",
                  "Book size, sets per book, cover, binding, and perforation",
                  "Start and end numbers, branch allocation, barcode, or QR rules",
                  "Private-label covers, labels, cartons, destination, and repeat plan",
                ].map((item) => (
                  <p key={item} className="flex gap-2 border-b border-white/15 py-3 text-sm text-slate-200 last:border-b-0">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-amber-400" aria-hidden="true" />{item}
                  </p>
                ))}
              </div>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={`mt-7 inline-flex items-center gap-2 text-sm font-semibold text-amber-300 hover:text-amber-200 ${focusLink}`}>
                <Phone className="h-4 w-4" aria-hidden="true" />Send the Specification on WhatsApp
              </a>
            </div>
            <div className="bg-white p-7 lg:p-9">
              <InquiryForm
                compact
                productName="wholesale NCR invoice books"
                initialMessage={"Buyer type / resale program:\n2-part or 3-part copy roles:\nSize and sets per book:\nBinding / cover / perforation:\nNumber range / branch allocation:\nArtwork / colors / languages:\nQuantity / packing / destination:\nRepeat-order plan:"}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
