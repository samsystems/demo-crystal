import {Component, OnInit} from '@angular/core';
import {DocumentService} from '../../../services/document.service';
import {Document, Status} from '../../../models/document';
import * as _ from 'lodash';
import {DocumentLog} from '../../../models/document-log';
import * as moment from 'moment';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-doc',
  templateUrl: './view-doc.component.html',
  styleUrls: ['./view-doc.component.css']
})
export class ViewDocComponent implements OnInit {

  documents: Document[];
  private tags: any;
  private tagsKey: any;

  private ranks: any;
  private ranksKey: any;

  private ranksSecondary: any;
  private ranksKeySecondary: any;


  constructor(private documentService: DocumentService, private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.syncData();

    this.tags = this.documentService.getTags(this.documents);
    this.ranks = this.documentService.getDocumentsRanks(true, this.documents);
    this.ranksSecondary = this.documentService.getDocumentsRanks(false, this.documents);

    this.tagsKey = Object.keys(this.tags);
    this.ranksKey = Object.keys(this.ranks);
    this.ranksKeySecondary = Object.keys(this.ranksSecondary);

    this.route.queryParams.subscribe(params => {
      this.syncData();

      if(params['tag']) {
        this.documents = this.documentService.getDocumentsByTag(params['tag'], this.documents);
      } else if (params['rank']) {
        this.documents = this.documentService.getDocumentsByRankId(params['rank'],this.documents);
      }
    });
  }

  syncData(){
    const publishedDocs = this.documentService.getPublishedDocuments();
    const permanentDocs = this.documentService.getPermanentDocuments();
    this.documents = publishedDocs.concat(permanentDocs);
    const logs = this.documentService.findDocumentLogs();
    let docs = {};
    _.each(logs, (v: DocumentLog) => {
      const doc = _.cloneDeep(v.document);
      if (doc.status == Status[Status.Published] || doc.status == Status[Status.Permanent]) {
        const exist = _.find(this.documents, {'id': doc.id});
        if (!exist) {
          doc['logRef'] = v.id;
          if (docs[doc.id]) {
            if (moment(docs[doc.id].updated).isBefore(doc.updated)) {
              docs[doc.id] = doc;
            }
          } else {
            docs[doc.id] = doc;
          }
        }
      }
    });
    _.each(docs, (v: Document) => {
      this.documents.push(_.extend(v,{
        id: v['logRef']
      }));
    });
  }

}
