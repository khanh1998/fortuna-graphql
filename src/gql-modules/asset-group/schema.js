import { gql } from 'apollo-server';
import { readFileSync } from 'fs';
import path from 'path';

const schemaString = readFileSync(path.join(__dirname, 'assetGroup.gql'), {
  encoding: 'utf-8',
});

export const schema = gql`
	${schemaString}
  extend type Query {
    assetGroups: [AssetGroup]
  }

  extend type Mutation {
    createAssetGroup(input: AssetGroupInput): AssetGroup
    updateAssetGroup(id: ID, input: AssetGroupInput): AssetGroup
    deleteAssetGroup(id: ID): String
  }
`;
