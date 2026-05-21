"use client";

import { useState, useRef } from "react";
import { Save, Upload, Trash2, AlertCircle, Check, ExternalLink, RotateCcw } from "lucide-react";
import Link from "next/link";
import type { HomeHeroSettings, HeroBanner } from "@/lib/heroStore";

interface Props {
  initial: HomeHeroSettings;
}

const DEFAULTS = {
  badgeText: "Direct Thermal Paper Factory Since 2009",
  eyebrow: "Bulk POS Rolls / OEM Packaging / Export Orders",
  titleMain: "Thermal Paper Rolls",
  titleHighlight: "Supplier for Bulk Orders",
  subtitle:
    "Factory-direct thermal rolls for distributors, importers, and retail chains. Custom printing, precise slitting, export-ready packing, and fast loading from our Xi'an, China facility.",
  trustBadges: ["ISO 9001 Certified", "BPA-Free", "FCL Ready 3–5 Days", "OEM Available"],
  ctaPrimary: { label: "Get Quick Quote", href: "/contact" },
  ctaSecondary: { label: "WhatsApp Us", href: "https://wa.me/8617792370431" },
};

export default function HeroEditor({ initial }: Props) {
  const [data, setData] = useState<HomeHeroSettings>(initial);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [uploadingIdx, setUploadingIdx] = useState<number | null>(null);
  const fileRefs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

  function update<K extends keyof HomeHeroSettings>(key: K, val: HomeHeroSettings[K]) {
    setData((d) => ({ ...d, [key]: val }));
  }

  function updateBanner(idx: number, banner: HeroBanner | null) {
    setData((d) => {
      const banners = [...(d.banners || [])];
      while (banners.length < 3) banners.push({ url: "" });
      banners[idx] = banner || { url: "" };
      return { ...d, banners };
    });
  }

  async function uploadBanner(idx: number, file: File) {
    setUploadingIdx(idx);
    setError(null);
    try {
      const fd = new FormData();
      fd.append("file", file);
      fd.append("folder", "home-hero");
      const res = await fetch("/api/admin/upload-r2", { method: "POST", body: fd });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || "上传失败");
      updateBanner(idx, { url: j.url, alt: file.name });
    } catch (e: any) {
      setError(e.message);
    } finally {
      setUploadingIdx(null);
    }
  }

  async function save() {
    setSaving(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/hero", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || "保存失败");
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2500);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setSaving(false);
    }
  }

  function resetAll() {
    if (!confirm("确定恢复首页 Hero 全部为默认值？（已上传的图片不会从 R2 删除）")) return;
    setData({});
  }

  const banners = data.banners || [];

  return (
    <div className="space-y-6">
      {/* 状态提示 */}
      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm flex items-center gap-2">
          <AlertCircle size={16} /> {error}
        </div>
      )}
      {success && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-700 text-sm flex items-center gap-2">
          <Check size={16} /> 保存成功，访问首页查看效果（可能需要强制刷新 Ctrl+F5）
        </div>
      )}

      {/* 顶部操作栏 */}
      <div className="flex items-center justify-between bg-white border border-slate-200 rounded-xl p-4">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          {data.updatedAt && (
            <>上次更新：{new Date(data.updatedAt).toLocaleString("zh-CN")}</>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/"
            target="_blank"
            className="px-3 py-2 text-sm border border-slate-200 hover:bg-slate-50 rounded-lg flex items-center gap-1.5"
          >
            <ExternalLink size={13} /> 预览首页
          </Link>
          <button
            onClick={resetAll}
            className="px-3 py-2 text-sm border border-slate-200 hover:bg-slate-50 rounded-lg flex items-center gap-1.5 text-slate-600"
          >
            <RotateCcw size={13} /> 全部恢复默认
          </button>
          <button
            onClick={save}
            disabled={saving}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-2 font-medium disabled:opacity-50"
          >
            <Save size={14} /> {saving ? "保存中..." : "保存所有改动"}
          </button>
        </div>
      </div>

      {/* === 文字内容 === */}
      <section className="bg-white border border-slate-200 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-1">📝 文字内容</h2>
        <p className="text-xs text-slate-500 mb-5">
          所有字段留空 = 使用代码里的默认值（灰色 placeholder 显示的就是默认值）
        </p>

        <div className="space-y-4">
          <Field
            label="顶部小徽章"
            hint="例：Direct Thermal Paper Factory Since 2009"
            placeholder={DEFAULTS.badgeText}
            value={data.badgeText}
            onChange={(v) => update("badgeText", v)}
          />
          <Field
            label="标题上方一行小字（Eyebrow）"
            hint="例：Bulk POS Rolls / OEM Packaging / Export Orders"
            placeholder={DEFAULTS.eyebrow}
            value={data.eyebrow}
            onChange={(v) => update("eyebrow", v)}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field
              label="主标题（白色部分）"
              hint="例：Thermal Paper Rolls"
              placeholder={DEFAULTS.titleMain}
              value={data.titleMain}
              onChange={(v) => update("titleMain", v)}
            />
            <Field
              label="主标题（高亮琥珀色部分）"
              hint="例：Supplier for Bulk Orders"
              placeholder={DEFAULTS.titleHighlight}
              value={data.titleHighlight}
              onChange={(v) => update("titleHighlight", v)}
            />
          </div>
          <Field
            label="副标题（一段说明文字）"
            hint="一段 1-3 句的简介"
            placeholder={DEFAULTS.subtitle}
            value={data.subtitle}
            onChange={(v) => update("subtitle", v)}
            textarea
          />

          {/* Trust badges 数组 */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              信任徽章（最多 4 个，每行一个）
            </label>
            <textarea
              value={(data.trustBadges || []).join("\n")}
              onChange={(e) =>
                update(
                  "trustBadges",
                  e.target.value
                    .split("\n")
                    .map((s) => s.trim())
                    .filter(Boolean)
                    .slice(0, 4)
                )
              }
              placeholder={DEFAULTS.trustBadges.join("\n")}
              rows={4}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
            />
            <p className="text-xs text-slate-400 mt-1">
              当前 {(data.trustBadges || []).length || 0} 个 · 默认 4 个
            </p>
          </div>
        </div>
      </section>

      {/* === CTA 按钮 === */}
      <section className="bg-white border border-slate-200 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-1">🔘 行动按钮 (CTA)</h2>
        <p className="text-xs text-slate-500 mb-5">用户点了按钮去哪里、按钮上写什么字</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="text-sm font-medium text-slate-700">主按钮（蓝色）</div>
            <Field
              label="按钮文字"
              placeholder={DEFAULTS.ctaPrimary.label}
              value={data.ctaPrimary?.label}
              onChange={(v) => update("ctaPrimary", { ...data.ctaPrimary, label: v })}
            />
            <Field
              label="跳转链接"
              hint="站内路径写 /contact，外链写完整 URL"
              placeholder={DEFAULTS.ctaPrimary.href}
              value={data.ctaPrimary?.href}
              onChange={(v) => update("ctaPrimary", { ...data.ctaPrimary, href: v })}
            />
          </div>
          <div className="space-y-3">
            <div className="text-sm font-medium text-slate-700">次按钮（WhatsApp 绿）</div>
            <Field
              label="按钮文字"
              placeholder={DEFAULTS.ctaSecondary.label}
              value={data.ctaSecondary?.label}
              onChange={(v) => update("ctaSecondary", { ...data.ctaSecondary, label: v })}
            />
            <Field
              label="跳转链接"
              hint="WhatsApp 用 https://wa.me/手机号"
              placeholder={DEFAULTS.ctaSecondary.href}
              value={data.ctaSecondary?.href}
              onChange={(v) => update("ctaSecondary", { ...data.ctaSecondary, href: v })}
            />
          </div>
        </div>
      </section>

      {/* === 轮播图 === */}
      <section className="bg-white border border-slate-200 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-1">🖼 Hero 轮播图（3 张）</h2>
        <p className="text-xs text-slate-500 mb-5">
          首页大图区会以 4.5 秒间隔轮播这 3 张图。任意位置留空 = 用图片管理槽位的默认图。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[0, 1, 2].map((idx) => {
            const banner = banners[idx];
            return (
              <div key={idx} className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="aspect-video bg-slate-100 relative">
                  {banner?.url ? (
                    <>
                      <img src={banner.url} alt={banner.alt || ""} className="w-full h-full object-cover" />
                      <button
                        onClick={() => updateBanner(idx, null)}
                        className="absolute top-1 right-1 p-1 bg-black/60 hover:bg-black/80 text-white rounded"
                        title="移除"
                      >
                        <Trash2 size={12} />
                      </button>
                    </>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-xs text-slate-400">
                      第 {idx + 1} 张（未自定义）
                    </div>
                  )}
                </div>
                <div className="p-3">
                  <input
                    ref={fileRefs[idx]}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const f = e.target.files?.[0];
                      if (f) uploadBanner(idx, f);
                      e.target.value = "";
                    }}
                  />
                  <button
                    onClick={() => fileRefs[idx].current?.click()}
                    disabled={uploadingIdx === idx}
                    className="w-full py-2 text-sm border border-slate-200 hover:bg-slate-50 rounded-lg flex items-center justify-center gap-1.5 disabled:opacity-50"
                  >
                    <Upload size={13} />
                    {uploadingIdx === idx ? "上传中..." : banner?.url ? "替换" : "上传"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  hint,
  value,
  onChange,
  placeholder,
  textarea,
}: {
  label: string;
  hint?: string;
  value?: string;
  onChange: (v: string) => void;
  placeholder?: string;
  textarea?: boolean;
}) {
  const Comp: any = textarea ? "textarea" : "input";
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1.5">{label}</label>
      <Comp
        type="text"
        value={value || ""}
        onChange={(e: any) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={textarea ? 3 : undefined}
        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {hint && <p className="text-xs text-slate-400 mt-1">{hint}</p>}
    </div>
  );
}
