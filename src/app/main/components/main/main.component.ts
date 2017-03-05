import {Component, OnInit, OnDestroy} from '@angular/core';

import {AuthService} from '../../../core/services/auth.service';
import {DocumentService} from "../../../services/document.service";
import {Status} from "../../../models/document";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
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

  sub: any;

  constructor(private auth: AuthService, private documentService: DocumentService) {
    this.primaryResponsibilities = 0;
    this.inbox = 0;
    this.task = 0;
    this.audits = 0;

    //Count of documents by status
    this.pendingApproval = 0;
    this.draft = 0;
    this.approved = 0;
  }

  ngOnInit() {
    this.documentService.getDocuments().subscribe((documents)=>{
      this.inbox = documents.length;
      this.primaryResponsibilities = this.documentService.getMyPrimaryResponsabilities(this.auth.getUser()).length;
      this.tags = this.documentService.getTags();
      this.tagsKeys = Object.keys(this.tags);

      //Count of documents by status
      this.draft = this.documentService.getDraftDocuments().length;
      this.pendingApproval = this.documentService.getPending_ApprovalDocuments().length;
      this.approved = this.documentService.getApprovedDocuments().length;
    });
  }
}
