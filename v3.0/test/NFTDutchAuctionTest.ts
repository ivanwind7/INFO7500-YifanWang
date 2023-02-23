import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers, network } from "hardhat";
import 'solidity-coverage';

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

    describe("Deploy My Token", function () {
      async function deployMyToken() {
        const {myNFT, nftContractOwner, auctionOwner, buyer} = await loadFixture(mintTokenFixture);
        const myTokenFactory = await ethers.getContractFactory("contracts/myToken.sol:myToken");
        const myToken = await myTokenFactory.connect(nftContractOwner).deploy(1000);
        await myToken.connect(nftContractOwner).transfer(buyer.address, 1000);
        return {myNFT, myToken, nftContractOwner, auctionOwner, buyer}
      }

      it("buyer should receive token from contract owner", async function() {
        const {myNFT, myToken, nftContractOwner, auctionOwner, buyer} = await loadFixture(deployMyToken);
        expect(await myToken.balanceOf(buyer.address)).to.equal(1000);
      });

      describe("NFT Dutch Auction Deployment", function () {
        async function deployNFTDutchAuctionFixture() {
          const {myNFT, myToken, nftContractOwner, auctionOwner, buyer} = await loadFixture(deployMyToken);
          const nftDutchAuctionFactory = await ethers.getContractFactory("NFTDutchAuction");
          const NFTDutchAuction = await nftDutchAuctionFactory.connect(auctionOwner).deploy(myToken.address, myNFT.address, 0, 100, 10, 5);
          await myNFT.connect(auctionOwner).approve(NFTDutchAuction.address, 0);
          return {myNFT, myToken, auctionOwner, buyer, NFTDutchAuction};
        }
  
        it("should return current price", async function () {
          const {myNFT, myToken, auctionOwner, buyer, NFTDutchAuction} = await loadFixture(deployNFTDutchAuctionFixture);
          expect(await NFTDutchAuction.initialPrice()).to.equal(150);
        });
  
        it("should end the auction and close the deal", async function() {
          const {myNFT, myToken, auctionOwner, buyer, NFTDutchAuction} = await loadFixture(deployNFTDutchAuctionFixture);
          for(let i = 0; i < 10; i++) {
            await network.provider.send("evm_mine");
          }
          await myToken.connect(buyer).approve(NFTDutchAuction.address, 160);
          await NFTDutchAuction.connect(buyer).bid(160);
          // End Auction
          expect(await NFTDutchAuction.auctionEnd()).to.equal(true);
          // Buyer's balance
          expect(await myToken.balanceOf(buyer.address)).to.equals(840);
          // Previous owner's balance
          expect(await myToken.balanceOf(auctionOwner.address)).to.equals(160);
          // Token's owner now
          expect(await myNFT.ownerOf(0)).to.equal(buyer.address);
        });
      }); 
    });
  });
});
