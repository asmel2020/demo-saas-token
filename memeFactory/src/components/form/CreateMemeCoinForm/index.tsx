import { useEffect, useState } from "react";
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
import { useWriteContract, useAccount } from "wagmi";
import memeFactoryAbi from "@/common/abi/memeFactory.abi";
import addressContract from "@/common/addressContract";
import { ethers } from "ethers";
import { useEthersProvider } from "@/common/utils/useEthersProvider";
import { addDay, addYear } from "@formkit/tempo";
import { CalendarTime } from "@/components/input/CalendarTime";
import { toast } from "react-hot-toast";
import { useAllowance } from "@/hook/use-allowance";
import { useApprove } from "@/hook/use-approve";
import chainId from "@/common/chainId";
import { waitForTransactionReceipt } from "@wagmi/core";
import { config } from "@/wagmi";
import { TokenCreatedDialog } from "@/components/dialog/TokenCreatedDialog";
import { useCreateToken } from "@/hook/create-token";

export function CreateMemeCoinForm() {
  const account = useAccount();
  const [disabled, setDisabled] = useState(false);
  const [hasPresale, setHasPresale] = useState(false);
  const { writeContractAsync } = useWriteContract();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const provider = useEthersProvider();
  const { setAddress } = useCreateToken();
  const { allowance, refetchAllowance } = useAllowance({
    address: addressContract.memeFactoryAddress as `0x${string}`,
  });

  const { approverSend, isSuccessApprover, isPendingApprover } = useApprove();

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
      presaleEndDate: addDay(new Date(), 1),
      presaleStartDate: new Date(),
    },
  });

  const onSubmit = async (data: CreateMemeCoinFormData) => {
    setDisabled(true);
    const dataContract = {
      name: data.name,
      symbol: data.symbol,
      initialSupply: ethers.parseEther(data.initialSupply.toString()),
      isSupplyMintable: data.isMintable,
      isPreSale: data.hasPresale,
      startTime: Math.floor(data.presaleStartDate.getTime() / 1000).toString(),
      endTime: Math.floor(data.presaleEndDate.getTime() / 1000).toString(),
      priceToken: ethers.parseEther(data.presalePrice.toString()),
      amountSellToken: ethers.parseEther(data.presaleTokenAmount.toString()),
      salt: ethers.keccak256(ethers.randomBytes(32)),
    };
    const transactionCount = await provider?.getTransactionCount(
      account.address as `0x${string}`,
      "latest"
    );
    try {
      const hash = await writeContractAsync({
        abi: memeFactoryAbi,
        address: addressContract.memeFactoryAddress as `0x${string}`,
        functionName: "deploy",
        args: [dataContract],
        nonce: transactionCount,
        chainId,
      });

      const transactionReceipt = await waitForTransactionReceipt(config, {
        hash,
        confirmations: 6,
        chainId,
      });
      setDisabled(false);
      toast.success("Meme coin criado com sucesso");
      for (let index = 0; index < transactionReceipt.logs.length; index++) {
        const { address, topics, data } = transactionReceipt.logs[index];
        if (address === addressContract.memeFactoryAddress) {
          const iface = new ethers.Interface(memeFactoryAbi);
          const decodedEvent = iface.parseLog({ data, topics });
          setAddress(decodedEvent?.args[0] || "0x");
        }
      }
      form.reset();
      setIsDialogOpen(true);
    } catch (error) {
      setDisabled(false);
    }
  };

  useEffect(() => {
    if (form.formState.errors?.presaleTokenAmount) {
      toast.error(form.formState.errors.presaleTokenAmount.message as string);
    }
  }, [form.formState.errors]);

  useEffect(() => {
    if (isSuccessApprover) {
      setDisabled(false);
      toast.success("Aprovado com sucesso");
      refetchAllowance();
    }
  }, [isSuccessApprover]);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b text-black flex justify-center">
      <TokenCreatedDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome da MemeCoin</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ex: DogeCoin"
                    {...field}
                    disabled={disabled}
                  />
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
                  <Input
                    placeholder="Ex: DOGE"
                    {...field}
                    disabled={disabled}
                  />
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
                    disabled={disabled}
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
                    disabled={disabled}
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
                    disabled={disabled}
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
                      <CalendarTime
                        disabled={disabled}
                        onSelect={field.onChange}
                        selected={field.value}
                        dataInit={new Date()}
                        dateEnd={addYear(new Date(), 5)}
                        isClose={true}
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
                      <CalendarTime
                        disabled={disabled}
                        onSelect={field.onChange}
                        selected={field.value}
                        dataInit={new Date()}
                        dateEnd={addYear(new Date(), 5)}
                        isClose={true}
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
                        disabled={disabled}
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
                        disabled={disabled}
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
          {Number(allowance || 0) < ethers.parseEther("20") ? (
            <Button
              type="button"
              onClick={() =>
                approverSend({
                  address: addressContract.memeFactoryAddress as `0x${string}`,
                })
              }
              disabled={isPendingApprover}
            >
              Approver
            </Button>
          ) : (
            <Button type="submit" disabled={disabled}>
              Criar MemeCoin
            </Button>
          )}
        </form>
      </Form>
    </section>
  );
}
