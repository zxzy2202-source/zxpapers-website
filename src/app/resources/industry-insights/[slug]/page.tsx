import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Layout from "@/components/layout/Layout";
import { getPost } from "@/lib/postsStore";
import { renderMarkdown } from "@/lib/markdown";
import { r2Image } from "@/lib/r2";
import Image from "next/image";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post || !post.published) return {};

  return {
    title: post.metaTitle || `${post.title} | Industry Insights`,
    description: post.metaDescription || post.excerpt,
    keywords: post.metaKeywords,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <Layout>
      <article className="bg-white">
        {/* Header */}
        <header className="bg-slate-50 border-b border-slate-200 py-16">
          <div className="container max-w-4xl">
            <Link
              href="/resources/industry-insights"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#0F2B5B] mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Insights
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Industry Insight
              </span>
              {post.publishedAt && (
                <div className="flex items-center gap-1.5 text-slate-400 text-sm">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
              )}
            </div>

            <h1 className="font-sora text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="text-xl text-slate-600 leading-relaxed font-light">
                {post.excerpt}
              </p>
            )}
          </div>
        </header>

        {/* Featured Image */}
        {post.cover && (
          <div className="container max-w-4xl -mt-10 mb-12">
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src={r2Image(post.cover)}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}

        {/* Content */}
        <div className="container max-w-3xl py-12">
          <div
            className="prose prose-slate prose-lg max-w-none prose-headings:font-sora prose-headings:font-bold prose-a:text-[#0F2B5B] prose-img:rounded-xl"
            dangerouslySetInnerHTML={{
              __html: post.content
                ? renderMarkdown(post.content)
                : "<p>Content is being prepared...</p>",
            }}
          />

          <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-slate-400" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">Zhixin Paper Editorial</div>
                <div className="text-xs text-slate-500">Market Research Team</div>
              </div>
            </div>
            <Link
              href="/contact"
              className="bg-[#0F2B5B] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#1a3d7a] transition-colors"
            >
              Contact Specialist
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
}
