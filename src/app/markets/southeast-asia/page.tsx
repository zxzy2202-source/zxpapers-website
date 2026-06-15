import MarketRegionPageTemplate from "@/components/shared/MarketRegionPageTemplate";
import { southeastAsiaRegionPage } from "@/config/marketCountryPages";

export const metadata = southeastAsiaRegionPage.metadata;

export default function SoutheastAsiaPage() {
  return <MarketRegionPageTemplate data={southeastAsiaRegionPage} />;
}
