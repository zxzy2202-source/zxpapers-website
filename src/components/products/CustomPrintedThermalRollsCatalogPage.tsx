import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock,
  FileCheck2,
  FileText,
  Languages,
  MessageSquare,
  Package,
  Palette,
  Phone,
  Printer,
  QrCode,
  ShieldCheck,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import InquiryForm from "@/components/shared/InquiryForm";

interface RowItem { label: string; value: string }
interface CardItem { title: string; desc: string }
interface StepItem { step: string; title: string; desc: string }
interface RegionItem { title: string; badge: string; items: string[] }
interface SizeItem { label: string; href: string; badge?: string; markets?: string }
interface RelatedProductItem { title: string; description: string; href: string; image: string; imageAlt: string; badge: string }

interface CustomPrintedThermalRollsCatalogPageProps {
  heroImage: string;
  whatsappHref: string;
  printingOptions: CardItem[];
  orderSteps: StepItem[];
  printingSpecs: RowItem[];
  productSpecs: RowItem[];
  packagingInfo: RowItem[];
  regionalApplications: RegionItem[];
  sizes: SizeItem[];
  relatedProducts: RelatedProductItem[];
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

const capabilityIcons = [<Palette key="palette" />, <FileText key="message" />, <QrCode key="qr" />, <ShieldCheck key="security" />, <Languages key="language" />, <Printer key="print" />];

const orderFacts = [
  { icon: <Package />, label: "Custom MOQ", value: "From 1,000 rolls" },
  { icon: <Clock />, label: "Production", value: "10–18 business days" },
  { icon: <Palette />, label: "Print system", value: "Up to 4-color flexo" },
  { icon: <FileCheck2 />, label: "Artwork", value: "Digital proof included" },
];

export default function CustomPrintedThermalRollsCatalogPage({
  heroImage,
  whatsappHref,
  printingOptions,
  orderSteps,
  printingSpecs,
  productSpecs,
  packagingInfo,
  regionalApplications,
  sizes,
  relatedProducts,
  faqs,
}: CustomPrintedThermalRollsCatalogPageProps) {
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
          { label: "Custom Printed" },
        ]}
        title={<>Custom Printed Thermal Rolls for <span className="text-amber-400">Brand &amp; Promotion</span></>}
        subtitle="Print logos, promotions, QR codes, multilingual layouts, or compliance text on 57mm, 80mm, and custom thermal rolls with OEM export packaging."
        ctas={[
          { label: "Request a Custom Quote", href: "#inquiry", variant: "primary", icon: <MessageSquare className="h-4 w-4" /> },
          { label: "WhatsApp", href: whatsappHref, variant: "whatsapp", icon: <Phone className="h-4 w-4" />, external: true },
        ]}
      />

      <section className="border-b border-slate-200 bg-white" aria-label="Custom printed thermal roll order snapshot">
        <div className="container py-5">
          <div className="grid grid-cols-2 border-l border-t border-slate-200 lg:grid-cols-4">
            {orderFacts.map((fact) => (
              <div key={fact.label} className="flex min-h-20 items-center gap-3 border-b border-r border-slate-200 px-4 py-3 sm:px-5">
                <span className="text-amber-700 [&_svg]:h-5 [&_svg]:w-5" aria-hidden="true">{fact.icon}</span>
                <div><p className="text-xs font-semibold uppercase tracking-normal text-slate-500">{fact.label}</p><p className="mt-1 text-sm font-semibold leading-snug text-slate-900">{fact.value}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container py-12 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-14">
            <div>
              <div className="relative aspect-[16/11] overflow-hidden border border-slate-200 bg-white">
                <Image src={heroImage} alt="Custom printed thermal paper rolls with branded receipt artwork" fill sizes="(max-width: 1024px) 100vw, 41vw" className="object-cover" />
              </div>
              <div className="mt-6"><SectionIntro label="Printing capability" title="Turn each receipt into a useful brand surface" description="Start with the customer action you want the receipt to support, then confirm print side, colors, repeat pattern, artwork, paper grade, and packaging." /></div>
            </div>
            <div className="grid border-l border-t border-slate-300 sm:grid-cols-2">
              {printingOptions.map((item, index) => (
                <article key={item.title} className="border-b border-r border-slate-300 bg-white p-5 lg:p-6">
                  <span className="text-amber-700 [&_svg]:h-5 [&_svg]:w-5" aria-hidden="true">{capabilityIcons[index]}</span>
                  <h3 className="mt-4 font-sora text-base font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="container py-12 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(250px,0.58fr)_minmax(0,1.42fr)] lg:gap-14">
            <SectionIntro label="Production workflow" title="From artwork to approved production" description="Each approval point reduces the risk of color, layout, repeat, and packing errors before the full order enters production." />
            <ol className="border-t border-slate-300">
              {orderSteps.map((item) => (
                <li key={item.step} className="grid grid-cols-[42px_minmax(0,1fr)] gap-4 border-b border-slate-300 py-5 sm:grid-cols-[52px_minmax(160px,0.42fr)_minmax(0,1fr)]">
                  <span className="font-sora text-sm font-semibold text-amber-700">{item.step}</span>
                  <h3 className="font-sora text-base font-semibold text-slate-950">{item.title}</h3>
                  <p className="col-start-2 text-sm leading-relaxed text-slate-600 sm:col-start-3">{item.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container py-12 lg:py-16">
          <SectionIntro label="Technical specification" title="Confirm print and paper as one specification" description="Artwork approval is only one part of the order. Print method, paper dimensions, coating, image life, quantity, packing, and delivery terms must be confirmed together." />
          <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div><h3 className="mb-4 font-sora text-xl font-semibold text-slate-950">Printing specifications</h3><dl className="grid border-l border-t border-slate-300 bg-white sm:grid-cols-2">{printingSpecs.map((row) => <div key={row.label} className="border-b border-r border-slate-300 p-4"><dt className="text-xs font-semibold uppercase tracking-normal text-slate-500">{row.label}</dt><dd className="mt-2 text-sm font-semibold leading-relaxed text-slate-900">{row.value}</dd></div>)}</dl></div>
            <div><h3 className="mb-4 font-sora text-xl font-semibold text-slate-950">Paper & order specifications</h3><dl className="grid border-l border-t border-slate-300 bg-white sm:grid-cols-2">{productSpecs.map((row) => <div key={row.label} className="border-b border-r border-slate-300 p-4"><dt className="text-xs font-semibold uppercase tracking-normal text-slate-500">{row.label}</dt><dd className="mt-2 text-sm font-semibold leading-relaxed text-slate-900">{row.value}</dd></div>)}</dl></div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="container py-12 lg:py-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionIntro label="Available sizes" title="Choose the roll before placing artwork" description="The artwork repeat and printable area depend on the final width, diameter, core, and roll length. Open a size page before preparing the print layout." />
              <div className="mt-8 grid grid-cols-2 border-l border-t border-slate-300 sm:grid-cols-3">{sizes.map((size) => <Link key={size.href} href={size.href} className="group min-h-28 border-b border-r border-slate-300 p-4 hover:bg-amber-50"><div className="flex items-start justify-between gap-2"><span className="font-sora text-base font-semibold text-slate-950 group-hover:text-amber-800">{size.label}</span>{size.badge ? <span className="bg-amber-100 px-2 py-0.5 text-[9px] font-semibold uppercase text-amber-800">{size.badge}</span> : null}</div><p className="mt-5 text-xs uppercase text-slate-500">{size.markets || "Standard"}</p></Link>)}</div>
            </div>
            <div>
              <SectionIntro label="Regional applications" title="Adapt artwork to the market and workflow" description="Language, receipt regulations, payment systems, promotions, and distributor requirements influence the final artwork and paper grade." />
              <div className="mt-8 border-t border-slate-300">{regionalApplications.map((region) => <article key={region.title} className="border-b border-slate-300 py-4"><div className="flex flex-wrap items-center justify-between gap-2"><h3 className="font-sora text-base font-semibold text-slate-950">{region.title}</h3><span className="text-xs font-medium text-slate-500">{region.badge}</span></div><ul className="mt-3 grid gap-2 sm:grid-cols-2">{region.items.map((item) => <li key={item} className="flex gap-2 text-xs leading-relaxed text-slate-600"><Check className="mt-0.5 h-3.5 w-3.5 flex-none text-amber-700" />{item}</li>)}</ul></article>)}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container py-12 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(250px,0.54fr)_minmax(0,1.46fr)] lg:gap-14">
            <div>
              <SectionIntro label="Related products" title="Continue with the product that matches the next requirement" description="Move to blank stock, printed labels, standard high-volume sizes, or full OEM services without returning to the main catalog." />
              <p className="mt-5 text-sm leading-relaxed text-slate-600">Recommendations are based on the closest alternative product, adjacent print format, and common next procurement step.</p>
            </div>
            <div data-related-products="true" className="grid border-l border-t border-slate-300 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((product) => (
                <article key={product.href} className="group border-b border-r border-slate-300 bg-white">
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-100"><Image src={product.image} alt={product.imageAlt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 24vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none" /></div>
                  <div className="p-5"><p className="text-xs font-semibold uppercase tracking-normal text-amber-700">{product.badge}</p><h3 className="mt-2 font-sora text-lg font-semibold leading-tight text-slate-950">{product.title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600">{product.description}</p><Link href={product.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-amber-700">View product <ArrowRight className="h-4 w-4" /></Link></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="container py-12 lg:py-16">
          <div className="grid gap-12 lg:grid-cols-[minmax(250px,0.62fr)_minmax(0,1.38fr)] lg:gap-16">
            <div><SectionIntro label="Packing & FAQ" title="Resolve production and delivery questions" description="Confirm custom packing, export terms, proof approval, color matching, and production timing before the order is released." /><dl className="mt-8 border-t border-slate-300">{packagingInfo.map((row) => <div key={row.label} className="grid grid-cols-[minmax(105px,0.42fr)_minmax(0,1fr)] gap-4 border-b border-slate-300 py-3 text-sm"><dt className="text-slate-500">{row.label}</dt><dd className="font-semibold leading-relaxed text-slate-900">{row.value}</dd></div>)}</dl></div>
            <div className="border-t border-slate-300">{faqs.map((faq, index) => <details key={faq.q} className="group border-b border-slate-300" open={index === 0}><summary className="flex cursor-pointer list-none items-center gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 [&::-webkit-details-marker]:hidden"><span className="font-sora text-sm font-semibold text-amber-700">0{index + 1}</span><span className="flex-1 font-sora text-base font-semibold text-slate-900">{faq.q}</span><ChevronDown className="h-5 w-5 text-slate-500 transition-transform group-open:rotate-180" /></summary><p className="pb-5 pl-10 pr-8 text-sm leading-relaxed text-slate-600">{faq.a}</p></details>)}</div>
          </div>
        </div>
      </section>

      <section id="inquiry" className="scroll-mt-24 bg-slate-50">
        <div className="container py-12 lg:py-16">
          <div className="grid overflow-hidden border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.09)] lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
            <div className="bg-brand-navy p-8 text-white lg:p-10"><p className="text-xs font-semibold uppercase tracking-normal text-amber-300">Custom production quote</p><h2 className="mt-3 font-sora text-3xl font-semibold leading-tight lg:text-4xl">Turn your artwork into a production brief</h2><p className="mt-4 max-w-md text-sm leading-relaxed text-slate-300 lg:text-base">Send the size, quantity, colors, print side, repeat pattern, destination, and available artwork. We will confirm feasibility, proof timing, MOQ, lead time, packing, and export pricing.</p><div className="mt-8 border-y border-white/15">{["Free digital artwork proof", "Pantone, CMYK, and multilingual layout review", "Static QR, barcode, coupon, and reverse-side printing", "Private-label cartons, polybags, and core labels"].map((item) => <p key={item} className="flex gap-2 border-b border-white/15 py-3 text-sm text-slate-200 last:border-b-0"><Check className="mt-0.5 h-4 w-4 flex-none text-amber-400" />{item}</p>)}</div><a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-amber-300 hover:text-amber-200"><Phone className="h-4 w-4" />Send artwork details on WhatsApp</a></div>
            <div className="p-7 lg:p-9"><InquiryForm compact initialMessage="Product: Custom printed thermal paper rolls&#10;Size / core:&#10;Quantity:&#10;Print colors / side:&#10;Artwork available:&#10;Destination:" /></div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
