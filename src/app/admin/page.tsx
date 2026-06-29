import Link from "next/link";
import {
  Image as ImageIcon,
  FileText,
  Inbox,
  Search,
  ExternalLink,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Database,
  Cloud,
} from "lucide-react";
import { IMAGE_SLOTS } from "@/config/imageSlots";
import { readOverrides } from "@/lib/imageSlotStore";
import { readAllPosts } from "@/lib/postsStore";
import { readAll as readAllInquiries } from "@/lib/inquiryStore";
import { readSeo } from "@/lib/seoStore";
import { R2_PUBLIC_BASE, R2_BUCKET_NAME, r2Configured } from "@/lib/r2";
import { calculateSeoScore, getSeoScoreLevel } from "@/lib/seoScore";

export const dynamic = "force-dynamic";

function getSystemStatus() {
  const kvConfigured = !!(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
  const hasPublicR2Url = !!process.env.NEXT_PUBLIC_R2_URL;
  const bucketConfigured = !!R2_BUCKET_NAME;
  const allReady = kvConfigured && r2Configured && bucketConfigured && hasPublicR2Url;

  return {
    allReady,
    items: [
      {
        label: "KV 数据存储",
        ok: kvConfigured,
        detail: kvConfigured
          ? "后台内容会保存到线上 KV"
          : "缺少 KV_REST_API_URL 或 KV_REST_API_TOKEN，生产环境保存可能不持久",
      },
      {
        label: "R2 上传凭据",
        ok: r2Configured,
        detail: r2Configured
          ? "图片上传 API 已具备 R2 访问凭据"
          : "缺少 R2_ACCOUNT_ID / R2_ACCESS_KEY_ID / R2_SECRET_ACCESS_KEY",
      },
      {
        label: "R2 Bucket",
        ok: bucketConfigured,
        detail: bucketConfigured
          ? "图片上传目标 Bucket 已配置"
          : "缺少 R2_BUCKET_NAME，后台上传会失败",
      },
      {
        label: "公网图片域名",
        ok: hasPublicR2Url,
        detail: hasPublicR2Url
          ? `前台图片会使用 ${R2_PUBLIC_BASE}`
          : `未设置 NEXT_PUBLIC_R2_URL，当前会回退到 ${R2_PUBLIC_BASE}`,
      },
    ],
  };
}

async function getStats() {
  // v2.1: Promise.all 并发拉取，避免串行延迟
  const [overrides, posts, inquiries, seo] = await Promise.all([
    readOverrides(),
    readAllPosts().catch(() => []),
    readAllInquiries().catch(() => []),
    readSeo().catch(() => null),
  ]);

  // 今日询盘数（按本地时间 0 点为界）
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);
  const todayInquiries = inquiries.filter(
    (i) => new Date(i.createdAt).getTime() >= todayStart.getTime()
  ).length;
  const newInquiries = inquiries.filter((i) => i.status === "new").length;

  return {
    totalSlots: IMAGE_SLOTS.length,
    customized: Object.keys(overrides).length,
    publishedPosts: posts.filter((p) => p.published).length,
    totalPosts: posts.length,
    todayInquiries,
    newInquiries,
    totalInquiries: inquiries.length,
    seoScore: calculateSeoScore(seo),
  };
}

