import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface QuickQuoteBriefProps {
  kind: "products" | "category" | "detail";
  label: string;
  items: Array<{ title: string; description: string }>;
  ctaLabel: string;
}

export default function QuickQuoteBrief({
  kind,
  label,
  items,
  ctaLabel,
}: QuickQuoteBriefProps) {
  const titleId = `${kind}-quick-brief-title`;

  return (
    <section
      data-products-quick-brief={kind === "products" ? "true" : undefined}
      data-category-quick-brief={kind === "category" ? "true" : undefined}
      data-product-quick-brief={kind === "detail" ? "true" : undefined}
      aria-labelledby={titleId}
      className="border-b border-slate-200 bg-slate-50"
    >
      <div className="container grid gap-5 py-6 lg:grid-cols-[minmax(210px,0.55fr)_minmax(0,1.45fr)_auto] lg:items-center">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-normal text-amber-700">
            {label}
          </p>
          <h2
            id={titleId}
            className="mt-1.5 font-sora text-xl font-semibold leading-tight text-slate-950"
          >
            Send three facts to start
          </h2>
        </div>
        <ol className="grid border-l border-t border-slate-300 sm:grid-cols-3">
          {items.map((item, index) => (
            <li key={item.title} className="border-b border-r border-slate-300 bg-white p-3">
              <span className="text-[11px] font-semibold text-amber-700">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-1 text-sm font-semibold text-slate-950">{item.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">{item.description}</p>
            </li>
          ))}
        </ol>
        <Link
          href="#inquiry"
          className="inline-flex min-h-11 items-center justify-center gap-2 bg-brand-navy px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-navy-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 motion-reduce:transition-none"
        >
          {ctaLabel}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
