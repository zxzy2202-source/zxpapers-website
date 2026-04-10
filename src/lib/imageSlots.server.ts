import { del } from "@vercel/blob";
import { prisma, ensureDbSchema } from "@/lib/prisma";
import { type Prisma } from "@prisma/client";
import {
  buildImageSlotSeedData,
  getLegacySlotKey,
  getSlotInfo,
  IMAGE_SLOT_PAGES,
  normalizeSlotKey,
  type ImageAspectRatio,
} from "@/config/imageSlots";

export interface ImageSlotListItem {
  id: string;
  slotKey: string;
  pageKey: string;
  pageName: string;
  pagePath: string;
  sectionKey: string;
  sectionName: string;
  slotName: string;
  label: string;
  description: string | null;
  aspectRatio: ImageAspectRatio;
  sortOrder: number;
  isActive: boolean;
  imageAssetId: string | null;
  image: null | {
    id: string;
    filename: string;
    originalName: string | null;
    path: string;
    alt: string | null;
    label: string | null;
    size: number | null;
    mimeType: string | null;
    width: number | null;
    height: number | null;
    updatedAt: string;
  };
}

export interface ImageSlotStats {
  totalSlots: number;
  uploadedCount: number;
  emptyCount: number;
  coveredPages: number;
}

type SlotRecordWithImage = Prisma.ImageSlotRecordGetPayload<{
  include: { imageAsset: true };
}>;

function mapSlotRecord(record: SlotRecordWithImage): ImageSlotListItem {
  return {
    id: record.id,
    slotKey: record.slotKey,
    pageKey: record.pageKey,
    pageName: record.pageName,
    pagePath: record.pagePath,
    sectionKey: record.sectionKey,
    sectionName: record.sectionName,
    slotName: record.slotName,
    label: record.label,
    description: record.description,
    aspectRatio: record.aspectRatio as ImageAspectRatio,
    sortOrder: record.sortOrder,
    isActive: record.isActive,
    imageAssetId: record.imageAssetId,
    image: record.imageAsset
      ? {
          id: record.imageAsset.id,
          filename: record.imageAsset.filename,
          originalName: record.imageAsset.originalName,
          path: record.imageAsset.path,
          alt: record.imageAsset.alt,
          label: record.imageAsset.label,
          size: record.imageAsset.size,
          mimeType: record.imageAsset.mimeType,
          width: record.imageAsset.width,
          height: record.imageAsset.height,
          updatedAt: record.imageAsset.updatedAt.toISOString(),
        }
      : null,
  };
}

export async function initializeImageSlots() {
  await ensureDbSchema();
  const seedData = buildImageSlotSeedData();

  for (const slot of seedData) {
    await prisma.imageSlotRecord.upsert({
      where: { slotKey: slot.slotKey },
      create: slot,
      update: {
        pageKey: slot.pageKey,
        pageName: slot.pageName,
        pagePath: slot.pagePath,
        sectionKey: slot.sectionKey,
        sectionName: slot.sectionName,
        slotName: slot.slotName,
        label: slot.label,
        description: slot.description,
        aspectRatio: slot.aspectRatio,
        sortOrder: slot.sortOrder,
        isActive: true,
      },
    });
  }

  return prisma.imageSlotRecord.count();
}

