import { Contract, Provider } from '@/types/index';
import { ContractInterface, ethers } from 'ethers';
import { Ports, getPorts } from '@/ports/getPorts';
import { ContractRepository } from '@/ports/contracts/contract-repository';

const instantiateContract = async (
  contractAddress: string,
  abi: ContractInterface,
): Promise<Contract> => {
  const ports: Ports = await getPorts();
  const provider: Provider = await ports.infraRepository.getProvider();
  return new ethers.Contract(contractAddress, abi, provider);
};

export const ethersContractRepository: ContractRepository = {
  instantiateContract,
};
