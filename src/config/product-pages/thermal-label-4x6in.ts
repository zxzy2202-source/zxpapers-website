import type { ProductDetailConfig } from "@/components/products/templates/product-detail-types";

const SHIPPING_LABEL_IMAGE = "/images/shipping-labels/shipping-labels-hero.webp";
const THERMAL_LABEL_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-labels-FgJ5U8LZDHPF5nwmD6Uqa5.webp";
const QUALITY_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/factory-coating-line-Rfrrgy9ZbXu6C6rJRRsG37.webp";
const WAREHOUSE_IMAGE =
  "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80";
const PACKING_IMAGE =
  "/uploads/images/1778755819135-456d030e-f44b-453b-86bb-69c736ef4e12-32b6c697519b48fc814b3a4712323de2.webp";

export const thermalLabel4x6Config = {
  kind: "detail",
  slug: "4x6in",
  canonicalPath: "/products/thermal-labels/4x6in",
  productName: "4 x 6 in Direct Thermal Shipping Labels",
  categoryName: "Direct thermal shipping and parcel labels",
  metadata: {
    title: "4x6 Thermal Shipping Labels Manufacturer | Bulk Supply",
    description:
      "Source 4x6 thermal shipping labels by printer, roll or fanfold format, adhesive, parcel surface, barcode test, packing and repeat-order specification.",
    keywords: [
      "4x6 thermal shipping labels manufacturer",
      "4x6 direct thermal labels wholesale",
      "100x150mm shipping labels bulk",
      "4x6 shipping label rolls OEM",
      "4x6 fanfold shipping labels",
      "warehouse shipping labels supplier",
      "private label 4x6 thermal labels",
      "4x6 barcode labels for 3PL",
    ],
  },
  images: {
    hero: {
      slot: "thermal-label-4x6in:hero",
      fallback: SHIPPING_LABEL_IMAGE,
      alt: "4 x 6 inch direct thermal shipping labels in roll and fanfold formats",
    },
    application: {
      slot: "thermal-label-4x6in:application",
      fallback: WAREHOUSE_IMAGE,
      alt: "Warehouse packing station using 4 x 6 thermal shipping labels",
    },
    quality: {
      slot: "thermal-label-4x6in:quality",
      fallback: QUALITY_IMAGE,
      alt: "4 x 6 thermal label print, die-cut and adhesive quality review",
    },
    risk: {
      slot: "thermal-label-4x6in:risk",
      fallback: WAREHOUSE_IMAGE,
      alt: "Parcel label workflow reviewed for feed, scan and adhesion risks",
    },
    specification: {
      slot: "thermal-label-4x6in:specification",
      fallback: THERMAL_LABEL_IMAGE,
      alt: "4 x 6 thermal label roll, core, gap and material specification",
    },
    workflow: {
      slot: "thermal-label-4x6in:workflow",
      fallback: QUALITY_IMAGE,
      alt: "Thermal shipping label sample and bulk-order approval workflow",
    },
    faq: {
      slot: "thermal-label-4x6in:faq",
      fallback: PACKING_IMAGE,
      alt: "Export cartons and repeat-order packing for 4 x 6 shipping labels",
    },
  },
  hero: {
    badge: "B2B 3PL & Warehouse Supply | 101.6 x 152.4 mm",
    title: "4 x 6 in Thermal Shipping Labels for 3PL & Warehouse Supply",
    highlight: "3PL & Warehouse Supply",
    description:
      "For fulfillment operators, overseas warehouses, distributors and label-system suppliers. Approve the printer and feed format, label construction, parcel surface, scan test, packing and repeat-order reference before comparing bulk quotations.",
    primaryCta: { label: "Request a B2B Quote", href: "#inquiry" },
    secondaryCta: { label: "Request Samples", href: "#inquiry" },
  },
  facts: [
    { icon: "printer", label: "Printer review", value: "Model, DPI, sensing, feed path, core, OD and winding" },
    { icon: "roll", label: "Supply formats", value: "Roll or fanfold after equipment and packing approval" },
    { icon: "adhesive", label: "Surface review", value: "Board, film, recycled cartons, cold and dusty parcels" },
    { icon: "approval", label: "Order control", value: "Print, scan, adhesion, count, carton and repeat-order reference" },
  ],
  directAnswer: {
    label: "B2B buying answer",
    question: "What must be confirmed before sourcing 4 x 6 shipping labels in bulk?",
    answer:
      "A 4 x 6 in label defines a nominal 101.6 x 152.4 mm face size, not a complete supply specification. Bulk approval should also identify the printer and DPI, roll or fanfold feed, core and maximum OD, sensing gap or mark, face stock, liner, adhesive, parcel surface, operating environment, barcode test, label count, packing and destination.",
    checklist: [
      "Send the exact printer model, DPI, sensing method and current approved media reference.",
      "Choose roll or fanfold supply and confirm core, maximum OD, winding, stack and label count.",
      "Identify the carton, mailer, film, recycled board or other parcel surface and application conditions.",
      "Define barcode or QR content, scan workflow, packing, quantity by SKU and destination.",
    ],
  },
  supplyProgram: {
    label: "B2B fulfillment-media program",
    title: "Freeze the packing-station specification before the replenishment order",
    description:
      "The supply program connects printer loading, parcel adhesion and barcode output with carton packing, site allocation and repeat-order controls. Each option is confirmed against the approved sample and commercial specification.",
    buyers: [
      "3PL and overseas-warehouse operators standardizing packing stations",
      "E-commerce fulfillment teams preparing peak-season replenishment",
      "Label distributors and resellers building roll and fanfold ranges",
      "Printer, barcode and packaging integrators qualifying a media source",
    ],
    items: [
      {
        title: "Roll or fanfold construction",
        description: "Confirm printer, feed route, core, OD, winding, gap, liner, stack, label count and changeover method.",
        buyerValue: "Reduces loading, skipping, curling and unplanned media-change risk.",
      },
      {
        title: "Surface and adhesive review",
        description: "Match initial tack and final bond to board, film, recycled cartons, dust, cold, condensation and dwell time.",
        buyerValue: "Keeps the parcel label attached through the intended handling route.",
      },
      {
        title: "Print and scan sample",
        description: "Approve thermal response, text, barcode or QR contrast, quiet zone, die-cut position and scan method.",
        buyerValue: "Creates an equipment-specific approval record before volume release.",
      },
      {
        title: "Packing and reorder control",
        description: "Freeze inner protection, carton quantity, labels, pallet marks, site split, SKU and change-confirmation reference.",
        buyerValue: "Makes warehouse receiving and repeat replenishment easier to verify.",
      },
    ],
    note:
      "Minimum order, sample scope, production timing, roll or fanfold packing and delivery plan are confirmed after the final specification, quantity, artwork and destination are reviewed.",
  },
  problems: [
    {
      question: "Will the labels load, feed and sense correctly?",
      consequence:
        "The 4 x 6 face size does not confirm core, OD, winding, fanfold direction, gap, black mark, liner stiffness or media-path fit.",
      response:
        "Review the exact printer, DPI, sensor, feed format and current media, then run a loading and feeding sample where the change creates risk.",
    },
    {
      question: "Will the barcode or QR code scan in the real workflow?",
      consequence:
        "Thermal response, printer energy, DPI, code size, quiet zone, surface curvature and handling can reduce readable contrast.",
      response:
        "Approve the actual label design using the intended printer settings, code content, scanners and packing-station workflow.",
    },
    {
      question: "Will the label stay attached to the parcel?",
      consequence:
        "Recycled board, low-energy film, dust, cold, condensation and short application pressure can change tack and final bond.",
      response:
        "Record the parcel surface, application and service conditions, dwell time and handling route, then test the selected adhesive on the actual package.",
    },
    {
      question: "Are two 4 x 6 quotations actually equivalent?",
      consequence:
        "Face stock, adhesive coat, liner, gap, label count, core, OD, winding, fanfold stack and packing can differ behind the same size name.",
      response:
        "Compare the complete construction and packing specification instead of price per roll, stack or label alone.",
    },
    {
      question: "Will the media survive storage and peak-season handling?",
      consequence:
        "Heat, light, humidity, compression, carton damage and long storage can affect curling, blocking, adhesive behavior and thermal image quality.",
      response:
        "Define storage, turnover, route and arrival checks, then approve roll protection, fanfold cartons and pallet configuration for the destination.",
    },
    {
      question: "Will repeat orders match the approved sample?",
      consequence:
        "Uncontrolled material, adhesive, die-cut, count or packing changes can create new feed, scan, adhesion and receiving complaints.",
      response:
        "Use an approved master specification, sample reference, carton configuration, SKU and change-confirmation process for every reorder.",
    },
  ],
  specifications: [
    {
      title: "Label and printer specification",
      description: "Confirm dimensions and media handling with the printer documentation, current label or approved sample.",
      rows: [
        { label: "Nominal label size", value: "4 x 6 in / 101.6 x 152.4 mm", note: "Final width, length and tolerance belong in the approved specification." },
        { label: "Printer and DPI", value: "Confirm manufacturer, model, 203 / 300 / other DPI and media path." },
        { label: "Sensing", value: "Confirm gap, black mark or other supported sensing method." },
        { label: "Supply format", value: "Roll or fanfold after equipment and packing review." },
        { label: "Roll construction", value: "Confirm core ID, core width, maximum OD, winding and labels per roll." },
        { label: "Fanfold construction", value: "Confirm fold direction, stack count, perforation, carton opening and feed orientation." },
      ],
    },
    {
      title: "Material, adhesive and print review",
      description: "Select the construction from the parcel surface, environment and print workflow rather than the size alone.",
      rows: [
        { label: "Print route", value: "Direct thermal by selected face-stock grade and printer settings." },
        { label: "Face stock", value: "Confirm paper grade, basis, coating and thermal sensitivity." },
        { label: "Adhesive", value: "Permanent, high-tack, removable or temperature-specific route after application review." },
        { label: "Parcel surface", value: "Identify corrugated board, recycled carton, paper mailer, film, plastic or other substrate." },
        { label: "Environment", value: "Record application temperature, service temperature, dust, moisture, condensation and dwell time." },
        { label: "Variable data", value: "Confirm text, logo, barcode or QR design, quiet zone, DPI and scan acceptance method." },
      ],
    },
    {
      title: "Commercial, packing and approval inputs",
      description: "Connect the sample result to the SKU, carton, pallet, destination and repeat-order reference.",
      rows: [
        { label: "Quantity", value: "Required labels, rolls or fanfold stacks by SKU, site and delivery window." },
        { label: "Sample test", value: "Feed, sense, print, scan, peel, apply, dwell and handling checks on the intended equipment and parcel." },
        { label: "Inner protection", value: "Review wrap, bag, stack protection, dust control and moisture protection." },
        { label: "Carton", value: "Confirm roll or stack count, gross weight limit, labels, barcode, opening and destination marks." },
        { label: "Pallet and delivery", value: "Confirm pallet limits, warehouse receiving rules, site split, route and destination." },
        { label: "Repeat-order control", value: "Approved construction, sample, artwork, count, packing and change-confirmation reference." },
      ],
    },
  ],
  applications: [
    {
      title: "3PL and multi-client fulfillment",
      description:
        "Packing stations processing multiple carriers, carton types, daily volumes and client-specific replenishment rules.",
      confirm: "printer fleet, media format, parcel surfaces, code designs, daily throughput, site allocation and reorder points",
    },
    {
      title: "Overseas warehouses and cross-border fulfillment",
      description:
        "Import and local replenishment programs where carton protection, receiving labels and stable repeat specifications matter.",
      confirm: "destination, storage, route, carton count, pallet marks, delivery split, approved SKU and change process",
    },
    {
      title: "E-commerce packing operations",
      description:
        "Roll or fanfold labels for order processing, parcel identification and peak-volume shipping workflows.",
      confirm: "packing-station printer, throughput, changeover frequency, barcode scan, parcel mix and peak-season forecast",
    },
    {
      title: "Distributor and private-label supply",
      description:
        "Channel programs requiring multiple printer constructions, inner packs, cartons, artwork versions and local SKU labels.",
      confirm: "target printer segment, roll and fanfold range, quantities, branding, carton data, pallet and destination",
    },
  ],
  workflow: [
    { step: "01", title: "Receive the RFQ", description: "Collect buyer type, printer, current label, format, parcel surface, volume, packing, destination and delivery window." },
    { step: "02", title: "Review the packing station", description: "Assess printer, DPI, sensing, roll or fanfold feed, throughput, changeover and scanning workflow." },
    { step: "03", title: "Freeze the label construction", description: "Confirm dimensions, face stock, adhesive, liner, gap, core, OD, winding or fanfold stack." },
    { step: "04", title: "Approve print and adhesion tests", description: "Define code design, print settings, scanner, parcel surface, application conditions, dwell and acceptance result." },
    { step: "05", title: "Review packing and branding", description: "Confirm inner protection, carton quantity, labels, artwork, pallet marks, site split and destination data." },
    { step: "06", title: "Release the bulk order", description: "Record the approved sample, quantity, commercial terms, packing, documents and confirmed production schedule." },
    { step: "07", title: "Control replenishment", description: "Use the approved construction, sample, count, carton and change-confirmation reference for repeat orders." },
  ],
  evidence: {
    label: "Quality and evidence boundary",
    title: "Approve the equipment and parcel test, not a universal compatibility claim",
    description:
      "A credible approval record identifies the printer, media construction, barcode design, parcel surface, test conditions, packing and acceptance result. It does not infer compatibility from the 4 x 6 size name or a brand list.",
    checks: [
      "Loading, feeding, sensing and cutting result on the intended printer and supply format",
      "Thermal print contrast and barcode or QR result using the intended content, DPI and scanner",
      "Adhesion result on the actual parcel surface after the required dwell and handling route",
      "Die-cut position, gap, liner, count, winding or fanfold-stack and carton verification",
      "Approved material, packing, SKU and change-control reference for repeat orders",
    ],
    note:
      "Carrier acceptance, printer compatibility, scan performance, adhesive performance, image life, chemistry, sourcing and regulatory statements are separate claims. Confirm each one for the exact product, equipment, application, document and destination scope.",
  },
  faq: [
    {
      q: "What does 4 x 6 mean for a thermal shipping label?",
      a: "It describes a nominal 4 by 6 inch face size, equal to 101.6 by 152.4 mm. It does not confirm core, OD, roll or fanfold format, gap, face stock, adhesive, liner, label count, printer fit or packing.",
    },
    {
      q: "Will any 4 x 6 label work in any shipping-label printer?",
      a: "No. Confirm the printer model, DPI, sensing, roll holder or fanfold path, core, maximum OD, winding and media construction. Use the printer documentation, current approved media or a sample test as the fit reference.",
    },
    {
      q: "Should I choose rolls or fanfold 4 x 6 labels?",
      a: "Choose from the printer feed route, available space, changeover frequency, daily throughput, operator workflow and packing preference. Confirm the exact roll build or fanfold stack before ordering.",
    },
    {
      q: "How should adhesive be selected for shipping labels?",
      a: "Identify the parcel surface, application temperature, service temperature, dust, moisture, condensation, dwell time and handling route. Test the selected adhesive on the actual carton, mailer or film when performance risk matters.",
    },
    {
      q: "How is barcode or QR readability approved?",
      a: "Print the real code design using the intended printer, DPI, speed and energy, then scan it with the actual workflow. Record code size, quiet zone, contrast and acceptance method with the sample result.",
    },
    {
      q: "What information is needed for a 4 x 6 label quotation?",
      a: "Send the printer and DPI, roll or fanfold format, core or stack, OD, winding, sensing, face stock, adhesive, parcel surface, label count, quantity, packing, destination and sample requirement.",
    },
    {
      q: "Can 4 x 6 labels use private-label roll and carton branding?",
      a: "Private-label roll, stack, inner-pack and carton requirements can be reviewed after the product construction, artwork versions, count, destination labels and repeat-order controls are defined.",
    },
    {
      q: "Should samples be tested before bulk production?",
      a: "Sample testing is recommended when the printer, feed format, barcode design, parcel surface, adhesive, cold conditions or packing construction is new or creates material risk.",
    },
    {
      q: "What is the minimum order for 4 x 6 shipping labels?",
      a: "The minimum order depends on the material, adhesive, roll or fanfold construction, artwork, packing and destination. Send the estimated quantity by SKU so the production and packing basis can be confirmed.",
    },
    {
      q: "How are production and delivery timing confirmed?",
      a: "Timing depends on the approved construction, sample scope, artwork, quantity, packing and destination. Include the requested delivery window in the RFQ for an order-specific schedule.",
    },
  ],
  inquiry: {
    label: "B2B quotation request",
    title: "Request a 4 x 6 shipping-label supply review",
    description:
      "Send the packing-station equipment, media construction, parcel surface, scan workflow, volume, packing and destination. We will identify the missing sample and approval inputs before quotation.",
    checklist: [
      "Company, buyer type, printer model, DPI, sensing and current approved media",
      "Roll or fanfold, core or stack, OD, winding, gap, face stock and adhesive",
      "Parcel surface, environment, barcode or QR design, scanner and sample requirement",
      "Quantity by SKU, private-label packing, site split, destination and requested window",
    ],
    initialMessage:
      "Company and buyer type (3PL / warehouse / distributor / integrator):\nPrinter model and DPI:\nCurrent label or media reference:\nNominal size: 4 x 6 in / 101.6 x 152.4 mm\nRoll or fanfold supply:\nCore, maximum roll OD or fanfold stack:\nWinding, gap, black mark or sensing method:\nFace stock and liner requirement:\nAdhesive behavior required:\nParcel surface and dwell time:\nTemperature, dust, moisture or condensation:\nBarcode / QR design and scanner workflow:\nEstimated order quantity by SKU:\nSample and approval requirement:\nRoll, stack, inner-pack, carton and pallet packing:\nPrivate-label artwork or carton data:\nDestination country / warehouse:\nRequested delivery window:\nCurrent feeding, scanning, adhesion or supply problem:",
    productName: "4 x 6 in direct thermal shipping labels",
  },
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Thermal Labels", path: "/products/thermal-labels" },
    { name: "4 x 6 in Shipping Labels", path: "/products/thermal-labels/4x6in" },
  ],
  relatedLinks: [
    { label: "Shipping Labels", href: "/products/shipping-labels" },
    { label: "Thermal Labels", href: "/products/thermal-labels" },
    { label: "Barcode Labels", href: "/products/barcode-labels" },
    { label: "OEM Custom Printing", href: "/oem/custom-printing" },
  ],
  relatedProducts: [
    {
      id: "shipping-labels",
      label: "Broader fulfillment range",
      title: "Shipping Labels",
      description:
        "Review roll and fanfold parcel labels by printer, throughput, parcel surface, adhesive, packing and replenishment workflow.",
      buyerFit: "Best for 3PL and warehouse buyers comparing multiple supply formats or site requirements.",
      href: "/products/shipping-labels",
      linkLabel: "View shipping-label programs",
      image: {
        slot: "thermal-label-4x6in:related-shipping",
        fallback: SHIPPING_LABEL_IMAGE,
        alt: "Roll and fanfold shipping labels for warehouse fulfillment",
      },
    },
    {
      id: "barcode-labels",
      label: "Variable-data workflow",
      title: "Barcode & Variable-Data Labels",
      description:
        "Source SKU, carton, pallet, warehouse and asset labels by data, printer, surface, environment and scan workflow.",
      buyerFit: "Best when the project extends beyond parcel labels into warehouse and inventory identification.",
      href: "/products/barcode-labels",
      linkLabel: "Review barcode-label programs",
      image: {
        slot: "thermal-label-4x6in:related-barcode",
        fallback: THERMAL_LABEL_IMAGE,
        alt: "Barcode and variable-data thermal labels for warehouse operations",
      },
    },
    {
      id: "custom-printed",
      label: "OEM & private label",
      title: "Custom Printed Thermal Labels",
      description:
        "Develop preprinted labels, roll identification and channel packing from approved artwork and application requirements.",
      buyerFit: "Best for distributors, private-label brands and multilingual packing programs.",
      href: "/products/custom-printed-thermal-labels",
      linkLabel: "Explore custom printed labels",
      image: {
        slot: "thermal-label-4x6in:related-custom",
        fallback: THERMAL_LABEL_IMAGE,
        alt: "Custom printed thermal labels for OEM and private-label supply",
      },
    },
  ],
} satisfies ProductDetailConfig;
