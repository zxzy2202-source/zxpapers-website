"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  inquiryId: string;
  currentStatus: string;
  notes: string;
}

const STATUSES = ["NEW", "REPLIED", "CLOSED"];

export default function InquiryStatusActions({ inquiryId, currentStatus, notes: initialNotes }: Props) {
  const router = useRouter();
  const [status, setStatus] = useState(currentStatus);
  const [notes, setNotes] = useState(initialNotes);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  async function handleSave() {
    setSaving(true);
    setSaved(false);

    try {
      const res = await fetch(`/api/admin/inquiries/${inquiryId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status, notes }),
      });

      if (res.ok) {
        setSaved(true);
        router.refresh();
        setTimeout(() => setSaved(false), 2000);
      }
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
      <h2 className="text-sm font-semibold text-gray-900">Update Status & Notes</h2>

      {/* Status Buttons */}
      <div>
        <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">Status</p>
        <div className="flex gap-2">
          {STATUSES.map((s) => (
            <button
              key={s}
              onClick={() => setStatus(s)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border-2 transition-all ${
                status === s
                  ? statusColors[s]
                  : "border-gray-200 text-gray-500 hover:border-gray-300"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Notes */}
      <div>
        <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">Internal Notes</p>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
          placeholder="Add internal notes about this inquiry..."
          className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
        />
      </div>

      {/* Save Button */}
      <div className="flex items-center gap-3">
        <button
          onClick={handleSave}
          disabled={saving}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors flex items-center gap-2"
        >
          {saving ? (
            <>
              <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Saving...
            </>
          ) : (
            "Save Changes"
          )}
        </button>
        {saved && (
          <span className="text-sm text-green-600 flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Saved!
          </span>
        )}
      </div>
    </div>
  );
}
