import { resolveManagedSlotPath, resolveMultipleSlotPaths } from "@/lib/imageSlots.server";

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
 * 使用批量查询（2次 DB 往返），避免 N+1 查询问题
 */
export async function getSlotImages(
  slots: { slot: string; fallback: string }[]
): Promise<Record<string, string>> {
  if (slots.length === 0) return {};

  try {
    const slotKeys = slots.map((s) => s.slot);
    const pathMap = await resolveMultipleSlotPaths(slotKeys);

    const result: Record<string, string> = {};
    for (const { slot, fallback } of slots) {
      result[slot] = pathMap[slot] || fallback;
    }
    return result;
  } catch {
    // 降级到逐个查询
    const entries = await Promise.all(
      slots.map(async ({ slot, fallback }) => {
        const path = await getSlotImage(slot, fallback);
        return [slot, path] as const;
      })
    );
    return Object.fromEntries(entries);
  }
}
