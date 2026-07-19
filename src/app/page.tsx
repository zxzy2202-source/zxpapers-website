import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { preconnect, preload } from "react-dom";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  CheckCircle,
  ClipboardCheck,
  Factory as FactoryIcon,
  FileCheck2,
  Globe,
  Handshake,
  Layers,
  MessageSquare,
  Package,
  Palette,
  Phone,
  Printer,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import PopularSizesCarousel, { type SkuItem } from "@/components/shared/PopularSizesCarousel";
import { CountryFlag, type CountryCode } from "@/components/ui/country-flag";
import type { SlotKey } from "@/config/imageSlots";
import { CERTIFICATIONS, FACTORY, SITE } from "@/config/siteData";
import { getSlotImages } from "@/lib/imageSlotUtils";
import { readHero } from "@/lib/heroStore";
import { r2Image } from "@/lib/r2";

export const metadata: Metadata = {
  title: "Custom-Printed Thermal Paper, Labels & Carbonless Forms | Zhixin Paper",
  description:
    "ISO 9001 factory for blank and custom-printed thermal paper rolls, thermal labels, machine-ready roll labels and carbonless NCR forms. OEM/private label printing plus jumbo-roll supply.",
  alternates: { canonical: SITE.domain },
  openGraph: {
    title: "Custom-Printed Thermal Paper, Labels & Carbonless Forms | ZhixinPaper",
    description:
      "Factory for blank and custom-printed thermal rolls, labels, machine-ready filling-line labels and carbonless forms. OEM/private label with export-ready packing.",
    url: SITE.domain,
    type: "website",
    images: [
      {
        url: `${SITE.domain}/og-default.png`,
        width: 1200,
        height: 630,
        alt: "ZhixinPaper thermal paper and custom printing factory",
        type: "image/png",
      },
    ],
  },
};

export const revalidate = 3600; // 1 hour: hero/slot images change infrequently

const FACTORY_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/oem-factory-EHdu8eZwwzSo5DxSRyzQdF.webp";
const COATING_LINE_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/factory-coating-line-Rfrrgy9ZbXu6C6rJRRsG37.webp";
const THERMAL_ROLLS_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-rolls-RQBrphmgzbAMk7eq3HsvNq.webp";
const THERMAL_LABELS_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-labels-FgJ5U8LZDHPF5nwmD6Uqa5.webp";

type ProductLine = {
  title: string;
  spec: string;
  summary: string;
  href: string;
  slot: SlotKey;
  fallback: string;
  imagePosition?: string;
};

const productLines: ProductLine[] = [
  {
    title: "Stock Thermal Paper Rolls",
    spec: "80x80, 57x50, 57x40 and custom widths",
    summary: "Fast-moving receipt rolls for POS, cash register, ATM, kiosk and mobile printers.",
    href: "/products/thermal-paper-rolls/blank",
    slot: "home:category-thermal-rolls",
    fallback: THERMAL_ROLLS_IMAGE,
  },
  {
    title: "Thermal & Shipping Labels",
    spec: "4x6, 4x3, 2x1 and barcode formats",
    summary: "Direct thermal labels for courier, warehouse, inventory and product identification.",
    href: "/products/thermal-labels/blank",
    slot: "home:category-thermal-labels",
    fallback: THERMAL_LABELS_IMAGE,
  },
  {
    title: "Custom Printed Rolls & Labels",
    spec: "Logo, Pantone, QR and bilingual printing",
    summary: "Brand-ready products with artwork checking, core printing and private-label cartons.",
    href: "/products/thermal-paper-rolls/custom-printed",
    slot: "home:category-custom-rolls",
    fallback: FACTORY_IMAGE,
    imagePosition: "object-center",
  },
  {
    title: "NCR & Business Forms",
    spec: "2, 3 and 4-part invoices and delivery notes",
    summary: "Custom carbonless forms for dispatch, field service, receipts and order workflows.",
    href: "/products/ncr-forms",
    slot: "home:category-carbonless",
    fallback: COATING_LINE_IMAGE,
  },
  {
    title: "Filling Line Roll Labels",
    spec: "Machine-ready rolls for automatic label applicators",
    summary: "Printed and blank roll labels qualified by applicator, roll format, sensor, speed and container condition.",
    href: "/products/can-labels",
    slot: "home:category-can-labels",
    fallback: THERMAL_LABELS_IMAGE,
    imagePosition: "object-right",
  },
  {
    title: "Jumbo Roll & OEM Supply",
    spec: "405, 640 and 880 mm base rolls",
    summary: "Base-paper supply and finished-goods support for converters and peer factories.",
    href: `/contact?product=${encodeURIComponent("Jumbo Roll Supply")}`,
    slot: "home:category-jumbo-rolls",
    fallback: COATING_LINE_IMAGE,
  },
];

