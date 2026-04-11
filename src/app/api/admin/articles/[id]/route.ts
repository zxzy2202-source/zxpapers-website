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

  try {
    const article = await prisma.article.findUnique({ where: { id } });

    if (!article) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json(article);
  } catch (error) {
    console.error("Error fetching article:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
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

  try {
    const body = await request.json();
    const {
      title, slug, excerpt, content, category,
      tags, status, coverImage, metaTitle, metaDesc, keywords,
    } = body;

    const existing = await prisma.article.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    // 校验 slug 唯一性（排除当前文章）
    if (slug && slug !== existing.slug) {
      const slugConflict = await prisma.article.findUnique({ where: { slug } });
      if (slugConflict) {
        return NextResponse.json(
          { error: `Slug "${slug}" is already in use by another article` },
          { status: 409 }
        );
      }
    }

    // 校验 status 白名单
    const validStatuses = ["DRAFT", "PUBLISHED"];
    if (status !== undefined && !validStatuses.includes(status)) {
      return NextResponse.json(
        { error: `Invalid status. Must be one of: ${validStatuses.join(", ")}` },
        { status: 400 }
      );
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
  } catch (error) {
    console.error("Error updating article:", error);
    if ((error as { code?: string }).code === "P2025") {
      return NextResponse.json({ error: "Article not found" }, { status: 404 });
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
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

  try {
    await prisma.article.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting article:", error);
    if ((error as { code?: string }).code === "P2025") {
      return NextResponse.json({ error: "Article not found" }, { status: 404 });
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
