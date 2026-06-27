import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { preload, preconnect } from "react-dom";
import { getSlotImages } from "@/lib/imageSlotUtils";
import type { SlotKey } from "@/config/imageSlots";
import { readHero } from "@/lib/heroStore";
import { r2Image } from "@/lib/r2";
import Layout from "@/components/layout/Layout";
import { SITE, FACTORY } from "@/config/siteData";
import { MessageSquare, Phone, Package, CheckCircle, ArrowRight,
  Ship, Zap, Tag, Globe, Users, Award, Factory as FactoryIcon, Printer, Layers, Scissors, ClipboardCheck, Handshake,
} from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import PopularSizesCarousel, { type SkuItem } from "@/components/shared/PopularSizesCarousel";
import { CountryFlag, type CountryCode } from "@/components/ui/country-flag";

export const metadata: Metadata = {
  title: "Custom-Printed Thermal Paper, Labels & Carbonless Forms | Zhixin Paper",
  description: "ISO 9001 factory for blank & custom-printed thermal paper rolls, thermal labels, can labels & carbonless NCR forms. OEM/private label printing plus jumbo-roll supply. Request a free quote.",
  alternates: { canonical: SITE.domain },
  openGraph: {
    title: "Custom-Printed Thermal Paper, Labels & Carbonless Forms | ZhixinPaper",
    description: "Factory for blank & custom-printed thermal rolls, labels, can labels & carbonless forms. OEM/private label with fast export shipping.",
    url: SITE.domain,
    type: "website",
    images: [{ url: `${SITE.domain}/og-default.png`, width: 1200, height: 630, alt: "ZhixinPaper | Thermal Paper & Custom Printing Factory", type: "image/png" }],
  },
};

// Enable ISR with 1-minute revalidation to keep content fresh while preserving performance
export const revalidate = 60;
const FACTORY_IMG_FALLBACK =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/oem-factory-EHdu8eZwwzSo5DxSRyzQdF.webp";
const HERO_SLIDE_2 =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/factory-coating-line-Rfrrgy9ZbXu6C6rJRRsG37.webp";
const HERO_SLIDE_3 =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-rolls-RQBrphmgzbAMk7eq3HsvNq.webp";
const THERMAL_LABELS_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-labels-FgJ5U8LZDHPF5nwmD6Uqa5.webp";

const testimonials = [
  {
    name: "U.S. POS Distributor",
    country: "United States",
    countryCode: "US" as CountryCode,
    role: "80x80mm Receipt Rolls",
    text: "The carton labels, roll length, and paper brightness stayed consistent across repeat shipments. That made our retail POS accounts easier to support.",
    channel: "WhatsApp",
    time: "10:24",
  },
  {
    name: "Canada Label Buyer",
    country: "Canada",
    countryCode: "CA" as CountryCode,
    role: "4x6 Shipping Labels",
    text: "The 4x6 thermal labels worked well for courier and warehouse printing. Adhesive, roll packing, and barcode print quality were stable.",
    channel: "WhatsApp",
    time: "14:08",
  },
  {
    name: "UK Retail Supplier",
    country: "United Kingdom",
    countryCode: "GB" as CountryCode,
    role: "57x50mm POS Rolls",
    text: "The roll diameter and core size matched our POS printer requirements. Documentation and carton marks were clear for repeat imports.",
    channel: "WhatsApp",
    time: "09:42",
  },
  {
    name: "Germany Office Supplier",
    country: "Germany",
    countryCode: "DE" as CountryCode,
    role: "Phenol-Free Thermal Paper",
    text: "The phenol-free paper option helped us meet customer requirements. Sample confirmation before bulk order reduced quality risk.",
    channel: "WhatsApp",
    time: "11:16",
  },
  {
    name: "France Packaging Buyer",
    country: "France",
    countryCode: "FR" as CountryCode,
    role: "Custom Thermal Labels",
    text: "Artwork checking and label specifications were confirmed before production. The finished labels matched our private-label packing plan.",
    channel: "WhatsApp",
    time: "15:27",
  },
  {
    name: "Australia POS Wholesaler",
    country: "Australia",
    countryCode: "AU" as CountryCode,
    role: "Mixed POS Roll Pallets",
    text: "Mixed sizes were packed clearly by SKU. It helped our warehouse receive and distribute 57mm and 80mm rolls without confusion.",
    channel: "WhatsApp",
    time: "13:51",
  },
  {
    name: "Netherlands Importer",
    country: "Netherlands",
    countryCode: "NL" as CountryCode,
    role: "Barcode Thermal Labels",
    text: "Barcode print quality stayed sharp, and the label rolls arrived with good edge cutting. The packing list matched our order lines.",
    channel: "WhatsApp",
    time: "16:20",
  },
  {
    name: "UAE POS Distributor",
    country: "UAE",
    countryCode: "AE" as CountryCode,
    role: "OEM Printed Receipt Rolls",
    text: "Our branded receipt artwork and carton design were checked before mass production. The final rolls matched our store requirements and were easy to distribute.",
    channel: "WeChat",
    time: "16:35",
  },
];

