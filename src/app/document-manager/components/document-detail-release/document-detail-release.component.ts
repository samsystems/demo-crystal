import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-document-detail-release',
  templateUrl: './document-detail-release.component.html',
  styleUrls: ['./document-detail-release.component.css']
})
export class DocumentDetailReleaseComponent implements OnInit {

  @Input() release: Object;

  constructor() { }

  ngOnInit() {
  }

}
