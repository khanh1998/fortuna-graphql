export const transactionResolver = {
  Query: {
    transactions: async (root, { asset }, { dataSources }) => {
      return dataSources.fortunaAPI.getTransactions(asset);
    },
  },
  Mutation: {
    createTransaction: (root, { input }, { dataSources }) => {
      return dataSources.fortunaAPI.postTransaction({ ...input });
    },
    updateTransaction: (root, { id, input }, { dataSources }) => {
      return dataSources.fortunaAPI.putTransaction(id, { ...input })
    }
  },
};
