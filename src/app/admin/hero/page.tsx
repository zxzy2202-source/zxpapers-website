import { readHero } from "@/lib/heroStore";
import HeroEditor from "@/components/admin/HeroEditor";

export const dynamic = "force-dynamic";

export default async function HeroAdminPage() {
  const data = await readHero();
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">🏠 首页 Hero 区设置</h1>
        <p className="text-slate-500 mt-1">
          管理首页顶部大图区的文字、按钮和轮播图。任何字段留空则使用代码默认值。
        </p>
      </div>
      <HeroEditor initial={data} />
    </div>
  );
}
