import MarketCountryPageTemplate from "@/components/shared/MarketCountryPageTemplate";
import { southAfricaMarketPage } from "@/config/marketCountryPages";

export const metadata = southAfricaMarketPage.metadata;

export default function SouthAfricaPage() {
  return <MarketCountryPageTemplate data={southAfricaMarketPage} />;
}
