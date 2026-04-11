import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// GET /api/admin/articles - 获取文章列表
export async function GET(request: NextRequest) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status");
  const category = searchParams.get("category");
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "20");
  const skip = (page - 1) * limit;

  const where: Record<string, string> = {};
  if (status) where.status = status;
  if (category) where.category = category;

  const [articles, total] = await Promise.all([
    prisma.article.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        category: true,
        tags: true,
        status: true,
        coverImage: true,
        publishedAt: true,
        createdAt: true,
        updatedAt: true,
      },
    }),
    prisma.article.count({ where }),
  ]);

  return NextResponse.json({
    articles,
    total,
    page,
    totalPages: Math.ceil(total / limit),
  });
}

// POST /api/admin/articles - 创建文章
export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const {
      title, slug, excerpt, content, category,
      tags, status, coverImage, metaTitle, metaDesc, keywords,
    } = body;

    if (!title || !slug || !content) {
      return NextResponse.json(
        { error: "Title, slug and content are required" },
        { status: 400 }
      );
    }

    // Validate status
    const VALID_STATUSES = ["DRAFT", "PUBLISHED"];
    const finalStatus = VALID_STATUSES.includes(status) ? status : "DRAFT";

    // Check slug uniqueness
    const existing = await prisma.article.findUnique({ where: { slug } });
    if (existing) {
      return NextResponse.json(
        { error: "Slug already exists. Please use a different URL slug." },
        { status: 409 }
      );
    }

    const article = await prisma.article.create({
      data: {
        title, slug, excerpt, content,
        category: category || "INDUSTRY_INSIGHTS",
        tags: tags || "",
        status: finalStatus,
        coverImage, metaTitle, metaDesc,
        keywords: keywords || "",
        publishedAt: finalStatus === "PUBLISHED" ? new Date() : null,
      },
    });

    return NextResponse.json({ success: true, article }, { status: 201 });
  } catch (error) {
    console.error("Error creating article:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
