import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app.routes';
import {AuditService} from './services/audit.service';
import {DocumentService} from './services/document.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [
    AuditService,
    DocumentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
