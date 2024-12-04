import { deployMemeFactory } from "./memeFactory";
import { deployPreSale } from "./PreSale";
import { deployToken } from "./usdtFake";
import * as fs from "fs";
const deploy = async () => {
  const token = await deployToken();
  const preSale = await deployPreSale(await token.getAddress());

  const memeFactory = await deployMemeFactory({
    tokenAddress: await token.getAddress(),
    preSaleAddress: await preSale.getAddress(),
  });
  const result = {
    tokenAddress: await token.getAddress(),
    preSaleAddress: await preSale.getAddress(),
    memeFactoryAddress: await memeFactory.getAddress(),
  };
  fs.writeFileSync("./export/contractsAddress.json", JSON.stringify(result));
  return result;
};

deploy()
  .then((result) => {
    console.log("Deployed successfully addreas:", result);
  })
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
