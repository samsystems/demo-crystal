import {Action} from '@ngrx/store';
import {type} from '../../shared';
import {ICredential} from '../../models/credentials';
import {User} from '../../models/user';


export const ActionTypes = {
  LOGIN: type('[Auth] Login user'),
  LOGOUT: type('[Auth] Logout user'),
  LOGIN_FAIL: type('[Auth] Login user fail'),
  LOGOUT_DONE: type('[Auth] Logout Success'),
  AUTHENTICATE: type('[Auth] Authenticate'),
  AUTHENTICATED: type('[Auth] Login user Success'),
  EXPIRED_TOKEN: type('[Auth] Expired user session')
};

export class LoginAction implements Action {
  type = ActionTypes.LOGIN;

  constructor(public payload: ICredential) {
  }
}

export class LogoutAction implements Action {
  type = ActionTypes.LOGOUT;

  constructor() {
  }
}

export class LogoutDoneAction implements Action {
  type = ActionTypes.LOGOUT_DONE;

  constructor() {
  }
}

export class LoginFailAction implements Action {
  type = ActionTypes.LOGIN_FAIL;

  constructor(public payload: any) {
  }
}

export class AuthenticateAction implements Action {
  type = ActionTypes.AUTHENTICATE;

  constructor(public payload: User) {
  }
}

export class AuthenticatedAction implements Action {
  type = ActionTypes.AUTHENTICATED;

  constructor() {
  }
}

export class ExpirateSessionAction implements Action {
  type = ActionTypes.EXPIRED_TOKEN;

  constructor() {
  }
}

export type Actions
  = LoginAction
  | LogoutAction
  | LogoutDoneAction
  | LoginFailAction
  | AuthenticateAction
  | AuthenticatedAction
  | ExpirateSessionAction
