import {Component, OnInit} from '@angular/core';
import {DocumentService} from '../../../services/document.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Document} from '../../../models/document';

@Component({
  selector: 'app-read-doc',
  templateUrl: './read-doc.component.html',
  styleUrls: ['./read-doc.component.css']
})
export class ReadDocComponent implements OnInit {
  document: Document;

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
    this.document = this.documentService.findById(id);
  }

  goBacK() {
    this.location.back();
  }
}
