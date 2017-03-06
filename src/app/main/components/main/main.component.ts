import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';
import {DocumentService} from "../../../document-manager/services/document.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  primaryResponsibilities: number;
  tags: any;

  constructor(private auth: AuthService, private documentService: DocumentService) {
    this.primaryResponsibilities = 0;
  }

  ngOnInit() {
    this.documentService.getDocuments().subscribe((documents)=>{
      this.primaryResponsibilities = this.documentService.getMyPrimaryResponsabilities(this.auth.getUser()).length;
      this.tags = this.documentService.getTags();
    });
  }
}
