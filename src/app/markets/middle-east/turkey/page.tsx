import MarketCountryPageTemplate from "@/components/shared/MarketCountryPageTemplate";
import { turkeyMarketPage } from "@/config/marketCountryPages";

export const metadata = turkeyMarketPage.metadata;

export default function TurkeyPage() {
  return <MarketCountryPageTemplate data={turkeyMarketPage} />;
}
