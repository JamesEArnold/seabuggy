import { TokenBalance } from '@/types';
import { TokenBalancesResponse } from '@alch/alchemy-web3';
import { web3alchemy } from '@/utils/web3';

interface TokenBalanceResponse extends TokenBalance {
  name: string,
  y: number,
}

export const getTokenBalances = async (
  walletAddress: string,
  contractAddresses?: string[],
): Promise<TokenBalance[]> => {
  const { tokenBalances }: TokenBalancesResponse = contractAddresses === undefined
    ? await web3alchemy.getTokenBalances(walletAddress)
    : await web3alchemy.getTokenBalances(walletAddress, contractAddresses);
  return parseTokenBalances(tokenBalances);
};

const parseTokenBalances = (
  tokenBalances: TokenBalance[],
): TokenBalanceResponse[] => tokenBalances.map((value: TokenBalance) => ({
  ...value,
  name: value.contractAddress,
  y: (value.tokenBalance !== null ? parseInt(value.tokenBalance) : 0),
}));

