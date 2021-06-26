import { ApolloServer } from 'apollo-server';
import { application } from './gql-modules';
import { FortunaAPI } from './configuration/datasource.js';

const schema = application.createSchemaForApollo();
const server = new ApolloServer({
  schema,
  dataSources: () => {
    return {
      fortunaAPI: new FortunaAPI(),
    };
  },
  context: ({ req }) => {
    const token = req.headers.authorization || '';
    return {
      token,
    };
  },
});
server.listen().then(({ url }) => {
  console.log(`graphql server is ready at ${url}`);
});
