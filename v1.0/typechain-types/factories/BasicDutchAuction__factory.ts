/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  BasicDutchAuction,
  BasicDutchAuctionInterface,
} from "../BasicDutchAuction";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_reservePrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_numBlocksAuctionOpen",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_offerPriceDecrement",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "auctionEnd",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "bid",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "finalBid",
        type: "uint256",
      },
    ],
    name: "finalize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "numBlocksAuctionOpen",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "offerPriceDecrement",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "receiver",
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
        internalType: "uint256",
        name: "refundAmount",
        type: "uint256",
      },
    ],
    name: "refund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "reservePrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000c7f38038062000c7f8339818101604052810190620000379190620001d8565b620000536793c9fcf0dc3e101160c01b6200019560201b60201c565b6200006f67932e815c2668e18a60c01b6200019560201b60201c565b60008060006101000a81548160ff021916908315150217905550620000a567f57db031e67c1e3860c01b6200019560201b60201c565b82600181905550620000c8676f74b6490b38751e60c01b6200019560201b60201c565b81600281905550620000eb67d97dff989f1074f660c01b6200019560201b60201c565b806003819055506200010e6799a43cf09fd6d64160c01b6200019560201b60201c565b80826200011c919062000263565b83620001299190620002ae565b6004819055506200014b67f939e178f6b5988360c01b6200019560201b60201c565b33600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050620002e9565b50565b600080fd5b6000819050919050565b620001b2816200019d565b8114620001be57600080fd5b50565b600081519050620001d281620001a7565b92915050565b600080600060608486031215620001f457620001f362000198565b5b60006200020486828701620001c1565b93505060206200021786828701620001c1565b92505060406200022a86828701620001c1565b9150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600062000270826200019d565b91506200027d836200019d565b92508282026200028d816200019d565b91508282048414831517620002a757620002a662000234565b5b5092915050565b6000620002bb826200019d565b9150620002c8836200019d565b9250828201905080821115620002e357620002e262000234565b5b92915050565b61098680620002f96000396000f3fe6080604052600436106100865760003560e01c80632a24f46c116100595780632a24f46c146101265780633103ea6214610151578063d3642a881461017c578063db2e1eed146101a7578063f7260d3e146101d257610086565b806305261aea1461008b5780631998aeef146100b45780631d0806ae146100d2578063278ecde1146100fd575b600080fd5b34801561009757600080fd5b506100b260048036038101906100ad9190610647565b6101fd565b005b6100bc6102d3565b6040516100c991906106b5565b60405180910390f35b3480156100de57600080fd5b506100e7610534565b6040516100f491906106df565b60405180910390f35b34801561010957600080fd5b50610124600480360381019061011f9190610647565b61053a565b005b34801561013257600080fd5b5061013b6105c0565b6040516101489190610715565b60405180910390f35b34801561015d57600080fd5b506101666105d1565b60405161017391906106df565b60405180910390f35b34801561018857600080fd5b506101916105d7565b60405161019e91906106df565b60405180910390f35b3480156101b357600080fd5b506101bc6105dd565b6040516101c991906106df565b60405180910390f35b3480156101de57600080fd5b506101e76105e3565b6040516101f491906106b5565b60405180910390f35b61021167ba27faf5f11f60c960c01b610609565b610225675a7fcf0e0f45c43a60c01b610609565b60016000806101000a81548160ff021916908315150217905550610253677a6ead0ceaccf24060c01b610609565b6102676751766266fc99d79b60c01b610609565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156102cf573d6000803e3d6000fd5b5050565b60006102e96763f209ec7278b18b60c01b610609565b6102fd6740a3f27918464e3460c01b610609565b6103116715934ad3e8e9d67460c01b610609565b6103256712b4855307835e3960c01b610609565b60008054906101000a900460ff1615610373576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036a9061078d565b60405180910390fd5b610387677a5e15ec244a03ae60c01b610609565b61039b6775f02ce4e5a2348a60c01b610609565b6103af67e9493012995430b660c01b610609565b6103c367528b73fdd7b485c360c01b610609565b6002544311610407576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103fe906107f9565b60405180910390fd5b61041b67f90972f5f4070ba760c01b610609565b61042f675eafe9d39f1e8bb260c01b610609565b61044367bbdbf0186bdf45dd60c01b610609565b61045767b854edf17f3df9e860c01b610609565b600254436104659190610848565b600354610472919061087c565b60045461047f9190610848565b34116104c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b790610930565b60405180910390fd5b6104d4672326144e5b65bc8f60c01b610609565b6104e867c1e4ccd9f6051c4d60c01b610609565b6104fc67e4426e2e1fcacc2c60c01b610609565b610505346101fd565b6105196770c774fa11842feb60c01b610609565b61052d6751e4cd65ccf96a1c60c01b610609565b6000905090565b60045481565b61054e6729edbf9e521d679b60c01b610609565b61056267550b119468e4ed4260c01b610609565b61057667e0ce9d01da01ce7660c01b610609565b3373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156105bc573d6000803e3d6000fd5b5050565b60008054906101000a900460ff1681565b60025481565b60035481565b60015481565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b50565b600080fd5b6000819050919050565b61062481610611565b811461062f57600080fd5b50565b6000813590506106418161061b565b92915050565b60006020828403121561065d5761065c61060c565b5b600061066b84828501610632565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061069f82610674565b9050919050565b6106af81610694565b82525050565b60006020820190506106ca60008301846106a6565b92915050565b6106d981610611565b82525050565b60006020820190506106f460008301846106d0565b92915050565b60008115159050919050565b61070f816106fa565b82525050565b600060208201905061072a6000830184610706565b92915050565b600082825260208201905092915050565b7f5468652061756374696f6e20616c726561647920656e6465642e000000000000600082015250565b6000610777601a83610730565b915061078282610741565b602082019050919050565b600060208201905081810360008301526107a68161076a565b9050919050565b7f5468652061756374696f6e206861736e27742073746172746564207965740000600082015250565b60006107e3601e83610730565b91506107ee826107ad565b602082019050919050565b60006020820190508181036000830152610812816107d6565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061085382610611565b915061085e83610611565b925082820390508181111561087657610875610819565b5b92915050565b600061088782610611565b915061089283610611565b92508282026108a081610611565b915082820484148315176108b7576108b6610819565b5b5092915050565b7f596f757220626964206973206c6f776572207468616e20746865206d696e696d60008201527f756d206269640000000000000000000000000000000000000000000000000000602082015250565b600061091a602683610730565b9150610925826108be565b604082019050919050565b600060208201905081810360008301526109498161090d565b905091905056fea264697066735822122063b719b97dcfea850049dfb2e1f2f91e033e3f82cd90183c557231428aed2fc264736f6c63430008110033";

type BasicDutchAuctionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BasicDutchAuctionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BasicDutchAuction__factory extends ContractFactory {
  constructor(...args: BasicDutchAuctionConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _reservePrice: PromiseOrValue<BigNumberish>,
    _numBlocksAuctionOpen: PromiseOrValue<BigNumberish>,
    _offerPriceDecrement: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BasicDutchAuction> {
    return super.deploy(
      _reservePrice,
      _numBlocksAuctionOpen,
      _offerPriceDecrement,
      overrides || {}
    ) as Promise<BasicDutchAuction>;
  }
  override getDeployTransaction(
    _reservePrice: PromiseOrValue<BigNumberish>,
    _numBlocksAuctionOpen: PromiseOrValue<BigNumberish>,
    _offerPriceDecrement: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _reservePrice,
      _numBlocksAuctionOpen,
      _offerPriceDecrement,
      overrides || {}
    );
  }
  override attach(address: string): BasicDutchAuction {
    return super.attach(address) as BasicDutchAuction;
  }
  override connect(signer: Signer): BasicDutchAuction__factory {
    return super.connect(signer) as BasicDutchAuction__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BasicDutchAuctionInterface {
    return new utils.Interface(_abi) as BasicDutchAuctionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BasicDutchAuction {
    return new Contract(address, _abi, signerOrProvider) as BasicDutchAuction;
  }
}