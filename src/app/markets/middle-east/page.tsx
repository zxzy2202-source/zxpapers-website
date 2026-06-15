import MarketRegionPageTemplate from "@/components/shared/MarketRegionPageTemplate";
import { middleEastRegionPage } from "@/config/marketCountryPages";

export const metadata = middleEastRegionPage.metadata;

export default function MiddleEastPage() {
  return <MarketRegionPageTemplate data={middleEastRegionPage} />;
}
