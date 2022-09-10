/* eslint-disable no-unused-vars */
import { Contract, ContractInterface } from '@/types/index';

export interface ContractRepository {

  /**
   * Instantiates a Contract using the Infra port provider.
   *
   * Methods on the ABI will be callable from the returned Contract.
   *
   * What is an ABI? https://www.quicknode.com/guides/solidity/what-is-an-abi
   * @param contractAddress The address of the Contract to instantiate.
   * @param abi The ABI of the Contract.
   */
  instantiateContract: (
    contractAddress: string,
    abi: ContractInterface,
  ) => Promise<Contract>,
}
