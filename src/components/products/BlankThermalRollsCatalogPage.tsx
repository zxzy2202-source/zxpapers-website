import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock,
  FileCheck2,
  Globe2,
  MessageSquare,
  Package,
  Phone,
  Printer,
  ReceiptText,
  Ruler,
  ShieldCheck,
  Truck,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import InquiryForm from "@/components/shared/InquiryForm";

interface RowItem {
  label: string;
  value: string;
}

interface CertificationItem {
  title: string;
  desc: string;
}

interface SizeItem {
  label: string;
  href: string;
  badge?: string;
  markets?: string;
}

interface BlankThermalRollsCatalogPageProps {
  heroImage: string;
  whatsappHref: string;
  specs: RowItem[];
  packagingInfo: RowItem[];
  certifications: CertificationItem[];
  sizes: SizeItem[];
  faqs: Array<{ q: string; a: string }>;
}

function SectionIntro({ label, title, description }: { label: string; title: string; description: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-normal text-amber-700">{label}</p>
      <h2 className="mt-3 font-sora text-3xl font-semibold leading-tight text-slate-950 lg:text-[2.5rem]">{title}</h2>
      <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-slate-600 lg:text-lg">{description}</p>
    </div>
  );
}

const orderFacts = [
  { icon: <Package />, label: "Standard MOQ", value: "1,000 rolls" },
  { icon: <Clock />, label: "Stock dispatch", value: "3–5 business days" },
  { icon: <Ruler />, label: "Standard widths", value: "57mm and 80mm" },
  { icon: <ShieldCheck />, label: "Standard coating", value: "BPA-free" },
];

const buyerChecklist = [
  "Printer model or compartment dimensions",
  "Roll width, diameter, length, and core size",
  "Required coating grade and image-life target",
  "Order quantity, destination, and packing preference",
];

const applications = [
  { icon: <ReceiptText />, title: "Retail & hospitality", text: "Checkout, restaurant, and service-counter receipts." },
  { icon: <Printer />, title: "ATM & self-service", text: "Banking, parking, queue, kiosk, and ticket systems." },
  { icon: <Truck />, title: "Mobile & field printing", text: "Delivery, taxi, handheld POS, and fuel-dispensing printers." },
  { icon: <Globe2 />, title: "Distribution programs", text: "Wholesale stock, regional resale, and private-label supply." },
];

