// Products Overview Page
import { Link } from "wouter";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { ArrowRight, Package, Tag } from "lucide-react";
import { paperRollSizes, labelSizes } from "@/config/navigation";

const ROLLS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-rolls-RQBrphmgzbAMk7eq3HsvNq.webp";
const LABELS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-labels-FgJ5U8LZDHPF5nwmD6Uqa5.webp";

export default function Products() {
  return (
    <Layout>
      <div className="bg-slate-50 py-10">
        <div className="container">
          <Breadcrumb items={[{ label: "Products" }]} />
          <h1 className="text-4xl font-extrabold text-slate-900 mb-3" style={{ fontFamily: "Sora, sans-serif" }}>
            All Products
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl">
            Explore our complete range of thermal paper rolls and thermal labels. All products available for OEM/custom printing.
          </p>
        </div>
      </div>

      <div className="container py-14">
        {/* Thermal Paper Rolls */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <Package className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900" style={{ fontFamily: "Sora, sans-serif" }}>Thermal Paper Rolls</h2>
              <p className="text-slate-500 text-sm">POS receipts, ATM, kiosk, and parking ticket rolls</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              { title: "Blank Thermal Paper Rolls", desc: "Standard white thermal paper rolls for all POS and receipt printers. BPA-free, high image clarity.", href: "/products/thermal-paper-rolls/blank" },
              { title: "Custom Printed Thermal Rolls", desc: "Rolls with your logo, brand colors, or promotional messages pre-printed. OEM available.", href: "/products/thermal-paper-rolls/custom-printed" },
            ].map((p) => (
              <Link key={p.href} href={p.href} className="group flex gap-4 p-6 bg-white border border-slate-200 hover:border-blue-300 rounded-2xl hover:shadow-lg transition-all duration-300">
                <img src={ROLLS_IMG} alt={p.title} className="w-24 h-24 object-cover rounded-xl flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors" style={{ fontFamily: "Sora, sans-serif" }}>{p.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">{p.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-blue-600 font-semibold">View Details <ArrowRight className="w-3.5 h-3.5" /></span>
                </div>
              </Link>
            ))}
          </div>

          <div>
            <h3 className="text-base font-bold text-slate-700 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>Popular Sizes</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {paperRollSizes.map((size) => (
                <Link
                  key={size.slug}
                  href={`/products/thermal-paper-rolls/sizes/${size.slug}`}
                  className="group flex flex-col items-center p-4 bg-white border border-slate-200 hover:border-amber-300 hover:bg-amber-50 rounded-xl transition-all duration-200 text-center"
                >
                  <div className="font-bold text-slate-800 group-hover:text-amber-700 text-sm mb-1" style={{ fontFamily: "Sora, sans-serif" }}>{size.label}</div>
                  {size.badge && <span className="text-[10px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">{size.badge}</span>}
                  {!size.badge && <span className="text-[10px] text-slate-400">{size.markets}</span>}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Thermal Labels */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
              <Tag className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900" style={{ fontFamily: "Sora, sans-serif" }}>Thermal Labels</h2>
              <p className="text-slate-500 text-sm">Shipping labels, barcode labels, product labels</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              { title: "Blank Thermal Labels", desc: "Direct thermal labels for shipping, inventory, and barcode printing. Compatible with all major printers.", href: "/products/thermal-labels/blank" },
              { title: "Custom Printed Thermal Labels", desc: "Pre-printed labels with your brand, logo, or product information. Private label available.", href: "/products/thermal-labels/custom-printed" },
            ].map((p) => (
              <Link key={p.href} href={p.href} className="group flex gap-4 p-6 bg-white border border-slate-200 hover:border-amber-300 rounded-2xl hover:shadow-lg transition-all duration-300">
                <img src={LABELS_IMG} alt={p.title} className="w-24 h-24 object-cover rounded-xl flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 mb-1 group-hover:text-amber-700 transition-colors" style={{ fontFamily: "Sora, sans-serif" }}>{p.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">{p.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-amber-600 font-semibold">View Details <ArrowRight className="w-3.5 h-3.5" /></span>
                </div>
              </Link>
            ))}
          </div>

          <div>
            <h3 className="text-base font-bold text-slate-700 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>Popular Sizes</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {labelSizes.map((size) => (
                <Link
                  key={size.slug}
                  href={`/products/thermal-labels/sizes/${size.slug}`}
                  className="group flex flex-col items-center p-4 bg-white border border-slate-200 hover:border-amber-300 hover:bg-amber-50 rounded-xl transition-all duration-200 text-center"
                >
                  <div className="font-bold text-slate-800 group-hover:text-amber-700 text-sm mb-1" style={{ fontFamily: "Sora, sans-serif" }}>{size.label}</div>
                  {size.badge && <span className="text-[10px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">{size.badge}</span>}
                  {!size.badge && <span className="text-[10px] text-slate-400">{size.markets}</span>}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
