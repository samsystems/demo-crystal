import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InboxComponent} from './components/inbox/inbox.component';

const routes: Routes = [
  {path: '', component: InboxComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InboxRoutesModule {
}
