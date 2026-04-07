// ZhixinPaper Navigation Configuration
// Design: Global Trade Authority — B2B thermal paper manufacturer

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  badgeColor?: string;
}

export interface NavSizeGroup {
  groupLabel: string;
  items: NavItem[];
}

export interface NavRegionGroup {
  region: string;
  regionHref: string;
  badge?: string;
  badgeColor?: string;
  countries: NavItem[];
}

export interface NavDropdown {
  label: string;
  items: NavItem[];
  /** Legacy single featured list (kept for non-Products menus) */
  featured?: NavItem[];
  /** Multi-column size groups for Products mega-menu */
  sizeGroups?: NavSizeGroup[];
  /** Three-column region groups for Markets mega-menu */
  regionGroups?: NavRegionGroup[];
}

export const mainNav: (NavItem | NavDropdown)[] = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    items: [
      { label: "All Products",                    href: "/products" },
      { label: "Blank Thermal Paper Rolls",        href: "/products/thermal-paper-rolls/blank" },
      { label: "Custom Printed Thermal Rolls",     href: "/products/thermal-paper-rolls/custom-printed" },
      { label: "Blank Thermal Labels",             href: "/products/thermal-labels/blank" },
      { label: "Custom Printed Thermal Labels",    href: "/products/thermal-labels/custom-printed" },
      { label: "Blank Can Labels",                 href: "/products/can-labels/blank" },
      { label: "Custom Printed Can Labels",        href: "/products/can-labels/custom-printed" },
      { label: "Blank Detergent Labels",           href: "/products/detergent-labels/blank" },
      { label: "Custom Printed Detergent Labels",  href: "/products/detergent-labels/custom-printed" },
    ],
    sizeGroups: [
      {
        groupLabel: "Thermal Paper Rolls",
        items: [
          { label: "80 × 80 mm",   href: "/products/thermal-rolls/80x80mm",  badge: "Best Seller",  badgeColor: "amber" },
          { label: "57 × 50 mm",   href: "/products/thermal-rolls/57x50mm",  badge: "High Demand",  badgeColor: "blue" },
          { label: "57 × 40 mm",   href: "/products/thermal-rolls/57x40mm",  badge: "Mobile POS",   badgeColor: "blue" },
          { label: "57 × 30 mm",   href: "/products/thermal-rolls/57x30mm" },
          { label: "79 × 80 mm",   href: "/products/thermal-rolls/80x80mm",  badge: "ATM",          badgeColor: "purple" },
          { label: "80 × 70 mm",   href: "/products/thermal-rolls/80x70mm",  badge: "Europe",       badgeColor: "blue" },
          { label: "110 × 80 mm",  href: "/products/thermal-rolls/110x80mm", badge: "Wide Format",  badgeColor: "purple" },
        ],
      },
      {
        groupLabel: "Thermal Labels",
        items: [
          { label: '4" × 6" Shipping',  href: "/products/thermal-labels/4x6in",  badge: "Most Popular", badgeColor: "amber" },
          { label: '2" × 1" Barcode',   href: "/products/thermal-labels/2x1in" },
          { label: '3" × 2" Product',   href: "/products/thermal-labels/3x2in" },
          { label: '4" × 3" Square',    href: "/products/thermal-labels/4x3in" },
          { label: '2" × 4" Address',   href: "/products/thermal-labels/2x4in" },
        ],
      },
      {
        groupLabel: "Can & Detergent Labels",
        items: [
          { label: "211 × 400 Can",       href: "/products/can-labels/211x400",         badge: "Standard",  badgeColor: "green" },
          { label: "300 × 407 Can",       href: "/products/can-labels/300x407",         badge: "Food",      badgeColor: "green" },
          { label: "307 × 510 Can",       href: "/products/can-labels/307x510" },
          { label: "90 × 120mm Detergent",href: "/products/detergent-labels/90x120mm",  badge: "Popular",   badgeColor: "blue" },
          { label: "80 × 150mm Detergent",href: "/products/detergent-labels/80x150mm" },
        ],
      },
    ],
  },
  {
    label: "OEM & Custom",
    items: [
      { label: "OEM Services Overview",    href: "/oem" },
      { label: "Custom Printing & Specs",  href: "/oem/custom-printing" },
      { label: "Packaging & Private Label",href: "/oem/packaging" },
      { label: "Design Support",           href: "/oem/design-support" },
      { label: "Quality Assurance",        href: "/oem/quality-assurance" },
      { label: "IP Protection & NDA",      href: "/oem/ip-protection" },
      { label: "Case Studies",             href: "/oem/case-studies" },
    ],
  },
  {
    label: "Manufacturing",
    items: [
      { label: "Factory Overview",  href: "/manufacturing" },
      { label: "Quality Control",   href: "/manufacturing/quality-control" },
      { label: "Certifications",    href: "/manufacturing/certifications" },
      { label: "Equipment",         href: "/manufacturing/equipment" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "OEM Guide",            href: "/resources/oem-guide" },
      { label: "Product Knowledge",    href: "/resources/product-knowledge" },
      { label: "Application Cases",    href: "/resources/application-cases" },
      { label: "Industry Insights",    href: "/resources/industry-insights" },
    ],
  },
  {
    label: "Markets",
    items: [
      { label: "All Markets Overview",  href: "/markets" },
      { label: "🌍 Africa",             href: "/markets/africa" },
      { label: "🌙 Middle East",        href: "/markets/middle-east" },
      { label: "🌏 Southeast Asia",     href: "/markets/southeast-asia" },
    ],
    regionGroups: [
      {
        region: "🌍 Africa",
        regionHref: "/markets/africa",
        badge: "Hot",
        badgeColor: "amber",
        countries: [
          { label: "🇳🇬 Nigeria",      href: "/markets/africa/nigeria",      badge: "15M+ POS",   badgeColor: "green" },
          { label: "🇰🇪 Kenya",        href: "/markets/africa/kenya" },
          { label: "🇿🇦 South Africa", href: "/markets/africa/south-africa" },
          { label: "🇬🇭 Ghana",        href: "/markets/africa/ghana" },
          { label: "🇪🇹 Ethiopia",     href: "/markets/africa/ethiopia" },
          { label: "🇹🇿 Tanzania",     href: "/markets/africa/tanzania",     badge: "Re-export",  badgeColor: "green" },
        ],
      },
      {
        region: "🌙 Middle East",
        regionHref: "/markets/middle-east",
        badge: "Growing",
        badgeColor: "blue",
        countries: [
          { label: "🇦🇪 UAE",           href: "/markets/middle-east/uae",          badge: "3M+ POS",   badgeColor: "amber" },
          { label: "🇸🇦 Saudi Arabia",  href: "/markets/middle-east/saudi-arabia", badge: "5M+ POS",   badgeColor: "amber" },
          { label: "🇪🇬 Egypt",         href: "/markets/middle-east/egypt" },
          { label: "🇹🇷 Turkey",        href: "/markets/middle-east/turkey" },
        ],
      },
      {
        region: "🌏 Southeast Asia",
        regionHref: "/markets/southeast-asia",
        badge: "New",
        badgeColor: "green",
        countries: [
          { label: "🇹🇭 Thailand",     href: "/markets/southeast-asia/thailand" },
          { label: "🇮🇩 Indonesia",    href: "/markets/southeast-asia/indonesia",   badge: "8M+ POS",   badgeColor: "blue" },
          { label: "🇻🇳 Vietnam",      href: "/markets/southeast-asia/vietnam" },
          { label: "🇵🇭 Philippines",  href: "/markets/southeast-asia/philippines" },
          { label: "🇲🇾 Malaysia",     href: "/markets/southeast-asia/malaysia" },
          { label: "🇸🇬 Singapore",    href: "/markets/southeast-asia/singapore",   badge: "ASEAN Hub", badgeColor: "blue" },
        ],
      },
    ],
  },
  { label: "About Us", href: "/about" },
  { label: "Contact",  href: "/contact" },
];

