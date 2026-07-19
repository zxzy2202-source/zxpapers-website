import MarketCountryPageTemplate from "@/components/shared/MarketCountryPageTemplate";
import { kenyaMarketPage } from "@/config/marketCountryPages";

export const metadata = kenyaMarketPage.metadata;

export const revalidate = 86400; // 24 hours: static product/market content

export default function KenyaPage() {
  return <MarketCountryPageTemplate data={kenyaMarketPage} />;
}
