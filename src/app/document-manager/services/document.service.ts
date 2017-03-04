import {Injectable} from '@angular/core';
import * as uuid from 'uuid';
import {Document} from '../../models/document';
import {DocumentLog} from '../../models/document-log';

@Injectable()
export class DocumentService {

  protected documents: Document[] = [];
  protected documentLogs: DocumentLog[] = [];

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
    let documentLogs = JSON.parse(localStorage.getItem('document-logs'));
    if(documentLogs) {
      this.documentLogs = documentLogs;
    }
  }

  createDoc(doc: Document) {
    this.documents.push(doc);
    localStorage.setItem('documents', JSON.stringify(this.documents));
  }

  createDocumentLog(documentLog: DocumentLog) {
    this.documentLogs.push(documentLog);
    console.log(this.documentLogs);
    localStorage.setItem('document-logs', JSON.stringify(this.documentLogs))
  }

  findById(id): Document {
    return this.documents.find((doc) => doc.id === id);
  }

  findDocumentLogById(id): Array<DocumentLog> {
    return this.documentLogs.filter((doc) => doc.document.id = id);
  }

  findAll(): Array<Document> {
    return this.documents;
  }

}
