import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {DropdownModule} from 'ng2-bootstrap';
import {FormsModule} from '@angular/forms';

import {BaseLayoutComponent} from './components/base-layout/base-layout.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {BlankLayoutComponent} from './components/blank-layout/blank-layout.component';
import {LoginComponent} from './components/login/login.component';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './guards/auth-guard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    DropdownModule.forRoot()
  ],
  declarations: [
    BaseLayoutComponent,
    NavigationComponent,
    BlankLayoutComponent,
    LoginComponent
  ],
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class CoreModule {
}
