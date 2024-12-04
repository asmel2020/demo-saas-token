import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface UserPurchase {
  id: string;
  amount: number;
  totalPaid: number;
  date: string;
}

interface UserPurchasesTableProps {
  purchases: UserPurchase[];
}

export function UserPurchasesTable({ purchases }: UserPurchasesTableProps) {
  return (
    <Table>
      <TableCaption>Suas compras na pré-venda</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Quantidade</TableHead>
          <TableHead>Total Pago (USDT)</TableHead>
          <TableHead>Data</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {purchases.map((purchase) => (
          <TableRow key={purchase.id}>
            <TableCell>{purchase.amount}</TableCell>
            <TableCell>{purchase.totalPaid}</TableCell>
            <TableCell>{purchase.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
