import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  Check,
  ChevronDown,
  Clock,
  FileCheck2,
  FileStack,
  Layers3,
  MessageSquare,
  PackageCheck,
  Palette,
  Phone,
  Printer,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import InquiryForm from "@/components/shared/InquiryForm";

interface CopyItem {
  color: string;
  goesTo: string;
}

interface PartItem {
  label: string;
  href: string;
  badge?: string;
  desc: string;
  copies: CopyItem[];
  bestFor: string[];
}

interface FormatLink {
  label: string;
  href: string;
}

interface FormatItem {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  links: FormatLink[];
}

interface ApplicationItem {
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
}

interface NcrFormsCatalogPageProps {
  heroImage: string;
  overviewImage: string;
  productionImage: string;
  whatsappHref: string;
  parts: PartItem[];
  formats: FormatItem[];
  applications: ApplicationItem[];
  faqs: Array<{ q: string; a: string }>;
}

function SectionIntro({ label, title, description }: { label: string; title: string; description: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-normal text-amber-700">{label}</p>
      <h2 className="mt-3 text-pretty font-sora text-3xl font-semibold leading-tight text-slate-950 lg:text-[2.5rem]">{title}</h2>
      <p className="mt-4 max-w-[65ch] text-pretty text-base leading-relaxed text-slate-600 lg:text-lg">{description}</p>
    </div>
  );
}

const orderFacts = [
  { icon: <Layers3 />, label: "Product range", value: "2-part to 5+ part" },
  { icon: <FileStack />, label: "Supply options", value: "NCR paper & finished forms" },
  { icon: <PackageCheck />, label: "Channel programs", value: "Wholesale & private label" },
  { icon: <Clock />, label: "Standard lead time", value: "10-18 business days" },
];

const quoteChecklist = [
  "Buyer type: distributor, commercial printer, or wholesale program",
  "Required product range, document type, and copy distribution",
  "Number of parts, sheet colors, size, and orientation",
  "Loose sets, pads, books, or continuous computer forms",
  "Artwork, languages, numbering, barcode, and perforation",
  "Initial quantity, repeat-order plan, packing, and destination",
];

const channelBuyers = [
  {
    icon: <Boxes />,
    title: "Overseas Distributors",
    text: "Build a resale range across loose forms, receipt books, invoice books, delivery notes, and continuous forms with export cartons and private-label packing.",
    focus: "Range planning, repeat SKUs, carton data, and consolidated shipping",
  },
  {
    icon: <Printer />,
    title: "Commercial Printing Companies",
    text: "Source plain CB, CFB, and CF paper in sheets or reams, or outsource finished printed forms when collating, numbering, and binding capacity is required.",
    focus: "Paper grade, sheet size, copy clarity, print testing, and finishing",
  },
  {
    icon: <PackageCheck />,
    title: "Wholesale Procurement Buyers",
    text: "Compare formats, MOQ, packing, and production terms for multi-branch, institutional, or recurring supply programs from one factory source.",
    focus: "Volume pricing, approved specifications, reorder references, and delivery terms",
  },
];

const orderSteps = [
  { step: "01", title: "Map the workflow", text: "Define who writes or prints the form and who keeps each copy." },
  { step: "02", title: "Choose the copy set", text: "Select 2-part, 3-part, 4-part, or a multi-part configuration." },
  { step: "03", title: "Confirm the format", text: "Specify size, loose sets, pads, books, continuous form, and binding." },
  { step: "04", title: "Approve the artwork", text: "Check fields, logo, languages, numbering, copy labels, and perforation." },
  { step: "05", title: "Release production", text: "Confirm quantity, packing, delivery terms, and the approved proof." },
];

const customOptions = [
  { label: "Paper system", value: "CB top sheet, CFB middle sheets, and CF bottom sheet" },
  { label: "Paper weight", value: "Commonly 50-60 gsm per ply; other grades reviewed by application" },
  { label: "Sizes", value: "A4, A5, A6, letter, DL, or fully custom dimensions" },
  { label: "Printing", value: "1-4 colors, logos, tables, multilingual text, terms, and copy labels" },
  { label: "Tracking", value: "Sequential numbering, barcodes, QR codes, or system reference fields" },
  { label: "Finishing", value: "Glue, padding, stitching, wire binding, perforation, and wraparound covers" },
  { label: "Packing", value: "Packed by set, pad, book, inner carton, or private-label export carton" },
  { label: "Commercial terms", value: "MOQ and lead time depend on size, print colors, numbering, and finishing" },
];

