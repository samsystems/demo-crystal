import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';
import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import * as auth from '../actions/auth';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {ICredential} from '../../models/credentials';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions,
              private authService: AuthService,
              private router: Router) {
  }

  @Effect()
  login$: Observable<Action> = this.actions$
    .ofType(auth.ActionTypes.LOGIN)
    .map((action: auth.LoginAction) => action.payload)
    .map((credentials: ICredential) => {
      return new auth.AuthenticateAction(this.authService.authenticate(credentials));
    });


  @Effect()
  logout$: Observable<Action> = this.actions$
    .ofType(auth.ActionTypes.LOGOUT)
    .map(() => {
      this.authService.logout();
      return new auth.LogoutDoneAction();
    });

  @Effect()
  authenticate$: Observable<Action> = this.actions$
    .ofType(auth.ActionTypes.AUTHENTICATE)
    .map(() => {
      this.router.navigateByUrl('');
      return new auth.AuthenticatedAction();
    });
}
