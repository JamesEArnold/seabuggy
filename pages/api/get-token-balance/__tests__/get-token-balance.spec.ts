import { getTokenBalances } from '@/pages/api/get-token-balance/logic';
import { mockGetTokenBalance } from '@/pages/api/get-token-balance/mock';
import { web3alchemy } from '@/utils/web3';

jest.mock('@/utils/web3');
const someWalletAddress = 'some_wallet_address';
const someContractAddress = 'some_contract_address';
const someContractAddresses = [ someContractAddress ];
const someAlchemyApiResponse = {
  address: '0x00000000219ab540356cbb839cbe05303d7705fa',
  tokenBalances: [
    {
      contractAddress: someContractAddress,
      tokenBalance: '1',
      error: null,
    },
  ],
};

describe(getTokenBalances, () => {
  describe('happy path', () => {
    it('calls alchemy with just the wallet address', async () => {
      (web3alchemy.getTokenBalances as jest.Mock).mockResolvedValueOnce(mockGetTokenBalance);
      await getTokenBalances(someWalletAddress);
      expect(web3alchemy.getTokenBalances).toHaveBeenCalledWith(someWalletAddress);
    });

    it('calls alchemy with the wallet address and specific token contracts if passed in', async () => {
      (web3alchemy.getTokenBalances as jest.Mock).mockResolvedValueOnce(mockGetTokenBalance);
      await getTokenBalances(someWalletAddress, someContractAddresses);
      expect(web3alchemy.getTokenBalances)
        .toHaveBeenCalledWith(someWalletAddress, someContractAddresses);
    });

    it('takes the alchemy response and creates the token balance response', async () => {
      (web3alchemy.getTokenBalances as jest.Mock).mockResolvedValueOnce(someAlchemyApiResponse);
      const result = await getTokenBalances(someWalletAddress);
      expect(result).toEqual([ {
        contractAddress: someContractAddress,
        error: null,
        name: someContractAddress,
        tokenBalance: '1',
        y: 1,
      } ]);
    });
  });
});
