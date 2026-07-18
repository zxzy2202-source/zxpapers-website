import type { ProductCategoryConfig } from "@/components/products/category/product-category-types";
import { paperRollSizes } from "@/config/navigation";

const ROLLS_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/product-thermal-rolls-RQBrphmgzbAMk7eq3HsvNq.webp";
const RETAIL_IMAGE =
  "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&q=82";
const HOSPITALITY_IMAGE =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=82";
const MOBILE_IMAGE =
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=82";
const KIOSK_IMAGE =
  "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200&q=82";
const BANKING_IMAGE =
  "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=82";
const OEM_IMAGE =
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=82";
const DOCUMENT_IMAGE =
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=82";
const QUALITY_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/factory-coating-line-Rfrrgy9ZbXu6C6rJRRsG37.webp";

const sizeUses: Record<string, string> = {
  "80x80mm": "Retail, supermarket, hospitality and standard POS color-coding programs",
  "57x50mm": "Payment terminals, mobile POS and compact receipt-printer programs",
  "80x70mm": "Standard-width terminals with a smaller roll-diameter allowance",
  "110x80mm": "Wide receipts, ticketing, kiosk and specialist terminal workflows",
  "57x40mm": "Handheld payment, delivery and compact field-terminal programs",
  "57x30mm": "Ultra-compact card, taxi and portable receipt devices",
};

