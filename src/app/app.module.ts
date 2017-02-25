import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app.routes';
import { BriefcaseComponent } from './briefcase/briefcase.component';

@NgModule({
  declarations: [
    AppComponent,
    BriefcaseComponent
  ],
  imports: [
    // Angular modules
    BrowserModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
