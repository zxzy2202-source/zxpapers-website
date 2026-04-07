// Specifications Page — Comprehensive product specs reference
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const rollSpecs = [
  { size: "80mm x 80mm", length: "80m / 60m", core: "12mm / 25mm", weight: "55g / 65g", bpa: "Available", moq: "1,000" },
  { size: "57mm x 50mm", length: "30m / 25m", core: "12mm", weight: "48g / 55g", bpa: "Available", moq: "1,000" },
  { size: "80mm x 70mm", length: "60m / 50m", core: "12mm / 25mm", weight: "55g / 65g", bpa: "Available", moq: "1,000" },
  { size: `3 1/8" x 230'`, length: "70m", core: "12.7mm", weight: "55g", bpa: "Available", moq: "1,000" },
  { size: "57mm x 40mm", length: "20m / 15m", core: "12mm", weight: "48g", bpa: "Available", moq: "1,000" },
  { size: `2 1/4" x 50'`, length: "15.2m", core: "12.7mm", weight: "48g", bpa: "Available", moq: "1,000" },
];

const labelSpecs = [
  { size: `4" x 6"`, perRoll: "250 / 500 / 1,000", core: `1" / 3"`, adhesive: "Permanent", stock: "White DT", moq: "5,000" },
  { size: "100mm x 150mm", perRoll: "250 / 500 / 1,000", core: "25mm / 76mm", adhesive: "Permanent", stock: "White DT", moq: "5,000" },
  { size: `2" x 1"`, perRoll: "500 / 1,000 / 2,000", core: `1" / 3"`, adhesive: "Perm / Rem", stock: "White DT", moq: "5,000" },
  { size: `4" x 4"`, perRoll: "250 / 500", core: `1" / 3"`, adhesive: "Permanent", stock: "White DT", moq: "5,000" },
  { size: `3" x 1"`, perRoll: "500 / 1,000 / 2,000", core: `1" / 3"`, adhesive: "Perm / Rem", stock: "White DT", moq: "5,000" },
  { size: "101mm x 152mm", perRoll: "250 / 500 / 1,000", core: "25mm / 76mm", adhesive: "Permanent", stock: "White DT", moq: "5,000" },
];

export default function Specifications() {
  return (
    <Layout>
      <div className="bg-[#0F2B5B] text-white py-16">
        <div className="container">
          <Breadcrumb items={[{ label: "Specifications" }]} />
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ fontFamily: "Sora, sans-serif" }}>
            Product <span className="text-amber-400">Specifications</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Complete specifications for all standard thermal paper rolls and labels. Custom sizes available on request.
          </p>
        </div>
      </div>

      <div className="container py-16">
        {/* Thermal Paper Rolls */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-slate-900 mb-6" style={{ fontFamily: "Sora, sans-serif" }}>
            Thermal Paper Rolls
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0F2B5B] text-white">
                  <th className="px-5 py-4 text-left font-semibold">Size</th>
                  <th className="px-5 py-4 text-left font-semibold">Length Options</th>
                  <th className="px-5 py-4 text-left font-semibold">Core Size</th>
                  <th className="px-5 py-4 text-left font-semibold">Paper Weight</th>
                  <th className="px-5 py-4 text-left font-semibold">BPA-Free</th>
                  <th className="px-5 py-4 text-left font-semibold">MOQ</th>
                  <th className="px-5 py-4 text-left font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {rollSpecs.map(({ size, length, core, weight, bpa, moq }, i) => (
                  <tr key={size} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-5 py-3.5 font-semibold text-slate-900">{size}</td>
                    <td className="px-5 py-3.5 text-slate-600">{length}</td>
                    <td className="px-5 py-3.5 text-slate-600">{core}</td>
                    <td className="px-5 py-3.5 text-slate-600">{weight}</td>
                    <td className="px-5 py-3.5">
                      <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">{bpa}</span>
                    </td>
                    <td className="px-5 py-3.5 text-slate-600">{moq} rolls</td>
                    <td className="px-5 py-3.5">
                      <Link href="/contact" className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 font-semibold">
                        Quote <ArrowRight className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Thermal Labels */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-slate-900 mb-6" style={{ fontFamily: "Sora, sans-serif" }}>
            Thermal Labels
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0F2B5B] text-white">
                  <th className="px-5 py-4 text-left font-semibold">Size</th>
                  <th className="px-5 py-4 text-left font-semibold">Labels/Roll</th>
                  <th className="px-5 py-4 text-left font-semibold">Core Size</th>
                  <th className="px-5 py-4 text-left font-semibold">Adhesive</th>
                  <th className="px-5 py-4 text-left font-semibold">Face Stock</th>
                  <th className="px-5 py-4 text-left font-semibold">MOQ</th>
                  <th className="px-5 py-4 text-left font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {labelSpecs.map(({ size, perRoll, core, adhesive, stock, moq }, i) => (
                  <tr key={size} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-5 py-3.5 font-semibold text-slate-900">{size}</td>
                    <td className="px-5 py-3.5 text-slate-600">{perRoll}</td>
                    <td className="px-5 py-3.5 text-slate-600">{core}</td>
                    <td className="px-5 py-3.5 text-slate-600">{adhesive}</td>
                    <td className="px-5 py-3.5 text-slate-600">{stock}</td>
                    <td className="px-5 py-3.5 text-slate-600">{moq} labels</td>
                    <td className="px-5 py-3.5">
                      <Link href="/contact" className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 font-semibold">
                        Quote <ArrowRight className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Custom sizes CTA */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-2" style={{ fontFamily: "Sora, sans-serif" }}>
            Need a Custom Size or Specification?
          </h3>
          <p className="text-slate-600 mb-5">We manufacture to any specification. Contact our OEM team for a custom quote.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#0F2B5B] hover:bg-[#1E6FD9] text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            style={{ fontFamily: "Sora, sans-serif" }}>
            Request Custom Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </Layout>
  );
}
