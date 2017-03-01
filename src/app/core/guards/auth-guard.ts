import {Injectable} from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild
}from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {State, isAuthenticated} from '../reducers';


@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private store: Store<State>, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return true;
    /*return this.store.select(isAuthenticated)
      .do((login) => {
        if (!login)
          this.router.navigateByUrl('/security/login');
      });*/
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.canActivate(route, state);
  }
}

