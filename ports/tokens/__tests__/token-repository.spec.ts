import { Ports, getPorts } from '@/ports/getPorts';
import { TokenBalances } from '@/types/token';
import { TokenRepository } from '@/ports/tokens/token-repository';

describe('token repository', () => {
  let repository: TokenRepository;
  let ports: Ports;

  beforeAll(async () => {
    ports = await getPorts();
    repository = ports.tokenRepository;
  });

  describe('getTokenBalances', () => {
    describe('a wallet is provided', () => {
      const someWallet = 'some_wallet';
      let getTokensByWalletAddressResponse: TokenBalances;

      beforeEach(async () => {
        getTokensByWalletAddressResponse = await repository.getTokensByWalletAddress(someWallet);
      });

      it('returns the users wallet address', async () => {
        expect(getTokensByWalletAddressResponse).toEqual(
          expect.objectContaining({ address: someWallet }),
        );
      });

      it('returns the wallets tokens balance and token contract address', () => {
        expect(getTokensByWalletAddressResponse).toEqual(
          expect.objectContaining({ tokenBalances: expect.arrayContaining(
            [ { contractAddress: expect.any(String),
              error: null,
              tokenBalance: expect.any(String) } ],
          ) }),
        );
      });
    });
  });
});
