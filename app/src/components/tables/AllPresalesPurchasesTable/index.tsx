import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Purchase {
  id: string;
  buyer: string;
  amount: number;
  totalPaid: number;
  date: string;
}

interface AllPresalesPurchasesTableProps {
  purchases: Purchase[];
}

export function AllPresalesPurchasesTable({
  purchases,
}: AllPresalesPurchasesTableProps) {
  return (
    <Table>
      <TableCaption>Todas as compras realizadas na pré-venda</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Comprador</TableHead>
          <TableHead>Quantidade</TableHead>
          <TableHead>Total Pago (USDT)</TableHead>
          <TableHead>Data</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {purchases.map((purchase) => (
          <TableRow key={purchase.id}>
            <TableCell>{purchase.buyer}</TableCell>
            <TableCell>{purchase.amount}</TableCell>
            <TableCell>{purchase.totalPaid}</TableCell>
            <TableCell>{purchase.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
