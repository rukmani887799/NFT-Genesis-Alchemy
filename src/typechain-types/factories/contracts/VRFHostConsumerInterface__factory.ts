/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  VRFHostConsumerInterface,
  VRFHostConsumerInterfaceInterface,
} from "../../contracts/VRFHostConsumerInterface";

const _abi = [
  {
    inputs: [],
    name: "getCurrentRoundId",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "id",
        type: "uint32",
      },
    ],
    name: "getRound",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "proposer",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "randomNumber",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "randomNumberHash",
            type: "bytes32",
          },
          {
            internalType: "enum VRFHostConsumerInterface.RoundState",
            name: "state",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "blockHeight",
            type: "uint256",
          },
        ],
        internalType: "struct VRFHostConsumerInterface.Round",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class VRFHostConsumerInterface__factory {
  static readonly abi = _abi;
  static createInterface(): VRFHostConsumerInterfaceInterface {
    return new Interface(_abi) as VRFHostConsumerInterfaceInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): VRFHostConsumerInterface {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as VRFHostConsumerInterface;
  }
}
