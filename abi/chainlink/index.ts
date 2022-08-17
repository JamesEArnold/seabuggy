import ethToUsdAbi from '@/abi/chainlink/chainlink.json';
import { ethers } from 'ethers';
import { provider } from '@/utils/web3';

export const ethToUsdAddress = '0xA39434A63A52E749F02807ae27335515BA4b07F7';

export const chainlinkEthToUsd = new ethers.Contract(ethToUsdAddress, ethToUsdAbi, provider);
