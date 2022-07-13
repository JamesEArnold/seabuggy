import { convertWeiToGwei, getLatestFeeHistory } from '@/pages/api/gas/logic';
import { SanitizedFeeHistory } from '@/types';
import { web3eth } from '@/utils/web3';

jest.mock('@/utils/web3');
const mockBlockCount = 20;
const mockRewardPercentile = [ 25, 50, 75 ];
const mockOldestBlock = '0x6bfb75';

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

const someSanitizedFeeHistory: SanitizedFeeHistory[] = [
  {
    blockNumber: 7076725,
    reward: [ 1000000000, 1000000000, 1000000000 ],
    baseFeePerGas: 10,
    gasUsedRatio: 0.3440073442451767,
  },
  {
    blockNumber: 7076726,
    reward: [ 1000000000, 1000000000, 1000000000 ],
    baseFeePerGas: 10,
    gasUsedRatio: 0.6252813708545857,
  },
  {
    blockNumber: 7076727,
    reward: [ 1000000000, 1000000000, 1000000000 ],
    baseFeePerGas: 11,
    gasUsedRatio: 0.302143297334155,
  },
  {
    blockNumber: 7076728,
    reward: [ 1788956205, 2500000000, 5999999989 ],
    baseFeePerGas: 11,
    gasUsedRatio: 0.1712515,
  },
  {
    blockNumber: 7076729,
    reward: [ 2500000000, 2500000000, 2500000000 ],
    baseFeePerGas: 11,
    gasUsedRatio: 0.018646333333333334,
  },
  {
    blockNumber: 7076730,
    reward: [ 2500000000, 2500000000, 2500000000 ],
    baseFeePerGas: 10,
    gasUsedRatio: 0.08857479328564342,
  },
  {
    blockNumber: 7076731,
    reward: [ 2500000000, 2500000000, 2500000000 ],
    baseFeePerGas: 9,
    gasUsedRatio: 0.05570278532259963,
  },
  {
    blockNumber: 7076732,
    reward: [ 2500000000, 2500000000, 2500000000 ],
    baseFeePerGas: 9,
    gasUsedRatio: 0.025925340291779196,
  },
  {
    blockNumber: 7076733,
    reward: [ 1788956208, 1788956208, 2500000000 ],
    baseFeePerGas: 8,
    gasUsedRatio: 0.21555005247295547,
  },
  {
    blockNumber: 7076734,
    reward: [ 1788956208, 1788956208, 2500000000 ],
    baseFeePerGas: 8,
    gasUsedRatio: 0.22559358777469718,
  },
  {
    blockNumber: 7076735,
    reward: [ 2500000000, 2500000000, 2500000000 ],
    baseFeePerGas: 8,
    gasUsedRatio: 0.08375287435383864,
  },
  {
    blockNumber: 7076736,
    reward: [ 2500000000, 2500000000, 2500000000 ],
    baseFeePerGas: 8,
    gasUsedRatio: 0.001400003920010976,
  },
  {
    blockNumber: 7076737,
    reward: [ 1788956208, 2500000000, 2500000000 ],
    baseFeePerGas: 8,
    gasUsedRatio: 0.24128683333333334,
  },
  {
    blockNumber: 7076738,
    reward: [ 2500000000, 3999999992, 4999999992 ],
    baseFeePerGas: 8,
    gasUsedRatio: 0.1810087216833905,
  },
  {
    blockNumber: 7076739,
    reward: [ 2500000000, 2500000000, 2500000000 ],
    baseFeePerGas: 8,
    gasUsedRatio: 0.053446283216531,
  },
  {
    blockNumber: 7076740,
    reward: [ 1788956208, 1788956208, 2500000000 ],
    baseFeePerGas: 8,
    gasUsedRatio: 0.2785713,
  },
  {
    blockNumber: 7076741,
    reward: [ 1788956208, 1788956208, 2500000000 ],
    baseFeePerGas: 8,
    gasUsedRatio: 0.16545960463726161,
  },
  {
    blockNumber: 7076742,
    reward: [ 2500000000, 2500000000, 4999999992 ],
    baseFeePerGas: 8,
    gasUsedRatio: 0.1277145465880766,
  },
  {
    blockNumber: 7076743,
    reward: [ 2500000000, 2500000000, 2500000000 ],
    baseFeePerGas: 8,
    gasUsedRatio: 0.001402738238557547,
  },
  {
    blockNumber: 7076744,
    reward: [ 2500000000, 2500000000, 3999999992 ],
    baseFeePerGas: 8,
    gasUsedRatio: 0.16645817398312937,
  },
];

describe('gas', () => {
  describe(getLatestFeeHistory, () => {
    describe('happy path', () => {
      let result: SanitizedFeeHistory[];
      beforeEach(async () => {
        (web3eth.getFeeHistory as jest.Mock).mockResolvedValueOnce(someFeeHistoryResult);
        result = await getLatestFeeHistory(mockBlockCount, mockRewardPercentile);
      });

      it('calls alchemy for the blocks and their gas fees at certain percentiles', async () => {
        expect(web3eth.getFeeHistory).toHaveBeenCalledWith(
          mockBlockCount,
          'latest',
          mockRewardPercentile,
        );
      });

      it('converts rewards from hashes to numbers', () => {
        expect(result[0].reward).toEqual(mockReward[0].map((x) => Number(x)));
      });

      it('converts base fee per gas from hash to number', () => {
        expect(result[0].baseFeePerGas).toEqual(Number(mockBaseFeePerGas[0]));
      });

      it('returns a sanitized fee history', () => {
        expect(result).toEqual(someSanitizedFeeHistory);
      });
    });
    describe('sad path', () => {
      it('captures an error thrown by the alchemy api', async () => {
        await expect(getLatestFeeHistory(mockBlockCount, mockRewardPercentile))
          .rejects.toEqual(undefined);
      });
    });
  });

  describe(convertWeiToGwei, () => {
    const someWei = 2875000010;
    const someGwei = 2.87500001;

    it('converts wei to our expected gwei', () => {
      expect(convertWeiToGwei(someWei)).toEqual(someGwei);
    });
  });
});
