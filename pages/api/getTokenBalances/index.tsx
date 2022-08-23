import { NextApiRequest, NextApiResponse } from 'next/types';
import { TokenBalances, createGetTokenBalance } from '@/ports/getTokenBalances';
import NextCors from 'nextjs-cors';
import { getTokenBalance } from '@/services/alchemy';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  await NextCors(req, res, {
    methods: [ 'GET', 'POST' ],
    origin: '*',
    optionsSuccessStatus: 200,
  });

  const lookup = createGetTokenBalance({ getTokenBalance });

  try {
    const response: TokenBalances = await lookup('0x00000000219ab540356cbb839cbe05303d7705fa');
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
