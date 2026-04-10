import type { Metadata } from "next";
import Link from "next/link";
import { getSlotImages } from "@/lib/imageSlotUtils";
import Layout from "@/components/layout/Layout";
import { SITE, FACTORY } from "@/config/siteData";
import { mainNav, type NavDropdown } from "@/config/navigation";
import { MessageSquare, Phone, Package, CheckCircle, ArrowRight,
  Ship, Zap, Tag, ChevronRight, Star, Globe, Users, Award, Factory as FactoryIcon, Printer,
} from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Thermal Paper Rolls Supplier for Bulk Orders",
  description:
    "Factory direct thermal paper rolls for bulk orders. 57×40, 57×50, 80×80, 79×80mm in stock. OEM packaging, fast container loading, 15–25 days delivery.",
  keywords:
    "thermal paper rolls supplier, bulk thermal paper, thermal paper wholesale, 80x80 thermal paper, 57x50 thermal paper, OEM thermal paper, thermal paper factory",
  alternates: { canonical: SITE.domain },
};

const FACTORY_IMG_FALLBACK =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/oem-factory-EHdu8eZwwzSo5DxSRyzQdF.webp";
const PRODUCT_ROLLS_FALLBACK = "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&q=80";

const testimonials = [
  { name: "Ahmed Al-Rashid", country: "🇦🇪 UAE", role: "POS Distributor", text: "Best quality thermal rolls we've sourced from China. Consistent roll length, clean print. Our customers love it.", rating: 5 },
  { name: "Chukwuemeka Obi", country: "🇳🇬 Nigeria", role: "Wholesale Trader", text: "Fast container loading and all export documents ready. Made our import process very smooth.", rating: 5 },
  { name: "Somchai Wongkamol", country: "🇹🇭 Thailand", role: "Retail Chain Buyer", text: "OEM packaging with our brand logo. Exactly what we needed. Will order again.", rating: 5 },
];

// ── 从导航配置中取出 Products 的 sizeGroups ──
const productsNav = mainNav.find(
  (item): item is NavDropdown => "items" in item && item.label === "Products"
)!;
const sizeGroups = productsNav.sizeGroups ?? [];

// badge 颜色映射（与导航保持一致）
const BADGE_COLORS: Record<string, string> = {
  amber:  "bg-amber-100 text-amber-700 border-amber-200",
  blue:   "bg-blue-100 text-blue-700 border-blue-200",
  green:  "bg-green-100 text-green-700 border-green-200",
  purple: "bg-purple-100 text-purple-700 border-purple-200",
};

const popularSizes = [
  {
    size: "57 × 40 mm",
    label: "Small POS / Mobile Printer",
    badge: "High Demand",
    badgeColor: "bg-blue-600",
    href: "/products/thermal-rolls/57x40mm",
    desc: "Most popular for handheld POS & mobile payment terminals.",
  },
  {
    size: "57 × 50 mm",
    label: "Standard POS Receipt",
    badge: "Fast Moving",
    badgeColor: "bg-green-600",
    href: "/products/thermal-rolls/57x50mm",
    desc: "Standard size for countertop POS in supermarkets & restaurants.",
  },
  {
    size: "80 × 80 mm",
    label: "Restaurant / Retail POS",
    badge: "Best Seller",
    badgeColor: "bg-amber-500",
    href: "/products/thermal-rolls/80x80mm",
    desc: "#1 best-selling size for full-size POS printers worldwide.",
  },
  {
    size: "79 × 80 mm",
    label: "ATM / Kiosk Printer",
    badge: "Steady Demand",
    badgeColor: "bg-purple-600",
    href: "/products/thermal-rolls/80x80mm",
    desc: "Precision-cut for ATM machines and self-service kiosks.",
  },
];