// ── 产品类目网格（参考 sailingpaper 的 Product Categories 模块）──────────
// 密集 4 列图片卡 + 单一「Inquiry Now」；按询盘漏斗排序，tag 区分 现货/定制/代理
type CategoryTag = "In Stock" | "Custom" | "Agency";
const TAG_STYLES: Record<CategoryTag, string> = {
  "In Stock": "bg-white/90 text-amber-700 border border-white/40",
  "Custom":   "bg-white/90 text-brand-navy border border-white/40",
  "Agency":   "bg-white/90 text-slate-600 border border-white/40",
};
const productCategoryCards: ReadonlyArray<{
  title: string;
  slot: SlotKey;
  fallback: string;
  tag: CategoryTag;
  spec: string;
  href: string;
}> = [
  // ① 流量款（主要询盘）—— 空白现货
  { title: "Blank Thermal Paper Rolls", slot: "home:category-thermal-rolls", fallback: HERO_SLIDE_3, tag: "In Stock", spec: "80×80 / 57×50 / 57×40 / 79×80 mm POS receipt rolls", href: "/products/thermal-paper-rolls/blank" },
  { title: "Blank Thermal Labels", slot: "home:category-thermal-labels", fallback: THERMAL_LABELS_IMG, tag: "In Stock", spec: "4×6 / 4×3 / 2×1 in shipping & barcode labels", href: "/products/thermal-labels/blank" },
  { title: "BPA-Free Thermal Paper", slot: "home:product-phenol-free-thermal-paper", fallback: HERO_SLIDE_3, tag: "In Stock", spec: "Phenol-free, food-safe receipt paper rolls", href: "/products/bpa-free-thermal-paper" },
  // ② 利润款（高毛利定制印刷）
  { title: "Custom-Printed Rolls & Labels", slot: "home:category-custom-rolls", fallback: HERO_SLIDE_3, tag: "Custom", spec: "Logo, Pantone, QR & bilingual branded rolls", href: "/products/thermal-paper-rolls/custom-printed" },
  { title: "Custom-Printed Carbonless Forms", slot: "home:category-carbonless", fallback: HERO_SLIDE_3, tag: "Custom", spec: "2/3-ply NCR invoices, delivery notes, order books", href: "/products/ncr-forms" },
  { title: "Custom-Printed Can Labels", slot: "home:category-can-labels", fallback: THERMAL_LABELS_IMG, tag: "Custom", spec: "Food, beverage & aerosol can labels, die-cut", href: "/products/can-labels/custom-printed" },
  { title: "Custom-Printed Bottle Labels", slot: "home:category-bottle-labels", fallback: THERMAL_LABELS_IMG, tag: "Custom", spec: "Detergent & beverage bottle labels, wrap-around", href: "/products/detergent-labels/custom-printed" },
  // ③ 战略款（代理）
  { title: "Thermal Paper Jumbo Rolls", slot: "home:category-jumbo-rolls", fallback: HERO_SLIDE_2, tag: "Agency", spec: "405 / 640 / 880 mm thermal & label base rolls", href: `/contact?product=${encodeURIComponent("Jumbo Roll Supply")}` },
];

// 细分 SKU 横向轮播（参考 sailingpaper 的二级产品轮播）—— 链接到真实尺寸详情页
const popularSkuItems: SkuItem[] = [
  { size: "80 × 80 mm", use: "Restaurant & retail POS receipts", badge: "Best Seller", href: "/products/thermal-rolls/80x80mm" },
  { size: "57 × 50 mm", use: "Counter POS & card terminals", badge: "High Demand", href: "/products/thermal-rolls/57x50mm" },
  { size: "57 × 40 mm", use: "Mobile & handheld POS printers", href: "/products/thermal-rolls/57x40mm" },
  { size: "57 × 30 mm", use: "Pocket & mini receipt printers", href: "/products/thermal-rolls/57x30mm" },
  { size: "80 × 70 mm", use: "European POS printers", badge: "Europe", href: "/products/thermal-rolls/80x70mm" },
  { size: "110 × 80 mm", use: "Kiosk & wide-format printers", href: "/products/thermal-rolls/110x80mm" },
  { size: "4 × 6 in", use: "Shipping & courier labels", badge: "Most Popular", href: "/products/thermal-labels/4x6in" },
  { size: "4 × 3 in", use: "Warehouse & carton labels", href: "/products/thermal-labels/4x3in" },
  { size: "2 × 1 in", use: "Barcode & SKU labels", href: "/products/thermal-labels/2x1in" },
  { size: "2 × 4 in", use: "Address & product labels", href: "/products/thermal-labels/2x4in" },
  { size: "211 × 400", use: "Standard food & beverage cans", href: "/products/can-labels/211x400" },
  { size: "300 × 407", use: "Wide-body food cans", href: "/products/can-labels/300x407" },
];