export const coloredThermalPaperCategoryConfig = {
  kind: "category",
  canonicalPath: "/products/colored-thermal-paper",
  categoryName: "Colored Thermal Paper",
  alternateNames: [
    "Colored Thermal Paper Rolls",
    "Tinted Thermal Paper",
    "Colored Receipt Paper",
    "Color-Coded Till Rolls",
    "Custom Color Thermal Rolls",
  ],
  audience:
    "Retail chains, hospitality groups, ticketing operators, financial institutions, terminal distributors, promotional programs, wholesalers and OEM buyers specifying color-coded thermal receipt or ticket rolls",
  metadata: {
    title: "Colored Thermal Paper Manufacturer | Tinted Receipt Rolls",
    description:
      "Source colored thermal paper rolls by base, image or preprint route, printer, roll geometry, physical color sample, contrast, batch tolerance and packing.",
    keywords: [
      "colored thermal paper manufacturer",
      "colored thermal paper rolls",
      "colored receipt paper wholesale",
      "tinted thermal paper rolls",
      "color coded receipt rolls",
      "custom color thermal paper",
      "colored POS paper rolls",
      "colored till rolls",
      "preprinted thermal paper rolls",
      "OEM colored thermal rolls",
    ],
  },
  hero: {
    image: {
      slot: "colored-thermal-paper:hero",
      fallback: ROLLS_IMAGE,
      alt: "Colored thermal paper rolls reviewed for base color print contrast and B2B supply",
    },
    badge: "B2B color-coded roll catalog",
    titleBefore: "Colored Thermal Paper for ",
    titleHighlight: "Receipt, Ticket and Workflow Coding",
    description:
      "First define whether the requirement is a tinted paper base, a colored thermal image or conventional preprinting. Then approve the printer, roll geometry, physical color sample, output contrast, batch tolerance and packing.",
    trustBadges: [
      "Base, image and preprint routes separated",
      "Physical color-sample approval",
      "Printer and contrast checks",
      "Batch and reorder control",
    ],
    facts: [
      { value: "7 routes", label: "Color and supply programs" },
      { value: "6 formats", label: "Reference dimensions" },
      { value: "4 stages", label: "Approval sequence" },
      { value: "B2B", label: "Bulk and repeat supply" },
    ],
    primaryCta: { label: "Compare Color Programs", href: "#product-families" },
    secondaryCta: { label: "Request a Color Review", href: "#inquiry" },
  },
  jumpLinks: [
    { label: "Product Series", href: "#product-families" },
    { label: "Sizes", href: "#popular-sizes" },
    { label: "Applications", href: "#applications" },
    { label: "Specification Guide", href: "#selection-guide" },
    { label: "Approval Checks", href: "#evidence" },
    { label: "FAQ", href: "#faq" },
    { label: "Quote", href: "#inquiry" },
  ],
  sectionCopy: {
    families: {
      label: "Color-route buying matrix",
      title: "Choose the color function before choosing the paper roll",
      description:
        "A colored sheet, a non-black thermal image and an ink-printed logo are different production routes. Defining the route prevents a visually similar sample from becoming the wrong bulk product.",
    },
    sizes: {
      label: "Reference roll formats",
      title: "Confirm color and complete roll geometry together",
      description:
        "A width such as 80 mm does not confirm outer diameter, length, core, caliper, winding or printer fit. Use the closest format as a starting point, then qualify the complete roll.",
    },
    applications: {
      label: "Workflow and channel routes",
      title: "Match color purpose to readable output and repeat supply",
      description:
        "Retail, hospitality, ticketing, financial records and distributor programs need different color meanings, contrast checks, record periods, packing and SKU controls.",
    },
    selection: {
      label: "Four-stage color approval",
      title: "Freeze the color route, device, master sample and reorder reference",
      description:
        "Define what must be colored, qualify the printer and paper, approve a physical master under agreed conditions, then connect the approved version to batch and packing controls.",
    },
  },
  families: [
    {
      id: "tinted-base",
      label: "Core color route",
      title: "Tinted-Base Colored Thermal Rolls",
      description:
        "Thermal paper with an approved background color for receipts, tickets or internal workflow coding, paired with a compatible thermal image grade.",
      buyerFit:
        "Best when the full paper background must carry the color. Send a physical master or color reference, intended image color, printer, readable-content requirement and exposure conditions.",
      href: "#inquiry",
      linkLabel: "Define a tinted-base program",
      featured: true,
      image: {
        slot: "colored-thermal-paper:series:tinted-base",
        fallback: ROLLS_IMAGE,
        alt: "Tinted base colored thermal receipt paper rolls",
      },
    },
    {
      id: "pos-receipt",
      label: "Standard receipt route",
      title: "Colored POS & Cash-Register Rolls",
      description:
        "Color-coded receipt rolls for checkout, department, station or campaign workflows using an approved printer and roll specification.",
      buyerFit:
        "Confirm what each color means, printer model, width, maximum roll diameter, core, daily usage, output contrast, record period and site allocation.",
      href: "/products/receipt-paper-rolls",
      linkLabel: "Review receipt-roll formats",
      image: {
        slot: "colored-thermal-paper:series:pos",
        fallback: RETAIL_IMAGE,
        alt: "Colored POS and cash register receipt paper program",
      },
    },
    {
      id: "compact-terminal",
      label: "Compact device route",
      title: "Colored Mobile POS & Terminal Rolls",
      description:
        "Smaller-diameter colored rolls for handheld payment, delivery, taxi and portable receipt devices.",
      buyerFit:
        "Compact devices are sensitive to outer diameter, core and coating as well as width. Send the exact terminal model or an approved roll sample.",
      href: "/products/thermal-rolls/57x40mm",
      linkLabel: "Review compact roll geometry",
      image: {
        slot: "colored-thermal-paper:series:mobile",
        fallback: MOBILE_IMAGE,
        alt: "Colored thermal paper roll for mobile POS and compact terminals",
      },
    },
    {
      id: "custom-preprinted",
      label: "Ink and artwork route",
      title: "Custom Preprinted Thermal Rolls",
      description:
        "Logos, terms, promotions, security artwork or color areas printed with conventional ink on a specified thermal paper grade.",
      buyerFit:
        "Use this route when the color is printed artwork rather than the paper base or thermal image. Confirm print side, colors, repeat, live thermal area, sensor marks and artwork versions.",
      href: "/products/thermal-paper-rolls/custom-printed",
      linkLabel: "Review preprinted rolls",
      image: {
        slot: "colored-thermal-paper:series:preprinted",
        fallback: DOCUMENT_IMAGE,
        alt: "Custom preprinted thermal paper roll artwork and color route",
      },
    },
    {
      id: "colored-image",
      label: "Thermal image route",
      title: "Colored Thermal-Image Paper Grades",
      description:
        "A separate grade-selection route where the heat-developed image color, rather than the paper background, is the required visual feature.",
      buyerFit:
        "State the required image color, background, printer energy or model, density, readability, record period and exposure. Availability must be confirmed by exact grade and order.",
      href: "#inquiry",
      linkLabel: "Review a thermal-image grade",
      image: {
        slot: "colored-thermal-paper:series:image-color",
        fallback: QUALITY_IMAGE,
        alt: "Colored thermal image paper grade under print review",
      },
    },
    {
      id: "documented-grade",
      label: "Material and retention route",
      title: "Documented Chemistry & Retention Options",
      description:
        "Colored-paper programs reviewed separately for BPA, BPS or phenol scope, image retention, storage and any requested coating or sourcing claim.",
      buyerFit:
        "Color does not prove chemistry, resistance, certification or image life. State every required claim, evidence type, paper grade and acceptance condition independently.",
      href: "/products/bpa-free-thermal-paper",
      linkLabel: "Review material claim scope",
      image: {
        slot: "colored-thermal-paper:series:documented",
        fallback: DOCUMENT_IMAGE,
        alt: "Colored thermal paper grade documentation and retention review",
      },
    },
    {
      id: "oem-private-label",
      label: "Distributor supply route",
      title: "OEM, Private-Label & Multi-Color SKU Programs",
      description:
        "Multi-size and multi-color roll programs with controlled inner packs, cartons, labels, barcodes, pallets and reorder references.",
      buyerFit:
        "Confirm quantity by color and size, color naming, physical masters, roll count, labels, carton allocation, private-label artwork, pallet and destination.",
      href: "/oem",
      linkLabel: "Review an OEM program",
      image: {
        slot: "colored-thermal-paper:series:oem",
        fallback: OEM_IMAGE,
        alt: "OEM and private label colored thermal paper roll supply",
      },
    },
  ],
  sizes: paperRollSizes.map((size) => ({
    slug: size.slug,
    label: size.label,
    market: size.markets ?? "Global",
    badge: size.badge,
    use: sizeUses[size.slug] ?? "General colored receipt and terminal printing",
    href: `/products/thermal-rolls/${size.slug}`,
  })),
  applications: [
    {
      id: "retail",
      title: "Retail, supermarket and department coding",
      description:
        "Color-coded receipts for stores, departments, service desks, campaigns or internal routing across a terminal fleet.",
      confirm:
        "color meaning, physical master, printer models, roll geometry, text or barcode contrast, receipts per day, site allocation and reorder ID",
      href: "/products/receipt-paper-rolls",
      linkLabel: "Review retail receipt rolls",
      image: {
        slot: "colored-thermal-paper:applications:retail",
        fallback: RETAIL_IMAGE,
        alt: "Retail checkout using color coded thermal receipt paper",
      },
    },
    {
      id: "hospitality",
      title: "Hospitality, restaurant and order routing",
      description:
        "Visual coding for front desk, counter, kitchen or service workflows where heat, grease and frequent handling may affect the paper.",
      confirm:
        "workflow color key, printer by station, dimensions, print contrast, heat or grease exposure, record period, pack allocation and replacement process",
      href: "/products/receipt-paper-rolls",
      linkLabel: "Review hospitality formats",
      image: {
        slot: "colored-thermal-paper:applications:hospitality",
        fallback: HOSPITALITY_IMAGE,
        alt: "Hospitality workflow using colored thermal receipt rolls",
      },
    },
    {
      id: "ticketing",
      title: "Ticketing, parking and queue systems",
      description:
        "Colored tickets or terminal records reviewed for device fit, sensor behavior, variable data, handling and required readable period.",
      confirm:
        "terminal model, color purpose, width, roll holder, sensor or mark, cutter, print density, barcode or QR scan, exposure and record period",
      href: "/products/thermal-rolls/110x80mm",
      linkLabel: "Review terminal roll formats",
      image: {
        slot: "colored-thermal-paper:applications:ticketing",
        fallback: KIOSK_IMAGE,
        alt: "Ticketing kiosk using colored thermal paper rolls",
      },
    },
    {
      id: "financial",
      title: "Banking, payment and institutional records",
      description:
        "Colored terminal output used for document routing or visual identification with defined legibility, retention and storage controls.",
      confirm:
        "record purpose, printer, physical color master, image color, readable period, storage, material claim, document evidence and branch allocation",
      href: "#inquiry",
      linkLabel: "Review a record program",
      image: {
        slot: "colored-thermal-paper:applications:financial",
        fallback: BANKING_IMAGE,
        alt: "Financial terminal and institutional colored thermal paper record",
      },
    },
    {
      id: "promotion",
      title: "Promotions, events and branded campaigns",
      description:
        "Short-run or versioned programs combining a colored base, printed artwork or both, with an agreed live thermal image area.",
      confirm:
        "campaign period, color route, artwork versions, print side, repeat, printer, variable data area, quantity by version, packing and deadline",
      href: "/products/thermal-paper-rolls/custom-printed",
      linkLabel: "Review custom printing",
      image: {
        slot: "colored-thermal-paper:applications:promotion",
        fallback: DOCUMENT_IMAGE,
        alt: "Promotional custom printed colored thermal paper program",
      },
    },
    {
      id: "distributor",
      title: "Wholesale, distributor and private-label supply",
      description:
        "Multi-color and multi-size catalogs managed through approved samples, controlled color names, SKU labels, cartons and repeat-order references.",
      confirm:
        "target markets, color and size matrix, quantity by SKU, master samples, material claims, packs, cartons, labels, pallet and destination",
      href: "/oem",
      linkLabel: "Review wholesale supply",
      image: {
        slot: "colored-thermal-paper:applications:distributor",
        fallback: OEM_IMAGE,
        alt: "Wholesale colored thermal paper rolls packed for distributors",
      },
    },
  ],
  selectionSteps: [
    {
      step: "01",
      title: "Color function and production route",
      description: "Define what should carry the color and why the buyer needs it.",
      inputs: [
        "Tinted paper base, thermal image color, conventional preprint or a combination",
        "Workflow coding, visual identity, promotion, ticketing or record purpose",
        "Required background, image and ink colors",
        "Physical color master, reference sample or requested color target",
      ],
    },
    {
      step: "02",
      title: "Printer and complete roll specification",
      description: "Qualify device fit independently from color appearance.",
      inputs: [
        "Printer or terminal manufacturer and model",
        "Width, outer diameter or length, core ID and winding",
        "Paper basis weight, caliper, coating, sensitivity and image color",
        "Sensor mark, cutter, barcode or QR requirement and operating environment",
      ],
    },
    {
      step: "03",
      title: "Physical sample and output approval",
      description: "Approve color and readable output under agreed conditions before bulk production.",
      inputs: [
        "Master sample, substrate, observer or light condition and tolerance method",
        "Printer loading, feeding, density, cutting and residue checks",
        "Text, logo, barcode or QR contrast on the colored background",
        "Heat, light, humidity, oil, plasticizer and handling exposure where relevant",
      ],
    },
    {
      step: "04",
      title: "Batch, packing and reorder control",
      description: "Freeze the approved color and roll as a commercial SKU.",
      inputs: [
        "Quantity by color, size, grade, artwork, language and destination",
        "Approved master, paper grade, artwork and sample revision references",
        "Roll count, inner pack, carton label, barcode, pallet and color naming",
        "Batch shade check, delivery window and repeat-order identifier",
      ],
    },
  ],
  evidence: {
    image: {
      slot: "colored-thermal-paper:quality",
      fallback: QUALITY_IMAGE,
      alt: "Colored thermal paper physical sample print contrast and batch review",
    },
    label: "Color-to-batch approval",
    title: "Approve the physical color and printed output together",
    description:
      "A colored thermal-paper program is ready when the color route is unambiguous, the physical master is approved under agreed conditions, the roll runs in the intended printer, critical content remains readable and the approved version is traceable into packing and repeat orders.",
    checks: [
      {
        title: "Color-route and master check",
        description:
          "Identify whether each color comes from the base, thermal image or ink. Record the physical master, substrate, light condition, tolerance method and approved name or code.",
      },
      {
        title: "Printer and contrast check",
        description:
          "Test loading, feeding, density, cutting and residue. Check critical text, logos, barcodes or QR codes against the actual background and image colors.",
      },
      {
        title: "Exposure and retention check",
        description:
          "Assess the required readable period and representative heat, light, humidity, oil, plasticizer, sanitizer or handling exposure for the exact paper grade.",
      },
      {
        title: "Batch and packing check",
        description:
          "Compare production shade to the approved tolerance, then match grade, artwork, quantity by SKU, roll count, labels, cartons, pallet and reorder reference.",
      },
    ],
    note:
      "Color alone does not prove printer compatibility, barcode readability, image life, water or oil resistance, anti-fraud performance, BPA-free, BPS-free, phenol-free, food-contact suitability, FSC status or any other compliance claim. Confirm each requirement for the exact grade and order.",
  },
  faq: [
    {
      q: "What information is needed for a colored thermal paper quotation?",
      a: "Send the color purpose, base or image or preprint route, physical reference, printer, roll dimensions, paper grade, image color, readable-content requirement, quantity by SKU, packing and delivery window.",
    },
    {
      q: "What is the difference between tinted-base paper, colored thermal image and preprinting?",
      a: "Tinted-base paper carries color across the paper background. A colored thermal image develops through heat in the printer. Preprinting applies conventional ink artwork before the live thermal-printing step. They require different materials and approvals.",
    },
    {
      q: "Which colors are available for colored thermal rolls?",
      a: "Availability depends on the color route, paper grade, roll specification, quantity and production plan. Provide a physical sample or target reference so feasibility, tolerance, sample needs and order terms can be confirmed for that program.",
    },
    {
      q: "Can colored thermal paper match a brand color exactly?",
      a: "A digital value or named color is a starting reference, not a guarantee on paper. Approve a physical sample on the intended substrate under agreed viewing conditions and record an acceptable production tolerance.",
    },
    {
      q: "Will black text, a barcode or a QR code scan on colored paper?",
      a: "It depends on background shade, image density, printer settings, code design, scanner and use conditions. Test critical text and codes on the actual paper in the intended printer and scanner before bulk approval.",
    },
    {
      q: "Can colored thermal paper be BPA-free, BPS-free or phenol-free?",
      a: "These are separate material scopes and cannot be inferred from color. State the exact substances or buyer standard, accepted document type and product identity so an appropriate grade can be reviewed.",
    },
    {
      q: "How is batch-to-batch color consistency controlled?",
      a: "Use an approved physical master, defined substrate and viewing or measurement method, production tolerance, retained batch sample and reorder reference. The acceptable process should be agreed before bulk production.",
    },
    {
      q: "How are minimum order and production timing confirmed?",
      a: "They depend on the color route, paper grade, custom shade, dimensions, quantity by color, artwork, sampling, packing and destination. Send the full SKU matrix and delivery window for order-specific confirmation.",
    },
  ],
  inquiry: {
    label: "B2B colored-paper review",
    title: "Send the color route, physical reference, printer and roll specification",
    description:
      "A complete request lets us separate base color, thermal image and preprint needs, then identify missing sample, contrast, material, packing and batch-control inputs before quotation.",
    checklist: [
      "Color purpose and route: tinted base, thermal image, preprint or combination",
      "Physical master or target, background, image and ink colors, plus tolerance method",
      "Printer model, width, diameter or length, core, paper grade and critical content",
      "Quantity by SKU, samples, material claims, packing, destination and delivery window",
    ],
    productName: "Colored Thermal Paper",
    initialMessage:
      "Company and buyer type:\nColor purpose or workflow:\nColor route: tinted base, thermal image, preprint or combination:\nRequired background color:\nRequired thermal image color:\nPreprint colors, side, repeat and artwork versions:\nPhysical color master, sample or target reference:\nViewing or color tolerance requirement:\nPrinter or terminal model:\nPaper width:\nMaximum roll diameter or required length:\nCore ID, core OD or coreless request:\nPaper basis weight, grade and coating:\nCritical text, barcode or QR contrast requirement:\nImage-retention and exposure conditions:\nBPA, BPS, phenol-free or other document scope:\nQuantity by color, size, grade or artwork version:\nSample and printer/scanner test requirement:\nRoll, inner pack, carton and pallet packing:\nPrivate-label and color naming requirements:\nDestination country / port:\nRequested delivery window:\nCurrent color or supply problem:",
    responseNote:
      "We will review the color route and product scope, identify missing approval inputs and confirm the next quotation step.",
  },
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Thermal Paper Rolls", path: "/products/thermal-paper-rolls" },
    { name: "Colored Thermal Paper", path: "/products/colored-thermal-paper" },
  ],
  relatedPrograms: [
    { label: "Receipt Paper Rolls", href: "/products/receipt-paper-rolls" },
    { label: "Thermal Paper Rolls", href: "/products/thermal-paper-rolls" },
    { label: "Custom Printed Thermal Rolls", href: "/products/thermal-paper-rolls/custom-printed" },
    { label: "BPA-Free Thermal Paper", href: "/products/bpa-free-thermal-paper" },
  ],
} satisfies ProductCategoryConfig;
