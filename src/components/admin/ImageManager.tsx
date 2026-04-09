"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

interface ImageItem {
  id: string;
  filename: string;
  path: string;
  alt?: string | null;
  page?: string | null;
  size?: number | null;
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

export default function ImageManager({ images }: Props) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const replaceInputRef = useRef<HTMLInputElement>(null);

  const [search, setSearch] = useState("");
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadAlt, setUploadAlt] = useState("");
  const [uploadPage, setUploadPage] = useState("");
  const [replaceTarget, setReplaceTarget] = useState<ImageItem | null>(null);
  const [error, setError] = useState("");

  const filtered = images.filter(
    (img) =>
      img.filename.toLowerCase().includes(search.toLowerCase()) ||
      img.path.toLowerCase().includes(search.toLowerCase()) ||
      (img.alt || "").toLowerCase().includes(search.toLowerCase())
  );

  async function handleUpload(file: File, isReplace = false) {
    setUploading(true);
    setError("");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("alt", uploadAlt);
    formData.append("page", uploadPage);
    if (isReplace && replaceTarget) {
      formData.append("replaceId", replaceTarget.id);
    }

    try {
      const res = await fetch("/api/admin/images", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "上传失败");
        return;
      }

      setUploadAlt("");
      setUploadPage("");
      setReplaceTarget(null);
      setSelectedImage(null);
      router.refresh();
    } catch {
      setError("网络错误，请重试。");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="space-y-4">
      {/* Top Bar */}
      <div className="flex items-center gap-3">
        <div className="flex-1 relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="搜索图片..."
            className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <button
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
          上传图片
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleUpload(file);
            e.target.value = "";
          }}
        />
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-red-700 text-sm">
          {error}
        </div>
      )}

      {uploading && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 text-blue-700 text-sm flex items-center gap-2">
          <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          上传中...
        </div>
      )}

      <div className="flex gap-4">
        {/* Image Grid */}
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
              {filtered.map((img) => (
                <div
                  key={img.id}
                  onClick={() => setSelectedImage(img === selectedImage ? null : img)}
                  className={`bg-white rounded-xl border-2 overflow-hidden cursor-pointer transition-all hover:shadow-md ${
                    selectedImage?.id === img.id
                      ? "border-blue-500 shadow-md"
                      : "border-gray-200"
                  }`}
                >
                  <div className="aspect-square bg-gray-50 flex items-center justify-center overflow-hidden">
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
                  </div>
                  <div className="px-2 py-1.5">
                    <p className="text-xs text-gray-600 truncate">{img.filename}</p>
                    <p className="text-xs text-gray-400">{formatSize(img.size)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Detail Panel */}
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

            <div className="space-y-2">
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
            </div>

            <div className="flex flex-col gap-2 pt-1">
              <a
                href={selectedImage.path}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center text-sm text-gray-600 border border-gray-200 rounded-lg py-1.5 hover:bg-gray-50 transition-colors"
              >
                查看原图 ↗
              </a>
              <button
                onClick={() => {
                  setReplaceTarget(selectedImage);
                  replaceInputRef.current?.click();
                }}
                className="w-full text-sm text-blue-600 border border-blue-200 rounded-lg py-1.5 hover:bg-blue-50 transition-colors"
              >
                替换图片
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Hidden replace input */}
      <input
        ref={replaceInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file && replaceTarget) handleUpload(file, true);
          e.target.value = "";
        }}
      />
    </div>
  );
}
