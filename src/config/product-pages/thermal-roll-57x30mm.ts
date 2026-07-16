import { createThermalRollDetailConfig } from "@/config/product-pages/thermal-roll-detail-config";

export const thermalRoll57x30Config = createThermalRollDetailConfig({
  slug: "57x30mm",
  canonicalPath: "/products/thermal-rolls/57x30mm",
  sizeLabel: "57 mm x 30 mm",
  productName: "57 mm x 30 mm Thermal Paper Rolls",
  badge: "Compact payment-terminal format",
  metadataTitle: "57x30mm Thermal Paper Rolls Manufacturer | OEM Supply",
  metadataDescription: "Source 57x30mm thermal paper rolls for payment terminals and compact receipt printers. Review printer fit, length, core, OEM packing and bulk supply.",
  keywords: [
    "57x30mm thermal paper rolls",
    "57mm receipt paper manufacturer",
    "2 1/4 inch thermal paper rolls",
    "payment terminal paper rolls",
    "OEM thermal rolls",
    "bulk receipt paper supply",
  ],
  heroSlot: "thermal-roll-57x30mm:hero",
  heroDescription: "For distributors, payment-service suppliers and compact-device programs. Confirm the terminal model, 30 mm roll compartment, core, paper length, grade, packing and destination before quotation.",
  directAnswer: "57 mm x 30 mm is a compact direct-thermal receipt roll commonly reviewed for payment terminals and small portable printers. Suitability depends on the exact device, maximum outer diameter, 12 mm core requirement, winding, paper build and required length, so the printer or current roll should be qualified before a bulk order.",
  buyerFit: "Payment-terminal suppliers, distributors and compact receipt programs",
  markets: ["Americas", "Global"],
  rollSpecification: [
    { label: "Nominal width", value: "57 mm", note: "Legacy reference tolerance: +/-0.5 mm; confirm on the order specification." },
    { label: "Imperial reference", value: "2 1/4 in" },
    { label: "Nominal outer diameter", value: "30 mm" },
    { label: "Length options", value: "15 m / 12 m", note: "Confirm paper basis, core and measurement tolerance." },
    { label: "Core reference", value: "12 mm" },
    { label: "Paper basis reference", value: "48 g/m2", note: "Final paper grade and caliper require approval." },
  ],
  applications: [
    { title: "Payment terminals", description: "Compact paper supply for card-payment devices with restricted roll compartments.", confirm: "terminal model, compartment OD, core, winding, feed and receipt length" },
    { title: "Mobile payment devices", description: "Small-format rolls for mobile or counter payment workflows.", confirm: "device model, print energy, roll cover clearance and change frequency" },
    { title: "Compact receipt printers", description: "Short rolls for equipment where footprint matters more than maximum meterage.", confirm: "printer model, feed path, cutter, paper basis and storage conditions" },
  ],
  applicationImage: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&q=80",
  referencePacking: { rollsPerBox: 150, boxesPerPallet: 200, rollsPerPallet: 30000, weightKg: 600, palletDimensions: "105 x 120 x 180 cm", palletsPer20ft: 11, palletsPer40ft: 24, rollsPer20ft: 330000, rollsPer40ft: 720000 },
  relatedSizes: [
    { id: "57x40mm", title: "57 mm x 40 mm", description: "A larger compact roll for handheld and mobile POS printers.", buyerFit: "For devices that accept more roll diameter and need fewer changes.", href: "/products/thermal-rolls/57x40mm" },
    { id: "57x50mm", title: "57 mm x 50 mm", description: "A higher-capacity 57 mm roll for portable receipt workflows.", buyerFit: "For mobile printers with a larger media compartment.", href: "/products/thermal-rolls/57x50mm" },
  ],
});
