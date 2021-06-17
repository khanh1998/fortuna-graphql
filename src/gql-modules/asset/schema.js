import { gql } from 'apollo-server-core';
import { readFileSync } from 'fs';
import path from 'path';

const assetSchema = readFileSync(path.join(__dirname, 'asset.gql'), {
  encoding: 'utf-8',
});

export const schema = gql`
  extend type Query {
    Assets: [Asset]
  }
`;
