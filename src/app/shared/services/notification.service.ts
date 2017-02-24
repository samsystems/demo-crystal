import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Notification } from "../model/notification.model";

@Injectable()
export class NotificationService {

  private _notification: BehaviorSubject<Notification[]>;
  private dataStore: {
    notifications: Notification[]
  };

  constructor() {

    this.dataStore = {notifications: []};
    let data = [
      new Notification('Warning', 'Notification #1'),
      new Notification('Information', 'Notification #1'),
      new Notification('Error', 'Notification #1'),
      new Notification('Success', 'Notification #1'),
    ];
    this.dataStore.notifications = data;
    this._notification = new BehaviorSubject(this.dataStore.notifications);
  }

  getNotifications(): any {
    return this._notification.asObservable();
  }

  addNotification(notification: Notification): void {
    this.dataStore.notifications.push(notification);
    this._notification.next(this.dataStore.notifications);
  }

}
