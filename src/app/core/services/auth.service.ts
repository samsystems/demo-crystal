import {Injectable} from '@angular/core';
import {User} from '../../models/user';
import {Router} from '@angular/router';
import {ICredential} from '../../models/credentials';
import * as _ from 'lodash';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {
  private user$ = new Subject<User>();
  currentUser: User;
  protected users: User[];

  constructor(private router: Router) {
    this.onInit();
  }

  private onInit() {
    let users: any = JSON.parse(localStorage.getItem('users'));
    if (!users) {
      users = [{
        username: "captain",
        firstName: "Jhon",
        lastName: "Doe",
        avatar: "/assets/img/a1.jpg",
        login: false,
        isAuditor: true,
        rank: {
          id: "CAP",
          text: "Captain"
        }
      }, {
        username: "sailor",
        firstName: "Jane",
        lastName: "Doe",
        avatar: "/assets/img/a3.jpg",
        login: false,
        isAuditor: true,
        rank: {
          id: "QM",
          text: "Quartermaster"
        }
      }, {
        username: "officer",
        firstName: "Bruce",
        lastName: "Warren",
        login: false,
        isAuditor: true,
        avatar: "/assets/img/a2.jpg",
        rank: {
          id: "COSS",
          text: "Chief Officer Safety Security"
        }
      }];
      localStorage.setItem('users', JSON.stringify(users));
      this.onInit();
    } else {
      this.users = users;
      let index = _.findIndex(this.users, {'login': true});
      if (index >= 0) {
        this.user$.next(this.users[index]);
        this.currentUser = this.users[index];
      }
    }
    let ranks = JSON.parse(localStorage.getItem('ranks'));
    if (!ranks) {
      ranks = [{
        id: "CAP",
        text: "Captain"
      }, {
        id: "VCAP",
        text: "Vice Captain"
      }, {
        id: "COSS",
        text: "Chief Officer Safety Security"
      }, {
        id: "QM",
        text: "Quartermaster"
      }];
      localStorage.setItem('ranks', JSON.stringify(ranks));
      this.onInit();
    }
  }

  authenticate(credentials: ICredential): boolean {
    let index = _.findIndex(this.users, {'username': credentials.username});
    if (index >= 0) {
      this.users[index]['login'] = true;
      this.user$.next(this.users[index]);
      this.currentUser = this.users[index];
      localStorage.setItem('users', JSON.stringify(this.users));
      this.router.navigateByUrl('');
      return true;
    } else return false;
  }

  isLogin() {
    return _.findIndex(this.users, {'login': true}) >= 0 ? true : false;
  }

  getUsers(): User[] {
    return this.users;
  }

  getAuditors() {
    return _.filter(this.users, {'isAuditor': true});
  }

  findUser(username: string): User {
    return _.find(this.users, {'username': username});
  }

  getUser(): User {
    return this.currentUser;
  }

  getUserObservable(): Observable<User> {
    return this.user$.asObservable()
  }

  logout() {
    this.users.map((user) => {
      user['login'] = false;
    });
    this.user$.next();
    this.currentUser = null;
    this.router.navigateByUrl('/security/login');
  }
}
