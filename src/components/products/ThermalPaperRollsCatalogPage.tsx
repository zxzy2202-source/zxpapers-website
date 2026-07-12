import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Check,
  ChevronDown,
  CircleGauge,
  Factory,
  FileCheck2,
  Globe2,
  MessageSquare,
  PackageCheck,
  Palette,
  Phone,
  Printer,
  ReceiptText,
  Ruler,
  ScissorsLineDashed,
  ShieldCheck,
  Store,
} from "lucide-react";
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
      <p className="mb-3 text-xs font-semibold uppercase tracking-normal text-amber-700">{label}</p>
      <h2 className="font-sora text-3xl font-semibold leading-tight text-slate-950 lg:text-[2.5rem]">{title}</h2>
      <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-slate-600 lg:text-lg">{description}</p>
    </div>
  );
}

const selectorItems = [
  { icon: <Ruler />, label: "Width", value: "57mm, 80mm, custom", href: "#popular-sizes" },
  { icon: <CircleGauge />, label: "Diameter", value: "30mm to 80mm", href: "#popular-sizes" },
  { icon: <ReceiptText />, label: "Core", value: "12mm, 18mm, 25mm", href: "#technical-specs" },
  { icon: <Palette />, label: "Finish", value: "Blank or custom printed", href: "#buying-paths" },
];

const buyingPaths = [
  {
    id: "blank",
    label: "Stock Supply",
    title: "Blank Thermal Paper Rolls",
    description: "Standard white rolls for distributors, POS suppliers, retailers, and service companies that need reliable stock and fast dispatch.",
    href: "/products/thermal-paper-rolls/blank",
    cta: "Browse blank rolls",
    facts: ["Low-volume stock orders", "3 to 7 day dispatch", "BPA-free standard", "Standard export cartons"],
  },
  {
    id: "custom",
    label: "OEM Program",
    title: "Custom Printed Thermal Rolls",
    description: "Branded receipt rolls with logos, promotions, QR codes, bilingual layouts, and private-label packaging for resale programs.",
    href: "/products/thermal-paper-rolls/custom-printed",
    cta: "Plan custom printing",
    facts: ["From 5,000 rolls", "CMYK or Pantone artwork", "OEM packaging available", "10 to 18 day production"],
  },
];

const technicalSpecs = [
  ["Standard widths", "57mm and 80mm"],
  ["Roll diameter", "30mm, 40mm, 50mm, 70mm, 80mm, or custom"],
  ["Core options", "12mm, 18mm, and 25mm"],
  ["Paper weight", "55, 60, and 65 gsm options"],
  ["Size tolerance", "+/- 0.5mm"],
  ["Coating", "BPA-free standard; BPS-free and phenol-free options"],
  ["Image life", "5 to 7 years; 10-year option"],
  ["Printing", "Logo, promotion, QR code, numbering, and bilingual layouts"],
];

const applications: Array<{ icon: ReactNode; title: string; text: string; href: string; linkLabel: string }> = [
  { icon: <Store />, title: "Retail & Hospitality", text: "High-volume checkout and restaurant receipt printing, commonly in 80mm widths.", href: "/products/thermal-rolls/80x80mm", linkLabel: "View 80 x 80mm" },
  { icon: <Printer />, title: "ATM & Self-Service Kiosks", text: "Stable, sharp rolls for banking, queue, parking, and unattended terminals.", href: "/products/thermal-rolls/80x70mm", linkLabel: "View 80 x 70mm" },
  { icon: <ReceiptText />, title: "Mobile POS & Payment", text: "Compact 57mm rolls for handheld terminals, delivery printers, and taxi meters.", href: "/products/thermal-rolls/57x40mm", linkLabel: "View 57 x 40mm" },
  { icon: <ShieldCheck />, title: "Regulated Markets", text: "BPA-free standard with phenol-free options for food, healthcare, and compliance-led programs.", href: "/products/phenol-free-thermal-paper", linkLabel: "View phenol-free" },
];

