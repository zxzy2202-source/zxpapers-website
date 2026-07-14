import type { SlotKey } from "@/config/imageSlots";

export interface NcrApplicationStat {
  value: string;
  label: string;
}

export interface NcrApplicationCard {
  title: string;
  desc: string;
  badge?: string;
  href?: string;
}

export interface NcrApplicationSpec {
  label: string;
  value: string;
}

export interface NcrApplicationFaq {
  q: string;
  a: string;
}

export interface NcrApplicationPageData {
  slug: string;
  heroSlot: SlotKey;
  name: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  heroBadge: string;
  title: string;
  highlight: string;
  subtitle: string;
  trustBadges: string[];
  stats: NcrApplicationStat[];
  intro: {
    title: string;
    lead: string;
    bullets: string[];
  };
  overview: {
    title: string;
    paragraphs: string[];
  };
  feature: {
    title: string;
    lead: string;
    bullets: string[];
  };
  productsTitle: string;
  productsDescription: string;
  products: NcrApplicationCard[];
  relatedForms: NcrApplicationCard[];
  comparison: {
    title: string;
    leftHeader: string;
    rightHeader: string;
    rows: Array<{ factor: string; left: string; right: string }>;
  };
  specs: NcrApplicationSpec[];
  whyUs: Array<{ title: string; text: string; icon: "file" | "layers" | "shield" | "truck" | "boxes" | "factory" }>;
  faqs: NcrApplicationFaq[];
  geoAnswer: NcrApplicationFaq;
  inquiry: {
    title: string;
    description: string;
    whatsappText: string;
  };
}

