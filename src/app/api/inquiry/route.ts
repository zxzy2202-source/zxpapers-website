import { NextRequest, NextResponse } from "next/server";
import { append } from "@/lib/inquiryStore";
import { notifyAll } from "@/lib/notify";
import { SITE } from "@/config/siteData";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, company, country, phone, subject, message, source } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const inquiryData = {
    name, email, company, country, phone, subject, message, source,
  };

  try {
    // 1. 本地持久化（后台可查看）
    await append(inquiryData).catch((e) => console.error("[inquiry:persist]", e));

    // 2. Web3Forms — 发邮件到您的邮箱
    if (process.env.NEXT_PUBLIC_WEB3FORMS_KEY) {
      const web3Res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `[${SITE.name}] New Inquiry from ${name} — ${country || "Unknown"}`,
          from_name: name,
          name,
          email,
          company: company || "—",
          country: country || "—",
          phone: phone || "—",
          inquiry_subject: subject || "—",
          message,
          source: source || "—",
        }),
      });
      const web3Data = await web3Res.json().catch(() => ({}));
      if (!web3Data.success) {
        console.error("[inquiry:web3forms]", web3Data);
      }
    }

    // 3. 多渠道推送（企业微信 + 飞书 + Server 酱）
    // 注意: Vercel Serverless 函数响应后会立刻 kill 未 await 的异步操作
    // 所以必须 await，不能用 fire-and-forget，否则推送会丢失
    await notifyAll(inquiryData).catch((e) => console.error("[inquiry:notify]", e));

    // 4. 可选：Google Sheets
    if (process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
      fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inquiryData),
      }).catch((e) => console.error("[inquiry:sheets]", e));
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[inquiry]", err);
    return NextResponse.json({ error: "Submission failed. Please try again." }, { status: 500 });
  }
}