export const paperRollSizes = [
  { slug: "80x80mm",  label: "80mm x 80mm",  badge: "Most Popular", markets: "Global" },
  { slug: "57x50mm",  label: "57mm x 50mm",  markets: "Asia" },
  { slug: "80x70mm",  label: "80mm x 70mm",  markets: "Europe" },
  { slug: "110x80mm", label: "110mm x 80mm", badge: "Wide Format", markets: "Americas" },
  { slug: "57x40mm",  label: "57mm x 40mm",  markets: "Asia" },
  { slug: "57x30mm",  label: "57mm x 30mm",  markets: "Asia" },
];

export const labelSizes = [
  { slug: "4x6in", label: '4" x 6" Shipping', badge: "Most Popular", markets: "Global" },
  { slug: "2x1in", label: '2" x 1" Barcode',  markets: "Americas" },
  { slug: "3x2in", label: '3" x 2" Product',  markets: "Global" },
  { slug: "4x3in", label: '4" x 3" Square',   markets: "Global" },
  { slug: "2x4in", label: '2" x 4" Address',  markets: "Americas" },
  { slug: "1x1in", label: '1" x 1" Mini',     markets: "Global" },
];

export const detergentLabelSizes = [
  { slug: "90x120mm",  label: "90 × 120mm",  badge: "Bottle Front",  markets: "Global" },
  { slug: "80x150mm",  label: "80 × 150mm",  badge: "Tall Bottle",   markets: "Global" },
  { slug: "100x100mm", label: "100 × 100mm", badge: "Square",        markets: "Global" },
  { slug: "70x200mm",  label: "70 × 200mm",  badge: "Wrap-Around",   markets: "Global" },
  { slug: "120x80mm",  label: "120 × 80mm",  badge: "Back Label",    markets: "Global" },
];

