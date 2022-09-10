/* eslint-disable no-unused-vars */
import { Provider, TokenBalances, TokenMetaData } from '@/types/index';

export interface InfraRepository {
  getProvider: () => Promise<Provider>,
  getTokensByWalletAddress: (walletAddress: string) => Promise<TokenBalances>,
  getTokenMetaData: (contractAddress: string) => Promise<TokenMetaData>,
}
