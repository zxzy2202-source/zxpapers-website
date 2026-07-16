import { createThermalRollDetailConfig } from "@/config/product-pages/thermal-roll-detail-config";

export const thermalRoll80x80Config = createThermalRollDetailConfig({
  slug: "80x80mm",
  canonicalPath: "/products/thermal-rolls/80x80mm",
  sizeLabel: "80 mm x 80 mm",
  productName: "80 mm x 80 mm Thermal Paper Rolls",
  badge: "High-volume POS format",
  metadataTitle: "80x80mm Thermal Paper Rolls Manufacturer | OEM Supply",
  metadataDescription: "Source 80x80mm POS thermal rolls, including 80x80x12 programs. Compare real meterage, paper basis, core, OEM packing, documents and bulk logistics.",
  keywords: ["80x80mm thermal paper rolls", "80x80x12 thermal rolls", "80mm POS receipt paper", "3 1/8 inch thermal paper", "rotoli termici 80x80", "bulk thermal paper supply"],
  heroSlot: "thermal-roll-80x80mm:hero",
  heroDescription: "For POS distributors, retail groups and Italy-focused 80x80x12 programs. Compare real meterage, paper basis, core, thermal grade, carton configuration and order documentation on the same specification.",
  directAnswer: "80 mm x 80 mm is a widely used full-width POS receipt format and can be configured for 12 mm or other approved cores. A size name such as 80x80x12 still does not prove real meterage, paper basis, thermal grade or document scope, so these values must be frozen before comparing bulk quotations.",
  buyerFit: "POS distributors, supermarket groups, hospitality suppliers and Italy 80x80x12 programs",
  markets: ["Global", "Italy / EU", "Asia", "Europe", "Americas"],
  rollSpecification: [
    { label: "Nominal width", value: "80 mm", note: "Legacy reference tolerance: +/-0.5 mm; confirm on the order specification." },
    { label: "Imperial reference", value: "3 1/8 in" },
    { label: "Nominal outer diameter", value: "80 mm" },
    { label: "Length options", value: "70 m / 80 m reference; custom review", note: "Define real meterage, paper basis and tolerance before quotation comparison." },
    { label: "Core options", value: "12 mm reference for 80x80x12 / 25 mm optional", note: "Confirm actual inner diameter and core material." },
    { label: "Paper basis reference", value: "55 g/m2 / 60 g/m2 / 65 g/m2", note: "Final grade affects length, caliper and weight." },
  ],
  applications: [
    { title: "High-volume POS systems", description: "Full-width receipts for retail, service and restaurant payment workflows.", confirm: "printer model, maximum OD, core, cutter and expected daily volume" },
    { title: "Supermarket checkout", description: "Repeat supply for multi-lane operations where roll consistency and replenishment matter.", confirm: "device fleet, real meterage, carton labels, pallet plan and delivery cadence" },
    { title: "Italy 80x80x12 programs", description: "Market-specific receipt supply built around an approved 80 mm roll and 12 mm core reference.", confirm: "core ID, real length, paper grade, required documents, language and packing" },
    { title: "Restaurant and hospitality", description: "Transaction and itemized receipts across front desk, counter and service locations.", confirm: "printer settings, storage, image-retention requirement and branch distribution" },
  ],
  referencePacking: { rollsPerBox: 50, boxesPerPallet: 36, rollsPerPallet: 1800, weightKg: 504, palletDimensions: "80 x 80 x 180 cm", palletsPer20ft: 21, palletsPer40ft: 47, rollsPer20ft: 37800, rollsPer40ft: 84600 },
  relatedSizes: [
    { id: "80x70mm", title: "80 mm x 70 mm", description: "A smaller-diameter 80 mm format for compact POS compartments.", buyerFit: "For buyers who need full receipt width with a lower roll profile.", href: "/products/thermal-rolls/80x70mm" },
    { id: "110x80mm", title: "110 mm x 80 mm", description: "A wider format for itemized receipts, kiosks and specialist printers.", buyerFit: "For programs requiring more printable width than standard POS rolls.", href: "/products/thermal-rolls/110x80mm" },
  ],
});
