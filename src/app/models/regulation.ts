import {User} from './user';
import {Tag} from './tag';
import {Rank} from './rank';

export enum Status{
  "Draft",
  "Pending Approval",
  "Approved",
  "Published",
  "Permanent"
}

export class Regulation {
  status: Status;
  version: string;
  content: string;
  tags: Tag[];
  owner: User;
  users: User[];
  ranks: Rank[];
}
