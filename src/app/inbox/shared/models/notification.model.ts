export const enum NotificationState {unread = 0, read = 1}

export class Notification {
  constructor(private type: string,
              private title: string,
              private content: string,
              private status?: NotificationState,
              private date?: Date) {
    this.date = new Date();
    this.status = NotificationState.unread;
  }
}


