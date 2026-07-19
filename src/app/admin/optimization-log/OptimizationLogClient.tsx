"use client";

import { useState } from "react";
import {
  PlusCircle, Trash2, ChevronDown, ChevronUp,
  GitCommit, FileCode2, CheckCircle2, Loader2, X
} from "lucide-react";
import type { OptimizationEntry, LogCategory } from "@/lib/optimizationLogStore";

const CATEGORIES: LogCategory[] = [
  "性能优化", "SEO 优化", "安全修复", "功能新增", "Bug 修复", "内容更新", "其他",
];

const CATEGORY_COLOR: Record<LogCategory, string> = {
  "性能优化": "bg-blue-100 text-blue-700",
  "SEO 优化":  "bg-green-100 text-green-700",
  "安全修复":  "bg-red-100 text-red-700",
  "功能新增":  "bg-purple-100 text-purple-700",
  "Bug 修复":  "bg-orange-100 text-orange-700",
  "内容更新":  "bg-yellow-100 text-yellow-700",
  "其他":      "bg-slate-100 text-slate-600",
};

const EMPTY_FORM = {
  date: new Date().toISOString().slice(0, 10),
  category: "性能优化" as LogCategory,
  title: "",
  description: "",
  commit: "",
  files: "",
  result: "",
};

interface Props {
  initialEntries: OptimizationEntry[];
}

