import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { SITE } from "@/config/siteData";
import Image from "next/image";
import {
  CheckCircle, ArrowRight, Package, Award, Globe,
  Phone, MessageSquare, Ship, Zap,
} from "lucide-react";

export interface ApplicationItem {
  name: string;
  image: string;
  description: string;
}

interface SpecRow {
  label: string;
  value: string;
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
  parentPath?: string;
  parentLabel?: string;
}

const TYPE_LABELS: Record<string, { parent: string; parentPath: string }> = {
  rolls:  { parent: "Thermal Paper Rolls", parentPath: "/products/blank-thermal-rolls" },
  labels: { parent: "Thermal Labels",      parentPath: "/products/blank-thermal-labels" },
};

export default function SizeDetailPage({
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
  parentPath,
  parentLabel,
}: SizeDetailPageProps) {
  const typeInfo = TYPE_LABELS[type] ?? TYPE_LABELS.rolls;
  const resolvedParentPath  = parentPath  ?? typeInfo.parentPath;
  const resolvedParentLabel = parentLabel ?? typeInfo.parent;

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

  return (
    <Layout>

      {/* ── HERO ── */}
      <div className="bg-[#0A1F44] text-white py-12">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h1 className="text-3xl sm:text-4xl font-extrabold">
                  {sizeLabel} Thermal Paper Rolls Supplier
                </h1>
                {badge && (
                  <span className="bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                    {badge}
                  </span>
                )}
              </div>

              {/* One-liner */}
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                Factory direct supply of {sizeLabel} thermal paper rolls for distributors and wholesalers.
                Stable quality and fast delivery available.
              </p>

              {/* Core sell points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-7">
                {coreSellPoints.map((p) => (
                  <div key={p} className="flex items-center gap-2 text-sm text-slate-200">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    {p}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-extrabold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <MessageSquare className="w-4 h-4" />
                  Send Inquiry Now
                </Link>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white font-extrabold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4" />
                  WhatsApp for Quick Response
                </a>
              </div>
            </div>

            {/* Product image */}
            <div>
              <Image
                src={productImage}
                alt={fullTitle}
                className="w-full rounded-2xl shadow-2xl"
                loading="eager"
                width={600}
                height={400}
               sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
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
              <div>
                <h2 className="text-xl font-extrabold text-slate-900 mb-5">Specifications</h2>
                <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden">
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
                      <span key={m} className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-medium">{m}</span>
                    ))}
                  </div>
                )}
              </div>

              {/* Strong trading info */}
              <div className="bg-[#0A1F44] text-white rounded-2xl p-7">
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

              {/* Applications */}
              {applications.length > 0 && (
                <div>
                  <h2 className="text-xl font-extrabold text-slate-900 mb-5">Applications</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {applications.map(({ name, image, description: appDesc }) => (
                      <div key={name} className="group bg-white border border-slate-200 hover:border-amber-300 rounded-xl overflow-hidden hover:shadow-md transition-all duration-200">
                        <div className="aspect-video overflow-hidden">
                          <Image
                            src={image}
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
                  <Link href={resolvedParentPath} className="inline-flex items-center gap-2 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 text-sm font-medium px-4 py-2 rounded-lg transition-colors">
                    <Package className="w-4 h-4" />All {resolvedParentLabel}
                  </Link>
                  <Link href="/oem/custom-printing" className="inline-flex items-center gap-2 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 text-sm font-medium px-4 py-2 rounded-lg transition-colors">
                    <ArrowRight className="w-4 h-4" />Custom Printing
                  </Link>
                  <Link href="/oem/packaging" className="inline-flex items-center gap-2 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 text-sm font-medium px-4 py-2 rounded-lg transition-colors">
                    <ArrowRight className="w-4 h-4" />Private Label
                  </Link>
                  <Link href="/manufacturing/certifications" className="inline-flex items-center gap-2 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 text-sm font-medium px-4 py-2 rounded-lg transition-colors">
                    <Award className="w-4 h-4" />Certifications
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar — sticky inquiry */}
            <div className="space-y-5">
              {/* Quick inquiry card */}
              <div className="bg-white border-2 border-amber-400 rounded-2xl p-6 shadow-lg sticky top-24">
                <h3 className="text-base font-extrabold text-slate-900 mb-1">
                  Get Price for {sizeLabel}
                </h3>
                <p className="text-xs text-slate-500 mb-5">Reply within 24 hours. No commitment required.</p>

                <div className="space-y-3 mb-5">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20b858] text-white font-extrabold py-3.5 rounded-xl transition-colors text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    WhatsApp for Quick Response
                  </a>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full bg-[#0A1F44] hover:bg-blue-800 text-white font-extrabold py-3.5 rounded-xl transition-colors text-sm"
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
                      <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              {/* OEM upsell */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
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
      <section className="py-14 bg-amber-500">
        <div className="container text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
            Ready to Order {sizeLabel} Thermal Paper Rolls?
          </h2>
          <p className="text-slate-800 text-sm mb-8 max-w-lg mx-auto">
            Tell us your quantity and destination. We&apos;ll reply with competitive pricing within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0A1F44] hover:bg-blue-900 text-white font-extrabold px-8 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
            >
              <MessageSquare className="w-4 h-4" />
              Send Inquiry Now
            </Link>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white font-extrabold px-8 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
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
