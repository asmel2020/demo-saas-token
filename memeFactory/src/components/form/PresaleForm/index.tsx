import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { InputNumber } from "@/components/input/InputNumber";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { useEthersProvider } from "@/common/utils/useEthersProvider";
import preSaleAbi from "@/common/abi/preSale.abi";
import addressContract from "@/common/addressContract";
import { ethers } from "ethers";
import templateTokenAbi from "@/common/abi/templateToken.abi";
import { useGetBuyInfo } from "@/hook/get-buy-info";

const presaleFormSchema = z.object({
  amount: z
    .number()
    .positive({ message: "A quantidade deve ser um número positivo" }),
});

type PresaleFormData = z.infer<typeof presaleFormSchema>;

interface Props {
  tokenPrice: number;
  tokenSymbol: string;
  address: string;
  disabled?: boolean;
}

export function PresaleForm({ tokenPrice, tokenSymbol, address }: Props) {
  const [usdtToPay, setUsdtToPay] = useState(0);
  const account = useAccount();
  const provider = useEthersProvider();
  const { writeContractAsync, isSuccess } = useWriteContract();
  const { refetch } = useGetBuyInfo({ address });
  const { data: allowance } = useReadContract({
    abi: templateTokenAbi,
    address: addressContract.tokenAddress as `0x${string}`,
    functionName: "allowance",
    args: [
      account?.address as `0x${string}`,
      addressContract.preSaleAddress as `0x${string}`,
    ],
    chainId: 1337,
  });

  const [disabled, setDisabled] = useState(false);

  const form = useForm<PresaleFormData>({
    resolver: zodResolver(presaleFormSchema),
    defaultValues: {
      amount: 0,
    },
  });

  const approverSend = async () => {
    // Simular uma chamada de API

    setDisabled(true);
    const transactionCount = await provider?.getTransactionCount(
      account.address as `0x${string}`,
      "latest"
    );
    try {
      await writeContractAsync({
        abi: templateTokenAbi,
        address: addressContract.tokenAddress as `0x${string}`,
        functionName: "approve",
        args: [
          addressContract.preSaleAddress as `0x${string}`,
          ethers.parseEther("10000"),
        ],
        nonce: transactionCount,
        chainId: 1337,
      });
    } catch (error) {
      setDisabled(false);
    }
  };

  const onSubmit = async (data: PresaleFormData) => {
    setDisabled(true);
    const transactionCount = await provider?.getTransactionCount(
      account.address as `0x${string}`,
      "latest"
    );
    try {
      await writeContractAsync({
        abi: preSaleAbi,
        address: addressContract.preSaleAddress as `0x${string}`,
        functionName: "buyToken",
        args: [address, ethers.parseEther(data.amount.toString())],
        nonce: transactionCount,
        chainId: 1337,
      });
    } catch (error) {
      setDisabled(false);
    }
  };

  const successTransaction = async () => {
    setDisabled(false);
    await refetch();
  };
  useEffect(() => {
    if (isSuccess) {
      successTransaction();
    }
  }, [isSuccess]);

  const calculateUsdt = (amount: number) => {
    return amount * tokenPrice;
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quantidade de {tokenSymbol} a comprar</FormLabel>
              <FormControl>
                <InputNumber
                  disabled={disabled}
                  onChange={(e) => {
                    const value = Number(e.replace(",", "."));
                    field.onChange(value);
                    setUsdtToPay(calculateUsdt(value));
                  }}
                  valueInitial={field.value.toString()}
                />
              </FormControl>
              <FormDescription>
                Insira a quantidade de tokens que deseja comprar.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="text-lg font-semibold">
          Total a pagar: {usdtToPay.toFixed(2)} USDT
        </div>
        {Number(allowance || 0) < ethers.parseEther("20") ? (
          <Button type="button" onClick={approverSend} disabled={disabled}>
            Aprovar
          </Button>
        ) : (
          <Button type="submit" disabled={disabled}>
            Comprar Tokens
          </Button>
        )}
      </form>
    </Form>
  );
}
