/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export declare namespace IPreSale {
  export type BuyTokenInfoStruct = {
    ownerBuy: AddressLike;
    amountToken: BigNumberish;
    price: BigNumberish;
    buyDate: BigNumberish;
  };

  export type BuyTokenInfoStructOutput = [
    ownerBuy: string,
    amountToken: bigint,
    price: bigint,
    buyDate: bigint
  ] & { ownerBuy: string; amountToken: bigint; price: bigint; buyDate: bigint };

  export type BuyTokenUserStruct = {
    amountToken: BigNumberish;
    price: BigNumberish;
    buyDate: BigNumberish;
    isRewards: boolean;
  };

  export type BuyTokenUserStructOutput = [
    amountToken: bigint,
    price: bigint,
    buyDate: bigint,
    isRewards: boolean
  ] & {
    amountToken: bigint;
    price: bigint;
    buyDate: bigint;
    isRewards: boolean;
  };

  export type PreSaleInfoStruct = {
    startTime: BigNumberish;
    endTime: BigNumberish;
    priceToken: BigNumberish;
    amountSellToken: BigNumberish;
    amountSoldToken: BigNumberish;
    tokenWin: BigNumberish;
    owner: AddressLike;
    isPause: boolean;
    isRewards: boolean;
  };

  export type PreSaleInfoStructOutput = [
    startTime: bigint,
    endTime: bigint,
    priceToken: bigint,
    amountSellToken: bigint,
    amountSoldToken: bigint,
    tokenWin: bigint,
    owner: string,
    isPause: boolean,
    isRewards: boolean
  ] & {
    startTime: bigint;
    endTime: bigint;
    priceToken: bigint;
    amountSellToken: bigint;
    amountSoldToken: bigint;
    tokenWin: bigint;
    owner: string;
    isPause: boolean;
    isRewards: boolean;
  };
}

export interface PreSaleInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "CREATE_PRE_SALE_ROLE"
      | "DEFAULT_ADMIN_ROLE"
      | "PAUSER_ROLE"
      | "UPGRADER_ROLE"
      | "UPGRADE_INTERFACE_VERSION"
      | "buyToken"
      | "buyTokenInfo"
      | "buyTokenUser"
      | "createPreSale"
      | "getBuyTokenInfo"
      | "getBuyTokenUser"
      | "getPreSaleInfo"
      | "getRoleAdmin"
      | "grantRole"
      | "hasRole"
      | "initialize"
      | "pause"
      | "paused"
      | "preSaleInfo"
      | "proxiableUUID"
      | "renounceRole"
      | "revokeRole"
      | "rewardsToken"
      | "rewardsTokenUser"
      | "supportsInterface"
      | "token"
      | "unpause"
      | "upgradeToAndCall"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "BuyTokenEvent"
      | "Initialized"
      | "Paused"
      | "PreSaleCreated"
      | "RoleAdminChanged"
      | "RoleGranted"
      | "RoleRevoked"
      | "Unpaused"
      | "Upgraded"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "CREATE_PRE_SALE_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PAUSER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "UPGRADER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "UPGRADE_INTERFACE_VERSION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "buyToken",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "buyTokenInfo",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "buyTokenUser",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createPreSale",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      AddressLike,
      AddressLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getBuyTokenInfo",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getBuyTokenUser",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getPreSaleInfo",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "preSaleInfo",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardsToken",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardsTokenUser",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [AddressLike, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "CREATE_PRE_SALE_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PAUSER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "UPGRADER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "UPGRADE_INTERFACE_VERSION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buyToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "buyTokenInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "buyTokenUser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createPreSale",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBuyTokenInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBuyTokenUser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPreSaleInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "preSaleInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rewardsToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardsTokenUser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;
}

