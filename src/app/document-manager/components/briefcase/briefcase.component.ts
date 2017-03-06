import { Component, OnInit } from '@angular/core';
import {DocumentService} from '../../../services/document.service';

@Component({
  selector: 'app-briefcase',
  templateUrl: 'briefcase.component.html',
  styleUrls: ['briefcase.component.css']
})
export class BriefcaseComponent implements OnInit {

  private _documents: Array<Object>;

  constructor(private documentService: DocumentService) { }

  ngOnInit() {
    this._documents = this.documentService.findAll();
  }


  get documents(): Array<Object> {
    return this._documents;
  }

  set documents(value: Array<Object>) {
    this._documents = value;
  }
}
