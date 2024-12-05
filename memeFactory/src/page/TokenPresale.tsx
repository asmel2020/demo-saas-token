import preSaleAbi from "@/common/abi/preSale.abi";
import addressContract from "@/common/addressContract";
import chainId from "@/common/chainId";
import { GetPreSaleInfo } from "@/common/interfaces/getPreSaleInfo.interfaces";
import { PresaleForm } from "@/components/form/PresaleForm";
import { AllPresalesPurchasesTable } from "@/components/tables/AllPresalesPurchasesTable";
import { UserPurchasesTable } from "@/components/tables/UserPurchasesTable";
import { format } from "@formkit/tempo";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useReadContract } from "wagmi";
import { useRoute } from "wouter";

export default function TokenPresale() {
  const [match, params] = useRoute("/pre-sale/:address/:symbol");
  const [value, setValue] = useState<GetPreSaleInfo>({
    startTime: "0",
    endTime: "0",
    priceToken: "0",
    amountSellToken: "0",
    amountSoldToken: "0",
    tokenWin: "0",
    owner: "0",
    isPause: false,
    isRewards: false,
  });

  if (!match) return null;
  const { data, isSuccess } = useReadContract({
    abi: preSaleAbi,
    address: addressContract.preSaleAddress as `0x${string}`,
    functionName: "getPreSaleInfo",
    args: [params.address],
    chainId,
  });

  useEffect(() => {
    if (isSuccess) {
      const newDate = data as GetPreSaleInfo;
      setValue({
        startTime: format({
          date: new Date(Number(newDate.startTime) * 1000),
          format: "YYYY-MM-DD HH:mm",
        }),
        endTime: format({
          date: new Date(Number(newDate.endTime) * 1000),
          format: "YYYY-MM-DD HH:mm",
        }),
        priceToken: parseFloat(
          ethers.formatEther(newDate.priceToken.toString())
        ),
        amountSellToken: parseFloat(
          ethers.formatEther(newDate.amountSellToken.toString())
        ),
        amountSoldToken: parseFloat(
          ethers.formatEther(newDate.amountSoldToken.toString())
        ),
        tokenWin: parseFloat(ethers.formatEther(newDate.tokenWin.toString())),
        owner: newDate.owner,
        isPause: newDate.isPause,
        isRewards: newDate.isRewards,
      });
    }
  }, [isSuccess]);
  if (!isSuccess) return null;

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">
        Pré-venda do Token {params.symbol}
      </h1>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Comprar Tokens</h2>
        <PresaleForm
          tokenPrice={parseFloat(value.priceToken.toString())}
          tokenSymbol={params.symbol}
          address={params.address}
        />
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Suas Compras</h2>
        <UserPurchasesTable address={params.address} />
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Todas as Compras</h2>
        <AllPresalesPurchasesTable address={params.address} />
      </div>
    </div>
  );
}
