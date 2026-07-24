import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CarFront,
  Check,
  ChevronDown,
  ClipboardCheck,
  FileCheck2,
  FileSignature,
  Gauge,
  Hash,
  MessageSquare,
  PackageCheck,
  Phone,
  Printer,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import InquiryForm from "@/components/shared/InquiryForm";

interface FormTypeItem {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  useCases: string;
}

interface AutoRepairNcrFormsCatalogPageProps {
  heroImage: string;
  inspectionImage: string;
  productionImage: string;
  whatsappHref: string;
  formTypes: FormTypeItem[];
  faqs: Array<{ q: string; a: string }>;
}

function SectionIntro({ label, title, description }: { label?: string; title: string; description: string }) {
  return (
    <div className="max-w-3xl">
      {label && <p className="text-xs font-semibold uppercase tracking-normal text-amber-700">{label}</p>}
      <h2 className={`${label ? "mt-3" : ""} text-pretty font-sora text-3xl font-semibold leading-tight text-slate-950 lg:text-[2.5rem]`}>{title}</h2>
      <p className="mt-4 max-w-[65ch] text-pretty text-base leading-relaxed text-slate-600 lg:text-lg">{description}</p>
    </div>
  );
}

const focusLink = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2";

const orderFacts = [
  { icon: <ClipboardCheck />, label: "Common copy sets", value: "2-part to 4-part" },
  { icon: <CarFront />, label: "Vehicle records", value: "VIN, mileage & damage" },
  { icon: <Hash />, label: "Job tracking", value: "Sequential numbering" },
  { icon: <PackageCheck />, label: "Finished formats", value: "Sets, pads or books" },
];

const repairProblems = [
  { title: "Pre-Existing Damage Is Disputed", text: "The vehicle condition was not marked clearly before the keys changed hands." },
  { title: "Extra Work Was Only Approved Verbally", text: "The repair scope changed, but the customer signature and revised estimate were not recorded." },
  { title: "Copies Do Not Match or Read Clearly", text: "The customer, workshop, accounts team, or insurer keeps incomplete or faint information." },
  { title: "Old Jobs Are Hard to Trace", text: "Repair orders lack a controlled number, VIN reference, barcode, or consistent archive copy." },
];

const workflowSteps = [
  { icon: <CarFront />, title: "Inspect the Vehicle", text: "Record VIN, plate, mileage, fuel level, visible damage, accessories, and customer concerns before work begins." },
  { icon: <FileSignature />, title: "Approve the Estimate", text: "Document the requested work, estimated parts and labor, diagnostic fees, authorization limit, and signature." },
  { icon: <Wrench />, title: "Record the Repair", text: "List completed operations, parts used, technician notes, added work, old-parts instructions, and quality checks." },
  { icon: <FileCheck2 />, title: "Release and Archive", text: "Confirm payment, warranty notes, vehicle handover, customer acceptance, and the copies retained by each party." },
];

const copyPlans = [
  { title: "2-Part", copies: "Customer + workshop", bestFor: "Simple repairs, inspections, estimates, and payment records" },
  { title: "3-Part", copies: "Customer + workshop + accounts / insurer", bestFor: "Repair orders, body shops, insurance work, and multi-department garages" },
  { title: "4-Part", copies: "Customer + workshop + accounts + fleet / head office", bestFor: "Fleet maintenance, dealership groups, insurers, and controlled archives" },
];

const requiredFieldGroups = [
  { title: "Customer & Vehicle", items: ["Customer name and contact", "VIN, registration / plate, make and model", "Mileage, fuel level, key count, and unit number"] },
  { title: "Intake & Inspection", items: ["Customer complaint and requested service", "360-degree vehicle damage diagram", "Accessories, valuables, warning lights, and photo references"] },
  { title: "Estimate & Authorization", items: ["Parts, labor, diagnostic fee, tax, and estimate total", "Approval limit and added-work authorization", "Old-parts return or disposal instruction and customer signature"] },
  { title: "Repair & Quality Record", items: ["Technician, bay, dates, operations, and parts used", "Additional findings and revised approval", "Road test, inspection, fluid, torque, or quality-control checks"] },
  { title: "Payment & Release", items: ["Payment terms, deposit, balance, and warranty note", "Vehicle release date, received-by name, and signature", "Copy labels for customer, workshop, accounts, insurer, or fleet"] },
];

