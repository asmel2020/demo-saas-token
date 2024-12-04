import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import { useSDK } from "@metamask/sdk-react";

export function ConnectWallet() {
  const [account, setAccount] = useState<string>();
  const { sdk, connected, connecting, provider, chainId } = useSDK();

  const connect = async () => {
    try {
      const accounts = await sdk?.connect();
      setAccount(accounts?.[0]);
    } catch (err) {
      console.warn("failed to connect..", err);
    }
  };
  return (
    <Button
      className="bg-orange-500 hover:bg-orange-600 text-white"
      onClick={connect}
    >
      <Wallet className="mr-2 h-4 w-4" />
      {connected && (
        <div>
          <>
            {account
              ? `${account.slice(0, 6)}...${account.slice(-4)}`
              : "Conectar Carteira"}
          </>
        </div>
      )}
    </Button>
  );
}
