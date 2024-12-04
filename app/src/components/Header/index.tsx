import { Coins } from "lucide-react";
import { ConnectWallet } from "../buttons/connect-wallet";
import { Link } from "wouter";

export const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-blue-500 text-white">
      <Link href="/" className="flex items-center justify-center">
        <Coins className="h-8 w-8 mr-2 text-yellow-300" />
        <span className="font-bold text-2xl">memeFactory</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
        <Link
          className="text-sm font-medium hover:text-yellow-300 transition-colors"
          href="/"
        >
          {" "}
          Home
        </Link>
        <Link
          className="text-sm font-medium hover:text-yellow-300 transition-colors"
          href="/create-token"
        >
          {" "}
          Create meme
        </Link>
        <Link
          className="text-sm font-medium hover:text-yellow-300 transition-colors"
          href="/pre-buy"
        >
          {" "}
          Pré-venda
        </Link>

        <ConnectWallet />
      </nav>
    </header>
  );
};
