/* eslint-disable no-underscore-dangle */
import { createMocks } from 'node-mocks-http';
import handler from '@/pages/api/get-token-balances/[pid]';

describe('/api/get-token-balances/[pid]', () => {
  it('returns TokenBalances on a successful response', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        pid: 'some_wallet_address',
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toEqual(200);
    expect(res._getData()).toEqual(expect.objectContaining({
      address: expect.any(String),
      tokenBalances: expect.arrayContaining(
        [ {
          contractAddress: expect.any(String),
          tokenBalance: expect.any(String),
          error: null,
        } ],
      ),
    }));
  });

  it('returns a 404 status code when no token balances are found', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        pid: 'badWalletAddress',
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toEqual(404);
  });
});
