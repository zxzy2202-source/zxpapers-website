"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";

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

export default function PopularSizesCarousel({ items }: { items: SkuItem[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCards = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.9, 480) * dir;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div className="mb-5 flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => scrollByCards(-1)}
          aria-label="Scroll to previous sizes"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 bg-white text-slate-700 transition-colors hover:border-brand-navy hover:text-brand-navy [touch-action:manipulation]"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCards(1)}
          aria-label="Scroll to next sizes"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 bg-white text-slate-700 transition-colors hover:border-brand-navy hover:text-brand-navy [touch-action:manipulation]"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <div
        ref={trackRef}
        role="region"
        aria-label="Popular thermal paper and label sizes"
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-1 motion-reduce:scroll-auto [overscroll-behavior-x:contain] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map(({ size, use, badge, href }) => {
          const inquiryHref = `/contact?product=${encodeURIComponent(size)}`;
          return (
            <div
              key={`${size}-${use}`}
              className="group flex w-60 flex-shrink-0 snap-start flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-[border-color,box-shadow] duration-200 motion-reduce:transition-none hover:border-brand-navy/40 hover:shadow-lg"
            >
              <div className="mb-3 flex min-h-[1.25rem] items-center">
                {badge && (
                  <span className="rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-amber-700">
                    {badge}
                  </span>
                )}
              </div>
              <Link
                href={href}
                className="whitespace-nowrap text-2xl font-semibold tracking-[-0.02em] text-slate-900 transition-colors group-hover:text-brand-navy [font-variant-numeric:tabular-nums]"
              >
                {size}
              </Link>
              <p className="mt-2 mb-5 flex-1 text-sm leading-relaxed text-slate-600">{use}</p>
              <Link
                href={inquiryHref}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-navy px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-navy-hover"
              >
                <MessageSquare className="h-4 w-4" aria-hidden="true" />
                Inquiry Now
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
