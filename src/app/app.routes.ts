import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Layouts
import {BaseLayoutComponent} from './core/components/base-layout/base-layout.component';
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
    children: [
      {
        path: 'home',
        loadChildren: './main/main.module#MainModule'
      },
      {
        path: 'briefcase',
        loadChildren: './document-manager/document-manager.module#DocumentManagerModule'
      }
      /*{
       path: 'components',
       loadChildren: './components/components.module#ComponentsModule'
       },
       {
       path: 'icons',
       loadChildren: './icons/icons.module#IconsModule'
       },
       {
       path: 'widgets',
       loadChildren: './widgets/widgets.module#WidgetsModule'
       },
       {
       path: 'charts',
       loadChildren: './chartjs/chartjs.module#ChartJSModule'
       }*/
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
