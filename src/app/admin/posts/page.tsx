import Link from "next/link";
import { readAllPosts, RESOURCE_CATEGORIES } from "@/lib/postsStore";
import { Plus, FileText, Edit3, ExternalLink } from "lucide-react";
import BlogCampaignImporter from "@/components/admin/BlogCampaignImporter";

const CATEGORY_LABEL: Record<string, string> = Object.fromEntries(
  RESOURCE_CATEGORIES.map((c) => [c.value, c.label.split(" (")[0]]),
);

export const dynamic = "force-dynamic";

export default async function PostsPage() {
  const posts = await readAllPosts();
  const published = posts.filter((p) => p.published).length;
  const campaignCount = posts.filter((p) => p.campaignId === "middle-east-thermal-paper-p0-2026").length;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="flex items-center gap-2 text-2xl font-bold text-slate-900">
            <FileText className="h-6 w-6 text-blue-700" aria-hidden="true" /> 文章管理
          </h1>
          <p className="text-slate-500 mt-1">
            共 <b>{posts.length}</b> 篇，已发布 <b className="text-emerald-600">{published}</b> 篇。
          </p>
        </div>
        <Link
          href="/admin/posts/new"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-2 font-medium"
        >
          <Plus size={16} /> 写新文章
        </Link>
      </div>

      <BlogCampaignImporter importedCount={campaignCount} />

      {posts.length === 0 ? (
        <div className="bg-white rounded-2xl p-16 border border-slate-200 text-center">
          <FileText className="mx-auto text-slate-300 mb-4" size={48} />
          <h3 className="text-lg font-medium text-slate-900">还没有文章</h3>
          <p className="text-slate-500 text-sm mt-2 mb-6">
            发布博客可以为您的网站带来源源不断的自然流量。
          </p>
          <Link
            href="/admin/posts/new"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium"
          >
            <Plus size={16} /> 写第一篇文章
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 py-3">标题</th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 py-3 hidden md:table-cell">状态</th>
                <th className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 py-3 hidden lg:table-cell">更新时间</th>
                <th className="text-right text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 py-3">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-slate-50">
                  <td className="px-4 py-3">
                    <div className="font-medium text-slate-900">{post.title}</div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <code className="text-xs text-slate-400">/blog/{post.slug}</code>
                      {post.category && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 font-medium">
                          {CATEGORY_LABEL[post.category] || post.category}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3 hidden md:table-cell">
                    {post.published ? (
                      <span className="px-2 py-0.5 text-xs rounded bg-emerald-100 text-emerald-700">已发布</span>
                    ) : post.scheduledAt ? (
                      <div>
                        <span className={`px-2 py-0.5 text-xs rounded ${post.publishApproved ? "bg-blue-100 text-blue-700" : "bg-amber-100 text-amber-800"}`}>
                          {post.publishApproved ? "已批准排期" : "待审核排期"}
                        </span>
                        <div className="mt-1 text-xs text-slate-400">
                          {new Date(post.scheduledAt).toLocaleString("zh-CN")}
                        </div>
                      </div>
                    ) : (
                      <span className="px-2 py-0.5 text-xs rounded bg-slate-100 text-slate-600">草稿</span>
                    )}
                  </td>
                  <td className="px-4 py-3 hidden lg:table-cell text-sm text-slate-500">
                    {new Date(post.updatedAt).toLocaleString("zh-CN")}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="inline-flex gap-2">
                      <Link
                        href={`/admin/posts/${post.id}`}
                        className="px-3 py-1.5 text-sm border border-slate-200 hover:bg-slate-50 rounded-lg flex items-center gap-1.5"
                      >
                        <Edit3 size={13} /> 编辑
                      </Link>
                      {post.published && (
                        <Link
                          href={`/blog/${post.slug}`}
                          target="_blank"
                          className="p-1.5 text-sm border border-slate-200 hover:bg-slate-50 rounded-lg"
                          title="查看"
                        >
                          <ExternalLink size={13} />
                        </Link>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
