import { Provider, TokenBalances } from '@/types/index';
import { InfraRepository } from '@/ports/infra/infra-repository';
import { infra } from '@/ports/infra';

const getTokensByWalletAddress = async (walletAddress: string): Promise<TokenBalances> =>
  await infra.core.getTokenBalances(walletAddress);

const getProvider = async (): Promise<Provider> => await infra.config.getProvider();

const getTokenMetaData = async (contractAddress: string): Promise<any> =>
  await infra.core.getTokenMetadata(contractAddress);

export const alchemyTokenRepository: InfraRepository = {
  getProvider,
  getTokensByWalletAddress,
  getTokenMetaData,
};
