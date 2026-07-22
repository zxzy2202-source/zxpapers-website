import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { pingIndexNow } from "@/lib/indexnow";
import { publishDuePosts } from "@/lib/postsStore";
import { prepareBlogPostCover } from "@/lib/feishuAssetLibrary";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const secret = process.env.CRON_SECRET;
  if (!secret) {
    return NextResponse.json({ error: "CRON_SECRET is not configured" }, { status: 503 });
  }
  if (request.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const result = await publishDuePosts(new Date(), prepareBlogPostCover);

  if (result.published.length > 0) {
    revalidatePath("/blog");
    revalidatePath("/sitemap.xml");
    for (const post of result.published) {
      revalidatePath(`/blog/${post.slug}`);
      if (post.category) revalidatePath(`/resources/${post.category}`);
    }

    const urls = result.published.map((post) => `https://www.zxpapers.com/blog/${post.slug}`);
    urls.push("https://www.zxpapers.com/blog", "https://www.zxpapers.com/sitemap.xml");
    await pingIndexNow(urls).catch(() => undefined);
  }

  return NextResponse.json({
    success: true,
    published: result.published.map((post) => post.slug),
    rejected: result.rejected,
  });
}
