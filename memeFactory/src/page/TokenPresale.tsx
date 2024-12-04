import { PresaleForm } from "@/components/form/PresaleForm";
import { AllPresalesPurchasesTable } from "@/components/tables/AllPresalesPurchasesTable";
import { UserPurchasesTable } from "@/components/tables/UserPurchasesTable";

const allPurchases = [
  {
    id: "1",
    buyer: "0x1234...5678",
    amount: 1000,
    totalPaid: 100,
    date: "2023-05-01",
  },
  {
    id: "2",
    buyer: "0x8765...4321",
    amount: 2000,
    totalPaid: 200,
    date: "2023-05-02",
  },
  // ... mais compras
];

const userPurchases = [
  { id: "1", amount: 500, totalPaid: 50, date: "2023-05-01" },
  { id: "2", amount: 1000, totalPaid: 100, date: "2023-05-03" },
  // ... mais compras do usuário
];

export default function TokenPresale() {
  const tokenPrice = 0.1; // Preço do token em USDT
  const tokenSymbol = "MEME"; // Símbolo do token

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">
        Pré-venda do Token {tokenSymbol}
      </h1>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Comprar Tokens</h2>
        <PresaleForm tokenPrice={tokenPrice} tokenSymbol={tokenSymbol} />
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Suas Compras</h2>
        <UserPurchasesTable purchases={userPurchases} />
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Todas as Compras</h2>
        <AllPresalesPurchasesTable purchases={allPurchases} />
      </div>
    </div>
  );
}
