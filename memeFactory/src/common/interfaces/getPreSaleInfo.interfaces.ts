export interface GetPreSaleInfo {
  startTime: string;
  endTime: string;
  priceToken: string | number;
  amountSellToken: string | number;
  amountSoldToken: string | number;
  tokenWin: string | number;
  owner: string;
  isPause: boolean;
  isRewards: boolean;
}
