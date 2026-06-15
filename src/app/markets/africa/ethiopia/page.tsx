import MarketCountryPageTemplate from "@/components/shared/MarketCountryPageTemplate";
import { ethiopiaMarketPage } from "@/config/marketCountryPages";

export const metadata = ethiopiaMarketPage.metadata;

export default function EthiopiaPage() {
  return <MarketCountryPageTemplate data={ethiopiaMarketPage} />;
}
