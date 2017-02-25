import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Layouts
import {BaseLayoutComponent} from './core/components/base-layout/base-layout.component';
import {BlankLayoutComponent} from './core/components/blank-layout/blank-layout.component';
import {LoginComponent} from './core/components/login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inbox',
    pathMatch: 'full',
  },
  {
    path: '',
    component: BaseLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'inbox',
        loadChildren: './inbox/inbox.module#InboxModule'
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
