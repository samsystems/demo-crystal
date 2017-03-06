export enum Status{
  "In_Progress",
  "Pending Approval",
  "Approved"
}

export const StatusLabels = ["In Progress", "Pending Approval", "Approved"];

export interface Audit {
  id: string;
  title: string;
  type: string;
  status: Status;
  location: string;
  startDate: string;
  endDate: string;
  auditers: Object[];
  summary: string;
  form?: Object[];
  regulation?: Object;
}
