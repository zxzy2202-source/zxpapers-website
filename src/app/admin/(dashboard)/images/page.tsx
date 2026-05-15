import ImageManager from "@/components/admin/ImageManager";
import { initializeImageSlots, listImageSlots } from "@/lib/imageSlots.server";
import { IMAGE_SLOT_PAGES } from "@/config/imageSlots";

export default async function ImagesPage() {
  let data: Awaited<ReturnType<typeof listImageSlots>> = {
    slots: [],
    stats: { totalSlots: 0, uploadedCount: 0, emptyCount: 0, coveredPages: 0 },
    pages: IMAGE_SLOT_PAGES,
  };
  try {
    await initializeImageSlots();
    data = await listImageSlots({ pageKey: "all", keyword: "" });
  } catch (error) {
    console.error("Error loading image slots:", error);
  }

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">图片资产管理</h1>
        <p className="mt-1 text-sm text-gray-500">
          以 Page / Section / Slot 三级结构管理站点图片资源，支持初始化空槽位、裁剪上传、Alt 生成与删除替换。
        </p>
      </div>
      <ImageManager initialData={data} />
    </div>
  );
}
