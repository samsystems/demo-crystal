import {User} from './user';
export enum Status{
  "In_Progress",
  "Pending Approval",
  "Approved"
}

export interface Audit {
  title: string;
  type: string;
  status: Status;
  location: string;
  date: string;
  auditors: User[],
  summary: string;
  form?: Object[];
  regulation?: Object;
}
