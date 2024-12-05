import { Faucet } from "@/components/Faucet";

export function FaucetPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Faucet de Tokens</h1>
      <p className="mb-6">
        Use este faucet para receber tokens de teste gratuitamente.
      </p>
      <Faucet />
    </div>
  );
}
