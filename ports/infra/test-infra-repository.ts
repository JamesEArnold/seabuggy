/* eslint-disable no-unused-vars */
import { Provider, TokenBalances, TokenMetaData } from '@/types/index';
import { tokenBalances, tokenMetaData } from './mock-data';
import { InfraRepository } from '@/ports/infra/infra-repository';

const getProvider = async (): Promise<Provider> => ({} as Provider);

const getTokensByWalletAddress = async (walletAddress: string): Promise<TokenBalances> => ({
  address: walletAddress,
  tokenBalances,
});

const getTokenMetaData = async (contractAddress: string): Promise<TokenMetaData> => {
  const noTokenMetaData: TokenMetaData = {
    decimals: null,
    logo: null,
    name: null,
    symbol: null,
  };

  const result = tokenMetaData.find((metaData) => metaData.contractAddress === contractAddress);

  return result ? result.tokenMetaData : noTokenMetaData;
};

export const testInfraRepository: InfraRepository = {
  getProvider,
  getTokensByWalletAddress,
  getTokenMetaData,
};
