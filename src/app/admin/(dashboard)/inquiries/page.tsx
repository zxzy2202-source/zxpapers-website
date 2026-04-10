import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface PageProps {
  searchParams: Promise<{ status?: string; page?: string }>;
}

const STATUS_LABELS: Record<string, { label: string; variant: "default" | "secondary" | "outline" }> = {
  NEW: { label: "新询盘", variant: "default" },
  REPLIED: { label: "已回复", variant: "secondary" },
  CLOSED: { label: "已关闭", variant: "outline" },
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
          <h1 className="text-2xl font-bold text-gray-900">询盘管理</h1>
          <p className="text-gray-500 text-sm mt-1">共 {total} 条询盘记录</p>
        </div>
      </div>

      {/* Status Filter Tabs */}
      <div className="flex gap-2 flex-wrap">
        {[
          { label: "全部", value: "" },
          { label: "新询盘", value: "NEW" },
          { label: "已回复", value: "REPLIED" },
          { label: "已关闭", value: "CLOSED" },
        ].map((tab) => (
          <Button
            key={tab.value}
            asChild
            variant={status === tab.value || (!status && !tab.value) ? "default" : "outline"}
            size="sm"
            className="rounded-full"
          >
            <Link href={tab.value ? `/admin/inquiries?status=${tab.value}` : "/admin/inquiries"}>
              {tab.label}
              {tab.value && countMap[tab.value] !== undefined && (
                <span className="ml-1.5 text-xs opacity-75">({countMap[tab.value]})</span>
              )}
              {!tab.value && (
                <span className="ml-1.5 text-xs opacity-75">({total})</span>
              )}
            </Link>
          </Button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        {inquiries.length === 0 ? (
          <div className="py-16 text-center text-gray-400">
            <MessageSquare className="w-12 h-12 mx-auto mb-3 text-gray-300" />
            <p className="text-sm">暂无询盘记录</p>
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead>联系人</TableHead>
                <TableHead className="hidden md:table-cell">公司</TableHead>
                <TableHead className="hidden lg:table-cell">产品</TableHead>
                <TableHead>状态</TableHead>
                <TableHead className="hidden sm:table-cell">日期</TableHead>
                <TableHead className="w-[60px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inquiries.map((inquiry) => {
                const statusInfo = STATUS_LABELS[inquiry.status] || STATUS_LABELS.NEW;
                return (
                  <TableRow key={inquiry.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium text-gray-900">{inquiry.name}</p>
                        <p className="text-gray-400 text-xs">{inquiry.email}</p>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell text-gray-600">
                      {inquiry.company || "—"}
                    </TableCell>
                    <TableCell className="hidden lg:table-cell text-gray-600">
                      {inquiry.product || "—"}
                    </TableCell>
                    <TableCell>
                      <Badge variant={statusInfo.variant}>
                        {statusInfo.label}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-gray-400 text-xs hidden sm:table-cell">
                      {new Date(inquiry.createdAt).toLocaleDateString("zh-CN", {
                        month: "numeric",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </TableCell>
                    <TableCell>
                      <Button asChild variant="link" size="sm" className="text-xs px-0">
                        <Link href={`/admin/inquiries/${inquiry.id}`}>
                          查看 →
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            第 {page} 页，共 {totalPages} 页
          </p>
          <div className="flex gap-2">
            {page > 1 && (
              <Button asChild variant="outline" size="sm">
                <Link href={`/admin/inquiries?${status ? `status=${status}&` : ""}page=${page - 1}`}>
                  上一页
                </Link>
              </Button>
            )}
            {page < totalPages && (
              <Button asChild variant="outline" size="sm">
                <Link href={`/admin/inquiries?${status ? `status=${status}&` : ""}page=${page + 1}`}>
                  下一页
                </Link>
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
