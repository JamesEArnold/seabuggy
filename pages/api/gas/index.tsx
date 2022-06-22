import { GasHistoryResponse, SanitizedFeeHistory } from '@/types';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getGasAverages, getLatestFeeHistory } from '@/pages/api/gas/logic';
import NextCors from 'nextjs-cors';
import { calculateAverage } from 'utils/helpers';

type Data = GasHistoryResponse;

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>,
): Promise<void> => {
  await NextCors(req, res, {
    methods: [ 'GET', 'POST' ],
    origin: '*',
    optionsSuccessStatus: 200,
  });

  const blockCount = 20;

  const rewardPercentiles = [ 20, 50, 75 ];

  try {
    const sanitizedFeeHistory: SanitizedFeeHistory[] = await getLatestFeeHistory(
      blockCount,
      rewardPercentiles,
    );

    const historicalGasAverages = getGasAverages(sanitizedFeeHistory);

    const lowAverage = calculateAverage(
      historicalGasAverages.map((estimate) => estimate.low),
    );
    const midAverage = calculateAverage(
      historicalGasAverages.map((estimate) => estimate.medium),
    );
    const highAverage = calculateAverage(
      historicalGasAverages.map((estimate) => estimate.high),
    );

    // Pull the last baseFeePerGas out of our array and use it as the latest estimate
    const currentBaseFeePerGas =
      sanitizedFeeHistory[sanitizedFeeHistory.length - 1].baseFeePerGas;

    res.send({ status: 200,
      body: {
        latestGasEstimates: historicalGasAverages,
        averages: {
          low: lowAverage + currentBaseFeePerGas,
          medium: midAverage + currentBaseFeePerGas,
          high: highAverage + currentBaseFeePerGas,
        },
      } });
  } catch (error) {
    res.send({
      status: 500,
    });
  }
};

export default handler;
