import * as _ from 'lodash';

export class User {
  username: string;

  firstName: string;

  lastName: string;

  avatar: string;

  constructor(_username) {
    this.username = _username;

    const names = ['Yoan', 'Yuri', 'Osiel', 'Joe', 'Pedro', 'Ramon', 'Hector'];
    const lastHames = ['Doe', 'Warren', 'Dicaprio', 'Freeman', 'Fowler', 'Evans', 'Avila'];

    this.firstName = names[_.random(0, 6)];
    this.lastName = lastHames[_.random(0, 6)];

    const avatarPos = _.random(1, 8);
    this.avatar = `assets/img/a${avatarPos}.jpg`;
  }
}
