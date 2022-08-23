import { AlchemySettings, Network } from 'alchemy-sdk';

/*
 * Next.js has built in support and protections for loading
 * .env.local into process.env -- please only use process.env
 * to load environment variables.
 */

// https://nextjs.org/docs/basic-features/environment-variables#loading-environment-variables

export const alchemyConfig: AlchemySettings = {
  apiKey: process.env.ALCHEMY_API_KEY as string,
  network: Network.ETH_GOERLI,
};

export const demoMode = (): boolean => process.env.NODE_ENV === 'development';
