/* eslint-disable no-unused-vars */
import { Provider, TokenBalances, TokenMetaData } from '@/types/index';

export interface InfraRepository {

  /**
   * Instantiates a Read Provider to be used for Contract instantiation.
   *
   * @returns { Provider }
   */
  getProvider: () => Promise<Provider>,

  /**
   * Returns the TokenBalances that the associated wallet address owns
   * that are within the top 100 tokens by market cap. Will not return obscure tokens
   * that are outside of the top 100 market cap.
   *
   * @param walletAddress The wallet address to lookup
   * @returns { TokenBalances }
   */
  getTokensByWalletAddress: (walletAddress: string) => Promise<TokenBalances>,

  /**
   * Returns the related TokenMetaData information for the contract address.
   * Includes decimals, logo, name and symbol.
   * @param contractAddress The contract address to search for
   */
  getTokenMetaData: (contractAddress: string) => Promise<TokenMetaData>,
}
