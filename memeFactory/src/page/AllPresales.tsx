import { PresalesTable } from "@/components/tables/PresalesTable";

export function AllPresales() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Todas as Pré-vendas</h1>
      <PresalesTable />
    </div>
  );
}
