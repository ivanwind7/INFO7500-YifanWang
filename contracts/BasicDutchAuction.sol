//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract BasicDutchAuction {

    bool public auctionEnd;
    uint256 public reservePrice;
    uint256 public numBlocksAuctionOpen;
    uint256 public offerPriceDecrement;
    uint256 public initialPrice;
    address public receiver;

    constructor(uint256 _reservePrice, uint256 _numBlocksAuctionOpen, uint256 _offerPriceDecrement) {
        auctionEnd = false;
        reservePrice = _reservePrice;
        numBlocksAuctionOpen = _numBlocksAuctionOpen;
        offerPriceDecrement = _offerPriceDecrement;
        initialPrice = _reservePrice + _numBlocksAuctionOpen * _offerPriceDecrement;
        receiver = msg.sender;
    }

    function bid() public payable returns(address) {
        // Judge whether the auction is ended
        require(!auctionEnd, "The auction already ended.");
        // Judge if the auction begins
        require(block.number > numBlocksAuctionOpen, "The auction hasn't started yet");
        // Judge if the bid is greater than the minimum
        require(msg.value > initialPrice - offerPriceDecrement * (block.number - numBlocksAuctionOpen), "Your bid is lower than the minimum bid");
        // End the auction
        finalize(msg.value);
        return address(0);
    }

    function finalize(uint256 finalBid) public {
        auctionEnd = true;
        payable(receiver).transfer(finalBid);
    }

    function refund(uint256 refundAmount) public {
        payable(msg.sender).transfer(refundAmount);
    }
}
