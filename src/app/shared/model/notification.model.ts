export class Notification {
  constructor(private type: string, private title: string, private date?: Date) {
    this.date = new Date();
  }
}
