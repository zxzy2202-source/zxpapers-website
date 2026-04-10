"use client";

import { useMemo, useRef, useState } from "react";
import Cropper from "react-easy-crop";

type PageOption = {
  pageKey: string;
  pageName: string;
  pagePath: string;
  group: string;
};

type SlotItem = {
  id: string;
  slotKey: string;
  pageKey: string;
  pageName: string;
  pagePath: string;
  sectionKey: string;
  sectionName: string;
  slotName: string;
  label: string;
  description: string | null;
  aspectRatio: "16:9" | "4:3" | "1:1";
  sortOrder: number;
  isActive: boolean;
  imageAssetId: string | null;
  image: null | {
    id: string;
    filename: string;
    originalName: string | null;
    path: string;
    alt: string | null;
    label: string | null;
    size: number | null;
    mimeType: string | null;
    width: number | null;
    height: number | null;
    updatedAt: string;
  };
};

type DashboardData = {
  slots: SlotItem[];
  stats: {
    totalSlots: number;
    uploadedCount: number;
    emptyCount: number;
    coveredPages: number;
  };
  pages: PageOption[];
};

interface ImageManagerProps {
  initialData: DashboardData;
}

type CropArea = { width: number; height: number; x: number; y: number };

function aspectRatioValue(value: SlotItem["aspectRatio"]) {
  if (value === "1:1") return 1;
  if (value === "4:3") return 4 / 3;
  return 16 / 9;
}

function formatFileSize(size?: number | null) {
  if (!size) return "-";
  if (size < 1024) return `${size} B`;
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
  return `${(size / 1024 / 1024).toFixed(2)} MB`;
}

async function loadImage(url: string) {
  const image = new Image();
  image.crossOrigin = "anonymous";
  image.src = url;
  await new Promise((resolve, reject) => {
    image.onload = resolve;
    image.onerror = reject;
  });
  return image;
}

async function getCroppedBlob(imageUrl: string, area: CropArea, outputType = "image/webp") {
  const image = await loadImage(imageUrl);
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(area.width));
  canvas.height = Math.max(1, Math.round(area.height));
  const context = canvas.getContext("2d");

  if (!context) {
    throw new Error("无法创建画布上下文");
  }

  context.drawImage(
    image,
    area.x,
    area.y,
    area.width,
    area.height,
    0,
    0,
    canvas.width,
    canvas.height
  );

  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error("裁剪失败"));
    }, outputType, 0.9);
  });
}