const buyerRoutes = [
  {
    icon: Package,
    title: "Standard Stock",
    buyer: "Distributors and warehouse buyers",
    summary: "Start with size, quantity and destination for receipt rolls or shipping labels.",
    href: "/products/thermal-paper-rolls/blank",
  },
  {
    icon: Printer,
    title: "Custom Printing",
    buyer: "Brands, retail chains and importers",
    summary: "Confirm artwork, colors, packing and compliance requirements before sampling.",
    href: "/oem/custom-printing",
  },
  {
    icon: FactoryIcon,
    title: "Factory Supply",
    buyer: "Converters and bulk purchasing teams",
    summary: "Plan jumbo rolls, OEM production, mixed SKUs or container-level cooperation.",
    href: `/contact?product=${encodeURIComponent("Jumbo Roll Supply")}`,
  },
];

const procurementFacts = [
  { value: SITE.founded, label: "Manufacturing since" },
  { value: FACTORY.countriesServed, label: "Export markets" },
  { value: FACTORY.dailyOutput, label: "Daily output" },
  { value: FACTORY.fclLoadingLabel, label: "FCL lead time" },
];

const popularSizes: SkuItem[] = [
  { size: "80 x 80 mm", use: "Restaurant and retail POS", badge: "Best seller", href: "/products/thermal-rolls/80x80mm" },
  { size: "57 x 50 mm", use: "Counter POS and card terminals", href: "/products/thermal-rolls/57x50mm" },
  { size: "57 x 40 mm", use: "Mobile and handheld printers", href: "/products/thermal-rolls/57x40mm" },
  { size: "80 x 70 mm", use: "European POS printers", href: "/products/thermal-rolls/80x70mm" },
  { size: "4 x 6 in", use: "Courier and shipping labels", badge: "High demand", href: "/products/thermal-labels/4x6in" },
  { size: "4 x 3 in", use: "Warehouse and carton labels", href: "/products/thermal-labels/4x3in" },
  { size: "2 x 1 in", use: "Barcode and SKU labels", href: "/products/thermal-labels/2x1in" },
  { size: "2 x 4 in", use: "Address and product labels", href: "/products/thermal-labels/2x4in" },
];

const customizationCapabilities = [
  "Logo, Pantone and bilingual printing",
  "QR codes, barcodes and variable content",
  "Private-label cartons and core printing",
  "Phenol-free and market-specific materials",
];

const orderStages = [
  {
    icon: ClipboardCheck,
    title: "Confirm Specs",
    text: "Size, material, core, quantity, packing and destination are checked together.",
  },
  {
    icon: Palette,
    title: "Approve Artwork",
    text: "We verify logo placement, colors, barcodes and multilingual copy before production.",
  },
  {
    icon: Layers,
    title: "Run Production",
    text: "Paper, print, cutting and packing controls follow the approved sample and order sheet.",
  },
  {
    icon: FileCheck2,
    title: "Ship With Documents",
    text: "Carton marks, packing list, invoice and export documents are prepared for dispatch.",
  },
];

const buyerOutcomes = [
  {
    country: "United States",
    code: "US" as CountryCode,
    role: "POS Distributor",
    product: "80x80 mm Receipt Rolls",
    text: "Repeat shipments kept the same roll length, brightness and carton labels, so our retail accounts received consistent stock.",
  },
  {
    country: "Germany",
    code: "DE" as CountryCode,
    role: "Office Supply Buyer",
    product: "Phenol-Free Thermal Paper",
    text: "Samples and documentation were confirmed before bulk production, which reduced approval risk for our customers.",
  },
  {
    country: "UAE",
    code: "AE" as CountryCode,
    role: "Retail Distributor",
    product: "OEM Printed Receipt Rolls",
    text: "Artwork and carton design were checked before mass production. The branded rolls arrived ready for store distribution.",
  },
];

const quoteChecklist = [
  "Product and size",
  "Quantity or container plan",
  "Blank stock or custom print",
  "Destination country or port",
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE.domain,
    },
  ],
};

