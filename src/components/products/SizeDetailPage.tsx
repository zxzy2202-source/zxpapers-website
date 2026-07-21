import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { SITE } from "@/config/siteData";
import Image from "next/image";
import { getSlotImage } from "@/lib/imageSlotUtils";
import { r2Image } from "@/lib/r2";
import type { SlotKey } from "@/config/imageSlots";
import {
  CheckCircle, ArrowRight, Package, Award, Globe,
  Phone, MessageSquare, Ship, Zap, Layers, FileText, Factory, ClipboardList,
} from "lucide-react";

export interface ApplicationItem {
  name: string;
  image: string;
  description: string;
  /** 后台可换图的槽位 key —— 必须是 imageSlots.ts 注册过的，否则 TS 报错 */
  slotKey?: SlotKey;
}

export type ProductImageSlot =
  | "thermal-rolls"
  | "thermal-labels"
  | "can-labels"
  | "detergent-labels";

type ProductFamily = ProductImageSlot;

interface SpecRow {
  label: string;
  value: string;
}

export interface PalletInfo {
  /** 每箱卷数 */
  rollsPerBox: number;
  /** 每托箱数 */
  boxesPerPallet: number;
  /** 单托总卷数 */
  rollsPerPallet: number;
  /** 单托重量 (kg) */
  weightKg: number;
  /** 托盘尺寸描述，如 "105×120×180 cm" */
  palletDim: string;
  /** 20ft 集装箱可装托数 */
  palletsPer20ft: number;
  /** 40ft 集装箱可装托数 */
  palletsPer40ft: number;
  /** 20ft 集装箱总卷数 */
  rollsPer20ft: number;
  /** 40ft 集装箱总卷数 */
  rollsPer40ft: number;
}

interface SizeDetailPageProps {
  type: "rolls" | "labels";
  sizeLabel: string;
  slug: string;
  fullTitle: string;
  badge?: string;
  description: string;
  specs: SpecRow[];
  applications: ApplicationItem[];
  markets?: string[];
  productImage: string;
  productImageSlot?: ProductImageSlot;
  parentPath?: string;
  parentLabel?: string;
  palletInfo?: PalletInfo;
}

const TYPE_TO_FAMILY: Record<SizeDetailPageProps["type"], ProductFamily> = {
  rolls: "thermal-rolls",
  labels: "thermal-labels",
};

const FAMILY_CONTENT: Record<
  ProductFamily,
  {
    parentLabel: string;
    parentPath: string;
    detailPathPrefix: string;
  }
> = {
  "thermal-rolls": {
    parentLabel: "Thermal Paper Rolls",
    parentPath: "/products/thermal-paper-rolls/blank",
    detailPathPrefix: "/products/thermal-rolls",
  },
  "thermal-labels": {
    parentLabel: "Thermal Labels",
    parentPath: "/products/thermal-labels/blank",
    detailPathPrefix: "/products/thermal-labels",
  },
  "can-labels": {
    parentLabel: "Can Labels",
    parentPath: "/products/can-labels/blank",
    detailPathPrefix: "/products/can-labels",
  },
  "detergent-labels": {
    parentLabel: "Detergent Labels",
    parentPath: "/products/detergent-labels/blank",
    detailPathPrefix: "/products/detergent-labels",
  },
};

const PRODUCT_IMAGE_SLOT_KEYS: Record<ProductImageSlot, SlotKey> = {
  "thermal-rolls": "thermal-rolls:hero",
  "thermal-labels": "thermal-labels:hero",
  "can-labels": "can-labels:hero",
  "detergent-labels": "detergent-labels:hero",
};

