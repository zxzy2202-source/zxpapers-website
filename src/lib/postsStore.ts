/**
 * 博客文章持久化（Markdown 内容 + 元数据）
 * key: "posts" → 整个数组
 */
import { getStorage } from "@/lib/storage";
// 常量与类型从纯前端安全的 postsCategories 重新导出，保持向后兼容
export { RESOURCE_CATEGORIES, type ResourceCategory } from "@/lib/postsCategories";
import type { ResourceCategory } from "@/lib/postsCategories";

const KEY = "posts";

export interface PostRecord {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  cover?: string;
  content: string;
  category?: ResourceCategory;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string[];
  published: boolean;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export async function readAllPosts(): Promise<PostRecord[]> {
  const data = await getStorage().get<PostRecord[]>(KEY);
  return Array.isArray(data) ? data : [];
}

async function writeAll(posts: PostRecord[]): Promise<void> {
  await getStorage().set(KEY, posts);
}

export async function getPost(idOrSlug: string): Promise<PostRecord | null> {
  const all = await readAllPosts();
  return all.find((p) => p.id === idOrSlug || p.slug === idOrSlug) || null;
}

export async function getPublishedPosts(): Promise<PostRecord[]> {
  const all = await readAllPosts();
  return all
    .filter((p) => p.published)
    .sort((a, b) => (b.publishedAt || "").localeCompare(a.publishedAt || ""));
}

/** 按资源分类拉已发布文章（用于 /resources/{category} 列表页） */
export async function getPublishedPostsByCategory(
  category: ResourceCategory,
  limit?: number,
): Promise<PostRecord[]> {
  const published = await getPublishedPosts();
  const filtered = published.filter((p) => p.category === category);
  return typeof limit === "number" ? filtered.slice(0, limit) : filtered;
}

export async function upsertPost(
  data: Partial<PostRecord> & { title: string; content: string }
): Promise<PostRecord> {
  const all = await readAllPosts();
  const now = new Date().toISOString();

  if (data.id) {
    const idx = all.findIndex((p) => p.id === data.id);
    if (idx === -1) throw new Error("文章不存在");
    const merged: PostRecord = {
      ...all[idx],
      ...data,
      updatedAt: now,
      publishedAt: data.published && !all[idx].publishedAt ? now : all[idx].publishedAt,
    } as PostRecord;
    all[idx] = merged;
    await writeAll(all);
    return merged;
  }

  const slug = data.slug?.trim() || slugify(data.title);
  if (all.some((p) => p.slug === slug)) {
    throw new Error(`Slug 已存在：${slug}`);
  }
  const newPost: PostRecord = {
    id: `post-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    slug,
    title: data.title,
    excerpt: data.excerpt,
    cover: data.cover,
    content: data.content,
    category: data.category,
    metaTitle: data.metaTitle,
    metaDescription: data.metaDescription,
    metaKeywords: data.metaKeywords,
    published: data.published ?? false,
    publishedAt: data.published ? now : undefined,
    createdAt: now,
    updatedAt: now,
  };
  all.unshift(newPost);
  await writeAll(all);
  return newPost;
}

export async function deletePost(id: string): Promise<void> {
  const all = await readAllPosts();
  await writeAll(all.filter((p) => p.id !== id));
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/[^a-z0-9-\u4e00-\u9fa5]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60) || `post-${Date.now()}`;
}