export default async function DashboardPage() {
  const stats = await getStats();
  const systemStatus = getSystemStatus();
  const customRate = Math.round((stats.customized / stats.totalSlots) * 100);
  const seoLevel = getSeoScoreLevel(stats.seoScore);

  const cards = [
    {
      title: "图片管理",
      desc: "一键替换全站占位图",
      href: "/admin/images",
      icon: ImageIcon,
      color: "from-blue-500 to-cyan-500",
      stat: `${stats.customized}/${stats.totalSlots}`,
      statLabel: "已自定义",
    },
    {
      title: "文章管理",
      desc: "撰写发布博客文章",
      href: "/admin/posts",
      icon: FileText,
      color: "from-emerald-500 to-teal-500",
      stat: `${stats.publishedPosts}/${stats.totalPosts}`,
      statLabel: "已发布",
    },
    {
      title: "客户询盘",
      desc: stats.newInquiries > 0 ? `${stats.newInquiries} 条未处理` : "查看所有客户留言",
      href: "/admin/inquiries",
      icon: Inbox,
      color: "from-amber-500 to-orange-500",
      stat: stats.todayInquiries > 0 ? `${stats.todayInquiries}` : `${stats.totalInquiries}`,
      statLabel: stats.todayInquiries > 0 ? "今日新增" : "累计询盘",
    },
    {
      title: "SEO 设置",
      desc: `当前评级：${seoLevel.label}`,
      href: "/admin/seo",
      icon: Search,
      color: "from-purple-500 to-pink-500",
      stat: `${stats.seoScore}`,
      statLabel: "健康度评分",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* 欢迎区 */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">老板，您好 👋</h1>
        <p className="text-slate-500 mt-2">
          欢迎回来。下面是您网站的实时状态。
        </p>
      </div>

      {/* 概览卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.href}
              href={card.href}
              className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} text-white mb-4`}>
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
              <p className="text-sm text-slate-500 mt-1">{card.desc}</p>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                <div>
                  <div className="text-2xl font-bold text-slate-900">{card.stat}</div>
                  <div className="text-xs text-slate-400">{card.statLabel}</div>
                </div>
                <ArrowRight size={18} className="text-slate-300 group-hover:text-slate-600 group-hover:translate-x-1 transition" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* 快捷指引 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">🚀 快速开始</h2>
          <div className="space-y-3">
            <QuickTip num={1} title="换掉 AI 占位图" desc="进入「图片管理」，点击任意图片旁的「换图」按钮，上传您拍摄的真实工厂/产品图。" />
            <QuickTip num={2} title="发布第一篇博客" desc="进入「文章管理」点「+ 写新文章」，标题+封面+正文，发布后立即可被 Google 收录。" />
            <QuickTip num={3} title="接收客户询盘" desc="去「SEO 设置」配置好微信/飞书通知 Webhook，客户提交表单时您手机会立即收到提醒。" />
            <QuickTip num={4} title="优化 SEO 分数" desc="进入「SEO 设置」修改全站标题、关键词、OG 分享图，让 Google 更喜欢您的网站。" />
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200">
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                  <Database size={18} /> 系统配置状态
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  快速判断后台保存、图片上传和前台图片显示是否具备完整配置。
                </p>
              </div>
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
                  systemStatus.allReady
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-amber-100 text-amber-800"
                }`}
              >
                {systemStatus.allReady ? <CheckCircle size={13} /> : <AlertTriangle size={13} />}
                {systemStatus.allReady ? "配置完整" : "需检查"}
              </span>
            </div>
            <div className="space-y-3">
              {systemStatus.items.map((item) => (
                <div key={item.label} className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3">
                  <div
                    className={`mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full ${
                      item.ok ? "bg-emerald-100 text-emerald-600" : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {item.ok ? <CheckCircle size={15} /> : <AlertTriangle size={15} />}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{item.label}</div>
                    <p className="mt-0.5 text-xs leading-relaxed text-slate-500">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50 p-3 text-xs leading-relaxed text-blue-800">
              <Cloud size={14} className="inline-block mr-1 align-[-2px]" />
              如出现图片不显示或后台保存失败，优先检查 Vercel 环境变量中的 KV 与 R2 配置。
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-4">📊 图片自定义进度</h2>
            <div className="mb-3">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-300">已替换 AI 占位图</span>
                <span className="text-white font-semibold">{customRate}%</span>
              </div>
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 transition-all"
                  style={{ width: `${customRate}%` }}
                />
              </div>
            </div>
            <p className="text-sm text-slate-400 mt-4">
              {customRate < 30
                ? "建议优先替换首页和产品页的图，提升专业感"
                : customRate < 70
                ? "继续加油，市场页也很重要"
                : "做得很棒！网站越来越专业了"}
            </p>
            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-2 mt-6 text-sm text-blue-300 hover:text-blue-200"
            >
              查看前台网站 <ExternalLink size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuickTip({ num, title, desc }: { num: number; title: string; desc: string }) {
  return (
    <div className="flex gap-4 p-3 hover:bg-slate-50 rounded-lg transition">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-sm">
        {num}
      </div>
      <div>
        <div className="font-medium text-slate-900">{title}</div>
        <div className="text-sm text-slate-500">{desc}</div>
      </div>
    </div>
  );
}
