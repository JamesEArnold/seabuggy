import { Contract } from 'ethers';
import ethToUsdAbi from '@/abi/chainlink/chainlink.json';
import { instantiateContracts } from '@/utils/web3';

export interface LatestRoundData {
  _hex: string,
  _IsBigNumber: boolean,
}

export const ethToUsdAddress = '0xA39434A63A52E749F02807ae27335515BA4b07F7';

export const chainlinkEthToUsd = async (): Promise<Contract> =>
  instantiateContracts(ethToUsdAddress, ethToUsdAbi);
