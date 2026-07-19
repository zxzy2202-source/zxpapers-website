import MarketCountryPageTemplate from "@/components/shared/MarketCountryPageTemplate";
import { malaysiaMarketPage } from "@/config/marketCountryPages";

export const metadata = malaysiaMarketPage.metadata;

export const revalidate = 86400; // 24 hours: static product/market content

export default function MalaysiaPage() {
  return <MarketCountryPageTemplate data={malaysiaMarketPage} />;
}
