/**
 * 图片槽位存储 - slot → URL 映射
 * key: "image-overrides"
 */
import { getStorage } from "@/lib/storage";

const KEY = "image-overrides";

export type ImageOverrideMap = Record<string, string>;

let cache: ImageOverrideMap | null = null;
let cacheTime = 0;
const CACHE_TTL = 30 * 1000;

export async function readOverrides(): Promise<ImageOverrideMap> {
  if (cache && Date.now() - cacheTime < CACHE_TTL) return cache;
  const data = (await getStorage().get<ImageOverrideMap>(KEY)) || {};
  cache = data;
  cacheTime = Date.now();
  return data;
}

async function writeAll(data: ImageOverrideMap): Promise<void> {
  await getStorage().set(KEY, data);
}

export async function writeOverride(slot: string, url: string): Promise<void> {
  const data = await readOverrides();
  data[slot] = url;
  await writeAll(data);
  cache = data;
  cacheTime = Date.now();
}

export async function deleteOverride(slot: string): Promise<void> {
  const data = await readOverrides();
  delete data[slot];
  await writeAll(data);
  cache = data;
  cacheTime = Date.now();
}

export function invalidateCache() {
  cache = null;
  cacheTime = 0;
}
