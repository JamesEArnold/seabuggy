import { TokenBalances } from '@/ports/getTokenBalances';
import { alchemy } from '@/services/alchemy';

export const getTokenBalance = async (walletAddress: string): Promise<TokenBalances> => {
  const response: TokenBalances = await alchemy.core.getTokenBalances(walletAddress);
  return response;
};
