import {createSelector} from 'reselect';
import * as formAuth from './auth';

export interface State {
  auth: formAuth.State;
}

export const reducers = {
  auth: formAuth.reducer
};

export const getAuthState = (state: State) => state.auth;

export const isAuthenticated = createSelector(getAuthState, formAuth.isAuthenticated);
export const getUser = createSelector(getAuthState, formAuth.getUser);
