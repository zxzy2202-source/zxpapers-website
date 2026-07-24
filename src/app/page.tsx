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
import type { SlotKey } from "@/config/imageSlots";
import { CERTIFICATIONS, FACTORY, SITE } from "@/config/siteData";
import { getSlotImages } from "@/lib/imageSlotUtils";
import { readPublicHero } from "@/lib/heroStore";
import { r2Image } from "@/lib/r2";

export const metadata: Metadata = {
  title: "Thermal Paper & Label Manufacturer | ZhixinPaper",
  description:
    "Source thermal paper rolls, shipping and product labels, and NCR forms by specification, sample, OEM packing, destination and repeat-order control.",
  alternates: { canonical: SITE.domain },
  openGraph: {
    title: "Thermal Paper & Label Manufacturer | ZhixinPaper",
    description:
      "Source thermal paper rolls, labels and NCR forms with specification review, sample approval, OEM packing and repeat-order control.",
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
    href: "/products/thermal-paper-rolls",
    slot: "home:category-thermal-rolls",
    fallback: THERMAL_ROLLS_IMAGE,
  },
  {
    title: "Thermal & Shipping Labels",
    spec: "4x6, 4x3, 2x1 and barcode formats",
    summary: "Direct thermal labels for courier, warehouse, inventory and product identification.",
    href: "/products/thermal-labels",
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
    title: "Repeat Stock Supply",
    buyer: "Distributors and multi-location operators",
    summary: "Match the printer, actual roll or label specification, carton pack and reorder reference before comparing offers.",
    href: "/products/thermal-paper-rolls",
  },
  {
    icon: Printer,
    title: "New OEM Program",
    buyer: "Brands, importers and private-label teams",
    summary: "Freeze material, artwork version, colors, core and retail packing in one approval record before the production sample.",
    href: "/oem/custom-printing",
  },
  {
    icon: FactoryIcon,
    title: "Multi-SKU Factory Supply",
    buyer: "Converters and centralized purchasing teams",
    summary: "Consolidate mixed sizes, cartons, pallets, loading sequence and destination documents into one supply plan.",
    href: `/contact?product=${encodeURIComponent("Jumbo Roll Supply")}`,
  },
];

