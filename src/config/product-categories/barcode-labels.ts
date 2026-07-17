import type { ProductCategoryConfig } from "@/components/products/category/product-category-types";
import { labelSizes } from "@/config/navigation";

const LABEL_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-labels-FgJ5U8LZDHPF5nwmD6Uqa5.webp";
const RETAIL_IMAGE =
  "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&q=82";
const WAREHOUSE_IMAGE =
  "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=82";
const MARKETPLACE_IMAGE =
  "https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=1200&q=82";
const LOGISTICS_IMAGE =
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=82";
const INDUSTRIAL_IMAGE =
  "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&q=82";
const COLD_CHAIN_IMAGE =
  "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=82";
const CUSTOM_IMAGE =
  "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=82";
const QUALITY_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/factory-coating-line-Rfrrgy9ZbXu6C6rJRRsG37.webp";

const sizeUses: Record<string, string> = {
  "4x6in": "Carton, pallet, logistics and large-format barcode panels",
  "2x1in": "SKU, UPC, FNSKU, shelf and compact inventory labels",
  "3x2in": "Bin, inventory, carton and general product identification",
  "4x3in": "Larger carton, asset and warehouse handling labels",
  "2x4in": "Narrow routing, address and vertical barcode layouts",
  "1x1in": "Small-item, jewelry, electronic component and compact codes",
};

