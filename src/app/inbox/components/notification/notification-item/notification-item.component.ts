import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Notification, NotificationState} from "../../../shared/models/notification.model";

@Component({
  selector: 'app-notification-item',
  templateUrl: 'notification-item.component.html',
  styleUrls: ['notification-item.component.css']
})
export class NotificationItemComponent implements OnInit {
  @Input('item') notification: Notification;
  @Output() selectItem = new EventEmitter<Notification>();

  constructor() {
  }

  ngOnInit() {
  }

  showDetails(): void {
    this.notification.setStatus(NotificationState.read);
    this.selectItem.emit(this.notification);
  }

}
