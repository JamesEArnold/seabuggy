/* eslint-disable no-unused-vars */
import { Contract, ContractInterface } from '@/types/index';

export interface ContractRepository {
  instantiateContract: (
    contractAddress: string,
    abi: ContractInterface,
  ) => Promise<Contract>,
}
