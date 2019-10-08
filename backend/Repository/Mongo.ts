import {DbClient} from '../Framework/MongoClient';

class MongoRepository {

  private client;

  initRepo(collection, dbName, url) {
    this.client = new DbClient({dbName, collection, url})
  }

  async get(options){
    return this.client.find(options)
  }

  add(data) {
    return this.client.add(data)
  }

}

export default new MongoRepository();