export const barcodeLabelsCategoryConfig = {
  kind: "category",
  canonicalPath: "/products/barcode-labels",
  categoryName: "Barcode & Variable-Data Labels",
  alternateNames: [
    "Thermal Barcode Labels",
    "SKU Labels",
    "Inventory Barcode Labels",
    "FNSKU Labels",
    "Asset and Component Labels",
  ],
  audience:
    "Retailers, marketplace sellers, 3PLs, warehouses, manufacturers, asset-management teams, packaging distributors and in-house variable-data printing operations",
  metadata: {
    title: "Barcode Labels Manufacturer | SKU, Warehouse & OEM",
    description:
      "Source barcode labels by data, printer, size, surface, environment and scan workflow. Compare SKU, FNSKU, warehouse, pallet, asset and durable label programs.",
    keywords: [
      "barcode labels manufacturer",
      "thermal barcode labels",
      "SKU labels",
      "inventory barcode labels",
      "warehouse labels",
      "FNSKU labels",
      "pallet barcode labels",
      "asset tracking labels",
      "custom barcode labels",
      "OEM barcode label supplier",
    ],
  },
  hero: {
    image: {
      slot: "barcode-labels:hero",
      fallback: LABEL_IMAGE,
      alt: "Barcode label rolls specified for retail warehouse and manufacturing workflows",
    },
    badge: "B2B barcode-label catalog",
    titleBefore: "Barcode Labels for ",
    titleHighlight: "SKU, Warehouse and Asset Workflows",
    description:
      "A readable barcode depends on the data, code design, printer, media, surface, environment and scanner workflow. Define those inputs before selecting a label construction or approving repeat supply.",
    trustBadges: [
      "Direct thermal and transfer review",
      "Roll and fanfold construction",
      "Print and scan test planning",
      "OEM and multi-SKU control",
    ],
    facts: [
      { value: "7 routes", label: "Barcode application programs" },
      { value: "6 formats", label: "Reference dimensions" },
      { value: "4 stages", label: "Qualification chain" },
      { value: "B2B", label: "Bulk and repeat supply" },
    ],
    primaryCta: { label: "Browse Barcode Programs", href: "#product-families" },
    secondaryCta: { label: "Request a Scan Review", href: "#inquiry" },
  },
  jumpLinks: [
    { label: "Product Series", href: "#product-families" },
    { label: "Formats", href: "#popular-sizes" },
    { label: "Applications", href: "#applications" },
    { label: "Selection Guide", href: "#selection-guide" },
    { label: "Scan Testing", href: "#evidence" },
    { label: "FAQ", href: "#faq" },
    { label: "Quote", href: "#inquiry" },
  ],
  sectionCopy: {
    families: {
      label: "Barcode application matrix",
      title: "Choose by identification and scan job",
      description:
        "A retail UPC label, marketplace FNSKU, warehouse bin label and long-life asset label use different data, print, surface and retention requirements. Start with the workflow, not a generic material name.",
    },
    sizes: {
      label: "Reference barcode formats",
      title: "Use dimensions to route the request, then confirm the full media build",
      description:
        "The same nominal size can use different core, roll diameter, gap, winding, face stock, ribbon and adhesive. Open the closest format, then qualify the printer and scan workflow.",
    },
    applications: {
      label: "Operational scan workflows",
      title: "Match the barcode label to where it is printed, applied and scanned",
      description:
        "Retail, marketplace, warehouse, pallet, component and cold-chain workflows place different demands on code size, contrast, adhesion, durability and data control.",
    },
    selection: {
      label: "Four-stage qualification chain",
      title: "Connect the data, printer, application and scanner",
      description:
        "A barcode label is approved as a system. Define the code and print path first, then the surface and environment, followed by scan acceptance and repeat-order control.",
    },
  },
  families: [
    {
      id: "custom-variable",
      label: "Core data program",
      title: "Custom Barcode & Variable-Data Labels",
      description:
        "Blank, preprinted or custom printed labels for approved SKU, UPC, EAN, FNSKU, QR, batch, date and serial workflows.",
      buyerFit:
        "Best for operations that need a controlled data source, print area, code design, artwork revision, version separation and repeat packing specification.",
      href: "#inquiry",
      linkLabel: "Define a barcode label program",
      featured: true,
      image: {
        slot: "barcode-labels:series:custom-variable",
        fallback: CUSTOM_IMAGE,
        alt: "Custom barcode and variable data labels for a controlled SKU program",
      },
    },
    {
      id: "sku-retail",
      label: "Retail identification",
      title: "SKU, UPC & Retail Barcode Labels",
      description:
        "Compact labels for price, shelf, product and point-of-sale identification using approved retail codes.",
      buyerFit:
        "Confirm code type, data owner, print size, quiet zone, printer, product surface, scan distance and removal expectation.",
      href: "/products/thermal-labels/2x1in",
      linkLabel: "Review 2 x 1 inch labels",
      image: {
        slot: "barcode-labels:series:sku-retail",
        fallback: RETAIL_IMAGE,
        alt: "SKU and UPC retail barcode labels on products and shelves",
      },
    },
    {
      id: "warehouse-inventory",
      label: "Warehouse operations",
      title: "Warehouse, Bin & Inventory Labels",
      description:
        "Barcode labels for receiving, putaway, bin location, picking, cycle counting and inventory control.",
      buyerFit:
        "Confirm printer fleet, scan distance, bin or carton surface, label life, abrasion, replenishment and data ownership.",
      href: "/products/thermal-labels/3x2in",
      linkLabel: "Review 3 x 2 inch labels",
      image: {
        slot: "barcode-labels:series:warehouse",
        fallback: WAREHOUSE_IMAGE,
        alt: "Warehouse bin and inventory barcode labels used in picking",
      },
    },
    {
      id: "fnsku-marketplace",
      label: "Marketplace fulfillment",
      title: "FNSKU & Marketplace Labels",
      description:
        "Item-level labels for marketplace identification and fulfillment workflows using buyer-provided data and placement rules.",
      buyerFit:
        "Confirm marketplace specification, SKU mapping, item surface, existing-code coverage, printer, packing workflow and version quantities.",
      href: "#inquiry",
      linkLabel: "Review an FNSKU workflow",
      image: {
        slot: "barcode-labels:series:fnsku",
        fallback: MARKETPLACE_IMAGE,
        alt: "FNSKU and marketplace barcode labels for fulfillment items",
      },
    },
    {
      id: "carton-pallet",
      label: "Logistics units",
      title: "Carton, Case & Pallet Barcode Labels",
      description:
        "Larger labels for carton, case, pallet, routing and warehouse handoff identification.",
      buyerFit:
        "Confirm code type, scan distance, corrugated or stretch-film surface, print method, label position, handling and shipping environment.",
      href: "/products/thermal-labels/4x6in",
      linkLabel: "Review 4 x 6 inch labels",
      image: {
        slot: "barcode-labels:series:carton-pallet",
        fallback: LOGISTICS_IMAGE,
        alt: "Carton and pallet barcode labels for logistics handling",
      },
    },
    {
      id: "asset-component",
      label: "Longer-life identification",
      title: "Asset, Component & Serial Labels",
      description:
        "Variable or preprinted identification for equipment, components, bins and serialized manufacturing records.",
      buyerFit:
        "Confirm service life, surface, abrasion, oil or chemical contact, temperature, ribbon, code size and traceability system.",
      href: "#inquiry",
      linkLabel: "Review an asset label",
      image: {
        slot: "barcode-labels:series:asset",
        fallback: INDUSTRIAL_IMAGE,
        alt: "Asset component and serial barcode labels for manufacturing",
      },
    },
    {
      id: "cold-durable",
      label: "Condition-specific route",
      title: "Cold-Chain & Durable Barcode Labels",
      description:
        "Direct-thermal or transfer constructions reviewed for low temperature, condensation, grease, abrasion or other defined exposure.",
      buyerFit:
        "No one label covers every condition. Define application temperature, service temperature, moisture, surface, dwell and scan acceptance before testing.",
      href: "#inquiry",
      linkLabel: "Define the operating condition",
      image: {
        slot: "barcode-labels:series:cold-durable",
        fallback: COLD_CHAIN_IMAGE,
        alt: "Cold chain and durable barcode labels under condition testing",
      },
    },
  ],
  sizes: labelSizes.map((size) => ({
    slug: size.slug,
    label: size.label,
    market: size.markets ?? "Global",
    badge: size.badge,
    use: sizeUses[size.slug] ?? "General barcode and variable-data identification",
    href: `/products/thermal-labels/${size.slug}`,
  })),
  applications: [
    {
      id: "retail",
      title: "Retail SKU and price workflows",
      description:
        "Item, shelf and price labels used for product lookup, POS scanning and inventory control.",
      confirm:
        "code type, data source, printer, label size, product or shelf surface, scan distance and removal behavior",
      href: "/products/thermal-labels/2x1in",
      linkLabel: "Review retail barcode labels",
      image: {
        slot: "barcode-labels:applications:retail",
        fallback: RETAIL_IMAGE,
        alt: "Retail SKU and price barcode scanning workflow",
      },
    },
    {
      id: "marketplace",
      title: "Marketplace and FNSKU preparation",
      description:
        "Item-level identification for seller preparation, relabeling and fulfillment handoff.",
      confirm:
        "marketplace rules, SKU mapping, existing barcode coverage, item surface, printer, packing step and version quantity",
      href: "#inquiry",
      linkLabel: "Review marketplace preparation",
      image: {
        slot: "barcode-labels:applications:marketplace",
        fallback: MARKETPLACE_IMAGE,
        alt: "Marketplace items prepared with FNSKU barcode labels",
      },
    },
    {
      id: "warehouse",
      title: "Warehouse receiving, picking and bins",
      description:
        "Location, inventory and handling labels for warehouse and 3PL workflows.",
      confirm:
        "printer fleet, WMS data, label position, bin or carton surface, scan distance, abrasion and replenishment plan",
      href: "/products/thermal-labels/3x2in",
      linkLabel: "Review warehouse labels",
      image: {
        slot: "barcode-labels:applications:warehouse",
        fallback: WAREHOUSE_IMAGE,
        alt: "Warehouse picking and bin identification using barcode labels",
      },
    },
    {
      id: "pallet-logistics",
      title: "Carton, pallet and logistics handoff",
      description:
        "Large-format barcode and routing labels for cases, cartons, pallets and dispatch operations.",
      confirm:
        "code standard, scan range, corrugated or film surface, application position, handling, storage and shipping exposure",
      href: "/products/thermal-labels/4x6in",
      linkLabel: "Review carton and pallet labels",
      image: {
        slot: "barcode-labels:applications:pallet",
        fallback: LOGISTICS_IMAGE,
        alt: "Pallet and carton barcode labels in a logistics workflow",
      },
    },
    {
      id: "manufacturing",
      title: "Manufacturing and asset traceability",
      description:
        "Serial, work-in-process, component and asset labels for longer-life identification.",
      confirm:
        "traceability system, printer and ribbon, component surface, service life, abrasion, chemicals, heat and scan requirement",
      href: "#inquiry",
      linkLabel: "Review manufacturing traceability",
      image: {
        slot: "barcode-labels:applications:manufacturing",
        fallback: INDUSTRIAL_IMAGE,
        alt: "Manufacturing component and asset barcode traceability",
      },
    },
    {
      id: "cold-chain",
      title: "Food, cold-chain and healthcare handling",
      description:
        "Condition-specific barcode labels for chilled, frozen, moist or controlled handling workflows.",
      confirm:
        "package surface, application and service temperature, condensation, grease, dwell, removal, code size and evidence scope",
      href: "#inquiry",
      linkLabel: "Review a cold-chain condition",
      image: {
        slot: "barcode-labels:applications:cold-chain",
        fallback: COLD_CHAIN_IMAGE,
        alt: "Cold chain barcode labels used on packaged products",
      },
    },
  ],
  selectionSteps: [
    {
      step: "01",
      title: "Data and code design",
      description: "Define the data owner, barcode type and scan requirement before sizing the label.",
      inputs: [
        "SKU, UPC, EAN, FNSKU, GS1, QR or serial data",
        "Code dimensions, orientation and quiet zone",
        "Static, database-driven or sequential data",
        "Scanner type, distance and acceptance target",
      ],
    },
    {
      step: "02",
      title: "Printer and media build",
      description: "Match the label to the exact device and print technology.",
      inputs: [
        "Printer model, DPI and print speed",
        "Direct thermal or ribbon type",
        "Core, maximum OD, gap, mark and winding",
        "Roll, fanfold or sheet supply",
      ],
    },
    {
      step: "03",
      title: "Surface and environment",
      description: "Qualify adhesion and image life on the production item or package.",
      inputs: [
        "Paper, board, film, plastic, glass or metal",
        "Flat, curved, textured or flexible surface",
        "Application and service temperature",
        "Moisture, grease, abrasion, chemicals and dwell",
      ],
    },
    {
      step: "04",
      title: "Test and repeat control",
      description: "Record the proof, scan result, material and packing used for approval.",
      inputs: [
        "Print and scan sample criteria",
        "Application and removal observations",
        "Artwork, data file and quantity by version",
        "Roll, carton, pallet and reorder identification",
      ],
    },
  ],
  evidence: {
    image: {
      slot: "barcode-labels:quality",
      fallback: QUALITY_IMAGE,
      alt: "Barcode label print scan and quality-control review",
    },
    label: "Data-to-scan qualification",
    title: "Approve the complete print, application and scan chain",
    description:
      "Barcode performance is a result from a recorded setup, not a general label promise. Approve the data, code layout, printer settings, media, surface, environment and scanner together.",
    checks: [
      {
        title: "Data and code check",
        description:
          "Verify encoded data, symbology, dimensions, orientation, quiet zone, human-readable text and artwork position.",
      },
      {
        title: "Print check",
        description:
          "Record printer, DPI, speed, darkness, ribbon or direct-thermal media, sensing, feed and die-cut position.",
      },
      {
        title: "Application check",
        description:
          "Test the actual surface, curvature, preparation, temperature, dwell, abrasion and removal requirement.",
      },
      {
        title: "Scan and repeat check",
        description:
          "Record scanner, distance, angle, lighting, pass criteria, material code, artwork version and approved packing reference.",
      },
    ],
    note:
      "A passed sample applies to the recorded setup. Changing the code size, printer, DPI, speed, ribbon, material, surface, environment or scanner can require another validation.",
  },
  faq: [
    {
      q: "What information is needed for a barcode label quotation?",
      a: "Send the barcode type and data source, finished size, printer model and DPI, direct-thermal or ribbon method, core, roll OD, gap, winding, item or package surface, environment, scanner workflow, quantity by version, packing and destination.",
    },
    {
      q: "How do I choose the right barcode label size?",
      a: "Size follows the barcode type, encoded data, required code dimensions, quiet zone, human-readable text, printer DPI, item panel and scan distance. Use common dimensions as a starting point, then test the actual printed code in the intended workflow.",
    },
    {
      q: "Are barcode labels compatible with Zebra, TSC, Honeywell or other printers?",
      a: "Compatibility must be confirmed from the exact model, DPI, print method, media width, core, maximum roll diameter, gap or mark, winding and feed path. A brand name alone does not confirm that a roll fits or prints correctly.",
    },
    {
      q: "Will every printed barcode scan reliably?",
      a: "No universal result can be promised. Scan performance depends on encoded data, symbology, code size, quiet zone, contrast, printer settings, surface, curvature, damage, scanner, distance, angle and lighting. Approve a representative sample against defined criteria.",
    },
    {
      q: "Should I use direct thermal or thermal transfer labels?",
      a: "Direct thermal avoids a ribbon and can suit defined shorter-life workflows. Thermal transfer uses a matched ribbon and can support longer retention or demanding handling. Choose from the printer, required life, surface, abrasion, heat, moisture and chemical exposure.",
    },
    {
      q: "Can you supply FNSKU and marketplace labels?",
      a: "Yes. Provide the marketplace specification, SKU-to-code mapping, item surface, existing barcode coverage rule, printer, label placement, quantity by version and packing workflow. The seller or data owner remains responsible for approved code assignment and item mapping.",
    },
    {
      q: "Which adhesive is suitable for warehouse, freezer or asset labels?",
      a: "Adhesive selection depends on the actual surface, surface energy, texture, application temperature, service temperature, moisture, grease, dwell and removal expectation. Test the proposed construction on the production surface before bulk approval where failure creates operational risk.",
    },
    {
      q: "How are minimum order and production timing confirmed?",
      a: "They depend on material, size, print method, custom data, number of versions, quantity, packing and destination. Send the requested delivery window and quantity by SKU for an order-specific review.",
    },
  ],
  inquiry: {
    label: "B2B barcode-label review",
    title: "Send the data, printer, surface and scan inputs",
    description:
      "A complete request helps identify code-design, printer-fit, material, adhesive, sample, scan and packing questions before quotation.",
    checklist: [
      "Barcode type, data source, code dimensions, scanner and pass criteria",
      "Printer model, DPI, print method, core, roll OD, gap, winding and speed",
      "Surface, application environment, service life, abrasion and removal requirement",
      "Quantity by version, artwork or data file, packing, destination and delivery window",
    ],
    productName: "Barcode & Variable-Data Labels",
    initialMessage:
      "Company and buyer type:\nBarcode type and data source:\nCode dimensions and scan requirement:\nPrinter model and DPI:\nDirect thermal or ribbon type:\nLabel width, height and gap:\nCore, maximum roll OD and winding:\nPrint speed or throughput:\nApplication surface and temperature:\nMoisture, grease, abrasion or chemical exposure:\nScanner, distance and pass criteria:\nEstimated quantity by version:\nArtwork, database or sequential data requirement:\nSample and validation requirement:\nPacking and private-label requirement:\nDestination country / port:\nRequested delivery window:\nCurrent scan or supply problem:",
    responseNote:
      "We will review the barcode workflow, identify missing qualification inputs and confirm the next quotation step.",
  },
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Barcode Labels", path: "/products/barcode-labels" },
  ],
  relatedPrograms: [
    { label: "Product & Packaging Labels", href: "/products/product-labels" },
    { label: "Thermal Labels", href: "/products/thermal-labels" },
    { label: "Shipping Labels", href: "/products/shipping-labels" },
    { label: "Custom Printed Labels", href: "/products/custom-printed-thermal-labels" },
  ],
} satisfies ProductCategoryConfig;
