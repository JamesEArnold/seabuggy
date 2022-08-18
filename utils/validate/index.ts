import ajv, { JSONSchemaType } from 'ajv';

interface LatestRoundData {
  _hex: string,
  _IsBigNumber: boolean,
}

const validator = new ajv();

export const LatestRoundDataSchema: JSONSchemaType<LatestRoundData> = {
  type: 'object',
  properties: {
    _hex: { type: 'string' },
    _IsBigNumber: { type: 'boolean' },
  },
  required: [ '_hex', '_IsBigNumber' ],
  additionalProperties: false,
};

export const LatestRoundDataSchemaResponse: JSONSchemaType<LatestRoundData[]> = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      _hex: { type: 'string' },
      _IsBigNumber: { type: 'boolean' },
    },
    additionalProperties: false,
    required: [ '_hex', '_IsBigNumber' ],
  },
  uniqueItems: true,
};

export const isValid = <T>(data: T, schema: JSONSchemaType<T>): data is T =>
  validator.compile<T>(schema)(data);

