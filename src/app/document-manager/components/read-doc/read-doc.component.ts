import {Component, OnInit} from '@angular/core';
import {DocumentService} from '../../../services/document.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Document, Status} from '../../../models/document';
import {DocumentLog} from '../../../models/document-log';

@Component({
  selector: 'app-read-doc',
  templateUrl: './read-doc.component.html',
  styleUrls: ['./read-doc.component.css']
})
export class ReadDocComponent implements OnInit {
  document: Document;
  previousDocument: Document;
  showChange: boolean = false;

  constructor(private documentService: DocumentService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.syncData(params['id']);
    });
  }

  syncData(id) {
    const document = this.documentService.findById(id);
    if (!document) {
      const log: DocumentLog = this.documentService.getDocumentLogById(id);
      this.document = log ? log.document : null;
    } else if (document.status == Status[Status.Published] || document.status == Status[Status.Permanent]) {
      this.document = document;
      this.previousDocument = this.documentService.getPreviousVersion(this.document);
    } else {
      this.goBacK();
    }
  }

  goBacK() {
    this.location.back();
  }

  showChanges() {
    if(!this.showChange) {
      this.showChange = true;
    }
    else {
      this.showChange = false;
    }
  }
}
