import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown, MessageSquare, Phone } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import InquiryForm from "@/components/shared/InquiryForm";

export interface ThermalRollSizeItem {
  slug: string;
  label: string;
  href: string;
  markets?: string;
  badge?: string;
  bestFor: string;
}

interface ThermalPaperRollsCatalogPageProps {
  heroImage: string;
  productImage: string;
  whatsappHref: string;
  sizes: ThermalRollSizeItem[];
  faqs: Array<{ q: string; a: string }>;
}

function SectionIntro({ label, title, description }: { label: string; title: string; description: string }) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-xs font-semibold uppercase text-amber-700">{label}</p>
      <h2 className="text-pretty font-sora text-3xl font-semibold leading-tight text-slate-950 lg:text-[2.5rem]">{title}</h2>
      <p className="mt-4 max-w-[65ch] text-pretty text-base leading-relaxed text-slate-600 lg:text-lg">{description}</p>
    </div>
  );
}

const oemPrograms = [
  { id: "distributor", title: "Distributor Stock Program", text: "Build a multi-size blank-roll range around the required paper, carton configuration, SKU labels, destination and replenishment plan.", href: "/products/thermal-paper-rolls/blank" },
  { id: "private-label", title: "Private-Label Supply", text: "Review branded or neutral cartons, retail or distributor labels, pack quantities and repeat-order references before the packaging specification is approved.", href: "#inquiry" },
  { id: "custom-printed", title: "Custom Printed Rolls", text: "Submit the print side, artwork, colors, repeat, live-print area, language and QR or barcode use for feasibility, proof and sample planning.", href: "/products/thermal-paper-rolls/custom-printed" },
  { id: "print-partner", title: "Converter / Print Partner", text: "Discuss overflow capacity, confidentiality, neutral production, artwork versions, packing references and repeat-order controls for partner programs.", href: "#inquiry" },
];

const buyerProblems = [
  { question: "Will it fit the terminal?", consequence: "Loading, feeding, printing, cutting or sensor failure", response: "Confirm application, printer, full dimensions, core, winding, marks and sample-test scope." },
  { question: "How do I compare quotations?", consequence: "Short-roll disputes and false unit-price comparisons", response: "Quote against width, OD or length, core, paper, pack, quantity and the agreed inspection basis." },
  { question: "Will the artwork and QR work?", consequence: "Wrong copy, overlap, scan failure or print rejection", response: "Review print side, live-print area, repeat, proof, physical sample and scan or printer test where required." },
  { question: "Will repeat orders match?", consequence: "Batch drift, complaints and repeated qualification", response: "Reference the approved specification, packing, master sample, lot and change confirmation." },
  { question: "Will packing survive the route?", consequence: "Moisture, deformation, damaged edges and channel rejection", response: "Review inner protection, carton, pallet, labels, destination and arrival checks." },
];

const productRoutes = [
  { title: "Blank Thermal Paper Rolls", href: "/products/thermal-paper-rolls/blank", text: "Standard and custom-size blank-roll supply." },
  { title: "Custom Printed Thermal Paper Rolls", href: "/products/thermal-paper-rolls/custom-printed", text: "Logo, reverse print, QR, multilingual and private-label programs." },
  { title: "POS Receipt Paper Rolls", href: "/products/receipt-paper-rolls", text: "Receipt and till-roll selection for standard POS workflows." },
  { title: "57mm x 40mm Payment Terminal Rolls", href: "/products/thermal-rolls/57x40mm", text: "Compact-roll route for payment-terminal requirements." },
  { title: "BPA-Free and Phenol-Free Options", href: "/products/phenol-free-thermal-paper", text: "Material and document requirements confirmed by exact paper scope." },
  { title: "Standard Thermal Paper Roll Sizes", href: "#popular-sizes", text: "Compare existing size routes before preparing artwork or packing." },
];

const approvalSteps = [
  "Requirements",
  "Feasibility review",
  "PDF proof",
  "Physical sample when required",
  "Printer or scan test",
  "Approved master specification",
  "Production, inspection and packing",
];

const supplyControls = [
  { title: "Packaging Configuration", text: "Neutral, distributor or private-label options reviewed by route and channel." },
  { title: "Version & IP Control", text: "Artwork version, language, SKU, proof approval and NDA request." },
  { title: "Repeat Supply", text: "Approved specification, packing reference, forecast and change-confirmation process." },
];

