"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DeleteArticleButton({ articleId }: { articleId: string }) {
  const router = useRouter();
  const [confirming, setConfirming] = useState(false);
  const [deleting, setDeleting] = useState(false);

  async function handleDelete() {
    setDeleting(true);
    try {
      await fetch(`/api/admin/articles/${articleId}`, { method: "DELETE" });
      router.refresh();
    } finally {
      setDeleting(false);
      setConfirming(false);
    }
  }

  if (confirming) {
    return (
      <span className="flex items-center gap-1">
        <button
          onClick={handleDelete}
          disabled={deleting}
          className="text-red-600 hover:text-red-700 text-xs font-medium"
        >
          {deleting ? "..." : "Confirm"}
        </button>
        <button
          onClick={() => setConfirming(false)}
          className="text-gray-400 hover:text-gray-600 text-xs"
        >
          Cancel
        </button>
      </span>
    );
  }

  return (
    <button
      onClick={() => setConfirming(true)}
      className="text-gray-300 hover:text-red-500 text-xs transition-colors"
    >
      Delete
    </button>
  );
}
