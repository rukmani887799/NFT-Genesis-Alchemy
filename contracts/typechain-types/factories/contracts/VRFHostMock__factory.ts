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
import type { NonPayableOverrides } from "../../common";
import type {
  VRFHostMock,
  VRFHostMockInterface,
} from "../../contracts/VRFHostMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "addRound",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
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

const _bytecode =
  "0x60806040526001805463ffffffff1916905534801561001d57600080fd5b506103d68061002d6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80635727e25d146100465780636ffd39e814610063578063c9e9fe9c14610083575b600080fd5b60015460405163ffffffff90911681526020015b60405180910390f35b6100766100713660046102a3565b610098565b60405161005a91906102e6565b610096610091366004610356565b61015e565b005b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915263ffffffff821660009081526020818152604091829020825160a081018452815473ffffffffffffffffffffffffffffffffffffffff16815260018201549281019290925260028082015493830193909352600381015491929091606084019160ff90911690811115610138576101386102d0565b6002811115610149576101496102d0565b81526020016004820154815250509050919050565b6040518060a00160405280600073ffffffffffffffffffffffffffffffffffffffff1681526020018281526020018260405160200161019f91815260200190565b60408051601f19818403018152919052805160209182012082520160028152436020918201526001805463ffffffff166000908152808352604090819020845181547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff909116178155928401518383015583015160028084019190915560608401516003840180549193909260ff19909216918490811115610259576102596102d0565b0217905550608091909101516004909101556001805463ffffffff169060006102818361036f565b91906101000a81548163ffffffff021916908363ffffffff1602179055505050565b6000602082840312156102b557600080fd5b813563ffffffff811681146102c957600080fd5b9392505050565b634e487b7160e01b600052602160045260246000fd5b600060a08201905073ffffffffffffffffffffffffffffffffffffffff8351168252602083015160208301526040830151604083015260608301516003811061033f57634e487b7160e01b600052602160045260246000fd5b806060840152506080830151608083015292915050565b60006020828403121561036857600080fd5b5035919050565b600063ffffffff80831681810361039657634e487b7160e01b600052601160045260246000fd5b600101939250505056fea264697066735822122087f2e688b841878462dcda09fcae11a0f5fbf05c498c3d1aff56582a2c588a9d64736f6c63430008180033";

type VRFHostMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VRFHostMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VRFHostMock__factory extends ContractFactory {
  constructor(...args: VRFHostMockConstructorParams) {
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
      VRFHostMock & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): VRFHostMock__factory {
    return super.connect(runner) as VRFHostMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VRFHostMockInterface {
    return new Interface(_abi) as VRFHostMockInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): VRFHostMock {
    return new Contract(address, _abi, runner) as unknown as VRFHostMock;
  }
}
