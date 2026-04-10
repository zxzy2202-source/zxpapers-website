import { resolveManagedSlotPath } from "@/lib/imageSlots.server";

/**
 * 根据 slot 标识符获取已绑定的图片路径
 * 若未绑定则返回 fallback
 */
export async function getSlotImage(
  slot: string,
  fallback: string = ""
): Promise<string> {
  try {
    const path = await resolveManagedSlotPath(slot);
    return path || fallback;
  } catch {
    return fallback;
  }
}

/**
 * 批量获取多个 slot 的图片路径
 * 返回 Record<slot, path>，未绑定的 slot 使用对应 fallback
 */
export async function getSlotImages(
  slots: { slot: string; fallback: string }[]
): Promise<Record<string, string>> {
  const entries = await Promise.all(
    slots.map(async ({ slot, fallback }) => {
      const path = await getSlotImage(slot, fallback);
      return [slot, path] as const;
    })
  );

  return Object.fromEntries(entries);
}