const problemSolutions = [
  { problem: "Customer disputes existing scratches or dents", formRequirement: "Vehicle diagram, condition checklist, photo reference, time, and signatures", result: "A shared intake record before repair starts" },
  { problem: "Scope or price changes during the job", formRequirement: "Estimate section, authorization limit, added-work approval, and revised total", result: "Written approval instead of conflicting verbal recollections" },
  { problem: "Jobs cannot be matched to vehicles or invoices", formRequirement: "Sequential job number, VIN, plate, barcode or QR field, and invoice reference", result: "Faster archive lookup and fewer record-matching errors" },
  { problem: "Lower copies are faint or incomplete", formRequirement: "Correct CB / CFB / CF sequence, suitable paper weight, print pressure, and sample testing", result: "Readable customer, workshop, accounts, and insurer copies" },
  { problem: "Repeat orders arrive with changed fields or numbering", formRequirement: "Approved artwork code, numbering rule, copy sequence, book count, and packing specification", result: "A repeatable SKU for every branch or distributor order" },
];

export const autoRepairSpecifications = [
  { label: "Copies", value: "2-part, 3-part, or 4-part carbonless sets" },
  { label: "Paper", value: "CB / CFB / CF carbonless paper, commonly 50-60 gsm per ply" },
  { label: "Sizes", value: "A4, A5, letter, half-letter, DL, or custom dimensions" },
  { label: "Printing", value: "1-4 colors, shop logo, vehicle diagrams, terms, and multilingual fields" },
  { label: "Tracking", value: "Sequential numbering, barcodes, QR codes, VIN, or job references" },
  { label: "Finishing", value: "Loose sets, glued pads, stitched books, perforation, and wraparound covers" },
  { label: "Packing", value: "Packed by set, pad, book, branch, or private-label export carton" },
  { label: "Production", value: "Digital proof before production; physical sample available when testing is required" },
];

const orderSteps = [
  { title: "Send the Current Form", text: "Share a PDF, photo, spreadsheet, sample, or required field list with copy roles and quantity." },
  { title: "Approve the Production Proof", text: "Confirm layout, vehicle diagram, numbering, copy colors, perforation, binding, and packing." },
  { title: "Reorder the Approved SKU", text: "Use the artwork code, number range, book count, and packing reference for consistent repeat orders." },
];

