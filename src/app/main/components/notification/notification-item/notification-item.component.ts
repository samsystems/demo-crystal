import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Document} from '../../../../models/document';

@Component({
  selector: 'app-notification-item',
  templateUrl: 'notification-item.component.html',
  styleUrls: ['notification-item.component.css']
})
export class NotificationItemComponent implements OnInit {
  @Input('item') document: Document;
  @Output() selectItem = new EventEmitter<Document>();

  selected: boolean;

  constructor() {
  }

  ngOnInit() {
    this.selected = false;
  }

  checkItem(){
    this.selected = !this.selected;
    this.selectItem.emit(this.document);
  }

}