export default async function SizeDetailPage({
  type,
  sizeLabel,
  slug,
  fullTitle,
  badge,
  description,
  specs,
  applications,
  markets = [],
  productImage,
  productImageSlot,
  parentPath,
  parentLabel,
  palletInfo,
}: SizeDetailPageProps) {
  const family = productImageSlot ?? TYPE_TO_FAMILY[type];
  const familyContent = FAMILY_CONTENT[family];
  const resolvedParentPath = parentPath ?? familyContent.parentPath;
  const resolvedParentLabel = parentLabel ?? familyContent.parentLabel;
  const productPath = `${familyContent.detailPathPrefix}/${slug}`;
  const productUrl = `${SITE.domain}${productPath}`;
  const resolvedProductImage = productImageSlot
    ? await getSlotImage(PRODUCT_IMAGE_SLOT_KEYS[productImageSlot], productImage)
    : r2Image(productImage);
  const applicationImages = await Promise.all(
    applications.map(async (item) => ({
      ...item,
      resolvedImage: item.slotKey
        ? await getSlotImage(item.slotKey, item.image)
        : r2Image(item.image),
    }))
  );

  const waText = encodeURIComponent(
    `Hello, I need quotation for ${fullTitle}.\nQuantity: __ cartons / container\nDestination: __`
  );
  const waUrl = `${SITE.whatsappUrl}?text=${waText}`;

  const coreSellPoints = [
    "Smooth printing performance",
    "Stable roll length — consistent every batch",
    "OEM packaging available",
    "Bulk order supported",
    "BPA-free coating options",
    "ISO 9001:2015 certified manufacturing",
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
      { "@type": "ListItem", position: 2, name: "Products", item: `${SITE.domain}/products` },
      { "@type": "ListItem", position: 3, name: resolvedParentLabel, item: `${SITE.domain}${resolvedParentPath}` },
      { "@type": "ListItem", position: 4, name: fullTitle, item: productUrl },
    ],
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: fullTitle,
    description,
    image: resolvedProductImage,
    url: productUrl,
    about: { "@type": "Thing", name: fullTitle },
  };

  const heroQuickFacts = [
    specs.find((item) => item.label === "Width" || item.label === "Size")?.value ?? sizeLabel,
    specs.find((item) => item.label === "Length")?.value ?? "Custom length available",
    palletInfo ? `${palletInfo.rollsPerPallet.toLocaleString()} rolls / pallet` : "MOQ from 1 pallet",
  ];

  const pageAnchors = [
    { label: "Specifications", href: "#specifications" },
    { label: "Loading Plan", href: "#loading-plan" },
    { label: "Applications", href: "#applications" },
    { label: "Inquiry", href: "#inquiry-card" },
  ];

  const purchaseHighlights = [
    { icon: ClipboardList, title: "MOQ", value: palletInfo ? "1 pallet" : "Small bulk orders" },
    { icon: Ship, title: "Shipping", value: "FOB / CIF quotation" },
    { icon: FileText, title: "Samples", value: "Free sample support" },
    { icon: Factory, title: "OEM", value: "Private label available" },
  ];

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── HERO ── */}
      <div className="bg-brand-navy-alt text-white py-12">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="text-xs text-slate-400 mb-5 flex items-center gap-1.5 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-amber-400 transition-colors">Products</Link>
            <span>/</span>
            <Link href={resolvedParentPath} className="hover:text-amber-400 transition-colors">{resolvedParentLabel}</Link>
            <span>/</span>
            <span className="text-slate-300">{sizeLabel}</span>
          </nav>

          <div className="mb-6 flex flex-wrap items-center gap-2">
            {pageAnchors.map((anchor) => (
              <a
                key={anchor.href}
                href={anchor.href}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-200 transition-colors hover:bg-white/10 hover:text-white"
              >
                {anchor.label}
              </a>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">{fullTitle}</h1>
                {badge && (
                  <span className="bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                    {badge}
                  </span>
                )}
              </div>

              <p className="text-slate-300 text-base leading-relaxed max-w-2xl">{description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {heroQuickFacts.map((fact) => (
                  <div key={fact} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                    <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Quick fact</div>
                    <div className="mt-1 text-sm font-semibold text-white">{fact}</div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-2xl">
                {coreSellPoints.map((p) => (
                  <div key={p} className="flex items-center gap-2 text-sm text-slate-200">
                    <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    {p}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-6 py-3 rounded-md transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  Send Inquiry Now
                </Link>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/25 bg-white/10 hover:bg-white/15 text-white font-bold px-6 py-3 rounded-md transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  WhatsApp for Quick Response
                </a>
              </div>
            </div>

            <div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-sm">
                <Image
                  src={resolvedProductImage}
                  alt={fullTitle}
                  className="w-full rounded-xl border border-white/15"
                  loading="eager"
                  width={720}
                  height={520}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="mt-3 grid grid-cols-4 gap-2 text-center">
                  {purchaseHighlights.map(({ icon: Icon, title, value }) => (
                    <div key={title} className="rounded-xl bg-slate-950/45 px-2 py-3">
                      <Icon className="mx-auto mb-1.5 h-4 w-4 text-amber-400" />
                      <div className="text-[10px] uppercase tracking-[0.16em] text-slate-400">{title}</div>
                      <div className="mt-1 text-[11px] font-semibold text-white leading-tight">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* ── SPECS + KEY INFO ── */}
      <div className="bg-white py-14">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Specs table */}
            <div className="lg:col-span-2 space-y-10">
              <div id="specifications">
                <h2 className="text-xl font-extrabold text-slate-900 mb-5">Specifications</h2>
                <div className="divide-y divide-slate-100 border border-slate-200 rounded-lg overflow-hidden">
                  {/* Always show key trading specs first */}
                  {[
                    { label: "Size", value: sizeLabel },
                    ...specs.filter((s) => s.label !== "Size"),
                  ].map(({ label, value }) => (
                    <div key={label} className="flex text-sm">
                      <div className="w-2/5 bg-slate-50 px-4 py-3 font-semibold text-slate-600 flex-shrink-0">{label}</div>
                      <div className="flex-1 px-4 py-3 text-slate-800 font-medium">{value}</div>
                    </div>
                  ))}
                </div>
                {markets.length > 0 && (
                  <div className="mt-4 flex items-center gap-2 flex-wrap">
                    <Globe className="w-4 h-4 text-slate-400" />
                    {markets.map((m) => (
                      <span key={m} className="text-xs bg-slate-50 border border-slate-200 text-slate-700 px-2.5 py-1 rounded-full font-medium">{m}</span>
                    ))}
                  </div>
                )}
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-xl font-extrabold text-slate-900 mb-4">Why buyers choose this specification</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="rounded-xl bg-white p-4 shadow-sm border border-slate-200">
                    <div className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-2">Commercial fit</div>
                    <div className="text-sm font-semibold text-slate-900">Built for repeat wholesale orders, stable batch control, and consistent downstream replenishment.</div>
                  </div>
                  <div className="rounded-xl bg-white p-4 shadow-sm border border-slate-200">
                    <div className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-2">Factory capability</div>
                    <div className="text-sm font-semibold text-slate-900">Supports OEM packaging, core-size customization, and production planning for container or pallet orders.</div>
                  </div>
                  <div className="rounded-xl bg-white p-4 shadow-sm border border-slate-200">
                    <div className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-2">Trade support</div>
                    <div className="text-sm font-semibold text-slate-900">Fast quotation, sample support, and route-aware FOB / CIF communication for B2B buyers.</div>
                  </div>
                </div>
              </div>

              {/* Strong trading info */}
              <div id="loading-plan" className="bg-brand-navy-alt text-white rounded-lg p-7">
                <h2 className="text-lg font-extrabold mb-5">Container Loading &amp; Delivery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {[
                    { icon: Ship,        title: "20ft & 40ft FCL",       desc: "Container loading available for bulk orders" },
                    { icon: Zap,         title: "15–25 Days Delivery",   desc: "Fast sea freight to most major ports" },
                    { icon: CheckCircle, title: "MOQ: 1 Pallet",          desc: "1 pallet minimum order, full container for bulk" },
                  ].map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="flex gap-3">
                      <div className="w-9 h-9 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-amber-400" />
                      </div>
                      <div>
                        <div className="font-bold text-sm text-white">{title}</div>
                        <div className="text-xs text-slate-400 mt-0.5">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pallet Ordering Plan */}
              {palletInfo && (
                <div className="border border-slate-200 rounded-lg overflow-hidden">
                  <div className="bg-brand-navy px-6 py-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Layers className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <h2 className="text-base font-extrabold text-white">Pallet Ordering Plan</h2>
                      <p className="text-xs text-slate-400">MOQ 1 pallet · Factory-direct pricing</p>
                    </div>
                  </div>
                  <div className="bg-white p-6">
                    {/* Key pallet stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center bg-slate-50 rounded-md p-4">
                        <div className="text-2xl font-extrabold text-brand-navy">{palletInfo.rollsPerPallet.toLocaleString()}</div>
                        <div className="text-xs text-slate-500 mt-1">Rolls / Pallet</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">{palletInfo.rollsPerBox} rolls/box · {palletInfo.boxesPerPallet} boxes</div>
                      </div>
                      <div className="text-center bg-slate-50 rounded-md p-4">
                        <div className="text-2xl font-extrabold text-brand-navy">{palletInfo.weightKg.toLocaleString()}</div>
                        <div className="text-xs text-slate-500 mt-1">kg / Pallet</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">Gross weight</div>
                      </div>
                      <div className="text-center bg-slate-50 rounded-md p-4">
                        <div className="text-lg font-extrabold text-brand-navy leading-tight">{palletInfo.palletDim}</div>
                        <div className="text-xs text-slate-500 mt-1">Pallet Size</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">L × W × H</div>
                      </div>
                    </div>

                    {/* Container loading */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-50 border border-slate-200 rounded-md p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Ship className="w-4 h-4 text-brand-navy" />
                          <span className="text-sm font-bold text-slate-900">20ft Container</span>
                        </div>
                        <div className="space-y-1.5">
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-500">Pallets</span>
                            <span className="font-bold text-slate-800">~{palletInfo.palletsPer20ft} pallets</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-500">Total Rolls</span>
                            <span className="font-bold text-brand-navy">~{palletInfo.rollsPer20ft.toLocaleString()} rolls</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-amber-50 border border-amber-200 rounded-md p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Ship className="w-4 h-4 text-amber-600" />
                          <span className="text-sm font-bold text-amber-900">40ft Container</span>
                        </div>
                        <div className="space-y-1.5">
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-500">Pallets</span>
                            <span className="font-bold text-slate-800">~{palletInfo.palletsPer40ft} pallets</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-500">Total Rolls</span>
                            <span className="font-bold text-amber-700">~{palletInfo.rollsPer40ft.toLocaleString()} rolls</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-3">* Container estimates based on volume. Actual loading may vary by packing method.</p>
                  </div>
                </div>
              )}

              {/* Applications */}
              {applications.length > 0 && (
                <div id="applications">
                  <h2 className="text-xl font-extrabold text-slate-900 mb-5">Applications</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {applicationImages.map(({ name, resolvedImage, description: appDesc }) => (
                      <div key={name} className="group bg-white border border-slate-200 hover:border-brand-navy rounded-md overflow-hidden transition-colors duration-200">
                        <div className="aspect-video overflow-hidden">
                          <Image
                            src={resolvedImage}
                            alt={name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            width={300}
                            height={200}
                           sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                        </div>
                        <div className="p-3">
                          <div className="font-semibold text-slate-900 text-xs mb-1">{name}</div>
                          <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">{appDesc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Related */}
              <div>
                <h2 className="text-xl font-extrabold text-slate-900 mb-4">Related Products</h2>
                <div className="flex flex-wrap gap-3">
                  <Link href={resolvedParentPath} className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-brand-navy hover:text-brand-navy text-slate-700 text-sm font-medium px-4 py-2 rounded-md transition-colors">
                    <Package className="w-4 h-4" />All {resolvedParentLabel}
                  </Link>
                  <Link href="/oem/custom-printing" className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-brand-navy hover:text-brand-navy text-slate-700 text-sm font-medium px-4 py-2 rounded-md transition-colors">
                    <ArrowRight className="w-4 h-4" />Custom Printing
                  </Link>
                  <Link href="/oem/packaging" className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-brand-navy hover:text-brand-navy text-slate-700 text-sm font-medium px-4 py-2 rounded-md transition-colors">
                    <ArrowRight className="w-4 h-4" />Private Label
                  </Link>
                  {type === "rolls" ? (
                    <Link href="https://www.zhixinpaper.com/eu" className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-brand-navy hover:text-brand-navy text-slate-700 text-sm font-medium px-4 py-2 rounded-md transition-colors">
                      <ArrowRight className="w-4 h-4" />Europe Thermal Paper Site
                    </Link>
                  ) : null}
                  <Link href="/manufacturing/certifications" className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-brand-navy hover:text-brand-navy text-slate-700 text-sm font-medium px-4 py-2 rounded-md transition-colors">
                    <Award className="w-4 h-4" />Certifications
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar — sticky inquiry */}
            <div className="space-y-5">
              {/* Quick inquiry card */}
              <div id="inquiry-card" className="bg-white border border-slate-200 rounded-lg p-6 sticky top-24">
                <h3 className="text-base font-extrabold text-slate-900 mb-1">
                  Get Price for {sizeLabel}
                </h3>
                <p className="text-xs text-slate-500 mb-5">Reply within 24 hours. Send quantity, destination, and target packaging requirement for a more accurate quote.</p>

                <div className="space-y-3 mb-5">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full border border-brand-navy bg-white hover:bg-slate-50 text-brand-navy font-bold py-3.5 rounded-md transition-colors text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    WhatsApp for Quick Response
                  </a>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full bg-brand-navy-alt hover:bg-brand-navy-hover text-white font-bold py-3.5 rounded-md transition-colors text-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Send Inquiry Now
                  </Link>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-100">
                  {[
                    "Free samples available",
                    "FOB / CIF pricing",
                    "OEM packaging supported",
                    "NDA on request",
                  ].map((t) => (
                    <div key={t} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              {/* OEM upsell */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
                <h4 className="font-bold text-amber-900 mb-2 text-sm">Need Custom Specs?</h4>
                <p className="text-sm text-amber-800 mb-3">
                  Custom widths, lengths, core sizes, and private label printing available.
                </p>
                <Link href="/oem" className="text-sm font-semibold text-amber-700 hover:text-amber-900 flex items-center gap-1.5 transition-colors">
                  Learn about OEM <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM CTA ── */}
      <section className="py-14 bg-brand-navy-alt">
        <div className="container text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Ready to Order {sizeLabel} Thermal Paper Rolls?
          </h2>
          <p className="text-slate-300 text-sm mb-8 max-w-lg mx-auto">
            Tell us your quantity and destination. We&apos;ll reply with competitive pricing within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-3.5 rounded-md transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              Send Inquiry Now
            </Link>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/25 bg-white/10 hover:bg-white/15 text-white font-bold px-8 py-3.5 rounded-md transition-colors"
            >
              <Phone className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

    </Layout>
  );
}
