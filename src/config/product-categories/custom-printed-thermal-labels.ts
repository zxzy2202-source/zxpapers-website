import type { ProductCategoryConfig } from "@/components/products/category/product-category-types";
import { labelSizes } from "@/config/navigation";

const LABEL_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-labels-FgJ5U8LZDHPF5nwmD6Uqa5.webp";
const BRAND_IMAGE =
  "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=82";
const LOGISTICS_IMAGE =
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=82";
const WAREHOUSE_IMAGE =
  "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=82";
const FOOD_IMAGE =
  "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=82";
const FILLING_LINE_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/factory-coating-line-Rfrrgy9ZbXu6C6rJRRsG37.webp";
const OEM_IMAGE =
  "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=1200&q=82";

const sizeUses: Record<string, string> = {
  "4x6in": "Branded shipping, carton and large information labels",
  "2x1in": "Retail SKU, price, barcode and compact product labels",
  "3x2in": "Product, inventory and general packaging labels",
  "4x3in": "Larger product-information and carton panels",
  "2x4in": "Narrow packaging, routing and vertical artwork layouts",
  "1x1in": "Small-item, component and compact identification labels",
};

export const customPrintedThermalLabelsCategoryConfig = {
  kind: "category",
  canonicalPath: "/products/custom-printed-thermal-labels",
  categoryName: "Custom Printed Thermal Labels",
  alternateNames: [
    "Preprinted Thermal Labels",
    "OEM Thermal Labels",
    "Branded Direct Thermal Labels",
    "Custom Printed Roll Labels",
    "Private-Label Thermal Labels",
  ],
  audience:
    "Brands, retailers, e-commerce operators, 3PLs, warehouses, manufacturers, co-packers, label distributors and OEM buyers that need static artwork with controlled variable-data printing or application",
  metadata: {
    title: "Custom Printed Thermal Labels Manufacturer | OEM",
    description:
      "Specify custom printed thermal labels by artwork, overprint method, material, adhesive, printer or applicator, roll build, proof and multi-SKU packing for repeat B2B supply.",
    keywords: [
      "custom printed thermal labels",
      "preprinted thermal labels",
      "OEM thermal label manufacturer",
      "custom printed direct thermal labels",
      "branded shipping labels",
      "custom barcode labels",
      "private label roll labels",
      "custom printed label rolls",
      "thermal transfer printed labels",
      "multi SKU label supplier",
    ],
  },
  hero: {
    image: {
      slot: "custom-printed-labels:hero",
      fallback: LABEL_IMAGE,
      alt: "Custom printed thermal label rolls prepared for B2B overprinting and application",
    },
    badge: "B2B printed-label program",
    titleBefore: "Custom Printed Thermal Labels Built for ",
    titleHighlight: "Overprint, Application and Reorders",
    description:
      "Combine approved static artwork with the variable data your operation prints later. We qualify the face stock, ink, adhesive, die-cut, printer or applicator, roll build, proof and version packing as one repeatable specification.",
    trustBadges: [
      "Direct thermal and transfer review",
      "Static print plus variable-data zones",
      "Roll, fanfold and applicator fit",
      "Artwork and multi-SKU control",
    ],
    facts: [
      { value: "7 routes", label: "Printed-label programs" },
      { value: "6 formats", label: "Reference dimensions" },
      { value: "4 stages", label: "Approval sequence" },
      { value: "B2B", label: "Bulk and repeat supply" },
    ],
    primaryCta: { label: "Browse Printing Programs", href: "#product-families" },
    secondaryCta: { label: "Request an Artwork Review", href: "#inquiry" },
  },
  jumpLinks: [
    { label: "Print Programs", href: "#product-families" },
    { label: "Formats", href: "#popular-sizes" },
    { label: "Applications", href: "#applications" },
    { label: "Approval Guide", href: "#selection-guide" },
    { label: "Proof & Testing", href: "#evidence" },
    { label: "FAQ", href: "#faq" },
    { label: "Quote", href: "#inquiry" },
  ],
  sectionCopy: {
    families: {
      label: "Printed-label program matrix",
      title: "Choose by print architecture and downstream job",
      description:
        "A branded shipping label, retail product label and automatic-applicator roll can share artwork but require different media, overprint areas, roll builds and approval tests. Start with the production workflow.",
    },
    sizes: {
      label: "Reference finished formats",
      title: "Use the size to start the review, not finish the specification",
      description:
        "The same nominal dimension can use a different core, outer diameter, winding, gap, face stock, adhesive and print-safe area. Open the closest format, then confirm the complete construction.",
    },
    applications: {
      label: "Print and application workflows",
      title: "Match the supplied print to where data is added and labels are applied",
      description:
        "E-commerce, retail, warehouse, food, filling-line and distributor programs create different artwork, overprint, adhesion, version and packing requirements.",
    },
    selection: {
      label: "Four-stage approval sequence",
      title: "Approve artwork, construction, equipment and repeat controls together",
      description:
        "Static print is only one part of the label. Define the variable-data process, application surface, equipment and packing before freezing the approved production reference.",
    },
  },
  families: [
    {
      id: "direct-thermal",
      label: "Core overprint route",
      title: "Preprinted Direct Thermal Labels",
      description:
        "Static logos, borders, instructions and fields supplied on direct-thermal media with planned areas for later variable-data printing.",
      buyerFit:
        "Best for operations that need a ribbon-free overprint step. Confirm printer model, heat settings, preprint coverage, thermal image zone, service life and storage conditions.",
      href: "#inquiry",
      linkLabel: "Review custom direct thermal labels",
      featured: true,
      image: {
        slot: "custom-printed-labels:series:direct-thermal",
        fallback: LABEL_IMAGE,
        alt: "Preprinted direct thermal labels with variable data print zones",
      },
    },
    {
      id: "thermal-transfer",
      label: "Ribbon overprint route",
      title: "Custom Printed Thermal Transfer Labels",
      description:
        "Preprinted paper or film labels reviewed for later ribbon printing where retention, handling or substrate needs exceed a defined direct-thermal workflow.",
      buyerFit:
        "Confirm printer, ribbon chemistry, face stock, finish, print area, required life and exposure. A ribbon and label should be tested as a matched system.",
      href: "#inquiry",
      linkLabel: "Review a transfer construction",
      image: {
        slot: "custom-printed-labels:series:thermal-transfer",
        fallback: WAREHOUSE_IMAGE,
        alt: "Custom printed thermal transfer labels reviewed with ribbon printing",
      },
    },
    {
      id: "product-packaging",
      label: "Brand and product content",
      title: "Printed Product & Packaging Labels",
      description:
        "Approved brand graphics, product information, multilingual copy and controlled fields for boxes, pouches, jars and other packaging.",
      buyerFit:
        "Confirm package material, shape, application method, finish, artwork versions, variable fields, exposure and required service life.",
      href: "/products/product-labels",
      linkLabel: "Review product label programs",
      image: {
        slot: "custom-printed-labels:series:product",
        fallback: BRAND_IMAGE,
        alt: "Custom printed product and packaging labels for brand programs",
      },
    },
    {
      id: "shipping",
      label: "E-commerce and logistics",
      title: "Branded Shipping & Routing Labels",
      description:
        "Preprinted sender, return, handling or brand elements with a clear area for routing, address and carrier data added later.",
      buyerFit:
        "Confirm carrier layout, printer, code area, carton or mailer surface, label size, packing-station workflow and scan test.",
      href: "/products/shipping-labels",
      linkLabel: "Review shipping labels",
      image: {
        slot: "custom-printed-labels:series:shipping",
        fallback: LOGISTICS_IMAGE,
        alt: "Branded shipping labels prepared for later routing data printing",
      },
    },
    {
      id: "barcode-variable",
      label: "Identification and data",
      title: "Preprinted Barcode & Variable-Data Labels",
      description:
        "Static graphics or fields combined with buyer-controlled SKU, UPC, QR, date, batch, serial or other variable information.",
      buyerFit:
        "Confirm who owns the data, which elements are supplied preprinted, printer DPI, code dimensions, quiet zone, scan workflow and version quantities.",
      href: "/products/barcode-labels",
      linkLabel: "Review barcode label programs",
      image: {
        slot: "custom-printed-labels:series:barcode-variable",
        fallback: WAREHOUSE_IMAGE,
        alt: "Preprinted barcode and variable data label workflow",
      },
    },
    {
      id: "machine-ready",
      label: "Automatic application",
      title: "Machine-Ready Custom Printed Roll Labels",
      description:
        "Printed roll labels specified for automatic or semi-automatic dispensing on filling, packing and product-labeling lines.",
      buyerFit:
        "Confirm applicator, web width, core, roll OD, winding, gap, sensor, liner, label presentation, line speed and container condition.",
      href: "/products/can-labels",
      linkLabel: "Review filling-line roll labels",
      image: {
        slot: "custom-printed-labels:series:machine-ready",
        fallback: FILLING_LINE_IMAGE,
        alt: "Machine-ready custom printed roll labels for an automatic applicator",
      },
    },
    {
      id: "oem-multi-sku",
      label: "Program and packing control",
      title: "OEM, Private-Label & Multi-SKU Programs",
      description:
        "Controlled artwork, roll identification, inner packing and carton separation for distributors and buyers managing many products, markets or brands.",
      buyerFit:
        "Confirm SKU list, artwork revision, quantity by version, shared construction, roll IDs, carton marks, private-label packing and reorder rules.",
      href: "/oem",
      linkLabel: "Review OEM supply",
      image: {
        slot: "custom-printed-labels:series:oem",
        fallback: OEM_IMAGE,
        alt: "OEM multi SKU printed label rolls separated for repeat supply",
      },
    },
  ],
  sizes: labelSizes.map((size) => ({
    slug: size.slug,
    label: size.label,
    market: size.markets ?? "Global",
    badge: size.badge,
    use: sizeUses[size.slug] ?? "General custom printed and variable-data labels",
    href: `/products/thermal-labels/${size.slug}`,
  })),
  applications: [
    {
      id: "ecommerce",
      title: "E-commerce shipping and returns",
      description:
        "Branded shipping, return and handling labels with protected space for later carrier and routing data.",
      confirm:
        "carrier layout, thermal printer, variable-data area, barcode, carton or mailer surface, packing-station workflow and scan criteria",
      href: "/products/shipping-labels",
      linkLabel: "Review an e-commerce workflow",
      image: {
        slot: "custom-printed-labels:applications:ecommerce",
        fallback: LOGISTICS_IMAGE,
        alt: "E-commerce packing station using branded thermal shipping labels",
      },
    },
    {
      id: "retail",
      title: "Retail products, price and promotion",
      description:
        "Preprinted brand and product elements combined with price, SKU, batch or promotional data added by the buyer.",
      confirm:
        "product or shelf surface, label size, printer, overprint field, removal expectation, barcode and artwork change frequency",
      href: "/products/product-labels",
      linkLabel: "Review retail product labels",
      image: {
        slot: "custom-printed-labels:applications:retail",
        fallback: BRAND_IMAGE,
        alt: "Retail product packaging with custom printed labels",
      },
    },
    {
      id: "warehouse",
      title: "Warehouse, inventory and carton handling",
      description:
        "Preprinted location, handling or company fields with variable inventory, lot, destination or routing data.",
      confirm:
        "WMS data, printer fleet, code area, bin or carton surface, scan distance, abrasion, retention and replenishment plan",
      href: "/products/barcode-labels",
      linkLabel: "Review warehouse identification",
      image: {
        slot: "custom-printed-labels:applications:warehouse",
        fallback: WAREHOUSE_IMAGE,
        alt: "Warehouse cartons and bins using custom printed variable data labels",
      },
    },
    {
      id: "food",
      title: "Food, deli and date-code workflows",
      description:
        "Brand, instruction or field printing combined with variable weight, price, date, ingredient or traceability information.",
      confirm:
        "printer or scale, package material, application temperature, condensation, grease, print fields, label life and evidence scope",
      href: "/products/product-labels",
      linkLabel: "Review food label inputs",
      image: {
        slot: "custom-printed-labels:applications:food",
        fallback: FOOD_IMAGE,
        alt: "Food packaging with preprinted thermal label fields",
      },
    },
    {
      id: "filling-line",
      title: "Filling, packing and automatic labeling lines",
      description:
        "Custom printed rolls controlled for reliable dispensing, label presentation and version changes on production equipment.",
      confirm:
        "applicator and sensor, container, web width, core, roll OD, winding, gap, liner, line speed, splice and roll change procedure",
      href: "/products/can-labels",
      linkLabel: "Review an applicator workflow",
      image: {
        slot: "custom-printed-labels:applications:filling-line",
        fallback: FILLING_LINE_IMAGE,
        alt: "Automatic filling and labeling line using custom printed rolls",
      },
    },
    {
      id: "oem-distributor",
      title: "OEM, distributor and private-label supply",
      description:
        "Repeat label programs with customer-controlled artwork, roll identity, branded packing and version-separated cartons.",
      confirm:
        "SKU and artwork matrix, quantity by version, shared material, proof authority, roll and carton IDs, private-label packing and destination",
      href: "/oem",
      linkLabel: "Review an OEM program",
      image: {
        slot: "custom-printed-labels:applications:oem",
        fallback: OEM_IMAGE,
        alt: "OEM custom printed label rolls prepared for distributor supply",
      },
    },
  ],
  selectionSteps: [
    {
      step: "01",
      title: "Artwork and print architecture",
      description: "Separate the static supplied print from the data your operation adds later.",
      inputs: [
        "Logo, text, colors, fields and approved artwork revision",
        "Static, sequential, database or on-demand content",
        "CMYK, spot-color or other defined print requirement",
        "Variable-data zones, barcode size and quiet areas",
      ],
    },
    {
      step: "02",
      title: "Material, overprint and surface",
      description: "Select the construction from the print method, package and operating condition.",
      inputs: [
        "Direct thermal or thermal transfer route",
        "Paper or film face stock and finish",
        "Actual package or item surface and shape",
        "Adhesion, removal, temperature and exposure requirements",
      ],
    },
    {
      step: "03",
      title: "Printer, applicator and roll build",
      description: "Record the physical inputs that determine feeding, sensing and dispensing.",
      inputs: [
        "Printer or applicator model, DPI and speed",
        "Core, maximum roll OD, web width and winding",
        "Gap, black mark, liner and label presentation",
        "Roll, fanfold or sheet packing format",
      ],
    },
    {
      step: "04",
      title: "Proof, version and reorder control",
      description: "Freeze the approved reference and identify every version through packing.",
      inputs: [
        "Artwork, color and overprint proof criteria",
        "Print, scan, adhesion and dispensing sample checks",
        "Quantity and revision by SKU or language",
        "Roll IDs, carton separation, packing and destination",
      ],
    },
  ],
  evidence: {
    image: {
      slot: "custom-printed-labels:quality",
      fallback: FILLING_LINE_IMAGE,
      alt: "Custom printed label proof overprint dispensing and repeat-order review",
    },
    label: "Proof-to-reorder control",
    title: "Approve more than the visible artwork",
    description:
      "A print proof confirms appearance, but production approval also needs the overprint, scan, die-cut, dispensing, adhesion and packing workflow. Record the approved inputs so a reorder refers to the same construction and version.",
    checks: [
      {
        title: "Artwork and color proof",
        description:
          "Confirm revision, dimensions, copy, color reference, trapping, overprint-safe area, finish and any visible registration criteria.",
      },
      {
        title: "Variable print and scan check",
        description:
          "Test the intended printer or ribbon, DPI, settings, barcode or text area and scan workflow on the supplied preprint.",
      },
      {
        title: "Die-cut, dispensing and adhesion check",
        description:
          "Confirm die-cut position, gap, liner release, winding, feed, label presentation and adhesion on the actual surface or equipment.",
      },
      {
        title: "Version and packing check",
        description:
          "Match artwork revision, quantity, roll identification, inner packing, carton marks and destination before release and reorder.",
      },
    ],
    note:
      "Color, barcode, food-contact, chemical-resistance and market-compliance statements apply only to the defined material, ink, construction, test method and document scope. Confirm those inputs for the order.",
  },
  faq: [
    {
      q: "What information is needed for a custom printed thermal label quotation?",
      a: "Send the finished size and shape, artwork, static and variable fields, printer or applicator, direct-thermal or transfer method, core, roll OD, gap, winding, package surface, environment, quantity by version, packing, destination and requested delivery window.",
    },
    {
      q: "What is the difference between blank and custom printed thermal labels?",
      a: "Blank labels receive all content in the buyer's printer. Custom printed labels arrive with approved static artwork or fields and can leave defined areas for later variable data. The supplied print and downstream print method must be qualified together.",
    },
    {
      q: "Can a label include our logo and still be printed later with a barcode or date?",
      a: "Yes, when the artwork reserves a suitable variable-data zone and the supplied ink, coating, face stock and downstream print method are compatible. Confirm printer model, DPI, ribbon if used, code size and scan criteria during proof approval.",
    },
    {
      q: "Should we use direct thermal or thermal transfer material?",
      a: "Direct thermal can suit defined ribbon-free workflows, while thermal transfer uses a matched ribbon and may suit longer retention or demanding handling. Choose from the printer, label life, surface, abrasion, heat, moisture and chemical exposure, then test the proposed system.",
    },
    {
      q: "Can you match CMYK or Pantone colors exactly?",
      a: "Send the artwork and target reference for a process and proof review. Perceived color depends on the substrate, ink system, finish, lighting and tolerance. Record the approved reference and acceptance method rather than relying on a screen value alone.",
    },
    {
      q: "Will the printed rolls fit our printer or automatic applicator?",
      a: "Fit depends on the exact model, media width, core, maximum roll diameter, winding, gap or mark, liner, sensor, feed path and label presentation. Provide the equipment specification and approve a representative roll where downtime creates risk.",
    },
    {
      q: "What are the minimum order and production time?",
      a: "They depend on material, size, print coverage, colors, tooling, number of artwork versions, quantity, proof route, packing and destination. Send quantity by SKU and the requested delivery window for an order-specific confirmation.",
    },
    {
      q: "How do you control multiple SKUs and repeat orders?",
      a: "Use an artwork and quantity matrix that identifies each product, language and revision. Agree the shared construction, proof authority, roll IDs, carton separation, obsolete-artwork handling and approved production reference before the first order and reuse them for reorders.",
    },
  ],
  inquiry: {
    label: "B2B printed-label review",
    title: "Send the artwork, overprint, equipment and packing inputs",
    description:
      "A complete request lets us identify print, material, adhesive, roll-build, proof, version and packing questions before quotation.",
    checklist: [
      "Finished size, shape, artwork, colors, static fields and variable-data zones",
      "Printer or applicator, DPI, ribbon, core, roll OD, gap, winding and speed",
      "Package surface, application method, environment, label life and test criteria",
      "Quantity by SKU or revision, proof route, packing, destination and delivery window",
    ],
    productName: "Custom Printed Thermal Labels",
    initialMessage:
      "Company and buyer type:\nLabel job and product:\nFinished size and shape:\nArtwork format and revision:\nStatic print and variable-data fields:\nColor reference and finish:\nDirect thermal or thermal transfer method:\nPrinter or applicator model and DPI:\nCore, maximum roll OD, gap and winding:\nPackage or item surface:\nApplication and service environment:\nBarcode, date, batch or serial requirement:\nQuantity by SKU, language or version:\nProof and sample requirement:\nRoll, inner pack and carton requirement:\nPrivate-label packing requirement:\nDestination country / port:\nRequested delivery window:\nCurrent print or supply problem:",
    responseNote:
      "We will review the print architecture and production inputs, identify missing qualification details and confirm the next quotation step.",
  },
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    {
      name: "Custom Printed Thermal Labels",
      path: "/products/custom-printed-thermal-labels",
    },
  ],
  relatedPrograms: [
    { label: "Thermal Labels", href: "/products/thermal-labels" },
    { label: "Product & Packaging Labels", href: "/products/product-labels" },
    { label: "Barcode Labels", href: "/products/barcode-labels" },
    { label: "Machine-Ready Roll Labels", href: "/products/can-labels" },
  ],
} satisfies ProductCategoryConfig;
