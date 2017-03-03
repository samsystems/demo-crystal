import * as _ from 'lodash';
import {Rank} from './rank';

export class User {
  private _username: string;
  private _firstName: string;
  private _lastName: string;
  private _avatar: string;
  private _rank: Rank;

  constructor(_username) {
    this._username = _username;

    const names = ['Yoan', 'Yuri', 'Osiel', 'Joe', 'Pedro', 'Ramon', 'Hector'];
    const lastHames = ['Doe', 'Warren', 'Dicaprio', 'Freeman', 'Fowler', 'Evans', 'Avila'];

    this._firstName = names[_.random(0, 6)];
    this._lastName = lastHames[_.random(0, 6)];

    const avatarPos = _.random(1, 8);
    this._avatar = `/assets/img/a${avatarPos}.jpg`;
  }


  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get avatar(): string {
    return this._avatar;
  }

  set avatar(value: string) {
    this._avatar = value;
  }

  get rank(): Rank {
    return this._rank;
  }

  set rank(value: Rank) {
    this._rank = value;
  }
}
