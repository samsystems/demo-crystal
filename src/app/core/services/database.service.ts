import {Injectable} from '@angular/core';
import * as RxDB from 'rxdb';
import {RxDatabase} from 'rxdb';

//schemas
import {TagSchema} from "../schemas/tag";
import {RankSchema} from "../schemas/rank";
import {UserSchema} from "../schemas/user";
import {RegulationSchema} from "../schemas/regulation";

RxDB.plugin(require('pouchdb-adapter-idb'));

const collections = [
  {
    name: 'tags',
    schema: TagSchema,
    sync: true
  },
  {
    name: 'ranks',
    schema: RankSchema,
    sync: true
  },
  {
    name: 'users',
    schema: UserSchema,
    sync: true
  },
  {
    name: 'regulations',
    schema: RegulationSchema,
    sync: true
  }
];

@Injectable()
export class DatabaseService {
  static dbPromise: Promise<RxDatabase> = null;

  private async _create(): Promise<RxDatabase> {
    console.log('DatabaseService: creating database..');
    const db = await RxDB.create({name: 'saftyms', adapter: 'idb', password: 'myLongAndStupidPassword'});
    console.log('DatabaseService: created database');
    window['db'] = db; // write to window for debugging

    // show leadership in title
    db.waitForLeadership()
      .then(() => {
        console.log('isLeader now');
        document.title = '♛ ' + document.title;
      });

    // create collections
    await Promise.all(collections.map(schema => db.collection(schema)));

    return db;
  }

  get(): Promise<RxDatabase> {
    if (DatabaseService.dbPromise)
      return DatabaseService.dbPromise;

    // create database
    DatabaseService.dbPromise = this._create();
    return DatabaseService.dbPromise;
  }
}
