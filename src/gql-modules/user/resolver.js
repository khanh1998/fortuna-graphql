export const UserResolver = {
  Query: {
    User: async (root, { id }, { dataSources }) => {
      return dataSources.fortunaAPI.getUser(id);
    },
  },
  Mutation: {
    createUser: async (root, { user }, { dataSources }) => {
      return dataSources.fortunaAPI.postUser({ ...user });
    },
  },
};
