import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import InquiryForm from "@/components/shared/InquiryForm";
import { Tag, Clock, ChevronRight, Thermometer, Droplets, Sun, AlertCircle, CheckCircle } from "lucide-react";
import { SITE } from "@/config/siteData";

export const metadata: Metadata = {
  title: "Thermal Paper Technical Guide | Grades & Specs",
  description: "Complete technical guide to thermal paper: how thermal printing works, BPA-free vs phenol-free grades, paper weight selection, image life factors, printer.",
  keywords: "thermal paper guide, BPA-free thermal paper, thermal paper grades, thermal paper specifications, how thermal printing works",
  alternates: { canonical: `${SITE.domain}/resources/product-knowledge` },
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
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Product Knowledge",
      "item": "https://www.zhixinpaper.com/resources/product-knowledge"
    }
  ]
};
export default function ProductKnowledgePage() {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="bg-[#0F2B5B] text-white py-14">
        <div className="container">
          <div className="flex items-center gap-2 mb-3">
            <Link href="/resources" className="text-amber-400 text-xs font-bold uppercase tracking-wider hover:underline">Resources</Link>
            <span className="text-slate-500">·</span>
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Product Knowledge</span>
            <span className="text-slate-500">·</span>
            <span className="text-slate-400 text-xs flex items-center gap-1"><Clock className="w-3 h-3" /> 14 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 max-w-3xl leading-tight" style={{ fontFamily: "Sora, sans-serif" }}>
            Thermal Paper Explained:<br /><span className="text-amber-400">A Complete Technical Guide</span>
          </h1>
          <p className="text-slate-300 max-w-2xl text-base">How thermal paper works at the chemistry level, the real differences between grades, how to select the right paper for your printer and environment, and what causes premature image fading — with practical guidance for buyers and distributors.</p>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">

            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>How Thermal Paper Works</h2>
              <p className="text-slate-600 leading-relaxed mb-4">Thermal paper contains a heat-sensitive coating on one side. When a thermal print head applies heat to specific points, a chemical reaction turns those areas dark — creating text, barcodes, or graphics without ink or ribbons. This is why thermal printing is so reliable and low-maintenance: there are no ink cartridges to replace, no ribbons to jam, and no nozzles to clog.</p>
              <p className="text-slate-600 leading-relaxed mb-4">The coating contains three key components: a leuco dye (colorless), a developer (acid), and a sensitizer. Heat melts the sensitizer, allowing the dye and developer to react and produce a dark image. The reaction is essentially irreversible under normal conditions, which is why thermal prints are stable once cooled — but also why they are vulnerable to heat, chemicals, and UV light, which can trigger the same reaction unintentionally.</p>
              <p className="text-slate-600 leading-relaxed mb-4">Understanding this chemistry is essential for selecting the right paper grade and advising your customers on proper storage. A receipt left on a car dashboard in summer sun will fade within hours — not because the paper is defective, but because the ambient temperature has exceeded the coating's activation threshold.</p>
              <div className="bg-slate-50 rounded-2xl p-6 mt-4">
                <h3 className="font-bold text-slate-900 mb-3 text-sm" style={{ fontFamily: "Sora, sans-serif" }}>Key Components of Thermal Coating</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { name: "Leuco Dye", role: "Color-forming agent", detail: "Colorless until activated by heat. Turns dark (usually black or blue) upon reaction. The specific dye formulation determines the print color and density." },
                    { name: "Developer (Acid)", role: "Reaction catalyst", detail: "Bisphenol A (BPA) was the traditional developer. Modern alternatives include BPS, urea derivatives, and fully phenol-free compounds for regulatory compliance." },
                    { name: "Sensitizer", role: "Melting agent", detail: "Lowers the activation temperature, enabling printing at standard thermal head temperatures (60–80°C). Also affects print speed and energy efficiency." },
                  ].map(({ name, role, detail }) => (
                    <div key={name} className="bg-white rounded-xl p-4 border border-slate-200">
                      <div className="font-bold text-blue-700 text-sm mb-1" style={{ fontFamily: "Sora, sans-serif" }}>{name}</div>
                      <div className="text-xs text-slate-500 mb-2">{role}</div>
                      <div className="text-xs text-slate-600 leading-relaxed">{detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>Thermal Paper Grades: What the Differences Actually Mean</h2>
              <p className="text-slate-600 leading-relaxed mb-5">The thermal paper market uses several grade designations — Standard, BPA-Free, Phenol-Free, Premium — but these terms are not always used consistently by different manufacturers. Here is a precise breakdown of what each grade means in terms of chemistry, performance, and appropriate use cases.</p>
              <div className="overflow-hidden border border-slate-200 rounded-2xl mb-5">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-slate-700">Grade</th>
                      <th className="px-4 py-3 text-left font-semibold text-slate-700">Developer</th>
                      <th className="px-4 py-3 text-left font-semibold text-slate-700">Image Life</th>
                      <th className="px-4 py-3 text-left font-semibold text-slate-700">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Standard", "BPA", "5–7 years", "General POS, receipts"],
                      ["BPA-Free", "BPS / Urea", "5–7 years", "EU market, food service"],
                      ["Phenol-Free", "No phenol compounds", "5–7 years", "Strictest compliance"],
                      ["Premium", "BPA-Free + top coat", "10+ years", "Medical, archival, legal"],
                      ["Synthetic", "Polyester base", "10+ years", "Outdoor, waterproof labels"],
                    ].map(([grade, dev, life, use], i) => (
                      <tr key={grade} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="px-4 py-3 font-semibold text-slate-900">{grade}</td>
                        <td className="px-4 py-3 text-slate-600">{dev}</td>
                        <td className="px-4 py-3 text-slate-600">{life}</td>
                        <td className="px-4 py-3 text-slate-600">{use}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">The distinction between BPA-Free and Phenol-Free is important and often misunderstood. BPA-Free paper replaces bisphenol A with an alternative bisphenol compound — most commonly bisphenol S (BPS). However, BPS has similar endocrine-disrupting properties to BPA, and several jurisdictions (including France and the EU as a whole, under Regulation (EU) 2016/2235) have moved to restrict all bisphenol compounds in thermal paper. Phenol-Free paper uses entirely different developer chemistry with no bisphenol compounds at all.</p>
              <p className="text-slate-600 leading-relaxed">For distributors supplying food service, healthcare, or government procurement channels in Europe, specifying Phenol-Free is the safest approach for long-term compliance. For North American markets, BPA-Free is currently the standard expectation, though California's Proposition 65 and emerging federal regulations may push toward Phenol-Free requirements in coming years.</p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>Key Specifications Explained</h2>
              <p className="text-slate-600 leading-relaxed mb-5">Thermal paper specifications are often listed as a series of numbers that can be confusing without context. Here is what each parameter means and why it matters for your specific application.</p>
              <div className="space-y-4">
                {[
                  { term: "Basis Weight (gsm)", def: "Grams per square meter. Higher gsm = thicker, stiffer paper. Common values: 48, 55, 58, 65, 80gsm. Heavier paper feels more premium and is less prone to tearing during high-speed printing. However, at the same roll diameter, heavier paper means fewer meters of paper per roll — which affects your cost per receipt. A 48gsm roll at 80mm diameter contains approximately 20% more paper than a 58gsm roll at the same diameter." },
                  { term: "Core Diameter", def: "The inner tube diameter. 12mm for compact/portable printers (Epson TM-P20, Star SM-S220), 25mm for standard POS (Epson TM-T88, Star TSP143), 38mm for high-volume kitchen printers. Must match your printer's spindle exactly — a 25mm core on a 12mm spindle will wobble and cause jams. When in doubt, measure the existing roll's core with a ruler before ordering." },
                  { term: "Roll Diameter", def: "The outer diameter of the finished roll. Larger diameter = more paper = fewer roll changes. Standard POS rolls are 40–80mm outer diameter. High-capacity rolls (80–100mm) reduce staff time spent changing rolls in busy environments but require printers with a larger paper compartment. Always verify your printer's maximum roll diameter before ordering high-capacity rolls." },
                  { term: "Print Side", def: "Thermal paper only prints on the coated side. The coated side is slightly shinier and turns dark when scratched firmly with a fingernail. Loading paper with the wrong side facing the print head produces blank receipts — the most common complaint from end users switching to a new paper brand. Include a loading diagram in your packaging to prevent this." },
                  { term: "Image Life", def: "How long the printed image remains readable under normal storage conditions (room temperature, away from direct sunlight and chemicals). Stated image life figures assume ideal storage — actual field performance depends heavily on the environment. See the section below on image degradation factors for a realistic assessment." },
                  { term: "Optical Density", def: "A measure of print darkness, typically expressed as OD (optical density). A value of 1.0 means the printed area absorbs 90% of incident light. OD ≥1.0 is the minimum for reliable barcode scanning. Premium grades achieve OD 1.2–1.4, which produces visually darker, crisper prints that scan reliably even on worn barcode readers." },
                ].map(({ term, def }) => (
                  <div key={term} className="p-5 bg-white border border-slate-100 rounded-xl shadow-sm">
                    <div className="font-bold text-slate-900 text-sm mb-2" style={{ fontFamily: "Sora, sans-serif" }}>{term}</div>
                    <div className="text-sm text-slate-600 leading-relaxed">{def}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>What Causes Thermal Image Fading — and How to Prevent It</h2>
              <p className="text-slate-600 leading-relaxed mb-5">Premature image fading is the most common quality complaint in the thermal paper industry, and it is almost always caused by environmental factors rather than paper defects. Understanding these factors allows you to advise customers on proper storage and select the appropriate grade for their environment.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                {[
                  { icon: Thermometer, color: "text-red-500 bg-red-50", title: "Heat", desc: "Temperatures above 70°C cause rapid fading. Car dashboards in summer, kitchen environments near cooking equipment, and direct sunlight through glass are common culprits. Premium grades with top coats resist up to 90°C." },
                  { icon: Droplets, color: "text-blue-500 bg-blue-50", title: "Chemicals", desc: "Plasticizers in PVC (credit card wallets, plastic folders), hand sanitizers, oils, and many cleaning products dissolve the thermal coating. This is why receipts stored in wallets fade faster than those stored flat." },
                  { icon: Sun, color: "text-amber-500 bg-amber-50", title: "UV Light", desc: "Direct sunlight and fluorescent lighting both degrade thermal coatings over time. Receipts posted on notice boards or stored near windows fade significantly faster than those in drawers or files." },
                ].map(({ icon: Icon, color, title, desc }) => (
                  <div key={title} className="p-5 bg-white border border-slate-100 rounded-xl shadow-sm">
                    <div className={`w-9 h-9 ${color.split(" ")[1]} rounded-lg flex items-center justify-center mb-3`}>
                      <Icon className={`w-5 h-5 ${color.split(" ")[0]}`} />
                    </div>
                    <div className="font-bold text-slate-900 text-sm mb-2" style={{ fontFamily: "Sora, sans-serif" }}>{title}</div>
                    <div className="text-xs text-slate-600 leading-relaxed">{desc}</div>
                  </div>
                ))}
              </div>
              <div className="p-5 bg-green-50 border border-green-200 rounded-xl">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-green-900 text-sm mb-1" style={{ fontFamily: "Sora, sans-serif" }}>Storage Best Practices</div>
                    <p className="text-sm text-green-800 leading-relaxed">Store unused rolls in original packaging at 15–25°C, 40–65% relative humidity, away from direct sunlight. Do not store near solvents, adhesives, or cleaning products. For long-term archival storage of printed receipts, use polypropylene (not PVC) sleeves or folders. These precautions can extend actual image life to match or exceed the stated specification.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>Printer Compatibility: Matching Paper to Machine</h2>
              <p className="text-slate-600 leading-relaxed mb-4">Not all thermal paper works equally well in all printers. The print head temperature, print speed, and paper path geometry of each printer model interact with the paper's coating sensitivity, basis weight, and surface smoothness. Using the wrong paper can result in light prints, frequent jams, or accelerated print head wear.</p>
              <p className="text-slate-600 leading-relaxed mb-4">The key matching parameters are: paper sensitivity (the temperature at which the coating activates), paper smoothness (Bekk smoothness, measured in seconds), and paper stiffness (related to basis weight). High-speed printers (printing at 250mm/second or faster) require more sensitive paper than low-speed printers, because the print head contacts each point for a shorter time.</p>
              <div className="overflow-hidden border border-slate-200 rounded-2xl mb-4">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-slate-700">Printer Category</th>
                      <th className="px-4 py-3 text-left font-semibold text-slate-700">Print Speed</th>
                      <th className="px-4 py-3 text-left font-semibold text-slate-700">Recommended Grade</th>
                      <th className="px-4 py-3 text-left font-semibold text-slate-700">Typical Models</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Low-speed POS", "50–100mm/s", "Standard or BPA-Free", "Older Epson, Star, Citizen models"],
                      ["Standard POS", "150–200mm/s", "BPA-Free or Premium", "Epson TM-T88VI, Star TSP143III"],
                      ["High-speed POS", "250–350mm/s", "Premium (high sensitivity)", "Epson TM-T88VII, Bixolon SRP-380"],
                      ["Portable/Mobile", "50–80mm/s", "Standard or BPA-Free (thin)", "Epson TM-P20, Star SM-S220"],
                      ["Label Printer", "Varies", "Label-grade (synthetic or coated)", "Zebra ZD420, Dymo 4XL, Rollo"],
                    ].map(([cat, speed, grade, models], i) => (
                      <tr key={cat} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="px-4 py-3 font-semibold text-slate-900">{cat}</td>
                        <td className="px-4 py-3 text-slate-600">{speed}</td>
                        <td className="px-4 py-3 text-slate-600">{grade}</td>
                        <td className="px-4 py-3 text-slate-600">{models}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 leading-relaxed">When switching paper suppliers, always run a 500-receipt test before committing to a large order. Monitor print density at the beginning, middle, and end of the roll (density sometimes drops as the roll diameter decreases and the paper path geometry changes). Also check for static buildup, which can cause paper to stick to the print head in low-humidity environments.</p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>Common Size Guide</h2>
              <p className="text-slate-600 leading-relaxed mb-5">Paper width is the most critical dimension — it must match your printer exactly. Length and roll diameter are more flexible, as most printers can accommodate a range of roll lengths. The following guide covers the most common sizes across global markets.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                {[
                  { size: "57mm × 40m", use: "Credit card terminals, portable printers. Most common in Asia and Europe for compact payment devices." },
                  { size: "80mm × 80m", use: "Standard restaurant/retail POS printers globally. The most widely sold size in our product range." },
                  { size: "2¼\" × 50′ (57mm × 15m)", use: "US credit card terminals (Verifone, Ingenico, PAX). Note the imperial measurement convention used in North America." },
                  { size: "3⅛\" × 230′ (79mm × 70m)", use: "US standard POS (Epson, Star, Bixolon). High-capacity version reduces roll changes in busy environments." },
                  { size: "110mm × 80m", use: "Wide-format kitchen printers, industrial applications. Common in large restaurant chains and hospitality." },
                  { size: "4\" × 6\" (102mm × 152mm)", use: "Shipping labels (Zebra, Dymo, Rollo). The standard size for e-commerce and logistics label printing." },
                ].map(({ size, use }) => (
                  <div key={size} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                    <Tag className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-slate-900 text-sm" style={{ fontFamily: "Sora, sans-serif" }}>{size}</div>
                      <div className="text-xs text-slate-600 mt-1">{use}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>Thermal Labels vs. Thermal Paper Rolls: Key Differences</h2>
              <p className="text-slate-600 leading-relaxed mb-4">Thermal labels and thermal paper rolls share the same printing technology but differ significantly in substrate, adhesive, and application requirements. Understanding these differences is essential for distributors who supply both POS and logistics customers.</p>
              <p className="text-slate-600 leading-relaxed mb-4">Thermal labels use a face stock (the printable layer), an adhesive layer, and a release liner. The face stock can be paper (for indoor, short-term applications) or synthetic film (polyethylene, polypropylene, or polyester, for outdoor, moisture-resistant, or long-term applications). The adhesive can be permanent, removable, or freezer-grade (for cold-chain logistics labels that must adhere at -20°C).</p>
              <p className="text-slate-600 leading-relaxed mb-4">The most important specification for labels is the adhesive type relative to the application surface. Paper labels on corrugated cardboard boxes require a different adhesive formulation than labels on glass bottles, plastic containers, or metal surfaces. Specifying the wrong adhesive is the most common cause of label failure in the field.</p>
              <div className="flex items-start gap-3 p-5 bg-amber-50 border border-amber-200 rounded-xl">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-amber-900 text-sm mb-1" style={{ fontFamily: "Sora, sans-serif" }}>Common Labeling Mistake</div>
                  <p className="text-sm text-amber-800 leading-relaxed">Using standard paper labels in refrigerated environments causes the adhesive to fail and labels to fall off. For cold-chain applications (refrigerated or frozen storage), always specify freezer-grade adhesive labels, which maintain adhesion at temperatures as low as -20°C. We offer freezer-grade versions of all our standard label sizes.</p>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: "Sora, sans-serif" }}>Sustainability and Environmental Considerations</h2>
              <p className="text-slate-600 leading-relaxed mb-4">Thermal paper sustainability is a growing concern among buyers, particularly in European markets where environmental procurement criteria are increasingly common. The key sustainability dimensions are: fiber sourcing, chemical content, and recyclability.</p>
              <p className="text-slate-600 leading-relaxed mb-4">FSC (Forest Stewardship Council) certification confirms that the paper fiber originates from responsibly managed forests. We offer FSC-certified paper across our BPA-Free and Phenol-Free product lines. For buyers with sustainability procurement requirements, we can provide FSC chain-of-custody documentation.</p>
              <p className="text-slate-600 leading-relaxed mb-4">Recyclability is complicated by the thermal coating. Standard thermal paper with BPA is not accepted in most paper recycling streams because the BPA contaminates the recycled pulp. Phenol-Free thermal paper is more widely accepted in recycling programs, and several European municipalities now specifically require Phenol-Free paper for this reason. Synthetic thermal labels (polyester or polyethylene base) are generally not recyclable through standard paper streams and should be disposed of as general waste or through specialist recycling programs.</p>
              <p className="text-slate-600 leading-relaxed">For distributors positioning their product line as environmentally responsible, we recommend specifying FSC-certified, Phenol-Free paper and communicating this clearly on the packaging. This combination addresses both the chemical compliance and fiber sourcing dimensions of sustainability, and is increasingly used as a differentiator in competitive tender situations.</p>
            </section>

          </div>

          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-1" style={{ fontFamily: "Sora, sans-serif" }}>Get a Free Quote</h3>
              <p className="text-xs text-slate-500 mb-4">12-hour response guaranteed</p>
              <InquiryForm compact />
            </div>
            <div className="bg-slate-50 rounded-2xl p-5">
              <h4 className="text-sm font-bold text-slate-900 mb-3" style={{ fontFamily: "Sora, sans-serif" }}>Related Resources</h4>
              <ul className="space-y-2">
                {[{ label: "Product Specifications", href: "/specifications" }, { label: "Blank Thermal Rolls", href: "/products/thermal-paper-rolls/blank" }, { label: "Thermal Labels", href: "/products/thermal-labels/blank" }, { label: "OEM Guide", href: "/resources/oem-guide" }, { label: "FAQ", href: "/faq" }].map(({ label, href }) => (
                  <li key={href}><Link href={href} className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition-colors"><ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />{label}</Link></li>
                ))}
              </ul>
            </div>
            <Link href="/resources" className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 transition-colors">← Back to Resource Center</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
