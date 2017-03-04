import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  DropdownModule,
  ButtonsModule
} from 'ng2-bootstrap';
import {FormsModule} from '@angular/forms';

import {MainRoutesModule} from './main.routes';
import {MainComponent} from './components/main/main.component';
import {InboxComponent} from './components/inbox/inbox.component';
import { NotificationListComponent } from './components/notification/notification-list/notification-list.component';
import { NotificationItemComponent } from './components/notification/notification-item/notification-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MainRoutesModule,
    DropdownModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  declarations: [
    MainComponent,
    InboxComponent,
    NotificationListComponent,
    NotificationItemComponent
  ],
  providers: []
})
export class MainModule {
}
