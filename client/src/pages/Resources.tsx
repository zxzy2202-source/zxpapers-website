// Resources Center Page
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { Link } from "wouter";
import { FileText, BookOpen, Download, ArrowRight, Scale, Leaf, Printer } from "lucide-react";

const resources = [
  {
    icon: FileText,
    category: "Product Guides",
    items: [
      { title: "How to Choose the Right Thermal Paper Roll Size", href: "/resources/how-to-choose-thermal-paper-roll-size", desc: "A comprehensive guide for distributors and retailers." },
      { title: "BPA-Free vs Standard Thermal Paper: What's the Difference?", href: "/resources/bpa-free-vs-standard-thermal-paper", desc: "Understand the health and regulatory differences." },
      { title: "Thermal Paper vs Carbonless Paper: Which is Better?", href: "/resources/thermal-vs-carbonless-paper", desc: "Compare the two most common receipt paper types." },
    ],
  },
  {
    icon: Scale,
    category: "Regulations & Compliance",
    items: [
      { title: "EU BPA Regulations for Thermal Paper (2023 Update)", href: "/resources/eu-bpa-regulations-thermal-paper", desc: "Stay compliant with the latest EU thermal paper regulations." },
      { title: "FDA Requirements for Thermal Paper in Food Service", href: "/resources/fda-thermal-paper-food-service", desc: "US food service compliance guide for thermal paper." },
      { title: "FSC Certification: What It Means for Your Business", href: "/resources/fsc-certification-thermal-paper", desc: "Understanding FSC certification and its business benefits." },
    ],
  },
  {
    icon: Printer,
    category: "Printer Compatibility",
    items: [
      { title: "Zebra Printer Compatible Thermal Label Sizes Guide", href: "/resources/zebra-printer-compatible-thermal-label-sizes", desc: "Complete size compatibility guide for Zebra printers." },
      { title: "Epson POS Printer Thermal Paper Compatibility", href: "/resources/epson-pos-printer-thermal-paper", desc: "Find the right thermal paper for your Epson POS printer." },
      { title: "Verifone Terminal Thermal Paper Guide", href: "/resources/verifone-terminal-thermal-paper-guide", desc: "Correct paper sizes for all Verifone terminal models." },
    ],
  },
  {
    icon: Leaf,
    category: "Sustainability",
    items: [
      { title: "Eco-Friendly Thermal Paper Options for Green Businesses", href: "/resources/eco-friendly-thermal-paper", desc: "Sustainable thermal paper choices for environmentally conscious businesses." },
      { title: "How to Recycle Thermal Paper Rolls", href: "/resources/how-to-recycle-thermal-paper", desc: "Best practices for thermal paper disposal and recycling." },
    ],
  },
];

export default function Resources() {
  return (
    <Layout>
      <div className="bg-[#0F2B5B] text-white py-16">
        <div className="container">
          <Breadcrumb items={[{ label: "Resources" }]} />
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ fontFamily: "Sora, sans-serif" }}>
            Resource <span className="text-amber-400">Center</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Industry guides, compliance information, and technical resources for thermal paper buyers and distributors.
          </p>
        </div>
      </div>

      <div className="container py-16">
        <div className="space-y-14">
          {resources.map(({ icon: Icon, category, items }) => (
            <div key={category}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900" style={{ fontFamily: "Sora, sans-serif" }}>{category}</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {items.map(({ title, href, desc }) => (
                  <Link key={href} href={href} className="group p-5 bg-white border border-slate-200 hover:border-blue-200 rounded-2xl hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-3 mb-3">
                      <BookOpen className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <h3 className="font-semibold text-slate-900 text-sm leading-snug group-hover:text-blue-700 transition-colors" style={{ fontFamily: "Sora, sans-serif" }}>
                        {title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed mb-3">{desc}</p>
                    <span className="inline-flex items-center gap-1 text-xs text-blue-600 font-semibold">
                      Read More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Downloads section */}
        <div className="mt-14 bg-slate-50 rounded-3xl p-10">
          <div className="flex items-center gap-3 mb-6">
            <Download className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-bold text-slate-900" style={{ fontFamily: "Sora, sans-serif" }}>Downloads</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Product Catalog 2024", size: "PDF, 4.2MB" },
              { title: "ISO 9001 Certificate", size: "PDF, 0.8MB" },
              { title: "FSC Certificate", size: "PDF, 0.6MB" },
              { title: "BPA-Free Test Report", size: "PDF, 1.1MB" },
              { title: "OEM Capability Brochure", size: "PDF, 3.5MB" },
              { title: "Specification Sheet (All Products)", size: "PDF, 2.1MB" },
            ].map(({ title, size }) => (
              <button
                key={title}
                className="flex items-center gap-3 p-4 bg-white border border-slate-200 hover:border-blue-200 rounded-xl hover:shadow-sm transition-all text-left"
                onClick={() => alert("Download feature coming soon. Please contact us to request documents.")}
              >
                <FileText className="w-8 h-8 text-blue-500 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-slate-900 text-sm" style={{ fontFamily: "Sora, sans-serif" }}>{title}</div>
                  <div className="text-xs text-slate-400">{size}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
