import Link from "next/link";
import type { Metadata } from "next";
import { getPublishedPosts } from "@/lib/postsStore";
import { SITE } from "@/config/siteData";

export const revalidate = 60; // 1 分钟 ISR

export const metadata: Metadata = {
  title: "Blog | Industry Insights & Thermal Paper News",
  description: "Latest insights, guides, and industry trends about thermal paper, labels, and OEM manufacturing from ZhixinPaper.",
  alternates: { canonical: `${SITE.domain}/blog` },
};

export default async function BlogListPage() {
  const posts = await getPublishedPosts();

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">Blog & Industry Insights</h1>
          <p className="text-slate-300 mt-4 text-lg max-w-2xl">
            Latest guides, market analyses, and product knowledge on thermal paper, labels, and OEM manufacturing.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-slate-500">No published articles yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300 hover:shadow-lg transition"
              >
                {post.cover && (
                  <div className="aspect-video bg-slate-100 overflow-hidden">
                    <img
                      src={post.cover}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h2 className="font-semibold text-xl text-slate-900 group-hover:text-blue-600 transition">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-slate-500 text-sm mt-2 line-clamp-2">{post.excerpt}</p>
                  )}
                  <div className="text-xs text-slate-400 mt-4">
                    {post.publishedAt && new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
