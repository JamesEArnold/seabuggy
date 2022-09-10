/* eslint-disable no-unused-vars */
import { OracleRepository } from '@/ports/oracles/oracle-repository';

const tokenPricingInformation = async (contractAddress: string): Promise<number> => 171720000000;

const tokenDecimalPlaces = async (contractAddress: string): Promise<number> => 8;

const convertRawTokenPrice = (
  latestTokenPrice: number,
  decimalPlaces: number,
): number => parseFloat((latestTokenPrice / (10 ** decimalPlaces)).toFixed(2));

export const testOracleRepository: OracleRepository = {
  convertRawTokenPrice,
  tokenDecimalPlaces,
  tokenPricingInformation,
};
