import preSaleAbi from "@/common/abi/preSale.abi";
import addressContract from "@/common/addressContract";
import { format } from "@formkit/tempo";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useAccount, useReadContract } from "wagmi";

interface Props {
  address: string;
}

export const useGetBuyTokenUser = ({ address }: Props) => {
  const [valueUser, setValue] = useState<GetBuyTokenInfo[]>([]);
  const account = useAccount();
  const {
    data,
    isSuccess: isSuccessUser,
    refetch: refetchUser,
  } = useReadContract({
    abi: preSaleAbi,
    address: addressContract.preSaleAddress as `0x${string}`,
    functionName: "getBuyTokenUser",
    args: [address, account?.address as `0x${string}`],
    chainId: 1337,
  });

  useEffect(() => {
    if (isSuccessUser) {
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
  }, [isSuccessUser]);

  return { valueUser, isSuccessUser, refetchUser };
};
