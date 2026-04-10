"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { IMAGE_SLOT_GROUPS, getSlotInfo, type ImageSlot } from "@/config/imageSlots";

interface ImageItem {
  id: string;
  filename: string;
  path: string;
  alt?: string | null;
  page?: string | null;
  size?: number | null;
}

interface UploadTask {
  id: string;
  file: File;
  preview: string;
  status: "pending" | "uploading" | "success" | "error";
  progress: number;
  error?: string;
  result?: ImageItem;
  slot: string;   // 绑定的页面槽位
  altText: string; // Alt 文本
}

interface Props {
  images: ImageItem[];
}

function formatSize(bytes?: number | null): string {
  if (!bytes) return "—";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/svg+xml"];
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

// 槽位选择器组件
function SlotSelector({
  value,
  onChange,
  compact = false,
}: {
  value: string;
  onChange: (v: string) => void;
  compact?: boolean;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onClick={(e) => e.stopPropagation()}
      className={`border border-gray-200 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none ${
        compact ? "text-xs px-2 py-1 max-w-[200px]" : "text-sm px-3 py-2 w-full"
      }`}
    >
      <option value="">— 不绑定页面位置 —</option>
      {Object.entries(IMAGE_SLOT_GROUPS).map(([group, slots]) => (
        <optgroup key={group} label={group}>
          {slots.map((s) => (
            <option key={s.slot} value={s.slot}>
              {s.label}
            </option>
          ))}
        </optgroup>
      ))}
    </select>
  );
}

export default function ImageManager({ images: initialImages }: Props) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const replaceInputRef = useRef<HTMLInputElement>(null);
  const dropZoneRef = useRef<HTMLDivElement>(null);

  const [images, setImages] = useState<ImageItem[]>(initialImages);
  const [search, setSearch] = useState("");
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);
  const [replaceTarget, setReplaceTarget] = useState<ImageItem | null>(null);
  const [globalError, setGlobalError] = useState("");

  // 批量上传队列
  const [uploadQueue, setUploadQueue] = useState<UploadTask[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [showUploadPanel, setShowUploadPanel] = useState(false);

  // 全局默认槽位（加入队列前可以预设）
  const [defaultSlot, setDefaultSlot] = useState("");

  // 详情面板：编辑绑定槽位
  const [editingSlot, setEditingSlot] = useState<string | null>(null);
  const [editingSlotSaving, setEditingSlotSaving] = useState(false);

  const filtered = images.filter(
    (img) =>
      img.filename.toLowerCase().includes(search.toLowerCase()) ||
      img.path.toLowerCase().includes(search.toLowerCase()) ||
      (img.alt || "").toLowerCase().includes(search.toLowerCase()) ||
      (img.page || "").toLowerCase().includes(search.toLowerCase())
  );

  // 将文件添加到上传队列
  const addFilesToQueue = useCallback(
    (files: File[], slotOverride?: string) => {
      const validFiles: UploadTask[] = [];
      const errors: string[] = [];

      for (const file of files) {
        if (!ALLOWED_TYPES.includes(file.type)) {
          errors.push(`${file.name}：不支持的格式（仅支持 JPG/PNG/WebP/GIF/SVG）`);
          continue;
        }
        if (file.size > MAX_FILE_SIZE) {
          errors.push(`${file.name}：文件超过 10MB 限制`);
          continue;
        }
        validFiles.push({
          id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
          file,
          preview: URL.createObjectURL(file),
          status: "pending",
          progress: 0,
          slot: slotOverride ?? defaultSlot,
          altText: "",
        });
      }

      if (errors.length > 0) setGlobalError(errors.join("；"));
      if (validFiles.length > 0) {
        setUploadQueue((prev) => [...prev, ...validFiles]);
        setShowUploadPanel(true);
      }
    },
    [defaultSlot]
  );

  // 上传单个文件
  const uploadSingleFile = useCallback(
    async (task: UploadTask): Promise<ImageItem | null> => {
      const formData = new FormData();
      formData.append("file", task.file);
      formData.append("alt", task.altText || "");
      formData.append("page", task.slot || "");

      setUploadQueue((prev) =>
        prev.map((t) => (t.id === task.id ? { ...t, status: "uploading", progress: 10 } : t))
      );

      const progressInterval = setInterval(() => {
        setUploadQueue((prev) =>
          prev.map((t) =>
            t.id === task.id && t.status === "uploading" && t.progress < 85
              ? { ...t, progress: t.progress + 15 }
              : t
          )
        );
      }, 300);

      try {
        const res = await fetch("/api/admin/images", {
          method: "POST",
          body: formData,
        });
        clearInterval(progressInterval);

        if (!res.ok) {
          const data = await res.json();
          setUploadQueue((prev) =>
            prev.map((t) =>
              t.id === task.id
                ? { ...t, status: "error", progress: 0, error: data.error || "上传失败" }
                : t
            )
          );
          return null;
        }

        const data = await res.json();
        setUploadQueue((prev) =>
          prev.map((t) =>
            t.id === task.id
              ? { ...t, status: "success", progress: 100, result: data.image }
              : t
          )
        );
        return data.image as ImageItem;
      } catch {
        clearInterval(progressInterval);
        setUploadQueue((prev) =>
          prev.map((t) =>
            t.id === task.id
              ? { ...t, status: "error", progress: 0, error: "网络错误，请重试" }
              : t
          )
        );
        return null;
      }
    },
    []
  );

  // 自动处理队列中的 pending 任务（并发数 = 2）
  useEffect(() => {
    const pendingTasks = uploadQueue.filter((t) => t.status === "pending");
    const uploadingCount = uploadQueue.filter((t) => t.status === "uploading").length;
    if (pendingTasks.length === 0 || uploadingCount >= 2) return;

    const toStart = pendingTasks.slice(0, 2 - uploadingCount);
    toStart.forEach((task) => {
      uploadSingleFile(task).then((result) => {
        if (result) setImages((prev) => [result, ...prev]);
      });
    });
  }, [uploadQueue, uploadSingleFile]);

  // 拖拽事件处理
  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (dropZoneRef.current && !dropZoneRef.current.contains(e.relatedTarget as Node)) {
      setIsDragging(false);
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
      setGlobalError("");
      const files = Array.from(e.dataTransfer.files).filter((f) =>
        f.type.startsWith("image/")
      );
      if (files.length > 0) addFilesToQueue(files);
    },
    [addFilesToQueue]
  );

  // 替换图片（单文件）
  async function handleReplace(file: File) {
    if (!replaceTarget) return;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("replaceId", replaceTarget.id);
    try {
      const res = await fetch("/api/admin/images", { method: "POST", body: formData });
      if (res.ok) {
        setReplaceTarget(null);
        setSelectedImage(null);
        router.refresh();
      } else {
        const data = await res.json();
        setGlobalError(data.error || "替换失败");
      }
    } catch {
      setGlobalError("网络错误，请重试");
    }
  }

  // 保存已上传图片的槽位绑定
  async function saveSlotBinding(imageId: string, newSlot: string) {
    setEditingSlotSaving(true);
    try {
      const res = await fetch(`/api/admin/images/${imageId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ page: newSlot }),
      });
      if (res.ok) {
        setImages((prev) =>
          prev.map((img) =>
            img.id === imageId ? { ...img, page: newSlot || null } : img
          )
        );
        if (selectedImage?.id === imageId) {
          setSelectedImage((prev) => prev ? { ...prev, page: newSlot || null } : null);
        }
        setEditingSlot(null);
      } else {
        setGlobalError("保存失败，请重试");
      }
    } catch {
      setGlobalError("网络错误，请重试");
    } finally {
      setEditingSlotSaving(false);
    }
  }

  const clearFinished = () => {
    setUploadQueue((prev) =>
      prev.filter((t) => t.status === "pending" || t.status === "uploading")
    );
  };

  const retryTask = (taskId: string) => {
    setUploadQueue((prev) =>
      prev.map((t) =>
        t.id === taskId ? { ...t, status: "pending", progress: 0, error: undefined } : t
      )
    );
  };

  const successCount = uploadQueue.filter((t) => t.status === "success").length;
  const errorCount = uploadQueue.filter((t) => t.status === "error").length;
  const pendingOrUploadingCount = uploadQueue.filter(
    (t) => t.status === "pending" || t.status === "uploading"
  ).length;

  return (
    <div className="space-y-4">
      {/* Top Bar */}
      <div className="flex items-center gap-3">
        <div className="flex-1 relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="搜索图片名称、路径、页面位置..."
            className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <button
          onClick={() => { setGlobalError(""); fileInputRef.current?.click(); }}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
          批量上传
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => {
            const files = Array.from(e.target.files || []);
            if (files.length > 0) addFilesToQueue(files);
            e.target.value = "";
          }}
        />
      </div>

      {/* 默认页面位置预设 */}
      <div className="flex items-center gap-3 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3">
        <svg className="w-4 h-4 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
        <span className="text-sm text-blue-700 font-medium whitespace-nowrap">上传到页面位置：</span>
        <div className="flex-1">
          <SlotSelector value={defaultSlot} onChange={setDefaultSlot} />
        </div>
        {defaultSlot && (
          <div className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-lg whitespace-nowrap">
            {getSlotInfo(defaultSlot)?.page}
          </div>
        )}
      </div>

      {/* 全局错误提示 */}
      {globalError && (
        <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-red-700 text-sm flex items-start gap-2">
          <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{globalError}</span>
          <button onClick={() => setGlobalError("")} className="ml-auto text-red-400 hover:text-red-600">✕</button>
        </div>
      )}

      {/* 拖拽上传区域 */}
      <div
        ref={dropZoneRef}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`relative border-2 border-dashed rounded-xl py-8 px-6 text-center cursor-pointer transition-all select-none ${
          isDragging
            ? "border-blue-500 bg-blue-50 scale-[1.01]"
            : "border-gray-200 bg-gray-50 hover:border-blue-400 hover:bg-blue-50/50"
        }`}
      >
        <div className="flex flex-col items-center gap-2 pointer-events-none">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${isDragging ? "bg-blue-100" : "bg-white border border-gray-200"}`}>
            <svg className={`w-6 h-6 ${isDragging ? "text-blue-500" : "text-gray-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          </div>
          {isDragging ? (
            <p className="text-blue-600 font-medium text-sm">松开鼠标即可上传</p>
          ) : (
            <>
              <p className="text-gray-600 text-sm font-medium">拖拽图片到此处，或点击选择文件</p>
              <p className="text-gray-400 text-xs">
                支持 JPG、PNG、WebP、GIF、SVG，单文件最大 10MB
                {defaultSlot && (
                  <span className="text-blue-500 ml-1">
                    → 将绑定到「{getSlotInfo(defaultSlot)?.label}」
                  </span>
                )}
              </p>
            </>
          )}
        </div>
      </div>

      {/* 上传队列面板 */}
      {uploadQueue.length > 0 && (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          {/* 面板头部 */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowUploadPanel(!showUploadPanel)}
                className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                <svg className={`w-4 h-4 transition-transform ${showUploadPanel ? "" : "-rotate-90"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                上传队列
              </button>
              <div className="flex items-center gap-2 text-xs">
                {pendingOrUploadingCount > 0 && (
                  <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{pendingOrUploadingCount} 待上传</span>
                )}
                {successCount > 0 && (
                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full">{successCount} 成功</span>
                )}
                {errorCount > 0 && (
                  <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded-full">{errorCount} 失败</span>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              {(successCount > 0 || errorCount > 0) && pendingOrUploadingCount === 0 && (
                <button onClick={clearFinished} className="text-xs text-gray-500 hover:text-gray-700 px-2 py-1 rounded hover:bg-gray-100 transition-colors">
                  清除已完成
                </button>
              )}
              {errorCount > 0 && (
                <button
                  onClick={() => uploadQueue.filter((t) => t.status === "error").forEach((t) => retryTask(t.id))}
                  className="text-xs text-blue-600 hover:text-blue-700 px-2 py-1 rounded hover:bg-blue-50 transition-colors"
                >
                  全部重试
                </button>
              )}
            </div>
          </div>

          {/* 队列列表 */}
          {showUploadPanel && (
            <div className="divide-y divide-gray-50 max-h-80 overflow-y-auto">
              {uploadQueue.map((task) => (
                <div key={task.id} className="flex items-start gap-3 px-4 py-3">
                  {/* 预览图 */}
                  <div className="w-10 h-10 rounded-lg overflow-hidden bg-gray-100 shrink-0 mt-0.5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={task.preview} alt={task.file.name} className="w-full h-full object-cover" />
                  </div>

                  {/* 文件信息 + 进度 + 槽位选择 */}
                  <div className="flex-1 min-w-0 space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm text-gray-700 truncate max-w-[200px]">{task.file.name}</p>
                      <span className="text-xs text-gray-400 shrink-0">{formatSize(task.file.size)}</span>
                    </div>

                    {/* 槽位选择（仅 pending 状态可编辑） */}
                    {task.status === "pending" && (
                      <div onClick={(e) => e.stopPropagation()}>
                        <SlotSelector
                          value={task.slot}
                          onChange={(v) =>
                            setUploadQueue((prev) =>
                              prev.map((t) => (t.id === task.id ? { ...t, slot: v } : t))
                            )
                          }
                          compact
                        />
                      </div>
                    )}

                    {/* 已绑定槽位标签（上传中/完成后） */}
                    {task.status !== "pending" && task.slot && (
                      <span className="inline-block text-xs bg-purple-50 text-purple-600 border border-purple-100 px-2 py-0.5 rounded-full">
                        {getSlotInfo(task.slot)?.label || task.slot}
                      </span>
                    )}

                    {task.status === "pending" && !task.slot && (
                      <p className="text-xs text-gray-400">未绑定页面位置</p>
                    )}

                    {task.status === "uploading" && (
                      <div className="space-y-1">
                        <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                          <div className="bg-blue-500 h-1.5 rounded-full transition-all duration-300" style={{ width: `${task.progress}%` }} />
                        </div>
                        <p className="text-xs text-blue-600">上传中 {task.progress}%</p>
                      </div>
                    )}

                    {task.status === "success" && (
                      <p className="text-xs text-green-600 flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        上传成功{task.slot ? `，已绑定到「${getSlotInfo(task.slot)?.label || task.slot}」` : ""}
                      </p>
                    )}

                    {task.status === "error" && (
                      <p className="text-xs text-red-600 flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        {task.error || "上传失败"}
                      </p>
                    )}
                  </div>

                  {/* 操作按钮 */}
                  <div className="shrink-0 mt-0.5">
                    {task.status === "uploading" && (
                      <svg className="animate-spin w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                    )}
                    {task.status === "success" && (
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                    {task.status === "error" && (
                      <button onClick={() => retryTask(task.id)} className="text-xs text-blue-600 hover:text-blue-700 px-2 py-1 rounded hover:bg-blue-50 transition-colors border border-blue-200">
                        重试
                      </button>
                    )}
                    {task.status === "pending" && (
                      <button
                        onClick={() => setUploadQueue((prev) => prev.filter((t) => t.id !== task.id))}
                        className="text-gray-400 hover:text-gray-600 p-1 rounded hover:bg-gray-100 transition-colors"
                        title="从队列移除"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 总体进度条 */}
          {pendingOrUploadingCount > 0 && (
            <div className="px-4 py-2 bg-blue-50 border-t border-blue-100">
              <div className="flex items-center justify-between text-xs text-blue-600 mb-1">
                <span>正在上传 {uploadQueue.length - pendingOrUploadingCount} / {uploadQueue.length}</span>
                <span>{Math.round(((uploadQueue.length - pendingOrUploadingCount) / uploadQueue.length) * 100)}%</span>
              </div>
              <div className="w-full bg-blue-100 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-blue-500 h-1.5 rounded-full transition-all duration-500"
                  style={{ width: `${((uploadQueue.length - pendingOrUploadingCount) / uploadQueue.length) * 100}%` }}
                />
              </div>
            </div>
          )}
        </div>
      )}

      {/* 图片网格 + 详情面板 */}
      <div className="flex gap-4">
        <div className="flex-1">
          {filtered.length === 0 ? (
            <div className="bg-white rounded-xl border border-gray-200 py-16 text-center text-gray-400">
              <svg className="w-12 h-12 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm">暂无图片</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3">
              {filtered.map((img) => {
                const slotInfo = img.page ? getSlotInfo(img.page) : null;
                return (
                  <div
                    key={img.id}
                    onClick={() => setSelectedImage(img === selectedImage ? null : img)}
                    className={`bg-white rounded-xl border-2 overflow-hidden cursor-pointer transition-all hover:shadow-md ${
                      selectedImage?.id === img.id
                        ? "border-blue-500 shadow-md"
                        : "border-gray-200"
                    }`}
                  >
                    <div className="aspect-square bg-gray-50 flex items-center justify-center overflow-hidden relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={img.path}
                        alt={img.alt || img.filename}
                        className="w-full h-full object-contain p-1"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='%23d1d5db' stroke-width='1.5'%3E%3Crect x='3' y='3' width='18' height='18' rx='2'/%3E%3Ccircle cx='8.5' cy='8.5' r='1.5'/%3E%3Cpath d='M21 15l-5-5L5 21'/%3E%3C/svg%3E";
                        }}
                      />
                      {/* 页面绑定标签 */}
                      {slotInfo && (
                        <div className="absolute bottom-1 left-1 right-1">
                          <span className="block text-center text-[10px] bg-purple-600/80 text-white px-1 py-0.5 rounded truncate">
                            {slotInfo.label}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="px-2 py-1.5">
                      <p className="text-xs text-gray-600 truncate">{img.filename}</p>
                      <p className="text-xs text-gray-400">{formatSize(img.size)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* 详情面板 */}
        {selectedImage && (
          <div className="w-64 shrink-0 bg-white rounded-xl border border-gray-200 p-4 space-y-4 self-start sticky top-4">
            <div className="aspect-video bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedImage.path}
                alt={selectedImage.alt || selectedImage.filename}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-400">文件名</p>
                <p className="text-sm text-gray-700 break-all">{selectedImage.filename}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">路径</p>
                <p className="text-xs text-blue-600 break-all">{selectedImage.path}</p>
              </div>
              {selectedImage.alt && (
                <div>
                  <p className="text-xs text-gray-400">Alt 文本</p>
                  <p className="text-sm text-gray-700">{selectedImage.alt}</p>
                </div>
              )}
              <div>
                <p className="text-xs text-gray-400">文件大小</p>
                <p className="text-sm text-gray-700">{formatSize(selectedImage.size)}</p>
              </div>

              {/* 页面绑定位置 */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <p className="text-xs text-gray-400">绑定页面位置</p>
                  {editingSlot === null && (
                    <button
                      onClick={() => setEditingSlot(selectedImage.page || "")}
                      className="text-xs text-blue-600 hover:text-blue-700"
                    >
                      编辑
                    </button>
                  )}
                </div>

                {editingSlot !== null ? (
                  <div className="space-y-2">
                    <SlotSelector value={editingSlot} onChange={setEditingSlot} />
                    <div className="flex gap-2">
                      <button
                        onClick={() => saveSlotBinding(selectedImage.id, editingSlot)}
                        disabled={editingSlotSaving}
                        className="flex-1 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-1.5 transition-colors disabled:opacity-50"
                      >
                        {editingSlotSaving ? "保存中..." : "保存"}
                      </button>
                      <button
                        onClick={() => setEditingSlot(null)}
                        className="flex-1 text-xs border border-gray-200 text-gray-600 rounded-lg py-1.5 hover:bg-gray-50 transition-colors"
                      >
                        取消
                      </button>
                    </div>
                  </div>
                ) : selectedImage.page ? (
                  <div className="bg-purple-50 border border-purple-100 rounded-lg px-3 py-2">
                    <p className="text-xs font-medium text-purple-700">
                      {getSlotInfo(selectedImage.page)?.label || selectedImage.page}
                    </p>
                    <p className="text-xs text-purple-500 mt-0.5">
                      {getSlotInfo(selectedImage.page)?.page || ""}
                    </p>
                  </div>
                ) : (
                  <p className="text-xs text-gray-400 italic">未绑定任何页面位置</p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-1">
              <button
                onClick={() => { navigator.clipboard.writeText(selectedImage.path); }}
                className="w-full text-center text-sm text-gray-600 border border-gray-200 rounded-lg py-1.5 hover:bg-gray-50 transition-colors"
              >
                复制路径 📋
              </button>
              <a
                href={selectedImage.path}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center text-sm text-gray-600 border border-gray-200 rounded-lg py-1.5 hover:bg-gray-50 transition-colors"
              >
                查看原图 ↗
              </a>
              <button
                onClick={() => { setReplaceTarget(selectedImage); replaceInputRef.current?.click(); }}
                className="w-full text-sm text-blue-600 border border-blue-200 rounded-lg py-1.5 hover:bg-blue-50 transition-colors"
              >
                替换图片
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 隐藏的替换文件输入 */}
      <input
        ref={replaceInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file && replaceTarget) handleReplace(file);
          e.target.value = "";
        }}
      />
    </div>
  );
}
