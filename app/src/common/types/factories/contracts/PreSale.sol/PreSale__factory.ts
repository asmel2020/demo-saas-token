/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  PreSale,
  PreSaleInterface,
} from "../../../contracts/PreSale.sol/PreSale";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AccessControlBadConfirmation",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "neededRole",
        type: "bytes32",
      },
    ],
    name: "AccessControlUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "AddressEmptyCode",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "ERC1967InvalidImplementation",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC1967NonPayable",
    type: "error",
  },
  {
    inputs: [],
    name: "EnforcedPause",
    type: "error",
  },
  {
    inputs: [],
    name: "ExpectedPause",
    type: "error",
  },
  {
    inputs: [],
    name: "FailedCall",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error",
  },
  {
    inputs: [],
    name: "UUPSUnauthorizedCallContext",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "slot",
        type: "bytes32",
      },
    ],
    name: "UUPSUnsupportedProxiableUUID",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "CREATE_PRE_SALE_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PAUSER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "UPGRADER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "UPGRADE_INTERFACE_VERSION",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "priceToken",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountSellToken",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
    ],
    name: "createPreSale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
    ],
    name: "getPreSaleInfo",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "startTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "priceToken",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountSellToken",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountSoldToken",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
        ],
        internalType: "struct PreSale.PreSaleInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
    inputs: [
      {
        internalType: "address",
        name: "_createPreSale",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "preSaleInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "priceToken",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountSellToken",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountSoldToken",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "callerConfirmation",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040523073ffffffffffffffffffffffffffffffffffffffff1660809073ffffffffffffffffffffffffffffffffffffffff1681525034801561004357600080fd5b5061005261005760201b60201c565b6101c1565b600061006761015b60201b60201c565b90508060000160089054906101000a900460ff16156100b2576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b67ffffffffffffffff80168160000160009054906101000a900467ffffffffffffffff1667ffffffffffffffff16146101585767ffffffffffffffff8160000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055507fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d267ffffffffffffffff60405161014f91906101a6565b60405180910390a15b50565b60007ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00905090565b600067ffffffffffffffff82169050919050565b6101a081610183565b82525050565b60006020820190506101bb6000830184610197565b92915050565b6080516120406101ea60003960008181610fca0152818161101f01526111fd01526120406000f3fe60806040526004361061011f5760003560e01c80638456cb59116100a0578063c4d66de811610064578063c4d66de8146103cd578063d547741f146103f6578063e63ab1e91461041f578063ef326b6b1461044a578063f72c0d8b146104735761011f565b80638456cb59146102e157806391d14854146102f85780639bf2f99f14610335578063a217fddf14610377578063ad3cb1cc146103a25761011f565b80633f4ba83a116100e75780633f4ba83a1461022d5780634f1ef2861461024457806352d1902d146102605780635c975abb1461028b5780637e1bf3a9146102b65761011f565b806301ffc9a71461012457806306a229af14610161578063248a9ca31461019e5780632f2ff15d146101db57806336568abe14610204575b600080fd5b34801561013057600080fd5b5061014b600480360381019061014691906118be565b61049e565b6040516101589190611906565b60405180910390f35b34801561016d57600080fd5b506101886004803603810190610183919061197f565b610518565b6040516101959190611a4f565b60405180910390f35b3480156101aa57600080fd5b506101c560048036038101906101c09190611aa0565b6105f8565b6040516101d29190611adc565b60405180910390f35b3480156101e757600080fd5b5061020260048036038101906101fd9190611af7565b610626565b005b34801561021057600080fd5b5061022b60048036038101906102269190611af7565b610648565b005b34801561023957600080fd5b506102426106c3565b005b61025e60048036038101906102599190611c7d565b6106f8565b005b34801561026c57600080fd5b50610275610717565b6040516102829190611adc565b60405180910390f35b34801561029757600080fd5b506102a061074a565b6040516102ad9190611906565b60405180910390f35b3480156102c257600080fd5b506102cb61076f565b6040516102d89190611adc565b60405180910390f35b3480156102ed57600080fd5b506102f6610793565b005b34801561030457600080fd5b5061031f600480360381019061031a9190611af7565b6107c8565b60405161032c9190611906565b60405180910390f35b34801561034157600080fd5b5061035c6004803603810190610357919061197f565b610841565b60405161036e96959493929190611cf7565b60405180910390f35b34801561038357600080fd5b5061038c61089d565b6040516103999190611adc565b60405180910390f35b3480156103ae57600080fd5b506103b76108a4565b6040516103c49190611dd7565b60405180910390f35b3480156103d957600080fd5b506103f460048036038101906103ef919061197f565b6108dd565b005b34801561040257600080fd5b5061041d60048036038101906104189190611af7565b610b0a565b005b34801561042b57600080fd5b50610434610b2c565b6040516104419190611adc565b60405180910390f35b34801561045657600080fd5b50610471600480360381019061046c9190611e25565b610b50565b005b34801561047f57600080fd5b50610488610c81565b6040516104959190611adc565b60405180910390f35b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610511575061051082610ca5565b5b9050919050565b610520611806565b6000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060c001604052908160008201548152602001600182015481526020016002820154815260200160038201548152602001600482015481526020016005820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250509050919050565b600080610603610d0f565b905080600001600084815260200190815260200160002060010154915050919050565b61062f826105f8565b61063881610d37565b6106428383610d4b565b50505050565b610650610e4c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146106b4576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106be8282610e54565b505050565b7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a6106ed81610d37565b6106f5610f56565b50565b610700610fc8565b610709826110ae565b61071382826110dc565b5050565b60006107216111fb565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b905090565b600080610755611282565b90508060000160009054906101000a900460ff1691505090565b7fa2e6d2c27b27fdddca62ee602af9df43375beccf3b750332eb12bc948409794b81565b7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a6107bd81610d37565b6107c56112aa565b50565b6000806107d3610d0f565b905080600001600085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1691505092915050565b60006020528060005260406000206000915090508060000154908060010154908060020154908060030154908060040154908060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905086565b6000801b81565b6040518060400160405280600581526020017f352e302e3000000000000000000000000000000000000000000000000000000081525081565b60006108e761131c565b905060008160000160089054906101000a900460ff1615905060008260000160009054906101000a900467ffffffffffffffff1690506000808267ffffffffffffffff161480156109355750825b9050600060018367ffffffffffffffff1614801561096a575060003073ffffffffffffffffffffffffffffffffffffffff163b145b905081158015610978575080155b156109af576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018560000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555083156109ff5760018560000160086101000a81548160ff0219169083151502179055505b610a07611344565b610a0f611356565b610a17611360565b610a246000801b33610d4b565b50610a4f7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33610d4b565b50610a7a7f189ab7a9244df0848122154315af71fe140f3db0fe014031783b0946b8c9d2e333610d4b565b50610aa57fa2e6d2c27b27fdddca62ee602af9df43375beccf3b750332eb12bc948409794b87610d4b565b508315610b025760008560000160086101000a81548160ff0219169083151502179055507fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d26001604051610af99190611f0b565b60405180910390a15b505050505050565b610b13826105f8565b610b1c81610d37565b610b268383610e54565b50505050565b7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b7fa2e6d2c27b27fdddca62ee602af9df43375beccf3b750332eb12bc948409794b610b7a81610d37565b6040518060c00160405280888152602001878152602001868152602001858152602001600081526020018473ffffffffffffffffffffffffffffffffffffffff168152506000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082015181600001556020820151816001015560408201518160020155606082015181600301556080820151816004015560a08201518160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555090505050505050505050565b7f189ab7a9244df0848122154315af71fe140f3db0fe014031783b0946b8c9d2e381565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60007f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800905090565b610d4881610d43610e4c565b61136a565b50565b600080610d56610d0f565b9050610d6284846107c8565b610e4057600181600001600086815260200190815260200160002060000160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610ddc610e4c565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16857f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a46001915050610e46565b60009150505b92915050565b600033905090565b600080610e5f610d0f565b9050610e6b84846107c8565b15610f4a57600081600001600086815260200190815260200160002060000160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610ee6610e4c565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16857ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a46001915050610f50565b60009150505b92915050565b610f5e6113bb565b6000610f68611282565b905060008160000160006101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa610fb0610e4c565b604051610fbd9190611f26565b60405180910390a150565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff16148061107557507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1661105c6113fb565b73ffffffffffffffffffffffffffffffffffffffff1614155b156110ac576040517fe07c8dba00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b7f189ab7a9244df0848122154315af71fe140f3db0fe014031783b0946b8c9d2e36110d881610d37565b5050565b8173ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa92505050801561114457506040513d601f19601f820116820180604052508101906111419190611f56565b60015b61118557816040517f4c9c8ce300000000000000000000000000000000000000000000000000000000815260040161117c9190611f26565b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b81146111ec57806040517faa1d49a40000000000000000000000000000000000000000000000000000000081526004016111e39190611adc565b60405180910390fd5b6111f68383611452565b505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1614611280576040517fe07c8dba00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b60007fcd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f03300905090565b6112b26114c5565b60006112bc611282565b905060018160000160006101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258611304610e4c565b6040516113119190611f26565b60405180910390a150565b60007ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00905090565b61134c611506565b611354611546565b565b61135e611506565b565b611368611506565b565b61137482826107c8565b6113b75780826040517fe2517d3f0000000000000000000000000000000000000000000000000000000081526004016113ae929190611f83565b60405180910390fd5b5050565b6113c361074a565b6113f9576040517f8dfc202b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b60006114297f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61157a565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61145b82611584565b8173ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a26000815111156114b8576114b28282611651565b506114c1565b6114c06116d5565b5b5050565b6114cd61074a565b15611504576040517fd93c066500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b61150e611712565b611544576040517fd7e6bcf800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b61154e611506565b6000611558611282565b905060008160000160006101000a81548160ff02191690831515021790555050565b6000819050919050565b60008173ffffffffffffffffffffffffffffffffffffffff163b036115e057806040517f4c9c8ce30000000000000000000000000000000000000000000000000000000081526004016115d79190611f26565b60405180910390fd5b8061160d7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61157a565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60606000808473ffffffffffffffffffffffffffffffffffffffff168460405161167b9190611ff3565b600060405180830381855af49150503d80600081146116b6576040519150601f19603f3d011682016040523d82523d6000602084013e6116bb565b606091505b50915091506116cb858383611732565b9250505092915050565b6000341115611710576040517fb398979f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b600061171c61131c565b60000160089054906101000a900460ff16905090565b60608261174757611742826117c1565b6117b9565b6000825114801561176f575060008473ffffffffffffffffffffffffffffffffffffffff163b145b156117b157836040517f9996b3150000000000000000000000000000000000000000000000000000000081526004016117a89190611f26565b60405180910390fd5b8190506117ba565b5b9392505050565b6000815111156117d45780518082602001fd5b6040517fd6bda27500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61189b81611866565b81146118a657600080fd5b50565b6000813590506118b881611892565b92915050565b6000602082840312156118d4576118d361185c565b5b60006118e2848285016118a9565b91505092915050565b60008115159050919050565b611900816118eb565b82525050565b600060208201905061191b60008301846118f7565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061194c82611921565b9050919050565b61195c81611941565b811461196757600080fd5b50565b60008135905061197981611953565b92915050565b6000602082840312156119955761199461185c565b5b60006119a38482850161196a565b91505092915050565b6000819050919050565b6119bf816119ac565b82525050565b6119ce81611941565b82525050565b60c0820160008201516119ea60008501826119b6565b5060208201516119fd60208501826119b6565b506040820151611a1060408501826119b6565b506060820151611a2360608501826119b6565b506080820151611a3660808501826119b6565b5060a0820151611a4960a08501826119c5565b50505050565b600060c082019050611a6460008301846119d4565b92915050565b6000819050919050565b611a7d81611a6a565b8114611a8857600080fd5b50565b600081359050611a9a81611a74565b92915050565b600060208284031215611ab657611ab561185c565b5b6000611ac484828501611a8b565b91505092915050565b611ad681611a6a565b82525050565b6000602082019050611af16000830184611acd565b92915050565b60008060408385031215611b0e57611b0d61185c565b5b6000611b1c85828601611a8b565b9250506020611b2d8582860161196a565b9150509250929050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611b8a82611b41565b810181811067ffffffffffffffff82111715611ba957611ba8611b52565b5b80604052505050565b6000611bbc611852565b9050611bc88282611b81565b919050565b600067ffffffffffffffff821115611be857611be7611b52565b5b611bf182611b41565b9050602081019050919050565b82818337600083830152505050565b6000611c20611c1b84611bcd565b611bb2565b905082815260208101848484011115611c3c57611c3b611b3c565b5b611c47848285611bfe565b509392505050565b600082601f830112611c6457611c63611b37565b5b8135611c74848260208601611c0d565b91505092915050565b60008060408385031215611c9457611c9361185c565b5b6000611ca28582860161196a565b925050602083013567ffffffffffffffff811115611cc357611cc2611861565b5b611ccf85828601611c4f565b9150509250929050565b611ce2816119ac565b82525050565b611cf181611941565b82525050565b600060c082019050611d0c6000830189611cd9565b611d196020830188611cd9565b611d266040830187611cd9565b611d336060830186611cd9565b611d406080830185611cd9565b611d4d60a0830184611ce8565b979650505050505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611d92578082015181840152602081019050611d77565b60008484015250505050565b6000611da982611d58565b611db38185611d63565b9350611dc3818560208601611d74565b611dcc81611b41565b840191505092915050565b60006020820190508181036000830152611df18184611d9e565b905092915050565b611e02816119ac565b8114611e0d57600080fd5b50565b600081359050611e1f81611df9565b92915050565b60008060008060008060c08789031215611e4257611e4161185c565b5b6000611e5089828a01611e10565b9650506020611e6189828a01611e10565b9550506040611e7289828a01611e10565b9450506060611e8389828a01611e10565b9350506080611e9489828a0161196a565b92505060a0611ea589828a0161196a565b9150509295509295509295565b6000819050919050565b600067ffffffffffffffff82169050919050565b6000819050919050565b6000611ef5611ef0611eeb84611eb2565b611ed0565b611ebc565b9050919050565b611f0581611eda565b82525050565b6000602082019050611f206000830184611efc565b92915050565b6000602082019050611f3b6000830184611ce8565b92915050565b600081519050611f5081611a74565b92915050565b600060208284031215611f6c57611f6b61185c565b5b6000611f7a84828501611f41565b91505092915050565b6000604082019050611f986000830185611ce8565b611fa56020830184611acd565b9392505050565b600081519050919050565b600081905092915050565b6000611fcd82611fac565b611fd78185611fb7565b9350611fe7818560208601611d74565b80840191505092915050565b6000611fff8284611fc2565b91508190509291505056fea2646970667358221220e82ebf8e0504231d6c4d2f69530d98e0588b96d9ae42df1f220e5b9c93c101fc64736f6c634300081b0033";

type PreSaleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PreSaleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PreSale__factory extends ContractFactory {
  constructor(...args: PreSaleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      PreSale & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): PreSale__factory {
    return super.connect(runner) as PreSale__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PreSaleInterface {
    return new Interface(_abi) as PreSaleInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): PreSale {
    return new Contract(address, _abi, runner) as unknown as PreSale;
  }
}
