import { AbiItem } from 'web3-utils';
import { Contract } from 'web3-eth-contract';
import { web3eth } from '@/utils/web3';

const chainLinkV3ABI: AbiItem[] = [
  {
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'description',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint80',
        name: '_roundId',
        type: 'uint80',
      },
    ],
    name: 'getRoundData',
    outputs: [
      {
        internalType: 'uint80',
        name: 'roundId',
        type: 'uint80',
      },
      {
        internalType: 'int256',
        name: 'answer',
        type: 'int256',
      },
      {
        internalType: 'uint256',
        name: 'startedAt',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'updatedAt',
        type: 'uint256',
      },
      {
        internalType: 'uint80',
        name: 'answeredInRound',
        type: 'uint80',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'latestRoundData',
    outputs: [
      {
        internalType: 'uint80',
        name: 'roundId',
        type: 'uint80',
      },
      {
        internalType: 'int256',
        name: 'answer',
        type: 'int256',
      },
      {
        internalType: 'uint256',
        name: 'startedAt',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'updatedAt',
        type: 'uint256',
      },
      {
        internalType: 'uint80',
        name: 'answeredInRound',
        type: 'uint80',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'version',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const contractAddressEthToUsd = '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419';

type LatestRoundData = {
  roundId: string,
  answer: number,
  startedAt: number,
  updatedAt: number,
  answeredInRound: string,
}

// Were typing the ABI of the contract and it's response
// so we omit the methods which could be an any
type OmitAnyMethods = Omit<Contract, 'methods'>;

// We need to define our methods and what they can be with this
// particular contract.  LatestRoundData is our return
// type -- but we need to be able to do a .call() on it
// which I'm not sure how to
interface PriceFeed extends OmitAnyMethods {
  methods: {
    latestRoundData: () => LatestRoundData,
  }
}

const priceFeedEthToUsd: PriceFeed = new web3eth.Contract(chainLinkV3ABI, contractAddressEthToUsd);

priceFeedEthToUsd.methods.latestRoundData().call();
