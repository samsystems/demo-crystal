import {Component, OnInit} from '@angular/core';
import {DocumentService} from "../../../services/document.service";

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  documents: any;

  constructor(private documentService: DocumentService) {
  }

  ngOnInit() {
    this.documentService.getDocuments().subscribe((documents) => {
      this.documents = documents;
    })
  }

}
