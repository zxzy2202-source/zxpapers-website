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
const QUALITY_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/factory-coating-line-Rfrrgy9ZbXu6C6rJRRsG37.webp";

const sizeUses: Record<string, string> = {
  "80x80mm": "High-volume retail, supermarket, restaurant and standard POS terminals",
  "57x50mm": "Mobile POS, card terminals and compact receipt printers",
  "80x70mm": "Standard-width POS where the printer limits the roll diameter",
  "110x80mm": "Wide receipts, kiosks, itemized billing and specialist terminals",
  "57x40mm": "Handheld payment, delivery and compact counter terminals",
  "57x30mm": "Ultra-compact card, taxi and portable receipt devices",
};

export const receiptPaperRollsCategoryConfig = {
  kind: "category",
  canonicalPath: "/products/receipt-paper-rolls",
  categoryName: "Receipt Paper Rolls",
  alternateNames: [
    "Cash Register Paper Rolls",
    "POS Receipt Paper",
    "Thermal Receipt Rolls",
    "Till Rolls",
    "Receipt Printer Paper Rolls",
  ],
  audience:
    "Retail chains, restaurants, hospitality operators, payment-service providers, terminal distributors, banks, kiosk operators, wholesalers and OEM buyers managing receipt-printer fleets or resale programs",
  metadata: {
    title: "Receipt Paper Rolls Manufacturer | POS, ATM & OEM | Factory-Direct | ZhixinPaper",
    description:
      "ISO 9001 factory for receipt paper rolls. 80×80mm, 57×50mm, ATM & kiosk rolls in stock. BPA-free options · custom printing · private label · MOQ 1 pallet. Free sample & 24h quote.",
    keywords: [
      "receipt paper rolls manufacturer",
      "cash register paper rolls",
      "POS receipt paper",
      "thermal receipt rolls wholesale",
      "receipt printer paper rolls",
      "80mm receipt paper rolls",
      "57mm receipt paper rolls",
      "custom printed receipt rolls",
      "OEM receipt paper rolls",
      "private label till rolls",
    ],
  },
  hero: {
    image: {
      slot: "receipt-paper-rolls:hero",
      fallback: ROLLS_IMAGE,
      alt: "Receipt paper rolls specified for POS cash register and terminal fleets",
    },
    badge: "B2B receipt-roll catalog",
    titleBefore: "Receipt Paper Rolls for ",
    titleHighlight: "POS, Cash Register and Terminal Fleets",
    description:
      "A printer needs more than the right paper width. Confirm the model, roll diameter or length, core, paper grade, winding, image-retention need and packing before approving wholesale or repeat supply.",
    trustBadges: [
      "57mm, 80mm and specialist widths",
      "Printer and roll-geometry review",
      "Blank and custom printed routes",
      "OEM packing and reorder control",
    ],
    facts: [
      { value: "7 routes", label: "Receipt-roll programs" },
      { value: "6 formats", label: "Reference dimensions" },
      { value: "4 stages", label: "Specification sequence" },
      { value: "B2B", label: "Bulk and repeat supply" },
    ],
    primaryCta: { label: "Browse Receipt Programs", href: "#product-families" },
    secondaryCta: { label: "Request a Printer Review", href: "#inquiry" },
  },
  jumpLinks: [
    { label: "Product Series", href: "#product-families" },
    { label: "Sizes", href: "#popular-sizes" },
    { label: "Applications", href: "#applications" },
    { label: "Specification Guide", href: "#selection-guide" },
    { label: "Sample Checks", href: "#evidence" },
    { label: "FAQ", href: "#faq" },
    { label: "Quote", href: "#inquiry" },
  ],
  sectionCopy: {
    families: {
      label: "Receipt-roll buying matrix",
      title: "Choose by terminal and operating workflow",
      description:
        "A supermarket POS, handheld payment terminal, kitchen printer and self-service kiosk can use different widths, diameters, cores, paper grades and packing. Start with the device and changeover workflow.",
    },
    sizes: {
      label: "Reference roll formats",
      title: "Confirm width and roll geometry together",
      description:
        "A size name such as 80 x 80 mm does not confirm paper length, core, caliper, winding or printer fit by itself. Open the closest route, then verify the complete media specification.",
    },
    applications: {
      label: "Terminal and channel routes",
      title: "Match the roll to the printer fleet, usage rate and record need",
      description:
        "Retail, hospitality, mobile payment, kiosks, banking and distributor programs create different changeover, print, retention, packing and documentation requirements.",
    },
    selection: {
      label: "Four-stage roll specification",
      title: "Define the device before the paper and packing",
      description:
        "Record the printer and physical envelope first, then select the paper and image-retention route. Finish with sample checks and a repeatable packing reference.",
    },
  },
  families: [
    {
      id: "pos-cash-register",
      label: "Core retail route",
      title: "POS & Cash Register Receipt Rolls",
      description:
        "Thermal receipt rolls for checkout, retail, supermarket and standard point-of-sale printing workflows.",
      buyerFit:
        "Confirm printer model, width, maximum roll diameter, core, expected receipts per day, cutter, paper grade and pack quantity per site.",
      href: "/products/thermal-rolls/80x80mm",
      linkLabel: "Review 80 x 80 mm rolls",
      featured: true,
      image: {
        slot: "receipt-paper-rolls:series:pos",
        fallback: RETAIL_IMAGE,
        alt: "POS and cash register receipt paper rolls used at retail checkout",
      },
    },
    {
      id: "mobile-card",
      label: "Compact terminal route",
      title: "Mobile POS & Card-Terminal Rolls",
      description:
        "Narrow or smaller-diameter rolls for portable payment, card, delivery, taxi and handheld receipt devices.",
      buyerFit:
        "Compact printers are sensitive to outer diameter and core as well as width. Send the exact model or an approved roll sample before bulk supply.",
      href: "/products/thermal-rolls/57x50mm",
      linkLabel: "Review 57 x 50 mm rolls",
      image: {
        slot: "receipt-paper-rolls:series:mobile",
        fallback: MOBILE_IMAGE,
        alt: "Mobile POS and card terminal receipt paper rolls",
      },
    },
    {
      id: "atm-kiosk",
      label: "Self-service route",
      title: "ATM, Kiosk & Ticketing Rolls",
      description:
        "Terminal paper for self-service, ticket, parking, queue and banking equipment using defined widths, sensors or longer unattended runs.",
      buyerFit:
        "Confirm terminal model, paper path, sensor or mark, roll holder, cutter, required run length, record content and maintenance interval.",
      href: "/products/thermal-rolls/110x80mm",
      linkLabel: "Review wide-format rolls",
      image: {
        slot: "receipt-paper-rolls:series:kiosk",
        fallback: KIOSK_IMAGE,
        alt: "Kiosk and self service receipt printer using terminal paper rolls",
      },
    },
    {
      id: "hospitality-kitchen",
      label: "Hospitality operations",
      title: "Restaurant, Hospitality & Kitchen Rolls",
      description:
        "Receipt and order-printer rolls for front-of-house billing, kitchen routing and hospitality service points.",
      buyerFit:
        "Confirm each printer model, front or kitchen location, heat and grease exposure, changeover rate, required print life and carton distribution plan.",
      href: "/products/thermal-rolls/80x80mm",
      linkLabel: "Review standard POS rolls",
      image: {
        slot: "receipt-paper-rolls:series:hospitality",
        fallback: HOSPITALITY_IMAGE,
        alt: "Restaurant and hospitality receipt paper printing workflow",
      },
    },
    {
      id: "custom-printed",
      label: "Brand and promotion route",
      title: "Custom Printed Receipt Rolls",
      description:
        "Buyer-approved logos, messages, terms, coupons, QR codes or back printing reviewed against the live thermal print area and terminal feed.",
      buyerFit:
        "Confirm print side, repeat, colors, artwork, thermal image area, sensor marks, printer, paper grade, quantity by version and packing.",
      href: "/products/thermal-paper-rolls/custom-printed",
      linkLabel: "Review custom printed rolls",
      image: {
        slot: "receipt-paper-rolls:series:custom",
        fallback: ROLLS_IMAGE,
        alt: "Custom printed receipt paper rolls with buyer approved artwork",
      },
    },
    {
      id: "chemistry-retention",
      label: "Documented material route",
      title: "BPA-Free, Phenol-Free & Retention-Specific Rolls",
      description:
        "Paper grades reviewed against the requested chemistry statement, destination, image-retention period, storage and document evidence.",
      buyerFit:
        "BPA-free, BPS-free and phenol-free are different scopes. State the exact requirement, document subject, market and verification method before approval.",
      href: "/products/bpa-free-thermal-paper",
      linkLabel: "Review material claim routes",
      image: {
        slot: "receipt-paper-rolls:series:chemistry",
        fallback: QUALITY_IMAGE,
        alt: "Receipt paper roll grades reviewed for chemistry and image retention",
      },
    },
    {
      id: "oem-private-label",
      label: "Distributor supply route",
      title: "OEM, Private-Label & Wholesale Packs",
      description:
        "Roll and carton programs for wholesalers, terminal distributors and retail chains using controlled counts, labels, cartons and reorder references.",
      buyerFit:
        "Confirm rolls per pack and carton, film or paper wrapping, labels, carton marks, barcode, language, pallet, destination and channel requirements.",
      href: "/oem",
      linkLabel: "Review an OEM packing program",
      image: {
        slot: "receipt-paper-rolls:series:oem",
        fallback: OEM_IMAGE,
        alt: "OEM and private label receipt paper rolls packed for wholesale supply",
      },
    },
  ],
  sizes: paperRollSizes.map((size) => ({
    slug: size.slug,
    label: size.label,
    market: size.markets ?? "Global",
    badge: size.badge,
    use: sizeUses[size.slug] ?? "General receipt, POS and terminal printing",
    href: `/products/thermal-rolls/${size.slug}`,
  })),
  applications: [
    {
      id: "retail",
      title: "Retail, supermarket and checkout fleets",
      description:
        "High-frequency receipt printing across multiple tills, stores and replenishment locations.",
      confirm:
        "printer models, roll size by terminal, receipts per day, cutter, changeover rate, pack quantity, store allocation and reorder point",
      href: "/products/thermal-rolls/80x80mm",
      linkLabel: "Review retail POS rolls",
      image: {
        slot: "receipt-paper-rolls:applications:retail",
        fallback: RETAIL_IMAGE,
        alt: "Retail checkout fleet using POS receipt paper rolls",
      },
    },
    {
      id: "hospitality",
      title: "Restaurants, hotels and food service",
      description:
        "Front-desk, counter, order and kitchen printing with different environmental and record needs.",
      confirm:
        "printer by station, roll width and OD, kitchen heat or grease, print retention, shift usage, carton split and storage",
      href: "/products/thermal-rolls/80x80mm",
      linkLabel: "Review hospitality rolls",
      image: {
        slot: "receipt-paper-rolls:applications:hospitality",
        fallback: HOSPITALITY_IMAGE,
        alt: "Restaurant and hospitality receipt printing applications",
      },
    },
    {
      id: "mobile",
      title: "Mobile payment, delivery and field service",
      description:
        "Compact receipt rolls for handheld payment and portable printers where roll envelope and battery-powered feeding matter.",
      confirm:
        "device model, media width, maximum OD, core, roll loading, field storage, daily usage, packs per operator and destination",
      href: "/products/thermal-rolls/57x40mm",
      linkLabel: "Review compact rolls",
      image: {
        slot: "receipt-paper-rolls:applications:mobile",
        fallback: MOBILE_IMAGE,
        alt: "Mobile payment and field service receipt paper workflow",
      },
    },
    {
      id: "kiosk-ticketing",
      title: "Kiosk, parking, queue and ticket terminals",
      description:
        "Unattended or specialist terminals where holder capacity, sensor marks, cutter performance and maintenance cycles matter.",
      confirm:
        "terminal model, paper path, holder and cutter, sensor mark, width, roll capacity, usage cycle, environment and service interval",
      href: "/products/thermal-rolls/110x80mm",
      linkLabel: "Review specialist terminal rolls",
      image: {
        slot: "receipt-paper-rolls:applications:kiosk",
        fallback: KIOSK_IMAGE,
        alt: "Self service kiosk and ticket terminal receipt paper rolls",
      },
    },
    {
      id: "banking",
      title: "Banking, ATM and financial records",
      description:
        "Terminal receipts reviewed for device fit, readable output, required record life and documented paper grade.",
      confirm:
        "terminal model, paper dimensions, sensor, image-retention requirement, storage, document scope, packing security and branch allocation",
      href: "#inquiry",
      linkLabel: "Review a banking terminal",
      image: {
        slot: "receipt-paper-rolls:applications:banking",
        fallback: BANKING_IMAGE,
        alt: "Banking and ATM receipt paper application",
      },
    },
    {
      id: "distributor",
      title: "Wholesale, distributor and private-label supply",
      description:
        "Multi-size receipt-roll programs with controlled inner packs, cartons, barcodes, languages and pallet plans.",
      confirm:
        "size mix, quantity by SKU, paper grade, rolls per pack and carton, label, barcode, carton artwork, pallet and destination",
      href: "/oem",
      linkLabel: "Review wholesale packing",
      image: {
        slot: "receipt-paper-rolls:applications:distributor",
        fallback: OEM_IMAGE,
        alt: "Wholesale receipt paper rolls packed for distributor supply",
      },
    },
  ],
  selectionSteps: [
    {
      step: "01",
      title: "Printer and operating workflow",
      description: "Identify the exact terminal and how the roll is loaded, printed and cut.",
      inputs: [
        "Printer or terminal manufacturer and model",
        "POS, mobile, kiosk, kitchen, ATM or other use",
        "Cutter, sensor or mark requirement",
        "Daily usage, changeover and maintenance cycle",
      ],
    },
    {
      step: "02",
      title: "Roll geometry",
      description: "Record every dimension that determines physical fit and usable paper.",
      inputs: [
        "Paper width and acceptable tolerance",
        "Maximum outer diameter or required length",
        "Core ID, core OD or coreless request",
        "Winding, print side and roll firmness",
      ],
    },
    {
      step: "03",
      title: "Paper and record requirement",
      description: "Select the grade from print performance, storage and evidence needs.",
      inputs: [
        "Paper basis weight, caliper and thermal sensitivity",
        "Image-retention period and storage conditions",
        "BPA-free, BPS-free or phenol-free scope",
        "Custom print, QR, barcode or sensor-mark requirement",
      ],
    },
    {
      step: "04",
      title: "Sample, packing and reorder",
      description: "Approve the roll in the real terminal and freeze the supply reference.",
      inputs: [
        "Loading, feeding, print and cutting sample checks",
        "Roll count, inner wrap, carton and labels",
        "Quantity by size, site, artwork or language",
        "Destination, pallet, delivery window and reorder ID",
      ],
    },
  ],
  evidence: {
    image: {
      slot: "receipt-paper-rolls:quality",
      fallback: QUALITY_IMAGE,
      alt: "Receipt paper roll geometry print and packing quality review",
    },
    label: "Terminal-to-carton approval",
    title: "Approve fit, print and usable roll performance",
    description:
      "A width label alone does not prove that a roll fits or lasts as expected. Approve the geometry, paper, print response, feed, cut and packing using the intended terminal and a recorded specification.",
    checks: [
      {
        title: "Geometry and loading check",
        description:
          "Measure width, outer diameter, core and roll condition, then confirm loading and clearance in the intended terminal.",
      },
      {
        title: "Feed, print and cut check",
        description:
          "Review feeding, thermal density, text or barcode readability, paper dust, curl, cutter behavior and end-of-roll handling.",
      },
      {
        title: "Length and paper check",
        description:
          "Tie declared length to the approved paper basis weight or caliper, roll diameter, core and measurement method rather than comparing length alone.",
      },
      {
        title: "Packing and reorder check",
        description:
          "Record rolls per wrap and carton, label, barcode, carton marks, pallet, material reference and approved replacement rules.",
      },
    ],
    note:
      "BPA-free, BPS-free, phenol-free, image-life, food-contact, forestry and market-compliance statements are separate evidence scopes. Confirm the exact paper, test or declaration subject, date and destination for the order.",
  },
  faq: [
    {
      q: "Are receipt paper, cash register paper and till rolls the same product?",
      a: "They are overlapping buying terms for paper rolls used to print receipts. Till roll is common in the UK and Europe, while POS or cash register roll is common elsewhere. The correct product still depends on the printer, dimensions, core, paper type and operating requirement.",
    },
    {
      q: "How do I find the correct receipt paper roll size?",
      a: "Start with the exact printer or terminal model and an approved roll specification. Confirm width, maximum outer diameter or required length, core, winding, print side, sensor or mark and paper grade. Width alone does not confirm fit.",
    },
    {
      q: "What is the difference between roll diameter and paper length?",
      a: "Diameter is the physical roll envelope that must fit the printer. Length also depends on the core, paper caliper, basis weight, winding and measurement method. Two rolls with the same width and diameter can contain different lengths, so compare a complete specification.",
    },
    {
      q: "Will a 57mm or 80mm roll fit every printer with that width?",
      a: "No. The terminal may require a specific outer diameter, core, winding, paper path, sensor or mark in addition to width. Provide the exact model or test a representative roll before bulk approval where a poor fit creates downtime.",
    },
    {
      q: "Can receipt rolls be custom printed?",
      a: "Yes. Custom printing can be reviewed for logos, terms, coupons, QR codes, barcodes or other approved artwork. Confirm print side, repeat, colors, thermal image area, printer, paper grade, sensor marks, artwork versions and quantity before proofing.",
    },
    {
      q: "Are all receipt paper rolls BPA-free or phenol-free?",
      a: "Do not assume so. BPA-free, BPS-free and phenol-free describe different chemical scopes. Request the exact paper grade and supporting test or declaration, including the document subject, issue date and destination requirement.",
    },
    {
      q: "What information is needed for wholesale or private-label packing?",
      a: "Send the size and quantity by SKU, rolls per inner pack and carton, wrapping, label and barcode requirements, carton artwork, language, pallet, destination and sales channel. The packing specification should be approved with the roll specification.",
    },
    {
      q: "How are minimum order and production timing confirmed?",
      a: "They depend on paper grade, dimensions, quantity mix, custom printing, packing, documents, destination and production schedule. Send the requested delivery window and quantity by size or artwork for an order-specific confirmation.",
    },
  ],
  inquiry: {
    label: "B2B receipt-roll review",
    title: "Send the printer, roll geometry, paper and packing inputs",
    description:
      "A complete request helps identify fit, length, paper, evidence, sample and packing questions before quotation.",
    checklist: [
      "Printer or terminal model, application, cutter, sensor and daily usage",
      "Width, maximum roll OD or length, core, winding and print side",
      "Paper grade, image-retention, chemistry, custom-print and test requirements",
      "Quantity by size, inner pack, carton, pallet, destination and delivery window",
    ],
    productName: "Receipt Paper Rolls",
    initialMessage:
      "Company and buyer type:\nReceipt roll application:\nPrinter or terminal model:\nPaper width:\nMaximum roll OD or required length:\nCore ID / OD or coreless requirement:\nWinding and print side:\nSensor mark or cutter requirement:\nPaper basis weight or approved sample:\nImage-retention and storage requirement:\nBPA-free / BPS-free / phenol-free document scope:\nCustom print, QR, barcode or artwork requirement:\nEstimated usage and quantity by size:\nRolls per inner pack and carton:\nPrivate-label and carton-mark requirement:\nPallet and shipment preference:\nDestination country / port:\nRequested delivery window:\nCurrent fit, print or supply problem:",
    responseNote:
      "We will review the terminal and roll specification, identify missing qualification inputs and confirm the next quotation step.",
  },
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Receipt Paper Rolls", path: "/products/receipt-paper-rolls" },
  ],
  relatedPrograms: [
    { label: "Thermal Paper Rolls", href: "/products/thermal-paper-rolls" },
    { label: "Custom Printed Receipt Rolls", href: "/products/thermal-paper-rolls/custom-printed" },
    { label: "BPA-Free Thermal Paper", href: "/products/bpa-free-thermal-paper" },
    { label: "Till Rolls", href: "/products/till-rolls" },
  ],
} satisfies ProductCategoryConfig;
