import {Component, OnInit, OnDestroy} from '@angular/core';

import {AuthService} from '../../../core/services/auth.service';
import {DocumentService} from "../../../services/document.service";
import {AuditService} from "../../../services/audit.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {
  tags: any;
  tagsKeys: any;

  // Count variables
  primaryResponsibilities: number;
  inbox: number;
  task: number;
  audits: number;

  // Document status
  draft: number;
  pendingApproval: number;
  approved: number;

  //Subscriptions
  documentSubscription: any;

  constructor(private auth: AuthService, private documentService: DocumentService, private auditService: AuditService) {
    this.primaryResponsibilities = 0;
    this.inbox = 0;
    this.task = 0;
    this.audits = 0;

    //Count of documents by status
    this.draft = 0;
    this.pendingApproval = 0;
    this.approved = 0;
  }

  ngOnInit() {
    this.syncData(this.documentService.findAll());
    this.documentSubscription = this.documentService.getDocuments().subscribe((documents) => {
      this.syncData(documents);
    });
  }

  private syncData(documents) {
    this.inbox = documents.length;
    this.primaryResponsibilities = this.documentService.getMyPrimaryResponsabilities(this.auth.getUser()).length;
    this.tags = this.documentService.getTags();
    this.tagsKeys = Object.keys(this.tags);

    //Count of documents by status
    this.draft = this.documentService.getDraftDocuments().length;
    this.pendingApproval = this.documentService.getPending_ApprovalDocuments().length;
    this.approved = this.documentService.getApprovedDocuments().length;

    //audits
    this.audits = this.auditService.getAudits().length;
  }

  ngOnDestroy() {
    this.documentSubscription.unsubscribe();
  }
}