const printingCapabilities = [
  "Logo & brand colors (Pantone)",
  "QR codes & loyalty barcodes",
  "Arabic + English bilingual",
  "TRA / ZATCA / FIRS compliant",
  "MOQ from 1,000 units",
  "Free design proof in 24h",
];

const complianceMarkets = [
  { code: "TZ" as CountryCode, country: "Tanzania",     compliance: "TRA Compliant",   href: "/markets/africa/tanzania" },
  { code: "SA" as CountryCode, country: "Saudi Arabia",  compliance: "ZATCA Compliant", href: "/markets/middle-east/saudi-arabia" },
  { code: "NG" as CountryCode, country: "Nigeria",       compliance: "FIRS Compliant",  href: "/markets/africa/nigeria" },
  { code: "AE" as CountryCode, country: "UAE",           compliance: "VAT Compliant",   href: "/markets/middle-east/uae" },
  { code: "TH" as CountryCode, country: "Thailand",      compliance: "PromptPay QR",    href: "/markets/southeast-asia/thailand" },
  { code: "ID" as CountryCode, country: "Indonesia",     compliance: "QRIS Compliant",  href: "/markets/southeast-asia/indonesia" },
];

const jumboBenefits = [
  "Co-purchasing with partner mills for better base-paper pricing",
  "We take on finished-goods orders peer factories can't run in-house",
  "Thermal & self-adhesive label base rolls, controlled GSM",
  "Flexible MOQ and container planning for factory buyers",
];


const whyUs = [
  {
    icon: Tag,
    title: "Factory Direct Price",
    desc: "No middlemen. Buy direct from our factory and save 15-30% vs. trading companies.",
  },
  {
    icon: FactoryIcon,
    title: "Daily Production Capacity",
    desc: `${FACTORY.productionLines} production lines, ${FACTORY.dailyOutput} daily output. Large orders fulfilled on time.`,
  },
  {
    icon: Zap,
    title: "Fast Container Loading",
    desc: `FCL ready in ${FACTORY.fclLoadingDays} business days. Warehouse stock for most popular sizes.`,
  },
  {
    icon: Package,
    title: "OEM & Private Label",
    desc: "Custom logo, packaging, and core printing. Build your own brand with our factory.",
  },
];

const productionProcess = [
  {
    icon: Layers,
    step: "01",
    title: "Artwork & Spec Confirmation",
    desc: "Confirm paper grade, GSM, width, core size, print artwork, copies, packing method, and destination requirements before production.",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Free Design Proof",
    desc: "We send a digital proof within 24 hours — logo placement, Pantone colors, QR codes, and bilingual layouts checked before mass print.",
  },
  {
    icon: FactoryIcon,
    step: "03",
    title: "Printing & Converting",
    desc: "Flexographic printing, then slitting and rewinding into finished rolls, labels, and forms with controlled size and tension.",
  },
  {
    icon: ClipboardCheck,
    step: "04",
    title: "Inspection & Export",
    desc: "Check print registration, roll size and length, carton labels, and pallet plan, then load with full export documents.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": SITE.domain
    }
  ]
};

