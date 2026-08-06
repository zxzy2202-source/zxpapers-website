import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { isAuthenticated } from "@/lib/auth";
import { importScheduledPosts } from "@/lib/postsStore";
import { getBlogCampaign } from "@/content/blogCampaigns/registry";

export async function POST(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "未登录" }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}));
  const campaign = getBlogCampaign(body.campaignId || "middle-east-thermal-paper-p0-2026");
  if (!campaign) {
    return NextResponse.json({ error: "未找到对应的内容排期" }, { status: 400 });
  }
  const startAt = new Date(body.startAt);
  if (Number.isNaN(startAt.getTime())) {
    return NextResponse.json({ error: "请选择有效的首篇发布时间" }, { status: 400 });
  }
  if (startAt.getTime() <= Date.now()) {
    return NextResponse.json({ error: "首篇发布时间必须晚于当前时间" }, { status: 400 });
  }

  const templates = campaign.posts.map((post, index) => ({
    ...post,
    campaignId: campaign.id,
    scheduledAt: new Date(
      startAt.getTime() + index * campaign.cadenceDays * 24 * 60 * 60 * 1000,
    ).toISOString(),
  }));
  const result = await importScheduledPosts(templates);

  revalidatePath("/admin/posts");
  return NextResponse.json({
    success: true,
    campaign: campaign.id,
    created: result.created.map((post) => ({ id: post.id, slug: post.slug, scheduledAt: post.scheduledAt })),
    skipped: result.skipped,
  });
}
