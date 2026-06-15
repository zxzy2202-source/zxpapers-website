import MarketCountryPageTemplate from "@/components/shared/MarketCountryPageTemplate";
import { malaysiaMarketPage } from "@/config/marketCountryPages";

export const metadata = malaysiaMarketPage.metadata;

export default function MalaysiaPage() {
  return <MarketCountryPageTemplate data={malaysiaMarketPage} />;
}
