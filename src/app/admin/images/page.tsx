import { IMAGE_SLOTS, groupSlotsByPage } from "@/config/imageSlots";
import { readOverrides } from "@/lib/imageSlotStore";
import ImageManagerClient from "./ImageManagerClient";

export const dynamic = "force-dynamic";

export default async function ImagesPage() {
  const overrides = await readOverrides();
  const grouped = groupSlotsByPage();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">📸 图片管理</h1>
        <p className="text-slate-500 mt-1">
          全站共 <b>{IMAGE_SLOTS.length}</b> 个图片位，已自定义{" "}
          <b className="text-blue-600">{Object.keys(overrides).length}</b> 个。
          点击「换图」即可上传新图替换 AI 占位图。
        </p>
      </div>

      <ImageManagerClient slotsGrouped={grouped} overrides={overrides} />
    </div>
  );
}
