import { readAll } from "@/lib/inquiryStore";
import InquiriesClient from "./InquiriesClient";

export const dynamic = "force-dynamic";

export default async function InquiriesPage() {
  const list = await readAll();
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">📨 客户询盘</h1>
        <p className="text-slate-500 mt-1">
          共 <b>{list.length}</b> 条询盘，
          未处理 <b className="text-orange-600">{list.filter(i => i.status === "new").length}</b> 条。
        </p>
      </div>
      <InquiriesClient initialList={list} />
    </div>
  );
}
