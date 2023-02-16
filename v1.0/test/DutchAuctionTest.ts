import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers, network } from "hardhat";
import 'solidity-coverage';

describe("DutchAuction", function () {
  async function deployDutchAuctionFixture() {
    const [owner, otherAccount] = await ethers.getSigners();
    const DutchAuctionFactory = await ethers.getContractFactory("BasicDutchAuction");
    const DutchAuction = await DutchAuctionFactory.connect(owner).deploy(ethers.BigNumber.from(10).pow(20) , ethers.BigNumber.from(10), ethers.BigNumber.from(10).pow(19).div(2));
    return {DutchAuction, owner, otherAccount};
  }

  describe("Dutch Auction Deplotment", function () {
    it("should return current price", async function () {
        const {DutchAuction, owner, otherAccount} = await loadFixture(deployDutchAuctionFixture);
        expect(await DutchAuction.initialPrice()).to.equal(ethers.BigNumber.from("150000000000000000000"));
    });

    it("should end the auction and finish transfer", async function() {
        const {DutchAuction, owner, otherAccount} = await loadFixture(deployDutchAuctionFixture);
        for(let i = 0; i < 10; i++) {
          await network.provider.send("evm_mine");
        }
        //const blockNum = (await ethers.provider.getBlock("latest")).number;
        await DutchAuction.connect(otherAccount).bid({from: otherAccount.address, value: ethers.BigNumber.from("150000000000000000000")});
        expect(await DutchAuction.auctionEnd()).to.equal(true);
        expect(await ethers.provider.getBalance(otherAccount.address)).to.greaterThanOrEqual(ethers.BigNumber.from("9849000000000000000000"));
        expect(await ethers.provider.getBalance(owner.address)).to.greaterThanOrEqual(ethers.BigNumber.from("10149000000000000000000"));
    });
  });
});
