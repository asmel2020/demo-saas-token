import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";
import "@typechain/hardhat";
import "@nomicfoundation/hardhat-ethers";
import "@nomicfoundation/hardhat-chai-matchers";
import "hardhat-abi-exporter";
import "hardhat-gas-reporter";
const config: HardhatUserConfig = {
  solidity: "0.8.27",
  typechain: {
    outDir: "types",
    target: "ethers-v6",
    alwaysGenerateOverloads: false, // should overloads with full signatures like deposit(uint256) be generated always, even if there are no overloads?
    externalArtifacts: ["externalArtifacts/*.json"], // optional array of glob patterns with external artifacts to process (for example external libs from node_modules)
    dontOverrideCompile: false, // defaults to false
  },
  networks: {
    hardhat: {
      chainId: 1337,
      allowUnlimitedContractSize: true,
      mining: {
        auto: true,
        interval: 1000,
      },
    },
  },
  abiExporter: {
    path: "./abi",
    runOnCompile: true,
    clear: true,
    flat: true,
    spacing: 2,
    pretty: false,
    only: ["MemeFactory", "PreSale", "TokenTemplate"],
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
    gasPrice: 21,
  },
};

export default config;
