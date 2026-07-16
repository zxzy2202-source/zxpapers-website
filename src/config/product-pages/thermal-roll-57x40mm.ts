import { createThermalRollDetailConfig } from "@/config/product-pages/thermal-roll-detail-config";

export const thermalRoll57x40Config = createThermalRollDetailConfig({
  slug: "57x40mm",
  canonicalPath: "/products/thermal-rolls/57x40mm",
  sizeLabel: "57 mm x 40 mm",
  productName: "57 mm x 40 mm Thermal Paper Rolls",
  badge: "Handheld and mobile POS format",
  metadataTitle: "57x40mm Thermal Paper Rolls Manufacturer | OEM Supply",
  metadataDescription: "Source 57x40mm thermal rolls for handheld printers and mobile POS. Qualify the device, length, core, paper grade, private-label packing and bulk order.",
  keywords: ["57x40mm thermal paper rolls", "57mm handheld printer paper", "2 1/4 inch receipt rolls", "mobile POS paper rolls", "OEM thermal paper", "wholesale receipt rolls"],
  heroSlot: "thermal-roll-57x40mm:hero",
  heroDescription: "For distributors, field-service suppliers and mobile POS programs. Review the handheld printer, 40 mm roll compartment, core, paper length, private-label pack and replenishment plan.",
  directAnswer: "57 mm x 40 mm thermal paper rolls provide more paper capacity than the 57 x 30 mm format while remaining compact for many handheld and mobile POS devices. The 40 mm diameter must still be checked against the printer compartment, core, winding, paper basis and feed path before approval.",
  buyerFit: "Handheld-printer suppliers, mobile POS distributors and field-service programs",
  markets: ["Asia", "Global"],
  rollSpecification: [
    { label: "Nominal width", value: "57 mm", note: "Legacy reference tolerance: +/-0.5 mm; confirm on the order specification." },
    { label: "Imperial reference", value: "2 1/4 in" },
    { label: "Nominal outer diameter", value: "40 mm" },
    { label: "Length options", value: "20 m / 15 m", note: "Confirm paper basis, core and measurement tolerance." },
    { label: "Core reference", value: "12 mm" },
    { label: "Paper basis reference", value: "48 g/m2", note: "Final paper grade and caliper require approval." },
  ],
  applications: [
    { title: "Handheld field printers", description: "Compact receipt and job-record printing for mobile teams.", confirm: "printer model, roll bay, feed, cutter, working temperature and change frequency" },
    { title: "Mobile payment terminals", description: "Receipt rolls for portable payment and table-side checkout devices.", confirm: "terminal model, maximum OD, core, winding and print settings" },
    { title: "Portable POS systems", description: "Small-format media for pop-up retail, markets and queue-busting workflows.", confirm: "device fleet, daily receipt volume, packing and replenishment interval" },
  ],
  applicationImage: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=1200&q=80",
  referencePacking: { rollsPerBox: 100, boxesPerPallet: 175, rollsPerPallet: 17500, weightKg: 787, palletDimensions: "105 x 120 x 180 cm", palletsPer20ft: 11, palletsPer40ft: 24, rollsPer20ft: 192500, rollsPer40ft: 420000 },
  relatedSizes: [
    { id: "57x30mm", title: "57 mm x 30 mm", description: "A smaller roll for tightly constrained payment terminals.", buyerFit: "For devices where compartment size is the primary limit.", href: "/products/thermal-rolls/57x30mm" },
    { id: "57x50mm", title: "57 mm x 50 mm", description: "A larger 57 mm roll with more receipt capacity.", buyerFit: "For portable printers that can accept a 50 mm OD.", href: "/products/thermal-rolls/57x50mm" },
  ],
});
