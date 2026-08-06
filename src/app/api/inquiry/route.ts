import { NextRequest, NextResponse } from "next/server";
import { append } from "@/lib/inquiryStore";
import {
  notifyAll,
  type NotificationChannelStatus,
  type NotificationHealth,
} from "@/lib/notify";
import { SITE } from "@/config/siteData";
import { rateLimit, getClientIp } from "@/lib/rateLimit";
import { hasDurableStorageConfig } from "@/lib/storage";

// 每个 IP 在 10 分钟内最多 5 次询盘，挡住脚本刷接口导致的通知轰炸（企业微信/飞书/邮件）。
const INQUIRY_MAX = 5;
const INQUIRY_WINDOW_SECONDS = 10 * 60;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function optionalTrim(value: unknown, maxLength = 500) {
  return typeof value === "string"
    ? value.trim().slice(0, maxLength) || undefined
    : undefined;
}

type DeliveryHealth = Record<
  string,
  NotificationChannelStatus | NotificationHealth | undefined
>;

export function summarizeDeliveryHealth(deliveryHealth: DeliveryHealth) {
  const statuses = Object.values(deliveryHealth).flatMap((health) =>
    typeof health === "string" ? [health] : Object.values(health ?? {})
  );
  const hasDeliveryFailure = statuses.includes("failed");
  const hasDeliveredNotification = statuses.includes("delivered");

  return hasDeliveryFailure || !hasDeliveredNotification ? "partial" : "complete";
}

export async function POST(req: NextRequest) {
  if (process.env.NODE_ENV === "production" && !hasDurableStorageConfig()) {
    console.error("[inquiry:storage] Durable KV storage is not configured");
    return NextResponse.json(
      { error: "Inquiry service is temporarily unavailable. Please email us directly." },
      { status: 503 }
    );
  }

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
  const {
    name,
    email,
    company,
    country,
    phone,
    subject,
    productLine,
    purchaseTask,
    estimatedQuantity,
    targetTimeline,
    rollSize,
    printerModel,
    paperRequirement,
    formSize,
    formParts,
    formFinishing,
    referenceAvailable,
    message,
    source,
    landingPage,
    referrer,
    utmSource,
    utmMedium,
    utmCampaign,
    utmTerm,
    utmContent,
  } = body;

  // Honeypot — bots auto-fill hidden fields
  const honeypot = optionalTrim(body.website, 1);
  if (honeypot) {
    // Silently accept to avoid tipping off bots, but don't persist or notify
    return NextResponse.json({ ok: true, id: "honeypot" });
  }

  const trimmedName = optionalTrim(name, 120);
  const trimmedEmail = optionalTrim(email, 254);
  const trimmedCountry = optionalTrim(country, 120);
  const trimmedMessage = optionalTrim(message, 5000);

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
    company: optionalTrim(company, 200),
    country: trimmedCountry,
    phone: optionalTrim(phone, 80),
    subject: optionalTrim(subject, 200),
    productLine: optionalTrim(productLine, 80),
    purchaseTask: optionalTrim(purchaseTask, 120),
    estimatedQuantity: optionalTrim(estimatedQuantity, 160),
    targetTimeline: optionalTrim(targetTimeline, 160),
    rollSize: optionalTrim(rollSize, 240),
    printerModel: optionalTrim(printerModel, 240),
    paperRequirement: optionalTrim(paperRequirement, 500),
    formSize: optionalTrim(formSize, 240),
    formParts: optionalTrim(formParts, 120),
    formFinishing: optionalTrim(formFinishing, 500),
    referenceAvailable: optionalTrim(referenceAvailable, 120),
    message: trimmedMessage,
    source: optionalTrim(source),
    landingPage: optionalTrim(landingPage),
    referrer: optionalTrim(referrer),
    utmSource: optionalTrim(utmSource),
    utmMedium: optionalTrim(utmMedium),
    utmCampaign: optionalTrim(utmCampaign),
    utmTerm: optionalTrim(utmTerm),
    utmContent: optionalTrim(utmContent),
  };

  try {
    // Persistence is the delivery source of truth. Never show success if this fails.
    const savedInquiry = await append(inquiryData);

    const deliveryTasks: Array<{
      name: "webhooks" | "web3forms" | "googleSheets";
      deliver: Promise<unknown>;
    }> = [{ name: "webhooks", deliver: notifyAll(inquiryData) }];

    // Web3Forms email is supplementary; the saved inquiry remains available if it fails.
    if (process.env.NEXT_PUBLIC_WEB3FORMS_KEY) {
      deliveryTasks.push({
        name: "web3forms",
        deliver: fetch("https://api.web3forms.com/submit", {
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
            product_line: inquiryData.productLine || "—",
            purchase_task: inquiryData.purchaseTask || "—",
            estimated_quantity: inquiryData.estimatedQuantity || "—",
            target_timeline: inquiryData.targetTimeline || "—",
            roll_size: inquiryData.rollSize || "—",
            printer_model: inquiryData.printerModel || "—",
            paper_requirement: inquiryData.paperRequirement || "—",
            form_size: inquiryData.formSize || "—",
            form_parts: inquiryData.formParts || "—",
            form_finishing: inquiryData.formFinishing || "—",
            reference_available: inquiryData.referenceAvailable || "—",
            message: inquiryData.message,
            source: inquiryData.source || "—",
          }),
        }).then(async (response) => {
          const data = await response.json().catch(() => ({}));
          if (!response.ok || !data.success) throw new Error("Web3Forms delivery failed");
        }),
      });
    }

    // Google Sheets is also supplementary, but must be awaited in serverless runtimes.
    if (process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
      deliveryTasks.push({
        name: "googleSheets",
        deliver: fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(inquiryData),
        }).then((response) => {
          if (!response.ok) throw new Error(`Google Sheets delivery failed: ${response.status}`);
        }),
      });
    }

    const deliveryResults = await Promise.allSettled(
      deliveryTasks.map((task) => task.deliver)
    );
    const deliveryHealth: DeliveryHealth = {
      web3forms: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ? "delivered" : "skipped",
      googleSheets: process.env.GOOGLE_SHEETS_WEBHOOK_URL ? "delivered" : "skipped",
    };

    deliveryResults.forEach((result, index) => {
      const task = deliveryTasks[index];
      if (result.status === "rejected") {
        deliveryHealth[task.name] = "failed";
        console.error(`[inquiry:delivery:${task.name}]`, result.reason);
        return;
      }
      if (task.name === "webhooks") {
        deliveryHealth.webhooks = result.value as NotificationHealth;
      }
    });

    const notificationStatus = summarizeDeliveryHealth(deliveryHealth);
    console.info("[inquiry:delivery]", {
      inquiryId: savedInquiry.id,
      status: notificationStatus,
      channels: deliveryHealth,
    });

    return NextResponse.json({
      ok: true,
      id: savedInquiry.id,
      notificationStatus,
    });
  } catch (err) {
    console.error("[inquiry]", err);
    return NextResponse.json({ error: "Submission failed. Please try again." }, { status: 500 });
  }
}
