import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DocumentService} from "../../../services/document.service";

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit , OnDestroy{

  documents: any;
  sub:any;

  constructor(private documentService: DocumentService, private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.sub = this.route.queryParams.subscribe(params => {
      // Defaults to -1 if no query param provided.
      let status = +params['status'] || -1;

      this.documents = this.documentService.getDocumentsByStatus(status);

    });



  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
