export const UserResolver = {
  Query: {
    User: async (root, {}, { dataSources }) => {
      return dataSources.fortunaAPI.getUser();
    },
  },
  Mutation: {
    createUser: async (root, { user }, { dataSources }) => {
      return dataSources.fortunaAPI.postUser({ ...user });
    },
    updateUser: async (root, { user }, { dataSources }) => {
      return dataSources.fortunaAPI.putUser({ ...user });
    },
  },
};
