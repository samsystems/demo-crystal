import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DocumentService} from "../../../services/document.service";
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit, OnDestroy {
  title: string;
  documents: any;
  subQueryParams: any;
  documentSubscription: any;
  tag: string;
  currentFilter: Object;

  constructor(private documentService: DocumentService, private route: ActivatedRoute, private auth: AuthService) {
  }

  ngOnInit() {

    this.title = 'Inbox';

    this.subQueryParams = this.route.queryParams.subscribe(params => {
      this.currentFilter = params;
      this.syncData();
    });

    this.documentSubscription = this.documentService.getDocuments().subscribe(() => {
      this.syncData();
    });
  }

  syncData() {
    this.tag = null;
    if (this.currentFilter['tag']) {
      this.getDocumentsByTag(this.currentFilter['tag']);
    } else if (this.currentFilter['documents']) {
      this.getDocumentsByAction(this.currentFilter['documents']);
    } else {
      // Defaults to -1 if no query param provided.
      let status = this.currentFilter['status'] || -1;
      this.getDocumentByStatus(+status);
    }
  }

  getDocumentByStatus(status: number): void {

    //Setting title
    switch (status) {
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

  getDocumentsByAction(action: string) {
    switch (action) {
      case 'primary-responsibilities':
        this.documents = this.documentService.getMyPrimaryResponsabilities(this.auth.getUser());
        break;
    }
  }

  ngOnDestroy() {
    this.subQueryParams.unsubscribe();
    this.documentSubscription.unsubscribe();
  }

}
