"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Trash2, Loader2 } from "lucide-react";

export default function DeleteArticleButton({ articleId }: { articleId: string }) {
  const router = useRouter();
  const [confirming, setConfirming] = useState(false);
  const [deleting, setDeleting] = useState(false);

  async function handleDelete() {
    setDeleting(true);
    try {
      const res = await fetch(`/api/admin/articles/${articleId}`, { method: "DELETE" });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        alert(data.error || "删除失败，请重试");
        return;
      }
      router.refresh();
    } catch {
      alert("网络错误，请重试");
    } finally {
      setDeleting(false);
      setConfirming(false);
    }
  }

  if (confirming) {
    return (
      <span className="flex items-center gap-1">
        <Button
          variant="destructive"
          size="sm"
          onClick={handleDelete}
          disabled={deleting}
          className="h-6 px-2 text-xs"
        >
          {deleting ? (
            <>
              <Loader2 className="w-3 h-3 animate-spin mr-1" />
              删除中
            </>
          ) : (
            "确认删除"
          )}
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setConfirming(false)}
          className="h-6 px-2 text-xs text-muted-foreground"
        >
          取消
        </Button>
      </span>
    );
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setConfirming(true)}
      className="h-6 px-2 text-xs text-muted-foreground hover:text-destructive"
    >
      <Trash2 className="w-3 h-3 mr-1" />
      删除
    </Button>
  );
}
