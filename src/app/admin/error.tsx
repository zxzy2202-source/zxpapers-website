"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";

export default function AdminError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[admin error]", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-4 text-center px-4">
      <div className="p-3 bg-red-50 rounded-full">
        <AlertTriangle className="w-8 h-8 text-red-500" />
      </div>
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-1">页面加载失败</h2>
        <p className="text-sm text-gray-500">
          {error.message?.includes("pool") || error.message?.includes("connect")
            ? "数据库连接异常，请稍后重试"
            : "发生了一个错误，请刷新重试"}
        </p>
      </div>
      <button
        onClick={reset}
        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
      >
        重试
      </button>
    </div>
  );
}
