import MarketRegionPageTemplate from "@/components/shared/MarketRegionPageTemplate";
import { europeRegionPage } from "@/config/marketCountryPages";

export const metadata = europeRegionPage.metadata;

export default function EuropePage() {
  return <MarketRegionPageTemplate data={europeRegionPage} />;
}
