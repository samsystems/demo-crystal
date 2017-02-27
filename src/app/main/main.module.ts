import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownModule, ModalModule, ButtonsModule} from 'ng2-bootstrap';
import {NgUploaderModule} from 'ngx-uploader';
import {FormsModule} from '@angular/forms';

import {MainRoutesModule} from './main.routes';
import {MainComponent} from './components/main/main.component';
import {InboxComponent} from './components/inbox/inbox.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    MainRoutesModule,
    DropdownModule.forRoot(),
    ModalModule.forRoot(),
    ButtonsModule.forRoot(),
    NgUploaderModule
  ],
  declarations: [MainComponent, InboxComponent]
})
export class MainModule {
}
