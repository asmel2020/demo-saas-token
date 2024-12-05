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
import { useAccount, useWriteContract } from "wagmi";
import { useEthersProvider } from "@/common/utils/useEthersProvider";
import preSaleAbi from "@/common/abi/preSale.abi";
import addressContract from "@/common/addressContract";
import { ethers } from "ethers";

import { useGetBuyInfo } from "@/hook/get-buy-info";
import { useApprove } from "@/hook/use-approve";
import { useAllowance } from "@/hook/use-allowance";
import chainId from "@/common/chainId";
import { config } from "@/wagmi";
import { waitForTransactionReceipt } from "@wagmi/core";
import { useGetBuyTokenUser } from "@/hook/get-buy-token-user";
import toast from "react-hot-toast";
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
  const { writeContractAsync } = useWriteContract();

  const { approverSend, isSuccessApprover, isPendingApprover } = useApprove();

  const { refetchGetBuyInfo } = useGetBuyInfo({ address });
  const { refetchUser } = useGetBuyTokenUser({ address });
  const { allowance, refetchAllowance } = useAllowance({
    address: addressContract.preSaleAddress as `0x${string}`,
  });

  const [disabled, setDisabled] = useState(false);

  const form = useForm<PresaleFormData>({
    resolver: zodResolver(presaleFormSchema),
    defaultValues: {
      amount: 0,
    },
  });

  const onSubmit = async (data: PresaleFormData) => {
    setDisabled(true);
    const transactionCount = await provider?.getTransactionCount(
      account.address as `0x${string}`,
      "latest"
    );
    try {
      const hash = await writeContractAsync({
        abi: preSaleAbi,
        address: addressContract.preSaleAddress as `0x${string}`,
        functionName: "buyToken",
        args: [address, ethers.parseEther(data.amount.toString())],
        nonce: transactionCount,
        chainId,
      });

      await waitForTransactionReceipt(config, {
        hash,
        confirmations: 6,
        chainId,
      });
      await refetchUser();
      await refetchGetBuyInfo();
      setDisabled(false);
      toast.success("Compra realizada com sucesso");
      setUsdtToPay(0);
      form.reset();
    } catch (error) {
      setDisabled(false);
    }
  };

  useEffect(() => {
    if (isSuccessApprover) {
      setDisabled(false);
      refetchAllowance();
    }
  }, [isSuccessApprover]);

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
          <Button
            type="button"
            onClick={() =>
              approverSend({
                address: addressContract.preSaleAddress as `0x${string}`,
              })
            }
            disabled={isPendingApprover}
          >
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
