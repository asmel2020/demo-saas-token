import { sliceWallet } from "@/common/utils/sliceWallet";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import { useAccount, useConnect } from "wagmi";
export function ConnectWallet() {
  const account = useAccount();
  const { connectors, connect } = useConnect();

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
              <div>{sliceWallet(account.addresses[0])}</div>
            ) : (
              connector.name
            )}
          </Button>
        );
      })}
    </>
  );
}
