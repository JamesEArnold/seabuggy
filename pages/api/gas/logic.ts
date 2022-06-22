import { SanitizedFeeHistory } from '@/types';
import { web3eth } from '@/utils/web3';

type GasAveragesPerBlock = {
  blockNumber: number;
  low: number;
  medium: number;
  high: number;
};

export const getLatestFeeHistory = async (
  blockCount: number,
  rewardPercentiles: number[],
): Promise<SanitizedFeeHistory[]> => {
  const alchemyResponse = await web3eth.getFeeHistory(
    blockCount,
    'latest',
    rewardPercentiles,
  );

  const result: SanitizedFeeHistory[] = [];

  for (let i = 0; i < blockCount; i++) {
    result.push({
      blockNumber: Number(alchemyResponse.oldestBlock) + i,
      reward: alchemyResponse.reward[i].map((x) => Number(x)),
      baseFeePerGas: Number(alchemyResponse.baseFeePerGas[i]),
      gasUsedRatio: alchemyResponse.gasUsedRatio[i],
    });
  }

  return result;
};

export const getGasAverages = (
  sanitizedFeeHistory: SanitizedFeeHistory[],
): GasAveragesPerBlock[] => sanitizedFeeHistory.map(
  (block: SanitizedFeeHistory): GasAveragesPerBlock => ({
    blockNumber: block.blockNumber,
    low: block.baseFeePerGas + block.reward[0],
    medium: block.baseFeePerGas + block.reward[1],
    high: block.baseFeePerGas + block.reward[2],
  }),
);
