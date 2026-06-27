"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Save, Upload, Eye, Trash2, AlertCircle, Check, Image as ImageIcon, Bold, Italic, Link2, List, Heading2 } from "lucide-react";
import { RESOURCE_CATEGORIES, type ResourceCategory } from "@/lib/postsCategories";
import type { PostRecord } from "@/lib/postsStore";

interface Props {
  initial?: PostRecord;
}

export default function PostEditor({ initial }: Props) {
  const router = useRouter();
  const isEdit = !!initial;

  const [title, setTitle] = useState(initial?.title || "");
  const [slug, setSlug] = useState(initial?.slug || "");
  const [excerpt, setExcerpt] = useState(initial?.excerpt || "");
  const [cover, setCover] = useState(initial?.cover || "");
  const [content, setContent] = useState(initial?.content || "");
  const [metaTitle, setMetaTitle] = useState(initial?.metaTitle || "");
  const [metaDescription, setMetaDescription] = useState(initial?.metaDescription || "");
  const [metaKeywordsText, setMetaKeywordsText] = useState(
    (initial?.metaKeywords || []).join(", ")
  );
  const [published, setPublished] = useState(initial?.published ?? false);
  const [category, setCategory] = useState<ResourceCategory | "">(initial?.category || "");

  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [insertingImage, setInsertingImage] = useState(false);
  const coverInput = useRef<HTMLInputElement>(null);
  const contentInsertInput = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  /** 在光标位置插入文本（textarea 工具栏通用辅助） */
  function insertAtCursor(snippet: string, selectStart?: number, selectEnd?: number) {
    const ta = contentRef.current;
    if (!ta) {
      setContent((c) => c + snippet);
      return;
    }
    const start = ta.selectionStart;
    const end = ta.selectionEnd;
    const selected = content.slice(start, end);
    // 如果选中有文字，且 snippet 包含占位 {{TEXT}}，则替换
    const finalSnippet = snippet.includes("{{TEXT}}")
      ? snippet.replace("{{TEXT}}", selected || "")
      : snippet;
    const before = content.slice(0, start);
    const after = content.slice(end);
    const next = before + finalSnippet + after;
    setContent(next);

    requestAnimationFrame(() => {
      ta.focus();
      const cursorPos =
        selectStart !== undefined
          ? before.length + selectStart
          : before.length + finalSnippet.length;
      const cursorEnd =
        selectEnd !== undefined ? before.length + selectEnd : cursorPos;
      ta.setSelectionRange(cursorPos, cursorEnd);
    });
  }

  async function uploadAndInsertImage(file: File) {
    setInsertingImage(true);
    setError(null);
    try {
      const fd = new FormData();
      fd.append("file", file);
      fd.append("folder", "blog-content");
      const res = await fetch("/api/admin/upload-r2", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "上传失败");
      const altText = file.name.replace(/\.[^.]+$/, "");
      insertAtCursor(`\n\n![${altText}](${data.url})\n\n`);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setInsertingImage(false);
    }
  }

  async function uploadCover(file: File) {
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      fd.append("folder", "blog-covers");
      const res = await fetch("/api/admin/upload-r2", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "上传失败");
      setCover(data.url);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setUploading(false);
    }
  }

  async function save(publishAfterSave?: boolean) {
    if (!title.trim()) {
      setError("请填写文章标题");
      return;
    }
    if (!content.trim()) {
      setError("请填写文章内容");
      return;
    }
    setSaving(true);
    setError(null);
    try {
      const payload = {
        id: initial?.id,
        title,
        slug,
        excerpt,
        cover,
        content,
        category: category || undefined,
        metaTitle,
        metaDescription,
        metaKeywords: metaKeywordsText.split(/[,，]/).map((s) => s.trim()).filter(Boolean),
        published: publishAfterSave ?? published,
      };
      const res = await fetch("/api/admin/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "保存失败");

      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
      if (publishAfterSave !== undefined) setPublished(publishAfterSave);

      if (!isEdit) {
        // 新建后跳转到编辑页
        router.push(`/admin/posts/${data.post.id}`);
      }
    } catch (e: any) {
      setError(e.message);
    } finally {
      setSaving(false);
    }
  }

  async function del() {
    if (!initial) return;
    if (!confirm("确定删除这篇文章吗？此操作不可撤销。")) return;
    await fetch("/api/admin/posts", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: initial.id }),
    });
    router.push("/admin/posts");
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
      {/* 主编辑区 */}
      <div className="space-y-4">
        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm flex items-center gap-2">
            <AlertCircle size={16} /> {error}
          </div>
        )}
        {success && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-700 text-sm flex items-center gap-2">
            <Check size={16} /> 保存成功
          </div>
        )}

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="文章标题..."
          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-2xl font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          placeholder="一句话摘要（可选，将显示在文章列表中）"
          className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Markdown 工具栏 */}
        <div className="bg-white border border-slate-200 rounded-t-xl px-2 py-1.5 flex flex-wrap items-center gap-1 border-b-0">
          <input
            ref={contentInsertInput}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) uploadAndInsertImage(f);
              e.target.value = "";
            }}
          />
          <ToolbarBtn
            onClick={() => contentInsertInput.current?.click()}
            disabled={insertingImage}
            title="上传并插入图片（自动生成 Markdown）"
            highlight
          >
            <ImageIcon size={14} /> {insertingImage ? "上传中..." : "插入图片"}
          </ToolbarBtn>
          <div className="w-px h-5 bg-slate-200 mx-1" />
          <ToolbarBtn onClick={() => insertAtCursor("## {{TEXT}}", 3)} title="二级标题">
            <Heading2 size={14} />
          </ToolbarBtn>
          <ToolbarBtn onClick={() => insertAtCursor("**{{TEXT}}**", 2)} title="加粗">
            <Bold size={14} />
          </ToolbarBtn>
          <ToolbarBtn onClick={() => insertAtCursor("*{{TEXT}}*", 1)} title="斜体">
            <Italic size={14} />
          </ToolbarBtn>
          <ToolbarBtn
            onClick={() => insertAtCursor("[{{TEXT}}](https://)", 0)}
            title="插入链接"
          >
            <Link2 size={14} />
          </ToolbarBtn>
          <ToolbarBtn
            onClick={() => insertAtCursor("\n- 列表项 1\n- 列表项 2\n- 列表项 3\n")}
            title="无序列表"
          >
            <List size={14} />
          </ToolbarBtn>
          <ToolbarBtn onClick={() => insertAtCursor("\n> {{TEXT}}\n", 2)} title="引用">
            ❝
          </ToolbarBtn>
          <ToolbarBtn onClick={() => insertAtCursor("`{{TEXT}}`", 1)} title="行内代码">
            {"</>"}
          </ToolbarBtn>
        </div>

        <textarea
          ref={contentRef}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder={`# 一级标题\n\n这里写文章正文。\n\n点上方工具栏的"插入图片"按钮可直接上传图片，无需手动复制 URL。`}
          rows={24}
          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-b-xl border-t-0 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset font-mono text-sm leading-relaxed resize-y -mt-px"
        />
        <p className="text-xs text-slate-400">
          💡 工具栏支持插入图片/标题/加粗等常用操作。如果不想用工具栏，也可以直接写
          <b>Markdown</b> 语法。
        </p>
      </div>

      {/* 侧边栏 */}
      <aside className="space-y-4">
        {/* 发布操作 */}
        <div className="bg-white rounded-xl border border-slate-200 p-4 sticky top-4">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-medium text-slate-700">状态</div>
            <span
              className={`px-2 py-0.5 rounded text-xs ${
                published
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-slate-100 text-slate-600"
              }`}
            >
              {published ? "已发布" : "草稿"}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <button
              onClick={() => save()}
              disabled={saving}
              className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Save size={14} /> {saving ? "保存中..." : "保存草稿"}
            </button>
            <button
              onClick={() => save(true)}
              disabled={saving}
              className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Eye size={14} /> {published ? "更新文章" : "立即发布"}
            </button>
            {published && (
              <button
                onClick={() => save(false)}
                disabled={saving}
                className="w-full py-2 border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm rounded-lg"
              >
                取消发布
              </button>
            )}
            {isEdit && (
              <button
                onClick={del}
                className="w-full py-2 border border-red-200 hover:bg-red-50 text-red-600 rounded-lg flex items-center justify-center gap-2 text-sm"
              >
                <Trash2 size={14} /> 删除
              </button>
            )}
          </div>
        </div>

        {/* 封面图 */}
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="text-sm font-medium text-slate-700 mb-2">封面图</div>
          {cover ? (
            <div className="relative">
              <img src={cover} alt="封面" className="w-full rounded-lg" />
              <button
                onClick={() => setCover("")}
                className="absolute top-1 right-1 bg-black/60 text-white rounded p-1 hover:bg-black/80"
              >
                <Trash2 size={12} />
              </button>
            </div>
          ) : null}
          <input
            ref={coverInput}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) uploadCover(f);
              e.target.value = "";
            }}
          />
          <button
            onClick={() => coverInput.current?.click()}
            disabled={uploading}
            className="w-full mt-2 py-2 border-2 border-dashed border-slate-200 hover:border-blue-400 text-slate-500 hover:text-blue-600 rounded-lg flex items-center justify-center gap-2 text-sm"
          >
            <Upload size={14} /> {uploading ? "上传中..." : cover ? "替换封面" : "上传封面"}
          </button>
        </div>

        {/* 资源分类 */}
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="text-sm font-medium text-slate-700 mb-2">📂 资源分类</div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as ResourceCategory | "")}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm"
          >
            <option value="">— 未分类（仅显示在 /blog）—</option>
            {RESOURCE_CATEGORIES.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
          <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
            选了分类后，文章会自动出现在 <code className="text-slate-600">/resources/{category || "{category}"}</code> 子页的 “Latest Articles” 区块。
          </p>
        </div>

        {/* URL slug */}
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="text-sm font-medium text-slate-700 mb-2">URL 路径</div>
          <input
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder="auto-generated"
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-mono"
          />
          <p className="text-xs text-slate-400 mt-1">/blog/{slug || "自动生成"}</p>
        </div>

        {/* SEO */}
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <div className="text-sm font-medium text-slate-700 mb-3">🔍 SEO 优化</div>
          <div className="space-y-3">
            <div>
              <label className="text-xs text-slate-500 block mb-1">SEO 标题</label>
              <input
                type="text"
                value={metaTitle}
                onChange={(e) => setMetaTitle(e.target.value)}
                placeholder="留空则使用文章标题"
                className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded text-sm"
              />
            </div>
            <div>
              <label className="text-xs text-slate-500 block mb-1">SEO 描述</label>
              <textarea
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
                placeholder="留空则使用摘要"
                rows={3}
                className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded text-sm resize-y"
              />
            </div>
            <div>
              <label className="text-xs text-slate-500 block mb-1">关键词（逗号分隔）</label>
              <input
                type="text"
                value={metaKeywordsText}
                onChange={(e) => setMetaKeywordsText(e.target.value)}
                placeholder="thermal paper, OEM"
                className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded text-sm"
              />
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

function ToolbarBtn({
  children,
  onClick,
  title,
  disabled,
  highlight,
}: {
  children: React.ReactNode;
  onClick: () => void;
  title?: string;
  disabled?: boolean;
  highlight?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={`px-2.5 py-1.5 text-sm rounded-md flex items-center gap-1.5 transition disabled:opacity-50 ${
        highlight
          ? "bg-blue-50 text-blue-700 hover:bg-blue-100 font-medium"
          : "text-slate-600 hover:bg-slate-100"
      }`}
    >
      {children}
    </button>
  );
}
