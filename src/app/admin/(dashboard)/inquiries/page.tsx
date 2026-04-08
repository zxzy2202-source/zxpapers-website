import { prisma } from "@/lib/prisma";
import Link from "next/link";

interface PageProps {
  searchParams: Promise<{ status?: string; page?: string }>;
}

const STATUS_LABELS: Record<string, { label: string; className: string }> = {
  NEW: { label: "New", className: "bg-blue-100 text-blue-700" },
  REPLIED: { label: "Replied", className: "bg-green-100 text-green-700" },
  CLOSED: { label: "Closed", className: "bg-gray-100 text-gray-600" },
};

export default async function InquiriesPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const status = params.status;
  const page = parseInt(params.page || "1");
  const pageSize = 20;

  const where = status ? { status } : {};

  const [inquiries, total] = await Promise.all([
    prisma.inquiry.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * pageSize,
      take: pageSize,
    }),
    prisma.inquiry.count({ where }),
  ]);

  const totalPages = Math.ceil(total / pageSize);

  const statusCounts = await prisma.inquiry.groupBy({
    by: ["status"],
    _count: true,
  });

  const countMap: Record<string, number> = {};
  statusCounts.forEach((s) => {
    countMap[s.status] = s._count;
  });

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Inquiries</h1>
          <p className="text-gray-500 text-sm mt-1">{total} total inquiries</p>
        </div>
      </div>

      {/* Status Filter Tabs */}
      <div className="flex gap-2 flex-wrap">
        {[
          { label: "All", value: "" },
          { label: "New", value: "NEW" },
          { label: "Replied", value: "REPLIED" },
          { label: "Closed", value: "CLOSED" },
        ].map((tab) => (
          <Link
            key={tab.value}
            href={tab.value ? `/admin/inquiries?status=${tab.value}` : "/admin/inquiries"}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              status === tab.value || (!status && !tab.value)
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            {tab.label}
            {tab.value && countMap[tab.value] !== undefined && (
              <span className="ml-1.5 text-xs opacity-75">({countMap[tab.value]})</span>
            )}
            {!tab.value && (
              <span className="ml-1.5 text-xs opacity-75">({total})</span>
            )}
          </Link>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        {inquiries.length === 0 ? (
          <div className="py-16 text-center text-gray-400">
            <svg className="w-12 h-12 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <p className="text-sm">No inquiries found</p>
          </div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-5 py-3 font-medium text-gray-500">Contact</th>
                <th className="text-left px-5 py-3 font-medium text-gray-500 hidden md:table-cell">Company</th>
                <th className="text-left px-5 py-3 font-medium text-gray-500 hidden lg:table-cell">Product</th>
                <th className="text-left px-5 py-3 font-medium text-gray-500">Status</th>
                <th className="text-left px-5 py-3 font-medium text-gray-500 hidden sm:table-cell">Date</th>
                <th className="px-5 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {inquiries.map((inquiry) => {
                const statusInfo = STATUS_LABELS[inquiry.status] || STATUS_LABELS.NEW;
                return (
                  <tr key={inquiry.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3.5">
                      <div>
                        <p className="font-medium text-gray-900">{inquiry.name}</p>
                        <p className="text-gray-400 text-xs">{inquiry.email}</p>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 text-gray-600 hidden md:table-cell">
                      {inquiry.company || "—"}
                    </td>
                    <td className="px-5 py-3.5 text-gray-600 hidden lg:table-cell">
                      {inquiry.product || "—"}
                    </td>
                    <td className="px-5 py-3.5">
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${statusInfo.className}`}>
                        {statusInfo.label}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-gray-400 text-xs hidden sm:table-cell">
                      {new Date(inquiry.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-5 py-3.5">
                      <Link
                        href={`/admin/inquiries/${inquiry.id}`}
                        className="text-blue-600 hover:text-blue-700 text-xs font-medium"
                      >
                        View →
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Page {page} of {totalPages}
          </p>
          <div className="flex gap-2">
            {page > 1 && (
              <Link
                href={`/admin/inquiries?${status ? `status=${status}&` : ""}page=${page - 1}`}
                className="px-3 py-1.5 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Previous
              </Link>
            )}
            {page < totalPages && (
              <Link
                href={`/admin/inquiries?${status ? `status=${status}&` : ""}page=${page + 1}`}
                className="px-3 py-1.5 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Next
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
