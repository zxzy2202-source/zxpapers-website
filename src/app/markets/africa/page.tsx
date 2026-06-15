import MarketRegionPageTemplate from "@/components/shared/MarketRegionPageTemplate";
import { africaRegionPage } from "@/config/marketCountryPages";

export const metadata = africaRegionPage.metadata;

export default function AfricaPage() {
  return <MarketRegionPageTemplate data={africaRegionPage} />;
}
