/* eslint-disable no-unused-vars */
export const contractAddresses: Record<string, string> = {
  '0xdAC17F958D2ee523a2206206994597C13D831ec7': 'USDT',
  '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48': 'USDC',
  '0xfcf8eda095e37a41e002e266daad7efc1579bc0a': 'FLEX',
  '0xf5d669627376ebd411e34b98f19c868c8aba5ada': 'AXS',
  '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2': 'WETH',
  '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0': 'MATIC',
};

export const mapContractToTokenSymbol = (contractAddress: string) => {
  if (contractAddress in contractAddresses) {
    return contractAddresses[contractAddress];
  }
  return contractAddress;
};

export const mockGetTokenBalance = {
  address: '0x00000000219ab540356cbb839cbe05303d7705fa',
  tokenBalances: [
    {
      contractAddress: mapContractToTokenSymbol('0xdAC17F958D2ee523a2206206994597C13D831ec7'),
      tokenBalance: 102938473,
      error: null,
    },
    {
      contractAddress: mapContractToTokenSymbol('0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'),
      tokenBalance: 34710923,
      error: null,
    },
    {
      contractAddress: mapContractToTokenSymbol('0xfcf8eda095e37a41e002e266daad7efc1579bc0a'),
      tokenBalance: 4929853276,
      error: null,
    },
    {
      contractAddress: mapContractToTokenSymbol('0xf5d669627376ebd411e34b98f19c868c8aba5ada'),
      tokenBalance: 2730102938,
      error: null,
    },
    {
      contractAddress: mapContractToTokenSymbol('0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'),
      tokenBalance: 9230291637,
      error: null,
    },
  ],
};

