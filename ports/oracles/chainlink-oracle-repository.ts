import { Ports, getPorts } from '@/ports/getPorts';
import { Contract } from '@/types/index';
import { OracleRepository } from '@/ports/oracles/oracle-repository';
import chainLinkAbi from '@/ports/oracles/abi/chainlink.json';

const tokenPricingInformation = async (
  contractAddress: string,
): Promise<number> => {
  const ports: Ports = await getPorts();

  /*
   * TODO: Create a mapping of contract addresses to ChainLink price feeds
   * Call the particular price feed based on the passed in contract address
   */
  const contract: Contract =
    await ports.contractRepository.instantiateContract(contractAddress, chainLinkAbi);
  return contract.latestRoundData();
};

const tokenDecimalPlaces = async (
  contractAddress: string,
): Promise<number> => {
  const ports: Ports = await getPorts();

  /*
   * TODO: Create mapping of current Chainlink pairs using the logic above.
   * That way we can avoid making unnecessary contract calls
   */
  const contract: Contract =
    await ports.contractRepository.instantiateContract(contractAddress, chainLinkAbi);
  return contract.decimals();
};

const convertRawTokenPrice = (
  latestTokenPrice: number,
  decimalPlaces: number,
): number => Number((latestTokenPrice / (10 ** decimalPlaces)).toFixed(2));

export const chainLinkOracleRepository: OracleRepository = {
  convertRawTokenPrice,
  tokenDecimalPlaces,
  tokenPricingInformation,
};
