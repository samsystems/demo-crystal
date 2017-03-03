import {Injectable} from '@angular/core';
import * as RxDB from 'rxdb';
import {RxDatabase} from 'rxdb';
import * as uuid from 'uuid';

//schemas
import {TagSchema} from "../schemas/tag";
import {RankSchema} from "../schemas/rank";
import {UserSchema} from "../schemas/user";
import {DocumentSchema} from "../schemas/document";

RxDB.plugin(require('pouchdb-adapter-idb'));

const collections = [
  {
    name: 'tags',
    schema: TagSchema
  },
  {
    name: 'ranks',
    schema: RankSchema
  },
  {
    name: 'users',
    schema: UserSchema
  },
  {
    name: 'documents',
    schema: DocumentSchema
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
    db.waitForLeadership();

    // create collections
    await Promise.all(collections.map(schema => db.collection(schema)));

    this.fixtures(db);

    return db;
  }

  private async fixtures(db) {
    const tagCollection = await db.collection('tags');
    const rankCollection = await db.collection('ranks');
    const usersCollection = await db.collection('users');
    //tags
    await tagCollection.insert({
      id: uuid.v4(),
      name: "Tenders"
    });
    //ranks
    await rankCollection.insert({
      code: "CAP",
      name: "Captain"
    });
    await rankCollection.insert({
      code: "SA",
      name: "Sailor"
    });
    await rankCollection.insert({
      code: "DO",
      name: "Deck officer"
    });
    //user
    await usersCollection.insert({
      username: "captain",
      firstName: "Jhon",
      lastName: "Doe",
      avatar: "/assets/img/a1.jpg",
      rank: {
        code: "CAP",
        name: "Captain"
      }
    });
    await usersCollection.insert({
      username: "sailor",
      firstName: "Jane",
      lastName: "Doe",
      avatar: "/assets/img/a3.jpg",
      rank: {
        code: "SA",
        name: "Sailor"
      }
    });
    await usersCollection.insert({
      username: "officer",
      firstName: "Bruce",
      lastName: "Warren",
      avatar: "/assets/img/a2.jpg",
      rank: {
        code: "DO",
        name: "Deck officer"
      }
    });
  }

  get(): Promise<RxDatabase> {
    if (DatabaseService.dbPromise)
      return DatabaseService.dbPromise;

    // create database
    DatabaseService.dbPromise = this._create();
    return DatabaseService.dbPromise;
  }
}