function ProductLineCard({
  item,
  image,
  index,
}: {
  item: ProductLine;
  image: string;
  index: number;
}) {
  const featured = index === 0;
  const layoutClass = featured
    ? "lg:col-span-7 lg:row-span-2 lg:min-h-[520px]"
    : index < 3
      ? "lg:col-span-5 lg:min-h-[252px]"
      : "lg:col-span-4 lg:min-h-[300px]";

  return (
    <article className={`group relative min-h-[340px] overflow-hidden rounded-lg bg-brand-navy-deep ${layoutClass}`}>
      <Link href={item.href} className="absolute inset-0">
        <Image
          src={image}
          alt={`${item.title} manufactured by ZhixinPaper`}
          fill
          loading="lazy"
          sizes={featured ? "(max-width: 1024px) 100vw, 58vw" : "(max-width: 1024px) 100vw, 34vw"}
          className={`object-cover transition-transform duration-500 group-hover:scale-[1.025] motion-reduce:transition-none ${item.imagePosition ?? "object-center"}`}
        />
        <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,23,47,0.04)_18%,rgba(7,23,47,0.92)_100%)]" />
        <span className={`absolute inset-x-0 bottom-0 p-5 text-white ${featured ? "sm:p-8" : "sm:p-6"}`}>
          <span className="block text-sm font-medium text-amber-300">{item.spec}</span>
          <span className={`mt-2 block font-semibold leading-tight ${featured ? "text-3xl sm:text-4xl" : "text-2xl"}`}>
            {item.title}
          </span>
          <span className={`mt-3 block max-w-2xl text-sm leading-relaxed text-slate-200 ${featured ? "sm:text-base" : ""}`}>
            {item.summary}
          </span>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
            Explore product
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
          </span>
        </span>
      </Link>
    </article>
  );
}

