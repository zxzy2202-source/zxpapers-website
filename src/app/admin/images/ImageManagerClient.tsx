"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Upload, ExternalLink, RotateCcw, Check, Loader2, AlertCircle } from "lucide-react";
import type { ImageSlot } from "@/config/imageSlots";

interface Props {
  slotsGrouped: Record<string, ImageSlot[]>;
  overrides: Record<string, string>;
}

export default function ImageManagerClient({ slotsGrouped, overrides }: Props) {
  const router = useRouter();
  const [uploading, setUploading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [successSlot, setSuccessSlot] = useState<string | null>(null);
  const fileInputs = useRef<Record<string, HTMLInputElement | null>>({});
  const [filter, setFilter] = useState<"all" | "custom" | "default">("all");

  async function handleFile(slot: string, file: File) {
    setUploading(slot);
    setError(null);
    setSuccessSlot(null);

    try {
      // 1. 上传到 R2
      const fd = new FormData();
      fd.append("file", file);
      fd.append("folder", "slots");

      const uploadRes = await fetch("/api/admin/upload-r2", {
        method: "POST",
        body: fd,
      });
      const uploadData = await uploadRes.json();
      if (!uploadRes.ok) throw new Error(uploadData.error || "上传失败");

      // 2. 写入槽位映射
      const saveRes = await fetch("/api/admin/images", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slot, url: uploadData.url }),
      });
      const saveData = await saveRes.json();
      if (!saveRes.ok) throw new Error(saveData.error || "保存失败");

      setSuccessSlot(slot);
      setTimeout(() => setSuccessSlot(null), 2500);
      router.refresh();
    } catch (e: any) {
      setError(e.message || "操作失败");
    } finally {
      setUploading(null);
    }
  }

  async function handleReset(slot: string) {
    if (!confirm("确定要恢复为默认图吗？此操作会清除您上传的自定义图。")) return;
    setUploading(slot);
    try {
      const res = await fetch("/api/admin/images", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slot }),
      });
      if (!res.ok) throw new Error("恢复失败");
      router.refresh();
    } catch (e: any) {
      setError(e.message);
    } finally {
      setUploading(null);
    }
  }

  return (
    <div>
      {/* 错误提示 */}
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm flex items-center gap-2">
          <AlertCircle size={16} /> {error}
          <button onClick={() => setError(null)} className="ml-auto text-red-500 hover:text-red-700">×</button>
        </div>
      )}

      {/* 过滤器 */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {[
          { key: "all", label: "全部" },
          { key: "custom", label: "已自定义" },
          { key: "default", label: "使用默认图" },
        ].map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key as any)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              filter === f.key
                ? "bg-slate-900 text-white"
                : "bg-white border border-slate-200 text-slate-700 hover:border-slate-400"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* 分组列表 */}
      {Object.entries(slotsGrouped).map(([pageName, slots]) => {
        const filtered = slots.filter((s) => {
          if (filter === "custom") return !!overrides[s.slot];
          if (filter === "default") return !overrides[s.slot];
          return true;
        });
        if (filtered.length === 0) return null;

        return (
          <section key={pageName} className="mb-8">
            <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3 px-1">
              {pageName}（{filtered.length}）
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((slot) => {
                const currentUrl = overrides[slot.slot];
                const isCustom = !!currentUrl;
                const isLoading = uploading === slot.slot;
                const isSuccess = successSlot === slot.slot;

                return (
                  <div
                    key={slot.slot}
                    className={`bg-white rounded-xl border-2 transition overflow-hidden ${
                      isCustom ? "border-blue-200" : "border-slate-200"
                    } ${isSuccess ? "ring-2 ring-emerald-400" : ""}`}
                  >
                    {/* 缩略图预览 */}
                    <div className="relative aspect-video bg-slate-100">
                      {currentUrl ? (
                        // 后台已设置的图
                        <img
                          src={currentUrl}
                          alt={slot.label}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        // 还没设置：显示一个占位提示
                        <div className="flex items-center justify-center w-full h-full text-slate-400 text-xs">
                          使用代码内置图
                        </div>
                      )}
                      {isCustom && (
                        <div className="absolute top-2 left-2 px-2 py-0.5 rounded text-xs font-medium bg-blue-600 text-white">
                          已自定义
                        </div>
                      )}
                      {isLoading && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white">
                          <Loader2 className="animate-spin" size={28} />
                        </div>
                      )}
                      {isSuccess && (
                        <div className="absolute inset-0 bg-emerald-500/80 flex items-center justify-center text-white font-semibold">
                          <Check size={28} /> 已更新
                        </div>
                      )}
                    </div>

                    {/* 信息 */}
                    <div className="p-4">
                      <div className="font-medium text-slate-900 text-sm">{slot.label}</div>
                      <div className="text-xs text-slate-400 mt-1">
                        {slot.aspect && <span className="mr-2">📐 {slot.aspect}</span>}
                        <code className="text-slate-400">{slot.slot}</code>
                      </div>

                      {/* 操作按钮 */}
                      <div className="flex gap-2 mt-3">
                        <input
                          ref={(el) => {
                            fileInputs.current[slot.slot] = el;
                          }}
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            const f = e.target.files?.[0];
                            if (f) handleFile(slot.slot, f);
                            e.target.value = "";
                          }}
                        />
                        <button
                          onClick={() => fileInputs.current[slot.slot]?.click()}
                          disabled={isLoading}
                          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition disabled:opacity-50"
                        >
                          <Upload size={14} /> 换图
                        </button>
                        <a
                          href={slot.pageUrl}
                          target="_blank"
                          rel="noopener"
                          className="p-2 border border-slate-200 hover:bg-slate-50 rounded-lg text-slate-600"
                          title="查看效果"
                        >
                          <ExternalLink size={14} />
                        </a>
                        {isCustom && (
                          <button
                            onClick={() => handleReset(slot.slot)}
                            disabled={isLoading}
                            className="p-2 border border-slate-200 hover:bg-red-50 hover:border-red-200 hover:text-red-600 rounded-lg text-slate-600"
                            title="恢复默认图"
                          >
                            <RotateCcw size={14} />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
