export const transactionResolver = {
  Query: {
    getTransactionsByUser: async (root, { username }, { dataSources }) => {
      return dataSources.fortunaAPI.getTransactions(username);
    },
  },
  Mutation: {
    createTransaction: (root, { input }, { dataSources }) => {
      return dataSources.fortunaAPI.postTransaction({ ...input });
    },
  },
};
