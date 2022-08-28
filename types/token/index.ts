export interface TokenBalance {
  contractAddress: string,
  tokenBalance: string | null,
  error: string | null,
}

export interface TokenBalances {
  address: string,
  tokenBalances: TokenBalance[],
}
