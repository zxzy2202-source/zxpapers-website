import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { readAllPosts, upsertPost, deletePost } from "@/lib/postsStore";
import { revalidatePath } from "next/cache";
import { pingIndexNow } from "@/lib/indexnow";

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
    revalidatePath("/blog");
    revalidatePath(`/blog/${post.slug}`);
    // Fire-and-forget IndexNow ping (only for published posts).
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
  const { id } = await req.json();
  await deletePost(id);
  revalidatePath("/blog");
  return NextResponse.json({ success: true });
}
