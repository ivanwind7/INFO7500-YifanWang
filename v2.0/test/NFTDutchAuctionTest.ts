import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers, network } from "hardhat";
import 'solidity-coverage';
import { token } from "../typechain-types/@openzeppelin/contracts";

describe("Deploy My NFT", function () {
  async function deployMyNFTFixture() {
    const [nftContractOwner, auctionOwner, buyer] = await ethers.getSigners();
    const myNFTFactory = await ethers.getContractFactory("contracts/myNFT.sol:myNFT");
    const myNFT = await myNFTFactory.connect(nftContractOwner).deploy();
    return {myNFT, nftContractOwner, auctionOwner, buyer};
  }

  describe("Mint A NFT Token", function () {
    async function mintTokenFixture() {
      const {myNFT, nftContractOwner, auctionOwner, buyer} = await loadFixture(deployMyNFTFixture);
      await myNFT.awardToken(auctionOwner.address);

      return {myNFT, nftContractOwner, auctionOwner, buyer};
    }

    describe("NFT Dutch Auction Deployment", function () {
      async function deployNFTDutchAuctionFixture() {
        const {myNFT, nftContractOwner, auctionOwner, buyer} = await loadFixture(mintTokenFixture);
        const nftDutchAuctionFactory = await ethers.getContractFactory("NFTDutchAuction");
        const NFTDutchAuction = await nftDutchAuctionFactory.connect(auctionOwner).deploy(myNFT.address, 0, ethers.BigNumber.from(10).pow(20), ethers.BigNumber.from(10), ethers.BigNumber.from(10).pow(19).div(2));
        await myNFT.connect(auctionOwner).approve(NFTDutchAuction.address, 0);
        return {myNFT, auctionOwner, buyer, NFTDutchAuction};
      }

      it("should return current price", async function () {
        const {myNFT, auctionOwner, buyer, NFTDutchAuction} = await loadFixture(deployNFTDutchAuctionFixture);
        expect(await NFTDutchAuction.initialPrice()).to.equal(ethers.BigNumber.from("150000000000000000000"));
      });

      it("should end the auction and close the deal", async function() {
        const {myNFT, auctionOwner, buyer, NFTDutchAuction} = await loadFixture(deployNFTDutchAuctionFixture);
        for(let i = 0; i < 10; i++) {
          await network.provider.send("evm_mine");
        }
        await NFTDutchAuction.connect(buyer).bid({from: buyer.address, value: ethers.BigNumber.from("150000000000000000000")});
        // End Auction
        expect(await NFTDutchAuction.auctionEnd()).to.equal(true);
        // Buyer's balance
        expect(await ethers.provider.getBalance(buyer.address)).to.greaterThanOrEqual(ethers.BigNumber.from("9849000000000000000000"));
        // Previous owner's balance
        expect(await ethers.provider.getBalance(auctionOwner.address)).to.greaterThanOrEqual(ethers.BigNumber.from("10149000000000000000000"));
        // Token's owner now
        expect(await myNFT.ownerOf(0)).to.equal(buyer.address);
      });
    }); 
  });
});