export default function BlankThermalRollsCatalogPage({
  heroImage,
  whatsappHref,
  specs,
  packagingInfo,
  certifications,
  sizes,
  faqs,
}: BlankThermalRollsCatalogPageProps) {
  return (
    <Layout>
      <PageHero
        bgImage={heroImage}
        overlayDir="left"
        overlayOpacity={66}
        minHeight="min-h-[380px]"
        compact
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Thermal Paper Rolls", href: "/products/thermal-paper-rolls" },
          { label: "Blank Rolls" },
        ]}
        title={<>Blank Thermal Paper Rolls for <span className="text-amber-400">Stock Supply</span></>}
        subtitle="Factory-direct BPA-free receipt rolls for POS, ATM, kiosk, and mobile printing. Source standard 57mm and 80mm formats or confirm a custom blank-roll specification."
        ctas={[
          { label: "Request Stock Pricing", href: "#inquiry", variant: "primary", icon: <MessageSquare className="h-4 w-4" /> },
          { label: "WhatsApp", href: whatsappHref, variant: "whatsapp", icon: <Phone className="h-4 w-4" />, external: true },
        ]}
      />

      <section className="border-b border-slate-200 bg-white" aria-label="Blank thermal roll order snapshot">
        <div className="container py-5">
          <div className="grid grid-cols-2 border-l border-t border-slate-200 lg:grid-cols-4">
            {orderFacts.map((fact) => (
              <div key={fact.label} className="flex min-h-20 items-center gap-3 border-b border-r border-slate-200 px-4 py-3 sm:px-5">
                <span className="text-amber-700 [&_svg]:h-5 [&_svg]:w-5" aria-hidden="true">{fact.icon}</span>
                <div>
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
            <div className="relative min-h-72 overflow-hidden border border-slate-200 bg-white lg:min-h-full">
              <Image src={heroImage} alt="Blank thermal paper rolls in standard POS receipt sizes" fill sizes="(max-width: 1024px) 100vw, 44vw" className="object-cover" />
            </div>
            <div className="py-1">
              <SectionIntro
                label="Stock product overview"
                title="Ready for standard printers and repeat orders"
                description="Blank rolls are the fastest sourcing path when you need standard white receipt paper without artwork approval. Confirm the printer fit, coating requirement, order quantity, and destination before pricing."
              />
              <div className="mt-7 grid gap-6 border-t border-slate-300 pt-6 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-normal text-slate-500">Typical applications</p>
                  <div className="mt-4 space-y-4">
                    {applications.map((item) => (
                      <div key={item.title} className="grid grid-cols-[24px_1fr] gap-3">
                        <span className="text-amber-700 [&_svg]:h-4 [&_svg]:w-4" aria-hidden="true">{item.icon}</span>
                        <div><h3 className="text-sm font-semibold text-slate-900">{item.title}</h3><p className="mt-1 text-xs leading-relaxed text-slate-600">{item.text}</p></div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-t border-slate-200 pt-5 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
                  <p className="text-xs font-semibold uppercase tracking-normal text-slate-500">Send these details</p>
                  <ul className="mt-4 space-y-3">
                    {buyerChecklist.map((item) => <li key={item} className="flex gap-2 text-sm leading-relaxed text-slate-700"><Check className="mt-0.5 h-4 w-4 flex-none text-amber-700" />{item}</li>)}
                  </ul>
                  <Link href="#inquiry" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-amber-700">Prepare a quote request <ArrowRight className="h-4 w-4" /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sizes" className="scroll-mt-24 border-y border-slate-200 bg-white">
        <div className="container py-12 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(240px,0.58fr)_minmax(0,1.42fr)] lg:gap-14">
            <SectionIntro label="Standard sizes" title="Choose a proven receipt-roll format" description="Open a size page for market use, printer fit, core, length, and packing details. Custom dimensions are available when the standard range does not match your equipment." />
            <div className="grid grid-cols-2 border-l border-t border-slate-300 lg:grid-cols-3">
              {sizes.map((size) => (
                <Link key={size.href} href={size.href} className="group min-h-32 border-b border-r border-slate-300 p-4 transition-colors hover:bg-amber-50 sm:p-5">
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-sora text-lg font-semibold leading-tight text-slate-950 group-hover:text-amber-800">{size.label}</p>
                    {size.badge ? <span className="flex-none bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-normal text-amber-800">{size.badge}</span> : null}
                  </div>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-normal text-slate-500">{size.markets || "Standard format"}</p>
                  <ArrowRight className="mt-2 h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-amber-700" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="specifications" className="scroll-mt-24 bg-slate-50">
        <div className="container py-12 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(250px,0.58fr)_minmax(0,1.42fr)] lg:gap-14">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionIntro label="Technical specification" title="Confirm the printer fit before ordering" description="Use these values as a factory reference. Final tolerances, roll length, coating grade, image life, and packing are confirmed on the quotation or approved sample." />
              <Link href="#inquiry" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-amber-700">Ask about a specification <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <dl className="grid border-l border-t border-slate-300 bg-white sm:grid-cols-2">
              {specs.map((row) => (
                <div key={row.label} className="border-b border-r border-slate-300 p-4 sm:p-5">
                  <dt className="text-xs font-semibold uppercase tracking-normal text-slate-500">{row.label}</dt>
                  <dd className="mt-2 text-sm font-semibold leading-relaxed text-slate-900">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="container py-12 lg:py-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionIntro label="Quality & compliance" title="Documents for regulated supply programs" description="Confirm the documents required by your market before production. Material declarations and certificates are supplied according to the agreed product grade." />
              <div className="mt-8 border-t border-slate-300">
                {certifications.map((item) => (
                  <div key={item.title} className="grid grid-cols-[28px_1fr] gap-3 border-b border-slate-300 py-4">
                    <FileCheck2 className="mt-0.5 h-5 w-5 text-amber-700" aria-hidden="true" />
                    <div><h3 className="text-sm font-semibold text-slate-900">{item.title}</h3><p className="mt-1 text-xs leading-relaxed text-slate-600">{item.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionIntro label="Packing & shipping" title="Plan cartons, pallets, and delivery terms" description="Packing configuration changes with roll dimensions and order volume. The final carton count, pallet plan, port, and shipping method are confirmed on the quotation." />
              <dl className="mt-8 border-t border-slate-300">
                {packagingInfo.map((row) => (
                  <div key={row.label} className="grid grid-cols-[minmax(110px,0.42fr)_minmax(0,1fr)] gap-4 border-b border-slate-300 py-3 text-sm">
                    <dt className="font-medium text-slate-500">{row.label}</dt><dd className="font-semibold leading-relaxed text-slate-900">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container py-12 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(250px,0.62fr)_minmax(0,1.38fr)] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionIntro label="FAQ" title="Blank-roll sourcing questions" description="Direct answers on MOQ, custom dimensions, coating grades, quality control, payment, and private-label packing." />
            </div>
            <div className="border-t border-slate-300">
              {faqs.map((faq, index) => (
                <details key={faq.q} className="group border-b border-slate-300" open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-center gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 [&::-webkit-details-marker]:hidden">
                    <span className="font-sora text-sm font-semibold text-amber-700">0{index + 1}</span><span className="flex-1 font-sora text-base font-semibold text-slate-900">{faq.q}</span><ChevronDown className="h-5 w-5 text-slate-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="pb-5 pl-10 pr-8 text-sm leading-relaxed text-slate-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-300 pt-6 text-sm font-semibold text-brand-navy">
            <Link href="/products/thermal-paper-rolls/custom-printed" className="inline-flex items-center gap-2 hover:text-amber-700">Custom printed rolls <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/products/thermal-paper-rolls" className="inline-flex items-center gap-2 hover:text-amber-700">All thermal paper rolls <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/products/thermal-labels/blank" className="inline-flex items-center gap-2 hover:text-amber-700">Blank thermal labels <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section id="inquiry" className="scroll-mt-24 bg-white">
        <div className="container py-12 lg:py-16">
          <div className="grid overflow-hidden border border-slate-200 shadow-[0_18px_50px_rgba(15,23,42,0.09)] lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
            <div className="bg-brand-navy p-8 text-white lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-normal text-amber-300">Factory stock quote</p>
              <h2 className="mt-3 font-sora text-3xl font-semibold leading-tight lg:text-4xl">Request blank-roll pricing</h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-300 lg:text-base">Send the printer model or roll dimensions, quantity, coating requirement, and destination. We will confirm availability, MOQ, packing, lead time, and export pricing.</p>
              <div className="mt-8 border-y border-white/15">
                {["Standard and custom blank-roll specifications", "BPA-free and phenol-free grade review", "Wholesale, distributor, and private-label packing", "FOB, CIF, and DDP export support"].map((item) => <p key={item} className="flex gap-2 border-b border-white/15 py-3 text-sm text-slate-200 last:border-b-0"><Check className="mt-0.5 h-4 w-4 flex-none text-amber-400" />{item}</p>)}
              </div>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-amber-300 hover:text-amber-200"><Phone className="h-4 w-4" />Send details on WhatsApp</a>
            </div>
            <div className="bg-white p-7 lg:p-9">
              <InquiryForm compact initialMessage="Product: Blank thermal paper rolls&#10;Printer model:&#10;Width / diameter / core:&#10;Quantity:&#10;Coating requirement:&#10;Destination:" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
