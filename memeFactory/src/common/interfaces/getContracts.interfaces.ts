export interface GetContractsResponse {
  name: string;
  symbol: string;
  initialSupply: string;
  isSupplyMintable: boolean;
  isPreSale: boolean;
  startTime: string;
  endTime: string;
  priceToken: string;
  amountSellToken: string;
  contractAddress: string;
  owner: string;
}
