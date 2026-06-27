import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { readSeo, writeSeo, SEO_DEFAULTS } from "@/lib/seoStore";
import { revalidatePath } from "next/cache";

export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "未登录" }, { status: 401 });
  }
  const seo = await readSeo();
  // 不返回敏感数据，只返回配置状态
  return NextResponse.json({
    seo,
    notifyStatus: {
      wecom: !!process.env.WECOM_WEBHOOK_URL,
      feishu: !!process.env.FEISHU_WEBHOOK_URL,
      serverchan: !!process.env.SERVERCHAN_SENDKEY,
      web3forms: !!process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
    },
  });
}

export async function POST(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "未登录" }, { status: 401 });
  }
  const body = await req.json();
  const updated = await writeSeo(body);
  revalidatePath("/", "layout");
  return NextResponse.json({ success: true, seo: updated });
}

/**
 * PUT /api/admin/seo
 * Body: { mode: "apply-defaults" | "merge-defaults" }
 *  - apply-defaults: 用 SEO_DEFAULTS 覆盖空字段（保留用户已填值）
 *  - merge-defaults: 完全覆盖（强制使用 GPT-5.5 默认配置）
 */
export async function PUT(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "未登录" }, { status: 401 });
  }
  const { mode = "apply-defaults" } = await req.json().catch(() => ({}));
  const current = await readSeo();

  let next;
  if (mode === "merge-defaults") {
    // 强制覆盖（用户主动重置）
    next = { ...current, ...SEO_DEFAULTS };
  } else {
    // 仅补空（默认行为，安全）
    next = {
      ...current,
      siteTitle: current.siteTitle?.trim() || SEO_DEFAULTS.siteTitle,
      siteTitleTemplate: current.siteTitleTemplate?.trim() || SEO_DEFAULTS.siteTitleTemplate,
      siteDescription: current.siteDescription?.trim() || SEO_DEFAULTS.siteDescription,
      siteKeywords:
        current.siteKeywords && current.siteKeywords.length > 0
          ? current.siteKeywords
          : SEO_DEFAULTS.siteKeywords,
      ogImage: current.ogImage?.trim() || SEO_DEFAULTS.ogImage,
    };
  }

  const updated = await writeSeo(next);
  revalidatePath("/", "layout");
  return NextResponse.json({ success: true, seo: updated, mode });
}
