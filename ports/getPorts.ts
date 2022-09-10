import { ContractRepository } from '@/ports/contracts/contract-repository';
import { InfraRepository } from '@/ports/infra/infra-repository';
import { OracleRepository } from '@/ports/oracles/oracle-repository';
import { alchemyTokenRepository } from '@/ports/infra/alchemy-infra-repository';
import { chainLinkOracleRepository } from '@/ports/oracles/chainlink-oracle-repository';
import { ethersContractRepository } from '@/ports/contracts/ethers-repository';
import { testContractsRepository } from '@/ports/contracts/test-contracts-repository';
import { testInfraRepository } from '@/ports/infra/test-infra-repository';
import { testOracleRepository } from '@/ports/oracles/test-oracle-repository';

export interface Ports {
  contractRepository: ContractRepository,
  infraRepository: InfraRepository,
  oracleRepository: OracleRepository,
}

let ports: Ports;

export const getPorts = async (): Promise<Ports> => {
  if (process.env.USE_FAKE_PORTS === 'true') {
    ports = ports || createFakePorts();
  } else if (process.env.NODE_ENV === 'test') {
    ports = ports || createSandboxPorts();
  } else {
    ports = ports || (await createRealPorts());
  }

  return ports;
};

const createFakePorts = (): Ports => ({
  contractRepository: testContractsRepository,
  infraRepository: testInfraRepository,
  oracleRepository: testOracleRepository,
});

const createSandboxPorts = (): Ports => ({
  contractRepository: testContractsRepository,
  infraRepository: testInfraRepository,
  oracleRepository: testOracleRepository,
});

const createRealPorts = async (): Promise<Ports> => ({
  contractRepository: ethersContractRepository,
  infraRepository: alchemyTokenRepository,
  oracleRepository: chainLinkOracleRepository,
});
