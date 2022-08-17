import { createAlchemyWeb3 } from '@alch/alchemy-web3';
import { ethers } from 'ethers';

export const { eth: web3eth, alchemy: web3alchemy } = createAlchemyWeb3(`${process.env.ALCHEMY_URL_HTTPS}${process.env.ALCHEMY_API_KEY}`);

export const provider = new ethers.providers.JsonRpcProvider(`${process.env.ETHEREUM_RPC_URL}`);
