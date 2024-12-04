import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

export function ConnectWallet() {
  const [isConnected, setIsConnected] = useState(false);

  /* const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        setIsConnected(true);
      } catch (error) {
        console.error("Falha ao conectar com o MetaMask", error);
      }
    } else {
      alert("Por favor, instale o MetaMask!");
    }
  }; */

  return (
    <Button
      /*  onClick={connectWallet} */
      className="bg-orange-500 hover:bg-orange-600 text-white"
    >
      <Wallet className="mr-2 h-4 w-4" />
      {isConnected ? "Conectado" : "Conectar Carteira"}
    </Button>
  );
}
