import MarketRegionPageTemplate from "@/components/shared/MarketRegionPageTemplate";
import { europeRegionPage } from "@/config/marketCountryPages";

export const metadata = europeRegionPage.metadata;
export const revalidate = 86400; // 24 hours: static content

export default function EuropePage() {
  return <MarketRegionPageTemplate data={europeRegionPage} />;
}
