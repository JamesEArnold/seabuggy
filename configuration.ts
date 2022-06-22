/*
 * Next.js has built in support and protections for loading
 * .env.local into process.env -- please only use process.env
 * to load environment variables.
 */

// https://nextjs.org/docs/basic-features/environment-variables#loading-environment-variables

interface Web3ProviderConfig {
  apiKey: string;
  urlHttps: string,
  urlWebsocket: string,
}

export const alchemyConfig: Web3ProviderConfig = {
  apiKey: process.env.ALCHEMY_API_KEY as string,
  urlHttps: process.env.ALCHEMY_URL_HTTPS as string,
  urlWebsocket: process.env.ALCHEMY_URL_WEBSOCKET as string,
};
