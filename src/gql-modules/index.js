import { UserModule } from './user';
import { TransactionModule } from './transaction';
import { createApplication } from 'graphql-modules';
import { AssetModule } from './asset';

export const application = createApplication({
  modules: [UserModule, TransactionModule, AssetModule],
});
