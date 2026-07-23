/**
 * 图片槽位存储 - slot → URL 映射
 * key: "image-overrides"
 */
import { getStorage } from "@/lib/storage";
import { revalidateTag, unstable_cache } from "next/cache";

const KEY = "image-overrides";
const PUBLIC_IMAGE_CACHE_TAG = "public-image-overrides";
const PUBLIC_IMAGE_CACHE_SECONDS = 60 * 60;

export type ImageOverrideMap = Record<string, string>;

let cache: ImageOverrideMap | null = null;
let cacheTime = 0;
const CACHE_TTL = 30 * 1000;

const readPublicOverridesCached = unstable_cache(
  async (): Promise<ImageOverrideMap> => {
    return (await getStorage().get<ImageOverrideMap>(KEY)) || {};
  },
  ["public-image-overrides"],
  { revalidate: PUBLIC_IMAGE_CACHE_SECONDS, tags: [PUBLIC_IMAGE_CACHE_TAG] },
);

export async function readOverrides(): Promise<ImageOverrideMap> {
  if (cache && Date.now() - cacheTime < CACHE_TTL) return cache;
  const data = (await getStorage().get<ImageOverrideMap>(KEY)) || {};
  cache = data;
  cacheTime = Date.now();
  return data;
}

/** Public pages use the shared Next Data Cache instead of a per-request KV read. */
export async function readPublicOverrides(): Promise<ImageOverrideMap> {
  return readPublicOverridesCached();
}

async function writeAll(data: ImageOverrideMap): Promise<void> {
  await getStorage().set(KEY, data);
}

export async function writeOverride(slot: string, url: string): Promise<void> {
  const data = await readOverrides();
  data[slot] = url;
  await writeAll(data);
  revalidateTag(PUBLIC_IMAGE_CACHE_TAG);
  cache = data;
  cacheTime = Date.now();
}

export async function deleteOverride(slot: string): Promise<void> {
  const data = await readOverrides();
  delete data[slot];
  await writeAll(data);
  revalidateTag(PUBLIC_IMAGE_CACHE_TAG);
  cache = data;
  cacheTime = Date.now();
}

export function invalidateCache() {
  cache = null;
  cacheTime = 0;
}