export default function AutoRepairNcrFormsCatalogPage({
  heroImage,
  inspectionImage,
  productionImage,
  whatsappHref,
  formTypes,
  faqs,
}: AutoRepairNcrFormsCatalogPageProps) {
  return (
    <Layout>
      <PageHero
        bgImage={heroImage}
        bgImageAlt="ZhixinPaper auto repair NCR carbonless forms — factory custom manufacturing for vehicle service shops"
        overlayDir="left"
        overlayOpacity={68}
        minHeight="min-h-[410px]"
        compact
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "NCR Forms", href: "/products/ncr-forms" },
          { label: "Auto Repair NCR Forms" },
        ]}
        title={<>Auto Repair NCR Forms for <span className="text-amber-400">Authorized Work</span></>}
        subtitle="Document vehicle condition, approved work, parts, payment, and signatures in matching carbonless copies for every party."
        ctas={[
          { label: "Request a Form Quote", href: "#inquiry", variant: "primary", icon: <MessageSquare className="h-4 w-4" aria-hidden="true" /> },
          { label: "WhatsApp", href: whatsappHref, variant: "whatsapp", icon: <Phone className="h-4 w-4" aria-hidden="true" />, external: true },
        ]}
      />

      <section className="border-b border-slate-200 bg-white" aria-label="Auto repair NCR form order overview">
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
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-stretch lg:gap-14">
            <div className="relative min-h-80 overflow-hidden border border-slate-200 bg-white lg:min-h-full">
              <Image src={inspectionImage} alt="Mechanic inspecting a vehicle before repair authorization" fill sizes="(max-width: 1024px) 100vw, 44vw" className="object-cover" />
            </div>
            <div>
              <SectionIntro
                label="The real business problem"
                title="One Missing Signature Can Trigger a Repair Dispute"
                description="Auto repair NCR forms are carbonless work orders, inspections, estimates, authorizations, and invoices that give the customer, workshop, accounts team, insurer, or fleet manager matching copies of the same signed record. They reduce the stress of defending a completed repair with scattered notes or conflicting copies."
              />
              <div className="mt-7 border-t border-slate-300">
                {repairProblems.map((problem) => (
                  <div key={problem.title} className="grid grid-cols-[24px_1fr] gap-3 border-b border-slate-300 py-4">
                    <AlertTriangle className="mt-0.5 h-5 w-5 text-amber-700" aria-hidden="true" />
                    <div>
                      <h3 className="text-sm font-semibold text-slate-950">{problem.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{problem.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 border-l-4 border-amber-500 pl-4 text-sm font-semibold leading-relaxed text-slate-900">The goal is simple: one approved record that shows what arrived, what was authorized, what was completed, and who received each copy.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="repair-workflow" className="scroll-mt-24 border-y border-slate-200 bg-white">
        <div className="container py-12 lg:py-16">
          <SectionIntro
            title="Capture the Job From Intake to Release"
            description="A useful repair form follows the actual handoffs in the workshop. Each stage records a decision, signature, or responsibility boundary that may matter later."
          />
          <ol className="mt-9 grid border-l border-t border-slate-300 md:grid-cols-2 xl:grid-cols-4">
            {workflowSteps.map((item) => (
              <li key={item.title} className="flex min-h-64 flex-col border-b border-r border-slate-300 p-5 sm:p-6">
                <div className="flex items-center gap-4">
                  <span className="text-amber-700 [&_svg]:h-6 [&_svg]:w-6" aria-hidden="true">{item.icon}</span>
                </div>
                <h3 className="mt-8 text-pretty font-sora text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container py-12 lg:py-16">
          <SectionIntro
            title="Forms for Decisions That Create Repair Disputes"
            description="Choose one document or combine inspection, estimate, authorization, repair, invoice, and release fields into a single custom form."
          />
          <div className="mt-9 grid gap-6 md:grid-cols-2">
            {formTypes.map((form) => (
              <article key={form.title} className="grid overflow-hidden border border-slate-200 bg-white sm:grid-cols-[minmax(180px,0.78fr)_minmax(0,1.22fr)]">
                <div className="relative min-h-56 bg-slate-100 sm:min-h-full">
                  <Image src={form.image} alt={form.imageAlt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 24vw" className="object-cover" />
                </div>
                <div className="flex min-w-0 flex-col p-5 sm:p-6">
                  <h3 className="text-pretty font-sora text-xl font-semibold leading-tight text-slate-950">{form.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{form.description}</p>
                  <div className="mt-auto border-t border-slate-200 pt-4">
                    <p className="text-xs font-semibold uppercase tracking-normal text-slate-500">Useful for</p>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-slate-800">{form.useCases}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="required-fields" className="scroll-mt-24 border-y border-slate-200 bg-white">
        <div className="container py-12 lg:py-16">
          <div className="grid gap-12 lg:grid-cols-[minmax(250px,0.58fr)_minmax(0,1.42fr)] lg:gap-14">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionIntro
                label="Copy & field planning"
                title="Choose Copies, Then Confirm Every Required Field"
                description="Count the parties that need an immediate record, then check the form against the real intake, approval, repair, payment, and handover process."
              />
              <div className="mt-7 border-t border-slate-300">
                {copyPlans.map((plan) => (
                  <div key={plan.title} className="border-b border-slate-300 py-4">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-sora text-lg font-semibold text-slate-950">{plan.title}</h3>
                      <span className="text-xs font-semibold text-amber-800">{plan.copies}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{plan.bestFor}</p>
                  </div>
                ))}
              </div>
              <Link href="/products/ncr-forms/3-part" className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-amber-700 ${focusLink}`}>
                Review 3-part NCR specifications <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="grid border-l border-t border-slate-300 sm:grid-cols-2">
              {requiredFieldGroups.map((group) => (
                <article key={group.title} className="border-b border-r border-slate-300 p-5 sm:p-6">
                  <h3 className="font-sora text-lg font-semibold text-slate-950">{group.title}</h3>
                  <ul className="mt-4 space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2 text-sm leading-relaxed text-slate-700">
                        <Check className="mt-0.5 h-4 w-4 flex-none text-amber-700" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container py-12 lg:py-16">
          <SectionIntro
            title="Make Each Field Solve a Workshop Risk"
            description="More fields do not automatically create a better form. Each field should reduce a known dispute, handoff, traceability, or copy-quality problem."
          />
          <div className="mt-9 border-t border-slate-300">
            <div className="hidden grid-cols-[0.9fr_1.25fr_1fr] gap-6 border-b border-slate-300 py-3 text-xs font-semibold uppercase tracking-normal text-slate-500 md:grid">
              <p>Customer problem</p><p>Form requirement</p><p>Business result</p>
            </div>
            {problemSolutions.map((item) => (
              <article key={item.problem} className="grid gap-4 border-b border-slate-300 py-5 md:grid-cols-[0.9fr_1.25fr_1fr] md:gap-6">
                <div><p className="text-xs font-semibold uppercase tracking-normal text-slate-500 md:hidden">Customer problem</p><h3 className="mt-1 text-sm font-semibold leading-relaxed text-slate-950 md:mt-0">{item.problem}</h3></div>
                <div><p className="text-xs font-semibold uppercase tracking-normal text-slate-500 md:hidden">Form requirement</p><p className="mt-1 text-sm leading-relaxed text-slate-700 md:mt-0">{item.formRequirement}</p></div>
                <div><p className="text-xs font-semibold uppercase tracking-normal text-slate-500 md:hidden">Business result</p><p className="mt-1 text-sm font-medium leading-relaxed text-slate-900 md:mt-0">{item.result}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="container py-12 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-stretch lg:gap-14">
            <div className="relative min-h-80 overflow-hidden border border-slate-200 bg-slate-100 lg:min-h-full">
              <Image src={productionImage} alt="Factory production and quality control for numbered auto repair NCR forms" fill sizes="(max-width: 1024px) 100vw, 44vw" className="object-cover" />
            </div>
            <div>
              <SectionIntro
                label="Production & repeat-order control"
                title="Keep Layout, Numbering, and Packing Consistent"
                description="A repair form has to work in a fast-moving workshop and still be readable months later. The approved proof should become a controlled production reference so the next numbered, packed, and printed order matches the last one."
              />
              <ol className="mt-7 border-t border-slate-300">
                {orderSteps.map((item) => (
                  <li key={item.title} className="grid grid-cols-[24px_1fr] gap-3 border-b border-slate-300 py-4">
                    <Check className="mt-0.5 h-4 w-4 text-amber-700" aria-hidden="true" />
                    <div>
                      <h3 className="text-sm font-semibold text-slate-950">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: <ShieldCheck />, title: "Proof Before Production", text: "Approve fields, terms, vehicle diagrams, number ranges, copy colors, and finishing." },
                  { icon: <Printer />, title: "Copy-Clarity Testing", text: "Review pressure transfer and lower-ply readability when the application or paper grade requires it." },
                  { icon: <Gauge />, title: "Number-Range Control", text: "Confirm start and end numbers, duplicates, barcode rules, and branch or book allocation." },
                  { icon: <PackageCheck />, title: "Packing Reference", text: "Record sets per pad, forms per book, books per carton, labels, and private-label requirements." },
                ].map((item) => (
                  <div key={item.title} className="grid grid-cols-[24px_1fr] gap-3">
                    <span className="text-amber-700 [&_svg]:h-5 [&_svg]:w-5" aria-hidden="true">{item.icon}</span>
                    <div><h3 className="text-sm font-semibold text-slate-950">{item.title}</h3><p className="mt-1 text-xs leading-relaxed text-slate-600">{item.text}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <dl className="mt-10 grid border-l border-t border-slate-300 bg-slate-50 sm:grid-cols-2 lg:grid-cols-4">
            {autoRepairSpecifications.map((item) => (
              <div key={item.label} className="border-b border-r border-slate-300 p-4 sm:p-5">
                <dt className="text-xs font-semibold uppercase tracking-normal text-slate-500">{item.label}</dt>
                <dd className="mt-2 text-sm font-semibold leading-relaxed text-slate-900">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="auto-repair-faq" className="scroll-mt-24 bg-slate-50">
        <div className="container py-12 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(250px,0.62fr)_minmax(0,1.38fr)] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionIntro
                title="Auto Repair Form Sourcing Questions"
                description="Direct answers on required fields, vehicle diagrams, repair authorization, copy count, wraparound books, numbering, samples, MOQ, and repeat orders."
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
            <Link href="/products/ncr-forms/3-part" className={`inline-flex items-center gap-2 hover:text-amber-700 ${focusLink}`}>3-part NCR forms <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            <Link href="/products/ncr-invoice-books" className={`inline-flex items-center gap-2 hover:text-amber-700 ${focusLink}`}>NCR invoice books <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            <Link href="/products/field-service-ncr-forms" className={`inline-flex items-center gap-2 hover:text-amber-700 ${focusLink}`}>Field service NCR forms <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section id="inquiry" className="scroll-mt-24 bg-white">
        <div className="container py-12 lg:py-16">
          <div className="grid overflow-hidden border border-slate-200 shadow-[0_18px_50px_rgba(15,23,42,0.09)] lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
            <div className="bg-brand-navy p-8 text-white lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-normal text-amber-300">Custom repair-form quote</p>
              <h2 className="mt-3 text-pretty font-sora text-3xl font-semibold leading-tight lg:text-4xl">Build a Reliable Repair Form</h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-300 lg:text-base">Send your current form, required fields, copy roles, size, quantity, numbering, binding, and destination. We will confirm the layout, proof process, MOQ, lead time, packing, and export pricing.</p>
              <div className="mt-8 border-y border-white/15">
                {["Vehicle inspection and damage-diagram layouts", "Estimate, added-work, old-parts, and signature fields", "2-part to 4-part books, pads, or loose sets", "Controlled numbering, repeat SKUs, and private-label packing"].map((item) => (
                  <p key={item} className="flex gap-2 border-b border-white/15 py-3 text-sm text-slate-200 last:border-b-0"><Check className="mt-0.5 h-4 w-4 flex-none text-amber-400" aria-hidden="true" />{item}</p>
                ))}
              </div>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={`mt-7 inline-flex items-center gap-2 text-sm font-semibold text-amber-300 hover:text-amber-200 ${focusLink}`}>
                <Phone className="h-4 w-4" aria-hidden="true" />Send your current form on WhatsApp
              </a>
            </div>
            <div className="bg-white p-7 lg:p-9">
              <InquiryForm
                compact
                productName="custom auto repair NCR forms"
                initialMessage={"Business type / application:\nCurrent form or required fields:\nNumber of parts and copy roles:\nSize / books, pads, or loose sets:\nVehicle diagram / numbering / perforation:\nQuantity and repeat-order plan:\nDestination country:"}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
