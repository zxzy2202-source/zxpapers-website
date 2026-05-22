/**
 * 资源中心子页底部的「Latest Articles」区块
 * - 拉对应 category 的已发布文章，渲染 3 列卡片
 * - 文章数量 = 0 时整个区块不渲染（避免出现空架子）
 * - 详情页统一走 /blog/[slug]（已有路由）
 */
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, FileText } from "lucide-react";
import { getPublishedPostsByCategory, type ResourceCategory } from "@/lib/postsStore";
import { r2Image } from "@/lib/r2";

interface Props {
  category: ResourceCategory;
  /** 卡片区块标题，例: "Latest Application Cases" */
  title?: string;
  /** 卡片区块副标题 */
  subtitle?: string;
  /** 最多展示几篇，默认 6 */
  limit?: number;
}

export default async function LatestArticles({
  category,
  title = "Latest Articles",
  subtitle = "In-depth content updated regularly by our editorial team.",
  limit = 6,
}: Props) {
  const posts = await getPublishedPostsByCategory(category, limit);
  if (posts.length === 0) return null;

  return (
    <section className="bg-gradient-to-b from-white to-slate-50 border-t border-slate-100 py-20">
      <div className="container">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
              <FileText className="w-4 h-4" /> Editorial Updates
            </div>
            <h2 className="font-sora text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">
              {title}
            </h2>
            <p className="text-slate-600 leading-relaxed">{subtitle}</p>
          </div>
          <Link
            href="/blog"
            className="font-sora inline-flex items-center gap-1.5 text-sm font-bold text-[#0F2B5B] hover:gap-2.5 transition-all"
          >
            View all articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[#0F2B5B] hover:shadow-xl transition-all flex flex-col"
            >
              {post.cover ? (
                <div className="relative aspect-[16/9] bg-slate-100 overflow-hidden">
                  <Image
                    src={r2Image(post.cover)}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className="aspect-[16/9] bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  <FileText className="w-12 h-12 text-slate-300" />
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
                {post.publishedAt && (
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                )}
                <h3 className="font-sora font-bold text-lg text-slate-900 group-hover:text-[#0F2B5B] transition-colors mb-2 line-clamp-2 leading-snug">
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4 flex-1">
                    {post.excerpt}
                  </p>
                )}
                <span className="font-sora inline-flex items-center gap-1.5 text-sm font-bold text-amber-600 group-hover:gap-2.5 transition-all mt-auto">
                  Read article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
