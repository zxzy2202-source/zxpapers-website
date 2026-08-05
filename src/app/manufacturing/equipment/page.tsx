import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import { CheckCircle, Cpu, ArrowRight, Microscope, Settings, Wind } from "lucide-react";
import { SITE } from "@/config/siteData";
import { getSlotImage } from "@/lib/imageSlotUtils";

export const metadata: Metadata = {
  title: { absolute: "Thermal Paper Manufacturing Equipment | ZhixinPaper" },
  description: "See the coating, slitting, printing, converting and inspection equipment used across ZhixinPaper's thermal paper and label production workflow.",
  alternates: { canonical: `${SITE.domain}/manufacturing/equipment` },
};

const IMG_EQUIPMENT = "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/factory-slitting-equipment-cvwyebpfEowdHCqEFaCG9i.webp";

const equipmentCategories = [
  {
    title: "Coating Lines",
    icon: Wind,
    desc: "Coating equipment applies thermal-sensitive layers under controlled process settings selected for the applicable material and specification.",
    equipment: [
      { name: "Voith Curtain Coater (Germany)", count: "4 units", specs: "Max width: 2,800mm | Rated speed: 800m/min | Coating weight range: 2–8 g/m²", highlight: "Machine capability; final coating acceptance criteria are confirmed in the approved product specification" },
      { name: "Jagenberg Blade Coater (Germany)", count: "3 units", specs: "Max width: 2,400mm | Rated speed: 600m/min | Dual-side coating capable", highlight: "Used for selected specialty and high-sensitivity thermal grades" },
      { name: "Valmet Infrared Drying System", count: "7 units", specs: "Temperature range: 80–180°C | Zone-controlled drying", highlight: "Drying settings are controlled for the applicable material and process plan" },
    ],
  },
  {
    title: "Slitting & Rewinding",
    icon: Settings,
    desc: "After coating, parent rolls are converted to specified widths and lengths under the approved order tolerances.",
    equipment: [
      { name: "Kampf Slitter-Rewinder (Germany)", count: "8 units", specs: "Min width: 20mm | Max width: 1,200mm | Rated speed: 1,200m/min", highlight: "Machine capability; final width tolerance is confirmed in the approved product specification" },
      { name: "Tidland Automatic Tension Control", count: "Configured slitters", specs: "Closed-loop tension feedback", highlight: "Supports defined roll-hardness and winding requirements" },
      { name: "Perini Rewinder (Italy)", count: "4 units", specs: "Log diameter: 20–120mm | Core sizes: 12mm, 25mm, 38mm", highlight: "Supports selected small-core portable-printer roll formats" },
    ],
  },
  {
    title: "Label Converting",
    icon: Cpu,
    desc: "Label production lines support die-cutting, matrix removal, and roll-to-roll converting for confirmed label specifications.",
    equipment: [
      { name: "Mark Andy Label Press (USA)", count: "3 units", specs: "Max web width: 330mm | Rated speed: 200m/min", highlight: "Machine capability; die-cut tolerance is confirmed for the applicable label and order" },
      { name: "Edale Flexo Printing Unit", count: "2 units", specs: "Up to 8 colors | UV curing | Min label size: 10mm x 10mm", highlight: "Available for qualifying custom-printed label orders" },
      { name: "Prati Rewinder & Inspection", count: "4 units", specs: "Inline vision inspection | Configurable defect threshold | Rated speed: 400m/min", highlight: "Detects defined print defects under the configured inspection plan and threshold" },
    ],
  },
  {
    title: "Quality & Testing Lab",
    icon: Microscope,
    desc: "In-house testing capabilities support the methods and sampling requirements defined for the applicable material, product, and order.",
    equipment: [
      { name: "Mettler Toledo Basis Weight Tester", count: "6 units", specs: "Instrument accuracy: ±0.1g/m² | Range: 20–200g/m²", highlight: "Measurement frequency is defined by the applicable process or quality plan" },
      { name: "X-Rite Spectrophotometer", count: "4 units", specs: "CIE L*a*b* color measurement | Gloss measurement", highlight: "Supports batch comparison against specified color and brightness criteria" },
      { name: "Accelerated Aging Chamber", count: "2 units", specs: "Temperature: 20–80°C | Humidity: 20–95% RH | 12 test positions", highlight: "Supports comparative aging under documented laboratory conditions; field life depends on grade and exposure" },
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
      "item": "https://www.zxpapers.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Manufacturing",
      "item": "https://www.zxpapers.com/manufacturing"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Equipment",
      "item": "https://www.zxpapers.com/manufacturing/equipment"
    }
  ]
};

export const revalidate = 86400; // 24 hours: equipment content rarely changes

export default async function EquipmentPage() {
  const equipmentHeroImage = await getSlotImage("manufacturing:equipment-hero", IMG_EQUIPMENT);
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHero
        bgImage={equipmentHeroImage}
        bgImageAlt="ZhixinPaper thermal paper manufacturing equipment and converting lines"
        overlayDir="left"
        overlayOpacity={60}
        minHeight="min-h-[380px]"
        compact
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Manufacturing", href: "/manufacturing" }, { label: "Equipment" }]}
        badge={{ text: "Manufacturing", color: "amber", icon: <Cpu className="w-4 h-4" /> }}
        eyebrow="Installed equipment and process capability"
        title={<>Thermal Paper <span className="text-amber-400">Manufacturing Equipment</span></>}
        subtitle="Equipment ratings describe installed capability; actual output and acceptance criteria depend on product mix, specification, and production scheduling."
        trustBadges={[
          "Coating Lines",
          "Slitting & Rewinding",
          "Label Converting",
          "Testing Lab",
        ]}
        mobileTrustBadgeLimit={2}
        ctas={[
          { label: "Browse Equipment", href: "#equipment-categories", variant: "primary" },
          { label: "Discuss Capacity", href: "/contact", variant: "outline" },
        ]}
      />

      <div className="container py-16 space-y-14">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[{ value: "12", label: "Production Lines" }, { value: "50,000 m²", label: "Factory Area" }, { value: "500M+", label: "Rated Rolls/Year" }, { value: "By Schedule", label: "Operation" }].map(({ value, label }) => (
            <div key={label} className="bg-slate-50 rounded-2xl p-5 text-center">
              <div className="font-sora text-2xl font-extrabold text-brand-navy">{value}</div>
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
                <h2 className="font-sora text-xl font-bold text-slate-900">{title}</h2>
                <p className="text-sm text-slate-500">{desc}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {equipment.map(({ name, count, specs, highlight }) => (
                <div key={name} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="font-sora font-bold text-slate-900 text-sm leading-snug">{name}</h3>
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
            <h2 className="font-sora text-2xl font-extrabold text-slate-900 mb-2">Interested in a Factory Visit?</h2>
            <p className="text-slate-600 text-sm max-w-lg">We welcome qualified buyers and distributors to visit our facility. Virtual factory tours are also available via video call.</p>
          </div>
          <Link href="/contact" className="font-sora flex-shrink-0 inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-blue text-white font-bold px-7 py-3.5 rounded-xl transition-all whitespace-nowrap">
            Schedule a Visit <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </Layout>
  );
}
