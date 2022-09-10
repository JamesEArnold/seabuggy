/* eslint-disable no-unused-vars */
export interface OracleRepository {
  convertRawTokenPrice: (latestTokenPrice: number, decimalPlaces: number) => number,

  tokenDecimalPlaces: (contractAddress: string) => Promise<number>,

  /**
   * Finds the number of decimal places used to convert
   * the token price into a fixed number.
   * @param contractAddress The contract address of the token,
   * @returns {number}
   */
  tokenPricingInformation: (contractAddress: string) => Promise<number>,
}