export const ncrApplicationPages: NcrApplicationPageData[] = [
  {
    slug: "government-ncr-forms",
    heroSlot: "ncr-applications:government-ncr-forms:hero",
    name: "Government NCR Forms",
    metaTitle: "Government NCR Forms | Public-Sector Carbonless Forms",
    metaDescription:
      "Custom government NCR forms for permits, receipts, inspection reports, customs documents, procurement receiving records and archive-ready multi-part documentation.",
    keywords:
      "government NCR forms, public sector carbonless forms, permit forms, inspection report forms, procurement receiving forms, customs NCR forms, numbered government forms",
    heroBadge: "Public-Sector Records",
    title: "Government NCR Forms for",
    highlight: "Public-Sector Records",
    subtitle:
      "Custom carbonless forms for permits, receipts, inspection reports, customs documents, procurement receiving reports and other public-sector records that require signatures, numbering and long-term archiving.",
    trustBadges: ["Numbered Forms", "2-Part to 6-Part", "Bilingual Printing", "Archive-Ready Copies"],
    stats: [
      { value: "2-6 Part", label: "Copy Sets" },
      { value: "Numbered", label: "Traceable" },
      { value: "Bilingual", label: "Layouts" },
      { value: "24h", label: "Quote Response" },
    ],
    intro: {
      title: "Multi-Copy Forms for Official Workflows",
      lead:
        "Government and public-sector suppliers use NCR forms when a record must be signed once and distributed immediately across departments, contractors, citizens and archives.",
      bullets: [
        "Permit, application and payment receipt forms",
        "Inspection, enforcement and correction notices",
        "Procurement receiving and stock issue records",
        "Customs, border and public-service documentation",
      ],
    },
    overview: {
      title: "Why Public-Sector Buyers Still Use Carbonless Forms",
      paragraphs: [
        "Government workflows often involve several parties that each need an immediate copy: the public office, the applicant, the finance team, the field inspector, the supplier or the archive. NCR forms keep these copies aligned without separate carbon sheets.",
        "The buying decision is usually driven by traceability and zero-error delivery rather than paper alone. Sequential numbering, copy-color sequence, bilingual wording, clear signature fields and secure export packaging matter because a missed number or unclear copy can delay acceptance.",
        "ZhixinPaper produces these forms as loose sets, pads, books or continuous forms, with custom fields, numbering, perforation, copy roles and packaging labels for public-sector tenders and government supply programs.",
      ],
    },
    feature: {
      title: "Designed for Signatures, Numbering and Archives",
      lead:
        "Every copy can be assigned a role, so the right party keeps the right record after one handwritten or impact-printed entry.",
      bullets: [
        "Department, applicant, finance and archive copy labels",
        "Sequential numbering, barcodes or QR codes on request",
        "Optional anti-copy patterns, watermarks and security numbering",
        "Phenol-free / BPA-free options available upon request",
      ],
    },
    productsTitle: "Government Form Applications",
    productsDescription: "Common public-sector records that benefit from multi-part carbonless copies.",
    products: [
      { title: "Permit & Application Forms", desc: "2-part or 3-part forms for citizen copy, office copy and back-office review.", badge: "Permits" },
      { title: "Inspection Reports", desc: "Field inspection and enforcement notices with signed public and archive copies.", badge: "Inspection" },
      { title: "Procurement Receiving Records", desc: "Supplier, warehouse, finance and acceptance copies for public procurement.", badge: "Receiving" },
      { title: "Customs & Border Forms", desc: "Multi-part customs, clearance and handover forms with numbered control.", badge: "Customs" },
      { title: "Fee & Receipt Books", desc: "Numbered receipt books for public counters and service payments.", badge: "Receipts" },
      { title: "Election & Registration Forms", desc: "Numbered registration and issue forms with controlled packaging.", badge: "Records" },
    ],
    relatedForms: [
      { title: "Custom NCR Forms", desc: "Logo, fields, numbering and copy sequence for tender-specific layouts.", href: "/products/custom-ncr-forms", badge: "Custom" },
      { title: "Multi-Part NCR Forms", desc: "5+ ply forms for customs, agencies and multi-department workflows.", href: "/products/ncr-forms/multi-part", badge: "5+ Ply" },
      { title: "Continuous Computer Forms", desc: "Pin-feed and fanfold forms for legacy public-sector systems.", href: "/products/continuous-computer-forms", badge: "Continuous" },
      { title: "Delivery Note Forms", desc: "Receiving reports and signed delivery records for procurement workflows.", href: "/products/delivery-note-forms", badge: "Receiving" },
    ],
    comparison: {
      title: "Government Form Structure",
      leftHeader: "Typical Requirement",
      rightHeader: "Recommended NCR Setup",
      rows: [
        { factor: "Permit counter records", left: "Applicant and office each need a copy", right: "2-part or 3-part with clear copy labels" },
        { factor: "Procurement receiving", left: "Supplier, warehouse, finance and archive copies", right: "4-part or 5-part with sequential numbering" },
        { factor: "Field inspections", left: "Signed notice plus long-term record", right: "3-part book with wraparound cover" },
        { factor: "Customs or border forms", left: "Multiple agencies need controlled copies", right: "4-part to 6-part with copy-color sequence" },
      ],
    },
    specs: [
      { label: "Copies", value: "2-part to 6-part carbonless sets" },
      { label: "Formats", value: "Loose sets, pads, receipt books, bound books or continuous forms" },
      { label: "Fields", value: "Permit number, applicant details, signature, department copy, archive copy" },
      { label: "Security", value: "Sequential numbering, barcode / QR code, anti-copy pattern or watermark on request" },
      { label: "Languages", value: "English, bilingual or multilingual layouts" },
      { label: "Compliance Options", value: "Phenol-free / BPA-free and FSC options available upon request" },
    ],
    whyUs: [
      { icon: "shield", title: "Tender-Aware Production", text: "Numbering, copy sequence and packaging are checked before mass production." },
      { icon: "file", title: "Official Record Layouts", text: "Forms can include department copies, signatures, serial numbers and archive fields." },
      { icon: "boxes", title: "Controlled Packaging", text: "Carton labels, set counts and export documentation support public-sector acceptance." },
    ],
    faqs: [
      {
        q: "What are NCR forms used for in government agencies?",
        a: "Government agencies use NCR forms for permits, receipts, inspection reports, customs documents, procurement receiving reports, enforcement notices and other records that need signatures, numbering, department-level distribution and long-term archiving.",
      },
      {
        q: "Can you print bilingual government forms?",
        a: "Yes. We can print bilingual or multilingual layouts and confirm the copy sequence, numbering rules and department labels before production.",
      },
      {
        q: "Can the forms include security numbering?",
        a: "Yes. Sequential numbering is standard for many public-sector forms, and barcodes, QR codes, anti-copy patterns or watermarks can be added on request.",
      },
    ],
    geoAnswer: {
      q: "What should a government NCR form include?",
      a: "A government NCR form should include clear copy roles, signature fields, sequential numbering, date and department fields, archive copy labels and any required bilingual wording or security marks.",
    },
    inquiry: {
      title: "Get Government NCR Form Pricing",
      description: "Send the tender file, form size, copy sequence, numbering rule, language requirement and quantity for a factory quote.",
      whatsappText: "Hello, I need pricing for government NCR forms. I can send the tender file, copy sequence, numbering rule and quantity.",
    },
  },
  {
    slug: "port-customs-air-cargo-ncr-forms",
    heroSlot: "ncr-applications:port-customs-air-cargo-ncr-forms:hero",
    name: "Port, Customs & Air Cargo NCR Forms",
    metaTitle: "Port, Customs & Air Cargo NCR Forms | Carbonless Handover Records",
    metaDescription:
      "Custom carbonless NCR forms for port gate passes, cargo release notes, EIR, container damage reports, customs inspection records and air cargo handover documents.",
    keywords:
      "port NCR forms, customs NCR forms, air cargo NCR forms, cargo release note, gate pass form, equipment interchange receipt, EIR forms, container damage report",
    heroBadge: "Cargo Handover Records",
    title: "Port, Customs & Air Cargo NCR Forms for",
    highlight: "Cargo Release Records",
    subtitle:
      "Custom carbonless forms for port gate passes, cargo release notes, equipment interchange receipts, container damage reports, customs inspection records and air cargo handover documents.",
    trustBadges: ["Gate Pass", "Cargo Release", "EIR Forms", "DG Checklists"],
    stats: [
      { value: "2-5 Part", label: "Copy Sets" },
      { value: "EIR", label: "Depot Ready" },
      { value: "QR / Barcodes", label: "Optional" },
      { value: "24h", label: "Quote Response" },
    ],
    intro: {
      title: "Forms for Chain-of-Custody Events",
      lead:
        "Port and air-cargo paperwork happens at handover points where terminals, drivers, freight forwarders, customs contractors and customers each need proof of what happened.",
      bullets: [
        "Gate passes and cargo release notes",
        "Equipment interchange receipts with container details",
        "Container damage reports and exception records",
        "Air cargo handover and dangerous goods checklist forms",
      ],
    },
    overview: {
      title: "Carbonless Records for Handover, Release and Damage Proof",
      paragraphs: [
        "Many port and air-cargo systems are digital, but physical signed records still matter when cargo, vehicles, containers and regulatory parties meet at the same handover point. NCR forms give each party an immediate copy without re-entering the record.",
        "These buyers care about responsibility boundaries more than generic stationery. The form should show cargo numbers, seal numbers, container condition, driver details, release authority, abnormal cargo notes and the signatures that prove responsibility transfer.",
        "ZhixinPaper prints port and customs NCR forms with sequential numbering, copy-color roles, barcodes or QR codes, damage diagrams and reinforced export packaging for humid ports and long-distance sea freight.",
      ],
    },
    feature: {
      title: "Make Responsibility Clear at Every Handover",
      lead:
        "Pre-printed roles and fields reduce disputes when a container, shipment or gate pass changes hands.",
      bullets: [
        "Terminal, driver, freight forwarder and customer copy labels",
        "Container number, seal number, cargo ID and release fields",
        "Damage diagram, exception notes and photo reference fields",
        "Dangerous goods checklist and responsible-person signature fields",
      ],
    },
    productsTitle: "Port and Cargo Form Applications",
    productsDescription: "Carbonless forms for the cargo events where signatures and copy distribution still matter.",
    products: [
      { title: "Port Gate Passes", desc: "Entry, exit and cargo movement passes for terminals, drivers and security desks.", badge: "Gate" },
      { title: "Cargo Release Notes", desc: "Release documents for forwarders, carriers, warehouses and customers.", badge: "Release" },
      { title: "Equipment Interchange Receipts", desc: "EIR forms with container number, seal number and condition fields.", badge: "EIR" },
      { title: "Container Damage Reports", desc: "Damage-position diagrams, exception notes and signature records.", badge: "Damage" },
      { title: "Air Cargo Handover Forms", desc: "Handover, short-transfer and abnormal-cargo records for cargo terminals.", badge: "Air Cargo" },
      { title: "Dangerous Goods Checklists", desc: "DG inspection items, declaration fields and responsible-party signatures.", badge: "DG" },
    ],
    relatedForms: [
      { title: "Delivery Note Forms", desc: "Proof-of-delivery forms for logistics and warehouse dispatch.", href: "/products/delivery-note-forms", badge: "POD" },
      { title: "4-Part NCR Forms", desc: "Four-copy sets for terminal, driver, forwarder and customer records.", href: "/products/ncr-forms/4-part", badge: "4-Part" },
      { title: "Multi-Part NCR Forms", desc: "5+ ply forms for customs and regulated cargo workflows.", href: "/products/ncr-forms/multi-part", badge: "5+ Ply" },
      { title: "Custom NCR Forms", desc: "Fully custom layouts with numbering, barcodes and copy roles.", href: "/products/custom-ncr-forms", badge: "Custom" },
    ],
    comparison: {
      title: "Cargo Workflow Mapping",
      leftHeader: "Handover Event",
      rightHeader: "Useful NCR Form",
      rows: [
        { factor: "Gate entry / exit", left: "Driver and terminal need proof", right: "Numbered gate pass with terminal and driver copies" },
        { factor: "Cargo release", left: "Release authority and pickup proof", right: "3-part or 4-part cargo release note" },
        { factor: "Container pickup / return", left: "Condition and seal details matter", right: "EIR with damage diagram and signatures" },
        { factor: "Dangerous goods handover", left: "Inspection items cannot be missed", right: "DG checklist with responsible-person signatures" },
      ],
    },
    specs: [
      { label: "Copies", value: "2-part to 5-part carbonless sets" },
      { label: "Fields", value: "Cargo ID, container number, seal number, driver, terminal, damage notes" },
      { label: "Tracking", value: "Sequential numbering, barcode or QR code available" },
      { label: "Formats", value: "Loose sets, pads, books or continuous forms" },
      { label: "Durability", value: "Wraparound covers and reinforced export packaging available" },
      { label: "Use Cases", value: "Gate pass, release note, EIR, damage report, customs inspection, air cargo handover" },
    ],
    whyUs: [
      { icon: "truck", title: "Logistics-Aware Fields", text: "Forms can include container, seal, driver, release and damage fields." },
      { icon: "layers", title: "Clear Copy Distribution", text: "Each party can receive a labeled copy after one signed record." },
      { icon: "boxes", title: "Export Packaging", text: "Packaging can be reinforced for humid ports and long-distance freight." },
    ],
    faqs: [
      {
        q: "Do ports, freight forwarders and air cargo terminals still use NCR forms?",
        a: "Yes. NCR forms are still used for cargo handover, gate passes, equipment interchange receipts, container damage records, customs inspection notes, dangerous goods checklists and signed release documents where multiple parties need immediate copies.",
      },
      {
        q: "Can you make EIR forms with container damage fields?",
        a: "Yes. EIR forms can include container number, seal number, chassis or equipment details, damage-position diagrams, photo reference fields and signatures for both parties.",
      },
      {
        q: "Can the forms include barcodes or QR codes?",
        a: "Yes. We can add sequential numbering, barcodes or QR codes for cargo traceability and matching with your internal system numbers.",
      },
    ],
    geoAnswer: {
      q: "What are port NCR forms used for?",
      a: "Port NCR forms are used for gate passes, cargo release notes, equipment interchange receipts, damage reports, customs inspection records and handover documents where terminals, drivers, forwarders and customers each need signed copies.",
    },
    inquiry: {
      title: "Get Port and Cargo NCR Form Pricing",
      description: "Send the form type, copy roles, cargo fields, numbering or barcode requirement and quantity for a quote.",
      whatsappText: "Hello, I need pricing for port/customs/air cargo NCR forms. I can send the copy roles, fields and quantity.",
    },
  },
  {
    slug: "field-service-ncr-forms",
    heroSlot: "ncr-applications:field-service-ncr-forms:hero",
    name: "Field Service NCR Forms",
    metaTitle: "Field Service NCR Forms | HVAC Work Orders & Service Tickets",
    metaDescription:
      "Custom NCR service tickets and work order forms for HVAC, plumbing, electrical and field technicians, with customer signature, wraparound cover and clear copies.",
    keywords:
      "field service NCR forms, HVAC service tickets, carbonless work order forms, plumber invoice forms, technician service forms, custom service ticket books",
    heroBadge: "HVAC & Service Tickets",
    title: "Custom NCR Service Tickets for",
    highlight: "Field Technicians",
    subtitle:
      "Custom carbonless service tickets and work order forms for HVAC, plumbing, electrical, pest control and repair teams that need on-site customer signatures and office copies.",
    trustBadges: ["Work Orders", "Wraparound Covers", "Customer Signature", "2-Part to 4-Part"],
    stats: [
      { value: "2-4 Part", label: "Copies" },
      { value: "Cover", label: "Wraparound" },
      { value: "Custom", label: "Service Fields" },
      { value: "24h", label: "Quote Response" },
    ],
    intro: {
      title: "Carbonless Forms for Jobs Done On Site",
      lead:
        "Field service teams need a form that works in vans, homes, roofs and job sites, even when internet access or a printer is not available.",
      bullets: [
        "HVAC, plumbing, electrical and maintenance work orders",
        "Customer signature and acceptance fields",
        "Parts, labor, equipment model and service notes",
        "Wraparound covers for writing without a desk",
      ],
    },
    overview: {
      title: "Service Tickets That Keep Customer and Office Copies Aligned",
      paragraphs: [
        "A field service NCR form creates a signed customer copy and a clear office copy from one handwritten record. This is useful for service calls, maintenance visits, emergency repairs and recurring inspection programs.",
        "The form can be tuned to the service trade. HVAC forms may include equipment model, refrigerant, parts and labor; plumbing forms may include fixture notes and job authorization; repair forms may include problem description, warranty status and customer approval.",
        "ZhixinPaper manufactures these forms as loose sets, pads or service ticket books with custom fields, numbering, perforation, wraparound covers and logo printing for distributors, Amazon sellers and service companies.",
      ],
    },
    feature: {
      title: "Built for Outdoor Writing and Signed Approval",
      lead:
        "The right format helps technicians write clearly and leave a professional signed record with the customer.",
      bullets: [
        "Wraparound cover protects copies and gives a firm writing surface",
        "Customer, office, accounting and technician copy roles",
        "Pre-printed terms, authorization and payment fields",
        "Numbered books for repeat service teams and route control",
      ],
    },
    productsTitle: "Field Service Form Applications",
    productsDescription: "Common service documents for technicians and repair teams.",
    products: [
      { title: "HVAC Service Tickets", desc: "Equipment, refrigerant, parts, labor and customer approval fields.", badge: "HVAC" },
      { title: "Plumbing Work Orders", desc: "Job notes, fixture details, material list and signed authorization.", badge: "Plumbing" },
      { title: "Electrical Service Forms", desc: "Site notes, work performed, safety check and acceptance signatures.", badge: "Electrical" },
      { title: "Pest Control Service Records", desc: "Treatment notes, property fields and customer copy records.", badge: "Pest Control" },
      { title: "Maintenance Reports", desc: "Equipment status, checklist items and follow-up action fields.", badge: "Maintenance" },
      { title: "Service Invoice Books", desc: "On-site invoice, receipt and payment record books.", badge: "Invoice" },
    ],
    relatedForms: [
      { title: "Custom NCR Forms", desc: "Send your service ticket layout for custom printing and numbering.", href: "/products/custom-ncr-forms", badge: "Custom" },
      { title: "2-Part NCR Forms", desc: "Customer copy plus office copy for simple service calls.", href: "/products/ncr-forms/2-part", badge: "2-Part" },
      { title: "3-Part NCR Forms", desc: "Customer, office and accounting copies for service invoices.", href: "/products/ncr-forms/3-part", badge: "3-Part" },
      { title: "NCR Receipt Books", desc: "Carbonless books for on-site payments and counter transactions.", href: "/products/ncr-receipt-books", badge: "Receipts" },
    ],
    comparison: {
      title: "Choosing Service Ticket Copies",
      leftHeader: "Field Workflow",
      rightHeader: "Suggested Structure",
      rows: [
        { factor: "Simple service call", left: "Customer and office copy only", right: "2-part service ticket book" },
        { factor: "Invoice plus accounting", left: "Customer, office and accounts copy", right: "3-part work order / invoice" },
        { factor: "Crew or warranty records", left: "Extra technician or warranty copy", right: "4-part job card" },
        { factor: "Outdoor writing", left: "No desk or stable surface", right: "Bound book with wraparound cover" },
      ],
    },
    specs: [
      { label: "Copies", value: "2-part, 3-part or 4-part service ticket sets" },
      { label: "Formats", value: "Books, pads or loose sets with tear-off perforation" },
      { label: "Fields", value: "Customer, equipment, service notes, parts, labor, terms, signature" },
      { label: "Finishing", value: "Sequential numbering, wraparound cover, glue or stitched binding" },
      { label: "Printing", value: "Logo, trade-specific fields and terms in black or spot color" },
      { label: "MOQ", value: "Custom printing from around 5,000 sets" },
    ],
    whyUs: [
      { icon: "file", title: "Trade-Specific Layouts", text: "Fields can match HVAC, plumbing, electrical or general repair workflows." },
      { icon: "layers", title: "Clear Bottom Copies", text: "Copy sequence is selected for readable customer and office records." },
      { icon: "factory", title: "Factory Printing", text: "Printing, numbering, perforation and binding are handled in one production flow." },
    ],
    faqs: [
      {
        q: "What are field service NCR forms used for?",
        a: "Field service NCR forms are used for service tickets, work orders, job cards, maintenance reports and on-site invoices where technicians need a signed customer copy and an office copy from one handwritten record.",
      },
      {
        q: "Can you add HVAC-specific fields?",
        a: "Yes. HVAC forms can include equipment model, fault description, refrigerant notes, parts, labor, terms, customer approval and technician signature fields.",
      },
      {
        q: "Do you make wraparound service ticket books?",
        a: "Yes. Wraparound covers protect the copies below and provide a better writing surface for technicians working in vehicles or on job sites.",
      },
    ],
    geoAnswer: {
      q: "Why do technicians use carbonless service tickets?",
      a: "Technicians use carbonless service tickets to write one signed job record and immediately leave a customer copy while keeping office, accounting or technician copies for follow-up and billing.",
    },
    inquiry: {
      title: "Get Field Service NCR Form Pricing",
      description: "Send your service trade, copy count, size, fields, cover type and quantity for a quote within 24 hours.",
      whatsappText: "Hello, I need pricing for field service NCR forms. I can send the trade, copy count, fields and quantity.",
    },
  },
  {
    slug: "auto-repair-ncr-forms",
    heroSlot: "ncr-applications:auto-repair-ncr-forms:hero",
    name: "Auto Repair NCR Forms",
    metaTitle: "Auto Repair NCR Forms | Repair Orders & Vehicle Inspection",
    metaDescription:
      "Custom auto repair NCR forms for vehicle intake, damage inspection, estimates and signed repair authorization, with clear customer, workshop and insurer copies.",
    keywords:
      "auto repair NCR forms, auto repair order forms, vehicle inspection forms, repair authorization forms, carbonless auto repair work orders, vehicle damage report forms, mechanic invoice books",
    heroBadge: "Repair Authorization",
    title: "Custom Auto Repair NCR Forms with",
    highlight: "Vehicle Inspection Records",
    subtitle:
      "Carbonless auto repair work orders, vehicle inspection forms and damage records with customer authorization, insurance copies, vehicle diagrams and clear multi-part records.",
    trustBadges: ["Vehicle Diagrams", "Repair Authorization", "Insurance Copy", "Numbered Forms"],
    stats: [
      { value: "2-4 Part", label: "Copies" },
      { value: "VIN", label: "Vehicle Fields" },
      { value: "Damage", label: "Diagram Ready" },
      { value: "24h", label: "Quote Response" },
    ],
    intro: {
      title: "Signed Records for Repair, Inspection and Claims",
      lead:
        "Auto repair and vehicle inspection forms help shops document vehicle condition, customer authorization, repair scope and insurance records before disputes happen.",
      bullets: [
        "Vehicle inspection and damage diagrams",
        "Repair authorization and customer signature fields",
        "VIN, mileage, plate, insurance and job number fields",
        "Shop, customer, accounting and insurer copies",
      ],
    },
    overview: {
      title: "Carbonless Forms for Vehicle Responsibility Records",
      paragraphs: [
        "Auto repair workflows often need proof that the customer approved the work and that the vehicle condition was recorded before service. NCR forms let shops produce a customer copy, shop copy and accounting or insurer copy from one signed record.",
        "The strongest layouts include vehicle identification, mileage, repair authorization, old-parts handling, damage diagrams, estimate approval and payment terms. These fields make the form more useful than a generic invoice book.",
        "ZhixinPaper prints auto repair NCR forms as loose sets, pads or bound books with numbered sequences, perforation, custom logo printing and optional vehicle diagrams for repair chains, fleet shops, inspection centers and distributors.",
      ],
    },
    feature: {
      title: "Reduce Disputes Before the Vehicle Leaves",
      lead:
        "A signed and copied inspection record helps define what was seen, approved and handed over.",
      bullets: [
        "Vehicle 360-degree diagram and damage location fields",
        "Customer authorization and estimate approval section",
        "Insurance, fleet or head-office copy options",
        "Sequential numbering for job tracking and archive lookup",
      ],
    },
    productsTitle: "Auto Repair Form Applications",
    productsDescription: "Forms for repair shops, vehicle inspection centers, fleet service teams and insurance workflows.",
    products: [
      { title: "Repair Work Orders", desc: "Job description, parts, labor, authorization and customer signature.", badge: "Work Order" },
      { title: "Vehicle Inspection Forms", desc: "Checklist and condition records before repair or handover.", badge: "Inspection" },
      { title: "Damage Report Forms", desc: "Vehicle diagram, damage notes, photo reference and signatures.", badge: "Damage" },
      { title: "Repair Authorization Forms", desc: "Customer approval, estimate, old-parts handling and terms.", badge: "Authorization" },
      { title: "Fleet Service Records", desc: "Mileage, unit number, service interval and internal approval copies.", badge: "Fleet" },
      { title: "Mechanic Invoice Books", desc: "Numbered invoice and receipt books for auto repair counters.", badge: "Invoice" },
    ],
    relatedForms: [
      { title: "Custom NCR Forms", desc: "Build your repair form layout with vehicle fields and numbering.", href: "/products/custom-ncr-forms", badge: "Custom" },
      { title: "3-Part NCR Forms", desc: "Customer, shop and accounting copies for repair workflows.", href: "/products/ncr-forms/3-part", badge: "3-Part" },
      { title: "NCR Invoice Books", desc: "Carbonless invoice books for repair shops and service counters.", href: "/products/ncr-invoice-books", badge: "Invoices" },
      { title: "NCR Receipt Books", desc: "Payment receipt books for cash, card or deposit records.", href: "/products/ncr-receipt-books", badge: "Receipts" },
    ],
    comparison: {
      title: "Auto Repair Copy Planning",
      leftHeader: "Repair Scenario",
      rightHeader: "Recommended NCR Setup",
      rows: [
        { factor: "Standard repair", left: "Customer and shop need signed record", right: "2-part or 3-part work order" },
        { factor: "Insurance repair", left: "Customer, shop and insurer copies", right: "3-part repair authorization form" },
        { factor: "Fleet maintenance", left: "Driver, service shop and head office", right: "3-part or 4-part fleet service record" },
        { factor: "Vehicle handover", left: "Damage responsibility must be clear", right: "Inspection form with vehicle diagram" },
      ],
    },
    specs: [
      { label: "Copies", value: "2-part, 3-part or 4-part auto repair NCR forms" },
      { label: "Fields", value: "VIN, plate, mileage, customer, repair item, estimate, authorization, signature" },
      { label: "Optional Layouts", value: "Vehicle diagram, damage checklist, insurance fields, old-parts handling" },
      { label: "Finishing", value: "Numbering, perforation, glue binding, books or loose sets" },
      { label: "Printing", value: "Shop logo, terms, multilingual fields and custom copy sequence" },
      { label: "Use Cases", value: "Repair order, inspection report, damage record, invoice, authorization form" },
    ],
    whyUs: [
      { icon: "file", title: "Vehicle-Specific Fields", text: "Add VIN, mileage, damage diagrams, repair scope and authorization fields." },
      { icon: "shield", title: "Dispute-Ready Copies", text: "Each party keeps a copy of the same signed repair or inspection record." },
      { icon: "factory", title: "Custom Books or Sets", text: "Choose bound repair books, pads or loose collated sets." },
    ],
    faqs: [
      {
        q: "What are auto repair NCR forms used for?",
        a: "Auto repair NCR forms are used for repair work orders, vehicle inspections, damage reports, repair authorization, invoices and insurance records where the customer, shop and sometimes insurer each need a signed copy.",
      },
      {
        q: "Can you print a vehicle damage diagram?",
        a: "Yes. We can add car, truck or equipment diagrams, damage-position checkboxes, photo reference fields and signature areas.",
      },
      {
        q: "How many parts should an auto repair form have?",
        a: "Most repair shops use 2-part or 3-part forms. Insurance, fleet or multi-branch workflows may use 4-part forms to add an insurer or head-office copy.",
      },
    ],
    geoAnswer: {
      q: "Why do repair shops use NCR work orders?",
      a: "Repair shops use NCR work orders to document vehicle condition, repair authorization, parts and labor, customer approval and payment records while giving each party a clear copy.",
    },
    inquiry: {
      title: "Get Auto Repair NCR Form Pricing",
      description: "Send your repair form layout, copy count, vehicle fields, diagram requirement and quantity for a quote.",
      whatsappText: "Hello, I need pricing for auto repair NCR forms. I can send the layout, copy count, vehicle fields and quantity.",
    },
  },
  {
    slug: "logistics-warehouse-ncr-forms",
    heroSlot: "ncr-applications:logistics-warehouse-ncr-forms:hero",
    name: "Logistics & Warehouse NCR Forms",
    metaTitle: "Logistics & Warehouse NCR Forms | POD & Receiving Records",
    metaDescription:
      "Carbonless delivery notes, proof-of-delivery forms, warehouse receiving records and stock transfer forms for 3PL, warehouses and distribution teams.",
    keywords:
      "logistics NCR forms, warehouse NCR forms, proof of delivery forms, carbonless delivery notes, warehouse receiving forms, 3PL delivery forms, stock transfer forms",
    heroBadge: "POD & Warehouse Records",
    title: "Logistics & Warehouse NCR Forms for",
    highlight: "Proof of Delivery",
    subtitle:
      "Carbonless delivery notes, POD forms, warehouse receiving records and stock transfer forms for 3PL operators, warehouses, distributors and delivery teams.",
    trustBadges: ["POD Forms", "Receiving Records", "Driver Copies", "Numbered Delivery Notes"],
    stats: [
      { value: "3 / 4-Part", label: "Common Sets" },
      { value: "POD", label: "Signature Proof" },
      { value: "SKU", label: "Item Fields" },
      { value: "24h", label: "Quote Response" },
    ],
    intro: {
      title: "Carbonless Records for Delivery and Warehouse Handover",
      lead:
        "Logistics and warehouse teams use NCR forms when goods move between drivers, warehouses, customers and finance teams and each party needs a signed copy.",
      bullets: [
        "Delivery notes and proof-of-delivery forms",
        "Warehouse receiving and goods-received notes",
        "Stock transfer, dispatch and shortage/damage records",
        "Driver, warehouse, customer and finance copy roles",
      ],
    },
    overview: {
      title: "Reduce Delivery Disputes With Signed Multi-Copy Records",
      paragraphs: [
        "Delivery and warehouse disputes usually come from unclear handover records: missing quantities, shortage claims, damage notes or signatures that cannot be traced later. NCR forms create identical copies at the moment goods are handed over.",
        "The best layouts show SKU, quantity, carton count, shortage, damage, received-by, time, driver and warehouse fields. Optional numbering, barcodes or QR codes help match the paper record with ERP, WMS or dispatch systems.",
        "ZhixinPaper produces logistics NCR forms as loose sets, pads, books or continuous forms, with custom copy sequences for drivers, warehouses, customers, finance and archive teams.",
      ],
    },
    feature: {
      title: "Make Shortage, Damage and Signature Records Clear",
      lead:
        "A well-designed POD or receiving form helps each party understand what was delivered, accepted, shorted or damaged.",
      bullets: [
        "SKU, quantity, carton count and exception fields",
        "Driver, warehouse, customer and finance copies",
        "Signature, time, received-by and condition fields",
        "Sequential numbering, barcodes or QR codes on request",
      ],
    },
    productsTitle: "Logistics and Warehouse Form Applications",
    productsDescription: "Common multi-copy forms for 3PL, warehouses and distribution operations.",
    products: [
      { title: "Proof of Delivery Forms", desc: "Customer signature, delivery condition and driver copy records.", badge: "POD" },
      { title: "Warehouse Receiving Forms", desc: "Inbound receiving, goods-received notes and shortage records.", badge: "Receiving" },
      { title: "Delivery Note Forms", desc: "Dispatch notes with customer, driver and warehouse copies.", badge: "Delivery" },
      { title: "Stock Transfer Forms", desc: "Branch, warehouse or store transfer records with copy distribution.", badge: "Transfer" },
      { title: "Damage / Shortage Reports", desc: "Exception checkboxes, damage notes and signature proof.", badge: "Exception" },
      { title: "Continuous Logistics Forms", desc: "Pin-feed and fanfold forms for ERP and warehouse systems.", badge: "Continuous" },
    ],
    relatedForms: [
      { title: "Delivery Note Forms", desc: "Dedicated page for carbonless delivery notes and waybills.", href: "/products/delivery-note-forms", badge: "POD" },
      { title: "Continuous Computer Forms", desc: "Fanfold forms for ERP, WMS and dot-matrix printers.", href: "/products/continuous-computer-forms", badge: "Continuous" },
      { title: "3-Part NCR Forms", desc: "Driver, warehouse and customer copy sequence.", href: "/products/ncr-forms/3-part", badge: "3-Part" },
      { title: "Custom NCR Forms", desc: "Custom POD, receiving and stock transfer forms.", href: "/products/custom-ncr-forms", badge: "Custom" },
    ],
    comparison: {
      title: "Logistics Copy Distribution",
      leftHeader: "Workflow Need",
      rightHeader: "Recommended NCR Setup",
      rows: [
        { factor: "Standard delivery", left: "Driver, warehouse and customer copies", right: "3-part delivery note / POD form" },
        { factor: "Freight or 3PL", left: "Carrier or finance also needs a copy", right: "4-part waybill or delivery order" },
        { factor: "Warehouse receiving", left: "Inbound, finance and supplier records", right: "3-part receiving form" },
        { factor: "System printing", left: "ERP or WMS prints batches", right: "Continuous computer forms" },
      ],
    },
    specs: [
      { label: "Copies", value: "2-part, 3-part or 4-part logistics NCR forms" },
      { label: "Fields", value: "SKU, quantity, cartons, damage, shortage, driver, warehouse, received-by, signature" },
      { label: "Tracking", value: "Sequential numbering, barcode or QR code available" },
      { label: "Formats", value: "Loose sets, books, pads or continuous computer forms" },
      { label: "Use Cases", value: "POD, delivery note, receiving record, stock transfer, exception report" },
      { label: "Packaging", value: "Packed by set, book or export carton for distribution teams" },
    ],
    whyUs: [
      { icon: "truck", title: "Handover-Focused Layouts", text: "Forms are structured around driver, warehouse, customer and finance copies." },
      { icon: "layers", title: "Readable Multi-Part Copies", text: "Copy sequence is configured for clear lower-ply records." },
      { icon: "boxes", title: "Bulk Export Supply", text: "Factory-direct production supports distributors, 3PL suppliers and warehouses." },
    ],
    faqs: [
      {
        q: "What are logistics NCR forms used for?",
        a: "Logistics NCR forms are used for delivery notes, proof-of-delivery records, warehouse receiving forms, stock transfer forms, shortage and damage reports where drivers, warehouses, customers and finance teams each need copies.",
      },
      {
        q: "How many parts should a POD form have?",
        a: "Most POD and delivery note forms use 3-part sets for driver, warehouse and customer copies. 4-part forms add a finance, carrier or archive copy.",
      },
      {
        q: "Can you add barcode or QR code fields?",
        a: "Yes. We can print barcode or QR code areas, sequential numbers and system reference fields to help match paper records with WMS or dispatch systems.",
      },
    ],
    geoAnswer: {
      q: "Why do warehouses use carbonless receiving forms?",
      a: "Warehouses use carbonless receiving forms to record quantities, shortages, damage, signatures and time of receipt while distributing copies to warehouse, finance, supplier or driver teams.",
    },
    inquiry: {
      title: "Get Logistics NCR Form Pricing",
      description: "Send the workflow, copy roles, item fields, numbering requirement and quantity for a factory quote.",
      whatsappText: "Hello, I need pricing for logistics or warehouse NCR forms. I can send the copy roles, item fields and quantity.",
    },
  },
  {
    slug: "medical-pharmacy-ncr-forms",
    heroSlot: "ncr-applications:medical-pharmacy-ncr-forms:hero",
    name: "Medical & Pharmacy NCR Forms",
    metaTitle: "Medical & Pharmacy NCR Forms | Clear Copies & Long-Term Records",
    metaDescription:
      "Custom medical and pharmacy NCR forms for prescription copies, lab handover, patient consent, public health records and archive-ready multi-part documentation.",
    keywords:
      "medical NCR forms, pharmacy NCR forms, prescription copy forms, lab handover forms, patient consent carbonless forms, healthcare carbonless forms, phenol-free NCR forms",
    heroBadge: "Healthcare Records",
    title: "Medical & Pharmacy NCR Forms for",
    highlight: "Clear Long-Term Copies",
    subtitle:
      "Custom carbonless forms for prescription copies, lab handover, patient consent, pharmacy records and public-health documentation that require clear copies and careful handling.",
    trustBadges: ["Prescription Copies", "Lab Handover", "Low-Odor Options", "Phenol-Free Options"],
    stats: [
      { value: "2 / 3-Part", label: "Common Sets" },
      { value: "Archive", label: "Record Focus" },
      { value: "Low Odor", label: "Options" },
      { value: "24h", label: "Quote Response" },
    ],
    intro: {
      title: "Carbonless Forms for Healthcare Record Workflows",
      lead:
        "Medical, dental and pharmacy buyers use NCR forms when the patient, clinic, lab, pharmacy or archive each need a copy of the same handwritten or signed record.",
      bullets: [
        "Prescription copy and pharmacy record forms",
        "Lab handover and specimen transfer records",
        "Patient consent and treatment acknowledgement forms",
        "Phenol-free / BPA-free and FSC options available upon request",
      ],
    },
    overview: {
      title: "Clear Copies for Sensitive and Long-Term Records",
      paragraphs: [
        "Healthcare forms are not judged only by price. Buyers care about copy clarity, readable lower plies, low odor, stable archiving and fields that reduce handwritten mistakes in clinical or pharmacy workflows.",
        "Common uses include prescription copies, lab handover forms, patient consent forms, claim support records, public-health distribution forms and internal medical administration forms.",
        "ZhixinPaper can produce medical and pharmacy NCR forms with custom fields, copy-color sequences, numbering, low-odor requirements and phenol-free / BPA-free or FSC options for compliance-sensitive orders.",
      ],
    },
    feature: {
      title: "Designed for Clear Copies and Careful Handling",
      lead:
        "Healthcare buyers need forms that stay readable and professional across patient, clinic, pharmacy and archive copies.",
      bullets: [
        "Patient, clinic, pharmacy, lab and archive copy labels",
        "Prescription, handover, consent and record fields",
        "Low-odor and phenol-free / BPA-free options upon request",
        "Numbering and controlled packaging for record programs",
      ],
    },
    productsTitle: "Medical and Pharmacy Form Applications",
    productsDescription: "Healthcare records where clear copies and careful field design matter.",
    products: [
      { title: "Prescription Copy Forms", desc: "Patient, pharmacy and archive copies for prescription workflows.", badge: "Prescription" },
      { title: "Lab Handover Forms", desc: "Specimen, sample or test handover records with signatures.", badge: "Lab" },
      { title: "Patient Consent Forms", desc: "Signed consent, treatment acknowledgement and clinic copies.", badge: "Consent" },
      { title: "Medical Record Forms", desc: "Clinic, department and archive record copies.", badge: "Records" },
      { title: "Pharmacy Issue Records", desc: "Dispensing, stock issue and controlled distribution copies.", badge: "Pharmacy" },
      { title: "Public Health Forms", desc: "Program distribution and multi-party record forms.", badge: "Public Health" },
    ],
    relatedForms: [
      { title: "Custom NCR Forms", desc: "Custom medical layouts, fields, numbering and copy sequence.", href: "/products/custom-ncr-forms", badge: "Custom" },
      { title: "2-Part NCR Forms", desc: "Patient and clinic copy sets for simple records.", href: "/products/ncr-forms/2-part", badge: "2-Part" },
      { title: "3-Part NCR Forms", desc: "Patient, provider and archive copy workflows.", href: "/products/ncr-forms/3-part", badge: "3-Part" },
      { title: "Government NCR Forms", desc: "Public-sector and public-health multi-part records.", href: "/products/government-ncr-forms", badge: "Public Sector" },
    ],
    comparison: {
      title: "Healthcare Copy Planning",
      leftHeader: "Record Workflow",
      rightHeader: "Recommended NCR Setup",
      rows: [
        { factor: "Prescription copy", left: "Patient and pharmacy copies", right: "2-part or 3-part form" },
        { factor: "Lab handover", left: "Clinic, lab and archive need records", right: "3-part handover form" },
        { factor: "Patient consent", left: "Patient and provider each keep signed copy", right: "2-part consent form" },
        { factor: "Public health program", left: "Institution, recipient and archive copies", right: "3-part or 4-part numbered form" },
      ],
    },
    specs: [
      { label: "Copies", value: "2-part, 3-part or 4-part medical NCR forms" },
      { label: "Fields", value: "Patient, clinic, pharmacy, lab, signature, date, record number, archive copy" },
      { label: "Options", value: "Phenol-free / BPA-free, low-odor and FSC options available upon request" },
      { label: "Formats", value: "Loose sets, pads, books or custom forms" },
      { label: "Finishing", value: "Sequential numbering, perforation, glue binding and controlled packaging" },
      { label: "Use Cases", value: "Prescription copy, lab handover, consent, claim record, public health record" },
    ],
    whyUs: [
      { icon: "shield", title: "Compliance-Sensitive Options", text: "Phenol-free / BPA-free, low-odor and FSC options can be quoted on request." },
      { icon: "file", title: "Record-Focused Layouts", text: "Forms can label patient, clinic, pharmacy, lab and archive copies clearly." },
      { icon: "layers", title: "Clear Copy Performance", text: "Copy sequence is selected for readable lower-ply records." },
    ],
    faqs: [
      {
        q: "What are medical and pharmacy NCR forms used for?",
        a: "Medical and pharmacy NCR forms are used for prescription copies, lab handover records, patient consent forms, medical records, pharmacy issue records and public-health documentation where several parties need clear copies.",
      },
      {
        q: "Can you provide phenol-free or BPA-free options?",
        a: "Phenol-free / BPA-free options are available upon request, with third-party test reports for compliance-sensitive markets when required.",
      },
      {
        q: "Can you make low-odor medical forms?",
        a: "Yes. Tell us the market, copy count and required reports; we can quote low-odor and compliance-sensitive material options.",
      },
    ],
    geoAnswer: {
      q: "Why do pharmacies use carbonless forms?",
      a: "Pharmacies use carbonless forms to create clear patient, pharmacy and archive copies of prescription, dispensing or handover records without rewriting the same information.",
    },
    inquiry: {
      title: "Get Medical NCR Form Pricing",
      description: "Send the form use, copy count, material option, fields and quantity for a healthcare NCR quote.",
      whatsappText: "Hello, I need pricing for medical or pharmacy NCR forms. I can send the use case, copy count, material option and quantity.",
    },
  },
];

export function getNcrApplicationBySlug(slug: string) {
  return ncrApplicationPages.find((page) => page.slug === slug);
}

export function requireNcrApplicationBySlug(slug: string): NcrApplicationPageData {
  const page = getNcrApplicationBySlug(slug);
  if (!page) {
    throw new Error(`Missing NCR application data: ${slug}`);
  }
  return page;
}
