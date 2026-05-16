import { del } from "@vercel/blob";
import { stat, unlink } from "node:fs/promises";
import path from "node:path";
import { prisma, ensureDbSchema } from "@/lib/prisma";
import { type ImageSlotRecord, type Prisma } from "@prisma/client";
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
  select: {
    id: true;
    slotKey: true;
    pageKey: true;
    pageName: true;
    pagePath: true;
    sectionKey: true;
    sectionName: true;
    slotName: true;
    label: true;
    description: true;
    aspectRatio: true;
    sortOrder: true;
    isActive: true;
    imageAssetId: true;
    imageAsset: {
      select: {
        id: true;
        filename: true;
        originalName: true;
        path: true;
        alt: true;
        label: true;
        size: true;
        mimeType: true;
        width: true;
        height: true;
        updatedAt: true;
      };
    };
  };
}>;

type LegacyHomeImageBinding = {
  slotKey: string;
  assetId: string;
  path: string;
  alt: string | null;
};

export interface LegacyHomeBootstrapResult {
  restoredBindings: number;
  createdAssets: number;
  reusedAssets: number;
  skippedExisting: number;
  missingFiles: string[];
}

const LEGACY_HOME_IMAGE_BINDINGS: LegacyHomeImageBinding[] = [
  {
    slotKey: "home:hero:background",
    assetId: "cmp59jve300mw3gi6tez4adsu",
    path: "/uploads/images/1778749543080-ec4202f4-8825-4e30-8d4d-8c6777a8881b-coreless-thermal-paper-rolls-smi.webp",
    alt: "Hero for Home Hero",
  },
  {
    slotKey: "home:featured-products:thermal-rolls-card",
    assetId: "cmp5dae0x00ebkni6zt0zuxb8",
    path: "/uploads/images/1778755819135-456d030e-f44b-453b-86bb-69c736ef4e12-32b6c697519b48fc814b3a4712323de2.webp",
    alt: "Thermal Rolls Card for Home Featured Products",
  },
  {
    slotKey: "home:hero:slide-2",
    assetId: "cmp59p76h016y3gi65t8y6dlo",
    path: "/uploads/images/1778749791640-3b5c725a-937d-48a1-bdad-b0331d9c9dca-image.webp",
    alt: null,
  },
  {
    slotKey: "home:hero:slide-3",
    assetId: "cmp5de2m100k2kni6saxcitln",
    path: "/uploads/images/1778755990969-6ffc3b55-e5db-47b2-949b-e2a77a79e37c-image.webp",
    alt: "Hero 3 for Home Hero",
  },
];

const LEGACY_HOME_SLOT_KEYS = new Set(
  LEGACY_HOME_IMAGE_BINDINGS.map((item) => item.slotKey)
);

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

function slotMatchesSeed(
  record: Pick<
    ImageSlotRecord,
    | "pageKey"
    | "pageName"
    | "pagePath"
    | "sectionKey"
    | "sectionName"
    | "slotName"
    | "label"
    | "description"
    | "aspectRatio"
    | "sortOrder"
  >,
  seed: ReturnType<typeof buildImageSlotSeedData>[number],
) {
  return (
    record.pageKey === seed.pageKey &&
    record.pageName === seed.pageName &&
    record.pagePath === seed.pagePath &&
    record.sectionKey === seed.sectionKey &&
    record.sectionName === seed.sectionName &&
    record.slotName === seed.slotName &&
    record.label === seed.label &&
    record.description === seed.description &&
    record.aspectRatio === seed.aspectRatio &&
    record.sortOrder === seed.sortOrder
  );
}

