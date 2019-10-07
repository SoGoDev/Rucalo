import {DbClient} from '../Framework/MongoClient';

class MongoRepository {

  private client;

  initRepo(collection, dbName, url) {
    this.client = new DbClient({dbName, collection, url})
  }

  get(options){
    return this.client.find(options)
  }


}

export default new MongoRepository();