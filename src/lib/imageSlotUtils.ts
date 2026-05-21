import { r2Image } from "./r2";

// Shim: previously read images from MySQL. Now returns fallback URLs or R2 URLs.
// Images are now managed via Cloudflare R2 + Sanity.

export async function getSlotImages(
  slots: Array<{ slot: string; fallback: string }>
): Promise<Record<string, string>> {
  // In a future step, this could fetch from Sanity Site Settings
  // For now, it returns the fallback wrapped in r2Image
  return Object.fromEntries(
    slots.map(({ slot, fallback }) => [slot, r2Image(fallback)])
  );
}

export async function getSlotImage(slot: string, fallback: string): Promise<string> {
  // Try to use the fallback as a path and resolve it via R2
  return r2Image(fallback);
}
