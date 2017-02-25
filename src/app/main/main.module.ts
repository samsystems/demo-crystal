import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainRoutesModule} from './main.routes';
import {MainComponent} from './components/main/main.component';
import {InboxComponent} from './components/inbox/inbox.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutesModule
  ],
  declarations: [MainComponent, InboxComponent]
})
export class MainModule {
}
