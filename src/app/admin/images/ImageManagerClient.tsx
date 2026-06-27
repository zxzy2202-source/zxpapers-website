"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Upload,
  ExternalLink,
  RotateCcw,
  Check,
  Loader2,
  AlertCircle,
  X,
} from "lucide-react";
import type { ImageSlot } from "@/config/imageSlots";
import {
  compressImage,
  parseAspect,
  aspectDiff,
  formatBytes,
} from "@/lib/imageCompress";

interface Props {
  slotsGrouped: Record<string, ImageSlot[]>;
  overrides: Record<string, string>;
}

interface UploadDialogState {
  slot: ImageSlot;
  rawFile: File;
  previewUrl: string;
  width: number;
  height: number;
  originalSize: number;
  compressedSize: number;
  compressedFile: File;
  alt: string;
  warning: string | null;
}

export default function ImageManagerClient({ slotsGrouped, overrides }: Props) {
  const router = useRouter();
  const [uploading, setUploading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [successSlot, setSuccessSlot] = useState<string | null>(null);
  const fileInputs = useRef<Record<string, HTMLInputElement | null>>({});
  const [filter, setFilter] = useState<"all" | "custom" | "default">("all");
  const [dialog, setDialog] = useState<UploadDialogState | null>(null);

  /** 选择文件 → 压缩 → 弹预览框（不立即上传） */
  async function handlePickFile(slot: ImageSlot, file: File) {
    setError(null);
    try {
      const result = await compressImage(file, {
        maxEdge: 2000,
        quality: 0.85,
      });

      // 校验宽高比
      const targetRatio = parseAspect(slot.aspect);
      let warning: string | null = null;
      if (targetRatio) {
        const diff = aspectDiff(result.width, result.height, targetRatio);
        if (diff > 0.15) {
          warning = `图片比例 ${result.width}×${result.height} 与推荐 ${slot.aspect} 偏差 ${(diff * 100).toFixed(0)}%，前台显示可能有裁切。`;
        }
      }

      const previewUrl = URL.createObjectURL(result.file);
      // 默认 alt = 原文件名去扩展名
      const defaultAlt = file.name.replace(/\.[^.]+$/, "");

      setDialog({
        slot,
        rawFile: file,
        previewUrl,
        width: result.width,
        height: result.height,
        originalSize: result.originalSize,
        compressedSize: result.compressedSize,
        compressedFile: result.file,
        alt: defaultAlt,
        warning,
      });
    } catch (e: any) {
      setError(e.message || "图片读取失败");
    }
  }

  /** 弹框确认 → 真正上传 */
  async function handleConfirmUpload() {
    if (!dialog) return;
    const slot = dialog.slot;
    setUploading(slot.slot);
    setError(null);
    setSuccessSlot(null);

    try {
      const fd = new FormData();
      fd.append("file", dialog.compressedFile);
      fd.append("slot", slot.slot); // ⭐ 告诉后端按 slot 分目录
      fd.append("alt", dialog.alt); // ⭐ 语义化命名

      const uploadRes = await fetch("/api/admin/upload-r2", {
        method: "POST",
        body: fd,
      });
      const uploadData = await uploadRes.json();
      if (!uploadRes.ok) throw new Error(uploadData.error || "上传失败");

      const saveRes = await fetch("/api/admin/images", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slot: slot.slot, url: uploadData.url }),
      });
      const saveData = await saveRes.json();
      if (!saveRes.ok) throw new Error(saveData.error || "保存失败");

      setSuccessSlot(slot.slot);
      setTimeout(() => setSuccessSlot(null), 2500);
      URL.revokeObjectURL(dialog.previewUrl);
      setDialog(null);
      router.refresh();
    } catch (e: any) {
      setError(e.message || "操作失败");
    } finally {
      setUploading(null);
    }
  }

  function handleCancelDialog() {
    if (dialog) URL.revokeObjectURL(dialog.previewUrl);
    setDialog(null);
  }

  async function handleReset(slot: string) {
    if (!confirm("确定要恢复为默认图吗？此操作会清除您上传的自定义图。"))
      return;
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
          <button
            onClick={() => setError(null)}
            className="ml-auto text-red-500 hover:text-red-700"
          >
            ×
          </button>
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
                        <img
                          src={currentUrl}
                          alt={slot.label}
                          className="w-full h-full object-cover"
                        />
                      ) : (
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
                      <div className="font-medium text-slate-900 text-sm">
                        {slot.label}
                      </div>
                      <div className="text-xs text-slate-400 mt-1">
                        {slot.aspect && (
                          <span className="mr-2">📐 {slot.aspect}</span>
                        )}
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
                            if (f) handlePickFile(slot, f);
                            e.target.value = "";
                          }}
                        />
                        <button
                          onClick={() =>
                            fileInputs.current[slot.slot]?.click()
                          }
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

      {/* 上传确认弹框 */}
      {dialog && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
          onClick={handleCancelDialog}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <div>
                <h3 className="font-semibold text-slate-900">
                  上传到「{dialog.slot.label}」
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {dialog.slot.page} ·{" "}
                  <code className="text-slate-400">{dialog.slot.slot}</code>
                </p>
              </div>
              <button
                onClick={handleCancelDialog}
                className="text-slate-400 hover:text-slate-600 p-1"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-4">
              {/* 预览 */}
              <div className="bg-slate-100 rounded-lg overflow-hidden">
                <img
                  src={dialog.previewUrl}
                  alt="preview"
                  className="w-full max-h-80 object-contain"
                />
              </div>

              {/* 元信息表 */}
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="bg-slate-50 rounded p-2">
                  <div className="text-slate-400">尺寸</div>
                  <div className="font-mono text-slate-700 mt-0.5">
                    {dialog.width}×{dialog.height}
                  </div>
                </div>
                <div className="bg-slate-50 rounded p-2">
                  <div className="text-slate-400">原始大小</div>
                  <div className="font-mono text-slate-700 mt-0.5">
                    {formatBytes(dialog.originalSize)}
                  </div>
                </div>
                <div className="bg-emerald-50 rounded p-2">
                  <div className="text-emerald-600">压缩后</div>
                  <div className="font-mono text-emerald-700 font-semibold mt-0.5">
                    {formatBytes(dialog.compressedSize)}
                    {dialog.compressedSize < dialog.originalSize && (
                      <span className="text-emerald-500 ml-1">
                        ↓
                        {(
                          ((dialog.originalSize - dialog.compressedSize) /
                            dialog.originalSize) *
                          100
                        ).toFixed(0)}
                        %
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* 比例警告 */}
              {dialog.warning && (
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-amber-800 text-sm flex items-start gap-2">
                  <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">比例不匹配</div>
                    <div className="text-xs mt-0.5">{dialog.warning}</div>
                  </div>
                </div>
              )}

              {/* 语义化命名输入 */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  语义化文件名（用于 R2 存储 + SEO）
                </label>
                <input
                  type="text"
                  value={dialog.alt}
                  onChange={(e) =>
                    setDialog({ ...dialog, alt: e.target.value })
                  }
                  placeholder="如：zhixin-factory-aerial-view"
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-xs text-slate-400 mt-1">
                  建议英文+连字符，会自动 sanitize；将存为{" "}
                  <code className="bg-slate-100 px-1 rounded">
                    {dialog.slot.slot.replace(/:/g, "-")}/YYYYMMDD-
                    {(dialog.alt || "image")
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")
                      .replace(/^-|-$/g, "")
                      .slice(0, 60) || "image"}
                    -xxxxxx.jpg
                  </code>
                </p>
              </div>
            </div>

            <div className="flex gap-2 px-6 py-4 border-t border-slate-100 bg-slate-50">
              <button
                onClick={handleCancelDialog}
                className="flex-1 py-2 px-4 border border-slate-200 hover:bg-white text-slate-700 text-sm font-medium rounded-lg transition"
              >
                取消
              </button>
              <button
                onClick={handleConfirmUpload}
                disabled={uploading === dialog.slot.slot}
                className="flex-1 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition disabled:opacity-50 flex items-center justify-center gap-1.5"
              >
                {uploading === dialog.slot.slot ? (
                  <>
                    <Loader2 className="animate-spin" size={14} /> 上传中
                  </>
                ) : (
                  <>
                    <Upload size={14} /> 确认上传
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
