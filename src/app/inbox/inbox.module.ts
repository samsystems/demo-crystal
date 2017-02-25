import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InboxRoutesModule} from './inbox.routes';

import {InboxComponent} from './components/inbox/inbox.component';
import { NotificationListComponent } from './components/notification/notification-list/notification-list.component';
import { NotificationItemComponent } from './components/notification/notification-item/notification-item.component';
import { NotificationItemDetailComponent } from './components/notification/notification-item-detail/notification-item-detail.component';
import {NotificationService} from "./shared/services/notification.service";

@NgModule({
  imports: [
    CommonModule,
    InboxRoutesModule
  ],
  declarations: [InboxComponent, NotificationListComponent,NotificationItemComponent, NotificationItemDetailComponent],
  providers: [NotificationService]
})
export class InboxModule {
}
