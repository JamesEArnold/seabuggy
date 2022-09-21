import { NextApiRequest, NextApiResponse } from 'next/types';
import { Ports, getPorts } from '@/ports/getPorts';
import NextCors from 'nextjs-cors';
import { TokenBalances } from '@/types/index';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  await NextCors(req, res, {
    methods: [ 'GET' ],
    origin: '*',
    optionsSuccessStatus: 200,
  });

  const { pid } = req.query;

  try {
    const ports: Ports = await getPorts();
    let response: TokenBalances;
    if (typeof pid === 'string') {
      response = await ports.infraRepository.getTokensByWalletAddress(pid);
      if (response.tokenBalances.length === 0) {
        res.statusCode = 404;
        res.send({});
        return;
      }
      res.send({
        body: {
          ...response,
        },
      });
    }
  } catch (error) {
    res.send({
      status: 500,
    });
  }
};

export default handler;
