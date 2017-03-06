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

  constructor(private documentService: DocumentService, private route: ActivatedRoute) {
  }

  ngOnInit() {
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

    this.tags = this.documentService.getTags(this.documents);
    this.tagsKey = Object.keys(this.tags);
    this.route.queryParams.subscribe(params => {
      if(params['tag']) {
        this.documents = this.documentService.getDocumentsByTag(params['tag'], this.documents);
      }
    });
  }

}
