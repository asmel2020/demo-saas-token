import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

import { useAccount, useConnect, useDisconnect } from "wagmi";

export function ConnectWallet() {
  const account = useAccount();
  const { connectors, connect, status, error } = useConnect();
  /* const { disconnect } = useDisconnect(); */

  return (
    <>
      {connectors.map((connector) => {
        if (connector.name !== "MetaMask") return;
        return (
          <Button
            key={connector.uid}
            className="bg-orange-500 hover:bg-orange-600 text-white"
            onClick={() => connect({ connector })}
          >
            <Wallet className="mr-2 h-4 w-4" />
            {account.status === "connected" ? (
              <div>
                {`${account.addresses[0].slice(0, 6)}...${account.addresses[0].slice(-4)}`}
              </div>
            ) : (
              connector.name
            )}
          </Button>
        );
      })}
    </>
  );
}
