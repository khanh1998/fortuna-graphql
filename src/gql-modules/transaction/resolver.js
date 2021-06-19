export const transactionResolver = {
  Query: {
    Transactions: async (root, { user, asset }, { dataSources }) => {
      return dataSources.fortunaAPI.getTransactions(user, asset);
    },
  },
  Mutation: {
    createTransaction: (root, { input }, { dataSources }) => {
      return dataSources.fortunaAPI.postTransaction({ ...input });
    },
  },
};
