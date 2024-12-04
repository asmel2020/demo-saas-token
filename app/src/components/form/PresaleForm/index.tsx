import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const presaleFormSchema = z.object({
  amount: z
    .number()
    .positive({ message: "A quantidade deve ser um número positivo" }),
});

type PresaleFormData = z.infer<typeof presaleFormSchema>;

interface PresaleFormProps {
  tokenPrice: number;
  tokenSymbol: string;
}

export function PresaleForm({ tokenPrice, tokenSymbol }: PresaleFormProps) {
  const [usdtToPay, setUsdtToPay] = useState(0);

  const form = useForm<PresaleFormData>({
    resolver: zodResolver(presaleFormSchema),
    defaultValues: {
      amount: 0,
    },
  });

  const onSubmit = (data: PresaleFormData) => {
    console.log(data);
    // Aqui você implementaria a lógica para processar a compra
  };

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
                <Input
                  type="number"
                  {...field}
                  onChange={(e) => {
                    const value = parseFloat(e.target.value);
                    field.onChange(value);
                    setUsdtToPay(calculateUsdt(value));
                  }}
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

        <Button type="submit">Comprar Tokens</Button>
      </form>
    </Form>
  );
}
