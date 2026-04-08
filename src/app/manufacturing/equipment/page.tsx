import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { CheckCircle, Cpu, ArrowRight, Microscope, Settings, Wind } from "lucide-react";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: "Manufacturing Equipment | German & Japanese",
  description: "ZhixinPaper production equipment: Voith coating lines, Kampf slitters, Mark Andy label presses. 12 production lines, 500M+ rolls/year capacity.",
  alternates: { canonical: `${SITE.domain}/manufacturing/equipment` },
};

const IMG_EQUIPMENT = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/factory-slitting-equipment-cvwyebpfEowdHCqEFaCG9i.webp";

const equipmentCategories = [
  {
    title: "Coating Lines",
    icon: Wind,
    desc: "Our core production assets — precision coating machines apply thermal-sensitive chemical layers onto base paper with micrometer-level accuracy.",
    equipment: [
      { name: "Voith Curtain Coater (Germany)", count: "4 units", specs: "Max width: 2,800mm | Speed: 800m/min | Coating weight: 2–8 g/m²", highlight: "Enables ultra-uniform BPA-free coating with ±0.1g/m² tolerance" },
      { name: "Jagenberg Blade Coater (Germany)", count: "3 units", specs: "Max width: 2,400mm | Speed: 600m/min | Dual-side coating capable", highlight: "Used for specialty and high-sensitivity thermal grades" },
      { name: "Valmet Infrared Drying System", count: "7 units", specs: "Temperature range: 80–180°C | Zone-controlled drying", highlight: "Ensures consistent coating cure without paper distortion" },
    ],
  },
  {
    title: "Slitting & Rewinding",
    icon: Settings,
    desc: "After coating, large parent rolls are precision-slit to customer-specified widths and rewound to exact lengths with automated tension control.",
    equipment: [
      { name: "Kampf Slitter-Rewinder (Germany)", count: "8 units", specs: "Min width: 20mm | Max width: 1,200mm | Speed: 1,200m/min | Tolerance: ±0.3mm", highlight: "Servo-driven width adjustment for rapid size changeover" },
      { name: "Tidland Automatic Tension Control", count: "All slitters", specs: "Closed-loop tension feedback | Prevents roll telescoping", highlight: "Critical for consistent roll hardness in POS applications" },
      { name: "Perini Rewinder (Italy)", count: "4 units", specs: "Log diameter: 20–120mm | Core sizes: 12mm, 25mm, 38mm", highlight: "High-speed rewinding for small-core portable printer rolls" },
    ],
  },
  {
    title: "Label Converting",
    icon: Cpu,
    desc: "Dedicated label production lines handle die-cutting, matrix removal, and roll-to-roll converting for thermal label products.",
    equipment: [
      { name: "Mark Andy Label Press (USA)", count: "3 units", specs: "Max web width: 330mm | Die-cut accuracy: ±0.2mm | Speed: 200m/min", highlight: "Handles complex label shapes and perforations" },
      { name: "Edale Flexo Printing Unit", count: "2 units", specs: "Up to 8 colors | UV curing | Min label size: 10mm x 10mm", highlight: "For custom-printed label OEM orders" },
      { name: "Prati Rewinder & Inspection", count: "4 units", specs: "100% print inspection | Defect detection: ≥0.3mm | Speed: 400m/min", highlight: "Automated vision system rejects any defective labels" },
    ],
  },
  {
    title: "Quality & Testing Lab",
    icon: Microscope,
    desc: "Our in-house laboratory runs continuous quality checks throughout production, with equipment calibrated to international standards.",
    equipment: [
      { name: "Mettler Toledo Basis Weight Tester", count: "6 units", specs: "Accuracy: ±0.1g/m² | Range: 20–200g/m²", highlight: "Inline measurement every 500m of production" },
      { name: "X-Rite Spectrophotometer", count: "4 units", specs: "CIE L*a*b* color measurement | Gloss measurement", highlight: "Ensures consistent whiteness and brightness across batches" },
      { name: "Accelerated Aging Chamber", count: "2 units", specs: "Temperature: 20–80°C | Humidity: 20–95% RH | 12 test positions", highlight: "Simulates 5+ years storage in 24 hours" },
    ],
  },
];


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
      "name": "Manufacturing",
      "item": "https://www.zhixinpaper.com/manufacturing"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Equipment",
      "item": "https://www.zhixinpaper.com/manufacturing/equipment"
    }
  ]
};
export default function EquipmentPage() {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="relative bg-[#0F2B5B] text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${IMG_EQUIPMENT})` }} />
        <div className="relative container">
          <div className="text-amber-400 text-sm font-semibold mb-3">
            <Link href="/manufacturing" className="hover:underline">Manufacturing</Link> / Equipment
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
              <Cpu className="w-6 h-6 text-amber-400" />
            </div>
            <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">Production Equipment</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ fontFamily: "Sora, sans-serif" }}>
            State-of-the-Art<br /><span className="text-amber-400">Manufacturing Equipment</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            German and Japanese precision machinery across 12 production lines, capable of 500 million rolls per year with consistent quality.
          </p>
        </div>
      </div>

      <div className="container py-16 space-y-14">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[{ value: "12", label: "Production Lines" }, { value: "50,000 m²", label: "Factory Area" }, { value: "500M+", label: "Rolls/Year Capacity" }, { value: "24/7", label: "Operation" }].map(({ value, label }) => (
            <div key={label} className="bg-slate-50 rounded-2xl p-5 text-center">
              <div className="text-2xl font-extrabold text-[#0F2B5B]" style={{ fontFamily: "Sora, sans-serif" }}>{value}</div>
              <div className="text-xs text-slate-500 mt-1">{label}</div>
            </div>
          ))}
        </div>

        {equipmentCategories.map(({ title, icon: Icon, desc, equipment }) => (
          <div key={title}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <Icon className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900" style={{ fontFamily: "Sora, sans-serif" }}>{title}</h2>
                <p className="text-sm text-slate-500">{desc}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {equipment.map(({ name, count, specs, highlight }) => (
                <div key={name} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="font-bold text-slate-900 text-sm leading-snug" style={{ fontFamily: "Sora, sans-serif" }}>{name}</h3>
                    <span className="flex-shrink-0 text-xs bg-blue-50 text-blue-700 font-semibold px-2.5 py-1 rounded-full">{count}</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed mb-3 font-mono">{specs}</p>
                  <div className="flex items-start gap-2 text-xs text-green-700 bg-green-50 rounded-lg px-3 py-2">
                    <CheckCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-slate-50 rounded-3xl p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-2" style={{ fontFamily: "Sora, sans-serif" }}>Interested in a Factory Visit?</h2>
            <p className="text-slate-600 text-sm max-w-lg">We welcome qualified buyers and distributors to visit our facility. Virtual factory tours are also available via video call.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 bg-[#0F2B5B] hover:bg-[#1E6FD9] text-white font-bold px-7 py-3.5 rounded-xl transition-all whitespace-nowrap" style={{ fontFamily: "Sora, sans-serif" }}>
            Schedule a Visit <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </Layout>
  );
}
