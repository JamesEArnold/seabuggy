/* eslint-disable no-unused-vars */
export interface TokenBalance {
  contractAddress: string,
  tokenBalance: string | null,
  error: string | null,
}

export interface TokenBalances {
  address: string,
  tokenBalances: TokenBalance[],
}

export interface GetTokenBalance {
  getTokenBalance: (walletAddress: string) => Promise<TokenBalances>;
}

export const createGetTokenBalance = (lookup: GetTokenBalance) => async (
  walletAddress: string,
): Promise<TokenBalances> => await lookup.getTokenBalance(walletAddress);
