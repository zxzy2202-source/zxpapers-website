"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, ArrowRight, CalendarDays } from "lucide-react";
import { r2Image } from "@/lib/r2";
import { RESOURCE_CATEGORIES } from "@/lib/postsCategories";

export interface BlogCardPost {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  cover?: string;
  category?: string;
  publishedAt?: string;
}

const CATEGORY_LABEL: Record<string, string> = Object.fromEntries(
  RESOURCE_CATEGORIES.map((c) => [c.value, c.label.replace(/\s*\(.*\)\s*/, "")])
);

function formatDate(iso?: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function BlogSearchGrid({ posts }: { posts: BlogCardPost[] }) {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<string>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const matchesCat = activeCat === "all" || p.category === activeCat;
      const matchesQ =
        !q ||
        p.title.toLowerCase().includes(q) ||
        (p.excerpt?.toLowerCase().includes(q) ?? false);
      return matchesCat && matchesQ;
    });
  }, [posts, query, activeCat]);

  const cats = useMemo(() => {
    const present = new Set(posts.map((p) => p.category).filter(Boolean) as string[]);
    return RESOURCE_CATEGORIES.filter((c) => present.has(c.value));
  }, [posts]);

  return (
    <div>
      {/* Search + category filter bar */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles…"
            aria-label="Search articles"
            className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-9 pr-3 text-sm text-slate-700 placeholder:text-slate-400 focus-visible:border-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy/30"
          />
        </div>
        {cats.length > 0 && (
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveCat("all")}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy/40 ${
                activeCat === "all" ? "bg-brand-navy text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              All
            </button>
            {cats.map((c) => (
              <button
                key={c.value}
                type="button"
                onClick={() => setActiveCat(c.value)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy/40 ${
                  activeCat === c.value ? "bg-brand-navy text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {CATEGORY_LABEL[c.value]}
              </button>
            ))}
          </div>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-200 bg-white py-16 text-center">
          <p className="text-slate-500">No articles match your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {filtered.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:-translate-y-0.5 hover:border-brand-navy/30 hover:shadow-lg"
            >
              <Link href={`/blog/${post.slug}`} className="block focus-visible:outline-none">
                <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                  {post.cover ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={r2Image(post.cover)}
                      alt={post.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-slate-300">
                      <span className="text-sm font-semibold uppercase tracking-widest">ZhixinPaper</span>
                    </div>
                  )}
                </div>
              </Link>
              <div className="flex flex-1 flex-col p-5">
                {post.category && (
                  <Link
                    href={`/resources/${post.category}`}
                    className="mb-2 inline-flex w-fit items-center rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-amber-700 transition-colors hover:bg-amber-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                  >
                    {CATEGORY_LABEL[post.category] ?? post.category}
                  </Link>
                )}
                <h2 className="text-lg font-semibold leading-snug text-slate-900">
                  <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-brand-navy focus-visible:outline-none focus-visible:underline">
                    {post.title}
                  </Link>
                </h2>
                {post.excerpt && (
                  <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-slate-500">{post.excerpt}</p>
                )}
                <div className="mt-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                    {formatDate(post.publishedAt)}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-brand-navy transition-colors hover:text-brand-navy-hover focus-visible:outline-none focus-visible:underline"
                  >
                    Read more <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
