import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { readSeo, writeSeo } from "@/lib/seoStore";
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
