import {Component, OnInit} from '@angular/core';
import {DocumentService} from '../../../services/document.service';
import {AuthService} from '../../../core/services/auth.service';
import {Document} from '../../../models/document';

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
    this.documents = this.documentService.findAll();
  }

}
