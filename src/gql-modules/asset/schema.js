import { gql } from 'apollo-server-core';
import { readFileSync } from 'fs';
import path from 'path';

const assetSchema = readFileSync(path.join(__dirname, 'asset.gql'), {
  encoding: 'utf-8',
});

export const schema = gql`
  ${assetSchema}

  extend type Query {
    assets: [Asset]
  }
  extend type Mutation {
    createAsset(input: AssetInput): Asset
    updateAsset(id: ID, input: AssetInput): Asset
  }
`;
