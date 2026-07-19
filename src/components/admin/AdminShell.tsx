"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard,
  Image as ImageIcon,
  FileText,
  Inbox,
  Search,
  Home,
  Menu,
  X,
  LogOut,
  ClipboardList,
} from "lucide-react";

const NAV = [
  { href: "/admin", label: "仪表盘", icon: LayoutDashboard },
  { href: "/admin/hero", label: "首页 Hero", icon: Home },
  { href: "/admin/images", label: "图片管理", icon: ImageIcon },
  { href: "/admin/posts", label: "文章管理", icon: FileText },
  { href: "/admin/inquiries", label: "客户询盘", icon: Inbox, badge: true },
  { href: "/admin/seo", label: "SEO 设置", icon: Search },
  { href: "/admin/optimization-log", label: "优化日志", icon: ClipboardList },
];

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  // 登录页不需要后台框架
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* 移动端顶栏 */}
      <header className="lg:hidden flex items-center justify-between bg-white border-b border-slate-200 px-4 h-14 sticky top-0 z-30">
        <div className="font-bold text-blue-600">ZhixinPaper 后台</div>
        <button onClick={() => setOpen(!open)} className="p-2">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <div className="flex">
        {/* 侧边栏 */}
        <aside
          className={`${
            open ? "block" : "hidden"
          } lg:block fixed lg:sticky top-0 lg:top-0 left-0 z-20 h-screen w-64 bg-slate-900 text-slate-300 flex-shrink-0`}
        >
          <div className="px-6 py-5 border-b border-slate-800">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              ZhixinPaper
            </div>
            <div className="text-xs text-slate-500 mt-1">网站管理后台</div>
          </div>
          <nav className="p-3">
            {NAV.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/admin" && pathname.startsWith(item.href));
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition ${
                    active
                      ? "bg-blue-600 text-white"
                      : "hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <Icon size={18} />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>
          <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-slate-800">
            <button
              onClick={logout}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm text-slate-400 hover:bg-slate-800 hover:text-white rounded-lg transition"
            >
              <LogOut size={18} />
              退出登录
            </button>
          </div>
        </aside>

        {/* 主内容区 */}
        <main className="flex-1 lg:ml-0 min-h-screen p-4 lg:p-8 max-w-full overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
