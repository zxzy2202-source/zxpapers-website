import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { BookOpen, TrendingUp, Users, Lightbulb, ArrowRight, Clock } from "lucide-react";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: "Resource Center | Guides & Industry Insights",
  description: "Comprehensive resource center for thermal paper buyers and distributors. OEM guides, product knowledge, application cases, industry insights, and.",
  alternates: { canonical: `${SITE.domain}/resources` },
};

const resources = [
  { icon: BookOpen, color: "blue", title: "OEM Guide", desc: "Complete guide to thermal paper OEM manufacturing: MOQ, sampling, private label packaging, and customization options.", href: "/resources/oem-guide", readTime: "12 min", tag: "OEM" },
  { icon: Lightbulb, color: "amber", title: "Product Knowledge", desc: "Technical deep-dive: how thermal paper works, coating grades compared, specifications explained, and size selection guide.", href: "/resources/product-knowledge", readTime: "10 min", tag: "Technical" },
  { icon: Users, color: "green", title: "Application Cases", desc: "How thermal paper serves 6 major industries: retail, food service, logistics, healthcare, parking, and banking.", href: "/resources/application-cases", readTime: "8 min", tag: "Applications" },
  { icon: TrendingUp, color: "purple", title: "Industry Insights", desc: "Market analysis, EU BPA regulations, next-gen coatings, sustainability trends, and distribution business strategies.", href: "/resources/industry-insights", readTime: "15 min", tag: "Insights" },
];

const colorMap: Record<string, { bg: string; text: string; badge: string }> = {
  blue:   { bg: "bg-blue-50",   text: "text-blue-600",   badge: "bg-blue-100 text-blue-700" },
  amber:  { bg: "bg-amber-50",  text: "text-amber-600",  badge: "bg-amber-100 text-amber-700" },
  green:  { bg: "bg-green-50",  text: "text-green-600",  badge: "bg-green-100 text-green-700" },
  purple: { bg: "bg-purple-50", text: "text-purple-600", badge: "bg-purple-100 text-purple-700" },
};


const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.zhixinpaper.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Resources",
      "item": "https://www.zhixinpaper.com/resources"
    }
  ]
};
export default function ResourcesPage() {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="bg-[#0F2B5B] text-white py-14">
        <div className="container">
          <div className="text-amber-400 text-sm font-semibold mb-3">Resource Center</div>
          <h1 className="font-sora text-4xl sm:text-5xl font-extrabold mb-4">
            Thermal Paper<br /><span className="text-amber-400">Knowledge Hub</span>
          </h1>
          <p className="text-slate-300 max-w-2xl text-lg">Comprehensive guides, technical knowledge, and market insights for thermal paper buyers, distributors, and OEM partners worldwide.</p>
        </div>
      </div>

      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {resources.map(({ icon: Icon, color, title, desc, href, readTime, tag }) => {
            const c = colorMap[color];
            return (
              <Link key={href} href={href} className="group bg-white border border-slate-200 hover:border-blue-300 rounded-2xl p-7 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 ${c.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${c.text}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${c.badge}`}>{tag}</span>
                      <span className="text-xs text-slate-400 flex items-center gap-1"><Clock className="w-3 h-3" /> {readTime} read</span>
                    </div>
                    <h2 className="font-sora text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{title}</h2>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{desc}</p>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:text-blue-800">
                  Read Guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="bg-slate-50 rounded-3xl p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-sora text-2xl font-extrabold text-slate-900 mb-2">Ready to Source Thermal Paper?</h2>
            <p className="text-slate-600 text-sm max-w-lg">Get a free quote from our OEM team. We respond within 12 hours with pricing, samples, and technical specifications.</p>
          </div>
          <Link href="/contact" className="font-sora flex-shrink-0 inline-flex items-center gap-2 bg-[#0F2B5B] hover:bg-[#1E6FD9] text-white font-bold px-7 py-3.5 rounded-xl transition-all whitespace-nowrap">
            Get Free Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </Layout>
  );
}
