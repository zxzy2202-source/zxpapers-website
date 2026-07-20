import type { ProductCategoryConfig } from "@/components/products/category/product-category-types";
import { paperRollSizes } from "@/config/navigation";

const ROLLS_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-rolls-RQBrphmgzbAMk7eq3HsvNq.webp";
const FACTORY_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/factory-coating-line-Rfrrgy9ZbXu6C6rJRRsG37.webp";
const CUSTOM_ROLLS_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/oem-factory-EHdu8eZwwzSo5DxSRyzQdF.webp";
const POS_IMAGE =
  "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&q=82";
const MOBILE_IMAGE =
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=82";
const KIOSK_IMAGE =
  "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200&q=82";
const DOCUMENT_IMAGE =
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=82";

export const GLOBAL_THERMAL_ROLL_TERMS = [
  {
    term: "Thermal paper rolls",
    aliases: ["Thermal receipt paper rolls", "Thermal printer paper rolls"],
    marketUse: "Global category term",
    specificationNote: "Add the application, printer and complete roll geometry before quoting.",
  },
  {
    term: "POS paper rolls",
    aliases: ["Receipt paper rolls", "Cash register rolls"],
    marketUse: "Retail and hospitality procurement",
    specificationNote: "Confirm print method, width, OD or length, core and carton pack.",
  },
  {
    term: "Till rolls",
    aliases: ["EPOS rolls", "Cash till rolls"],
    marketUse: "UK, Commonwealth and distributor catalogs",
    specificationNote: "The term may include thermal or impact paper, so confirm the printer technology.",
  },
  {
    term: "Billing rolls",
    aliases: ["POS billing paper", "Billing machine paper rolls"],
    marketUse: "India and South Asian procurement",
    specificationNote: "Confirm width, finished OD, core and the billing-printer model.",
  },
  {
    term: "EDC rolls",
    aliases: ["EDC paper rolls", "Card terminal rolls"],
    marketUse: "Southeast Asian payment channels",
    specificationNote: "Compact terminal rolls require model, OD, core and winding confirmation.",
  },
  {
    term: "EFTPOS rolls",
    aliases: ["Payment terminal rolls", "Credit card machine paper"],
    marketUse: "Oceania and international payment channels",
    specificationNote: "Width alone does not establish device compatibility.",
  },
];

export const GLOBAL_METRIC_SPEC_FORMATS = [
  {
    format: "80 x 80 mm",
    meaning: "Usually 80mm width x approximately 80mm finished outer diameter",
    confirm: "Core ID, paper GSM, measured length, winding and carton count",
  },
  {
    format: "80 x 80 x 12 mm",
    meaning: "Often width x outer diameter x core ID",
    confirm: "Supplier dimension order, actual core ID and usable roll length",
  },
  {
    format: "80 mm x 80 m",
    meaning: "80mm width x nominal roll length in metres",
    confirm: "Finished OD, core ID, paper GSM and length tolerance",
  },
  {
    format: "57 x 40 mm",
    meaning: "Usually 57mm width x approximately 40mm finished outer diameter",
    confirm: "Terminal model, core ID, winding direction and target length",
  },
  {
    format: "110 x 80 mm",
    meaning: "Usually 110mm width x approximately 80mm finished outer diameter",
    confirm: "Printer compartment, core, paper grade and packing configuration",
  },
];

const sizeUses: Record<string, string> = {
  "80x80mm": "Retail, restaurants, supermarkets and high-volume POS receipt printers",
  "57x50mm": "Mobile POS, card terminals and compact receipt printers",
  "80x70mm": "Standard-width POS printers with a smaller roll holder",
  "110x80mm": "Wide receipts, kiosks, statements and specialist terminals",
  "57x40mm": "Portable payment, delivery and handheld receipt devices",
  "57x30mm": "Ultra-compact card, taxi and portable receipt printers",
};

