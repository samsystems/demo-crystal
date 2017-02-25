export const enum NotificationState {unread = 0, read = 1}

export class Notification {
  constructor(private type: string,
              private title: string,
              private content: string,
              private state?: NotificationState,
              private date?: Date) {
    this.date = new Date();
    this.state = NotificationState.unread;
  }

  getState(){
    return this.state;
  }
  setStatus(newState: NotificationState) {
    this.state = newState;
  }
}


