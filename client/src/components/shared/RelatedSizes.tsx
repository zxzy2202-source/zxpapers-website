// RelatedSizes component — cross-links between size pages for internal linking SEO
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { paperRollSizes, labelSizes } from "@/config/navigation";

interface RelatedSizesProps {
  currentSlug: string;
  type: "rolls" | "labels";
}

export default function RelatedSizes({ currentSlug, type }: RelatedSizesProps) {
  const sizes = type === "rolls" ? paperRollSizes : labelSizes;
  const basePath = type === "rolls"
    ? "/products/thermal-paper-rolls/sizes"
    : "/products/thermal-labels/sizes";

  const related = sizes.filter((s) => s.slug !== currentSlug).slice(0, 3);

  return (
    <div className="mt-10 pt-8 border-t border-slate-100">
      <h3 className="text-lg font-bold text-slate-900 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>
        Related Sizes
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {related.map((size) => (
          <Link
            key={size.slug}
            href={`${basePath}/${size.slug}`}
            className="group flex items-center justify-between p-4 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 rounded-xl transition-all duration-200"
          >
            <div>
              <div className="font-semibold text-slate-800 group-hover:text-blue-700 text-sm" style={{ fontFamily: "Sora, sans-serif" }}>
                {size.label}
              </div>
              {size.badge && (
                <span className="text-[10px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium mt-1 inline-block">
                  {size.badge}
                </span>
              )}
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
          </Link>
        ))}
      </div>
    </div>
  );
}
