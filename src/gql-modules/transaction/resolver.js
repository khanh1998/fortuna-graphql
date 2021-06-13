export const transactionResolver = {
  Query: {
    getTransactionsByUser: async (root, { username }, { dataSources }) => {
      return dataSources.fortunaAPI.getTransactions(username);
    },
  },
  Mutation: {
    createTransaction: (root, { id }, { dataSources }) => {
      return null;
    },
  },
  Transaction: {
    id(transaction) {
      return transaction.id
    }
  }
};
