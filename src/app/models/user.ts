import {Rank} from './rank';

export interface User {
  username: string;

  firstName: string;

  lastName: string;

  avatar: string;

  login: boolean;

  isAuditor: boolean;

  rank?: Rank;
}
