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

export class Document {
  status: Status;
  version: string;
  isFile: boolean;
  content: string;
  tags: Tag[];
  owner: User;
  users: User[];
  ranks: Rank[];
}
