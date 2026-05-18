import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, company, country, phone, subject, message, source } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    // 1. Web3Forms — sends email notification to owner
    const web3Res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
        subject: `[ZXPapers] New Inquiry from ${name} — ${country || "Unknown"}`,
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
    const web3Data = await web3Res.json();
    if (!web3Data.success) {
      throw new Error(web3Data.message ?? "Web3Forms error");
    }

    // 2. WeCom group bot — fire and forget, don't block the response
    if (process.env.WECOM_WEBHOOK_URL) {
      const markdown = [
        `## 📨 新询盘`,
        `**姓名：** ${name}`,
        `**邮箱：** ${email}`,
        `**公司：** ${company || "—"}`,
        `**国家：** ${country || "—"}`,
        `**电话：** ${phone || "—"}`,
        `**主题：** ${subject || "—"}`,
        `**来源：** ${source || "—"}`,
        `---`,
        `**内容：**`,
        message,
      ].join("\n");

      fetch(process.env.WECOM_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ msgtype: "markdown", markdown: { content: markdown } }),
      }).catch((e) => console.error("[wecom]", e));
    }

    // 3. Google Sheets via GAS webhook (optional)
    if (process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
      fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, country, phone, subject, message, source }),
      }).catch((e) => console.error("[sheets]", e));
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[inquiry]", err);
    return NextResponse.json({ error: "Submission failed. Please try again." }, { status: 500 });
  }
}
