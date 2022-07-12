import { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';
import { TokenBalances } from '@/types';
import { demoMode } from '@/configuration';
import { getTokenBalances } from '@/pages/api/get-token-balance/logic';
import { mockGetTokenBalance } from './mock';

export const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  await NextCors(req, res, {
    methods: [ 'GET', 'POST' ],
    origin: '*',
    optionsSuccessStatus: 200,
  });

  if (demoMode()) {
    res.send({ status: 200, body: { ...mockGetTokenBalance } });
    return;
  }

  try {
    const response: TokenBalances = await getTokenBalances('0x00000000219ab540356cbb839cbe05303d7705fa');
    res.send({
      status: 200,
      body: {
        ...response,
      },
    });
  } catch (error) {
    res.send({
      status: 500,
    });
  }
};

export default handler;
