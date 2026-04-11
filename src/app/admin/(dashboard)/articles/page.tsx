import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Plus, FileText, ExternalLink, Search } from "lucide-react";
import DeleteArticleButton from "@/components/admin/DeleteArticleButton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface PageProps {
  searchParams: Promise<{ status?: string; category?: string; q?: string }>;
}

const CATEGORY_LABELS: Record<string, string> = {
  INDUSTRY_INSIGHTS: "行业资讯",
  PRODUCT_GUIDES: "产品指南",
  COMPANY_NEWS: "公司动态",
  TECHNICAL_TIPS: "技术干货",
  CASE_STUDIES: "案例分析",
  MARKET_TRENDS: "市场趋势",
};

const STATUS_VARIANTS: Record<string, "default" | "secondary" | "outline"> = {
  PUBLISHED: "default",
  DRAFT: "secondary",
};

const STATUS_LABELS: Record<string, string> = {
  PUBLISHED: "已发布",
  DRAFT: "草稿",
};

const FILTER_TABS = [
  { label: "全部", key: "all", href: "/admin/articles" },
  { label: "已发布", key: "PUBLISHED", href: "/admin/articles?status=PUBLISHED" },
  { label: "草稿", key: "DRAFT", href: "/admin/articles?status=DRAFT" },
  { label: "行业资讯", key: "INDUSTRY_INSIGHTS", href: "/admin/articles?category=INDUSTRY_INSIGHTS" },
  { label: "产品指南", key: "PRODUCT_GUIDES", href: "/admin/articles?category=PRODUCT_GUIDES" },
  { label: "公司动态", key: "COMPANY_NEWS", href: "/admin/articles?category=COMPANY_NEWS" },
  { label: "技术干货", key: "TECHNICAL_TIPS", href: "/admin/articles?category=TECHNICAL_TIPS" },
  { label: "案例分析", key: "CASE_STUDIES", href: "/admin/articles?category=CASE_STUDIES" },
  { label: "市场趋势", key: "MARKET_TRENDS", href: "/admin/articles?category=MARKET_TRENDS" },
];

export default async function ArticlesPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const status = params.status;
  const category = params.category;
  const q = params.q?.trim();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const where: Record<string, any> = {};
  if (status) where.status = status;
  if (category) where.category = category;
  if (q) {
    where.OR = [
      { title: { contains: q, mode: "insensitive" } },
      { slug: { contains: q, mode: "insensitive" } },
    ];
  }

  const [articles, total, publishedCount, draftCount] = await Promise.all([
    prisma.article.findMany({
      where,
      orderBy: { updatedAt: "desc" },
      select: {
        id: true,
        title: true,
        slug: true,
        category: true,
        status: true,
        updatedAt: true,
        publishedAt: true,
      },
    }),
    prisma.article.count({ where }),
    prisma.article.count({ where: { status: "PUBLISHED" } }),
    prisma.article.count({ where: { status: "DRAFT" } }),
  ]);

  const activeKey = status || category || "all";

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">文章管理</h1>
          <p className="text-gray-500 text-sm mt-1">
            共 {total} 篇 · 已发布 {publishedCount} · 草稿 {draftCount}
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/articles/new">
            <Plus className="w-4 h-4 mr-1.5" />
            新建文章
          </Link>
        </Button>
      </div>

      {/* Search + Filters */}
      <div className="space-y-3">
        {/* Search bar */}
        <form method="GET" action="/admin/articles" className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          <input
            type="text"
            name="q"
            defaultValue={q}
            placeholder="搜索文章标题或 slug..."
            className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {status && <input type="hidden" name="status" value={status} />}
          {category && <input type="hidden" name="category" value={category} />}
        </form>

        {/* Filter tabs */}
        <div className="flex gap-2 flex-wrap">
          {FILTER_TABS.map((tab) => {
            const isActive =
              tab.key === "all"
                ? activeKey === "all"
                : activeKey === tab.key;
            return (
              <Link
                key={tab.key}
                href={q ? `${tab.href}&q=${encodeURIComponent(q)}` : tab.href}
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors ${
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
      </div>

      {/* Articles Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        {articles.length === 0 ? (
          <div className="py-16 text-center text-gray-400">
            <FileText className="w-12 h-12 mx-auto mb-3 text-gray-300" />
            {q ? (
              <>
                <p className="text-sm font-medium text-gray-500">未找到与 &ldquo;{q}&rdquo; 相关的文章</p>
                <Button variant="link" asChild className="mt-2 text-blue-600 text-sm">
                  <Link href="/admin/articles">清除搜索</Link>
                </Button>
              </>
            ) : (
              <>
                <p className="text-sm">暂无文章</p>
                <Button variant="link" asChild className="mt-2 text-blue-600 text-sm">
                  <Link href="/admin/articles/new">创建第一篇文章 →</Link>
                </Button>
              </>
            )}
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="w-[45%]">标题</TableHead>
                <TableHead className="hidden md:table-cell">分类</TableHead>
                <TableHead>状态</TableHead>
                <TableHead className="hidden sm:table-cell">更新时间</TableHead>
                <TableHead className="text-right">操作</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {articles.map((article) => (
                <TableRow key={article.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium text-gray-900 line-clamp-1">{article.title}</p>
                      <p className="text-gray-400 text-xs mt-0.5">/resources/{article.slug}</p>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-600 hidden md:table-cell">
                    {CATEGORY_LABELS[article.category] || article.category}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={STATUS_VARIANTS[article.status] ?? "outline"}
                      className={
                        article.status === "PUBLISHED"
                          ? "bg-green-100 text-green-700 hover:bg-green-100 border-green-200"
                          : "bg-yellow-100 text-yellow-700 hover:bg-yellow-100 border-yellow-200"
                      }
                    >
                      {STATUS_LABELS[article.status] || article.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-400 text-xs hidden sm:table-cell">
                    {new Date(article.updatedAt).toLocaleDateString("zh-CN", {
                      year: "numeric",
                      month: "numeric",
                      day: "numeric",
                    })}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="sm" asChild className="text-blue-600 hover:text-blue-700 h-7 px-2 text-xs">
                        <Link href={`/admin/articles/${article.id}`}>编辑</Link>
                      </Button>
                      {article.status === "PUBLISHED" && (
                        <Button variant="ghost" size="sm" asChild className="text-gray-400 hover:text-gray-600 h-7 px-2 text-xs">
                          <Link href={`/resources/${article.slug}`} target="_blank">
                            查看 <ExternalLink className="w-3 h-3 ml-1" />
                          </Link>
                        </Button>
                      )}
                      <DeleteArticleButton articleId={article.id} />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>

      {/* Pagination hint when results are truncated */}
      {total > 50 && (
        <p className="text-xs text-gray-400 text-center">
          显示最新 {articles.length} 篇，共 {total} 篇。使用搜索或筛选缩小范围。
        </p>
      )}
    </div>
  );
}
