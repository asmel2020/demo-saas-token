"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { sliceWallet } from "@/common/utils/sliceWallet";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  contractAddressCreated: string;
}

export function TokenCreatedDialog({
  isOpen,
  onClose,
  contractAddressCreated,
}: Props) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Token criado</DialogTitle>
          <DialogDescription>
            Seu token foi criado com sucesso. seu endereço é{" "}
            <a
              href={`https://testnet.bscscan.com/token/${contractAddressCreated}`}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline hover:text-blue-700"
            >
              {sliceWallet(contractAddressCreated)}
            </a>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={onClose}>Cerrar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
