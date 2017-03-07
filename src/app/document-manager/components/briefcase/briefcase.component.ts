import {Component, OnInit} from '@angular/core';
import {Document} from '../../../models/document';
import {DocumentService} from '../../../services/document.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-briefcase',
  templateUrl: 'briefcase.component.html',
  styleUrls: ['briefcase.component.css']
})
export class BriefcaseComponent implements OnInit {

  private _documents: Array<Document>;
  private _tags: any;
  private _tagsKey: any;
  private _ranks: any;
  private _ranksKey: any;

  private _ranksSecondary: any;
  private _ranksKeySecondary: any;

  constructor(private documentService: DocumentService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this._documents = this.documentService.findAll();
    this._tags = this.documentService.getTags(this._documents);
    this._ranks = this.documentService.getDocumentsRanks(true,this._documents);
    this._ranksSecondary = this.documentService.getDocumentsRanks(false, this._documents);

    this._tagsKey = Object.keys(this._tags);
    this._ranksKey = Object.keys(this._ranks);
    this._ranksKeySecondary = Object.keys(this._ranksSecondary);

    this.route.queryParams.subscribe(params => {
      if(params['tag']) {
        this._documents = this.documentService.getDocumentsByTag(params['tag']);
      }else if(params['rank']) {
        this._documents = this.documentService.getDocumentsByRankId(params['rank']);
      }
    });
  }


  get documents(): Array<Document> {
    return this._documents;
  }

  set documents(value: Array<Document>) {
    this._documents = value;
  }

  get tags(): any {
    return this._tags;
  }

  set tags(value: any) {
    this._tags = value;
  }

  get tagsKey(): any {
    return this._tagsKey;
  }

  set tagsKey(value: any) {
    this._tagsKey = value;
  }

  get ranks(): any {
    return this._ranks;
  }

  get ranksKey(): any {
    return this._ranksKey;
  }

  get ranksSecondary(): any {
    return this._ranksSecondary;
  }

  get ranksKeySecondary(): any {
    return this._ranksKeySecondary;
  }

  removeDocument(documentID: string) {
    this.documents = this.documentService.removeDocument(documentID);
  }
}
