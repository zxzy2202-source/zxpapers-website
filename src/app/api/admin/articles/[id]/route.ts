import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// GET /api/admin/articles/[id] - 获取文章详情（含 content）
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const article = await prisma.article.findUnique({ where: { id } });

  if (!article) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(article);
}

// PUT /api/admin/articles/[id] - 更新文章
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const body = await request.json();
  const {
    title, slug, excerpt, content, category,
    tags, status, coverImage, metaTitle, metaDesc, keywords,
  } = body;

  const existing = await prisma.article.findUnique({ where: { id } });
  if (!existing) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const article = await prisma.article.update({
    where: { id },
    data: {
      title, slug, excerpt, content,
      category: category || existing.category,
      tags: tags ?? existing.tags,
      status, coverImage, metaTitle, metaDesc,
      keywords: keywords ?? existing.keywords,
      publishedAt:
        status === "PUBLISHED" && !existing.publishedAt
          ? new Date()
          : existing.publishedAt,
      updatedAt: new Date(),
    },
  });

  return NextResponse.json({ success: true, article });
}

// DELETE /api/admin/articles/[id] - 删除文章
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  await prisma.article.delete({ where: { id } });

  return NextResponse.json({ success: true });
}
