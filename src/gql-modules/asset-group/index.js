import { createModule } from 'graphql-modules';
import {assetGroupResolver} from './resolver.js';
import {schema} from './schema.js';

export const assetGroupModule = createModule({
	id: 'AssetGroupModule',
	typeDefs: [schema],
	resolvers: [assetGroupResolver],
	dirname: __dirname,
})