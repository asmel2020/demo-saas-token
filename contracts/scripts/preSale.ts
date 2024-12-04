import hre from "hardhat";
import { PreSale } from "../types";

export async function deployPreSale(token: string) {
  const PreSale = await hre.ethers.getContractFactory("PreSale");
  const preSale = (await hre.upgrades.deployProxy(PreSale, [
    token,
  ])) as unknown as PreSale;

  await preSale.waitForDeployment();
  return preSale;
}
