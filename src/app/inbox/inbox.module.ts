import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}   from '@angular/forms';
import {InboxRoutesModule} from './inbox.routes';

import {InboxComponent} from './components/inbox/inbox.component';
import { NotificationListComponent } from './components/notification/notification-list/notification-list.component';
import { NotificationItemComponent } from './components/notification/notification-item/notification-item.component';
import { NotificationDetailComponent } from './components/notification/notification-detail/notification-detail.component';
import { NotificationService } from "./shared/services/notification.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InboxRoutesModule
  ],
  declarations: [InboxComponent, NotificationListComponent,NotificationItemComponent, NotificationDetailComponent],
  providers: [NotificationService]
})
export class InboxModule {
}
