import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import InquiryStatusActions from "@/components/admin/InquiryStatusActions";

interface PageProps {
  params: Promise<{ id: string }>;
}

const statusLabels: Record<string, string> = {
  NEW: "新询盘",
  REPLIED: "已回复",
  CLOSED: "已关闭",
};

export default async function InquiryDetailPage({ params }: PageProps) {
  const { id } = await params;

  const inquiry = await prisma.inquiry.findUnique({ where: { id } });

  if (!inquiry) notFound();

  const statusColors: Record<string, string> = {
    NEW: "bg-blue-100 text-blue-700 border-blue-200",
    REPLIED: "bg-green-100 text-green-700 border-green-200",
    CLOSED: "bg-gray-100 text-gray-600 border-gray-200",
  };

  return (
    <div className="max-w-3xl space-y-5">
      {/* Back */}
      <Link
        href="/admin/inquiries"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        返回询盘列表
      </Link>

      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{inquiry.name}</h1>
          <p className="text-gray-500 text-sm mt-1">
            收到于 {new Date(inquiry.createdAt).toLocaleDateString("zh-CN", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
        <span
          className={`text-sm px-3 py-1 rounded-full font-medium border ${
            statusColors[inquiry.status] || statusColors.NEW
          }`}
        >
          {statusLabels[inquiry.status] || inquiry.status}
        </span>
      </div>

      {/* Contact Info */}
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <h2 className="text-sm font-semibold text-gray-900 mb-4">联系人信息</h2>
        <dl className="grid grid-cols-2 gap-4">
          <div>
            <dt className="text-xs text-gray-400 uppercase tracking-wide">姓名</dt>
            <dd className="text-sm text-gray-900 mt-0.5">{inquiry.name}</dd>
          </div>
          <div>
            <dt className="text-xs text-gray-400 uppercase tracking-wide">邮箱</dt>
            <dd className="mt-0.5">
              <a href={`mailto:${inquiry.email}`} className="text-sm text-blue-600 hover:underline">
                {inquiry.email}
              </a>
            </dd>
          </div>
          {inquiry.company && (
            <div>
              <dt className="text-xs text-gray-400 uppercase tracking-wide">公司</dt>
              <dd className="text-sm text-gray-900 mt-0.5">{inquiry.company}</dd>
            </div>
          )}
          {inquiry.country && (
            <div>
              <dt className="text-xs text-gray-400 uppercase tracking-wide">国家/地区</dt>
              <dd className="text-sm text-gray-900 mt-0.5">{inquiry.country}</dd>
            </div>
          )}
          {inquiry.phone && (
            <div>
              <dt className="text-xs text-gray-400 uppercase tracking-wide">电话</dt>
              <dd className="text-sm text-gray-900 mt-0.5">{inquiry.phone}</dd>
            </div>
          )}
          {inquiry.product && (
            <div>
              <dt className="text-xs text-gray-400 uppercase tracking-wide">感兴趣的产品</dt>
              <dd className="text-sm text-gray-900 mt-0.5">{inquiry.product}</dd>
            </div>
          )}
        </dl>
      </div>

      {/* Message */}
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <h2 className="text-sm font-semibold text-gray-900 mb-3">询盘内容</h2>
        <p className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">
          {inquiry.message}
        </p>
      </div>

      {/* Status Actions */}
      <InquiryStatusActions inquiryId={inquiry.id} currentStatus={inquiry.status} notes={inquiry.notes || ""} />
    </div>
  );
}
