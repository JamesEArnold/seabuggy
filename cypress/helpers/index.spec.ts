import { getDataCy, hexToRgb } from '.';
import { expect } from '@jest/globals';

describe('hexToRgb', () => {
  it('converts a hex code to its rgb equivalent', () => {
    expect(hexToRgb('FFFFFF')).toEqual('rgb(255, 255, 255)');
  });
});

describe('getDataCy', () => {
  it('renders the full getter for data-cy tags', () => {
    expect(getDataCy('some-data-cy-tag')).toEqual(`[data-cy="some-data-cy-tag"]`);
  });
});
