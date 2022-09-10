/* eslint-disable no-unused-vars */
import { Contract, ContractInterface } from '@/types/index';
import { ContractRepository } from '@/ports/contracts/contract-repository';

const instantiateContract = async (
  contractAddress: string,
  abi: ContractInterface,
): Promise<Contract> => ({ address: contractAddress, testContract: async () => 'test' } as unknown as Contract);

export const testContractsRepository: ContractRepository = {
  instantiateContract,
};
