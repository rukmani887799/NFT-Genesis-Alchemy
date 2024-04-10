/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  AIOracleCallbackReceiver,
  AIOracleCallbackReceiverInterface,
} from "../../contracts/AIOracleCallbackReceiver";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IAIOracle",
        name: "expected",
        type: "address",
      },
      {
        internalType: "contract IAIOracle",
        name: "found",
        type: "address",
      },
    ],
    name: "UnauthorizedCallbackSource",
    type: "error",
  },
  {
    inputs: [],
    name: "aiOracle",
    outputs: [
      {
        internalType: "contract IAIOracle",
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
        name: "requestId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "output",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "callbackData",
        type: "bytes",
      },
    ],
    name: "aiOracleCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
    ],
    name: "isFinalized",
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
] as const;

export class AIOracleCallbackReceiver__factory {
  static readonly abi = _abi;
  static createInterface(): AIOracleCallbackReceiverInterface {
    return new Interface(_abi) as AIOracleCallbackReceiverInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): AIOracleCallbackReceiver {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as AIOracleCallbackReceiver;
  }
}