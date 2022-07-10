export type SanitizedFeeHistory = {
  baseFeePerGas: number;
  gasUsedRatio: number;
  blockNumber: number;
  reward: number[];
};

export type GasHistoryResponse = {
  status: number,
  body?: {
    latestGasEstimates: GasAveragesPerBlock[];
    averages: {
      low: number;
      medium: number;
      high: number;
    };
  }
};

export type GasAveragesPerBlock = {
  blockNumber: number;
  low: number;
  medium: number;
  high: number;
};

export type TokenBalance = {
  contractAddress: string,
  tokenBalance: string | null,
  error: string | null,
}

export type TokenBalances = {
  address: string,
  tokenBalances: TokenBalance[],
};

