import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {BaseLayoutComponent} from './components/base-layout/base-layout.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {TopnavbarComponent} from './components/topnavbar/topnavbar.component';
import {BlankLayoutComponent} from './components/blank-layout/blank-layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    BaseLayoutComponent,
    NavigationComponent,
    TopnavbarComponent,
    BlankLayoutComponent
  ],
  exports: [
    BaseLayoutComponent,
    NavigationComponent,
    TopnavbarComponent,
    BlankLayoutComponent
  ]
})
export class CoreModule {
}
