import { Alchemy } from 'alchemy-sdk';
import { Configuration } from '@/configuration';

const infraConfig = Configuration.getInfraConfig();

export const infra: Alchemy = new Alchemy(infraConfig);
