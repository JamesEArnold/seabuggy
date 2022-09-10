import { Ports, getPorts } from '@/ports/getPorts';
import { InfraRepository } from '@/ports/infra/infra-repository';
import { TokenBalances } from '@/types/index';
import { tokenMetaData } from '@/ports/infra/mock-data';

describe('infra repository', () => {
  let repository: InfraRepository;
  let ports: Ports;

  beforeAll(async () => {
    ports = await getPorts();
    repository = ports.infraRepository;
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

  describe('getTokenMetaData', () => {
    describe('a valid contract address is provided', () => {
      const contractAddress = '0xdac17f958d2ee523a2206206994597c13d831ec7';

      it('returns the contracts meta data', async () => {
        expect(await repository.getTokenMetaData(contractAddress))
          .toEqual(tokenMetaData[0].tokenMetaData);
      });

      it('returns null properties if the contract is not found', async () => {
        expect(await repository.getTokenMetaData('some_contract')).toEqual({
          decimals: null,
          logo: null,
          name: null,
          symbol: null,
        });
      });
    });
  });
});
