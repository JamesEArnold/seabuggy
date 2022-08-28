import { AlchemySettings, Network } from 'alchemy-sdk';

/*
 * Next.js has built in support and protections for loading
 * .env.local into process.env -- please only use process.env
 * to load environment variables.
 */

// https://nextjs.org/docs/basic-features/environment-variables#loading-environment-variables

const isTestEnv = (): boolean => process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'development';

const getTestInfraConfig = (): AlchemySettings => ({
  apiKey: process.env.ALCHEMY_API_KEY as string,
  network: Network.ETH_GOERLI,
});

const getProdInfraConfig = (): AlchemySettings => ({
  apiKey: process.env.ALCHEMY_API_KEY as string,
  network: Network.ETH_MAINNET,
});

const getInfraConfig = (): AlchemySettings => (
  isTestEnv() ? getTestInfraConfig() : getProdInfraConfig()
);

export const Configuration = {
  getInfraConfig,
};
