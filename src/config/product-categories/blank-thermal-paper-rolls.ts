import type { ProductCategoryConfig } from "@/components/products/category/product-category-types";
import { paperRollSizes } from "@/config/navigation";

const ROLLS_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-rolls-RQBrphmgzbAMk7eq3HsvNq.webp";
const LABELS_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-labels-FgJ5U8LZDHPF5nwmD6Uqa5.webp";

const sizeUses: Record<string, string> = {
  "80x80mm": "Retail, restaurants, supermarkets and high-volume POS receipt printers",
  "57x50mm": "Mobile POS, card terminals and compact receipt printers",
  "80x70mm": "Standard-width POS printers with a smaller roll holder",
  "110x80mm": "Wide receipts, kiosks, statements and specialist terminals",
  "57x40mm": "Portable payment, delivery and handheld receipt devices",
  "57x30mm": "Ultra-compact card, taxi and portable receipt printers",
};

export const blankThermalPaperRollsCategoryConfig: ProductCategoryConfig = {
  kind: "category",
  canonicalPath: "/products/thermal-paper-rolls/blank",
  categoryName: "Blank Thermal Paper Rolls",
  alternateNames: [
    "Blank Thermal Receipt Paper",
    "Blank POS Paper Rolls",
    "Blank Thermal Till Rolls",
    "Unprinted Thermal Paper Rolls",
  ],
  audience:
    "POS distributors, retail and hospitality procurement teams, payment-terminal suppliers, wholesalers and private-label buyers sourcing unprinted thermal rolls",
  metadata: {
    title: "Blank Thermal Paper Rolls | Wholesale POS & Receipt Supply",
    description:
      "Source blank thermal paper rolls by printer, width, OD or length, core, paper grade, packing, destination and repeat-order specification.",
    keywords: [
      "blank thermal paper rolls",
      "blank thermal receipt paper",
      "blank POS paper rolls",
      "unprinted thermal paper rolls",
      "thermal receipt paper wholesale",
      "57mm thermal paper rolls",
      "80mm thermal paper rolls",
      "blank thermal till rolls",
      "custom size thermal paper rolls",
    ],
  },
  hero: {
    image: {
      slot: "thermal-paper-rolls:blank-hero",
      fallback: ROLLS_IMAGE,
      alt: "Blank thermal paper rolls in common POS and receipt formats",
    },
    badge: "Blank roll sourcing review",
    titleBefore: "Blank Thermal Paper Rolls for ",
    titleHighlight: "Wholesale & Repeat Supply",
    description:
      "Start with the printer or terminal, then lock width, outer diameter or length, core, paper grade, packing and destination before comparing blank-roll quotes.",
    trustBadges: [
      "6 standard size routes",
      "Unprinted stock and custom geometry",
      "Paper claims matched to grade",
      "Packing and reorder reference",
    ],
    facts: [
      { value: "6 routes", label: "Size entries" },
      { value: "57 / 80mm", label: "Common widths" },
      { value: "Blank stock", label: "No artwork approval" },
      { value: "Sample first", label: "Printer-fit check" },
    ],
    primaryCta: { label: "Review Blank Roll Sizes", href: "#popular-sizes" },
    secondaryCta: { label: "Send Your Specification", href: "#inquiry" },
  },
  jumpLinks: [
    { label: "Supply routes", href: "#product-families" },
    { label: "Popular sizes", href: "#popular-sizes" },
    { label: "Applications", href: "#applications" },
    { label: "Selection guide", href: "#selection-guide" },
    { label: "Evidence", href: "#evidence" },
    { label: "FAQ", href: "#faq" },
    { label: "RFQ", href: "#inquiry" },
  ],
  sectionCopy: {
    families: {
      label: "Blank roll supply routes",
      title: "Choose the blank-roll route before the paper grade",
      description:
        "A blank roll still has a printer, geometry, paper, storage and packing requirement. Start with the route closest to the order, then confirm the complete specification.",
    },
    sizes: {
      label: "Popular specifications",
      title: "Use a known size, then qualify the complete roll",
      description:
        "Width alone does not confirm outer diameter, usable length, core, winding or paper grade. Open a size route before asking for a comparable quote.",
    },
    applications: {
      label: "Application routes",
      title: "Match blank paper to the printer and operating condition",
      description:
        "Receipt, payment-terminal, kiosk and field-printing rolls can share a width while requiring different feeding, storage and image-retention checks.",
    },
    selection: {
      label: "Four-step selection",
      title: "Build one blank-roll specification for price and reorder",
      description:
        "Follow the same order every time: application first, roll geometry second, paper evidence third, then sample, packing and repeat controls.",
    },
  },
  families: [
    {
      id: "standard-pos",
      label: "Fast-moving route",
      title: "Standard POS & Receipt Rolls",
      description:
        "Unprinted white rolls for retail, restaurants, supermarkets, cash registers and standard receipt printers.",
      buyerFit:
        "Confirm printer model, width, outer diameter or length, core, paper grade, winding, carton pack and destination.",
      href: "#popular-sizes",
      linkLabel: "Review standard sizes",
      featured: true,
      image: {
        slot: "products:thermal-rolls",
        fallback: ROLLS_IMAGE,
        alt: "Blank white thermal rolls for POS receipt printing",
      },
    },
    {
      id: "payment-terminal",
      label: "Compact route",
      title: "Payment Terminal Rolls",
      description:
        "Small roll formats for card terminals, delivery devices, taxi meters and handheld receipt printers.",
      buyerFit:
        "Confirm terminal model, maximum outer diameter, core, winding, cut behavior, thickness and mobile storage conditions.",
      href: "/products/thermal-rolls/57x40mm",
      linkLabel: "Review a compact format",
      image: {
        slot: "products:thermal-labels",
        fallback: LABELS_IMAGE,
        alt: "Compact blank thermal roll for a payment terminal",
      },
    },
    {
      id: "custom-geometry",
      label: "Specification route",
      title: "Custom Width, Length & Core",
      description:
        "Unprinted rolls built around a non-standard printer compartment, roll diameter, finished length or core requirement.",
      buyerFit:
        "Send a current roll or drawing with measured width, OD, core, paper grade, winding and required quantity by SKU.",
      href: "#inquiry",
      linkLabel: "Request a custom review",
      image: {
        slot: "thermal-rolls:detail-specification",
        fallback: ROLLS_IMAGE,
        alt: "Thermal roll geometry and core specification review",
      },
    },
    {
      id: "documented-grade",
      label: "Material route",
      title: "Documented Paper Grades",
      description:
        "BPA-free, BPS-free and phenol-free routes where the requested claim and report scope must match the exact grade.",
      buyerFit:
        "Keep chemical claims separate and confirm tested substances, report date, product scope and verification method.",
      href: "/products/bpa-free-thermal-paper",
      linkLabel: "Review material routes",
      image: {
        slot: "home:product-phenol-free-thermal-paper",
        fallback: ROLLS_IMAGE,
        alt: "Blank thermal rolls prepared for a documented paper-grade review",
      },
    },
    {
      id: "distributor-packing",
      label: "Distribution route",
      title: "Distributor & Private-Label Packing",
      description:
        "Unprinted rolls packed for wholesale resale, regional distribution, private-label cartons or multi-SKU replenishment.",
      buyerFit:
        "Approve inner pack, carton copy, SKU labels, pallet marks, destination language and the repeat-order reference.",
      href: "#inquiry",
      linkLabel: "Plan packing requirements",
      image: {
        slot: "home:category-custom-rolls",
        fallback: LABELS_IMAGE,
        alt: "Thermal roll cartons prepared for distributor and private-label packing",
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
      id: "retail-hospitality",
      title: "Retail, restaurant & hospitality POS",
      description:
        "High-volume receipts where readable print, usable roll length, carton consistency and repeat availability matter.",
      confirm:
        "printer model, width, OD or length, core, paper grade, print density, storage and carton pack",
      href: "#inquiry",
      linkLabel: "Review a POS roll",
      image: {
        slot: "thermal-rolls:applications:pos",
        fallback: ROLLS_IMAGE,
        alt: "Retail point-of-sale receipt roll application",
      },
    },
    {
      id: "payment-field",
      title: "Payment terminals & field printing",
      description:
        "Compact rolls for card terminals, delivery devices, taxi meters and handheld printers with tighter feeding limits.",
      confirm:
        "terminal model, maximum OD, core, winding, cut behavior, paper thickness and mobile storage conditions",
      href: "#inquiry",
      linkLabel: "Review a compact roll",
      image: {
    slot: "products:thermal-labels",
        fallback: LABELS_IMAGE,
        alt: "Compact thermal roll for a mobile payment printer",
      },
    },
    {
      id: "kiosk-atm",
      title: "Kiosk, ATM & parking terminals",
      description:
        "Unattended devices where feeding, print retention, roll capacity and storage exposure need qualification.",
      confirm:
        "device geometry, service interval, paper retention, temperature, humidity, cut and sensor requirements",
      href: "#inquiry",
      linkLabel: "Review a terminal roll",
      image: {
        slot: "products:thermal-rolls",
        fallback: ROLLS_IMAGE,
        alt: "Thermal paper roll application for a kiosk or unattended terminal",
      },
    },
    {
      id: "distribution",
      title: "Wholesale & distribution programs",
      description:
        "Multi-size blank stock for distributors and private-label buyers who need clear SKU, carton and replenishment control.",
      confirm:
        "quantity by SKU, inner pack, carton marks, pallet plan, destination, forecast and reorder reference",
      href: "#inquiry",
      linkLabel: "Plan a distributor order",
      image: {
        slot: "products:thermal-labels",
        fallback: LABELS_IMAGE,
        alt: "Thermal roll packing and distribution planning",
      },
    },
  ],
  selectionSteps: [
    {
      step: "01",
      title: "Application & printer",
      description: "Start with the device and operating condition the blank roll must serve.",
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
      title: "Paper grade & evidence",
      description: "Keep coating claims and retention requirements tied to the exact paper grade.",
      inputs: [
        "Paper grade, brightness and print-retention need",
        "BPA, BPS or phenol claim scope when required",
        "Storage, temperature and humidity requirement",
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
      slot: "products:thermal-rolls",
      fallback: ROLLS_IMAGE,
      alt: "Thermal paper coating and converting quality review",
    },
    label: "Evidence before repeat supply",
    title: "Confirm the blank roll, paper grade and packing scope",
    description:
      "A blank label on a quote does not define every roll. The useful evidence links the selected grade, roll dimensions, print behavior, storage requirement, packing reference and destination to the actual order.",
    checks: [
      {
        title: "Printer fit",
        description:
          "Match width, outer diameter or length, core, winding and feeding against the buyer's actual device.",
      },
      {
        title: "Paper and image life",
        description:
          "Confirm paper grade, print density, retention need and storage conditions with the approved sample.",
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
      "BPA-free, BPS-free and phenol-free are separate evidence scopes. A document for one paper grade should not be presented as proof for every blank thermal roll.",
  },
  faq: [
    {
      q: "What information is needed for a blank thermal paper roll quotation?",
      a: "Send the application, printer model, width, outer diameter or length, core, paper grade, winding, quantity, packing and destination. If a current roll is available, provide its measured dimensions and a photo of the core and winding.",
    },
    {
      q: "Can you produce custom blank roll widths and lengths?",
      a: "Custom width, finished diameter, usable length and core can be reviewed against the printer specification. The quotation confirms the feasible tolerance, paper grade, quantity, sample route and production conditions after the details are checked.",
    },
    {
      q: "Are blank thermal paper rolls automatically BPA-free?",
      a: "Do not assume a chemical claim from the word blank. Confirm the exact paper grade, tested substance, report scope, issue date and product relationship required for the target market.",
    },
    {
      q: "How do I compare blank thermal roll quotations?",
      a: "Compare width, outer diameter or usable length, core, paper grade, winding, carton quantity, inspection basis, destination and documentation together. A lower price is not comparable if the roll length or packing basis differs.",
    },
    {
      q: "Why is a printer sample useful for blank rolls?",
      a: "A sample can confirm loading, feeding, print density, cutting and sensor behavior on the buyer's actual device. Two rolls with the same width can still differ in OD, core, thickness and feeding behavior.",
    },
    {
      q: "Can you provide distributor or private-label packing?",
      a: "Yes. Inner packs, neutral or printed cartons, SKU labels, pallet marks and destination language can be reviewed. The final packing configuration depends on roll dimensions, quantity, channel and shipping plan.",
    },
  ],
  inquiry: {
    label: "Quote-ready RFQ",
    title: "Send the inputs that change the blank-roll price",
    description:
      "A complete starting brief helps us identify missing specification questions before discussing a sample, packing plan or production route.",
    checklist: [
      "Application and printer or terminal model",
      "Width, outer diameter or required length and core",
      "Paper grade, print-retention or material-document requirement",
      "Quantity by SKU and standard or custom geometry",
      "Packing, destination and current problem or sample reference",
    ],
    productName: "Blank Thermal Paper Roll Program",
    initialMessage:
      "Hello, I need a blank thermal paper roll quotation. Buyer type / program: Application: Printer or terminal model: Width: Outer diameter or required length: Core: Paper grade: Winding or sensor mark: Quantity by SKU: Packing requirement: Destination: Document requirement: Current problem or sample reference:",
    responseNote:
      "We will identify missing inputs and confirm the appropriate sample, document or quotation route.",
  },
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Thermal Paper Rolls", path: "/products/thermal-paper-rolls" },
    { name: "Blank Thermal Paper Rolls", path: "/products/thermal-paper-rolls/blank" },
  ],
  relatedPrograms: [
    { label: "All Thermal Paper Rolls", href: "/products/thermal-paper-rolls" },
    { label: "BPA-Free Thermal Paper", href: "/products/bpa-free-thermal-paper" },
    { label: "Custom Printed Thermal Rolls", href: "/products/thermal-paper-rolls/custom-printed" },
    { label: "Receipt Paper Rolls", href: "/products/receipt-paper-rolls" },
  ],
};
