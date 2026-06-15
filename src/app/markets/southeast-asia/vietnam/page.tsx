import MarketCountryPageTemplate from "@/components/shared/MarketCountryPageTemplate";
import { vietnamMarketPage } from "@/config/marketCountryPages";

export const metadata = vietnamMarketPage.metadata;

export default function VietnamPage() {
  return <MarketCountryPageTemplate data={vietnamMarketPage} />;
}
