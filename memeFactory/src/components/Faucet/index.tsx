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

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const form = useForm<FaucetFormData>({
    resolver: zodResolver(faucetFormSchema),
    defaultValues: {
      address: (account.address as `0x${string}`) || "",
    },
  });

  const onSubmit = async () => {
    try {
      // Simular uma chamada de API
      const transactionCount = await provider?.getTransactionCount(
        account.address as `0x${string}`,
        "latest"
      );

      await writeContractAsync({
        abi: templateTokenAbi,
        address: addressContract.tokenAddress as `0x${string}`,
        functionName: "mintFauces",
        nonce: transactionCount,
        chainId: 1337,
      });

      // Simular sucesso (em produção, isso seria uma chamada real à API ou smart contract)
      setStatus("success");
      setMessage("1000 tokens foram enviados para o seu endereço!");
    } catch (error) {
      setStatus("error");
      setMessage(
        "Ocorreu um erro ao enviar os tokens. Por favor, tente novamente."
      );
    }
  };

  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Endereço Ethereum</FormLabel>
                <FormControl>
                  <Input placeholder="0x..." {...field} readOnly />
                </FormControl>
                <FormDescription>
                  Insira seu endereço Ethereum para receber os tokens.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Reivindicar Tokens</Button>
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
