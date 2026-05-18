import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  if (!process.env.WECOM_WEBHOOK_URL) {
    return NextResponse.json({ error: "WeCom webhook not configured" }, { status: 503 });
  }

  const { name, email, company, country, phone, subject, message, source } = await req.json();

  const markdown = [
    `## 📨 新询盘`,
    `**姓名：** ${name || "—"}`,
    `**邮箱：** ${email || "—"}`,
    `**公司：** ${company || "—"}`,
    `**国家：** ${country || "—"}`,
    `**电话：** ${phone || "—"}`,
    `**主题：** ${subject || "—"}`,
    `**来源：** ${source || "—"}`,
    `---`,
    `**内容：**`,
    message || "—",
  ].join("\n");

  try {
    const res = await fetch(process.env.WECOM_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ msgtype: "markdown", markdown: { content: markdown } }),
    });
    const data = await res.json();
    return NextResponse.json({ ok: true, wecom: data });
  } catch (err) {
    console.error("[wecom-notify]", err);
    return NextResponse.json({ error: "WeCom notification failed" }, { status: 500 });
  }
}
