import { TokenBalances } from '@/types/token';
import { TokenRepository } from '@/ports/tokens/token-repository';

const getTokensByWalletAddress = async (walletAddress: string): Promise<TokenBalances> => ({
  address: walletAddress,
  tokenBalances: [
    {
      contractAddress: 'test-contract-address',
      tokenBalance: '2',
      error: null,
    },
    {
      contractAddress: 'test-contract-address-2',
      tokenBalance: '3',
      error: null,
    },
  ],
});

export const testTokenRepository: TokenRepository = {
  getTokensByWalletAddress,
};
