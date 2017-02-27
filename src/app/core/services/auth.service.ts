import {Injectable} from '@angular/core';
import {User} from '../../models';
import {Router} from '@angular/router';
import {ICredential} from '../../models/credentials';

@Injectable()
export class AuthService {

  constructor(private router: Router) {
  }

  authenticate(crendentials: ICredential): User {
    return new User(crendentials.username);
  }

  logout() {
    this.router.navigateByUrl('/security/login');
  }
}