const whyUs = [
  {
    icon: Tag,
    title: "Factory Direct Price",
    desc: "No middlemen. Buy direct from our factory and save 15–30% vs. trading companies.",
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


const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.zhixinpaper.com"
    }
  ]
};
export default async function HomePage() {
  // 从数据库读取绑定的图片，未绑定时使用 fallback
  const imgs = await getSlotImages([
    { slot: "home:hero", fallback: FACTORY_IMG_FALLBACK },
    { slot: "home:product-rolls", fallback: PRODUCT_ROLLS_FALLBACK },
  ]);
  const FACTORY_IMG = imgs["home:hero"];
  const PRODUCT_ROLLS_IMG = imgs["home:product-rolls"];
  const waBase = `${SITE.whatsappUrl}?text=`;
  const waGeneral = `${waBase}${encodeURIComponent(
    "Hello, I need quotation for thermal paper rolls. Please send me price and MOQ."
  )}`;
  const waContainer = `${waBase}${encodeURIComponent(
    "Hello, I need quotation for thermal paper rolls.\nQuantity: __ container\nDestination: __"
  )}`;

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ① HERO */}
      <PageHero
        bgImage={FACTORY_IMG}
        overlayDir="left"
        overlayOpacity={50}
        minHeight="min-h-[580px]"
        trustBadges={["ISO 9001 Certified", "BPA-Free", "FCL Ready 3–5 Days", "OEM Available"]}
        title={
          <>
            Thermal Paper Rolls<br />
            <span className="text-amber-400">Supplier for Bulk Orders</span>
          </>
        }
        subtitle={`Factory Price · Fast Delivery · Stable Quality — Direct from our ${FACTORY.area} facility in Xi'an, China.`}
        ctas={[
          { label: "Get Quick Quote", href: "/contact", variant: "primary", icon: <MessageSquare className="w-4 h-4" /> },
          { label: "WhatsApp Us", href: waGeneral, variant: "whatsapp", icon: <Phone className="w-4 h-4" />, external: true },
        ]}
        stats={[
          { value: "MOQ 1 Carton", label: "Low Minimum Order" },
          { value: "Sample 3–5 Days", label: "Fast Sample Delivery" },
          { value: "FCL 3–5 Days", label: "Container Loading" },
          { value: "24h Reply", label: "Quote Response" },
        ]}
        rightSlot={
          <div className="relative w-full max-w-md">
            {/* Main product showcase card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-amber-400 uppercase tracking-wider">Best Sellers</span>
                <span className="text-xs bg-green-500/20 text-green-300 border border-green-500/30 px-2.5 py-1 rounded-full">In Stock</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { size: "80 × 80 mm", use: "Restaurant POS", badge: "#1 Best Seller", color: "amber" },
                  { size: "57 × 50 mm", use: "Standard POS", badge: "High Demand", color: "blue" },
                  { size: "57 × 40 mm", use: "Mobile POS", badge: "Fast Moving", color: "green" },
                  { size: "79 × 80 mm", use: "ATM / Kiosk", badge: "Steady", color: "purple" },
                ].map(({ size, use, badge, color }) => (
                  <div key={size} className="bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl p-3 transition-colors cursor-pointer">
                    <div className={`text-xs font-bold mb-1 ${
                      color === "amber" ? "text-amber-400" :
                      color === "blue" ? "text-blue-300" :
                      color === "green" ? "text-green-300" : "text-purple-300"
                    }`}>{badge}</div>
                    <div className="text-white font-extrabold text-sm">{size}</div>
                    <div className="text-slate-400 text-xs mt-0.5">{use}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400">OEM packaging available</span>
                <Link href="/contact" className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1">
                  Get Price <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
            {/* Floating trust badge */}
            <div className="absolute -bottom-4 -left-4 bg-green-500 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-lg flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              ISO 9001 · BPA-Free · FSC
            </div>
            {/* Floating stat */}
            <div className="absolute -top-4 -right-4 bg-amber-500 text-slate-900 text-xs font-extrabold px-4 py-2 rounded-xl shadow-lg">
              {FACTORY.countriesServed} Countries Served
            </div>
          </div>
        }
      />

      {/* ② POPULAR SIZES — 4 热卖规格卡片 */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-3">Most Ordered</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Popular Sizes</h2>
            <p className="text-slate-500 mt-3 text-base max-w-lg mx-auto">
              All sizes in stock. Ready to ship. Get pricing in 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularSizes.map(({ size, label, badge, badgeColor, href, desc }) => (
              <div
                key={size}
                className="group border-2 border-slate-100 hover:border-amber-400 rounded-2xl overflow-hidden transition-all duration-200 hover:shadow-xl flex flex-col bg-white"
              >
                {/* Product image */}
                <div className="relative h-40 bg-slate-100 overflow-hidden">
                  <Image
                    src={PRODUCT_ROLLS_IMG}
                    alt={`${size} thermal paper rolls`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    width={400}
                    height={160}
                   sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  <span className={`absolute top-3 right-3 text-xs font-bold text-white px-3 py-1 rounded-full shadow-md ${badgeColor}`}>{badge}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 bg-slate-100 group-hover:bg-amber-50 rounded-xl flex items-center justify-center transition-colors">
                    <Package className="w-5 h-5 text-slate-500 group-hover:text-amber-600 transition-colors" />
                  </div>
                </div>

                <h3 className="text-2xl font-extrabold text-slate-900 mb-1">{size}</h3>
                <p className="text-xs text-slate-500 font-medium mb-3">{label}</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-1">{desc}</p>

                <div className="space-y-2 mb-5">
                  {["Available for bulk orders", "OEM packaging supported", "Container loading available"].map((t) => (
                    <div key={t} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                      {t}
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Link
                    href={href}
                    className="flex-1 text-center bg-[#0A1F44] hover:bg-blue-700 text-white text-sm font-bold py-2.5 rounded-xl transition-colors"
                  >
                    Get Price
                  </Link>
                  <a
                    href={`${waBase}${encodeURIComponent(`Hello, I need quotation for ${size} thermal paper rolls. Please send me price and MOQ.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#25D366] hover:bg-[#20b858] text-white rounded-xl flex items-center justify-center transition-colors flex-shrink-0"
                    aria-label={`WhatsApp inquiry for ${size} thermal paper rolls`}
                    title="WhatsApp"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="sr-only">WhatsApp</span>
                  </a>
                </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors"
            >
              View all sizes &amp; specifications <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ② FULL SIZE REFERENCE — 三列规格速查（来自导航菜单数据） */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="container">
          <div className="text-center mb-10">
            <p className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-3">Full Range</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">All Available Sizes</h2>
            <p className="text-slate-500 mt-2 text-sm max-w-lg mx-auto">
              Click any size to view specs, pricing, and place an order. Custom sizes available on request.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sizeGroups.map((group) => (
              <div
                key={group.groupLabel}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Group header */}
                <div className="bg-[#0A1F44] px-5 py-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Package className="w-4 h-4 text-amber-400" />
                  </div>
                  <h3 className="text-white font-extrabold text-sm">{group.groupLabel}</h3>
                </div>

                {/* Size rows */}
                <div className="divide-y divide-slate-100">
                  {group.items.map((sz) => {
                    const badgeClass = BADGE_COLORS[sz.badgeColor ?? "amber"] ?? BADGE_COLORS.amber;
                    const waMsg = encodeURIComponent(
                      `Hello, I need quotation for ${sz.label}.\nQuantity: __ cartons / container\nDestination: __`
                    );
                    return (
                      <div
                        key={sz.label}
                        className="flex items-center justify-between px-5 py-3 hover:bg-amber-50 transition-colors group"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-amber-500 transition-colors flex-shrink-0" />
                          <Link
                            href={sz.href}
                            className="text-sm font-semibold text-slate-800 group-hover:text-amber-700 transition-colors truncate"
                          >
                            {sz.label}
                          </Link>
                          {sz.badge && (
                            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border whitespace-nowrap flex-shrink-0 ${badgeClass}`}>
                              {sz.badge}
                            </span>
                          )}
                        </div>

                        {/* Quick actions */}
                        <div className="flex items-center gap-1.5 ml-2 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Link
                            href={sz.href}
                            className="text-[11px] font-bold bg-[#0A1F44] text-white px-2.5 py-1 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
                          >
                            Details
                          </Link>
                          <a
                            href={`${SITE.whatsappUrl}?text=${waMsg}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-6 h-6 bg-[#25D366] hover:bg-[#20b858] text-white rounded-md flex items-center justify-center transition-colors"
                            aria-label={`WhatsApp inquiry for ${sz.label}`}
                            title="WhatsApp"
                          >
                            <Phone className="w-3 h-3" />
                            <span className="sr-only">WhatsApp</span>
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Group footer */}
                <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Need a custom size?</span>
                  <Link
                    href="/oem/custom-printing"
                    className="text-xs font-semibold text-amber-600 hover:text-amber-800 transition-colors flex items-center gap-1"
                  >
                    OEM Custom <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA row */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0A1F44] hover:bg-blue-800 text-white font-extrabold px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              Request Full Price List
            </Link>
            <a
              href={waGeneral}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white font-extrabold px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-sm"
            >
              <Phone className="w-4 h-4" />
              WhatsApp for Quick Quote
            </a>
          </div>
        </div>
      </section>

      {/* ② SOCIAL PROOF — Factory numbers */}
      <section className="py-14 bg-[#0A1F44] text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: FactoryIcon, value: FACTORY.area, label: "Factory Area", sub: "Modern facility in Xi'an" },
              { icon: Users, value: FACTORY.oemClients, label: "OEM Clients", sub: "Worldwide distributors" },
              { icon: Globe, value: `${FACTORY.countriesServed}+`, label: "Countries Served", sub: "Global export network" },
              { icon: Award, value: "ISO 9001", label: "Certified", sub: "Quality management" },
            ].map(({ icon: Icon, value, label, sub }) => (
              <div key={label} className="group">
                <div className="w-12 h-12 bg-amber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-amber-500/30 transition-colors">
                  <Icon className="w-6 h-6 text-amber-400" />
                </div>
                <div className="text-3xl font-extrabold text-amber-400 mb-1">{value}</div>
                <div className="text-white font-bold text-sm mb-1">{label}</div>
                <div className="text-slate-400 text-xs">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ③ WHY BUYERS CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-3">Our Advantages</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Why Buyers Choose Us</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-slate-50 rounded-2xl p-7 border border-slate-100 hover:shadow-lg transition-shadow text-center">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-base mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ③b TESTIMONIALS */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="container">
          <div className="text-center mb-10">
            <p className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-3">Customer Reviews</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">What Buyers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, country, role, text, rating }) => (
              <div key={name} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-5 italic">&ldquo;{text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0A1F44] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{name}</div>
                    <div className="text-xs text-slate-400">{role} · {country}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ④ CONTAINER LOADING */}
      <section className="py-20 bg-[#0A1F44] text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-amber-400 text-sm font-bold uppercase tracking-widest mb-4">Logistics</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-7 leading-tight">
                Container Loading<br />
                <span className="text-amber-400">Available</span>
              </h2>

              <div className="space-y-4 mb-8">
                {[
                  { icon: Ship,        text: "20ft & 40ft container loading" },
                  { icon: Zap,         text: "Fast delivery within 15–25 days" },
                  { icon: Package,     text: `FCL ready in ${FACTORY.fclLoadingDays} business days` },
                  { icon: CheckCircle, text: `Export experience to ${FACTORY.countriesServed} countries worldwide` },
                  { icon: CheckCircle, text: "Full export docs: CO, B/L, invoice, packing list" },
                  { icon: CheckCircle, text: "FOB Shenzhen / CIF destination port pricing" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-amber-400" />
                    </div>
                    <span className="text-slate-200 text-sm font-medium">{text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-extrabold px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-5 h-5" />
                  Get Container Quote
                </Link>
                <a
                  href={waContainer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white font-extrabold px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Phone className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="relative">
              <Image
                src={FACTORY_IMG}
                alt="Container loading thermal paper rolls"
                className="w-full rounded-2xl shadow-2xl"
                width={600}
                height={400}
               sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              <div className="absolute -bottom-5 -right-5 bg-amber-500 text-slate-900 rounded-xl shadow-xl p-5 text-center">
                <div className="text-2xl font-extrabold">{FACTORY.productionLines}</div>
                <div className="text-xs font-bold">Production Lines</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ④b CUSTOM PRINTING HIGHLIGHT */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-amber-600 text-sm font-bold uppercase tracking-widest mb-3">OEM &amp; Custom Printing</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-5 leading-tight">
                Custom Printed Thermal Rolls<br />
                <span className="text-amber-500">with Your Logo &amp; Brand</span>
              </h2>
              <p className="text-slate-600 text-base mb-6 leading-relaxed">
                Turn every receipt into a brand touchpoint. Full-color flexographic printing with Pantone matching, QR codes, Arabic/English bilingual layouts, and TRA / ZATCA / FIRS compliance printing for Africa, Middle East, and Southeast Asia.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  "Logo &amp; brand colors (Pantone)",
                  "QR codes &amp; loyalty barcodes",
                  "Arabic + English bilingual",
                  "TRA / ZATCA / FIRS compliant",
                  "MOQ 1,000 rolls",
                  "Free design proof in 24h",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products/thermal-paper-rolls/custom-printed"
                  className="inline-flex items-center gap-2 bg-[#0A1F44] hover:bg-blue-900 text-white font-extrabold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-sm"
                >
                  <Printer className="w-4 h-4" />
                  View Custom Printed Rolls
                </Link>
                <Link
                  href="/oem/custom-printing"
                  className="inline-flex items-center gap-2 border-2 border-amber-500 text-amber-600 hover:bg-amber-50 font-extrabold px-6 py-3 rounded-xl transition-all duration-200 text-sm"
                >
                  OEM Printing Specs &amp; MOQ
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { flag: "🇹🇿", country: "Tanzania",     compliance: "TRA Compliant",   href: "/markets/africa/tanzania" },
                { flag: "🇸🇦", country: "Saudi Arabia",  compliance: "ZATCA Compliant", href: "/markets/middle-east/saudi-arabia" },
                { flag: "🇳🇬", country: "Nigeria",       compliance: "FIRS Compliant",  href: "/markets/africa/nigeria" },
                { flag: "🇦🇪", country: "UAE",           compliance: "VAT Compliant",   href: "/markets/middle-east/uae" },
                { flag: "🇹🇭", country: "Thailand",      compliance: "PromptPay QR",    href: "/markets/southeast-asia/thailand" },
                { flag: "🇮🇩", country: "Indonesia",     compliance: "QRIS Compliant",  href: "/markets/southeast-asia/indonesia" },
              ].map(({ flag, country, compliance, href }) => (
                <Link
                  key={country}
                  href={href}
                  className="bg-slate-50 border border-slate-200 hover:border-amber-300 hover:bg-amber-50 rounded-xl p-4 transition-all duration-200 group"
                >
                  <div className="text-2xl mb-2">{flag}</div>
                  <div className="font-bold text-slate-900 text-sm group-hover:text-amber-700">{country}</div>
                  <div className="text-xs text-slate-500 mt-1">{compliance}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ⑤ FINAL CTA */}
      <section className="py-20 bg-amber-500">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Get Your Quote Within 24 Hours
            </h2>
            <p className="text-slate-800 text-base mb-10 leading-relaxed">
              Tell us your required sizes, quantities, and destination port.<br />
              We&apos;ll reply with competitive pricing within 24 hours.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 bg-[#0A1F44] hover:bg-blue-900 text-white font-extrabold px-9 py-4 rounded-xl text-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl"
              >
                <MessageSquare className="w-5 h-5" />
                Send Inquiry
              </Link>
              <a
                href={waContainer}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20b858] text-white font-extrabold px-9 py-4 rounded-xl text-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl"
              >
                <Phone className="w-5 h-5" />
                WhatsApp
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-700 font-medium">
              {["No commitment required", "Free samples available", "NDA on request"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-slate-800" />
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
