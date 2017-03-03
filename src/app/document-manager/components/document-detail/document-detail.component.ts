import { Component, OnInit } from '@angular/core';
import {DocumentService} from '../../services/document.service';

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html'
})
export class DocumentDetailComponent implements OnInit {
  states: Array<Object>;
  releases: Array<Object>;
  document: Object;

  constructor(private documentService: DocumentService) { }

  ngOnInit() {
    this.documentService.getStates().subscribe(
      states => this.states = states
    );
    this.documentService.getReleases().subscribe(
      releases => this.releases = releases
    );

    this.documentService.getDocuments().subscribe(
      documents => this.document = documents[0]
    );
  }

}
