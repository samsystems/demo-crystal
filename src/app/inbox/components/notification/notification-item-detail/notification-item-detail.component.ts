import {Component, OnInit, Input} from '@angular/core';
import {Notification} from "../../../shared/models/notification.model";

@Component({
  selector: 'app-notification-item-detail',
  templateUrl: './notification-item-detail.component.html',
  styleUrls: ['./notification-item-detail.component.css']
})
export class NotificationItemDetailComponent implements OnInit {
  @Input('item') notification: Notification;
  constructor() { }

  ngOnInit() {
  }

}