const procurementFacts = [
  { value: SITE.founded, label: "Manufacturing since" },
  { value: FACTORY.countriesServed, label: "Export markets" },
  { value: FACTORY.dailyOutput, label: "Daily output" },
  { value: "Spec / Sample / Batch", label: "Approval sequence" },
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
  "BPA-free, BPS-free and phenol-free grades reviewed separately",
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

const approvalScenarios = [
  {
    icon: Printer,
    title: "Receipt Roll Distribution",
    risk: "The quoted size matches, but roll length, core or carton quantity does not.",
    approval: "Printer model, width, outer diameter, core, paper grade, measured length and carton count.",
    outcome: "A reusable specification ID keeps supplier comparisons and repeat orders consistent.",
  },
  {
    icon: Package,
    title: "Warehouse & Shipping Labels",
    risk: "Labels print correctly in a sample but skip, lift or scan poorly in the real workflow.",
    approval: "Printer and DPI, gap or mark, face stock, adhesive, application surface, scan test and roll format.",
    outcome: "The production check follows the actual printer, parcel surface and packing method.",
  },
  {
    icon: FileCheck2,
    title: "OEM Print & NCR Forms",
    risk: "Artwork, numbering, copy sequence or packing changes between approval and reorder.",
    approval: "Artwork version, ink references, barcode data, sheet sequence, numbering, pack and carton marks.",
    outcome: "The approved files and packing record become the reference for production and reorders.",
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
      <Link
        href={item.href}
        className="absolute inset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-inset"
      >
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
    readPublicHero(),
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
  const homepageTitle =
    hero.titleMain?.trim() || "Thermal Paper, Labels & NCR Forms Built to Your Specification";
  const homepageHighlight = hero.titleHighlight?.trim();
  const heroTrustBadges = hero.trustBadges?.length
    ? hero.trustBadges
    : ["Blank & custom supply", "OEM packing", "Export documentation"];

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHero
        bgImages={heroImages}
        bgImageAlt="ZhixinPaper thermal paper factory production floor with coating, slitting and packaging lines"
        bgCarouselInterval={5000}
        overlayDir="left"
        overlayOpacity={58}
        minHeight="min-h-[560px]"
        compact
        badge={{
          icon: <Award className="h-4 w-4" aria-hidden="true" />,
          text: hero.badgeText?.trim() || "B2B Manufacturing Since 2009",
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
          "Send the printer, application, size, quantity and destination. We turn them into a quote-ready specification, approval sample and repeat-order record."
        }
        trustBadges={heroTrustBadges}
        mobileTrustBadgeLimit={2}
        ctas={[
          {
            label: "Build a Quote-Ready RFQ",
            href: "/contact",
            variant: "primary",
            icon: <MessageSquare className="h-4 w-4" aria-hidden="true" />,
          },
          {
            label: "Ask on WhatsApp",
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
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-brand-navy">Start With the Buying Risk</p>
            <h2 id="procurement-heading" className="text-3xl font-semibold text-slate-950 sm:text-4xl">
              Fix the Specification Before You Compare Price
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              A familiar size name can still hide a different roll length, core, adhesive, pack or material grade. Choose the route closest to your order so the commercial quote and approval sample use the same inputs.
            </p>
          </div>

          <div className="mt-9 grid divide-y divide-slate-200 border-y border-slate-200 lg:grid-cols-[1.15fr_1fr_1fr] lg:divide-x lg:divide-y-0">
            {buyerRoutes.map(({ icon: Icon, title, buyer, summary, href }, index) => (
              <Link
                key={title}
                href={href}
                className={`group grid gap-4 px-1 py-6 transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-inset sm:grid-cols-[auto_1fr] sm:px-5 lg:block lg:px-6 lg:py-8 ${index === 0 ? "lg:bg-slate-50" : ""}`}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-navy text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="block">
                  <span className="block text-lg font-semibold text-slate-950 group-hover:text-brand-navy">{title}</span>
                  <span className="mt-1 block text-sm font-medium text-slate-500">{buyer}</span>
                  <span className="mt-3 block text-sm leading-relaxed text-slate-600">{summary}</span>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy">
                    Review this buying route
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
              <h2 id="products-heading" className="text-3xl font-semibold text-slate-950 sm:text-4xl">
                Choose the Product Family Before You Compare Offers
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
                Start with the application and product family, then narrow the size, material, format and packing variables that change price and performance.
              </p>
            </div>
            <Link href="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-navy-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-4">
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
              <h2 id="sizes-heading" className="text-3xl font-semibold text-slate-950 sm:text-4xl">
                Common Sizes Are a Starting Point, Not a Full Specification
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Use a familiar size to find the right product, then confirm roll length, core, paper grade or adhesive, printer compatibility and packing.
              </p>
            </div>
            <Link href="/specifications" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-navy-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-4">
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
              <h2 id="custom-heading" className="text-3xl font-semibold text-slate-950 sm:text-4xl">
                Keep One Approval Record From Sample to Reorder
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                Technical specifications, artwork, material evidence and packing are reviewed together so the approved sample can remain the reference for bulk production.
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
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-md bg-brand-navy px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-navy-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2">
                  <MessageSquare className="h-4 w-4" aria-hidden="true" />
                  Request a Quote
                </Link>
                <Link href="/oem/custom-printing" className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-navy hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2">
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
            <span className="font-semibold text-slate-950">Approval record includes</span>
            <span>Material or paper grade</span>
            <span>Artwork and barcode version</span>
            <span>Carton, pallet and destination marks</span>
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
              <h2 id="factory-heading" className="text-3xl font-semibold text-slate-950 sm:text-4xl">
                Review the Supply Evidence Before the Deposit
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                Confirm which capacity, material, quality and export records apply to your exact product grade and destination before you commit to bulk production.
              </p>
              <div className="mt-7 space-y-4">
                {[
                  "Quality-management and material documents matched to the selected grade",
                  "Private cartons, core printing, barcode marks and pallet plans approved with the order",
                  "Commercial invoice, packing list and destination documents reviewed before dispatch",
                  "Jumbo-roll and finished-goods options for converters, distributors and OEM programs",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
                    <BadgeCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-navy" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-md bg-brand-navy px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-navy-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2">
                  <MessageSquare className="h-4 w-4" aria-hidden="true" />
                  Request a Quote
                </Link>
                <Link
                  href={`/contact?product=${encodeURIComponent("Jumbo Roll Supply")}`}
                  className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-navy hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
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

      <section className="bg-brand-navy-deep py-16 text-white sm:py-20" aria-labelledby="outcomes-heading">
        <div className="container">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-amber-300">Quote-Ready Buying Scenarios</p>
            <h2 id="outcomes-heading" className="text-3xl font-semibold text-white sm:text-4xl">
              Lock Down the Variables That Cause Reorder Problems
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Different products fail for different reasons. A useful RFQ records the operating condition, approval evidence and reorder reference instead of relying on a size name alone.
            </p>
          </div>

          <div className="mt-10 grid border-y border-white/15 lg:grid-cols-3 lg:divide-x lg:divide-white/15">
            {approvalScenarios.map(({ icon: Icon, title, risk, approval, outcome }, index) => (
              <article key={title} className="border-b border-white/15 py-8 last:border-b-0 lg:border-b-0 lg:px-8 lg:first:pl-0 lg:last:pr-0">
                <div className="flex items-center justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-white/10 text-amber-300">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-slate-400">0{index + 1}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-amber-300">Risk to avoid</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{risk}</p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Approval record</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{approval}</p>
                <p className="mt-6 border-t border-white/15 pt-5 text-sm font-medium leading-relaxed text-white">
                  <CheckCircle className="mr-2 inline h-4 w-4 text-amber-300" aria-hidden="true" />
                  {outcome}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20" aria-labelledby="facts-heading">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div>
              <h2 id="facts-heading" className="text-3xl font-semibold text-slate-950 sm:text-4xl">
                Supplier Facts for Buyer Due Diligence
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600">
                {SITE.name}, legally Xi&apos;an Zhi Xin Paper Co., Ltd., is a factory-direct manufacturer of thermal paper rolls, direct thermal labels, packaging labels and carbonless forms. Founded in {SITE.founded} in Xi&apos;an, China, the company supplies wholesale and OEM buyers in {FACTORY.countriesServed} markets.
              </p>
              <Link href="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-navy-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-4">
                Review the factory profile
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
                { term: "Product scope", value: "Rolls, labels, NCR" },
              ].map(({ term, value }) => (
                <div key={term} className="border-t border-slate-300 pt-4">
                  <dt className="text-sm text-slate-500">{term}</dt>
                  <dd className="mt-1 text-xl font-semibold text-slate-950">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <p className="mt-10 border-t border-slate-200 pt-5 text-sm leading-relaxed text-slate-500">
            Potential supporting documents include {CERTIFICATIONS.map((item) => item.name).join(", ")}. Availability and scope depend on the selected product grade and destination requirement; export terms can include FOB, CIF and DDP.
          </p>

          <div className="mt-10 grid gap-8 rounded-lg border border-slate-200 border-t-4 border-t-amber-500 bg-white p-6 sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:p-10">
            <div>
              <h2 className="text-3xl font-semibold text-slate-950">Send the Inputs That Change the Price</h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                Send four starting details. Our export team will reply with the missing specification questions before confirming price, sample and packing options.
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
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-md bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-navy-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2">
                  <MessageSquare className="h-4 w-4" aria-hidden="true" />
                  Request a Quote
                </Link>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-navy hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2">
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
