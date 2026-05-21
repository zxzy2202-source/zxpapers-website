import { readSeo } from "@/lib/seoStore";
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

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">🔍 SEO 设置</h1>
        <p className="text-slate-500 mt-1">
          配置全站 SEO 元数据、搜索引擎验证码、第三方追踪以及通知渠道。
        </p>
      </div>
      <SeoClient initialSeo={seo} notifyStatus={notifyStatus} />
    </div>
  );
}
