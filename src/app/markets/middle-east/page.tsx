import MarketRegionPageTemplate from "@/components/shared/MarketRegionPageTemplate";
import { middleEastRegionPage } from "@/config/marketCountryPages";

export const metadata = middleEastRegionPage.metadata;
export const revalidate = 86400; // 24 hours: static content

export default function MiddleEastPage() {
  return <MarketRegionPageTemplate data={middleEastRegionPage} />;
}
