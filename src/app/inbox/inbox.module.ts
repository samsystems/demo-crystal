import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InboxRoutesModule} from './inbox.routes';

import {InboxComponent} from './components/inbox/inbox.component';

@NgModule({
  imports: [
    CommonModule,
    InboxRoutesModule
  ],
  declarations: [InboxComponent]
})
export class InboxModule {
}
