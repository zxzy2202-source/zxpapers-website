import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

export interface SanityProduct {
  _id: string;
  name: string;
  slug: { current: string };
  category: string;
  images: string[];
  shortDescription?: string;
  description?: unknown[];
  specs?: Array<{ key: string; value: string }>;
  applications?: string[];
  seoKeywords?: string[];
  featured?: boolean;
}

export interface SanityPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  coverImage?: string;
  body?: unknown[];
  seoKeywords?: string[];
  publishedAt?: string;
}

export async function getAllProducts(): Promise<SanityProduct[]> {
  return sanityClient.fetch(
    `*[_type == "product"] | order(_createdAt desc) {
      _id, name, slug, category, images, shortDescription, featured
    }`
  );
}

export async function getFeaturedProducts(): Promise<SanityProduct[]> {
  return sanityClient.fetch(
    `*[_type == "product" && featured == true] | order(_createdAt desc) {
      _id, name, slug, category, images, shortDescription
    }`
  );
}

export async function getProductBySlug(slug: string): Promise<SanityProduct | null> {
  return sanityClient.fetch(
    `*[_type == "product" && slug.current == $slug][0] {
      _id, name, slug, category, images, shortDescription, description, specs, applications, seoKeywords, featured
    }`,
    { slug }
  );
}

export async function getAllPosts(): Promise<SanityPost[]> {
  return sanityClient.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id, title, slug, excerpt, coverImage, publishedAt
    }`
  );
}

export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  return sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id, title, slug, excerpt, coverImage, body, seoKeywords, publishedAt
    }`,
    { slug }
  );
}
