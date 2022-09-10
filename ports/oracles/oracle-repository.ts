/* eslint-disable no-unused-vars */
export interface OracleRepository {

  /**
   * Converts the token price to a human readable form based on the
   * number of decimal places.
   *
   * USD denominations should use 8 decimal places (ETH/USD)
   *
   * ETH denominations should use 18 decimal places (AAVE/ETH)
   * @param latestTokenPrice The price of the token to convert
   * @param decimalPlaces The number of decimal places to account for.
   */
  convertRawTokenPrice: (latestTokenPrice: number, decimalPlaces: number) => number,

  /**
   * Finds the number of decimal places used to convert
   * the token price into a fixed number.
   * @param contractAddress The contract address of the token
   */
  tokenDecimalPlaces: (contractAddress: string) => Promise<number>,

  /**
   * Finds the latest reported Oracle price of the related token.
   * @param contractAddress The contract address of the token
   */
  tokenPricingInformation: (contractAddress: string) => Promise<number>,
}
