import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BaseLayoutComponent, BlankLayoutComponent, LoginComponent, AuthGuard} from './core';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: BaseLayoutComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'home',
        loadChildren: './main/main.module#MainModule'
      },
      {
        path: 'briefcase',
        loadChildren: './document-manager/document-manager.module#DocumentManagerModule'
      },
      {
        path: 'audit',
        loadChildren: './audit/audit.module#AuditModule'
      }
    ]
  },
  {
    path: 'security',
    component: BlankLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
