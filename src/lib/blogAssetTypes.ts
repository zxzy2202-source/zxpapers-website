export interface BlogAssetQuery {
  productLine: string;
  markets: string[];
  contentTypes: string[];
  applications: string[];
  keywords: string[];
}

export interface BlogCoverAssetSource {
  provider: "feishu-base";
  baseRecordId: string;
  assetId: string;
  assetTitle: string;
  matchScore: number;
  altText: string;
  caption?: string;
  syncedAt: string;
}
