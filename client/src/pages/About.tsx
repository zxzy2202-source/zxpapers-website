// About Us Page
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { Link } from "wouter";
import { ArrowRight, Globe, Users, Award, Factory } from "lucide-react";

const FACTORY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/oem-factory-EHdu8eZwwzSo5DxSRyzQdF.webp";

const milestones = [
  { year: "2005", event: "Founded in Xi'an, Shaanxi, China with 2 production lines" },
  { year: "2008", event: "Achieved ISO 9001 certification" },
  { year: "2012", event: "Expanded to 50,000 sqm facility with 8 production lines" },
  { year: "2015", event: "Launched BPA-free product line" },
  { year: "2018", event: "Achieved FSC certification and entered European market" },
  { year: "2020", event: "Reached 2,000+ OEM clients globally" },
  { year: "2023", event: "Expanded to 12 production lines, 500M+ rolls/year capacity" },
];

export default function About() {
  return (
    <Layout>
      <div className="bg-[#0F2B5B] text-white py-16">
        <div className="container">
          <Breadcrumb items={[{ label: "About Us" }]} />
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ fontFamily: "Sora, sans-serif" }}>
            About <span className="text-amber-400">ThermalRollPro</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            20+ years of thermal paper manufacturing excellence. Trusted by 2,000+ clients in 80+ countries.
          </p>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="section-title mb-5">Our Story</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Founded in 2009 in Xi'an, Shaanxi, China, ThermalRollPro started as a small thermal paper converter with a vision to become the most trusted OEM partner for global distributors. Today, we operate a 50,000 sqm facility with 12 production lines and serve clients in 80+ countries.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Our commitment to quality, innovation, and customer service has made us the preferred thermal paper manufacturer for retailers, distributors, and e-commerce platforms worldwide. We specialize in OEM solutions, helping brands build their own product lines with our manufacturing expertise.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Factory, value: "50,000 m²", label: "Factory" },
                { icon: Globe, value: "80+", label: "Countries" },
                { icon: Users, value: "2,000+", label: "OEM Clients" },
                { icon: Award, value: "ISO 9001", label: "Certified" },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                  <Icon className="w-8 h-8 text-blue-600 flex-shrink-0" />
                  <div>
                    <div className="font-extrabold text-slate-900 text-lg" style={{ fontFamily: "Sora, sans-serif" }}>{value}</div>
                    <div className="text-xs text-slate-500">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img src={FACTORY_IMG} alt="ThermalRollPro Factory" className="w-full rounded-2xl shadow-xl" />
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="section-title text-center mb-10">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 hidden lg:block" />
            <div className="space-y-6">
              {milestones.map(({ year, event }, i) => (
                <div key={year} className={`flex items-center gap-6 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <div className="bg-white border border-slate-200 rounded-xl p-4 inline-block shadow-sm">
                      <div className="font-extrabold text-[#0F2B5B] text-lg mb-1" style={{ fontFamily: "Sora, sans-serif" }}>{year}</div>
                      <p className="text-sm text-slate-600">{event}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-amber-500 rounded-full border-4 border-white shadow-md flex-shrink-0 hidden lg:block" />
                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-slate-50 rounded-3xl p-12">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-3" style={{ fontFamily: "Sora, sans-serif" }}>
            Ready to Work Together?
          </h2>
          <p className="text-slate-600 mb-6 max-w-xl mx-auto">
            Join 2,000+ clients who trust ThermalRollPro for their thermal paper needs.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#0F2B5B] hover:bg-[#1E6FD9] text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            style={{ fontFamily: "Sora, sans-serif" }}>
            Contact Us Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </Layout>
  );
}
