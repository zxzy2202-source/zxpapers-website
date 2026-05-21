import { r2Image } from "./r2";
import { readOverrides } from "./imageSlotStore";

/**
 * 图片槽位解析：
 * 1. 优先读取后台配置的覆盖图（来自 data/image-overrides.json）
 * 2. 没有覆盖时，回退到代码中的 fallback URL
 * 3. fallback 经过 r2Image 处理，相对路径会拼接 R2 域名
 *
 * slot 命名规范：`page:purpose`，例如：
 *   - "home:hero"
 *   - "about:factory"
 *   - "markets:africa-hero"
 */
export async function getSlotImages(
  slots: Array<{ slot: string; fallback: string }>
): Promise<Record<string, string>> {
  const overrides = await readOverrides();
  return Object.fromEntries(
    slots.map(({ slot, fallback }) => [
      slot,
      overrides[slot] || r2Image(fallback),
    ])
  );
}

export async function getSlotImage(slot: string, fallback: string): Promise<string> {
  const overrides = await readOverrides();
  if (overrides[slot]) return overrides[slot];
  return r2Image(fallback);
}
