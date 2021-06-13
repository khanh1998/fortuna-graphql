import { RESTDataSource } from 'apollo-datasource-rest';

export class FortunaAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.DATASOURCE;
  }

  async getUser(username) {
    return this.get(`user/${username}`);
  }

  async postUser(user) {
    return this.post('user', user);
  }

  async getTransactions(username) {
    return this.get(`transaction`);
  }
}
