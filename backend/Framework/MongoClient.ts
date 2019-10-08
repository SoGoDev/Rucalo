interface optionsInterface {
  readonly dbName: string,
  readonly collection: string,
  readonly url: string,
}

interface findOptions extends optionsInterface {
  readonly aggregation?: object | [object]
}

interface addOptions extends optionsInterface {
  readonly data?: object | [object],
}

interface updateOptions extends optionsInterface {
  readonly data?: object | [object],
  readonly aggregation?: object | [object]
}

interface deleteOptions extends optionsInterface {
  aggregation?: object | [object]
}

import {MongoClient} from 'mongodb';

export class DbClient {

  readonly options = {
    dbName: '',
    collection: '',
    url: '',
    data: {},
    aggregation: {},
  };
  private shots: number = 5;
  readonly mongoConnectRef;
  private collectionContext;
  private mongoClient;

  /**
   *
   * @param options
   * @interface optionInterface
   */
  constructor(options: optionsInterface) {
    this.options = {...this.options, ...options};
    this.mongoConnectRef = this.connectToMongo;
  }

  private compactDbUrl() {
    return (`${this.options.url}/${this.options.dbName}`);
  }

  /**
   * Connect to mongo server
   * @param callback
   */
  private connectToMongo(callback) {
    return MongoClient(this.compactDbUrl(), {useNewUrlParser: true, useUnifiedTopology: true}).connect(callback);
  }

  /**
   * Connect to exact DataBase
   * @return Promise
   */
  private connectToDataBase(): Promise<{}> {
    return new Promise((resolve, rejects) => {
      this.mongoConnectRef((err, client) => {
        if (err) return rejects(err);
        this.mongoClient = client;
        resolve(client.db(this.options.dbName));
      });
    });
  }

  /**
   *
   * @param collectionName
   * @return Promise
   * Connect to DataBase`s collection
   */
  private connectToCollection(collectionName = this.options.collection) {
    return this.connectToDataBase()
      .then(db => this.collectionContext = db['collection'](collectionName))
      .catch(err => {
        if(this.shots <= 0) return err;
        console.log(err);
        this.mongoClient.close();
        this.shots =- 1;
        return this.connectToCollection(collectionName);
      });
  }

  /**
   *
   * @param err => error message after manipulating with document
   * @param result => document or success message
   * @param resolve => Promise  on success method
   * @param reject => Promise  on fail method
   * @return Promise.resolve | Promise.reject
   */
  private collectionCallback({err, result}, {resolve, reject}) {
    return err ? reject(err) : resolve(result);
  }

  /**
   *
   * @param promise
   */
  private closeMongoConnectionAfterManipulation(promise: Promise<{}>): Promise<{}> {
    return promise.then(data => {
      this.mongoClient.close();
      return data;
    });
  }

  /**
   *
   * @param methodName
   * @param queryField
   */
  private buildMethod(methodName, queryField) {
    return this.connectToCollection()
      .then(collection => Array.isArray(queryField) ? collection[`${methodName}Many`] : collection[`${methodName}One`])
      .then(method => method.bind(this.collectionContext));
  }

  /**
   * @param aggregation
   * @return Promise
   */
  private find(aggregation = this.options.aggregation) {
    return this.connectToCollection()
      .then(collection => new Promise((resolve, reject) => {
          collection.find(aggregation).toArray(
            (err, result) => this.collectionCallback({err, result}, {resolve, reject}))
        })
      );
  }

  /**
   * @param data
   * @return Promise
   */
  private add(data = this.options.data) {
    return this.closeMongoConnectionAfterManipulation(
      this.buildMethod('insert', data)
        .then(method => new Promise((resolve, reject) => {
            method(data, (err, result) => this.collectionCallback({err, result}, {resolve, reject}))
          }
        ))
    );
  }

  /**
   * @param query
   * @param data
   * @return Promise
   */
  private update(query = this.options.aggregation, data = this.options.data) {
    return this.closeMongoConnectionAfterManipulation(
      this.buildMethod('update', data)
        .then(method => new Promise((resolve, reject) => {
            method(
              query,
              Array.isArray(data) ? data[0] : data,
              (err, result) => this.collectionCallback({err, result}, {resolve, reject}))
          }
        ))
    );
  }

  /**
   * @param query
   * @return Promise
   */
  private delete(query = this.options.aggregation) {
    return this.closeMongoConnectionAfterManipulation(
      this.buildMethod('delete', query)
        .then(method => new Promise((resolve, reject) => {
            method(query, (err, result) => this.collectionCallback({err, result}, {resolve, reject}))
          }
        ))
    );
  }

  /**
   *
   * @param collectionName
   */
  private createCollection(collectionName = this.options.collection) {
    return this.closeMongoConnectionAfterManipulation(
      this.connectToDataBase()
        .then(db => new Promise((resolve, reject) => {
            db['createCollection'](collectionName, (err, res) => err ? reject(err) : resolve(res))
          })
        )
    );
  }

  /**
   *
   * @param collectionName
   */
  private dropCollection(collectionName = this.options.collection) {
    return this.closeMongoConnectionAfterManipulation(
      this.connectToCollection()
        .then(collection => new Promise((resolve, reject) => {
            collection.drop((err, ok) => err ? reject(err) : resolve(ok))
          })
        )
    );
  }


  /**
   *
   * @param options
   */
  static find(options: findOptions): Promise<{}> {
    return new DbClient(options).find();
  }

  /**
   *
   * @param options
   */
  static add(options: addOptions): Promise<{}> {
    return new DbClient(options).add();
  }

  /**
   *
   * @param options
   */
  static update(options: updateOptions): Promise<{}> {
    return new DbClient(options).update();
  }

  /**
   *
   * @param options
   */
  static delete(options: deleteOptions): Promise<{}> {
    return new DbClient(options).delete();
  }

  /**
   *
   * @param options
   */
  static createCollection(options: optionsInterface) {
    return new DbClient(options).createCollection();
  }

  /**
   *
   * @param options
   */
  static dropCollection(options: optionsInterface) {
    return new DbClient(options).dropCollection();
  }
}