export namespace BuyTokenEventEvent {
  export type InputTuple = [
    ownerBuy: AddressLike,
    contractAddress: AddressLike,
    amountToken: BigNumberish,
    buyDate: BigNumberish,
    price: BigNumberish
  ];
  export type OutputTuple = [
    ownerBuy: string,
    contractAddress: string,
    amountToken: bigint,
    buyDate: bigint,
    price: bigint
  ];
  export interface OutputObject {
    ownerBuy: string;
    contractAddress: string;
    amountToken: bigint;
    buyDate: bigint;
    price: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PausedEvent {
  export type InputTuple = [account: AddressLike];
  export type OutputTuple = [account: string];
  export interface OutputObject {
    account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PreSaleCreatedEvent {
  export type InputTuple = [
    contractAddress: AddressLike,
    owner: AddressLike,
    startTime: BigNumberish,
    endTime: BigNumberish,
    priceToken: BigNumberish,
    amountSellToken: BigNumberish
  ];
  export type OutputTuple = [
    contractAddress: string,
    owner: string,
    startTime: bigint,
    endTime: bigint,
    priceToken: bigint,
    amountSellToken: bigint
  ];
  export interface OutputObject {
    contractAddress: string;
    owner: string;
    startTime: bigint;
    endTime: bigint;
    priceToken: bigint;
    amountSellToken: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleAdminChangedEvent {
  export type InputTuple = [
    role: BytesLike,
    previousAdminRole: BytesLike,
    newAdminRole: BytesLike
  ];
  export type OutputTuple = [
    role: string,
    previousAdminRole: string,
    newAdminRole: string
  ];
  export interface OutputObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleGrantedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleRevokedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UnpausedEvent {
  export type InputTuple = [account: AddressLike];
  export type OutputTuple = [account: string];
  export interface OutputObject {
    account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpgradedEvent {
  export type InputTuple = [implementation: AddressLike];
  export type OutputTuple = [implementation: string];
  export interface OutputObject {
    implementation: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface PreSale extends BaseContract {
  connect(runner?: ContractRunner | null): PreSale;
  waitForDeployment(): Promise<this>;

  interface: PreSaleInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  CREATE_PRE_SALE_ROLE: TypedContractMethod<[], [string], "view">;

  DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;

  PAUSER_ROLE: TypedContractMethod<[], [string], "view">;

  UPGRADER_ROLE: TypedContractMethod<[], [string], "view">;

  UPGRADE_INTERFACE_VERSION: TypedContractMethod<[], [string], "view">;

  buyToken: TypedContractMethod<
    [_contractAddress: AddressLike, _amountSoldToken: BigNumberish],
    [void],
    "nonpayable"
  >;

  buyTokenInfo: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [
      [string, bigint, bigint, bigint] & {
        ownerBuy: string;
        amountToken: bigint;
        price: bigint;
        buyDate: bigint;
      }
    ],
    "view"
  >;

  buyTokenUser: TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike, arg2: BigNumberish],
    [
      [bigint, bigint, bigint, boolean] & {
        amountToken: bigint;
        price: bigint;
        buyDate: bigint;
        isRewards: boolean;
      }
    ],
    "view"
  >;

  createPreSale: TypedContractMethod<
    [
      startTime: BigNumberish,
      endTime: BigNumberish,
      priceToken: BigNumberish,
      amountSellToken: BigNumberish,
      owner: AddressLike,
      contractAddress: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  getBuyTokenInfo: TypedContractMethod<
    [_contractToken: AddressLike],
    [IPreSale.BuyTokenInfoStructOutput[]],
    "view"
  >;

  getBuyTokenUser: TypedContractMethod<
    [_contractToken: AddressLike],
    [IPreSale.BuyTokenUserStructOutput[]],
    "view"
  >;

  getPreSaleInfo: TypedContractMethod<
    [contractAddress: AddressLike],
    [IPreSale.PreSaleInfoStructOutput],
    "view"
  >;

  getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;

  grantRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  hasRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;

  initialize: TypedContractMethod<[_token: AddressLike], [void], "nonpayable">;

  pause: TypedContractMethod<[], [void], "nonpayable">;

  paused: TypedContractMethod<[], [boolean], "view">;

  preSaleInfo: TypedContractMethod<
    [arg0: AddressLike],
    [
      [
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        string,
        boolean,
        boolean
      ] & {
        startTime: bigint;
        endTime: bigint;
        priceToken: bigint;
        amountSellToken: bigint;
        amountSoldToken: bigint;
        tokenWin: bigint;
        owner: string;
        isPause: boolean;
        isRewards: boolean;
      }
    ],
    "view"
  >;

  proxiableUUID: TypedContractMethod<[], [string], "view">;

  renounceRole: TypedContractMethod<
    [role: BytesLike, callerConfirmation: AddressLike],
    [void],
    "nonpayable"
  >;

  revokeRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  rewardsToken: TypedContractMethod<
    [_contractToken: AddressLike],
    [void],
    "nonpayable"
  >;

  rewardsTokenUser: TypedContractMethod<
    [_contractToken: AddressLike],
    [void],
    "nonpayable"
  >;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  token: TypedContractMethod<[], [string], "view">;

  unpause: TypedContractMethod<[], [void], "nonpayable">;

  upgradeToAndCall: TypedContractMethod<
    [newImplementation: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "CREATE_PRE_SALE_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "DEFAULT_ADMIN_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "PAUSER_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "UPGRADER_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "UPGRADE_INTERFACE_VERSION"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "buyToken"
  ): TypedContractMethod<
    [_contractAddress: AddressLike, _amountSoldToken: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "buyTokenInfo"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [
      [string, bigint, bigint, bigint] & {
        ownerBuy: string;
        amountToken: bigint;
        price: bigint;
        buyDate: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "buyTokenUser"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike, arg2: BigNumberish],
    [
      [bigint, bigint, bigint, boolean] & {
        amountToken: bigint;
        price: bigint;
        buyDate: bigint;
        isRewards: boolean;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "createPreSale"
  ): TypedContractMethod<
    [
      startTime: BigNumberish,
      endTime: BigNumberish,
      priceToken: BigNumberish,
      amountSellToken: BigNumberish,
      owner: AddressLike,
      contractAddress: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getBuyTokenInfo"
  ): TypedContractMethod<
    [_contractToken: AddressLike],
    [IPreSale.BuyTokenInfoStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getBuyTokenUser"
  ): TypedContractMethod<
    [_contractToken: AddressLike],
    [IPreSale.BuyTokenUserStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getPreSaleInfo"
  ): TypedContractMethod<
    [contractAddress: AddressLike],
    [IPreSale.PreSaleInfoStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getRoleAdmin"
  ): TypedContractMethod<[role: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "grantRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "hasRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<[_token: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "pause"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "paused"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "preSaleInfo"
  ): TypedContractMethod<
    [arg0: AddressLike],
    [
      [
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        string,
        boolean,
        boolean
      ] & {
        startTime: bigint;
        endTime: bigint;
        priceToken: bigint;
        amountSellToken: bigint;
        amountSoldToken: bigint;
        tokenWin: bigint;
        owner: string;
        isPause: boolean;
        isRewards: boolean;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "proxiableUUID"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceRole"
  ): TypedContractMethod<
    [role: BytesLike, callerConfirmation: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "revokeRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "rewardsToken"
  ): TypedContractMethod<[_contractToken: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "rewardsTokenUser"
  ): TypedContractMethod<[_contractToken: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "token"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "unpause"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "upgradeToAndCall"
  ): TypedContractMethod<
    [newImplementation: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;

  getEvent(
    key: "BuyTokenEvent"
  ): TypedContractEvent<
    BuyTokenEventEvent.InputTuple,
    BuyTokenEventEvent.OutputTuple,
    BuyTokenEventEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "Paused"
  ): TypedContractEvent<
    PausedEvent.InputTuple,
    PausedEvent.OutputTuple,
    PausedEvent.OutputObject
  >;
  getEvent(
    key: "PreSaleCreated"
  ): TypedContractEvent<
    PreSaleCreatedEvent.InputTuple,
    PreSaleCreatedEvent.OutputTuple,
    PreSaleCreatedEvent.OutputObject
  >;
  getEvent(
    key: "RoleAdminChanged"
  ): TypedContractEvent<
    RoleAdminChangedEvent.InputTuple,
    RoleAdminChangedEvent.OutputTuple,
    RoleAdminChangedEvent.OutputObject
  >;
  getEvent(
    key: "RoleGranted"
  ): TypedContractEvent<
    RoleGrantedEvent.InputTuple,
    RoleGrantedEvent.OutputTuple,
    RoleGrantedEvent.OutputObject
  >;
  getEvent(
    key: "RoleRevoked"
  ): TypedContractEvent<
    RoleRevokedEvent.InputTuple,
    RoleRevokedEvent.OutputTuple,
    RoleRevokedEvent.OutputObject
  >;
  getEvent(
    key: "Unpaused"
  ): TypedContractEvent<
    UnpausedEvent.InputTuple,
    UnpausedEvent.OutputTuple,
    UnpausedEvent.OutputObject
  >;
  getEvent(
    key: "Upgraded"
  ): TypedContractEvent<
    UpgradedEvent.InputTuple,
    UpgradedEvent.OutputTuple,
    UpgradedEvent.OutputObject
  >;

  filters: {
    "BuyTokenEvent(address,address,uint256,uint256,uint256)": TypedContractEvent<
      BuyTokenEventEvent.InputTuple,
      BuyTokenEventEvent.OutputTuple,
      BuyTokenEventEvent.OutputObject
    >;
    BuyTokenEvent: TypedContractEvent<
      BuyTokenEventEvent.InputTuple,
      BuyTokenEventEvent.OutputTuple,
      BuyTokenEventEvent.OutputObject
    >;

    "Initialized(uint64)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "Paused(address)": TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;
    Paused: TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;

    "PreSaleCreated(address,address,uint256,uint256,uint256,uint256)": TypedContractEvent<
      PreSaleCreatedEvent.InputTuple,
      PreSaleCreatedEvent.OutputTuple,
      PreSaleCreatedEvent.OutputObject
    >;
    PreSaleCreated: TypedContractEvent<
      PreSaleCreatedEvent.InputTuple,
      PreSaleCreatedEvent.OutputTuple,
      PreSaleCreatedEvent.OutputObject
    >;

    "RoleAdminChanged(bytes32,bytes32,bytes32)": TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;
    RoleAdminChanged: TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;

    "RoleGranted(bytes32,address,address)": TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;
    RoleGranted: TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;

    "RoleRevoked(bytes32,address,address)": TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;
    RoleRevoked: TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;

    "Unpaused(address)": TypedContractEvent<
      UnpausedEvent.InputTuple,
      UnpausedEvent.OutputTuple,
      UnpausedEvent.OutputObject
    >;
    Unpaused: TypedContractEvent<
      UnpausedEvent.InputTuple,
      UnpausedEvent.OutputTuple,
      UnpausedEvent.OutputObject
    >;

    "Upgraded(address)": TypedContractEvent<
      UpgradedEvent.InputTuple,
      UpgradedEvent.OutputTuple,
      UpgradedEvent.OutputObject
    >;
    Upgraded: TypedContractEvent<
      UpgradedEvent.InputTuple,
      UpgradedEvent.OutputTuple,
      UpgradedEvent.OutputObject
    >;
  };
}