/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  MyNFT,
  MyNFTInterface,
} from "../../../contracts/NFTDutchAuction.sol/MyNFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

export class MyNFT__factory {
  static readonly abi = _abi;
  static createInterface(): MyNFTInterface {
    return new utils.Interface(_abi) as MyNFTInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MyNFT {
    return new Contract(address, _abi, signerOrProvider) as MyNFT;
  }
}
