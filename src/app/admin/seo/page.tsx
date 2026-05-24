import { readSeo } from "@/lib/seoStore";
import { calculateSeoScore, getSeoScoreLevel } from "@/lib/seoScore";
import SeoClient from "./SeoClient";

export const dynamic = "force-dynamic";

export default async function SeoPage() {
  const seo = await readSeo();
  const notifyStatus = {
    wecom: !!process.env.WECOM_WEBHOOK_URL,
    feishu: !!process.env.FEISHU_WEBHOOK_URL,
    serverchan: !!process.env.SERVERCHAN_SENDKEY,
    web3forms: !!process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
  };

  const score = calculateSeoScore(seo);
  const level = getSeoScoreLevel(score);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-6 flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">🔍 SEO 设置</h1>
          <p className="text-slate-500 mt-1">
            配置全站 SEO 元数据、搜索引擎验证码、第三方追踪以及通知渠道。
          </p>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl px-5 py-3 flex items-center gap-4 shadow-sm">
          <div className="text-center">
            <div className={`text-3xl font-bold ${level.color}`}>{score}</div>
            <div className="text-xs text-slate-400 mt-0.5">健康度评分</div>
          </div>
          <div className="h-10 w-px bg-slate-200" />
          <div>
            <div className={`text-sm font-semibold ${level.color}`}>{level.label}</div>
            <div className="text-xs text-slate-400 mt-0.5">填得越完整分越高</div>
          </div>
        </div>
      </div>
      <SeoClient initialSeo={seo} notifyStatus={notifyStatus} />
    </div>
  );
}
