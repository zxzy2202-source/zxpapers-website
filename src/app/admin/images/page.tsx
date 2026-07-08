import { IMAGE_SLOTS, groupSlotsByPage } from "@/config/imageSlots";
import { readOverrides } from "@/lib/imageSlotStore";
import { buildDefaultImagesForSlots } from "@/lib/imageSlotDefaults";
import ImageManagerClient from "./ImageManagerClient";
import { Images } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function ImagesPage() {
  const overrides = await readOverrides();
  const grouped = groupSlotsByPage();
  const defaultImages = buildDefaultImagesForSlots(IMAGE_SLOTS);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <Images size={20} />
            </span>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">图片素材管理</h1>
              <p className="text-sm text-slate-500">
                按页面分组管理 Hero 图、产品卡片图、应用场景图和尺寸卡片图。
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600">
          全站共 <b className="text-slate-900">{IMAGE_SLOTS.length}</b> 个图片位，
          已自定义 <b className="text-blue-600">{Object.keys(overrides).length}</b> 个。
        </div>
      </div>

      <ImageManagerClient
        slotsGrouped={grouped}
        overrides={overrides}
        defaultImages={defaultImages}
      />
    </div>
  );
}
