import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { readAllPosts, upsertPost, deletePost } from "@/lib/postsStore";
import { revalidatePath } from "next/cache";
import { pingIndexNow } from "@/lib/indexnow";
import { RESOURCE_CATEGORIES } from "@/lib/postsCategories";

export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "未登录" }, { status: 401 });
  }
  const posts = await readAllPosts();
  return NextResponse.json({ posts });
}

export async function POST(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "未登录" }, { status: 401 });
  }
  try {
    const body = await req.json();
    if (!body.title || !body.content) {
      return NextResponse.json({ error: "标题和内容必填" }, { status: 400 });
    }
    const post = await upsertPost(body);

    // ── 缓存失效：博客列表页 + 文章详情页 ──────────────────────────────
    revalidatePath("/blog");
    revalidatePath(`/blog/${post.slug}`);

    // ── 缓存失效：若文章属于某个资源分类，同步刷新对应 /resources/{category} ──
    if (post.category) {
      revalidatePath(`/resources/${post.category}`);
    }

    // ── 缓存失效：sitemap（含新文章 URL）──────────────────────────────
    revalidatePath("/sitemap.xml");

    // ── IndexNow：仅已发布文章才通知搜索引擎 ────────────────────────────
    if (post.published) {
      pingIndexNow([
        `https://www.zxpapers.com/blog/${post.slug}`,
        "https://www.zxpapers.com/blog",
        "https://www.zxpapers.com/sitemap.xml",
      ]).catch(() => {});
    }

    return NextResponse.json({ success: true, post });
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "保存失败" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "未登录" }, { status: 401 });
  }
  const { id, category, slug } = await req.json();
  await deletePost(id);

  // ── 缓存失效：博客列表页 ───────────────────────────────────────────
  revalidatePath("/blog");

  // ── 缓存失效：文章详情页（如果前端传了 slug）────────────────────────
  if (slug) {
    revalidatePath(`/blog/${slug}`);
  }

  // ── 缓存失效：资源分类页（如果文章有分类）────────────────────────────
  if (category) {
    revalidatePath(`/resources/${category}`);
  }

  // ── 缓存失效：sitemap ────────────────────────────────────────────
  revalidatePath("/sitemap.xml");

  return NextResponse.json({ success: true });
}
