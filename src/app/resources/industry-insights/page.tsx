import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/shared/InquiryForm";
import { ChevronRight } from "lucide-react";
import { SITE } from "@/config/siteData";
import { getPublishedPosts } from "@/lib/postsStore";
import { r2Image } from "@/lib/r2";

export const metadata: Metadata = {
  title: "Thermal Paper Industry Insights & Trends 2025",
  description:
    "In-depth market analysis, regulatory updates, and strategic insights for thermal paper distributors.",
  keywords:
    "thermal paper market 2025, BPA-free thermal paper regulation, thermal paper industry trends, thermal paper distribution strategy",
  alternates: { canonical: `${SITE.domain}/resources/industry-insights` },
};

export default async function IndustryInsightsPage() {
  const posts = await getPublishedPosts();

  return (
    <Layout>
      <div className="bg-[#0F2B5B] text-white py-14">
        <div className="container">
          <div className="flex items-center gap-2 mb-3">
            <Link
              href="/resources"
              className="text-amber-400 text-xs font-bold uppercase tracking-wider hover:underline"
            >
              Resources
            </Link>
            <span className="text-slate-500">·</span>
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
              Industry Insights
            </span>
          </div>
          <h1 className="font-sora text-3xl sm:text-4xl font-extrabold mb-3">
            Thermal Paper Industry
            <br />
            <span className="text-amber-400">Insights & Trends 2025</span>
          </h1>
          <p className="text-slate-300 max-w-2xl text-base">
            Market analysis, regulatory updates, and strategic insights for thermal paper
            distributors, buyers, and brand owners.
          </p>
        </div>
      </div>

      <div className="container py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            {posts.length > 0 ? (
              posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row">
                    {post.cover && (
                      <div className="relative w-full md:w-64 h-48 flex-shrink-0">
                        <Image
                          src={r2Image(post.cover)}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100 uppercase">
                            Market Insight
                          </span>
                          {post.publishedAt && (
                            <span className="text-[10px] text-slate-400">
                              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                                month: "long",
                                year: "numeric",
                              })}
                            </span>
                          )}
                        </div>
                        <h2 className="font-sora text-xl font-bold text-slate-900 mb-2 hover:text-[#0F2B5B] transition-colors">
                          <Link href={`/resources/industry-insights/${post.slug}`}>
                            {post.title}
                          </Link>
                        </h2>
                        <p className="text-slate-600 text-sm line-clamp-3 mb-4">
                          {post.excerpt}
                        </p>
                      </div>
                      <Link
                        href={`/resources/industry-insights/${post.slug}`}
                        className="text-sm font-bold text-[#0F2B5B] flex items-center gap-1 hover:underline"
                      >
                        Read Full Article <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="py-20 text-center border-2 border-dashed border-slate-100 rounded-2xl">
                <p className="text-slate-400">No insights published yet. Check back soon!</p>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="font-sora text-base font-bold text-slate-900 mb-1">Get a Free Quote</h3>
              <p className="text-xs text-slate-500 mb-4">12-hour response guaranteed</p>
              <InquiryForm compact />
            </div>
            <div className="bg-slate-50 rounded-2xl p-5">
              <h4 className="font-sora text-sm font-bold text-slate-900 mb-3">Related Resources</h4>
              <ul className="space-y-2">
                {[
                  { label: "OEM Guide", href: "/resources/oem-guide" },
                  { label: "Product Knowledge", href: "/resources/product-knowledge" },
                  { label: "Application Cases", href: "/resources/application-cases" },
                ].map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