export const canLabelSizes = [
  { slug: "211x400", label: "211 × 400", badge: "Standard",     markets: "Global" },
  { slug: "211x603", label: "211 × 603", badge: "Tall Can",     markets: "Americas" },
  { slug: "300x407", label: "300 × 407", badge: "Food Standard",markets: "Global" },
  { slug: "307x510", label: "307 × 510", badge: "Wide Body",    markets: "Global" },
  { slug: "401x700", label: "401 × 700", badge: "Large Format", markets: "Global" },
];

export const footerLinks = {
  products: [
    { label: "Blank Thermal Rolls",              href: "/products/thermal-paper-rolls/blank" },
    { label: "Custom Printed Rolls",             href: "/products/thermal-paper-rolls/custom-printed" },
    { label: "Blank Thermal Labels",             href: "/products/thermal-labels/blank" },
    { label: "Custom Printed Labels",            href: "/products/thermal-labels/custom-printed" },
    { label: "Blank Can Labels",                 href: "/products/can-labels/blank" },
    { label: "Custom Printed Can Labels",        href: "/products/can-labels/custom-printed" },
    { label: "Blank Detergent Labels",           href: "/products/detergent-labels/blank" },
    { label: "Custom Printed Detergent Labels",  href: "/products/detergent-labels/custom-printed" },
    { label: "All Products",                     href: "/products" },
  ],
  oem: [
    { label: "OEM Overview",             href: "/oem" },
    { label: "Custom Printing",          href: "/oem/custom-printing" },
    { label: "Packaging & Private Label",href: "/oem/packaging" },
    { label: "Design Support",           href: "/oem/design-support" },
    { label: "Case Studies",             href: "/oem/case-studies" },
  ],
  resources: [
    { label: "Specifications",   href: "/specifications" },
    { label: "Resource Center",  href: "/resources" },
    { label: "FAQ",              href: "/faq" },
    { label: "Manufacturing",    href: "/manufacturing" },
  ],
  company: [
    { label: "About Us",        href: "/about" },
    { label: "Contact Us",      href: "/contact" },
    { label: "OEM Partnership", href: "/contact/oem-partnership" },
  ],
  markets: [
    { label: "Africa Overview",      href: "/markets/africa" },
    { label: "Nigeria",              href: "/markets/africa/nigeria" },
    { label: "Kenya",                href: "/markets/africa/kenya" },
    { label: "South Africa",         href: "/markets/africa/south-africa" },
    { label: "Tanzania",             href: "/markets/africa/tanzania" },
    { label: "Ethiopia",             href: "/markets/africa/ethiopia" },
    { label: "Middle East",          href: "/markets/middle-east" },
    { label: "UAE",                  href: "/markets/middle-east/uae" },
    { label: "Saudi Arabia",         href: "/markets/middle-east/saudi-arabia" },
    { label: "Egypt",                href: "/markets/middle-east/egypt" },
    { label: "Turkey",               href: "/markets/middle-east/turkey" },
    { label: "Southeast Asia",       href: "/markets/southeast-asia" },
    { label: "Thailand",             href: "/markets/southeast-asia/thailand" },
    { label: "Indonesia",            href: "/markets/southeast-asia/indonesia" },
    { label: "Vietnam",              href: "/markets/southeast-asia/vietnam" },
    { label: "Philippines",          href: "/markets/southeast-asia/philippines" },
    { label: "Malaysia",             href: "/markets/southeast-asia/malaysia" },
    { label: "Singapore",            href: "/markets/southeast-asia/singapore" },
  ],
  popularSizes: [
    { label: "80mm x 80mm Rolls",          href: "/products/thermal-rolls/80x80mm" },
    { label: "57mm x 50mm Rolls",          href: "/products/thermal-rolls/57x50mm" },
    { label: "57mm x 40mm Rolls",          href: "/products/thermal-rolls/57x40mm" },
    { label: '4" x 6" Labels',             href: "/products/thermal-labels/4x6in" },
    { label: '2" x 1" Labels',             href: "/products/thermal-labels/2x1in" },
    { label: "211×400 Can Labels",         href: "/products/can-labels/211x400" },
    { label: "300×407 Can Labels",         href: "/products/can-labels/300x407" },
    { label: "90×120mm Detergent Labels",  href: "/products/detergent-labels/90x120mm" },
    { label: "70×200mm Detergent Labels",  href: "/products/detergent-labels/70x200mm" },
    { label: "1×1in Mini Labels",          href: "/products/thermal-labels/1x1in" },
  ],
};
