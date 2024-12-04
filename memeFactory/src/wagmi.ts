import { http, createConfig } from "wagmi";
import { bscTestnet, localhost } from "wagmi/chains";
import { metaMask } from "wagmi/connectors";

export const config = createConfig({
  chains: [bscTestnet, localhost],
  connectors: [
    /*  injected(),
    coinbaseWallet(),
    walletConnect({ projectId: import.meta.env.VITE_WC_PROJECT_ID }), */
    metaMask(),
  ],
  transports: {
    [bscTestnet.id]: http(),
    [localhost.id]: http(),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
