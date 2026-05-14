import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";

const CATEGORY_LABELS: Record<string, string> = {
  INDUSTRY_INSIGHTS: "Industry Insights",
  PRODUCT_GUIDES: "Product Guides",
  COMPANY_NEWS: "Company News",
  TECHNICAL_TIPS: "Technical Tips",
  CASE_STUDIES: "Case Studies",
  MARKET_TRENDS: "Market Trends",
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getAiConfig() {
  return {
    apiKey: process.env.OPENAI_API_KEY || "",
    baseUrl: (process.env.OPENAI_BASE_URL || "https://api.openai.com/v1").replace(/\/$/, ""),
    model: process.env.AI_ARTICLE_MODEL || "gpt-5.5",
    reasoningEffort: process.env.AI_ARTICLE_REASONING_EFFORT || "high",
  };
}

function extractResponseText(data: any): string {
  if (typeof data?.output_text === "string" && data.output_text.trim()) {
    return data.output_text.trim();
  }

  if (Array.isArray(data?.output)) {
    const parts: string[] = [];
    for (const item of data.output) {
      if (Array.isArray(item?.content)) {
        for (const content of item.content) {
          if (typeof content?.text === "string") {
            parts.push(content.text);
          }
        }
      }
    }
    if (parts.length > 0) return parts.join("\n").trim();
  }

  return "";
}

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const topic = String(body.topic || "").trim();
    const brief = String(body.brief || "").trim();
    const keywordHint = String(body.keywords || "").trim();
    const category = String(body.category || "INDUSTRY_INSIGHTS").trim();

    if (!topic) {
      return NextResponse.json({ error: "请填写文章主题" }, { status: 400 });
    }

    const { apiKey, baseUrl, model, reasoningEffort } = getAiConfig();
    if (!apiKey) {
      return NextResponse.json({ error: "未配置 OPENAI_API_KEY" }, { status: 500 });
    }

    const categoryLabel = CATEGORY_LABELS[category] || "Industry Insights";
    const systemPrompt =
      "You write conversion-oriented B2B website articles for a thermal paper and label manufacturer. " +
      "Return valid JSON only. Write in natural business English. Avoid hype, unverifiable claims, and markdown fences. " +
      "The article body must be HTML suitable for a CMS rich text editor. Use only tags like <p>, <h2>, <h3>, <ul>, <ol>, <li>, <strong>, <table>, <thead>, <tbody>, <tr>, <th>, <td>. " +
      "Do not include <html>, <body>, or inline styles.";

    const userPrompt = [
      `Create a ${categoryLabel} article for ZhixinPaper.`,
      `Topic: ${topic}`,
      brief ? `Brief / angle: ${brief}` : "",
      keywordHint ? `SEO keywords to include naturally: ${keywordHint}` : "",
      "Target audience: importers, distributors, wholesalers, retail supply buyers, and OEM packaging buyers.",
      "Requirements:",
      "1. Create a strong SEO title under 70 characters.",
      "2. Create a 1-2 sentence excerpt under 180 characters.",
      "3. Create a full article in HTML with a clear introduction, 4-6 useful sections, and a short conclusion CTA.",
      "4. Keep claims practical and specific to thermal paper, POS rolls, labels, OEM, export packing, compliance, or market demand.",
      "5. Create an SEO meta title, meta description, 6-10 comma-separated keywords, and 4-8 concise tags.",
      "6. Return JSON with keys: title, excerpt, contentHtml, metaTitle, metaDesc, keywords, tags.",
    ]
      .filter(Boolean)
      .join("\n");

    const schema = {
      type: "object",
      additionalProperties: false,
      properties: {
        title: { type: "string" },
        excerpt: { type: "string" },
        contentHtml: { type: "string" },
        metaTitle: { type: "string" },
        metaDesc: { type: "string" },
        keywords: { type: "string" },
        tags: {
          type: "array",
          items: { type: "string" },
        },
      },
      required: ["title", "excerpt", "contentHtml", "metaTitle", "metaDesc", "keywords", "tags"],
    };

    const response = await fetch(`${baseUrl}/responses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        reasoning: { effort: reasoningEffort },
        input: [
          {
            role: "system",
            content: [{ type: "input_text", text: systemPrompt }],
          },
          {
            role: "user",
            content: [{ type: "input_text", text: userPrompt }],
          },
        ],
        text: {
          format: {
            type: "json_schema",
            name: "article_draft",
            schema,
            strict: true,
          },
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: `AI 生成失败：${errorText || "upstream error"}` },
        { status: 500 }
      );
    }

    const data = await response.json();
    const rawText = extractResponseText(data);
    const parsed = JSON.parse(rawText || "{}");

    const title = String(parsed.title || "").trim();
    const excerpt = String(parsed.excerpt || "").trim();
    const contentHtml = String(parsed.contentHtml || "").trim();
    const metaTitle = String(parsed.metaTitle || title).trim();
    const metaDesc = String(parsed.metaDesc || excerpt).trim();
    const keywords = String(parsed.keywords || "").trim();
    const tags = Array.isArray(parsed.tags)
      ? parsed.tags.map((tag: unknown) => String(tag).trim()).filter(Boolean)
      : [];

    if (!title || !contentHtml) {
      return NextResponse.json({ error: "AI 返回内容不完整" }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      article: {
        title,
        slug: slugify(title),
        excerpt,
        content: contentHtml,
        metaTitle,
        metaDesc,
        keywords,
        tags,
      },
    });
  } catch (error) {
    console.error("Error generating article:", error);
    return NextResponse.json({ error: "生成文章失败" }, { status: 500 });
  }
}
