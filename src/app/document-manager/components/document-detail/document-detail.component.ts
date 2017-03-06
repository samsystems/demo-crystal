import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DocumentLog} from '../../../models/document-log';
import {Document, Status} from '../../../models/document';
import {Release} from '../../../models/release';
import {DocumentService} from '../../../services/document.service';
import * as uuid from 'uuid';
import {AuthService} from '../../../core/services/auth.service';

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html'
})
export class DocumentDetailComponent implements OnInit {
  states: Array<DocumentLog>;
  releases: Array<Release>;
  document: Document;
  documentContent: string;
  changes: string;
  btnText: string = '';
  id: string;

  constructor(private documentService: DocumentService,
              private route: ActivatedRoute,
              private auth: AuthService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.syncData();
    });
    this.documentService.getDocuments().subscribe(() => {
      this.syncData()
    });
    this.documentService.getDocumentLogs().subscribe(() => {
      this.states = this.documentService.findDocumentLogById(this.id);
      this.states.reverse();
    })
  }

  syncData() {
    this.document = this.documentService.findById(this.id);
    this.documentContent = this.document.content;
    this.states = this.documentService.findDocumentLogById(this.id);
    this.releases = this.documentService.findDocumentReleaseById(this.id);
    this.changeBtnText();
    this.states.reverse();
  }

  changeStatus() {
    switch (this.document.status) {
      case 'Draft':
        this.documentService.changeDocumentStatus(Status[Status.Pending], this.document.id);
        this.changeBtnText();
        break;
      case 'Pending':
        this.documentService.changeDocumentStatus(Status[Status.Approved], this.document.id);
        this.changeBtnText();
        break;
      case 'Approved':
        this.documentService.changeDocumentStatus(Status[Status.Published], this.document.id);
        this.documentService.createDocumentRelease(this.document.id);
        this.changeBtnText();
        break;
      case 'Published':
        this.documentService.changeDocumentStatus(Status[Status.Permanent], this.document.id);
        this.changeBtnText();
        break;
      default:
        break;
    }
  }

  changeBtnText() {
    switch (this.document.status) {
      case 'Draft':
        this.btnText = 'Send to Review';
        break;
      case 'Pending':
        this.btnText = 'Check as Approved';
        break;
      case 'Approved':
        this.btnText = 'Publish';
        break;
      case 'Published':
        this.btnText = 'Check as Permanent';
        break;
      default:
        break;
    }
  }

  updateDocumentContent() {
    const documentLog: DocumentLog = {
      id: uuid.v4(),
      user: this.auth.getUser(),
      document: this.document,
      changes: this.changes,
      date: Date.now()
    };
    this.documentService.updateDoc(this.document, documentLog);
    this.changes = null;
  }
}
