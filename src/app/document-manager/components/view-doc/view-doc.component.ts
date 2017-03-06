import {Component, OnInit} from '@angular/core';
import {DocumentService} from '../../../services/document.service';
import {AuthService} from '../../../core/services/auth.service';
import {Document, Status} from '../../../models/document';
import * as _ from 'lodash';
import {DocumentLog} from '../../../models/document-log';
import * as moment from 'moment';

@Component({
  selector: 'app-view-doc',
  templateUrl: './view-doc.component.html',
  styleUrls: ['./view-doc.component.css']
})
export class ViewDocComponent implements OnInit {

  documents: Document[];

  constructor(private documentService: DocumentService, private auth: AuthService) {
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
    })
  }

}
