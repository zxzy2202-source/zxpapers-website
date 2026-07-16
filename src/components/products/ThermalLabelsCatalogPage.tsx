import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Barcode,
  Check,
  ChevronDown,
  Factory,
  FileCheck2,
  PackageCheck,
  Printer,
  ShieldCheck,
  Snowflake,
  Truck,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import InquiryForm from "@/components/shared/InquiryForm";

export interface ThermalLabelFamily {
  tag: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  href: string;
  featured?: boolean;
}

export interface ThermalLabelApplication {
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  href: string;
  linkLabel: string;
}

interface ThermalLabelsCatalogPageProps {
  heroImage: string;
  overviewImage: string;
  customImage: string;
  qualityImage: string;
  whatsappHref: string;
  families: ThermalLabelFamily[];
  applications: ThermalLabelApplication[];
  sizes: Array<{ slug: string; label: string; badge?: string; markets?: string }>;
  faqs: Array<{ q: string; a: string }>;
}

const buyerFacts = [
  { icon: <Truck />, label: "Shipping", value: "4x6 roll and fanfold formats" },
  { icon: <Barcode />, label: "Barcode", value: "FNSKU, UPC, EAN and 2D code" },
  { icon: <Snowflake />, label: "Environment", value: "Freezer, food and high-tack adhesives" },
  { icon: <ShieldCheck />, label: "Compliance", value: "BPA-Free, BPS-Free and FSC options" },
];

const selectionRows = [
  ["Short-term shipping, receipts or stock labels", "Direct thermal", "No ribbon required. Best for fast-moving labels."],
  ["Long-term asset, industrial or medical tracking", "Thermal transfer", "Ribbon-protected image for demanding environments."],
  ["Cartons, poly mailers and standard packaging", "Permanent adhesive", "Stable everyday adhesion on common surfaces."],
  ["Freezer, condensation or variable-temperature logistics", "Freezer or all-temperature adhesive", "Select the adhesive after the real surface and temperature test."],
];

const qualityControls = [
  { icon: <Printer />, title: "Printer compatibility", text: "Confirm printer model, DPI, core, roll diameter and feed direction before production." },
  { icon: <FileCheck2 />, title: "Barcode verification", text: "Review barcode contrast, quiet zones, die-cut position and 2D code readability." },
  { icon: <Factory />, title: "Batch control", text: "Track face stock, coating, adhesive, liner strength and roll tension by batch." },
  { icon: <PackageCheck />, title: "Export packing", text: "Use carton labels, pallet marks and private-label references that can be repeated." },
];

