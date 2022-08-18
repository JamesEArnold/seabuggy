import { Contract, ContractInterface, ethers } from 'ethers';
import { Alchemy } from 'alchemy-sdk';
import { alchemyConfig } from '@/configuration';

export const provider = new ethers.providers.JsonRpcProvider(`${process.env.ETHEREUM_RPC_URL}`);

export const alchemy: Alchemy = new Alchemy(alchemyConfig);

export const instantiateContracts = async (
  contractAddress: string,
  abi: ContractInterface,
): Promise<Contract> =>
  new ethers.Contract(contractAddress, abi, await alchemy.config.getProvider());
