import { r2Image } from "./r2";
import { readOverrides } from "./imageSlotStore";
import type { SlotKey } from "@/config/imageSlots";

/**
 * 图片槽位解析：
 * 1. 优先读取后台配置的覆盖图（来自 KV: image-overrides）
 * 2. 没有覆盖时，回退到代码中的 fallback URL
 * 3. fallback 经过 r2Image 处理，相对路径会拼接 R2 域名
 *
 * 类型安全：
 *   - slot 参数被约束为 SlotKey（imageSlots.ts 注册表里的 key）
 *   - 拼错或没注册会编译报错，杜绝"后台改了前台不变"的隐患
 */
export async function getSlotImages(
  slots: Array<{ slot: SlotKey; fallback: string }>,
): Promise<Record<string, string>> {
  const overrides = await readOverrides();
  return Object.fromEntries(
    slots.map(({ slot, fallback }) => [
      slot,
      overrides[slot] || r2Image(fallback),
    ]),
  );
}

export async function getSlotImage(
  slot: SlotKey,
  fallback: string,
): Promise<string> {
  const overrides = await readOverrides();
  if (overrides[slot]) return overrides[slot];
  return r2Image(fallback);
}