export default function ImageManager({ initialData }: ImageManagerProps) {
  const [data, setData] = useState<DashboardData>(initialData);
  const [pageKey, setPageKey] = useState("all");
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string>("");
  const [selectedSlot, setSelectedSlot] = useState<SlotItem | null>(initialData.slots[0] || null);
  const [rawFile, setRawFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<CropArea | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const statsCards = useMemo(
    () => [
      { label: "总槽位", value: data.stats.totalSlots },
      { label: "已上传", value: data.stats.uploadedCount },
      { label: "空槽位", value: data.stats.emptyCount },
      { label: "覆盖页面", value: data.stats.coveredPages },
    ],
    [data.stats]
  );

  async function refresh(nextPageKey = pageKey, nextKeyword = keyword) {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      params.set("page", nextPageKey);
      if (nextKeyword.trim()) params.set("keyword", nextKeyword.trim());
      const response = await fetch(`/api/admin/image-slots?${params.toString()}`);
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "刷新失败");
      setData({ slots: result.slots, stats: result.stats, pages: result.pages });
      setSelectedSlot((current) => result.slots.find((slot: SlotItem) => slot.slotKey === current?.slotKey) || result.slots[0] || null);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "刷新失败");
    } finally {
      setLoading(false);
    }
  }

  async function initializeSlots() {
    setLoading(true);
    setMessage("正在初始化默认槽位...");
    try {
      const response = await fetch("/api/admin/image-slots/init", { method: "POST" });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "初始化失败");
      setMessage(`已初始化 ${result.total} 个槽位`);
      await refresh();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "初始化失败");
    } finally {
      setLoading(false);
    }
  }

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    const localUrl = URL.createObjectURL(file);
    setRawFile(file);
    setPreviewUrl(localUrl);
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    setCroppedAreaPixels(null);
  }

  async function uploadCurrentSlot() {
    if (!selectedSlot) {
      setMessage("请先选择槽位");
      return;
    }
    if (!rawFile || !previewUrl || !croppedAreaPixels) {
      setMessage("请先选择图片并完成裁剪");
      return;
    }

    setLoading(true);
    setMessage("正在上传裁剪后的图片...");
    try {
      const blob = await getCroppedBlob(previewUrl, croppedAreaPixels);
      const formData = new FormData();
      formData.set("file", new File([blob], rawFile.name.replace(/\.[^.]+$/, "") + ".webp", { type: "image/webp" }));
      if (selectedSlot.image?.alt) {
        formData.set("alt", selectedSlot.image.alt);
      }

      const response = await fetch(`/api/admin/image-slots/${encodeURIComponent(selectedSlot.slotKey)}/upload`, {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "上传失败");

      setMessage("图片上传成功");
      setRawFile(null);
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      setPreviewUrl("");
      if (fileInputRef.current) fileInputRef.current.value = "";
      await refresh();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "上传失败");
    } finally {
      setLoading(false);
    }
  }

  async function generateAlt() {
    if (!selectedSlot) return;
    setLoading(true);
    setMessage("正在生成 Alt 文案...");
    try {
      const response = await fetch(`/api/admin/image-slots/${encodeURIComponent(selectedSlot.slotKey)}/alt`, { method: "POST" });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "生成失败");
      setMessage(`Alt 已更新：${result.alt}`);
      await refresh();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "生成 Alt 失败");
    } finally {
      setLoading(false);
    }
  }

  async function clearSlot() {
    if (!selectedSlot) return;
    setLoading(true);
    setMessage("正在清空槽位图片...");
    try {
      const response = await fetch(`/api/admin/image-slots/${encodeURIComponent(selectedSlot.slotKey)}`, { method: "DELETE" });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "清空失败");
      setMessage("已清空当前槽位");
      await refresh();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "清空失败");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        {statsCards.map((card) => (
          <div key={card.label} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="text-sm text-gray-500">{card.label}</div>
            <div className="mt-2 text-3xl font-semibold text-gray-900">{card.value}</div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
        <div className="grid gap-3 lg:grid-cols-[220px_minmax(0,1fr)_auto_auto]">
          <select
            value={pageKey}
            onChange={(e) => {
              const next = e.target.value;
              setPageKey(next);
              void refresh(next, keyword);
            }}
            className="rounded-xl border border-gray-300 px-3 py-2 text-sm"
          >
            <option value="all">全部页面</option>
            {data.pages.map((page) => (
              <option key={page.pageKey} value={page.pageKey}>
                {page.pageName} · {page.pagePath}
              </option>
            ))}
          </select>
          <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") void refresh(pageKey, keyword);
            }}
            placeholder="搜索页面、Section、槽位名或 Alt"
            className="rounded-xl border border-gray-300 px-3 py-2 text-sm"
          />
          <button
            onClick={() => void refresh()}
            className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white"
            disabled={loading}
          >
            刷新
          </button>
          <button
            onClick={() => void initializeSlots()}
            className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700"
            disabled={loading}
          >
            初始化全部槽位
          </button>
        </div>
        {message ? <p className="mt-3 text-sm text-blue-700">{message}</p> : null}
      </div>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_420px]">
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="px-4 py-3 font-medium">Page</th>
                  <th className="px-4 py-3 font-medium">Section</th>
                  <th className="px-4 py-3 font-medium">Slot</th>
                  <th className="px-4 py-3 font-medium">状态</th>
                  <th className="px-4 py-3 font-medium">图片</th>
                </tr>
              </thead>
              <tbody>
                {data.slots.map((slot) => {
                  const active = selectedSlot?.slotKey === slot.slotKey;
                  return (
                    <tr
                      key={slot.slotKey}
                      className={`cursor-pointer border-t border-gray-100 ${active ? "bg-blue-50" : "hover:bg-gray-50"}`}
                      onClick={() => setSelectedSlot(slot)}
                    >
                      <td className="px-4 py-3 align-top">
                        <div className="font-medium text-gray-900">{slot.pageName}</div>
                        <div className="text-xs text-gray-500">{slot.pagePath}</div>
                      </td>
                      <td className="px-4 py-3 align-top">
                        <div className="text-gray-900">{slot.sectionName}</div>
                        <div className="text-xs text-gray-500">{slot.sectionKey}</div>
                      </td>
                      <td className="px-4 py-3 align-top">
                        <div className="font-medium text-gray-900">{slot.label}</div>
                        <div className="text-xs text-gray-500">{slot.slotKey}</div>
                      </td>
                      <td className="px-4 py-3 align-top">
                        <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${slot.image ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
                          {slot.image ? "已上传" : "空槽位"}
                        </span>
                      </td>
                      <td className="px-4 py-3 align-top text-xs text-gray-500">
                        {slot.image ? `${slot.image.filename} · ${formatFileSize(slot.image.size)}` : "未绑定图片"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          {selectedSlot ? (
            <>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">{selectedSlot.label}</h2>
                <p className="mt-1 text-sm text-gray-500">
                  {selectedSlot.pageName} / {selectedSlot.sectionName} / {selectedSlot.slotName}
                </p>
                <p className="mt-2 text-sm text-gray-600">{selectedSlot.description || "暂无描述"}</p>
              </div>

              <div className="grid gap-2 rounded-xl bg-gray-50 p-4 text-sm text-gray-600">
                <div><span className="font-medium text-gray-900">Page：</span>{selectedSlot.pagePath}</div>
                <div><span className="font-medium text-gray-900">Slot Key：</span>{selectedSlot.slotKey}</div>
                <div><span className="font-medium text-gray-900">推荐比例：</span>{selectedSlot.aspectRatio}</div>
                <div><span className="font-medium text-gray-900">当前 Alt：</span>{selectedSlot.image?.alt || "未生成"}</div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-dashed border-gray-300 bg-gray-50">
                {selectedSlot.image ? (
                  <img src={selectedSlot.image.path} alt={selectedSlot.image.alt || selectedSlot.label} className="h-64 w-full object-cover" />
                ) : previewUrl ? (
                  <div className="relative h-64 w-full bg-black">
                    <Cropper
                      image={previewUrl}
                      crop={crop}
                      zoom={zoom}
                      aspect={aspectRatioValue(selectedSlot.aspectRatio)}
                      onCropChange={setCrop}
                      onZoomChange={setZoom}
                      onCropComplete={(_, croppedPixels) => setCroppedAreaPixels(croppedPixels as CropArea)}
                    />
                  </div>
                ) : (
                  <div className="flex h-64 items-center justify-center text-sm text-gray-400">当前槽位暂无图片，请上传新图</div>
                )}
              </div>

              {previewUrl ? (
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">裁剪缩放</label>
                  <input
                    type="range"
                    min={1}
                    max={3}
                    step={0.05}
                    value={zoom}
                    onChange={(e) => setZoom(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
              ) : null}

              <div className="space-y-3">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="block w-full rounded-xl border border-gray-300 px-3 py-2 text-sm"
                />
                <div className="grid gap-3 sm:grid-cols-2">
                  <button onClick={() => void uploadCurrentSlot()} disabled={loading} className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white disabled:opacity-50">
                    上传到当前槽位
                  </button>
                  <button onClick={() => void generateAlt()} disabled={loading || !selectedSlot.image} className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 disabled:opacity-50">
                    用 Claude 生成 Alt
                  </button>
                  <button onClick={() => void clearSlot()} disabled={loading || !selectedSlot.image} className="rounded-xl border border-red-200 px-4 py-2 text-sm font-medium text-red-600 disabled:opacity-50">
                    删除当前图片
                  </button>
                  <button
                    onClick={() => {
                      setRawFile(null);
                      if (previewUrl) URL.revokeObjectURL(previewUrl);
                      setPreviewUrl("");
                      if (fileInputRef.current) fileInputRef.current.value = "";
                    }}
                    className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700"
                  >
                    清除待上传文件
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="py-16 text-center text-sm text-gray-500">暂无槽位数据，请先初始化</div>
          )}
        </div>
      </div>
    </div>
  );
}
