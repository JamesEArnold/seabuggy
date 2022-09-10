import { Ports, getPorts } from '@/ports/getPorts';
import { Contract } from '@/types/index';
import { ContractRepository } from '@/ports/contracts/contract-repository';
import { testAbi } from '@/ports/contracts/mock-data';

describe('contract repository', () => {
  let repository: ContractRepository;
  let ports: Ports;
  let contract: Contract;
  const someContractAddress = 'some_contract_address';

  beforeAll(async () => {
    ports = await getPorts();
    repository = ports.contractRepository;
    contract = await repository.instantiateContract(someContractAddress, testAbi);
  });

  describe('instantiate contract', () => {
    it('allows you to call functions on the contract', async () => {
      expect(await contract.testContract()).toEqual('test');
    });

    it('allows you to verify the contract address', () => {
      expect(contract.address).toEqual(someContractAddress);
    });
  });
});
