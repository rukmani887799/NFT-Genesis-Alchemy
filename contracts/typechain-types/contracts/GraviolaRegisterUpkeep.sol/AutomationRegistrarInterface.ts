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
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export type RegistrationParamsStruct = {
  name: string;
  encryptedEmail: BytesLike;
  upkeepContract: AddressLike;
  gasLimit: BigNumberish;
  adminAddress: AddressLike;
  triggerType: BigNumberish;
  checkData: BytesLike;
  triggerConfig: BytesLike;
  offchainConfig: BytesLike;
  amount: BigNumberish;
};

export type RegistrationParamsStructOutput = [
  name: string,
  encryptedEmail: string,
  upkeepContract: string,
  gasLimit: bigint,
  adminAddress: string,
  triggerType: bigint,
  checkData: string,
  triggerConfig: string,
  offchainConfig: string,
  amount: bigint
] & {
  name: string;
  encryptedEmail: string;
  upkeepContract: string;
  gasLimit: bigint;
  adminAddress: string;
  triggerType: bigint;
  checkData: string;
  triggerConfig: string;
  offchainConfig: string;
  amount: bigint;
};

export interface AutomationRegistrarInterfaceInterface extends Interface {
  getFunction(nameOrSignature: "registerUpkeep"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "registerUpkeep",
    values: [RegistrationParamsStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "registerUpkeep",
    data: BytesLike
  ): Result;
}

export interface AutomationRegistrarInterface extends BaseContract {
  connect(runner?: ContractRunner | null): AutomationRegistrarInterface;
  waitForDeployment(): Promise<this>;

  interface: AutomationRegistrarInterfaceInterface;

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

  registerUpkeep: TypedContractMethod<
    [requestParams: RegistrationParamsStruct],
    [bigint],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "registerUpkeep"
  ): TypedContractMethod<
    [requestParams: RegistrationParamsStruct],
    [bigint],
    "nonpayable"
  >;

  filters: {};
}
