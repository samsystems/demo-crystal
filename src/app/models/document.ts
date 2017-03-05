import {User} from './user';
import {Rank} from './rank';

export enum Status{
  "Draft",
  "Pending_Approval",
  "Approved",
  "Published",
  "Permanent"
}

export interface Document {
  id: string;
  name: string;
  status: Status;
  version: string;
  isFile: boolean;
  content?: string;
  date: string;
  updated: string;
  comments: string;
  primary: Rank[];
  secondary: Rank[];
  tags?: string[];
  owner: User;
  users?: User[];
}
