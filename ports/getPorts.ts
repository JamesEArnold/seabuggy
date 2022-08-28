import { TokenRepository } from '@/ports/tokens/token-repository';
import { alchemyTokenRepository } from '@/ports/tokens/alchemy-token-repository';
import { testTokenRepository } from './tokens/test-token-repository';

export interface Ports {
  tokenRepository: TokenRepository,
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
  tokenRepository: testTokenRepository,
});

const createSandboxPorts = (): Ports => ({
  tokenRepository: alchemyTokenRepository,
});

const createRealPorts = async (): Promise<Ports> => ({
  tokenRepository: alchemyTokenRepository,
});
