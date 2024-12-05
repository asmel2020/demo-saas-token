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
  const { valueGetBuyInfo, isSuccessGetBuyInfo } = useGetBuyInfo({ address });

  if (!isSuccessGetBuyInfo) return null;

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
        {valueGetBuyInfo.map((purchase) => (
          <TableRow key={purchase.ownerBuy}>
            <TableCell>
              <a
                href={`https://testnet.bscscan.com/address/${purchase.ownerBuy}`}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:underline hover:text-blue-700"
              >
                {sliceWallet(purchase.ownerBuy)}
              </a>
            </TableCell>
            <TableCell>{purchase.amountToken}</TableCell>
            <TableCell>{purchase.price}</TableCell>
            <TableCell>{purchase.buyDate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
