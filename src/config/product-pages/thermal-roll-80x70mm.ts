import { createThermalRollDetailConfig } from "@/config/product-pages/thermal-roll-detail-config";

export const thermalRoll80x70Config = createThermalRollDetailConfig({
  slug: "80x70mm",
  canonicalPath: "/products/thermal-rolls/80x70mm",
  sizeLabel: "80 mm x 70 mm",
  productName: "80 mm x 70 mm Thermal Paper Rolls",
  badge: "Compact 80 mm POS format",
  metadataTitle: "80x70mm Thermal Paper Rolls Manufacturer | OEM Supply",
  metadataDescription: "Source 80x70mm POS thermal paper rolls for European retail and hospitality. Review printer fit, real length, paper grade, OEM packing and logistics.",
  keywords: ["80x70mm thermal paper rolls", "80mm POS receipt paper", "European POS paper rolls", "3 1/8 inch thermal paper", "OEM thermal rolls", "wholesale receipt paper"],
  heroSlot: "thermal-roll-80x70mm:hero",
  heroDescription: "For European distributors, retail groups and hospitality suppliers seeking an 80 mm roll with a 70 mm profile. Confirm printer clearance, length basis, paper grade, documentation, packing and destination.",
  directAnswer: "80 mm x 70 mm thermal paper rolls are a compact full-width POS format used in retail, restaurant and hospitality printers. The 70 mm outside diameter can reduce roll capacity compared with 80 x 80 mm, so buyers should compare measured length, paper basis, core and printer clearance rather than width alone.",
  buyerFit: "European distributors, retail chains and hospitality supply programs",
  markets: ["Europe", "Global"],
  rollSpecification: [
    { label: "Nominal width", value: "80 mm", note: "Legacy reference tolerance: +/-0.5 mm; confirm on the order specification." },
    { label: "Imperial reference", value: "3 1/8 in" },
    { label: "Nominal outer diameter", value: "70 mm" },
    { label: "Length options", value: "60 m / 50 m / 40 m", note: "Confirm paper basis, core and measurement tolerance." },
    { label: "Core options", value: "12 mm / 25 mm", note: "Select from the printer and target length." },
    { label: "Paper basis reference", value: "55 g/m2 / 65 g/m2", note: "Final grade affects length, caliper and weight." },
  ],
  applications: [
    { title: "European POS systems", description: "Full-width receipts in retail and service environments using a compact roll profile.", confirm: "printer model, 70 mm OD clearance, core and local receipt requirements" },
    { title: "Restaurant printers", description: "Front-of-house and kitchen receipt workflows where frequent, readable output matters.", confirm: "printer heat settings, cutter, grease exposure, storage and replenishment volume" },
    { title: "Retail checkout", description: "Receipt rolls for multi-lane stores and distributed branch networks.", confirm: "device fleet, roll-change interval, carton labels and delivery schedule" },
    { title: "Hospitality", description: "Billing and transaction receipts for hotels and service counters.", confirm: "printer model, retention requirement, storage and private-label packing" },
  ],
  referencePacking: { rollsPerBox: 50, boxesPerPallet: 54, rollsPerPallet: 2700, weightKg: 594, palletDimensions: "112 x 120 x 180 cm", palletsPer20ft: 10, palletsPer40ft: 22, rollsPer20ft: 27000, rollsPer40ft: 59400 },
  relatedSizes: [
    { id: "80x80mm", title: "80 mm x 80 mm", description: "A larger-diameter 80 mm POS roll with higher potential capacity.", buyerFit: "For printers with 80 mm clearance and buyers seeking fewer roll changes.", href: "/products/thermal-rolls/80x80mm" },
    { id: "57x50mm", title: "57 mm x 50 mm", description: "A narrower format for mobile and compact receipt printers.", buyerFit: "For buyers serving both standard POS and portable device fleets.", href: "/products/thermal-rolls/57x50mm" },
  ],
});
