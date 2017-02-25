import {Component, OnInit, Input} from '@angular/core';
import {Notification} from "../../../shared/models/notification.model";

@Component({
  selector: 'app-notification-detail',
  templateUrl: 'notification-detail.component.html',
  styleUrls: ['notification-detail.component.scss']
})
export class NotificationDetailComponent implements OnInit {
  @Input('item') notification: Notification;
  constructor() { }

  ngOnInit() {
  }

}
