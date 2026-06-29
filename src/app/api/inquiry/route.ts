import { NextRequest, NextResponse } from "next/server";
import { append } from "@/lib/inquiryStore";
import { notifyAll } from "@/lib/notify";
import { SITE } from "@/config/siteData";
import { rateLimit, getClientIp } from "@/lib/rateLimit";

// 每个 IP 在 10 分钟内最多 5 次询盘，挡住脚本刷接口导致的通知轰炸（企业微信/飞书/邮件）。
const INQUIRY_MAX = 5;
const INQUIRY_WINDOW_SECONDS = 10 * 60;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function optionalTrim(value: unknown) {
  return typeof value === "string" ? value.trim() : undefined;
}

export async function POST(req: NextRequest) {
  const limit = await rateLimit("inquiry", getClientIp(req), {
    max: INQUIRY_MAX,
    windowSeconds: INQUIRY_WINDOW_SECONDS,
  });
  if (!limit.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfterSeconds) } }
    );
  }

  const body = await req.json();
  const { name, email, company, country, phone, subject, message, source } = body;

  const trimmedName = optionalTrim(name);
  const trimmedEmail = optionalTrim(email);
  const trimmedCountry = optionalTrim(country);
  const trimmedMessage = optionalTrim(message);

  if (
    !trimmedName ||
    !trimmedEmail ||
    !EMAIL_PATTERN.test(trimmedEmail) ||
    !trimmedCountry ||
    !trimmedMessage
  ) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const inquiryData = {
    name: trimmedName,
    email: trimmedEmail,
    company: optionalTrim(company),
    country: trimmedCountry,
    phone: optionalTrim(phone),
    subject: optionalTrim(subject),
    message: trimmedMessage,
    source: optionalTrim(source),
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
          subject: `[${SITE.notificationLabel || SITE.name}] New Inquiry from ${inquiryData.name} — ${inquiryData.country || "Unknown"}`,
          from_name: inquiryData.name,
          name: inquiryData.name,
          email: inquiryData.email,
          company: inquiryData.company || "—",
          country: inquiryData.country,
          phone: inquiryData.phone || "—",
          inquiry_subject: inquiryData.subject || "—",
          message: inquiryData.message,
          source: inquiryData.source || "—",
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
