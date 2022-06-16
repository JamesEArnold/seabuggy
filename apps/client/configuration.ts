import * as env from 'env-var';

interface Web3ProviderConfig {
  apiKey: string;
  urlHttps: string,
  urlWebsocket: string,
}

export const alchemyConfig: Web3ProviderConfig = {
  apiKey: env.get('ALCHEMY_API_KEY').required().asString(),
  urlHttps: env.get('ALCHEMY_URL_HTTPS').default('https://eth-goerli.alchemyapi.io/v2/').asString(),
  urlWebsocket: env.get('ALCHEMY_URL_WEBSOCKET').default('wss://eth-goerli.alchemyapi.io/v2/').asString(),
}