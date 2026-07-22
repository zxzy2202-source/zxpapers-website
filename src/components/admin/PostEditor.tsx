"use client";

import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  AlertCircle,
  Bold,
  CalendarClock,
  Check,
  CheckCircle2,
  Eye,
  FileSearch,
  Heading2,
  Image as ImageIcon,
  Italic,
  Link2,
  List,
  Loader2,
  Pencil,
  Save,
  ShieldCheck,
  Trash2,
  Upload,
} from "lucide-react";
import { RESOURCE_CATEGORIES, type ResourceCategory } from "@/lib/postsCategories";
import type { PostRecord } from "@/lib/postsStore";
import { renderMarkdown } from "@/lib/markdown";
import { validateBlogPost } from "@/lib/blogPostValidation";

interface Props {
  initial?: PostRecord;
}

function toLocalDateTime(iso?: string): string {
  if (!iso) return "";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return new Date(date.getTime() - date.getTimezoneOffset() * 60_000).toISOString().slice(0, 16);
}

export default function PostEditor({ initial }: Props) {
  const router = useRouter();
  const isEdit = Boolean(initial);
  const [title, setTitle] = useState(initial?.title || "");
  const [slug, setSlug] = useState(initial?.slug || "");
  const [excerpt, setExcerpt] = useState(initial?.excerpt || "");
  const [cover, setCover] = useState(initial?.cover || "");
  const [coverAlt, setCoverAlt] = useState(initial?.coverAlt || "");
  const [coverAsset, setCoverAsset] = useState(initial?.coverAsset);
  const [content, setContent] = useState(initial?.content || "");
  const [metaTitle, setMetaTitle] = useState(initial?.metaTitle || "");
  const [metaDescription, setMetaDescription] = useState(initial?.metaDescription || "");
  const [metaKeywordsText, setMetaKeywordsText] = useState((initial?.metaKeywords || []).join(", "));
  const [published, setPublished] = useState(initial?.published ?? false);
  const [category, setCategory] = useState<ResourceCategory | "">(initial?.category || "");
  const [scheduledAt, setScheduledAt] = useState(toLocalDateTime(initial?.scheduledAt));
  const [publishApproved, setPublishApproved] = useState(initial?.publishApproved ?? false);
  const [mode, setMode] = useState<"edit" | "preview">("edit");
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [insertingImage, setInsertingImage] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const coverInput = useRef<HTMLInputElement>(null);
  const contentInsertInput = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const validation = useMemo(
    () => validateBlogPost({ title, excerpt, content, metaTitle, metaDescription }),
    [title, excerpt, content, metaTitle, metaDescription],
  );
  const publishingIssues = validation.issues.filter(
    (issue) => issue.category === "format" || issue.category === "seo",
  );
  const qualityIssues = validation.issues.filter(
    (issue) => issue.category === "ai-style" || issue.category === "evidence" || issue.category === "buyer-value",
  );
  const aiRisk = validation.qualityAudit.aiStyleRisk;
  const aiRiskLabel = aiRisk === "high" ? "高风险" : aiRisk === "medium" ? "需复核" : "低风险";
  const aiRiskClass = aiRisk === "high"
    ? "bg-red-100 text-red-700"
    : aiRisk === "medium"
      ? "bg-amber-100 text-amber-800"
      : "bg-emerald-100 text-emerald-700";
  const previewHtml = useMemo(() => renderMarkdown(content), [content]);
  const reviewContentChanged = Boolean(initial) && (
    title !== (initial?.title || "") ||
    excerpt !== (initial?.excerpt || "") ||
    cover !== (initial?.cover || "") ||
    coverAlt !== (initial?.coverAlt || "") ||
    content !== (initial?.content || "") ||
    metaTitle !== (initial?.metaTitle || "") ||
    metaDescription !== (initial?.metaDescription || "") ||
    metaKeywordsText !== (initial?.metaKeywords || []).join(", ")
  );

  function insertAtCursor(snippet: string, selectStart?: number) {
    const textarea = contentRef.current;
    if (!textarea) {
      setContent((current) => current + snippet);
      return;
    }
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = content.slice(start, end);
    const finalSnippet = snippet.includes("{{TEXT}}") ? snippet.replace("{{TEXT}}", selected) : snippet;
    const next = content.slice(0, start) + finalSnippet + content.slice(end);
    setContent(next);
    requestAnimationFrame(() => {
      textarea.focus();
      const cursor = start + (selectStart ?? finalSnippet.length);
      textarea.setSelectionRange(cursor, cursor);
    });
  }

  async function uploadImage(file: File, destination: "cover" | "content") {
    destination === "cover" ? setUploading(true) : setInsertingImage(true);
    setError(null);
    try {
      const form = new FormData();
      form.append("file", file);
      form.append("folder", destination === "cover" ? "blog-covers" : "blog-content");
      const response = await fetch("/api/admin/upload-r2", { method: "POST", body: form });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "上传失败");
      const alt = file.name.replace(/\.[^.]+$/, "");
      if (destination === "cover") {
        setCover(data.url);
        setCoverAlt(alt);
        setCoverAsset(undefined);
      } else {
        insertAtCursor(`\n\n![${alt}](${data.url})\n\n`);
      }
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "上传失败");
    } finally {
      destination === "cover" ? setUploading(false) : setInsertingImage(false);
    }
  }

  async function save(action: "save" | "publish" | "schedule" | "unpublish") {
    if (!title.trim() || !content.trim()) {
      setError("标题和正文不能为空");
      return;
    }
    if ((action === "publish" || action === "schedule") && validation.errors.length > 0) {
      setError("请先修复发布检查中的错误");
      return;
    }
    if (action === "schedule" && !scheduledAt) {
      setError("请先选择自动发布时间");
      return;
    }

    setSaving(true);
    setError(null);
    setSuccess(null);
    try {
      const nextPublished = action === "publish" ? true : action === "unpublish" || action === "schedule" ? false : published;
      const nextApproved = action === "schedule"
        ? true
        : action === "publish" || action === "unpublish" || reviewContentChanged
          ? false
          : publishApproved;
      const payload = {
        id: initial?.id,
        title,
        slug,
        excerpt,
        cover,
        coverAlt,
        coverAsset,
        assetQuery: initial?.assetQuery,
        content,
        category: category || undefined,
        metaTitle,
        metaDescription,
        metaKeywords: metaKeywordsText.split(/[,，]/).map((value) => value.trim()).filter(Boolean),
        published: nextPublished,
        scheduledAt: nextPublished || !scheduledAt ? undefined : new Date(scheduledAt).toISOString(),
        publishApproved: nextApproved,
      };
      const response = await fetch("/api/admin/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "保存失败");

      setPublished(data.post.published);
      setPublishApproved(data.post.publishApproved ?? false);
      setScheduledAt(toLocalDateTime(data.post.scheduledAt));
      setSuccess(action === "publish" ? "文章已发布" : action === "schedule" ? "排期已批准" : "保存成功");
      if (!isEdit) router.push(`/admin/posts/${data.post.id}`);
      router.refresh();
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "保存失败");
    } finally {
      setSaving(false);
    }
  }

  async function removePost() {
    if (!initial || !window.confirm("确定删除这篇文章吗？此操作不可撤销。")) return;
    await fetch("/api/admin/posts", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: initial.id, slug: initial.slug, category: initial.category }),
    });
    router.push("/admin/posts");
    router.refresh();
  }

  const status = published ? "已发布" : scheduledAt ? (publishApproved ? "已批准排期" : "待审核排期") : "草稿";

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
      <div className="min-w-0 space-y-4">
        {error ? (
          <div className="flex items-start gap-2 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            <AlertCircle className="mt-0.5 h-4 w-4 flex-none" aria-hidden="true" /> {error}
          </div>
        ) : null}
        {success ? (
          <div className="flex items-center gap-2 rounded-md border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-700">
            <Check className="h-4 w-4" aria-hidden="true" /> {success}
          </div>
        ) : null}

        <div className="flex items-center justify-between gap-3">
          <div className="inline-flex rounded-md border border-slate-200 bg-white p-1" aria-label="编辑模式">
            <ModeButton active={mode === "edit"} onClick={() => setMode("edit")} icon={<Pencil className="h-4 w-4" />} label="编辑" />
            <ModeButton active={mode === "preview"} onClick={() => setMode("preview")} icon={<Eye className="h-4 w-4" />} label="预览" />
          </div>
          <span className="text-sm text-slate-500">{validation.wordCount} words</span>
        </div>

        {mode === "edit" ? (
          <>
            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="文章标题"
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-2xl font-bold text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <input
              type="text"
              value={excerpt}
              onChange={(event) => setExcerpt(event.target.value)}
              placeholder="文章摘要，用于 Blog 列表卡片"
              className="w-full rounded-md border border-slate-200 bg-white px-4 py-2.5 text-slate-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
              <div className="flex flex-wrap items-center gap-1 border-b border-slate-200 bg-slate-50 p-2">
                <input
                  ref={contentInsertInput}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(event) => {
                    const file = event.target.files?.[0];
                    if (file) void uploadImage(file, "content");
                    event.target.value = "";
                  }}
                />
                <ToolbarButton title="插入图片" onClick={() => contentInsertInput.current?.click()} disabled={insertingImage}>
                  {insertingImage ? <Loader2 className="h-4 w-4 animate-spin" /> : <ImageIcon className="h-4 w-4" />}
                </ToolbarButton>
                <ToolbarButton title="二级标题" onClick={() => insertAtCursor("## {{TEXT}}", 3)}><Heading2 className="h-4 w-4" /></ToolbarButton>
                <ToolbarButton title="加粗" onClick={() => insertAtCursor("**{{TEXT}}**", 2)}><Bold className="h-4 w-4" /></ToolbarButton>
                <ToolbarButton title="斜体" onClick={() => insertAtCursor("*{{TEXT}}*", 1)}><Italic className="h-4 w-4" /></ToolbarButton>
                <ToolbarButton title="链接" onClick={() => insertAtCursor("[{{TEXT}}](https://)", 1)}><Link2 className="h-4 w-4" /></ToolbarButton>
                <ToolbarButton title="列表" onClick={() => insertAtCursor("\n- Item one\n- Item two\n- Item three\n")}><List className="h-4 w-4" /></ToolbarButton>
              </div>
              <textarea
                ref={contentRef}
                value={content}
                onChange={(event) => setContent(event.target.value)}
                placeholder="正文从直接回答段落开始，正文内不要再写 Markdown H1。"
                rows={30}
                className="w-full resize-y px-4 py-4 font-mono text-sm leading-7 text-slate-900 focus:outline-none"
              />
            </div>
          </>
        ) : (
          <article className="rounded-lg border border-slate-200 bg-white px-5 py-8 sm:px-8">
            <p className="text-sm font-medium text-amber-700">Preview</p>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900">{title || "Untitled article"}</h1>
            {excerpt ? <p className="mt-4 text-lg leading-8 text-slate-600">{excerpt}</p> : null}
            <div className="prose-content mt-8" dangerouslySetInnerHTML={{ __html: previewHtml }} />
          </article>
        )}
      </div>

      <aside className="space-y-4 lg:sticky lg:top-4 lg:self-start">
        <section className="rounded-lg border border-slate-200 bg-white p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-900">发布状态</span>
            <span className={`rounded px-2 py-1 text-xs font-medium ${published ? "bg-emerald-100 text-emerald-700" : publishApproved ? "bg-blue-100 text-blue-700" : scheduledAt ? "bg-amber-100 text-amber-800" : "bg-slate-100 text-slate-600"}`}>
              {status}
            </span>
          </div>
          <div className="mt-4 space-y-2">
            <button type="button" onClick={() => void save("save")} disabled={saving} className="flex w-full items-center justify-center gap-2 rounded-md bg-slate-100 px-3 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-200 disabled:opacity-50">
              {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />} 保存
            </button>
            <button type="button" onClick={() => void save("publish")} disabled={saving || validation.errors.length > 0} className="flex w-full items-center justify-center gap-2 rounded-md bg-blue-700 px-3 py-2.5 text-sm font-semibold text-white hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-50">
              <Eye className="h-4 w-4" /> {published ? "更新已发布文章" : "立即发布"}
            </button>
            {published ? (
              <button type="button" onClick={() => void save("unpublish")} disabled={saving} className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">取消发布</button>
            ) : null}
            {isEdit ? (
              <button type="button" onClick={() => void removePost()} className="flex w-full items-center justify-center gap-2 rounded-md border border-red-200 px-3 py-2 text-sm font-medium text-red-700 hover:bg-red-50">
                <Trash2 className="h-4 w-4" /> 删除
              </button>
            ) : null}
          </div>
        </section>

        {!published ? (
          <section className="rounded-lg border border-slate-200 bg-white p-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <CalendarClock className="h-4 w-4 text-blue-700" aria-hidden="true" /> 定时发布
            </div>
            <label className="mt-3 block text-xs font-medium text-slate-600">
              发布时间
              <input type="datetime-local" value={scheduledAt} onChange={(event) => { setScheduledAt(event.target.value); setPublishApproved(false); }} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200" />
            </label>
            <button type="button" onClick={() => void save("schedule")} disabled={saving || !scheduledAt || validation.errors.length > 0} className="mt-3 flex w-full items-center justify-center gap-2 rounded-md bg-emerald-700 px-3 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-50">
              <ShieldCheck className="h-4 w-4" /> 批准自动发布
            </button>
            <p className="mt-2 text-xs leading-5 text-slate-500">修改时间或正文后请重新审核。调度器只发布已批准且通过格式、AI 风格与内容质量门禁的文章。</p>
          </section>
        ) : null}

        <section className="rounded-lg border border-slate-200 bg-white p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <CheckCircle2 className="h-4 w-4 text-emerald-700" aria-hidden="true" /> 发布检查
            </div>
            <span className="text-xs text-slate-500">{validation.h2Count} H2</span>
          </div>
          {publishingIssues.length === 0 ? (
            <p className="mt-3 text-sm text-emerald-700">格式检查通过。</p>
          ) : (
            <ul className="mt-3 space-y-2">
              {publishingIssues.map((issue) => (
                <li key={issue.code} className={`text-xs leading-5 ${issue.level === "error" ? "text-red-700" : "text-amber-700"}`}>
                  <span className="font-semibold">{issue.level === "error" ? "错误" : "建议"}：</span>{issue.message}
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="rounded-lg border border-slate-200 bg-white p-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <FileSearch className="h-4 w-4 text-blue-700" aria-hidden="true" /> AI 味与内容质量
            </div>
            <span className={`rounded px-2 py-1 text-xs font-medium ${aiRiskClass}`}>
              {aiRiskLabel}
            </span>
          </div>
          <p className="mt-2 text-xs leading-5 text-slate-500">
            这是写作风险启发式检查，不能证明文章是否由 AI 生成。高风险会阻止批准和发布。
          </p>
          <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2 border-y border-slate-100 py-3 text-xs">
            <div>
              <dt className="text-slate-500">AI 套话</dt>
              <dd className="mt-0.5 font-semibold text-slate-900">{validation.qualityAudit.clicheCount}</dd>
            </div>
            <div>
              <dt className="text-slate-500">模糊营销词</dt>
              <dd className="mt-0.5 font-semibold text-slate-900">{validation.qualityAudit.vagueBuzzwordCount}</dd>
            </div>
            <div>
              <dt className="text-slate-500">外部来源</dt>
              <dd className="mt-0.5 font-semibold text-slate-900">{validation.qualityAudit.externalSourceCount}</dd>
            </div>
            <div>
              <dt className="text-slate-500">买家动作</dt>
              <dd className="mt-0.5 font-semibold text-slate-900">{validation.qualityAudit.buyerActionCount}</dd>
            </div>
          </dl>
          {qualityIssues.length === 0 ? (
            <p className="mt-3 text-sm text-emerald-700">未发现明显的 AI 套话、证据或采购实用性风险。</p>
          ) : (
            <ul className="mt-3 space-y-2">
              {qualityIssues.map((issue) => (
                <li key={issue.code} className={`text-xs leading-5 ${issue.level === "error" ? "text-red-700" : "text-amber-700"}`}>
                  <span className="font-semibold">{issue.level === "error" ? "阻止发布：" : "人工复核："}</span>{issue.message}
                </li>
              ))}
            </ul>
          )}
        </section>

        {initial?.assetQuery ? (
          <section className="rounded-lg border border-slate-200 bg-white p-4">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <ImageIcon className="h-4 w-4 text-blue-700" aria-hidden="true" /> 飞书自动配图
              </div>
              <span className={`rounded px-2 py-1 text-xs font-medium ${coverAsset ? "bg-emerald-100 text-emerald-700" : "bg-blue-100 text-blue-700"}`}>
                {coverAsset ? "已匹配" : "发布时匹配"}
              </span>
            </div>
            {coverAsset ? (
              <div className="mt-3 text-xs leading-5 text-slate-600">
                <p className="font-semibold text-slate-900">{coverAsset.assetId} · {coverAsset.assetTitle}</p>
                <p>相关性 {coverAsset.matchScore} 分，已转存到 R2。</p>
              </div>
            ) : (
              <p className="mt-3 text-xs leading-5 text-slate-600">
                到点发布前，只检索已批准、Website、版权明确、无保密风险且包含图片附件的素材；没有可靠匹配时文章保持未发布。
              </p>
            )}
            <dl className="mt-3 space-y-1 border-t border-slate-100 pt-3 text-xs leading-5">
              <div className="flex gap-2">
                <dt className="w-16 flex-none text-slate-500">产品</dt>
                <dd className="text-slate-800">{initial.assetQuery.productLine}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-16 flex-none text-slate-500">市场</dt>
                <dd className="text-slate-800">{initial.assetQuery.markets.join("、")}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-16 flex-none text-slate-500">图片意图</dt>
                <dd className="text-slate-800">{initial.assetQuery.contentTypes.join("、")}</dd>
              </div>
            </dl>
          </section>
        ) : null}

        <section className="rounded-lg border border-slate-200 bg-white p-4">
          <div className="text-sm font-semibold text-slate-900">封面图</div>
          {cover ? <img src={cover} alt="文章封面预览" className="mt-3 aspect-[16/9] w-full rounded-md object-cover" /> : <div className="mt-3 flex aspect-[16/9] items-center justify-center rounded-md bg-slate-100 text-xs text-slate-400">暂无封面</div>}
          <input ref={coverInput} type="file" accept="image/*" className="hidden" onChange={(event) => { const file = event.target.files?.[0]; if (file) void uploadImage(file, "cover"); event.target.value = ""; }} />
          <button type="button" onClick={() => coverInput.current?.click()} disabled={uploading} className="mt-2 flex w-full items-center justify-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50">
            {uploading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Upload className="h-4 w-4" />} {cover ? "更换封面" : "上传封面"}
          </button>
          <label className="mt-3 block text-xs font-medium text-slate-600">图片 Alt Text
            <input value={coverAlt} onChange={(event) => { setCoverAlt(event.target.value); setCoverAsset(undefined); }} placeholder="Describe the image for buyers and search engines" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm font-normal" />
          </label>
        </section>

        <section className="rounded-lg border border-slate-200 bg-white p-4">
          <label className="block text-sm font-semibold text-slate-900">资源分类
            <select value={category} onChange={(event) => setCategory(event.target.value as ResourceCategory | "")} className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm font-normal">
              <option value="">仅显示在 Blog</option>
              {RESOURCE_CATEGORIES.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
            </select>
          </label>
          <label className="mt-4 block text-sm font-semibold text-slate-900">URL Slug
            <input value={slug} onChange={(event) => setSlug(event.target.value)} placeholder="auto-generated" className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 font-mono text-sm font-normal" />
          </label>
        </section>

        <section className="rounded-lg border border-slate-200 bg-white p-4">
          <div className="text-sm font-semibold text-slate-900">SEO</div>
          <label className="mt-3 block text-xs font-medium text-slate-600">SEO 标题
            <input value={metaTitle} onChange={(event) => setMetaTitle(event.target.value)} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm font-normal" />
          </label>
          <label className="mt-3 block text-xs font-medium text-slate-600">SEO 描述
            <textarea value={metaDescription} onChange={(event) => setMetaDescription(event.target.value)} rows={4} className="mt-1 w-full resize-y rounded-md border border-slate-300 px-3 py-2 text-sm font-normal" />
          </label>
          <label className="mt-3 block text-xs font-medium text-slate-600">关键词
            <input value={metaKeywordsText} onChange={(event) => setMetaKeywordsText(event.target.value)} placeholder="keyword one, keyword two" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm font-normal" />
          </label>
        </section>
      </aside>
    </div>
  );
}

function ModeButton({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: React.ReactNode; label: string }) {
  return <button type="button" onClick={onClick} className={`inline-flex items-center gap-2 rounded px-3 py-1.5 text-sm font-medium ${active ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100"}`}>{icon}{label}</button>;
}

function ToolbarButton({ children, onClick, title, disabled }: { children: React.ReactNode; onClick: () => void; title: string; disabled?: boolean }) {
  return <button type="button" onClick={onClick} title={title} disabled={disabled} className="inline-flex h-9 w-9 items-center justify-center rounded text-slate-600 hover:bg-white hover:text-slate-900 disabled:opacity-50">{children}</button>;
}