const productionSteps = [
  { icon: <Factory />, title: "Coating control", text: "Thermal sensitivity and image stability" },
  { icon: <ScissorsLineDashed />, title: "Precision slitting", text: "Width and diameter to +/- 0.5mm" },
  { icon: <FileCheck2 />, title: "Print inspection", text: "Artwork, registration, and copy checks" },
  { icon: <PackageCheck />, title: "Export packing", text: "Carton, pallet, and private-label options" },
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
        title={<>Thermal Paper Rolls for <span className="text-amber-400">POS, ATM &amp; Kiosk</span></>}
        subtitle="Factory-direct receipt rolls in 57mm, 80mm, and custom widths. Choose stock BPA-free rolls or build a printed OEM specification with export packaging."
        ctas={[
          { label: "Request a Quote", href: "#inquiry", variant: "primary", icon: <MessageSquare className="h-4 w-4" /> },
          { label: "WhatsApp", href: whatsappHref, variant: "whatsapp", icon: <Phone className="h-4 w-4" />, external: true },
        ]}
      />

      <section className="border-b border-slate-200 bg-white" aria-label="Thermal roll specification navigator">
        <div className="container py-4">
          <nav
            data-roll-selector="true"
            aria-label="Choose thermal roll specification"
            className="grid grid-cols-2 border-l border-t border-slate-200 lg:grid-cols-4"
          >
            {selectorItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group flex min-h-20 items-center gap-3 border-b border-r border-slate-200 px-4 py-3 transition-colors hover:bg-amber-50 focus-visible:bg-amber-50 sm:px-5"
              >
                <span className="flex h-9 w-9 flex-none items-center justify-center text-brand-navy [&_svg]:h-5 [&_svg]:w-5" aria-hidden="true">{item.icon}</span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-normal text-slate-500">{item.label}</span>
                  <span className="mt-1 block text-sm font-semibold leading-snug text-slate-900 group-hover:text-amber-800">{item.value}</span>
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section id="buying-paths" className="scroll-mt-24 bg-slate-50">
        <div className="container py-12 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(270px,0.72fr)_minmax(0,1.28fr)] lg:items-start lg:gap-14">
            <div>
              <div className="relative aspect-[16/10] overflow-hidden border border-slate-200 bg-white">
                <Image src={productImage} alt="Blank thermal paper rolls in standard POS sizes" fill sizes="(max-width: 1024px) 100vw, 38vw" className="object-cover" />
              </div>
              <div className="mt-6">
                <SectionIntro
                  label="Buying Path"
                  title="Start with stock or custom production"
                  description="The material can be the same; the buying process changes according to printing, packaging, MOQ, and delivery requirements."
                />
              </div>
            </div>

            <div className="border-t border-slate-300">
              {buyingPaths.map((path, index) => (
                <article key={path.id} data-buying-path={path.id} className="border-b border-slate-300 py-7 first:pt-0 lg:py-8 lg:first:pt-0">
                  <div className="grid gap-5 sm:grid-cols-[minmax(0,1fr)_minmax(180px,0.62fr)] sm:gap-8">
                    <div>
                      <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-normal text-amber-700">
                        <span>0{index + 1}</span><span className="h-px w-8 bg-amber-400" /><span>{path.label}</span>
                      </div>
                      <h3 className="mt-3 font-sora text-2xl font-semibold text-slate-950">{path.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">{path.description}</p>
                      <Link href={path.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-amber-700">
                        {path.cta} <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                    <ul className="space-y-2 border-t border-slate-200 pt-4 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
                      {path.facts.map((fact) => (
                        <li key={fact} className="flex gap-2 text-xs leading-relaxed text-slate-600">
                          <Check className="mt-0.5 h-3.5 w-3.5 flex-none text-amber-700" /> {fact}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="popular-sizes" className="scroll-mt-24 border-y border-slate-200 bg-white">
        <div className="container py-12 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(240px,0.58fr)_minmax(0,1.42fr)] lg:gap-14">
            <SectionIntro
              label="Standard Sizes"
              title="Popular thermal roll formats"
              description="Open a size page for detailed length, core, pallet, and printer information. Custom widths and diameters are available when the printer specification differs."
            />
            <div className="grid grid-cols-2 border-l border-t border-slate-300 lg:grid-cols-3">
              {sizes.map((size, index) => (
                <Link
                  key={size.slug}
                  href={size.href}
                  data-roll-size={size.slug}
                  className="group min-h-40 border-b border-r border-slate-300 p-4 transition-colors hover:bg-amber-50 sm:p-5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-semibold text-slate-500">0{index + 1}</span>
                    {size.badge ? <span className="border border-amber-200 bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-800">{size.badge}</span> : null}
                  </div>
                  <h3 className="mt-6 font-sora text-lg font-semibold leading-tight text-slate-950 group-hover:text-amber-800 sm:text-xl">{size.label}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{size.bestFor}</p>
                  {size.markets ? <p className="mt-3 text-[11px] font-semibold uppercase tracking-normal text-slate-500">{size.markets}</p> : null}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="technical-specs" className="scroll-mt-24 bg-slate-50">
        <div className="container py-12 lg:py-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionIntro
                label="Applications"
                title="Match the roll to the printer workflow"
                description="Printer model, compartment size, print volume, and compliance requirements determine the correct roll specification."
              />
              <div className="mt-8 border-t border-slate-300">
                {applications.map((application) => (
                  <div key={application.title} className="grid grid-cols-[36px_minmax(0,1fr)] gap-3 border-b border-slate-300 py-4">
                    <span className="text-amber-700 [&_svg]:h-5 [&_svg]:w-5" aria-hidden="true">{application.icon}</span>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">{application.title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-slate-600">{application.text}</p>
                      <Link href={application.href} className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-navy hover:text-amber-700">
                        {application.linkLabel} <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div data-technical-specs="true">
              <p className="mb-3 text-xs font-semibold uppercase tracking-normal text-amber-700">Technical Range</p>
              <h2 className="font-sora text-3xl font-semibold leading-tight text-slate-950">Core manufacturing specifications</h2>
              <div className="mt-8 overflow-hidden border border-slate-300 bg-white">
                <table className="w-full text-left text-sm">
                  <tbody className="divide-y divide-slate-200">
                    {technicalSpecs.map(([label, value]) => (
                      <tr key={label} className="odd:bg-white even:bg-slate-50">
                        <th className="w-[38%] px-4 py-3 font-semibold text-slate-700 sm:px-5">{label}</th>
                        <td className="px-4 py-3 leading-relaxed text-slate-600 sm:px-5">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-500">Final dimensions, meterage, coating, and printer compatibility are confirmed against your sample or printer model before production.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-navy text-white">
        <div className="container py-12 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[minmax(220px,0.58fr)_minmax(0,1.42fr)] lg:items-end lg:gap-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-normal text-amber-300">Factory Control</p>
              <h2 className="mt-3 font-sora text-3xl font-semibold leading-tight text-white">One line of accountability</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">Coating, slitting, printing, inspection, and packing are controlled within one production workflow.</p>
            </div>
            <div className="grid border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-4">
              {productionSteps.map((step) => (
                <div key={step.title} className="border-b border-r border-white/15 p-5">
                  <span className="text-amber-400 [&_svg]:h-5 [&_svg]:w-5" aria-hidden="true">{step.icon}</span>
                  <h3 className="mt-4 text-sm font-semibold text-white">{step.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-300">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/15 pt-5 text-xs font-semibold text-slate-200">
            <span className="inline-flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-amber-400" /> ISO 9001 &amp; FSC support</span>
            <span className="inline-flex items-center gap-2"><Globe2 className="h-4 w-4 text-amber-400" /> FOB, CIF &amp; DDP export terms</span>
            <span className="inline-flex items-center gap-2"><Boxes className="h-4 w-4 text-amber-400" /> OEM cartons &amp; pallet plans</span>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="container py-12 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(250px,0.65fr)_minmax(0,1.35fr)] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionIntro
                label="FAQ"
                title="Thermal roll sourcing questions"
                description="Answers on size, coating, printing, MOQ, lead time, and printer compatibility."
              />
              <Link href="#inquiry" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-amber-700">
                Ask about your printer <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="border-t border-slate-300">
              {faqs.map((faq, index) => (
                <details key={faq.q} className="group border-b border-slate-300" open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-center gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
                    <span className="font-sora text-sm font-semibold text-slate-600">0{index + 1}</span>
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

      <section id="inquiry" className="scroll-mt-24 bg-slate-50">
        <div className="container py-12 lg:py-16">
          <div className="grid overflow-hidden border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.09)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="flex flex-col bg-brand-navy p-8 text-white lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-normal text-amber-300">Thermal Roll Quote</p>
              <h2 className="mt-3 font-sora text-3xl font-semibold leading-tight lg:text-4xl">Request roll pricing</h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-300 lg:text-base">Send the roll width, diameter, core, quantity, destination, and printing requirement. We will confirm compatibility, MOQ, lead time, and export pricing.</p>
              <div className="mt-8 space-y-3 border-t border-white/15 pt-6 text-sm text-slate-200">
                <p className="flex items-center gap-2"><Check className="h-4 w-4 text-amber-400" /> Standard and custom sizes</p>
                <p className="flex items-center gap-2"><Check className="h-4 w-4 text-amber-400" /> Blank and printed options</p>
                <p className="flex items-center gap-2"><Check className="h-4 w-4 text-amber-400" /> Printer compatibility review</p>
              </div>
              <div className="mt-auto pt-8">
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-amber-300 hover:text-amber-200">
                  <Phone className="h-4 w-4" /> Send specs on WhatsApp
                </a>
              </div>
            </div>
            <div className="p-7 lg:p-9">
              <InquiryForm compact productName="Thermal Paper Rolls" initialMessage="Roll width:&#10;Roll diameter:&#10;Core size:&#10;Quantity:&#10;Destination:&#10;Blank or custom printed:" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
