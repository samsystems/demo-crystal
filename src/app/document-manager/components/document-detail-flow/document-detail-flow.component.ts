import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-document-detail-flow',
  templateUrl: 'document-detail-flow.component.html',
  styleUrls: ['document-detail-flow.component.css']
})
export class DocumentDetailFlowComponent implements OnInit {
  @Input() states: Array<Object>;

  constructor() {
  }

  ngOnInit() {
  }

}
