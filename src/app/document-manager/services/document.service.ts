import {Injectable} from '@angular/core';
import * as uuid from 'uuid';
import {Document} from '../../models/document';
import {DocumentLog} from '../../models/document-log';
import {AuthService} from '../../core/services/auth.service';
import {Release} from '../../models/release';

@Injectable()
export class DocumentService {

  protected documents: Document[] = [];
  protected documentLogs: Array<DocumentLog> = [];
  protected documentReleases: Array<Release> = [];

  constructor(private auth: AuthService) {
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
    let documentReleases = JSON.parse(localStorage.getItem('document-releases'));
    if(documentReleases) {
      this.documentReleases = documentReleases;
    }
  }

  createDoc(doc: Document) {
    this.documents.push(doc);
    localStorage.setItem('documents', JSON.stringify(this.documents));
  }

  changeDocumentStatus(status: string, documentID: string) {
    let document= this.findById(documentID);
    let pos = this.documents.indexOf(document);
    document.status = status;
    if(pos != -1) {
      this.documents.splice(pos, 1);
    }
    const documentLog: DocumentLog = {
      id: uuid.v4(),
      user: this.auth.getUser(),
      document: document,
      changes: 'Document change to ' + status,
      date: Date.now()
    };
    this.createDocumentLog(documentLog);
    this.createDoc(document);
  }

  removeDocument(documentID: string) {
    let document = this.findById(documentID);
    let pos = this.documents.indexOf(document);
    if(pos != -1) {
      this.documents.splice(pos, 1);
    }
    localStorage.setItem('documents', JSON.stringify(this.documents));
    return this.documents;
  }

  createDocumentLog(documentLog: DocumentLog) {
    this.documentLogs.push(documentLog);
    localStorage.setItem('document-logs', JSON.stringify(this.documentLogs))
  }

  findById(id): Document {
    return this.documents.find((doc) => doc.id === id);
  }

  findDocumentLogById(id): Array<DocumentLog> {
    return this.documentLogs.filter((doc) => doc.document.id === id);
  }

  findAll(): Array<Document> {
    return this.documents;
  }

  createDocumentRelease(documentID: string) {
    let document = this.findById(documentID);
    const documentRelease: Release = {
      id: uuid.v4(),
      document: document,
      version: document.version,
      date: Date.now()
    };
    this.documentReleases.push(documentRelease);
    localStorage.setItem('document-releases', JSON.stringify(this.documentReleases))
  }

  findDocumentReleaseById(id): Array<Release> {
    return this.documentReleases.filter((doc) => doc.document.id === id);
  }

}
