export const assetResolver = {
  Query: {
    assets: (root, {}, { dataSources }) => {
      return dataSources.fortunaAPI.getAssets();
    },
  },
  Mutation: {
    createAsset: (root, { input }, { dataSources }) => {
      return dataSources.fortunaAPI.postAsset({ ...input });
    },
    updateAsset: (root, { id, input }, { dataSources }) => {
      return dataSources.fortunaAPI.putAsset(id, { ...input });
    }
  }
};
