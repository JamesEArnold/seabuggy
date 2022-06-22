import { getLatestFeeHistory } from '@/pages/api/gas/logic';
import { web3eth } from '@/utils/web3';

jest.mock('@/utils/web3');
const mockBlockCount = 20;
const mockRewardPercentile = [ 25, 50, 75 ];
const mockOldestBlock = '0x6bfb75';

/*
 * This fee is dictated by the network and will most likely
 * be constant
 */
const mockBaseFeePerGas = [
  '0xa','0xa','0xb','0xb',
  '0xb','0xa','0x9','0x9',
  '0x8','0x8','0x8','0x8',
  '0x8','0x8','0x8','0x8',
  '0x8','0x8','0x8','0x8',
  '0x8',
];
const mockReward = [
  [ '0x3b9aca00', '0x3b9aca00', '0x3b9aca00' ],
  [ '0x3b9aca00', '0x3b9aca00', '0x3b9aca00' ],
  [ '0x3b9aca00', '0x3b9aca00', '0x3b9aca00' ],
  [ '0x6aa14e2d', '0x9502f900', '0x165a0bbf5' ],
  [ '0x9502f900', '0x9502f900', '0x9502f900' ],
  [ '0x9502f900', '0x9502f900', '0x9502f900' ],
  [ '0x9502f900', '0x9502f900', '0x9502f900' ],
  [ '0x9502f900', '0x9502f900', '0x9502f900' ],
  [ '0x6aa14e30', '0x6aa14e30', '0x9502f900' ],
  [ '0x6aa14e30', '0x6aa14e30', '0x9502f900' ],
  [ '0x9502f900', '0x9502f900', '0x9502f900' ],
  [ '0x9502f900', '0x9502f900', '0x9502f900' ],
  [ '0x6aa14e30', '0x9502f900', '0x9502f900' ],
  [ '0x9502f900', '0xee6b27f8', '0x12a05f1f8' ],
  [ '0x9502f900', '0x9502f900', '0x9502f900' ],
  [ '0x6aa14e30', '0x6aa14e30', '0x9502f900' ],
  [ '0x6aa14e30', '0x6aa14e30', '0x9502f900' ],
  [ '0x9502f900', '0x9502f900', '0x12a05f1f8' ],
  [ '0x9502f900', '0x9502f900', '0x9502f900' ],
  [ '0x9502f900', '0x9502f900', '0xee6b27f8' ],
];

const mockGasUsedRatio = [
  0.3440073442451767, 0.6252813708545857, 0.302143297334155, 0.1712515,
  0.018646333333333334, 0.08857479328564342, 0.05570278532259963,
  0.025925340291779196, 0.21555005247295547, 0.22559358777469718,
  0.08375287435383864, 0.001400003920010976, 0.24128683333333334,
  0.1810087216833905, 0.053446283216531, 0.2785713, 0.16545960463726161,
  0.1277145465880766, 0.001402738238557547, 0.16645817398312937,
];

const someFeeHistoryResult = {
  baseFeePerGas: mockBaseFeePerGas,
  gasUsedRatio: mockGasUsedRatio,
  oldestBlock: mockOldestBlock,
  reward: mockReward,
};

describe('gas', () => {
  describe('getLatestFeeHistory', () => {
    describe('happy path', () => {
      it('retrieves the history for as many blocks as the block count', async () => {
        (web3eth.getFeeHistory as jest.Mock).mockResolvedValueOnce(someFeeHistoryResult);
        await getLatestFeeHistory(mockBlockCount, mockRewardPercentile);
        expect(web3eth.getFeeHistory).toHaveBeenCalledWith(
          mockBlockCount,
          'latest',
          mockRewardPercentile,
        );
      });

      it('retrieves the passed reward percentiles for block history', () => {});

      it('converts rewards from hashes to numbers', () => {});

      it('converts base fee per gas from hash to number', () => {});

      it('returns sanitized fee history', () => {});
    });
    describe('sad path', () => {
      it('captures an error thrown by the alchemy api', () => {});
    });
  });
});
