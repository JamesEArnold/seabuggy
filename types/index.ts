import {
  Contract as EthersContract,
  ContractInterface as EthersContractInterface,
} from 'ethers';
import { AlchemyProvider } from 'alchemy-sdk';

export interface NotificationContext {
  content: string,
  timerInMs: number,
  backgroundColor: string,
}

export interface TokenBalance {
  contractAddress: string,
  tokenBalance: string | null,
  error: string | null,
}

export interface TokenBalances {
  address: string,
  tokenBalances: TokenBalance[],
}

export interface TokenMetaData {
  decimals: number | null,
  logo: string | null,
  name: string | null,
  symbol: string | null,
}

export type Provider = AlchemyProvider;

export type Contract = EthersContract;
export type ContractInterface = EthersContractInterface;

export type PricingInformation = {
  _hex: string,
  _IsBigNumber: boolean,
}
