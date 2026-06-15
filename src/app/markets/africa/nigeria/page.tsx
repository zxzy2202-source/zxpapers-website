import MarketCountryPageTemplate from "@/components/shared/MarketCountryPageTemplate";
import { nigeriaMarketPage } from "@/config/marketCountryPages";

export const metadata = nigeriaMarketPage.metadata;

export default function NigeriaPage() {
  return <MarketCountryPageTemplate data={nigeriaMarketPage} />;
}
