import { Ports, getPorts } from '@/ports/getPorts';
import { OracleRepository } from '@/ports/oracles/oracle-repository';

describe('oracle repository', () => {
  let repository: OracleRepository;
  let ports: Ports;

  beforeAll(async () => {
    ports = await getPorts();
    repository = ports.oracleRepository;
  });

  describe('tokenPricingInformation', () => {
    it('returns the latest pricing information denominated in USD', async () => {
      expect(await repository.tokenPricingInformation('some_contract_address')).toEqual(expect.any(Number));
    });
  });

  describe('tokenDecimalPlaces', () => {
    it('returns the number of decimal places to expect with that token', async () => {
      expect(await repository.tokenDecimalPlaces('some_contract_address')).toEqual(expect.any(Number));
    });
  });

  describe('convertRawTokenPrice', () => {
    it('converts the token price to a human readable number based on the decimal places', () => {
      expect(repository.convertRawTokenPrice(171720000000, 8)).toEqual(1717.20);
    });
  });
});
