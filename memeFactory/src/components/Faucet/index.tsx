import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useAccount, useWriteContract } from "wagmi";
import templateTokenAbi from "@/common/abi/templateToken.abi";
import addressContract from "@/common/addressContract";
import { useEthersProvider } from "@/common/utils/useEthersProvider";
import chainId from "@/common/chainId";
import { config } from "@/wagmi";
import { waitForTransactionReceipt } from "@wagmi/core";
import { useBalanceOf } from "@/hook/use-balance";
import { ethers } from "ethers";
import { sliceWallet } from "@/common/utils/sliceWallet";
const faucetFormSchema = z.object({
  address: z
    .string()
    .min(42, { message: "Endereço Ethereum inválido" })
    .max(42),
});

type FaucetFormData = z.infer<typeof faucetFormSchema>;

export function Faucet() {
  const account = useAccount();
  const { writeContractAsync } = useWriteContract();
  const provider = useEthersProvider();
  const { balance, refetchBalance } = useBalanceOf();

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const form = useForm<FaucetFormData>({
    resolver: zodResolver(faucetFormSchema),
    defaultValues: {
      address: (account.address as `0x${string}`) || "",
    },
  });
  const [disabled, setDisabled] = useState(false);
  const onSubmit = async () => {
    setDisabled(true);
    try {
      // Simular uma chamada de API
      const transactionCount = await provider?.getTransactionCount(
        account.address as `0x${string}`,
        "latest"
      );

      const hash = await writeContractAsync({
        abi: templateTokenAbi,
        address: addressContract.tokenAddress as `0x${string}`,
        functionName: "mintFauces",
        nonce: transactionCount,
        chainId,
      });
      await waitForTransactionReceipt(config, {
        hash,
        confirmations: 6,
        chainId,
      });
      setDisabled(false);
      await refetchBalance();
      // Simular sucesso (em produção, isso seria uma chamada real à API ou smart contract)
      setStatus("success");
      setMessage("1000 tokens foram enviados para o seu endereço!");
    } catch (error) {
      setDisabled(false);
      setStatus("error");
      setMessage(
        "Ocorreu um erro ao enviar os tokens. Por favor, tente novamente."
      );
    }
  };

  return (
    <div className="space-y-6">
      <section className="space-y-8">
        balance usdt: {ethers.formatEther(balance || "0") || "0,00"}
      </section>
      <section className="space-y-8">
        Contract address :{" "}
        <a
          href={`https://testnet.bscscan.com/token/${addressContract.tokenAddress}`}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:underline hover:text-blue-700"
        >
          {sliceWallet(addressContract.tokenAddress)}
        </a>{" "}
      </section>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Endereço Ethereum</FormLabel>
                <FormControl>
                  <Input
                    placeholder="0x..."
                    {...field}
                    readOnly
                    disabled={disabled}
                  />
                </FormControl>
                <FormDescription>
                  Insira seu endereço Ethereum para receber os tokens.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={disabled}>
            Reivindicar Tokens
          </Button>
        </form>
      </Form>

      {status === "success" && (
        <Alert variant="default">
          <CheckCircle2 className="h-4 w-4" />
          <AlertTitle>Sucesso!</AlertTitle>
          <AlertDescription>{message}</AlertDescription>
        </Alert>
      )}

      {status === "error" && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Erro</AlertTitle>
          <AlertDescription>{message}</AlertDescription>
        </Alert>
      )}
    </div>
  );
}
