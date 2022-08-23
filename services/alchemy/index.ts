import { Alchemy } from 'alchemy-sdk';
import { alchemyConfig } from '@/configuration';
import { ethers } from 'ethers';
export { getTokenBalance } from '@/services/alchemy/getTokenBalance';

export const alchemy: Alchemy = new Alchemy(alchemyConfig);

export const ethersProvider: ethers.providers.JsonRpcProvider = new ethers.providers.JsonRpcProvider(`${process.env.ALCHEMY_URL_HTTPS}${process.env.ALCHEMY_API_KEY}`);
