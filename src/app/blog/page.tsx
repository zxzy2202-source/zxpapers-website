import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, MessageSquare, Phone } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { getPublishedPosts } from "@/lib/postsStore";
import { RESOURCE_CATEGORIES } from "@/lib/postsCategories";
import { SITE } from "@/config/siteData";
import { r2Image } from "@/lib/r2";
import BlogSearchGrid, { type BlogCardPost } from "@/components/blog/BlogSearchGrid";

export const metadata: Metadata = {
  title: { absolute: "Thermal Paper Guides & Insights | ZhixinPaper" },
  description:
    "Read practical guides on thermal paper rolls, labels, NCR forms, specifications, applications, compliance questions and OEM procurement workflows.",
  alternates: { canonical: `${SITE.domain}/blog` },
};

const CATEGORY_LABEL: Record<string, string> = Object.fromEntries(
  RESOURCE_CATEGORIES.map((c) => [c.value, c.label.replace(/\s*\(.*\)\s*/, "")])
);

export const revalidate = 3600; // 1 hour: new posts appear infrequently

export default async function BlogListPage() {
  const posts = await getPublishedPosts();
  const cards: BlogCardPost[] = posts.map((p) => ({
    id: p.id,
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    cover: p.cover,
    category: p.category,
    publishedAt: p.publishedAt,
  }));
  const recent = posts.slice(0, 5);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE.domain}/blog` },
    ],
  };
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "ZhixinPaper Blog",
    description:
      "Guides, market analyses, and product knowledge on thermal paper, labels, NCR forms, and OEM manufacturing.",
    url: `${SITE.domain}/blog`,
    publisher: { "@id": `${SITE.domain}/#organization` },
    blogPost: posts.slice(0, 20).map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${SITE.domain}/blog/${p.slug}`,
      datePublished: p.publishedAt,
      ...(p.cover ? { image: r2Image(p.cover) } : {}),
    })),
  };

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />

      {/* Breadcrumb */}
      <div className="border-b border-slate-200 bg-slate-50 py-3">
        <div className="container text-sm text-slate-500">
          <Link href="/" className="hover:text-brand-navy">Home</Link>
          <span className="mx-1">/</span>
          <span className="font-medium text-slate-700">Blog</span>
        </div>
      </div>

      {/* Hero */}
      <header className="bg-brand-navy-alt py-14 text-white">
        <div className="container">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">Insights & Resources</p>
          <h1 className="text-3xl font-extrabold sm:text-4xl">Thermal Paper Blog & Industry Insights</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
            Guides, market analyses, and product knowledge on thermal paper rolls, labels, NCR forms, and OEM
            manufacturing — from a factory-direct supplier serving 80+ countries since 2009.
          </p>
        </div>
      </header>

      <div className="container py-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
          {/* Main: search + grid */}
          <main>
            {cards.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-slate-200 bg-white py-16 text-center">
                <p className="text-slate-500">No published articles yet. Check back soon!</p>
              </div>
            ) : (
              <BlogSearchGrid posts={cards} />
            )}
          </main>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            {/* Categories */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">Categories</h2>
              <ul className="mt-3 space-y-1">
                {RESOURCE_CATEGORIES.map((c) => (
                  <li key={c.value}>
                    <Link
                      href={`/resources/${c.value}`}
                      className="flex items-center justify-between rounded-md px-2 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-50 hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy/30"
                    >
                      {CATEGORY_LABEL[c.value]}
                      <ArrowRight className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Most popular / recent */}
            {recent.length > 0 && (
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">Most Popular</h2>
                <ul className="mt-3 space-y-4">
                  {recent.map((p) => (
                    <li key={p.id}>
                      <Link
                        href={`/blog/${p.slug}`}
                        className="group flex gap-3 focus-visible:outline-none"
                      >
                        <span className="h-14 w-16 flex-shrink-0 overflow-hidden rounded-md bg-slate-100">
                          {p.cover ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={r2Image(p.cover)} alt={p.title} loading="lazy" className="h-full w-full object-cover" />
                          ) : (
                            <span className="flex h-full w-full items-center justify-center text-[9px] font-semibold uppercase tracking-wider text-slate-300">ZXP</span>
                          )}
                        </span>
                        <span className="min-w-0">
                          <span className="line-clamp-2 text-sm font-medium leading-snug text-slate-800 transition-colors group-hover:text-brand-navy">
                            {p.title}
                          </span>
                          {p.publishedAt && (
                            <span className="mt-1 block text-xs text-slate-400">
                              {new Date(p.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                            </span>
                          )}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Contact / CTA */}
            <div className="rounded-2xl border border-brand-navy/20 bg-brand-navy-alt p-5 text-white">
              <h2 className="text-sm font-bold uppercase tracking-wider text-amber-300">Need a Quote?</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">
                Factory-direct thermal paper, labels, and NCR forms — bulk pricing and OEM in 24 hours.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-amber-500 px-3 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <MessageSquare className="h-4 w-4" aria-hidden="true" />
                Get a Quote
              </Link>
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/20 px-3 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                WhatsApp Us
              </a>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
}
