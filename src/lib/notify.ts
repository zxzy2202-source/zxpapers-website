/**
 * 多渠道通知：企业微信 + 飞书 + Server 酱
 * API route awaits the delivery batch so serverless runtimes do not terminate it early.
 */
import { pagePathToLabel } from "@/lib/pageLabels";
import { SITE } from "@/config/siteData";

export type NotificationChannelStatus = "delivered" | "skipped" | "failed";

export interface NotificationHealth {
  wecom: NotificationChannelStatus;
  feishu: NotificationChannelStatus;
  serverchan: NotificationChannelStatus;
}

interface InquiryNotifyData {
  name: string;
  email: string;
  company?: string;
  country?: string;
  phone?: string;
  subject?: string;
  productLine?: string;
  purchaseTask?: string;
  estimatedQuantity?: string;
  targetTimeline?: string;
  rollSize?: string;
  printerModel?: string;
  paperRequirement?: string;
  formSize?: string;
  formParts?: string;
  formFinishing?: string;
  referenceAvailable?: string;
  message: string;
  source?: string;
  landingPage?: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}

function attributionLine(data: InquiryNotifyData) {
  const campaign = [data.utmSource, data.utmMedium, data.utmCampaign]
    .filter(Boolean)
    .join(" / ");
  return campaign || data.referrer || data.landingPage || "—";
}

function specificationLines(data: InquiryNotifyData) {
  return [
    ["产品线", data.productLine],
    ["采购任务", data.purchaseTask],
    ["预计数量", data.estimatedQuantity],
    ["目标时间", data.targetTimeline],
    ["卷纸规格", data.rollSize],
    ["设备型号", data.printerModel],
    ["纸张/印刷/包装", data.paperRequirement],
    ["表单尺寸", data.formSize],
    ["联数", data.formParts],
    ["印刷/号码/后道", data.formFinishing],
    ["参考资料", data.referenceAvailable],
  ].filter((entry): entry is [string, string] => Boolean(entry[1]));
}

type WebhookPayload = Record<string, unknown>;

function webhookResultCode(payload: WebhookPayload) {
  return payload.code ?? payload.errcode ?? payload.StatusCode;
}

async function assertWebhookAccepted(response: Response, channel: string) {
  const raw = await response.text();
  let payload: WebhookPayload | null = null;

  if (raw) {
    try {
      payload = JSON.parse(raw) as WebhookPayload;
    } catch {
      payload = null;
    }
  }

  if (!response.ok) {
    throw new Error(`${channel} webhook returned HTTP ${response.status}`);
  }

  const resultCode = payload ? webhookResultCode(payload) : undefined;
  if (resultCode !== undefined && String(resultCode) !== "0") {
    const resultMessage = payload?.msg ?? payload?.errmsg ?? payload?.StatusMessage;
    throw new Error(
      `${channel} webhook rejected the request (code ${String(resultCode)}${
        resultMessage ? `: ${String(resultMessage).slice(0, 160)}` : ""
      })`,
    );
  }
}