export default async function HomePage() {
  const [images, hero] = await Promise.all([
    getSlotImages(productLines.map((item) => ({ slot: item.slot, fallback: item.fallback }))),
    readHero(),
  ]);

  const banners = hero.banners ?? [];
  const heroFallbacks = [FACTORY_IMAGE, COATING_LINE_IMAGE, THERMAL_ROLLS_IMAGE];
  const heroImages = heroFallbacks.map((fallback, index) =>
    banners[index]?.url ? r2Image(banners[index]!.url) : fallback,
  );
  const primaryHeroImage = heroImages[0];

  if (primaryHeroImage) {
    preload(primaryHeroImage, { as: "image", fetchPriority: "high" });
    if (primaryHeroImage.startsWith("http")) {
      preconnect(new URL(primaryHeroImage).origin, { crossOrigin: "anonymous" });
    }
  }

  const whatsappUrl = `${SITE.whatsappUrl}?text=${encodeURIComponent(
    "Hello, I need a quotation. Product: __ Quantity: __ Destination: __",
  )}`;
  const factoryImage = images["home:category-jumbo-rolls"] ?? COATING_LINE_IMAGE;
  const homepageTitle = hero.titleMain?.trim() || "Custom Thermal Paper, Labels & NCR Forms";
  const homepageHighlight = hero.titleHighlight?.trim();

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHero
        bgImages={heroImages}
        bgCarouselInterval={5000}
        overlayDir="left"
        overlayOpacity={58}
        minHeight="min-h-[560px]"
        compact
        badge={{
          icon: <Award className="h-4 w-4" aria-hidden="true" />,
          text: hero.badgeText?.trim() || "ISO 9001 Factory Since 2009",
          color: "amber",
        }}
        title={
          homepageHighlight ? (
            <>
              {homepageTitle}
              <br />
              <span className="text-amber-400">{homepageHighlight}</span>
            </>
          ) : (
            homepageTitle
          )
        }
        subtitle={
          hero.subtitle?.trim() ||
          "Factory-direct blank and custom-printed supply with OEM packing, export documents and fast container loading."
        }
        ctas={[
          {
            label: "Request a Quote",
            href: "/contact",
            variant: "primary",
            icon: <MessageSquare className="h-4 w-4" aria-hidden="true" />,
          },
          {
            label: "WhatsApp",
            href: whatsappUrl,
            variant: "whatsapp",
            icon: <Phone className="h-4 w-4" aria-hidden="true" />,
            external: true,
          },
        ]}
      />

      <section className="border-b border-slate-200 bg-white py-12 sm:py-16" aria-labelledby="procurement-heading">
        <div className="container">
          <div className="max-w-3xl">
            <h2 id="procurement-heading" className="text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
              Start With the Way You Buy
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              Choose the route closest to your order. We will confirm the specifications needed for pricing, samples and production.
            </p>
          </div>

          <div className="mt-9 grid divide-y divide-slate-200 border-y border-slate-200 lg:grid-cols-[1.15fr_1fr_1fr] lg:divide-x lg:divide-y-0">
            {buyerRoutes.map(({ icon: Icon, title, buyer, summary, href }, index) => (
              <Link
                key={title}
                href={href}
                className={`group grid gap-4 px-1 py-6 transition-colors hover:bg-slate-50 sm:grid-cols-[auto_1fr] sm:px-5 lg:block lg:px-6 lg:py-8 ${index === 0 ? "lg:bg-slate-50" : ""}`}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-navy text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="block">
                  <span className="block text-lg font-semibold text-slate-950 group-hover:text-brand-navy">{title}</span>
                  <span className="mt-1 block text-sm font-medium text-slate-500">{buyer}</span>
                  <span className="mt-3 block text-sm leading-relaxed text-slate-600">{summary}</span>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy">
                    View buying route
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" aria-hidden="true" />
                  </span>
                </span>
              </Link>
            ))}
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-y-7 sm:grid-cols-4">
            {procurementFacts.map(({ value, label }, index) => (
              <div key={label} className={`min-w-0 ${index % 2 ? "border-l border-slate-200 pl-5" : ""} sm:border-l sm:pl-6 sm:first:border-l-0 sm:first:pl-0`}>
                <dd className="text-2xl font-semibold text-slate-950 sm:text-3xl">{value}</dd>
                <dt className="mt-1 text-sm text-slate-500">{label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20" aria-labelledby="products-heading">
        <div className="container">
          <div className="mb-10 flex flex-col items-start justify-between gap-5 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-brand-navy">Core Product Lines</p>
              <h2 id="products-heading" className="text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
                Match Your RFQ to the Right Product
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
                Compare stock, custom printing and factory-supply options without searching through the complete catalog.
              </p>
            </div>
            <Link href="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-navy-hover">
              Browse all products
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid gap-4 lg:grid-cols-12">
            {productLines.map((item, index) => (
              <ProductLineCard
                key={item.title}
                item={item}
                image={images[item.slot] ?? item.fallback}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-14 sm:py-16" aria-labelledby="sizes-heading">
        <div className="container">
          <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <h2 id="sizes-heading" className="text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
                Common Sizes for Faster Sourcing
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Start with a standard size, then confirm roll length, core, GSM, adhesive and packing for your market.
              </p>
            </div>
            <Link href="/specifications" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-navy-hover">
              View size guide
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <PopularSizesCarousel items={popularSizes} />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20" aria-labelledby="custom-heading">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-brand-navy">Custom Production</p>
              <h2 id="custom-heading" className="text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
                Turn Specifications Into Production-Ready Artwork
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                We connect technical specifications, artwork, compliance and packing in one approval workflow before bulk production.
              </p>
              <div className="mt-7 space-y-4">
                {customizationCapabilities.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-md bg-brand-navy px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-navy-hover">
                  <MessageSquare className="h-4 w-4" aria-hidden="true" />
                  Request a Quote
                </Link>
                <Link href="/oem/custom-printing" className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-navy hover:text-brand-navy">
                  Custom printing options
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="grid gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 sm:grid-cols-2">
              {orderStages.map(({ icon: Icon, title, text }) => (
                <div key={title} className="bg-slate-50 p-6 sm:p-7">
                  <Icon className="h-6 w-6 text-brand-navy" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-semibold text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-slate-200 pt-6 text-sm font-medium text-slate-600">
            <span className="font-semibold text-slate-950">Market-ready options</span>
            <span>TRA and FIRS receipt formats</span>
            <span>ZATCA and bilingual layouts</span>
            <span>Phenol-free materials</span>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-20" aria-labelledby="factory-heading">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-200">
              <Image
                src={factoryImage}
                alt="ZhixinPaper thermal paper converting and jumbo roll production line"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover"
              />
            </div>

            <div>
              <h2 id="factory-heading" className="text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
                Factory Evidence Buyers Can Verify
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                Capacity, material options, packing controls and export documents are reviewed before you commit to bulk production.
              </p>
              <div className="mt-7 space-y-4">
                {[
                  "ISO 9001:2015, FSC, BPA-free, RoHS, REACH and CE support",
                  "Private cartons, core printing, barcode marks and pallet plans",
                  "Commercial invoice, packing list, certificate of origin and bill of lading",
                  "Jumbo-roll supply and OEM support for converters and peer factories",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
                    <BadgeCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-navy" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-md bg-brand-navy px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-navy-hover">
                  <MessageSquare className="h-4 w-4" aria-hidden="true" />
                  Request a Quote
                </Link>
                <Link
                  href={`/contact?product=${encodeURIComponent("Jumbo Roll Supply")}`}
                  className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-navy hover:text-brand-navy"
                >
                  <Handshake className="h-4 w-4" aria-hidden="true" />
                  Jumbo roll supply
                </Link>
              </div>
            </div>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-slate-200 bg-slate-200 lg:grid-cols-4">
            {[
              { icon: FactoryIcon, value: FACTORY.area, label: "Factory area" },
              { icon: Zap, value: FACTORY.dailyOutput, label: "Daily output" },
              { icon: Globe, value: FACTORY.countriesServed, label: "Export markets" },
              { icon: ShieldCheck, value: FACTORY.oemClients, label: "OEM clients" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="bg-white p-5 sm:p-6">
                <Icon className="h-5 w-5 text-brand-navy" aria-hidden="true" />
                <dd className="mt-4 text-2xl font-semibold text-slate-950">{value}</dd>
                <dt className="mt-1 text-sm text-slate-500">{label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20" aria-labelledby="outcomes-heading">
        <div className="container">
          <div className="max-w-3xl">
            <h2 id="outcomes-heading" className="text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
              What Buyers Verify Before They Reorder
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              These anonymized outcomes focus on product consistency, approval risk and distribution readiness. Customer identities are withheld by request.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <article className="rounded-lg border border-slate-200 bg-slate-50 p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <CountryFlag code={buyerOutcomes[0].code} label={buyerOutcomes[0].country} className="w-6" />
                <div>
                  <div className="font-semibold text-slate-950">{buyerOutcomes[0].role}</div>
                  <div className="text-sm text-slate-500">{buyerOutcomes[0].country}</div>
                </div>
              </div>
              <p className="mt-8 max-w-3xl text-xl font-medium leading-relaxed text-slate-800 sm:text-2xl">
                &ldquo;{buyerOutcomes[0].text}&rdquo;
              </p>
              <div className="mt-7 border-t border-slate-200 pt-5 text-sm font-semibold text-brand-navy">
                {buyerOutcomes[0].product}
              </div>
            </article>

            <div className="grid gap-5">
              {buyerOutcomes.slice(1).map((outcome) => (
                <article key={outcome.country} className="rounded-lg border border-slate-200 bg-white p-6">
                  <div className="flex items-center gap-3">
                    <CountryFlag code={outcome.code} label={outcome.country} className="w-5" />
                    <span className="text-sm font-semibold text-slate-950">{outcome.role}</span>
                    <span className="text-sm text-slate-500">{outcome.country}</span>
                  </div>
                  <p className="mt-5 text-base leading-relaxed text-slate-700">&ldquo;{outcome.text}&rdquo;</p>
                  <div className="mt-5 text-sm font-semibold text-brand-navy">{outcome.product}</div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20" aria-labelledby="facts-heading">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div>
              <h2 id="facts-heading" className="text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
                Key Facts About {SITE.name}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600">
                {SITE.name}, legally Xi&apos;an Zhi Xin Paper Co., Ltd., is a factory-direct manufacturer of thermal paper rolls, direct thermal labels, packaging labels and carbonless forms. Founded in {SITE.founded} in Xi&apos;an, China, the company supplies wholesale and OEM buyers in {FACTORY.countriesServed} markets.
              </p>
              <Link href="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-navy-hover">
                About the factory
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <dl className="grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-3">
              {[
                { term: "Founded", value: SITE.founded },
                { term: "Factory size", value: FACTORY.area },
                { term: "Annual output", value: `${FACTORY.annualOutput} rolls` },
                { term: "Markets", value: FACTORY.countriesServed },
                { term: "OEM clients", value: FACTORY.oemClients },
                { term: "FCL lead time", value: FACTORY.fclLoadingLabel },
              ].map(({ term, value }) => (
                <div key={term} className="border-t border-slate-300 pt-4">
                  <dt className="text-sm text-slate-500">{term}</dt>
                  <dd className="mt-1 text-xl font-semibold text-slate-950">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <p className="mt-10 border-t border-slate-200 pt-5 text-sm leading-relaxed text-slate-500">
            Certifications and material support: {CERTIFICATIONS.map((item) => item.name).join(", ")}. Export terms include FOB, CIF and DDP.
          </p>

          <div className="mt-10 grid gap-8 rounded-lg border border-slate-200 border-t-4 border-t-amber-500 bg-white p-6 sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:p-10">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.03em] text-slate-950">Prepare a Quote-Ready RFQ</h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                Send four details and our export team will confirm pricing, samples, packing and loading options.
              </p>
            </div>
            <div>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {quoteChecklist.map((item) => (
                  <div key={item} className="flex items-center gap-2 border-b border-slate-200 py-2.5 text-sm font-medium text-slate-700">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 text-amber-500" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-md bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-navy-hover">
                  <MessageSquare className="h-4 w-4" aria-hidden="true" />
                  Request a Quote
                </Link>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-navy hover:text-brand-navy">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