export default function ThermalPaperRollsCatalogPage({
  heroImage,
  productImage,
  whatsappHref,
  sizes,
  faqs,
}: ThermalPaperRollsCatalogPageProps) {
  return (
    <Layout>
      <PageHero
        bgImage={heroImage}
        overlayDir="left"
        overlayOpacity={64}
        minHeight="min-h-[360px]"
        compact
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Thermal Paper Rolls" },
        ]}
        title={<>Thermal Paper Rolls for <span className="text-amber-400">OEM, Private Label &amp; Wholesale Supply</span></>}
        subtitle="ZhixinPaper supports blank and custom thermal paper roll programs for distributors, private-label brands, converters and print partners. Each program is reviewed against the application, complete roll specification, artwork, quantity, packing, destination and document requirement before pricing."
        ctas={[
          { label: "Plan an OEM Roll Program", href: "#oem-programs", variant: "primary", icon: <MessageSquare className="h-4 w-4" /> },
          { label: "Send Your Specification", href: "#inquiry", variant: "outline" },
        ]}
      />

      <section id="oem-programs" className="scroll-mt-24 border-b border-slate-200 bg-white">
        <div className="container py-12 lg:py-16">
          <SectionIntro label="OEM programs" title="Choose the program behind the order" description="Start with the commercial program, then confirm the product, artwork, packing and repeat-order specification." />
          <div className="mt-8 grid border-l border-t border-slate-300 md:grid-cols-2 xl:grid-cols-4">
            {oemPrograms.map((program) => (
              <article key={program.id} data-oem-program={program.id} className="flex min-h-64 flex-col border-b border-r border-slate-300 p-5">
                <h3 className="font-sora text-lg font-semibold text-slate-950">{program.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{program.text}</p>
                <Link href={program.href} className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-brand-navy hover:text-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500">
                  Review this program <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50" data-oem-quote-answer>
        <div className="container grid gap-8 py-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(300px,0.8fr)] lg:items-center lg:gap-14 lg:py-14">
          <SectionIntro
            label="Specification-based quote"
            title="What information is needed before an OEM thermal paper roll quote?"
            description="A quotation should define the application, printer model, width, outer diameter or length, core, paper grade, winding, print side, artwork, colors, repeat, quantity, packing, destination and document requirement. Custom MOQ, proof route and lead time are confirmed after specification and artwork review."
          />
          <div className="relative aspect-[16/10] overflow-hidden border border-slate-300 bg-white">
            <Image src={productImage} alt="Thermal paper rolls prepared in multiple POS sizes" fill sizes="(max-width: 1024px) 100vw, 36vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="container py-12 lg:py-16">
          <SectionIntro label="Buyer risks" title="Resolve the problems behind an OEM roll order" description="Define the failure risk first, then agree on the specification, approval and inspection response." />
          <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
            {buyerProblems.map((problem) => (
              <article key={problem.question} data-buyer-problem className="grid gap-3 py-5 md:grid-cols-[1fr_1fr_1.4fr] md:gap-6">
                <h3 className="font-sora text-base font-semibold text-slate-950">{problem.question}</h3>
                <p className="text-sm leading-relaxed text-rose-700">{problem.consequence}</p>
                <p className="text-sm leading-relaxed text-slate-600">{problem.response}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container py-12 lg:py-16">
          <SectionIntro label="Product routes" title="Continue with the right roll category" description="Use the product route that matches the application or customization task." />
          <div className="mt-8 grid border-l border-t border-slate-300 md:grid-cols-2 xl:grid-cols-3">
            {productRoutes.map((route) => (
              <Link key={route.title} href={route.href} className="border-b border-r border-slate-300 bg-white p-5 hover:bg-amber-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500">
                <h3 className="font-sora text-base font-semibold text-slate-950">{route.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{route.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="popular-sizes" className="scroll-mt-24 border-y border-slate-200 bg-white">
        <div className="container py-12 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(240px,0.58fr)_minmax(0,1.42fr)] lg:gap-14">
            <SectionIntro label="Standard sizes" title="Popular thermal roll formats" description="Open a size page for application and printer guidance. Confirm the complete dimensions and core before ordering or preparing artwork." />
            <div className="grid grid-cols-2 border-l border-t border-slate-300 lg:grid-cols-3">
              {sizes.map((size, index) => (
                <Link key={size.slug} href={size.href} data-roll-size={size.slug} className="group min-h-40 border-b border-r border-slate-300 p-4 hover:bg-amber-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 sm:p-5">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-semibold text-slate-500">{String(index + 1).padStart(2, "0")}</span>
                    {size.badge ? <span className="border border-amber-200 bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-800">{size.badge}</span> : null}
                  </div>
                  <h3 className="mt-6 font-sora text-lg font-semibold leading-tight text-slate-950 group-hover:text-amber-800 sm:text-xl">{size.label}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{size.bestFor}</p>
                  {size.markets ? <p className="mt-3 text-[11px] font-semibold uppercase text-slate-500">{size.markets}</p> : null}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-navy text-white" data-oem-workflow>
        <div className="container py-12 lg:py-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase text-amber-300">Approval route</p>
            <h2 className="mt-3 text-pretty font-sora text-3xl font-semibold leading-tight text-white lg:text-[2.5rem]">Move from brief to an approved production reference</h2>
            <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-slate-200 lg:text-lg">The exact proof, sample and test route depends on the specification and project risk.</p>
          </div>
          <ol className="mt-8 grid gap-px overflow-hidden border border-white/20 bg-white/20 sm:grid-cols-2 xl:grid-cols-4">
            {approvalSteps.map((step, index) => (
              <li key={step} className="min-h-28 bg-brand-navy p-5">
                <span className="text-xs font-semibold text-amber-300">{String(index + 1).padStart(2, "0")}</span>
                <p className="mt-3 text-sm font-semibold leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white" data-evidence-boundary>
        <div className="container py-12 lg:py-16">
          <SectionIntro label="Supply controls" title="Confirm what the program will be controlled against" description="MOQ, timing, paper claims and documents are confirmed only after the exact product, quantity, packing, destination and evidence scope are reviewed." />
          <div className="mt-8 grid border-l border-t border-slate-300 md:grid-cols-3">
            {supplyControls.map((control) => (
              <article key={control.title} className="border-b border-r border-slate-300 p-5">
                <h3 className="font-sora text-base font-semibold text-slate-950">{control.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{control.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="container py-12 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(250px,0.65fr)_minmax(0,1.35fr)] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionIntro label="FAQ" title="Thermal roll sourcing questions" description="Clear answers for specification, printing, packing, samples and evidence review." />
              <Link href="#inquiry" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-amber-700">Ask about your program <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="border-t border-slate-300">
              {faqs.map((faq, index) => (
                <details key={faq.q} className="group border-b border-slate-300" open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-center gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 [&::-webkit-details-marker]:hidden">
                    <span className="font-sora text-sm font-semibold text-slate-500">{String(index + 1).padStart(2, "0")}</span>
                    <span className="flex-1 font-sora text-base font-semibold text-slate-900">{faq.q}</span>
                    <ChevronDown className="h-5 w-5 flex-none text-slate-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="pb-5 pl-10 pr-8 text-sm leading-relaxed text-slate-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="inquiry" className="scroll-mt-24 bg-white">
        <div className="container py-12 lg:py-16">
          <div className="grid overflow-hidden border border-slate-300 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="flex flex-col bg-brand-navy p-8 text-white lg:p-10">
              <p className="text-xs font-semibold uppercase text-amber-300">Qualified OEM RFQ</p>
              <h2 className="mt-3 text-pretty font-sora text-3xl font-semibold leading-tight lg:text-4xl">Send a specification we can review</h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-300 lg:text-base">A complete brief reduces compatibility errors, false quote comparisons and artwork rework.</p>
              <div className="mt-8 space-y-3 border-t border-white/15 pt-6 text-sm text-slate-200">
                <p className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 flex-none text-amber-400" /> Application and printer</p>
                <p className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 flex-none text-amber-400" /> Complete roll specification</p>
                <p className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 flex-none text-amber-400" /> Quantity, packing and destination</p>
              </div>
              <p className="mt-8 border-t border-white/15 pt-6 text-sm leading-relaxed text-slate-300">Send artwork or current-roll files by email or WhatsApp after submitting this specification.</p>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber-300 hover:text-amber-200"><Phone className="h-4 w-4" /> Continue on WhatsApp</a>
            </div>
            <div className="p-7 lg:p-9">
              <InquiryForm
                compact
                productName="OEM Thermal Paper Roll Program"
                initialMessage={`Buyer type / program:
Application:
Printer model:
Width:
Outer diameter or required length:
Core:
Paper option:
Winding or sensor mark:
Blank or custom printed:
Print side, colors and repeat:
Quantity by SKU:
Packing requirement:
Destination:
Document requirement:
Current problem or sample reference:`}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
