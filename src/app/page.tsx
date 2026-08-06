import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { preconnect, preload } from "react-dom";
import {
  AlertTriangle,
  ArrowRight,
  Award,
  CheckCircle,
  ClipboardCheck,
  Factory as FactoryIcon,
  FileCheck2,
  FlaskConical,
  Layers,
  MessageSquare,
  Package,
  Palette,
  Phone,
  Printer,
  Ruler,
  ShieldCheck,
  Thermometer,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import PopularSizesCarousel, { type SkuItem } from "@/components/shared/PopularSizesCarousel";
import type { SlotKey } from "@/config/imageSlots";
import { SITE } from "@/config/siteData";
import { COMPLIANCE_EVIDENCE } from "@/config/complianceData";
import { getSlotImages } from "@/lib/imageSlotUtils";
import { readPublicHero } from "@/lib/heroStore";
import { r2Image } from "@/lib/r2";

export const metadata: Metadata = {
  title: "Thermal Paper, Labels & NCR Forms | ZhixinPaper",
  description:
    "Source thermal paper rolls, shipping and product labels, and NCR forms through specification review, sample approval, OEM packing and repeat-order control.",
  alternates: { canonical: SITE.domain },
  openGraph: {
    title: "Thermal Paper, Labels & NCR Forms | ZhixinPaper",
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

export const revalidate = 3600;

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
  ctaLabel: string;
  href: string;
  slot: SlotKey;
  fallback: string;
  imagePosition?: string;
};

const productLines: ProductLine[] = [
  {
    title: "Thermal Paper Rolls",
    spec: "Receipt · POS · Till · ATM",
    summary: "Blank, printed and material-specific thermal rolls qualified by printer, geometry, grade and packing.",
    ctaLabel: "Review Thermal Paper Rolls",
    href: "/products/thermal-paper-rolls",
    slot: "home:category-thermal-rolls",
    fallback: THERMAL_ROLLS_IMAGE,
  },
  {
    title: "Thermal Labels",
    spec: "Shipping · Barcode · Linerless · Custom",
    summary: "Direct thermal labels qualified by printer, facestock, adhesive, sensing method, roll format and application.",
    ctaLabel: "Review Thermal Labels",
    href: "/products/thermal-labels",
    slot: "home:category-thermal-labels",
    fallback: THERMAL_LABELS_IMAGE,
  },
  {
    title: "Printed & Packaging Labels",
    spec: "Product · Can · Bottle · Filling-Line",
    summary: "Printed and blank packaging labels qualified by substrate, applicator, container, finish and operating condition.",
    ctaLabel: "Review Packaging Labels",
    href: "/products/product-labels",
    slot: "home:category-can-labels",
    fallback: THERMAL_LABELS_IMAGE,
    imagePosition: "object-right",
  },
  {
    title: "NCR & Business Forms",
    spec: "2-Part · 3-Part · 4-Part · Continuous",
    summary: "Carbonless forms qualified by size, parts, printing, numbering, finishing and workflow.",
    ctaLabel: "Review NCR Forms",
    href: "/products/ncr-forms",
    slot: "home:category-carbonless",
    fallback: COATING_LINE_IMAGE,
  },
];

// Pain points — sourcing problems buyers actually report before switching supplier
const sourcingPainPoints = [
  {
    icon: Thermometer,
    problem: "Receipts fade before the retention period ends",
    detail:
      "Coating weight and image stability were never confirmed against the storage temperature, handling and archive period the buyer actually needs.",
    response: "We record the required retention period and confirm the coating specification before the sample.",
  },
  {
    icon: Printer,
    problem: "Rolls jam or misfeed in the installed printer",
    detail:
      "Core diameter, maximum roll OD, winding direction and sensing method were assumed instead of matched to the printer already in service.",
    response: "We check the printer model, core, OD and winding before quoting a replacement roll.",
  },
  {
    icon: Ruler,
    problem: "Two quotations look identical but arrive different",
    detail:
      "Paper grade, real roll length, adhesive, packing and inspection method can all differ while the size name on the quotation stays the same.",
    response: "We quote against a complete written specification, not a size label alone.",
  },
  {
    icon: FlaskConical,
    problem: "The reorder does not match the approved sample",
    detail:
      "Uncontrolled material, adhesive, artwork or packing changes between batches create new complaints that are hard to investigate.",
    response: "The approved specification is frozen and referenced on every repeat order.",
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

const quoteBasisItems = [
  {
    label: "Product & use",
    value: "Roll, label, NCR or packaging format",
  },
  {
    label: "Fit & geometry",
    value: "Printer, size, core, winding or ply",
  },
  {
    label: "Material & finish",
    value: "Paper grade, adhesive, coating or print",
  },
  {
    label: "Packing & delivery",
    value: "Quantity, cartons, destination and term",
  },
];

const popularSizes: SkuItem[] = [
  { size: "80 × 80 mm", use: "Restaurant and retail POS", badge: "Best seller", href: "/products/thermal-rolls/80x80mm" },
  { size: "57 × 50 mm", use: "Counter POS and card terminals", href: "/products/thermal-rolls/57x50mm" },
  { size: "57 × 40 mm", use: "Mobile and handheld printers", href: "/products/thermal-rolls/57x40mm" },
  { size: "80 × 70 mm", use: "European POS printers", href: "/products/thermal-rolls/80x70mm" },
  { size: "4 × 6 in", use: "Courier and shipping labels", badge: "High demand", href: "/products/thermal-labels/4x6in" },
  { size: "4 × 3 in", use: "Warehouse and carton labels", href: "/products/thermal-labels/4x3in" },
  { size: "2 × 1 in", use: "Barcode and SKU labels", href: "/products/thermal-labels/2x1in" },
  { size: "2 × 4 in", use: "Address and product labels", href: "/products/thermal-labels/2x4in" },
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

const evidenceRoutes = [
  {
    icon: ShieldCheck,
    label: "Certification scope",
    title: "Match documents to the quoted grade",
    text: "Review which quality, sourcing and material documents apply to the selected paper or label construction and destination.",
    href: "/manufacturing/certifications",
    linkLabel: "Review certification scope",
  },
  {
    icon: ClipboardCheck,
    label: "Quality control",
    title: "Review the checks behind each batch",
    text: "See how incoming material, coating, slitting, print, dimensions, packing and final release are checked against the approved order.",
    href: "/manufacturing/quality-control",
    linkLabel: "See quality checkpoints",
  },
  {
    icon: FactoryIcon,
    label: "Production equipment",
    title: "Check the line used for your format",
    text: "Review coating, slitting, printing, die-cutting and packing capabilities, then confirm which equipment applies to the quoted product.",
    href: "/manufacturing/equipment",
    linkLabel: "Review production equipment",
  },
];

const quoteReadinessItems = [
  {
    label: "Product",
    value: "Rolls, labels, NCR or packaging labels",
    hint: "Tell us blank stock or custom printed.",
  },
  {
    label: "Specification",
    value: "Size, length, core, GSM, adhesive or ply",
    hint: "Share a printer model or current sample when available.",
  },
  {
    label: "Customization",
    value: "Logo, Pantone, QR, core and cartons",
    hint: "Artwork can be checked before the production sample.",
  },
  {
    label: "Delivery",
    value: "Quantity, destination and trade term",
    hint: "Include the country or port for FOB, CIF or DDP review.",
  },
];

const quoteChecklist = quoteReadinessItems.map((item) => item.value);

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

// ─── Product Line Card (2×2 horizontal banner) ───────────────────────────────
function ProductLineCard({
  item,
  image,
  reverse,
}: {
  item: ProductLine;
  image: string;
  reverse?: boolean;
}) {
  return (
    <article
      data-component="product-route-card"
      className="group grid overflow-hidden rounded-lg border border-slate-200 bg-white transition-[border-color,box-shadow] duration-200 hover:border-brand-navy/30 hover:shadow-md motion-reduce:transition-none sm:grid-cols-2"
    >
      {/* Image — shown first on mobile, swapped on desktop when reverse=true */}
      <div
        className={`relative aspect-[4/3] overflow-hidden bg-slate-100 sm:aspect-auto ${
          reverse ? "sm:order-2" : "sm:order-1"
        }`}
      >
        <Image
          src={image}
          alt={`${item.title} manufactured by ZhixinPaper`}
          fill
          loading="lazy"
          sizes="(max-width: 640px) 100vw, 50vw"
          className={`object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none ${item.imagePosition ?? "object-center"}`}
        />
        {/* Spec pill overlaid on image */}
        <span className="absolute bottom-3 left-3 rounded-full bg-brand-navy/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
          {item.spec}
        </span>
      </div>

      {/* Content */}
      <div
        className={`flex min-w-0 flex-col justify-center p-7 lg:p-9 ${
          reverse ? "sm:order-1" : "sm:order-2"
        }`}
      >
        <h3 className="text-xl font-semibold leading-snug text-slate-950 transition-colors duration-150 group-hover:text-brand-navy sm:text-2xl">
          {item.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 lg:text-base">
          {item.summary}
        </p>
        <Link
          href={item.href}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
          aria-label={`${item.ctaLabel} — ${item.title}`}
        >
          {item.ctaLabel}
          <ArrowRight
            className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1 motion-reduce:transition-none"
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function HomePage() {
  const [images, hero] = await Promise.all([
    getSlotImages([
      ...productLines.map((item) => ({ slot: item.slot, fallback: item.fallback })),
      { slot: "home:category-jumbo-rolls", fallback: COATING_LINE_IMAGE },
    ]),
    readPublicHero(),
  ]);

  const banners = hero.banners ?? [];
  const heroFallbacks = [FACTORY_IMAGE, COATING_LINE_IMAGE, THERMAL_ROLLS_IMAGE];
  const heroImages = heroFallbacks.map((fallback, index) => ({
    src: banners[index]?.url ? r2Image(banners[index]!.url) : fallback,
    alt: banners[index]?.alt?.trim() || "ZhixinPaper paper converting and packaging production floor",
  }));
  const primaryHeroImage = heroImages[0]?.src;
  const heroCarouselInterval = Math.min(
    15_000,
    Math.max(3_000, hero.carouselIntervalMs ?? 4_500),
  );

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
    hero.titleMain?.trim() || "Thermal Paper, Labels & NCR Forms for Repeat Orders";
  const homepageHighlight = hero.titleHighlight?.trim();
  const heroTrustBadges = hero.trustBadges?.length
    ? hero.trustBadges
    : ["Specification review", "Sample approval", "Repeat-order records"];
  const primaryCta = {
    label: hero.ctaPrimary?.label?.trim() || "Get a Factory Quote",
    href: hero.ctaPrimary?.href?.trim() || "#home-rfq-form",
  };
  const secondaryCta = {
    label: hero.ctaSecondary?.label?.trim() || "Browse Core Products",
    href: hero.ctaSecondary?.href?.trim() || "#core-products",
  };

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── 1. Hero ───────────────────────────────────────────────────────────── */}
      <PageHero
        bgImages={heroImages}
        bgImageAlt="ZhixinPaper paper converting and packaging production floor"
        bgCarouselInterval={heroCarouselInterval}
        overlayDir="left"
        overlayOpacity={58}
        minHeight="min-h-[580px] lg:min-h-[620px]"
        compact
        badge={{
          icon: <Award className="h-4 w-4" aria-hidden="true" />,
          text: hero.badgeText?.trim() || "For Importers, Distributors & OEM Buyers",
          color: "amber",
        }}
        eyebrow={hero.eyebrow?.trim() || undefined}
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
          "Specify sizes, materials and packing once. Get a factory quote for repeat supply, OEM programs and custom printed orders."
        }
        trustBadges={heroTrustBadges}
        mobileTrustBadgeLimit={2}
        ctas={[
          {
            label: primaryCta.label,
            href: primaryCta.href,
            variant: "primary",
            icon: <MessageSquare className="h-4 w-4" aria-hidden="true" />,
            external: primaryCta.href.startsWith("http"),
          },
          {
            label: secondaryCta.label,
            href: secondaryCta.href,
            variant: secondaryCta.href.includes("wa.me") ? "whatsapp" : "outline",
            icon: <Package className="h-4 w-4" aria-hidden="true" />,
            external: secondaryCta.href.startsWith("http"),
          },
        ]}
        rightSlot={
          <aside
            aria-label="Quote readiness checklist"
            className="w-full max-w-[470px] overflow-hidden rounded-lg border border-white/20 bg-brand-ink/90 shadow-lg shadow-black/25 backdrop-blur-sm"
          >
            <div className="flex items-start justify-between gap-6 border-b border-white/15 px-6 py-5">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-300">
                  RFQ Specification Sheet
                </p>
                <p className="mt-1 text-sm leading-relaxed text-slate-300">
                  Four inputs make the first quotation useful.
                </p>
              </div>
              <span className="shrink-0 text-xs font-semibold text-slate-400">01-04</span>
            </div>
            <ol className="divide-y divide-white/10 px-6">
              {quoteReadinessItems.map(({ label, value }, index) => (
                <li key={label} className="grid grid-cols-[2rem_1fr] gap-3 py-4">
                  <span className="font-sora text-sm font-semibold text-amber-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                      {label}
                    </span>
                    <span className="mt-1 block text-sm font-medium leading-snug text-white">
                      {value}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
            <Link
              href="#home-rfq-form"
              className="flex min-h-12 items-center justify-between gap-4 bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors duration-150 hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset"
            >
              Start with these details
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </aside>
        }
        mobileRightSlot={
          <div className="border-y border-white/15 bg-black/20 px-4 py-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-300">
              A useful quote starts with
            </p>
            <ol className="mt-3 grid grid-cols-2 gap-x-4 gap-y-3">
              {quoteReadinessItems.map(({ label }, index) => (
                <li key={label} className="flex min-w-0 items-center gap-2 text-xs font-medium text-white">
                  <span className="text-amber-300">{index + 1}.</span>
                  <span>{label}</span>
                </li>
              ))}
            </ol>
          </div>
        }
      />

      {/* ── 2. Quote basis ────────────────────────────────────────────────────── */}
      <section
        data-component="quote-basis-strip"
        className="border-b border-slate-200 bg-white"
        aria-label="Quotation basis"
      >
        <div className="container">
          <div className="grid md:grid-cols-[13rem_1fr]">
            <div className="border-b border-slate-200 py-6 md:border-b-0 md:border-r md:pr-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-600">
                Quote basis
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Compare written specifications, not size names alone.
              </p>
            </div>
            <dl className="grid sm:grid-cols-2 lg:grid-cols-4">
              {quoteBasisItems.map(({ value, label }, index) => (
                <div
                  key={label}
                  className={`min-w-0 py-5 sm:px-6 ${
                    index > 0 ? "border-t border-slate-200 sm:border-t-0" : ""
                  } ${index % 2 !== 0 ? "sm:border-l" : ""} lg:border-l lg:first:border-l-0`}
                >
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                    {label}
                  </dt>
                  <dd className="mt-2 text-sm font-semibold leading-snug text-slate-900">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── 3. Core Products — 2×2 banner cards ──────────────────────────────── */}
      <section
        id="core-products"
        data-component="core-product-selector"
        className="scroll-mt-28 bg-slate-50 py-16 sm:py-20 lg:py-24"
        aria-labelledby="products-heading"
      >
        <div className="container">
          <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-600">
                Core Product Lines
              </p>
              <h2
                id="products-heading"
                className="text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl lg:text-5xl"
              >
                Start With the Product<br className="hidden sm:block" /> You Need to Source
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 lg:text-lg">
                Choose the closest product family first. Each route narrows the size, material,
                print, packing and printer variables that change performance and price.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-navy-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-4"
            >
              Browse all products
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          {/* 2×2 banner card grid */}
          <div className="grid gap-5 lg:grid-cols-2">
            {productLines.map((item, index) => (
              <ProductLineCard
                key={item.title}
                item={item}
                image={images[item.slot] ?? item.fallback}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Risk controls ─────────────────────────────────────────────────── */}
      <section
        data-component="specification-risk-controls"
        className="border-y border-slate-200 bg-white py-16 sm:py-20 lg:py-24"
        aria-labelledby="painpoints-heading"
      >
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div className="max-w-xl">
              <p className="mb-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-red-600">
                <AlertTriangle className="h-3.5 w-3.5" aria-hidden="true" />
                Before Price Comparison
              </p>
              <h2
                id="painpoints-heading"
                className="text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl lg:text-5xl"
              >
                Most Repeat-Order Problems Start With an Incomplete Specification
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                A familiar size can still hide a different paper grade, roll length, core, adhesive,
                winding or packing method. We turn those variables into a written approval record
                before the order becomes a repeat program.
              </p>
              <Link
                href="#home-rfq-form"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-navy-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-4"
              >
                Send a specification for review
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="border-t border-slate-300">
              {sourcingPainPoints.map(({ icon: Icon, problem, detail, response }, index) => (
                <article
                  key={problem}
                  className="grid gap-4 border-b border-slate-300 py-6 sm:grid-cols-[1fr_0.92fr] sm:gap-8 sm:py-7"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-red-50 text-red-600">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                        Risk {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-1 text-base font-semibold leading-snug text-slate-950">
                        {problem}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{detail}</p>
                    </div>
                  </div>
                  <div className="border-l-2 border-emerald-500 pl-4 sm:self-center">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-700">
                      Control
                    </p>
                    <p className="mt-1.5 text-sm font-medium leading-relaxed text-slate-800">
                      {response}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Popular Sizes ──────────────────────────────────────────────────── */}
      <section
        data-component="popular-size-selector"
        className="bg-white py-12 sm:py-14"
        aria-labelledby="sizes-heading"
      >
        <div className="container">
          <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-600">
                Popular Sizes
              </p>
              <h2
                id="sizes-heading"
                className="text-2xl font-semibold leading-tight text-slate-950 sm:text-3xl"
              >
                Common Sizes Are a Starting Point, Not a Full Specification
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                Use a familiar size to find the right product, then confirm roll length, core,
                paper grade or adhesive, printer compatibility and packing.
              </p>
            </div>
            <Link
              href="/specifications"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-navy-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-4"
            >
              View size guide
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <PopularSizesCarousel items={popularSizes} />
        </div>
      </section>

      {/* ── 5. Buyer Routes ───────────────────────────────────────────────────── */}
      <section
        data-component="buyer-route-list"
        className="bg-slate-950 py-16 sm:py-20"
        aria-labelledby="procurement-heading"
      >
        <div className="container">
          <div className="max-w-2xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-400">
              Choose Your Buying Route
            </p>
            <h2
              id="procurement-heading"
              className="text-3xl font-semibold leading-tight text-white sm:text-4xl"
            >
              Match the Supply Plan to the Order
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-400">
              Stock replenishment, a new private-label program and multi-SKU supply need different
              approval records. Start with the route closest to your purchasing task.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {buyerRoutes.map(({ icon: Icon, title, buyer, summary, href }) => (
              <Link
                key={title}
                href={href}
                className="group flex flex-col gap-5 rounded-lg border border-white/10 bg-white/5 p-6 transition-colors duration-200 hover:border-amber-400/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:p-7"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-400/10 text-amber-400 transition-colors duration-150 group-hover:bg-amber-400 group-hover:text-slate-950">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="flex flex-1 flex-col">
                  <span className="block text-lg font-semibold text-white transition-colors duration-150 group-hover:text-amber-400">
                    {title}
                  </span>
                  <span className="mt-1 block text-sm font-medium text-slate-400">{buyer}</span>
                  <span className="mt-3 block flex-1 text-sm leading-relaxed text-slate-400">
                    {summary}
                  </span>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber-400">
                    Review this route
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5 motion-reduce:transition-none"
                      aria-hidden="true"
                    />
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Approval Sequence ──────────────────────────────────────────────── */}
      <section
        data-component="approval-sequence"
        className="border-y border-slate-200 bg-white py-16 sm:py-20 lg:py-24"
        aria-labelledby="custom-heading"
      >
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-600">
                Custom Production
              </p>
              <h2
                id="custom-heading"
                className="text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl"
              >
                Keep One Approval Record From Sample to Reorder
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                Technical specifications, artwork, material evidence and packing are reviewed
                together so the approved sample can remain the reference for bulk production.
              </p>
              <ul className="mt-6 space-y-3.5">
                {customizationCapabilities.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                    <CheckCircle
                      className="mt-0.5 h-5 w-5 shrink-0 text-amber-500"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#home-rfq-form"
                  className="inline-flex items-center gap-2 rounded-md bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-brand-navy-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                >
                  <MessageSquare className="h-4 w-4" aria-hidden="true" />
                  Request a Quote
                </Link>
                <Link
                  href="/oem/custom-printing"
                  className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors duration-150 hover:border-brand-navy hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                >
                  Custom printing options
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <ol className="border-y border-slate-300">
              {orderStages.map(({ icon: Icon, title, text }, idx) => (
                <li
                  key={title}
                  className="grid grid-cols-[2.75rem_1fr] gap-4 border-b border-slate-300 py-5 last:border-b-0 sm:grid-cols-[3.25rem_1fr] sm:py-6"
                >
                  <span className="font-sora text-xl font-semibold text-amber-600">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-brand-navy" aria-hidden="true" />
                      <h3 className="text-base font-semibold text-slate-950">{title}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-2.5 border-t border-slate-200 pt-6 text-sm text-slate-500">
            <span className="font-semibold text-slate-800">Approval record includes</span>
            <span>Material or paper grade</span>
            <span>Artwork and barcode version</span>
            <span>Carton, pallet and destination marks</span>
          </div>
        </div>
      </section>

      {/* ── 7. Factory Evidence ───────────────────────────────────────────────── */}
      <section
        data-component="factory-evidence"
        className="bg-slate-50 py-16 sm:py-20 lg:py-24"
        aria-labelledby="factory-heading"
      >
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <figure className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-200 shadow-lg">
                <Image
                  src={factoryImage}
                  alt="ZhixinPaper paper converting production floor"
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-xs leading-relaxed text-slate-500">
                Production media provides context. Confirm the equipment and inspection records
                that apply to the quoted product and format.
              </figcaption>
            </figure>

            {/* Factory facts */}
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-600">
                Factory &amp; Quality Evidence
              </p>
              <h2
                id="factory-heading"
                className="text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl"
              >
                Check the Evidence Behind the Quote
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                {SITE.name}, legally Xi&apos;an Zhi Xin Paper Co., Ltd., supplies thermal paper
                rolls, direct thermal labels, packaging labels and carbonless forms from Xi&apos;an,
                China. Before a deposit, confirm the records that apply to the exact grade, format
                and destination in your quotation.
              </p>

              <div className="mt-8 space-y-3">
                {evidenceRoutes.map(({ icon: Icon, label, title, href, linkLabel }) => (
                  <Link
                    key={title}
                    href={href}
                    className="group flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-4 transition-colors duration-150 hover:border-brand-navy/40 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                  >
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-navy text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400">{label}</span>
                      <span className="block text-sm font-semibold text-slate-900 group-hover:text-brand-navy">{title}</span>
                    </span>
                    <ArrowRight className="h-4 w-4 flex-shrink-0 text-slate-400 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-brand-navy motion-reduce:transition-none" aria-hidden="true" />
                  </Link>
                ))}
              </div>

              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-navy-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-4"
              >
                Review the full factory profile
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <p className="mt-12 border-t border-slate-200 pt-6 text-sm leading-relaxed text-slate-400">
            Potential supporting evidence includes{" "}
            {COMPLIANCE_EVIDENCE.map((item) => `${item.name} (${item.kind.toLowerCase()})`).join(
              ", ",
            )}
            . Availability and scope depend on the selected product grade, legal entity, order, and
            destination requirement; export terms can include FOB, CIF and DDP.
          </p>
        </div>
      </section>

      {/* ── 8. Short Contact CTA ─────────────────────────────────────────────── */}
      <section
        id="home-rfq"
        data-component="homepage-rfq"
        className="scroll-mt-28 bg-brand-navy py-8 text-white sm:py-10"
        aria-labelledby="home-rfq-heading"
      >
        <div className="container">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-300">
                Quote-ready order brief
              </p>
              <h2 id="home-rfq-heading" className="font-sora text-2xl font-semibold text-white sm:text-3xl">
                Need a factory quote?
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-blue-100">
                Send product, size, quantity and destination through the contact page or WhatsApp.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex min-h-10 items-center gap-2 rounded-md bg-amber-300 px-4 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-4 focus-visible:ring-offset-brand-navy"
              >
                Request a quote
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center gap-2 rounded-md border border-white/25 px-4 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-4 focus-visible:ring-offset-brand-navy"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
