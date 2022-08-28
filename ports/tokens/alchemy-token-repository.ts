import { TokenBalances } from '@/types/token';
import { TokenRepository } from '@/ports/tokens/token-repository';
import { infra } from '@/ports/tokens';

const getTokensByWalletAddress = async (walletAddress: string): Promise<TokenBalances> =>
  await infra.core.getTokenBalances(walletAddress);

export const alchemyTokenRepository: TokenRepository = {
  getTokensByWalletAddress,
};
