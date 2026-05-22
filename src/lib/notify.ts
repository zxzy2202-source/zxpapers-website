/**
 * 多渠道通知：企业微信 + 飞书 + Server 酱
 * 触发后 fire-and-forget，不阻塞主流程
 */
import { pagePathToLabel } from "@/lib/pageLabels";

interface InquiryNotifyData {
  name: string;
  email: string;
  company?: string;
  country?: string;
  phone?: string;
  subject?: string;
  message: string;
  source?: string;
}

/** 企业微信群机器人 */
export async function notifyWeCom(data: InquiryNotifyData) {
  const url = process.env.WECOM_WEBHOOK_URL;
  if (!url) return;
  const markdown = [
    `## 📨 新询盘`,
    `**姓名：** ${data.name}`,
    `**邮箱：** ${data.email}`,
    `**公司：** ${data.company || "—"}`,
    `**国家：** ${data.country || "—"}`,
    `**电话：** ${data.phone || "—"}`,
    `**主题：** ${data.subject || "—"}`,
    `**来源页面：** ${data.source ? `${pagePathToLabel(data.source)}\n  \`${data.source}\`` : "—"}`,
    `---`,
    `**内容：**`,
    data.message,
  ].join("\n");
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ msgtype: "markdown", markdown: { content: markdown } }),
    });
  } catch (e) {
    console.error("[notify:wecom]", e);
  }
}

/** 飞书自定义机器人 */
export async function notifyFeishu(data: InquiryNotifyData) {
  const url = process.env.FEISHU_WEBHOOK_URL;
  if (!url) return;
  const card = {
    msg_type: "interactive",
    card: {
      header: {
        title: { tag: "plain_text", content: `📨 新询盘 - ${data.country || "未知国家"}` },
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
        { tag: "hr" },
        { tag: "div", text: { tag: "lark_md", content: `**💬 内容：**\n${data.message}` } },
        { tag: "note", elements: [{ tag: "plain_text", content: `来源：${data.source ? pagePathToLabel(data.source) : "网站"} (${data.source || "—"}) · ${new Date().toLocaleString("zh-CN")}` }] },
      ],
    },
  };
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(card),
    });
  } catch (e) {
    console.error("[notify:feishu]", e);
  }
}

/** Server 酱 - 推送到个人微信 */
export async function notifyServerChan(data: InquiryNotifyData) {
  const key = process.env.SERVERCHAN_SENDKEY;
  if (!key) return;
  const title = `新询盘 - ${data.name} (${data.country || "—"})`;
  const desp = [
    `## 📨 新询盘`,
    `- **姓名：** ${data.name}`,
    `- **邮箱：** ${data.email}`,
    `- **公司：** ${data.company || "—"}`,
    `- **国家：** ${data.country || "—"}`,
    `- **电话：** ${data.phone || "—"}`,
    `- **来源页面：** ${data.source ? `${pagePathToLabel(data.source)}\n  \`${data.source}\`` : "—"}`,
    `\n### 💬 内容\n${data.message}`,
  ].join("\n");
  try {
    await fetch(`https://sctapi.ftqq.com/${key}.send`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `title=${encodeURIComponent(title)}&desp=${encodeURIComponent(desp)}`,
    });
  } catch (e) {
    console.error("[notify:serverchan]", e);
  }
}

/** 一键多渠道推送 */
export async function notifyAll(data: InquiryNotifyData) {
  await Promise.allSettled([
    notifyWeCom(data),
    notifyFeishu(data),
    notifyServerChan(data),
  ]);
}
