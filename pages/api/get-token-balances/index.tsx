import { NextApiRequest, NextApiResponse } from 'next/types';
import { Ports, getPorts } from '@/ports/getPorts';
import NextCors from 'nextjs-cors';
import { TokenBalances } from '@/types/index';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  await NextCors(req, res, {
    methods: [ 'GET', 'POST' ],
    origin: '*',
    optionsSuccessStatus: 200,
  });

  try {
    const ports: Ports = await getPorts();
    const response: TokenBalances = await ports.infraRepository.getTokensByWalletAddress('0x00000000219ab540356cbb839cbe05303d7705fa');
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
