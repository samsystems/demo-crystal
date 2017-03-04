import {User} from './user';
import {Tag} from './tag';
import {Rank} from './rank';

export enum Status{
  "Draft",
  "Pending",
  "Approved",
  "Published",
  "Permanent"
}

export interface Document {
  id: string;
  name: string;
  status: string;
  version: string;
  isFile: boolean;
  content?: string;
  date: string;
  updated: string;
  comments: string;
  primary: Rank[];
  secundary: Rank[];
  tags?: string[];
  owner: User;
  users?: User[];
}
