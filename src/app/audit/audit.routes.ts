import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListAuditComponent} from './components/list-audit/list-audit.component';
import {CreateAuditComponent} from './components/create-audit/create-audit.component';

const routes: Routes = [{
  path: '',
  component: ListAuditComponent
}, {
  path: 'create',
  component: CreateAuditComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuditRoutesModule {
}
