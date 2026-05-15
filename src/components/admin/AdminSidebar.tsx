"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, MessageSquare, FileText, ImageIcon, ExternalLink, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/admin", label: "控制台", icon: Home },
  { href: "/admin/inquiries", label: "询盘管理", icon: MessageSquare },
  { href: "/admin/articles", label: "文章管理", icon: FileText },
  { href: "/admin/images", label: "图片管理", icon: ImageIcon },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-60 bg-white border-r border-gray-200 flex flex-col shrink-0">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-gray-200">
        <Link href="/admin" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Shield className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">知心纸业</p>
            <p className="text-xs text-gray-500">后台管理系统</p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const isActive =
            item.href === "/admin"
              ? pathname === "/admin"
              : pathname.startsWith(item.href);

          const Icon = item.icon;

          return (
            <Button
              key={item.href}
              asChild
              variant="ghost"
              className={cn(
                "w-full justify-start gap-3 px-3 py-2.5 h-auto text-sm font-medium",
                isActive
                  ? "bg-blue-50 text-blue-700 hover:bg-blue-50"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              )}
            >
              <Link href={item.href}>
                <Icon className={cn("w-5 h-5", isActive ? "text-blue-600" : "text-gray-400")} />
                {item.label}
              </Link>
            </Button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-4 py-4 border-t border-gray-200">
        <Button asChild variant="ghost" size="sm" className="w-full justify-start gap-2 text-xs text-gray-400 hover:text-gray-600 h-auto py-1.5 px-0">
          <Link href="/" target="_blank">
            <ExternalLink className="w-3.5 h-3.5" />
            查看前台网站
          </Link>
        </Button>
      </div>
    </aside>
  );
}
