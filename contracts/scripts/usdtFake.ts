import hre from "hardhat";
import { TokenTemplate } from "../types";

export async function deployToken() {
  const [owner, a] = await hre.ethers.getSigners();
  const TokenTemplate = await hre.ethers.getContractFactory("TokenTemplate");
  const tokenTemplate = (await TokenTemplate.deploy(
    owner.address,
    "UsdtFake",
    "UsdtFake",
    hre.ethers.parseEther("100000000000000"),
    false,
    false,
    0,
    a.address
  )) as unknown as TokenTemplate;
  await tokenTemplate.waitForDeployment();
  return tokenTemplate;
}
