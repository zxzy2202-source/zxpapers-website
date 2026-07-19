import MarketCountryPageTemplate from "@/components/shared/MarketCountryPageTemplate";
import { indonesiaMarketPage } from "@/config/marketCountryPages";

export const metadata = indonesiaMarketPage.metadata;

export const revalidate = 86400; // 24 hours: static product/market content

export default function IndonesiaPage() {
  return <MarketCountryPageTemplate data={indonesiaMarketPage} />;
}
