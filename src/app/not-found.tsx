import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { Home, Package, Phone, ArrowRight, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found | ZhixinPaper",
  description: "The page you are looking for could not be found. Browse our thermal paper rolls and labels products.",
  robots: { index: false, follow: true },
};

const quickLinks = [
  { href: "/products", label: "All Products", icon: Package, desc: "Browse thermal rolls, labels & more" },
  { href: "/products/thermal-rolls/80x80mm", label: "80×80mm Rolls", icon: Package, desc: "Most popular POS paper roll" },
  { href: "/oem", label: "OEM Services", icon: Package, desc: "Custom printing & private label" },
  { href: "/contact", label: "Contact Us", icon: Phone, desc: "Get a quote within 12 hours" },
];

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center py-20">
        <div className="container max-w-3xl text-center">
          <div className="relative inline-block mb-8">
            <div className="text-[120px] sm:text-[160px] font-extrabold text-slate-100 leading-none select-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Search className="w-16 h-16 text-slate-300" />
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
            Page Not Found
          </h1>
          <p className="text-slate-500 text-base mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Here are some helpful links to get you back on track.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-left">
            {quickLinks.map(({ href, label, icon: Icon, desc }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-4 bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md rounded-2xl p-4 transition-all duration-200 group"
              >
                <div className="w-10 h-10 bg-blue-100 group-hover:bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                  <Icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-slate-900 text-sm">{label}</div>
                  <div className="text-xs text-slate-500 truncate">{desc}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 flex-shrink-0 transition-colors" />
              </Link>
            ))}
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#0F2B5B] hover:bg-[#1E6FD9] text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          >
            <Home className="w-4 h-4" />
            Back to Homepage
          </Link>
        </div>
      </div>
    </Layout>
  );
}
