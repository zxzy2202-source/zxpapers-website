// Shim: previously read images from MySQL. Now returns fallback URLs directly.
// Images are now managed via Cloudflare R2 + Sanity.

export async function getSlotImages(
  slots: Array<{ slot: string; fallback: string }>
): Promise<Record<string, string>> {
  return Object.fromEntries(slots.map(({ slot, fallback }) => [slot, fallback]));
}

export async function getSlotImage(slot: string, fallback: string): Promise<string> {
  return fallback;
}
