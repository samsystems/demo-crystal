import { Component, OnInit } from '@angular/core';
import {DocumentService} from '../../services/document.service';
import {ActivatedRoute} from '@angular/router';
import {DocumentLog} from '../../../models/document-log';

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html'
})
export class DocumentDetailComponent implements OnInit {
  states: Array<DocumentLog>;
  releases: Array<Object>;
  document: Object;
  id: string;

  constructor(private documentService: DocumentService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params=>this.id=params['id']);
    this.document = this.documentService.findById(this.id);
    this.states = this.documentService.findDocumentLogById(this.id);
  }
}
