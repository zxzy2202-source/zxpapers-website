import MarketCountryPageTemplate from "@/components/shared/MarketCountryPageTemplate";
import { singaporeMarketPage } from "@/config/marketCountryPages";

export const metadata = singaporeMarketPage.metadata;

export const revalidate = 86400; // 24 hours: static product/market content

export default function SingaporePage() {
  return <MarketCountryPageTemplate data={singaporeMarketPage} />;
}
