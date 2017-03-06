import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DocumentLog} from '../../../models/document-log';
import {Document, Status} from '../../../models/document';
import {Release} from '../../../models/release';
import {DocumentService} from '../../../services/document.service';

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html'
})
export class DocumentDetailComponent implements OnInit {
  states: Array<DocumentLog>;
  releases: Array<Release>;
  document: Document;
  btnText: string = '';
  id: string;

  constructor(private documentService: DocumentService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params['id']);
    this.document = this.documentService.findById(this.id);
    this.states = this.documentService.findDocumentLogById(this.id);
    this.releases = this.documentService.findDocumentReleaseById(this.id);
    this.changeBtnText();
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
}
