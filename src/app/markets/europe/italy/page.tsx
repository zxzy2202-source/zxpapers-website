import MarketCountryPageTemplate from "@/components/shared/MarketCountryPageTemplate";
import { italyMarketPage } from "@/config/marketCountryPages";

export const metadata = italyMarketPage.metadata;

export default function ItalyPage() {
  return <MarketCountryPageTemplate data={italyMarketPage} />;
}