export async function initializeImageSlots() {
  await ensureDbSchema();
  const seedData = buildImageSlotSeedData();
  const existing = await prisma.imageSlotRecord.findMany({
    select: {
      slotKey: true,
      pageKey: true,
      pageName: true,
      pagePath: true,
      sectionKey: true,
      sectionName: true,
      slotName: true,
      label: true,
      description: true,
      aspectRatio: true,
      sortOrder: true,
    },
  });

  const existingMap = new Map(existing.map((record) => [record.slotKey, record]));
  const missing: ReturnType<typeof buildImageSlotSeedData> = [];
  const updates: Promise<unknown>[] = [];

  for (const slot of seedData) {
    const current = existingMap.get(slot.slotKey);
    if (!current) {
      missing.push(slot);
      continue;
    }

    if (!slotMatchesSeed(current, slot)) {
      updates.push(
        prisma.imageSlotRecord.update({
          where: { slotKey: slot.slotKey },
          data: {
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
        }),
      );
    }
  }

  if (missing.length > 0) {
    await prisma.imageSlotRecord.createMany({
      data: missing,
      skipDuplicates: true,
    });
  }

  if (updates.length > 0) {
    await Promise.all(updates);
  }

  await bootstrapLegacyHomeImages();

  return prisma.imageSlotRecord.count();
}

export async function listImageSlots(params?: {
  pageKey?: string | null;
  keyword?: string | null;
}) {
  const keyword = params?.keyword?.trim() || "";
  const lowerKeyword = keyword.toLowerCase();
  const where: Prisma.ImageSlotRecordWhereInput = {};
  if (params?.pageKey && params.pageKey !== "all") {
    where.pageKey = params.pageKey;
  }

  const [all, statRows] = await Promise.all([
    prisma.imageSlotRecord.findMany({
      where,
      orderBy: [{ sortOrder: "asc" }, { pageKey: "asc" }],
      select: {
        id: true,
        slotKey: true,
        pageKey: true,
        pageName: true,
        pagePath: true,
        sectionKey: true,
        sectionName: true,
        slotName: true,
        label: true,
        description: true,
        aspectRatio: true,
        sortOrder: true,
        isActive: true,
        imageAssetId: true,
        imageAsset: {
          select: {
            id: true,
            filename: true,
            originalName: true,
            path: true,
            alt: true,
            label: true,
            size: true,
            mimeType: true,
            width: true,
            height: true,
            updatedAt: true,
          },
        },
      },
    }),
    prisma.imageSlotRecord.findMany({
      select: { imageAssetId: true, pageKey: true },
    }),
  ]);

  const filtered = keyword
    ? all.filter((record) => {
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
        return haystack.includes(lowerKeyword);
      })
    : all;

  const stats: ImageSlotStats = {
    totalSlots: statRows.length,
    uploadedCount: statRows.filter((record) => !!record.imageAssetId).length,
    emptyCount: statRows.filter((record) => !record.imageAssetId).length,
    coveredPages: new Set(statRows.filter((record) => !!record.imageAssetId).map((record) => record.pageKey)).size,
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

export async function bootstrapLegacyHomeImages(
  options?: { force?: boolean }
): Promise<LegacyHomeBootstrapResult> {
  await ensureDbSchema();

  const result: LegacyHomeBootstrapResult = {
    restoredBindings: 0,
    createdAssets: 0,
    reusedAssets: 0,
    skippedExisting: 0,
    missingFiles: [],
  };

  for (const item of LEGACY_HOME_IMAGE_BINDINGS) {
    const slotRecord = await ensureSlotRecord(item.slotKey);

    if (slotRecord.imageAssetId && !options?.force) {
      result.skippedExisting += 1;
      continue;
    }

    const absolutePath = path.join(process.cwd(), "public", item.path.replace(/^\//, ""));
    let fileSize: number | null = null;

    try {
      const fileStats = await stat(absolutePath);
      fileSize = Number.isFinite(fileStats.size) ? fileStats.size : null;
    } catch {
      result.missingFiles.push(item.path);
      continue;
    }

    const filename = path.basename(item.path);
    const legacyPageKey = getLegacySlotKey(slotRecord.slotKey);

    let asset = await prisma.imageAsset.findUnique({
      where: { id: item.assetId },
    });

    if (asset) {
      result.reusedAssets += 1;
      asset = await prisma.imageAsset.update({
        where: { id: asset.id },
        data: {
          filename,
          originalName: asset.originalName || filename,
          path: item.path,
          alt: item.alt,
          page: legacyPageKey,
          label: slotRecord.label,
          tags: `${slotRecord.pageKey},${slotRecord.sectionKey},${slotRecord.slotName}`,
          mimeType: asset.mimeType || "image/webp",
          storageType: "local",
          source: "legacy-home-bootstrap",
          size: asset.size ?? fileSize,
        },
      });
    } else {
      const existingByPath = await prisma.imageAsset.findFirst({
        where: { path: item.path },
        orderBy: { createdAt: "asc" },
      });

      if (existingByPath) {
        result.reusedAssets += 1;
        asset = await prisma.imageAsset.update({
          where: { id: existingByPath.id },
          data: {
            filename,
            originalName: existingByPath.originalName || filename,
            alt: item.alt,
            page: legacyPageKey,
            label: slotRecord.label,
            tags: `${slotRecord.pageKey},${slotRecord.sectionKey},${slotRecord.slotName}`,
            mimeType: existingByPath.mimeType || "image/webp",
            storageType: "local",
            source: "legacy-home-bootstrap",
            size: existingByPath.size ?? fileSize,
          },
        });
      } else {
        result.createdAssets += 1;
        asset = await prisma.imageAsset.create({
          data: {
            id: item.assetId,
            filename,
            originalName: filename,
            path: item.path,
            alt: item.alt,
            page: legacyPageKey,
            label: slotRecord.label,
            tags: `${slotRecord.pageKey},${slotRecord.sectionKey},${slotRecord.slotName}`,
            mimeType: "image/webp",
            storageType: "local",
            source: "legacy-home-bootstrap",
            size: fileSize,
          },
        });
      }
    }

    if (slotRecord.imageAssetId !== asset.id) {
      await bindImageToSlot(slotRecord.slotKey, asset.id);
      result.restoredBindings += 1;
    }
  }

  return result;
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
    // 如果是本地上传文件，则删除 public 目录中的文件
    if (blobUrl?.startsWith("/uploads/") || blobUrl?.startsWith("/images/uploads/")) {
      const relativePath = blobUrl.startsWith("/") ? blobUrl.slice(1) : blobUrl;
      const localPath = path.join(process.cwd(), "public", relativePath.replace(/^images\//, ""));
      try {
        await unlink(localPath);
      } catch (e) {
        console.warn("Failed to delete local slot image:", e);
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
  let slotRecord = await prisma.imageSlotRecord.findUnique({
    where: { slotKey: normalized },
    include: { imageAsset: { select: { path: true } } },
  });

  if (slotRecord?.imageAsset?.path) {
    return slotRecord.imageAsset.path;
  }

  if (LEGACY_HOME_SLOT_KEYS.has(normalized)) {
    await bootstrapLegacyHomeImages();
    slotRecord = await prisma.imageSlotRecord.findUnique({
      where: { slotKey: normalized },
      include: { imageAsset: { select: { path: true } } },
    });
    if (slotRecord?.imageAsset?.path) {
      return slotRecord.imageAsset.path;
    }
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

  const needsLegacyBootstrap = missingSlots.some((slotKey) =>
    LEGACY_HOME_SLOT_KEYS.has(slotKey)
  );

  if (needsLegacyBootstrap) {
    await bootstrapLegacyHomeImages();
    const retriedSlotRecords = await prisma.imageSlotRecord.findMany({
      where: { slotKey: { in: missingSlots } },
      include: { imageAsset: { select: { path: true } } },
    });

    const retriedMap = new Map(
      retriedSlotRecords.map((record) => [record.slotKey, record.imageAsset?.path || ""])
    );

    for (const normalized of [...missingSlots]) {
      const path = retriedMap.get(normalized);
      if (path) {
        result[normalized] = path;
      }
    }
  }

  // 对未命中的槽位，批量查询旧版 legacy key
  const unresolvedSlots = missingSlots.filter((slotKey) => !result[slotKey]);

  if (unresolvedSlots.length > 0) {
    const legacyKeys = unresolvedSlots.map(getLegacySlotKey);
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

    for (const normalized of unresolvedSlots) {
      const legacyKey = getLegacySlotKey(normalized);
      result[normalized] = legacyMap.get(legacyKey) || "";
    }
  }

  return result;
}
