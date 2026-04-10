import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { getSlotRecordByKey } from "@/lib/imageSlots.server";
import { prisma } from "@/lib/prisma";

interface RouteContext {
  params: Promise<{ slotKey: string }>;
}

function getClaudeConfig() {
  const apiKey =
    process.env.ANTHROPIC_AUTH_TOKEN ||
    process.env.CLAUDE_API_KEY ||
    process.env.thermalrollpro ||
    "";
  const baseUrl = process.env.ANTHROPIC_BASE_URL || "https://api.anthropic.com";

  return { apiKey, baseUrl };
}

export async function POST(_request: Request, context: RouteContext) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slotKey } = await context.params;
  const slot = await getSlotRecordByKey(decodeURIComponent(slotKey));

  if (!slot?.imageAsset) {
    return NextResponse.json({ error: "该槽位尚未上传图片" }, { status: 400 });
  }

  const { apiKey, baseUrl } = getClaudeConfig();
  if (!apiKey) {
    return NextResponse.json({ error: "未配置 Claude 接口凭证" }, { status: 500 });
  }

  try {
    const prompt = `You are writing concise, SEO-safe image alt text for a B2B thermal paper manufacturer website.\nCreate one English alt text under 125 characters and one short English label.\nReturn JSON with keys alt and label.\nPage: ${slot.pageName}\nSection: ${slot.sectionName}\nSlot label: ${slot.label}\nCurrent image path: ${slot.imageAsset.path}`;

    const response = await fetch(`${baseUrl.replace(/\/$/, "")}/v1/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 160,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "Claude request failed");
    }

    const data = await response.json();
    const text = data?.content?.map((item: { type: string; text?: string }) => item.text || "").join("\n") || "{}";
    const parsed = JSON.parse(text.match(/\{[\s\S]*\}/)?.[0] || "{}");
    const alt = typeof parsed.alt === "string" ? parsed.alt.trim() : "";
    const label = typeof parsed.label === "string" ? parsed.label.trim() : slot.imageAsset.label || slot.label;

    if (!alt) {
      throw new Error("Claude 返回内容缺少 alt");
    }

    const image = await prisma.imageAsset.update({
      where: { id: slot.imageAsset.id },
      data: {
        alt,
        label,
      },
    });

    return NextResponse.json({
      success: true,
      alt: image.alt,
      label: image.label,
    });
  } catch (error) {
    console.error("Failed to generate alt text", error);
    return NextResponse.json({ error: "生成 Alt 文案失败" }, { status: 500 });
  }
}
