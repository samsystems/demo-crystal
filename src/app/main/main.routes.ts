import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {InboxComponent} from './components/inbox/inbox.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [{
      path: '',
      component: InboxComponent,
    }, {
      path: 'document',
      loadChildren: '../document-manager/document-manager.module#DocumentManagerModule'
    }, {
      path: 'audit',
      loadChildren: '../audit/audit.module#AuditModule'
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutesModule {
}
