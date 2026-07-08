"use client";

import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Upload,
  ExternalLink,
  RotateCcw,
  Check,
  Loader2,
  AlertCircle,
  X,
  Search,
  Image as ImageIcon,
  LayoutGrid,
  FileImage,
  Link as LinkIcon,
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
  defaultImages: Record<string, string>;
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

type ImageFilter = "all" | "custom" | "default";

interface PageGroup {
  pageName: string;
  pageUrl: string;
  family: string;
  slots: ImageSlot[];
  customCount: number;
  defaultCount: number;
}

function getPageFamily(slot: ImageSlot): string {
  if (slot.slot.startsWith("ncr-applications:")) return "NCR应用页";
  if (slot.pageUrl === "/") return "首页";
  if (slot.pageUrl.startsWith("/products")) return "产品页";
  if (slot.pageUrl.startsWith("/markets")) return "市场页";
  if (slot.pageUrl.startsWith("/oem")) return "OEM页面";
  if (slot.pageUrl.startsWith("/manufacturing")) return "工厂与资质";
  if (slot.pageUrl.startsWith("/resources")) return "资源页";
  if (slot.pageUrl.startsWith("/contact")) return "联系页";
  if (slot.pageUrl.startsWith("/about")) return "公司页";
  return "其他页面";
}

function getSlotPurpose(slot: ImageSlot): string {
  const key = slot.slot.toLowerCase();
  const label = slot.label.toLowerCase();
  if (key.includes(":hero") || label.includes("顶部图")) return "Hero";
  if (key.includes(":applications:")) return "应用场景";
  if (key.includes(":product-") || key.includes(":category-")) return "首页卡片";
  if (key.includes(":size:")) return "尺寸卡片";
  if (label.includes("工厂") || label.includes("生产线")) return "工厂素材";
  return "页面素材";
}

function slotMatchesQuery(slot: ImageSlot, query: string): boolean {
  if (!query.trim()) return true;
  const q = query.trim().toLowerCase();
  return [slot.label, slot.slot, slot.page, slot.pageUrl, slot.description || ""]
    .join(" ")
    .toLowerCase()
    .includes(q);
}

function slotMatchesStatus(
  slot: ImageSlot,
  filter: ImageFilter,
  overrides: Record<string, string>
): boolean {
  if (filter === "custom") return !!overrides[slot.slot];
  if (filter === "default") return !overrides[slot.slot];
  return true;
}

