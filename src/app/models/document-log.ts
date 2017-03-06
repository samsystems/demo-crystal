import {User} from './user';
import {Document} from './document';

export interface DocumentLog {
  id: string;
  user: User;
  document: Document;
  changes: string;
  date: Number;
}
