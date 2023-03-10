/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface BasicDutchAuctionInterface extends utils.Interface {
  functions: {
    "auctionEnd()": FunctionFragment;
    "bid()": FunctionFragment;
    "finalize(uint256)": FunctionFragment;
    "initialPrice()": FunctionFragment;
    "numBlocksAuctionOpen()": FunctionFragment;
    "offerPriceDecrement()": FunctionFragment;
    "receiver()": FunctionFragment;
    "refund(uint256)": FunctionFragment;
    "reservePrice()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "auctionEnd"
      | "bid"
      | "finalize"
      | "initialPrice"
      | "numBlocksAuctionOpen"
      | "offerPriceDecrement"
      | "receiver"
      | "refund"
      | "reservePrice"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "auctionEnd",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "bid", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "finalize",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "initialPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "numBlocksAuctionOpen",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "offerPriceDecrement",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "receiver", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "refund",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "reservePrice",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "auctionEnd", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bid", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "finalize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initialPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "numBlocksAuctionOpen",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "offerPriceDecrement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "receiver", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "refund", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "reservePrice",
    data: BytesLike
  ): Result;

  events: {};
}

export interface BasicDutchAuction extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BasicDutchAuctionInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    auctionEnd(overrides?: CallOverrides): Promise<[boolean]>;

    bid(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    finalize(
      finalBid: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initialPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    numBlocksAuctionOpen(overrides?: CallOverrides): Promise<[BigNumber]>;

    offerPriceDecrement(overrides?: CallOverrides): Promise<[BigNumber]>;

    receiver(overrides?: CallOverrides): Promise<[string]>;

    refund(
      refundAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    reservePrice(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  auctionEnd(overrides?: CallOverrides): Promise<boolean>;

  bid(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  finalize(
    finalBid: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initialPrice(overrides?: CallOverrides): Promise<BigNumber>;

  numBlocksAuctionOpen(overrides?: CallOverrides): Promise<BigNumber>;

  offerPriceDecrement(overrides?: CallOverrides): Promise<BigNumber>;

  receiver(overrides?: CallOverrides): Promise<string>;

  refund(
    refundAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  reservePrice(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    auctionEnd(overrides?: CallOverrides): Promise<boolean>;

    bid(overrides?: CallOverrides): Promise<string>;

    finalize(
      finalBid: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    initialPrice(overrides?: CallOverrides): Promise<BigNumber>;

    numBlocksAuctionOpen(overrides?: CallOverrides): Promise<BigNumber>;

    offerPriceDecrement(overrides?: CallOverrides): Promise<BigNumber>;

    receiver(overrides?: CallOverrides): Promise<string>;

    refund(
      refundAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    reservePrice(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    auctionEnd(overrides?: CallOverrides): Promise<BigNumber>;

    bid(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    finalize(
      finalBid: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    initialPrice(overrides?: CallOverrides): Promise<BigNumber>;

    numBlocksAuctionOpen(overrides?: CallOverrides): Promise<BigNumber>;

    offerPriceDecrement(overrides?: CallOverrides): Promise<BigNumber>;

    receiver(overrides?: CallOverrides): Promise<BigNumber>;

    refund(
      refundAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    reservePrice(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    auctionEnd(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bid(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    finalize(
      finalBid: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initialPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    numBlocksAuctionOpen(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    offerPriceDecrement(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    receiver(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    refund(
      refundAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    reservePrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
