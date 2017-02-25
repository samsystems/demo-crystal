import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Notification, NotificationState} from "../models/notification.model";

@Injectable()
export class NotificationService {

  private _notification: BehaviorSubject<Notification[]>;
  private dataStore: {
    notifications: Notification[]
  };

  constructor() {
    this.dataStore = {notifications: []};
    let data = [
      new Notification('Regulation', 'Company Correspondence', 'Its hard to say when our lives each of us become aware of this called "astronomy"'),
      new Notification('Notification', 'Newly Join Officers', '“This is, without a doubt, the coolest Sketch technique you\'ll see all day.”'),
      new Notification('Tenders', 'Another important Document', 'Join me and rocket League'),
      new Notification('', 'Office on Duty', ' Yes you can')
    ];
    this.dataStore.notifications = data;
    this._notification = new BehaviorSubject(this.dataStore.notifications);
  }

  getNotifications(): any {
    return this._notification.asObservable();
  }
}
