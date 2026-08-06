import { MIDDLE_EAST_THERMAL_PAPER_P0_CAMPAIGN } from "@/content/blogCampaigns/middleEastThermalPaperP0";
import { MIDDLE_EAST_THERMAL_PAPER_P1_CAMPAIGN } from "@/content/blogCampaigns/middleEastThermalPaperP1";

export const BLOG_CAMPAIGNS = [
  MIDDLE_EAST_THERMAL_PAPER_P0_CAMPAIGN,
  MIDDLE_EAST_THERMAL_PAPER_P1_CAMPAIGN,
];

export function getBlogCampaign(campaignId: string) {
  return BLOG_CAMPAIGNS.find((campaign) => campaign.id === campaignId);
}
