//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

interface myNFT {
    function ownerOf(uint256 _tokenId) external view returns (address);
    function transferFrom(address from, address to, uint256 tokenId) external payable;
}

interface myToken {
    function transferFrom(address _from, address _to, uint256 _value) external returns (bool success);
}

contract NFTDutchAuction {

    bool public auctionEnd;
    address public owner;
    uint256 public nftTokenId;
    uint256 public reservePrice;
    uint256 public numBlocksAuctionOpen;
    uint256 public offerPriceDecrement;
    uint256 public initialPrice;
    myNFT public nftContract;
    myToken public tokenContract;

    constructor(address erc20TokenAddress, address erc721TokenAddress, uint256 _nftTokenId, uint256 _reservePrice, uint256 _numBlocksAuctionOpen, uint256 _offerPriceDecrement) {
        auctionEnd = false;
        owner = msg.sender;
        nftTokenId = _nftTokenId;
        reservePrice = _reservePrice;
        numBlocksAuctionOpen = _numBlocksAuctionOpen;
        offerPriceDecrement = _offerPriceDecrement;
        initialPrice = _reservePrice + _numBlocksAuctionOpen * _offerPriceDecrement;
        nftContract = myNFT(erc721TokenAddress);
        tokenContract = myToken(erc20TokenAddress);
    }

    function bid(uint256 buyersBid) public returns(address) {
        // Judge whether the auction is ended
        require(!auctionEnd, "The auction already ended.");
        // Judge if the auction begins
        require(block.number > numBlocksAuctionOpen, "The auction hasn't started yet");
        // Judge if the bid is greater than the minimum
        require(buyersBid > initialPrice - offerPriceDecrement * (block.number - numBlocksAuctionOpen), "Your bid is lower than the minimum bid");    
        // End the auction
        auctionEnd = true;
        // Transfer the token
        nftContract.transferFrom(owner, msg.sender, nftTokenId);
        // Pay the owner
        tokenContract.transferFrom(msg.sender, owner, buyersBid);
        return address(0);
    }
}
