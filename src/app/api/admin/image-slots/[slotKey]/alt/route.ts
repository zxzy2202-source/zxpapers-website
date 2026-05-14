import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { getSlotRecordByKey } from "@/lib/imageSlots.server";
import { prisma } from "@/lib/prisma";

interface RouteContext {
  params: Promise<{ slotKey: string }>;
}

type SlotRecord = NonNullable<Awaited<ReturnType<typeof getSlotRecordByKey>>>;
type SlotWithImage = SlotRecord & {
  imageAsset: NonNullable<SlotRecord["imageAsset"]>;
};

function getClaudeConfig() {
  const apiKey =
    process.env.ANTHROPIC_AUTH_TOKEN ||
    process.env.ANTHROPIC_API_KEY ||
    process.env.CLAUDE_API_KEY ||
    process.env.thermalrollpro ||
    "";
  const baseUrl = process.env.ANTHROPIC_BASE_URL || "https://api.anthropic.com";

  return { apiKey, baseUrl };
}

function normalizeText(value?: string | null) {
  return (value || "")
    .replace(/[\u4e00-\u9fff]/g, " ")
    .replace(/[_:/-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function toTitleCase(value: string) {
  return value
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function clipText(value: string, max = 125) {
  if (value.length <= max) return value;
  return `${value.slice(0, max - 1).trimEnd()}…`;
}

function buildFallbackCopy(slot: SlotWithImage) {
  const page = toTitleCase(normalizeText(slot.pageName) || normalizeText(slot.pageKey) || "Website");
  const section = toTitleCase(normalizeText(slot.sectionName) || normalizeText(slot.sectionKey) || "Section");
  const label = toTitleCase(normalizeText(slot.label) || normalizeText(slot.slotName) || "Image");

  return {
    alt: clipText(`${label} for ${page} ${section}`.replace(/\s+/g, " ").trim()),
    label: clipText(label, 60) || slot.imageAsset?.label || slot.label,
    provider: "fallback" as const,
  };
}

async function generateWithClaude(slot: SlotWithImage) {
  const { apiKey, baseUrl } = getClaudeConfig();
  if (!apiKey) {
    throw new Error("missing_claude_credentials");
  }

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
  const text =
    data?.content?.map((item: { type: string; text?: string }) => item.text || "").join("\n") || "{}";
  const parsed = JSON.parse(text.match(/\{[\s\S]*\}/)?.[0] || "{}");
  const alt = typeof parsed.alt === "string" ? parsed.alt.trim() : "";
  const label =
    typeof parsed.label === "string" ? parsed.label.trim() : slot.imageAsset.label || slot.label;

  if (!alt) {
    throw new Error("Claude returned empty alt");
  }

  return {
    alt: clipText(alt),
    label: clipText(label, 60) || slot.label,
    provider: "claude" as const,
  };
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

  const slotWithImage: SlotWithImage = {
    ...slot,
    imageAsset: slot.imageAsset,
  };

  try {
    let copy: { alt: string; label: string; provider: "claude" | "fallback" };
    let warning: string | undefined;

    try {
      copy = await generateWithClaude(slotWithImage);
    } catch (error) {
      console.warn("Claude alt generation unavailable, falling back to rule-based copy", error);
      copy = buildFallbackCopy(slotWithImage);
      warning =
        error instanceof Error && error.message === "missing_claude_credentials"
          ? "未配置 Claude 接口凭证，已改用规则生成"
          : "Claude 生成失败，已改用规则生成";
    }

    const image = await prisma.imageAsset.update({
      where: { id: slotWithImage.imageAsset.id },
      data: {
        alt: copy.alt,
        label: copy.label,
      },
    });

    return NextResponse.json({
      success: true,
      alt: image.alt,
      label: image.label,
      provider: copy.provider,
      warning,
    });
  } catch (error) {
    console.error("Failed to generate alt text", error);
    return NextResponse.json(
      { error: error instanceof Error && error.message ? `生成 Alt 文案失败：${error.message}` : "生成 Alt 文案失败" },
      { status: 500 }
    );
  }
}
