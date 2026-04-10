"use client";

import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        <Button
          variant="ghost"
          size="sm"
          onClick={() => signOut({ callbackUrl: "/admin/login" })}
          className="text-gray-500 hover:text-red-600 hover:bg-red-50"
        >
          <LogOut className="w-4 h-4" />
          退出登录
        </Button>
      </div>
    </header>
  );
}
