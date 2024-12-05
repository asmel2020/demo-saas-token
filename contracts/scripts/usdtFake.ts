import hre from "hardhat";
import { TokenTemplate } from "../types";

export async function deployToken() {
  const [owner] = await hre.ethers.getSigners();
  const TokenTemplate = await hre.ethers.getContractFactory("TokenTemplate");
  const tokenTemplate = (await TokenTemplate.deploy(
    owner.address,
    "UsdtFake",
    "UsdtFake",
    hre.ethers.parseEther("100000000000000"),
    false,
    false,
    0,
    owner.address
  )) as unknown as TokenTemplate;

  console.log((await hre.ethers.provider.getNetwork()).chainId);
  await tokenTemplate.waitForDeployment();
  return tokenTemplate;
}