export default function ImageManagerClient({
  slotsGrouped,
  overrides,
  defaultImages,
}: Props) {
  const router = useRouter();
  const fileInputs = useRef<Record<string, HTMLInputElement | null>>({});
  const [uploading, setUploading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [successSlot, setSuccessSlot] = useState<string | null>(null);
  const [filter, setFilter] = useState<ImageFilter>("all");
  const [activePage, setActivePage] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [dialog, setDialog] = useState<UploadDialogState | null>(null);

  const pageGroups = useMemo<PageGroup[]>(() => {
    return Object.entries(slotsGrouped).map(([pageName, slots]) => {
      const primaryUrl = slots[0]?.pageUrl || "/";
      return {
        pageName,
        pageUrl: primaryUrl,
        family: getPageFamily(slots[0] || {
          slot: "",
          label: "",
          page: pageName,
          pageUrl: primaryUrl,
        }),
        slots,
        customCount: slots.filter((slot) => !!overrides[slot.slot]).length,
        defaultCount: slots.filter((slot) => !overrides[slot.slot]).length,
      };
    });
  }, [overrides, slotsGrouped]);

  const visibleGroups = useMemo(() => {
    return pageGroups
      .filter((group) => activePage === "all" || group.pageName === activePage)
      .map((group) => ({
        ...group,
        slots: group.slots.filter(
          (slot) =>
            slotMatchesStatus(slot, filter, overrides) &&
            slotMatchesQuery(slot, query)
        ),
      }))
      .filter((group) => group.slots.length > 0);
  }, [activePage, filter, overrides, pageGroups, query]);

  const totalSlots = pageGroups.reduce((sum, group) => sum + group.slots.length, 0);
  const customTotal = Object.keys(overrides).length;
  const visibleSlotCount = visibleGroups.reduce(
    (sum, group) => sum + group.slots.length,
    0
  );
  const familyCounts = pageGroups.reduce<Record<string, number>>((acc, group) => {
    acc[group.family] = (acc[group.family] || 0) + group.slots.length;
    return acc;
  }, {});

  /** 选择文件 → 压缩 → 弹预览框（不立即上传） */
  async function handlePickFile(slot: ImageSlot, file: File) {
    setError(null);
    try {
      const result = await compressImage(file, {
        maxEdge: 2000,
        quality: 0.85,
      });

      const targetRatio = parseAspect(slot.aspect);
      let warning: string | null = null;
      if (targetRatio) {
        const diff = aspectDiff(result.width, result.height, targetRatio);
        if (diff > 0.15) {
          warning = `图片比例 ${result.width}×${result.height} 与推荐 ${slot.aspect} 偏差 ${(diff * 100).toFixed(0)}%，前台显示可能有裁切。`;
        }
      }

      const previewUrl = URL.createObjectURL(result.file);
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
      fd.append("slot", slot.slot);
      fd.append("alt", dialog.alt);

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
    if (!confirm("确定要恢复为默认图吗？此操作会清除您上传的自定义图。")) {
      return;
    }
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
    <div className="space-y-5">
      {error && (
        <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          <AlertCircle size={16} /> {error}
          <button
            onClick={() => setError(null)}
            className="ml-auto rounded p-1 text-red-500 hover:bg-red-100 hover:text-red-700"
            aria-label="关闭错误提示"
          >
            <X size={16} />
          </button>
        </div>
      )}

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatCard label="页面分组" value={pageGroups.length} icon={LayoutGrid} />
        <StatCard label="图片位总数" value={totalSlots} icon={ImageIcon} />
        <StatCard label="已自定义" value={customTotal} icon={Check} tone="blue" />
        <StatCard label="当前结果" value={visibleSlotCount} icon={Search} />
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative flex-1">
            <Search
              size={16}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="搜索页面、图片位、URL 或用途说明"
              className="h-10 w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="flex flex-wrap gap-2" role="group" aria-label="图片状态筛选">
            {[
              { key: "all", label: "全部" },
              { key: "custom", label: "已自定义" },
              { key: "default", label: "待替换" },
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => setFilter(item.key as ImageFilter)}
                className={`h-10 rounded-lg px-4 text-sm font-medium transition ${
                  filter === item.key
                    ? "bg-slate-900 text-white"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-slate-400"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {Object.entries(familyCounts).map(([family, count]) => (
            <span
              key={family}
              className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
            >
              {family} {count}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <div className="mb-2 flex items-center justify-between px-2">
              <div className="text-sm font-semibold text-slate-900">页面目录</div>
              <div className="text-xs text-slate-400">{pageGroups.length} 页</div>
            </div>
            <button
              onClick={() => setActivePage("all")}
              className={`mb-1 flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition ${
                activePage === "all"
                  ? "bg-slate-900 text-white"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              <span className="font-medium">全部页面</span>
              <span className="text-xs opacity-75">{totalSlots}</span>
            </button>
            <div className="max-h-[68vh] overflow-auto pr-1">
              {pageGroups.map((group) => (
                <button
                  key={group.pageName}
                  onClick={() => setActivePage(group.pageName)}
                  className={`mb-1 w-full rounded-lg px-3 py-2 text-left transition ${
                    activePage === group.pageName
                      ? "bg-blue-50 text-blue-800 ring-1 ring-blue-200"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="min-w-0 truncate text-sm font-medium">
                      {group.pageName}
                    </span>
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500">
                      {group.slots.length}
                    </span>
                  </div>
                  <div className="mt-1 flex items-center justify-between gap-2 text-xs text-slate-400">
                    <span className="truncate">{group.family}</span>
                    <span>{group.customCount} 已换</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </aside>

        <main className="min-w-0">
          {visibleGroups.length === 0 ? (
            <div className="rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center">
              <FileImage className="mx-auto text-slate-300" size={36} />
              <h2 className="mt-3 text-base font-semibold text-slate-900">
                没有匹配的图片位
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                调整页面目录、搜索关键词或状态筛选后再试。
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {visibleGroups.map((group) => (
                <section
                  key={group.pageName}
                  className="rounded-xl border border-slate-200 bg-white"
                >
                  <div className="flex flex-col gap-3 border-b border-slate-100 p-4 lg:flex-row lg:items-center lg:justify-between">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="text-base font-semibold text-slate-900">
                          {group.pageName}
                        </h2>
                        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
                          {group.family}
                        </span>
                      </div>
                      <div className="mt-1 flex min-w-0 items-center gap-1.5 text-xs text-slate-500">
                        <LinkIcon size={13} />
                        <span className="truncate">{group.pageUrl}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <CountBadge label="图片位" value={group.slots.length} />
                      <CountBadge label="已换" value={group.customCount} tone="blue" />
                      <CountBadge label="待换" value={group.defaultCount} />
                      <a
                        href={group.pageUrl}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-slate-200 px-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
                      >
                        <ExternalLink size={14} />
                        查看页面
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 xl:grid-cols-3">
                    {group.slots.map((slot) => (
                      <ImageSlotCard
                        key={slot.slot}
                        slot={slot}
                        currentUrl={overrides[slot.slot] || defaultImages[slot.slot]}
                        isCustom={!!overrides[slot.slot]}
                        isLoading={uploading === slot.slot}
                        isSuccess={successSlot === slot.slot}
                        fileInputRef={(el) => {
                          fileInputs.current[slot.slot] = el;
                        }}
                        onPickFile={handlePickFile}
                        onChooseFile={() => fileInputs.current[slot.slot]?.click()}
                        onReset={handleReset}
                      />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )}
        </main>
      </div>

      {dialog && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={handleCancelDialog}
        >
          <div
            className="max-h-[90vh] w-full max-w-2xl overflow-auto rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
              <div>
                <h3 className="font-semibold text-slate-900">
                  上传到「{dialog.slot.label}」
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  {dialog.slot.page} ·{" "}
                  <code className="text-slate-400">{dialog.slot.slot}</code>
                </p>
              </div>
              <button
                onClick={handleCancelDialog}
                className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
                aria-label="关闭上传确认"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4 p-6">
              <div className="overflow-hidden rounded-lg bg-slate-100">
                <img
                  src={dialog.previewUrl}
                  alt="preview"
                  className="max-h-80 w-full object-contain"
                />
              </div>

              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="rounded bg-slate-50 p-2">
                  <div className="text-slate-400">尺寸</div>
                  <div className="mt-0.5 font-mono text-slate-700">
                    {dialog.width}×{dialog.height}
                  </div>
                </div>
                <div className="rounded bg-slate-50 p-2">
                  <div className="text-slate-400">原始大小</div>
                  <div className="mt-0.5 font-mono text-slate-700">
                    {formatBytes(dialog.originalSize)}
                  </div>
                </div>
                <div className="rounded bg-emerald-50 p-2">
                  <div className="text-emerald-600">压缩后</div>
                  <div className="mt-0.5 font-mono font-semibold text-emerald-700">
                    {formatBytes(dialog.compressedSize)}
                    {dialog.compressedSize < dialog.originalSize && (
                      <span className="ml-1 text-emerald-500">
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

              {dialog.warning && (
                <div className="flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
                  <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">比例不匹配</div>
                    <div className="mt-0.5 text-xs">{dialog.warning}</div>
                  </div>
                </div>
              )}

              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  语义化文件名（用于 R2 存储 + SEO）
                </label>
                <input
                  type="text"
                  value={dialog.alt}
                  onChange={(event) =>
                    setDialog({ ...dialog, alt: event.target.value })
                  }
                  placeholder="如：zhixin-factory-aerial-view"
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="mt-1 text-xs text-slate-400">
                  建议英文+连字符，会自动 sanitize；将存为{" "}
                  <code className="rounded bg-slate-100 px-1">
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

            <div className="flex gap-2 border-t border-slate-100 bg-slate-50 px-6 py-4">
              <button
                onClick={handleCancelDialog}
                className="flex-1 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-white"
              >
                取消
              </button>
              <button
                onClick={handleConfirmUpload}
                disabled={uploading === dialog.slot.slot}
                className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 disabled:opacity-50"
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

function StatCard({
  label,
  value,
  icon: Icon,
  tone = "slate",
}: {
  label: string;
  value: number;
  icon: typeof ImageIcon;
  tone?: "slate" | "blue";
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-xs font-medium text-slate-500">{label}</div>
          <div className="mt-1 text-2xl font-semibold text-slate-900">{value}</div>
        </div>
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-lg ${
            tone === "blue"
              ? "bg-blue-50 text-blue-600"
              : "bg-slate-100 text-slate-600"
          }`}
        >
          <Icon size={18} />
        </div>
      </div>
    </div>
  );
}

function CountBadge({
  label,
  value,
  tone = "slate",
}: {
  label: string;
  value: number;
  tone?: "slate" | "blue";
}) {
  return (
    <span
      className={`rounded-full px-2.5 py-1 text-xs font-medium ${
        tone === "blue"
          ? "bg-blue-50 text-blue-700"
          : "bg-slate-100 text-slate-600"
      }`}
    >
      {label} {value}
    </span>
  );
}

function ImageSlotCard({
  slot,
  currentUrl,
  isCustom,
  isLoading,
  isSuccess,
  fileInputRef,
  onPickFile,
  onChooseFile,
  onReset,
}: {
  slot: ImageSlot;
  currentUrl?: string;
  isCustom: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  fileInputRef: (el: HTMLInputElement | null) => void;
  onPickFile: (slot: ImageSlot, file: File) => void;
  onChooseFile: () => void;
  onReset: (slot: string) => void;
}) {
  return (
    <div
      className={`overflow-hidden rounded-lg border transition ${
        isCustom ? "border-blue-200" : "border-slate-200"
      } ${isSuccess ? "ring-2 ring-emerald-400" : ""}`}
    >
      <div className="relative aspect-video bg-slate-100">
        {currentUrl ? (
          <img
            src={currentUrl}
            alt={slot.label}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs text-slate-400">
            使用代码内置图
          </div>
        )}
        <div className="absolute left-2 top-2 flex flex-wrap gap-1.5">
          <span
            className={`rounded px-2 py-0.5 text-xs font-medium ${
              isCustom
                ? "bg-blue-600 text-white"
                : "bg-white/90 text-slate-600"
            }`}
          >
            {isCustom ? "已自定义" : "待替换"}
          </span>
          <span className="rounded bg-white/90 px-2 py-0.5 text-xs font-medium text-slate-600">
            {getSlotPurpose(slot)}
          </span>
        </div>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white">
            <Loader2 className="animate-spin" size={28} />
          </div>
        )}
        {isSuccess && (
          <div className="absolute inset-0 flex items-center justify-center gap-2 bg-emerald-500/80 font-semibold text-white">
            <Check size={28} /> 已更新
          </div>
        )}
      </div>

      <div className="space-y-3 p-4">
        <div>
          <div className="text-sm font-semibold leading-5 text-slate-900">
            {slot.label}
          </div>
          {slot.description && (
            <p className="mt-1 text-xs leading-5 text-slate-500">
              {slot.description}
            </p>
          )}
        </div>

        <div className="space-y-1 rounded-lg bg-slate-50 p-2 text-xs text-slate-500">
          <div className="flex items-center justify-between gap-2">
            <span>推荐比例</span>
            <span className="font-mono text-slate-700">{slot.aspect || "-"}</span>
          </div>
          <code className="block break-all text-slate-400">{slot.slot}</code>
        </div>

        <div className="flex gap-2">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(event) => {
              const file = event.target.files?.[0];
              if (file) onPickFile(slot, file);
              event.target.value = "";
            }}
          />
          <button
            onClick={onChooseFile}
            disabled={isLoading}
            className="flex h-9 flex-1 items-center justify-center gap-1.5 rounded-lg bg-blue-600 px-3 text-sm font-medium text-white transition hover:bg-blue-700 disabled:opacity-50"
          >
            <Upload size={14} /> 换图
          </button>
          <a
            href={slot.pageUrl}
            target="_blank"
            rel="noopener"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50"
            title="查看效果"
            aria-label={`查看 ${slot.label} 所在页面`}
          >
            <ExternalLink size={14} />
          </a>
          {isCustom && (
            <button
              onClick={() => onReset(slot.slot)}
              disabled={isLoading}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:border-red-200 hover:bg-red-50 hover:text-red-600"
              title="恢复默认图"
              aria-label={`恢复 ${slot.label} 默认图`}
            >
              <RotateCcw size={14} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
