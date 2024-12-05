import memeFactoryAbi from "@/common/abi/memeFactory.abi";
import addressContract from "@/common/addressContract";
import { GetContractsResponse } from "@/common/interfaces/getContracts.interfaces";
import { sliceWallet } from "@/common/utils/sliceWallet";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "@formkit/tempo";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useReadContract } from "wagmi";
import { useLocation } from "wouter";

export function PresalesTable() {
  const [_, setLocation] = useLocation();
  const [value, setValue] = useState<GetContractsResponse[]>([]);
  const { data, isSuccess } = useReadContract({
    abi: memeFactoryAbi,
    address: addressContract.memeFactoryAddress as `0x${string}`,
    functionName: "getDeployedContracts",
    chainId: 1337,
  });
  /*  const navigate = useNavigate(); */

  const handleOpenPresale = (id: string, symbol: string) => {
    setLocation(`/pre-sale/${id}/${symbol}`);
  };

  useEffect(() => {
    if (isSuccess) {
      /*   let d = []; */
      const news = (data as GetContractsResponse[]) || [];
      const dataFormat = news.map((item: any) => ({
        ...item,
        startTime: item.startTime.toString(),
        endTime: item.endTime.toString(),
        amountSellToken: item.amountSellToken.toString(),
        initialSupply: item.initialSupply.toString(),
        priceToken: item.priceToken.toString(),
      }));
      setValue(dataFormat);
    }
  }, [isSuccess]);

  return (
    <Table>
      <TableCaption>Lista de todas as pré-vendas ativas</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Token</TableHead>
          <TableHead>Símbolo</TableHead>
          <TableHead>Início</TableHead>
          <TableHead>Término</TableHead>
          <TableHead>Preço (USDT)</TableHead>
          <TableHead>Supply Total</TableHead>
          <TableHead>Owner</TableHead>
          <TableHead>Address</TableHead>
          <TableHead>Ação</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {value.map((presale) => (
          <TableRow key={presale.symbol}>
            <TableCell>{presale.name}</TableCell>
            <TableCell>{presale.symbol}</TableCell>

            <TableCell>
              {format({
                date: new Date(Number(presale.startTime) * 1000),
                format: "YYYY-MM-DD HH:mm",
              })}
            </TableCell>
            <TableCell>
              {format({
                date: new Date(Number(presale.endTime) * 1000),
                format: "YYYY-MM-DD HH:mm",
              })}
            </TableCell>
            <TableCell>{ethers.formatEther(presale.priceToken)}</TableCell>
            <TableCell>{ethers.formatEther(presale.initialSupply)}</TableCell>

            <TableCell>{sliceWallet(presale.owner)}</TableCell>
            <TableCell>{sliceWallet(presale.contractAddress)}</TableCell>
            <TableCell>
              <Button
                disabled={!presale.isPreSale}
                onClick={() =>
                  handleOpenPresale(presale.contractAddress, presale.symbol)
                }
              >
                Abrir Pré-venda
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
