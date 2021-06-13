import { UserModule } from './user';
import { TransactionModule } from './transaction';
import { createApplication } from 'graphql-modules';

export const application = createApplication({
  modules: [UserModule, TransactionModule],
});
