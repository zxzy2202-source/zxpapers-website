/**
 * 博客文章持久化（Markdown 内容 + 元数据）
 * key: "posts" → 整个数组
 */
import { getStorage } from "@/lib/storage";
import { validateBlogPost } from "@/lib/blogPostValidation";
import { getBlogAssetQuery } from "@/content/blogCampaigns/blogAssetQueries";
import type { BlogAssetQuery, BlogCoverAssetSource } from "@/lib/blogAssetTypes";
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
  coverAlt?: string;
  coverAsset?: BlogCoverAssetSource;
  assetQuery?: BlogAssetQuery;
  content: string;
  category?: ResourceCategory;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string[];
  published: boolean;
  publishedAt?: string;
  scheduledAt?: string;
  publishApproved?: boolean;
  campaignId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ScheduledPostTemplate {
  slug: string;
  title: string;
  excerpt?: string;
  cover?: string;
  coverAlt?: string;
  assetQuery?: BlogAssetQuery;
  content: string;
  category?: ResourceCategory;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string[];
  scheduledAt: string;
  campaignId: string;
}

export async function readAllPosts(): Promise<PostRecord[]> {
  const data = await getStorage().get<PostRecord[]>(KEY);
  if (!Array.isArray(data)) return [];
  return data.map((post) => {
    if (post.assetQuery) return post;
    const assetQuery = getBlogAssetQuery(post.slug);
    return assetQuery ? { ...post, assetQuery } : post;
  });
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
    const candidate = { ...all[idx], ...data };
    validatePublishableState(candidate);
    const merged: PostRecord = {
      ...candidate,
      updatedAt: now,
      publishedAt: data.published && !all[idx].publishedAt ? now : all[idx].publishedAt,
      scheduledAt: data.published ? undefined : candidate.scheduledAt,
      publishApproved: data.published ? false : candidate.publishApproved,
    } as PostRecord;
    all[idx] = merged;
    await writeAll(all);
    return merged;
  }

  const slug = data.slug?.trim() || slugify(data.title);
  if (all.some((p) => p.slug === slug)) {
    throw new Error(`Slug 已存在：${slug}`);
  }
  validatePublishableState({ ...data, slug });
  const newPost: PostRecord = {
    id: `post-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    slug,
    title: data.title,
    excerpt: data.excerpt,
    cover: data.cover,
    coverAlt: data.coverAlt,
    coverAsset: data.coverAsset,
    assetQuery: data.assetQuery || getBlogAssetQuery(slug),
    content: data.content,
    category: data.category,
    metaTitle: data.metaTitle,
    metaDescription: data.metaDescription,
    metaKeywords: data.metaKeywords,
    published: data.published ?? false,
    publishedAt: data.published ? now : undefined,
    scheduledAt: data.published ? undefined : data.scheduledAt,
    publishApproved: data.published ? false : data.publishApproved ?? false,
    campaignId: data.campaignId,
    createdAt: now,
    updatedAt: now,
  };
  all.unshift(newPost);
  await writeAll(all);
  return newPost;
}

export async function importScheduledPosts(
  templates: ScheduledPostTemplate[],
): Promise<{ created: PostRecord[]; skipped: string[] }> {
  const all = await readAllPosts();
  const existingSlugs = new Set(all.map((post) => post.slug));
  const created: PostRecord[] = [];
  const skipped: string[] = [];
  const now = new Date().toISOString();

  for (const template of templates) {
    if (existingSlugs.has(template.slug)) {
      skipped.push(template.slug);
      continue;
    }
    const validation = validateBlogPost(template);
    if (validation.errors.length > 0) {
      throw new Error(
        `${template.slug}: ${validation.errors.map((issue) => issue.message).join(" ")}`,
      );
    }
    const post: PostRecord = {
      ...template,
      id: `post-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      published: false,
      publishApproved: false,
      createdAt: now,
      updatedAt: now,
    };
    existingSlugs.add(post.slug);
    created.push(post);
  }

  if (created.length > 0) {
    all.unshift(...created);
    await writeAll(all);
  }
  return { created, skipped };
}

export async function publishDuePosts(
  now = new Date(),
  preparePost?: (post: PostRecord) => Promise<PostRecord>,
): Promise<{
  published: PostRecord[];
  rejected: Array<{ slug: string; errors: string[] }>;
}> {
  const all = await readAllPosts();
  const published: PostRecord[] = [];
  const rejected: Array<{ slug: string; errors: string[] }> = [];
  const publishedAt = now.toISOString();

  for (let index = 0; index < all.length; index += 1) {
    const post = all[index];
    if (post.published || !post.publishApproved || !post.scheduledAt) continue;
    const scheduledAt = new Date(post.scheduledAt);
    if (Number.isNaN(scheduledAt.getTime()) || scheduledAt.getTime() > now.getTime()) continue;

    const validation = validateBlogPost(post);
    if (validation.errors.length > 0) {
      rejected.push({ slug: post.slug, errors: validation.errors.map((issue) => issue.message) });
      continue;
    }

    let candidate = post;
    if (preparePost) {
      try {
        candidate = await preparePost({ ...post });
      } catch (error) {
        rejected.push({
          slug: post.slug,
          errors: [error instanceof Error ? error.message : "发布前素材处理失败"],
        });
        continue;
      }
    }

    const preparedValidation = validateBlogPost(candidate);
    if (preparedValidation.errors.length > 0) {
      rejected.push({ slug: post.slug, errors: preparedValidation.errors.map((issue) => issue.message) });
      continue;
    }

    const next: PostRecord = {
      ...candidate,
      published: true,
      publishedAt,
      updatedAt: publishedAt,
      scheduledAt: undefined,
      publishApproved: false,
    };
    all[index] = next;
    published.push(next);
  }

  if (published.length > 0) await writeAll(all);
  return { published, rejected };
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

function validatePublishableState(data: Partial<PostRecord> & { title: string; content: string }) {
  if (data.publishApproved && !data.scheduledAt) {
    throw new Error("批准自动发布前必须设置发布时间");
  }
  if (data.scheduledAt && Number.isNaN(new Date(data.scheduledAt).getTime())) {
    throw new Error("发布时间格式无效");
  }
  if (!data.published && !data.publishApproved) return;

  const validation = validateBlogPost(data);
  if (validation.errors.length > 0) {
    throw new Error(validation.errors.map((issue) => issue.message).join(" "));
  }
}
