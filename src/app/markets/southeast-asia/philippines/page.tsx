import MarketCountryPageTemplate from "@/components/shared/MarketCountryPageTemplate";
import { philippinesMarketPage } from "@/config/marketCountryPages";

export const metadata = philippinesMarketPage.metadata;

export default function PhilippinesPage() {
  return <MarketCountryPageTemplate data={philippinesMarketPage} />;
}
