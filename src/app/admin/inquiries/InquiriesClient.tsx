"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Phone, Building2, Globe, MessageSquare, Check, Trash2, Inbox, Filter } from "lucide-react";
import type { InquiryRecord } from "@/lib/inquiryStore";

export default function InquiriesClient({ initialList }: { initialList: InquiryRecord[] }) {
  const router = useRouter();
  const [list, setList] = useState(initialList);
  const [filter, setFilter] = useState<"all" | "new" | "handled" | "archived">("all");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = filter === "all" ? list : list.filter((i) => i.status === filter);

  async function mark(id: string, status: InquiryRecord["status"]) {
    await fetch("/api/admin/inquiries", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    setList((prev) => prev.map((i) => (i.id === id ? { ...i, status } : i)));
  }

  async function del(id: string) {
    if (!confirm("确定删除这条询盘吗？")) return;
    await fetch("/api/admin/inquiries", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setList((prev) => prev.filter((i) => i.id !== id));
  }

  if (list.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-16 border border-slate-200 text-center">
        <Inbox className="mx-auto text-slate-300 mb-4" size={48} />
        <h3 className="text-lg font-medium text-slate-900">还没有询盘</h3>
        <p className="text-slate-500 text-sm mt-2">
          当客户在网站上提交联系表单时，记录会出现在这里。
          <br />
          同时您配置的微信/飞书机器人也会收到推送。
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* 过滤器 */}
      <div className="flex gap-2 mb-4 flex-wrap items-center">
        <Filter size={16} className="text-slate-400" />
        {[
          { k: "all", l: "全部", c: list.length },
          { k: "new", l: "🔴 待处理", c: list.filter((i) => i.status === "new").length },
          { k: "handled", l: "✅ 已处理", c: list.filter((i) => i.status === "handled").length },
          { k: "archived", l: "📁 归档", c: list.filter((i) => i.status === "archived").length },
        ].map((f) => (
          <button
            key={f.k}
            onClick={() => setFilter(f.k as any)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
              filter === f.k
                ? "bg-slate-900 text-white"
                : "bg-white border border-slate-200 text-slate-700 hover:border-slate-400"
            }`}
          >
            {f.l} <span className="opacity-60">({f.c})</span>
          </button>
        ))}
      </div>

      <div className="space-y-2">
        {filtered.map((inq) => {
          const isOpen = expanded === inq.id;
          const statusColors = {
            new: "bg-red-100 text-red-700 border-red-200",
            handled: "bg-emerald-100 text-emerald-700 border-emerald-200",
            archived: "bg-slate-100 text-slate-600 border-slate-200",
          };
          const statusLabels = { new: "待处理", handled: "已处理", archived: "已归档" };

          return (
            <div
              key={inq.id}
              className={`bg-white border rounded-xl transition ${
                inq.status === "new" ? "border-orange-200" : "border-slate-200"
              }`}
            >
              <button
                onClick={() => setExpanded(isOpen ? null : inq.id)}
                className="w-full text-left p-4 flex items-center gap-4 hover:bg-slate-50 transition rounded-xl"
              >
                <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${inq.status === "new" ? "bg-orange-500 animate-pulse" : "bg-slate-300"}`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-semibold text-slate-900">{inq.name}</span>
                    <span className={`text-xs px-2 py-0.5 rounded border ${statusColors[inq.status]}`}>
                      {statusLabels[inq.status]}
                    </span>
                    {inq.country && (
                      <span className="text-xs text-slate-500 flex items-center gap-1">
                        <Globe size={12} /> {inq.country}
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-slate-500 truncate mt-1">{inq.message}</div>
                </div>
                <div className="text-xs text-slate-400 flex-shrink-0">
                  {new Date(inq.createdAt).toLocaleString("zh-CN", {
                    month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit",
                  })}
                </div>
              </button>

              {isOpen && (
                <div className="px-4 pb-4 border-t border-slate-100 pt-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm mb-4">
                    <Field icon={Mail} label="邮箱" value={<a href={`mailto:${inq.email}`} className="text-blue-600 hover:underline">{inq.email}</a>} />
                    <Field icon={Phone} label="电话" value={inq.phone ? <a href={`tel:${inq.phone}`} className="text-blue-600 hover:underline">{inq.phone}</a> : "—"} />
                    <Field icon={Building2} label="公司" value={inq.company || "—"} />
                    <Field icon={Globe} label="国家" value={inq.country || "—"} />
                    {inq.source && <Field icon={MessageSquare} label="来源页面" value={inq.source} />}
                  </div>
                  <div className="bg-slate-50 rounded-lg p-3 mb-4">
                    <div className="text-xs text-slate-500 mb-1 font-medium">客户留言</div>
                    <div className="text-sm text-slate-800 whitespace-pre-wrap">{inq.message}</div>
                  </div>

                  <div className="flex gap-2 flex-wrap">
                    <a
                      href={`mailto:${inq.email}?subject=Re: Your inquiry to ZhixinPaper`}
                      className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg flex items-center gap-1.5"
                    >
                      <Mail size={14} /> 回复邮件
                    </a>
                    {inq.status !== "handled" && (
                      <button
                        onClick={() => mark(inq.id, "handled")}
                        className="px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm rounded-lg flex items-center gap-1.5"
                      >
                        <Check size={14} /> 标记已处理
                      </button>
                    )}
                    {inq.status !== "archived" && (
                      <button
                        onClick={() => mark(inq.id, "archived")}
                        className="px-3 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 text-sm rounded-lg"
                      >
                        归档
                      </button>
                    )}
                    <button
                      onClick={() => del(inq.id)}
                      className="px-3 py-2 border border-red-200 text-red-600 hover:bg-red-50 text-sm rounded-lg flex items-center gap-1.5 ml-auto"
                    >
                      <Trash2 size={14} /> 删除
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Field({ icon: Icon, label, value }: { icon: any; label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2">
      <Icon size={14} className="text-slate-400 mt-0.5" />
      <div>
        <div className="text-xs text-slate-500">{label}</div>
        <div className="text-slate-900">{value}</div>
      </div>
    </div>
  );
}
