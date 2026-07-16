import { createThermalRollDetailConfig } from "@/config/product-pages/thermal-roll-detail-config";

export const thermalRoll57x50Config = createThermalRollDetailConfig({
  slug: "57x50mm",
  canonicalPath: "/products/thermal-rolls/57x50mm",
  sizeLabel: "57 mm x 50 mm",
  productName: "57 mm x 50 mm Thermal Paper Rolls",
  badge: "Higher-capacity portable format",
  metadataTitle: "57x50mm Thermal Paper Rolls Manufacturer | OEM Supply",
  metadataDescription: "Source 57x50mm thermal paper rolls for portable POS, taxi and mobile printers. Review printer fit, length, paper grade, packing and repeat supply.",
  keywords: ["57x50mm thermal paper rolls", "57mm mobile printer paper", "portable POS receipt rolls", "taxi meter paper rolls", "OEM receipt paper", "bulk thermal rolls"],
  heroSlot: "thermal-roll-57x50mm:hero",
  heroDescription: "For portable-printer distributors, mobility programs and regional wholesalers. Qualify the 50 mm roll bay, core, length target, paper grade, carton quantity and destination before pricing.",
  directAnswer: "57 mm x 50 mm thermal paper rolls are a higher-capacity compact format used in portable receipt printers, taxi systems and small POS terminals. They are appropriate only when the device accepts the 50 mm outer diameter and the approved core, winding, paper basis and roll length.",
  buyerFit: "Portable-printer distributors, taxi supply programs and mobile retail fleets",
  markets: ["Asia", "Global"],
  rollSpecification: [
    { label: "Nominal width", value: "57 mm", note: "Legacy reference tolerance: +/-0.5 mm; confirm on the order specification." },
    { label: "Imperial reference", value: "2 1/4 in" },
    { label: "Nominal outer diameter", value: "50 mm" },
    { label: "Length options", value: "30 m / 25 m", note: "Confirm paper basis, core and measurement tolerance." },
    { label: "Core reference", value: "12 mm" },
    { label: "Paper basis reference", value: "48 g/m2 / 55 g/m2", note: "Final grade changes caliper, length and packing weight." },
  ],
  applications: [
    { title: "Portable receipt printers", description: "Higher-capacity media for mobile sales, delivery and field-service printing.", confirm: "printer model, maximum OD, battery workflow, feed and cutter" },
    { title: "Taxi and mobility systems", description: "Receipt printing for in-vehicle meters and payment terminals.", confirm: "device model, temperature range, roll access and local receipt format" },
    { title: "Small POS terminals", description: "57 mm receipts where a 50 mm roll reduces replacement frequency.", confirm: "printer compartment, paper basis, expected volume and storage" },
  ],
  applicationImage: "https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=1200&q=80",
  referencePacking: { rollsPerBox: 100, boxesPerPallet: 63, rollsPerPallet: 6300, weightKg: 346, palletDimensions: "80 x 80 x 180 cm", palletsPer20ft: 21, palletsPer40ft: 47, rollsPer20ft: 132300, rollsPer40ft: 296100 },
  relatedSizes: [
    { id: "57x40mm", title: "57 mm x 40 mm", description: "A more compact 57 mm format for smaller printer compartments.", buyerFit: "For buyers trading some capacity for smaller device fit.", href: "/products/thermal-rolls/57x40mm" },
    { id: "80x70mm", title: "80 mm x 70 mm", description: "A full-width POS format for retail and hospitality receipts.", buyerFit: "For buyers expanding from mobile rolls into standard POS supply.", href: "/products/thermal-rolls/80x70mm" },
  ],
});
