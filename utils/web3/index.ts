import { createAlchemyWeb3 } from '@alch/alchemy-web3';

export const { eth: web3eth, alchemy: web3alchemy } = createAlchemyWeb3(`${process.env.ALCHEMY_URL_HTTPS}${process.env.ALCHEMY_API_KEY}`);
