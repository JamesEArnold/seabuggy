import { expect } from '@jest/globals';
import { hexToRgb } from '.';

describe('hexToRgb', () => {
  it('converts a hex code to its rgb equivalent', () => {
    expect(hexToRgb('FFFFFF')).toEqual('rgb(255, 255, 255)');
  });
});
