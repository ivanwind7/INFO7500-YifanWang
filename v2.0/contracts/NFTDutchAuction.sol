//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

interface myNFT {
    function ownerOf(uint256 _tokenId) external view returns (address);
    function transferFrom(address from, address to, uint256 tokenId) external payable;
}

contract NFTDutchAuction {

    bool public auctionEnd;
    address public owner;
    address public tokenAddress;
    uint256 public nftTokenId;
    uint256 public reservePrice;
    uint256 public numBlocksAuctionOpen;
    uint256 public offerPriceDecrement;
    uint256 public initialPrice;
    myNFT public nftContract;

    constructor(address erc721TokenAddress, uint256 _nftTokenId, uint256 _reservePrice, uint256 _numBlocksAuctionOpen, uint256 _offerPriceDecrement) {
        // require(nftContract.ownerOf(_nftTokenId) == msg.sender, "You are not the owner of the nft token!");
        auctionEnd = false;
        owner = msg.sender;
        tokenAddress = erc721TokenAddress;
        nftTokenId = _nftTokenId;
        reservePrice = _reservePrice;
        numBlocksAuctionOpen = _numBlocksAuctionOpen;
        offerPriceDecrement = _offerPriceDecrement;
        initialPrice = _reservePrice + _numBlocksAuctionOpen * _offerPriceDecrement;
        nftContract = myNFT(erc721TokenAddress);        
    }

    function bid() public payable returns(address) {
        // Judge whether the auction is ended
        require(!auctionEnd, "The auction already ended.");
        // Judge if the auction begins
        require(block.number > numBlocksAuctionOpen, "The auction hasn't started yet");
        // Judge if the bid is greater than the minimum
        require(msg.value > initialPrice - offerPriceDecrement * (block.number - numBlocksAuctionOpen), "Your bid is lower than the minimum bid");
        // End the auction
        auctionEnd = true;
        // Transfer the token
        nftContract.transferFrom(owner, msg.sender, nftTokenId);
        // Pay the owner
        payable(owner).transfer(msg.value);
        return address(0);
    }
}
