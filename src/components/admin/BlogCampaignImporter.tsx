"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { CalendarPlus, CheckCircle2, Loader2 } from "lucide-react";

function nextPublishSlot(): string {
  const date = new Date();
  date.setDate(date.getDate() + 7);
  date.setHours(9, 0, 0, 0);
  const offset = date.getTimezoneOffset() * 60_000;
  return new Date(date.getTime() - offset).toISOString().slice(0, 16);
}

export default function BlogCampaignImporter({ importedCount }: { importedCount: number }) {
  const router = useRouter();
  const defaultSlot = useMemo(nextPublishSlot, []);
  const [startAt, setStartAt] = useState(defaultSlot);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function importCampaign() {
    setLoading(true);
    setMessage(null);
    setError(null);
    try {
      const response = await fetch("/api/admin/posts/campaign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ startAt: new Date(startAt).toISOString() }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "导入失败");
      setMessage(`已导入 ${data.created.length} 篇；${data.skipped.length} 篇已存在并跳过。`);
      router.refresh();
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "导入失败");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="mb-6 rounded-lg border border-slate-200 bg-white p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <CalendarPlus className="h-5 w-5 text-blue-700" aria-hidden="true" />
            <h2 className="text-base font-semibold text-slate-900">中东热敏纸 P0 内容排期</h2>
          </div>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            6 篇英文成稿，每周 1 篇。导入后默认处于待审核状态，只有在文章编辑页勾选“批准自动发布”后，定时任务才会公开文章。
          </p>
          {importedCount > 0 ? (
            <p className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700">
              <CheckCircle2 className="h-4 w-4" aria-hidden="true" /> 已导入 {importedCount}/6 篇
            </p>
          ) : null}
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end">
          <label className="text-sm font-medium text-slate-700">
            首篇计划时间
            <input
              type="datetime-local"
              value={startAt}
              onChange={(event) => setStartAt(event.target.value)}
              className="mt-1 block min-h-10 rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </label>
          <button
            type="button"
            onClick={importCampaign}
            disabled={loading || importedCount >= 6 || !startAt}
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <CalendarPlus className="h-4 w-4" aria-hidden="true" />}
            {importedCount >= 6 ? "已全部导入" : "导入排期"}
          </button>
        </div>
      </div>
      {message ? <p className="mt-3 text-sm text-emerald-700">{message}</p> : null}
      {error ? <p className="mt-3 text-sm text-red-700">{error}</p> : null}
    </section>
  );
}
