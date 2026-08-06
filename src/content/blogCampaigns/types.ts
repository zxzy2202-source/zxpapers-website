import type { ResourceCategory } from "@/lib/postsCategories";
import type { BlogAssetQuery } from "@/lib/blogAssetTypes";

export interface BlogCampaignPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: ResourceCategory;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  assetQuery: BlogAssetQuery;
}

export interface BlogCampaign {
  id: string;
  name: string;
  cadenceDays: number;
  description?: string;
  posts: BlogCampaignPost[];
}
