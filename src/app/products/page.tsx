import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { ArrowRight, Package, Tag, Archive, Droplets, MessageSquare, Phone } from "lucide-react";
import { paperRollSizes, labelSizes, canLabelSizes, detergentLabelSizes } from "@/config/navigation";
import { SITE } from "@/config/siteData";
import PageHero from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Thermal Paper Rolls, Labels & Can Labels",
  description: "Complete range of thermal paper rolls, thermal labels, can labels, and detergent labels. Blank and custom printed options available.",
  alternates: { canonical: `${SITE.domain}/products` },
};

const ROLLS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-rolls-RQBrphmgzbAMk7eq3HsvNq.webp";
const LABELS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-labels-FgJ5U8LZDHPF5nwmD6Uqa5.webp";
const CAN_LABELS_IMG = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80";
const DETERGENT_LABELS_IMG = "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=400&q=80";

const productCategories = [
  {
    id: "thermal-rolls",
    icon: Package,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    accentColor: "hover:border-blue-300",
    linkColor: "text-blue-600",
    badgeBg: "bg-blue-100",
    badgeText: "text-blue-700",
    hoverText: "group-hover:text-blue-700",
    title: "Thermal Paper Rolls",
    subtitle: "POS receipts, ATM, kiosk, and parking ticket rolls",
    image: ROLLS_IMG,
    variants: [
      { title: "Blank Thermal Paper Rolls", desc: "Standard white thermal paper rolls for all POS and receipt printers. BPA-free, high image clarity.", href: "/products/thermal-paper-rolls/blank" },
      { title: "Custom Printed Thermal Rolls", desc: "Rolls with your logo, brand colors, or promotional messages pre-printed. OEM available.", href: "/products/thermal-paper-rolls/custom-printed" },
    ],
    sizes: paperRollSizes,
    sizeHref: (slug: string) => `/products/thermal-rolls/${slug}`,
  },
  {
    id: "thermal-labels",
    icon: Tag,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    accentColor: "hover:border-amber-300",
    linkColor: "text-amber-600",
    badgeBg: "bg-amber-100",
    badgeText: "text-amber-700",
    hoverText: "group-hover:text-amber-700",
    title: "Thermal Labels",
    subtitle: "Shipping labels, barcode labels, product labels",
    image: LABELS_IMG,
    variants: [
      { title: "Blank Thermal Labels", desc: "Direct thermal labels for shipping, inventory, and barcode printing. Compatible with all major printers.", href: "/products/thermal-labels/blank" },
      { title: "Custom Printed Thermal Labels", desc: "Pre-printed labels with your brand, logo, or product information. Private label available.", href: "/products/thermal-labels/custom-printed" },
    ],
    sizes: labelSizes,
    sizeHref: (slug: string) => `/products/thermal-labels/${slug}`,
  },
  {
    id: "can-labels",
    icon: Archive,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    accentColor: "hover:border-emerald-300",
    linkColor: "text-emerald-600",
    badgeBg: "bg-emerald-100",
    badgeText: "text-emerald-700",
    hoverText: "group-hover:text-emerald-700",
    title: "Can Labels",
    subtitle: "Beverage, food, pet food, and industrial can labels",
    image: CAN_LABELS_IMG,
    variants: [
      { title: "Blank Can Labels", desc: "Moisture-resistant, food-safe blank can labels. Full-wrap and partial-wrap options for all standard can sizes.", href: "/products/can-labels/blank" },
      { title: "Custom Printed Can Labels", desc: "Full-color printed can labels with your brand design. Suitable for beverages, food products, and industrial cans.", href: "/products/can-labels/custom-printed" },
    ],
    sizes: canLabelSizes,
    sizeHref: (slug: string) => `/products/can-labels/${slug}`,
  },
  {
    id: "detergent-labels",
    icon: Droplets,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    accentColor: "hover:border-violet-300",
    linkColor: "text-violet-600",
    badgeBg: "bg-violet-100",
    badgeText: "text-violet-700",
    hoverText: "group-hover:text-violet-700",
    title: "Detergent Labels",
    subtitle: "Laundry detergent, dish soap, and household cleaner labels",
    image: DETERGENT_LABELS_IMG,
    variants: [
      { title: "Blank Detergent Labels", desc: "Water-resistant, chemical-resistant blank labels for detergent bottles, cleaning products, and household chemicals.", href: "/products/detergent-labels/blank" },
      { title: "Custom Printed Detergent Labels", desc: "GHS-compliant printed labels with your brand, hazard pictograms, and product information. OEM available.", href: "/products/detergent-labels/custom-printed" },
    ],
    sizes: detergentLabelSizes,
    sizeHref: (slug: string) => `/products/detergent-labels/${slug}`,
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
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Products",
      "item": "https://www.zhixinpaper.com/products"
    }
  ]
};
export default function ProductsPage() {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <PageHero
        bgImage="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1400&q=80"
        overlayDir="left"
        overlayOpacity={50}
        minHeight="min-h-[400px]"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
        badge={{ text: "Factory Direct Supply", color: "blue" }}
        title={<>Thermal Paper Rolls<br /><span className="text-amber-400">& Labels Catalog</span></>}
        subtitle="Complete range of thermal paper rolls, labels, and specialty products. All sizes in stock. OEM packaging available. Get bulk pricing in 24 hours."
        trustBadges={["All Sizes In Stock", "OEM Available", "BPA-Free Options", "ISO 9001"]}
        ctas={[
          { label: "Get Full Price List", href: "/contact", variant: "primary", icon: <MessageSquare className="w-4 h-4" /> },
          { label: "WhatsApp for Quote", href: `${SITE.whatsappUrl}?text=${encodeURIComponent("Hello, I need pricing for thermal paper rolls. Please send full price list.")}`, variant: "whatsapp", icon: <Phone className="w-4 h-4" />, external: true },
        ]}
        stats={[
          { value: "50+", label: "Product Sizes" },
          { value: "In Stock", label: "Ready to Ship" },
          { value: "OEM", label: "Custom Packaging" },
          { value: "24h", label: "Quote Response" },
        ]}
      />
      <div className="container py-14 space-y-16">
        {productCategories.map((cat) => {
          const Icon = cat.icon;
          return (
            <div key={cat.id}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 ${cat.iconBg} rounded-xl flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${cat.iconColor}`} />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-slate-900" style={{ fontFamily: "Sora, sans-serif" }}>{cat.title}</h2>
                  <p className="text-slate-500 text-sm">{cat.subtitle}</p>
                </div>
              </div>

              <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-8`}>
                {cat.variants.map((p) => (
                  <Link key={p.href} href={p.href} className={`group flex gap-4 p-6 bg-white border border-slate-200 ${cat.accentColor} rounded-2xl hover:shadow-lg transition-all duration-300`}>
                    <img src={cat.image} alt={p.title} className="w-24 h-24 object-cover rounded-xl flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className={`font-bold text-slate-900 mb-1 ${cat.hoverText} transition-colors`} style={{ fontFamily: "Sora, sans-serif" }}>{p.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-3">{p.desc}</p>
                      <span className={`inline-flex items-center gap-1 text-sm ${cat.linkColor} font-semibold`}>View Details <ArrowRight className="w-3.5 h-3.5" /></span>
                    </div>
                  </Link>
                ))}
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-700 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>Popular Sizes</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {cat.sizes.map((size) => (
                    <Link key={size.slug} href={cat.sizeHref(size.slug)} className={`group flex flex-col items-center p-4 bg-white border border-slate-200 ${cat.accentColor} hover:bg-slate-50 rounded-xl transition-all duration-200 text-center`}>
                      <div className={`font-bold text-slate-800 ${cat.hoverText} text-sm mb-1`} style={{ fontFamily: "Sora, sans-serif" }}>{size.label}</div>
                      {size.badge
                        ? <span className={`text-[10px] ${cat.badgeBg} ${cat.badgeText} px-2 py-0.5 rounded-full font-medium`}>{size.badge}</span>
                        : <span className="text-[10px] text-slate-400">{size.markets}</span>
                      }
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