function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">{eyebrow}</p> : null}
      <h2 className="font-sora text-3xl font-semibold leading-tight text-slate-950 lg:text-[2.6rem]">{title}</h2>
      {description ? <p className="mt-4 max-w-[68ch] text-base leading-relaxed text-slate-600 lg:text-lg">{description}</p> : null}
    </div>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-700">
          <Check className="mt-0.5 h-4 w-4 flex-none text-amber-700" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ThermalLabelsCatalogPage({
  heroImage,
  overviewImage,
  customImage,
  qualityImage,
  whatsappHref,
  families,
  applications,
  sizes,
  faqs,
}: ThermalLabelsCatalogPageProps) {
  return (
    <Layout>
      <PageHero
        bgImage={heroImage}
        overlayDir="left"
        overlayOpacity={68}
        minHeight="min-h-[490px]"
        compact
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "Thermal Labels" }]}
        badge={{ text: "Factory-direct thermal label programs", color: "amber" }}
        title={<>Thermal Labels for <span className="text-amber-400">Shipping and Barcode</span></>}
        subtitle="Direct thermal and thermal transfer labels for clear scans, reliable adhesion and food, freezer and industrial applications."
        trustBadges={["4x6 and fanfold", "Printer compatibility", "Custom sizes", "OEM packing"]}
        stats={[
          { value: "4x6", label: "Shipping standard" },
          { value: "300 / 600 dpi", label: "Barcode ready" },
          { value: "BPA / BPS", label: "Compliance options" },
          { value: "24h", label: "Quote response" },
        ]}
        ctas={[
          { label: "Get Label Pricing", href: "#inquiry", variant: "primary", icon: <ArrowRight className="h-4 w-4" /> },
          { label: "WhatsApp for Quote", href: whatsappHref, variant: "whatsapp", icon: <ArrowUpRight className="h-4 w-4" aria-hidden="true" />, external: true },
        ]}
      />

      <section id="buying-paths" className="border-b border-slate-200 bg-white" aria-label="Thermal label buying facts">
        <div className="container py-4">
          <div className="grid grid-cols-2 border-l border-t border-slate-200 lg:grid-cols-4">
            {buyerFacts.map((fact) => (
              <a key={fact.label} href={fact.label === "Barcode" ? "#technical-specs" : "#applications"} className="group flex min-h-24 items-center gap-3 border-b border-r border-slate-200 px-4 py-3 transition-colors hover:bg-amber-50 sm:px-5">
                <span className="flex h-9 w-9 flex-none items-center justify-center text-brand-navy [&_svg]:h-5 [&_svg]:w-5" aria-hidden="true">{fact.icon}</span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{fact.label}</span>
                  <span className="mt-1 block text-sm font-semibold leading-snug text-slate-900 group-hover:text-amber-800">{fact.value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="overview" className="bg-slate-50">
        <div className="container py-14 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden border border-slate-200 bg-white">
              <Image src={overviewImage} alt="Thermal labels prepared for shipping and barcode printing" fill sizes="(max-width: 1024px) 100vw, 48vw" className="object-cover" />
            </div>
            <div>
              <SectionHeading eyebrow="Start with the use case" title="What are thermal labels?" description="Thermal labels are adhesive labels designed for thermal printers. Direct thermal labels suit short-term shipping, receipts and food applications. Thermal transfer labels use a ribbon for longer-lasting industrial, medical and outdoor identification." />
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {[
                  ["Scan reliably", "High-contrast coating and controlled die-cutting support first-time barcode reads."],
                  ["Stick to the surface", "Choose permanent, removable, high-tack, all-temperature or freezer adhesive."],
                  ["Fit the printer", "Match core, roll diameter, label gap, DPI and feed direction before ordering."],
                  ["Pass the audit", "BPA-Free, BPS-Free, phenol-free, FSC and REACH-ready options are available."],
                ].map(([title, text]) => (
                  <div key={title} className="border-t border-slate-300 pt-4">
                    <h3 className="text-sm font-semibold text-slate-950">{title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{text}</p>
                  </div>
                ))}
              </div>
              <Link href="#inquiry" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition-colors hover:text-amber-700">
                Send your printer model <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="product-families" className="scroll-mt-24 border-y border-slate-200 bg-white">
        <div className="container py-14 lg:py-20">
          <SectionHeading eyebrow="Product families" title="Build the label range around the job" description="Start with proven P0 SKUs, then add specialty materials and custom printing as your customers' applications grow." />
          <div className="mt-10">
            {families.filter((family) => family.featured).map((family) => (
              <Link key={family.title} href={family.href} className="group block overflow-hidden border border-slate-200 bg-slate-950">
                <div className="relative min-h-[410px] overflow-hidden sm:min-h-[470px] xl:min-h-[520px]">
                  <Image src={family.image} alt={family.imageAlt} fill sizes="(max-width: 1280px) 100vw, 86vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-8">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-300">{family.tag}</p>
                    <h3 className="mt-2 font-sora text-2xl font-semibold leading-tight sm:text-3xl">{family.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">{family.text}</p>
                    <span className="mt-5 inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-amber-300">View product range <ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
                  </div>
                </div>
              </Link>
            ))}

            <div className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-6">
              {families.filter((family) => !family.featured).map((family, index, secondaryFamilies) => {
                const isLast = index === secondaryFamilies.length - 1;
                const layout = index <= 1 ? "xl:col-span-3" : isLast ? "sm:col-span-2 xl:col-span-2" : "xl:col-span-2";

                return (
                  <Link key={family.title} href={family.href} className={`group overflow-hidden border border-slate-200 bg-white ${isLast ? "grid grid-cols-1 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:flex xl:flex-col" : "flex flex-col"} ${layout}`}>
                    <div className={`relative aspect-[16/9] shrink-0 overflow-hidden bg-slate-100 xl:aspect-[16/7] ${isLast ? "sm:aspect-auto sm:min-h-[280px] xl:min-h-0" : ""}`}>
                      <Image src={family.image} alt={family.imageAlt} fill sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 42vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                    </div>
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-700">{family.tag}</p>
                      <h3 className="mt-2 font-sora text-xl font-semibold leading-tight text-slate-950 group-hover:text-amber-800">{family.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{family.text}</p>
                      <span className="mt-auto inline-flex shrink-0 items-center gap-2 whitespace-nowrap pt-5 text-sm font-semibold text-brand-navy transition-colors group-hover:text-amber-700">View product range <ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="applications" className="bg-slate-50">
        <div className="container py-14 lg:py-20">
          <SectionHeading title="Thermal labels by application" description="The right label is defined by the surface, environment, printer and expected image life. These are the programs buyers usually compare first." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((application) => (
              <article key={application.title} className="overflow-hidden border border-slate-200 bg-white">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image src={application.image} alt={application.imageAlt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-sora text-lg font-semibold text-slate-950">{application.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{application.text}</p>
                  <Link href={application.href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition-colors hover:text-amber-700">
                    {application.linkLabel} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="technical-specs" className="border-y border-slate-200 bg-white">
        <div className="container py-14 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-16">
            <div>
              <SectionHeading eyebrow="Material and adhesive selection" title="Choose the label construction before you choose the price" description="A quote is only useful when the label survives the real packaging surface and printer workflow." />
              <div className="mt-8">
                <CheckList items={["Direct thermal for short-term shipping, stock and food labels", "Thermal transfer for durable industrial, medical and outdoor identification", "Permanent, removable, high-tack, all-temperature and freezer adhesives", "Paper, top-coated paper, BOPP, PET, PP and PI options by application"]} />
              </div>
            </div>
            <div className="overflow-hidden border border-slate-300">
              <div className="grid grid-cols-[1.15fr_0.8fr_1.3fr] bg-brand-navy px-4 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-white sm:px-5">
                <span>Buyer requirement</span><span>Route</span><span>Why it matters</span>
              </div>
              {selectionRows.map(([question, route, reason], index) => (
                <div key={question} className={`grid grid-cols-[1.15fr_0.8fr_1.3fr] gap-3 px-4 py-4 text-sm sm:px-5 ${index % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                  <span className="font-medium leading-relaxed text-slate-800">{question}</span>
                  <span className="font-semibold leading-relaxed text-amber-700">{route}</span>
                  <span className="leading-relaxed text-slate-600">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="popular-sizes" className="bg-slate-50">
        <div className="container py-14 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1.35fr)] lg:gap-16">
            <div>
              <SectionHeading title="Popular sizes and printer fit" description="Use a standard size when it matches your printer. For a custom die-cut, send the printer model, label width, height, gap, core and maximum roll diameter." />
              <Link href="#inquiry" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition-colors hover:text-amber-700">Check a custom size <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            </div>
            <div className="grid grid-cols-2 border-l border-t border-slate-300 sm:grid-cols-3">
              {sizes.map((size) => (
                <Link key={size.slug} href={`/products/thermal-labels/${size.slug}`} className="group min-h-36 border-b border-r border-slate-300 bg-white p-4 transition-colors hover:bg-amber-50 sm:p-5">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-semibold text-slate-500">{size.markets ?? "Global"}</span>
                    {size.badge ? <span className="border border-amber-200 bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-800">{size.badge}</span> : null}
                  </div>
                  <h3 className="mt-8 font-sora text-lg font-semibold leading-tight text-slate-950 group-hover:text-amber-800">{size.label}</h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-navy">Specification <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" /></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-navy text-white">
        <div className="container py-14 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">Quality and compliance</p>
              <h2 className="mt-3 font-sora text-3xl font-semibold leading-tight text-white lg:text-[2.6rem]">Control the failure points before they reach your warehouse</h2>
              <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-slate-300">A stable label program is more than a roll price. We confirm the printer, coating, adhesive, barcode, batch and packing details that affect your operating cost.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {qualityControls.map((control) => (
                  <div key={control.title} className="border-t border-white/15 pt-4">
                    <span className="text-amber-300 [&_svg]:h-5 [&_svg]:w-5" aria-hidden="true">{control.icon}</span>
                    <h3 className="mt-3 text-sm font-semibold text-white">{control.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-300">{control.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden border border-white/15 bg-slate-900">
              <Image src={qualityImage} alt="Thermal label production and quality control line" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="custom-printing" className="bg-white">
        <div className="container py-14 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
            <div className="relative order-2 aspect-[4/3] overflow-hidden border border-slate-200 bg-slate-100 lg:order-1">
              <Image src={customImage} alt="Custom printed thermal labels and private-label packaging" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading eyebrow="Custom printing and private label" title="Turn a consumable into a repeatable SKU" description="Pre-print logos, warning text, FNSKU areas, QR codes or multilingual instructions, then reuse the approved artwork and packing reference for every reorder." />
              <div className="mt-7">
                <CheckList items={["Custom size, shape, roll or fanfold format", "Logo, barcode, QR code, warning text and variable fields", "Low-MOQ sample validation before a larger program", "Private-label bags, cartons, pallet marks and reorder references"]} />
              </div>
              <Link href="/products/thermal-labels/custom-printed" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition-colors hover:text-amber-700">Explore custom printed labels <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="container py-14 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(250px,0.65fr)_minmax(0,1.35fr)] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading eyebrow="FAQ" title="Thermal label sourcing questions" description="Answers for printer compatibility, material selection, adhesive performance, compliance and custom production." />
              <Link href="#inquiry" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition-colors hover:text-amber-700">Ask about your application <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            </div>
            <div className="border-t border-slate-300">
              {faqs.map((faq, index) => (
                <details key={faq.q} className="group border-b border-slate-300" open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-center gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
                    <span className="font-sora text-sm font-semibold text-slate-500">{String(index + 1).padStart(2, "0")}</span>
                    <span className="flex-1 font-sora text-base font-semibold text-slate-900">{faq.q}</span>
                    <ChevronDown className="h-5 w-5 flex-none text-slate-500 transition-transform group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <p className="pb-5 pl-10 pr-8 text-sm leading-relaxed text-slate-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="inquiry" className="scroll-mt-24 bg-white">
        <div className="container py-14 lg:py-20">
          <div className="grid overflow-hidden border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.09)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="flex flex-col bg-brand-navy p-8 text-white lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">Thermal label quote</p>
              <h2 className="mt-3 font-sora text-3xl font-semibold leading-tight text-white lg:text-4xl">Send the details that decide the right label</h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-300 lg:text-base">Share your printer model, label size, core, quantity, surface, environment and destination. We will confirm the material, adhesive, MOQ, lead time and packing route.</p>
              <div className="mt-8 space-y-3 border-t border-white/15 pt-6 text-sm text-slate-200">
                {["Free sample and compatibility review", "Blank, custom printed and private-label options", "BPA / BPS / phenol-free documents when required"].map((item) => (
                  <p key={item} className="flex items-center gap-2"><Check className="h-4 w-4 text-amber-400" aria-hidden="true" /> {item}</p>
                ))}
              </div>
              <div className="mt-auto pt-8">
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-amber-300 transition-colors hover:text-amber-200"><ArrowUpRight className="h-4 w-4" aria-hidden="true" /> Send specs on WhatsApp</a>
              </div>
            </div>
            <div className="p-7 lg:p-9">
              <InquiryForm compact productName="Thermal Labels" initialMessage={"Printer model:\nLabel size:\nCore and roll diameter:\nQuantity:\nSurface and temperature:\nDirect thermal or thermal transfer:\nBlank or custom printed:"} />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="container py-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-slate-900">Related label programs</p>
              <p className="mt-1 text-sm text-slate-600">Continue with the format your printer or packaging line already uses.</p>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-brand-navy">
              <Link href="/products/shipping-labels" className="transition-colors hover:text-amber-700">Shipping labels</Link>
              <Link href="/products/barcode-labels" className="transition-colors hover:text-amber-700">Barcode labels</Link>
              <Link href="/products/linerless-labels" className="transition-colors hover:text-amber-700">Linerless labels</Link>
              <Link href="/products/thermal-labels/custom-printed" className="transition-colors hover:text-amber-700">Custom printed labels</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
