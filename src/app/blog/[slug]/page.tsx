import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, MessageSquare, CalendarDays, Clock3 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { getPost, getPublishedPosts, getPublishedPostsByCategory } from "@/lib/postsStore";
import { extractMarkdownHeadings, renderMarkdown } from "@/lib/markdown";
import { RESOURCE_CATEGORIES, type ResourceCategory } from "@/lib/postsCategories";
import { SITE } from "@/config/siteData";
import { r2Image } from "@/lib/r2";

export const revalidate = 3600; // 1 hour: blog posts change infrequently

const CATEGORY_LABEL: Record<string, string> = Object.fromEntries(
  RESOURCE_CATEGORIES.map((c) => [c.value, c.label.replace(/\s*\(.*\)\s*/, "")])
);

export async function generateStaticParams() {
  const posts = await getPublishedPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Not Found" };

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    keywords: post.metaKeywords,
    alternates: { canonical: `${SITE.domain}/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      images: post.cover ? [r2Image(post.cover)] : undefined,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      images: post.cover ? [r2Image(post.cover)] : undefined,
    },
  };
}

function formatDate(iso?: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function readingMinutes(content: string) {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post || !post.published) notFound();

  const html = renderMarkdown(post.content);
  const tableOfContents = extractMarkdownHeadings(post.content);
  const cover = post.cover ? r2Image(post.cover) : undefined;
  const categoryLabel = post.category ? CATEGORY_LABEL[post.category] ?? post.category : undefined;

  // Related posts (same category, excluding current) → fallback to recent.
  let related = post.category
    ? (await getPublishedPostsByCategory(post.category as ResourceCategory)).filter((p) => p.slug !== post.slug)
    : [];
  if (related.length === 0) {
    related = (await getPublishedPosts()).filter((p) => p.slug !== post.slug);
  }
  related = related.slice(0, 4);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE.domain}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE.domain}/blog/${post.slug}` },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    ...(cover ? { image: cover } : {}),
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE.domain}/blog/${post.slug}` },
    author: { "@id": `${SITE.domain}/#organization` },
    publisher: { "@id": `${SITE.domain}/#organization` },
  };

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Breadcrumb */}
      <div className="border-b border-slate-200 bg-slate-50 py-3">
        <div className="container text-sm text-slate-500">
          <Link href="/" className="hover:text-brand-navy">Home</Link>
          <span className="mx-1">/</span>
          <Link href="/blog" className="hover:text-brand-navy">Blog</Link>
          <span className="mx-1">/</span>
          <span className="line-clamp-1 font-medium text-slate-700">{post.title}</span>
        </div>
      </div>

      <div className="container py-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
          {/* Article */}
          <article className="min-w-0">
            <Link
              href="/blog"
              className="mb-6 inline-flex items-center gap-1 text-sm text-slate-500 transition-colors hover:text-brand-navy focus-visible:outline-none focus-visible:underline"
            >
              <ArrowLeft size={14} aria-hidden="true" /> Back to Blog
            </Link>

            {categoryLabel && (
              <Link
                href={`/resources/${post.category}`}
                className="mb-4 inline-flex w-fit items-center rounded-full bg-amber-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-amber-700 transition-colors hover:bg-amber-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
              >
                {categoryLabel}
              </Link>
            )}

            <h1 className="max-w-4xl text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              {post.title}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                {post.publishedAt ? `Published ${formatDate(post.publishedAt)}` : ""}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="h-4 w-4" aria-hidden="true" />
                {readingMinutes(post.content)} min read
              </span>
            </div>

            {cover && (
              <div className="mt-8 aspect-[21/9] w-full overflow-hidden rounded-2xl bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={cover} alt={post.coverAlt || post.title} className="h-full w-full object-cover" />
              </div>
            )}

            {tableOfContents.filter((heading) => heading.level === 2).length >= 3 ? (
              <nav aria-label="Article contents" className="mt-8 max-w-3xl border-y border-slate-200 py-5">
                <h2 className="text-sm font-bold uppercase text-slate-900">In this guide</h2>
                <ol className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                  {tableOfContents.filter((heading) => heading.level === 2).map((heading) => (
                    <li key={heading.id} className="text-sm font-medium">
                      <a href={`#${heading.id}`} className="text-slate-600 hover:text-brand-navy hover:underline">
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            ) : null}

            <div className="prose-content mt-10 max-w-3xl" dangerouslySetInnerHTML={{ __html: html }} />

            {/* Bottom CTA */}
            <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:flex-row sm:items-center">
              <div>
                <p className="text-base font-semibold text-slate-900">Need thermal paper, labels, or NCR forms?</p>
                <p className="mt-1 text-sm text-slate-500">Factory-direct bulk pricing and OEM quotes within 24 hours.</p>
              </div>
              <Link
                href="/contact"
                className="inline-flex flex-shrink-0 items-center gap-2 rounded-md bg-brand-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-navy-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy/40"
              >
                <MessageSquare className="h-4 w-4" aria-hidden="true" /> Get a Quote
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            {related.length > 0 && (
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">Related Articles</h2>
                <ul className="mt-3 space-y-4">
                  {related.map((p) => (
                    <li key={p.id}>
                      <Link href={`/blog/${p.slug}`} className="group flex gap-3 focus-visible:outline-none">
                        <span className="h-14 w-16 flex-shrink-0 overflow-hidden rounded-md bg-slate-100">
                          {p.cover ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={r2Image(p.cover)} alt={p.coverAlt || p.title} loading="lazy" className="h-full w-full object-cover" />
                          ) : (
                            <span className="flex h-full w-full items-center justify-center text-[9px] font-semibold uppercase tracking-wider text-slate-300">ZXP</span>
                          )}
                        </span>
                        <span className="min-w-0">
                          <span className="line-clamp-2 text-sm font-medium leading-snug text-slate-800 transition-colors group-hover:text-brand-navy">
                            {p.title}
                          </span>
                          {p.publishedAt && (
                            <span className="mt-1 block text-xs text-slate-400">{formatDate(p.publishedAt)}</span>
                          )}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

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

            {/* CTA */}
            <div className="rounded-2xl border border-brand-navy/20 bg-brand-navy-alt p-5 text-white">
              <h2 className="text-sm font-bold uppercase tracking-wider text-amber-300">Get a Quote</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">
                Factory-direct thermal paper, labels, and NCR forms — bulk pricing and OEM in 24 hours.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-amber-500 px-3 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <MessageSquare className="h-4 w-4" aria-hidden="true" /> Contact Sales
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
}
