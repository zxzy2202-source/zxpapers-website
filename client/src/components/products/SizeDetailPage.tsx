// SizeDetailPage — Reusable template for all product size pages
// Design: Global Trade Authority — Applications section with image cards + hover-zoom lightbox
// Lightbox includes "Inquire for This Application" CTA that scrolls to sidebar form and pre-fills message
// Used by: /products/thermal-paper-rolls/sizes/* and /products/thermal-labels/sizes/*

import { useState, useCallback } from "react";
import { Link } from "wouter";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/shared/Breadcrumb";
import InquiryForm from "@/components/shared/InquiryForm";
import RelatedSizes from "@/components/shared/RelatedSizes";
import {
  CheckCircle, ArrowRight, Package, Tag,
  ZoomIn, X, ChevronLeft, ChevronRight, MessageSquare,
} from "lucide-react";

interface SizeSpec {
  label: string;
  value: string;
}

export interface ApplicationItem {
  name: string;
  image: string;
  description?: string;
}

interface SizeDetailPageProps {
  type: "rolls" | "labels";
  sizeLabel: string;
  slug: string;
  fullTitle: string;
  description: string;
  specs: SizeSpec[];
  applications: ApplicationItem[];
  markets: string[];
  badge?: string;
  productImage: string;
}

// ── Lightbox component ──────────────────────────────────────────────────────
function Lightbox({
  items,
  index,
  fullTitle,
  onClose,
  onPrev,
  onNext,
  onInquire,
}: {
  items: ApplicationItem[];
  index: number;
  fullTitle: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onInquire: (appName: string) => void;
}) {
  const item = items[index];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-5 right-5 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
        onClick={onClose}
        aria-label="Close"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev */}
      {items.length > 1 && (
        <button
          className="absolute left-4 sm:left-8 w-11 h-11 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Content */}
      <div
        className="relative max-w-3xl w-full mx-16 sm:mx-20 flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <img
          src={item.image}
          alt={item.name}
          className="w-full max-h-[60vh] object-contain rounded-2xl shadow-2xl"
        />

        {/* Info + CTA panel */}
        <div className="mt-5 w-full bg-white/10 backdrop-blur-md rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="text-white font-bold text-lg leading-tight" style={{ fontFamily: "Sora, sans-serif" }}>
              {item.name}
            </div>
            {item.description && (
              <div className="text-slate-300 text-sm mt-1 leading-snug">{item.description}</div>
            )}
            <div className="text-slate-500 text-xs mt-2">
              {index + 1} / {items.length} &nbsp;·&nbsp; {fullTitle}
            </div>
          </div>

          {/* Inquire CTA */}
          <button
            onClick={() => onInquire(item.name)}
            className="flex-shrink-0 flex items-center gap-2 bg-amber-500 hover:bg-amber-400 active:scale-95 text-slate-900 font-bold px-5 py-2.5 rounded-xl transition-all duration-150 text-sm shadow-lg shadow-amber-500/30 whitespace-nowrap"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            <MessageSquare className="w-4 h-4" />
            Inquire for This Application
          </button>
        </div>
      </div>

      {/* Next */}
      {items.length > 1 && (
        <button
          className="absolute right-4 sm:right-8 w-11 h-11 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}

// ── Application Image Card ──────────────────────────────────────────────────
function AppCard({
  item,
  isRolls,
  onClick,
}: {
  item: ApplicationItem;
  isRolls: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className="group relative cursor-zoom-in rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      onClick={onClick}
    >
      {/* Image with zoom effect */}
      <div className="relative h-44 overflow-hidden bg-slate-100">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* Zoom icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40">
            <ZoomIn className="w-6 h-6 text-white" />
          </div>
        </div>
        {/* Bottom label overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-white text-xs leading-snug">
            {item.description || `Click to view ${item.name} example`}
          </p>
        </div>
      </div>

      {/* Card footer */}
      <div className={`px-4 py-3 ${isRolls ? "bg-blue-50" : "bg-amber-50"}`}>
        <div className="flex items-center justify-between">
          <span
            className={`text-sm font-semibold ${isRolls ? "text-blue-800" : "text-amber-800"}`}
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            {item.name}
          </span>
          <ZoomIn className={`w-4 h-4 ${isRolls ? "text-blue-400" : "text-amber-400"} group-hover:scale-125 transition-transform`} />
        </div>
      </div>
    </div>
  );
}

// ── Main Component ──────────────────────────────────────────────────────────
export default function SizeDetailPage({
  type,
  sizeLabel,
  slug,
  fullTitle,
  description,
  specs,
  applications,
  markets,
  badge,
  productImage,
}: SizeDetailPageProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [inquiryMessage, setInquiryMessage] = useState<string>("");

  const isRolls = type === "rolls";
  const basePath = isRolls ? "/products/thermal-paper-rolls" : "/products/thermal-labels";
  const parentLabel = isRolls ? "Thermal Paper Rolls" : "Thermal Labels";

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + applications.length) % applications.length : 0));
  const nextImage = () =>
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % applications.length : 0));

  // Inquire CTA: close lightbox, pre-fill form message, scroll to sidebar form
  const handleInquire = useCallback((appName: string) => {
    const msg = `I'm interested in ${fullTitle} for ${appName} applications. Please provide pricing and availability information.`;
    setInquiryMessage(msg);
    closeLightbox();
    // Scroll to the inquiry form sidebar after a short delay (allow lightbox close animation)
    setTimeout(() => {
      const el = document.getElementById("inquiry-form-sidebar");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        // Briefly highlight the form
        el.classList.add("ring-2", "ring-amber-400", "ring-offset-2");
        setTimeout(() => el.classList.remove("ring-2", "ring-amber-400", "ring-offset-2"), 2000);
      }
    }, 150);
  }, [fullTitle]);

  return (
    <Layout>
      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          items={applications}
          index={lightboxIndex}
          fullTitle={fullTitle}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
          onInquire={handleInquire}
        />
      )}

      {/* Header */}
      <div className="bg-slate-50 py-10">
        <div className="container">
          <Breadcrumb items={[
            { label: "Products", href: "/products" },
            { label: parentLabel, href: `${basePath}/blank` },
            { label: "Popular Sizes" },
            { label: sizeLabel },
          ]} />
          <div className="flex items-start gap-4">
            <div className={`w-12 h-12 ${isRolls ? "bg-blue-100" : "bg-amber-100"} rounded-xl flex items-center justify-center flex-shrink-0`}>
              {isRolls ? <Package className="w-6 h-6 text-blue-600" /> : <Tag className="w-6 h-6 text-amber-600" />}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-3xl font-extrabold text-slate-900" style={{ fontFamily: "Sora, sans-serif" }}>
                  {fullTitle}
                </h1>
                {badge && (
                  <span className="bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">{badge}</span>
                )}
              </div>
              <p className="text-slate-500 text-sm">
                {markets.join(" · ")} Market{markets.length > 1 ? "s" : ""}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">

            {/* Overview */}
            <div className="flex flex-col sm:flex-row gap-6">
              <img
                src={productImage}
                alt={fullTitle}
                className="w-full sm:w-56 h-44 object-cover rounded-2xl flex-shrink-0"
              />
              <div>
                <p className="text-slate-600 leading-relaxed mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {["BPA-Free", "ISO 9001", "FSC Certified", "OEM Available"].map((tag) => (
                    <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Specifications */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>
                {sizeLabel} Specifications
              </h2>
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    {specs.map(({ label, value }, i) => (
                      <tr key={label} className={i % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                        <td className="px-5 py-3 font-medium text-slate-700 w-44">{label}</td>
                        <td className="px-5 py-3 text-slate-900 font-semibold">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Applications — Image Grid with Hover Zoom */}
            <div>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-bold text-slate-900" style={{ fontFamily: "Sora, sans-serif" }}>
                  Application Scenarios
                </h2>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <ZoomIn className="w-3.5 h-3.5" />
                  Click to zoom &amp; inquire
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {applications.map((app, i) => (
                  <AppCard
                    key={app.name}
                    item={app}
                    isRolls={isRolls}
                    onClick={() => openLightbox(i)}
                  />
                ))}
              </div>
            </div>

            {/* Key benefits */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>Why Choose This Size</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  `Standard ${sizeLabel} size — compatible with most ${isRolls ? "POS printers" : "thermal label printers"}`,
                  "BPA-free thermal coating for safe handling",
                  "Consistent roll quality with tight tolerances",
                  "Available in bulk quantities with competitive pricing",
                  "Custom printing and private label available",
                  "Fast global shipping with full tracking",
                ].map((b) => (
                  <div key={b} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    {b}
                  </div>
                ))}
              </div>
            </div>

            {/* Internal CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 bg-slate-50 rounded-2xl">
              <div>
                <h3 className="font-bold text-slate-900 mb-1 text-sm" style={{ fontFamily: "Sora, sans-serif" }}>
                  Need a Custom Size?
                </h3>
                <p className="text-xs text-slate-600 mb-3">We can manufacture to your exact specifications.</p>
                <Link
                  href="/contact"
                  className={`inline-flex items-center gap-2 text-sm font-semibold ${
                    isRolls ? "text-blue-600 hover:text-blue-800" : "text-amber-600 hover:text-amber-800"
                  }`}
                >
                  Contact OEM Team <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1 text-sm" style={{ fontFamily: "Sora, sans-serif" }}>
                  Interested in Private Labeling?
                </h3>
                <p className="text-xs text-slate-600 mb-3">Custom printing and packaging available.</p>
                <Link
                  href="/oem/packaging"
                  className={`inline-flex items-center gap-2 text-sm font-semibold ${
                    isRolls ? "text-blue-600 hover:text-blue-800" : "text-amber-600 hover:text-amber-800"
                  }`}
                >
                  OEM Packaging <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* View all sizes link */}
            <div className="flex items-center gap-3 text-sm">
              <Link href={`${basePath}/blank`} className="text-slate-500 hover:text-blue-600 transition-colors">
                ← View All {parentLabel}
              </Link>
            </div>

            <RelatedSizes currentSlug={slug} type={type} />
          </div>

          {/* Sidebar — id used for scroll-to target from Lightbox CTA */}
          <div className="lg:col-span-1">
            <div
              id="inquiry-form-sidebar"
              className="sticky top-28 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-1" style={{ fontFamily: "Sora, sans-serif" }}>
                Get a Quote
              </h3>
              <p className="text-sm text-slate-500 mb-5">Response within 12 hours</p>
              {/* Pass inquiryMessage to pre-fill the message textarea */}
              <InquiryForm
                productName={fullTitle}
                compact
                initialMessage={inquiryMessage}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