/** 企业微信群机器人 */
export async function notifyWeCom(data: InquiryNotifyData): Promise<NotificationChannelStatus> {
  const url = process.env.WECOM_WEBHOOK_URL;
  if (!url) return "skipped";
  const markdown = [
    `## 📨 新询盘 | ${SITE.notificationLabel || SITE.name}`,
    `**姓名：** ${data.name}`,
    `**邮箱：** ${data.email}`,
    `**公司：** ${data.company || "—"}`,
    `**国家：** ${data.country || "—"}`,
    `**电话：** ${data.phone || "—"}`,
    `**主题：** ${data.subject || "—"}`,
    ...specificationLines(data).map(([label, value]) => `**${label}：** ${value}`),
    `**来源页面：** ${data.source ? `${pagePathToLabel(data.source)}\n  \`${data.source}\`` : "—"}`,
    `**渠道归因：** ${attributionLine(data)}`,
    `---`,
    `**内容：**`,
    data.message,
  ].join("\n");
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ msgtype: "markdown", markdown: { content: markdown } }),
  });
  await assertWebhookAccepted(response, "WeCom");
  return "delivered";
}

/** 飞书自定义机器人 */
export async function notifyFeishu(data: InquiryNotifyData): Promise<NotificationChannelStatus> {
  const url = process.env.FEISHU_WEBHOOK_URL;
  if (!url) return "skipped";
  const card = {
    msg_type: "interactive",
    card: {
      header: {
        title: { tag: "plain_text", content: `📨 ${SITE.notificationLabel || SITE.name} 询盘 - ${data.country || "未知国家"}` },
        template: "blue",
      },
      elements: [
        {
          tag: "div",
          fields: [
            { is_short: true, text: { tag: "lark_md", content: `**👤 姓名**\n${data.name}` } },
            { is_short: true, text: { tag: "lark_md", content: `**📧 邮箱**\n${data.email}` } },
            { is_short: true, text: { tag: "lark_md", content: `**🏢 公司**\n${data.company || "—"}` } },
            { is_short: true, text: { tag: "lark_md", content: `**📞 电话**\n${data.phone || "—"}` } },
          ],
        },
        ...(specificationLines(data).length > 0
          ? [
              { tag: "hr" },
              {
                tag: "div",
                text: {
                  tag: "lark_md",
                  content: specificationLines(data)
                    .map(([label, value]) => `**${label}：** ${value}`)
                    .join("\n"),
                },
              },
            ]
          : []),
        { tag: "hr" },
        { tag: "div", text: { tag: "lark_md", content: `**💬 内容：**\n${data.message}` } },
        { tag: "note", elements: [{ tag: "plain_text", content: `来源：${data.source ? pagePathToLabel(data.source) : "网站"} (${data.source || "—"}) · 归因：${attributionLine(data)} · ${new Date().toLocaleString("zh-CN")}` }] },
      ],
    },
  };
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(card),
  });
  await assertWebhookAccepted(response, "Feishu");
  return "delivered";
}

/** Server 酱 - 推送到个人微信 */
export async function notifyServerChan(data: InquiryNotifyData): Promise<NotificationChannelStatus> {
  const key = process.env.SERVERCHAN_SENDKEY;
  if (!key) return "skipped";
  const title = `[${SITE.notificationLabel || SITE.name}] 新询盘 - ${data.name} (${data.country || "—"})`;
  const desp = [
    `## 📨 新询盘 | ${SITE.notificationLabel || SITE.name}`,
    `- **姓名：** ${data.name}`,
    `- **邮箱：** ${data.email}`,
    `- **公司：** ${data.company || "—"}`,
    `- **国家：** ${data.country || "—"}`,
    `- **电话：** ${data.phone || "—"}`,
    ...specificationLines(data).map(([label, value]) => `- **${label}：** ${value}`),
    `- **来源页面：** ${data.source ? `${pagePathToLabel(data.source)}\n  \`${data.source}\`` : "—"}`,
    `- **渠道归因：** ${attributionLine(data)}`,
    `\n### 💬 内容\n${data.message}`,
  ].join("\n");
  const response = await fetch(`https://sctapi.ftqq.com/${key}.send`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `title=${encodeURIComponent(title)}&desp=${encodeURIComponent(desp)}`,
  });
  await assertWebhookAccepted(response, "ServerChan");
  return "delivered";
}

/** 一键多渠道推送 */
export async function notifyAll(data: InquiryNotifyData): Promise<NotificationHealth> {
  const channels = [
    { name: "wecom", deliver: () => notifyWeCom(data) },
    { name: "feishu", deliver: () => notifyFeishu(data) },
    { name: "serverchan", deliver: () => notifyServerChan(data) },
  ] as const;
  const results = await Promise.allSettled(channels.map((channel) => channel.deliver()));
  const health = {} as NotificationHealth;

  results.forEach((result, index) => {
    const channel = channels[index].name;
    if (result.status === "fulfilled") {
      health[channel] = result.value;
      return;
    }
    health[channel] = "failed";
    console.error(`[notify:${channel}]`, result.reason);
  });

  return health;
}
