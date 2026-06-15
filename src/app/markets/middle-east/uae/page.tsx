import MarketCountryPageTemplate from "@/components/shared/MarketCountryPageTemplate";
import { uaeMarketPage } from "@/config/marketCountryPages";

export const metadata = uaeMarketPage.metadata;

export default function UAEPage() {
  return <MarketCountryPageTemplate data={uaeMarketPage} />;
}
