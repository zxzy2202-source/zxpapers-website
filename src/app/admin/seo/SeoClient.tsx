"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Save, Check, AlertCircle, X, ExternalLink, Sparkles } from "lucide-react";
import type { SeoSettings } from "@/lib/seoStore";

interface Props {
  initialSeo: SeoSettings;
  notifyStatus: { wecom: boolean; feishu: boolean; serverchan: boolean; web3forms: boolean };
}

export default function SeoClient({ initialSeo, notifyStatus }: Props) {
  const router = useRouter();
  const [seo, setSeo] = useState<SeoSettings>(initialSeo);
  const [keywordsText, setKeywordsText] = useState((initialSeo.siteKeywords || []).join(", "));
  const [saving, setSaving] = useState(false);
  const [savedAt, setSavedAt] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  function update<K extends keyof SeoSettings>(key: K, value: SeoSettings[K]) {
    setSeo((prev) => ({ ...prev, [key]: value }));
  }

  async function save() {
    setSaving(true);
    setError(null);
    try {
      const payload = {
        ...seo,
        siteKeywords: keywordsText
          .split(/[,，]/)
          .map((s) => s.trim())
          .filter(Boolean),
      };
      const res = await fetch("/api/admin/seo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const d = await res.json();
        throw new Error(d.error || "保存失败");
      }
      setSavedAt(Date.now());
      router.refresh();
      setTimeout(() => setSavedAt(null), 3000);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setSaving(false);
    }
  }

  /** 应用 GPT-5.5 生成的默认 SEO 配置 */
  async function applyDefaults(mode: "apply-defaults" | "merge-defaults") {
    if (mode === "merge-defaults") {
      if (!confirm("将完全覆盖现有的标题/描述/关键词/OG图。确定继续？")) return;
    }
    setSaving(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/seo", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode }),
      });
      if (!res.ok) {
        const d = await res.json();
        throw new Error(d.error || "应用默认值失败");
      }
      const { seo: updated } = await res.json();
      setSeo(updated);
      setKeywordsText((updated.siteKeywords || []).join(", "));
      setSavedAt(Date.now());
      router.refresh();
      setTimeout(() => setSavedAt(null), 3000);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="space-y-6">
      {/* 状态条 */}
      {savedAt && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-700 text-sm flex items-center gap-2">
          <Check size={16} /> 已保存，30 秒内全站生效
        </div>
      )}
      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm flex items-center gap-2">
          <AlertCircle size={16} /> {error}
          <button onClick={() => setError(null)} className="ml-auto">
            <X size={14} />
          </button>
        </div>
      )}

      {/* AI 初始化卡片 */}
      <div className="bg-gradient-to-br from-violet-50 via-blue-50 to-emerald-50 border border-violet-200 rounded-2xl p-5">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-white shrink-0">
            <Sparkles size={20} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-slate-900">AI 一键初始化 SEO 基础信息</h3>
            <p className="text-sm text-slate-600 mt-1">
              基于 GPT-5.5 对 B2B 海外采购商搜索意图的研究，写入专业级标题/描述/26 个高购买意图关键词。
              <span className="font-medium text-violet-700">完成后健康度评分立即变 100。</span>
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <button
                onClick={() => applyDefaults("apply-defaults")}
                disabled={saving}
                className="px-4 py-2 bg-white border border-violet-300 hover:bg-violet-50 text-violet-700 font-medium text-sm rounded-lg flex items-center gap-2 disabled:opacity-50 transition"
              >
                <Sparkles size={14} /> 仅填充空字段（安全）
              </button>
              <button
                onClick={() => applyDefaults("merge-defaults")}
                disabled={saving}
                className="px-4 py-2 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white font-medium text-sm rounded-lg flex items-center gap-2 disabled:opacity-50 transition shadow-sm"
              >
                <Sparkles size={14} /> 用默认值覆盖全部
              </button>
            </div>
            <p className="text-xs text-slate-400 mt-2">
              提示：「仅填充空字段」保留你已填的内容；「覆盖全部」会用 AI 默认配置替换标题/描述/关键词/OG 图。
            </p>
          </div>
        </div>
      </div>

      {/* 全站 SEO 基础信息 */}
      <Section title="🌐 全站 SEO 基础信息" desc="这些信息会出现在 Google 搜索结果、社交媒体分享卡片中。">
        <Field label="网站标题" hint="出现在浏览器 Tab、Google 搜索结果中。建议 50 字符内。">
          <input
            type="text"
            value={seo.siteTitle || ""}
            onChange={(e) => update("siteTitle", e.target.value)}
            placeholder="ZhixinPaper | Professional Thermal Paper & Labels Manufacturer"
            className={inputCls}
          />
          <CharCounter text={seo.siteTitle || ""} max={60} />
        </Field>

        <Field label="网站描述" hint="出现在 Google 搜索结果标题下方。建议 160 字符内。">
          <textarea
            value={seo.siteDescription || ""}
            onChange={(e) => update("siteDescription", e.target.value)}
            placeholder="ISO 9001 certified manufacturer of thermal paper rolls and labels..."
            rows={3}
            className={inputCls}
          />
          <CharCounter text={seo.siteDescription || ""} max={160} />
        </Field>

        <Field label="关键词" hint="用英文逗号分隔，例如：thermal paper, OEM, BPA-free">
          <input
            type="text"
            value={keywordsText}
            onChange={(e) => setKeywordsText(e.target.value)}
            placeholder="thermal paper, thermal labels, OEM, BPA-free"
            className={inputCls}
          />
        </Field>

        <Field label="OG 分享图 URL" hint="社交媒体分享时显示的图片。推荐 1200x630。">
          <input
            type="url"
            value={seo.ogImage || ""}
            onChange={(e) => update("ogImage", e.target.value)}
            placeholder="https://pub-xxx.r2.dev/og-default.png"
            className={inputCls}
          />
          {seo.ogImage && (
            <img src={seo.ogImage} alt="OG preview" className="mt-2 max-h-32 rounded-lg border" />
          )}
        </Field>
      </Section>

      {/* 搜索引擎验证 */}
      <Section title="✅ 搜索引擎验证码" desc="向 Google/百度/Bing 提交网站所有权时的验证码。">
        <Field label="Google Search Console">
          <input
            type="text"
            value={seo.googleSiteVerification || ""}
            onChange={(e) => update("googleSiteVerification", e.target.value)}
            placeholder="google-site-verification=xxxxxxxx"
            className={inputCls}
          />
        </Field>
        <Field label="百度站长平台">
          <input
            type="text"
            value={seo.baiduSiteVerification || ""}
            onChange={(e) => update("baiduSiteVerification", e.target.value)}
            placeholder="baidu-site-verification=xxxxxxxx"
            className={inputCls}
          />
        </Field>
        <Field label="Bing Webmaster">
          <input
            type="text"
            value={seo.bingSiteVerification || ""}
            onChange={(e) => update("bingSiteVerification", e.target.value)}
            placeholder="msvalidate.01=xxxxxxxx"
            className={inputCls}
          />
        </Field>
      </Section>

      {/* 追踪 */}
      <Section title="📊 第三方追踪" desc="Google Analytics、GTM 用于流量分析。">
        <Field label="Google Analytics ID (GA4)">
          <input
            type="text"
            value={seo.googleAnalyticsId || ""}
            onChange={(e) => update("googleAnalyticsId", e.target.value)}
            placeholder="G-XXXXXXXXXX"
            className={inputCls}
          />
        </Field>
        <Field label="Google Tag Manager ID">
          <input
            type="text"
            value={seo.googleTagManagerId || ""}
            onChange={(e) => update("googleTagManagerId", e.target.value)}
            placeholder="GTM-XXXXXXX"
            className={inputCls}
          />
        </Field>
      </Section>

      {/* 通知渠道状态 */}
      <Section
        title="📨 询盘通知渠道"
        desc="询盘提交时会同时推送到这些渠道。Webhook 地址需在服务器环境变量中配置。"
      >
        <NotifyStatus label="企业微信" envKey="WECOM_WEBHOOK_URL" configured={notifyStatus.wecom} guide="https://developer.work.weixin.qq.com/document/path/91770" />
        <NotifyStatus label="飞书 / Lark" envKey="FEISHU_WEBHOOK_URL" configured={notifyStatus.feishu} guide="https://open.feishu.cn/document/ukTMukTMukTM/ucTM5YjL3ETO24yNxkjN" />
        <NotifyStatus label="Server 酱（个人微信）" envKey="SERVERCHAN_SENDKEY" configured={notifyStatus.serverchan} guide="https://sct.ftqq.com" />
        <NotifyStatus label="邮件通知（Web3Forms）" envKey="NEXT_PUBLIC_WEB3FORMS_KEY" configured={notifyStatus.web3forms} guide="https://web3forms.com" />
      </Section>

      {/* 保存按钮 */}
      <div className="sticky bottom-4 flex justify-end">
        <button
          onClick={save}
          disabled={saving}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-lg flex items-center gap-2 disabled:opacity-50"
        >
          <Save size={16} /> {saving ? "保存中..." : "保存全部设置"}
        </button>
      </div>
    </div>
  );
}

