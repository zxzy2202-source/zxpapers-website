// Manufacturing Capabilities Page
import { Link } from "wouter";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { CheckCircle, ArrowRight, Factory, Award, Shield, Cpu } from "lucide-react";

// Unique images for Manufacturing overview page
const IMG_AERIAL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/factory-aerial-overview-PxGXrzmMuMcQzSjcCKTWbD.webp";
const IMG_COATING = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/factory-coating-line-Rfrrgy9ZbXu6C6rJRRsG37.webp";

const capabilities = [
  { title: "Factory Overview", desc: "50,000 sqm modern manufacturing facility with 12 production lines.", href: "/manufacturing", icon: Factory },
  { title: "Quality Control", desc: "Multi-stage quality inspection with statistical process control.", href: "/manufacturing/quality-control", icon: Shield },
  { title: "Certifications", desc: "ISO 9001, FSC, BPA-Free, RoHS, REACH, CE certified.", href: "/manufacturing/certifications", icon: Award },
  { title: "Equipment", desc: "State-of-the-art coating and slitting machines from Germany and Japan.", href: "/manufacturing/equipment", icon: Cpu },
];

export default function Manufacturing() {
  return (
    <Layout>
      <div className="relative bg-[#0F2B5B] text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${IMG_AERIAL})` }} />
        <div className="relative container">
          <Breadcrumb items={[{ label: "Manufacturing Capabilities" }]} />
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ fontFamily: "Sora, sans-serif" }}>
            Manufacturing<br /><span className="text-amber-400">Capabilities</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            State-of-the-art manufacturing facility with 20+ years of thermal paper production expertise. ISO 9001 certified, serving 80+ countries.
          </p>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {capabilities.map(({ title, desc, href, icon: Icon }) => (
            <Link key={href} href={href} className="group p-6 bg-white border border-slate-200 hover:border-blue-200 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 group-hover:bg-blue-600 rounded-xl flex items-center justify-center mb-4 transition-colors">
                <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2 text-sm" style={{ fontFamily: "Sora, sans-serif" }}>{title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">{desc}</p>
              <span className="inline-flex items-center gap-1 text-xs text-blue-600 font-semibold">
                Learn More <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img src={IMG_COATING} alt="Thermal Paper Coating Production Line" className="w-full rounded-2xl shadow-xl" />
          </div>
          <div>
            <h2 className="section-title mb-5">World-Class Manufacturing</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Our 50,000 sqm facility houses 12 production lines capable of producing 500 million rolls per year. Every production run is tracked through our batch traceability system, ensuring consistent quality and full accountability.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { value: "50,000 m²", label: "Factory Area" },
                { value: "12", label: "Production Lines" },
                { value: "500M+", label: "Rolls/Year" },
                { value: "800+", label: "Employees" },
              ].map(({ value, label }) => (
                <div key={label} className="bg-slate-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-extrabold text-[#0F2B5B]" style={{ fontFamily: "Sora, sans-serif" }}>{value}</div>
                  <div className="text-xs text-slate-500 mt-1">{label}</div>
                </div>
              ))}
            </div>
            <ul className="space-y-2">
              {[
                "German and Japanese coating machinery",
                "Automated slitting and rewinding lines",
                "Clean room environment for sensitive products",
                "Real-time production monitoring system",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
