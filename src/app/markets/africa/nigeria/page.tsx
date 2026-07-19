import MarketCountryPageTemplate from "@/components/shared/MarketCountryPageTemplate";
import { nigeriaMarketPage } from "@/config/marketCountryPages";

export const metadata = nigeriaMarketPage.metadata;

export const revalidate = 86400; // 24 hours: static product/market content

export default function NigeriaPage() {
  return <MarketCountryPageTemplate data={nigeriaMarketPage} />;
}
