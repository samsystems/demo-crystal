import {Rank} from './rank';

export interface User {
  username: string;

  firstName: string;

  lastName: string;

  avatar: string;

  rank: Rank;
}
