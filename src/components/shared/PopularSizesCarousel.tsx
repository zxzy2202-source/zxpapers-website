"use client";

import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";

export interface SkuItem {
  /** Size label, e.g. "80 × 80 mm" */
  size: string;
  /** Short use-case line */
  use: string;
  /** Optional popularity badge */
  badge?: string;
  /** Link to the size detail page */
  href: string;
}

function getSkuType(item: SkuItem) {
  const text = `${item.size} ${item.use}`.toLowerCase();

  if (text.includes("can")) {
    return { label: "Can Label", tone: "border-slate-200 bg-slate-50 text-slate-700" };
  }

  if (text.includes("label") || text.includes("shipping") || text.includes("barcode")) {
    return { label: "Thermal Label", tone: "border-blue-100 bg-blue-50 text-brand-navy" };
  }

  return { label: "Thermal Roll", tone: "border-amber-200 bg-amber-50 text-amber-700" };
}

export default function PopularSizesCarousel({ items }: { items: SkuItem[] }) {
  return (
    <div
      role="region"
      aria-label="Popular thermal paper and label sizes"
      className="grid grid-cols-1 gap-3 min-[520px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {items.map((item, index) => {
          const { size, use, badge, href } = item;
          const inquiryHref = `/contact?product=${encodeURIComponent(size)}`;
          const skuType = getSkuType(item);
          const isFeatured = index < 2;

          return (
            <article
              key={`${size}-${use}`}
              className={`group flex min-h-[216px] flex-col rounded-lg border bg-white p-4 shadow-sm transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-brand-navy/40 hover:shadow-md motion-reduce:transform-none ${
                isFeatured ? "border-brand-navy/25" : "border-slate-200"
              }`}
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <span className={`rounded-md border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] ${skuType.tone}`}>
                  {skuType.label}
                </span>
                {badge && (
                  <span className="rounded-md border border-amber-200 bg-amber-50 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-amber-700">
                    {badge}
                  </span>
                )}
              </div>

              <Link
                href={href}
                className="text-2xl font-semibold tracking-[-0.02em] text-slate-950 transition-colors group-hover:text-brand-navy [font-variant-numeric:tabular-nums]"
              >
                {size}
              </Link>

              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{use}</p>

              <div className="mt-5 grid grid-cols-1 gap-2">
                <Link
                  href={inquiryHref}
                  className={`inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold transition-colors ${
                    isFeatured
                      ? "bg-amber-500 text-slate-950 hover:bg-amber-400"
                      : "bg-brand-navy text-white hover:bg-brand-navy-hover"
                  }`}
                >
                  <MessageSquare className="h-4 w-4" aria-hidden="true" />
                  Quick Quote
                </Link>
                <Link
                  href={href}
                  className="inline-flex items-center justify-center gap-1.5 rounded-md border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-brand-navy hover:text-brand-navy"
                >
                  View Specs
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </article>
          );
        })}
    </div>
  );
}
