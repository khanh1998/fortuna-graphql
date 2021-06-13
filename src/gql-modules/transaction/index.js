import { createModule } from 'graphql-modules';
import { schema } from './schema.js';
import { transactionResolver } from './resolver.js';

export const TransactionModule = createModule({
  id: 'transaction-module',
  dirname: __dirname,
  typeDefs: [schema],
  resolvers: [transactionResolver],
});
