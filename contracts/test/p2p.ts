import { expect } from "chai";
import hre from "hardhat";
import { MemeFactory, TokenTemplate, PreSale } from "../types";
import { addHour } from "@formkit/tempo";
let memeFactory: MemeFactory;
let usdtFake: TokenTemplate;
let tokenTemplate: TokenTemplate;
let preSale: PreSale;

describe("p2p", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.

  async function deployToken() {
    const [owner, a] = await hre.ethers.getSigners();
    const TokenTemplate = await hre.ethers.getContractFactory("TokenTemplate");
    const tokenTemplate = (await TokenTemplate.deploy(
      owner.address,
      "hola",
      "test",
      hre.ethers.parseEther("100000000000000"),
      false,
      false,
      0,
      a.address
    )) as unknown as TokenTemplate;
    await tokenTemplate.waitForDeployment();
    return tokenTemplate;
  }
  async function deployPreSale(token: string) {
    const PreSale = await hre.ethers.getContractFactory("PreSale");
    const preSale = (await hre.upgrades.deployProxy(PreSale, [
      token,
    ])) as unknown as PreSale;

    await preSale.waitForDeployment();
    return preSale;
  }
  async function deployMemeFactory(address: string, token: string) {
    const MemeFactory = await hre.ethers.getContractFactory("MemeFactory");
    const memeFactory = (await hre.upgrades.deployProxy(MemeFactory, [
      address,
      token,
    ])) as unknown as MemeFactory;

    await memeFactory.waitForDeployment();
    return memeFactory;
  }

  describe("p2p", function () {
    it("Deployment factory and pre sale", async function () {
      usdtFake = await deployToken();
      preSale = await deployPreSale(await usdtFake.getAddress());
      memeFactory = await deployMemeFactory(
        await preSale.getAddress(),
        await usdtFake.getAddress()
      );
    });

    it("allowance ", async function () {
      const [owner] = await hre.ethers.getSigners();
      await usdtFake.approve(
        await memeFactory.getAddress(),
        hre.ethers.parseEther("30")
      );

      await usdtFake.approve(
        await preSale.getAddress(),
        hre.ethers.parseEther("1000")
      );

      expect(
        await usdtFake.allowance(owner.address, await memeFactory.getAddress())
      ).to.equal(hre.ethers.parseEther("30"));

      expect(
        await usdtFake.allowance(owner.address, await preSale.getAddress())
      ).to.equal(hre.ethers.parseEther("1000"));
    });

    it("Change role create pre sale", async function () {
      await preSale.grantRole(
        await preSale.CREATE_PRE_SALE_ROLE(),
        memeFactory.getAddress()
      );

      const isCreatedPreSale = await preSale.hasRole(
        await preSale.CREATE_PRE_SALE_ROLE(),
        memeFactory.getAddress()
      );

      expect(isCreatedPreSale).to.equal(true);
    });

    it("create token template", async function () {
      const address = await memeFactory.calculateAddress({
        name: "pepe",
        symbol: "pepe",
        initialSupply: hre.ethers.parseEther("1001"),
        isSupplyMintable: false,
        isPreSale: true,
        startTime: Math.floor(addHour(new Date(), -1).getTime() / 1000), // Start time
        endTime: Math.floor(addHour(new Date(), 1).getTime() / 1000), // End time
        priceToken: hre.ethers.parseEther("1.1"),
        amountSellToken: hre.ethers.parseEther("1000"),
        salt: "0x0000000000000000000000000000000000000000000000000000000000000000",
      });

      await memeFactory.deploy({
        name: "pepe",
        symbol: "pepe",
        initialSupply: hre.ethers.parseEther("1001"),
        isSupplyMintable: false,
        isPreSale: true,
        startTime: Math.floor(addHour(new Date(), -1).getTime() / 1000), // Start time
        endTime: Math.floor(addHour(new Date(), 1).getTime() / 1000), // End time
        priceToken: hre.ethers.parseEther("1.1"),
        amountSellToken: hre.ethers.parseEther("1000"),
        salt: "0x0000000000000000000000000000000000000000000000000000000000000000",
      });

      tokenTemplate = (await hre.ethers.getContractAt(
        "TokenTemplate",
        address
      )) as unknown as TokenTemplate;

      expect(await memeFactory.getDeployedContracts()).to.deep.equal([address]);
    });

    it("should deploy a token", async function () {
      const [owner] = await hre.ethers.getSigners();
      expect(await tokenTemplate.name()).to.equal("pepe");
      expect(await tokenTemplate.symbol()).to.equal("pepe");
      expect(await tokenTemplate.totalSupply()).to.equal(
        hre.ethers.parseEther("1001")
      );
      expect(
        await tokenTemplate.balanceOf(await preSale.getAddress())
      ).to.equal(hre.ethers.parseEther("1000"));
      expect(await tokenTemplate.balanceOf(owner.address)).to.equal(
        hre.ethers.parseEther("1")
      );
    });

    it("verify payment create toke", async () => {
      const balance = await usdtFake.balanceOf(await memeFactory.getAddress());
      expect(balance).to.equal(hre.ethers.parseEther("20"));
    });

    it("verify create pre sale", async function () {
      const [owner] = await hre.ethers.getSigners();
      const preSaleInfo = await preSale.getPreSaleInfo(
        await tokenTemplate.getAddress()
      );

      expect(preSaleInfo.startTime).to.equal(
        Math.floor(addHour(new Date(), -1).getTime() / 1000)
      );
      expect(preSaleInfo.endTime).to.equal(
        Math.floor(addHour(new Date(), 1).getTime() / 1000)
      );
      expect(preSaleInfo.priceToken).to.equal(hre.ethers.parseEther("1.1"));
      expect(preSaleInfo.amountSellToken).to.equal(
        hre.ethers.parseEther("1000")
      );
      expect(preSaleInfo.amountSoldToken).to.equal(0);
      expect(preSaleInfo.owner).to.equal(owner.address);
    });

    it("buy token", async function () {
      await preSale.buyToken(
        await tokenTemplate.getAddress(),
        hre.ethers.parseEther("10")
      );
      await preSale.buyToken(
        await tokenTemplate.getAddress(),
        hre.ethers.parseEther("20")
      );
      const preSaleInfo = await preSale.getPreSaleInfo(
        await tokenTemplate.getAddress()
      );
      expect(preSaleInfo.amountSoldToken).to.equal(hre.ethers.parseEther("30"));
    });

    it("verify balance pre sale", async function () {
      const balance = await usdtFake.balanceOf(await preSale.getAddress());
      const preSaleInfo = await preSale.preSaleInfo(
        await tokenTemplate.getAddress()
      );

      expect(preSaleInfo.tokenWin).to.equal(hre.ethers.parseEther("33"));
      expect(balance).to.equal(hre.ethers.parseEther("33"));
    });

    it("rewards tokens", async () => {
      const [owner] = await hre.ethers.getSigners();
      await hre.ethers.provider.send("evm_increaseTime", [86400]); // 1 día
      await hre.ethers.provider.send("evm_mine"); // Minar un bloque para aplicar el cambio
      await preSale.rewardsToken(await tokenTemplate.getAddress());

      const balancePreSale = await usdtFake.balanceOf(
        await preSale.getAddress()
      );
      const balanceOwner = await usdtFake.balanceOf(owner.address);

      const balancetokenTemplateBalancePreSale = await tokenTemplate.balanceOf(
        await preSale.getAddress()
      );

      const balancetokenTemplateBalanceOwner = await tokenTemplate.balanceOf(
        owner.address
      );

      expect(balancePreSale).to.equal(hre.ethers.parseEther("0"));
      expect(balanceOwner).to.equal(hre.ethers.parseEther("99999999999980"));
      expect(balancetokenTemplateBalancePreSale).to.equal(
        hre.ethers.parseEther("30")
      );
      expect(balancetokenTemplateBalanceOwner).to.equal(
        hre.ethers.parseEther("971")
      );
    });

    it("consul all buy token", async function () {
      const d = await preSale.getBuyTokenInfo(await tokenTemplate.getAddress());
      console.log(d);
      /*  expect(preSaleInfo.amountSoldToken).to.equal(hre.ethers.parseEther("11")); */
    });

    it("consul buy user", async () => {
      const d = await preSale.getBuyTokenUser(await tokenTemplate.getAddress());

      console.log(d);
    });

    it("rewards tokens user", async () => {
      const [owner] = await hre.ethers.getSigners();

      await preSale.rewardsTokenUser(await tokenTemplate.getAddress());

      const balancetokenTemplateBalancePreSale = await tokenTemplate.balanceOf(
        await preSale.getAddress()
      );

      const balancetokenTemplateBalanceOwner = await tokenTemplate.balanceOf(
        owner.address
      );

      expect(balancetokenTemplateBalancePreSale).to.equal(
        hre.ethers.parseEther("0")
      );
      expect(balancetokenTemplateBalanceOwner).to.equal(
        hre.ethers.parseEther("1001")
      );
    });
  });
});
