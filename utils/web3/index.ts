import { createAlchemyWeb3 } from '@alch/alchemy-web3';

export const { eth: web3eth } = createAlchemyWeb3(`${process.env.ALCHEMY_URL_HTTPS}${process.env.ALCHEMY_API_KEY}`);