export default function OptimizationLogClient({ initialEntries }: Props) {
  const [entries, setEntries] = useState<OptimizationEntry[]>(initialEntries);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [error, setError] = useState("");

  // 按日期分组
  const grouped = entries.reduce<Record<string, OptimizationEntry[]>>((acc, e) => {
    (acc[e.date] ??= []).push(e);
    return acc;
  }, {});
  const dates = Object.keys(grouped).sort((a, b) => b.localeCompare(a));

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    setError("");
    if (!form.title.trim() || !form.description.trim()) {
      setError("标题和说明不能为空");
      return;
    }
    setSaving(true);
    try {
      const res = await fetch("/api/admin/optimization-log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const j = await res.json();
        setError(j.error ?? "保存失败");
        return;
      }
      const { entry } = await res.json();
      setEntries((prev) => [entry, ...prev]);
      setForm(EMPTY_FORM);
      setShowForm(false);
    } catch {
      setError("网络错误，请重试");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("确定删除这条记录？")) return;
    setDeletingId(id);
    try {
      await fetch("/api/admin/optimization-log", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      setEntries((prev) => prev.filter((e) => e.id !== id));
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* 页头 */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">优化日志</h1>
          <p className="text-sm text-slate-500 mt-1">记录每次对网站的优化操作，共 {entries.length} 条</p>
        </div>
        <button
          onClick={() => { setShowForm(!showForm); setError(""); }}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
        >
          {showForm ? <X size={16} /> : <PlusCircle size={16} />}
          {showForm ? "取消" : "新增记录"}
        </button>
      </div>

      {/* 新增表单 */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-slate-200 rounded-xl p-6 mb-6 shadow-sm"
        >
          <h2 className="text-base font-semibold text-slate-700 mb-4">新增优化记录</h2>
          {error && (
            <div className="mb-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2">
              {error}
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* 日期 */}
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">日期 *</label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            {/* 分类 */}
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">分类 *</label>
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value as LogCategory })}
                className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            {/* 标题 */}
            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-slate-600 mb-1">标题 *</label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="简短描述本次优化，如：修复 storage.ts KV fetch 缓存策略"
                className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            {/* 说明 */}
            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-slate-600 mb-1">详细说明 *</label>
              <textarea
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                rows={4}
                placeholder="描述问题根因、修复方案、改动内容等..."
                className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                required
              />
            </div>
            {/* Commit */}
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Git Commit Hash（可选）</label>
              <input
                type="text"
                value={form.commit}
                onChange={(e) => setForm({ ...form, commit: e.target.value })}
                placeholder="如：da456d9"
                className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* 涉及文件 */}
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">涉及文件（可选，逗号分隔）</label>
              <input
                type="text"
                value={form.files}
                onChange={(e) => setForm({ ...form, files: e.target.value })}
                placeholder="如：src/middleware.ts, src/lib/storage.ts"
                className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* 验证结果 */}
            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-slate-600 mb-1">验证结果（可选）</label>
              <input
                type="text"
                value={form.result}
                onChange={(e) => setForm({ ...form, result: e.target.value })}
                placeholder="如：x-vercel-cache: HIT ✅"
                className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="mt-5 flex justify-end">
            <button
              type="submit"
              disabled={saving}
              className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50 transition"
            >
              {saving ? <Loader2 size={15} className="animate-spin" /> : <CheckCircle2 size={15} />}
              {saving ? "保存中..." : "保存记录"}
            </button>
          </div>
        </form>
      )}

      {/* 日志列表（按日期分组） */}
      {dates.length === 0 ? (
        <div className="text-center py-20 text-slate-400">
          <p className="text-lg">暂无优化记录</p>
          <p className="text-sm mt-1">点击右上角"新增记录"开始记录</p>
        </div>
      ) : (
        <div className="space-y-8">
          {dates.map((date) => (
            <div key={date}>
              {/* 日期标题 */}
              <div className="flex items-center gap-3 mb-3">
                <div className="text-sm font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                  {date}
                </div>
                <div className="flex-1 h-px bg-slate-200" />
                <span className="text-xs text-slate-400">{grouped[date].length} 项</span>
              </div>

              {/* 当日条目 */}
              <div className="space-y-3">
                {grouped[date].map((entry) => {
                  const expanded = expandedId === entry.id;
                  return (
                    <div
                      key={entry.id}
                      className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden"
                    >
                      {/* 条目头部 */}
                      <div
                        className="flex items-center gap-3 px-5 py-4 cursor-pointer hover:bg-slate-50 transition"
                        onClick={() => setExpandedId(expanded ? null : entry.id)}
                      >
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full flex-shrink-0 ${CATEGORY_COLOR[entry.category]}`}>
                          {entry.category}
                        </span>
                        <span className="flex-1 text-sm font-medium text-slate-800 truncate">
                          {entry.title}
                        </span>
                        {entry.commit && (
                          <span className="hidden sm:flex items-center gap-1 text-xs text-slate-400 font-mono flex-shrink-0">
                            <GitCommit size={12} />
                            {entry.commit.slice(0, 7)}
                          </span>
                        )}
                        <button
                          onClick={(e) => { e.stopPropagation(); handleDelete(entry.id); }}
                          disabled={deletingId === entry.id}
                          className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition flex-shrink-0"
                          title="删除"
                        >
                          {deletingId === entry.id
                            ? <Loader2 size={14} className="animate-spin" />
                            : <Trash2 size={14} />}
                        </button>
                        {expanded ? <ChevronUp size={16} className="text-slate-400 flex-shrink-0" /> : <ChevronDown size={16} className="text-slate-400 flex-shrink-0" />}
                      </div>

                      {/* 展开详情 */}
                      {expanded && (
                        <div className="px-5 pb-5 border-t border-slate-100 space-y-3 pt-4">
                          {/* 说明 */}
                          <div>
                            <p className="text-xs font-medium text-slate-500 mb-1">详细说明</p>
                            <p className="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">{entry.description}</p>
                          </div>
                          {/* 涉及文件 */}
                          {entry.files && (
                            <div>
                              <p className="text-xs font-medium text-slate-500 mb-1 flex items-center gap-1">
                                <FileCode2 size={12} /> 涉及文件
                              </p>
                              <div className="flex flex-wrap gap-1.5">
                                {entry.files.split(",").map((f) => (
                                  <span key={f} className="text-xs bg-slate-100 text-slate-600 font-mono px-2 py-0.5 rounded">
                                    {f.trim()}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                          {/* 验证结果 */}
                          {entry.result && (
                            <div>
                              <p className="text-xs font-medium text-slate-500 mb-1 flex items-center gap-1">
                                <CheckCircle2 size={12} /> 验证结果
                              </p>
                              <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-2 font-mono">
                                {entry.result}
                              </p>
                            </div>
                          )}
                          {/* Commit */}
                          {entry.commit && (
                            <div>
                              <p className="text-xs font-medium text-slate-500 mb-1 flex items-center gap-1">
                                <GitCommit size={12} /> Git Commit
                              </p>
                              <span className="text-xs bg-slate-800 text-slate-200 font-mono px-2 py-1 rounded">
                                {entry.commit}
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
