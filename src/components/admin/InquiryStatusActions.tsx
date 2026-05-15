"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Loader2, Check } from "lucide-react";

interface Props {
  inquiryId: string;
  currentStatus: string;
  notes: string;
}

const STATUSES = [
  { value: "NEW", label: "新询盘" },
  { value: "REPLIED", label: "已回复" },
  { value: "CLOSED", label: "已关闭" },
];

export default function InquiryStatusActions({ inquiryId, currentStatus, notes: initialNotes }: Props) {
  const router = useRouter();
  const [status, setStatus] = useState(currentStatus);
  const [notes, setNotes] = useState(initialNotes);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSave() {
    setSaving(true);
    setSaved(false);
    setError(null);
    try {
      const res = await fetch(`/api/admin/inquiries/${inquiryId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status, notes }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "保存失败，请重试");
        return;
      }
      setSaved(true);
      router.refresh();
      setTimeout(() => setSaved(false), 2000);
    } catch {
      setError("网络错误，请重试");
    } finally {
      setSaving(false);
    }
  }

  const statusColors: Record<string, string> = {
    NEW: "border-blue-500 bg-blue-50 text-blue-700",
    REPLIED: "border-green-500 bg-green-50 text-green-700",
    CLOSED: "border-gray-400 bg-gray-50 text-gray-600",
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
      <h2 className="text-sm font-semibold text-gray-900">更新状态与备注</h2>

      {/* Status Buttons */}
      <div>
        <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">状态</p>
        <div className="flex gap-2">
          {STATUSES.map((s) => (
            <Badge
              key={s.value}
              variant={status === s.value ? "default" : "outline"}
              className={`cursor-pointer px-4 py-1.5 text-sm font-medium border-2 transition-all ${
                status === s.value
                  ? statusColors[s.value]
                  : "border-gray-200 text-gray-500 hover:border-gray-300"
              }`}
              onClick={() => setStatus(s.value)}
            >
              {s.label}
            </Badge>
          ))}
        </div>
      </div>

      {/* Notes */}
      <div>
        <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">内部备注</p>
        <Textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
          placeholder="添加关于此询盘的内部备注..."
          className="resize-none"
        />
      </div>

      {/* Error Message */}
      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}

      {/* Save Button */}
      <div className="flex items-center gap-3">
        <Button onClick={handleSave} disabled={saving}>
          {saving ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin mr-2" />
              保存中...
            </>
          ) : (
            "保存更改"
          )}
        </Button>
        {saved && (
          <span className="text-sm text-green-600 flex items-center gap-1">
            <Check className="w-4 h-4" />
            已保存！
          </span>
        )}
      </div>
    </div>
  );
}
