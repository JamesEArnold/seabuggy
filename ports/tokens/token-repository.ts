/* eslint-disable no-unused-vars */
import { TokenBalances } from '@/types/token';

export interface TokenRepository {
  getTokensByWalletAddress: (walletAddress: string) => Promise<TokenBalances>,
}
