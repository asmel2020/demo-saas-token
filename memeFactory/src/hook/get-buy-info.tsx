import preSaleAbi from "@/common/abi/preSale.abi";
import addressContract from "@/common/addressContract";
import chainId from "@/common/chainId";
import { format } from "@formkit/tempo";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useReadContract } from "wagmi";

interface Props {
  address: string;
}

export const useGetBuyInfo = ({ address }: Props) => {
  const [valueGetBuyInfo, setValue] = useState<GetBuyTokenInfo[]>([]);
  const {
    data,
    isSuccess: isSuccessGetBuyInfo,
    refetch: refetchGetBuyInfo,
  } = useReadContract({
    abi: preSaleAbi,
    address: addressContract.preSaleAddress as `0x${string}`,
    functionName: "getBuyTokenInfo",
    args: [address],
    chainId,
  });

  useEffect(() => {
    if (isSuccessGetBuyInfo) {
      const newDate = ((data as GetBuyTokenInfo[]) || []).map((item) => ({
        buyDate: format({
          date: new Date(Number(item.buyDate.toString()) * 1000),
          format: "YYYY-MM-DD HH:mm",
        }),
        amountToken: parseFloat(
          ethers.formatEther(item.amountToken.toString())
        ),
        price: parseFloat(ethers.formatEther(item.price.toString())),
        ownerBuy: item.ownerBuy,
      }));

      setValue(
        newDate.sort(
          (a, b) =>
            new Date(b.buyDate).getTime() - new Date(a.buyDate).getTime()
        )
      );
    }
  }, [isSuccessGetBuyInfo]);
  return { valueGetBuyInfo, isSuccessGetBuyInfo, refetchGetBuyInfo };
};
