import { TokenBalancesResponse } from '@alch/alchemy-web3';
import { web3alchemy } from '@/utils/web3';

export const getTokenBalances = async (
  walletAddress: string,
  contractAddresses?: string[],
): Promise<TokenBalancesResponse> =>
  (contractAddresses !== undefined
    ? await web3alchemy.getTokenBalances(walletAddress, contractAddresses)
    : await web3alchemy.getTokenBalances(walletAddress));
