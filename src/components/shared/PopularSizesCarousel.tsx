"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
    return { label: "Can Label", tone: "border-slate-400 text-slate-700" };
  }

  if (text.includes("label") || text.includes("shipping") || text.includes("barcode")) {
    return { label: "Thermal Label", tone: "border-brand-navy text-brand-navy" };
  }

  return { label: "Thermal Roll", tone: "border-amber-500 text-amber-700" };
}

export default function PopularSizesCarousel({ items }: { items: SkuItem[] }) {
  return (
    <div
      role="region"
      aria-label="Popular thermal paper and label sizes"
      className="grid grid-cols-2 gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-4"
    >
      {items.map((item) => {
          const { size, use, badge, href } = item;
          const skuType = getSkuType(item);

          return (
            <Link
              key={`${size}-${use}`}
              href={href}
              className="group flex min-h-[154px] flex-col bg-white p-4 transition-colors hover:bg-slate-50 sm:min-h-[168px] sm:p-5"
            >
              <div className="mb-5 flex items-start justify-between gap-2">
                <span className={`border-l-2 pl-2 text-[10px] font-semibold uppercase tracking-[0.12em] ${skuType.tone}`}>
                  {skuType.label}
                </span>
                {badge && (
                  <span className="text-[10px] font-semibold text-amber-700">
                    {badge}
                  </span>
                )}
              </div>

              <div className="text-xl font-semibold tracking-[-0.02em] text-slate-950 transition-colors group-hover:text-brand-navy sm:text-2xl [font-variant-numeric:tabular-nums]">
                {size}
              </div>

              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{use}</p>

              <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-navy">
                View specs
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" aria-hidden="true" />
              </span>
            </Link>
          );
        })}
    </div>
  );
}
