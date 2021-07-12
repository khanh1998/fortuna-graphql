import { RESTDataSource } from 'apollo-datasource-rest';

export class FortunaAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.DATASOURCE;
  }
  willSendRequest(request) {
    request.headers.set('Authorization', `${this.context.token}`);
  }

  async getUser() {
    return this.get(`user`);
  }

  async postUser(user) {
    return this.post('user', user);
  }

  async putUser(user) {
    return this.put(`user`, user);
  }

  async getTransactions(asset) {
    return this.get(`transaction?&asset=${asset}`);
  }

  async postTransaction(transactionInput) {
    return this.post('transaction', transactionInput);
  }

  async putTransaction(id, input) {
    return this.put(`transaction/${id}`, input);
  }

  async getAssets() {
    return this.get('asset');
  }

  async putAsset(id, input) {
    return this.put(`asset/${id}`, input);
  }

  async postAsset(assetInput) {
    return this.post('asset', assetInput);
  }

  async getAssetGroups() {
    return this.get('asset-group');
  }

  async postAssetGroup(input) {
    return this.post('asset-group', input);
  }

  async putAssetGroup(id, input) {
    return this.put(`asset-group/${id}`, input);
  }

  async deleteAssetGroup(id) {
    return this.delete(`asset-group/${id}`);
  }
}
