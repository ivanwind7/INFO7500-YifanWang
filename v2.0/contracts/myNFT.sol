//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
contract myNFT is ERC721 {
    // using Counters for Counters.Counter;
    // Counters.Counter private _tokenIds;
    uint256 private _tokenIds;

    constructor() ERC721("myNFT", "MNFT") {}

    function awardToken(address to) public returns (uint256) {
        uint256 newTokenId = _tokenIds++;
        _mint(to, newTokenId);
        // _tokenIds.increment();
        return newTokenId;
    }
}
