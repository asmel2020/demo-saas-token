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
import { useCreateToken } from "@/hook/create-token";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function TokenCreatedDialog({ isOpen, onClose }: Props) {
  const { address } = useCreateToken();
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Token criado</DialogTitle>
          <DialogDescription>
            Seu token foi criado com sucesso. seu endereço é{" "}
            <a
              href={`https://testnet.bscscan.com/token/${address}`}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline hover:text-blue-700"
            >
              {sliceWallet(address)}
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
