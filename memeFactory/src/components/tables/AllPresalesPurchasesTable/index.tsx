import { sliceWallet } from "@/common/utils/sliceWallet";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetBuyInfo } from "@/hook/get-buy-info";

interface Props {
  address: string;
}

export function AllPresalesPurchasesTable({ address }: Props) {
  const { value, isSuccess } = useGetBuyInfo({ address });

  if (!isSuccess) return null;

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
        {value.map((purchase) => (
          <TableRow key={purchase.ownerBuy}>
            <TableCell>{sliceWallet(purchase.ownerBuy)}</TableCell>
            <TableCell>{purchase.amountToken}</TableCell>
            <TableCell>{purchase.price}</TableCell>
            <TableCell>{purchase.buyDate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
