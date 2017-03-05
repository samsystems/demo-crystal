import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DocumentService} from "../../../services/document.service";

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit , OnDestroy{
  title: string;
  documents: any;
  subQueryParams:any;
  tag: string;

  constructor(private documentService: DocumentService, private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.title = 'Inbox';

    this.subQueryParams = this.route.queryParams.subscribe(params => {
      this.tag = null;

      if (params['tag']) {
        this.getDocumentsByTag(params['tag']);
      } else {
        // Defaults to -1 if no query param provided.
        let status = params['status'] || -1;
        this.getDocumentByStatus(+status);
      }
    });
  }

  getDocumentByStatus(status: number):void{

    //Setting title
    switch(status){
      case -1:
        this.title = 'Inbox';
        break;
      case 0:
        this.title = 'Draft Documents';
        break;
      case 1:
        this.title = 'Pending Approval Documents';
        break;
      case 2:
        this.title = 'Approved Documents';
        break
    }

    this.documents = this.documentService.getDocumentsByStatus(status);
  }

  getDocumentsByTag(tag: string): void {
    this.tag = tag;
    this.title = 'Documents with tag';
    this.documents = this.documentService.getDocumentsByTag(tag)
  }

  ngOnDestroy() {
    this.subQueryParams.unsubscribe();
  }

}