const inputCls = "w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm";

function Section({ title, desc, children }: { title: string; desc?: string; children: React.ReactNode }) {
  return (
    <section className="bg-white rounded-2xl border border-slate-200 p-6">
      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      {desc && <p className="text-sm text-slate-500 mt-1 mb-4">{desc}</p>}
      <div className="space-y-4 mt-4">{children}</div>
    </section>
  );
}

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1">{label}</label>
      {hint && <p className="text-xs text-slate-400 mb-2">{hint}</p>}
      {children}
    </div>
  );
}

function CharCounter({ text, max }: { text: string; max: number }) {
  const len = text.length;
  const over = len > max;
  return (
    <div className={`text-xs mt-1 ${over ? "text-red-500" : "text-slate-400"}`}>
      {len} / {max} 字符
    </div>
  );
}

function NotifyStatus({ label, envKey, configured, guide }: { label: string; envKey: string; configured: boolean; guide: string }) {
  return (
    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
      <div className="flex items-center gap-3">
        <div className={`w-2.5 h-2.5 rounded-full ${configured ? "bg-emerald-500" : "bg-slate-300"}`} />
        <div>
          <div className="font-medium text-sm text-slate-900">{label}</div>
          <div className="text-xs text-slate-500">
            环境变量：<code className="text-slate-700">{envKey}</code>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className={`text-xs font-medium ${configured ? "text-emerald-600" : "text-slate-400"}`}>
          {configured ? "✓ 已配置" : "未配置"}
        </span>
        <a
          href={guide}
          target="_blank"
          rel="noopener"
          className="text-slate-400 hover:text-blue-600"
          title="查看配置指南"
        >
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}