export async function listImageSlots(params?: {
  pageKey?: string | null;
  keyword?: string | null;
}) {
  const keyword = params?.keyword?.trim() || "";

  const all = await prisma.imageSlotRecord.findMany({
    orderBy: [{ sortOrder: "asc" }, { pageKey: "asc" }],
    include: { imageAsset: true },
  });

  const filtered = all.filter((record) => {
    const matchPage = !params?.pageKey || params.pageKey === "all" || record.pageKey === params.pageKey;
    if (!matchPage) return false;
    if (!keyword) return true;
    const haystack = [
      record.slotKey,
      record.pageName,
      record.pagePath,
      record.sectionName,
      record.label,
      record.description || "",
      record.imageAsset?.filename || "",
      record.imageAsset?.alt || "",
      record.imageAsset?.label || "",
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(keyword.toLowerCase());
  });

  const stats: ImageSlotStats = {
    totalSlots: all.length,
    uploadedCount: all.filter((record) => !!record.imageAssetId).length,
    emptyCount: all.filter((record) => !record.imageAssetId).length,
    coveredPages: new Set(all.filter((record) => !!record.imageAssetId).map((record) => record.pageKey)).size,
  };

  return {
    slots: filtered.map(mapSlotRecord),
    stats,
    pages: IMAGE_SLOT_PAGES,
  };
}

export async function getSlotRecordByKey(slotKey: string) {
  const normalized = normalizeSlotKey(slotKey);
  return prisma.imageSlotRecord.findUnique({
    where: { slotKey: normalized },
    include: { imageAsset: true },
  });
}

export async function ensureSlotRecord(slotKey: string) {
  const normalized = normalizeSlotKey(slotKey);
  const existing = await prisma.imageSlotRecord.findUnique({ where: { slotKey: normalized } });
  if (existing) return existing;

  const slotInfo = getSlotInfo(normalized);
  if (!slotInfo) {
    throw new Error("未找到对应槽位配置");
  }

  return prisma.imageSlotRecord.create({
    data: {
      slotKey: slotInfo.slot,
      pageKey: slotInfo.pageKey,
      pageName: slotInfo.pageName,
      pagePath: slotInfo.pagePath,
      sectionKey: slotInfo.sectionKey,
      sectionName: slotInfo.sectionName,
      slotName: slotInfo.slotName,
      label: slotInfo.label,
      description: slotInfo.description,
      aspectRatio: slotInfo.aspectRatio,
      sortOrder: slotInfo.sortOrder,
      isActive: true,
    },
  });
}

export async function bindImageToSlot(slotKey: string, imageAssetId: string) {
  const normalized = normalizeSlotKey(slotKey);
  const legacySlot = getLegacySlotKey(normalized);

  const updated = await prisma.imageSlotRecord.update({
    where: { slotKey: normalized },
    data: { imageAssetId },
    include: { imageAsset: true },
  });

  await prisma.imageAsset.update({
    where: { id: imageAssetId },
    data: {
      page: legacySlot,
      updatedAt: new Date(),
    },
  });

  return mapSlotRecord(updated);
}

export async function clearSlotImage(slotKey: string) {
  const normalized = normalizeSlotKey(slotKey);
  const existing = await prisma.imageSlotRecord.findUnique({
    where: { slotKey: normalized },
    include: { imageAsset: true },
  });

  if (!existing) {
    throw new Error("槽位不存在");
  }

  if (existing.imageAsset) {
    const blobUrl = existing.imageAsset.path;
    // 如果是 Blob URL（https://...vercel-storage.com/...），则删除 Blob 文件
    if (blobUrl && blobUrl.startsWith("https://") && blobUrl.includes("vercel-storage.com")) {
      try {
        await del(blobUrl);
      } catch (e) {
        console.warn("Failed to delete blob file:", e);
      }
    }
    // 删除数据库中的图片记录
    await prisma.imageAsset.delete({ where: { id: existing.imageAsset.id } });
  }

  const updated = await prisma.imageSlotRecord.update({
    where: { slotKey: normalized },
    data: { imageAssetId: null },
    include: { imageAsset: true },
  });

  return mapSlotRecord(updated);
}

export async function deleteImageAssetCompletely(imageAssetId: string) {
  const image = await prisma.imageAsset.findUnique({ where: { id: imageAssetId } });
  if (!image) return null;

  // 解除所有槽位绑定
  await prisma.imageSlotRecord.updateMany({
    where: { imageAssetId },
    data: { imageAssetId: null },
  });

  // 删除数据库记录
  await prisma.imageAsset.delete({ where: { id: imageAssetId } });

  // 删除 Vercel Blob 中的物理文件（如果是 Blob URL）
  if (image.path && image.path.startsWith("https://") && image.path.includes("vercel-storage.com")) {
    try {
      await del(image.path);
    } catch (e) {
      console.warn("[deleteImageAssetCompletely] Failed to delete blob file:", e);
    }
  }

  return image;
}

export async function resolveManagedSlotPath(slot: string) {
  const normalized = normalizeSlotKey(slot);
  const slotRecord = await prisma.imageSlotRecord.findUnique({
    where: { slotKey: normalized },
    include: { imageAsset: { select: { path: true } } },
  });

  if (slotRecord?.imageAsset?.path) {
    return slotRecord.imageAsset.path;
  }

  const legacyKey = getLegacySlotKey(normalized);
  const legacyImage = await prisma.imageAsset.findFirst({
    where: { page: legacyKey },
    orderBy: { updatedAt: "desc" },
    select: { path: true },
  });

  return legacyImage?.path || "";
}

/**
 * 批量获取多个 slot 的图片路径（优化版）
 * 将 N 次数据库查询合并为 2 次，显著降低首页等多槽位页面的数据库压力
 */
export async function resolveMultipleSlotPaths(
  slots: string[]
): Promise<Record<string, string>> {
  const normalizedSlots = slots.map(normalizeSlotKey);

  // 一次性批量查询所有槽位记录
  const slotRecords = await prisma.imageSlotRecord.findMany({
    where: { slotKey: { in: normalizedSlots } },
    include: { imageAsset: { select: { path: true } } },
  });

  const result: Record<string, string> = {};
  const missingSlots: string[] = [];

  // 建立 slotKey -> path 映射
  const slotMap = new Map(
    slotRecords.map((r) => [r.slotKey, r.imageAsset?.path || ""])
  );

  for (const normalized of normalizedSlots) {
    const path = slotMap.get(normalized);
    if (path) {
      result[normalized] = path;
    } else {
      missingSlots.push(normalized);
    }
  }

  // 对未命中的槽位，批量查询旧版 legacy key
  if (missingSlots.length > 0) {
    const legacyKeys = missingSlots.map(getLegacySlotKey);
    const legacyImages = await prisma.imageAsset.findMany({
      where: { page: { in: legacyKeys } },
      orderBy: { updatedAt: "desc" },
      select: { path: true, page: true },
    });

    // 取每个 legacy key 的最新图片
    const legacyMap = new Map<string, string>();
    for (const img of legacyImages) {
      if (img.page && !legacyMap.has(img.page)) {
        legacyMap.set(img.page, img.path);
      }
    }

    for (const normalized of missingSlots) {
      const legacyKey = getLegacySlotKey(normalized);
      result[normalized] = legacyMap.get(legacyKey) || "";
    }
  }

  return result;
}
