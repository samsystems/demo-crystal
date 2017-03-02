import {Injectable} from '@angular/core';
import * as RxDB from 'rxdb';
import {RxDatabase} from 'rxdb';

RxDB.plugin(require('pouchdb-adapter-idb'));

const RegulationSchema = {
  "title": "Regulation schema",
  "version": 1,
  "description": "describes a simple hero",
  "type": "object",
  "properties": {
    "status": {
      "type": "string",
      "primary": true
    },
    "version": {
      "type": "string"
    },
    "isFile": {
      "type": "boolean"
    },
    "content": {
      "type": "string"
    },
    "tags": {
      "type": "array",
      "uniqueItems": true,
      "items": {
        "type": "object",
        "properties": {
          "type": "string"
        }
      }
    },
    "owner": {
      "type": "object"
    },
    "users": {
      "type": "array",
      "uniqueItems": true,
      "items": {
        "type": "object"
      }
    },
    "ranks": {
      "type": "array",
      "uniqueItems": true,
      "items": {
        "type": "object"
      }
    }
  },
  "required": ["status"]
};

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

    await db.collection({
      name: 'regulations',
      schema: RegulationSchema
    });

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
