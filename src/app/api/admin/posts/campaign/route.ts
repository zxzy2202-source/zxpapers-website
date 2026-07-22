import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { isAuthenticated } from "@/lib/auth";
import { importScheduledPosts } from "@/lib/postsStore";
import { MIDDLE_EAST_THERMAL_PAPER_P0_CAMPAIGN } from "@/content/blogCampaigns/middleEastThermalPaperP0";

export async function POST(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "未登录" }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}));
  const startAt = new Date(body.startAt);
  if (Number.isNaN(startAt.getTime())) {
    return NextResponse.json({ error: "请选择有效的首篇发布时间" }, { status: 400 });
  }
  if (startAt.getTime() <= Date.now()) {
    return NextResponse.json({ error: "首篇发布时间必须晚于当前时间" }, { status: 400 });
  }

  const templates = MIDDLE_EAST_THERMAL_PAPER_P0_CAMPAIGN.posts.map((post, index) => ({
    ...post,
    campaignId: MIDDLE_EAST_THERMAL_PAPER_P0_CAMPAIGN.id,
    scheduledAt: new Date(
      startAt.getTime() + index * MIDDLE_EAST_THERMAL_PAPER_P0_CAMPAIGN.cadenceDays * 24 * 60 * 60 * 1000,
    ).toISOString(),
  }));
  const result = await importScheduledPosts(templates);

  revalidatePath("/admin/posts");
  return NextResponse.json({
    success: true,
    campaign: MIDDLE_EAST_THERMAL_PAPER_P0_CAMPAIGN.id,
    created: result.created.map((post) => ({ id: post.id, slug: post.slug, scheduledAt: post.scheduledAt })),
    skipped: result.skipped,
  });
}
