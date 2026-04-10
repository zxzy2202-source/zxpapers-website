"use client";

import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import { TextStyle } from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-text-style";
import { AlertCircle, ImageIcon, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ArticleData {
  id?: string;
  title?: string | null;
  slug?: string | null;
  excerpt?: string | null;
  content?: string | null;
  category?: string | null;
  tags?: string | null;
  status?: string | null;
  coverImage?: string | null;
  metaTitle?: string | null;
  metaDesc?: string | null;
  keywords?: string | null;
}

interface ImageAsset {
  id: string;
  filename: string;
  path: string;
  alt?: string | null;
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

const CATEGORIES = [
  { value: "INDUSTRY_INSIGHTS", label: "行业资讯" },
  { value: "PRODUCT_GUIDES", label: "产品指南" },
  { value: "COMPANY_NEWS", label: "公司动态" },
  { value: "TECHNICAL_TIPS", label: "技术干货" },
  { value: "CASE_STUDIES", label: "案例分析" },
  { value: "MARKET_TRENDS", label: "市场趋势" },
];

export default function ArticleEditor({ article }: Props) {
  const router = useRouter();
  const isEditing = !!article?.id;

  const [title, setTitle] = useState(article?.title ?? "");
  const [slug, setSlug] = useState(article?.slug ?? "");
  const [excerpt, setExcerpt] = useState(article?.excerpt ?? "");
  const [category, setCategory] = useState(article?.category ?? "INDUSTRY_INSIGHTS");
  const [tags, setTags] = useState<string[]>(
    article?.tags ? article.tags.split(",").map((t) => t.trim()).filter(Boolean) : []
  );
  const [tagInput, setTagInput] = useState("");
  const [status, setStatus] = useState(article?.status ?? "DRAFT");
  const [coverImage, setCoverImage] = useState(article?.coverImage ?? "");
  const [metaTitle, setMetaTitle] = useState(article?.metaTitle ?? "");
  const [metaDesc, setMetaDesc] = useState(article?.metaDesc ?? "");
  const [keywords, setKeywords] = useState(article?.keywords ?? "");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(isEditing);

  // Image picker modal
  const [showImagePicker, setShowImagePicker] = useState(false);
  const [imagePickerTarget, setImagePickerTarget] = useState<"cover" | "editor">("editor");
  const [images, setImages] = useState<ImageAsset[]>([]);
  const [imageSearch, setImageSearch] = useState("");
  const [loadingImages, setLoadingImages] = useState(false);

  // SEO preview tab
  const [activeTab, setActiveTab] = useState<"write" | "seo">("write");

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({ openOnClick: false }),
      Image.configure({ inline: false, allowBase64: true }),
      Placeholder.configure({ placeholder: "在此开始撰写文章内容..." }),
      Underline,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      TextStyle,
      Color,
    ],
    content: article?.content ?? "",
    editorProps: {
      attributes: {
        class: "prose prose-sm max-w-none min-h-[400px] px-5 py-4 focus:outline-none",
      },
    },
  });

  const handleTitleChange = useCallback(
    (value: string) => {
      setTitle(value);
      if (!slugManuallyEdited) {
        setSlug(slugify(value));
      }
      if (!metaTitle) {
        setMetaTitle(value);
      }
    },
    [slugManuallyEdited, metaTitle]
  );

  // Load images for picker
  const loadImages = useCallback(async () => {
    setLoadingImages(true);
    try {
      const res = await fetch(`/api/admin/images?limit=50${imageSearch ? `&search=${imageSearch}` : ""}`);
      const data = await res.json();
      setImages(data.images || []);
    } catch {
      setImages([]);
    } finally {
      setLoadingImages(false);
    }
  }, [imageSearch]);

  useEffect(() => {
    if (showImagePicker) {
      loadImages();
    }
  }, [showImagePicker, loadImages]);

  function openImagePicker(target: "cover" | "editor") {
    setImagePickerTarget(target);
    setShowImagePicker(true);
  }

  function selectImage(img: ImageAsset) {
    if (imagePickerTarget === "cover") {
      setCoverImage(img.path);
    } else {
      editor?.chain().focus().setImage({ src: img.path, alt: img.alt || img.filename }).run();
    }
    setShowImagePicker(false);
  }

  // Tag management
  function addTag(value: string) {
    const trimmed = value.trim().replace(/,/g, "");
    if (trimmed && !tags.includes(trimmed) && tags.length < 10) {
      setTags([...tags, trimmed]);
    }
    setTagInput("");
  }

  function removeTag(tag: string) {
    setTags(tags.filter((t) => t !== tag));
  }

  function handleTagKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag(tagInput);
    } else if (e.key === "Backspace" && !tagInput && tags.length > 0) {
      setTags(tags.slice(0, -1));
    }
  }

  // Insert link
  function insertLink() {
    const url = prompt("请输入链接地址：");
    if (url) {
      editor?.chain().focus().setLink({ href: url }).run();
    }
  }

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
        tags: tags.join(","),
        status: finalStatus,
        coverImage,
        metaTitle,
        metaDesc,
        keywords,
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

  const seoTitle = metaTitle || title;
  const seoDesc = metaDesc || excerpt;
  const seoUrl = `https://www.zxpapers.com/resources/${slug}`;
  const titleLen = seoTitle.length;
  const descLen = seoDesc.length;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      {/* Main Editor */}
      <div className="lg:col-span-2 space-y-4">
        {/* Title + Slug + Excerpt */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
          <div>
            <Label className="text-xs uppercase tracking-wide text-gray-500">标题 *</Label>
            <Input
              type="text"
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="输入文章标题..."
              className="mt-1.5 text-xl font-semibold border-0 shadow-none focus-visible:ring-0 px-0 bg-transparent"
            />
          </div>

          <div>
            <Label className="text-xs uppercase tracking-wide text-gray-500">URL Slug *</Label>
            <div className="flex items-center gap-2 mt-1.5">
              <span className="text-gray-400 text-sm">/resources/</span>
              <Input
                type="text"
                value={slug}
                onChange={(e) => {
                  setSlug(e.target.value);
                  setSlugManuallyEdited(true);
                }}
                placeholder="article-slug"
                className="flex-1 text-sm text-blue-600 border-0 shadow-none focus-visible:ring-0 px-0 bg-transparent"
              />
            </div>
          </div>

          <div>
            <Label className="text-xs uppercase tracking-wide text-gray-500">摘要</Label>
            <Textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              rows={2}
              placeholder="文章简短描述（将显示在列表页和 SEO 描述中）..."
              className="mt-1.5 resize-none"
            />
          </div>
        </div>

        {/* Editor Tabs */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          {/* Tab Header */}
          <div className="flex border-b border-gray-100">
            <button
              onClick={() => setActiveTab("write")}
              type="button"
              className={`px-4 py-2.5 text-sm font-medium transition-colors ${
                activeTab === "write"
                  ? "text-blue-600 border-b-2 border-blue-600 bg-white"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              编辑内容
            </button>
            <button
              onClick={() => setActiveTab("seo")}
              type="button"
              className={`px-4 py-2.5 text-sm font-medium transition-colors ${
                activeTab === "seo"
                  ? "text-blue-600 border-b-2 border-blue-600 bg-white"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              SEO 预览
            </button>
          </div>

          {activeTab === "write" && (
            <>
              {/* Toolbar */}
              {editor && (
                <div className="flex flex-wrap gap-1 px-3 py-2 border-b border-gray-100 bg-gray-50">
                  {/* Text formatting */}
                  <div className="flex gap-0.5 border-r border-gray-200 pr-2 mr-1">
                    <Button variant="ghost" size="sm" title="加粗 (Ctrl+B)" onClick={() => editor.chain().focus().toggleBold().run()} type="button"
                      className={`px-2 py-1 h-auto text-xs font-bold ${editor.isActive("bold") ? "bg-blue-100 text-blue-700" : "text-gray-600"}`}>B</Button>
                    <Button variant="ghost" size="sm" title="斜体 (Ctrl+I)" onClick={() => editor.chain().focus().toggleItalic().run()} type="button"
                      className={`px-2 py-1 h-auto text-xs italic ${editor.isActive("italic") ? "bg-blue-100 text-blue-700" : "text-gray-600"}`}>I</Button>
                    <Button variant="ghost" size="sm" title="下划线 (Ctrl+U)" onClick={() => editor.chain().focus().toggleUnderline().run()} type="button"
                      className={`px-2 py-1 h-auto text-xs underline ${editor.isActive("underline") ? "bg-blue-100 text-blue-700" : "text-gray-600"}`}>U</Button>
                    <Button variant="ghost" size="sm" title="删除线" onClick={() => editor.chain().focus().toggleStrike().run()} type="button"
                      className={`px-2 py-1 h-auto text-xs line-through ${editor.isActive("strike") ? "bg-blue-100 text-blue-700" : "text-gray-600"}`}>S</Button>
                    <Button variant="ghost" size="sm" title="行内代码" onClick={() => editor.chain().focus().toggleCode().run()} type="button"
                      className={`px-2 py-1 h-auto text-xs font-mono ${editor.isActive("code") ? "bg-blue-100 text-blue-700" : "text-gray-600"}`}>{"`"}</Button>
                  </div>

                  {/* Headings */}
                  <div className="flex gap-0.5 border-r border-gray-200 pr-2 mr-1">
                    <Button variant="ghost" size="sm" title="一级标题" onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} type="button"
                      className={`px-2 py-1 h-auto text-xs font-medium ${editor.isActive("heading", { level: 1 }) ? "bg-blue-100 text-blue-700" : "text-gray-600"}`}>H1</Button>
                    <Button variant="ghost" size="sm" title="二级标题" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} type="button"
                      className={`px-2 py-1 h-auto text-xs font-medium ${editor.isActive("heading", { level: 2 }) ? "bg-blue-100 text-blue-700" : "text-gray-600"}`}>H2</Button>
                    <Button variant="ghost" size="sm" title="三级标题" onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} type="button"
                      className={`px-2 py-1 h-auto text-xs font-medium ${editor.isActive("heading", { level: 3 }) ? "bg-blue-100 text-blue-700" : "text-gray-600"}`}>H3</Button>
                  </div>

                  {/* Lists */}
                  <div className="flex gap-0.5 border-r border-gray-200 pr-2 mr-1">
                    <Button variant="ghost" size="sm" title="无序列表" onClick={() => editor.chain().focus().toggleBulletList().run()} type="button"
                      className={`px-2 py-1 h-auto text-xs ${editor.isActive("bulletList") ? "bg-blue-100 text-blue-700" : "text-gray-600"}`} aria-label="无序列表">≡</Button>
                    <Button variant="ghost" size="sm" title="有序列表" onClick={() => editor.chain().focus().toggleOrderedList().run()} type="button"
                      className={`px-2 py-1 h-auto text-xs ${editor.isActive("orderedList") ? "bg-blue-100 text-blue-700" : "text-gray-600"}`} aria-label="有序列表">1.</Button>
                    <Button variant="ghost" size="sm" title="引用块" onClick={() => editor.chain().focus().toggleBlockquote().run()} type="button"
                      className={`px-2 py-1 h-auto text-xs ${editor.isActive("blockquote") ? "bg-blue-100 text-blue-700" : "text-gray-600"}`} aria-label="引用块">&ldquo;</Button>
                    <Button variant="ghost" size="sm" title="代码块" onClick={() => editor.chain().focus().toggleCodeBlock().run()} type="button"
                      className={`px-2 py-1 h-auto text-xs font-mono ${editor.isActive("codeBlock") ? "bg-blue-100 text-blue-700" : "text-gray-600"}`} aria-label="代码块">{"{}"}</Button>
                  </div>

                  {/* Align */}
                  <div className="flex gap-0.5 border-r border-gray-200 pr-2 mr-1">
                    <Button variant="ghost" size="sm" title="左对齐" onClick={() => editor.chain().focus().setTextAlign("left").run()} type="button"
                      className={`px-2 py-1 h-auto text-xs ${editor.isActive({ textAlign: "left" }) ? "bg-blue-100 text-blue-700" : "text-gray-600"}`} aria-label="左对齐">⬅</Button>
                    <Button variant="ghost" size="sm" title="居中" onClick={() => editor.chain().focus().setTextAlign("center").run()} type="button"
                      className={`px-2 py-1 h-auto text-xs ${editor.isActive({ textAlign: "center" }) ? "bg-blue-100 text-blue-700" : "text-gray-600"}`} aria-label="居中对齐">☰</Button>
                    <Button variant="ghost" size="sm" title="右对齐" onClick={() => editor.chain().focus().setTextAlign("right").run()} type="button"
                      className={`px-2 py-1 h-auto text-xs ${editor.isActive({ textAlign: "right" }) ? "bg-blue-100 text-blue-700" : "text-gray-600"}`} aria-label="右对齐">➡</Button>
                  </div>

                  {/* Insert */}
                  <div className="flex gap-0.5 border-r border-gray-200 pr-2 mr-1">
                    <Button variant="ghost" size="sm" title="插入链接" onClick={insertLink} type="button"
                      className={`px-2 py-1 h-auto text-xs ${editor.isActive("link") ? "bg-blue-100 text-blue-700" : "text-gray-600"}`} aria-label="插入链接">🔗</Button>
                    <Button variant="ghost" size="sm" title="从图片库插入图片" onClick={() => openImagePicker("editor")} type="button"
                      className="px-2 py-1 h-auto text-xs text-gray-600" aria-label="插入图片">🖼️</Button>
                    <Button variant="ghost" size="sm" title="分割线" onClick={() => editor.chain().focus().setHorizontalRule().run()} type="button"
                      className="px-2 py-1 h-auto text-xs text-gray-600" aria-label="分割线">—</Button>
                  </div>

                  {/* Undo/Redo */}
                  <div className="flex gap-0.5 ml-auto">
                    <Button variant="ghost" size="sm" title="撤销 (Ctrl+Z)" onClick={() => editor.chain().focus().undo().run()} type="button"
                      className="px-2 py-1 h-auto text-xs text-gray-600" aria-label="撤销">↩</Button>
                    <Button variant="ghost" size="sm" title="重做 (Ctrl+Y)" onClick={() => editor.chain().focus().redo().run()} type="button"
                      className="px-2 py-1 h-auto text-xs text-gray-600" aria-label="重做">↪</Button>
                  </div>
                </div>
              )}

              {/* Editor Content */}
              <EditorContent editor={editor} />
            </>
          )}

          {activeTab === "seo" && (
            <div className="p-5 space-y-5">
              {/* Google Search Preview */}
              <div>
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Google 搜索预览</h4>
                <div className="border border-gray-200 rounded-xl p-4 bg-white">
                  <div className="text-xs text-gray-400 mb-1 font-mono">{seoUrl}</div>
                  <div className={`text-lg font-medium mb-1 ${titleLen > 60 ? "text-red-600" : "text-blue-700"}`}>
                    {seoTitle || "（未填写标题）"}
                  </div>
                  <div className={`text-sm leading-relaxed ${descLen > 160 ? "text-red-500" : "text-gray-600"}`}>
                    {seoDesc || "（未填写描述）"}
                  </div>
                </div>
                <div className="flex gap-4 mt-2 text-xs">
                  <span className={titleLen > 60 ? "text-red-500 font-medium" : "text-gray-400"}>
                    标题：{titleLen}/60 字符 {titleLen > 60 ? "⚠ 过长" : titleLen < 30 ? "⚠ 偏短" : "✓"}
                  </span>
                  <span className={descLen > 160 ? "text-red-500 font-medium" : "text-gray-400"}>
                    描述：{descLen}/160 字符 {descLen > 160 ? "⚠ 过长" : descLen < 80 ? "⚠ 偏短" : "✓"}
                  </span>
                </div>
              </div>

              {/* SEO Fields */}
              <div className="space-y-4">
                <div>
                  <Label className="text-xs">
                    Meta 标题
                    <span className="text-gray-400 font-normal ml-1">（留空则使用文章标题）</span>
                  </Label>
                  <Input
                    type="text"
                    value={metaTitle}
                    onChange={(e) => setMetaTitle(e.target.value)}
                    placeholder={title || "SEO 页面标题..."}
                    className="mt-1.5"
                  />
                  <div className="flex justify-between mt-1">
                    <p className="text-xs text-gray-400">建议 30-60 字符</p>
                    <p className={`text-xs ${titleLen > 60 ? "text-red-500" : "text-gray-400"}`}>{titleLen}/60</p>
                  </div>
                </div>

                <div>
                  <Label className="text-xs">
                    Meta 描述
                    <span className="text-gray-400 font-normal ml-1">（留空则使用摘要）</span>
                  </Label>
                  <Textarea
                    value={metaDesc}
                    onChange={(e) => setMetaDesc(e.target.value)}
                    rows={3}
                    placeholder={excerpt || "SEO 页面描述..."}
                    className="mt-1.5 resize-none"
                  />
                  <div className="flex justify-between mt-1">
                    <p className="text-xs text-gray-400">建议 80-160 字符</p>
                    <p className={`text-xs ${descLen > 160 ? "text-red-500" : "text-gray-400"}`}>{descLen}/160</p>
                  </div>
                </div>

                <div>
                  <Label className="text-xs">关键词</Label>
                  <Input
                    type="text"
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                    placeholder="thermal paper, label rolls, receipt paper..."
                    className="mt-1.5"
                  />
                  <p className="text-xs text-gray-400 mt-1">多个关键词用英文逗号分隔</p>
                </div>
              </div>

              {/* SEO Checklist */}
              <div>
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">SEO 检查清单</h4>
                <div className="space-y-1.5">
                  {[
                    { ok: title.length >= 10, label: "标题长度合适（≥10字符）" },
                    { ok: !!excerpt || !!metaDesc, label: "已填写摘要或 Meta 描述" },
                    { ok: !!slug, label: "已设置 URL Slug" },
                    { ok: !!coverImage, label: "已设置封面图片" },
                    { ok: titleLen <= 60 && titleLen >= 30, label: "Meta 标题长度在 30-60 字符之间" },
                    { ok: descLen <= 160 && descLen >= 80, label: "Meta 描述长度在 80-160 字符之间" },
                    { ok: tags.length > 0, label: "已添加标签" },
                    { ok: !!keywords, label: "已填写关键词" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2 text-sm">
                      <span className={item.ok ? "text-green-500" : "text-gray-300"}>
                        {item.ok ? "✓" : "○"}
                      </span>
                      <span className={item.ok ? "text-gray-700" : "text-gray-400"}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-4">
        {/* Publish */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
          <h3 className="text-sm font-semibold text-gray-900">发布设置</h3>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg px-3 py-2 text-red-700 text-xs flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
              {error}
            </div>
          )}

          <div>
            <Label className="text-xs uppercase tracking-wide text-gray-500">状态</Label>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger className="mt-1.5">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="DRAFT">草稿</SelectItem>
                <SelectItem value="PUBLISHED">已发布</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2 pt-1">
            <Button
              onClick={() => handleSave("PUBLISHED")}
              disabled={saving}
              className="w-full"
            >
              {saving ? <><Loader2 className="animate-spin" /> 保存中...</> : "发布文章"}
            </Button>
            <Button
              onClick={() => handleSave("DRAFT")}
              disabled={saving}
              variant="outline"
              className="w-full"
            >
              保存为草稿
            </Button>
          </div>
        </div>

        {/* Category */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-3">
          <h3 className="text-sm font-semibold text-gray-900">分类</h3>
          <div className="grid grid-cols-1 gap-1.5">
            {CATEGORIES.map((cat) => (
              <label key={cat.value} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  name="category"
                  value={cat.value}
                  checked={category === cat.value}
                  onChange={() => setCategory(cat.value)}
                  className="text-blue-600"
                />
                <span className={`text-sm ${category === cat.value ? "text-blue-700 font-medium" : "text-gray-600 group-hover:text-gray-900"}`}>
                  {cat.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-3">
          <h3 className="text-sm font-semibold text-gray-900">标签</h3>
          <div className="flex flex-wrap gap-1.5 min-h-[32px]">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-blue-50 text-blue-700 border-blue-100 hover:bg-blue-100"
              >
                {tag}
                <button
                  onClick={() => removeTag(tag)}
                  type="button"
                  className="ml-1 text-blue-400 hover:text-blue-700 leading-none"
                  aria-label={`移除标签 ${tag}`}
                >
                  ×
                </button>
              </Badge>
            ))}
          </div>
          <div className="flex gap-2">
            <Input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleTagKeyDown}
              placeholder="输入标签，按回车添加..."
              className="flex-1"
            />
            <Button
              onClick={() => addTag(tagInput)}
              type="button"
              disabled={!tagInput.trim()}
              variant="secondary"
              size="sm"
              className="px-3"
            >
              添加
            </Button>
          </div>
          <p className="text-xs text-gray-400">最多 10 个标签，按回车或逗号分隔</p>
        </div>

        {/* Cover Image */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-3">
          <h3 className="text-sm font-semibold text-gray-900">封面图片</h3>
          <div className="flex gap-2">
            <Input
              type="text"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
              placeholder="/images/article-cover.jpg"
              className="flex-1"
            />
            <Button
              onClick={() => openImagePicker("cover")}
              type="button"
              variant="secondary"
              size="sm"
              className="whitespace-nowrap"
              aria-label="从图片库选择封面"
            >
              <ImageIcon className="w-4 h-4 mr-1" />
              选择
            </Button>
          </div>
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
      </div>

      {/* Image Picker Modal - using shadcn Dialog */}
      <Dialog open={showImagePicker} onOpenChange={setShowImagePicker}>
        <DialogContent className="max-w-3xl max-h-[80vh] flex flex-col">
          <DialogHeader>
            <DialogTitle>
              {imagePickerTarget === "cover" ? "选择封面图片" : "插入图片"}
            </DialogTitle>
          </DialogHeader>

          <div className="py-3 border-b border-gray-100">
            <Input
              type="text"
              value={imageSearch}
              onChange={(e) => setImageSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && loadImages()}
              placeholder="搜索图片文件名..."
            />
          </div>

          <div className="flex-1 overflow-y-auto py-4">
            {loadingImages ? (
              <div className="flex items-center justify-center h-32 text-gray-400 text-sm">
                <Loader2 className="animate-spin mr-2" /> 加载中...
              </div>
            ) : images.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-32 text-gray-400">
                <ImageIcon className="w-8 h-8 mb-2" />
                <span className="text-sm">暂无图片，请先在图片管理中上传</span>
              </div>
            ) : (
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {images.map((img) => (
                  <button
                    key={img.id}
                    onClick={() => selectImage(img)}
                    type="button"
                    className="group relative aspect-square rounded-lg overflow-hidden border-2 border-transparent hover:border-blue-500 transition-all"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.path}
                      alt={img.alt || img.filename}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/placeholder-image.png";
                      }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end">
                      <span className="w-full px-2 py-1 text-xs text-white bg-black/60 truncate opacity-0 group-hover:opacity-100 transition-opacity">
                        {img.filename}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <DialogFooter>
            <Button
              onClick={() => setShowImagePicker(false)}
              variant="outline"
            >
              取消
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
