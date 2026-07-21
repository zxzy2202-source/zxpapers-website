import type { ProductCategoryConfig } from "@/components/products/category/product-category-types";
import { labelSizes } from "@/config/navigation";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-labels-FgJ5U8LZDHPF5nwmD6Uqa5.webp";
const SHIPPING_IMAGE =
  "https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=1200&q=82";
const CUSTOM_IMAGE =
  "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=82";
const QUALITY_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/factory-coating-line-Rfrrgy9ZbXu6C6rJRRsG37.webp";
const FOOD_IMAGE =
  "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=82";
const PHARMACY_IMAGE =
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=82";
const WAREHOUSE_IMAGE =
  "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=82";

const sizeUses: Record<string, string> = {
  "4x6in": "Parcel and carrier shipping",
  "2x1in": "SKU, FNSKU and small barcodes",
  "3x2in": "Product and inventory labels",
  "4x3in": "Carton and square-format labels",
  "2x4in": "Address and routing labels",
  "1x1in": "Compact item identification",
};

export const thermalLabelsCategoryConfig = {
  kind: "category",
  canonicalPath: "/products/thermal-labels",
  categoryName: "Thermal Labels",
  alternateNames: [
    "Direct Thermal Labels",
    "Thermal Transfer Labels",
    "Shipping Labels",
    "Barcode Labels",
  ],
  audience:
    "Distributors, 3PLs, e-commerce brands, packaging suppliers, food businesses and industrial procurement teams",
  metadata: {
    title: "Thermal Labels Manufacturer | Shipping, Barcode & OEM",
    description:
      "Compare blank, shipping, barcode, custom-printed and linerless thermal labels for bulk and OEM supply. Qualify by printer, size, surface, adhesive and packing.",
    keywords: [
      "thermal labels manufacturer",
      "direct thermal labels",
      "thermal transfer labels",
      "4x6 shipping labels",
      "barcode labels",
      "FNSKU labels",
      "blank thermal labels",
      "custom printed thermal labels",
      "linerless labels",
      "OEM thermal label supplier",
    ],
  },
  hero: {
    image: {
      slot: "thermal-labels:hero",
      fallback: HERO_IMAGE,
      alt: "Thermal label rolls for shipping barcode and OEM supply",
    },
    badge: "B2B thermal label catalog",
    titleBefore: "Thermal Labels for ",
    titleHighlight: "Shipping, Barcode and OEM",
    description:
      "Start with the product family, then confirm the printer, size, surface, environment, material, adhesive, quantity, packing and destination before quotation.",
    trustBadges: [
      "Roll and fanfold",
      "Direct thermal and transfer",
      "Stock and custom sizes",
      "Private-label packing",
    ],
    facts: [
      { value: "5 routes", label: "Distinct product families" },
      { value: "6 sizes", label: "Popular stock formats" },
      { value: "4 inputs", label: "Core qualification path" },
      { value: "B2B", label: "Bulk and OEM review" },
    ],
    primaryCta: { label: "Browse Product Families", href: "#product-families" },
    secondaryCta: { label: "Request a B2B Quote", href: "#inquiry" },
  },
  jumpLinks: [
    { label: "Products", href: "#product-families" },
    { label: "Sizes", href: "#popular-sizes" },
    { label: "Applications", href: "#applications" },
    { label: "Selection", href: "#selection-guide" },
    { label: "FAQ", href: "#faq" },
    { label: "Quote", href: "#inquiry" },
  ],
  families: [
    {
      id: "shipping-labels",
      label: "Stock and custom supply",
      title: "Shipping Labels",
      description:
        "Roll and fanfold labels for parcel, courier, marketplace, 3PL and warehouse shipping workflows.",
      buyerFit:
        "Confirm printer model, 4x6 or other format, core or fanfold stack, label count and carton surface.",
      href: "/products/shipping-labels",
      linkLabel: "Browse shipping labels",
      featured: true,
      image: {
        slot: "thermal-labels:applications:shipping",
        fallback: SHIPPING_IMAGE,
        alt: "Thermal shipping labels prepared for parcel fulfillment",
      },
    },
    {
      id: "blank-labels",
      label: "Stock range",
      title: "Blank Thermal Labels",
      description: "Unprinted roll and fanfold labels selected by printer, size, surface and environment.",
      buyerFit: "Best for buyers printing variable data, barcodes or routing information in-house.",
      href: "/products/thermal-labels/blank",
      linkLabel: "Browse blank labels",
      image: {
        slot: "thermal-labels:blank-hero",
        fallback: HERO_IMAGE,
        alt: "Blank thermal label rolls for variable-data printing",
      },
    },
    {
      id: "custom-printed-labels",
      label: "Custom program",
      title: "Custom Printed Labels",
      description: "Pre-printed logos, fields, warnings, codes and multilingual content with repeat artwork control.",
      buyerFit: "Best for brands, distributors and packaging programs that need an approved repeat SKU.",
      href: "/products/custom-printed-thermal-labels",
      linkLabel: "Review custom printing",
      image: {
        slot: "thermal-labels:custom-hero",
        fallback: CUSTOM_IMAGE,
        alt: "Custom printed thermal labels and private-label packing",
      },
    },
    {
      id: "barcode-labels",
      label: "Printer-specific",
      title: "Barcode and FNSKU Labels",
      description: "High-contrast SKU, FNSKU, UPC, EAN, QR and 2D-code label programs.",
      buyerFit: "Best for inventory, marketplace and traceability workflows requiring scan validation.",
      href: "/products/barcode-labels",
      linkLabel: "Browse barcode labels",
      image: {
        slot: "thermal-labels:applications:barcode",
        fallback: SHIPPING_IMAGE,
        alt: "Thermal barcode and FNSKU labels for inventory identification",
      },
    },
    {
      id: "linerless-labels",
      label: "Specialty format",
      title: "Linerless Labels",
      description: "Continuous direct-thermal media supplied without a release liner for compatible equipment.",
      buyerFit: "Best for linerless-ready food, retail and temporary identification workflows.",
      href: "/products/linerless-labels",
      linkLabel: "Browse linerless labels",
      image: {
        slot: "linerless-labels:hero",
        fallback: HERO_IMAGE,
        alt: "Linerless thermal label rolls for compatible printers",
      },
    },
    {
      id: "popular-sizes",
      label: "Specification route",
      title: "Popular Stock Sizes",
      description: "Compare six frequently requested inch formats before opening the individual specification page.",
      buyerFit: "Best for buyers who already know the printer and required label dimensions.",
      href: "#popular-sizes",
      linkLabel: "Compare stock sizes",
      image: {
        slot: "thermal-labels:hero",
        fallback: HERO_IMAGE,
        alt: "Popular thermal label sizes in roll format",
      },
    },
  ],
  sizes: labelSizes.map((size) => ({
    slug: size.slug,
    label: size.label,
    market: size.markets ?? "Global",
    badge: size.badge,
    use: sizeUses[size.slug] ?? "General thermal labeling",
  })),
  applications: [
    {
      id: "ecommerce",
      title: "E-commerce fulfillment",
      description: "Parcel labels for marketplaces, stores and carrier handoff.",
      confirm: "printer, carrier format, scan workflow, label count and carton or mailer surface",
      href: "/products/shipping-labels",
      linkLabel: "Review shipping labels",
      image: {
        slot: "thermal-labels:applications:ecommerce",
        fallback: SHIPPING_IMAGE,
        alt: "E-commerce fulfillment using thermal shipping labels",
      },
    },
    {
      id: "warehouse",
      title: "3PL and warehouses",
      description: "Roll or fanfold supply for high-volume receiving, picking and dispatch.",
      confirm: "printer fleet, scan distance, change frequency, pallet labels and replenishment plan",
      href: "/products/shipping-labels",
      linkLabel: "Plan a warehouse program",
      image: {
        slot: "thermal-labels:applications:warehouse",
        fallback: WAREHOUSE_IMAGE,
        alt: "Warehouse team using thermal labels for inventory and shipping",
      },
    },
    {
      id: "food-freezer",
      title: "Food and cold chain",
      description: "Labels reviewed for food packaging, moisture, grease, condensation and low temperature.",
      confirm: "actual container, application temperature, service temperature, dwell and removal behavior",
      href: "/products/thermal-labels/blank",
      linkLabel: "Review blank label options",
      image: {
        slot: "thermal-labels:applications:food",
        fallback: FOOD_IMAGE,
        alt: "Thermal labels applied to food and cold-chain packaging",
      },
    },
    {
      id: "pharmacy",
      title: "Pharmacy and healthcare",
      description: "Short- or longer-term identification selected from the real print and handling workflow.",
      confirm: "printer, substrate, retention period, abrasion, code size and required evidence scope",
      href: "/products/custom-printed-thermal-labels",
      linkLabel: "Discuss a healthcare program",
      image: {
        slot: "thermal-labels:applications:pharmacy",
        fallback: PHARMACY_IMAGE,
        alt: "Healthcare and pharmacy thermal label workflow",
      },
    },
    {
      id: "industrial",
      title: "Industrial traceability",
      description: "Thermal-transfer constructions for assets, components and demanding handling conditions.",
      confirm: "ribbon, face stock, surface, abrasion, chemicals, temperature and required service life",
      href: "/products/custom-printed-thermal-labels",
      linkLabel: "Review an industrial label",
      image: {
        slot: "thermal-labels:applications:asset",
        fallback: QUALITY_IMAGE,
        alt: "Industrial thermal transfer labels for asset traceability",
      },
    },
    {
      id: "cross-border",
      title: "Cross-border packaging",
      description: "Custom labels and private-label packing aligned with destination and channel requirements.",
      confirm: "artwork versions, language, document scope, carton marks, destination and repeat-order control",
      href: "/products/custom-printed-thermal-labels",
      linkLabel: "Plan a custom program",
      image: {
        slot: "thermal-labels:applications:crossborder",
        fallback: CUSTOM_IMAGE,
        alt: "Cross-border packaging with custom thermal labels",
      },
    },
  ],
  selectionSteps: [
    {
      step: "01",
      title: "Printer",
      description: "Identify the exact desktop, industrial, scale or linerless-ready device.",
      inputs: ["Model and DPI", "Direct thermal or ribbon", "Core and maximum OD", "Gap, mark, cutter and feed"],
    },
    {
      step: "02",
      title: "Size",
      description: "Define the finished label and roll or fanfold construction.",
      inputs: ["Width and height", "Gap or pitch", "Labels per roll or stack", "Winding and feed direction"],
    },
    {
      step: "03",
      title: "Surface and environment",
      description: "Test the real package, temperature and handling conditions.",
      inputs: ["Paper, film, plastic or metal", "Application temperature", "Moisture, grease and abrasion", "Dwell and removal expectation"],
    },
    {
      step: "04",
      title: "Material and adhesive",
      description: "Select the construction only after the first three inputs are known.",
      inputs: ["Paper or film face stock", "Permanent or removable route", "Thermal sensitivity or ribbon", "Evidence and document scope"],
    },
  ],
  evidence: {
    image: {
      slot: "manufacturing:facility-line",
      fallback: QUALITY_IMAGE,
      alt: "Thermal label production and quality-control line",
    },
    label: "Qualification and evidence",
    title: "Approve the printer, application and document scope",
    description:
      "A reliable label program records the equipment, material, adhesive, print result, application test, artwork, packing and acceptance criteria. A general product name is not enough evidence for compatibility or compliance.",
    checks: [
      { title: "Printer test", description: "Feed, sensing, cutting, print density and roll construction in the intended device." },
      { title: "Barcode test", description: "Contrast, quiet zone, code size, die-cut position and scan result in the real workflow." },
      { title: "Application test", description: "Surface, preparation, temperature, dwell, bond and removal behavior." },
      { title: "Material evidence", description: "Exact material code, document issuer, subject, date, destination and evidence scope." },
    ],
    note: "BPA-free, BPS-free, phenol-free, FSC, REACH, food-contact and other statements are separate scopes. Confirm the selected material and applicable document before publishing or approving a claim.",
  },
  faq: [
    {
      q: "What is the difference between direct thermal and thermal transfer labels?",
      a: "Direct thermal media forms an image through a heat-sensitive coating and does not use a ribbon. Thermal transfer uses a ribbon and can support longer-life or more demanding applications when the face stock, ribbon and environment are correctly matched.",
    },
    {
      q: "Which thermal labels are normally used for parcel shipping?",
      a: "4 x 6 inch roll or fanfold labels are common, but the correct construction still depends on the printer, core or stack, label count, carrier format, carton or mailer surface and warehouse conditions.",
    },
    {
      q: "How do I confirm whether a label fits my printer?",
      a: "Send the exact printer model, DPI, print method, label width and height, gap or mark, core, maximum roll diameter, winding and feed direction. A printer test is the best approval basis for a new construction.",
    },
    {
      q: "How should I choose an adhesive?",
      a: "Identify the real surface, surface energy, application temperature, service temperature, moisture, grease, dwell time and removal expectation. Test the proposed adhesive on the actual package before a bulk order when failure carries operational risk.",
    },
    {
      q: "Can chemical, forestry or regulatory documents be provided?",
      a: "The required evidence can be reviewed after the exact material and destination are known. Confirm the statement, document subject, issuer, date and evidence scope for the selected order material rather than relying on a general catalog claim.",
    },
    {
      q: "When is fanfold supply useful?",
      a: "Fanfold can reduce roll changes in some high-volume desktop workflows. Confirm the sheet size, gap, perforation, stack count, fold direction, printer feed path and carton protection before approval.",
    },
    {
      q: "Can labels and cartons use private-label artwork?",
      a: "Private-label programs can include roll labels, bags, cartons and pallet marks after the product specification, artwork versions, pack quantity, destination labels and repeat-order controls are defined.",
    },
    {
      q: "How are minimum order and production timing confirmed?",
      a: "They depend on the material, size, print coverage, number of artwork versions, packing, quantity and destination. Send the complete requirement and requested delivery window for an order-specific review.",
    },
  ],
  inquiry: {
    label: "B2B thermal label review",
    title: "Send the inputs that determine the right label",
    description:
      "Share the printer, dimensions, surface, environment, material route, quantity, packing and destination. The response can then identify missing tests, evidence and commercial inputs before quotation.",
    checklist: [
      "Printer model, DPI, print method, core, maximum OD and feed direction",
      "Label width, height, gap, roll count or fanfold stack and winding",
      "Surface, temperature, moisture, grease, dwell and removal requirement",
      "Quantity, artwork, packing, destination, evidence and requested delivery window",
    ],
    productName: "Thermal Labels",
    initialMessage:
      "Company and buyer type:\nPrinter model and DPI:\nDirect thermal or thermal transfer:\nLabel width, height and gap:\nCore, maximum OD and winding:\nSurface and application temperature:\nMoisture, grease, abrasion or removal requirement:\nMaterial and adhesive preference:\nBarcode or print requirement:\nEstimated quantity by version:\nBlank or custom printed:\nPacking and private-label requirement:\nRequired evidence or documents:\nDestination country / port:\nRequested delivery window:\nCurrent supply problem:",
  },
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Thermal Labels", path: "/products/thermal-labels" },
  ],
  relatedPrograms: [
    { label: "Shipping Labels", href: "/products/shipping-labels" },
    { label: "Barcode Labels", href: "/products/barcode-labels" },
    { label: "Linerless Labels", href: "/products/linerless-labels" },
    { label: "Custom Printed Labels", href: "/products/custom-printed-thermal-labels" },
  ],
} satisfies ProductCategoryConfig;
