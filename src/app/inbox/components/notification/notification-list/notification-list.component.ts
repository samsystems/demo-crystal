import {Component, OnInit} from '@angular/core';
import {Notification} from "../../../shared/models/notification.model";
import {NotificationService} from "../../../shared/services/notification.service";

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit {
  notifications: Notification[];
  selectedNotification: Notification;

  constructor(private notificationServices: NotificationService) {
    this.selectedNotification = null;
  }

  ngOnInit() {
    this.notificationServices.getNotifications().subscribe((notifications) => {
        this.notifications = notifications
      }
    );
  }

  showDetails(notification: Notification) {
    this.selectedNotification = notification;
  }


}
