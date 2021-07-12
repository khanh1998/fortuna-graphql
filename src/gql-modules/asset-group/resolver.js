export const assetGroupResolver = {
  Query: {
    assetGroups: (root, {}, { dataSources }) => {
      return dataSources.fortunaAPI.getAssetGroups();
    },
  },
  Mutation: {
    createAssetGroup: (root, { input }, { dataSources }) => {
      return dataSources.fortunaAPI.postAssetGroup({ ...input });
    },
    updateAssetGroup: (root, { id, input }, { dataSources }) => {
      return dataSources.fortunaAPI.putAssetGroup(id, { ...input });
    },
    deleteAssetGroup: (root, { id }, { dataSources }) => {
      return dataSources.fortunaAPI.deleteAssetGroup(id);
    },
  },
};
