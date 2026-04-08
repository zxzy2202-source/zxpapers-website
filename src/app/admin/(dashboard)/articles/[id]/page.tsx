import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import ArticleEditor from "@/components/admin/ArticleEditor";
import Link from "next/link";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditArticlePage({ params }: PageProps) {
  const { id } = await params;

  const article = await prisma.article.findUnique({ where: { id } });

  if (!article) notFound();

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3">
        <Link
          href="/admin/articles"
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Edit Article</h1>
          <p className="text-gray-500 text-sm mt-0.5 line-clamp-1">{article.title}</p>
        </div>
      </div>
      <ArticleEditor article={article} />
    </div>
  );
}
