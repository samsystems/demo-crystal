import { Component, OnInit } from '@angular/core';
import {DocumentService} from '../../services/document.service';
import { Document } from '../../../models/document';

@Component({
  selector: 'app-briefcase',
  templateUrl: 'briefcase.component.html',
  styleUrls: ['briefcase.component.css']
})
export class BriefcaseComponent implements OnInit {

  private _documents: Array<Document>;

  constructor(private documentService: DocumentService) { }

  ngOnInit() {
    this._documents = this.documentService.findAll();
  }


  get documents(): Array<Document> {
    return this._documents;
  }

  set documents(value: Array<Document>) {
    this._documents = value;
  }

  removeDocument(documentID: string) {
    this.documents = this.documentService.removeDocument(documentID);
  }
}
