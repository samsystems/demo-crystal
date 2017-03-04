import {Component, OnInit, Input} from '@angular/core';
import {Document} from '../../../../models/document';

@Component({
  selector: 'app-notification-list',
  templateUrl: 'notification-list.component.html',
  styleUrls: ['notification-list.component.css']
})
export class NotificationListComponent implements OnInit {

  @Input('items') documents: Document[];
  constructor() { }

  ngOnInit() {
  }

  selectItem(item: Document) {
    // Todo Do somehting with selected item
    console.log("Selected Item", item)
  }
}
