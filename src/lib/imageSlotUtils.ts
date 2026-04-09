import { prisma } from "@/lib/prisma";

/**
 * 根据 slot 标识符获取已绑定的图片路径
 * 若未绑定则返回 fallback
 */
export async function getSlotImage(
  slot: string,
  fallback: string = ""
): Promise<string> {
  try {
    const image = await prisma.imageAsset.findFirst({
      where: { page: slot },
      orderBy: { updatedAt: "desc" },
      select: { path: true },
    });
    return image?.path || fallback;
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
  const slotKeys = slots.map((s) => s.slot);
  try {
    const images = await prisma.imageAsset.findMany({
      where: { page: { in: slotKeys } },
      orderBy: { updatedAt: "desc" },
      select: { page: true, path: true },
    });

    // 每个 slot 取最新的一张
    const result: Record<string, string> = {};
    for (const { slot, fallback } of slots) {
      const found = images.find((img) => img.page === slot);
      result[slot] = found?.path || fallback;
    }
    return result;
  } catch {
    // 出错时全部使用 fallback
    return Object.fromEntries(slots.map(({ slot, fallback }) => [slot, fallback]));
  }
}
