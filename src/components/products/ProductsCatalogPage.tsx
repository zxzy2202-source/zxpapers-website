import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronDown,
  Clock3,
  Factory,
  FileStack,
  Globe2,
  Layers3,
  MessageSquare,
  Package,
  Phone,
  ReceiptText,
  Ruler,
  ShieldCheck,
  Tags,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import InquiryForm from "@/components/shared/InquiryForm";

export interface CatalogLink {
  label: string;
  href: string;
  note?: string;
  badge?: string;
}

export interface CatalogLinkGroup {
  title: string;
  links: CatalogLink[];
}

export interface CatalogFamily {
  id: "thermal-rolls" | "thermal-labels" | "can-labels" | "bottle-labels" | "ncr-forms";
  navLabel: string;
  title: string;
  badge: string;
  description: string;
  href: string;
  image?: string;
  imageAlt?: string;
  facts: string[];
  applications: string[];
  buyers: string[];
  groups: CatalogLinkGroup[];
}

interface ProductsCatalogPageProps {
  heroImage: string;
  whatsappHref: string;
  families: CatalogFamily[];
  faqs: Array<{ q: string; a: string }>;
}

const familyIcons: Record<CatalogFamily["id"], ReactNode> = {
  "thermal-rolls": <ReceiptText />,
  "thermal-labels": <Tags />,
  "can-labels": <Package />,
  "bottle-labels": <Layers3 />,
  "ncr-forms": <FileStack />,
};

function SectionIntro({ label, title, description }: { label: string; title: string; description: string }) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-normal text-amber-700">{label}</p>
      <h2 className="font-sora text-3xl font-semibold leading-tight text-slate-950 lg:text-[2.5rem]">{title}</h2>
      <p className="mt-4 text-base leading-relaxed text-slate-600 lg:text-lg">{description}</p>
    </div>
  );
}