const layerTerms = [
  { term: "CB", name: "Coated Back", text: "The top sheet receives handwriting or impact printing and transfers the image downward." },
  { term: "CFB", name: "Coated Front and Back", text: "Middle sheets receive an image from above and transfer it to the next sheet." },
  { term: "CF", name: "Coated Front", text: "The final sheet receives the transferred image and completes the copy set." },
];

function copyColorClass(color: string) {
  const value = color.toLowerCase();
  if (value.includes("pink")) return "bg-pink-200";
  if (value.includes("yellow")) return "bg-yellow-200";
  if (value.includes("blue")) return "bg-sky-200";
  if (value.includes("green")) return "bg-emerald-200";
  return "bg-white";
}

const focusLink = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2";

export default function NcrFormsCatalogPage({
  heroImage,
  overviewImage,
  productionImage,
  whatsappHref,
  parts,
  formats,
  applications,
  faqs,
}: NcrFormsCatalogPageProps) {
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
          { label: "NCR Forms & Carbonless Paper" },
        ]}
        badge={{ text: "NCR & Carbonless Business Forms", color: "amber" }}
        title={<>Wholesale NCR Forms for <span className="text-amber-400">Multi-Copy Workflows</span></>}
        subtitle="Factory-direct carbonless paper and finished NCR forms for overseas distributors, commercial printers, and wholesale buyers, with custom printing, numbering, private-label packing, and export support."
        ctas={[
          { label: "Build a Quote Brief", href: "#quote-guide", variant: "primary", icon: <MessageSquare className="h-4 w-4" aria-hidden="true" /> },
          { label: "WhatsApp", href: whatsappHref, variant: "whatsapp", icon: <Phone className="h-4 w-4" aria-hidden="true" />, external: true },
        ]}
      />

      <section className="border-b border-slate-200 bg-white" aria-label="NCR form order overview">
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

      <section className="bg-slate-50">
        <div className="container py-12 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-stretch lg:gap-14">
            <div className="relative min-h-80 overflow-hidden border border-slate-200 bg-white lg:min-h-full">
              <Image src={overviewImage} alt="Printed NCR carbonless forms prepared for business records" fill sizes="(max-width: 1024px) 100vw, 44vw" className="object-cover" />
            </div>
            <div className="py-1">
              <SectionIntro
                label="Direct answer"
                title="What are NCR forms?"
                description="NCR forms, also called carbonless forms, transfer handwriting or impact printing from a coated top sheet to one or more copies without separate carbon paper. Distributors can source finished forms, while commercial printers can request plain CB, CFB, and CF paper in sheets or reams."
              />
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
                  Send your NCR specification <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="container py-12 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(240px,0.55fr)_minmax(0,1.45fr)] lg:gap-14">
            <SectionIntro
              label="Channel buyer programs"
              title="Built for distributors, printers, and repeat wholesale orders"
              description="The supply model changes by buyer type. Confirm whether you need a resale range, plain carbonless paper for in-house printing, or finished forms under an approved repeat-order specification."
            />
            <div className="grid border-l border-t border-slate-300 lg:grid-cols-3">
              {channelBuyers.map((buyer) => (
                <article key={buyer.title} className="flex min-h-72 flex-col border-b border-r border-slate-300 p-5 sm:p-6">
                  <span className="text-amber-700 [&_svg]:h-6 [&_svg]:w-6" aria-hidden="true">{buyer.icon}</span>
                  <h3 className="mt-5 text-pretty font-sora text-xl font-semibold leading-tight text-slate-950">{buyer.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{buyer.text}</p>
                  <div className="mt-auto border-t border-slate-200 pt-4">
                    <p className="text-xs font-semibold uppercase tracking-normal text-slate-500">Buying focus</p>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-slate-800">{buyer.focus}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="part-count" className="scroll-mt-24 border-y border-slate-200 bg-white">
        <div className="container py-12 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(240px,0.55fr)_minmax(0,1.45fr)] lg:gap-14">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionIntro
                label="Choose by copy count"
                title="Match the number of parts to the workflow"
                description="Each part is one physical sheet in the set. Count the people or departments that need an immediate copy, then allow for customer, accounts, operations, carrier, or archive records."
              />
            </div>
            <div className="grid border-l border-t border-slate-300 sm:grid-cols-2">
              {parts.map((part) => (
                <article key={part.href} className="flex min-h-72 flex-col border-b border-r border-slate-300 p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-pretty font-sora text-xl font-semibold leading-tight text-slate-950">{part.label}</h3>
                    {part.badge ? <span className="flex-none bg-amber-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-normal text-amber-900">{part.badge}</span> : null}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{part.desc}</p>
                  <div className="mt-5 flex gap-1.5" aria-label={`${part.label} sheet color example`}>
                    {part.copies.slice(0, 6).map((copy, index) => (
                      <span key={`${copy.color}-${index}`} className={`h-11 flex-1 border border-slate-300 ${copyColorClass(copy.color)}`} title={copy.color} />
                    ))}
                  </div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-normal text-slate-500">Common uses</p>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-slate-800">{part.bestFor.slice(0, 3).join(" · ")}</p>
                  <Link href={part.href} className={`mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-brand-navy hover:text-amber-700 ${focusLink}`}>
                    View {part.label} specifications <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container py-12 lg:py-16">
          <SectionIntro
            label="Choose by finished format"
            title="Order the form in the format your team actually uses"
            description="The same carbonless paper set can be supplied as loose forms, numbered books, delivery documents, or continuous computer forms. Finished format affects binding, perforation, packing, and MOQ."
          />
          <div className="mt-9 grid gap-6 md:grid-cols-2">
            {formats.map((format) => (
              <article key={format.title} className="grid overflow-hidden border border-slate-200 bg-white sm:grid-cols-[minmax(180px,0.78fr)_minmax(0,1.22fr)]">
                <div className="relative min-h-56 bg-slate-100 sm:min-h-full">
                  <Image src={format.image} alt={format.imageAlt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 24vw" className="object-cover" />
                </div>
                <div className="flex min-w-0 flex-col p-5 sm:p-6">
                  <h3 className="text-pretty font-sora text-xl font-semibold leading-tight text-slate-950">{format.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{format.description}</p>
                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 border-t border-slate-200 pt-4">
                    {format.links.map((link) => (
                      <Link key={link.href} href={link.href} className={`inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-amber-700 ${focusLink}`}>
                        {link.label} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="container py-12 lg:py-16">
          <SectionIntro
            label="Sales enablement by application"
            title="Help end customers choose the right NCR form"
            description="Distributors and printing companies can use these industry pages to qualify copy distribution, signatures, traceability, and compliance fields before preparing a quotation."
          />
          <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((application) => (
              <article key={application.href} className="overflow-hidden border border-slate-200 bg-white">
                <Link href={application.href} className={`group relative block aspect-[16/10] overflow-hidden bg-slate-100 ${focusLink}`}>
                  <Image src={application.image} alt={application.imageAlt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-300 motion-reduce:transition-none group-hover:scale-[1.025]" />
                </Link>
                <div className="p-5">
                  <h3 className="text-pretty font-sora text-lg font-semibold leading-tight text-slate-950">
                    <Link href={application.href} className={`hover:text-amber-700 ${focusLink}`}>{application.title}</Link>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{application.description}</p>
                  <Link href={application.href} className={`mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-amber-700 ${focusLink}`}>
                    View application requirements <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="quote-guide" className="scroll-mt-24 bg-slate-50">
        <div className="container py-12 lg:py-16">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-16">
            <div>
              <SectionIntro
                label="Specification workflow"
                title="Build a repeatable wholesale specification"
                description="A useful wholesale quote defines the copy workflow before paper and printing, then records the approved SKU, packing, and reorder details. This reduces revisions and repeat-order mistakes."
              />
              <ol className="mt-8 border-t border-slate-300">
                {orderSteps.map((item) => (
                  <li key={item.step} className="grid grid-cols-[42px_1fr] gap-3 border-b border-slate-300 py-4">
                    <span className="font-sora text-sm font-semibold text-amber-700">{item.step}</span>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-950">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-normal text-amber-700">Custom manufacturing options</p>
              <h2 className="mt-3 text-pretty font-sora text-3xl font-semibold leading-tight text-slate-950">Specifications buyers should confirm</h2>
              <dl className="mt-7 grid border-l border-t border-slate-300 bg-white sm:grid-cols-2">
                {customOptions.map((item) => (
                  <div key={item.label} className="border-b border-r border-slate-300 p-4 sm:p-5">
                    <dt className="text-xs font-semibold uppercase tracking-normal text-slate-500">{item.label}</dt>
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
              <Image src={productionImage} alt="Factory production and quality inspection for custom printed business forms" fill sizes="(max-width: 1024px) 100vw, 44vw" className="object-cover" />
            </div>
            <div>
              <SectionIntro
                label="Material & quality control"
                title="Understand the carbonless paper layer system"
                description="Copy clarity depends on the correct CB, CFB, and CF sequence, suitable paper weight, controlled collating, and a proof that confirms numbering, copy order, print registration, and finishing."
              />
              <dl className="mt-7 border-t border-slate-300">
                {layerTerms.map((item) => (
                  <div key={item.term} className="grid gap-2 border-b border-slate-300 py-4 sm:grid-cols-[130px_1fr] sm:gap-5">
                    <dt className="font-sora text-sm font-semibold text-slate-950">{item.term} <span className="font-normal text-slate-500">({item.name})</span></dt>
                    <dd className="text-sm leading-relaxed text-slate-600">{item.text}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: <FileCheck2 />, title: "Proof approval", text: "Confirm layout, copy labels, colors, numbering range, and perforation before production." },
                  { icon: <Printer />, title: "Print registration", text: "Check tables, small text, logos, barcodes, and numbering alignment across the set." },
                  { icon: <PackageCheck />, title: "Set & book counts", text: "Verify sheets per set, sets per pad or book, carton quantity, and label details." },
                  { icon: <Palette />, title: "Copy sequence", text: "Approve the white, pink, yellow, blue, or green sheet order for each recipient." },
                ].map((item) => (
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

      <section id="ncr-faq" className="scroll-mt-24 bg-slate-50">
        <div className="container py-12 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(250px,0.62fr)_minmax(0,1.38fr)] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionIntro
                label="FAQ"
                title="NCR form sourcing questions"
                description="Concise answers on carbonless paper, copy count, CB/CFB/CF layers, customization, MOQ, proofing, and export supply."
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
            <Link href="/products/custom-ncr-forms" className={`inline-flex items-center gap-2 hover:text-amber-700 ${focusLink}`}>Custom NCR forms <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            <Link href="/products/ncr-receipt-books" className={`inline-flex items-center gap-2 hover:text-amber-700 ${focusLink}`}>NCR receipt books <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            <Link href="/products/continuous-computer-forms" className={`inline-flex items-center gap-2 hover:text-amber-700 ${focusLink}`}>Continuous computer forms <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            <Link href="/products" className={`inline-flex items-center gap-2 hover:text-amber-700 ${focusLink}`}>All product categories <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section id="inquiry" className="scroll-mt-24 bg-white">
        <div className="container py-12 lg:py-16">
          <div className="grid overflow-hidden border border-slate-200 shadow-[0_18px_50px_rgba(15,23,42,0.09)] lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
            <div className="bg-brand-navy p-8 text-white lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-normal text-amber-300">Wholesale & channel quote</p>
              <h2 className="mt-3 text-pretty font-sora text-3xl font-semibold leading-tight lg:text-4xl">Request wholesale NCR pricing</h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-300 lg:text-base">Send your buyer type, required range, part count, size, quantity, artwork, numbering, packing, repeat-order plan, and destination. We will confirm feasibility, MOQ, lead time, and export pricing.</p>
              <div className="mt-8 border-y border-white/15">
                {["2-part to 5+ part copy-set planning", "Logo, fields, languages, numbering, barcode, and perforation", "Loose sets, pads, books, and continuous formats", "FOB, CIF, DDP, and distributor packing support"].map((item) => (
                  <p key={item} className="flex gap-2 border-b border-white/15 py-3 text-sm text-slate-200 last:border-b-0">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-amber-400" aria-hidden="true" />{item}
                  </p>
                ))}
              </div>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={`mt-7 inline-flex items-center gap-2 text-sm font-semibold text-amber-300 hover:text-amber-200 ${focusLink}`}>
                <Phone className="h-4 w-4" aria-hidden="true" />Send the specification on WhatsApp
              </a>
            </div>
            <div className="bg-white p-7 lg:p-9">
              <InquiryForm
                compact
                productName="wholesale NCR forms and carbonless paper"
                initialMessage={"Buyer type / company:\nRequired product range:\nNumber of parts and copy roles:\nSize and finished format:\nInitial quantity / repeat-order plan:\nPrinting, numbering, and packing:\nDestination country:"}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
