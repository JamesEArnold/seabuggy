import { JsonFragment } from '@ethersproject/abi';

export const testAbi: JsonFragment[] = [
  {
    inputs: [],
    name: 'testContract',
    outputs: [
      {
        internalType: 'uint80',
        name: 'test',
        type: 'uint80',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];