function ProductApplications({ families }: { families: CatalogFamily[] }) {
  return (
    <section data-product-family-directory="true" data-product-applications="true" className="border-b border-slate-200 bg-white" aria-label="Product families applications and typical buyers">
      <div className="container py-12 lg:py-16">
        <SectionIntro
          label="Product families, applications & buyers"
          title="Find the product family that fits your operation"
          description="Compare each range by product, workflow, and typical buyer, then move directly to its formats, materials, and custom options."
        />
        <div className="mt-10 border-t border-slate-300 lg:mt-12">
          {families.map((family, index) => {
            const imageFirst = index % 2 === 0;
            const hasImage = Boolean(family.image && family.imageAlt);

            return (
              <article key={family.id} data-product-family-card={family.id} data-product-application={family.id} className="grid gap-7 border-b border-slate-300 py-8 last:border-b-0 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-stretch lg:gap-12 lg:py-10">
                <div className={`${imageFirst ? "lg:order-1" : "lg:order-2"} relative min-h-52 overflow-hidden bg-slate-100 lg:min-h-64`}>
                  {hasImage ? (
                    <Image src={family.image!} alt={family.imageAlt!} fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover" />
                  ) : (
                    <div className="flex h-full items-end justify-between bg-brand-navy-alt p-6 text-white">
                      <span className="font-sora text-5xl font-semibold text-white/35" aria-hidden="true">0{index + 1}</span>
                      <span className="text-amber-400 [&_svg]:h-9 [&_svg]:w-9" aria-hidden="true">{familyIcons[family.id]}</span>
                    </div>
                  )}
                </div>
                <div className={`${imageFirst ? "lg:order-2" : "lg:order-1"} flex flex-col py-1`}>
                  <p className="text-xs font-semibold uppercase tracking-normal text-amber-700">{family.badge}</p>
                  <h3 className="mt-3 font-sora text-2xl font-semibold leading-tight text-slate-950 lg:text-3xl">{family.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 lg:text-base">{family.description}</p>
                  <div className="mt-6 grid gap-6 border-t border-slate-200 pt-5 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-normal text-slate-500">Typical applications</p>
                      <ul className="mt-3 space-y-2">
                        {family.applications.map((application) => (
                          <li key={application} className="flex items-start gap-2 text-sm leading-relaxed text-slate-700">
                            <Check className="mt-0.5 h-4 w-4 flex-none text-amber-700" aria-hidden="true" />
                            {application}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="border-t border-slate-200 pt-5 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
                      <p className="text-xs font-semibold uppercase tracking-normal text-slate-500">Typical buyers</p>
                      <ul className="mt-3 space-y-2">
                        {family.buyers.map((buyer) => (
                          <li key={buyer} className="text-sm leading-relaxed text-slate-700">{buyer}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Link href={family.href} className="mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-brand-navy transition-colors hover:text-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500">
                    Explore {family.navLabel} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StandardSizeDirectory({ families }: { families: CatalogFamily[] }) {
  const familiesWithStandards = families.flatMap((family) => {
    const group = family.groups.find((candidate) => /size|count/i.test(candidate.title));
    return group ? [{ family, group }] : [];
  });

  return (
    <section data-standard-size-directory="true" className="border-b border-slate-200 bg-slate-50" aria-label="Popular standard sizes and formats">
      <div className="container py-10 lg:py-14">
        <div className="grid gap-6 md:grid-cols-[minmax(0,0.92fr)_minmax(280px,1.08fr)] md:items-end md:gap-10 lg:gap-16">
          <SectionIntro
            label="Popular standard sizes"
            title="Start with a proven format"
            description="These are the formats buyers request most often across receipt rolls, labels, packaging, and business forms. Select one to review the full specification or request an equivalent custom size."
          />
          <div className="grid grid-cols-2 border-l border-t border-slate-200 bg-white text-sm">
            <div className="border-b border-r border-slate-200 p-4">
              <p className="text-xs font-semibold uppercase tracking-normal text-slate-500">Stock reference</p>
              <p className="mt-2 leading-relaxed text-slate-700">Compare proven regional formats and common use cases.</p>
            </div>
            <div className="border-b border-r border-slate-200 p-4">
              <p className="text-xs font-semibold uppercase tracking-normal text-slate-500">Custom equivalent</p>
              <p className="mt-2 leading-relaxed text-slate-700">Adjust dimensions, core, material, adhesive, and packing.</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-300 lg:mt-10">
          {familiesWithStandards.map(({ family, group }) => (
            <article key={family.id} data-standard-size-family={family.id} className="grid gap-6 border-b border-slate-300 py-6 last:border-b-0 md:grid-cols-[minmax(220px,0.52fr)_minmax(0,1.48fr)] md:gap-8 lg:grid-cols-[minmax(260px,0.48fr)_minmax(0,1.52fr)] lg:gap-12 lg:py-7">
              <div className="grid grid-cols-[96px_minmax(0,1fr)] items-start gap-4 md:grid-cols-1">
                {family.image && family.imageAlt ? (
                  <div className="relative aspect-square overflow-hidden bg-slate-200 md:aspect-[16/7]">
                    <Image src={family.image} alt={family.imageAlt} fill sizes="(max-width: 767px) 96px, 24vw" className="object-cover" />
                  </div>
                ) : null}
                <div className="min-w-0 md:mt-4">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-700 [&_svg]:h-4 [&_svg]:w-4" aria-hidden="true"><Ruler /></span>
                    <p className="text-xs font-semibold uppercase tracking-normal text-slate-500">{family.id === "ncr-forms" ? "Popular copy formats" : "Common standard sizes"}</p>
                  </div>
                  <h3 className="mt-2 font-sora text-lg font-semibold leading-tight text-slate-950 lg:text-xl">{family.title}</h3>
                  <Link href={family.href} className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-brand-navy transition-colors hover:text-amber-700 lg:text-sm">
                    View complete range <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-normal text-slate-500">{group.title}</p>
                <ul className="grid border-l border-t border-slate-200 sm:grid-cols-2 xl:grid-cols-3">
                  {group.links.map((link) => (
                    <li key={`${family.id}-${link.href}`} className="border-b border-r border-slate-200 bg-white">
                      <Link href={link.href} className="group flex min-h-20 flex-col justify-between gap-2 p-4 transition-colors hover:bg-amber-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-inset">
                        <span className="flex items-start justify-between gap-3">
                          <span className="font-sora text-base font-semibold leading-tight text-slate-900 group-hover:text-amber-800">{link.label}</span>
                          {link.badge ? <span className="flex-none bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-normal text-amber-800">{link.badge}</span> : null}
                        </span>
                        <span className="flex items-center justify-between gap-3 text-xs text-slate-500">
                          <span>{link.note || (family.id === "ncr-forms" ? "Copy-set format" : "Standard format")}</span>
                          <ArrowRight className="h-4 w-4 flex-none text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-amber-700" aria-hidden="true" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductMaterialGuide({ families }: { families: CatalogFamily[] }) {
  return (
    <section data-product-material-guide="true" className="border-b border-slate-200 bg-white" aria-label="Materials performance and compliance guide">
      <div className="container py-12 lg:py-16">
        <SectionIntro
          label="Materials & performance"
          title="Choose by the conditions your product must handle"
          description="Use the material and performance checkpoints below to start the technical conversation. We confirm the final facestock, coating, adhesive, copy set, and compliance documents against your actual application."
        />
        <div className="mt-9 grid border-l border-t border-slate-200 md:grid-cols-2 xl:grid-cols-3 lg:mt-12">
          {families.map((family) => (
            <article key={family.id} data-product-material={family.id} className="group border-b border-r border-slate-200 bg-white p-5 transition-colors hover:bg-slate-50 lg:p-6">
              <div className="relative aspect-[16/8] overflow-hidden bg-slate-100">
                {family.image && family.imageAlt ? <Image src={family.image} alt={family.imageAlt} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover" /> : null}
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-normal text-amber-700">{family.badge}</p>
              <h3 className="mt-2 font-sora text-lg font-semibold leading-tight text-slate-950">{family.title}</h3>
              <ul className="mt-4 space-y-2 border-t border-slate-200 pt-4">
                {family.facts.map((fact) => (
                  <li key={fact} className="flex gap-2 text-sm leading-relaxed text-slate-700">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-amber-700" aria-hidden="true" />
                    {fact}
                  </li>
                ))}
              </ul>
              <Link href={family.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition-colors hover:text-amber-700">
                Review product options <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CustomPrintingGuide({ heroImage, families }: { heroImage: string; families: CatalogFamily[] }) {
  return (
    <section data-custom-printing-guide="true" className="border-b border-slate-200 bg-slate-50" aria-label="Custom printing and private label production">
      <div className="container py-12 lg:py-16">
        <div className="grid overflow-hidden border border-slate-200 bg-white lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="relative min-h-72 bg-brand-navy lg:min-h-full">
            <Image src={heroImage} alt="ZhixinPaper production floor for custom paper and label orders" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/35 to-transparent" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-white lg:p-9">
              <p className="text-xs font-semibold uppercase tracking-normal text-amber-300">Custom printing & private label</p>
              <h2 className="mt-3 max-w-md font-sora text-3xl font-semibold leading-tight">Build a specification that is ready for production</h2>
            </div>
          </div>
          <div className="p-7 lg:p-9">
            <p className="max-w-2xl text-sm leading-relaxed text-slate-600 lg:text-base">For branded, converted, numbered, or resale-ready products, send the product family, size, quantity, destination, and available artwork. We review the requirements before confirming the production route.</p>
            <ol className="mt-7 divide-y divide-slate-200 border-y border-slate-200">
              {[
                ["01", "Define the product", "Confirm format, size, material requirements, quantity, and destination."],
                ["02", "Review the artwork", "Check logo, colors, layout, numbering, and any variable-data or compliance content."],
                ["03", "Confirm production and packing", "Align MOQ, lead time, quality checkpoints, private-label packing, and export terms."],
              ].map(([number, title, text]) => (
                <li key={number} className="grid grid-cols-[2rem_1fr] gap-3 py-4">
                  <span className="font-sora text-sm font-semibold text-amber-700">{number}</span>
                  <div><h3 className="text-sm font-semibold text-slate-900">{title}</h3><p className="mt-1 text-sm leading-relaxed text-slate-600">{text}</p></div>
                </li>
              ))}
            </ol>
            <div className="mt-7 grid grid-cols-3 gap-px overflow-hidden border border-slate-200 bg-slate-200" aria-label="Products available for custom printing">
              {families.filter((family) => family.image && family.imageAlt).slice(0, 3).map((family) => (
                <div key={family.id} className="relative aspect-[4/3] bg-slate-100">
                  <Image src={family.image!} alt={family.imageAlt!} fill sizes="(max-width: 1024px) 30vw, 16vw" className="object-cover" />
                </div>
              ))}
            </div>
            <Link href="#inquiry" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition-colors hover:text-amber-700">Discuss a custom specification <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function LinkGroup({ group }: { group: CatalogLinkGroup }) {
  return (
    <div className="min-w-0">
      <h3 className="mb-2 text-xs font-semibold uppercase tracking-normal text-slate-500">{group.title}</h3>
      <ul className="grid grid-cols-2 gap-x-4 border-y border-slate-200 sm:block sm:divide-y sm:divide-slate-200">
        {group.links.map((link) => (
          <li key={`${group.title}-${link.href}-${link.label}`} className="border-b border-slate-200 sm:border-b-0">
            <Link
              href={link.href}
              className="group/link flex min-h-11 items-center justify-between gap-2 py-2 text-xs leading-snug text-slate-700 transition-colors hover:text-amber-800 sm:gap-3 sm:py-2.5 sm:text-sm"
            >
              <span className="min-w-0">
                <span className="font-semibold">{link.label}</span>
                {link.note ? <span className="ml-2 hidden text-xs font-normal text-slate-500 sm:inline">{link.note}</span> : null}
              </span>
              <span className="flex flex-none items-center gap-2">
                {link.badge ? (
                  <span className="hidden border border-amber-200 bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-800 sm:inline">
                    {link.badge}
                  </span>
                ) : null}
                <ArrowRight className="h-4 w-4 text-slate-400 transition-transform group-hover/link:translate-x-0.5 group-hover/link:text-amber-700" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CatalogFamilySection({ family, index }: { family: CatalogFamily; index: number }) {
  const productPathCount = family.groups.reduce((total, group) => total + group.links.length, 0);

  return (
    <article
      id={family.id}
      data-catalog-family={family.id}
      className="scroll-mt-28 border-t border-slate-300 first:border-t-0"
    >
      <details open={index === 0} className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-4 [&::-webkit-details-marker]:hidden lg:py-7">
          <span className="flex min-w-0 items-center gap-4">
            <span className="font-sora text-sm font-semibold text-amber-700">0{index + 1}</span>
            <span className="min-w-0">
              <span className="block font-sora text-xl font-semibold leading-tight text-slate-950 lg:text-2xl">{family.title}</span>
              <span className="mt-1 block text-sm text-slate-600">{family.badge} <span className="text-slate-400">|</span> {productPathCount} product paths</span>
            </span>
          </span>
          <ChevronDown className="h-5 w-5 flex-none text-slate-500 transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none" aria-hidden="true" />
        </summary>
        <div className="border-t border-slate-200 py-7 lg:grid lg:grid-cols-[minmax(230px,0.58fr)_minmax(0,1.42fr)] lg:gap-12 lg:py-9">
          <div>
            <p className="max-w-md text-sm leading-relaxed text-slate-600">Browse every stock, custom, size, material, and application route available within this family.</p>
            <Link href={family.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition-colors hover:text-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500">
              View family overview <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className={`mt-8 grid gap-x-8 gap-y-8 lg:mt-0 ${family.groups.length >= 3 ? "md:grid-cols-2 xl:grid-cols-3" : "md:grid-cols-2"}`}>
            {family.groups.map((group) => <LinkGroup key={group.title} group={group} />)}
          </div>
        </div>
      </details>
    </article>
  );
}

const comparisonRows = [
  ["Best for", "In-house and variable-data printing", "Finished branded products"],
  ["Artwork", "No artwork needed", "Logo, color and layout files"],
  ["MOQ", "Low volume for stock sizes", "From 5,000 units"],
  ["Lead time", "3 to 7 days for stock", "10 to 18 days for production"],
  ["Packaging", "Standard export cartons", "Private label and OEM packaging"],
];

const factoryFacts = [
  { icon: <Factory />, title: "In-house conversion", text: "Coating, printing, slitting, adhesive, and packing control." },
  { icon: <ShieldCheck />, title: "Compliance support", text: "ISO 9001, FSC, BPA-free, RoHS, and REACH documentation." },
  { icon: <Globe2 />, title: "Export terms", text: "FOB, CIF, and DDP support for international orders." },
  { icon: <Clock3 />, title: "Specification-led response", text: "Pricing response within 24 hours after review." },
];

export default function ProductsCatalogPage({ heroImage, whatsappHref, families, faqs }: ProductsCatalogPageProps) {
  return (
    <Layout>
      <PageHero
        bgImage={heroImage}
        bgImageAlt="ZhixinPaper thermal paper rolls, labels and NCR forms product catalog — factory-direct B2B supply"
        overlayDir="left"
        overlayOpacity={62}
        minHeight="min-h-[360px]"
        compact
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
        title={<>Thermal Paper &amp; <span className="text-amber-400">Label Products</span></>}
        subtitle="Source stock sizes or build a custom specification across thermal rolls, direct thermal labels, packaging labels, and NCR forms from one export manufacturer."
        ctas={[
          { label: "Request a Quote", href: "#inquiry", variant: "primary", icon: <MessageSquare className="h-4 w-4" /> },
          { label: "WhatsApp", href: whatsappHref, variant: "whatsapp", icon: <Phone className="h-4 w-4" />, external: true },
        ]}
      />

      <ProductApplications families={families} />

      <StandardSizeDirectory families={families} />

      <ProductMaterialGuide families={families} />

      <CustomPrintingGuide heroImage={heroImage} families={families} />

      <section className="bg-slate-50">
        <div className="container py-9 lg:py-12">
          <SectionIntro
            label="Complete product index"
            title="Every stock and custom product path"
            description="Open a family to compare formats, standard sizes, materials, and application-specific products before moving to a detail page or quote request."
          />
          <div className="mt-7 lg:mt-8">
            {families.map((family, index) => <CatalogFamilySection key={family.id} family={family} index={index} />)}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="container py-12 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.68fr)_minmax(0,1.32fr)] lg:items-start lg:gap-16">
            <SectionIntro
              label="Buying Options"
              title="Choose the supply path that fits your order"
              description="Start with stock when speed and flexible downstream printing matter. Move to custom production when the finished product needs your brand, data, format, or resale packaging."
            />
            <div data-desktop-buying-options="true" className="grid overflow-hidden border border-slate-200 md:grid-cols-2">
              <article className="border-b border-slate-200 bg-slate-50 p-6 md:border-b-0 md:border-r lg:p-8">
                <p className="text-xs font-semibold uppercase tracking-normal text-slate-500">01 / Stock supply</p>
                <h3 className="mt-3 font-sora text-2xl font-semibold leading-tight text-slate-950">Blank stock</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">For standard sizes, replenishment orders, and in-house or variable-data printing.</p>
                <ul className="mt-6 space-y-3 border-t border-slate-200 pt-5 text-sm text-slate-700">
                  <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 flex-none text-amber-700" /> No artwork approval needed</li>
                  <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 flex-none text-amber-700" /> Low-volume stock sizes available</li>
                  <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 flex-none text-amber-700" /> Typical dispatch in 3 to 7 days</li>
                </ul>
              </article>
              <article className="bg-white p-6 lg:p-8">
                <p className="text-xs font-semibold uppercase tracking-normal text-amber-700">02 / Production order</p>
                <h3 className="mt-3 font-sora text-2xl font-semibold leading-tight text-slate-950">Custom printed</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">For branded products, converted formats, serialized items, and private-label resale programs.</p>
                <ul className="mt-6 space-y-3 border-t border-slate-200 pt-5 text-sm text-slate-700">
                  <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 flex-none text-amber-700" /> Artwork, colors, and layout reviewed</li>
                  <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 flex-none text-amber-700" /> From 5,000 units for most custom work</li>
                  <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 flex-none text-amber-700" /> Typical production in 10 to 18 days</li>
                </ul>
              </article>
              <div className="col-span-full border-t border-slate-200 bg-white px-6 py-4 lg:px-8">
                <Link href="#inquiry" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition-colors hover:text-amber-700">
                  Not sure which path applies? Send your specification <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <dl data-mobile-buying-options="true" className="sr-only">
              {comparisonRows.map(([factor, blank, custom]) => (
                <div key={factor} data-buying-option><dt>{factor}</dt><dd>{blank}</dd><dd>{custom}</dd></div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="container py-12 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(260px,0.68fr)_minmax(0,1.32fr)] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionIntro
                label="FAQ"
                title="Product sourcing questions"
                description="Clear answers on range, customization, MOQ, sizes, and international delivery."
              />
              <Link href="#inquiry" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-amber-700">
                Ask about your specification <ArrowRight className="h-4 w-4" />
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
              <p className="text-xs font-semibold uppercase tracking-normal text-amber-300">Factory Quote / Next Step</p>
              <h2 className="mt-3 font-sora text-3xl font-semibold leading-tight lg:text-4xl">Turn your product brief into pricing</h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-300 lg:text-base">
                Send the product, size, quantity, destination, and supply path. We will review the specification and return MOQ, lead time, packing, and export pricing.
              </p>
              <div className="mt-8 grid border-y border-white/15 sm:grid-cols-2">
                {factoryFacts.map((item) => (
                  <div key={item.title} className="border-b border-white/15 py-4 pr-4 last:border-b-0 sm:odd:border-r sm:even:pl-4">
                    <span className="text-amber-400 [&_svg]:h-4 [&_svg]:w-4" aria-hidden="true">{item.icon}</span>
                    <h3 className="mt-2 text-sm font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-300">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-amber-200"><BadgeCheck className="h-4 w-4" /> NDA and private-label programs available</div>
              <div className="mt-auto pt-8">
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-amber-300 hover:text-amber-200">
                  <Phone className="h-4 w-4" /> Send details on WhatsApp
                </a>
              </div>
            </div>
            <div className="p-7 lg:p-9">
              <InquiryForm compact initialMessage="Product:&#10;Size / specification:&#10;Quantity:&#10;Destination:&#10;Blank or custom:" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
