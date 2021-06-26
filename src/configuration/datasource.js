import { RESTDataSource } from 'apollo-datasource-rest';

export class FortunaAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.DATASOURCE;
  }
  willSendRequest(request) {
    request.headers.set('Authorization', `${this.context.token}`);
  }

  async getUser(username) {
    return this.get(`user`);
  }

  async postUser(user) {
    return this.post('user', user);
  }

  async putUser(user) {
    const { username } = user;
    return this.put(`user`, user);
  }

  async getTransactions(asset) {
    return this.get(`transaction?&asset=${asset}`);
  }

  async postTransaction(transactionInput) {
    return this.post('transaction', transactionInput);
  }

  async getAssets() {
    return this.get('asset');
  }
}
