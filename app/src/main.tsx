import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { MetaMaskProvider } from "@metamask/sdk-react";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MetaMaskProvider
      sdkOptions={{
        dappMetadata: {
          name: "memeFactory",
          url: window.location.href,
        },
        readonlyRPCMap: {
          "0x61":
            "https://bsc-testnet.nodereal.io/v1/efd1cb8d238f49698736ffe74f1dcac4",
          "0x7A69": "http://127.0.0.1:8545/",
        },
        /*  infuraAPIKey: process.env.INFURA_API_KEY, */
        // Other options.
      }}
    >
      {" "}
      <App />
    </MetaMaskProvider>
  </StrictMode>
);
