export const assetResolver = {
  Query: {
    Assets: (root, {}, { dataSources }) => {
      return dataSources.fortunaAPI.getAssets();
    },
  },
};
