import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetBuyTokenUser } from "@/hook/get-buy-token-user";

interface Props {
  address: string;
}

export function UserPurchasesTable({ address }: Props) {
  const { valueUser, isSuccessUser } = useGetBuyTokenUser({ address });

  if (!isSuccessUser) return null;
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
        {valueUser.map((purchase) => (
          <TableRow key={purchase.buyDate}>
            <TableCell>{purchase.amountToken}</TableCell>
            <TableCell>{purchase.price}</TableCell>
            <TableCell>{purchase.buyDate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
