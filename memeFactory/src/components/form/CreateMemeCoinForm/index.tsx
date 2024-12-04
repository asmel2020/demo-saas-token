import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

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
import { CreateMemeCoinFormData, createMemeCoinSchema } from "./validate";

export function CreateMemeCoinForm() {
  const [hasPresale, setHasPresale] = useState(false);

  const form = useForm<CreateMemeCoinFormData>({
    resolver: zodResolver(createMemeCoinSchema),
    defaultValues: {
      name: "",
      symbol: "",
      initialSupply: 0,
      isMintable: false,
      hasPresale: false,
      presalePrice: 1,
      presaleTokenAmount: 1,
    },
  });

  const onSubmit = async (data: CreateMemeCoinFormData) => {
    console.log(data);
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b text-black flex justify-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome da MemeCoin</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: DogeCoin" {...field} />
                </FormControl>
                <FormDescription>
                  Escolha um nome único para sua memeCoin.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="symbol"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Símbolo</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: DOGE" {...field} />
                </FormControl>
                <FormDescription>
                  Um símbolo curto para representar sua memeCoin.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="initialSupply"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Suprimento Inicial</FormLabel>
                <FormControl>
                  <InputNumber
                    onChange={field.onChange}
                    valueInitial={field.value.toString()}
                  />
                </FormControl>
                <FormDescription>
                  Quantidade inicial de tokens a serem criados.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="isMintable"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">Mintável</FormLabel>
                  <FormDescription>
                    Permitir a criação de novos tokens no futuro?
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="hasPresale"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">Pré-venda</FormLabel>
                  <FormDescription>
                    Realizar uma pré-venda antes do lançamento oficial?
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={(checked) => {
                      field.onChange(checked);
                      setHasPresale(checked);
                    }}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {hasPresale && (
            <>
              <FormField
                control={form.control}
                name="presaleStartDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Data de Início da Pré-venda</FormLabel>
                    <FormControl>
                      <Input
                        type="datetime-local"
                        /*  {...field} */
                        onChange={(e) =>
                          field.onChange(new Date(e.target.value))
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="presaleEndDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Data de Término da Pré-venda</FormLabel>
                    <FormControl>
                      <Input
                        type="datetime-local"
                        /*   {...field} */
                        onChange={(e) =>
                          field.onChange(new Date(e.target.value))
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="presalePrice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preço na Pré-venda</FormLabel>
                    <FormControl>
                      <InputNumber
                        onChange={field.onChange}
                        valueInitial={field.value.toString()}
                      />
                    </FormControl>
                    <FormDescription>
                      Preço de cada token durante a pré-venda.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="presaleTokenAmount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quantidade de Tokens para Pré-venda</FormLabel>
                    <FormControl>
                      <InputNumber
                        onChange={field.onChange}
                        valueInitial={field.value.toString()}
                      />
                    </FormControl>
                    <FormDescription>
                      Quantidade total de tokens disponíveis para a pré-venda.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}

          <Button type="submit">Criar MemeCoin</Button>
        </form>
      </Form>
    </section>
  );
}
