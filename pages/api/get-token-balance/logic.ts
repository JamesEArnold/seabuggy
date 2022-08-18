import { LatestRoundDataSchemaResponse, isValid } from '@/utils/validate';
import { Contract } from 'ethers';
import { TokenBalance } from '@/types';
import { TokenBalancesResponse } from '@alch/alchemy-web3';
import { alchemy } from '@/utils/web3';
import { chainlinkEthToUsd } from '@/abi/chainlink';

export interface TokenBalanceResponse extends TokenBalance {
  name: string,
  y: number,
}

interface LatestRoundData {
  _hex: string,
  _IsBigNumber: boolean,
}

export const getTokenBalances = async (
  walletAddress: string,
  contractAddresses?: string[],
): Promise<TokenBalanceResponse[]> => {
  const { tokenBalances }: TokenBalancesResponse = contractAddresses === undefined
    ? await alchemy.core.getTokenBalances(walletAddress)
    : await alchemy.core.getTokenBalances(walletAddress, contractAddresses);

  const chainLinkContract: Contract = await chainlinkEthToUsd();
  let response = await chainLinkContract.latestRoundData();
  response = isValid<LatestRoundData[]>(response, LatestRoundDataSchemaResponse);
  console.log(response);
  return parseTokenBalances(tokenBalances);
};

const parseTokenBalances = (
  tokenBalances: TokenBalance[],
): TokenBalanceResponse[] => tokenBalances.map((value: TokenBalance) => ({
  ...value,
  name: value.contractAddress,
  y: (value.tokenBalance !== null ? parseInt(value.tokenBalance) : 0),
}));

