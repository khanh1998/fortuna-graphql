import { gql } from 'apollo-server';
import { readFileSync } from 'fs';
import path from 'path';

const transactionSchemaString = readFileSync(
  path.join(__dirname, 'transaction.gql'),
  { encoding: 'utf-8' }
).toString();
const userSchemaString = readFileSync(
  path.join(__dirname, '../user/user.gql'),
  {
    encoding: 'utf-8',
  }
).toString();
const assetSchemaString = readFileSync(
  path.join(__dirname, '../asset/asset.gql'),
  {
    encoding: 'utf-8',
  }
).toString();
export const schema = gql`
  ${transactionSchemaString}

  extend type Query {
    transactions(asset: ID): [Transaction]
  }

  extend type Mutation {
    createTransaction(input: TransactionInput): Transaction
    updateTransaction(id: ID, input: TransactionUpdate): Transaction
  }
`;