export default async function HomePage() {
  const [imgs, hero] = await Promise.all([
    getSlotImages(productCategoryCards.map((c) => ({ slot: c.slot, fallback: c.fallback }))),
    readHero(),
  ]);

  const banners = hero.banners ?? [];
  // Hero 三张 Banner 唯一数据源 = /admin/hero (banners[i])，没传则使用代码内置 fallback
  const HERO_FALLBACKS = [FACTORY_IMG_FALLBACK, HERO_SLIDE_2, HERO_SLIDE_3];
  const finalHeroImages = HERO_FALLBACKS.map((fb, i) =>
    banners[i]?.url ? r2Image(banners[i]!.url) : fb,
  );
  const primaryHeroImage = finalHeroImages[0];

  if (primaryHeroImage) {
    preload(primaryHeroImage, { as: "image", fetchPriority: "high" });
    if (primaryHeroImage.startsWith("http")) {
      preconnect(new URL(primaryHeroImage).origin, { crossOrigin: "anonymous" });
    }
  }

  const jumboImage = imgs["home:category-jumbo-rolls"] ?? HERO_SLIDE_2;
  const waBase = `${SITE.whatsappUrl}?text=`;
  const waGeneral = `${waBase}${encodeURIComponent(
    "Hello, I need a quotation for thermal paper. Please send me price and MOQ."
  )}`;
  const waContainer = `${waBase}${encodeURIComponent(
    "Hello, I need a quotation.\nProduct: __\nQuantity: __ container\nDestination: __"
  )}`;
  const waJumbo = `${waBase}${encodeURIComponent(
    "Hello, we are a factory interested in jumbo-roll supply / OEM partnership. Please share specs and pricing."
  )}`;

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ① HERO —— 定制印刷 / OEM 工厂主线 */}
      <PageHero
        bgImages={finalHeroImages}
        bgCarouselInterval={4500}
        overlayDir="left"
        overlayOpacity={50}
        minHeight="min-h-[580px]"
        badge={{
          icon: <Award className="w-4 h-4" />,
          text: hero.badgeText || "Thermal Paper & Custom Printing Factory · Since 2009",
          color: "amber",
        }}
        eyebrow={hero.eyebrow || "Custom Printing · OEM / Private Label · Jumbo Roll Supply"}
        trustBadges={
          hero.trustBadges && hero.trustBadges.length > 0
            ? hero.trustBadges
            : ["ISO 9001 Certified", "BPA-Free", "OEM / Private Label", "FCL 3-5 Days"]
        }
        title={
          hero.titleMain || hero.titleHighlight ? (
            <>
              {hero.titleMain || "Thermal Paper, Labels & Carbonless Forms"}
              <br />
              <span className="text-amber-400">
                {hero.titleHighlight || "Custom-Printed for Brands Worldwide"}
              </span>
            </>
          ) : (
            <>
              Thermal Paper, Labels &amp; Carbonless Forms<br />
              <span className="text-amber-400">
                Custom-Printed for<br className="sm:hidden" /> Brands Worldwide
              </span>
            </>
          )
        }
        subtitle={
          hero.subtitle ||
          `Factory-direct blank stock and custom-printed thermal rolls, thermal labels, can labels, and carbonless NCR forms — plus jumbo-roll supply for converters. Export-ready packing and fast loading from our ${FACTORY.area} facility in Xi'an, China.`
        }
        ctas={[
          {
            label: hero.ctaPrimary?.label || "Get a Custom Quote",
            href: hero.ctaPrimary?.href || "/contact",
            variant: "primary",
            icon: <MessageSquare className="w-4 h-4" />,
          },
          {
            label: hero.ctaSecondary?.label || "WhatsApp Us",
            href: hero.ctaSecondary?.href || waGeneral,
            variant: "whatsapp",
            icon: <Phone className="w-4 h-4" />,
            external: true,
          },
        ]}
      />

      {/* ①b TRUST STRIP —— 关键工厂数据 + 认证，紧跟 Hero 建立信任 */}
      <section className="border-b border-white/10 bg-brand-navy-alt py-4 text-white">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm sm:gap-x-12">
            <span className="flex items-center gap-2">
              <FactoryIcon className="h-4 w-4 text-amber-300" aria-hidden="true" />
              <span className="font-semibold">{FACTORY.area}</span>
              <span className="text-slate-300">Factory</span>
            </span>
            <span className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-amber-300" aria-hidden="true" />
              <span className="font-semibold">{FACTORY.dailyOutput}</span>
              <span className="text-slate-300">Daily</span>
            </span>
            <span className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-amber-300" aria-hidden="true" />
              <span className="font-semibold">{FACTORY.countriesServed}</span>
              <span className="text-slate-300">Countries</span>
            </span>
            <span className="flex items-center gap-2">
              <Users className="h-4 w-4 text-amber-300" aria-hidden="true" />
              <span className="font-semibold">{FACTORY.oemClients}</span>
              <span className="text-slate-300">OEM Clients</span>
            </span>
            <span className="flex items-center gap-2">
              <Award className="h-4 w-4 text-amber-300" aria-hidden="true" />
              <span className="text-slate-300">ISO 9001 · FSC · BPA-Free · CE</span>
            </span>
          </div>
        </div>
      </section>

      {/* ② PRODUCT CATEGORIES —— 参考 sailingpaper 的密集类目网格，按询盘漏斗排序 */}
      <section className="py-20 bg-white border-b border-slate-100" aria-labelledby="product-categories-heading">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-brand-navy text-sm font-semibold uppercase tracking-[0.18em] mb-3">Product Categories</p>
            <h2 id="product-categories-heading" className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-slate-900 text-balance">
              Thermal Rolls, Labels, Carbonless Forms &amp; Jumbo Supply
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 text-pretty">
              Blank stock ready to ship, custom-printed profit lines, and jumbo-roll supply. Pick your product and send an inquiry — we reply within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {productCategoryCards.map(({ title, slot, fallback, tag, spec, href }) => {
              const cardImage = imgs[slot] ?? fallback;
              const inquiryHref = `/contact?product=${encodeURIComponent(title)}`;
              return (
                <article
                  key={title}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-[transform,border-color,box-shadow] duration-200 motion-reduce:transition-none hover:-translate-y-1 hover:border-brand-navy/40 hover:shadow-lg"
                >
                  <Link href={href} className="relative block aspect-[4/3] overflow-hidden bg-slate-100" aria-label={`View ${title}`}>
                    <Image
                      src={cardImage}
                      alt={`${title} from ZhixinPaper factory`}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
                    />
                    <span className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] ${TAG_STYLES[tag]}`}>
                      {tag}
                    </span>
                  </Link>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-base font-semibold leading-snug tracking-[-0.01em] text-slate-900">
                      <Link href={href} className="transition-colors group-hover:text-brand-navy">{title}</Link>
                    </h3>
                    <p className="mt-2 mb-4 flex-1 text-sm leading-relaxed text-slate-600 text-pretty">{spec}</p>
                    <Link
                      href={inquiryHref}
                      className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-navy px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-navy-hover"
                    >
                      <MessageSquare className="h-4 w-4" />
                      Inquiry Now
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ②b POPULAR SIZES CAROUSEL —— 细分 SKU 横向轮播（带左右箭头） */}
      <section className="py-16 bg-slate-50 border-b border-slate-200" aria-labelledby="popular-sizes-heading">
        <div className="container">
          <div className="mb-2 max-w-2xl">
            <p className="text-brand-navy text-sm font-semibold uppercase tracking-[0.18em] mb-3">Popular Sizes</p>
            <h2 id="popular-sizes-heading" className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-slate-900 text-balance">
              Best-Selling Sizes, Ready for a Quick Quote
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 text-pretty">
              Browse our fastest-moving roll and label sizes. Need a size that is not listed? We slit to any custom width.
            </p>
          </div>
          <PopularSizesCarousel items={popularSkuItems} />
        </div>
      </section>

      {/* ④ CUSTOM PRINTING CAPABILITY —— 能力差异化带 */}
      <section className="py-20 bg-white border-b border-slate-100" aria-labelledby="capability-heading">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-brand-navy text-sm font-semibold uppercase tracking-[0.18em] mb-3">Printing Capability</p>
              <h2 id="capability-heading" className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-slate-900 mb-5 leading-tight text-balance">
                Turn Every Receipt, Label &amp; Form Into a Brand Touchpoint
              </h2>
              <p className="text-slate-600 text-base mb-6 leading-relaxed text-pretty">
                Full-color flexographic printing with Pantone matching, QR codes, Arabic/English bilingual layouts, and TRA / ZATCA / FIRS compliance printing for Africa, Middle East, and Southeast Asia.
              </p>
              <div className="grid grid-cols-1 gap-3 mb-8 sm:grid-cols-2">
                {printingCapabilities.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/oem/custom-printing"
                  className="inline-flex items-center gap-2 bg-brand-navy-alt hover:bg-brand-navy-hover text-white font-semibold px-6 py-3 rounded-md transition-colors duration-200 text-sm"
                >
                  <Printer className="w-4 h-4" />
                  OEM Printing Specs &amp; MOQ
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-slate-300 text-slate-700 hover:border-brand-navy hover:text-brand-navy font-semibold px-6 py-3 rounded-md transition-colors duration-200 text-sm"
                >
                  Request a Design Proof
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {complianceMarkets.map(({ code, country, compliance, href }) => (
                <Link
                  key={country}
                  href={href}
                  className="bg-slate-50 border border-slate-200 hover:border-brand-navy hover:bg-white rounded-lg p-4 transition-colors duration-200 group"
                >
                  <div className="mb-2"><CountryFlag code={code} label={country} className="w-8 h-auto" /></div>
                  <div className="font-semibold text-slate-900 text-sm group-hover:text-brand-navy">{country}</div>
                  <div className="text-xs text-slate-500 mt-1">{compliance}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ⑤ CUSTOM ORDER PROCESS —— 下单流程 4 步 */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-brand-navy text-sm font-semibold uppercase tracking-[0.18em] mb-3">How Custom Orders Work</p>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-slate-900 leading-tight text-balance">
                From Artwork to Container in Four Controlled Steps
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 text-pretty">
                Every order follows a clear process, with artwork, proof, print registration, size, packing, and pallet plan checked before shipment — so first-time overseas buyers know exactly what to expect.
              </p>

              <div className="mt-8 overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
                <div className="relative aspect-[4/3] w-full bg-slate-100">
                  <Image
                    src={HERO_SLIDE_2}
                    alt="Thermal paper printing, slitting, and converting line"
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-px bg-slate-200">
                  {[
                    { label: "Design Proof", value: "24h" },
                    { label: "FCL Ready", value: FACTORY.fclLoadingDays },
                  ].map(({ label, value }) => (
                    <div key={label} className="bg-white px-5 py-4">
                      <div className="text-lg font-semibold text-slate-900">{value}</div>
                      <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {productionProcess.map(({ icon: Icon, step, title, desc }) => (
                <div key={title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 bg-slate-50">
                      <Icon className="h-5 w-5 text-brand-navy" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-700">{step}</span>
                  </div>
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ⑥ FACTORY PROOF + WHY US —— 信任带 */}
      <section className="py-14 bg-brand-navy-alt text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-white/10 rounded-md overflow-hidden">
            {[
              { icon: FactoryIcon, value: FACTORY.area, label: "Factory Area", sub: "Modern facility in Xi'an" },
              { icon: Users, value: FACTORY.oemClients, label: "OEM Clients", sub: "Worldwide distributors" },
              { icon: Globe, value: `${FACTORY.countriesServed}+`, label: "Countries Served", sub: "Global export network" },
              { icon: Award, value: "ISO 9001", label: "Certified", sub: "Quality management" },
            ].map(({ icon: Icon, value, label, sub }) => (
              <div key={label} className="p-6 border-b border-r border-white/10 md:border-b-0 even:border-r-0 md:even:border-r md:last:border-r-0">
                <div className="w-10 h-10 border border-white/12 rounded-md flex items-center justify-center mb-4 bg-white/5">
                  <Icon className="w-5 h-5 text-amber-300" />
                </div>
                <div className="text-2xl font-semibold text-white mb-1">{value}</div>
                <div className="text-sm font-semibold text-slate-100 mb-1">{label}</div>
                <div className="text-xs text-slate-400">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-b border-slate-100">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-brand-navy text-sm font-semibold uppercase tracking-[0.18em] mb-3">Our Advantages</p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-slate-900 text-balance">Why Buyers Choose Us</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyUs.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <div className="w-12 h-12 bg-white border border-slate-200 rounded-md flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-brand-navy" />
                </div>
                <h3 className="font-semibold tracking-[-0.02em] text-slate-900 text-lg mb-2">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⑦ JUMBO ROLL SUPPLY & FACTORY PARTNERSHIP —— 工厂合作通道 */}
      <section className="py-20 bg-brand-navy-alt text-white" aria-labelledby="jumbo-heading">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-md border border-white/10 bg-brand-navy/40">
                <Image
                  src={jumboImage}
                  alt="Jumbo thermal and label base rolls ready for converting"
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-amber-500 text-slate-950 rounded-md p-4 text-center">
                <div className="text-2xl font-semibold">{FACTORY.productionLines}</div>
                <div className="text-xs font-semibold uppercase tracking-[0.14em]">Production Lines</div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-amber-300 text-sm font-semibold uppercase tracking-[0.18em] mb-4">Factory-to-Factory Supply</p>
              <h2 id="jumbo-heading" className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] mb-5 leading-tight text-balance">
                Jumbo Roll Supply &amp; <span className="text-amber-300">OEM Partnership</span>
              </h2>
              <p className="text-slate-200 text-base mb-7 leading-relaxed text-pretty">
                We co-purchase jumbo thermal and label base rolls with partner mills to secure better pricing — and we take on finished-goods orders that peer factories can&apos;t run in-house. If you are a factory or large converter, let&apos;s build a two-way supply relationship.
              </p>
              <div className="space-y-4 mb-8">
                {jumboBenefits.map((text) => (
                  <div key={text} className="flex items-start gap-3">
                    <div className="w-8 h-8 border border-white/12 rounded-md flex items-center justify-center flex-shrink-0 bg-white/5">
                      <CheckCircle className="w-4 h-4 text-amber-300" />
                    </div>
                    <span className="text-slate-200 text-sm font-medium">{text}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={`/contact?product=${encodeURIComponent("Jumbo Roll Supply & OEM Partnership")}`}
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-7 py-3 rounded-md transition-colors duration-200"
                >
                  <Handshake className="w-5 h-5" />
                  Partner With Us
                </Link>
                <a
                  href={waJumbo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-white/35 text-white font-semibold px-7 py-3 rounded-md transition-colors duration-200"
                >
                  <Phone className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ⑧ TESTIMONIALS —— 各市场买家反馈 */}
      <section className="py-16 bg-slate-50 border-y border-slate-100" aria-labelledby="buyer-feedback-heading">
        <div className="container">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-brand-navy text-sm font-semibold uppercase tracking-[0.18em] mb-3">Buyer Feedback by Market</p>
            <h2 id="buyer-feedback-heading" className="text-2xl sm:text-3xl font-semibold tracking-[-0.03em] text-slate-900 text-balance">
              Feedback from Thermal Paper Importers, Distributors &amp; Retail Buyers
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Buyers usually care less about generic praise and more about repeat-order consistency, export documents, carton marks, OEM printing, and predictable delivery.
            </p>
          </div>
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-slate-50 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-slate-50 to-transparent" />
            <div className="feedback-carousel-track flex w-max gap-5">
              {[...testimonials, ...testimonials].map(({ name, country, countryCode, role, text, channel, time }, index) => {
              const isWeChat = channel === "WeChat";

              return (
                <article key={`${name}-${index}`} className="w-[320px] flex-shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm sm:w-[360px]">
                  <div className={`px-4 py-3 text-white ${isWeChat ? "bg-[#16A34A]" : "bg-[#075E54]"}`}>
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white/18 text-sm font-semibold">
                          {name.charAt(0)}
                        </div>
                        <div className="min-w-0">
                          <div className="truncate text-sm font-semibold">{name}</div>
                          <div className="truncate text-[11px] text-white/75">{role}</div>
                        </div>
                      </div>
                      <span className="rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold">{channel}</span>
                    </div>
                  </div>

                  <div className="bg-[#E7F0EA] p-4">
                    <div className="mb-3 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                      <span className="inline-flex items-center gap-1.5">
                        <CountryFlag code={countryCode} label={country} className="w-4" />
                        {country}
                      </span>
                      <span>{time}</span>
                    </div>

                    <div className="space-y-3">
                      <div className="max-w-[92%] rounded-lg rounded-tl-sm bg-white px-4 py-3 text-sm leading-relaxed text-slate-800 shadow-sm">
                        {text}
                        <div className="mt-2 text-right text-[10px] font-medium text-slate-500">{time}</div>
                      </div>
                      <div className={`ml-auto max-w-[82%] rounded-lg rounded-tr-sm px-4 py-3 text-sm font-medium leading-relaxed shadow-sm ${isWeChat ? "bg-[#95EC69] text-slate-900" : "bg-[#DCF8C6] text-slate-900"}`}>
                        Thanks. We will keep the same specs and packing plan for your repeat order.
                        <div className="mt-2 text-right text-[10px] font-medium text-slate-500">Delivered</div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
            </div>
          </div>
        </div>
      </section>

      {/* ⑧b CONTAINER LOADING —— 出口物流 */}
      <section className="py-20 bg-brand-navy-alt text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-amber-300 text-sm font-semibold uppercase tracking-[0.18em] mb-4">Logistics</p>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] mb-7 leading-tight text-balance">
                Container Loading<br />
                <span className="text-amber-300">Available</span>
              </h2>

              <div className="space-y-4 mb-8">
                {[
                  { icon: Ship,        text: "20ft & 40ft container loading" },
                  { icon: Zap,         text: "Fast delivery within 15-25 days" },
                  { icon: Package,     text: `FCL ready in ${FACTORY.fclLoadingDays} business days` },
                  { icon: CheckCircle, text: `Export experience to ${FACTORY.countriesServed} countries worldwide` },
                  { icon: CheckCircle, text: "Full export docs: CO, B/L, invoice, packing list" },
                  { icon: CheckCircle, text: "FOB Shenzhen / CIF destination port pricing" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="w-8 h-8 border border-white/12 rounded-md flex items-center justify-center flex-shrink-0 bg-white/5">
                      <Icon className="w-4 h-4 text-amber-300" />
                    </div>
                    <span className="text-slate-200 text-sm font-medium">{text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-7 py-3 rounded-md transition-colors duration-200"
                >
                  <MessageSquare className="w-5 h-5" />
                  Get Container Quote
                </Link>
                <a
                  href={waContainer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-white/35 text-white font-semibold px-7 py-3 rounded-md transition-colors duration-200"
                >
                  <Phone className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-md border border-white/10 bg-brand-navy/40">
                <Image
                  src={FACTORY_IMG_FALLBACK}
                  alt="Thermal paper factory loading area"
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-amber-500 text-slate-950 rounded-md p-4 text-center">
                <div className="text-2xl font-semibold">{FACTORY.productionLines}</div>
                <div className="text-xs font-semibold uppercase tracking-[0.14em]">Production Lines</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ⑨ BROWSE FULL CATALOG —— 完整目录入口（次要） */}
      <section className="py-16 bg-white border-t border-slate-100" aria-labelledby="catalog-heading">
        <div className="container">
          <div className="mb-8 text-center">
            <p className="text-brand-navy text-sm font-semibold uppercase tracking-[0.18em] mb-3">Full Catalog</p>
            <h2 id="catalog-heading" className="text-2xl sm:text-3xl font-semibold tracking-[-0.03em] text-slate-900 text-balance">
              Browse Every Size &amp; Product
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "Receipt Paper Rolls", href: "/products/receipt-paper-rolls", desc: "POS, cash register & mobile printer rolls" },
              { label: "Thermal Labels", href: "/products/thermal-labels/custom-printed", desc: "Shipping, barcode & product labels" },
              { label: "Can Labels", href: "/products/can-labels", desc: "Food, beverage & aerosol can labels" },
              { label: "Bottle Labels", href: "/products/detergent-labels", desc: "Detergent, beverage & household bottles" },
              { label: "NCR Forms & Carbonless", href: "/products/ncr-forms", desc: "Invoices, receipts, delivery notes & order books" },
              { label: "BPA-Free Thermal Paper", href: "/products/bpa-free-thermal-paper", desc: "Phenol-free, food-safe receipt paper" },
              { label: "All Products & Sizes", href: "/products", desc: "Full size reference & specifications" },
            ].map(({ label, href, desc }) => (
              <Link
                key={label}
                href={href}
                className="group flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-5 py-4 transition-colors hover:border-brand-navy hover:bg-slate-50"
              >
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-slate-900 group-hover:text-brand-navy">{label}</span>
                  <span className="mt-0.5 block text-xs text-slate-500">{desc}</span>
                </span>
                <ArrowRight className="h-4 w-4 flex-shrink-0 text-slate-400 transition-colors group-hover:text-brand-navy" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ⑨b KEY FACTS —— 人类可读事实块，强化 AI/LLM 抽取，镜像 llms.txt */}
      <section className="py-14 bg-slate-50 border-t border-slate-200" aria-labelledby="key-facts-heading">
        <div className="container">
          <h2 id="key-facts-heading" className="text-2xl sm:text-3xl font-semibold tracking-[-0.03em] text-slate-900 mb-3">
            Key Facts About {SITE.name}
          </h2>
          <p className="text-slate-600 max-w-3xl mb-8 leading-relaxed">
            {SITE.name} (legal name Xi&apos;an Zhi Xin Paper Co., Ltd.) is a factory-direct
            manufacturer of thermal paper rolls, direct thermal &amp; shipping labels, can labels,
            and detergent labels, founded in {SITE.founded} in Xi&apos;an, Shaanxi, China. It supplies
            wholesale and OEM/private-label buyers in {FACTORY.countriesServed} countries with
            ISO 9001:2015, FSC, and BPA-free certified products at factory pricing.
          </p>
          <dl className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-5">
            {[
              { term: "Founded", value: SITE.founded },
              { term: "Factory size", value: FACTORY.area },
              { term: "Annual output", value: `${FACTORY.annualOutput} rolls/yr` },
              { term: "Countries served", value: `${FACTORY.countriesServed}` },
              { term: "OEM clients", value: FACTORY.oemClients },
              { term: "FCL lead time", value: `${FACTORY.fclLoadingDays} days` },
            ].map(({ term, value }) => (
              <div key={term}>
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">{term}</dt>
                <dd className="mt-1 text-lg font-semibold text-slate-900">{value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm text-slate-500">
            Certifications: ISO 9001:2015, FSC, BPA-Free, RoHS, REACH, CE · Export terms: FOB, CIF, DDP ·{" "}
            <Link href="/about" className="font-medium text-brand-navy hover:underline">
              More about the factory
            </Link>
          </p>
        </div>
      </section>

      {/* ⑩ FINAL CTA —— 询盘 */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center border border-slate-200 bg-white rounded-lg px-5 py-10 sm:px-8 sm:py-12">
            <p className="text-brand-navy text-sm font-semibold uppercase tracking-[0.18em] mb-3">Next Step</p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-slate-900 mb-4 text-balance">
              Get Your Quote Within 24 Hours
            </h2>
            <p className="text-slate-600 text-base mb-10 leading-relaxed">
              Tell us your product, required sizes, quantities, and destination port.<br />
              We&apos;ll reply with competitive pricing within 24 hours.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 bg-brand-navy-alt hover:bg-brand-navy-hover text-white font-semibold px-8 py-3.5 rounded-md text-base transition-colors duration-200"
              >
                <MessageSquare className="w-5 h-5" />
                Send Inquiry
              </Link>
              <a
                href={waContainer}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 border border-slate-300 hover:border-brand-navy text-slate-700 hover:text-brand-navy font-semibold px-8 py-3.5 rounded-md text-base transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
                WhatsApp
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600 font-medium">
              {["No commitment required", "Free samples available", "NDA on request"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-amber-500" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}
