import hre from "hardhat";
import { MemeFactory } from "../types";
export async function deployMemeFactory({
  preSaleAddress,
  tokenAddress,
}: {
  preSaleAddress: string;
  tokenAddress: string;
}) {
  const MemeFactory = await hre.ethers.getContractFactory("MemeFactory");
  const memeFactory = (await hre.upgrades.deployProxy(MemeFactory, [
    preSaleAddress,
    tokenAddress,
  ])) as unknown as MemeFactory;

  await memeFactory.waitForDeployment();
  return memeFactory;
}
