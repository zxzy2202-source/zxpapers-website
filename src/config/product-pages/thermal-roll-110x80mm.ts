import { createThermalRollDetailConfig } from "@/config/product-pages/thermal-roll-detail-config";

export const thermalRoll110x80Config = createThermalRollDetailConfig({
  slug: "110x80mm",
  canonicalPath: "/products/thermal-rolls/110x80mm",
  sizeLabel: "110 mm x 80 mm",
  productName: "110 mm x 80 mm Wide-Format Thermal Paper Rolls",
  badge: "Wide-format receipt and kiosk roll",
  metadataTitle: "110x80mm Thermal Paper Rolls Manufacturer | OEM Supply",
  metadataDescription: "Source 110x80mm wide thermal paper rolls for kiosks, restaurants and itemized receipts. Review printer fit, length, core, OEM packing and bulk supply.",
  keywords: ["110x80mm thermal paper rolls", "110mm wide thermal paper", "wide format receipt rolls", "kiosk printer paper rolls", "restaurant receipt paper", "OEM thermal rolls"],
  heroSlot: "thermal-roll-110x80mm:hero",
  heroDescription: "For kiosk integrators, restaurant-system suppliers and specialist receipt programs. Confirm the 110 mm print width, 80 mm roll bay, core, length, paper grade and packing before quotation.",
  directAnswer: "110 mm x 80 mm thermal paper rolls provide additional printable width for detailed bills, kiosk output and specialist receipt systems. They require a printer designed for 110 mm media and must be qualified for width tolerance, 80 mm outer diameter, core, winding, paper basis and cutter or feed path.",
  buyerFit: "Kiosk integrators, restaurant-system suppliers and specialist printer distributors",
  markets: ["Americas", "Europe", "Global"],
  rollSpecification: [
    { label: "Nominal width", value: "110 mm", note: "Legacy reference tolerance: +/-0.5 mm; confirm on the order specification." },
    { label: "Nominal outer diameter", value: "80 mm" },
    { label: "Length options", value: "50 m / 40 m / 30 m", note: "Confirm paper basis, core and measurement tolerance." },
    { label: "Core options", value: "12 mm / 25 mm", note: "Select from the printer and target length." },
    { label: "Paper basis reference", value: "55 g/m2 / 65 g/m2", note: "Final grade affects length, caliper and weight." },
    { label: "Printable-width review", value: "Confirm printhead width, margins, cutter and document layout with the printer specification." },
  ],
  applications: [
    { title: "Wide-format POS", description: "More printable width for detailed receipts, reports and multi-column transaction output.", confirm: "printer model, printhead width, margins, cutter and document layout" },
    { title: "Restaurant systems", description: "Itemized bills and operational printouts where a standard 80 mm roll is too narrow.", confirm: "front-of-house or kitchen device, heat, grease exposure and handling" },
    { title: "Self-service kiosks", description: "Receipt and ticket output from dedicated wide-media kiosk mechanisms.", confirm: "mechanism model, roll bay, spindle, feed path, cutter and service interval" },
    { title: "Hospitality billing", description: "Detailed guest bills and service documents from compatible wide-format printers.", confirm: "printer fleet, retention requirement, private-label packing and branch delivery" },
  ],
  referencePacking: { rollsPerBox: 36, boxesPerPallet: 24, rollsPerPallet: 864, weightKg: 360, palletDimensions: "110 x 120 x 180 cm", palletsPer20ft: 10, palletsPer40ft: 23, rollsPer20ft: 8640, rollsPer40ft: 19872 },
  relatedSizes: [
    { id: "80x80mm", title: "80 mm x 80 mm", description: "The standard full-width POS format for retail and hospitality.", buyerFit: "For buyers who do not require 110 mm printable width.", href: "/products/thermal-rolls/80x80mm" },
    { id: "80x70mm", title: "80 mm x 70 mm", description: "A compact 80 mm format for smaller POS roll compartments.", buyerFit: "For mixed portfolios covering standard and specialist receipt printers.", href: "/products/thermal-rolls/80x70mm" },
  ],
});
