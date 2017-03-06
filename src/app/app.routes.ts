import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BaseLayoutComponent} from './core/components/base-layout/base-layout.component';
import {AuthGuard} from './core/guards/auth-guard';
import {BlankLayoutComponent} from './core/components/blank-layout/blank-layout.component';
import {LoginComponent} from './core/components/login/login.component';


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
        path: 'documents',
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
