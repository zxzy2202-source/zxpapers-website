import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getSlotImages } from "@/lib/imageSlotUtils";
import Layout from "@/components/layout/Layout";
import { SITE, FACTORY } from "@/config/siteData";
import { mainNav, type NavDropdown } from "@/config/navigation";
import { MessageSquare, Phone, Package, CheckCircle, ArrowRight,
  Ship, Zap, Tag, Globe, Users, Award, Factory as FactoryIcon, Printer, Layers, Scissors, ClipboardCheck,
} from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { CountryFlag, type CountryCode } from "@/components/ui/country-flag";

export const metadata: Metadata = {
  title: "Thermal Paper Rolls Supplier for Bulk Orders",
  description:
    "Factory direct thermal paper rolls for bulk orders. 57×40, 57×50, 80×80, 79×80mm in stock. OEM packaging, fast container loading, 15–25 days delivery.",
  keywords:
    "thermal paper rolls supplier, bulk thermal paper, thermal paper wholesale, 80x80 thermal paper, 57x50 thermal paper, OEM thermal paper, thermal paper factory",
  alternates: { canonical: SITE.domain },
  openGraph: {
    type: "website",
    url: SITE.domain,
    siteName: SITE.name,
    title: "Thermal Paper Rolls Supplier for Bulk Orders",
    description:
      "Factory direct thermal paper rolls for bulk orders. 57×40, 57×50, 80×80, 79×80mm in stock. OEM packaging, fast container loading, 15–25 days delivery.",
    images: [
      {
        url: `${SITE.domain}/og-default.png`,
        width: 1200,
        height: 630,
        alt: "ZhixinPaper thermal paper rolls factory and bulk supply",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thermal Paper Rolls Supplier for Bulk Orders",
    description:
      "Factory direct thermal paper rolls for bulk orders. 57×40, 57×50, 80×80, 79×80mm in stock. OEM packaging, fast container loading, 15–25 days delivery.",
    images: [`${SITE.domain}/og-default.png`],
  },
};

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

// ── 从导航配置中取出 Products 的 sizeGroups ──
const productsNav = mainNav.find(
  (item): item is NavDropdown => "items" in item && item.label === "Products"
)!;
const sizeGroups = productsNav.sizeGroups ?? [];

// badge 颜色映射（与导航保持一致）
const BADGE_COLORS: Record<string, string> = {
  amber:  "bg-amber-100 text-amber-700 border-amber-200",
  blue:   "bg-slate-100 text-slate-700 border-slate-200",
  green:  "bg-slate-100 text-slate-700 border-slate-200",
  purple: "bg-slate-100 text-slate-700 border-slate-200",
};

const popularSizes = [
  {
    size: "POS Receipt Rolls",
    label: "Small POS / Mobile Printer",
    badge: "High Demand",
    badgeTone: "blue",
    href: "/products/thermal-rolls/57x40mm",
    desc: "Most popular for handheld POS & mobile payment terminals.",
  },
  {
    size: "Portable/Mobile Printer Rolls",
    label: "Standard POS Receipt",
    badge: "Fast Moving",
    badgeTone: "green",
    href: "/products/thermal-rolls/57x50mm",
    desc: "Standard size for countertop POS in supermarkets & restaurants.",
  },
  {
    size: "Phenol Free Thermal Paper",
    label: "Restaurant / Retail POS",
    badge: "Best Seller",
    badgeTone: "amber",
    href: "/products/thermal-rolls/80x80mm",
    desc: "#1 best-selling size for full-size POS printers worldwide.",
  },
  {
    size: "Custom Printed Rolls",
    label: "ATM / Kiosk Printer",
    badge: "Steady Demand",
    badgeTone: "purple",
    href: "/products/thermal-rolls/80x80mm",
    desc: "Precision-cut for ATM machines and self-service kiosks.",
  },
  {
    size: "ATM & Banking Rolls",
    label: "Banking / Self-Service",
    badge: "Bank Grade",
    badgeTone: "blue",
    href: "/products/thermal-rolls/80x80mm",
    desc: "Reliable thermal rolls for ATM machines, bank counters, payment terminals, and self-service kiosks.",
  },
  {
    size: "Lottery & Gaming Rolls",
    label: "Ticket / Gaming Printers",
    badge: "Ticket Stock",
    badgeTone: "green",
    href: "/products/thermal-rolls/57x40mm",
    desc: "Thermal paper for lottery terminals, gaming receipts, ticket printers, and high-frequency print use.",
  },
  {
    size: "Colored Thermal Paper",
    label: "Custom Color Supply",
    badge: "Color Options",
    badgeTone: "amber",
    href: "/products/custom-printed-rolls",
    desc: "Colored thermal paper rolls for branded receipts, queue tickets, labels, and promotional applications.",
  },
  {
    size: "CORELESS PAPER ROLL",
    label: "Eco / High Capacity",
    badge: "Coreless",
    badgeTone: "purple",
    href: "/products/blank-thermal-rolls",
    desc: "Coreless rolls reduce waste and maximize paper length for compact printers and frequent-use terminals.",
  },
  {
    size: "Multi-Ply Carbonless Rolls",
    label: "Duplicate / Triplicate Copies",
    badge: "Carbonless",
    badgeTone: "blue",
    href: "/products/blank-thermal-rolls",
    desc: "Multi-ply rolls for delivery notes, order records, receipts, and applications needing duplicate copies.",
  },
  {
    size: "Blank Thermal Labels",
    label: "Shipping / Barcode Labels",
    badge: "Label Stock",
    badgeTone: "blue",
    href: "/products/thermal-labels/blank",
    desc: "Direct thermal labels for shipping, logistics, barcode printing, and warehouse operations.",
  },
  {
    size: "4x6 Shipping Labels",
    label: "Logistics / Courier Labels",
    badge: "Shipping",
    badgeTone: "green",
    href: "/products/thermal-labels/4x6in",
    desc: "Direct thermal 4x6 labels for parcel shipping, warehouse picking, carton marks, and e-commerce fulfillment.",
  },
  {
    size: "Barcode Thermal Labels",
    label: "Inventory / SKU Labels",
    badge: "Barcode",
    badgeTone: "amber",
    href: "/products/thermal-labels/2x1in",
    desc: "Compact thermal labels for barcode printing, shelf tags, inventory labels, and product identification.",
  },
  {
    size: "Custom Printed Labels",
    label: "Private Label Packaging",
    badge: "OEM Ready",
    badgeTone: "green",
    href: "/products/thermal-labels/custom-printed",
    desc: "Custom logo labels with stable adhesive, clean printing, and export-ready packaging.",
  },
  {
    size: "4x3 Thermal Labels",
    label: "Warehouse / Carton Labels",
    badge: "Inventory",
    badgeTone: "purple",
    href: "/products/thermal-labels/4x3in",
    desc: "Larger direct thermal labels for warehouse bins, carton identification, FBA prep, and product shelf labeling.",
  },
  {
    size: "2x4 Thermal Labels",
    label: "Shipping / Product Labels",
    badge: "Fast Moving",
    badgeTone: "blue",
    href: "/products/thermal-labels/2x4in",
    desc: "Compact logistics and product labels for parcel sorting, SKU identification, barcode printing, and retail workflows.",
  },
  {
    size: "Blank Thermal Rolls",
    label: "Bulk Wholesale Supply",
    badge: "Bulk Supply",
    badgeTone: "amber",
    href: "/products/thermal-paper-rolls/blank",
    desc: "Factory-direct blank rolls for distributors, retail chains, restaurants, kiosks, and payment terminals.",
  },
  {
    size: "OEM Printed Receipts",
    label: "Brand Promotion Rolls",
    badge: "Custom Print",
    badgeTone: "purple",
    href: "/products/thermal-paper-rolls/custom-printed",
    desc: "Receipt rolls printed with brand graphics, QR codes, promotions, and bilingual layouts.",
  },
];

const homepageProductGroups = [
  {
    title: "Thermal Paper Rolls",
    description: "Fast-moving receipt roll products for POS, mobile printers, restaurants, retail chains, banking, kiosks, and OEM receipt programs.",
    items: [
      popularSizes.find((item) => item.size === "POS Receipt Rolls")!,
      popularSizes.find((item) => item.size === "Portable/Mobile Printer Rolls")!,
      popularSizes.find((item) => item.size === "Phenol Free Thermal Paper")!,
      popularSizes.find((item) => item.size === "Custom Printed Rolls")!,
      popularSizes.find((item) => item.size === "ATM & Banking Rolls")!,
      popularSizes.find((item) => item.size === "Blank Thermal Rolls")!,
    ],
  },
  {
    title: "Thermal Labels",
    description: "Direct thermal label products for shipping, barcode, inventory, warehouse, product identification, and private-label packaging buyers.",
    items: [
      popularSizes.find((item) => item.size === "Blank Thermal Labels")!,
      popularSizes.find((item) => item.size === "4x6 Shipping Labels")!,
      popularSizes.find((item) => item.size === "Barcode Thermal Labels")!,
      popularSizes.find((item) => item.size === "Custom Printed Labels")!,
      popularSizes.find((item) => item.size === "4x3 Thermal Labels")!,
      popularSizes.find((item) => item.size === "2x4 Thermal Labels")!,
    ],
  },
];

const COMMON_PRODUCT_SPECS: Record<string, string[]> = {
  "POS Receipt Rolls": [
    "Standard Sizes: 80x80mm, 80x100mm, 80x150mm, 80x200mm, 80x250mm",
    "Core Options: 12mm, 18mm, 25mm (plastic or paper)",
    "Advanced Features: Precision sensemarks, security watermarks, UV printing",
  ],
  "Portable/Mobile Printer Rolls": [
    "57mm x 30mm - Pocket Printers",
    "57mm x 40mm - Mobile POS Terminals",
    "57mm x 50mm - Delivery & Handheld Devices",
  ],
  "Phenol Free Thermal Paper": [
    "80mm x 80mm - BPA/BPS-Free POS",
    "57mm x 50mm - Food & Healthcare Receipts",
    "110mm x 80mm - Kiosk & Banking Use",
  ],
  "Custom Printed Rolls": [
    "80mm x 80mm - Branded Retail Receipts",
    "57mm x 50mm - Promo & QR Receipts",
    "Custom Width - OEM Brand Layouts",
  ],
  "ATM & Banking Rolls": [
    "Standard Sizes: 80x80mm, 80x100mm, 80x150mm, 80x200mm, 80x250mm",
    "Core Options: 12mm, 18mm, 25mm (plastic or paper)",
  ],
  "Lottery & Gaming Rolls": [
    "57mm x 40mm - Lottery Terminals",
    "57mm x 50mm - Gaming Receipts",
    "80mm x 80mm - Ticket & Kiosk Printers",
  ],
  "Colored Thermal Paper": [
    "57mm x 40mm - Queue Tickets",
    "57mm x 50mm - Color-Coded Receipts",
    "80mm x 80mm - Branded POS Receipts",
  ],
  "CORELESS PAPER ROLL": [
    "57mm x 30mm - Compact Coreless Printers",
    "57mm x 40mm - Mobile Payment Terminals",
    "80mm x 80mm - High-Capacity Coreless POS",
  ],
  "Multi-Ply Carbonless Rolls": [
    "57mm x 40mm - Duplicate Receipts",
    "76mm x 70mm - Order & Delivery Notes",
    "80mm x 80mm - Multi-Copy POS Records",
  ],
  "Blank Thermal Labels": [
    "2 x 1 in - Barcode Labels",
    "4 x 3 in - Product & Shelf Labels",
    "4 x 6 in - Shipping Labels",
  ],
  "4x6 Shipping Labels": [
    "4 x 6 in - Courier & Parcel Labels",
    "Direct Thermal - No Ribbon Required",
    "Roll or Fan-Fold Packing Available",
  ],
  "Barcode Thermal Labels": [
    "2 x 1 in - SKU & Barcode Labels",
    "3 x 2 in - Inventory Labels",
    "Custom Adhesive and Core Options",
  ],
  "Custom Printed Labels": [
    "2 x 1 in - Small Brand Labels",
    "3 x 2 in - Product Packaging Labels",
    "4 x 6 in - Logistics & Carton Labels",
  ],
  "4x3 Thermal Labels": [
    "4 x 3 in - Carton & Warehouse Labels",
    "Direct Thermal - Barcode Compatible",
    "Roll Packing with Custom Core Options",
  ],
  "2x4 Thermal Labels": [
    "2 x 4 in - Product & Parcel Labels",
    "Direct Thermal - No Ribbon Required",
    "Custom Adhesive and Perforation Available",
  ],
  "Blank Thermal Rolls": [
    "57mm x 50mm - Standard POS Supply",
    "80mm x 80mm - Restaurant & Retail POS",
    "110mm x 80mm - Kiosk & Banking Printers",
  ],
  "OEM Printed Receipts": [
    "57mm x 50mm - Promotional Receipts",
    "80mm x 80mm - Retail Brand Receipts",
    "Custom Length - Campaign & Loyalty Printing",
  ],
};

const PRODUCT_SHOWCASE_IMAGES: Record<string, string> = {
  "Blank Thermal Labels": THERMAL_LABELS_IMG,
  "4x6 Shipping Labels": THERMAL_LABELS_IMG,
  "Barcode Thermal Labels": THERMAL_LABELS_IMG,
  "Custom Printed Labels": THERMAL_LABELS_IMG,
  "4x3 Thermal Labels": THERMAL_LABELS_IMG,
  "2x4 Thermal Labels": THERMAL_LABELS_IMG,
};

const customerProblems = [
  {
    title: "Receipts Fade Too Fast",
    label: "Print Durability",
    badge: "Quality Risk",
    badgeTone: "blue",
    href: "/contact",
    desc: "Retailers and restaurants complain when receipts become unreadable after storage, heat, or normal handling.",
    solutions: ["Qualified thermal paper grade for clear image density", "BPA/BPS-free and phenol-free options available", "Paper grade matched to required image life"],
  },
  {
    title: "Roll Length Is Not Consistent",
    label: "Specification Control",
    badge: "Short Roll Risk",
    badgeTone: "green",
    href: "/contact",
    desc: "Inconsistent meter length, loose winding, or short rolls create disputes with distributors and end customers.",
    solutions: ["Accurate roll length and roll diameter control", "Tight winding for stable carton packing", "Core size checked before bulk production"],
  },
  {
    title: "Printer Jams and Paper Dust",
    label: "Printer Compatibility",
    badge: "Service Issue",
    badgeTone: "amber",
    href: "/contact",
    desc: "Rough edges, poor slitting, and excessive paper dust can increase printer jams and maintenance complaints.",
    solutions: ["Clean slitting with smooth roll edges", "Low-dust base paper options", "Sample testing by printer type before order"],
  },
  {
    title: "Wrong Size, Core, or Diameter",
    label: "Order Accuracy",
    badge: "Fit Problem",
    badgeTone: "purple",
    href: "/contact",
    desc: "A small mistake in width, core, or outside diameter can make rolls unusable for POS, ATM, kiosk, or mobile printers.",
    solutions: ["Size confirmation before quotation", "12mm, 18mm, and 25mm core options", "Packing labels matched to customer SKU system"],
  },
  {
    title: "OEM Packaging Looks Unprofessional",
    label: "Private Label",
    badge: "Brand Risk",
    badgeTone: "blue",
    href: "/contact",
    desc: "Weak carton design, unclear labels, and inconsistent packaging make it harder for importers to build repeat business.",
    solutions: ["Custom carton, label, shrink wrap, and core printing", "Barcode and SKU label support", "Retail-ready or wholesale packing plans"],
  },
  {
    title: "Shipment or Documents Are Delayed",
    label: "Delivery & Export Support",
    badge: "Delay Risk",
    badgeTone: "green",
    href: "/contact",
    desc: "Late production, unclear loading plans, or missing export documents can delay customs clearance and create stockouts.",
    solutions: ["Production schedule confirmed before deposit", "Container loading plan shared before shipment", "Invoice, packing list, CO, and carton marks supported"],
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

const productionProcess = [
  {
    icon: Layers,
    step: "01",
    title: "Material & Spec Confirmation",
    desc: "Confirm jumbo roll grade, GSM, width, core size, print artwork, packing method, and destination requirements before production.",
  },
  {
    icon: FactoryIcon,
    step: "02",
    title: "Custom Printing",
    desc: "Print logos, QR codes, promotions, carton marks, and bilingual receipt layouts according to customer artwork and brand standards.",
  },
  {
    icon: Scissors,
    step: "03",
    title: "Slitting & Rewinding",
    desc: "Convert jumbo rolls into finished POS rolls and label rolls with controlled width, diameter, core size, and winding tension.",
  },
  {
    icon: ClipboardCheck,
    step: "04",
    title: "Inspection & Packing",
    desc: "Check print registration, roll size, roll length, carton labels, pallet plan, and export packing before shipment.",
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
  // 从数据库读取绑定的图片，未绑定时使用 fallback
  const imgs = await getSlotImages([
    { slot: "home:hero", fallback: FACTORY_IMG_FALLBACK },
  ]);
  const FACTORY_IMG = imgs["home:hero"];
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
        bgImages={[FACTORY_IMG, HERO_SLIDE_2, HERO_SLIDE_3]}
        bgCarouselInterval={4500}
        overlayDir="left"
        overlayOpacity={50}
        minHeight="min-h-[580px]"
        badge={{
          icon: <Award className="w-4 h-4" />,
          text: "Direct Thermal Paper Factory Since 2009",
          color: "amber",
        }}
        eyebrow="Bulk POS Rolls / OEM Packaging / Export Orders"
        trustBadges={["ISO 9001 Certified", "BPA-Free", "FCL Ready 3–5 Days", "OEM Available"]}
        title={
          <>
            Thermal Paper Rolls<br />
            <span className="text-amber-400">
              Supplier for<span className="hidden sm:inline"> Bulk Orders</span>
              <span className="sm:hidden"><br />Bulk Orders</span>
            </span>
          </>
        }
        subtitle={`Factory-direct thermal rolls for distributors, importers, and retail chains. Custom printing, precise slitting, export-ready packing, and fast loading from our ${FACTORY.area} facility in Xi'an, China.`}
        ctas={[
          { label: "Get Quick Quote", href: "/contact", variant: "primary", icon: <MessageSquare className="w-4 h-4" /> },
          { label: "WhatsApp Us", href: waGeneral, variant: "whatsapp", icon: <Phone className="w-4 h-4" />, external: true },
        ]}
        stats={[
          { value: "MOQ 1 Pallet", label: "Low Minimum Order" },
          { value: "Sample 3–5 Days", label: "Fast Sample Delivery" },
          { value: "FCL 3–5 Days", label: "Container Loading" },
          { value: "24h Reply", label: "Quote Response" },
        ]}
        rightSlot={
          <div className="w-full max-w-lg border border-white/12 bg-white/5 rounded-md overflow-hidden">
            <div className="px-6 py-5 border-b border-white/10">
              <div className="flex items-center justify-between gap-4 mb-3">
                <span className="text-[11px] font-semibold text-amber-300 uppercase tracking-[0.2em]">Factory Snapshot</span>
                <span className="text-[11px] text-slate-300 border border-white/10 px-2.5 py-1 rounded-md">OEM Ready</span>
              </div>
              <h3 className="text-[1.75rem] font-semibold tracking-[-0.03em] text-white mb-2">
                Built for repeat wholesale orders.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Custom printing, precise slitting, export-ready packing, and fast loading for distributors serving retail, POS, kiosk, and ATM channels.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-px bg-white/10">
              {[
                { label: "Factory Area", value: FACTORY.area },
                { label: "Daily Output", value: FACTORY.dailyOutput },
                { label: "Production Lines", value: FACTORY.productionLines },
                { label: "Countries Served", value: FACTORY.countriesServed },
              ].map(({ label, value }) => (
                <div key={label} className="bg-[#0c1c36] px-5 py-4">
                  <div className="text-lg font-semibold text-white">{value}</div>
                  <div className="text-[11px] uppercase tracking-[0.14em] text-slate-400 mt-1">{label}</div>
                </div>
              ))}
            </div>
            <div className="px-6 py-5 space-y-3 bg-[#0c1c36]/90">
              <div className="flex items-center justify-between gap-4 text-sm">
                <span className="text-slate-400">Typical quote response</span>
                <span className="font-semibold text-white">{SITE.responseTime}</span>
              </div>
              <div className="flex items-center justify-between gap-4 text-sm">
                <span className="text-slate-400">Low volume entry</span>
                <span className="font-semibold text-white">MOQ 1 pallet</span>
              </div>
              <div className="pt-3 border-t border-white/10">
                <div className="text-[11px] uppercase tracking-[0.16em] text-slate-400 mb-2">Core Fast-Moving Sizes</div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { size: "80 × 80 mm", use: "Restaurant POS" },
                    { size: "57 × 50 mm", use: "Counter POS" },
                    { size: "57 × 40 mm", use: "Mobile POS" },
                    { size: "79 × 80 mm", use: "ATM / Kiosk" },
                  ].map(({ size, use }) => (
                    <div key={size} className="border border-white/10 rounded-md px-3 py-3 bg-white/[0.03]">
                      <div className="text-sm font-semibold text-white">{size}</div>
                      <div className="text-[11px] text-slate-400 mt-1">{use}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        }
      />

      {/* ② POPULAR SIZES — 热敏纸行业产品展示 */}
      <section className="py-20 bg-white" aria-labelledby="popular-products-heading">
        <div className="container">
          <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
            <div>
              <p className="text-[#0F2B5B] text-sm font-semibold uppercase tracking-[0.18em] mb-3">Most Ordered Thermal Paper Products</p>
              <h2 id="popular-products-heading" className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-slate-900">
                Bulk Thermal Paper Rolls, Labels &amp; OEM Receipt Paper
              </h2>
              <p className="text-slate-600 mt-4 text-base max-w-3xl leading-relaxed">
                ZhixinPaper supplies factory-direct POS receipt rolls, mobile printer rolls, BPA/BPS-free thermal paper, and custom printed receipt rolls, with a dedicated thermal label range for shipping, barcode, inventory, warehouse, and private label packaging buyers.
              </p>
            </div>

            <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Quick buying reference</p>
              <dl className="mt-4 grid grid-cols-1 gap-3">
                {[
                  { label: "Order type", value: "Wholesale cartons, mixed-size pallets, FCL containers" },
                  { label: "Common sizes", value: "57x40mm, 57x50mm, 80x80mm, 79x80mm, custom widths" },
                  { label: "Customization", value: "OEM carton, private label, core printing, logo receipts" },
                ].map(({ label, value }) => (
                  <div key={label} className="grid grid-cols-[92px_1fr] gap-3 text-sm">
                    <dt className="font-semibold text-slate-900">{label}</dt>
                    <dd className="text-slate-600">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="mb-8 grid grid-cols-2 gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 sm:grid-cols-3 lg:grid-cols-6">
            {[
              "POS Receipt Rolls",
              "Mobile Printer Rolls",
              "Phenol Free Paper",
              "Custom Printed Rolls",
              "ATM & Banking Rolls",
              "Thermal Labels",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-md bg-white px-3 py-2.5 text-sm font-semibold text-slate-800 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                {item}
              </div>
            ))}
          </div>

          <div className="space-y-12">
            {homepageProductGroups.map(({ title, description, items }) => (
              <div key={title}>
                <div className="mb-5 flex flex-col gap-2 border-b border-slate-200 pb-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-900">{title}</h3>
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">{description}</p>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0F2B5B]">6 Products</span>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map(({ size, label, badge, badgeTone, href, desc }) => {
                    const productImage = PRODUCT_SHOWCASE_IMAGES[size] ?? HERO_SLIDE_3;
                    const productType = title === "Thermal Labels" ? "thermal labels" : "thermal paper rolls";

                    return (
                      <article
                        key={size}
                        className="group overflow-hidden border border-slate-200 rounded-lg bg-white flex flex-col shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#0F2B5B]/40 hover:shadow-lg"
                      >
                        <Link
                          href={href}
                          className="relative block aspect-[4/3] overflow-hidden bg-slate-100"
                          aria-label={`View ${size} specifications`}
                        >
                          <Image
                            src={productImage}
                            alt={`${size} product display for wholesale ${productType} buyers`}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-slate-950/5 to-transparent" />
                          <span className={`absolute right-4 top-4 text-[10px] font-semibold px-2.5 py-1 rounded-full border ${BADGE_COLORS[badgeTone] ?? BADGE_COLORS.amber}`}>
                            {badge}
                          </span>
                          <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-md border border-white/20 bg-white/90 transition-colors group-hover:bg-[#0F2B5B]">
                            <Package className="w-4 h-4 text-[#0F2B5B] transition-colors group-hover:text-white" />
                          </div>
                        </Link>

                        <div className="flex flex-1 flex-col p-5">
                          <h4 className="min-h-[3.25rem] text-[1.35rem] font-semibold tracking-[-0.02em] leading-tight text-slate-900 mb-2">
                            <Link href={href} className="transition-colors group-hover:text-[#0F2B5B]">
                              {size}
                            </Link>
                          </h4>
                          <p className="text-xs text-slate-500 font-semibold uppercase tracking-[0.14em] mb-4">{label}</p>
                          <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-1">{desc}</p>

                          <div className="mb-6">
                            <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">Common Specifications</div>
                            <ul className="space-y-2">
                              {(COMMON_PRODUCT_SPECS[size] ?? ["Custom size available"]).map((t) => (
                                <li
                                  key={t}
                                  className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium leading-relaxed text-slate-700"
                                >
                                  {t}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex gap-2">
                            <Link
                              href={`/contact?product=${encodeURIComponent(size)}`}
                              className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-blue-700 bg-blue-700 px-3 py-2.5 text-sm font-semibold text-[#F8FAFC] transition-colors hover:border-blue-800 hover:bg-blue-800 hover:text-[#F8FAFC]"
                            >
                              <MessageSquare className="w-4 h-4" />
                              Leave Message
                            </Link>
                            <a
                              href={`${waBase}${encodeURIComponent(`Hello, I need quotation for ${size} ${productType}. Please send me price and MOQ.`)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-green-600 px-3 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-500"
                              aria-label={`WhatsApp inquiry for ${size}`}
                              title="WhatsApp"
                            >
                              <Phone className="w-4 h-4" />
                              WhatsApp
                            </a>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-[#0F2B5B] hover:text-[#12346d] font-semibold text-sm transition-colors"
            >
              View all sizes &amp; specifications <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-10 rounded-lg border border-amber-200 bg-amber-50 px-5 py-4 sm:px-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-900">Need a mixed-size pallet or container quote?</p>
                <p className="mt-1 text-sm text-slate-600">Send destination port and target sizes. We will reply with MOQ, packing, and loading plan.</p>
              </div>
              <a
                href={waContainer}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#0F2B5B] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#12346d]"
              >
                <Phone className="w-4 h-4" />
                Ask for Container Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ③ CUSTOMER PROBLEMS — 目标客户常见问题 */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-[#0F2B5B] text-sm font-semibold uppercase tracking-[0.18em] mb-3">Buyer Pain Points</p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-slate-900">Common Problems Our Customers Face</h2>
            <p className="text-slate-600 mt-3 text-base max-w-2xl mx-auto leading-relaxed">
              We help POS distributors, importers, retail chains, and OEM buyers solve recurring quality, supply, packaging, and shipment problems.
            </p>
          </div>

          <div className="mb-8 grid grid-cols-2 gap-3 rounded-lg border border-slate-200 bg-white p-3 sm:grid-cols-4">
            {[
              "Print Quality",
              "Roll Consistency",
              "Delivery Stability",
              "OEM Packaging",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-md bg-slate-50 px-3 py-2.5 text-sm font-semibold text-slate-800">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                {item}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {customerProblems.map(({ title, label, badge, badgeTone, href, desc, solutions }) => (
              <div
                key={title}
                className="group overflow-hidden border border-slate-200 rounded-lg bg-white flex flex-col shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#0F2B5B]/40 hover:shadow-lg"
              >
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-slate-50 transition-colors group-hover:bg-[#0F2B5B]">
                      <Package className="w-4 h-4 text-[#0F2B5B] transition-colors group-hover:text-white" />
                    </div>
                    <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${BADGE_COLORS[badgeTone] ?? BADGE_COLORS.amber}`}>
                      {badge}
                    </span>
                  </div>

                  <h3 className="text-[1.35rem] font-semibold tracking-[-0.03em] text-slate-900 mb-1">{title}</h3>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-[0.14em] mb-4">{label}</p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-1">{desc}</p>

                  <div className="mb-6">
                    <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">How We Solve It</div>
                    <div className="space-y-2">
                      {solutions.map((t) => (
                        <span
                          key={t}
                          className="block rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium leading-relaxed text-slate-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link
                      href={href}
                      className="flex-1 text-center bg-[#0F2B5B] hover:bg-[#12346d] text-white text-sm font-semibold py-2.5 rounded-md transition-colors"
                    >
                      See Solution
                    </Link>
                    <a
                      href={`${waBase}${encodeURIComponent(`Hello, I need help with ${title}. Please recommend a thermal paper solution and quotation.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 border border-slate-200 hover:border-[#0F2B5B] text-slate-700 hover:text-[#0F2B5B] rounded-md flex items-center justify-center transition-colors flex-shrink-0"
                      aria-label={`WhatsApp inquiry for ${title}`}
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

          <div className="mt-10 rounded-lg border border-amber-200 bg-amber-50 px-5 py-4 sm:px-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-900">Facing a quality, packing, or delivery problem?</p>
                <p className="mt-1 text-sm text-slate-600">Send your roll size, printer model, order quantity, and destination port. We will recommend the right paper grade and packing plan.</p>
              </div>
              <a
                href={waContainer}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#0F2B5B] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#12346d]"
              >
                <Phone className="w-4 h-4" />
                Ask for Solution
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ② FULL SIZE REFERENCE — 三列规格速查（来自导航菜单数据） */}
      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="container">
          <details className="group rounded-lg border border-slate-200 bg-white">
            <summary className="flex cursor-pointer list-none flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div>
                <p className="text-[#0F2B5B] text-xs font-semibold uppercase tracking-[0.18em] mb-2">Full Range</p>
                <h2 className="text-xl sm:text-2xl font-semibold tracking-[-0.03em] text-slate-900">All Available Sizes</h2>
                <p className="text-slate-600 mt-1 text-sm leading-relaxed">
                  Open the full reference when you need less common roll sizes or custom dimensions.
                </p>
              </div>
              <span className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-[#0F2B5B] transition-colors group-open:bg-slate-50">
                View Size Reference <ArrowRight className="w-4 h-4 transition-transform group-open:rotate-90" />
              </span>
            </summary>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-200 p-5 sm:p-6">
            {sizeGroups.map((group) => (
              <div
                key={group.groupLabel}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden"
              >
                <div className="px-5 py-4 flex items-center gap-3 border-b border-slate-200 bg-slate-50">
                  <div className="w-8 h-8 border border-slate-200 rounded-md flex items-center justify-center flex-shrink-0 bg-white">
                    <Package className="w-4 h-4 text-[#0F2B5B]" />
                  </div>
                  <h3 className="text-slate-900 font-semibold text-sm tracking-[0.01em]">{group.groupLabel}</h3>
                </div>

                <div className="divide-y divide-slate-100">
                  {group.items.map((sz) => {
                    const badgeClass = BADGE_COLORS[sz.badgeColor ?? "amber"] ?? BADGE_COLORS.amber;
                    const waMsg = encodeURIComponent(
                      `Hello, I need quotation for ${sz.label}.\nQuantity: __ cartons / container\nDestination: __`
                    );
                    return (
                      <div
                        key={sz.label}
                        className="px-5 py-3 hover:bg-slate-50 transition-colors group"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 min-w-0">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#0F2B5B] flex-shrink-0" />
                              <Link
                                href={sz.href}
                                className="text-sm font-semibold text-slate-800 group-hover:text-[#0F2B5B] transition-colors truncate"
                              >
                                {sz.label}
                              </Link>
                            </div>
                            {sz.badge && (
                              <span className={`inline-flex mt-2 text-[10px] font-semibold px-2 py-0.5 rounded-full border whitespace-nowrap ${badgeClass}`}>
                                {sz.badge}
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-1.5 ml-2 flex-shrink-0">
                            <Link
                              href={sz.href}
                              className="text-[11px] font-semibold border border-slate-200 text-slate-700 px-2.5 py-1 rounded-md hover:border-[#0F2B5B] hover:text-[#0F2B5B] transition-colors whitespace-nowrap"
                            >
                              Details
                            </Link>
                            <a
                              href={`${SITE.whatsappUrl}?text=${waMsg}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-7 h-7 border border-slate-200 hover:border-[#0F2B5B] text-slate-600 hover:text-[#0F2B5B] rounded-md flex items-center justify-center transition-colors"
                              aria-label={`WhatsApp inquiry for ${sz.label}`}
                              title="WhatsApp"
                            >
                              <Phone className="w-3 h-3" />
                              <span className="sr-only">WhatsApp</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="px-5 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Need a custom size?</span>
                  <Link
                    href="/oem/custom-printing"
                    className="text-xs font-semibold text-[#0F2B5B] hover:text-[#12346d] transition-colors flex items-center gap-1"
                  >
                    OEM Custom <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-slate-200 px-5 pb-6 pt-5 sm:px-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0F2B5B] hover:bg-[#12346d] text-white font-semibold px-7 py-3 rounded-md transition-colors duration-200 text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              Request Full Price List
            </Link>
            <a
              href={waGeneral}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-slate-300 hover:border-[#0F2B5B] text-slate-700 hover:text-[#0F2B5B] font-semibold px-7 py-3 rounded-md transition-colors duration-200 text-sm"
            >
              <Phone className="w-4 h-4" />
              WhatsApp for Quick Quote
            </a>
          </div>
          </details>
        </div>
      </section>

      {/* ②b FACTORY PROCESS */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-[#0F2B5B] text-sm font-semibold uppercase tracking-[0.18em] mb-3">Factory Process</p>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-slate-900 leading-tight">
                Controlled Production from Printing &amp; Slitting to Container Loading
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Every bulk order follows a clear converting process, with artwork, roll size, slitting accuracy, core, packing, carton marks, and pallet plan checked before shipment.
              </p>

              <div className="mt-8 overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
                <div
                  className="aspect-[4/3] w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${HERO_SLIDE_2})` }}
                  aria-label="Thermal paper printing, slitting, and converting line"
                  role="img"
                />
                <div className="grid grid-cols-2 gap-px bg-slate-200">
                  {[
                    { label: "Production Lines", value: FACTORY.productionLines },
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
                      <Icon className="h-5 w-5 text-[#0F2B5B]" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-600">{step}</span>
                  </div>
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ② SOCIAL PROOF — Factory numbers */}
      <section className="py-14 bg-[#0A1F44] text-white">
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

      {/* ③ WHY BUYERS CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-[#0F2B5B] text-sm font-semibold uppercase tracking-[0.18em] mb-3">Our Advantages</p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-slate-900">Why Buyers Choose Us</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyUs.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <div className="w-12 h-12 bg-white border border-slate-200 rounded-md flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-[#0F2B5B]" />
                </div>
                <h3 className="font-semibold tracking-[-0.02em] text-slate-900 text-lg mb-2">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ③b TESTIMONIALS */}
      <section className="py-16 bg-slate-50 border-y border-slate-100" aria-labelledby="buyer-feedback-heading">
        <div className="container">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-[#0F2B5B] text-sm font-semibold uppercase tracking-[0.18em] mb-3">Buyer Feedback by Market</p>
            <h2 id="buyer-feedback-heading" className="text-2xl sm:text-3xl font-semibold tracking-[-0.03em] text-slate-900">
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
                        <div className="mt-2 text-right text-[10px] font-medium text-slate-400">{time}</div>
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

      {/* ④ CONTAINER LOADING */}
      <section className="py-20 bg-[#0A1F44] text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-amber-300 text-sm font-semibold uppercase tracking-[0.18em] mb-4">Logistics</p>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] mb-7 leading-tight">
                Container Loading<br />
                <span className="text-amber-300">Available</span>
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
              <div
                className="aspect-[3/2] w-full rounded-md border border-white/10 bg-cover bg-center"
                style={{ backgroundImage: `url(${FACTORY_IMG})` }}
                aria-label="Thermal paper factory loading area"
                role="img"
              />
              <div className="absolute -bottom-4 -right-4 bg-amber-500 text-slate-950 rounded-md p-4 text-center">
                <div className="text-2xl font-semibold">{FACTORY.productionLines}</div>
                <div className="text-xs font-semibold uppercase tracking-[0.14em]">Production Lines</div>
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
              <p className="text-[#0F2B5B] text-sm font-semibold uppercase tracking-[0.18em] mb-3">OEM &amp; Custom Printing</p>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-slate-900 mb-5 leading-tight">
                Custom Printed Thermal Rolls<br />
                <span className="text-amber-600">with Your Logo &amp; Brand</span>
              </h2>
              <p className="text-slate-600 text-base mb-6 leading-relaxed">
                Turn every receipt into a brand touchpoint. Full-color flexographic printing with Pantone matching, QR codes, Arabic/English bilingual layouts, and TRA / ZATCA / FIRS compliance printing for Africa, Middle East, and Southeast Asia.
              </p>
              <div className="grid grid-cols-1 gap-3 mb-8 sm:grid-cols-2">
                {[
                  "Logo &amp; brand colors (Pantone)",
                  "QR codes &amp; loyalty barcodes",
                  "Arabic + English bilingual",
                  "TRA / ZATCA / FIRS compliant",
                  "MOQ 1,000 rolls",
                  "Free design proof in 24h",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products/thermal-paper-rolls/custom-printed"
                  className="inline-flex items-center gap-2 bg-[#0A1F44] hover:bg-[#12346d] text-white font-semibold px-6 py-3 rounded-md transition-colors duration-200 text-sm"
                >
                  <Printer className="w-4 h-4" />
                  View Custom Printed Rolls
                </Link>
                <Link
                  href="/oem/custom-printing"
                  className="inline-flex items-center gap-2 border border-slate-300 text-slate-700 hover:border-[#0F2B5B] hover:text-[#0F2B5B] font-semibold px-6 py-3 rounded-md transition-colors duration-200 text-sm"
                >
                  OEM Printing Specs &amp; MOQ
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { code: "TZ" as CountryCode, country: "Tanzania",     compliance: "TRA Compliant",   href: "/markets/africa/tanzania" },
                { code: "SA" as CountryCode, country: "Saudi Arabia",  compliance: "ZATCA Compliant", href: "/markets/middle-east/saudi-arabia" },
                { code: "NG" as CountryCode, country: "Nigeria",       compliance: "FIRS Compliant",  href: "/markets/africa/nigeria" },
                { code: "AE" as CountryCode, country: "UAE",           compliance: "VAT Compliant",   href: "/markets/middle-east/uae" },
                { code: "TH" as CountryCode, country: "Thailand",      compliance: "PromptPay QR",    href: "/markets/southeast-asia/thailand" },
                { code: "ID" as CountryCode, country: "Indonesia",     compliance: "QRIS Compliant",  href: "/markets/southeast-asia/indonesia" },
              ].map(({ code, country, compliance, href }) => (
                <Link
                  key={country}
                  href={href}
                  className="bg-slate-50 border border-slate-200 hover:border-[#0F2B5B] hover:bg-white rounded-lg p-4 transition-colors duration-200 group"
                >
                  <div className="mb-2"><CountryFlag code={code} label={country} className="w-8 h-auto" /></div>
                  <div className="font-semibold text-slate-900 text-sm group-hover:text-[#0F2B5B]">{country}</div>
                  <div className="text-xs text-slate-500 mt-1">{compliance}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ⑤ FINAL CTA */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center border border-slate-200 bg-white rounded-lg px-5 py-10 sm:px-8 sm:py-12">
            <p className="text-[#0F2B5B] text-sm font-semibold uppercase tracking-[0.18em] mb-3">Next Step</p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-slate-900 mb-4">
              Get Your Quote Within 24 Hours
            </h2>
            <p className="text-slate-600 text-base mb-10 leading-relaxed">
              Tell us your required sizes, quantities, and destination port.<br />
              We&apos;ll reply with competitive pricing within 24 hours.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 bg-[#0A1F44] hover:bg-[#12346d] text-white font-semibold px-8 py-3.5 rounded-md text-base transition-colors duration-200"
              >
                <MessageSquare className="w-5 h-5" />
                Send Inquiry
              </Link>
              <a
                href={waContainer}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 border border-slate-300 hover:border-[#0F2B5B] text-slate-700 hover:text-[#0F2B5B] font-semibold px-8 py-3.5 rounded-md text-base transition-colors duration-200"
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
