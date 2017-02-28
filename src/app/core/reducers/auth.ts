import * as auth from '../actions/auth';
import {User} from '../../models/user';

export interface State {
  authenticated: boolean;
  authenticating: boolean;
  errors: String[];
  user: User;
}

const initialState: State = {
  authenticated: false,
  authenticating: false,
  errors: [],
  user: null
};

export function reducer(state = initialState, action: auth.Actions): State {
  switch (action.type) {

    case auth.ActionTypes.LOGIN_FAIL: {
      const errors = action['payload'];
      return Object.assign({}, state, {
        errors: errors
      });
    }

    case auth.ActionTypes.AUTHENTICATE: {
      const user = action['payload'];
      return Object.assign({}, initialState, {
        authenticated: true,
        user: user
      });
    }

    case auth.ActionTypes.LOGOUT_DONE: {
      return Object.assign({}, initialState);
    }

    default: {
      return state;
    }
  }
}

export const isAuthenticated = (state: State) => state.authenticated;

export const isAuthenticating = (state: State) => state.authenticating;

export const getErrors = (state: State) => state.errors;

export const getUser = (state: State) => state.user;
