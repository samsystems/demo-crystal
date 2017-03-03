import {Injectable} from '@angular/core';
import * as uuid from 'uuid';
import {Document} from '../../models/document';

@Injectable()
export class DocumentService {

  protected documents: Document[] = [];

  constructor() {
    this.onInit();
  }

  onInit() {
    let documents = JSON.parse(localStorage.getItem('documents'));
    if (documents) {
      this.documents = documents;
    }
    let tags = JSON.parse(localStorage.getItem('tags'));
    if (!tags) {
      tags = [{
        id: uuid.v4(),
        text: 'Tender'
      }];
      localStorage.setItem('tags', JSON.stringify(tags));
    }
  }

  createDoc(doc: Document) {
    this.documents.push(doc);
    localStorage.setItem('documents', JSON.stringify(this.documents));
  }
}
