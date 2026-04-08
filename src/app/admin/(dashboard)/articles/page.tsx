import { prisma } from "@/lib/prisma";
import Link from "next/link";
import DeleteArticleButton from "@/components/admin/DeleteArticleButton";

interface PageProps {
  searchParams: Promise<{ status?: string; category?: string }>;
}

const CATEGORY_LABELS: Record<string, string> = {
  INDUSTRY_INSIGHTS: "Industry Insights",
  PRODUCT_GUIDES: "Product Guides",
};

const STATUS_COLORS: Record<string, string> = {
  PUBLISHED: "bg-green-100 text-green-700",
  DRAFT: "bg-yellow-100 text-yellow-700",
};

export default async function ArticlesPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const status = params.status;
  const category = params.category;

  const where: Record<string, string> = {};
  if (status) where.status = status;
  if (category) where.category = category;

  const [articles, total] = await Promise.all([
    prisma.article.findMany({
      where,
      orderBy: { updatedAt: "desc" },
    }),
    prisma.article.count({ where }),
  ]);

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Articles</h1>
          <p className="text-gray-500 text-sm mt-1">{total} total articles</p>
        </div>
        <Link
          href="/admin/articles/new"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New Article
        </Link>
      </div>

      {/* Filters */}
      <div className="flex gap-2 flex-wrap">
        {[
          { label: "All", href: "/admin/articles" },
          { label: "Published", href: "/admin/articles?status=PUBLISHED" },
          { label: "Drafts", href: "/admin/articles?status=DRAFT" },
          { label: "Industry Insights", href: "/admin/articles?category=INDUSTRY_INSIGHTS" },
          { label: "Product Guides", href: "/admin/articles?category=PRODUCT_GUIDES" },
        ].map((tab) => {
          const isActive =
            tab.href === "/admin/articles"
              ? !status && !category
              : tab.href.includes("status")
              ? status === tab.href.split("=")[1]
              : category === tab.href.split("=")[1];

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {tab.label}
            </Link>
          );
        })}
      </div>

      {/* Articles List */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        {articles.length === 0 ? (
          <div className="py-16 text-center text-gray-400">
            <svg className="w-12 h-12 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p className="text-sm">No articles found</p>
            <Link href="/admin/articles/new" className="text-blue-600 text-sm hover:underline mt-2 inline-block">
              Create your first article →
            </Link>
          </div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-5 py-3 font-medium text-gray-500">Title</th>
                <th className="text-left px-5 py-3 font-medium text-gray-500 hidden md:table-cell">Category</th>
                <th className="text-left px-5 py-3 font-medium text-gray-500">Status</th>
                <th className="text-left px-5 py-3 font-medium text-gray-500 hidden sm:table-cell">Updated</th>
                <th className="px-5 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {articles.map((article) => (
                <tr key={article.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-3.5">
                    <div>
                      <p className="font-medium text-gray-900 line-clamp-1">{article.title}</p>
                      <p className="text-gray-400 text-xs mt-0.5">/{article.slug}</p>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-gray-600 hidden md:table-cell">
                    {CATEGORY_LABELS[article.category] || article.category}
                  </td>
                  <td className="px-5 py-3.5">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${STATUS_COLORS[article.status] || "bg-gray-100 text-gray-600"}`}>
                      {article.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-gray-400 text-xs hidden sm:table-cell">
                    {new Date(article.updatedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <Link
                        href={`/admin/articles/${article.id}`}
                        className="text-blue-600 hover:text-blue-700 text-xs font-medium"
                      >
                        Edit
                      </Link>
                      {article.status === "PUBLISHED" && (
                        <Link
                          href={`/resources/${article.slug}`}
                          target="_blank"
                          className="text-gray-400 hover:text-gray-600 text-xs"
                        >
                          View ↗
                        </Link>
                      )}
                      <DeleteArticleButton articleId={article.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
