import {Document} from './document';

export interface Release {
  id: string;
  document: Document;
  date: Number;
  version: string;
}
