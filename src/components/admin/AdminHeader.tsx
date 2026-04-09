"use client";

import { signOut } from "next-auth/react";

interface AdminHeaderProps {
  user?: {
    name?: string | null;
    email?: string | null;
  };
}

export default function AdminHeader({ user }: AdminHeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shrink-0">
      <div className="flex items-center gap-2">
        <div className="text-sm text-gray-500">
          欢迎回来，<span className="font-medium text-gray-900">{user?.name || "管理员"}</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* User Avatar */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-700 text-sm font-semibold">
              {(user?.name || "A")[0].toUpperCase()}
            </span>
          </div>
          <span className="text-sm text-gray-700 hidden sm:block">{user?.email || user?.name}</span>
        </div>

        {/* Sign Out */}
        <button
          onClick={() => signOut({ callbackUrl: "/admin/login" })}
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-red-600 transition-colors px-3 py-1.5 rounded-lg hover:bg-red-50"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          退出登录
        </button>
      </div>
    </header>
  );
}
