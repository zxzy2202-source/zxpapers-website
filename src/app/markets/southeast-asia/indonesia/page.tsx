import MarketCountryPageTemplate from "@/components/shared/MarketCountryPageTemplate";
import { indonesiaMarketPage } from "@/config/marketCountryPages";

export const metadata = indonesiaMarketPage.metadata;

export default function IndonesiaPage() {
  return <MarketCountryPageTemplate data={indonesiaMarketPage} />;
}
