"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";

interface ArticleData {
  id?: string;
  title?: string | null;
  slug?: string | null;
  excerpt?: string | null;
  content?: string | null;
  category?: string | null;
  status?: string | null;
  coverImage?: string | null;
  metaTitle?: string | null;
  metaDesc?: string | null;
}

interface Props {
  article?: ArticleData;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export default function ArticleEditor({ article }: Props) {
  const router = useRouter();
  const isEditing = !!article?.id;

  const [title, setTitle] = useState(article?.title ?? "");
  const [slug, setSlug] = useState(article?.slug ?? "");
  const [excerpt, setExcerpt] = useState(article?.excerpt ?? "");
  const [category, setCategory] = useState(article?.category ?? "INDUSTRY_INSIGHTS");
  const [status, setStatus] = useState(article?.status ?? "DRAFT");
  const [coverImage, setCoverImage] = useState(article?.coverImage ?? "");
  const [metaTitle, setMetaTitle] = useState(article?.metaTitle ?? "");
  const [metaDesc, setMetaDesc] = useState(article?.metaDesc ?? "");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(isEditing);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({ openOnClick: false }),
      Image,
      Placeholder.configure({
        placeholder: "在此开始撰写文章内容...",
      }),
    ],
    content: article?.content ?? "",
    editorProps: {
      attributes: {
        class:
          "prose prose-sm max-w-none min-h-[400px] px-5 py-4 focus:outline-none",
      },
    },
  });

  const handleTitleChange = useCallback(
    (value: string) => {
      setTitle(value);
      if (!slugManuallyEdited) {
        setSlug(slugify(value));
      }
    },
    [slugManuallyEdited]
  );

  async function handleSave(publishStatus?: string) {
    const finalStatus = publishStatus || status;
    const content = editor?.getHTML() || "";

    if (!title.trim()) {
      setError("标题不能为空");
      return;
    }
    if (!slug.trim()) {
      setError("URL Slug 不能为空");
      return;
    }

    setError("");
    setSaving(true);

    try {
      const payload = {
        title,
        slug,
        excerpt,
        content,
        category,
        status: finalStatus,
        coverImage,
        metaTitle,
        metaDesc,
      };

      const url = isEditing
        ? `/api/admin/articles/${article.id}`
        : "/api/admin/articles";

      const res = await fetch(url, {
        method: isEditing ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "保存失败，请重试");
        return;
      }

      if (finalStatus !== status) setStatus(finalStatus);

      if (!isEditing && data.article?.id) {
        router.push(`/admin/articles/${data.article.id}`);
      } else {
        router.refresh();
      }
    } catch {
      setError("网络错误，请重试。");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      {/* Main Editor */}
      <div className="lg:col-span-2 space-y-4">
        {/* Title */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5">
              标题 *
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="输入文章标题..."
              className="w-full text-xl font-semibold text-gray-900 border-0 outline-none placeholder-gray-300 bg-transparent"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5">
              URL Slug *
            </label>
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-sm">/resources/</span>
              <input
                type="text"
                value={slug}
                onChange={(e) => {
                  setSlug(e.target.value);
                  setSlugManuallyEdited(true);
                }}
                placeholder="article-slug"
                className="flex-1 text-sm text-blue-600 border-0 outline-none bg-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5">
              摘要
            </label>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              rows={2}
              placeholder="文章简短描述..."
              className="w-full text-sm text-gray-700 border border-gray-200 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>
        </div>

        {/* Editor Toolbar + Content */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          {/* Toolbar */}
          {editor && (
            <div className="flex flex-wrap gap-1 px-3 py-2 border-b border-gray-100 bg-gray-50">
              {[
                {
                  label: "B",
                  title: "加粗",
                  action: () => editor.chain().focus().toggleBold().run(),
                  active: editor.isActive("bold"),
                  className: "font-bold",
                },
                {
                  label: "I",
                  title: "斜体",
                  action: () => editor.chain().focus().toggleItalic().run(),
                  active: editor.isActive("italic"),
                  className: "italic",
                },
                {
                  label: "H2",
                  title: "二级标题",
                  action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
                  active: editor.isActive("heading", { level: 2 }),
                },
                {
                  label: "H3",
                  title: "三级标题",
                  action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
                  active: editor.isActive("heading", { level: 3 }),
                },
                {
                  label: "UL",
                  title: "无序列表",
                  action: () => editor.chain().focus().toggleBulletList().run(),
                  active: editor.isActive("bulletList"),
                },
                {
                  label: "OL",
                  title: "有序列表",
                  action: () => editor.chain().focus().toggleOrderedList().run(),
                  active: editor.isActive("orderedList"),
                },
                {
                  label: "\"",
                  title: "引用",
                  action: () => editor.chain().focus().toggleBlockquote().run(),
                  active: editor.isActive("blockquote"),
                },
                {
                  label: "—",
                  title: "分割线",
                  action: () => editor.chain().focus().setHorizontalRule().run(),
                  active: false,
                },
              ].map((btn) => (
                <button
                  key={btn.title}
                  title={btn.title}
                  onClick={btn.action}
                  type="button"
                  className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${btn.className || ""} ${
                    btn.active
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {btn.label}
                </button>
              ))}
              <button
                title="撤销"
                onClick={() => editor.chain().focus().undo().run()}
                type="button"
                className="px-2.5 py-1 rounded text-xs text-gray-600 hover:bg-gray-200 ml-auto"
              >
                ↩
              </button>
              <button
                title="重做"
                onClick={() => editor.chain().focus().redo().run()}
                type="button"
                className="px-2.5 py-1 rounded text-xs text-gray-600 hover:bg-gray-200"
              >
                ↪
              </button>
            </div>
          )}

          {/* Editor Content */}
          <EditorContent editor={editor} />
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-4">
        {/* Publish */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
          <h3 className="text-sm font-semibold text-gray-900">发布设置</h3>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg px-3 py-2 text-red-700 text-xs">
              {error}
            </div>
          )}

          <div>
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5">
              状态
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="DRAFT">草稿</option>
              <option value="PUBLISHED">已发布</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5">
              分类
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="INDUSTRY_INSIGHTS">行业资讯</option>
              <option value="PRODUCT_GUIDES">产品指南</option>
            </select>
          </div>

          <div className="flex flex-col gap-2 pt-1">
            <button
              onClick={() => handleSave("PUBLISHED")}
              disabled={saving}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white text-sm font-medium py-2 rounded-lg transition-colors"
            >
              {saving ? "保存中..." : "发布文章"}
            </button>
            <button
              onClick={() => handleSave("DRAFT")}
              disabled={saving}
              className="w-full bg-white hover:bg-gray-50 text-gray-700 text-sm font-medium py-2 rounded-lg border border-gray-200 transition-colors"
            >
              保存为草稿
            </button>
          </div>
        </div>

        {/* Cover Image */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-3">
          <h3 className="text-sm font-semibold text-gray-900">封面图片</h3>
          <input
            type="text"
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)}
            placeholder="/images/article-cover.jpg"
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          {coverImage && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={coverImage}
              alt="封面预览"
              className="w-full h-32 object-cover rounded-lg border border-gray-200"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          )}
        </div>

        {/* SEO */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-3">
          <h3 className="text-sm font-semibold text-gray-900">SEO 设置</h3>
          <div>
            <label className="block text-xs text-gray-400 mb-1">Meta 标题</label>
            <input
              type="text"
              value={metaTitle}
              onChange={(e) => setMetaTitle(e.target.value)}
              placeholder="SEO 页面标题..."
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <p className="text-xs text-gray-400 mt-1">{metaTitle.length}/60 字符</p>
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1">Meta 描述</label>
            <textarea
              value={metaDesc}
              onChange={(e) => setMetaDesc(e.target.value)}
              rows={3}
              placeholder="SEO 描述..."
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            />
            <p className="text-xs text-gray-400 mt-1">{metaDesc.length}/160 字符</p>
          </div>
        </div>
      </div>
    </div>
  );
}