export const thermalPaperRollsCategoryConfig: ProductCategoryConfig = {
  kind: "category",
  canonicalPath: "/products/thermal-paper-rolls",
  categoryName: "Thermal Paper Rolls",
  alternateNames: [
    "Thermal Receipt Paper Rolls",
    "POS Thermal Paper",
    "Thermal Till Rolls",
    "OEM Thermal Paper Rolls",
    "Wholesale Thermal Paper Rolls",
  ],
  audience:
    "POS distributors, retail and hospitality procurement teams, payment-terminal suppliers, private-label brands, converters and OEM buyers",
  metadata: {
    title: "Thermal Paper Rolls Manufacturer | OEM & Wholesale",
    description:
      "Source thermal paper rolls by printer, width, roll geometry, core, paper grade, print route, packing, destination and repeat-order control.",
    keywords: [
      "thermal paper rolls manufacturer",
      "OEM thermal paper rolls",
      "wholesale thermal paper rolls",
      "thermal receipt paper rolls",
      "POS thermal paper",
      "thermal till rolls supplier",
      "custom printed thermal rolls",
      "private label receipt rolls",
      "thermal paper roll sizes",
      "BPA free thermal paper rolls",
    ],
  },
  hero: {
    image: {
      slot: "thermal-rolls:hero",
      fallback: ROLLS_IMAGE,
      alt: "Thermal paper rolls prepared for OEM and repeat supply programs",
    },
    badge: "B2B roll specification review",
    titleBefore: "Thermal Paper Rolls for ",
    titleHighlight: "OEM & Repeat Supply",
    description:
      "Start with the printer and application, then lock width, outer diameter or length, core, paper grade, winding, packing and destination before comparing quotes.",
    trustBadges: [
      "Blank and custom print routes",
      "Printer and roll geometry review",
      "Sample before batch approval",
      "Packing and document scope",
    ],
    facts: [
      { value: "6 routes", label: "Standard size entries" },
      { value: "OEM / private label", label: "Program formats" },
      { value: "Sample to batch", label: "Approval record" },
      { value: "80+ markets", label: "Export reach" },
    ],
    primaryCta: { label: "Review Roll Programs", href: "#product-families" },
    secondaryCta: { label: "Send Your Specification", href: "#inquiry" },
  },
  jumpLinks: [
    { label: "Roll programs", href: "#product-families" },
    { label: "Popular sizes", href: "#popular-sizes" },
    { label: "Applications", href: "#applications" },
    { label: "Selection guide", href: "#selection-guide" },
    { label: "Supply evidence", href: "#evidence" },
    { label: "FAQ", href: "#faq" },
    { label: "RFQ", href: "#inquiry" },
  ],
  sectionCopy: {
    families: {
      label: "Roll programs",
      title: "Choose the buying route before the paper grade",
      description:
        "Start with the commercial route that matches the order. The full quotation then connects printer geometry, paper grade, artwork, packing and repeat-order controls.",
    },
    sizes: {
      label: "Popular specifications",
      title: "Use a known size, then qualify the complete roll",
      description:
        "Width alone does not confirm outer diameter, length, core, winding or paper grade. Use a size entry as the starting point for a printer and sample review.",
    },
    applications: {
      label: "Application routes",
      title: "Match the roll to the printer and operating condition",
      description:
        "A POS receipt, payment-terminal roll and kiosk roll can share a width while requiring different geometry, feeding, storage or print-retention checks.",
    },
    selection: {
      label: "Four-step selection",
      title: "Build one specification that can be quoted and reordered",
      description:
        "Follow the same order every time: application first, roll geometry second, paper and print third, then sample, packing and repeat controls.",
    },
  },
  families: [
    {
      id: "blank-stock",
      label: "Distributor route",
      title: "Blank Thermal Paper Rolls",
      description:
        "Standard and custom-size blank rolls for POS, cash-register, ATM, kiosk and mobile printer programs.",
      buyerFit:
        "Confirm printer, width, outer diameter or required length, core, paper grade, winding, carton pack and destination.",
      href: "/products/thermal-paper-rolls/blank",
      linkLabel: "Review blank roll supply",
      featured: true,
      image: {
        slot: "products:thermal-rolls",
        fallback: ROLLS_IMAGE,
        alt: "Blank thermal paper rolls in common POS formats",
      },
    },
    {
      id: "private-label",
      label: "Brand route",
      title: "Private-Label & Neutral Packing",
      description:
        "Distributor, retail and neutral cartons with SKU labels, pack quantities and a reference for repeat shipments.",
      buyerFit:
        "Approve carton copy, inner pack, pallet marks, destination language and the relationship between artwork and SKU.",
      href: "#inquiry",
      linkLabel: "Plan packing requirements",
      image: {
        slot: "home:category-custom-rolls",
        fallback: CUSTOM_ROLLS_IMAGE,
        alt: "Custom thermal roll packing prepared for a private-label program",
      },
    },
    {
      id: "custom-printed",
      label: "Print route",
      title: "Custom Printed Thermal Rolls",
      description:
        "Logo, reverse print, QR, barcode, multilingual and promotional roll programs with proof and sample review.",
      buyerFit:
        "Send the print side, artwork, colors, repeat, live-print area, language and variable-data requirements.",
      href: "/products/thermal-paper-rolls/custom-printed",
      linkLabel: "Review custom printing",
      image: {
        slot: "thermal-rolls:detail-workflow",
        fallback: CUSTOM_ROLLS_IMAGE,
        alt: "Custom printed thermal roll program moving from proof to sample",
      },
    },
    {
      id: "specialty-grades",
      label: "Material route",
      title: "BPA-Free, BPS-Free & Phenol-Free Grades",
      description:
        "Material-specific routes where the requested claim, tested substances and document scope must match the exact paper grade.",
      buyerFit:
        "Keep BPA-free, BPS-free and phenol-free claims separate and confirm report date, product scope and verification method.",
      href: "/products/bpa-free-thermal-paper",
      linkLabel: "Review material options",
      image: {
        slot: "home:product-phenol-free-thermal-paper",
        fallback: ROLLS_IMAGE,
        alt: "Thermal paper rolls prepared for a documented material-grade review",
      },
    },
    {
      id: "converter-supply",
      label: "Factory route",
      title: "Jumbo Roll & Converter Supply",
      description:
        "Base-paper and finished-roll cooperation for converters, print partners and centralized purchasing teams.",
      buyerFit:
        "Discuss width, coating or print route, neutral production, confidentiality, packing references and forecast by SKU.",
      href: "/contact?product=Jumbo%20Roll%20Supply",
      linkLabel: "Discuss factory supply",
      image: {
        slot: "thermal-rolls:detail-quality",
        fallback: FACTORY_IMAGE,
        alt: "Thermal paper coating and converting line for factory supply programs",
      },
    },
  ],
  sizes: paperRollSizes.map((size) => ({
    slug: size.slug,
    label: size.label,
    market: size.markets ?? "Global",
    badge: size.badge,
    use: sizeUses[size.slug] ?? "POS, receipt, kiosk and thermal-printer applications",
    href: `/products/thermal-rolls/${size.slug}`,
  })),
  applications: [
    {
      id: "pos-retail",
      title: "Retail, restaurant & hospitality POS",
      description:
        "High-volume receipt programs where readable print, roll length, carton consistency and repeat availability matter.",
      confirm:
        "printer model, width, OD or length, core, paper grade, print density, storage and carton pack",
      href: "#inquiry",
      linkLabel: "Review a POS roll",
      image: {
        slot: "thermal-rolls:applications:pos",
        fallback: POS_IMAGE,
        alt: "Retail point-of-sale receipt roll application",
      },
    },
    {
      id: "payment-mobile",
      title: "Payment terminals & mobile printers",
      description:
        "Compact rolls for card terminals, delivery devices, taxi meters and handheld printers with tighter feeding limits.",
      confirm:
        "terminal model, maximum OD, core, winding, cut behavior, paper thickness and mobile storage conditions",
      href: "#inquiry",
      linkLabel: "Review a compact roll",
      image: {
        slot: "thermal-rolls:applications:mobile",
        fallback: MOBILE_IMAGE,
        alt: "Compact thermal roll for a mobile payment printer",
      },
    },
    {
      id: "kiosk-atm",
      title: "Kiosk, ATM & parking terminals",
      description:
        "Self-service and unattended devices where feeding, print retention, roll capacity and storage exposure need qualification.",
      confirm:
        "device geometry, service interval, paper retention, temperature, humidity, cut and sensor requirements",
      href: "#inquiry",
      linkLabel: "Review a terminal roll",
      image: {
        slot: "thermal-rolls:applications:kiosk",
        fallback: KIOSK_IMAGE,
        alt: "Thermal paper roll application for a kiosk or unattended terminal",
      },
    },
    {
      id: "printed-document",
      title: "Custom print & document programs",
      description:
        "Branded receipts, promotional rolls and document workflows that add artwork, QR, barcode or bilingual copy.",
      confirm:
        "print side, repeat, live area, artwork version, colors, variable data, proof, packing and destination",
      href: "/oem/custom-printing",
      linkLabel: "Review custom print",
      image: {
        slot: "thermal-rolls:applications:retail",
        fallback: DOCUMENT_IMAGE,
        alt: "Printed thermal roll artwork and document review",
      },
    },
  ],
  selectionSteps: [
    {
      step: "01",
      title: "Application & printer",
      description: "Start with the device and operating condition that the roll must serve.",
      inputs: [
        "Printer or terminal model",
        "POS, mobile, kiosk, ATM or other use",
        "Print density, cut and sensor behavior",
      ],
    },
    {
      step: "02",
      title: "Complete roll geometry",
      description: "Make unit-price comparisons meaningful by recording the full roll construction.",
      inputs: [
        "Width and outer diameter or length",
        "Core size, winding and roll direction",
        "Quantity by SKU and inspection basis",
      ],
    },
    {
      step: "03",
      title: "Paper grade & print",
      description: "Separate paper claims from the actual test and artwork scope.",
      inputs: [
        "Paper grade, brightness and print retention need",
        "BPA, BPS or phenol claim scope when required",
        "Print side, repeat, colors, QR and barcode data",
      ],
    },
    {
      step: "04",
      title: "Sample, pack & repeat",
      description: "Turn the approved sample into a production and reorder reference.",
      inputs: [
        "Printer or application sample test",
        "Inner pack, carton, pallet and destination marks",
        "Approved specification, lot and change control",
      ],
    },
  ],
  evidence: {
    image: {
      slot: "thermal-rolls:detail-quality",
      fallback: FACTORY_IMAGE,
      alt: "Thermal paper coating and converting quality review",
    },
    label: "Evidence before repeat supply",
    title: "Confirm the paper, roll geometry and document scope",
    description:
      "A paper name or certification logo does not define every roll. The useful evidence links the selected grade, tested substances, roll dimensions, storage requirement, packing reference and buyer's destination to the actual order.",
    checks: [
      {
        title: "Roll geometry",
        description:
          "Match width, outer diameter or length, core, winding and printer feeding against the buyer's actual device.",
      },
      {
        title: "Paper and print",
        description:
          "Confirm paper grade, print density, retention need and any custom print area with the approved sample.",
      },
      {
        title: "Material documents",
        description:
          "Ask for the report or certificate scope, tested substances, issue date, product relationship and verification method.",
      },
      {
        title: "Packing and traceability",
        description:
          "Record inner protection, carton marks, pallet plan, destination documents and the reference for repeat orders.",
      },
    ],
    note:
      "Claims and documents are matched to the selected grade and destination requirement. A sample or report for one paper route should not be presented as proof for every thermal roll.",
  },
  faq: [
    {
      q: "How do you choose the right thermal paper roll size?",
      a: "Choose by the printer or terminal model and the complete media specification, not width alone. Confirm width, outer diameter or required length, core, paper grade, winding direction and any sensor-mark requirement before ordering.",
    },
    {
      q: "What information is needed for a thermal paper roll quotation?",
      a: "Send the application, printer model, width, outer diameter or length, core, paper grade, winding, quantity, packing, destination and any print or document requirement. MOQ, proof route and timing are confirmed after the specification is reviewed.",
    },
    {
      q: "Why is sample testing important for payment-terminal paper?",
      a: "Two rolls with the same width can differ in outer diameter, core, paper thickness and feeding behavior. A sample can confirm loading, feeding, printing and cutting on the buyer's actual terminal.",
    },
    {
      q: "Is BPA-free thermal paper the same as phenol-free paper?",
      a: "No. BPA-free addresses BPA, while BPS-free and phenol-free are separate claims. Confirm the exact paper, tested substances, report date, product scope and verification method required for the target market.",
    },
    {
      q: "Can thermal paper rolls use private-label or neutral packing?",
      a: "Private-label, distributor and neutral packing can be reviewed against the roll size, pack quantity, sales channel, labels, destination and shipment configuration. The final packing specification is confirmed before production.",
    },
    {
      q: "What documents should an OEM buyer request?",
      a: "Ask for the document name, issuer, report or certificate number, tested product or material, tested substances, issue and expiry dates, batch relationship and verification method. A generic logo or unrelated report is not sufficient.",
    },
  ],
  inquiry: {
    label: "Quote-ready RFQ",
    title: "Send the inputs that change the price",
    description:
      "A complete starting brief helps us identify missing specification questions before we discuss a sample, packing plan or production route.",
    checklist: [
      "Application and printer or terminal model",
      "Width, outer diameter or required length and core",
      "Paper grade, print or material-document requirement",
      "Quantity by SKU and blank or custom-printed route",
      "Packing, destination and current problem or sample reference",
    ],
    productName: "Thermal Paper Roll Program",
    initialMessage:
      "Hello, I need a thermal paper roll quotation. Buyer type / program: Application: Printer or terminal model: Width: Outer diameter or required length: Core: Paper grade: Winding or sensor mark: Blank or custom printed: Print side, colors and repeat: Quantity by SKU: Packing requirement: Destination: Document requirement: Current problem or sample reference:",
    responseNote:
      "We will identify missing inputs and confirm the appropriate sample, document or quotation route.",
  },
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Thermal Paper Rolls", path: "/products/thermal-paper-rolls" },
  ],
  relatedPrograms: [
    { label: "Receipt Paper Rolls", href: "/products/receipt-paper-rolls" },
    { label: "BPA-Free Thermal Paper", href: "/products/bpa-free-thermal-paper" },
    { label: "Custom Printed Thermal Rolls", href: "/products/thermal-paper-rolls/custom-printed" },
    { label: "OEM & Private Label Supply", href: "/oem" },
  ],
};
