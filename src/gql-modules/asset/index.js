import { createModule } from 'graphql-modules';
import { schema } from './schema.js';
import { assetResolver } from './resolver.js';

export const AssetModule = createModule({
  id: 'asset-module',
  dirname: __dirname,
  typeDefs: [schema],
  resolvers: [assetResolver],
});
