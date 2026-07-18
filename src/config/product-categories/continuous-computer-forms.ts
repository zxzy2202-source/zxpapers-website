import type { ProductCategoryConfig } from "@/components/products/category/product-category-types";

const CONTINUOUS_IMAGE =
  "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=1400&q=82";
const NCR_IMAGE =
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=82";
const WAREHOUSE_IMAGE =
  "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=82";
const DELIVERY_IMAGE =
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=82";
const FINANCE_IMAGE =
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=82";
const RETAIL_IMAGE =
  "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&q=82";
const FACTORY_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663288770311/BfJE76PehM8XtSkNGC6wH2/oem-factory-EHdu8eZwwzSo5DxSRyzQdF.webp";

export const continuousComputerFormsCategoryConfig = {
  kind: "category",
  canonicalPath: "/products/continuous-computer-forms",
  categoryName: "Continuous Computer Forms",
  alternateNames: [
    "Continuous Form Paper",
    "Fanfold Computer Forms",
    "Pin-Feed Forms",
    "Tractor-Feed Paper",
    "Continuous NCR Forms",
    "Sprocket-Feed Forms",
  ],
  audience:
    "Commercial printers, business-form distributors, ERP and legacy-system operators, warehouses, logistics companies, financial and institutional buyers that need controlled fanfold or tractor-feed form supply",
  metadata: {
    title: "Continuous Computer Forms Manufacturer | Fanfold Paper",
    description:
      "Specify continuous fanfold and pin-feed forms by printer, web and finished dimensions, form depth, sprocket feed, plies, print, perforation, test and packing.",
    keywords: [
      "continuous computer forms manufacturer",
      "continuous form paper",
      "fanfold computer forms",
      "pin feed forms",
      "tractor feed paper",
      "dot matrix printer forms",
      "continuous NCR forms",
      "multi part continuous forms",
      "preprinted continuous forms",
      "sprocket feed paper",
    ],
  },
  hero: {
    image: {
      slot: "continuous-computer-forms:hero",
      fallback: CONTINUOUS_IMAGE,
      alt: "Continuous fanfold computer forms prepared for tractor feed system printing",
    },
    badge: "B2B system-form program",
    titleBefore: "Continuous Computer Forms for ",
    titleHighlight: "Dot-Matrix, ERP and Warehouse Printing",
    description:
      "Continuous paper must match the complete feed path, not only a width label. We qualify the printer, total and finished dimensions, form depth, sprocket margins, fold direction, plies, print layout, perforation and stack packing as one repeatable system-form specification.",
    trustBadges: [
      "Printer and feed-path review",
      "Plain 1-ply and carbonless routes",
      "Preprint, numbering and perforation",
      "Fanfold stack and carton control",
    ],
    facts: [
      { value: "7 routes", label: "Continuous-form programs" },
      { value: "4 formats", label: "Reference ply routes" },
      { value: "4 stages", label: "Approval sequence" },
      { value: "B2B", label: "Bulk and repeat supply" },
    ],
    primaryCta: { label: "Browse Form Programs", href: "#product-families" },
    secondaryCta: { label: "Request a Printer Review", href: "#inquiry" },
  },
  jumpLinks: [
    { label: "Form Programs", href: "#product-families" },
    { label: "Ply Formats", href: "#popular-sizes" },
    { label: "Applications", href: "#applications" },
    { label: "Specification Guide", href: "#selection-guide" },
    { label: "Run & Quality Checks", href: "#evidence" },
    { label: "FAQ", href: "#faq" },
    { label: "Quote", href: "#inquiry" },
  ],
  sectionCopy: {
    families: {
      label: "System-form buying matrix",
      title: "Choose by printer and output workflow before choosing paper",
      description:
        "A single-ply ERP statement, multi-copy delivery form and preprinted institutional record can share a fanfold appearance but require different dimensions, plies, registration, perforation and packing.",
    },
    sizes: {
      label: "Reference ply routes",
      title: "Select the number of copies the system output must create",
      description:
        "Ply count is only one part of the specification. Confirm total web width, finished width after margin removal, form depth, fold pitch, sprocket position, paper sequence and print area for every route.",
    },
    applications: {
      label: "System and channel applications",
      title: "Match the form to the printer, data and filing workflow",
      description:
        "ERP finance, WMS operations, logistics, manufacturing, institutional systems and wholesale programs create different feed, copy, numbering, version and carton requirements.",
    },
    selection: {
      label: "Four-stage feed specification",
      title: "Follow the paper path from system output to packed stack",
      description:
        "Identify the printer and data workflow first, then freeze dimensions, construction and print. Complete approval with a live run check and a repeatable stack and carton reference.",
    },
  },
  families: [
    {
      id: "plain-one-ply",
      label: "Core system route",
      title: "Plain 1-Ply Continuous Forms",
      description:
        "Single-ply fanfold bond forms for invoices, statements, reports, picking documents and other system-generated records that need one printed copy.",
      buyerFit:
        "Confirm printer model, total web and finished widths, form depth, sprocket margins, fold direction, basis weight, print area, perforation and stack count.",
      href: "#inquiry",
      linkLabel: "Define a 1-ply form",
      featured: true,
      image: {
        slot: "continuous-computer-forms:series:plain",
        fallback: CONTINUOUS_IMAGE,
        alt: "Plain one ply continuous fanfold computer forms",
      },
    },
    {
      id: "carbonless-multipart",
      label: "Multi-copy system route",
      title: "2-Part, 3-Part & 4-Part Continuous NCR Forms",
      description:
        "Collated carbonless fanfold forms that create multiple aligned copies from one impact-print pass.",
      buyerFit:
        "Confirm every copy recipient, CB/CFB/CF sequence, copy colors, lower-ply readability, impact pressure, registration, crimp or gluing and separation method.",
      href: "/products/ncr-forms/3-part",
      linkLabel: "Review 3-part NCR forms",
      image: {
        slot: "continuous-computer-forms:series:carbonless",
        fallback: NCR_IMAGE,
        alt: "Multi part carbonless continuous computer forms",
      },
    },
    {
      id: "preprinted",
      label: "Custom layout route",
      title: "Preprinted Continuous Business Forms",
      description:
        "Buyer-approved logos, tables, terms, copy labels and fixed fields aligned to the system-generated variable print area.",
      buyerFit:
        "Confirm artwork revision, fixed and variable zones, colors, printer registration, number of versions, numbering, language and quantity by layout.",
      href: "/products/custom-ncr-forms",
      linkLabel: "Review custom form inputs",
      image: {
        slot: "continuous-computer-forms:series:preprinted",
        fallback: FINANCE_IMAGE,
        alt: "Preprinted continuous business forms with fixed layout and variable data area",
      },
    },
    {
      id: "invoice-statement",
      label: "Finance output route",
      title: "Continuous Invoices, Statements & Account Forms",
      description:
        "System-fed documents for invoicing, statements, account records and other finance outputs using controlled field alignment and filing copies.",
      buyerFit:
        "Confirm system template, fixed and variable fields, original and file copies, numbering, line capacity, privacy handling, perforation and retention requirement.",
      href: "/products/ncr-invoice-books",
      linkLabel: "Review invoice-form requirements",
      image: {
        slot: "continuous-computer-forms:series:finance",
        fallback: FINANCE_IMAGE,
        alt: "Continuous invoice statement and account forms for system printing",
      },
    },
    {
      id: "logistics",
      label: "Warehouse and dispatch route",
      title: "Continuous Delivery, Packing & Warehouse Forms",
      description:
        "Fanfold delivery notes, packing lists, waybills, receiving and stock-movement records for ERP and WMS output.",
      buyerFit:
        "Confirm order, shipment, SKU, quantity, barcode, signature and exception fields, copy roles, batch print volume, separation and packing by location.",
      href: "/products/delivery-note-forms",
      linkLabel: "Review delivery forms",
      image: {
        slot: "continuous-computer-forms:series:logistics",
        fallback: WAREHOUSE_IMAGE,
        alt: "Continuous delivery packing and warehouse forms for ERP and WMS",
      },
    },
    {
      id: "numbered-coded",
      label: "Traceable document route",
      title: "Numbered, Barcode & System-Referenced Forms",
      description:
        "Continuous forms with approved serial numbers, barcode or QR areas and system-reference fields for matching paper records to digital transactions.",
      buyerFit:
        "Provide number logic, symbology or QR content, human-readable text, variable source, scan area, verification method, duplicate rules and version control.",
      href: "#inquiry",
      linkLabel: "Define a traceable form",
      image: {
        slot: "continuous-computer-forms:series:numbered",
        fallback: CONTINUOUS_IMAGE,
        alt: "Numbered and barcode continuous computer form",
      },
    },
    {
      id: "oem-wholesale",
      label: "Distributor supply route",
      title: "OEM, Plain Stock & Wholesale Fanfold Programs",
      description:
        "Controlled form, stack, inner wrap, carton and pallet programs for commercial printers, business-form distributors and institutional supply contracts.",
      buyerFit:
        "Confirm SKU mix, dimensions, plies, sheets or forms per stack, folds, inner wrap, carton count, labels, marks, pallet and destination requirements.",
      href: "/oem",
      linkLabel: "Review an OEM program",
      image: {
        slot: "continuous-computer-forms:series:oem",
        fallback: FACTORY_IMAGE,
        alt: "OEM wholesale continuous fanfold forms packed for distribution",
      },
    },
  ],
  sizes: [
    {
      slug: "1-ply",
      label: "1-Ply Plain",
      market: "Global",
      badge: "Single Copy",
      use: "Statements, reports, invoices, lists and other outputs requiring one printed record",
      href: "/products/continuous-computer-forms#inquiry",
    },
    {
      slug: "2-part",
      label: "2-Part Duplicate",
      market: "Global",
      badge: "Original + Copy",
      use: "System output where two departments or parties need aligned copies",
      href: "/products/ncr-forms/2-part",
    },
    {
      slug: "3-part",
      label: "3-Part Triplicate",
      market: "Global",
      badge: "Common Multi-Copy",
      use: "Customer, finance and warehouse or operations copy workflows",
      href: "/products/ncr-forms/3-part",
    },
    {
      slug: "4-part",
      label: "4-Part Quadruplicate",
      market: "Global",
      badge: "Extended Workflow",
      use: "Logistics, finance, carrier, branch or archive copy distribution",
      href: "/products/ncr-forms/4-part",
    },
  ],
  applications: [
    {
      id: "erp-finance",
      title: "ERP finance, invoice and statement output",
      description:
        "Preprinted or plain continuous forms aligned to accounting, invoice, statement and document-filing templates.",
      confirm:
        "system and printer, template dimensions, fixed and variable fields, plies, numbering, perforation, record handling, versions and batch volume",
      href: "/products/custom-ncr-forms",
      linkLabel: "Review custom form inputs",
      image: {
        slot: "continuous-computer-forms:applications:finance",
        fallback: FINANCE_IMAGE,
        alt: "ERP finance and invoice continuous form application",
      },
    },
    {
      id: "warehouse-wms",
      title: "Warehouse, WMS and packing operations",
      description:
        "Picking, packing, receiving and inventory records printed in batches and separated at warehouse workstations.",
      confirm:
        "WMS template, printer, SKU and barcode area, form depth, copies, workstation separation, batch volume, stack count and carton allocation",
      href: "/products/logistics-warehouse-ncr-forms",
      linkLabel: "Review warehouse forms",
      image: {
        slot: "continuous-computer-forms:applications:warehouse",
        fallback: WAREHOUSE_IMAGE,
        alt: "Warehouse WMS continuous packing and inventory forms",
      },
    },
    {
      id: "logistics",
      title: "3PL, dispatch and transport documents",
      description:
        "Delivery notes, waybills and shipment records requiring driver, warehouse, customer or finance copies.",
      confirm:
        "shipment and route fields, driver and consignee copies, signatures, exceptions, numbering, system reference, print batches and destination packing",
      href: "/products/delivery-note-forms",
      linkLabel: "Review delivery documents",
      image: {
        slot: "continuous-computer-forms:applications:logistics",
        fallback: DELIVERY_IMAGE,
        alt: "Logistics dispatch and transport continuous forms",
      },
    },
    {
      id: "manufacturing",
      title: "Manufacturing and production administration",
      description:
        "Job, material, dispatch and production records generated by legacy or impact-print systems across plant workflows.",
      confirm:
        "system template, printer locations, job and material fields, copy recipients, environment, form separation, batch size, shift usage and storage",
      href: "#inquiry",
      linkLabel: "Review a plant workflow",
      image: {
        slot: "continuous-computer-forms:applications:manufacturing",
        fallback: FACTORY_IMAGE,
        alt: "Manufacturing system continuous form workflow",
      },
    },
    {
      id: "institutional",
      title: "Government, utility and institutional systems",
      description:
        "Controlled continuous records for public, utility and institutional systems using defined layouts, numbering, copies and archive handling.",
      confirm:
        "tender or system file, copy roles, numbering, language, security or archive scope, printer, dimensions, versions, packing labels and acceptance method",
      href: "/products/government-ncr-forms",
      linkLabel: "Review institutional forms",
      image: {
        slot: "continuous-computer-forms:applications:institutional",
        fallback: FINANCE_IMAGE,
        alt: "Government and institutional continuous computer forms",
      },
    },
    {
      id: "distributor",
      title: "Commercial printers and form distributors",
      description:
        "Multi-SKU plain or preprinted fanfold programs with controlled stack counts, cartons, labels and repeat references.",
      confirm:
        "SKU and size mix, plies, paper, print versions, stacks and forms per stack, inner wrap, carton, barcode, pallet and destination",
      href: "/oem",
      linkLabel: "Review wholesale supply",
      image: {
        slot: "continuous-computer-forms:applications:distributor",
        fallback: RETAIL_IMAGE,
        alt: "Commercial printer and distributor continuous form supply",
      },
    },
  ],
  selectionSteps: [
    {
      step: "01",
      title: "System, printer and feed path",
      description: "Identify the equipment and how each print job enters, advances and separates.",
      inputs: [
        "ERP, WMS, accounting, logistics or other source system",
        "Printer manufacturer, model and impact or line-print method",
        "Tractor location, adjustable width and paper path",
        "Batch size, print speed need and operator changeover workflow",
      ],
    },
    {
      step: "02",
      title: "Web, form and fold geometry",
      description: "Record every physical dimension that controls feeding and field alignment.",
      inputs: [
        "Total web width including sprocket margins",
        "Finished width after removable margins",
        "Form depth, fold pitch and pages or forms per fold",
        "Sprocket-hole position, margin removal and cross perforation",
      ],
    },
    {
      step: "03",
      title: "Paper, plies and preprint",
      description: "Define the copy construction and align fixed printing with system data.",
      inputs: [
        "1-ply bond or CB, CFB and CF carbonless sequence",
        "Basis weight, caliper, copy colors and lower-ply requirement",
        "Fixed artwork, variable print zone, colors and registration marks",
        "Numbering, barcode or QR area, vertical slit and perforation",
      ],
    },
    {
      step: "04",
      title: "Run test, stack and reorder",
      description: "Approve the form in the real printer and freeze its packing reference.",
      inputs: [
        "Feed, registration, transfer, fold and tear-off trial",
        "Forms, sheets or folds per stack and stack orientation",
        "Inner wrap, carton count, labels, pallet and destination",
        "Quantity by SKU or version, delivery window and reorder ID",
      ],
    },
  ],
  evidence: {
    image: {
      slot: "continuous-computer-forms:quality",
      fallback: FACTORY_IMAGE,
      alt: "Continuous computer form feed registration perforation and stack quality review",
    },
    label: "Printer-to-carton approval",
    title: "Approve feed, registration, copies and stack behavior",
    description:
      "A continuous form is ready when it tracks through the intended printer, fixed and variable fields register, every required ply is readable, folds and perforations separate cleanly, and the stack loads in the approved direction.",
    checks: [
      {
        title: "Feed and geometry check",
        description:
          "Verify total and finished widths, form depth, sprocket position, tractor engagement, fold direction and stable tracking through the printer path.",
      },
      {
        title: "Print and transfer check",
        description:
          "Review fixed-to-variable registration, impact through every ply, lower-copy readability, number or barcode placement and field capacity.",
      },
      {
        title: "Perforation and stack check",
        description:
          "Confirm margin removal, cross and vertical perforation, fold alignment, separation force, pages or forms per fold and stack orientation.",
      },
      {
        title: "Version and packing check",
        description:
          "Match artwork revision, dimensions, plies, forms per stack, inner wrap, carton count, labels, pallet and approved reorder reference.",
      },
    ],
    note:
      "A printer family name or nominal width does not prove compatibility. Confirm the exact model, complete dimensions and a representative live run. Paper chemistry, FSC, archival, security and regulated-document claims require order-specific evidence.",
  },
  faq: [
    {
      q: "What information is needed for a continuous computer form quotation?",
      a: "Send the printer model, system use, total and finished widths, form depth, sprocket and perforation details, plies, paper, artwork, numbering, stack count, quantity by version, packing and destination.",
    },
    {
      q: "What are continuous computer forms?",
      a: "They are connected forms folded into stacks and fed through sprocket or tractor mechanisms. They are commonly used with impact, dot-matrix or line printers for ERP, warehouse, logistics, finance and institutional output.",
    },
    {
      q: "What is the difference between total web width and finished form width?",
      a: "Total web width includes the sprocket margins used by the tractor feed. Finished width is the document width after removable margins are detached. Both dimensions, plus form depth, are needed for printer fit and artwork alignment.",
    },
    {
      q: "Can continuous forms be 2-part, 3-part or 4-part carbonless?",
      a: "Yes. Multi-part forms use an approved CB, CFB and CF sequence so one impact-print pass creates aligned copies. Confirm the copy roles, colors, impact pressure, lower-ply readability and separation method.",
    },
    {
      q: "Can fixed layouts be preprinted while the ERP adds variable data?",
      a: "Yes. Provide the system template and artwork showing fixed and variable zones. Registration, margins, field capacity, colors, numbering and every version should be approved before production.",
    },
    {
      q: "Can continuous forms include numbering, barcodes or QR codes?",
      a: "Yes. Provide the sequence, symbology or QR content, variable-data source, human-readable text, scan area and verification requirement. These elements must align with the system output and perforations.",
    },
    {
      q: "How is printer compatibility checked?",
      a: "Confirm the exact printer model and complete media dimensions, then run a representative sample through the real feed path. Check tractor engagement, tracking, registration, impact transfer, folding and tear-off under normal job settings.",
    },
    {
      q: "How are minimum order and production timing confirmed?",
      a: "They depend on dimensions, plies, paper, print colors, artwork versions, numbering, perforation, stack count, quantity, proof, packing and destination. Send the required delivery window and quantity by version for order-specific confirmation.",
    },
  ],
  inquiry: {
    label: "B2B continuous-form review",
    title: "Send the printer, full geometry, plies and stack requirements",
    description:
      "A complete request lets us identify missing feed, artwork, construction, test and packing inputs before quotation.",
    checklist: [
      "System use, exact printer model, tractor position, batch volume and operator workflow",
      "Total web width, finished width, form depth, fold pitch, sprocket and perforation details",
      "1-ply or carbonless sequence, paper, fixed artwork, variable zone, numbering or barcode",
      "Forms per stack, inner wrap, carton, quantity by version, destination and delivery window",
    ],
    productName: "Continuous Computer Forms",
    initialMessage:
      "Company and buyer type:\nSystem use and document type:\nPrinter manufacturer and model:\nTractor position and paper path:\nTotal web width including sprocket margins:\nFinished width after margin removal:\nForm depth and fold pitch:\nSprocket-hole and perforation details:\n1-ply or number of carbonless parts:\nPaper and copy-color sequence:\nArtwork, PDF or marked sample:\nFixed and variable print zones:\nPrint colors and registration requirement:\nNumbering, barcode or QR requirement:\nForms, sheets or folds per stack:\nQuantity by form, language or version:\nLive printer sample requirement:\nInner wrap, carton and pallet packing:\nPrivate-label or carton-mark requirement:\nDestination country / port:\nRequested delivery window:\nCurrent feed or supply problem:",
    responseNote:
      "We will review the printer path, identify missing specification inputs and confirm the next quotation step.",
  },
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "NCR Forms", path: "/products/ncr-forms" },
    { name: "Continuous Computer Forms", path: "/products/continuous-computer-forms" },
  ],
  relatedPrograms: [
    { label: "NCR Forms & Carbonless Paper", href: "/products/ncr-forms" },
    { label: "Custom NCR Forms", href: "/products/custom-ncr-forms" },
    { label: "Delivery Note Forms", href: "/products/delivery-note-forms" },
    { label: "Logistics & Warehouse NCR Forms", href: "/products/logistics-warehouse-ncr-forms" },
  ],
} satisfies ProductCategoryConfig;
