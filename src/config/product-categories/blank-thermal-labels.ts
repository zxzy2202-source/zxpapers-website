import type { ProductCategoryConfig } from "@/components/products/category/product-category-types";
import { labelSizes } from "@/config/navigation";

const LABELS_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-labels-FgJ5U8LZDHPF5nwmD6Uqa5.webp";
const ROLLS_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-rolls-RQBrphmgzbAMk7eq3HsvNq.webp";

const sizeUses: Record<string, string> = {
  "4x6in": "Shipping, fulfillment, carton and warehouse routing labels",
  "2x1in": "SKU, price, compact barcode and inventory identification",
  "3x2in": "Product, warehouse and general-purpose information labels",
  "4x3in": "Larger product, carton and handling-information labels",
  "2x4in": "Narrow routing, address and vertical information layouts",
  "1x1in": "Small-item, component and compact identification labels",
};

export const blankThermalLabelsCategoryConfig: ProductCategoryConfig = {
  kind: "category",
  canonicalPath: "/products/thermal-labels/blank",
  categoryName: "Blank Thermal Labels",
  alternateNames: [
    "Blank Direct Thermal Labels",
    "Unprinted Thermal Labels",
    "Blank Barcode Labels",
    "Blank Shipping Labels",
    "Thermal Label Rolls",
  ],
  audience:
    "3PLs, warehouses, retailers, manufacturers, label distributors and procurement teams sourcing unprinted thermal labels for controlled printing and repeat supply",
  metadata: {
    title: "Blank Thermal Labels | B2B Roll & Fanfold Supply",
    description:
      "Source blank thermal labels by printer, size, face stock, adhesive, liner, core, roll OD, gap, winding, surface, environment, sample and packing.",
    keywords: [
      "blank thermal labels",
      "blank direct thermal labels",
      "unprinted thermal labels",
      "blank barcode labels",
      "blank shipping labels",
      "thermal label rolls wholesale",
      "custom size thermal labels",
      "freezer thermal labels",
      "removable thermal labels",
    ],
  },
  hero: {
    image: {
      slot: "thermal-labels:blank-hero",
      fallback: LABELS_IMAGE,
      alt: "Blank thermal label rolls prepared for printer and adhesive qualification",
    },
    badge: "B2B blank-label selection",
    titleBefore: "Blank Thermal Labels Built Around ",
    titleHighlight: "Printer, Surface & Use",
    description:
      "Start with the printer and data job, then qualify face stock, adhesive, liner, sensing, roll build, application surface, environment and sample criteria before comparing supply options.",
    trustBadges: [
      "Roll and fanfold review",
      "Direct thermal and transfer workflow check",
      "Surface and adhesive qualification",
      "Sample, packing and repeat control",
    ],
    facts: [
      { value: "6 formats", label: "Reference size routes" },
      { value: "Roll / fanfold", label: "Supply formats reviewed" },
      { value: "4 stages", label: "Qualification sequence" },
      { value: "Sample first", label: "Application verification" },
    ],
    primaryCta: { label: "Review Blank Label Programs", href: "#product-families" },
    secondaryCta: { label: "Send Your Label Specification", href: "#inquiry" },
  },
  jumpLinks: [
    { label: "Label programs", href: "#product-families" },
    { label: "Formats", href: "#popular-sizes" },
    { label: "Applications", href: "#applications" },
    { label: "Selection guide", href: "#selection-guide" },
    { label: "Testing", href: "#evidence" },
    { label: "FAQ", href: "#faq" },
    { label: "RFQ", href: "#inquiry" },
  ],
  sectionCopy: {
    families: {
      label: "Blank-label program matrix",
      title: "Choose the label job before the adhesive grade",
      description:
        "A shipping label, shelf label, freezer label and component label can share a size but require different print methods, surfaces, exposure checks, roll builds and acceptance tests.",
    },
    sizes: {
      label: "Reference finished formats",
      title: "Use size to start the review, not finish the specification",
      description:
        "Printer fit also depends on gap or mark, liner width, core, maximum roll diameter, winding, label count and whether the supply format is roll or fanfold.",
    },
    applications: {
      label: "Operating workflows",
      title: "Match the blank construction to where it is printed and applied",
      description:
        "Fulfillment, inventory, retail, food, cold-chain and healthcare workflows create different surface, temperature, moisture, scan-life and handling requirements.",
    },
    selection: {
      label: "Four-stage qualification",
      title: "Define the inputs that decide material, adhesive and printer fit",
      description:
        "Equipment and data come first, followed by the actual surface and environment. Select the construction only after those conditions are known, then validate the sample and repeat controls.",
    },
  },
  families: [
    {
      id: "standard-direct-thermal",
      label: "Core blank-label route",
      title: "Blank Direct Thermal Labels",
      description:
        "Unprinted labels for ribbon-free variable data such as shipping details, barcodes, prices, dates and inventory information.",
      buyerFit:
        "Confirm printer model, DPI, sensing method, finished size, gap, core or fanfold stack, face stock, required image life and operating conditions.",
      href: "#popular-sizes",
      linkLabel: "Review common formats",
      featured: true,
      image: {
        slot: "products:thermal-labels",
        fallback: LABELS_IMAGE,
        alt: "Blank direct thermal label rolls for variable data printing",
      },
    },
    {
      id: "shipping-warehouse",
      label: "Logistics route",
      title: "Shipping, Carton & Warehouse Labels",
      description:
        "Blank roll or fanfold labels for packing stations, carrier labels, carton routing, pallet identification and inventory workflows.",
      buyerFit:
        "Confirm printer, throughput, carton or mailer surface, dust, temperature, label life, barcode test, packing-station format and replenishment plan.",
      href: "/products/shipping-labels",
      linkLabel: "Review shipping label supply",
      image: {
        slot: "thermal-labels:applications:shipping",
        fallback: LABELS_IMAGE,
        alt: "Blank thermal shipping and warehouse label workflow",
      },
    },
    {
      id: "surface-adhesive",
      label: "Application-specific route",
      title: "Surface & Environment Qualified Labels",
      description:
        "Blank labels reviewed for removable, high-tack, cold, heat, moisture, curved or difficult-surface requirements.",
      buyerFit:
        "Provide the actual substrate, surface condition, application temperature, service temperature, dwell time, exposure and removal expectation for sample testing.",
      href: "#inquiry",
      linkLabel: "Define the application conditions",
      image: {
        slot: "thermal-labels:applications:product",
        fallback: LABELS_IMAGE,
        alt: "Blank thermal labels reviewed on representative package surfaces",
      },
    },
    {
      id: "thermal-transfer-synthetic",
      label: "Longer-life route",
      title: "Transfer-Printable & Synthetic Blank Labels",
      description:
        "Paper or film constructions reviewed with a matched ribbon when direct thermal image life or durability is not suitable for the job.",
      buyerFit:
        "Confirm printer, ribbon chemistry, face stock, adhesive, surface, abrasion, moisture, chemicals, outdoor exposure and required service life.",
      href: "#inquiry",
      linkLabel: "Review a durable construction",
      image: {
        slot: "products:thermal-labels",
        fallback: LABELS_IMAGE,
        alt: "Blank thermal transfer and synthetic label rolls",
      },
    },
    {
      id: "distributor-oem",
      label: "Distribution route",
      title: "Distributor, Neutral & Private-Label Packing",
      description:
        "Multi-size blank stock separated by SKU, roll count, carton copy, pallet marks and repeat-order reference.",
      buyerFit:
        "Approve quantity by SKU, labels per roll or stack, inner protection, carton marks, private-label fields, pallet plan, destination and reorder code.",
      href: "#inquiry",
      linkLabel: "Plan a distributor program",
      image: {
        slot: "home:category-thermal-labels",
        fallback: LABELS_IMAGE,
        alt: "Blank thermal label rolls packed for distributor and OEM supply",
      },
    },
  ],
  sizes: labelSizes.map((size) => ({
    slug: size.slug,
    label: size.label,
    market: size.markets ?? "Global",
    badge: size.badge,
    use: sizeUses[size.slug] ?? "Shipping, barcode, product and inventory labeling",
    href: `/products/thermal-labels/${size.slug}`,
  })),
  applications: [
    {
      id: "ecommerce-3pl",
      title: "E-commerce, 3PL & parcel shipping",
      description:
        "High-volume shipping labels where printer fit, feed reliability, carton adhesion, barcode scan and replenishment consistency matter.",
      confirm:
        "printer and DPI, roll or fanfold, size, sensing, core or stack, carton or mailer surface, throughput and scan criteria",
      href: "/products/shipping-labels",
      linkLabel: "Review shipping labels",
      image: {
        slot: "thermal-labels:applications:ecommerce",
        fallback: LABELS_IMAGE,
        alt: "Blank thermal labels used at an e-commerce packing station",
      },
    },
    {
      id: "warehouse-retail",
      title: "Warehouse, inventory & retail",
      description:
        "SKU, price, shelf, carton and inventory labels that need readable data and suitable adhesion for the actual item or location.",
      confirm:
        "data and barcode type, printer, item or shelf surface, label life, handling, removal need and scan distance",
      href: "/products/barcode-labels",
      linkLabel: "Review barcode workflows",
      image: {
        slot: "thermal-labels:applications:warehouse",
        fallback: LABELS_IMAGE,
        alt: "Blank barcode and inventory labels in a warehouse workflow",
      },
    },
    {
      id: "food-cold-chain",
      title: "Food, refrigerated & cold-chain use",
      description:
        "Blank labels where condensation, grease, low application temperature, curved packs or short product cycles change construction choices.",
      confirm:
        "package surface, direct or indirect food-contact boundary, application temperature, service temperature, condensation, grease and label life",
      href: "#inquiry",
      linkLabel: "Review cold-use conditions",
      image: {
        slot: "thermal-labels:applications:food",
        fallback: ROLLS_IMAGE,
        alt: "Blank thermal labels reviewed for refrigerated food packaging",
      },
    },
    {
      id: "healthcare-components",
      title: "Healthcare, laboratory & component ID",
      description:
        "Identification labels where small size, curved containers, retention, abrasion, chemicals or controlled storage need evidence-based review.",
      confirm:
        "container or component, surface, size, print method, storage, chemical exposure, handling, required life and verification criteria",
      href: "#inquiry",
      linkLabel: "Define the identification job",
      image: {
        slot: "thermal-labels:applications:pharmacy",
        fallback: LABELS_IMAGE,
        alt: "Blank thermal labels for controlled healthcare and component identification",
      },
    },
  ],
  selectionSteps: [
    {
      step: "01",
      title: "Printer, data & sensing",
      description: "Start with the equipment and information the blank label must carry.",
      inputs: [
        "Printer model, DPI and print method",
        "Barcode, text, date, batch or other data",
        "Gap, black mark, notch or continuous sensing",
      ],
    },
    {
      step: "02",
      title: "Surface & environment",
      description: "Describe where the label is applied and what it experiences during service.",
      inputs: [
        "Actual substrate, texture, curvature and cleanliness",
        "Application and service temperature",
        "Moisture, condensation, grease, chemicals and abrasion",
      ],
    },
    {
      step: "03",
      title: "Material & adhesive",
      description: "Select the face stock, adhesive and liner against the defined job rather than a generic label name.",
      inputs: [
        "Direct thermal paper or transfer-printable construction",
        "Paper or film face stock and required service life",
        "Permanent, removable, high-tack or condition-specific adhesive",
      ],
    },
    {
      step: "04",
      title: "Roll build, sample & repeat",
      description: "Validate printer loading and application, then record the approved supply reference.",
      inputs: [
        "Finished size, liner width, core, roll OD or fanfold stack",
        "Winding, label count, perforation and packing",
        "Sample test, quantity by SKU and reorder reference",
      ],
    },
  ],
  evidence: {
    image: {
      slot: "products:thermal-labels",
      fallback: LABELS_IMAGE,
      alt: "Blank thermal label roll specification and sample review",
    },
    label: "Evidence before bulk and repeat supply",
    title: "Test the proposed label in the real print-and-apply workflow",
    description:
      "A nominal size or adhesive name does not prove printer fit or application performance. The useful evidence connects the exact construction to the real printer, surface, environment, data and acceptance method.",
    checks: [
      {
        title: "Printer and roll fit",
        description:
          "Confirm media width, sensing, core or stack, maximum OD, winding, feed path, print density and cutting or tear-off behavior.",
      },
      {
        title: "Surface and adhesion",
        description:
          "Apply the sample to a representative substrate under the expected cleaning, temperature, pressure, dwell and removal conditions.",
      },
      {
        title: "Print and scan result",
        description:
          "Test the real data, barcode size, quiet zone, contrast, scanner, distance and handling after the agreed storage or exposure period.",
      },
      {
        title: "Packing and traceability",
        description:
          "Record the approved face stock, adhesive, liner, roll build, SKU, carton marks, lot reference and change-control process.",
      },
    ],
    note:
      "Printer compatibility, temperature resistance, chemical resistance and service life depend on the complete label construction and test conditions. They should not be inferred from the category name alone.",
  },
  faq: [
    {
      q: "What information is needed for a blank thermal label quotation?",
      a: "Send the printer model and DPI, print method, finished label size, gap or mark, core and maximum roll diameter or fanfold stack, winding, face stock, adhesive, liner, quantity, packing and destination. Also describe the actual surface and environment.",
    },
    {
      q: "How do I know whether a blank label will fit my printer?",
      a: "Match the media width, label size, liner width, sensing method, core, maximum roll diameter, winding and roll or fanfold format to the printer specification. A representative sample should be loaded and printed when downtime or scan failure creates risk.",
    },
    {
      q: "Which adhesive should I choose?",
      a: "Choose from the actual substrate, surface energy, texture, curvature, cleanliness, application temperature, service temperature, dwell time, moisture, chemicals and removal expectation. Test the proposed construction on the real surface rather than selecting by adhesive name alone.",
    },
    {
      q: "Can blank thermal labels be used in freezers or high-temperature processes?",
      a: "Condition-specific constructions can be reviewed, but no single temperature range applies to every label. Confirm whether the quoted temperature is for application, service or short exposure, plus the surface, duration, condensation, pressure and pass criteria before testing.",
    },
    {
      q: "Should I use direct thermal or thermal transfer labels?",
      a: "Direct thermal suits defined ribbon-free workflows. Thermal transfer uses a matched ribbon and may suit longer retention or demanding handling. Decide from the printer, required life, abrasion, heat, moisture, chemicals, surface and test result.",
    },
    {
      q: "Can you provide distributor or private-label packing?",
      a: "Yes. Neutral or private-label inner packs, roll IDs, carton copy, SKU separation and pallet marks can be reviewed. The final configuration depends on size, roll build, quantity, sales channel and destination.",
    },
  ],
  inquiry: {
    label: "Quote-ready blank-label RFQ",
    title: "Send the inputs that decide printer fit and adhesion",
    description:
      "A complete starting brief helps identify missing construction and test questions before discussing samples, packing or order-specific terms.",
    checklist: [
      "Printer model, DPI, print method, sensing and data or barcode requirement",
      "Finished size, gap or mark, liner width, core, roll OD or fanfold stack and winding",
      "Actual surface, application method, temperature, moisture, chemicals and required life",
      "Face stock, adhesive, liner or current-label reference when already known",
      "Quantity by SKU, sample criteria, packing, destination and current problem",
    ],
    productName: "Blank Thermal Label Program",
    initialMessage:
      "Hello, I need a blank thermal label quotation. Buyer type / program: Application: Printer model and DPI: Direct thermal or thermal transfer: Label size: Gap / black mark / notch: Liner width: Core or fanfold stack: Maximum roll OD: Winding: Face stock: Adhesive or removal need: Actual surface: Application and service temperature: Moisture / grease / chemical / abrasion exposure: Required label life: Barcode or data requirement: Quantity by SKU: Sample criteria: Packing: Destination: Current problem or reference label:",
    responseNote:
      "We will identify missing inputs and confirm the appropriate construction, sample or quotation route.",
  },
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Thermal Labels", path: "/products/thermal-labels" },
    { name: "Blank Thermal Labels", path: "/products/thermal-labels/blank" },
  ],
  relatedPrograms: [
    { label: "All Thermal Labels", href: "/products/thermal-labels" },
    { label: "Shipping Labels", href: "/products/shipping-labels" },
    { label: "Barcode Labels", href: "/products/barcode-labels" },
    { label: "Custom Printed Thermal Labels", href: "/products/custom-printed-thermal-labels" },
  ],
};
